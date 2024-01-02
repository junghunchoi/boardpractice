/*
 GNU Lesser General Public License, http://www.gnu.org/copyleft/lesser.html
 @author  Jan Odvarko, http://odvarko.cz
 @created 2008-06-15
 @updated 2013-04-08
 @link    http://jscolor.com
*/
Array.prototype.indexOf||(Array.prototype.indexOf=function(c,d){d=d||0;for(var a=this.length;d<a;){if(this[d]===c)return d;++d}return-1});
var jscolor={dir:"../images/editor/jscolor/",bindClass:"color",binding:!0,preloading:!0,clickedElem:null,styleColor:"",actionType:"",excuteFn:null,install:function(){jscolor.addEvent(window,"load",jscolor.init)},init:function(){jscolor.binding&&jscolor.bind();jscolor.preloading&&jscolor.preload()},getDir:function(){if(!jscolor.dir){var c=jscolor.detectDir();jscolor.dir=!1!==c?c:"jscolor/"}return jscolor.dir},detectDir:function(){for(var c=location.href,d=document.getElementsByTagName("base"),a=0;a<
d.length;a+=1)d[a].href&&(c=d[a].href);d=document.getElementsByTagName("script");for(a=0;a<d.length;a+=1)if(d[a].src&&/(^|\/)jscolor\.js([?#].*)?$/i.test(d[a].src))return c=(new jscolor.URI(d[a].src)).toAbsolute(c),c.path=c.path.replace(/[^\/]+$/,""),c.query=null,c.fragment=null,c.toString();return!1},bind:function(){for(var c=new RegExp("(^|\\s)("+jscolor.bindClass+")\\s*(\\{[^}]*\\})?","i"),d=document.getElementsByTagName("div"),a=0;a<d.length;a+=1){var n;if(!d[a].color&&d[a].className&&(n=d[a].className.match(c))){var v=
{};if(n[3])try{v=(new Function("return ("+n[3]+")"))()}catch(z){KEDITORTOP&&KEDITORTOP.RAONKEDITOR&&KEDITORTOP.RAONKEDITOR.logMode&&console.log(z)}d[a].color=new jscolor.color(d[a],v)}}},preload:function(){for(var c in jscolor.imgRequire)jscolor.imgRequire.hasOwnProperty(c)&&jscolor.loadImage(c)},images:{pad:[130,81],sld:[15,81],cross:[20,20],arrow:[3,0]},imgRequire:{},imgLoaded:{},requireImage:function(c){jscolor.imgRequire[c]=!0},loadImage:function(c){jscolor.imgLoaded[c]||(jscolor.imgLoaded[c]=
new Image,jscolor.imgLoaded[c].src=(void 0!=parent.KEDITORTOP?parent.KEDITORTOP:parent.KEDITORWIN.KEDITORTOP).G_CURRKEDITOR._config.webPath.image+"jscolor/"+c)},fetchElement:function(c){return"string"===typeof c?document.getElementById(c):c},addEvent:function(c,d,a){c.addEventListener?c.addEventListener(d,a,!1):c.attachEvent&&c.attachEvent("on"+d,a)},fireEvent:function(c,d){if(c)if(document.createEvent){var a=document.createEvent("HTMLEvents");a.initEvent(d,!0,!0);c.dispatchEvent(a)}else if(document.createEventObject)document.createEventObject();
else if(c["on"+d])c["on"+d]()},getElementPos:function(c){var d=c,a=0,n=0;if(d.offsetParent){do a+=d.offsetLeft,n+=d.offsetTop;while(d=d.offsetParent)}for(;(c=c.parentNode)&&"BODY"!==c.nodeName.toUpperCase();)a-=c.scrollLeft,n-=c.scrollTop;return[a,n]},getElementSize:function(c){return[c.offsetWidth,c.offsetHeight]},getRelMousePos:function(c){var d=0,a=0;c||(c=window.event);"number"===typeof c.offsetX?(d=c.offsetX,a=c.offsetY):"number"===typeof c.layerX&&(d=c.layerX,a=c.layerY);return{x:d,y:a}},getViewPos:function(){return"number"===
typeof window.pageYOffset?[window.pageXOffset,window.pageYOffset]:document.body&&(document.body.scrollLeft||document.body.scrollTop)?[document.body.scrollLeft,document.body.scrollTop]:document.documentElement&&(document.documentElement.scrollLeft||document.documentElement.scrollTop)?[document.documentElement.scrollLeft,document.documentElement.scrollTop]:[0,0]},getViewSize:function(){return"number"===typeof window.innerWidth?[window.innerWidth,window.innerHeight]:document.documentElement&&(document.documentElement.clientWidth||
document.documentElement.clientHeight)?[document.documentElement.clientWidth,document.documentElement.clientHeight]:document.body&&(document.body.clientWidth||document.body.clientHeight)?[document.body.clientWidth,document.body.clientHeight]:[0,0]},URI:function(c){function d(a){for(var c="";a;)if("../"===a.substr(0,3)||"./"===a.substr(0,2))a=a.replace(/^\.+/,"").substr(1);else if("/./"===a.substr(0,3)||"/."===a)a="/"+a.substr(3);else if("/../"===a.substr(0,4)||"/.."===a)a="/"+a.substr(4),c=c.replace(/\/?[^\/]*$/,
"");else if("."===a||".."===a)a="";else{var d=a.match(/^\/?[^\/]*/)[0];a=a.substr(d.length);c+=d}return c}this.authority=this.scheme=null;this.path="";this.fragment=this.query=null;this.parse=function(a){a=a.match(/^(([A-Za-z][0-9A-Za-z+.-]*)(:))?((\/\/)([^\/?#]*))?([^?#]*)((\?)([^#]*))?((#)(.*))?/);this.scheme=a[3]?a[2]:null;this.authority=a[5]?a[6]:null;this.path=a[7];this.query=a[9]?a[10]:null;this.fragment=a[12]?a[13]:null;return this};this.toString=function(){var a="";null!==this.scheme&&(a=
a+this.scheme+":");null!==this.authority&&(a=a+"//"+this.authority);null!==this.path&&(a+=this.path);null!==this.query&&(a=a+"?"+this.query);null!==this.fragment&&(a=a+"#"+this.fragment);return a};this.toAbsolute=function(a){a=new jscolor.URI(a);var c=new jscolor.URI;if(null===a.scheme)return!1;null!==this.scheme&&this.scheme.toLowerCase()===a.scheme.toLowerCase()&&(this.scheme=null);null!==this.scheme?(c.scheme=this.scheme,c.authority=this.authority,c.path=d(this.path),c.query=this.query):(null!==
this.authority?(c.authority=this.authority,c.path=d(this.path),c.query=this.query):(""===this.path?(c.path=a.path,c.query=null!==this.query?this.query:a.query):("/"===this.path.substr(0,1)?c.path=d(this.path):(c.path=null!==a.authority&&""===a.path?"/"+this.path:a.path.replace(/[^\/]+$/,"")+this.path,c.path=d(c.path)),c.query=this.query),c.authority=a.authority),c.scheme=a.scheme);c.fragment=this.fragment;return c};c&&this.parse(c)},color:function(c,d,a,n,v,z,H){function A(g,a,c){if(null===g)return[c,
c,c];var e=Math.floor(g),f=c*(1-a);g=c*(1-a*(e%2?g-e:1-(g-e)));switch(e){case 6:case 0:return[c,g,f];case 1:return[g,c,f];case 2:return[f,c,g];case 3:return[f,g,c];case 4:return[g,f,c];case 5:return[c,f,g]}}function L(g,c){if(!jscolor.picker){jscolor.picker={box:document.createElement("div"),boxB:document.createElement("div"),pad:document.createElement("div"),padB:document.createElement("div"),padM:document.createElement("div"),sld:document.createElement("div"),sldB:document.createElement("div"),
sldM:document.createElement("div"),btn:document.createElement("div"),boxC:document.createElement("div"),boxHEX:document.createElement("span"),boxRGB:document.createElement("span"),btnS:document.createElement("span"),btnT:document.createTextNode(e.pickerCloseText),select:document.createElement("select"),option1:document.createElement("option"),option2:document.createElement("option"),btnOk:document.createElement("input"),btnCancle:document.createElement("input"),label:document.createElement("label"),
labelR:document.createElement("label"),labelG:document.createElement("label"),labelB:document.createElement("label"),lbColor:document.createElement("input"),lbColor2:document.createElement("input"),lbColorR:document.createElement("input"),lbColorG:document.createElement("input"),lbColorB:document.createElement("input"),inbottom:document.createElement("div"),bottom:document.createElement("div")};for(var a=0;a<jscolor.images.sld[1];a+=4){var d=document.createElement("div");d.style.height="4px";d.style.fontSize=
"1px";d.style.lineHeight="0";jscolor.picker.sld.appendChild(d)}jscolor.picker.sldB.appendChild(jscolor.picker.sld);jscolor.picker.box.appendChild(jscolor.picker.sldB);jscolor.picker.box.appendChild(jscolor.picker.sldM);jscolor.picker.padB.appendChild(jscolor.picker.pad);jscolor.picker.box.appendChild(jscolor.picker.padB);jscolor.picker.box.appendChild(jscolor.picker.padM);jscolor.picker.btnS.appendChild(jscolor.picker.btnT);jscolor.picker.btn.appendChild(jscolor.picker.btnS);jscolor.picker.box.appendChild(jscolor.picker.btn);
jscolor.picker.boxB.appendChild(jscolor.picker.box);jscolor.picker.boxC.style.margin="0 0 5px 0";jscolor.picker.boxC.style.padding="0";jscolor.picker.boxC.style.textAlign="left";jscolor.picker.boxC.style.marginBottom="5px";jscolor.picker.lbColor2.setAttribute("type","text");jscolor.picker.lbColor2.setAttribute("id","cp_lb_color2");jscolor.picker.lbColor2.setAttribute("disabled","disabled");jscolor.picker.lbColor2.style.border="solid 1px #c5c5c5";jscolor.picker.lbColor2.style.width="33px";jscolor.picker.lbColor2.style.backgroundColor=
"#ffffff";var f=void 0!=parent.KEDITORTOP?parent.KEDITORTOP:parent.KEDITORWIN.KEDITORTOP,a=19;f.RAONKEDITOR.browser.ie&&9>=f.RAONKEDITOR.browser.ieVersion&&!f.RAONKEDITOR.browser.quirks&&(a=15);jscolor.picker.lbColor2.style.height=a+"px";jscolor.picker.lbColor2.style.marginLeft="-1px";jscolor.picker.boxHEX.style.display="inline-block";jscolor.picker.boxHEX.style.margin="0";jscolor.picker.boxHEX.style.padding="0";jscolor.picker.label.innerText="#";jscolor.picker.label.style.marginLeft="1px";jscolor.picker.label.style.color=
"#5d5d5d";jscolor.picker.label.style.fontFamily="Tahoma,AppleGothic,sans-serif !important";jscolor.picker.label.style.fontSize="13px";jscolor.picker.lbColor.setAttribute("type","text");jscolor.picker.lbColor.setAttribute("id","cp_lb_color");jscolor.picker.lbColor.style.border="solid 1px #c5c5c5";jscolor.picker.lbColor.style.color="#5d5d5d";jscolor.picker.lbColor.style.fontFamily="Tahoma,AppleGothic,sans-serif !important";jscolor.picker.lbColor.style.fontSize="13px";jscolor.picker.lbColor.style.width=
f.RAONKEDITOR.browser.ie&&9>=f.RAONKEDITOR.browser.ieVersion&&!f.RAONKEDITOR.browser.quirks?"98px":f.RAONKEDITOR.browser.chrome?"108px":"107px";jscolor.picker.lbColor.style.height=a+"px";jscolor.picker.lbColor.style.imeMode="disabled";jscolor.picker.lbColor.maxLength="6";f.RAONKEDITOR.util.addEvent(jscolor.picker.lbColor,"keyup",function(b){try{jscolor.picker.lbColor2.style.backgroundColor="#"+jscolor.picker.lbColor.value}catch(a){jscolor.picker.lbColor2.style.backgroundColor="#ffffff"}});jscolor.picker.boxHEX.appendChild(jscolor.picker.label);
jscolor.picker.boxHEX.appendChild(jscolor.picker.lbColor);var d="30px",h="3px";f.RAONKEDITOR.browser.ie&&9>=f.RAONKEDITOR.browser.ieVersion&&!f.RAONKEDITOR.browser.quirks?(d="25.5px",h=""):f.RAONKEDITOR.browser.chrome&&(d="29.5px");jscolor.picker.labelR.innerText="R";jscolor.picker.labelR.style.color="#5d5d5d";jscolor.picker.labelR.style.fontFamily="Tahoma,AppleGothic,sans-serif !important";jscolor.picker.labelR.style.fontSize="13px";jscolor.picker.labelR.style.marginLeft=h;jscolor.picker.lbColorR.setAttribute("type",
"text");jscolor.picker.lbColorR.setAttribute("id","cp_lb_color_r");jscolor.picker.lbColorR.style.border="solid 1px #c5c5c5";jscolor.picker.lbColorR.style.width=d;jscolor.picker.lbColorR.style.height=a+"px";jscolor.picker.lbColorR.style.color="#5d5d5d";jscolor.picker.lbColorR.style.fontFamily="Tahoma,AppleGothic,sans-serif !important";jscolor.picker.lbColorR.style.fontSize="13px";jscolor.picker.lbColorR.style.imeMode="disabled";jscolor.picker.lbColorR.maxLength="3";f.RAONKEDITOR.util.addEvent(jscolor.picker.lbColorR,
"keypress",function(b){var a=b.keyCode?b.keyCode:b.which;(48>a||57<a)&&f.RAONKEDITOR.util.cancelEvent(b)});f.RAONKEDITOR.util.addEvent(jscolor.picker.lbColorR,"keyup",function(b){17==(b.keyCode?b.keyCode:b.which)&&(ctrlDown=!1);0>jscolor.picker.lbColorR.value?jscolor.picker.lbColorR.value=0:255<jscolor.picker.lbColorR.value?jscolor.picker.lbColorR.value=255:"0"!=jscolor.picker.lbColorR.value&&0==jscolor.picker.lbColorR.value.indexOf("0")&&(jscolor.picker.lbColorR.value=jscolor.picker.lbColorR.value.replace("0",
""));try{jscolor.picker.lbColor2.style.backgroundColor="rgb("+jscolor.picker.lbColorR.value+", "+jscolor.picker.lbColorG.value+", "+jscolor.picker.lbColorB.value+")"}catch(a){jscolor.picker.lbColor2.style.backgroundColor="rgb(255,255,255)"}});jscolor.picker.labelG.innerText="G";jscolor.picker.labelG.style.color="#5d5d5d";jscolor.picker.labelG.style.fontFamily="Tahoma,AppleGothic,sans-serif !important";jscolor.picker.labelG.style.fontSize="13px";jscolor.picker.lbColorG.setAttribute("type","text");
jscolor.picker.lbColorG.setAttribute("id","cp_lb_color_g");jscolor.picker.lbColorG.style.border="solid 1px #c5c5c5";jscolor.picker.lbColorG.style.width=d;jscolor.picker.lbColorG.style.height=a+"px";jscolor.picker.lbColorG.style.color="#5d5d5d";jscolor.picker.lbColorG.style.fontFamily="Tahoma,AppleGothic,sans-serif !important";jscolor.picker.lbColorG.style.fontSize="13px";jscolor.picker.lbColorG.style.imeMode="disabled";jscolor.picker.lbColorG.maxLength="3";f.RAONKEDITOR.util.addEvent(jscolor.picker.lbColorG,
"keypress",function(b){var a=b.keyCode?b.keyCode:b.which;(48>a||57<a)&&f.RAONKEDITOR.util.cancelEvent(b)});f.RAONKEDITOR.util.addEvent(jscolor.picker.lbColorG,"keyup",function(b){0>jscolor.picker.lbColorG.value?jscolor.picker.lbColorG.value=0:255<jscolor.picker.lbColorG.value?jscolor.picker.lbColorG.value=255:"0"!=jscolor.picker.lbColorG.value&&0==jscolor.picker.lbColorG.value.indexOf("0")&&(jscolor.picker.lbColorG.value=jscolor.picker.lbColorG.value.replace("0",""));try{jscolor.picker.lbColor2.style.backgroundColor=
"rgb("+jscolor.picker.lbColorR.value+", "+jscolor.picker.lbColorG.value+", "+jscolor.picker.lbColorB.value+")"}catch(a){jscolor.picker.lbColor2.style.backgroundColor="rgb(255,255,255)"}});jscolor.picker.labelB.innerText="B";jscolor.picker.labelB.style.color="#5d5d5d";jscolor.picker.labelB.style.fontFamily="Tahoma,AppleGothic,sans-serif !important";jscolor.picker.labelB.style.fontSize="13px";jscolor.picker.lbColorB.setAttribute("type","text");jscolor.picker.lbColorB.setAttribute("id","cp_lb_color_b");
jscolor.picker.lbColorB.style.border="solid 1px #c5c5c5";jscolor.picker.lbColorB.style.width=d;jscolor.picker.lbColorB.style.height=a+"px";jscolor.picker.lbColorB.style.color="#5d5d5d";jscolor.picker.lbColorB.style.fontFamily="Tahoma,AppleGothic,sans-serif !important";jscolor.picker.lbColorB.style.fontSize="13px";jscolor.picker.lbColorB.style.imeMode="disabled";jscolor.picker.lbColorB.maxLength="3";f.RAONKEDITOR.util.addEvent(jscolor.picker.lbColorB,"keypress",function(b){var a=b.keyCode?b.keyCode:
b.which;(48>a||57<a)&&f.RAONKEDITOR.util.cancelEvent(b)});f.RAONKEDITOR.util.addEvent(jscolor.picker.lbColorB,"keyup",function(b){17==(b.keyCode?b.keyCode:b.which)&&(ctrlDown=!1);0>jscolor.picker.lbColorB.value?jscolor.picker.lbColorB.value=0:255<jscolor.picker.lbColorB.value?jscolor.picker.lbColorB.value=255:"0"!=jscolor.picker.lbColorB.value&&0==jscolor.picker.lbColorB.value.indexOf("0")&&(jscolor.picker.lbColorB.value=jscolor.picker.lbColorB.value.replace("0",""));try{jscolor.picker.lbColor2.style.backgroundColor=
"rgb("+jscolor.picker.lbColorR.value+", "+jscolor.picker.lbColorG.value+", "+jscolor.picker.lbColorB.value+")"}catch(a){jscolor.picker.lbColor2.style.backgroundColor="rgb(255,255,255)"}});jscolor.picker.boxRGB.style.margin="0";jscolor.picker.boxRGB.style.padding="0";jscolor.picker.boxRGB.appendChild(jscolor.picker.labelR);jscolor.picker.boxRGB.appendChild(jscolor.picker.lbColorR);jscolor.picker.boxRGB.appendChild(jscolor.picker.labelG);jscolor.picker.boxRGB.appendChild(jscolor.picker.lbColorG);jscolor.picker.boxRGB.appendChild(jscolor.picker.labelB);
jscolor.picker.boxRGB.appendChild(jscolor.picker.lbColorB);jscolor.picker.select.name="colorValue";jscolor.picker.select.id="colorValue";jscolor.picker.select.style.border="1px solid #c5c5c5";jscolor.picker.select.style.color="#5d5d5d";jscolor.picker.select.style.fontFamily="Tahoma,AppleGothic,sans-serif !important";jscolor.picker.select.style.fontSize="13px";"0"==f.G_CURRKEDITOR._config.colorPickerInputKind?(jscolor.picker.option1.value="hex",jscolor.picker.option1.innerText="HEX",jscolor.picker.option2.value=
"rgb",jscolor.picker.option2.innerText="RGB"):"1"==f.G_CURRKEDITOR._config.colorPickerInputKind&&(jscolor.picker.option1.value="rgb",jscolor.picker.option1.innerText="RGB",jscolor.picker.option2.value="hex",jscolor.picker.option2.innerText="HEX");jscolor.picker.select.appendChild(jscolor.picker.option1);jscolor.picker.select.appendChild(jscolor.picker.option2);jscolor.picker.btnOk.setAttribute("type","button");jscolor.picker.btnOk.setAttribute("id","cp_btn_ok");jscolor.picker.btnOk.setAttribute("value",
f.G_CURRKEDITOR._FRAMEWIN.RAONKEditor_lang.color_picker.ok);jscolor.picker.btnOk.style.width="42px";jscolor.picker.btnOk.style.color="#5d5d5d";jscolor.picker.btnOk.className="K_EdiTor_font";jscolor.picker.btnOk.style.fontSize="13px";jscolor.picker.btnCancle.setAttribute("type","button");jscolor.picker.btnCancle.setAttribute("id","cp_btn_cancle");jscolor.picker.btnCancle.setAttribute("value",f.G_CURRKEDITOR._FRAMEWIN.RAONKEditor_lang.color_picker.close);if(a=0==f.RAONKEDITOR.UserAgent.os.name.toLowerCase().indexOf("mac")&&
"safari"==f.RAONKEDITOR.UserAgent.browser.name.toLowerCase())jscolor.picker.btnOk.style.height="24px";f.RAONKEDITOR.browser.mobile||a?(jscolor.picker.btnCancle.style.width="40px",a&&(jscolor.picker.btnCancle.style.height="24px")):jscolor.picker.btnCancle.style.width=f.RAONKEDITOR.browser.ie?"54px":"51px";jscolor.picker.btnCancle.style.color="#5d5d5d";jscolor.picker.btnCancle.className="K_EdiTor_font";jscolor.picker.btnCancle.style.fontSize="13px";jscolor.picker.boxC.appendChild(jscolor.picker.lbColor2);
"0"==f.G_CURRKEDITOR._config.colorPickerInputKind?jscolor.picker.boxC.appendChild(jscolor.picker.boxHEX):"1"==f.G_CURRKEDITOR._config.colorPickerInputKind&&jscolor.picker.boxC.appendChild(jscolor.picker.boxRGB);jscolor.picker.bottom.appendChild(jscolor.picker.boxC);jscolor.picker.select.onchange=function(){"hex"==jscolor.picker.select.value?(jscolor.picker.lbColor.value="",jscolor.picker.lbColor2.style.backgroundColor="#ffffff",jscolor.picker.boxC.removeChild(jscolor.picker.boxRGB),jscolor.picker.boxHEX.style.display=
"inline-block",jscolor.picker.boxC.appendChild(jscolor.picker.boxHEX),jscolor.picker.lbColor.focus()):"rgb"==jscolor.picker.select.value&&(jscolor.picker.lbColorR.value="",jscolor.picker.lbColorG.value="",jscolor.picker.lbColorB.value="",jscolor.picker.lbColor2.style.backgroundColor="#ffffff",jscolor.picker.boxC.removeChild(jscolor.picker.boxHEX),jscolor.picker.boxRGB.style.display="inline-block",jscolor.picker.boxC.appendChild(jscolor.picker.boxRGB),jscolor.picker.lbColorR.focus())};jscolor.picker.inbottom.appendChild(jscolor.picker.select);
jscolor.picker.inbottom.appendChild(jscolor.picker.btnOk);jscolor.picker.inbottom.appendChild(jscolor.picker.btnCancle);jscolor.picker.bottom.appendChild(jscolor.picker.inbottom);jscolor.picker.boxB.appendChild(jscolor.picker.bottom);jscolor.picker.boxB.setAttribute("id","color_picker")}void 0==f&&(f=void 0!=parent.KEDITORTOP?parent.KEDITORTOP:parent.KEDITORWIN.KEDITORTOP);var b=jscolor.picker;b.box.onmouseup=b.box.onmousedown=function(){w=!0};b.box.onmousemove=function(b){if(p||q)p&&B(b),q&&C(b),
document.selection?document.selection.empty():window.getSelection&&window.getSelection().removeAllRanges(),x()};"ontouchstart"in window&&b.box.addEventListener("touchmove",function(b){var a={offsetX:b.touches[0].pageX-r.X,offsetY:b.touches[0].pageY-r.Y};if(p||q)p&&B(a),q&&C(a),x();b.stopPropagation();b.preventDefault()},!1);b.padM.onmouseup=b.padM.onmouseout=function(){p&&(p=!1,jscolor.fireEvent(k,"change"))};b.padM.onmousedown=function(b){switch(t){case 0:0===e.hsv[2]&&e.fromHSV(null,null,1);break;
case 1:0===e.hsv[1]&&e.fromHSV(null,1,null)}q=!1;p=!0;B(b);x()};"ontouchstart"in window&&b.padM.addEventListener("touchstart",function(b){r={X:b.target.offsetParent.offsetLeft,Y:b.target.offsetParent.offsetTop};this.onmousedown({offsetX:b.touches[0].pageX-r.X,offsetY:b.touches[0].pageY-r.Y})});b.sldM.onmouseup=b.sldM.onmouseout=function(){q&&(q=!1,jscolor.fireEvent(k,"change"))};b.sldM.onmousedown=function(b){p=!1;q=!0;C(b);x()};"ontouchstart"in window&&b.sldM.addEventListener("touchstart",function(b){r=
{X:b.target.offsetParent.offsetLeft,Y:b.target.offsetParent.offsetTop};this.onmousedown({offsetX:b.touches[0].pageX-r.X,offsetY:b.touches[0].pageY-r.Y})});a=I(e);b.box.style.width=a[0]+"px";b.box.style.height=a[1]+"px";b.boxB.style.position="absolute";b.boxB.style.clear="both";b.boxB.style.left=g-6+"px";d=parent.document.getElementById("editor_popup_row_property");h=parent.document.getElementById("editor_popup_column_property");d||h?(a={left:0,top:0,right:0,bottom:0},d&&(a=d.getBoundingClientRect()),
h&&(a=h.getBoundingClientRect()),d=parseInt(a.bottom,10)-parseInt(a.top,10),h=parseInt(b.box.style.height.replace("px",""))+43,a=document.getElementById("color_ul").getBoundingClientRect(),parseInt(a.bottom,10)-parseInt(a.top,10)<h&&(h+=44),b.boxB.style.top=d-h-13+"px"):b.boxB.style.top=c+2+"px";b.boxB.style.zIndex=e.pickerZIndex;b.boxB.style.border=e.pickerBorder+"px solid";b.boxB.style.borderColor=e.pickerBorderColor;b.boxB.style.background=e.pickerFaceColor;b.pad.style.width=jscolor.images.pad[0]+
"px";b.pad.style.height=jscolor.images.pad[1]+"px";b.padB.style.position="absolute";b.padB.style.left=e.pickerFace+"px";b.padB.style.top=e.pickerFace+"px";b.padB.style.border=e.pickerInset+"px solid";b.padB.style.borderColor=e.pickerInsetColor;b.padM.style.position="absolute";b.padM.style.left="0";b.padM.style.top="0";b.padM.style.width=e.pickerFace+2*e.pickerInset+jscolor.images.pad[0]+"px";b.padM.style.height=b.box.style.height;b.padM.style.cursor="crosshair";b.sld.style.overflow="hidden";b.sld.style.width=
jscolor.images.sld[0]+"px";b.sld.style.height=jscolor.images.sld[1]+"px";b.sldB.style.display=e.slider?"block":"none";b.sldB.style.position="absolute";b.sldB.style.right=e.pickerFace+"px";b.sldB.style.top=e.pickerFace+"px";b.sldB.style.border=e.pickerInset+"px solid";b.sldB.style.borderColor=e.pickerInsetColor;b.sldM.style.display=e.slider?"block":"none";b.sldM.style.position="absolute";b.sldM.style.right="3px";b.sldM.style.top="0";b.sldM.style.width=jscolor.images.sld[0]+jscolor.images.arrow[0]+
2*e.pickerInset+"px";b.sldM.style.height=b.box.style.height;try{b.sldM.style.cursor="pointer"}catch(l){b.sldM.style.cursor="hand"}a=function(a){a=a?a:window.event;if(13==a.keyCode)return n(),!1;a.shiftKey&&9==a.keyCode&&setTimeout(function(){b.btnCancle.focus()},0)};b.lbColor.onkeydown=a;b.lbColorR.onkeydown=a;b.btn.style.display=e.pickerClosable?"block":"none";b.btn.style.position="absolute";b.btn.style.left=e.pickerFace+"px";b.btn.style.bottom=e.pickerFace+"px";b.btn.style.padding="0 15px";b.btn.style.height=
"18px";b.btn.style.border=e.pickerInset+"px solid";(function(){var a=e.pickerInsetColor.split(/\s+/);b.btn.style.borderColor=2>a.length?a[0]:a[1]+" "+a[0]+" "+a[0]+" "+a[1]})();b.btn.style.color=e.pickerButtonColor;b.btn.style.font="12px sans-serif";b.btn.style.textAlign="center";try{b.btn.style.cursor="pointer"}catch(m){b.btn.style.cursor="hand"}b.btn.onmousedown=function(){e.hidePicker()};b.btnS.style.lineHeight=b.btn.style.height;var n=function(){var a="",g=b.select.value;if("hex"==g){if(a=b.lbColor.value,
null!=a.match(/[^a-f\d]/gi)){alert(f.G_CURRKEDITOR._FRAMEWIN.RAONKEditor_lang.color_picker.msg);setTimeout(function(){b.lbColor.focus()},0);return}}else{var c=b.lbColorR.value,e=b.lbColorG.value,a=b.lbColorB.value;if(0>=c.length||null!=c.match(/[^0-9\d]/gi)){alert(f.G_CURRKEDITOR._FRAMEWIN.RAONKEditor_lang.color_picker.msg);setTimeout(function(){b.lbColorR.focus()},0);return}if(0>=e.length||null!=e.match(/[^0-9\d]/gi)){alert(f.G_CURRKEDITOR._FRAMEWIN.RAONKEditor_lang.color_picker.msg);setTimeout(function(){b.lbColorG.focus()},
0);return}if(0>=a.length||null!=a.match(/[^0-9\d]/gi)){alert(f.G_CURRKEDITOR._FRAMEWIN.RAONKEditor_lang.color_picker.msg);setTimeout(function(){b.lbColorB.focus()},0);return}c=parseInt(c,10).toString(16);1==c.length&&(c="0"+c);e=parseInt(e,10).toString(16);1==e.length&&(e="0"+e);a=parseInt(a,10).toString(16);1==a.length&&(a="0"+a);a=c+e+a}a=a.replace("#","");c=a.match(/[a-f\d]/gi);if(0>=a.length||null==c)alert(f.G_CURRKEDITOR._FRAMEWIN.RAONKEditor_lang.color_picker.msg),"hex"==g?setTimeout(function(){b.lbColor.focus()},
0):setTimeout(function(){b.lbColorR.focus()},0);else if(3==c.length&&(a=c[0]+c[0]+c[1]+c[1]+c[2]+c[2]),3!=c.length&&6!=c.length)alert(f.G_CURRKEDITOR._FRAMEWIN.RAONKEditor_lang.color_picker.msg),"hex"==g?setTimeout(function(){b.lbColor.focus()},0):setTimeout(function(){b.lbColorR.focus()},0);else if(-1==a.indexOf("#")&&(a="#"+a),7!=a.length)alert(f.G_CURRKEDITOR._FRAMEWIN.RAONKEditor_lang.color_picker.msg),"hex"==g?setTimeout(function(){b.lbColor.focus()},0):setTimeout(function(){b.lbColorR.focus()},
0);else{"#000000"==a&&(a="black");a=a.toLowerCase();f.RAONKEDITOR.browser.LocalStorageSupported&&(g=f.KEDITORWIN.localStorage.getItem(f.G_CURRKEDITOR.recentlyColorName),null!=g?(g=g.split(","),-1!=g.indexOf(a)&&g.splice(g.indexOf(a),1),g.unshift(a),9<g.length&&(g.reverse(),g.shift(),g.reverse()),f.KEDITORWIN.localStorage.setItem(f.G_CURRKEDITOR.recentlyColorName,g)):f.KEDITORWIN.localStorage.setItem(f.G_CURRKEDITOR.recentlyColorName,a));void 0!==jscolor.styleColor||""!==jscolor.styleColor?jscolor.clickedElem.style[jscolor.styleColor]=
a:(g=iframeDoc.createElement("input"),g.type="hidden",g.value=a,g.id="hidden_color",iframeDoc.body.appendChild(g));if(void 0!==jscolor.actionType||""!==jscolor.actionType)"font_color"==jscolor.actionType||"detail_font_color"==jscolor.actionType?(g=H?f.document.getElementById("raonk_frame_"+f.G_CURRKEDITOR.ID).contentWindow:parent,g.command_fontColor(g.KEDITORTOP.G_CURRKEDITOR.ID,g.document.getElementById("keditor_design_"+g.KEDITORTOP.G_CURRKEDITOR.ID),a)):"font_bg_color"==jscolor.actionType||"detail_font_bg_color"==
jscolor.actionType?(g=H?f.document.getElementById("raonk_frame_"+f.G_CURRKEDITOR.ID).contentWindow:parent,g.command_fontBgColor(g.KEDITORTOP.G_CURRKEDITOR.ID,g.document.getElementById("keditor_design_"+g.KEDITORTOP.G_CURRKEDITOR.ID),a)):"doc_bg_color"==jscolor.actionType?parent.command_docBGColor(f.G_CURRKEDITOR.ID,parent.document.getElementById("keditor_design_"+f.G_CURRKEDITOR.ID),a):"cell_bg_color"==jscolor.actionType||"detail_cell_bg_color"==jscolor.actionType?parent.command_cellBGColor(f.G_CURRKEDITOR.ID,
parent.document.getElementById("keditor_design_"+f.G_CURRKEDITOR.ID),a):"line_color"==jscolor.actionType&&jscolor.excuteFn&&jscolor.excuteFn();jscolor.clickedElem=null;jscolor.styleColor="";jscolor.actionType="";jscolor.excuteFn=null;parent.document.body.removeChild(parent.document.getElementById("keditor_color_back"));parent.document.body.removeChild(parent.document.getElementById("popupCover"))}};b.btnOk.style.margin="0 2px 0 4px";b.btnOk.onkeydown=function(a){a=a?a:window.event;if(13==a.keyCode)return n(),
!1};b.btnOk.onmousedown=n;b.lbColor2.style.margin="0 2px 0 0";b.bottom.style.margin="0 0 3px 6px";var u=function(){jscolor.clickedElem=null;jscolor.styleColor="";jscolor.actionType="";jscolor.excuteFn=null;var a=parent.document.getElementById("popupCover").style.height.replace("px",""),b={left:0,top:0,right:0,bottom:0},b=document.getElementById("color_picker").getBoundingClientRect(),b=parseInt(b.bottom,10)-parseInt(b.top,10);parent.document.getElementById("popupCover").style.height=a-b+"px";document.getElementById("color_picker").style.display=
"none"};b.btnCancle.onkeydown=function(a){a=a?a:window.event;13==a.keyCode?u():0==a.shiftKey&&9==a.keyCode&&("hex"==b.select.value?setTimeout(function(){b.lbColor.focus()},0):"rgb"==b.select.value&&setTimeout(function(){b.lbColorR.focus()},0))};b.btnCancle.onmousedown=u;switch(t){case 0:var v="hs2.png";break;case 1:v="hv.png"}a=f.G_CURRKEDITOR._config.webPath.image;b.padM.style.backgroundImage="url('"+a+"jscolor/cross.gif')";b.padM.style.backgroundRepeat="no-repeat";b.pad.style.backgroundImage="url('"+
a+"jscolor/"+v+"')";b.pad.style.backgroundRepeat="no-repeat";b.pad.style.backgroundPosition="0 0";J();K();jscolor.picker.owner=e;document.getElementsByTagName("body")[0].appendChild(b.boxB);"hex"==jscolor.picker.select.value?jscolor.picker.lbColor.focus():jscolor.picker.lbColorR.focus()}function I(a){return[2*a.pickerInset+2*a.pickerFace+jscolor.images.pad[0]+(a.slider?2*a.pickerInset+2*jscolor.images.arrow[0]+jscolor.images.sld[0]:0),a.pickerClosable?4*a.pickerInset+3*a.pickerFace+jscolor.images.pad[1]+
a.pickerButtonHeight:2*a.pickerInset+2*a.pickerFace+jscolor.images.pad[1]]}function J(){switch(t){case 0:var a=1;break;case 1:a=2}var c=Math.round(e.hsv[0]/6*(jscolor.images.pad[0]-1)),a=Math.round((1-e.hsv[a])*(jscolor.images.pad[1]-1));jscolor.picker.padM.style.backgroundPosition=e.pickerFace+e.pickerInset+c-Math.floor(jscolor.images.cross[0]/2)+"px "+(e.pickerFace+e.pickerInset+a-Math.floor(jscolor.images.cross[1]/2))+"px";c=jscolor.picker.sld.childNodes;switch(t){case 0:for(var d=A(e.hsv[0],e.hsv[1],
1),a=0;a<c.length;a+=1)c[a].style.backgroundColor="rgb("+d[0]*(1-a/c.length)*100+"%,"+d[1]*(1-a/c.length)*100+"%,"+d[2]*(1-a/c.length)*100+"%)";break;case 1:var l,f=[e.hsv[2],0,0],a=Math.floor(e.hsv[0]),h=a%2?e.hsv[0]-a:1-(e.hsv[0]-a);switch(a){case 6:case 0:d=[0,1,2];break;case 1:d=[1,0,2];break;case 2:d=[2,0,1];break;case 3:d=[2,1,0];break;case 4:d=[1,2,0];break;case 5:d=[0,2,1]}for(a=0;a<c.length;a+=1)l=1-1/(c.length-1)*a,f[1]=f[0]*(1-l*h),f[2]=f[0]*(1-l),c[a].style.backgroundColor="rgb("+100*
f[d[0]]+"%,"+100*f[d[1]]+"%,"+100*f[d[2]]+"%)"}}function K(){switch(t){case 0:var a=2;break;case 1:a=1}a=Math.round((1-e.hsv[a])*(jscolor.images.sld[1]-1));jscolor.picker.sldM.style.backgroundPosition="0 "+(e.pickerFace+e.pickerInset+a-Math.floor(jscolor.images.arrow[1]/2))+"px"}function y(){return jscolor.picker&&jscolor.picker.owner===e}function M(){k!==c&&e.importColor()}function B(a){var c=jscolor.getRelMousePos(a);a=c.x-e.pickerFace-e.pickerInset;c=c.y-e.pickerFace-e.pickerInset;switch(t){case 0:e.fromHSV(6/
(jscolor.images.pad[0]-1)*a,1-c/(jscolor.images.pad[1]-1),null,D);break;case 1:e.fromHSV(6/(jscolor.images.pad[0]-1)*a,null,1-c/(jscolor.images.pad[1]-1),D)}}function C(a){a=jscolor.getRelMousePos(a).y-e.pickerFace-e.pickerInset;switch(t){case 0:e.fromHSV(null,null,1-a/(jscolor.images.sld[1]-1),E);break;case 1:e.fromHSV(null,1-a/(jscolor.images.sld[1]-1),null,E)}}function x(){e.onImmediateChange&&("string"===typeof e.onImmediateChange?new Function(e.onImmediateChange):e.onImmediateChange).call(e)}
jscolor.clickedElem=a;jscolor.styleColor=n;jscolor.actionType=v;jscolor.excuteFn=z;this.slider=this.caps=this.hash=this.adjust=this.required=!0;this.styleElement=this.valueElement=c;this.onImmediateChange=null;this.hsv=[0,0,1];this.rgb=[1,1,1];this.minH=0;this.maxH=6;this.minS=0;this.maxS=1;this.minV=0;this.maxV=1;this.pickerOnfocus=!1;this.pickerMode="HSV";this.pickerPosition="bottom";this.pickerSmartPosition=!1;this.pickerButtonHeight=0;this.pickerClosable=!1;this.pickerCloseText="Close";this.pickerButtonColor=
"ButtonText";this.pickerFace=6;this.pickerFaceColor="ThreeDFace";this.pickerBorder=1;this.pickerBorderColor="ThreeDHighlight ThreeDShadow ThreeDShadow ThreeDHighlight";this.pickerInset=1;this.pickerInsetColor="ThreeDShadow ThreeDShadow ThreeDShadow ThreeDShadow";this.pickerZIndex=15E3;for(var F in d)d.hasOwnProperty(F)&&(this[F]=d[F]);this.hidePicker=function(){y()&&(delete jscolor.picker.owner,document.getElementsByTagName("body")[0].removeChild(jscolor.picker.boxB))};this.showPicker=function(){if(!y()){var a=
jscolor.getElementPos(c),d=jscolor.getElementSize(c),e=jscolor.getViewPos(),l=jscolor.getViewSize(),f=I(this),h,b,k;switch(this.pickerPosition.toLowerCase()){case "left":h=1;b=0;k=-1;break;case "right":h=1;b=0;k=1;break;case "top":h=0;b=1;k=-1;break;default:h=0,k=b=1}var m=(d[b]+f[b])/2,a=this.pickerSmartPosition?[-e[h]+a[h]+f[h]>l[h]?-e[h]+a[h]+d[h]/2>l[h]/2&&0<=a[h]+d[h]-f[h]?a[h]+d[h]-f[h]:a[h]:a[h],-e[b]+a[b]+d[b]+f[b]-m+m*k>l[b]?-e[b]+a[b]+d[b]/2>l[b]/2&&0<=a[b]+d[b]-m-m*k?a[b]+d[b]-m-m*k:a[b]+
d[b]-m+m*k:0<=a[b]+d[b]-m+m*k?a[b]+d[b]-m+m*k:a[b]+d[b]-m-m*k]:[a[h],a[b]+d[b]-m+m*k];L(a[h],a[b])}};this.importColor=function(){k?this.adjust?!this.required&&/^\s*$/.test(k.value)?(k.value="",l.style.backgroundImage=l.jscStyle.backgroundImage,l.style.backgroundColor=l.jscStyle.backgroundColor,l.style.color=l.jscStyle.color,this.exportColor(u|G)):this.fromString(k.value):this.fromString(k.value,u)||(l.style.backgroundImage=l.jscStyle.backgroundImage,l.style.backgroundColor=l.jscStyle.backgroundColor,
l.style.color=l.jscStyle.color,this.exportColor(u|G)):this.exportColor()};this.exportColor=function(a){if(!(a&u)&&k){var c=this.toString(),d=c;this.caps&&(c=c.toUpperCase());null!=jscolor.picker.lbColor&&(jscolor.picker.lbColor.value=c);if(null!=jscolor.picker.lbColorB){c=d.match(/[a-f\d]/gi);3==c.length&&(d=c[0]+c[0]+c[1]+c[1]+c[2]+c[2]);var c=d.match(/[a-f\d]{2}/gi),d=parseInt(c[0],16),e=parseInt(c[1],16),c=parseInt(c[2],16);jscolor.picker.lbColorR.value=d;jscolor.picker.lbColorG.value=e;jscolor.picker.lbColorB.value=
c}}a&G||!l||null==jscolor.picker.lbColor2||(jscolor.picker.lbColor2.style.backgroundColor="#"+this.toString());a&E||!y()||J();a&D||!y()||K()};this.fromHSV=function(a,c,d,e){null!==a&&(a=Math.max(0,this.minH,Math.min(6,this.maxH,a)));null!==c&&(c=Math.max(0,this.minS,Math.min(1,this.maxS,c)));null!==d&&(d=Math.max(0,this.minV,Math.min(1,this.maxV,d)));this.rgb=A(null===a?this.hsv[0]:this.hsv[0]=a,null===c?this.hsv[1]:this.hsv[1]=c,null===d?this.hsv[2]:this.hsv[2]=d);this.exportColor(e)};this.fromRGB=
function(a,c,d,e){null!==a&&(a=Math.max(0,Math.min(1,a)));null!==c&&(c=Math.max(0,Math.min(1,c)));null!==d&&(d=Math.max(0,Math.min(1,d)));a=null===a?this.rgb[0]:a;c=null===c?this.rgb[1]:c;var f=null===d?this.rgb[2]:d,h=Math.min(Math.min(a,c),f);d=Math.max(Math.max(a,c),f);var b=d-h;0===b?a=[null,0,d]:(a=a===h?3+(f-c)/b:c===h?5+(a-f)/b:1+(c-a)/b,a=[6===a?0:a,b/d,d]);null!==a[0]&&(this.hsv[0]=Math.max(0,this.minH,Math.min(6,this.maxH,a[0])));0!==a[2]&&(this.hsv[1]=null===a[1]?null:Math.max(0,this.minS,
Math.min(1,this.maxS,a[1])));this.hsv[2]=null===a[2]?null:Math.max(0,this.minV,Math.min(1,this.maxV,a[2]));a=A(this.hsv[0],this.hsv[1],this.hsv[2]);this.rgb[0]=a[0];this.rgb[1]=a[1];this.rgb[2]=a[2];this.exportColor(e)};this.fromString=function(a,c){var d="More".match(/^\W*([0-9A-F]{3}([0-9A-F]{3})?)\W*$/i);return d?(6===d[1].length?this.fromRGB(parseInt(d[1].substr(0,2),16)/255,parseInt(d[1].substr(2,2),16)/255,parseInt(d[1].substr(4,2),16)/255,c):this.fromRGB(parseInt(d[1].charAt(0)+d[1].charAt(0),
16)/255,parseInt(d[1].charAt(1)+d[1].charAt(1),16)/255,parseInt(d[1].charAt(2)+d[1].charAt(2),16)/255,c),!0):!1};this.toString=function(){return(256|Math.round(255*this.rgb[0])).toString(16).substr(1)+(256|Math.round(255*this.rgb[1])).toString(16).substr(1)+(256|Math.round(255*this.rgb[2])).toString(16).substr(1)};var e=this,t="hvs"===this.pickerMode.toLowerCase()?1:0,w=!1,k=jscolor.fetchElement(this.valueElement),l=jscolor.fetchElement(this.styleElement),p=!1,q=!1,r={},u=1,G=2,E=4,D=8;jscolor.addEvent(c,
"blur",function(){w?w=!1:window.setTimeout(function(){w||(k===c&&e.importColor(),e.pickerOnfocus&&e.hidePicker());w=!1},0)});k&&(d=function(){e.fromString(k.value,u);x()},jscolor.addEvent(k,"keyup",d),jscolor.addEvent(k,"input",d),jscolor.addEvent(k,"blur",M),k.setAttribute("autocomplete","off"));l&&(l.jscStyle={backgroundImage:l.style.backgroundImage,backgroundColor:l.style.backgroundColor,color:l.style.color});switch(t){case 0:jscolor.requireImage("hs2.png");break;case 1:jscolor.requireImage("hv.png")}jscolor.requireImage("cross.gif");
jscolor.requireImage("arrow.gif");this.importColor()}},target=void 0!=parent.KEDITORTOP?parent:parent.KEDITORWIN;target.KEDITORTOP.RAONKEDITOR.util.addEvent(document,"contextmenu",function(c){target.KEDITORTOP.RAONKEDITOR.util.cancelEvent(c)});jscolor.install();
