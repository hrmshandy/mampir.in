tinymce.PluginManager.add('autolists', function(editor) {
    editor.on('keypress', function(e) {
        if(e.keyCode = 32) {
            var selection = tinymce.activeEditor.selection.getNode();
            var list_start = selection.textContent;

            if (list_start == "1."){
                selection.textContent = selection.textContent.slice(2).trim();
                editor.execCommand('InsertOrderedList');
            }
            else if( list_start == "*"){
                selection.textContent = selection.textContent.slice(1).trim();
                editor.execCommand('InsertUnorderedList');
            }
        }
    })
});