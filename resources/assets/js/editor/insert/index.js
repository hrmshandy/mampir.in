import MediumEditor from 'medium-editor'

const Insert = MediumEditor.Extension.extend({
    name: 'insert',

    init() {
        this.editor = this.getEditorElements();

        this.addNewToolbars();
    },

    addNewToolbars() {
        const toolbar = document.querySelector('.medium-editor-toolbar');
        const toolbarActions = document.querySelector('.medium-editor-toolbar-actions');
        const newToolbarActions = document.createElement('div');

        console.log(toolbar);

        newToolbarActions.classList.add('c-editor-toolbar-extensions');

        //toolbar.insertBefore(newToolbarActions, toolbarActions)
    }
});

export default Insert;