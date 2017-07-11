const docElem = window.document.documentElement,
		support = { animations : Modernizr.cssanimations },
		animEndEventNames = {
			'WebkitAnimation' : 'webkitAnimationEnd',
			'OAnimation' : 'oAnimationEnd',
			'msAnimation' : 'MSAnimationEnd',
			'animation' : 'animationend'
		},
		// animation end event name
		animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ];

class Notification
{
	constructor(options) {
		this.options = Object.assign({}, Notification.defaults, options);
		this._init();
	}

	_init() {
        // create HTML structure
        this.ntf = document.createElement( 'div' );
        this.ntf.className = `ns-box ns-other ns-effect-loadingcircle ns-type-${this.options.type}`;
        let strinner = '<div class="ns-box-inner">';
        strinner += this.options.message;
        strinner += '</div>';
        strinner += '<span class="ns-close"></span></div>';
        this.ntf.innerHTML = strinner;

        // append to body or the element specified in options.wrapper
        this.options.wrapper.insertBefore(this.ntf, this.options.wrapper.firstChild);

        // dismiss after [options.ttl]ms
        const self = this;
        this.dismissttl = setTimeout( () => {
            if( self.active ) {
                self.dismiss();
            }
        }, this.options.ttl );

        // init events
        this._initEvents();
    }

    _initEvents() {
        const self = this;
        // dismiss notification
        this.ntf.querySelector( '.ns-close' ).addEventListener('click', () => { self.dismiss(); });
    }

    show() {
        this.active = true;
        this.ntf.classList.remove('ns-hide');
        this.ntf.classList.add('ns-show');
        this.options.onOpen();
    }

    dismiss() {
        const self = this;
        this.active = false;
        clearTimeout(this.dismissttl);
        this.ntf.classList.remove('ns-show');
        setTimeout(() => {
            self.ntf.classList.add('ns-hide');

            // callback
            self.options.onClose();
        }, 25);

        // after animation ends remove ntf from the DOM
        const onEndAnimationFn = function(ev) {
            if( support.animations ) {
                if( ev.target !== self.ntf ) return false;
                this.removeEventListener(animEndEventName, onEndAnimationFn);
            }
            self.options.wrapper.removeChild(this);
        };

        if( support.animations ) {
            this.ntf.addEventListener(animEndEventName, onEndAnimationFn);
        }
        else {
            onEndAnimationFn();
        }
    }
}

Notification.defaults = {
	wrapper : document.body,
	message : 'yo!',
	layout : 'growl',
	type : 'error',
	ttl : 6000,
	// callbacks
	onClose() { return false; },
	onOpen() { return false; }
}

export default Notification;