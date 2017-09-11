tinymce.ThemeManager.add('inbox', function (editor) {
    var self = this
    var settings = editor.settings
    var Factory = tinymce.ui.Factory
    var each = tinymce.each
    var DOM = tinymce.DOM
    var Rect = tinymce.geom.Rect
    var FloatPanel = tinymce.ui.FloatPanel

    // Default menus
    var defaultMenus = {}
    var defaultToolbar = ''

    function createToolbar (items, size) {
        var toolbarItems = []
        var buttonGroup

        if (!items) {
            return
        }

        each(items.split(/[ ,]/), function (item) {
            var itemName

            function bindSelectorChanged () {
                var selection = editor.selection

                function setActiveItem (name) {
                    return function (state, args) {
                        var nodeName
                        var i = args.parents.length

                        while (i--) {
                            nodeName = args.parents[i].nodeName
                            if (nodeName === 'OL' || nodeName === 'UL') {
                                break
                            }
                        }

                        item.active(state && nodeName === name)
                    }
                }

                if (itemName === 'bullist') {
                    selection.selectorChanged('ul > li', setActiveItem('UL'))
                }

                if (itemName === 'numlist') {
                    selection.selectorChanged('ol > li', setActiveItem('OL'))
                }

                if (item.settings.stateSelector) {
                    selection.selectorChanged(item.settings.stateSelector, function (state) {
                        item.active(state)
                    }, true)
                }

                if (item.settings.disabledStateSelector) {
                    selection.selectorChanged(item.settings.disabledStateSelector, function (state) {
                        item.disabled(state)
                    })
                }
            }

            if (item === '|') {
                buttonGroup = null
            } else {
                if (Factory.has(item)) {
                    item = {type: item, size: size}
                    toolbarItems.push(item)
                    buttonGroup = null
                } else {
                    if (!buttonGroup) {
                        buttonGroup = {type: 'buttongroup', items: []}
                        toolbarItems.push(buttonGroup)
                    }

                    if (editor.buttons[item]) {
                        // TODO: Move control creation to some UI class
                        itemName = item
                        item = editor.buttons[itemName]

                        if (typeof item === 'function') {
                            item = item()
                        }

                        item.type = item.type || 'button'
                        item.size = size

                        item = Factory.create(item)
                        buttonGroup.items.push(item)

                        if (editor.initialized) {
                            bindSelectorChanged()
                        } else {
                            editor.on('init', bindSelectorChanged)
                        }
                    }
                }
            }
        })

        return {
            type: 'toolbar',
            layout: 'flow',
            items: toolbarItems
        }
    }

    /**
     * Creates the toolbars from config and returns a toolbar array.
     *
     * @param {String} size Optional toolbar item size.
     * @return {Array} Array with toolbars.
     */
    function createToolbars (size) {
        var toolbars = []

        function addToolbar (items) {
            if (items) {
                toolbars.push(createToolbar(items, size))
                return true
            }
        }

        // Convert toolbar array to multiple options
        if (tinymce.isArray(settings.toolbar)) {
            // Empty toolbar array is the same as a disabled toolbar
            if (settings.toolbar.length === 0) {
                return
            }

            tinymce.each(settings.toolbar, function (toolbar, i) {
                settings['toolbar' + (i + 1)] = toolbar
            })

            delete settings.toolbar
        }

        // Generate toolbar<n>
        for (var i = 1; i < 10; i++) {
            if (!addToolbar(settings['toolbar' + i])) {
                break
            }
        }

        // Generate toolbar or default toolbar unless it's disabled
        if (!toolbars.length && settings.toolbar !== false) {
            addToolbar(settings.toolbar || defaultToolbar)
        }

        if (toolbars.length) {
            return {
                type: 'panel',
                layout: 'stack',
                classes: 'toolbar-grp',
                ariaRoot: true,
                ariaRemember: true,
                items: toolbars
            }
        }
    }

    /**
     * Creates the menu buttons based on config.
     *
     * @return {Array} Menu buttons array.
     */
    function createMenuButtons () {
        var name
        var menuButtons = []

        function createMenuItem (name) {
            var menuItem

            if (name === '|') {
                return {text: '|'}
            }

            menuItem = editor.menuItems[name]

            return menuItem
        }

        function createMenu (context) {
            var menuButton, menu, menuItems, isUserDefined, removedMenuItems

            removedMenuItems = tinymce.makeMap((settings.removed_menuitems || '').split(/[ ,]/))

            // User defined menu
            if (settings.menu) {
                menu = settings.menu[context]
                isUserDefined = true
            } else {
                menu = defaultMenus[context]
            }

            if (menu) {
                menuButton = {text: menu.title}
                menuItems = []

                // Default/user defined items
                each((menu.items || '').split(/[ ,]/), function (item) {
                    var menuItem = createMenuItem(item)

                    if (menuItem && !removedMenuItems[item]) {
                        menuItems.push(createMenuItem(item))
                    }
                })

                // Added though context
                if (!isUserDefined) {
                    each(editor.menuItems, function (menuItem) {
                        if (menuItem.context === context) {
                            if (menuItem.separator === 'before') {
                                menuItems.push({text: '|'})
                            }

                            if (menuItem.prependToContext) {
                                menuItems.unshift(menuItem)
                            } else {
                                menuItems.push(menuItem)
                            }

                            if (menuItem.separator === 'after') {
                                menuItems.push({text: '|'})
                            }
                        }
                    })
                }

                for (var i = 0; i < menuItems.length; i++) {
                    if (menuItems[i].text === '|') {
                        if (i === 0 || i === menuItems.length - 1) {
                            menuItems.splice(i, 1)
                        }
                    }
                }

                menuButton.menu = menuItems

                if (!menuButton.menu.length) {
                    return null
                }
            }

            return menuButton
        }

        var defaultMenuBar = []
        if (settings.menu) {
            for (name in settings.menu) {
                defaultMenuBar.push(name)
            }
        } else {
            for (name in defaultMenus) {
                defaultMenuBar.push(name)
            }
        }

        var enabledMenuNames = typeof settings.menubar === 'string' ? settings.menubar.split(/[ ,]/) : defaultMenuBar
        for (var i = 0; i < enabledMenuNames.length; i++) {
            var menu = enabledMenuNames[i]
            menu = createMenu(menu)

            if (menu) {
                menuButtons.push(menu)
            }
        }

        return menuButtons
    }

    /**
     * Adds accessibility shortcut keys to panel.
     *
     * @param {tinymce.ui.Panel} panel Panel to add focus to.
     */
    function addAccessibilityKeys (panel) {
        function focus (type) {
            var item = panel.find(type)[0]

            if (item) {
                item.focus(true)
            }
        }

        editor.shortcuts.add('Alt+F9', '', function () {
            focus('menubar')
        })

        editor.shortcuts.add('Alt+F10', '', function () {
            focus('toolbar')
        })

        editor.shortcuts.add('Alt+F11', '', function () {
            focus('elementpath')
        })

        panel.on('cancel', function () {
            editor.focus()
        })
    }

    /**
     * Resizes the editor to the specified width, height.
     */
    function resizeTo (width, height) {
        var containerElm, iframeElm, containerSize, iframeSize

        function getSize (elm) {
            return {
                width: elm.clientWidth,
                height: elm.clientHeight
            }
        }

        containerElm = editor.getContainer()
        iframeElm = editor.getContentAreaContainer().firstChild
        containerSize = getSize(containerElm)
        iframeSize = getSize(iframeElm)

        if (width !== null) {
            width = Math.max(settings.min_width || 100, width)
            width = Math.min(settings.max_width || 0xFFFF, width)

            DOM.setStyle(containerElm, 'width', width + (containerSize.width - iframeSize.width))
            DOM.setStyle(iframeElm, 'width', width)
        }

        height = Math.max(settings.min_height || 100, height)
        height = Math.min(settings.max_height || 0xFFFF, height)
        DOM.setStyle(iframeElm, 'height', height)

        editor.fire('ResizeEditor')
    }

    function resizeBy (dw, dh) {
        var elm = editor.getContentAreaContainer()
        self.resizeTo(elm.clientWidth + dw, elm.clientHeight + dh)
    }

    /**
     * Handles contextual toolbars.
     */
    function addContextualToolbars () {
        var scrollContainer

        function getContextToolbars () {
            return editor.contextToolbars || []
        }

        function getElementRect (elm) {
            var pos, targetRect, root

            pos = tinymce.DOM.getPos(editor.getContentAreaContainer())
            targetRect = editor.dom.getRect(elm)
            root = editor.dom.getRoot()

            // Adjust targetPos for scrolling in the editor
            if (root.nodeName === 'BODY') {
                targetRect.x -= root.ownerDocument.documentElement.scrollLeft || root.scrollLeft
                targetRect.y -= root.ownerDocument.documentElement.scrollTop || root.scrollTop
            }

            targetRect.x += pos.x
            targetRect.y += pos.y

            return targetRect
        }

        function hideAllFloatingPanels () {
            each(editor.contextToolbars, function (toolbar) {
                if (toolbar.panel) {
                    toolbar.panel.hide()
                }
            })
        }

        function togglePositionClass (panel, relPos, predicate) {
            relPos = relPos ? relPos.substr(0, 2) : ''

            each({
                t: 'down',
                b: 'up'
            }, function (cls, pos) {
                panel.classes.toggle('arrow-' + cls, predicate(pos, relPos.substr(0, 1)))
            })

            each({
                l: 'left',
                r: 'right'
            }, function (cls, pos) {
                panel.classes.toggle('arrow-' + cls, predicate(pos, relPos.substr(1, 1)))
            })
        }

        function toClientRect (geomRect) {
            return {
                left: geomRect.x,
                top: geomRect.y,
                width: geomRect.w,
                height: geomRect.h,
                right: geomRect.x + geomRect.w,
                bottom: geomRect.y + geomRect.h
            }
        }

        function userConstrain (x, y, elementRect, contentAreaRect, panelRect) {
            panelRect = toClientRect({x: x, y: y, w: panelRect.w, h: panelRect.h})

            if (settings.inline_toolbar_position_handler) {
                panelRect = settings.inline_toolbar_position_handler({
                    elementRect: toClientRect(elementRect),
                    contentAreaRect: toClientRect(contentAreaRect),
                    panelRect: panelRect
                })
            }

            return panelRect
        }

        function movePanelTo (panel, pos) {
            panel.moveTo(pos.left, pos.top)
        }

        function reposition (match) {
            var relPos
            var panelRect
            var elementRect
            var contentAreaRect
            var panel
            var relRect
            var testPositions
            var smallElementWidthThreshold

            if (editor.removed) {
                return
            }

            if (!match || !match.toolbar.panel) {
                hideAllFloatingPanels()
                return
            }

            testPositions = [
                'bc-tc', 'tc-bc',
                'tl-bl', 'bl-tl',
                'tr-br', 'br-tr'
            ]

            panel = match.toolbar.panel
            panel.show()

            elementRect = getElementRect(match.element)
            panelRect = tinymce.DOM.getRect(panel.getEl())
            contentAreaRect = tinymce.DOM.getRect(editor.getContentAreaContainer() || editor.getBody())
            smallElementWidthThreshold = 25

            // We need to use these instead of the rect values since the style
            // size properites might not be the same as the real size for a table
            elementRect.w = match.element.clientWidth
            elementRect.h = match.element.clientHeight

            if (!editor.inline) {
                contentAreaRect.w = editor.getDoc().documentElement.offsetWidth
            }

            // Inflate the elementRect so it doesn't get placed above resize handles
            if (editor.selection.controlSelection.isResizable(match.element) && elementRect.w < smallElementWidthThreshold) {
                elementRect = Rect.inflate(elementRect, 0, 8)
            }

            relPos = Rect.findBestRelativePosition(panelRect, elementRect, contentAreaRect, testPositions)
            elementRect = Rect.clamp(elementRect, contentAreaRect)

            if (relPos) {
                relRect = Rect.relativePosition(panelRect, elementRect, relPos)
                movePanelTo(panel, userConstrain(relRect.x, relRect.y, elementRect, contentAreaRect, panelRect))
            } else {
                // Allow overflow below the editor to avoid placing toolbars ontop of tables
                contentAreaRect.h += panelRect.h

                elementRect = Rect.intersect(contentAreaRect, elementRect)
                if (elementRect) {
                    relPos = Rect.findBestRelativePosition(panelRect, elementRect, contentAreaRect, [
                        'bc-tc', 'bl-tl', 'br-tr'
                    ])

                    if (relPos) {
                        relRect = Rect.relativePosition(panelRect, elementRect, relPos)
                        movePanelTo(panel, userConstrain(relRect.x, relRect.y, elementRect, contentAreaRect, panelRect))
                    } else {
                        movePanelTo(panel, userConstrain(elementRect.x, elementRect.y, elementRect, contentAreaRect, panelRect))
                    }
                } else {
                    panel.hide()
                }
            }

            togglePositionClass(panel, relPos, function (pos1, pos2) {
                return pos1 === pos2
            })
        }

        function repositionHandler () {
            function execute () {
                if (editor.selection) {
                    reposition(findFrontMostMatch(editor.selection.getNode()))
                }
            }

            tinymce.util.Delay.requestAnimationFrame(execute)
        }

        function bindScrollEvent () {
            if (!scrollContainer) {
                scrollContainer = editor.selection.getScrollContainer() || editor.getWin()
                tinymce.$(scrollContainer).on('scroll', repositionHandler)

                editor.on('remove', function () {
                    tinymce.$(scrollContainer).off('scroll')
                })
            }
        }

        function showContextToolbar (match) {
            var panel

            if (match.toolbar.panel) {
                match.toolbar.panel.show()
                reposition(match)
                return
            }

            bindScrollEvent()

            panel = Factory.create({
                type: 'floatpanel',
                role: 'dialog',
                classes: 'tinymce tinymce-inline arrow',
                ariaLabel: 'Inline toolbar',
                layout: 'flex',
                direction: 'column',
                align: 'stretch',
                autohide: false,
                autofix: true,
                fixed: true,
                border: 1,
                items: createToolbar(match.toolbar.items),
                oncancel: function () {
                    editor.focus()
                }
            })

            match.toolbar.panel = panel
            panel.renderTo(document.body).reflow()
            reposition(match)
        }

        function hideAllContextToolbars () {
            tinymce.each(getContextToolbars(), function (toolbar) {
                if (toolbar.panel) {
                    toolbar.panel.hide()
                }
            })
        }

        function findFrontMostMatch (targetElm) {
            var i
            var y
            var parentsAndSelf
            var toolbars = getContextToolbars()

            parentsAndSelf = editor.$(targetElm).parents().add(targetElm)
            for (i = parentsAndSelf.length - 1; i >= 0; i--) {
                for (y = toolbars.length - 1; y >= 0; y--) {
                    if (toolbars[y].predicate(parentsAndSelf[i])) {
                        return {
                            toolbar: toolbars[y],
                            element: parentsAndSelf[i]
                        }
                    }
                }
            }

            return null
        }

        editor.on('click keyup setContent', function (e) {
            // Only act on partial inserts
            if (e.type === 'setcontent' && !e.selection) {
                return
            }

            // Needs to be delayed to avoid Chrome img focus out bug
            tinymce.util.Delay.setEditorTimeout(editor, function () {
                var match

                match = findFrontMostMatch(editor.selection.getNode())
                if (match) {
                    hideAllContextToolbars()
                    showContextToolbar(match)
                } else {
                    hideAllContextToolbars()
                }
            })
        })

        editor.on('blur hide', hideAllContextToolbars)

        editor.on('ObjectResizeStart', function () {
            var match = findFrontMostMatch(editor.selection.getNode())

            if (match && match.toolbar.panel) {
                match.toolbar.panel.hide()
            }
        })

        editor.on('nodeChange ResizeEditor ResizeWindow', repositionHandler)

        editor.on('remove', function () {
            tinymce.each(getContextToolbars(), function (toolbar) {
                if (toolbar.panel) {
                    toolbar.panel.remove()
                }
            })

            editor.contextToolbars = {}
        })

        editor.shortcuts.add('ctrl+shift+e > ctrl+shift+p', '', function () {
            var match = findFrontMostMatch(editor.selection.getNode())
            if (match && match.toolbar.panel) {
                match.toolbar.panel.items()[0].focus()
            }
        })
    }

    /**
     * Renders the inline editor UI.
     *
     * @return {Object} Name/value object with theme data.
     */
    function renderInlineUI (args) {
        var panel, inlineToolbarContainer

        if (settings.fixed_toolbar_container) {
            inlineToolbarContainer = DOM.select(settings.fixed_toolbar_container)[0]
        }

        function reposition () {
            if (panel && panel.moveRel && panel.visible() && !panel._fixed) {
                // TODO: This is kind of ugly and doesn't handle multiple scrollable elements
                var scrollContainer = editor.selection.getScrollContainer()
                var body = editor.getBody()
                var deltaX = 0
                var deltaY = 0

                if (scrollContainer) {
                    var bodyPos = DOM.getPos(body)
                    var scrollContainerPos = DOM.getPos(scrollContainer)

                    deltaX = Math.max(0, scrollContainerPos.x - bodyPos.x)
                    deltaY = Math.max(0, scrollContainerPos.y - bodyPos.y)
                }

                panel.fixed(false).moveRel(body, editor.rtl ? ['tr-br', 'br-tr'] : ['tl-bl', 'bl-tl', 'tr-br']).moveBy(deltaX, deltaY)
            }
        }

        function show () {
            if (panel) {
                panel.show()
                reposition()
                DOM.addClass(editor.getBody(), 'mce-edit-focus')
            }
        }

        function hide () {
            if (panel) {
                // We require two events as the inline float panel based toolbar does not have autohide=true
                panel.hide()

                // All other autohidden float panels will be closed below.
                FloatPanel.hideAll()

                DOM.removeClass(editor.getBody(), 'mce-edit-focus')
            }
        }

        function render () {
            if (panel) {
                if (!panel.visible()) {
                    show()
                }

                return
            }

            // Render a plain panel inside the inlineToolbarContainer if it's defined
            panel = self.panel = Factory.create({
                type: inlineToolbarContainer ? 'panel' : 'floatpanel',
                role: 'application',
                classes: 'tinymce tinymce-inline',
                layout: 'flex',
                direction: 'column',
                align: 'stretch',
                autohide: false,
                autofix: true,
                fixed: !!inlineToolbarContainer,
                border: 1,
                items: [
                    settings.menubar === false ? null : {type: 'menubar', border: '0 0 1 0', items: createMenuButtons()},
                    createToolbars(settings.toolbar_items_size)
                ]
            })

            editor.fire('BeforeRenderUI')
            panel.renderTo(inlineToolbarContainer).reflow()

            addAccessibilityKeys(panel)
            show()
            addContextualToolbars()

            editor.on('nodeChange', reposition)
            editor.on('activate', show)
            editor.on('deactivate', hide)

            editor.nodeChanged()
        }

        settings.content_editable = true

        editor.on('focus', function () {
            // Render only when the CSS file has been loaded
            if (args.skinUiCss) {
                DOM.styleSheetLoader.load(args.skinUiCss, render, render);
            } else {
                render();
            }
        });

        editor.on('init', render)
        editor.on('blur hide', hide)

        // Remove the panel when the editor is removed
        editor.on('remove', function () {
            if (panel) {
                panel.remove()
                panel = null
            }
        })

        // Preload skin css
        if (args.skinUiCss) {
            DOM.styleSheetLoader.load(args.skinUiCss);
        }

        return {}
    }

    /**
     * Renders the UI for the theme. This gets called by the editor.
     *
     * @param {Object} args Details about target element etc.
     * @return {Object} Theme UI data items.
     */
    self.renderUI = function (args) {

        var settings = editor.settings;
        var skin = settings.skin !== false ? settings.skin || 'lightgray' : false;

        if (skin) {
            var skinUrl = settings.skin_url;

            if (skinUrl) {
                skinUrl = editor.documentBaseURI.toAbsolute(skinUrl);
            } else {
                skinUrl = tinymce.EditorManager.baseURL + '/skins/' + skin;
            }

            args.skinUiCss = skinUrl + '/skin.min.css';

            // Load content.min.css or content.inline.min.css
            editor.contentCSS.push(skinUrl + '/content' + (editor.inline ? '.inline' : '') + '.min.css');
        }

        // Handle editor setProgressState change
        editor.on('ProgressState', function (e) {
            self.throbber = self.throbber || new tinymce.ui.Throbber(self.panel.getEl('body'))

            if (e.state) {
                self.throbber.show(e.time)
            } else {
                self.throbber.hide()
            }
        })

        return renderInlineUI(args)
    }

    self.resizeTo = resizeTo
    self.resizeBy = resizeBy
})