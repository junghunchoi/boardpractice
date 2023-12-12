var scriptList = [
  '/js/editor/PracEditor-basic_style/src/button.js',
  '/js/editor/PracEditor-font/src/font.js',
  '/js/editor/PracEditor-core/src/selection.js',
  '/js/editor/PracEditor-core/src/praceditor.js',
];
  
  function loadScriptsSequentially(scripts, index) {
    if (index < scripts.length) {
        var script = document.createElement('script');
        script.src = scripts[index];
        script.onload = function() {
            loadScriptsSequentially(scripts, index + 1);
        };
        document.body.appendChild(script);
    }
}

loadScriptsSequentially(scriptList, 0);