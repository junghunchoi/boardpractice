(function(){try{var c={pluginName:"popuppreview"};G_KPlugin.popuppreview=c;c.onClickToolIcon=function(a){_k_editor._BODY.contentEditable=!1;var d=_k_editor._FRAMEWIN;d.ReplaceImageToRealObject();a=_k_editor._DOC.documentElement.outerHTML;d.ReplaceRealObjectToImage();_k_editor._BODY.contentEditable=!0;void 0!=_k_editor._PageProp.doctype&&0<_k_editor._docType[_k_editor._PageProp.doctype].length&&(a=_k_editor._docType[_k_editor._PageProp.doctype]+a);var d=640,c=420,h=80;try{d=Math.round(.8*screen.width),
c=Math.round(.7*screen.height),h=Math.round(.1*screen.width)}catch(g){KEDITORTOP&&KEDITORTOP.RAONKEDITOR&&KEDITORTOP.RAONKEDITOR.logMode&&window&&window.console&&console.log(g)}var f="",b;KEDITORTOP.RAONKEDITOR.browser.ie&&12>KEDITORTOP.RAONKEDITOR.browser.ieVersion&&(window._rke_pewviewHtml=a,b="javascript:void( (function(){document.open();"+(KEDITORTOP.RAONKEDITOR.browser.isCustomDomain()?'document.domain="'+document.domain+'";':"")+"document.write( window.opener._rke_pewviewHtml );document.close();window.opener._rke_pewviewHtml = null;})() )",
f="");KEDITORTOP.RAONKEDITOR.browser.gecko&&(window._rke_pewviewHtml=a,f=_k_editor._config.webPath.plugin+"popuppreview/editor_popup_preview.html");var e=window.open(f,null,"toolbar=yes,location=no,status=yes,menubar=yes,scrollbars=yes,resizable=yes,width="+d+",height="+c+",left="+h);KEDITORTOP.RAONKEDITOR.browser.ie&&e&&(e.location=b,window.setTimeout(function(){e.focus()},500));KEDITORTOP.RAONKEDITOR.browser.ie&&12>KEDITORTOP.RAONKEDITOR.browser.ieVersion||KEDITORTOP.RAONKEDITOR.browser.gecko||
(b=e.document,b.open(),b.write(a),b.close())}}catch(g){KEDITORTOP&&KEDITORTOP.RAONKEDITOR&&KEDITORTOP.RAONKEDITOR.logMode&&window&&window.console&&console.log(g)}})();