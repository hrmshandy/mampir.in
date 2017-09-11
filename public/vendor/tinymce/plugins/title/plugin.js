tinymce.PluginManager.add('title', function(editor) {
    editor.addButton('title', {
        icon: 'title',
        tooltip: "Title",
        onclick: function() {
            editor.execCommand('FormatBlock', false, 'h1');
        }
    });

    editor.addButton('subtitle', {
        icon: 'subtitle',
        tooltip: "Subtitle",
        onclick: function() {
            editor.execCommand('FormatBlock', false, 'h3');
        }
    });
});