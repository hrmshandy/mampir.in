class Toolbar
{
    constructor(editor) {
        this.editor = editor;
        this.placeholder = document.createElement('div');
        this.placeholder.classList.add('toolbar-placeholder');
        this.toolbar = document.querySelector('.medium-editor-toolbar');
        this.toolbarClone;
        this.hideTimer;

        this.calculatePlaceholderPosition(true);

        this.events();

        document.body.appendChild(this.placeholder);
    }

    calculatePlaceholderPosition(animate) {
        const scaleFactor = window.innerWidth >= 768 ? 1.2 : 0.9;
        const scaledHeight = this.toolbar.offsetHeight * scaleFactor;

        this.toolbar.classList.add('placeholder');
        this.placeholder.style.height = scaledHeight + 'px';
        this.toolbar.style.top = this.placeholder.offsetTop + 'px';
        this.toolbar.style.left = ((window.innerWidth/2) - (this.toolbar.offsetWidth/2)) + 'px';

        if (!this.toolbarClone) {
            this.toolbarClone = this.toolbar.cloneNode(true);
            this.toolbarClone.id = '';
            this.toolbarClone.classList.add('toolbar-placeholder-clone');
            this.toolbarClone.classList.remove('fade-in');
        }

        this.toolbarClone.style.top = this.toolbar.style.top;
        this.toolbarClone.style.left = this.toolbar.style.left;
        this.toolbarClone.style.height = this.toolbar.style.height;

        this.placeholder.innerHTML = '';
        this.placeholder.appendChild(this.toolbarClone);

        if (animate) {
            this.toolbar.classList.add('fade-in');
        }
    }

    events() {
        this.editor.subscribe('showToolbar', () => {
            clearTimeout(this.hideTimer);
            this.toolbar.classList.remove('placeholder');
        });

        this.editor.subscribe('hideToolbar', () => {
            clearTimeout(this.hideTimer);

            this.hideTimer = setTimeout( () => {
                this.calculatePlaceholderPosition();
                this.toolbar.classList.add('placeholder');
            }, 300);
        });

        window.addEventListener('resize', this.calculatePlaceholderPosition);
    }
}

export default Toolbar;