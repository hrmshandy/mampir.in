class SVGEl
{
	constructor(el){
		this.el = el;
		// the path elements
		this.paths = [].slice.call( this.el.querySelectorAll( 'path' ) );
		// we will save both paths and its lengths in arrays
		this.pathsArr = new Array();
		this.lengthsArr = new Array();
		this._init();
	}

	_init() {
		var self = this;
		this.paths.forEach( function( path, i ) {
			self.pathsArr[i] = path;
			path.style.strokeDasharray = self.lengthsArr[i] = path.getTotalLength();
		} );
		// undraw stroke
		this.draw(0);
	}

	draw( val ) {
		for( var i = 0, len = this.pathsArr.length; i < len; ++i ){
			this.pathsArr[ i ].style.strokeDashoffset = this.lengthsArr[ i ] * ( 1 - val );
		}
	}
}

export default SVGEl;