<template>
	<nav ref="menu" class="context-menu">
	    <ul class="context-menu__items">
	      	<slot></slot>
	    </ul>
	</nav>
</template>

<script>
export default {
	data(){
		return {
			contextMenuClassName: "context-menu",
			contextMenuItemClassName: "context-menu__item",
			contextMenuLinkClassName: "context-menu__link",
			contextMenuActive: "context-menu--active",

			itemClassName: "file",
			itemInContext: null,

			clickCoords: null,
			clickCoordsX: null,
			clickCoordsY: null,

			//menu: this.$refs.contextMenu,
			//menuItems: this.menu.querySelectorAll(".context-menu__item"),
			menuState: 0,
			menuWidth: null,
			menuHeight: null,
			menuPosition: null,
			menuPositionX: null,
			menuPositionY: null,

			windowWidth: null,
			windowHeight: null,
		}
	},

	ready(){
		this
			.contextListener()
    		.clickListener()
    		.keyupListener()
    		.resizeListener();
	},

	methods: {
		clickInsideElement( e, className ) {
		    var el = e.srcElement || e.target;

		    if ( el.classList.contains(className) ) {
		      return el;
		    } else {
		      while ( el = el.parentNode ) {
		        if ( el.classList && el.classList.contains(className) ) {
		          return el;
		        }
		      }
		    }

		    return false;
		},
		getPosition(e) {
		    var posx = 0;
		    var posy = 0;

		    if (!e) var e = window.event;

		    if (e.pageX || e.pageY) {
		      posx = e.pageX;
		      posy = e.pageY;
		    } else if (e.clientX || e.clientY) {
		      posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
		      posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
		    }

		    return {
		      x: posx,
		      y: posy
		    }
		},
		contextListener() {
			document.addEventListener( "contextmenu", function(e) {
				this.itemInContext = this.clickInsideElement( e, this.itemClassName );

				if ( this.itemInContext ) {
					e.preventDefault();

					this.$dispatch('onContextMenu', this.itemInContext);
					this.toggleMenuOn();
					this.positionMenu(e);
				} else {
					this.itemInContext = null;
					this.toggleMenuOff();
				}
			}.bind(this));

			return this;
		},
		clickListener() {
			document.addEventListener( "click", function(e) {
				var clickeElIsLink = this.clickInsideElement( e, this.contextMenuLinkClassName );

				if ( clickeElIsLink ) {
					e.preventDefault();
					this.menuItemListener( clickeElIsLink );
				} else {
					var button = e.which || e.button;
					if ( button === 1 ) {
						this.toggleMenuOff();
					}
				}
			}.bind(this));

			return this;
		},
		keyupListener() {
			window.onkeyup = function(e) {
				if ( e.keyCode === 27 ) {
					this.toggleMenuOff();
				}
			}.bind(this);

			return this;
		},
		resizeListener() {
		    window.onresize = function(e) {
		      	this.toggleMenuOff();
		    }.bind(this);

			return this;
		},
		toggleMenuOn() {
		    if ( this.menuState !== 1 ) {
		      	this.menuState = 1;
		      	this.$refs.menu.classList.add( this.contextMenuActive );
		    }

		    return this;
		},
		toggleMenuOff() {
		    if ( this.menuState !== 0 ) {
		      	this.menuState = 0;
		      	this.$refs.menu.classList.remove( this.contextMenuActive );
		    }

		    return this;
		},
		positionMenu(e) {
			var menu = this.$refs.menu;

			this.clickCoords = this.getPosition(e);
			this.clickCoordsX = this.clickCoords.x;
			this.clickCoordsY = this.clickCoords.y;

			this.menuWidth = menu.offsetWidth + 4;
			this.menuHeight = menu.offsetHeight + 4;

			this.windowWidth = window.innerWidth;
			this.windowHeight = window.innerHeight;

			if ( (this.windowWidth - this.clickCoordsX) < this.menuWidth ) {
				menu.style.left = this.clickCoordsX - this.menuWidth + "px";
			} else {
				menu.style.left = this.clickCoordsX + "px";
			}

			console.log('a: '+(this.windowHeight - this.clickCoordsY), 'b: '+this.menuHeight, 'c: '+this.clickCoordsY);

			if ( (this.windowHeight - this.clickCoordsY) < this.menuHeight ) {
				menu.style.top = this.clickCoordsY - this.menuHeight + "px";
			} else {
				menu.style.top = this.clickCoordsY + "px";
			}

			return this;
		},
		menuItemListener( link ) {
			var action = link.getAttribute("data-action"),
				item = this.itemInContext;
			this.$dispatch(action, item);

		    console.log( "Task ID - " + this.itemInContext.getAttribute("data-id") + ", Task action - " + link.getAttribute("data-action"));
		    this.toggleMenuOff();

		    return this;
		}
	},
	events: {
		toggleMenuOn(){
			this.toggleMenuOn();
		},
		toggleMenuOff(){
			this.toggleMenuOff();
		}
	}
}
</script>