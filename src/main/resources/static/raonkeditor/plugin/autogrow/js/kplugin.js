(function(){try{var c={pluginName:"autogrow"};G_KPlugin.autogrow=c;c.onInit=function(){var a="../plugin/autogrow/js"+(KEDITORTOP.RAONKEDITOR.isRelease?"":"_dev")+"/config.js",a="1"==KEDITORTOP.G_CURRKEDITOR._config.useConfigTimeStamp?a+("?t="+KEDITORTOP.RAONKEDITOR.util.getTimeStamp()):a+("?t="+KEDITORTOP.RAONKEDITOR.UrlStamp),b=document.getElementsByTagName("head")[0],c=document.createElement("script");c.type="text/javascript";c.src=a;b.appendChild(c)};c.onLoaded=function(){"0"!=KEDITORTOP.G_CURRKEDITOR._config.autoGrowMode&&
(G_KPlugin.autogrow.autoGrowMode=KEDITORTOP.G_CURRKEDITOR._config.autoGrowMode);-1<KEDITORTOP.G_CURRKEDITOR._config.style.height.indexOf("%")&&(KEDITORTOP.G_CURRKEDITOR._config.autoGrowMode="0",G_KPlugin.autogrow.autoGrowMode="0");"2"==KEDITORTOP.G_CURRKEDITOR._config.ruler.mode&&(KEDITORTOP.G_CURRKEDITOR._config.autoGrowMode="0",G_KPlugin.autogrow.autoGrowMode="0");KEDITORTOP.RAONKEDITOR.browser.ie&&9>KEDITORTOP.RAONKEDITOR.browser.ieVersion&&(KEDITORTOP.G_CURRKEDITOR._config.autoGrowMode="0",G_KPlugin.autogrow.autoGrowMode=
"0");KEDITORTOP.KEDITORWIN!=top&&"1"==KEDITORTOP.G_CURRKEDITOR._config.autoGrowMode&&(KEDITORTOP.G_CURRKEDITOR._config.autoGrowMode="0",G_KPlugin.autogrow.autoGrowMode="0");"0"!=G_KPlugin.autogrow.autoGrowMode&&"0"!=KEDITORTOP.G_CURRKEDITOR._config.autoGrowMode&&(KEDITORTOP.G_CURRKEDITOR._config.useLineBreak="1",KEDITORTOP.G_CURRKEDITOR._config.wordWrapType="1",KEDITORTOP.G_CURRKEDITOR._config.resize_bar="0")};c.onChange=function(){c.autogrow(KEDITORTOP.G_CURRKEDITOR)};c.onCommand=function(){c.autogrow(KEDITORTOP.G_CURRKEDITOR)};
c.autogrow=function(a){if("0"!=G_KPlugin.autogrow.autoGrowMode&&void 0!=G_KPlugin.autogrow.autoGrowMode)if("full_size"==a.FrameStatus||"design"!=a._currentMode)a._DOC.documentElement.style.overflow="auto";else{var b=a._DOC.documentElement,c=a._BODY,e=KEDITORTOP.KEDITORDOC.documentElement,g=KEDITORTOP.KEDITORDOC.body;if(void 0==G_KPlugin.autogrow.configHeight||null==G_KPlugin.autogrow.configHeight||""==G_KPlugin.autogrow.configHeight)G_KPlugin.autogrow.configHeight=0>a._defaultHeight?parseInt(a._config.style.height,
10)-a._defaultHeight:parseInt(a._config.style.height,10),G_KPlugin.autogrow.initHeight=0<=a._defaultHeight?a._defaultHeight:0,b.style.overflowY="hidden",G_KPlugin.autogrow.initParentHeight=e.scrollHeight;else{b.style.overflowY="hidden";G_KPlugin.autogrow.previousParentTop=Math.max(e.scrollTop,g.scrollTop);setHeight(G_KPlugin.autogrow.configHeight,a);var f=Math.max(b.scrollHeight,c.scrollHeight),d;if(G_KPlugin.autogrow.initHeight<f){d=0==G_KPlugin.autogrow.initHeight?G_KPlugin.autogrow.configHeight+
(f-a._defaultHeight):G_KPlugin.autogrow.configHeight+(f-G_KPlugin.autogrow.initHeight);setHeight(d,a);try{b.scrollHeight>b.clientHeight?(d+=b.scrollHeight-b.clientHeight+1,setHeight(d,a)):c.scrollHeight>c.clientHeight&&(d+=c.scrollHeight-c.clientHeight+1,setHeight(d,a))}catch(l){KEDITORTOP&&KEDITORTOP.RAONKEDITOR&&KEDITORTOP.RAONKEDITOR.logMode&&window&&window.console&&console.log(l)}}else setHeight(G_KPlugin.autogrow.configHeight,a);G_KPlugin.autogrow.currHeight=f-G_KPlugin.autogrow.initHeight;G_KPlugin.autogrow.diffHeight=
G_KPlugin.autogrow.currHeight-G_KPlugin.autogrow.preHeight;G_KPlugin.autogrow.preHeight=f-G_KPlugin.autogrow.initHeight;2!=G_KPlugin.autogrow.autoGrowMode&&(e.scrollTop=G_KPlugin.autogrow.previousParentTop+(e.scrollHeight-G_KPlugin.autogrow.initParentHeight),g.scrollTop=G_KPlugin.autogrow.previousParentTop+(e.scrollHeight-G_KPlugin.autogrow.initParentHeight),G_KPlugin.autogrow.previousParentTop=Math.max(e.scrollTop,g.scrollTop),G_KPlugin.autogrow.initParentHeight=e.scrollHeight);if(2==G_KPlugin.autogrow.autoGrowMode)try{"function"===
typeof KEDITORTOP.KEDITORWIN.RAONKEDITOR_AutoGrowEvent&&KEDITORTOP.KEDITORWIN.RAONKEDITOR_AutoGrowEvent(a,{diffHeight:G_KPlugin.autogrow.diffHeight})}catch(m){KEDITORTOP&&KEDITORTOP.RAONKEDITOR&&KEDITORTOP.RAONKEDITOR.logMode&&window&&window.console&&console.log(m)}}}};c.onInit()}catch(b){KEDITORTOP&&KEDITORTOP.RAONKEDITOR&&KEDITORTOP.RAONKEDITOR.logMode&&window&&window.console&&console.log(b)}})();
function setHeight(c,b){var a=b.ID;b=KEDITORTOP.RAONKEDITOR.util._setEditor(a);if(void 0==a||""==a)a=b.ID;var h=KEDITORTOP.KEDITORDOC.getElementById("raonk_frame_holder"+a),a=KEDITORTOP.KEDITORDOC.getElementById("raonk_frame_"+a).contentWindow.document.getElementById("ue_editor_holder_"+a),k=0,k=b.baseMenuToolbarHeight;isViewMode(b)?b._defaultHeight=parseInt(c,10)-4:b._defaultHeight=parseInt(c,10)-k;-1<c.toString().indexOf("%")||-1<c.toString().indexOf("px")?h.style.height=c:h.style.height=c+"px";
a.style.height=b._defaultHeight+"px";1==G_KPlugin.autogrow.autoGrowMode&&(b._config.style.height=c+"px","1"==b._config.ruler.view&&"design"==b._currentMode&&b._FRAMEWIN.showRuler(b),"1"==b._config.autoBodyFit&&(b._BODY.style.minHeight=(b._defaultHeight-parseIntOr0(b._config.defaultBodySpace.value))/b._defaultHeight*100+"%"))};