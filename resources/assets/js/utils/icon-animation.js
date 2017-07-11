import bodymovin from 'bodymovin'

const startAnimationIndex = 0
const halfAnimationIndex = 13
const endAnimationIndex = 27

// --------- Iconim Item ---------- //

class IconimItem {
    constructor(element, token, options, baseURL) {

        // props
        this.token = token
        this.state = 0

        // eslint-disable-next-line no-undef
        this.anim = bodymovin.loadAnimation({
            container: element,
            renderer: 'svg',
            loop: false,
            autoplay: false,
            path: baseURL + token + '.json'
        })

        if (options.click) {
            element.addEventListener('click', this.toggle.bind(this))
        }
        if (options.hover) {
            element.addEventListener('pointerenter', this.toggle.bind(this))
            element.addEventListener('pointerleave', this.toggle.bind(this))
        }
    }

    on() {
        this.anim.playSegments([startAnimationIndex, halfAnimationIndex], true)
        this.state = 1
    }

    off() {
        this.anim.playSegments([halfAnimationIndex + 1, endAnimationIndex], true)
        this.state = 0
    }

    play() {
        this.anim.playSegments([startAnimationIndex, endAnimationIndex], true)
        this.state = 0
    }

    toggle() {
        if (this.state === 0) {
            this.on()
        } else {
            this.off()
        }
    }
}

// --------- Iconim Library ---------- //

class Iconim
{
    constructor(options) {

        this.icons = []
        this.isInitialized = false

        const defaultOptions = {
            baseURL: '/icons/',
            hover: false,
            click: false
        }

        this.options = Object.assign({}, defaultOptions, options)

        this.init();
    }

    init() {
        const baseURL = this.options.baseURL

        document.addEventListener('DOMContentLoaded', () => {
            const elements = document.getElementsByClassName('iconim')
            let i = elements.length

            while (i) {
                const element = elements[--i]
                const match = element.className.match(/iconim-([^\s]+)/)
                if (match && match.length && match[1]) {
                    this.icons.unshift(new IconimItem(element, match[1], this.options, baseURL))
                }
            }

            this.isInitialized = true
        })
    }

    on(token) {
        this._applyMethod(token, 'on')
    }

    off(token) {
        this._applyMethod(token, 'off')
    }

    play(token) {
        this._applyMethod(token, 'play')
    }

    _findItem(token) {
        if (!this.isInitialized) {
            return
        }
        for (var i = this.icons.length - 1; i >= 0; i--) {
            if (this.icons[i].token === token) {
                return this.icons[i]
            }
        }
    }

    _applyMethod (itemToken, methodToken) {
        let item = this._findItem(itemToken)
        if (item && typeof item[methodToken] === 'function') {
            item[methodToken]()
        }
    }


}

export default Iconim