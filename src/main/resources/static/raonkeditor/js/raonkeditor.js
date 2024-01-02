/*
 Copyright (c) 2017, Raonwiz Technology Inc. All rights reserved.
*/
if ("undefined" != typeof window && !window.RAONKEDITOR) {
  var RAONKEditor = function (a) {
    var d = a.Id, c = new keditor_user_config, b;
    for (b in a) {
      a.hasOwnProperty(b) && (c[b] = a[b]);
    }
    void 0 == d && (d = RAONKEDITOR.util.makeGuidTagName("raonkeditor_"));
    RAONKEDITOR.CEditorID = d;
    a = RAONKEDITOR.util.isExistEditorName(d, c);
    if (1 == a) {
      alert(
          "editor's name is empty. Please, check editor's name");
    } else {
      if (2 == a) {
        if ("1"
            == c.IgnoreSameEditorName) {
          d = RAONKEDITOR.util.getNewNextEditorName(
              d);
        } else {
          alert("editor's name is already exist. Please, check editor's name");
          return
        }
      }
      3 != a && (RAONKEDITOR.RAONKMULTIPLEID.push(
          d), RAONKEDITOR.RAONKMULTIPLE["raonk_frame_"
      + d] = d, RAONKEDITOR.RAONKHOLDER[d] = c.EditorHolder);
      RAONKEDITOR.IsEditorLoadedHashTable
      && RAONKEDITOR.IsEditorLoadedHashTable.setItem(d, "");
      try {
        null == RAONKEDITOR.UserConfigHashTable
        && (RAONKEDITOR.UserConfigHashTable = new RAONKEDITOR.util.hashTable, RAONKEDITOR.EditorContentsHashTable = new RAONKEDITOR.util.hashTable), c.Id = d, RAONKEDITOR.UserConfigHashTable.setItem(
            d, c)
      } catch (e) {
        RAONKEDITOR && RAONKEDITOR.logMode && console &&
        console.log(e)
      }
      c.XhrWithCredentials && (RAONKEDITOR.ajax.xhrWithCredentials = !0);
      var f = new RAONKEditor_CONFIG(c);
      if (0 < c.InitServerXml.length) {
        -1 == c.InitServerXml.indexOf("f=") && (-1 < c.InitServerXml.indexOf(
            "?") ? c.InitServerXml += "&f=raonkeditor.config.xml"
            : c.InitServerXml += "?f=raonkeditor.config.xml");
        try {
          var k = c.InitServerXml.split("?"), h = k[0], l = k[1].split("&"),
              n = l.length;
          b = a = "";
          for (k = 0; k < n; k++) {
            var p = l[k].split("=");
            "f" == p[0] ? a = p[1] : b += "&" + p[0] + "=" + p[1]
          }
          var m = "kc" + RAONKSolution.Agent.formfeed + "c06" +
                  RAONKSolution.Agent.vertical,
              m = m + ("k14" + RAONKSolution.Agent.formfeed + a),
              m = RAONKEDITOR.util.makeEncryptParam(m);
          f.config_url = h + "?k00=" + m;
          1 < b.length && (f.config_url += b)
        } catch (q) {
          alert("Error occurred reading the Editor Settings")
        }
      } else {
        0 < c.InitXml.length && (0 == c.InitXml.indexOf("http")
            ? f.config_url = c.InitXml : f.config_url = RAONKEDITOR.rootPath
                + "config/" + c.InitXml);
      }
      if (!Array.prototype.indexOf) {
        try {
          for (var r in f) {
            "[object array]" == Object.prototype.toString.call(
                f[r]).toLowerCase() && (f[r].indexOf = function (a,
                c) {
              c = c || 0;
              for (var b = this.length; c < b;) {
                if (this[c] === a) {
                  return c;
                }
                ++c
              }
              return -1
            })
          }
        } catch (t) {
          RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(t)
        }
      }
      "1" == c.UseConfigTimeStamp ? -1 < f.config_url.indexOf("?")
          ? f.config_url += "&t=" + RAONKEDITOR.util.getTimeStamp()
          : f.config_url += "?t=" + RAONKEDITOR.util.getTimeStamp() : -1
      < f.config_url.indexOf("?") ? f.config_url += "&t=" + RAONKEDITOR.UrlStamp
          : f.config_url += "?t=" + RAONKEDITOR.UrlStamp;
      m = null;
      m = 0 < c.InitServerXml.length ? RAONKEDITOR.ajax.load(f.config_url)
          : RAONKEDITOR.ajax.loadXml(f.config_url);
      if (null == m) {
        alert("ErrCode : 1000");
      } else {
        if ("object" == typeof m) {
          "" == m.xml && (m = RAONKEDITOR.ajax.load(
              f.config_url), m = RAONKEDITOR.util.stringToXML(
              m));
        } else if (m = RAONKEDITOR.util.trim(
            m), m = RAONKEDITOR.util.parseDataFromServer(m), 0 == m.indexOf(
            "[OK]")) {
          m = m.substring(
              4), m = RAONKEDITOR.util.makeDecryptReponseMessage(
              m), m = m.substring(
              m.indexOf("<?")), m = RAONKEDITOR.util.stringToXML(m);
        } else {
          if (0 == m.indexOf("[FAIL]")) {
            alert("Error occurred reading the Editor Settings");
            return
          }
          (m = RAONKEDITOR.util.stringToXML(m)) ||
          alert("Error occurred reading the Editor Settings")
        }
        this.configXml = m;
        var v = RAONKEDITOR.util.xml.getAllNodes(m);
        if (v && "undefined" != typeof v.parsererror) {
          alert(
              "Error occurred parsing the Editor Settings");
        } else {
          var g = {
            "JS|InterworkingModuleFirst": {config: "interworkingModuleFirst"},
            "JS|InterworkingModuleSecond": {config: "interworkingModuleSecond"},
            "JS|InterworkingModuleThird": {config: "interworkingModuleThird"}
          };
          g["XML|xss_protection.xss_use@check_attribute"] = g["JS|XssCheckAttribute"] = {
            config: "xss_check_attribute",
            configFn: function (a) {
              return a.split(",")
            }
          };
          g["XML|xss_protection.xss_use"] = g["JS|XssUse"] = {
            config: "xss_use",
            configFn: function (a) {
              return "" == a ? "0" : a
            }
          };
          g["XML|xss_protection.xss_remove_tags"] = g["JS|XssRemoveTags"] = {
            config: "xss_remove_tags",
            configFn: function (a) {
              return "0" == a ? "" : a.toLowerCase()
            }
          };
          g["XML|xss_protection.xss_remove_events"] = g["JS|XssRemoveEvents"] = {
            config: "xss_remove_events", configFn: function (a) {
              return "all" == a.toLowerCase()
                  ? "onabort,onactivate,onafterprint,onafterupdate,onbeforeactivate,onbeforecopy,onbeforecut,onbeforedeactivate,onbeforeeditfocus,onbeforepaste,onbeforeprint,onbeforeunload,onbeforeupdate,onbegin,onblur,onbounce,oncellchange,onchange,onclick,oncontentready,oncontentsave,oncontextmenu,oncontrolselect,oncopy,oncut,ondataavailable,ondatasetchanged,ondatasetcomplete,ondblclick,ondeactivate,ondetach,ondocumentready,ondrag,ondragdrop,ondragend,ondragenter,ondragleave,ondragover,ondragstart,ondrop,onend,onerror,onerrorupdate,onfilterchange,onfinish,onfocus,onfocusin,onfocusout,onhelp,onhide,onkeydown,onkeypress,onkeyup,onlayoutcomplete,onload,onlosecapture,onmediacomplete,onmediaerror,onmedialoadfailed,onmousedown,onmouseenter,onmouseleave,onmousemove,onmouseout,onmouseover,onmouseup,onmousewheel,onmove,onmoveend,onmovestart,onopenstatechange,onoutofsync,onpaste,onpause,onplaystatechange,onpropertychange,onreadystatechange,onrepeat,onreset,onresize,onresizeend,onresizestart,onresume,onreverse,onrowclick,onrowenter,onrowexit,onrowout,onrowover,onrowsdelete,onrowsinserted,onsave,onscroll,onseek,onselect,onselectionchange,onselectstart,onshow,onstart,onstop,onsubmit,onsyncrestored,ontimeerror,ontrackchange,onunload,onurlflip,formaction,onwheel,ontoggle,oninput"
                  :
                  "0" == a ? "" : a.toLowerCase()
            }
          };
          g["XML|xss_protection.xss_use@allow_events_attribute"] = g["JS|XssAllowEventsAttribute"] = {config: "xss_allow_events_attribute"};
          g["XML|xss_protection.xss_allow_url.allow_url"] = g["JS|XssAllowUrl"] = {
            config: "xss_allow_url",
            valueType: "array",
            jsFn: function (a) {
              return a = a.split(",")
            }
          };
          g["JS|ZIndex"] = g["JS|zIndex"] = {
            config: "zIndex",
            configFn: function (a) {
              if (1E4 <= (a = parseInt(a, 10))) {
                return a
              }
            }
          };
          g["JS|EditorBorder"] = {config: "editorborder"};
          g["XML|top_menu.menu"] = g["JS|TopMenuItem"] = {
            config: "topMenuItem",
            valueType: "array", jsFn: function (a) {
              return a.split(",")
            }
          };
          g["XML|remove_item.item"] = g["JS|RemoveItem"] = {
            config: "removeItem",
            valueType: "array",
            jsFn: function (a) {
              return a.split(",")
            }
          };
          g["XML|remove_context_item.item"] = g["JS|RemoveContextItem"] = {
            config: "removeContextItem",
            valueType: "array",
            jsFn: function (a) {
              return a.split(",")
            }
          };
          g["XML|setting.figure@use"] = g["JS|Figure.Use"] = {config: "figure.use"};
          g["XML|setting.figure@figure_style"] = g["JS|Figure.FigureStyle"] = {config: "figure.figurestyle"};
          g["XML|setting.figure@figcaption_style"] =
              g["JS|Figure.FigcaptionStyle"] = {config: "figure.figcaptionstyle"};
          g["XML|setting.figure@default_caption"] = g["JS|Figure.DefaultCaption"] = {config: "figure.defaultcaption"};
          g["XML|setting.mime_use"] = g["JS|MimeUse"] = {config: "mimeUse"};
          g["XML|setting.print_preview"] = g["JS|PrintPreview"] = {config: "printPreview"};
          g["XML|setting.print_header_left"] = g["JS|PrintHeaderLeft"] = {config: "printHeaderLeft"};
          g["XML|setting.print_header_center"] = g["JS|PrintHeaderCenter"] = {config: "printHeaderCenter"};
          g["XML|setting.print_header_right"] =
              g["JS|PrintHeaderRight"] = {config: "printHeaderRight"};
          g["XML|setting.print_footer_left"] = g["JS|PrintFooterLeft"] = {config: "printFooterLeft"};
          g["XML|setting.print_footer_center"] = g["JS|PrintFooterCenter"] = {config: "printFooterCenter"};
          g["XML|setting.print_footer_right"] = g["JS|PrintFooterRight"] = {config: "printFooterRight"};
          g["XML|setting.print_margin_ltrb"] = g["JS|PrintMarginltrb"] = {config: "printMarginltrb"};
          g["XML|setting.use_form_print"] = g["JS|UseFormPrint"] = {config: "useFormPrint"};
          g["XML|setting.auto_list@use"] =
              g["JS|AutoList.Use"] = {config: "autoList.use"};
          g["XML|setting.undo.undo_count"] = g["JS|UndoCount"] = {
            config: "undoCount",
            configFn: function (a) {
              return parseInt(a, 10)
            }
          };
          g["XML|setting.undo.allow_delete_count"] = g["JS|AllowDeleteCount"] = {config: "allowDeleteCount"};
          g["XML|setting.undo.light_mode"] = g["JS|UseUndoLightMode"] = {config: "useUndoLightMode"};
          g["XML|setting.word_count"] = g["JS|WordCount.Use"] = {config: "wordCount.use"};
          g["XML|setting.word_count@limit"] = g["JS|WordCount.Limit"] = {
            config: "wordCount.limit", configFn: function (a) {
              if ("1" ==
                  f.wordCount.use) {
                return a
              }
            }
          };
          g["XML|setting.word_count@limit_char"] = g["JS|WordCount.LimitChar"] = {
            config: "wordCount.limitchar",
            configFn: function (a) {
              if ("1" == f.wordCount.use) {
                return f.wordCount.limitcount = a
              }
            }
          };
          g["XML|setting.word_count@limit_byte"] = g["JS|WordCount.LimitByte"] = {
            config: "wordCount.limitbyte", configFn: function (a) {
              if ("1" == f.wordCount.use) {
                return "" == f.wordCount.limitchar
                || "0" == f.wordCount.limitchar
                    ? (f.wordCount.limitcount = a, f.wordCount.limitunit = "byte", f.undoCount
                    > parseInt(a) && (f.undoCount = parseInt(a))) :
                    (f.wordCount.limitcount = f.wordCount.limitchar, f.wordCount.limitunit = "char"), a
              }
            }
          };
          g["XML|setting.word_count@limit_line"] = g["JS|WordCount.LimitLine"] = {
            config: "wordCount.limitline",
            configFn: function (a) {
              if ("1" == f.wordCount.use) {
                return a
              }
            }
          };
          g["XML|setting.word_count@count_white_space"] = g["JS|WordCount.CountWhiteSpace"] = {
            config: "wordCount.countwhitespace",
            configFn: function (a) {
              if ("1" == f.wordCount.use && ("" != f.wordCount.limit || ""
                  != f.wordCount.limitcount)) {
                return a
              }
            }
          };
          g["XML|setting.word_count@limit_message"] = g["JS|WordCount.LimitMessage"] =
              {
                config: "wordCount.limitmessage", configFn: function (a) {
                  if ("1" == f.wordCount.use && "1"
                      == f.wordCount.limit) {
                    return a
                  }
                }
              };
          g["XML|font_family@use_local_font"] = g["JS|UseLocalFont"] = {config: "useLocalFont"};
          g["XML|font_family@use_keyin"] = g["JS|UseFontFamilyKeyin"] = {config: "useFontFamilyKeyin"};
          g["XML|font_size@use_keyin"] = g["JS|UseFontSizeKeyin"] = {config: "useFontSizeKeyin"};
          g["XML|line_height@use_keyin"] = g["JS|UseLineHeightKeyin"] = {config: "useLineHeightKeyin"};
          g["XML|font_size@use_inc_dec"] = g["JS|UseFontSizeIncDec"] =
              {config: "useFontSizeIncDec"};
          g["XML|font_size@use_recently_font_size"] = g["JS|UseRecentlyFontSize"] = {config: "useRecentlyFontSize"};
          g["XML|line_height@use_inc_dec"] = g["JS|UseLineHeightIncDec"] = {config: "useLineHeightIncDec"};
          g["XML|line_height@use_recently_line_height"] = g["JS|UseRecentlyLineHeight"] = {config: "useRecentlyLineHeight"};
          g["XML|letter_spacing@use_inc_dec"] = g["JS|UseLetterSpacingIncDec"] = {config: "useLetterSpacingIncDec"};
          g["XML|letter_spacing@use_recently_letter_spacing"] = g["JS|UseRecentlyLetterSpacing"] =
              {config: "useRecentlyLetterSpacing"};
          g["XML|font_family@use_recently_font"] = g["JS|UseRecentlyFont"] = {config: "useRecentlyFont"};
          g["XML|setting.forbidden_word"] = g["JS|ForbiddenWord"] = {config: "forbiddenWord"};
          g["XML|setting.personal_data"] = g["JS|PersonalData"] = {config: "personalData"};
          g["XML|setting.use_remove_style"] = g["JS|RemoveStyle.Use"] = {config: "removeStyle.use"};
          g["XML|setting.use_remove_style@tag"] = g["JS|RemoveStyle.Tag"] = {
            config: "removeStyle.tag",
            configFn: function (a) {
              if ("1" == f.removeStyle.use) {
                return a
              }
            }
          };
          g["XML|setting.use_remove_style@style"] = g["JS|RemoveStyle.Style"] = {
            config: "removeStyle.style",
            configFn: function (a) {
              if ("1" == f.removeStyle.use) {
                return a
              }
            }
          };
          g["XML|setting.allow_unable_to_delete_msg"] = g["JS|AllowUnableToDeleteMsg"] = {config: "allowUnableToDeleteMsg"};
          g["XML|setting.font_family"] = g["JS|DefaultFontFamily"] = {
            config: "defaultFontFamily",
            configFn: function (a) {
              "\ub9d1\uc740\uace0\ub515" == a
              && (a = "\ub9d1\uc740 \uace0\ub515");
              return a
            }
          };
          g["XML|setting.font_size"] = g["JS|DefaultFontSize"] = {
            config: "defaultFontSize",
            configFn: function (a) {
              0 > a.toString().indexOf("pt") && 0 > a.toString().indexOf("px")
              && (a += "pt");
              return a
            }
          };
          g["XML|setting.font_size@inc_dec_gap"] = g["JS|FontSizeIncDecGap"] = {config: "fontSizeIncDecGap"};
          g["XML|setting.line_height"] = g["JS|DefaultLineHeight"] = {config: "defaultLineHeight"};
          g["XML|setting.line_height@mode"] = g["JS|LineHeightMode"] = {config: "lineHeightMode"};
          g["XML|setting.line_height@inc_dec_gap"] = g["JS|LineHeightIncDecGap"] = {config: "lineHeightIncDecGap"};
          g["XML|setting.letter_spacing@inc_dec_gap"] =
              g["JS|LetterSpacingIncDecGap"] = {config: "letterSpacingIncDecGap"};
          g["XML|setting.font_margin@top"] = g["JS|DefaultFontMarginTop"] = {
            config: "defaultFontMarginTop",
            configFn: function (a) {
              0 > a.indexOf("pt") && 0 > a.indexOf("px") && (a += "px");
              return a
            }
          };
          g["XML|setting.font_margin@bottom"] = g["JS|DefaultFontMarginBottom"] = {
            config: "defaultFontMarginBottom",
            configFn: function (a) {
              0 > a.indexOf("pt") && 0 > a.indexOf("px") && (a += "px");
              return a
            }
          };
          g["XML|setting.allow_img_size"] = g["JS|AllowImgSize"] = {config: "allowImgSize"};
          g["XML|setting.frame_fullscreen"] =
              g["JS|FrameFullScreen"] = {config: "frameFullScreen"};
          g["XML|setting.runtimes"] = g["JS|Runtimes"] = {config: "runtimes"};
          g["XML|setting.runtimes@auto_change_to_html5_mode"] = g["JS|AutoChangeToHtml5Mode"] = {config: "autoChangeToHtml5Mode"};
          g["JS|DropZoneTransparency"] = {
            config: "dropZoneTransparency",
            configFn: function (a) {
              a = parseInt(a, 10);
              1 > a ? a = 1 : 255 < a && (a = 255);
              return a
            }
          };
          g["XML|tool_bar_1.tool"] = g["JS|ToolBar1"] = {
            config: "toolbarArr1", valueType: "array", configFn: function (a) {
              "string" == typeof a && (a = a.split(","));
              for (var c = [], b = 0; b < a.length; b++) {
                var e = a[b];
                "chart" == e && (e = "p_chart");
                c.push(e)
              }
              return c
            }
          };
          g["XML|tool_bar_2.tool"] = g["JS|ToolBar2"] = {
            config: "toolbarArr2",
            valueType: "array",
            configFn: function (a) {
              "string" == typeof a && (a = a.split(","));
              for (var c = [], b = 0; b < a.length; b++) {
                var e = a[b];
                "chart" == e && (e = "p_chart");
                c.push(e)
              }
              return c
            }
          };
          g["XML|tool_bar_1.tool:apply_format@except_style"] = g["XML|tool_bar_2.tool:apply_format@except_style"] = g["JS|ApplyFormatExceptStyle"] = {
            config: "applyFormatExceptStyle",
            configFn: function (a) {
              return a.split(",")
            }
          };
          g["XML|tool_bar_1.tool:full_screen@top"] = g["XML|tool_bar_2.tool:full_screen@top"] = g["JS|FullScreenTop"] = {
            config: "fullScreenTop",
            configFn: function (a) {
              return RAONKEDITOR.util.parseIntOr0(a)
            }
          };
          g["XML|tool_bar_1.tool:full_screen@left"] = g["XML|tool_bar_2.tool:full_screen@left"] = g["JS|FullScreenLeft"] = {
            config: "fullScreenLeft",
            configFn: function (a) {
              return RAONKEDITOR.util.parseIntOr0(a)
            }
          };
          g["XML|tool_bar_1.tool:full_screen@right"] = g["XML|tool_bar_2.tool:full_screen@right"] = g["JS|FullScreenRight"] = {
            config: "fullScreenRight",
            configFn: function (a) {
              return RAONKEDITOR.util.parseIntOr0(a)
            }
          };
          g["XML|tool_bar_1.tool:full_screen@bottom"] = g["XML|tool_bar_2.tool:full_screen@bottom"] = g["JS|FullScreenBottom"] = {
            config: "fullScreenBottom",
            configFn: function (a) {
              return RAONKEDITOR.util.parseIntOr0(a)
            }
          };
          g["XML|tool_bar_1.tool:select_save_type@show_icon_list"] = g["XML|tool_bar_2.tool:select_save_type@show_icon_list"] = {
            config: "selectSaveTypeIconShowIconList", configFn: function (a) {
              "string" == typeof a && (a = a.split(","));
              for (var c = [], b = 0; b < a.length; b++) {
                c.push(a[b]);
              }
              return c
            }
          };
          g["XML|plugin_ex.tool"] = g["JS|PluginToolEx"] = {
            config: "pluginToolExArr",
            valueType: "array",
            configFn: function (a) {
              "string" == typeof a && (a = a.split(","));
              for (var c = [], b = 0; b < a.length; b++) {
                var e = a[b];
                "mention" == e && 0 == RAONKEDITOR.browser.ES6Supported
                || c.push(e)
              }
              return c
            }
          };
          g["XML|setting.editor_tab_disable"] = g["JS|EditorTabDisable"] = {config: "EditorTabDisable"};
          g["XML|setting.editor_tab_disable@tab_space"] = g["JS|TabSpace"] = {
            config: "tabSpace", configFn: function (a) {
              var c = a;
              if (0 < c) {
                a = "";
                for (var b = 0; b <
                c; b++) {
                  a += "&nbsp;";
                }
                return a
              }
            }
          };
          g["XML|setting.context_menu_disable"] = g["JS|ContextMenuDisable"] = {config: "contextMenuDisable"};
          g["XML|setting.ie_compatible"] = g["JS|IECompatible"] = {config: "ieCompatible"};
          g["XML|setting.auto_url_detect"] = g["JS|AutoUrlDetect"] = {config: "autoUrlDetect"};
          g["XML|setting.office_linefix"] = g["JS|OfficeLineFix"] = {config: "officeLineFix"};
          g["XML|setting.paste_remove_empty_tag"] = g["JS|PasteRemoveEmptyTag"] = {config: "pasteRemoveEmptyTag"};
          g["XML|setting.scroll_overflow"] = g["JS|ScrollOverflow"] =
              {config: "scrollOverflow"};
          g["XML|setting.default_imemode"] = g["JS|DefaultImemode"] = {config: "defaultImemode"};
          g["XML|setting.disable_tabletap"] = g["JS|DisableTabletap"] = {config: "disableTabletap"};
          g["XML|setting.auto_body_fit"] = g["JS|AutoBodyFit"] = {config: "autoBodyFit"};
          g["XML|setting.auto_body_fit@use_noncreation_area_background"] = g["JS|UseNoncreationAreaBackground"] = {config: "useNoncreationAreaBackground"};
          g["XML|setting.auto_body_fit@word_edit"] = g["JS|AutoBodyFitForWordEdit"] = {config: "autoBodyFitForWordEdit"};
          g["XML|setting.auto_body_fit@open_word"] = g["JS|AutoBodyFitForOpenWord"] = {config: "autoBodyFitForOpenWord"};
          g["XML|setting.disable_keydown"] = g["JS|DisableKeydown"] = {config: "disableKeydown"};
          g["XML|setting.custom_event.image.ondbclick"] = g["JS|CustomEventImageOndbclick"] = {config: "customEventCmd.image.ondbclick"};
          g["XML|setting.custom_event.hyperlink.ondbclick"] = g["JS|CustomEventHyperlinkOndbclick"] = {config: "customEventCmd.hyperLink.ondbclick"};
          g["XML|setting.pageurl.script.symbol"] = g["JS|SymbolUrl"] =
              {config: "symbolUrl"};
          g["XML|setting.pageurl.script.symbol@custom_css_url"] = g["JS|SymbolCustomCssUrl"] = {config: "symbolCustomCssUrl"};
          g["XML|setting.icon_name"] = g["JS|IconName"] = {config: "style.iconName"};
          g["XML|setting.image_base_url"] = g["JS|ImageBaseUrl"] = {config: "imageBaseUrl"};
          g["XML|setting.drag_resize"] = g["JS|DragResize"] = {config: "dragResize"};
          g["XML|setting.drag_resize@apply_browser"] = g["JS|DragResizeApplyBrowser"] = {
            config: "dragResizeApplyBrowser",
            configFn: function (a) {
              return a.split(",")
            }
          };
          g["XML|setting.drag_resize@movable"] =
              g["JS|DragResizeMovable"] = {config: "dragResizeMovable"};
          g["XML|setting.drag_resize@apply_div_class"] = g["JS|DragResizeApplyDivClass"] = {config: "dragResizeApplyDivClass"};
          g["XML|font_family.font"] = g["JS|FontFamilyList"] = {
            config: "fontFamilyList",
            valueType: "array",
            jsFn: function (a) {
              return a.split(",")
            }
          };
          g["XML|display_font_family.font"] = g["JS|DisplayFontFamilyList"] = {
            config: "displayFontFamilyList",
            valueType: "array",
            jsFn: function (a) {
              return a.split(",")
            }
          };
          g["XML|font_size.size"] = g["JS|FontSizeList"] = {
            config: "fontSizeList",
            valueType: "array", jsFn: function (a) {
              return f.fontSizeList.concat(a.split(","))
            }
          };
          g["XML|line_height.line"] = g["JS|LineHeightList"] = {
            config: "lineHeightList",
            valueType: "array",
            jsFn: function (a) {
              return a.split(",")
            }
          };
          g["XML|zoom.item"] = g["JS|ZoomList"] = {
            config: "zoomList",
            valueType: "array",
            jsFn: function (a) {
              return a.split(",")
            }
          };
          g["XML|formatting.format"] = g["JS|FormattingList"] = {
            config: "formattingList", valueType: "array", xmlFn: function (a) {
              a.unshift("");
              return a
            }, jsFn: function (a) {
              f.formattingList.push("");
              return f.formattingList.concat(a.split(","))
            }
          };
          g["XML|formatting@use_recently_formatting"] = g["JS|UseRecentlyFormatting"] = {config: "useRecentlyFormatting"};
          g["XML|letter_spacing.spacing"] = g["JS|LetterSpacingList"] = {
            config: "letterSpacingList",
            valueType: "array",
            jsFn: function (a) {
              return a.split(",")
            }
          };
          g["XML|setting.use_ruler"] = g["JS|Ruler.Use"] = {
            config: "ruler.use",
            jsFn: function (a) {
              f.ruler.configType = "JS";
              return a
            },
            configFn: function (a) {
              if ("1" == a) {
                return f.ruler.view = "1", a
              }
            }
          };
          g["XML|setting.use_ruler@ruler_init_position"] =
              g["JS|Ruler.InitPosition"] = {
                config: "ruler.rulerInitPosition",
                jsFn: function (a) {
                  if ("JS" == f.ruler.configType) {
                    return a
                  }
                },
                xmlFn: function (a) {
                  if ("JS" != f.ruler.configType) {
                    return a
                  }
                },
                configFn: function (a) {
                  if ("1"
                      == f.ruler.use) {
                    return a = RAONKEDITOR.util.parseIntOr0(a)
                        + "", a = a.split(","), "2" != f.ruler.mode
                    && (a = a.sort(function (a, c) {
                      return a - c
                    })), a
                  }
                }
              };
          g["XML|setting.use_ruler@view_pointer"] = g["JS|Ruler.ViewPointer"] = {
            config: "ruler.viewPointer", jsFn: function (a) {
              if ("JS" == f.ruler.configType) {
                return a
              }
            }, xmlFn: function (a) {
              if ("JS" !=
                  f.ruler.configType) {
                return a
              }
            }, configFn: function (a) {
              if ("1" == f.ruler.use) {
                return a
              }
            }
          };
          g["XML|setting.use_ruler@view_guide_line"] = g["JS|Ruler.ViewGuideLine"] = {
            config: "ruler.viewGuideLine",
            jsFn: function (a) {
              if ("JS" == f.ruler.configType) {
                return a
              }
            },
            xmlFn: function (a) {
              if ("JS" != f.ruler.configType) {
                return a
              }
            },
            configFn: function (a) {
              if ("1" == f.ruler.use) {
                return a
              }
            }
          };
          g["XML|setting.use_ruler@guide_line_style"] = g["JS|Ruler.GuideLineStyle"] = {
            config: "ruler.guideLineStyle", jsFn: function (a) {
              if ("JS" == f.ruler.configType) {
                return a
              }
            },
            xmlFn: function (a) {
              if ("JS" != f.ruler.configType) {
                return a
              }
            }, configFn: function (a) {
              if ("1" == f.ruler.use) {
                return a
              }
            }
          };
          g["XML|setting.use_ruler@view_ruler"] = g["JS|Ruler.ViewRuler"] = {
            config: "ruler.viewRuler",
            jsFn: function (a) {
              if ("JS" == f.ruler.configType) {
                return a
              }
            },
            xmlFn: function (a) {
              if ("JS" != f.ruler.configType) {
                return a
              }
            },
            configFn: function (a) {
              if ("1" == f.ruler.use) {
                return a
              }
            }
          };
          g["XML|setting.use_ruler@mode"] = g["JS|Ruler.Mode"] = {
            config: "ruler.mode", jsFn: function (a) {
              if ("JS" == f.ruler.configType) {
                return a
              }
            }, xmlFn: function (a) {
              if ("JS" !=
                  f.ruler.configType) {
                return a
              }
            }, configFn: function (a) {
              if ("1" == f.ruler.use) {
                if ("2" == a) {
                  if (RAONKEDITOR.browser.ie && 7
                      >= RAONKEDITOR.browser.ieVersion) {
                    return "1";
                  }
                  f.ruler.viewPointer = "1";
                  f.ruler.viewGuideLine = "1";
                  f.ruler.viewRuler = "1";
                  f.autoBodyFit = "1"
                } else {
                  f.ruler.autoFitMode = "0";
                }
                return a
              }
            }
          };
          g["XML|setting.use_ruler@guide_line_color"] = g["JS|Ruler.GuideLineColor"] = {
            config: "ruler.guideLineColor", jsFn: function (a) {
              if ("JS" == f.ruler.configType) {
                return a
              }
            }, xmlFn: function (a) {
              if ("JS" != f.ruler.configType) {
                return a
              }
            }, configFn: function (a) {
              if ("1" ==
                  f.ruler.use) {
                return a
              }
            }
          };
          g["XML|setting.use_ruler@move_guide_line_color"] = g["JS|Ruler.MoveGuideLineColor"] = {
            config: "ruler.moveGuideLineColor",
            jsFn: function (a) {
              if ("JS" == f.ruler.configType) {
                return a
              }
            },
            xmlFn: function (a) {
              if ("JS" != f.ruler.configType) {
                return a
              }
            },
            configFn: function (a) {
              if ("1" == f.ruler.use && "2" == f.ruler.mode) {
                return a
              }
            }
          };
          g["XML|setting.use_ruler@move_guide_line_style"] = g["JS|Ruler.MoveGuideLineStyle"] = {
            config: "ruler.moveGuideLineStyle", jsFn: function (a) {
              if ("JS" == f.ruler.configType) {
                return a
              }
            }, xmlFn: function (a) {
              if ("JS" !=
                  f.ruler.configType) {
                return a
              }
            }, configFn: function (a) {
              if ("1" == f.ruler.use && "2" == f.ruler.mode) {
                return a
              }
            }
          };
          g["XML|setting.use_ruler@use_inoutdent"] = g["JS|Ruler.UseInoutdent"] = {
            config: "ruler.useInoutdent",
            jsFn: function (a) {
              if ("JS" == f.ruler.configType) {
                return a
              }
            },
            xmlFn: function (a) {
              if ("JS" != f.ruler.configType) {
                return a
              }
            },
            configFn: function (a) {
              if ("1" == f.ruler.use && "2" == f.ruler.mode) {
                return a
              }
            }
          };
          g["XML|setting.use_ruler@move_gap"] = g["JS|Ruler.MoveGap"] = {
            config: "ruler.moveGap", jsFn: function (a) {
              if ("JS" == f.ruler.configType) {
                return a
              }
            },
            xmlFn: function (a) {
              if ("JS" != f.ruler.configType) {
                return a
              }
            }, configFn: function (a) {
              if ("1" == f.ruler.use && "2" == f.ruler.mode) {
                return a
              }
            }
          };
          g["XML|setting.use_ruler@use_resize_event"] = g["JS|Ruler.UseResizeEvent"] = {
            config: "ruler.useResizeEvent",
            jsFn: function (a) {
              if ("JS" == f.ruler.configType) {
                return a
              }
            },
            xmlFn: function (a) {
              if ("JS" != f.ruler.configType) {
                return a
              }
            },
            configFn: function (a) {
              if ("1" == f.ruler.use && "2" == f.ruler.mode) {
                return a
              }
            }
          };
          g["XML|setting.use_ruler@default_view"] = g["JS|Ruler.DefaultView"] = {
            config: "ruler.defaultView",
            jsFn: function (a) {
              if ("JS" == f.ruler.configType) {
                return a
              }
            }, xmlFn: function (a) {
              if ("JS" != f.ruler.configType) {
                return a
              }
            }, configFn: function (a) {
              if ("1" == f.ruler.use) {
                return a
              }
            }
          };
          g["XML|setting.use_ruler@auto_fit_mode"] = g["JS|Ruler.AutoFitMode"] = {
            config: "ruler.autoFitMode",
            jsFn: function (a) {
              if ("JS" == f.ruler.configType) {
                return a
              }
            },
            xmlFn: function (a) {
              if ("JS" != f.ruler.configType) {
                return a
              }
            },
            configFn: function (a) {
              if ("1" == f.ruler.use) {
                return a
              }
            }
          };
          g["XML|setting.use_ruler@fix_editor_width"] = g["JS|Ruler.FixEditorWidth"] = {
            config: "ruler.fixEditorWidth",
            jsFn: function (a) {
              if ("JS" == f.ruler.configType) {
                return a
              }
            }, xmlFn: function (a) {
              if ("JS" != f.ruler.configType) {
                return a
              }
            }, configFn: function (a) {
              if ("1" == f.ruler.use && "2" == f.ruler.mode && "1"
                  == f.ruler.autoFitMode && "0"
                  == f.useNoncreationAreaBackground) {
                return a
              }
            }
          };
          g["XML|setting.use_ruler@use_vertical"] = g["JS|Ruler.UseVertical"] = {
            config: "ruler.useVertical", jsFn: function (a) {
              if ("JS" == f.ruler.configType) {
                return a
              }
            }, xmlFn: function (a) {
              if ("JS" != f.ruler.configType) {
                return a
              }
            }, configFn: function (a) {
              if ("1" == f.ruler.use) {
                return RAONKEDITOR.browser.ie &&
                7 >= RAONKEDITOR.browser.ieVersion && (a = 0), a
              }
            }
          };
          g["XML|setting.use_ruler@use_mouse_guide"] = g["JS|Ruler.UseMouseGuide"] = {
            config: "ruler.useMouseGuide",
            jsFn: function (a) {
              if ("JS" == f.ruler.configType) {
                return a
              }
            },
            xmlFn: function (a) {
              if ("JS" != f.ruler.configType) {
                return a
              }
            },
            configFn: function (a) {
              if ("1" == f.ruler.use && "2" == f.ruler.mode) {
                return a
              }
            }
          };
          g["XML|setting.use_ruler@use_pointer_value"] = g["JS|Ruler.UsePointerValue"] = {
            config: "ruler.usePointerValue", jsFn: function (a) {
              if ("JS" == f.ruler.configType) {
                return a
              }
            }, xmlFn: function (a) {
              if ("JS" !=
                  f.ruler.configType) {
                return a
              }
            }, configFn: function (a) {
              if ("1" == f.ruler.use) {
                return a
              }
            }
          };
          g["XML|setting.use_horizontal_line"] = {config: "horizontalLine.use"};
          g["XML|setting.use_horizontal_line@url"] = g["JS|UseHorizontalLine"] = {
            config: "horizontalLine.url",
            jsFn: function (a) {
              f.horizontalLine.use = "1";
              return a
            },
            configFn: function (a) {
              "0" == a && (f.horizontalLine.use = "0");
              return a
            }
          };
          g["XML|setting.use_horizontal_line@height"] = g["JS|UseHorizontalLineHeight"] = {
            config: "horizontalLine.height", configFn: function (a) {
              f.horizontalLine.use =
                  "2";
              return a
            }
          };
          g["XML|setting.use_horizontal_line@style"] = g["JS|UseHorizontalLineStyle"] = {config: "horizontalLine.style"};
          g["XML|setting.use_horizontal_line@repeat"] = g["JS|UseHorizontalLineRepeat"] = {config: "horizontalLine.repeat"};
          g["XML|setting.enter_tag"] = g["JS|EnterTag"] = {
            config: "enterTag",
            configFn: function (a) {
              a = a.toLowerCase();
              return "br" != a && "div" != a ? "" : a
            }
          };
          g["XML|setting.set_default_style"] = g["JS|SetDefaultStyle.Value"] = {config: "setDefaultStyle.value"};
          g["XML|setting.set_default_style@body_id"] =
              g["JS|SetDefaultStyle.BodyId"] = {
                config: "setDefaultStyle.body_id",
                configFn: function (a) {
                  if ("" != f.setDefaultStyle.value && "0"
                      != f.setDefaultStyle.value) {
                    return a
                  }
                }
              };
          g["XML|setting.set_default_style@user_style"] = g["JS|SetDefaultStyle.UserStyle"] = {
            config: "setDefaultUserStyle",
            configFn: function (a) {
              if ("" != f.setDefaultStyle.value && "0"
                  != f.setDefaultStyle.value) {
                return a.split(",")
              }
            }
          };
          g["XML|setting.set_default_style@line_height_mode"] = g["JS|SetDefaultStyle.LineHeightMode"] = {
            config: "setDefaultStyle.line_height_mode",
            configFn: function (a) {
              if ("" != f.setDefaultStyle.value && "0"
                  != f.setDefaultStyle.value) {
                return a
              }
            }
          };
          g["XML|setting.set_default_style@set_style"] = g["JS|SetDefaultStyle.SetStyle"] = {
            config: "setDefaultStyle.set_style",
            configFn: function (a) {
              if ("" == f.setDefaultStyle.value || "0"
                  == f.setDefaultStyle.value) {
                return a
              }
            }
          };
          g["XML|setting.drag_and_drop_allow"] = g["JS|DragAndDropAllow"] = {config: "dragAndDropAllow"};
          g["XML|setting.limit_paste_html_length"] = g["JS|LimitPasteHtml"] = {config: "limitPasteHtmlLength.value"};
          g["XML|setting.limit_paste_html_length@length"] =
              g["JS|LimitPasteHtmlLength"] = {
                config: "limitPasteHtmlLength.length",
                configFn: function (a) {
                  if (f.limitPasteHtmlLength.value) {
                    return parseInt(a, 10)
                  }
                }
              };
          g["XML|setting.wrap_ptag_to_source"] = g["JS|WrapPtagToSource"] = {config: "wrapPtagToSource"};
          g["XML|setting.wrap_ptag_to_source@apply_to_get_api"] = g["JS|WrapPtagToGetApi"] = {
            config: "wrapPtagToGetApi",
            xmlFn: function (a) {
              if (RAONKEDITOR.browser.gecko) {
                return a
              }
            }
          };
          g["XML|setting.wrap_ptag_to_source@skip_tag"] = g["JS|WrapPtagSkipTag"] = {config: "wrapPtagSkipTag"};
          g["XML|setting.paste_to_image"] =
              g["JS|PasteToImage"] = {
                config: "pasteToImage",
                configFn: function (a) {
                  return RAONKEDITOR.browser.mobile ? "0" : a
                }
              };
          g["XML|setting.paste_to_image@excel_image_fix"] = g["JS|ExcelImageFix"] = {config: "excelImageFix"};
          g["XML|setting.paste_to_image@popup_mode"] = g["JS|PasteToImagePopupMode"] = {config: "pasteToImagePopupMode"};
          g["XML|setting.paste_to_image@type"] = g["JS|PasteToImageType"] = {
            config: "pasteToImageType",
            configFn: function (a) {
              if (0 < a.length) {
                return a = RAONKEDITOR.util.trim(a), a.split(
                    ",")
              }
            }
          };
          g["XML|setting.paste_to_image@image_button_text"] =
              g["JS|PasteToImagePopupImageButtonText"] = {config: "pasteToImagePopupImageButtonText"};
          g["XML|setting.paste_to_image@html_button_text"] = g["JS|PasteToImagePopupHtmlButtonText"] = {config: "pasteToImagePopupHtmlButtonText"};
          g["XML|setting.agent_temp_root_directory"] = g["JS|AgentTempRootDirectory"] = {config: "agentTempRootDirectory"};
          g["XML|setting.target_domain_for_edit"] = g["JS|TargetDomainForEdit"] = {config: "targetDomainForEdit"};
          g["XML|setting.color_picker_input_kind"] = g["JS|ColorPickerInputKind"] = {config: "colorPickerInputKind"};
          g["XML|setting.cell_selection_mode"] = g["JS|CellSelectionMode"] = {config: "cellSelectionMode"};
          g["XML|setting.remove_space_in_tagname"] = g["JS|RemoveSpaceInTagname"] = {config: "removeSpaceInTagname"};
          g["XML|setting.view_mode_browser_menu"] = g["JS|ViewModeBrowserMenu"] = {config: "viewModeBrowserMenu"};
          g["XML|setting.view_mode_allow_copy"] = g["JS|ViewModeAllowCopy"] = {config: "viewModeAllowCopy"};
          g["XML|setting.event_for_paste_image"] = g["JS|EventForPasteImage"] = {config: "eventForPasteImage"};
          g["XML|setting.remove_colgroup"] =
              g["JS|RemoveColgroup"] = {config: "removeColgroup"};
          g["XML|setting.use_htmlprocess_worker"] = g["JS|UseHtmlProcessByWorker"] = {
            config: "useHtmlProcessByWorker",
            configFn: function (a) {
              return 0 == (RAONKEDITOR.browser.HTML5Supported && "Worker"
                  in window) ? "0" : a
            }
          };
          g["XML|setting.use_htmlprocess_worker@use_set_api"] = g["JS|UseHtmlProcessByWorkerSetApi"] = {
            config: "useHtmlProcessByWorkerSetApi",
            configFn: function (a) {
              if ("1" == f.useHtmlProcessByWorker) {
                return a
              }
            }
          };
          g["XML|setting.un_orderedlist_property@ulClass"] = g["JS|UnOrderListDefaultClass"] =
              {config: "unOrderListDefaultClass"};
          g["XML|setting.un_orderedlist_property@olClass"] = g["JS|OrderListDefaultClass"] = {config: "orderListDefaultClass"};
          g["XML|setting.use_html_correction"] = g["JS|UseHtmlCorrection"] = {config: "useHtmlCorrection"};
          g["XML|setting.use_html_correction@remove_incorrect_attribute"] = g["JS|RemoveIncorrectAttribute"] = {
            config: "removeIncorrectAttribute",
            configFn: function (a) {
              if ("1" == f.useHtmlCorrection) {
                return a
              }
            }
          };
          g["XML|setting.use_html_correction@replace_space"] = g["JS|ReplaceSpace"] =
              {
                config: "replaceSpace", configFn: function (a) {
                  if ("1" == f.useHtmlCorrection) {
                    return a
                  }
                }
              };
          g["XML|setting.use_html_correction@skip_tag"] = g["JS|SkipTagInParser"] = {
            config: "skipTagInParser",
            configFn: function (a) {
              if ("1" == f.useHtmlCorrection) {
                return a
              }
            }
          };
          g["XML|setting.use_html_correction@limit_length"] = g["JS|HtmlCorrectionLimitLength"] = {
            config: "htmlCorrectionLimitLength",
            configFn: function (a) {
              if ("1"
                  == f.useHtmlCorrection) {
                return RAONKEDITOR.util.parseIntOr0(a)
              }
            }
          };
          g["XML|setting.formlist_url"] = g["JS|FormListUrl"] = {
            config: "forms_url",
            configFn: function (a) {
              "/" == a.substring(0, 1) && (a = location.protocol + "//"
                  + location.host + a);
              return a
            }
          };
          g["XML|setting.emoticon_url"] = g["JS|EmoticonUrl"] = {
            config: "emoticon_url",
            configFn: function (a) {
              "/" == a.substring(0, 1) && (a = location.protocol + "//"
                  + location.host + a);
              return a
            }
          };
          g["XML|setting.set_auto_save"] = g["JS|SetAutoSave.Mode"] = {config: "setAutoSave.mode"};
          g["XML|setting.set_auto_save@interval"] = g["JS|SetAutoSave.Interval"] = {
            config: "setAutoSave.interval", configFn: function (a) {
              if ("1" == f.setAutoSave.mode &&
                  (a = Math.floor(10 * a) / 10, .5 <= a)) {
                return a
              }
            }
          };
          g["XML|setting.set_auto_save@max_count"] = g["JS|SetAutoSave.MaxCount"] = {
            config: "setAutoSave.maxCount",
            configFn: function (a) {
              if ("0" != f.setAutoSave.mode) {
                return 10
                < RAONKEDITOR.util.parseIntOr0(a) && (a = "10"), a
              }
            }
          };
          g["XML|setting.set_auto_save@unique_key"] = g["JS|SetAutoSave.UniqueKey"] = {
            config: "setAutoSave.unique_key",
            configFn: function (a) {
              if ("0" != f.setAutoSave.mode) {
                return a
              }
            }
          };
          g["XML|setting.set_auto_save@use_encrypt"] = g["JS|SetAutoSave.UseEncrypt"] = {
            config: "setAutoSave.use_encrypt",
            configFn: function (a) {
              if ("0" != f.setAutoSave.mode) {
                return a
              }
            }
          };
          g["XML|setting.set_auto_save@use_manually_save"] = g["JS|SetAutoSave.UseManuallySave"] = {config: "setAutoSave.useManuallySave"};
          g["XML|setting.set_auto_save@use_manually_save_shortcut_key"] = g["JS|SetAutoSave.UseManuallySaveShortcutKey"] = {
            config: "setAutoSave.useManuallySaveShortcutKey",
            configFn: function (a) {
              if ("1" == f.setAutoSave.useManuallySave) {
                return a
              }
            }
          };
          g["XML|setting.set_auto_save@save_and_start_interval"] = g["JS|SetAutoSave.SaveAndStartInterval"] =
              {config: "setAutoSave.saveAndStartInterval"};
          g["XML|setting.set_auto_save@popup_width"] = g["JS|SetAutoSave.PopupWidth"] = {config: "setAutoSave.popupWidth"};
          g["XML|setting.set_auto_save@popup_height"] = g["JS|SetAutoSave.PopupHeight"] = {config: "setAutoSave.popupHeight"};
          g["XML|setting.insert_carriage_return"] = g["JS|InsertCarriageReturn"] = {config: "insertCarriageReturn"};
          g["XML|setting.return_event@mouse_event"] = g["JS|ReturnEventMouse"] = {config: "returnEvent.mouse_event"};
          g["XML|setting.return_event@keyboard_event"] =
              g["JS|ReturnEventKeyboard"] = {config: "returnEvent.key_event"};
          g["XML|setting.return_event@command_event"] = g["JS|ReturnEventCommand"] = {config: "returnEvent.command_event"};
          g["XML|setting.return_event@focus_event"] = g["JS|ReturnEventFocus"] = {config: "returnEvent.focus_event"};
          g["XML|setting.return_event@drag_event"] = g["JS|ReturnEventDrag"] = {config: "returnEvent.drag_event"};
          g["XML|setting.use_correct_in_outdent"] = g["JS|UseCorrectInOutdent"] = {config: "useCorrectInOutdent"};
          g["XML|setting.browser_bugfixed.ie11_jaso"] =
              g["JS|Ie11BugFixedJASO"] = {
                config: "ie11_BugFixed_JASO",
                configFn: function (a) {
                  if (RAONKEDITOR.browser.ie && (7
                      == RAONKEDITOR.browser.trident || 12
                      <= RAONKEDITOR.browser.ieVersion)) {
                    return a
                  }
                }
              };
          g["XML|setting.browser_bugfixed.ie11_jaso@replace_br"] = g["JS|Ie11BugFixedReplaceBr"] = {
            config: "ie11_BugFixed_ReplaceBr",
            configFn: function (a) {
              if ("1" == f.ie11_BugFixed_JASO) {
                return a
              }
            }
          };
          g["XML|setting.browser_bugfixed.ie11_jaso@delete_table_align"] = g["JS|Ie11BugFixedDeleteTableAlign"] = {
            config: "ie11_BugFixed_DeleteTableAlign",
            allowEmpty: !0, jsFn: function (a) {
              "" != a && (this.inEmpty = !0);
              return a
            }, configFn: function (a) {
              if ("1" == f.ie11_BugFixed_JASO) {
                return "" == a ? "1"
                == f.ie11_BugFixed_JASO ? "1" : "0" : a
              }
            }
          };
          g["XML|setting.browser_bugfixed.ie11_jaso@replace_align_margin"] = g["JS|Ie11BugFixedReplaceAlignMargin"] = {config: "ie11_BugFixed_ReplaceAlignMargin"};
          g["XML|setting.browser_bugfixed.ie11_typing_bug_in_table"] = g["JS|Ie11BugFixedTypingBugInTable"] = {
            config: "ie11_BugFixed_typing_bug_in_table",
            configFn: function (a) {
              if ("0" != f.ie11_BugFixed_JASO &&
                  RAONKEDITOR.browser.ie && 11
                  == RAONKEDITOR.browser.ieVersion) {
                return a
              }
            }
          };
          g["XML|setting.browser_bugfixed.ie_remove_hyfont"] = g["JS|IeBugFixedHyfont"] = {config: "ie_BugFixed_Hyfont"};
          g["XML|setting.browser_bugfixed.ie_remove_hyfont@replace_font"] = g["JS|IeBugFixedHyfontReplaceFont"] = {
            config: "ie_BugFixed_Hyfont_Replace_Font",
            configFn: function (a) {
              if ("1" == f.ie_BugFixed_Hyfont) {
                a = a.split("|");
                for (var c = a.length, b = 0; b < c; b++) {
                  var e = a[b].split(",");
                  f.ie_BugFixed_Hyfont_Replace_Font[e[0]] = e[1]
                }
              }
              return f.ie_BugFixed_Hyfont_Replace_Font
            }
          };
          g["XML|setting.browser_bugfixed.apply_all_browser"] = g["JS|IeBugFixedApplyAllBrowser"] = {
            config: "ie_BugFixed_Apply_All_Browser",
            configFn: function (a) {
              "1" == a
              && (f.ie11_BugFixed_JASO = "2", f.ie11_BugFixed_DeleteTableAlign = "1");
              return a
            }
          };
          g["XML|setting.replace_empty_tag_with_space"] = g["JS|ReplaceEmptyTagWithSpace"] = {config: "replaceEmptyTagWithSpace"};
          g["XML|setting.image_custom_property_delimiter"] = g["JS|ImageCustomPropertyDelimiter"] = {config: "imageCustomPropertyDelimiter"};
          g["XML|setting.manager_mode@use"] =
              g["JS|ManagerMode"] = {config: "formMode"};
          g["XML|setting.manager_mode.event_list.event"] = g["JS|EventList"] = {
            config: "eventList",
            valueType: "array",
            jsFn: function (a) {
              if ("1" == f.formMode) {
                return a.split(",")
              }
            },
            configFn: function (a) {
              if ("1" == f.formMode) {
                return a
              }
            }
          };
          g["XML|setting.manager_mode.table_lock@default_show_lock_icon_user_mode"] = g["JS|AdminTableLock.DefaultShowLockIconUserMode"] = {
            config: "adminTableLock.defaultShowLockIconUserMode",
            jsFn: function (a) {
              if (!f.adminTableLock.configType || "JS"
                  == f.adminTableLock.configType) {
                return f.adminTableLock.configType =
                    "JS", a
              }
            },
            xmlFn: function (a) {
              if (!f.adminTableLock.configType || "XML"
                  == f.adminTableLock.configType) {
                return f.adminTableLock.configType = "XML", a
              }
            }
          };
          g["XML|setting.manager_mode.table_lock@default_lock_name"] = g["JS|AdminTableLock.DefaultLockName"] = {
            config: "adminTableLock.defaultLockName", jsFn: function (a) {
              if (!f.adminTableLock.configType || "JS"
                  == f.adminTableLock.configType) {
                return f.adminTableLock.configType = "JS", a
              }
            }, xmlFn: function (a) {
              if (!f.adminTableLock.configType || "XML"
                  == f.adminTableLock.configType) {
                return f.adminTableLock.configType =
                    "XML", a
              }
            }
          };
          g["XML|setting.manager_mode.table_lock@check_lock_name"] = g["JS|AdminTableLock.CheckLockName"] = {
            config: "adminTableLock.checkLockName",
            jsFn: function (a) {
              if (!f.adminTableLock.configType || "JS"
                  == f.adminTableLock.configType) {
                return f.adminTableLock.configType = "JS", a
              }
            },
            xmlFn: function (a) {
              if (!f.adminTableLock.configType || "XML"
                  == f.adminTableLock.configType) {
                return f.adminTableLock.configType = "XML", a
              }
            },
            configFn: function (a) {
              return a.split(",")
            }
          };
          g["XML|setting.manager_mode.table_lock@default_table_lock_mode"] =
              g["JS|AdminTableLock.DefaultTableLockMode"] = {
                config: "adminTableLock.defaultTableLockMode",
                jsFn: function (a) {
                  if (!f.adminTableLock.configType || "JS"
                      == f.adminTableLock.configType) {
                    return f.adminTableLock.configType = "JS", a
                  }
                },
                xmlFn: function (a) {
                  if (!f.adminTableLock.configType || "XML"
                      == f.adminTableLock.configType) {
                    return f.adminTableLock.configType = "XML", a
                  }
                }
              };
          g["XML|setting.table_lock_user_mode"] = g["JS|UserTableLock.Use"] = {
            config: "userTableLock.use", jsFn: function (a) {
              f.userTableLock.configType = "JS";
              return a
            }, xmlFn: function (a) {
              f.userTableLock.configType =
                  "XML";
              return a
            }
          };
          g["XML|setting.table_lock_user_mode@lock_name"] = g["JS|UserTableLock.LockName"] = {
            config: "userTableLock.lockName",
            jsFn: function (a) {
              if ("JS" == f.userTableLock.configType) {
                return a
              }
            },
            xmlFn: function (a) {
              if ("JS" != f.userTableLock.configType) {
                return a
              }
            },
            configFn: function (a) {
              if ("1" == f.userTableLock.use) {
                return a.split(",")
              }
            }
          };
          g["XML|setting.table_lock_user_mode@default_table_lock_mode"] = g["JS|UserTableLock.DefaultTableLockMode"] = {
            config: "userTableLock.defaultTableLockMode", jsFn: function (a) {
              if ("JS" ==
                  f.userTableLock.configType) {
                return a
              }
            }, xmlFn: function (a) {
              if ("JS" != f.userTableLock.configType) {
                return a
              }
            }, configFn: function (a) {
              if ("1" == f.userTableLock.use) {
                return a
              }
            }
          };
          g["XML|setting.table_lock_user_mode@default_show_lock_icon"] = g["JS|UserTableLock.DefaultShowLockIcon"] = {
            config: "userTableLock.defaultShowLockIcon",
            jsFn: function (a) {
              if ("JS" == f.userTableLock.configType) {
                return a
              }
            },
            xmlFn: function (a) {
              if ("JS" != f.userTableLock.configType) {
                return a
              }
            },
            configFn: function (a) {
              if ("1" == f.userTableLock.use) {
                return a
              }
            }
          };
          g["XML|setting.table_lock_user_mode@allow_change_mode"] =
              g["JS|UserTableLock.AllowChangeMode"] = {config: "userTableLock.allowChangeMode"};
          g["XML|setting.open_document@before_open_event"] = g["JS|OpenDocument.BeforeOpenEvent"] = {config: "openDocument.beforeOpenEvent"};
          g["XML|setting.open_document.word@max_size"] = g["JS|OpenDocument.Word.MaxSize"] = {
            config: "openDocument.word.maxSize",
            xmlFn: function (a) {
              return parseInt(a, 0)
            }
          };
          g["XML|setting.open_document.word@max_page"] = g["JS|OpenDocument.Word.MaxPage"] = {
            config: "openDocument.word.maxPage", xmlFn: function (a) {
              return parseInt(a,
                  0)
            }
          };
          g["XML|setting.open_document.excel@max_size"] = g["JS|OpenDocument.Excel.MaxSize"] = {
            config: "openDocument.excel.maxSize",
            xmlFn: function (a) {
              return parseInt(a, 0)
            }
          };
          g["XML|setting.open_document.excel@max_sheet"] = g["JS|OpenDocument.Excel.MaxSheet"] = {
            config: "openDocument.excel.maxSheet",
            xmlFn: function (a) {
              return parseInt(a, 0)
            }
          };
          g["XML|setting.open_document.powerpoint@max_size"] = g["JS|OpenDocument.Powerpoint.MaxSize"] = {
            config: "openDocument.powerpoint.maxSize",
            xmlFn: function (a) {
              return parseInt(a, 0)
            }
          };
          g["XML|setting.open_document.powerpoint@max_slide"] =
              g["JS|OpenDocument.Powerpoint.MaxSlide"] = {
                config: "openDocument.powerpoint.maxSlide",
                xmlFn: function (a) {
                  return parseInt(a, 0)
                }
              };
          g["XML|setting.open_document@use_hwp"] = g["JS|OpenDocument.UseHwp"] = {config: "openDocument.useHwp"};
          g["XML|setting.open_document@use_html5_fileopen"] = g["JS|OpenDocument.UseHtml5FileOpen"] = {config: "openDocument.useHtml5FileOpen"};
          g["XML|setting.remove_last_br_tag"] = g["JS|RemoveLastBrTag"] = {config: "removeLastBrTag"};
          g["XML|setting.editor_body_editable"] = g["JS|EditorBodyEditable"] =
              {
                config: "editorBodyEditableTemp", configFn: function (a) {
                  "0" == a
                      ? (f.editorBodyEditable = !1, f.editorBodyEditableEx = !1)
                      : "1" == a
                      && (f.editorBodyEditable = !0, f.editorBodyEditableEx = !0);
                  return a
                }
              };
          g["XML|setting.editor_body_editable@mode"] = g["JS|EditorBodyEditableMode"] = {config: "editorBodyEditableMode"};
          g["XML|setting.replace_outside_image"] = g["JS|ReplaceOutsideImage"] = {
            config: "replaceOutsideImage.use",
            jsFn: function (a) {
              f.replaceOutsideImage.configType = "JS";
              return a
            }
          };
          g["XML|setting.replace_outside_image@except_domain"] =
              g["JS|ReplaceOutsideImageExceptDomain"] = {
                config: "replaceOutsideImage.exceptDomain",
                jsFn: function (a) {
                  if ("JS" == f.replaceOutsideImage.configType) {
                    return a
                  }
                },
                xmlFn: function (a) {
                  if ("JS" != f.replaceOutsideImage.configType) {
                    return a
                  }
                },
                configFn: function (a) {
                  if ("1" == f.replaceOutsideImage.use) {
                    return a.split(",")
                  }
                }
              };
          g["XML|setting.replace_outside_image@target_domain"] = g["JS|ReplaceOutsideImageTargetDomain"] = {
            config: "replaceOutsideImage.targetDomain", jsFn: function (a) {
              if ("JS" == f.replaceOutsideImage.configType) {
                return a
              }
            },
            xmlFn: function (a) {
              if ("JS" != f.replaceOutsideImage.configType) {
                return a
              }
            }, configFn: function (a) {
              if ("1" == f.replaceOutsideImage.use) {
                return a.split(",")
              }
            }
          };
          g["XML|setting.remove_comment"] = g["JS|RemoveComment"] = {config: "removeComment"};
          g["XML|setting.set_default_value_in_empty_tag"] = g["JS|SetDefaultValueInEmptyTag"] = {
            config: "setDefaultValueInEmptyTag",
            configFn: function (a) {
              return a.split(",")
            }
          };
          g["XML|setting.document.doc_title"] = g["JS|Document.DocTitle"] = {config: "document.docTitle"};
          g["XML|setting.hybrid.hybrid_window_mode"] =
              g["JS|HybridWindowMode"] = {config: "hybridWindowMode"};
          g["XML|setting.use_get_htmltolowercase"] = g["JS|UseGetHtmlToLowerCase"] = {config: "useGetHtmlToLowerCase"};
          g["XML|setting.apply_style_empty_tag"] = g["JS|ApplyStyleEmptyTag"] = {config: "applyStyleEmptyTag"};
          g["XML|setting.auto_destroy"] = g["JS|AutoDestroy.Use"] = {config: "autoDestroy.use"};
          g["XML|setting.auto_destroy@move_cursor"] = g["JS|AutoDestroy.MoveCursor"] = {config: "autoDestroy.moveCursor"};
          g["XML|setting.init_focus"] = g["JS|InitFocus"] = {
            config: "initFocusTemp",
            configFn: function (a) {
              "0" == a ? (f.initFocus = !1, f.initFocusForSetAPI = !1) : "1"
                  == a && (f.initFocus = !0, f.initFocusForSetAPI = !0);
              return a
            }
          };
          g["XML|setting.empty_tag_remove_in_setapi"] = g["JS|EmptyTagRemoveInSetapi"] = {config: "emptyTagRemoveInSetapi"};
          g["XML|setting.replace_empty_span_tag_in_setapi"] = g["JS|ReplaceEmptySpanTagInSetapi"] = {config: "replaceEmptySpanTagInSetapi"};
          g["XML|setting.replace_empty_span_tag_in_setapi@only_table"] = g["JS|ReplaceEmptySpanTagInSetapiOnlyTable"] = {config: "replaceEmptySpanTagInSetapiOnlyTable"};
          g["XML|setting.remove_mso_class"] = g["JS|RemoveMsoClass"] = {config: "removeMsoClass"};
          g["JS|PhotoEditorId"] = {config: "photoEditorId"};
          g["XML|setting.table_template_list_url"] = g["JS|TableTemplateListUrl"] = {
            config: "tableTemplateListUrl",
            configFn: function (a) {
              "/" == a.substring(0, 1) && (a = location.protocol + "//"
                  + location.host + a);
              return a
            }
          };
          g["XML|setting.table_template_list_url@use_basic_template"] = g["JS|UseBasicTemplate"] = {
            config: "useBasicTemplate",
            configFn: function (a) {
              if ("" != f.tableTemplateListUrl) {
                return a
              }
            }
          };
          g["XML|setting.use_replace_image"] = g["JS|UseReplaceImage"] = {config: "useReplaceImage"};
          g["XML|setting.remove_empty_tag"] = g["JS|RemoveEmptyTag"] = {config: "removeEmptyTag"};
          g["XML|setting.remove_empty_tag@use_set_value"] = g["JS|RemoveEmptyTagSetValue"] = {
            config: "removeEmptyTagSetValue",
            configFn: function (a) {
              if ("0" == f.removeEmptyTag) {
                return a
              }
            }
          };
          g["XML|setting.remove_empty_tag@insert_nbsp_for_line_break"] = g["JS|RemoveEmptyTagInsertNbspForLineBreak"] = {
            config: "removeEmptyTagInsertNbspForLineBreak",
            configFn: function (a) {
              if ("0" ==
                  f.removeEmptyTag) {
                return a
              }
            }
          };
          g["JS|ButtonText001"] = {config: "buttonText001"};
          g["JS|NTLM"] = {
            config: "NTLM", configFn: function (a) {
              if (-1 < a.indexOf("Basic")) {
                return a
              }
            }
          };
          g["XML|setting.disable_insert_image"] = g["JS|DisableInsertImage"] = {
            config: "disableInsertImage",
            configFn: function (a) {
              if ("" != a) {
                var c = "";
                return c = "all" == a.toLowerCase()
                    ? ",image,cell,doc_bg_image,hyperlink,table,paste_image,video_poster,"
                    : "," + a.toLowerCase() + ","
              }
            }
          };
          g["XML|uploader_setting.handler_url_save_for_notes"] = g["JS|HandlerUrlSaveForNotes"] =
              {config: "post_url_save_for_notes"};
          g["XML|extra_setting.paste_image_base64"] = g["JS|PasteImageBase64"] = {config: "paste_image_base64"};
          g["XML|uploader_setting.handler_url_save"] = g["JS|HandlerUrlSave"] = {config: "handlerUrlSave"};
          g["XML|extra_setting.paste_image_base64@remove"] = g["JS|PasteImageBase64Remove"] = {
            config: "paste_image_base64_remove",
            configFn: function (a) {
              "1" == a && (f.pasteToImage = "0");
              return a
            }
          };
          g["XML|extra_setting.empty_tag_remove"] = g["JS|EmptyTagRemove"] = {config: "empty_tag_remove"};
          g["XML|extra_setting.custom_code"] =
              g["JS|CustomCode"] = {
                config: "custom_code",
                configFn: function (a) {
                  return c.CustomCode = a
                }
              };
          g["XML|extra_setting.paste_image_base64@view_base64_source"] = g["JS|ViewImgBase64Source"] = {config: "viewImgBase64Source"};
          g["XML|uploader_setting@method"] = g["JS|UploadMethod"] = {
            config: "uploadMethod",
            configFn: function (a) {
              if ("base64" == a) {
                var c = "FileReader" in window;
                "html5" != f.runtimes || c ? f.paste_image_base64 = "1"
                    : f.uploadMethod = "upload";
                return a.toLowerCase()
              }
            }
          };
          g["XML|uploader_setting@use_html5mode"] = g["JS|UploadUseHTML5"] =
              {
                config: "uploadUseHTML5", configFn: function (a) {
                  return 1
                }
              };
          g["XML|uploader_setting@file_name_encoding"] = g["JS|UploadFileNameEncoding"] = {config: "uploadFileNameEncoding"};
          g["XML|uploader_setting@upload_image_file_object"] = g["JS|UploadImageFileObject"] = {config: "uploadImageFileObject"};
          g["XML|setting.DEXT5_install"] = g["JS|DEXT5Install"] = {config: "dext5Install"};
          g["XML|uploader_setting.image_convert_format"] = g["JS|ImageConvertFormat"] = {config: "image_convert_format"};
          g["XML|uploader_setting.image_convert_width"] =
              g["JS|ImageConvertWidth"] = {config: "image_convert_width"};
          g["XML|uploader_setting.image_convert_height"] = g["JS|ImageConvertHeight"] = {config: "image_convert_height"};
          g["XML|uploader_setting.image_auto_fit"] = g["JS|ImageAutoFit"] = {config: "image_auto_fit"};
          g["XML|uploader_setting.image_auto_convert"] = g["JS|ImageAutoConvert"] = {config: "imageAutoConvert"};
          g["XML|uploader_setting.allow_media_file_type"] = g["JS|AllowMediaFileType"] = {
            config: "allowMediaFileType", configFn: function (a) {
              if (0 < a.length) {
                return a = a.replace(/\s/gi,
                    ""), a.split(",")
              }
            }
          };
          g["XML|uploader_setting.allow_media_file_type@max_file_size"] = g["JS|MaxMediaFileSize"] = {
            config: "maxMediaFileSize",
            configFn: function (a) {
              var c = RAONKEDITOR.util.getUnit(a),
                  c = RAONKEDITOR.util.getUnitSize(c);
              return parseInt(a, 10) * c
            }
          };
          g["XML|uploader_setting.allow_image_file_type"] = g["JS|AllowImageFileType"] = {
            config: "allowImageFileType",
            configFn: function (a) {
              if (0 < a.length) {
                return a = a.replace(/\s/gi, ""), a.split(",")
              }
            }
          };
          g["XML|uploader_setting.allow_image_file_type@max_file_size"] = g["JS|MaxImageFileSize"] =
              {
                config: "maxImageFileSize", configFn: function (a) {
                  var c = RAONKEDITOR.util.getUnit(a),
                      c = RAONKEDITOR.util.getUnitSize(c);
                  return parseInt(a, 10) * c
                }
              };
          g["XML|uploader_setting.allow_image_file_type@max_base64file_count"] = g["JS|MaxImageBase64fileCount"] = {config: "maxImageBase64fileCount"};
          g["XML|uploader_setting.allow_flash_file_type"] = g["JS|AllowFlashFileType"] = {
            config: "allowFlashFileType",
            configFn: function (a) {
              if (0 < a.length) {
                return a = a.replace(/\s/gi, ""), a.split(",")
              }
            }
          };
          g["XML|uploader_setting.allow_flash_file_type@max_file_size"] =
              g["JS|MaxFlashFileSize"] = {
                config: "maxFlashFileSize",
                configFn: function (a) {
                  var c = RAONKEDITOR.util.getUnit(a),
                      c = RAONKEDITOR.util.getUnitSize(c);
                  return parseInt(a, 10) * c
                }
              };
          g["XML|uploader_setting.allow_insert_file_type"] = g["JS|AllowInsertFileType"] = {
            config: "allowInsertFileType",
            configFn: function (a) {
              if (0 < a.length) {
                return a = a.replace(/\s/gi, ""), a.split(",")
              }
            }
          };
          g["XML|uploader_setting.allow_insert_file_type@max_file_size"] = g["JS|MaxInsertFileSize"] = {
            config: "maxInsertFileSize", configFn: function (a) {
              var c = RAONKEDITOR.util.getUnit(a),
                  c = RAONKEDITOR.util.getUnitSize(c);
              return parseInt(a, 10) * c
            }
          };
          g["XML|uploader_setting.allow_video_file_type"] = g["JS|AllowVideoFileType"] = {
            config: "allowVideoFileType",
            configFn: function (a) {
              if (0 < a.length) {
                return a = a.replace(/\s/gi, ""), a.split(",")
              }
            }
          };
          g["XML|uploader_setting.allow_video_file_type@max_file_size"] = g["JS|MaxVideoFileSize"] = {
            config: "maxVideoFileSize",
            configFn: function (a) {
              var c = RAONKEDITOR.util.getUnit(a),
                  c = RAONKEDITOR.util.getUnitSize(c);
              return parseInt(a, 10) * c
            }
          };
          g["XML|uploader_setting.allow_video_file_type@use_poster"] =
              g["JS|UseVideoPoster"] = {
                config: "useVideoPoster",
                configFn: function (a) {
                  RAONKEDITOR.browser.mobile && (a = "0");
                  return a
                }
              };
          g["XML|uploader_setting.allow_video_file_type@default_responsive_width"] = g["JS|VideoResponsiveWidthDefaultValue"] = {
            config: "videoResponsiveWidthDefaultValue",
            configFn: function (a) {
              return a
            }
          };
          g["XML|uploader_setting.attach_file_image"] = g["JS|AttachFileImage"] = {config: "attachFileImage"};
          g["XML|setting.file_delimiter@unit_delimiter"] = g["JS|UnitDelimiter"] = {
            config: "unitDelimiter",
            configFn: function (a) {
              return String.fromCharCode(a)
            }
          };
          g["XML|setting.file_delimiter@unit_attribute_delimiter"] = g["JS|UnitAttributeDelimiter"] = {
            config: "unitAttributeDelimiter",
            configFn: function (a) {
              return String.fromCharCode(a)
            }
          };
          g["XML|setting.inoutdent@default_size"] = g["JS|InoutdentDefaultSize"] = {config: "inoutdentDefaultSize"};
          g["XML|setting.table_property@width"] = g["JS|TableDefaultWidth"] = {
            config: "tableDefaultWidth",
            configFn: function (a) {
              return RAONKEDITOR.util.parseIntOr0(a)
            }
          };
          g["XML|setting.table_property@height"] = g["JS|TableDefaultHeight"] = {
            config: "tableDefaultHeight",
            configFn: function (a) {
              return RAONKEDITOR.util.parseIntOr0(a)
            }
          };
          g["XML|setting.table_property@class"] = g["JS|TableDefaultClass"] = {config: "tableDefaultClass"};
          g["XML|setting.table_property@inoutdent"] = g["JS|TableDefaultInoutdent"] = {config: "tableDefaultInoutdent"};
          g["XML|setting.table_property@init_inoutdent"] = g["JS|TableInitInoutdent"] = {config: "tableInitInoutdent"};
          g["XML|setting.table_property@td_height"] = g["JS|TableDefaultTdHeight"] = {config: "tableDefaultTdHeight"};
          g["XML|setting.table_property@row_max_count"] =
              g["JS|TableRowMaxCount"] = {config: "tableRowMaxCount"};
          g["XML|setting.table_property@col_max_count"] = g["JS|TableColMaxCount"] = {config: "tableColMaxCount"};
          g["XML|setting.table_property@allow_inoutdent_text"] = g["JS|AllowInoutdentText"] = {config: "allowInoutdentText"};
          g["XML|setting.table_property@default_border_color"] = g["JS|DefaultBorderColor"] = {config: "defaultBorderColor"};
          g["XML|setting.table_property@use_border_attribute"] = g["JS|UseTableBorderAttribute"] = {config: "useTableBorderAttribute"};
          g["XML|setting.table_property@adjust_cursor_in_table"] =
              g["JS|AdjustCursorInTable"] = {
                config: "adjustCursorInTable",
                configFn: function (a) {
                  return "1" == a && RAONKEDITOR.browser.gecko ? "0" : a
                }
              };
          g["XML|setting.table_property.use_mouse_inoutdent"] = g["JS|UseMouseTableInoutdent"] = {
            config: "useMouseTableInoutdentTemp",
            configFn: function (a) {
              "0" == f.dragResizeMovable && (f.useMouseTableInoutdent = "1" == a
                  ? !0 : !1);
              return a
            }
          };
          g["XML|setting.table_property.limit_table_inoutdent"] = g["JS|LimitTableInoutdent"] = {config: "limitTableInoutdent"};
          g["XML|setting.table_property.class_list"] =
              g["JS|TableClassList"] = {
                config: "tableClassList",
                configFn: function (a) {
                  return a.split(",")
                }
              };
          g["XML|setting.table_property.show_line_for_border_none"] = g["JS|ShowLineForBorderNone"] = {config: "showLineForBorderNone"};
          g["XML|setting.table_property.show_line_for_border_none@skip_class"] = g["JS|ShowLineForBorderNoneSkipClass"] = {config: "showLineForBorderNoneSkipClass"};
          g["XML|setting.table_property.show_line_for_border_none@skip_attribute"] = g["JS|ShowLineForBorderNoneSkipAttribute"] = {config: "showLineForBorderNoneSkipAttribute"};
          g["XML|setting.table_property.line_style"] = g["JS|TableLineStyleList"] = {
            config: "tableLineStyleList",
            configFn: function (a) {
              return a.split(",")
            }
          };
          g["XML|setting.table_property.use_background_image"] = g["JS|UseTableBackgroundImage"] = {config: "useTableBackgroundImage"};
          g["XML|setting.table_property.set_default_tag_in_empty_cell"] = g["JS|SetDefaultTagInEmptyCell"] = {config: "setDefaultTagInEmptyCell"};
          g["XML|setting.table_property.inside_padding_td_setting"] = g["JS|InsidePaddingTdSetting"] = {config: "insidePaddingTdSetting"};
          g["XML|setting.hyperlink_property.target"] = g["JS|HyperLinkTargetList"] = {
            config: "hyperlinkTargetList",
            configFn: function (a) {
              return a.split(",")
            }
          };
          g["XML|setting.hyperlink_property.category"] = g["JS|HyperLinkCategoryList"] = {
            config: "hyperlinkCategoryList",
            configFn: function (a) {
              return a.split(",")
            }
          };
          g["XML|setting.hyperlink_property.protocol"] = g["JS|HyperLinkProtocolList"] = {
            config: "hyperlinkProtocolList",
            configFn: function (a) {
              return a.split(",")
            }
          };
          g["XML|setting.table_property.no_resize_class"] = g["JS|TableNoResizeClass"] =
              {config: "tableNoResizeClass"};
          g["XML|setting.table_property.no_selection_class"] = g["JS|TableNoSelectionClass"] = {config: "tableNoSelectionClass"};
          g["XML|setting.table_property.no_action_class"] = g["JS|TableNoActionClass"] = {config: "tableNoActionClass"};
          g["XML|setting.table_property.auto_adjust.in_paste"] = g["JS|TableAutoAdjustInPaste"] = {config: "tableAutoAdjustInPaste"};
          g["XML|setting.table_property.auto_adjust.in_set_html"] = g["JS|TableAutoAdjustInSetHtml"] = {config: "tableAutoAdjustInSetHtml"};
          g["XML|setting.table_property.near_cell_border_style"] =
              g["JS|TableNearCellBorderStyle"] = {config: "tableNearCellBorderStyle"};
          g["XML|setting.img_default_size@width"] = g["JS|ImgDefaultWidth"] = {config: "imgDefaultWidth"};
          g["XML|setting.img_default_size@height"] = g["JS|ImgDefaultHeight"] = {
            config: "imgDefaultHeight",
            configFn: function (a) {
              if (-1 < a.indexOf("%") || -1 < f.imgDefaultWidth.indexOf("%")
                  || -1 < f.imgDefaultHeight.indexOf("%")) {
                a = "";
              }
              return a
            }
          };
          g["XML|setting.img_default_margin@margin_left"] = g["JS|ImgDefaultMarginLeft"] = {config: "imgDefaultMarginLeft"};
          g["XML|setting.img_default_margin@margin_right"] =
              g["JS|ImgDefaultMarginRight"] = {config: "imgDefaultMarginRight"};
          g["XML|setting.img_default_margin@margin_top"] = g["JS|ImgDefaultMarginTop"] = {config: "imgDefaultMarginTop"};
          g["XML|setting.img_default_margin@margin_bottom"] = g["JS|ImgDefaultMarginBottom"] = {config: "imgDefaultMarginBottom"};
          g["XML|setting.width"] = g["JS|Width"] = {
            config: "style.width",
            configFn: function (a) {
              return a + ""
            }
          };
          g["XML|setting.height@default_min_height"] = g["JS|DefaultMinHeight"] = {
            config: "style.defaultMinHeight", configFn: function (a) {
              var c =
                  parseInt(a);
              "%" == a.replace(c, "") && (a = "150px");
              return a + ""
            }
          };
          g["XML|setting.height"] = g["JS|Height"] = {
            config: "style.height",
            configFn: function (a) {
              var c = parseInt(a);
              if ("%" != a.replace(c, "")) {
                var b = parseInt(f.style.defaultMinHeight);
                a = (b > c ? b : c) + a.replace(c, "")
              }
              return a + ""
            }
          };
          g["XML|setting.skinname"] = g["JS|SkinName"] = {
            config: "style.skinName", configFn: function (a) {
              if ("random"
                  == a) {
                if (a = RAONKEDITOR.util.getSkinNames(), "undefined"
                != typeof crypto && "undefined" != typeof crypto.randomUUID) {
                  var c = crypto.randomUUID().replace(/-/g,
                          "").replace(/[a-zA-Z]/g, ""),
                      c = "" == c ? 0 : 1 * parseInt(c, 10) / Math.pow(10,
                          c.length);
                  a = a[Math.floor(11 * c)]
                } else {
                  a = a[Math.floor(11 * Math.random())];
                }
              }
              return f.style.dialogSkinName = a
            }
          };
          g["XML|setting.skinname@dialog_skinname"] = g["JS|DialogSkinName"] = {config: "style.dialogSkinName"};
          g["JS|DefaultMessage"] = {config: "defaultMessage"};
          g["JS|FirstLoadType"] = {config: "firstLoadType"};
          g["JS|FirstLoadMessage"] = {config: "firstLoadMessage"};
          g["JS|FileFieldID"] = {config: "fileFieldID"};
          g["JS|NextTabElementId"] = {config: "nextTabElementId"};
          g["JS|UserFieldID"] = {config: "userFieldID"};
          g["JS|UserFieldValue"] = {config: "userFieldValue"};
          g["XML|setting.source_viewtype"] = g["JS|SourceViewtype"] = {config: "sourceViewtype"};
          g["XML|setting.source_viewtype@use_selection_mark"] = g["JS|UseSelectionMark"] = {
            config: "useSelectionMark",
            configFn: function (a) {
              "1" == a && (f.sourceViewtype = "2");
              return a
            }
          };
          g["XML|setting.source_viewtype@unformatted"] = g["JS|SourceViewtypeUnformatted"] = {
            config: "sourceViewtype_unformatted", configFn: function (a) {
              if ("3" == f.sourceViewtype &&
                  a && "" != a) {
                return a = a.split(",")
              }
            }
          };
          g["XML|setting.source_viewtype@empty_tag_mode"] = g["JS|SourceViewtypeEmptyTagMode"] = {config: "sourceViewtypeEmptyTagMode"};
          g["XML|setting.user_css_url"] = g["JS|UserCssUrl"] = {
            config: "userCssUrl",
            configFn: function (a) {
              return RAONKEDITOR.util.setProtocolBaseDomainURL(a)
            }
          };
          g["XML|setting.user_css_url@always_set"] = g["JS|UserCssAlwaysSet"] = {config: "userCssAlwaysSet"};
          g["XML|setting.web_font_css_url"] = g["JS|WebFontCssUrl"] = {
            config: "webFontCssUrl",
            configFn: function (a) {
              return RAONKEDITOR.util.setProtocolBaseDomainURL(a)
            }
          };
          g["XML|setting.web_font_css_url@always_set"] = g["JS|WebFontCssAlwaysSet"] = {config: "webFontCssAlwaysSet"};
          g["XML|setting.user_js_url"] = g["JS|UserJsUrl"] = {
            config: "userJsUrl",
            configFn: function (a) {
              return a = RAONKEDITOR.util.setProtocolBaseDomainURL(a)
            }
          };
          g["XML|setting.xhtml_value"] = g["JS|XhtmlValue"] = {config: "xhtml_value"};
          g["XML|setting.system_title"] = g["JS|SystemTitle"] = {
            config: "system_title",
            configFn: function (a) {
              "0" == a && (a = "");
              return a
            }
          };
          g["XML|setting.view_mode_auto_height"] = g["JS|ViewModeAutoHeight"] =
              {config: "view_mode_auto_height"};
          g["XML|setting.view_mode_auto_width"] = g["JS|ViewModeAutoWidth"] = {config: "view_mode_auto_width"};
          g["JS|ChangeMultiValueMode"] = {config: "changeMultiValueMode"};
          g["XML|setting.table_auto_adjust"] = g["JS|TableAutoAdjust"] = {config: "tableAutoAdjust"};
          g["XML|setting.allow_link_media_caption"] = g["JS|AllowLinkMediaCaption"] = {config: "allowLinkMediaCaption"};
          g["XML|setting.user_help_url"] = g["JS|UserHelpUrl"] = {
            config: "userHelpUrl", configFn: function (a) {
              if (0 == a.substring(0, 4).toLowerCase().indexOf(
                  "http")) {
                return "/" !=
                a.substring(a.length - 1, a.length)
                && (a += "/"), f.webPath.help = a
              }
            }
          };
          g["XML|setting.img_upload_contenttype"] = g["JS|ImgUploadContenttype"] = {config: "imgUploadContenttype"};
          g["JS|MimeCharset"] = {config: "mimeCharset"};
          g["JS|MimeConentEncodingType"] = {config: "mimeConentEncodingType"};
          g["JS|MimeLocalOnly"] = {config: "mimeLocalOnly"};
          g["JS|MimeRemoveHeader"] = {config: "mimeRemoveHeader"};
          g["JS|MimeFileTypeFilter"] = {config: "mimeFileTypeFilter"};
          g["JS|UserOpenDlgTitle"] = {config: "userOpenDlgTitle"};
          g["JS|UserOpenDlgType"] =
              {config: "userOpenDlgType"};
          g["JS|UserOpenDlgInitDir"] = {config: "userOpenDlgInitDir"};
          g["JS|UserImageDlgStyle"] = {config: "userImageDlgStyle"};
          g["JS|MimeBaseURL"] = {config: "mimeBaseURL"};
          g["XML|setting.showdialog_pos"] = g["JS|ShowDialogPosition"] = {config: "showDialogPosition"};
          g["XML|status_bar.status"] = g["JS|StatusBarItem"] = {
            config: "statusBarItem",
            valueType: "array",
            jsFn: function (a) {
              return a.split(",")
            }
          };
          g["XML|status_bar@init_mode"] = g["JS|StatusBarInitMode"] = {config: "statusBarInitMode"};
          g["XML|status_bar.status@title"] =
              g["JS|StatusBarItemTitle"] = {
                config: "statusBarTitle",
                valueType: "array",
                jsFn: function (a) {
                  return a.split(",")
                }
              };
          g["XML|setting.grid_color"] = g["JS|GridColor"] = {config: "gridColor"};
          g["XML|setting.grid_color_nm"] = g["JS|GridColorName"] = {config: "gridColorName"};
          g["XML|setting.grid_spans"] = g["JS|GridSpans"] = {config: "gridSpans"};
          g["XML|setting.grid_form"] = g["JS|GridForm"] = {config: "gridForm"};
          g["XML|setting.encoding"] = g["JS|Encoding"] = {config: "encoding"};
          g["XML|setting.doctype@enforce_doctype"] = g["JS|EnforceDoctype"] =
              {
                config: "enforceDoctype", configFn: function (a) {
                  return "0" == f.useEnterpriseMode ? a : 0
                }
              };
          g["XML|setting.doctype"] = g["JS|DocType"] = {config: "docType"};
          g["XML|setting.xmlnsname"] = g["JS|Xmlnsname"] = {config: "xmlnsname"};
          g["XML|setting.show_font_real"] = g["JS|ShowFontReal"] = {config: "showRealFont"};
          g["XML|setting.lang"] = g["JS|Lang"] = {
            config: "lang",
            jsFn: function (a) {
              if (2 <= a.length) {
                return a
              }
            },
            configFn: function (a) {
              f.managerLang = a;
              a = "" == a ? "ko-kr" : RAONKEDITOR.util.getUserLang(a);
              return RAONKEDITOR.UseLang = a
            }
          };
          g["XML|setting.language_extend_object"] =
              g["JS|LanguageExtendObject"] = {config: "languageExtendObject"};
          g["XML|setting.accessibility"] = g["JS|Accessibility"] = {config: "accessibility"};
          g["XML|setting.accessibility@validation_item"] = g["JS|AccessibilityValidationItems"] = {config: "accessibilityValidationItems"};
          g["XML|setting.accessibility@tab_sequence_mode"] = g["JS|TabSequenceMode"] = {config: "tabSequenceMode"};
          g["XML|uploader_setting.save_foldername_rule"] = g["JS|SaveFolderNameRule"] = {config: "saveFolderNameRule"};
          g["XML|uploader_setting.save_file_foldername_rule"] =
              g["JS|SaveFileFolderNameRule"] = {config: "saveFileFolderNameRule"};
          g["XML|uploader_setting.save_filename_rule"] = g["JS|SaveFileNameRule"] = {
            config: "saveFileNameRule",
            configFn: function (a) {
              if ("GUID" == a || "REALFILENAME" == a) {
                return a
              }
            }
          };
          g["XML|uploader_setting.save_filename_rule_ex"] = g["JS|SaveFileNameRuleEx"] = {config: "saveFileNameRuleEx"};
          g["XML|setting.show_topmenu"] = g["JS|ShowTopMenu"] = {
            config: "top_menu",
            configFn: function (a) {
              return "0" == a ? "1" : "0"
            }
          };
          g["XML|setting.topmenu"] = g["JS|TopMenu"] = {config: "top_menu"};
          g["XML|setting.show_toolbar"] = g["JS|ShowToolBar"] = {
            config: "tool_bar",
            configFn: function (a) {
              switch (a) {
                case "1":
                  return "2";
                case "2":
                  return "1";
                case "3":
                  return "0"
              }
              return "3"
            }
          };
          g["XML|setting.toolbar"] = g["JS|ToolBar"] = {
            config: "tool_bar",
            configFn: function (a) {
            }
          };
          g["XML|setting.show_topstatusbar"] = {
            config: "top_status_bar",
            configFn: function (a) {
              return "0" == a ? "1" : "0"
            }
          };
          g["XML|setting.topstatusbar"] = g["JS|ShowTopStatusBar"] = {
            config: "top_status_bar", xmlFn: function (a) {
              return "" != a ? a : "1"
            }, jsFn: function (a) {
              return "0" ==
              a ? "1" : "0"
            }
          };
          g["XML|setting.show_statusbar"] = g["XML|setting.statusbar"] = g["JS|ShowStatusBar"] = {
            config: "status_bar",
            configFn: function (a) {
              return "0" == a ? "1" : "0"
            }
          };
          g["XML|setting.toolbar@grouping"] = g["XML|setting.show_toolbar@grouping"] = g["JS|ToolBarGrouping"] = {config: "tool_bar_grouping"};
          g["XML|setting.resizebar"] = g["JS|ResizeBar"] = {config: "resize_bar"};
          g["XML|tool_bar_admin.tool"] = g["JS|ToolBarAdmin"] = {
            config: "tool_bar_admin",
            valueType: "array",
            jsFn: function (a) {
              return a.split(",")
            }
          };
          g["XML|setting.statusbar@loading"] =
              g["XML|setting.show_statusbar@loading"] = g["JS|StatusBarLoading"] = {config: "statusBarLoading"};
          g["XML|setting.topstatusbar@loading"] = g["XML|setting.show_topstatusbar@loading"] = g["JS|TopStatusBarLoading"] = {config: "topStatusBarLoading"};
          g["XML|setting.use_auto_toolbar"] = g["JS|UseAutoToolBar"] = {
            config: "useAutoToolbar",
            configFn: function (a) {
              if (RAONKEDITOR.browser.mobile) {
                return "1" == a
                && (f.tool_bar_grouping = "0"), a
              }
            }
          };
          g["JS|AutoToolBar"] = {
            config: "autoToolbar", configFn: function (a) {
              if ("1" == f.useAutoToolbar) {
                for (var c in a) {
                  try {
                    var b =
                        a[c];
                    f.autoToolbar[c] = "0" == b ? [] : b.split(",")
                  } catch (e) {
                    RAONKEDITOR && RAONKEDITOR.logMode && console
                    && console.log(
                        e)
                  }
                }
                for (c in f.autoToolbar) {
                  b = f.autoToolbar[c];
                  a = b.length;
                  for (var d = 0; d < a; d++) {
                    var g = b[d];
                    0 > f.toolBar2.indexOf(g) && f.toolBar2.push(g)
                  }
                }
                for (d = f.toolBar2.length - 1; 0 <= d; d--) {
                  -1
                  < f.toolBar1.indexOf(f.toolBar2[d]) && f.toolBar2.splice(d, 1)
                }
              }
            }
          };
          g["XML|tool_bar_2.tool:mini_photo_editor"] = g["XML|tool_bar_1.tool:mini_photo_editor"] = g["JS|UseMiniImageEditor"] = {
            config: "useMiniImageEditor", configFn: function (a) {
              return RAONKEDITOR.browser.ie &&
              9 >= RAONKEDITOR.browser.ieVersion || "Windows"
              == RAONKEDITOR.UserAgent.os.name && RAONKEDITOR.browser.safari
                  ? "0" : -1 < f.toolbarArr1.indexOf("mini_photo_editor") || -1
                  < f.toolbarArr2.indexOf("mini_photo_editor") ? "1" : "0"
            }
          };
          g["XML|setting.mini_photo_editor.width"] = g["JS|MiniPhotoEditor.Width"] = {config: "miniPhotoEditor.width"};
          g["XML|setting.mini_photo_editor.height"] = g["JS|MiniPhotoEditor.Height"] = {config: "miniPhotoEditor.height"};
          g["XML|setting.mini_photo_editor.background_color"] = g["JS|MiniPhotoEditor.BackgroundColor"] =
              {config: "miniPhotoEditor.backgroundColor"};
          g["XML|setting.mini_photo_editor.background_opacity"] = g["JS|MiniPhotoEditor.BackgroundOpacity"] = {config: "miniPhotoEditor.backgroundOpacity"};
          g["XML|setting.mini_photo_editor.img_tag_remove_attribute"] = g["JS|MiniPhotoEditor.ImgTagRemoveAttribute"] = {
            config: "miniPhotoEditor.imgTagRemoveAttribute",
            configFn: function (a) {
              return a.split(",")
            }
          };
          g["JS|HasContainer"] = {config: "hasContainer"};
          g["XML|setting.default_mode"] = g["JS|Mode"] = {config: "mode"};
          g["XML|uploader_setting.develop_langage"] =
              g["JS|DevelopLangage"] = {config: "developLang"};
          g["JS|InitVisible"] = {
            config: "style.InitVisible",
            configFn: function (a) {
              0 == a && (f.style.height = "1px");
              return a
            }
          };
          g["XML|setting.security.encrypt_param"] = g["JS|Security.EncryptParam"] = {
            config: "security.encryptParam",
            configFn: function (a) {
              if ("user" != f.developLang.toLowerCase() && "none"
                  != f.developLang.toLowerCase()) {
                return a
              }
            }
          };
          g["XML|setting.use_gzip"] = g["JS|UseGZip"] = {
            config: "editor_url", configFn: function (a) {
              if (RAONKEDITOR.isRelease && "1"
                  == a) {
                switch (f.developLang.toUpperCase()) {
                  case "JAVA":
                  case "JSP":
                    return RAONKEDITOR.rootPath +
                        "pages/editor_release_java.html";
                  case "PHP":
                    return RAONKEDITOR.rootPath
                        + "pages/editor_release_php.html";
                  default:
                    return RAONKEDITOR.rootPath
                        + "pages/editor_release_net.html"
                }
              } else if (RAONKEDITOR.isRelease && "2"
                  == a) {
                return RAONKEDITOR.rootPath
                    + "pages/editor_release_static_gzip.html"
              }
            }
          };
          g["JS|FocusInitObjId"] = {
            config: "focusInitObjId",
            configFn: function (a) {
              "" != a && (f.initFocus = !1);
              return a
            }
          };
          g["JS|FocusInitEditorObjId"] = {config: "focusInitEditorObjId"};
          g["JS|TabIndexObjId"] = {config: "tabIndexObjId"};
          g["JS|SetValueObjId"] =
              {config: "setValueObjId"};
          g["JS|LoadedEvent"] = {config: "LoadedEvent"};
          g["JS|DirectEditHtmlUrl"] = {config: "directEditHtmlUrl"};
          g["XML|license.trust_sites"] = g["JS|TrustSites"] = {config: "trustSites"};
          g["XML|license.license_key"] = g["JS|LicenseKey"] = {config: "licenseKey"};
          g["XML|license.license_key_html5"] = g["JS|LicenseKeyHtml5"] = {config: "licenseKeyHtml5"};
          g["XML|license.print_preview@print_landscape"] = g["JS|PrintLandscape"] = {config: "printLandscape"};
          g["XML|license.product_key"] = g["JS|ProductKey"] = {config: "productKey"};
          g["XML|license.image_editor_use"] = g["JS|imageEditorUse"] = g["JS|ImageEditorUse"] = {config: "imageEditorUse"};
          g["XML|setting.user_color_picker"] = g["JS|UserColorPicker"] = {
            config: "userColorPicker",
            xmlFn: function (a) {
              a = RAONKEDITOR.util.replaceAll(a, "\r\n", "");
              a = RAONKEDITOR.util.replaceAll(a, "\r", "");
              a = RAONKEDITOR.util.replaceAll(a, "\n", "");
              a = RAONKEDITOR.util.replaceAll(a, "\t", "");
              return a = RAONKEDITOR.util.replaceAll(a, unescape("%20"), "")
            }
          };
          g["XML|setting.use_agent_install_guide"] = g["JS|UseAgentInstallGuide"] =
              {config: "useAgentInstallGuide"};
          g["XML|setting.use_agent_install_guide@zindex"] = g["JS|AgentInstallGuideZIndex"] = {
            config: "agentInstallGuideZIndex",
            configFn: function (a) {
              if ("1" == f.useAgentInstallGuide) {
                return parseInt(a, 10)
              }
            }
          };
          g["XML|setting.use_agent_install_guide@logo_url"] = g["JS|AgentInstallGuideLogoUrl"] = {
            config: "agentInstallGuideLogoUrl",
            configFn: function (a) {
              if ("1" == f.useAgentInstallGuide) {
                return a
              }
            }
          };
          g["XML|setting.agent_install_folder_url"] = g["JS|AgentInstallFolderUrl"] = {
            config: "agentInstallFolderUrl",
            configFn: function (a) {
              "/" != a.substring(a.length - 1) && (a += "/");
              return a
            }
          };
          g["XML|setting.agent_install_file_url"] = g["JS|AgentInstallFileUrl"] = {
            config: "agentInstallFileUrl",
            allowEmpty: !0,
            jsFn: function (a) {
              "" != a && (this.inEmpty = !0);
              return a
            },
            configFn: function (a) {
              if ("" == a || void 0 == a) {
                return f.agentInstallFolderUrl
                    + "raonkSetup.exe";
              }
              var c = a.split("/");
              f.agentInstallFileName = c[c.length - 1];
              return a
            }
          };
          g["XML|setting.use_auto_install"] = g["JS|UseAutoInstall"] = {config: "useAutoInstall"};
          g["JS|UseLog"] = {config: "useLog"};
          g["XML|setting.browser_spell_check"] = g["JS|BrowserSpellCheck"] = {config: "browserSpellCheck"};
          g["XML|setting.use_personal_setting"] = g["JS|UsePersonalSetting"] = {config: "usePersonalSetting"};
          g["XML|setting.insert_multi_image"] = g["JS|InsertMultiImage"] = {
            config: "insertMultiImage",
            configFn: function (a) {
              "html5" == f.runtimes && "1" != f.uploadUseHTML5 && (a = 0);
              return a
            }
          };
          g["XML|setting.table_property.insert_drag_size"] = g["JS|TableInsertDragSize"] = {config: "tableInsertDragSize"};
          g["JS|KeepEditorFromDOMChange"] = {config: "keepEditorFromDOMChange"};
          g["XML|setting.agent_install_fail_check"] = g["JS|AgentInstallFailCheck.Use"] = {config: "agentInstallFailCheck.use"};
          g["XML|setting.agent_install_fail_check@time"] = g["JS|AgentInstallFailCheck.Time"] = {
            config: "agentInstallFailCheck.time",
            configFn: function (a) {
              var c = RAONKEDITOR.util.parseIntOr0(a);
              0 < c && (a = RAONKEDITOR.util.parseIntOr0(c));
              return a
            }
          };
          g["XML|setting.agent_install_fail_check@stop_install_check"] = g["JS|AgentInstallFailCheck.StopInstallCheck"] = {
            config: "agentInstallFailCheck.stopInstallCheckTemp",
            configFn: function (a) {
              "1" == a ? f.agentInstallFailCheck.stopInstallCheck = !0 : "0"
                  == a && (f.agentInstallFailCheck.stopInstallCheck = !1);
              return a
            }
          };
          g["XML|setting.image_continue_insert_maintain_value"] = g["JS|ImageContinueInsertMaintainValue"] = {config: "imageContinueInsertMaintainValue"};
          g["XML|setting.use_line_break"] = g["JS|UseLineBreak"] = {config: "useLineBreak"};
          g["XML|setting.use_line_break@word_break_type"] = g["JS|WordBreakType"] = {
            config: "wordBreakType",
            configFn: function (a) {
              if ("1" == f.useLineBreak) {
                return a
              }
            }
          };
          g["XML|setting.use_line_break@word_wrap_type"] = g["JS|WordWrapType"] = {
            config: "wordWrapType",
            configFn: function (a) {
              if ("1" == f.useLineBreak) {
                return a
              }
            }
          };
          g["XML|setting.use_line_break@save_line_break_to_local_storage"] = g["JS|SaveLineBreakToLocalStorage"] = {
            config: "saveLineBreakToLocalStorage",
            configFn: function (a) {
              if ("1" == f.useLineBreak) {
                return a
              }
            }
          };
          g["XML|setting.use_table_paste_dialog"] = g["JS|UseTablePasteDialog"] = {config: "useTablePasteDialog"};
          g["XML|setting.table_property.split_cell_style"] = g["JS|SplitCellStyle"] =
              {config: "splitCellStyle"};
          g["XML|setting.keep_original_html"] = g["JS|KeepOriginalHtml"] = {
            config: "keepOriginalHtml",
            configFn: function (a) {
              "1" == a && (f.sourceViewtype = "0", f.useSelectionMark = "0");
              return a
            }
          };
          g["XML|setting.use_enterprise_mode"] = g["JS|UseEnterpriseMode"] = {
            config: "useEnterpriseMode",
            configFn: function (a) {
              "1" == a && (f.ruler.useResizeEvent = "0");
              return a
            }
          };
          g["XML|setting.use_default_body_space"] = g["JS|DefaultBodySpace.Use"] = {config: "defaultBodySpace.use"};
          g["XML|setting.use_default_body_space@mode"] =
              g["JS|DefaultBodySpace.Mode"] = {
                config: "defaultBodySpace.mode",
                configFn: function (a) {
                  if ("1" == f.defaultBodySpace.use) {
                    return a
                  }
                }
              };
          g["XML|setting.use_default_body_space@value"] = g["JS|DefaultBodySpace.Value"] = {
            config: "defaultBodySpace.value",
            configFn: function (a) {
              if ("1" == f.defaultBodySpace.use) {
                var c = a.split(",");
                0 < c.length && (f.defaultBodySpace.configValue = 3 < c.length
                    ? {top: c[0], right: c[1], bottom: c[2], left: c[3]}
                    : {top: c[0], right: c[0], bottom: c[0], left: c[0]});
                return a
              }
            }
          };
          g["XML|setting.ol_list_style_type_sequence"] =
              g["JS|OlListStyleTypeSequence"] = {
                config: "olListStyleTypeSequence",
                configFn: function (a) {
                  for (var c = a.split(","), b = c.length, e = 0; e < b; e++) {
                    var d = e + 1;
                    c[d] || (d = 0);
                    a[c[e]] = c[d]
                  }
                  return a
                }
              };
          g["XML|setting.ul_list_style_type_sequence"] = g["JS|UlListStyleTypeSequence"] = {
            config: "ulListStyleTypeSequence",
            configFn: function (a) {
              for (var c = a.split(","), b = c.length, e = 0; e < b; e++) {
                var d = e + 1;
                c[d] || (d = 0);
                a[c[e]] = c[d]
              }
              return a
            }
          };
          g["XML|setting.paste_remove_span_absolute"] = g["JS|PasteRemoveSpanAbsolute"] = {config: "pasteRemoveSpanAbsolute"};
          g["XML|setting.drag_move"] = g["JS|DragMove"] = {config: "dragMove"};
          g["XML|setting.paste_when_table_is_last"] = g["JS|PasteWhenTableIsLast"] = {config: "pasteWhenTableIsLast"};
          g["XML|setting.custom_css_url"] = g["JS|CustomCssUrl"] = {config: "style.customCssUrl"};
          g["XML|setting.htmlprocess_custom_text"] = g["JS|HtmlprocessCustomText"] = {config: "style.htmlprocessCustomText"};
          g["XML|setting.remove_image_in_paste_excel"] = g["JS|RemoveImageInPasteExcel"] = {config: "removeImageInPasteExcel"};
          g["XML|setting.remove_td_style_in_paste_ppt"] =
              g["JS|RemoveTdStyleInPastePpt"] = {config: "removeTdStyleInPastePpt"};
          g["XML|setting.auto_move_init_focus"] = g["JS|AutoMoveInitFocus.Use"] = {
            config: "autoMoveInitFocus.use",
            configFn: function (a) {
              "1" == a && (f.focusInitObjId = "");
              return a
            }
          };
          g["JS|AutoMoveInitFocus.TargetWindow"] = {
            config: "autoMoveInitFocus.targetWindow",
            configFn: function (a) {
              return a
            }
          };
          g["XML|setting.show_toolbar@enable_disable_mode"] = g["JS|ToolBarEnableDisableMode"] = {config: "toolBarEnableDisableMode"};
          g["XML|setting.replace_line_break"] = g["JS|ReplaceLineBreak"] =
              {config: "replaceLineBreak"};
          g["XML|plugin_setting.auto_grow_mode"] = g["JS|AutoGrowMode"] = {
            config: "autoGrowMode",
            configFn: function (a) {
              "0" != a && f.pluginToolExArr.push("autogrow");
              return a
            }
          };
          g["XML|setting.use_hwp_open"] = g["JS|UseHwpOpen"] = {config: "useHwpOpen"};
          g["XML|setting.adjust_currentcolor_in_set_api"] = g["JS|AdjustCurrentColorInSetApi"] = {config: "adjustCurrentColorInSetApi"};
          g["XML|setting.adjust_textindent_in_paste"] = g["JS|AdjustTextIndentInPaste"] = {config: "adjustTextIndentInPaste"};
          g["XML|setting.adjust_empty_table_in_excel"] =
              g["JS|AdjustEmptyTableInExcel"] = {config: "adjustEmptyTableInExcel"};
          g["XML|setting.replace_space_to_nbsp_in_excel"] = g["JS|ReplaceOneSpaceToNbspInExcel"] = {config: "replaceOneSpaceToNbspInExcel"};
          g["XML|setting.undo@mode"] = g["JS|UndoMode"] = {config: "undoMode"};
          g["XML|setting.remove_carriage_return_in_tag"] = g["JS|RemoveCarriageReturnInTag"] = {config: "removeCarriageReturnInTag"};
          g["XML|setting.hyperlink_property.click_ctrl_hyperlink"] = g["JS|ClickCtrlHyperlink"] = {
            config: "clickCtrlHyperlink", configFn: function (a) {
              if (RAONKEDITOR.browser.ie &&
                  7 >= RAONKEDITOR.browser.ieVersion
                  || RAONKEDITOR.browser.mobile) {
                a = "0";
              }
              return a
            }
          };
          g["XML|setting.remove_lang_attribute"] = g["JS|RemoveLangAttribute"] = {config: "removeLangAttribute"};
          g["JS|Event.AfterChangeMode"] = {
            config: "event.afterChangeMode",
            configFn: function (a) {
              if ("function" === typeof a) {
                return a
              }
            }
          };
          g["JS|Event.CreationComplete"] = {
            config: "event.creationComplete",
            configFn: function (a) {
              if ("function" === typeof a) {
                return a
              }
            }
          };
          g["JS|Event.OnError"] = {
            config: "event.onError",
            configFn: function (a) {
              if ("function" === typeof a) {
                return a
              }
            }
          };
          g["JS|Event.OnLanguageDefinition"] = {
            config: "event.onLanguageDefinition",
            configFn: function (a) {
              if ("function" === typeof a) {
                return a
              }
            }
          };
          g["JS|Event.AfterPopupShow"] = {
            config: "event.afterPopupShow",
            configFn: function (a) {
              if ("function" === typeof a) {
                return a
              }
            }
          };
          g["JS|Event.AgentInstall"] = {
            config: "event.agentInstall",
            configFn: function (a) {
              if ("function" === typeof a) {
                return a
              }
            }
          };
          g["JS|Event.BeforeInsertUrl"] = {
            config: "event.beforeInsertUrl",
            configFn: function (a) {
              if ("function" === typeof a) {
                return a
              }
            }
          };
          g["JS|Event.Mouse"] = {
            config: "event.mouse",
            configFn: function (a) {
              if ("function" === typeof a) {
                return a
              }
            }
          };
          g["JS|Event.Focus"] = {
            config: "event.focus", configFn: function (a) {
              if ("function" === typeof a) {
                return a
              }
            }
          };
          g["JS|Event.Command"] = {
            config: "event.command",
            configFn: function (a) {
              if ("function" === typeof a) {
                return a
              }
            }
          };
          g["JS|Event.Key"] = {
            config: "event.key", configFn: function (a) {
              if ("function" === typeof a) {
                return a
              }
            }
          };
          g["JS|Event.Resized"] = {
            config: "event.resized",
            configFn: function (a) {
              if ("function" === typeof a) {
                return a
              }
            }
          };
          g["JS|Event.BeforeDocumentEdit"] = {
            config: "event.beforeDocumentEdit",
            configFn: function (a) {
              if ("function" === typeof a) {
                return a
              }
            }
          };
          g["JS|Event.AfterDocumentEdit"] = {
            config: "event.afterDocumentEdit",
            configFn: function (a) {
              if ("function" === typeof a) {
                return a
              }
            }
          };
          g["JS|Event.DocumentEditComplete"] = {
            config: "event.documentEditComplete",
            configFn: function (a) {
              if ("function" === typeof a) {
                return a
              }
            }
          };
          g["JS|Event.PasteImage"] = {
            config: "event.pasteImage",
            configFn: function (a) {
              if ("function" === typeof a) {
                return a
              }
            }
          };
          g["JS|Event.WordCount"] = {
            config: "event.wordCount", configFn: function (a) {
              if ("function" ===
                  typeof a) {
                return a
              }
            }
          };
          g["JS|Event.BeforePaste"] = {
            config: "event.beforePaste",
            configFn: function (a) {
              if ("function" === typeof a) {
                return a
              }
            }
          };
          g["JS|Event.CustomAction"] = {
            config: "event.customAction",
            configFn: function (a) {
              if ("function" === typeof a) {
                return a
              }
            }
          };
          g["JS|Event.BeforeFullScreen"] = {
            config: "event.beforeFullScreen",
            configFn: function (a) {
              if ("function" === typeof a) {
                return a
              }
            }
          };
          g["JS|Event.FullScreen"] = {
            config: "event.fullScreen",
            configFn: function (a) {
              if ("function" === typeof a) {
                return a
              }
            }
          };
          g["JS|Event.SetComplete"] = {
            config: "event.setComplete",
            configFn: function (a) {
              if ("function" === typeof a) {
                return a
              }
            }
          };
          g["JS|Event.SetInsertComplete"] = {
            config: "event.setInsertComplete",
            configFn: function (a) {
              if ("function" === typeof a) {
                return a
              }
            }
          };
          g["JS|Event.CloseInstallPopup"] = {
            config: "event.closeInstallPopup",
            configFn: function (a) {
              if ("function" === typeof a) {
                return a
              }
            }
          };
          g["JS|Event.DialogLoaded"] = {
            config: "event.dialogLoaded",
            configFn: function (a) {
              if ("function" === typeof a) {
                return a
              }
            }
          };
          g["JS|Event.BeforeInsertHyperlink"] = {
            config: "event.beforeInsertHyperlink", configFn: function (a) {
              if ("function" ===
                  typeof a) {
                return a
              }
            }
          };
          g["JS|Event.InsertEmoticon"] = {
            config: "event.insertEmoticon",
            configFn: function (a) {
              if ("function" === typeof a) {
                return a
              }
            }
          };
          g["JS|Event.ApplyFontStyle"] = {
            config: "event.applyFontStyle",
            configFn: function (a) {
              if ("function" === typeof a) {
                return a
              }
            }
          };
          g["XML|setting.adjust_cell_size_after_delete_cell"] = g["JS|AdjustCellSizeAfterDeleteCell"] = {config: "adjustCellSizeAfterDeleteCell"};
          g["XML|setting.remove_dummy_div_in_hwp_paste"] = g["JS|RemoveDummyDivInHwpPaste"] = {config: "removeDummyDivInHwpPaste"};
          g["XML|setting.paste_to_text_mode"] = g["JS|PasteToTextMode"] = {config: "pasteToTextMode"};
          g["XML|setting.adjust_cursor_in_relative"] = g["JS|AdjustCursorInRelative"] = {
            config: "adjustCursorInRelative",
            configFn: function (a) {
              if (RAONKEDITOR.browser.ie) {
                return a
              }
            }
          };
          g["XML|setting.move_style_tag_to_head"] = g["JS|MoveStyleTagToHead"] = {config: "moveStyleTagToHead"};
          g["XML|setting.remove_dummy_tag"] = g["JS|RemoveDummyTag"] = {config: "removeDummyTag"};
          g["XML|setting.placeholder@content"] = g["JS|Placeholder.Content"] = {
            config: "placeholder.content",
            configFn: function (a) {
              if (RAONKEDITOR.browser.ie && 10 <= RAONKEDITOR.browser.ieVersion
                  || !RAONKEDITOR.browser.ie) {
                return a = a.replace(
                    /\r?\n?\r?\n/gi, "\\A"), a = a.replace(/\\n/gi, "\\A")
              }
            }
          };
          g["XML|setting.placeholder@font_color"] = g["JS|Placeholder.FontColor"] = {
            config: "placeholder.fontColor",
            configFn: function (a) {
              if (RAONKEDITOR.browser.ie && 10 <= RAONKEDITOR.browser.ieVersion
                  || !RAONKEDITOR.browser.ie) {
                return a
              }
            }
          };
          g["XML|setting.placeholder@font_size"] = g["JS|Placeholder.FontSize"] = {
            config: "placeholder.fontSize", configFn: function (a) {
              if (RAONKEDITOR.browser.ie &&
                  10 <= RAONKEDITOR.browser.ieVersion
                  || !RAONKEDITOR.browser.ie) {
                return 0 > a.indexOf("pt") && 0
                > a.indexOf("px") && (a += "px"), a
              }
            }
          };
          g["XML|setting.placeholder@font_family"] = g["JS|Placeholder.FontFamily"] = {
            config: "placeholder.fontFamily",
            configFn: function (a) {
              if (RAONKEDITOR.browser.ie && 10 <= RAONKEDITOR.browser.ieVersion
                  || !RAONKEDITOR.browser.ie) {
                return "\ub9d1\uc740\uace0\ub515"
                == a && (a = "\ub9d1\uc740 \uace0\ub515"), a
              }
            }
          };
          g["XML|setting.ignore_different_editor_name"] = g["JS|IgnoreDifferentEditorName"] = {config: "ignoreDifferentEditorName"};
          g["XML|setting.paste_text_line_break"] = g["JS|PasteTextLineBreak"] = {config: "pasteTextLineBreak"};
          g["XML|setting.replace_mso_style"] = g["JS|ReplaceMsoStyle"] = {
            config: "replaceMsoStyle.settingStyle",
            configFn: function (a) {
              return a.split(",")
            }
          };
          g["XML|setting.remove_font_type.font_family"] = g["JS|RemoveFontType.FontFamily"] = {
            config: "removeFontType.fontFamily",
            configFn: function (a) {
              return a.split(",")
            }
          };
          g["XML|setting.remove_font.type"] = g["JS|RemoveFontType.Type"] = {
            config: "removeFontType.type",
            configFn: function (a) {
              return a.split(",")
            }
          };
          g["XML|setting.force_save_as_server"] = g["JS|ForceSaveAsServer"] = {config: "forceSaveAsServer"};
          g["XML|setting.forbidden_word@mode"] = g["JS|ForbiddenWordMode"] = {
            config: "forbiddenWordMode",
            configFn: function (a) {
              RAONKEDITOR.browser.ie && 7 >= RAONKEDITOR.browser.ieVersion
              && (a = "0");
              return a
            }
          };
          g["JS|Event.SetForbiddenWordComplete"] = {
            config: "event.setForbiddenWordComplete",
            configFn: function (a) {
              if ("function" === typeof a) {
                return a
              }
            }
          };
          g["XML|setting.forbidden_word@width"] = g["JS|ForbiddenWordWidth"] = {
            config: "forbiddenWordWidth",
            configFn: function (a) {
              if ("1"
                  == f.forbiddenWordMode) {
                return a = RAONKEDITOR.util.parseIntOr0(
                    a), 300 >= a && (a = 300), a
              }
            }
          };
          g["XML|setting.forbidden_word@height"] = g["JS|ForbiddenWordHeight"] = {
            config: "forbiddenWordHeight",
            configFn: function (a) {
              if ("1"
                  == f.forbiddenWordMode) {
                return a = RAONKEDITOR.util.parseIntOr0(
                    a), 150 >= a && (a = 150), a
              }
            }
          };
          g["XML|setting.clean_nested_tag_options.remove_tag"] = g["JS|CleanNestedTagOptions.RemoveTag"] = {
            config: "cleanNestedTagOptions.removeTag", configFn: function (a) {
              "string" == typeof a && "" != a && (a =
                  a.replace(/ /g, ""));
              return a
            }
          };
          g["XML|setting.clean_nested_tag_options.allow_style"] = g["JS|CleanNestedTagOptions.AllowStyle"] = {
            config: "cleanNestedTagOptions.allowStyle",
            configFn: function (a) {
              "string" == typeof a && "" != a && (a = a.replace(/ /g,
                  ""), a = a.split(","));
              return a
            }
          };
          g["XML|setting.clean_nested_tag_options.nested_count"] = g["JS|CleanNestedTagOptions.NestedCount"] = {
            config: "cleanNestedTagOptions.nestedCount",
            configFn: function (a) {
              return RAONKEDITOR.util.parseIntOr0(a)
            }
          };
          g["JS|SetEmoticonObject"] = {config: "setEmoticonObject"};
          g["XML|setting.underline_and_strike_through_mode"] = g["JS|UnderlineAndStrikeThroughMode"] = {config: "underlineAndStrikeThroughMode"};
          g["XML|setting.replace_rgb_to_hex"] = g["JS|ReplaceRgbToHex"] = {config: "replaceRgbToHex"};
          g["XML|setting.table_property@cell_padding"] = g["JS|TableDefaultCellPadding"] = {
            config: "tableDefaultCellPadding",
            configFn: function (a) {
              a = RAONKEDITOR.util.parseIntOr0(a);
              0 >= a && (a = 0);
              return a
            }
          };
          g["XML|setting.use_personal_setting@font_family_use_key_in"] = g["JS|PersonalSettingUseFontFamilyKeyin"] =
              {config: "personalSettingUseFontFamilyKeyin"};
          g["XML|setting.use_personal_setting@font_size_use_key_in"] = g["JS|PersonalSettingUseFontSizeKeyin"] = {config: "personalSettingUseFontSizeKeyin"};
          g["XML|setting.use_personal_setting@line_height_use_key_in"] = g["JS|PersonalSettingUseLineHeightKeyin"] = {config: "personalSettingUseLineHeightKeyin"};
          g["XML|setting.keep_image_original_size_auto_check"] = g["JS|KeepImageOriginalSizeAutoCheck"] = {
            config: "keepImageOriginalSizeAutoCheck", configFn: function (a) {
              RAONKEDITOR.browser.mobile &&
              (a = "0");
              return a
            }
          };
          g["XML|setting.drag_and_drop_mode"] = g["JS|DragAndDropMode"] = {
            config: "dragAndDropMode",
            configFn: function (a) {
              return a
            }
          };
          g["XML|setting.security.file_extension_detector"] = g["JS|Security.FileExtensionDetector"] = {
            config: "security.fileExtensionDetector",
            configFn: function (a) {
              "0" != a && 0 == RAONKEDITOR.browser.HTML5Supported && (a = "0");
              return a
            }
          };
          g["XML|setting.use_find_replace_shortcut"] = g["JS|UseFindReplaceShortcut"] = {config: "useFindReplaceShortcut"};
          g["XML|setting.paragraph_attribute_type"] =
              g["JS|ParagraphAttributeType"] = {
                config: "paragraphAttributeType",
                configFn: function (a) {
                  a = a.split(",");
                  return 1 < a.length ? a : a[0]
                }
              };
          g["XML|setting.use_paste_toolbar_and_context"] = g["JS|UsePasteToolbarAndContext"] = {
            config: "usePasteToolbarAndContext",
            configFn: function (a) {
              "1" == a && 0 == RAONKEDITOR.browser.ES6Supported && (a = "0");
              return a
            }
          };
          g["XML|setting.disable_error_confirm_message"] = g["JS|DisableErrorConfirmMessage"] = {config: "disableErrorConfirmMessage"};
          g["XML|setting.table_property.delete_table_using_key"] =
              g["JS|DeleteTableUsingKey"] = {config: "deleteTableUsingKey"};
          g["XML|setting.keep_font_family"] = g["JS|KeepFontFamily"] = {
            config: "keepFontFamily",
            configFn: function (a) {
              "string" == typeof a && (a = a.split(","));
              return a
            }
          };
          g["XML|setting.dialog_border_radius"] = g["JS|DialogBorderRadius"] = {config: "style.dialogBorderRadius"};
          g["XML|setting.dialog_box_shadow"] = g["JS|DialogBoxShadow"] = {config: "style.dialogBoxShadow"};
          g["XML|setting.dialog_border"] = g["JS|DialogBorder"] = {config: "style.dialogBorder"};
          g["XML|setting.auto_set_zoom"] =
              g["JS|AutoSetZoom.Use"] = {
                config: "autoSetZoom.use",
                configFn: function (a) {
                  if (RAONKEDITOR.browser.ie
                      || RAONKEDITOR.browser.gecko) {
                    a = "0";
                  }
                  return a
                }
              };
          g["JS|AutoSetZoom.CheckNode"] = {config: "autoSetZoom.checkNode"};
          g["XML|setting.mobile_popup_mode"] = g["JS|MobilePopupMode"] = {config: "mobilePopupMode"};
          g["XML|setting.custom_css_url@detail_apply"] = g["JS|CustomCssUrlDetailApply"] = {
            config: "customCssUrlDetailApply",
            configFn: function (a) {
              1 != RAONKEDITOR.util.parseIntOr0(a) || "" == f.style.customCssUrl
                  ? a = "0" : a = "1";
              return a
            }
          };
          g["XML|setting.file_open_dialog_filter"] = g["JS|FileOpenDialogFilter"] = {config: "fileOpenDialogFilter"};
          g["XML|setting.validate_url_link"] = g["JS|ValidateUrlLink"] = {config: "validateUrlLink"};
          g["XML|setting.image_quality"] = g["JS|ImageQuality.Quality"] = {config: "imageQuality.quality"};
          g["XML|setting.image_quality@worker_count"] = g["JS|ImageQuality.WorkerCount"] = {config: "imageQuality.workerCount"};
          g["XML|setting.image_quality@extension"] = g["JS|ImageQuality.Extension"] = {config: "imageQuality.extension"};
          g["XML|setting.image_quality@over_file_size"] =
              g["JS|ImageQuality.OverFileSize"] = {config: "imageQuality.overFileSize"};
          g["XML|setting.resizebar@holder_sync"] = g["JS|ResizeBarHolderSync"] = {config: "resizeBarHolderSync"};
          g["XML|setting.compatibility.dingbat_char"] = g["JS|Compatibility.DingBatChar"] = {
            config: "compatibility.dingBatChar", configFn: function (a) {
              a = a.toLowerCase();
              switch (a) {
                case "paste":
                  a = f.compatibility.dingBatCharPaste = "1";
                  break;
                case "set":
                  a = f.compatibility.dingBatCharSetApi = "1";
                  break;
                case "1":
                  f.compatibility.dingBatCharPaste = "1";
                  f.compatibility.dingBatCharSetApi =
                      "1";
                  break;
                case "0":
                  f.compatibility.dingBatCharPaste = "0", f.compatibility.dingBatCharSetApi = "0"
              }
              return a
            }
          };
          g["XML|setting.compatibility.auto_resize_pasted_image"] = g["JS|Compatibility.AutoResizePastedImage"] = {config: "compatibility.autoResizePastedImage"};
          g["XML|setting.compatibility.hwp_paste_image_in_html5"] = g["JS|Compatibility.HwpPasteImageInHtml5"] = {config: "compatibility.hwpPasteImageInHtml5"};
          g["XML|setting.compatibility.hwp_paste_bullet_in_html5"] = g["JS|Compatibility.HwpPasteBulletInHtml5"] = {config: "compatibility.hwpPasteBulletInHtml5"};
          g["XML|setting.compatibility.hwp_process_type_in_agent"] = g["JS|Compatibility.HwpProcessTypeInAgent"] = {config: "compatibility.hwpProcessTypeInAgent"};
          g["XML|setting.compatibility.font_tag_to_span"] = g["JS|Compatibility.FontTagToSpan"] = {config: "compatibility.fontTagToSpan"};
          g["XML|setting.width_fix.value"] = g["JS|WidthFix.Value"] = {
            config: "widthFix.value",
            configFn: function (a) {
              return a = RAONKEDITOR.util.parseIntOr0(a) + ""
            }
          };
          g["XML|setting.replace_ms_style_name"] = g["JS|ReplaceMsStyleName"] = {
            config: "replaceMsStyleName",
            configFn: function (a) {
              return a.replace(/\s/g, "").split(",")
            }
          };
          g["XML|setting.insert_sourcetag_in_video"] = g["JS|InsertSourceTagInVideo"] = {config: "insertSourceTagInVideo"};
          g["XML|setting.width_fix.background_color"] = g["JS|WidthFix.BackgroundColor"] = {config: "widthFix.backgroundColor"};
          g["XML|setting.width_fix.default_view"] = g["JS|WidthFix.DefaultView"] = {config: "widthFix.defaultView"};
          g["XML|setting.width_fix.border"] = g["JS|WidthFix.Border"] = {
            config: "widthFix.border", configFn: function (a) {
              var c = f.widthFix.border;
              a = a.split("|");
              if (2 == a.length) {
                var b = a[0].toLowerCase();
                switch (b) {
                  case "outline":
                    b = "outline";
                    break;
                  case "boxshadow":
                    b = "boxShadow";
                    break;
                  default:
                    b = ""
                }
                "" != b && (c.styleName = b, c.styleValue = a[1])
              }
              return c
            }
          };
          g["XML|setting.width_fix.padding"] = g["JS|WidthFix.Padding"] = {
            config: "widthFix.padding",
            configFn: function (a) {
              return RAONKEDITOR.util.parseIntOr0(a)
            }
          };
          g["XML|setting.remove_font_size_apply_h_tag"] = g["JS|RemoveFontSizeApplyHTag"] = {config: "removeFontSizeApplyHTag"};
          g["XML|setting.auto_set_document_domain"] =
              g["JS|AutoSetDocumentDomain"] = {config: "autoSetDocumentDomain"};
          g["XML|setting.editng_area_bg_color"] = g["JS|EditingAreaBgColor"] = {config: "editingAreaBgColor"};
          g["XML|setting.disable_unnecessary_key_evt"] = g["JS|DisableUnnecessaryKeyEvt"] = {config: "disableUnnecessaryKeyEvt"};
          var z = function (a, c, b) {
            var e = f, g = a.config;
            if (-1 < g.indexOf(".")) {
              for (var g = g.split("."), h = 0; h < g.length - 1;
                  h++) {
                e = e[g[h]];
              }
              g = g[h]
            }
            if (b) {
              if ((c = b(c)) || 0 === c || "" == c) {
                e[g] = c, a["set" + d] = 1
              }
            } else {
              e[g] = c, a["set" + d] = 1
            }
          };
          (function () {
            for (var a in g) {
              var b =
                  g[a];
              if (!b["set" + d]) {
                if (0 == a.indexOf("JS|")) {
                  for (var e = a.substring(3).split("."), f = e.length, h = c,
                      k = 0; k < f; k++) {
                    h = h ? h[e[k]] : void 0;
                  }
                  e = !1;
                  !b.allowEmpty || h && "" != h || (e = !0);
                  if ("boolean" == typeof h || h && "" != h || b.allowEmpty) {
                    b.jsFn && (returnValue = b.jsFn(h)) && (h = returnValue);
                    try {
                      z(b, h, b.configFn), e && b.inEmpty && (b["set" + d] = !0)
                    } catch (l) {
                      RAONKEDITOR && RAONKEDITOR.logMode && console
                      && console.log(l)
                    }
                  }
                } else {
                  for (var e = a.split("@"), f = e[0].split(":"),
                      k = f[0].substring(4).split("."), t = k.length,
                      f = 1 < f.length ? f[1] : 0, e = 1 < e.length ?
                          e[1] : 0, h = v, n = 0; n < t; n++) {
                    var m = k[n],
                        h = h ? h[m] || (h[0] ? h[0][m] : void 0) : void 0;
                    b.nodeObj = h
                  }
                  if (f && h) {
                    t = !1;
                    for (k = 0; k < h.length; k++) {
                      if (h[k]._value == f) {
                        h = h[k];
                        t = !0;
                        break
                      }
                    }
                    if (!t) {
                      continue
                    }
                  }
                  if ("undefined" != typeof h) {
                    if (e) {
                      if ("array" == b.valueType) {
                        if (h.slice) {
                          tempXmlValue = h.slice();
                          for (k = 0; k < tempXmlValue.length;
                              k++) {
                            tempXmlValue[k] = tempXmlValue[k]._attributes
                                ? tempXmlValue[k]._attributes[e] : "";
                          }
                          h = tempXmlValue
                        } else if (h._attributes) {
                          h = [h._attributes[e]];
                        } else {
                          continue;
                        }
                      } else if (h._attributes) {
                        h = h._attributes[e];
                      } else {
                        continue;
                      }
                    } else {
                      f = e = !1;
                      if ("object" == typeof h && 0 < h.length) {
                        h.slice && (h = h.slice());
                        for (k = 0; k < h.length; k++) {
                          h[k]._value
                          && (h[k] = h[k]._value);
                        }
                        "array" != b.valueType ? h = h[0] : e = !0
                      } else if ("array"
                          == b.valueType) {
                        h = [h._value], e = !0;
                      } else if ("object"
                          == typeof h) {
                        for (var p in h) {
                          f = !0;
                          break
                        }
                        f || (h = "")
                      }
                      !e && h._value && (h = h._value);
                      e || "string" == typeof h || (h = "")
                    }
                    if ("boolean" == typeof h || h && "" != h || b.allowEmpty) {
                      b.xmlFn && (returnValue = b.xmlFn(h))
                      && (h = returnValue);
                      try {
                        z(b, h, b.configFn)
                      } catch (r) {
                        RAONKEDITOR && RAONKEDITOR.logMode && console
                        && console.log(r)
                      }
                    }
                  }
                }
              }
            }
          })();
          k = "";
          h = RAONKEDITOR.util.xml.getNode(m, "uploader_setting");
          "" != c.HandlerUrl ? k = c.HandlerUrl
              : (h = RAONKEDITOR.util.xml.getNodeValue(h, "handler_url"), 0
              < h.length && (k = h));
          h = "";
          h = 0 == k.length ? RAONKEDITOR.rootPath : "/" == k.substring(0, 1)
              ? location.protocol + "//" + location.host : 0
              == k.toLowerCase().indexOf("http") ? "" : RAONKEDITOR.rootPath;
          if (0 == k.length) {
            switch (f.developLang.toUpperCase()) {
              case "JAVA":
              case "JSP":
                k = h + "handler/raonkhandler.jsp";
                break;
              case "PHP":
                k = h + "handler/raonkhandler.php";
                break;
              case "NONE":
                k = "";
                break;
              default:
                k = h + "handler/raonkhandler.ashx"
            }
          } else {
            if (0 == k.toLowerCase().indexOf("http") && k.match(
                    /:\/\/(.[^\/]+)/)[1] != window.location.host && "file:"
                != location.protocol) {
              l = "";
              switch (f.developLang.toUpperCase()) {
                case "JAVA":
                case "JSP":
                  l = RAONKEDITOR.rootPath + "handler/upload_handler.jsp";
                  break;
                case "PHP":
                  l = RAONKEDITOR.rootPath + "handler/upload_handler.php";
                  break;
                default:
                  l = RAONKEDITOR.rootPath + "handler/upload_handler.ashx"
              }
              f.proxy_url = l
            }
            k = h + k
          }
          f.handlerUrl = k;
          k = RAONKEDITOR.util.GetUserRunTimeEditor(f.runtimes);
          f.runtimes = k.mode;
          0 == k.isAgent && (f.useKManager = "0");
          "0" == f.useKManager && "html4" == f.runtimes
          && (f.useKManager = "1");
          "1" == f.useKManager && (0
              > RAONKEDITOR.UserAgent.os.name.toLowerCase().indexOf("windows")
              || -1 < RAONKEDITOR.UserAgent.device.type.toLowerCase().indexOf(
                  "mobile")) && (f.useKManager = "0");
          "0" == f.useKManager && (f.useLocalFont = "0");
          "html4" == f.runtimes && (f.openDocument.useHtml5FileOpen = "0");
          "1" == f.useKManager || "0" == f.useKManager && -1
          < f.runtimes.indexOf("html5") ? (f.imageQuality.quality = parseFloat(
                  f.imageQuality.quality),
                  f.imageQuality.workerCount = RAONKEDITOR.util.parseIntOr0(
                      f.imageQuality.workerCount), "" != f.imageQuality.extension
              && (f.imageQuality.extension = f.imageQuality.extension.replace(/ /g,
                  "").toLowerCase()), "0" != f.imageQuality.overFileSize
              && (k = RAONKEDITOR.util.getUnit(
                  f.imageQuality.overFileSize), k = RAONKEDITOR.util.getUnitSize(
                  k), h = parseInt(f.imageQuality.overFileSize,
                  10), f.imageQuality.overFileSize = h * k))
              : (f.imageQuality.quality = 1, f.imageQuality.workerCount = 7, f.imageQuality.extension = "", f.imageQuality.overFileSize =
                  "0");
          k = RAONKEDITOR.util.xml.getNode(m, "setting");
          h = !1;
          "1" == c.AgentHttps ? h = !0 : "1"
              == RAONKEDITOR.util.xml.getNodeValue(k, "agent_https")
              && (h = !0);
          "1" == f.useKManager && (RAONKEDITOR.browser.isHttps
          && (f.agentHttps = !0), h && (f.agentHttps = !0));
          if ("1" == f.useKManager) {
            h = RAONKEDITOR.util.xml.getNode(k, "agent_document_edit");
            if (""
                != c.AgentDocumentEdit) {
              f.agentDocumentEdit = c.AgentDocumentEdit.split(
                  ",");
            } else if (h && (l = RAONKEDITOR.util.xml.count(h,
                "item"), 0 < l)) {
              for (f.agentDocumentEdit = [], k = 0; k < l;
                  k++) {
                n = RAONKEDITOR.util.xml.getNodeValueIdx(h,
                    "item", k), f.agentDocumentEdit.push(n), "word" == n
                && (n = RAONKEDITOR.util.xml.getNodeIdx(h, "item", k))
                && n.getAttribute("remove_mso_font_style") && ""
                != n.getAttribute("remove_mso_font_style")
                && (f.agentDocumentEditSetting.removeMsoFontStyle = n.getAttribute(
                    "remove_mso_font_style"));
              }
            }
            c.AgentDocumentEditSetting
            && c.AgentDocumentEditSetting.RemoveMsoFontStyle && ""
            != c.AgentDocumentEditSetting.RemoveMsoFontStyle
            && (f.agentDocumentEditSetting.removeMsoFontStyle = c.AgentDocumentEditSetting.RemoveMsoFontStyle);
            0 < f.agentDocumentEdit.length &&
            ("string" == typeof c.AgentDocumentEditSetting.DownloadImageDomain
            && "" != c.AgentDocumentEditSetting.DownloadImageDomain
                ? f.agentDocumentEditSetting.downloadImageDomain = c.AgentDocumentEditSetting.DownloadImageDomain
                : h && "string" == typeof h.getAttribute(
                    "download_image_domain") && "" != h.getAttribute(
                    "download_image_domain")
                && (f.agentDocumentEditSetting.downloadImageDomain = h.getAttribute(
                    "download_image_domain")))
          } else {
            f.agentDocumentEdit = [];
          }
          if ("" != c.ItemCustomUrl.Item && ""
              != c.ItemCustomUrl.Url) {
            f.itemCustomUrl.item =
                c.ItemCustomUrl.Item.split(
                    ","), f.itemCustomUrl.url = c.ItemCustomUrl.Url.split(
                ",");
          } else if (m = RAONKEDITOR.util.xml.getNode(m,
              "item_custom_url")) {
            if (h = RAONKEDITOR.util.xml.count(m,
                "item"), 0
            < h) {
              for (f.itemCustomUrl.item = [], f.itemCustomUrl.url = [], k = 0;
                  k < h; k++) {
                l = RAONKEDITOR.util.xml.getNodeValueIdx(m, "item",
                    k), n = RAONKEDITOR.util.xml.getNodeIdx(m, "item",
                    k).getAttribute("url"), f.itemCustomUrl.item.push(
                    l), f.itemCustomUrl.url.push(n);
              }
            }
          }
          if ("" != f.userJsUrl) {
            k = !0;
            for (m = 0; m < f.xss_allow_url.length; m++) {
              if (f.xss_allow_url[m]
                  ==
                  f.userJsUrl) {
                k = !1;
                break
              }
            }
            1 == k && f.xss_allow_url.push(f.userJsUrl)
          }
          4 == f.productKey.split("_").length && (f.useServerLicense = !0);
          if ("1" == f.autoBodyFit) {
            if ("0" == f.useLineBreak || "1" == f.useLineBreak && "0"
                == f.wordBreakType) {
              f.wordBreakType = "1";
            }
            f.useLineBreak = "1";
            f.wordWrapType = "1"
          }
          "" != f.userFieldValue && (-1 < f.handlerUrl.indexOf("?")
              ? f.handlerUrl = f.handlerUrl + "&" + f.userFieldID + "="
                  + f.userFieldValue : f.handlerUrl = f.handlerUrl + "?"
                  + f.userFieldID + "=" + f.userFieldValue);
          4 < f.handlerUrl.length && "http" == f.handlerUrl.substring(0,
              4).toLowerCase() && f.handlerUrl.match(/:\/\/(.[^\/]+)/)[1]
          != window.location.host && (f.isCrossDomain = !0);
          RAONKEDITOR.browser.HTML5Supported && "Worker" in window
          && (window.URL || window.webkitURL)
          || (f.openDocument.useHtml5FileOpen = "0");
          0 == RAONKEDITOR.browser.ajaxOnProgressSupported
          && (f.uploadUseHTML5 = "0");
          "1" == f.mimeUse && "0" == f.useKManager
          && (f.uploadMethod = "base64");
          "base64" == f.uploadMethod && (f.paste_image_base64 = "1");
          if ("NET" == f.developLang.toUpperCase() || "JSP"
              == f.developLang.toUpperCase() || "JAVA"
              == f.developLang.toUpperCase() ||
              "PHP" == f.developLang.toUpperCase() || "ASP"
              == f.developLang.toUpperCase()) {
            var A = f.handlerUrl,
                m = "" + ("kc" + RAONKSolution.Agent.formfeed + "c00"
                    + RAONKSolution.Agent.vertical),
                m = m + ("k47" + RAONKSolution.Agent.formfeed + "1"),
                m = RAONKEDITOR.util.makeEncryptParam(m),
                A = -1 < A.indexOf("?") ? A + ("&t="
                    + RAONKEDITOR.util.getTimeStamp()) : A + ("?t="
                    + RAONKEDITOR.util.getTimeStamp());
            if (f.isCrossDomain) {
              var w = document.createElement("div"),
                  k = RAONKEDITOR.util.getDefaultIframeSrc();
              w.innerHTML = '<iframe name="initCheckframeEditor" id="initCheckframeEditor" style="display:none;" src="'
                  +
                  k + '"></iframe>';
              w.style.display = "none";
              document.body.appendChild(w);
              RAONKEDITOR.util.postFormData(document, A, "initCheckframeEditor",
                  [["k00", m]]);
              RAONKEDITOR.util.addEvent(w.firstChild, "load", function () {
                w.firstChild.contentWindow.postMessage("check", "*")
              }, !0);
              if (window.postMessage) {
                var u = function (a) {
                  0 == A.indexOf(a.origin) && (a = RAONKEDITOR.util.trim(
                      a.data), RAONKEDITOR.util.initHandlerCheck(a, f,
                      c), document.body.removeChild(
                      w), RAONKEDITOR.util.removeEvent(window, "message", u))
                };
                RAONKEDITOR.util.addEvent(window,
                    "message", u)
              }
            } else {
              RAONKEDITOR.ajax.postData(A, "k00=" + m, function (a) {
                RAONKEDITOR.util.initHandlerCheck(a, f, c)
              })
            }
          }
          f.printHeader = f.printHeaderLeft + "&b" + f.printHeaderCenter + "&b"
              + f.printHeaderRight;
          f.printFooter = f.printFooterLeft + "&b" + f.printFooterCenter + "&b"
              + f.printFooterRight;
          if ("" != f.printHeader && -1 < f.printHeader.indexOf("&u")) {
            k = "";
            try {
              k = parent.parent.location.href
            } catch (G) {
              RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(G)
            }
            "" != k && (f.printHeader = f.printHeader.replace(/&u/, k))
          }
          if ("" != f.printFooter &&
              -1 < f.printFooter.indexOf("&u")) {
            k = "";
            try {
              k = parent.parent.location.href
            } catch (D) {
              RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(D)
            }
            "" != k && (f.printFooter = f.printFooter.replace(/&u/, k))
          }
          m = f.statusBarItem.length;
          h = !1;
          for (k = 0; k < m; k++) {
            if ("design" == f.statusBarItem[k]) {
              h = !0;
              break
            }
          }
          0 == h && f.statusBarItem.splice(0, 0, "design");
          -1 < f.disableInsertImage.indexOf(",paste_image,")
          && (f.pasteToImage = "0", 0 > RAONKEDITOR.util.arrayIndexOf(
              f.removeItem, "paste_to_image") && f.removeItem.push(
              "paste_to_image"), 0 > RAONKEDITOR.util.arrayIndexOf(f.removeItem,
              "paste_to_image_detail") && f.removeItem.push(
              "paste_to_image_detail"));
          -1 < f.disableInsertImage.indexOf(",video_poster,")
          && (f.useVideoPoster = 0);
          -1 < f.disableInsertImage.indexOf(",image,")
          && RAONKEDITOR.browser.mobile && 0 > RAONKEDITOR.util.arrayIndexOf(
              f.removeItem, "image_create") && f.removeItem.push(
              "image_create");
          if (0 < f.displayFontFamilyList.length) {
            try {
              for (var m = {}, y = f.displayFontFamilyList.length, k = 0; k < y;
                  k++) {
                var B = f.displayFontFamilyList[k].split("|");
                2 == B.length && (m[B[0]] = B[1])
              }
              f.displayFontFamilyList =
                  m
            } catch (J) {
              RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(J)
            }
          }
          RAONKEDITOR.isRelease ? (f.popupCssUrl = "ko-kr" != f.lang
                  ? "../css/editor_popup_" + f.lang + ".css"
                  : "../css/editor_popup.css", f.dialogJSUrl = "../js/editor_dialog.js", f.fileEncodingJSUrl = "../js/editor_fileopen_encoding.min.js", f.fileEncodingWorkerJSUrl = "../js/editor_fileopen_encodingWorker.min.js", f.ajaxUploadJSUrl = "../js/editor_upload.min.js", f.conversionJSUrl = "../js/editor_conversion.min.js", f.htmlProcessWorkerJSUrl = "../js/editor_htmlProcessWorker.js",
                  f.detectJSUrl = "../js/editor_detector.min.js", f.clipboardJSUrl = "../js/editor_clipboard.min.js", f.imageExifJSUrl = "../js/editor_imageExif.js")
              : (f.popupCssUrl = "ko-kr" != f.lang ? "../css_dev/editor_popup_"
                  + f.lang + ".css"
                  : "../css_dev/editor_popup.css", f.dialogJSUrl = "../js_dev/editor_dialog.js", f.fileEncodingJSUrl = "../js_dev/editor_fileopen_encoding.js", f.fileEncodingWorkerJSUrl = "../js_dev/editor_fileopen_encodingWorker.js", f.ajaxUploadJSUrl = "../js_dev/editor_upload.js", f.conversionJSUrl = "../js_dev/editor_conversion.js",
                  f.htmlProcessWorkerJSUrl = "../js_dev/editor_htmlProcessWorker.js", f.detectJSUrl = "../js_dev/editor_detector.js", f.clipboardJSUrl = "../js_dev/editor_clipboard.js", f.imageExifJSUrl = "../js_dev/editor_imageExif.js");
          -1 < f.imgDefaultWidth.indexOf("%") && "2" == f.image_auto_fit
          && (f.image_auto_fit = "1");
          this.editor = null;
          f.editor_id = d;
          this.FrameID = "raonk_frame_" + d;
          f.holderID = "raonk_frame_holder" + d;
          this.ID = d;
          this._config = f;
          y = "";
          y = f.style.height;
          0 == f.style.InitVisible && (y = "1px");
          y = '<div id="' + f.holderID + '" style="width:' +
              f.style.width + "; height:" + y + "; ";
          y = RAONKEDITOR.browser.iOS || RAONKEDITOR.browser.mobile ? "view"
              == f.mode && "1" == f.view_mode_auto_height ? y + " overflow:hidden;"
                  : y
                  + " overflow:scroll; overflow-x:hidden; -webkit-overflow-scrolling:touch; "
              : y + " overflow: visible;";
          y += '"></div>';
          B = document.getElementById(f.holderID);
          "" != c.EditorHolder ? (k = document.getElementById(c.EditorHolder))
              ? B ? B.innerHTML = "" : k.innerHTML = y : document.write(y) : B
              ? B.innerHTML = "" : document.write(y);
          var y = document.getElementById(f.holderID), x;
          try {
            x =
                document.createElement(
                    '<iframe frameborder="0" scrolling="no">')
          } catch (Q) {
            x = document.createElement("iframe"), x.setAttribute("frameborder",
                "0"), x.setAttribute("scrolling", "no")
          }
          y.appendChild(x);
          x.setAttribute("id", this.FrameID);
          x.setAttribute("title", "RAON K Editor");
          x.style.width = "100%";
          x.style.height = "100%";
          if (RAONKEDITOR.browser.iOS
              || RAONKEDITOR.browser.mobile) {
            x.style.overflow = "hidden", x.style.display = "inline-block", RAONKEDITOR.browser.iOS
            && (x.style.height = "101%");
          }
          x.width = "100%";
          x.height = "100%";
          var E = this;
          RAONKEDITOR.util.addEvent(x, "load", function () {
            var a = RAONKEDITOR.util.CheckEditorVisible(d);
            try {
              if (1 == a && "" != x.src && -1 < x.src.indexOf(
                  "editor_dummy.html")) {
                RAONKEDITOR.startUpEditor(d);
              } else if (1
                  == a) {
                if (null != E && "undefined"
                    != typeof E) {
                  x.contentWindow.raonk_frame_loaded_event(d, f, E,
                      c), E = f = null;
                } else {
                  var b = RAONKEDITOR.UserConfigHashTable.getItem(d);
                  "undefined" != typeof b && "1" == b.KeepEditorFromDOMChange
                  && (RAONKEDITOR.RAONKMULTIPLE
                  && (RAONKEDITOR.RAONKMULTIPLE["raonk_frame_"
                  + d] = null), RAONKEDITOR.RAONKHOLDER &&
                  (RAONKEDITOR.RAONKHOLDER[d] = null), new RAONKEditor(b))
                }
              }
            } catch (e) {
              0 != a && "" != c.LoadErrorCustomMessage && alert(
                  c.LoadErrorCustomMessage)
            }
          }, !1);
          y = f.editor_url;
          "1" == f.autoSetDocumentDomain
          && (y = RAONKEDITOR.util.setUrlForDocumentDomain(y, document));
          if (1 == RAONKEDITOR.util.CheckEditorVisible(d)) {
            "lightview" == f.mode
            && (y = RAONKEDITOR.isRelease ? RAONKEDITOR.rootPath
                + "pages/editor_lightView_release.html?t="
                + RAONKEDITOR.UrlStamp
                : RAONKEDITOR.rootPath + "pages/editor_lightView.html?t="
                + RAONKEDITOR.UrlStamp, "1" == f.autoSetDocumentDomain &&
            (y = RAONKEDITOR.util.setUrlForDocumentDomain(y,
                document))), x.src = y;
          } else {
            if ("1" == c.AutoStartUp) {
              var H = function () {
                x.contentWindow.autoStartUp = x.contentWindow.setInterval(
                    function () {
                      try {
                        RAONKEDITOR.util.CheckEditorVisible(d)
                        && (x.contentWindow.clearInterval(
                            x.contentWindow.autoStartUp), RAONKEDITOR.util.removeEvent(
                            x, "load", H), RAONKEDITOR.startUpEditor(d))
                      } catch (a) {
                        x.contentWindow.clearInterval(
                            x.contentWindow.autoStartUp), RAONKEDITOR.util.removeEvent(
                            x, "load", H)
                      }
                    }, 1E3)
              };
              RAONKEDITOR.util.addEvent(x, "load",
                  H, !1)
            }
            x.src = f.dummy_url;
            x.setAttribute("keditor_customsrc", y)
          }
          "1" == f.forbiddenWordMode && f.pluginToolExArr.push("forbiddenword")
        }
      }
    }
  }, RAONKEditor_CONFIG = function (a) {
    "" != a.RootPath && (RAONKEDITOR.rootPath = a.RootPath);
    RAONKEDITOR.rootPath = RAONKEDITOR.util.setProtocolBaseDomainURL(
        RAONKEDITOR.rootPath);
    this.lang = "ko-kr";
    this.languageExtendObject = "";
    this.managerLang = "auto";
    this.defaultLineHeight = this.defaultFontFamily = this.defaultFontSize = "";
    this.defaultFontMarginBottom = this.defaultFontMarginTop = "0px";
    this.tabSequenceMode =
        this.accessibility = "0";
    this.visibility = !0;
    this.tool_bar = this.top_menu = "0";
    this.top_status_bar = "1";
    this.status_bar = "0";
    this.xmlnsname = this.docType = this.encoding = this.gridForm = this.gridSpans = this.gridColorName = this.gridColor = "";
    this.saveFileFolderNameRule = this.saveFolderNameRule = "YYYY/MM";
    this.saveFileNameRule = "GUID";
    this.saveFileNameRuleEx = "_";
    this.showDialogPosition = "1";
    this.image_convert_height = this.image_convert_width = this.image_convert_format = "";
    this.image_auto_fit = "0";
    this.productKey = "";
    this.imageEditorUse =
        "0";
    this.firstLoadMessage = this.firstLoadType = this.defaultMessage = "";
    this.fileFieldID = "Filedata";
    this.printLandscape = this.printPreview = "0";
    this.basePrintFooter = this.basePrintHeader = this.useFormPrint = this.printMarginltrb = this.printFooterRight = this.printFooterCenter = this.printFooterLeft = this.printFooter = this.printHeaderRight = this.printHeaderCenter = this.printHeaderLeft = this.printHeader = "";
    this.sourceViewtype = "0";
    this.sourceViewtype_unformatted = "";
    this.useSelectionMark = this.sourceViewtypeEmptyTagMode =
        "0";
    this.nextTabElementId = this.webFontCssAlwaysSet = this.webFontCssUrl = this.userCssUrl = "";
    this.xhtml_value = this.empty_tag_remove = this.paste_image_base64_remove = this.paste_image_base64 = "0";
    this.system_title = "K Editor";
    this.view_mode_auto_width = this.view_mode_auto_height = "0";
    this.changeMultiValueMode = "doctype";
    this.tableAutoAdjust = "0";
    this.trustSites = "";
    this.contextMenuDisable = "0";
    this.enterTag = "";
    this.userFieldID = "Userdata";
    this.userFieldValue = "";
    this.mimeCharset = "utf-8";
    this.mimeConentEncodingType =
        "3";
    this.mimeLocalOnly = this.mimeFileTypeFilter = "1";
    this.mimeRemoveHeader = "0";
    this.imgDefaultMarginBottom = this.imgDefaultMarginTop = this.imgDefaultMarginRight = this.imgDefaultMarginLeft = this.imgDefaultHeight = this.imgDefaultWidth = this.mimeBaseURL = this.userImageDlgStyle = this.userOpenDlgInitDir = this.userOpenDlgType = this.userOpenDlgTitle = "";
    this.officeLineFix = "1";
    this.useLog = "0";
    this.EditorTabDisable = "";
    this.unitDelimiter = "\f";
    this.unitAttributeDelimiter = "\x0B";
    this.style = {
      skinName: "bluegray",
      dialogSkinName: "bluegray",
      width: "100%",
      height: "600px",
      InitVisible: !0,
      isFontSizeUse: !0,
      defaultMinHeight: "150px",
      iconName: "icon",
      customCssUrl: "",
      htmlprocessCustomText: "<b>Processing</b>",
      dialogBorder: "",
      dialogBoxShadow: "",
      dialogBorderRadius: ""
    };
    this.webPath = {
      image: RAONKEDITOR.rootPath + "images/editor/",
      page: RAONKEDITOR.rootPath + "pages/",
      js: RAONKEDITOR.rootPath + "js/",
      js_dev: RAONKEDITOR.rootPath + "js_dev/",
      css: RAONKEDITOR.rootPath + "css/",
      css_dev: RAONKEDITOR.rootPath + "css_dev/",
      include: RAONKEDITOR.rootPath + "include/",
      config: RAONKEDITOR.rootPath +
          "config/",
      help: RAONKEDITOR.rootPath + "help/",
      agent: RAONKEDITOR.rootPath + "agent/",
      agentInstallGuide: RAONKEDITOR.rootPath
          + "agent/installguide/raonk_setup.html",
      plugin: RAONKEDITOR.rootPath + "plugin/",
      multiUserCheck: RAONKEDITOR.rootPath
          + "agent/installguide/multi_user_check.html"
    };
    this.holderID = "";
    this.config_url = RAONKEDITOR.rootPath + "config/raonkeditor.config.xml";
    this.emoticon_url = RAONKEDITOR.rootPath
        + "config/raonkeditor.emoticon.xml";
    this.forms_url = RAONKEDITOR.rootPath + "config/raonkeditor.formlist.xml";
    this.handlerUrl = RAONKEDITOR.rootPath + "handler/raonkhandler.ashx";
    this.proxy_url = this.post_url_save_for_notes = "";
    this.editor_url = RAONKEDITOR.isRelease ? RAONKEDITOR.rootPath
        + "pages/editor_release.html?t=" + RAONKEDITOR.UrlStamp
        : RAONKEDITOR.rootPath + "pages/editor.html?t=" + RAONKEDITOR.UrlStamp;
    this.dummy_url = RAONKEDITOR.rootPath + "pages/editor_dummy.html?t="
        + RAONKEDITOR.UrlStamp;
    this.pages = {
      find: "editor_find.html?t=" + RAONKEDITOR.UrlStamp,
      replace: "editor_replace.html?t=" + RAONKEDITOR.UrlStamp,
      image: "editor_image.html?t=" +
          RAONKEDITOR.UrlStamp,
      horizontal_line: "editor_horizontal_line.html?t=" + RAONKEDITOR.UrlStamp,
      doc_bg_img: "editor_doc_bg_img.html?t=" + RAONKEDITOR.UrlStamp,
      flash: "editor_flash.html?t=" + RAONKEDITOR.UrlStamp,
      media: "editor_media.html?t=" + RAONKEDITOR.UrlStamp,
      table: "editor_table.html?t=" + RAONKEDITOR.UrlStamp,
      table_property: "editor_table_property.html?t=" + RAONKEDITOR.UrlStamp,
      cell_property: "editor_cell_property.html?t=" + RAONKEDITOR.UrlStamp,
      insert_row_column: "editor_insert_row_column.html?t="
          + RAONKEDITOR.UrlStamp,
      row_property: "editor_row_property.html?t=" + RAONKEDITOR.UrlStamp,
      column_property: "editor_column_property.html?t=" + RAONKEDITOR.UrlStamp,
      emoticon: "editor_emoticon.html?t=" + RAONKEDITOR.UrlStamp,
      bookmark: "editor_bookmark.html?t=" + RAONKEDITOR.UrlStamp,
      iframe: "editor_iframe.html?t=" + RAONKEDITOR.UrlStamp,
      hyperlink: "editor_hyperlink.html?t=" + RAONKEDITOR.UrlStamp,
      split_cell: "editor_split_cell.html?t=" + RAONKEDITOR.UrlStamp,
      about: "editor_about.html?t=" + RAONKEDITOR.UrlStamp,
      symbol: "editor_symbol.html?t=" + RAONKEDITOR.UrlStamp,
      setting: "editor_setting.html?t=" + RAONKEDITOR.UrlStamp,
      template: "editor_template.html?t=" + RAONKEDITOR.UrlStamp,
      tool_replace: "editor_tool_replace.html?t=" + RAONKEDITOR.UrlStamp,
      insert_link_media: "editor_insert_link_media.html?t="
          + RAONKEDITOR.UrlStamp,
      m_insert_link_media: "editor_m_insert_link_media.html?t="
          + RAONKEDITOR.UrlStamp,
      m_image: "editor_m_image.html?t=" + RAONKEDITOR.UrlStamp,
      m_emoticon: "editor_m_emoticon.html?t=" + RAONKEDITOR.UrlStamp,
      cell_border: "editor_cell_border.html?t=" + RAONKEDITOR.UrlStamp,
      paste_dialog: "editor_paste.html?t=" + RAONKEDITOR.UrlStamp,
      shortcut: "editor_shortcut.html?t=" + RAONKEDITOR.UrlStamp,
      layout: "editor_layout.html?t=" + RAONKEDITOR.UrlStamp,
      insert_file: "editor_insert_file.html?t=" + RAONKEDITOR.UrlStamp,
      file_open: "editor_file_open.html?t=" + RAONKEDITOR.UrlStamp,
      blockquote: "editor_blockquote.html?t=" + RAONKEDITOR.UrlStamp,
      input_text: "editor_input_text.html?t=" + RAONKEDITOR.UrlStamp,
      input_radio: "editor_input_radio.html?t=" + RAONKEDITOR.UrlStamp,
      input_checkbox: "editor_input_checkbox.html?t=" +
          RAONKEDITOR.UrlStamp,
      input_button: "editor_input_button.html?t=" + RAONKEDITOR.UrlStamp,
      input_hidden: "editor_input_hidden.html?t=" + RAONKEDITOR.UrlStamp,
      input_textarea: "editor_input_textarea.html?t=" + RAONKEDITOR.UrlStamp,
      input_select: "editor_input_select.html?t=" + RAONKEDITOR.UrlStamp,
      input_image: "editor_input_image.html?t=" + RAONKEDITOR.UrlStamp,
      accessibility_validation: "editor_accessibility_validation.html?t="
          + RAONKEDITOR.UrlStamp,
      personal_data: "editor_personal_data.html?t=" + RAONKEDITOR.UrlStamp,
      forbidden_word: "editor_forbidden_word.html?t=" +
          RAONKEDITOR.UrlStamp,
      table_lock_property: "editor_table_lock_property.html?t="
          + RAONKEDITOR.UrlStamp,
      pastetoimage: "editor_pastetoimage.html?t=" + RAONKEDITOR.UrlStamp,
      insert_datetime: "editor_insert_datetime.html?t=" + RAONKEDITOR.UrlStamp,
      conversion: "editor_conversion.html?t=" + RAONKEDITOR.UrlStamp,
      video: "editor_video.html?t=" + RAONKEDITOR.UrlStamp,
      m_video: "editor_m_video.html?t=" + RAONKEDITOR.UrlStamp,
      spell_check: "editor_spell_check.html?t=" + RAONKEDITOR.UrlStamp,
      calculator: "editor_calculator.html?t=" + RAONKEDITOR.UrlStamp,
      load_auto_save: "editor_load_auto_save.html?t=" + RAONKEDITOR.UrlStamp,
      placeholder: "editor_placeholder.html?t=" + RAONKEDITOR.UrlStamp,
      paragraph_attribute: "editor_paragraph_attribute.html?t="
          + RAONKEDITOR.UrlStamp,
      paste_table: "editor_paste_table.html?t=" + RAONKEDITOR.UrlStamp,
      select_save_type: "editor_select_save_type.html?t=" + RAONKEDITOR.UrlStamp
    };
    this.xss_remove_events = this.xss_remove_tags = this.replace_tagname = "";
    this.xss_use = "0";
    this.xss_allow_events_attribute = "1";
    this.xss_check_attribute = ["src", "background",
      "href", "url"];
    this.xss_allow_url = [];
    this.editor_id = "";
    this.mode = "edit";
    this.mimeUse = "0";
    this.zIndex = 99999;
    this.ruler = {
      use: "0",
      view: "0",
      rulerInitPosition: [],
      viewPointer: "1",
      viewGuideLine: "1",
      viewRuler: "1",
      guideLineStyle: "dotted",
      mode: "1",
      guideLineColor: "rgb(255, 0, 0)",
      moveGuideLineStyle: "dotted",
      moveGuideLineColor: "#666666",
      useInoutdent: "1",
      moveGap: "1",
      useResizeEvent: "1",
      defaultView: "1",
      autoFitMode: "0",
      fixEditorWidth: "1",
      useVertical: "0",
      useMouseGuide: "0",
      usePointerValue: "0"
    };
    this.horizontalLine = {
      use: "0",
      url: "", height: "768", style: "", repeat: "1"
    };
    this.editorborder = "1";
    this.imageBaseUrl = this.custom_code = "";
    this.allowMediaFileType = ["wmv", "asf"];
    this.allowImageFileType = ["jpg", "jpeg", "png", "gif", "bmp"];
    this.allowFlashFileType = ["swf"];
    this.allowInsertFileType = "txt doc docx xls xlsx ppt pptx hwp pdf".split(
        " ");
    this.allowVideoFileType = ["mp4", "ogv", "webm"];
    this.maxImageFileSize = this.maxMediaFileSize = 0;
    this.maxImageBase64fileCount = -1;
    this.videoResponsiveWidthDefaultValue = this.useVideoPoster = this.maxVideoFileSize =
        this.maxInsertFileSize = this.maxFlashFileSize = 0;
    this.attachFileImage = "1";
    this.tableClassList = [];
    this.tableLineStyleList = [];
    this.tableDefaultTdHeight = this.tableDefaultClass = this.tableDefaultHeight = this.tableDefaultWidth = "";
    this.tableLineStyleValue = {};
    this.tableLineStyleValue._solid = "border-top: 1px solid #5d5d5d;";
    this.tableLineStyleValue._dotted = "border-top: 1px dotted #5d5d5d;";
    this.tableLineStyleValue._dashed = "border-top: 1px dashed #5d5d5d;";
    this.tableLineStyleValue._double = "border-top: 3px double #5d5d5d;";
    this.tableLineStyleValue._groove = "border: 3px groove #e1e1e1;";
    this.tableLineStyleValue._ridge = "border: 3px ridge #e1e1e1;";
    this.tableLineStyleValue._inset = "border: 3px inset #e1e1e1;";
    this.tableLineStyleValue._outset = "border: 3px outset #e1e1e1;";
    this.tableLineStyleValue._none = "border: 1px none #5d5d5d;";
    this.tableLineStyleValue._hidden = "border: 1px none #5d5d5d;";
    this.tableDefaultInoutdent = 20;
    this.tableNoSelectionClass = this.tableNoActionClass = this.tableNoResizeClass = this.tableInitInoutdent = "";
    this.tableColMaxCount =
        this.tableRowMaxCount = "13";
    this.allowInoutdentText = "0";
    this.defaultBorderColor = "#000000";
    this.useTableBorderAttribute = "1";
    this.imageLineStyleList = [];
    this.imageLineStyleValue = {};
    this.imageLineStyleValue._solid = "border-top: 1px solid #5d5d5d;";
    this.imageLineStyleValue._dotted = "border-top: 1px dotted #5d5d5d;";
    this.imageLineStyleValue._dashed = "border-top: 1px dashed #5d5d5d;";
    this.imageLineStyleValue._double = "border-top: 3px double #5d5d5d;";
    this.imageLineStyleValue._groove = "border: 3px groove #e1e1e1;";
    this.imageLineStyleValue._ridge = "border: 3px ridge #e1e1e1;";
    this.imageLineStyleValue._inset = "border: 3px inset #e1e1e1;";
    this.imageLineStyleValue._outset = "border: 3px outset #e1e1e1;";
    this.imageLineStyleValue._none = "border: 1px none #5d5d5d;";
    this.imageLineStyleValue._hidden = "border: 1px none #5d5d5d;";
    this.showLineForBorderNone = this.tableNearCellBorderStyle = this.tableAutoAdjustInSetHtml = this.tableAutoAdjustInPaste = "0";
    this.tabIndexObjId = this.focusInitEditorObjId = this.focusInitObjId = this.showLineForBorderNoneSkipAttribute =
        this.showLineForBorderNoneSkipClass = "";
    this.setDefaultStyle = {
      value: "0",
      body_id: "keditor_body",
      set_style: "1",
      line_height_mode: "1"
    };
    this.setDefaultUserStyle = [];
    this.popupCssUrl = "../css/editor_popup.css?t=" + RAONKEDITOR.UrlStamp;
    this.symbolUrl = 1 == RAONKEDITOR.isRelease ? "../js/editor_symbol.js?t="
        + RAONKEDITOR.UrlStamp : "../js_dev/editor_symbol.js?t="
        + RAONKEDITOR.UrlStamp;
    this.dialogJSUrl = "../js/editor_dialog.js?t=" + RAONKEDITOR.UrlStamp;
    this.fileEncodingJSUrl = "../js/editor_fileopen_encoding.min.js?t="
        + RAONKEDITOR.UrlStamp;
    this.fileEncodingWorkerJSUrl = "../js/editor_fileopen_encodingWorker.min.js?t="
        + RAONKEDITOR.UrlStamp;
    this.ajaxUploadJSUrl = "../js/editor_upload.min.js?t="
        + RAONKEDITOR.UrlStamp;
    this.htmlProcessWorkerJSUrl = "../js/editor_htmlProcessWorker.js?t="
        + RAONKEDITOR.UrlStamp;
    this.customEventCmd = {image: {ondbclick: ""}, hyperLink: {ondbclick: ""}};
    this.ieCompatible = "";
    this.autoUrlDetect = "1";
    this.scrollOverflow = this.pasteRemoveEmptyTag = "0";
    this.autoBodyFit = this.disableTabletap = this.defaultImemode = "";
    this.autoBodyFitForOpenWord =
        this.autoBodyFitForWordEdit = this.useNoncreationAreaBackground = "0";
    this.disableKeydown = "";
    this.dragAndDropAllow = "0";
    this.limitPasteHtmlLength = {value: "0", length: 13E5};
    this.pasteToImage = "1";
    this.pasteToImagePopupMode = "0";
    this.pasteToImageType = ["png", "jpg"];
    this.pasteToImagePopupHtmlButtonText = this.pasteToImagePopupImageButtonText = "";
    this.wrapPtagToGetApi = this.wrapPtagToSource = "0";
    this.wrapPtagSkipTag = "";
    this.removeSpaceInTagname = "0";
    this.viewModeBrowserMenu = "1";
    this.eventForPasteImage = this.notRepairInViewMode =
        this.viewModeAllowCopy = "0";
    this.useHtmlCorrection = this.removeColgroup = "1";
    this.useHtmlProcessByWorkerSetApi = this.useHtmlProcessByWorker = this.replaceSpace = this.removeIncorrectAttribute = "0";
    this.skipTagInParser = this.orderListDefaultClass = this.unOrderListDefaultClass = "";
    this.htmlCorrectionLimitLength = 45E4;
    this.runtimes = "html5";
    this.setAutoSave = {
      mode: "2",
      interval: 5,
      maxCount: "5",
      unique_key: "",
      use_encrypt: "0",
      useManuallySave: "0",
      useManuallySaveShortcutKey: "0",
      saveAndStartInterval: "0",
      popupWidth: "480",
      popupHeight: "345"
    };
    this.insertCarriageReturn = "0";
    this.returnEvent = {
      mouse_event: "0",
      key_event: "0",
      command_event: "0",
      focus_event: "0",
      drag_event: "0"
    };
    this.ie_BugFixed_Hyfont = this.ie11_BugFixed_typing_bug_in_table = this.ie11_BugFixed_ReplaceAlignMargin = this.ie11_BugFixed_DeleteTableAlign = this.ie11_BugFixed_ReplaceBr = this.ie11_BugFixed_JASO = this.useCorrectInOutdent = "0";
    this.ie_BugFixed_Hyfont_Replace_Font = {};
    this.ie_BugFixed_Apply_All_Browser = "0";
    this.isLoadedEditor = !1;
    this.setValueObjId = "";
    this.replaceEmptyTagWithSpace =
        "1";
    this.LoadedEvent = "";
    this.event = {
      afterChangeMode: null,
      creationComplete: null,
      onError: null,
      onLanguageDefinition: null,
      afterPopupShow: null,
      agentInstall: null,
      beforeInsertUrl: null,
      mouse: null,
      command: null,
      key: null,
      resized: null,
      beforeDocumentEdit: null,
      afterDocumentEdit: null,
      documentEditComplete: null,
      pasteImage: null,
      wordCount: null,
      beforePaste: null,
      customAction: null,
      beforeFullScreen: null,
      fullScreen: null,
      setComplete: null,
      setInsertComplete: null,
      closeInstallPopup: null,
      setForbiddenWordComplete: null,
      drag: null,
      focus: null,
      dialogLoaded: null,
      beforeInsertHyperlink: null,
      insertEmoticon: null,
      applyFontStyle: null
    };
    this.frameFullScreen = "0";
    this.currFontFamily = "";
    this.allowImgSize = "1";
    this.hyperlinkTargetList = [];
    this.hyperlinkCategoryList = [];
    this.hyperlinkProtocolList = [];
    this.validateUrlLink = "1";
    this.developLang = "NET";
    this.formMode = "0";
    this.openDocument = {
      beforeOpenEvent: "0",
      useHwp: "0",
      word: {maxSize: 0, maxPage: 0},
      excel: {maxSize: 0, maxSheet: 0},
      powerpoint: {maxSize: 0, maxSlide: 0},
      useHtml5FileOpen: "1"
    };
    this.removeLastBrTag =
        "0";
    this.editorBodyEditableEx = this.editorBodyEditable = !0;
    this.editorBodyEditableMode = "1";
    this.inoutdentDefaultSize = 40;
    this.accessibilityValidationItems = "";
    this.statusBarItem = [];
    this.statusBarTitle = [];
    this.statusBarInitMode = "design";
    this.dragResize = "0";
    this.dragResizeApplyBrowser = [];
    this.dragResizeMovable = "0";
    this.dragResizeApplyDivClass = "";
    this.replaceOutsideImage = {use: "0", exceptDomain: [], targetDomain: []};
    this.topMenuItem = [];
    this.removeItem = [];
    this.removeContextItem = [];
    this.eventList = [];
    this.userJsUrl =
        "";
    this.fontFamilyList = [];
    this.displayFontFamilyList = [];
    this.fontSizeList = [];
    this.lineHeightList = "100% 120% 150% 180% 200% 250% 300%".split(" ");
    this.zoomList = null;
    this.formattingList = [];
    this.letterSpacingList = [];
    this.adminTableLock = {
      defaultShowLockIconUserMode: "0",
      defaultLockName: "keditor_lock",
      checkLockName: ["keditor_lock"],
      defaultTableLockMode: "2"
    };
    this.userTableLock = {
      use: "0",
      lockName: ["keditor_lock"],
      defaultTableLockMode: "2",
      defaultShowLockIcon: "1",
      allowChangeMode: "0"
    };
    this.removeComment = "1";
    this.tool_bar_grouping = "0";
    this.setDefaultValueInEmptyTag = "p div h1 h2 h3 h4 h5".split(" ");
    this.userHelpUrl = this.metaHttpEquiv = this.directEditHtmlUrl = this.userCssAlwaysSet = this.photoEditorId = "";
    this.useGZip = "0";
    this.topStatusBarLoading = this.statusBarLoading = "1";
    this.hasContainer = "0";
    this.security = {
      encryptParam: "0",
      keyValue: RAONKEDITOR.util.getRV(RAONKEDITOR._$0).substring(0, 11),
      fileExtensionDetector: "0"
    };
    this.tabSpace = "&nbsp;&nbsp;&nbsp;&nbsp;";
    this.document = {docTitle: ""};
    this.addHtmlToSetValue =
        {html: "", preOrSub: 0};
    this.imgUploadContenttype = "0";
    this.imageCustomPropertyDelimiter = "|";
    this.useHybrid = "0";
    this.lineHeightMode = this.useGetHtmlToLowerCase = this.hybridWindowMode = "1";
    this.letterSpacingIncDecGap = this.lineHeightIncDecGap = this.fontSizeIncDecGap = "";
    this.applyStyleEmptyTag = "0";
    this.undoCount = 20;
    this.allowDeleteCount = "0";
    this.autoDestroy = {use: "0", moveCursor: "0"};
    this.initFocusForSetAPI = this.initFocus = !0;
    this.autoMoveInitFocus = {use: "0", targetWindow: null};
    this.replaceEmptySpanTagInSetapiOnlyTable =
        this.replaceEmptySpanTagInSetapi = this.emptyTagRemoveInSetapi = this.allowUnableToDeleteMsg = "0";
    this.applyFormatExceptStyle = [];
    this.enforceDoctype = "2";
    this.userColorPicker = "";
    this.useAgentInstallGuide = "0";
    this.agentInstallFileName = "raonkSetup.exe";
    this.agentInstallGuideZIndex = 9999;
    this.agentInstallFileUrl = this.agentInstallGuideLogoUrl = "";
    this.agentInstallFolderUrl = this.webPath.agent;
    this.useAutoInstall = "1";
    this.imageAutoConvert = "0";
    this.uploadMethod = "upload";
    this.removeMsoClass = this.uploadUseHTML5 = "1";
    this.tableTemplateListUrl = "";
    this.useTableBackgroundImage = this.useReplaceImage = this.useBasicTemplate = "1";
    this.buttonText001 = "";
    this.interworkingModuleThird = this.interworkingModuleSecond = this.interworkingModuleFirst = null;
    this.useServerLicense = !1;
    this.removeEmptyTag = "1";
    this.removeEmptyTagSetValue = "0";
    this.removeEmptyTagInsertNbspForLineBreak = "1";
    this.useUndoLightMode = "0";
    this.fullScreenBottom = this.fullScreenRight = this.fullScreenLeft = this.fullScreenTop = 0;
    this.adjustCursorInTable = "0";
    this.focusInitObjIdEx =
        "";
    this.viewImgBase64Source = "0";
    this.removeStyle = {use: "0", tag: "", style: ""};
    this.personalData = "email,phone,RRN";
    this.forbiddenWord = "";
    this.forbiddenWordMode = "0";
    this.forbiddenWordWidth = 800;
    this.forbiddenWordHeight = 560;
    this.useRecentlyFormatting = this.useRecentlyFontSize = this.useRecentlyLineHeight = this.useRecentlyLetterSpacing = this.useRecentlyFont = this.useLocalFont = "0";
    this.wordCount = {
      use: "0",
      limit: "0",
      limitchar: "0",
      limitbyte: "0",
      limitline: "0",
      countwhitespace: "0",
      limitmessage: "0",
      limitcount: "0",
      limitunit: "char"
    };
    this.managerPortArr = ["47317", "47139", "57317", "57318", "57419"];
    this.managerHttpsPortArr = ["47337", "47159", "57337", "57338", "57439"];
    this.sendToManagerType = "1";
    -1 < RAONKEDITOR.UserAgent.os.name.toLowerCase().indexOf("windows") && -1
    < RAONKEDITOR.UserAgent.browser.name.toLocaleLowerCase().indexOf("safari")
    && (this.sendToManagerType = "2");
    "1" == this.sendToManagerType && RAONKEDITOR.browser.ie && 9
    >= RAONKEDITOR.browser.ieVersion && (this.sendToManagerType = "2");
    this.useKManager = "1";
    this.agentHttps = !1;
    this.NTLM = "";
    this.isCrossDomain =
        !1;
    this.dropZoneTransparency = 1;
    this.agentDocumentEdit = [];
    this.agentDocumentEditSetting = {
      removeMsoFontStyle: "0",
      downloadImageDomain: ""
    };
    this.toolbarArr1 = [];
    this.toolbarArr2 = [];
    this.pluginToolExArr = [];
    this.useMiniImageEditor = "0";
    this.miniPhotoEditor = {
      width: "800px",
      height: "600px",
      backgroundColor: "black",
      backgroundOpacity: "0.5",
      imgTagRemoveAttribute: []
    };
    this.useLetterSpacingIncDec = this.useLineHeightIncDec = this.useFontSizeIncDec = this.useLineHeightKeyin = this.useFontSizeKeyin = this.useFontFamilyKeyin = "0";
    this.autoList = {use: "0"};
    this.figure = {
      use: "0",
      figurestyle: "margin: 0px; text-align: center; display: inline-block;",
      figcaptionstyle: "",
      defaultcaption: "<br>"
    };
    this.browserSpellCheck = "0";
    this.useMouseTableInoutdent = !0;
    this.LimitTableInoutdent = "0";
    this.disableInsertImage = "";
    this.insertMultiImage = this.usePersonalSetting = "1";
    this.uploadImageFileObject = "0";
    this.excelImageFix = this.dext5Install = "1";
    this.targetDomainForEdit = this.agentTempRootDirectory = "";
    this.cellSelectionMode = this.colorPickerInputKind = "0";
    this.tableInsertDragSize = "10,10";
    this.keepEditorFromDOMChange = this.showRealFont = "0";
    this.agentInstallFailCheck = {use: "0", time: 30, stopInstallCheck: !1};
    this.saveLineBreakToLocalStorage = this.wordWrapType = this.wordBreakType = this.useLineBreak = this.imageContinueInsertMaintainValue = "0";
    this.splitCellStyle = this.useTablePasteDialog = "1";
    this.keepOriginalHtml = "0";
    this.clipImageHex = [];
    this.useAutoToolbar = "0";
    this.autoToolbar = {
      "default": ["font_size", "bold", "underline", "italic", "strike_through"],
      selectedSingleCell: "font_size bold underline italic strike_through separator split_cell cell_bg_color detail_cell_bg_color".split(
          " "),
      selectedMultiCell: "font_size bold underline italic strike_through separator split_cell merge_cell cell_bg_color detail_cell_bg_color table_same_width table_same_height table_same_widthheight".split(
          " "),
      focusInCell: "font_size bold underline italic strike_through separator split_cell cell_bg_color detail_cell_bg_color split_cell table_row_clone insert_row_up insert_row_down delete_row delete_column table_delete insert_column_left insert_column_right table_select_all table_select_cell table_select_row table_select_column cell_property table_property".split(
          " "),
      selectArea: ["font_size", "bold", "underline", "italic",
        "strike_through"],
      focusImage: ["image_align_default", "image_align_left",
        "image_align_right", "separator", "image_property"]
    };
    this.useEnterpriseMode = "0";
    this.defaultBodySpace = {
      use: "1",
      mode: "1",
      value: "10px",
      configValue: {top: "10px", right: "10px", bottom: "10px", left: "10px"}
    };
    this.olListStyleTypeSequence = {
      decimal: "upper-alpha",
      "decimal-leading-zero": "upper-alpha",
      "upper-alpha": "lower-alpha",
      "lower-alpha": "upper-roman",
      "upper-roman": "lower-roman",
      "lower-roman": "lower-greek",
      "lower-greek": "decimal"
    };
    this.ulListStyleTypeSequence = {
      disc: "circle",
      circle: "square",
      square: "disc"
    };
    this.pasteRemoveSpanAbsolute = "";
    this.dragMove = "0";
    this.pasteWhenTableIsLast = "1";
    this.allowLinkMediaCaption = "";
    this.tool_bar_admin = this.resize_bar = this.removeImageInPasteExcel = "0";
    this.toolBarEnableDisableMode = "2";
    this.useHwpOpen = this.autoGrowMode = this.replaceLineBreak = "0";
    this.adjustCurrentColorInSetApi = "1";
    this.adjustEmptyTableInExcel = this.adjustTextIndentInPaste = "0";
    this.replaceOneSpaceToNbspInExcel =
        "1";
    this.undoMode = "2";
    this.setDefaultTagInEmptyCell = "1";
    this.insidePaddingTdSetting = "0";
    this.removeCarriageReturnInTag = "1";
    this.clickCtrlHyperlink = "0";
    this.symbolCustomCssUrl = "";
    this.removeLangAttribute = "1";
    this.itemCustomUrl = {item: [], url: []};
    this.adjustCellSizeAfterDeleteCell = "1";
    this.moveStyleTagToHead = this.adjustCursorInRelative = this.pasteToTextMode = this.removeDummyDivInHwpPaste = "0";
    this.removeDummyTag = "";
    this.useConfigTimeStamp = "1";
    this.placeholder = {
      content: "", fontColor: "#999999", fontSize: "",
      fontFamily: ""
    };
    this.pasteTextLineBreak = this.ignoreDifferentEditorName = "0";
    this.replaceMsoStyle = {
      settingStyle: [],
      styleValue: {"mso-spacerun": "yes"},
      replaceAttributeName: "raonk"
    };
    this.forceSaveAsServer = "0";
    this.handlerUrlSave = "";
    this.cleanNestedTagOptions = {
      removeTag: "",
      allowStyle: [],
      nestedCount: 50
    };
    this.removeFontType = {
      fontFamily: ["\ub9d1\uc740 \uace0\ub515 Semilight"],
      type: ["monospace"]
    };
    this.setEmoticonObject = "";
    this.underlineAndStrikeThroughMode = "2";
    this.replaceRgbToHex = "";
    this.uploadFileNameEncoding =
        this.dragAndDropMode = this.keepImageOriginalSizeAutoCheck = this.personalSettingUseLineHeightKeyin = this.personalSettingUseFontSizeKeyin = this.personalSettingUseFontFamilyKeyin = this.tableDefaultCellPadding = "0";
    this.useFindReplaceShortcut = "1";
    this.paragraphAttributeType = ["px", "pt", "cm"];
    this.disableErrorConfirmMessage = this.usePasteToolbarAndContext = "0";
    this.deleteTableUsingKey = "1";
    this.keepFontFamily = ["wingdings"];
    this.dialogBorder = this.dialogBoxShadow = this.dialogBorderRadius = "";
    this.mobilePopupMode = "2";
    this.customCssUrlDetailApply = "0";
    this.autoSetZoom = {use: "0", checkNode: null};
    this.fileOpenDialogFilter = "";
    this.imageQuality = {
      quality: 1,
      workerCount: 7,
      extension: "",
      allowOrLimit: "1",
      overFileSize: "0"
    };
    this.resizeBarHolderSync = "0";
    this.compatibility = {
      dingBatChar: "0",
      dingBatCharSetApi: "0",
      dingBatCharPaste: "0",
      autoResizePastedImage: "1",
      hwpPasteImageInHtml5: "1",
      hwpPasteBulletInHtml5: "0",
      hwpProcessTypeInAgent: "",
      fontTagToSpan: "1"
    };
    this.replaceMsStyleName = [];
    this.insertSourceTagInVideo = "0";
    this.widthFix = {
      value: "",
      backgroundColor: "",
      defaultView: "",
      border: {
        styleName: "boxShadow",
        styleValue: "rgba(0,0,0,0.2) 3px 3px 5px 0px"
      },
      padding: 10
    };
    this.selectSaveTypeIconShowIconList = ["save", "save_as", "p_convertimage",
      "p_convertpdf"];
    this.autoSetDocumentDomain = this.removeFontSizeApplyHTag = "0";
    this.editingAreaBgColor = "";
    this.disableUnnecessaryKeyEvt = this.autoChangeToHtml5Mode = "0"
  }, keditor_user_config = function () {
    return {
      Width: "",
      Height: "",
      SkinName: "",
      DialogSkinName: "",
      InitXml: "",
      InitServerXml: "",
      HandlerUrl: "",
      InitVisible: !0,
      DefaultMessage: "",
      FirstLoadType: "",
      FirstLoadMessage: "",
      FileFieldID: "",
      EditorHolder: "",
      ShowTopMenu: "",
      ShowToolBar: "",
      ShowTopStatusBar: "",
      ShowStatusBar: "",
      XssUse: "",
      XssRemoveTags: "",
      XssRemoveEvents: "",
      XssAllowEventsAttribute: "",
      XssCheckAttribute: "",
      XssAllowUrl: "",
      Mode: "",
      ZIndex: "",
      NextTabElementId: "",
      IgnoreSameEditorName: "0",
      KeepEditorFromDOMChange: "0",
      ChangeMultiValueMode: "",
      EditorBorder: "",
      GridColor: "",
      GridColorName: "",
      GridSpans: "",
      GridForm: "",
      Encoding: "",
      DocType: "",
      Xmlnsname: "",
      ShowFontReal: "",
      Lang: "",
      LanguageExtendObject: "",
      UseLang: "",
      IconName: "icon",
      CustomCode: "",
      EnterTag: "",
      DefaultFontFamily: "",
      DefaultFontSize: "",
      DefaultLineHeight: "",
      DefaultFontMarginTop: "",
      DefaultFontMarginBottom: "",
      UserFieldID: "",
      UserFieldValue: "",
      MimeCharset: "",
      MimeConentEncodingType: "",
      MimeFileTypeFilter: "",
      MimeLocalOnly: "",
      MimeRemoveHeader: "",
      UserOpenDlgTitle: "",
      UserOpenDlgType: "",
      UserOpenDlgInitDir: "",
      UserImageDlgStyle: "",
      MimeBaseURL: "",
      FocusInitObjId: "",
      FocusInitEditorObjId: "",
      TabIndexObjId: "",
      ImageEditorUse: "",
      MimeUse: "",
      OfficeLineFix: "",
      UseLog: "",
      RootPath: "",
      EditorTabDisable: "",
      FormListUrl: "",
      EmoticonUrl: "",
      Runtimes: "",
      MouseEventCancel: !1,
      KeyEventCancel: !1,
      SetValueObjId: "",
      LoadedEvent: "",
      Event: {
        AfterChangeMode: null,
        CreationComplete: null,
        OnError: null,
        OnLanguageDefinition: null,
        AfterPopupShow: null,
        AgentInstall: null,
        BeforeInsertUrl: null,
        Mouse: null,
        Command: null,
        Key: null,
        Resized: null,
        BeforeDocumentEdit: null,
        AfterDocumentEdit: null,
        DocumentEditComplete: null,
        PasteImage: null,
        WordCount: null,
        BeforePaste: null,
        CustomAction: null,
        BeforeFullScreen: null,
        FullScreen: null,
        SetComplete: null,
        SetInsertComplete: null,
        CloseInstallPopup: null,
        SetForbiddenWordComplete: null,
        Drag: null,
        Focus: null,
        DialogLoaded: null,
        BeforeInsertHyperlink: null,
        InsertEmoticon: null,
        ApplyFontStyle: null
      },
      ScrollOverflow: "",
      DocType: "",
      DevelopLangage: "",
      UnitDelimiter: "",
      UnitAttributeDelimiter: "",
      EditorBodyEditable: "",
      EditorBodyEditableMode: "",
      SymbolUrl: "",
      AccessibilityValidationItems: "",
      TabSequenceMode: "",
      ViewModeAutoHeight: "",
      ViewModeAutoWidth: "",
      ShowDialogPosition: "",
      StatusBarItem: "",
      StatusBarItemTitle: "",
      StatusBarInitMode: "",
      ImageBaseUrl: "",
      DragResize: "",
      DragResizeApplyBrowser: "",
      DragResizeMovable: "",
      DragResizeApplyDivClass: "",
      ReplaceOutsideImage: "",
      ReplaceOutsideImageExceptDomain: "",
      ReplaceOutsideImageTargetDomain: "",
      TopMenuItem: "",
      RemoveItem: "",
      RemoveContextItem: "",
      ManagerMode: "",
      EventList: "",
      TableLock: {
        Use: "",
        LockName: "",
        ShowLockIconUserMode: "",
        TableLockMode: ""
      },
      FontFamilyList: "",
      DisplayFontFamilyList: "",
      FontSizeList: "",
      LineHeightList: "",
      ZoomList: "",
      FormattingList: "",
      LetterSpacingList: "",
      FrameFullScreen: "",
      DialogWindow: null,
      AdminTableLock: {
        DefaultShowLockIconUserMode: "",
        DefaultLockName: "",
        CheckLockName: "",
        DefaultTableLockMode: ""
      },
      UserTableLock: {
        Use: "",
        LockName: "",
        DefaultTableLockMode: "",
        DefaultShowLockIcon: "",
        AllowChangeMode: ""
      },
      RemoveComment: "",
      SaveFolderNameRule: "",
      SaveFileFolderNameRule: "",
      ToolBarGrouping: "",
      SetDefaultValueInEmptyTag: "",
      LoadErrorCustomMessage: "",
      PhotoEditorId: "",
      ProductKey: "",
      LicenseKey: "",
      LicenseKeyHtml5: "",
      DirectEditHtmlUrl: "",
      UserHelpUrl: "",
      UseGZip: "0",
      StatusBarLoading: "",
      TopStatusBarLoading: "",
      HandlerUrlSaveForNotes: "",
      HasContainer: "",
      Security: {EncryptParam: "", FileExtensionDetector: ""},
      TabSpace: "",
      AutoBodyFit: "",
      UseNoncreationAreaBackground: "",
      AutoBodyFitForWordEdit: "",
      AutoBodyFitForOpenWord: "",
      Ruler: {
        Use: "",
        InitPosition: "",
        ViewPointer: "",
        ViewGuideLine: "",
        ViewRuler: "",
        GuideLineStyle: "",
        GuideLineColor: "",
        MoveGuideLineStyle: "",
        MoveGuideLineColor: "",
        UseInoutdent: "",
        MoveGap: "",
        UseResizeEvent: "",
        DefaultView: "",
        AutoFitMode: "",
        FixEditorWidth: "",
        UseVertical: "",
        UseMouseGuide: "",
        UsePointerValue: ""
      },
      UseConfigTimeStamp: "1",
      UseHorizontalLine: "",
      UseHorizontalLineHeight: "",
      UseHorizontalLineStyle: "",
      UseHorizontalLineRepeat: "",
      Document: {DocTitle: ""},
      ImgUploadContenttype: "",
      ImageCustomPropertyDelimiter: "",
      LineHeightMode: "",
      FontSizeIncDecGap: "",
      LineHeightIncDecGap: "",
      LetterSpacingIncDecGap: "",
      PrintMarginltrb: "",
      UseFormPrint: "",
      TrustSites: "",
      ApplyStyleEmptyTag: "",
      UndoCount: "",
      AllowDeleteCount: "",
      AutoDestroy: {Use: "", MoveCursor: ""},
      InitFocus: "",
      AutoMoveInitFocus: {
        Use: "",
        TargetWindow: ""
      },
      AllowUnableToDeleteMsg: "",
      PasteToImage: "",
      PasteToImagePopupMode: "",
      PasteToImageType: "",
      PasteToImagePopupImageButtonText: "",
      PasteToImagePopupHtmlButtonText: "",
      ImageAutoFit: "",
      SaveFileNameRule: "",
      SaveFileNameRuleEx: "",
      ImageConvertFormat: "",
      ImageConvertWidth: "",
      ImageConvertHeight: "",
      Accessibility: "",
      SourceViewtype: "",
      UserCssUrl: "",
      UserCssAlwaysSet: "",
      WebFontCssUrl: "",
      WebFontCssAlwaysSet: "",
      UserJsUrl: "",
      SystemTitle: "",
      PasteRemoveEmptyTag: "",
      DefaultImemode: "",
      DisableTabletap: "",
      EmptyTagRemoveInSetapi: "",
      ReplaceEmptySpanTagInSetapi: "",
      ReplaceEmptySpanTagInSetapiOnlyTable: "",
      WrapPtagToSource: "",
      WrapPtagToGetApi: "",
      WrapPtagSkipTag: "",
      UseHtmlCorrection: "",
      RemoveIncorrectAttribute: "",
      ReplaceSpace: "",
      UseHtmlProcessByWorker: "",
      UseHtmlProcessByWorkerSetApi: "",
      UnOrderListDefaultClass: "",
      OrderListDefaultClass: "",
      SkipTagInParser: "",
      HtmlCorrectionLimitLength: "",
      ShowLineForBorderNone: "",
      ShowLineForBorderNoneSkipClass: "",
      ShowLineForBorderNoneSkipAttribute: "",
      TableAutoAdjust: "",
      ApplyFormatExceptStyle: "",
      EnforceDoctype: "",
      UserColorPicker: "",
      ImageAutoConvert: "",
      UploadMethod: "",
      UploadUseHTML5: "",
      RemoveMsoClass: "",
      TableTemplateListUrl: "",
      UseBasicTemplate: "",
      UseReplaceImage: "",
      UseTableBackgroundImage: "",
      OpenDocument: {
        BeforeOpenEvent: "",
        UseHwp: "",
        Word: {MaxSize: "", MaxPage: ""},
        Excel: {MaxSize: "", MaxSheet: ""},
        Powerpoint: {MaxSize: "", MaxSlide: ""},
        UseHtml5FileOpen: ""
      },
      ButtonText001: "",
      MaxMediaFileSize: "",
      MaxImageFileSize: "",
      MaxImageBase64fileCount: "",
      MaxFlashFileSize: "",
      MaxInsertFileSize: "",
      MaxVideoFileSize: "",
      UseVideoPoster: "",
      VideoResponsiveWidthDefaultValue: "",
      TableDefaultWidth: "",
      TableDefaultHeight: "",
      TableDefaultClass: "",
      TableDefaultInoutdent: "",
      TableInitInoutdent: "",
      TableDefaultTdHeight: "",
      TableRowMaxCount: "",
      TableColMaxCount: "",
      AllowInoutdentText: "",
      DefaultBorderColor: "",
      UseTableBorderAttribute: "",
      TableClassList: "",
      TableLineStyleList: "",
      TableNoResizeClass: "",
      TableNoSelectionClass: "",
      TableNoActionClass: "",
      TableAutoAdjustInPaste: "",
      TableAutoAdjustInSetHtml: "",
      TableNearCellBorderStyle: "",
      RemoveEmptyTag: "",
      RemoveEmptyTagSetValue: "",
      RemoveEmptyTagInsertNbspForLineBreak: "",
      PasteImageBase64Remove: "",
      UseUndoLightMode: "",
      FullScreenTop: "",
      FullScreenLeft: "",
      FullScreenRight: "",
      FullScreenBottom: "",
      AdjustCursorInTable: "",
      ViewImgBase64Source: "",
      RemoveStyle: {Use: "", Tag: "", Style: ""},
      PersonalData: "",
      ForbiddenWord: "",
      ForbiddenWordMode: "",
      ForbiddenWordWidth: "",
      ForbiddenWordHeight: "",
      UseLocalFont: "",
      UseRecentlyFont: "",
      UseRecentlyLetterSpacing: "",
      UseRecentlyLineHeight: "",
      UseRecentlyFontSize: "",
      UseRecentlyFormatting: "",
      WordCount: {
        Use: "",
        Limit: "",
        LimitChar: "",
        LimitByte: "",
        LimitLine: "",
        CountWhiteSpace: "",
        LimitMessage: "",
        LimitCount: ""
      },
      SetAutoSave: {
        Mode: "",
        Interval: "",
        MaxCount: "",
        UniqueKey: "",
        UseEncrypt: "",
        UseManuallySave: "",
        UseManuallySaveShortcutKey: "",
        SaveAndStartInterval: "",
        PopupWidth: "",
        PopupHeight: ""
      },
      AgentHttps: "",
      NTLM: "",
      DropZoneTransparency: "",
      AgentDocumentEdit: "",
      AgentDocumentEditSetting: {
        RemoveMsoFontStyle: "",
        DownloadImageDomain: ""
      },
      UseAgentInstallGuide: "",
      AgentInstallGuideZIndex: "",
      AgentInstallGuideLogoUrl: "",
      AgentInstallFileUrl: "",
      AgentInstallFolderUrl: "",
      UseAutoInstall: "",
      MiniPhotoEditor: {
        Width: "",
        Height: "",
        BackgroundColor: "",
        BackgroundOpacity: "",
        ImgTagRemoveAttribute: ""
      },
      UseFontFamilyKeyin: "",
      UseFontSizeKeyin: "",
      UseLineHeightKeyin: "",
      UseFontSizeIncDec: "",
      UseLineHeightIncDec: "",
      UseLetterSpacingIncDec: "",
      AutoList: {Use: ""},
      Figure: {
        Use: "",
        FigureStyle: "",
        FigcaptionStyle: "",
        DefaultCaption: ""
      },
      BrowserSpellCheck: "",
      UseMouseTableInoutdent: "",
      LimitTableInoutdent: "",
      DisableInsertImage: "",
      UsePersonalSetting: "",
      InsertMultiImage: "",
      UploadImageFileObject: "",
      DEXT5Install: "",
      ExcelImageFix: "",
      AgentTempRootDirectory: "",
      TargetDomainForEdit: "",
      ColorPickerInputKind: "",
      CellSelectionMode: "",
      TableInsertDragSize: "",
      AgentInstallFailCheck: null,
      ImageContinueInsertMaintainValue: "",
      UseLineBreak: "",
      WordBreakType: "",
      WordWrapType: "",
      SaveLineBreakToLocalStorage: "",
      UseTablePasteDialog: "",
      SplitCellStyle: "",
      KeepOriginalHtml: "",
      UseAutoToolBar: "",
      AutoToolBar: null,
      UseEnterpriseMode: "",
      DefaultBodySpace: {Use: "", Mode: "", Value: ""},
      OlListStyleTypeSequence: "",
      UlListStyleTypeSequence: "",
      PasteRemoveSpanAbsolute: "",
      DragMove: "",
      PasteWhenTableIsLast: "",
      CustomCssUrl: "",
      HtmlprocessCustomText: "",
      RemoveImageInPasteExcel: "",
      AllowLinkMediaCaption: "",
      DisableKeydown: "",
      CustomEventImageOndbclick: "",
      CustomEventHyperlinkOndbclick: "",
      PrintPreview: "",
      PrintHeaderLeft: "",
      PrintHeaderCenter: "",
      PrintHeaderRight: "",
      PrintFooterLeft: "",
      PrintFooterCenter: "",
      PrintFooterRight: "",
      AllowImgSize: "",
      ContextMenuDisable: "",
      IECompatible: "",
      AutoUrlDetect: "",
      SetDefaultStyle: {
        Value: "", BodyId: "", UserStyle: "", LineHeightMode: "",
        SetStyle: ""
      },
      DragAndDropAllow: "",
      LimitPasteHtml: "",
      LimitPasteHtmlLength: "",
      RemoveSpaceInTagname: "",
      ViewModeBrowserMenu: "",
      ViewModeAllowCopy: "",
      EventForPasteImage: "",
      RemoveColgroup: "",
      InsertCarriageReturn: "",
      ReturnEventMouse: "",
      ReturnEventKeyboard: "",
      ReturnEventCommand: "",
      ReturnEventFocus: "",
      ReturnEventDrag: "",
      UseCorrectInOutdent: "",
      Ie11BugFixedJASO: "",
      Ie11BugFixedReplaceBr: "",
      Ie11BugFixedDeleteTableAlign: "",
      Ie11BugFixedReplaceAlignMargin: "",
      Ie11BugFixedTypingBugInTable: "",
      IeBugFixedHyfont: "",
      IeBugFixedHyfontReplaceFont: "",
      IeBugFixedApplyAllBrowser: "",
      ReplaceEmptyTagWithSpace: "",
      RemoveLastBrTag: "",
      HybridWindowMode: "",
      UseGetHtmlToLowerCase: "",
      EmptyTagRemove: "",
      AllowMediaFileType: "",
      AllowImageFileType: "",
      AllowFlashFileType: "",
      AllowInsertFileType: "",
      AllowVideoFileType: "",
      AttachFileImage: "",
      HyperLinkTargetList: "",
      HyperLinkCategoryList: "",
      HyperLinkProtocolList: "",
      ValidateUrlLink: "",
      ImgDefaultWidth: "",
      ImgDefaultHeight: "",
      ImgDefaultMarginLeft: "",
      ImgDefaultMarginRight: "",
      ImgDefaultMarginTop: "",
      ImgDefaultMarginBottom: "",
      UseSelectionMark: "",
      SourceViewtypeUnformatted: "",
      SourceViewtypeEmptyTagMode: "",
      TopMenu: "",
      ToolBar: "",
      Topstatusbar: "",
      Statusbar: "",
      ResizeBar: "",
      ToolBarAdmin: "",
      ToolBarEnableDisableMode: "",
      ReplaceLineBreak: "",
      AutoGrowMode: "",
      UseHwpOpen: "",
      AdjustCurrentColorInSetApi: "",
      AdjustTextIndentInPaste: "",
      AdjustEmptyTableInExcel: "",
      ReplaceOneSpaceToNbspInExcel: "",
      UndoMode: "",
      SetDefaultTagInEmptyCell: "",
      InsidePaddingTdSetting: "",
      RemoveCarriageReturnInTag: "",
      ClickCtrlHyperlink: "",
      SymbolCustomCssUrl: "",
      RemoveLangAttribute: "",
      ItemCustomUrl: {
        Item: "",
        Url: ""
      },
      AdjustCellSizeAfterDeleteCell: "",
      RemoveDummyDivInHwpPaste: "",
      PasteToTextMode: "",
      AdjustCursorInRelative: "",
      MoveStyleTagToHead: "",
      RemoveDummyTag: "",
      Placeholder: {Content: "", FontColor: "", FontSize: "", FontFamily: ""},
      IgnoreDifferentEditorName: "",
      PasteTextLineBreak: "",
      ReplaceMsoStyle: {
        SettingStyle: "",
        StyleValue: null,
        ReplaceAttributeName: "raonk"
      },
      ForceSaveAsServer: "",
      HandlerUrlSave: "",
      CleanNestedTagOptions: {RemoveTag: "", AllowStyle: "", NestedCount: ""},
      RemoveFontType: {FontFamily: "", Type: ""},
      SetEmoticonObject: "",
      UnderlineAndStrikeThroughMode: "",
      ReplaceRgbToHex: "",
      TableDefaultCellPadding: "",
      PersonalSettingUseFontFamilyKeyin: "",
      PersonalSettingUseFontSizeKeyin: "",
      PersonalSettingUseLineHeightKeyin: "",
      KeepImageOriginalSizeAutoCheck: "",
      DragAndDropMode: "",
      UploadFileNameEncoding: "",
      UseFindReplaceShortcut: "",
      ParagraphAttributeType: "",
      UsePasteToolbarAndContext: "",
      DisableErrorConfirmMessage: "",
      DeleteTableUsingKey: "",
      KeepFontFamily: "",
      MobilePopupMode: "",
      CustomCssUrlDetailApply: "",
      AutoSetZoom: {Use: "", CheckNode: null},
      FileOpenDialogFilter: "",
      ImageQuality: "",
      ResizeBarHolderSync: "",
      Compatibility: {
        DingBatChar: "",
        AutoResizePastedImage: "",
        HwpPasteImageInHtml5: "",
        HwpPasteBulletInHtml5: "",
        HwpProcessTypeInAgent: "",
        FontTagToSpan: ""
      },
      ReplaceMsStyleName: "",
      InsertSourceTagInVideo: "",
      WidthFix: {
        Value: "",
        BackgroundColor: "",
        DefaultView: "",
        Border: "",
        Padding: ""
      },
      AutoSetDocumentDomain: "",
      EditingAreaBgColor: "",
      AutoChangeToHtml5Mode: "",
      DisableUnnecessaryKeyEvt: "",
      RemoveFontSizeApplyHTag: "",
      DefaultMinHeight: ""
    }
  };
  window.RAONKEDITOR =
      function () {
        return {
          isRelease: !0,
          logMode: !1,
          logLevel: "ALL",
          logGroupingName: "",
          isPopUpCssLoaded: !1,
          version: "RAON K Editor",
          UrlStamp: "",
          rootPath: function () {
            var a = window.RAONKEDITOR_ROOTPATH || "";
            if (!a) {
              for (var d = document.getElementsByTagName("script"),
                  c = d.length, b = null, e = 0; e < c;
                  e++) {
                if (b = d[e], b = b.src.match(
                    /(^|.*[\\\/])raonkeditor\.js/i)) {
                  a = b[1];
                  break
                }
              }
            }
            -1 == a.indexOf(":/") && (a = 0 === a.indexOf("/")
                ? location.href.match(/^.*?:\/\/[^\/]*/)[0] + a
                : location.href.match(/^[^\?]*\/(?:)/)[0] + a);
            a = a.substring(0, a.length -
                1);
            a = a.substring(0, a.lastIndexOf("/")) + "/";
            if (!a) {
              throw"RAON K Editor installation path could not be automatically detected.";
            }
            return a
          }(),
          getUrl: function (a) {
            -1 == a.indexOf(":/") && 0 !== a.indexOf("/") && (a = this.rootPath
                + a);
            this._$0 && "/" != a.charAt(a.length - 1) && !/[&?]ver=/.test(a)
            && (a += (0 <= a.indexOf("?") ? "&" : "?") + "ver="
                + this.util.getRV(this._$0));
            return a
          },
          RAONKMULTIPLE: {},
          RAONKHOLDER: {},
          RAONKMULTIPLEID: [],
          ShowTextChangeAlert: !0,
          ShowDestroyAlert: !0,
          CEditorID: "",
          IsEditorLoadedHashTable: null,
          InitEditorDataHashTable: null,
          UserConfigHashTable: null,
          EditorContentsHashTable: null,
          rvi: {
            m1: 7,
            maj: ["20", "18"],
            mi2: ["15", "00"],
            l: ["01"],
            m2: 77,
            mi1: ["23", "10", "31"],
            s1: ".",
            s2: ""
          }
        }
      }();
  try {
    "undefined" == typeof RAONKSolutionLog && "undefined"
    != typeof RAONKEditorLogMode && RAONKEditorLogMode
    && (RAONKEDITOR.logMode = !0, "undefined" != typeof RAONKEditorLogModeLevel
    && (RAONKEDITOR.logLevel = RAONKEditorLogModeLevel.toUpperCase()), document.write(
        '<script src="' + RAONKEDITOR.rootPath
        + "js/log4javascript/raonk.log4javascript.min.js?t="
        + RAONKEDITOR.UrlStamp +
        '" type="text/javascript">\x3c/script>'))
  } catch (e$$17) {
    RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(e$$17)
  }
  RAONKEDITOR.browser || (RAONKEDITOR.browser = function () {
    var a = navigator.userAgent.toLowerCase(), d = window.opera, d = {
      ie: -1 < a.search("trident") || -1 < a.search("msie")
      || /(edge)\/((\d+)?[\w\.]+)/i.test(a) ? !0 : !1,
      opera: !!d && d.version,
      webkit: -1 < a.indexOf(" applewebkit/"),
      mac: -1 < a.indexOf("macintosh"),
      quirks: (-1 < a.search("trident") || -1 < a.search("msie")
              || /(edge)\/((\d+)?[\w\.]+)/i.test(a)) && "BackCompat" ==
          document.compatMode,
      mobile: -1 < a.indexOf("mobile") || -1 < a.indexOf("android") || -1
          < a.indexOf("iphone"),
      iOS: /(ipad|iphone|ipod)/.test(a),
      isCustomDomain: function () {
        if (!this.ie) {
          return !1;
        }
        var a = document.domain, c = window.location.hostname;
        return a != c && a != "[" + c + "]"
      },
      isHttps: "https:" == location.protocol,
      G_AP12: 9,
      G_AP24: "i"
    };
    d.gecko = "Gecko" == navigator.product && !d.webkit && !d.opera;
    d.ie && (d.gecko = !1);
    d.webkit && (-1 < a.indexOf("chrome") ? (d.chrome = !0, -1 < a.indexOf(
        "opr") && (d.opera = !0, d.chrome = !1)) : d.safari = !0);
    var c;
    d.ieVersion =
        0;
    d.ie && (d.quirks || !document.documentMode ? -1 < a.indexOf("msie")
            ? c = parseFloat(a.match(/msie (\d+)/)[1]) : -1 < a.indexOf("trident")
                ? c = parseFloat(a.match(/rv:([\d\.]+)/)[1])
                : /(edge)\/((\d+)?[\w\.]+)/i.test(a) ? (c = 12, d.chrome = !1)
                    : c = 7
        : c = document.documentMode, d.ieVersion = c, d.ie12 = 12
        == c, d.ie11 = 11 == c, d.ie10 = 10 == c, d.ie9 = 9 == c, d.ie8 = 8
        == c, d.ie7 = 7 == c, d.ie6 = 7 > c || d.quirks, -1 < a.indexOf(
        "trident") ? d.trident = parseFloat(a.match(/ trident\/(\d+)/)[1])
        : d.trident = "");
    d.gecko && (c = a.match(/rv:([\d\.]+)/)) && (c = c[1].split("."),
        c = 1E4 * c[0] + 100 * (c[1] || 0) + 1 * (c[2] || 0));
    d.webkit && (c = parseFloat(a.match(/ applewebkit\/(\d+)/)[1]));
    d.HTML5Supported = "File" in window && "FileReader" in window && "Blob"
        in window;
    d.ie && 10 > d.ieVersion && (d.HTML5Supported = !1);
    d.LocalStorageSupported = !1;
    try {
      window.localStorage
      && (window.localStorage.keditor_localstorage_test = "test", "test"
      == window.localStorage.keditor_localstorage_test
      && (d.LocalStorageSupported = !0, window.localStorage.removeItem(
          "keditor_localstorage_test")))
    } catch (b) {
      RAONKEDITOR && RAONKEDITOR.logMode &&
      console && console.log(b)
    }
    a = null;
    try {
      a = new XMLHttpRequest, d.ajaxOnProgressSupported = !!(a && "upload" in a
          && "onprogress" in a.upload)
    } catch (e) {
      d.ajaxOnProgressSupported = !1
    }
    a = null;
    a = document.createElement("canvas");
    a.getContext && a.getContext("2d") ? d.canvasSupported = !0
        : d.canvasSupported = !1;
    a = null;
    a = void 0;
    d.ES6Supported = !0;
    try {
      new Function("(a = 0) => a")
    } catch (f) {
      d.ES6Supported = !1
    }
    d.WorkerSupported = "Worker" in window;
    return d
  }());
  RAONKEDITOR._userAgent || (RAONKEDITOR._userAgent = {});
  RAONKEDITOR.UserAgent || (RAONKEDITOR.UserAgent =
      function () {
        var a = window && window.navigator && window.navigator.userAgent
                ? window.navigator.userAgent : "", d = {
              extend: function (a, c) {
                for (var b in c) {
                  -1 !== "browser cpu device engine os".indexOf(b)
                  && 0 === c[b].length % 2 && (a[b] = c[b].concat(a[b]));
                }
                return a
              }, has: function (a, c) {
                return "string" === typeof a ? -1 !== c.toLowerCase().indexOf(
                    a.toLowerCase()) : !1
              }, lowerize: function (a) {
                return a.toLowerCase()
              }, major: function (a) {
                return "string" === typeof a ? a.split(".")[0] : void 0
              }
            }, c = function () {
              for (var c, b = 0, e, d, f, m, q, r, t = arguments; b <
              t.length && !q;) {
                var v = t[b], g = t[b + 1];
                if ("undefined" === typeof c) {
                  for (f in
                      c = {}, g) {
                    m = g[f], "object" === typeof m ? c[m[0]] = void 0
                        : c[m] = void 0;
                  }
                }
                for (e = d = 0; e < v.length && !q;) {
                  if (q = v[e++].exec(
                      a)) {
                    for (f = 0; f < g.length;
                        f++) {
                      r = q[++d], m = g[f], "object" === typeof m && 0 < m.length
                          ? 2 == m.length ? c[m[0]] = "function" == typeof m[1]
                              ? m[1].call(this, r) : m[1] : 3 == m.length
                              ? c[m[0]] = "function" !== typeof m[1] || m[1].exec
                              && m[1].test ? r ? r.replace(m[1], m[2]) : void 0 : r
                                  ? m[1].call(this, r, m[2]) : void 0 : 4
                              == m.length
                              && (c[m[0]] = r ? m[3].call(this,
                                      r.replace(m[1], m[2])) :
                                  void 0) : c[m] = r ? r : void 0;
                    }
                  }
                }
                b += 2
              }
              return c
            }, b = function (a, c) {
              for (var b in c) {
                if ("object" === typeof c[b] && 0
                    < c[b].length) {
                  for (var e = 0; e < c[b].length; e++) {
                    if (d.has(c[b][e], a)) {
                      return "?" === b ? void 0 : b
                    }
                  }
                } else if (d.has(c[b], a)) {
                  return "?" === b ? void 0 : b;
                }
              }
              return a
            }, e = {
              ME: "4.90",
              "NT 3.11": "NT3.51",
              "NT 4.0": "NT4.0",
              2E3: "NT 5.0",
              XP: ["NT 5.1", "NT 5.2"],
              Vista: "NT 6.0",
              7: "NT 6.1",
              8: "NT 6.2",
              "8.1": "NT 6.3",
              10: ["NT 6.4", "NT 10.0"],
              RT: "ARM"
            }, f = [[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],
              ["model", "vendor", ["type", "tablet"]],
              [/applecoremedia\/[\w\.]+ \((ipad)/],
              ["model", ["vendor", "Apple"], ["type", "tablet"]],
              [/(apple\s{0,1}tv)/i], [["model", "Apple TV"], ["vendor", "Apple"]],
              [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i,
                /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i,
                /(dell)\s(strea[kpr\s\d]*[\dko])/i],
              ["vendor", "model", ["type", "tablet"]],
              [/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],
              ["model", ["vendor", "Amazon"], ["type", "tablet"]],
              [/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],
              [["model", b, {"Fire Phone": ["SD", "KF"]}], ["vendor", "Amazon"],
                ["type", "mobile"]],
              [/\((ip[honed|\s\w*]+);.+(apple)/i],
              ["model", "vendor", ["type", "mobile"]], [/\((ip[honed|\s\w*]+);/i],
              ["model", ["vendor", "Apple"], ["type", "mobile"]],
              [/(blackberry)[\s-]?(\w+)/i,
                /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,
                /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i],
              ["vendor", "model", ["type", "mobile"]], [/\(bb10;\s(\w+)/i],
              ["model", ["vendor", "BlackBerry"], ["type", "mobile"]],
              [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7)/i],
              ["model",
                ["vendor", "Asus"], ["type", "tablet"]],
              [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i],
              [["vendor", "Sony"], ["model", "Xperia Tablet"], ["type", "tablet"]],
              [/(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i],
              [["vendor", "Sony"], ["model", "Xperia Phone"], ["type", "mobile"]],
              [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
              ["vendor", "model", ["type", "console"]],
              [/android.+;\s(shield)\sbuild/i],
              ["model", ["vendor", "Nvidia"], ["type", "console"]],
              [/(playstation\s[3portablevi]+)/i], ["model", ["vendor",
                "Sony"], ["type", "console"]], [/(sprint\s(\w+))/i],
              [["vendor", b, {HTC: "APA", Sprint: "Sprint"}],
                ["model", b, {"Evo Shift 4G": "7373KT"}], ["type", "mobile"]],
              [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],
              ["vendor", "model", ["type", "tablet"]],
              [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w+)*/i,
                /(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],
              ["vendor", ["model", /_/g, " "], ["type", "mobile"]], [/(nexus\s9)/i],
              ["model", ["vendor", "HTC"], ["type", "tablet"]],
              [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
              ["model", ["vendor", "Microsoft"], ["type", "console"]],
              [/(kin\.[onetw]{3})/i],
              [["model", /\./g, " "], ["vendor", "Microsoft"], ["type", "mobile"]],
              [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i,
                /mot[\s-]?(\w+)*/i, /(XT\d{3,4}) build\//i],
              ["model", ["vendor", "Motorola"], ["type", "mobile"]],
              [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
              ["model", ["vendor", "Motorola"], ["type", "tablet"]],
              [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9|nexus 10))/i,
                /((SM-T\w+))/i],
              [["vendor", "Samsung"], "model", ["type", "tablet"]],
              [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-n900))/i,
                /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i, /sec-((sgh\w+))/i],
              [["vendor", "Samsung"], "model", ["type", "mobile"]],
              [/(samsung);smarttv/i], ["vendor", "model", ["type", "smarttv"]],
              [/\(dtv[\);].+(aquos)/i],
              ["model", ["vendor", "Sharp"], ["type", "smarttv"]], [/sie-(\w+)*/i],
              ["model", ["vendor", "Siemens"], ["type", "mobile"]],
              [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]+)*/i],
              [["vendor", "Nokia"], "model", ["type",
                "mobile"]], [/android\s3\.[\s\w;-]{10}(a\d{3})/i],
              ["model", ["vendor", "Acer"], ["type", "tablet"]],
              [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
              [["vendor", "LG"], "model", ["type", "tablet"]],
              [/(lg) netcast\.tv/i], ["vendor", "model", ["type", "smarttv"]],
              [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w+)*/i],
              ["model", ["vendor", "LG"], ["type", "mobile"]],
              [/android.+(ideatab[a-z0-9\-\s]+)/i],
              ["model", ["vendor", "Lenovo"], ["type", "tablet"]],
              [/linux;.+((jolla));/i], ["vendor", "model", ["type", "mobile"]],
              [/((pebble))app\/[\d\.]+\s/i],
              ["vendor", "model", ["type", "wearable"]],
              [/android.+;\s(glass)\s\d/i],
              ["model", ["vendor", "Google"], ["type", "wearable"]],
              [/android.+(\w+)\s+build\/hm\1/i,
                /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,
                /android.+(mi[\s\-_]*(?:one|one[\s_]plus)?[\s_]*(?:\d\w)?)\s+build/i],
              [["model", /_/g, " "], ["vendor", "Xiaomi"], ["type", "mobile"]],
              [/(mobile|tablet);.+rv\:.+gecko\//i],
              [["type", d.lowerize], "vendor", "model"]],
            e = [[/microsoft\s(windows)\s(vista|xp)/i], ["name", "version"],
              [/(windows)\snt\s6\.2;\s(arm)/i,
                /(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],
              ["name", ["version", b, e]],
              [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
              [["name", "Windows"], ["version", b, e]], [/\((bb)(10);/i],
              [["name", "BlackBerry"], "version"],
              [/(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)[\/\s]([\w\.]+)/i,
                /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,
                /linux;.+(sailfish);/i], ["name", "version"],
              [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],
              [["name", "Symbian"], "version"],
              [/\((series40);/i], ["name"],
              [/mozilla.+\(mobile;.+gecko.+firefox/i],
              [["name", "Firefox OS"], "version"],
              [/(nintendo|playstation)\s([wids3portablevu]+)/i,
                /(mint)[\/\s\(]?(\w+)*/i, /(mageia|vectorlinux)[;\s]/i,
                /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i,
                /(hurd|linux)\s?([\w\.]+)*/i, /(gnu)\s?([\w\.]+)*/i],
              ["name", "version"], [/(cros)\s[\w]+\s([\w\.]+\w)/i],
              [["name", "Chromium OS"], "version"], [/(sunos)\s?([\w\.]+\d)*/i],
              [["name", "Solaris"], "version"],
              [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],
              ["name", "version"],
              [/(ip[honead]+)(?:.*os\s*([\w]+)*\slike\smac|;\sopera)/i],
              [["name", "iOS"], ["version", /_/g, "."]],
              [/(mac\sos\sx)\s?([\w\s\.]+\w)*/i,
                /(macintosh|mac(?=_powerpc)\s)/i],
              [["name", "Mac OS"], ["version", /_/g, "."]],
              [/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i, /(haiku)\s(\w+)/i,
                /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,
                /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,
                /(unix)\s?([\w\.]+)*/i], ["name", "version"]],
            b = c.apply(this, [[/(opera\smini)\/([\w\.-]+)/i,
              /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,
              /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i],
              ["name", "version"], [/\s(opr)\/([\w\.]+)/i],
              [["name", "Opera"], "version"], [/(kindle)\/([\w\.]+)/i,
                /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,
                /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,
                /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]+)*/i,
                /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi)\/([\w\.-]+)/i],
              ["name", "version"],
              [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
              [["name", "IE"], "version"], [/(edge)\/((\d+)?[\w\.]+)/i],
              ["name", "version"], [/(yabrowser)\/([\w\.]+)/i],
              [["name", "Yandex"], "version"], [/(comodo_dragon)\/([\w\.]+)/i],
              [["name", /_/g, " "], "version"],
              [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i,
                /(uc\s?browser|qqbrowser)[\/\s]?([\w\.]+)/i],
              ["name", "version"], [/(dolfin)\/([\w\.]+)/i],
              [["name", "Dolphin"], "version"],
              [/((?:android.+)crmo|crios)\/([\w\.]+)/i], [["name", "Chrome"],
                "version"], [/XiaoMi\/MiuiBrowser\/([\w\.]+)/i],
              ["version", ["name", "MIUI Browser"]],
              [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)/i],
              ["version", ["name", "Android Browser"]], [/FBAV\/([\w\.]+);/i],
              ["version", ["name", "Facebook"]],
              [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
              ["version", ["name", "Mobile Safari"]],
              [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
              ["version", "name"],
              [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
              ["name", ["version", b, {
                "1.0": "/8", "1.2": "/1", "1.3": "/3", "2.0": "/412",
                "2.0.2": "/416", "2.0.3": "/417", "2.0.4": "/419", "?": "/"
              }]], [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i],
              ["name", "version"], [/(navigator|netscape)\/([\w\.-]+)/i],
              [["name", "Netscape"], "version"], [/(swiftfox)/i,
                /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
                /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i,
                /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,
                /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf)[\/\s]?([\w\.]+)/i,
                /(links)\s\(([\w\.]+)/i,
                /(gobrowser)\/?([\w\.]+)*/i, /(ice\s?browser)\/v?([\w\._]+)/i,
                /(mosaic)[\/\s]([\w\.]+)/i], ["name", "version"]]);
        b.major = d.major(b.version);
        e = c.apply(this, e);
        if (c = c.apply(this, f)) {
          void 0 == c.model && (c.model = ""), void 0
          == c.type && (c.type = ""), void 0 == c.vendor && (c.vendor = "");
        }
        "windows" === e.name.toLowerCase() && (10 <= parseInt(e.name.version)
        && (e.name.version = "10 or later"), window.Promise && "object"
        === typeof navigator.userAgentData && "function"
        === typeof navigator.userAgentData.getHighEntropyValues
        && navigator.userAgentData.getHighEntropyValues(
            ["platformVersion"]).then(function (a) {
          "Windows" ===
          navigator.userAgentData.platform && (a = parseInt(
              a.platformVersion.split(".")[0]), 13 <= a
              ? RAONKEDITOR._userAgent.os.version = "11 or later" : 0 < a
              && (RAONKEDITOR._userAgent.os.version = "10"))
        }));
        RAONKEDITOR._userAgent = {browser: b, os: e, device: c};
        return RAONKEDITOR._userAgent
      }());
  RAONKEDITOR.ajax || (RAONKEDITOR.ajax = function () {
    var a = function () {
      try {
        var a = new XMLHttpRequest;
        RAONKEDITOR.ajax.xhrWithCredentials && "withCredentials" in a
        && (a.withCredentials = !0);
        return a
      } catch (c) {
        RAONKEDITOR && RAONKEDITOR.logMode && console &&
        console.log(c)
      }
      try {
        return new ActiveXObject("Msxml2.XHLHTTP")
      } catch (b) {
        RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(b)
      }
      try {
        return new ActiveXObject("Microsoft.XMLHTTP")
      } catch (e) {
        RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(e)
      }
      return null
    }, d = function () {
    }, c = function (a) {
      return 4 == a.readyState && (200 <= a.status && 300 > a.status || 304
          == a.status || 0 === a.status || 1223 == a.status)
    }, b = function (a) {
      var b = null;
      c(a) && (b = a.responseText);
      a && a.onreadystatechange && (a.onreadystatechange = d);
      return b
    }, e = function (a) {
      var b =
          null;
      c(a) && (b = a.responseXML, b || (b = a.responseText));
      a && a.onreadystatechange && (a.onreadystatechange = d);
      return b
    }, f = function (c, b, e) {
      var d = !!b, f = a();
      if (!f) {
        return null;
      }
      f.open("GET", c, d);
      d && (f.onreadystatechange = function () {
        4 == f.readyState && b(e(f))
      });
      try {
        f.send(null)
      } catch (k) {
        return null
      }
      if (!d) {
        var r = setTimeout(function () {
          try {
            f.abort()
          } catch (a) {
            RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(a)
          }
          clearTimeout(r)
        }, 5E3);
        "undefined" == typeof RAONKEDITOR.RAONKMULTIPLETIMEOUT
        && (RAONKEDITOR.RAONKMULTIPLETIMEOUT =
            []);
        RAONKEDITOR.RAONKMULTIPLETIMEOUT.push(r)
      }
      return d ? "" : e(f)
    }, k = function (c, b, e, d) {
      var f = !!e, k = a();
      if (!k) {
        return null;
      }
      k.open("POST", c, f);
      k.setRequestHeader("Content-Type",
          "application/x-www-form-urlencoded;charset=UTF-8");
      f && (k.onreadystatechange = function () {
        4 == k.readyState && e(d(k, b))
      });
      try {
        k.send(b)
      } catch (r) {
        return null
      }
      if (!f) {
        var t = setTimeout(function () {
          try {
            k.abort()
          } catch (a) {
            RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(a)
          }
          clearTimeout(t)
        }, 5E3);
        "undefined" == typeof RAONKEDITOR.RAONKMULTIPLETIMEOUT &&
        (RAONKEDITOR.RAONKMULTIPLETIMEOUT = []);
        RAONKEDITOR.RAONKMULTIPLETIMEOUT.push(t)
      }
      return f ? "" : d(k)
    };
    return {
      load: function (a, c) {
        return f(a, c, b)
      }, loadXml: function (a, c) {
        return f(a, c, e)
      }, postData: function (a, c, e) {
        return k(a, c, e, b)
      }, postMultiPart: function (c, b) {
        var e;
        a:if (e = a()) {
          try {
            e.open("POST", c, !1), e.send(b)
          } catch (d) {
            e = null;
            break a
          }
          e = e.responseText
        } else {
          e = null;
        }
        return e
      }, postDataCallback: function (a, c, e) {
        return k(a, c, e, b)
      }, postFileData: function (c, b) {
        var e;
        a:if (e = a()) {
          try {
            e.open("POST", c, !1);
            var d = "--------------------" +
                (new Date).getTime();
            e.setRequestHeader("Content-Type",
                "multipart/form-data; boundary=" + d);
            for (var d = "--" + d, f = "", k = b.split("&"), r = k.length,
                t = null, v = "", g = "", z = 0; z < r; z++) {
              t = k[z].split(
                  "="), "imagedata" == t[0] ? v = t[1] : (f += d
                  + "\r\n", f += 'Content-Disposition: form-data; name="' + t[0]
                  + '"\r\n\r\n', f += t[1] + "\r\n");
            }
            for (var k = null, r = "", A = window.atob(v), w = A.length,
                k = new Uint8Array(new ArrayBuffer(w)), z = 0; z < w;
                z++) {
              k[z] = A.charCodeAt(z), r += String.fromCharCode(k[z]);
            }
            String.fromCharCode.apply([], new Uint8Array(k));
            new Uint8Array(k);
            g = r;
            f += d + "\r\n";
            f += 'Content-Disposition: form-data; name="Filedata"; filename="'
                + (new Date).getTime() + '"\r\n';
            f += "Content-Type: image/png\r\n";
            f += "\r\n";
            f += g + "\r\n";
            e.send(f + (d + "--\r\n"))
          } catch (u) {
            e = null;
            break a
          }
          e = e.responseText
        } else {
          e = null;
        }
        return e
      }
    }
  }());
  RAONKEDITOR.util || (RAONKEDITOR.util = {
    G_IMG_LIST: {}, writeLog: function (a, d, c, b) {
      try {
        if ("undefined" != typeof RAONKSolutionLog && "undefined"
            != typeof RAONKEditorLogMode && RAONKEditorLogMode) {
          var e = "";
          if ("string" == typeof b) {
            var f = b.split("#");
            2 == f.length &&
            ("" == RAONKEDITOR.logGroupingName && "s" == f[1].toLowerCase()
                ? (RAONKEDITOR.logGroupingName = f[0].toLowerCase(), e = "#separator#")
                : "" != RAONKEDITOR.logGroupingName
                && RAONKEDITOR.logGroupingName == f[0].toLowerCase() && "e"
                == f[1].toLowerCase() && (RAONKEDITOR.logGroupingName = ""))
          }
          RAONKSolution.writeLog(e + "[RAON K EDITOR Editor]", a, d, c)
        }
      } catch (k) {
        RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(k)
      }
    }, G_AP11: 6, G_AP13: 7, trim: function (a) {
      if ("" == a) {
        return a;
      }
      var d = a;
      return d = a.trim ? a.trim() : a.replace(
          /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
          "")
    }, rtrim: function (a) {
      return "" == a ? a : a.replace(/[\s\uFEFF\xA0]+$/, "")
    }, ltrim: function (a) {
      return "" == a ? a : a.replace(/^[\s\uFEFF\xA0]+/, "")
    }, setClass: function (a, d) {
      a.className = d
    }, getClass: function (a) {
      return a.className
    }, addClass: function (a, d) {
      try {
        if (a.classList) {
          a.classList.contains(d) || a.classList.add(d);
        } else {
          var c = a.className.split(" ");
          0 > ("," + c.join(",") + ",").indexOf("," + d + ",") && (c.push(
              d), a.className = c.join(" "))
        }
      } catch (b) {
        RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(b)
      }
    }, removeClass: function (a,
        d) {
      try {
        if (a.classList) {
          a.classList.contains(d) && a.classList.remove(
              d);
        } else {
          var c = a.className.split(" ");
          if (-1 < ("," + c.join(",") + ",").indexOf("," + d + ",")) {
            for (var b = c.length - 1; 0 <= b; b--) {
              c[b] == d && c.splice(b, 1);
            }
            a.className = c.join(" ")
          }
        }
      } catch (e) {
        RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(e)
      }
    }, checkUrl: function (a) {
      var d = !1;
      a = a.replace(/ /gm, "");
      return d = (new RegExp(
          /(http|ftp|https|news):\/\/[\S-]+(\.[\S-]+)+([\S.,@?^=%&amp;:\/~+#-]*[\S@?^=%&amp;\/~+#-])?/)).test(
          a)
    }, getDefaultIframeSrc: function () {
      var a =
          "", a = "document.open();" + (RAONKEDITOR.browser.isCustomDomain()
              ? 'document.domain="' + document.domain + '";' : "")
          + " document.close();";
      return a = RAONKEDITOR.browser.ie && 12 > RAONKEDITOR.browser.ieVersion
          ? "javascript:void(function(){" + encodeURIComponent(a) + "}())" : ""
    }, makeIframe: function () {
      var a;
      try {
        a = document.createElement('<iframe frameborder="0" >')
      } catch (d) {
        a = document.createElement("iframe")
      }
      a.style.margin = "0px";
      a.style.padding = "0px";
      a.frameBorder = 0;
      a.style.overflow = "auto";
      a.style.overflowX = "hidden";
      a.style.backgroundColor =
          "#ffffff";
      a.title = "K Editor";
      return a
    }, addEvent: function (a, d, c, b) {
      try {
        a.addEventListener ? a.addEventListener(d, c, b) : a.attachEvent
            && a.attachEvent("on" + d, c), "" != RAONKEDITOR.CEditorID
            ? (RAONKEDITOR.RAONKMULTIPLEEVENT = {}, RAONKEDITOR.RAONKMULTIPLEEVENT[RAONKEDITOR.CEditorID] = [], RAONKEDITOR.RAONKMULTIPLEEVENT[RAONKEDITOR.CEditorID].push(
                {element: a, event: d, func: c}), RAONKEDITOR.CEditorID = "")
            : KEDITORTOP.G_CURRKEDITOR
            && RAONKEDITOR.RAONKMULTIPLEEVENT[KEDITORTOP.G_CURRKEDITOR.ID]
            && RAONKEDITOR.RAONKMULTIPLEEVENT[KEDITORTOP.G_CURRKEDITOR.ID].push(
                {
                  element: a,
                  event: d, func: c
                })
      } catch (e) {
        RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(e)
      }
    }, addEventEx: function (a, d, c, b) {
      a.addEventListener ? a.addEventListener(d, c, b) : a.attachEvent
          && (a.detachEvent("on" + d, c), a.attachEvent("on" + d, c));
      try {
        "" != RAONKEDITOR.CEditorID
            ? (RAONKEDITOR.RAONKMULTIPLEEVENT = {}, RAONKEDITOR.RAONKMULTIPLEEVENT[RAONKEDITOR.CEditorID] = [], RAONKEDITOR.RAONKMULTIPLEEVENT[RAONKEDITOR.CEditorID].push(
                {element: a, event: d, func: c}), RAONKEDITOR.CEditorID = "")
            : KEDITORTOP.G_CURRKEDITOR
            && RAONKEDITOR.RAONKMULTIPLEEVENT[KEDITORTOP.G_CURRKEDITOR.ID] &&
            RAONKEDITOR.RAONKMULTIPLEEVENT[KEDITORTOP.G_CURRKEDITOR.ID].push(
                {element: a, event: d, func: c})
      } catch (e) {
        RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(e)
      }
    }, removeEvent: function (a, d, c, b) {
      a.removeEventListener ? a.removeEventListener(d, c, b) : a.detachEvent
          && a.detachEvent("on" + d, c)
    }, stopEvent: function (a) {
      "bubbles" in a ? a.bubbles && a.stopPropagation() : a.cancelBubble = !0
    }, cancelEvent: function (a) {
      a.preventDefault ? a.preventDefault() : a.returnValue = !1
    }, ajax: {
      xml_http_request: function () {
        var a;
        window.XMLHttpRequest ?
            a = new XMLHttpRequest : window.ActiveXObject
            && (a = new ActiveXObject("Microsoft.XMLHTTP"));
        return a
      }
    }, url: {
      full_url: function (a) {
        var d = "";
        if (0 == a.indexOf("http://") || 0 == a.indexOf(
            "https://")) {
          d = a;
        } else if (0 == a.indexOf(
            "/")) {
          d = location.protocol + "//" + location.host
              + a;
        } else {
          var d = location.href, c = d.lastIndexOf("/"),
              d = d.substring(0, c + 1), d = d + a;
        }
        return d
      }
    }, xml: {
      count: function (a, d) {
        return a ? a.getElementsByTagName(d).length : 0
      }, getNode: function (a, d) {
        return null == a || void 0 == a ? null : this.getNodeIdx(a, d, 0)
      }, getNodeIdx: function (a,
          d, c) {
        return a.getElementsByTagName(d)[c]
      }, getNodeValue: function (a, d) {
        return null == a || void 0 == a ? "" : this.getNodeValueIdx(a, d, 0)
      }, getNodeValueIdx: function (a, d, c) {
        a = this.getNodeIdx(a, d, c);
        return this.getValue(a)
      }, getValue: function (a) {
        var d = "", c = "";
        if (void 0 != a) {
          try {
            0 < a.childNodes.length && (c = d = a.firstChild.nodeValue);
            try {
              ("product_key" == a.nodeName || "license_key" == a.nodeName
                  || "font" == a.nodeName || "encoding" == a.nodeName
                  || "doctype"
                  == a.nodeName) && 2 <= a.childNodes.length
              && (d = a.textContent
                  ? a.textContent : c)
            } catch (b) {
              d =
                  c
            }
          } catch (e) {
            d = "parsing error"
          }
        }
        return d
      }, getAllNodes: function (a) {
        var d = {}, c = function (a, e) {
          for (var d = a.childNodes, k = !1, h = 0; h < d.length; h++) {
            var l = d[h];
            if (3 != l.nodeType && 8 != l.nodeType && 4 != l.nodeType) {
              var k = !0, n = {};
              if (0 < l.attributes.length) {
                n._attributes = {};
                for (var p = 0; p < l.attributes.length; p++) {
                  var m = l.attributes[p];
                  n._attributes[m.nodeName] = m.nodeValue
                }
              }
              "undefined" == typeof e[l.nodeName] ? e[l.nodeName] = n : 0
              < e[l.nodeName].length ? e[l.nodeName].push(n)
                  : e[l.nodeName] = [e[l.nodeName], n];
              0 < l.childNodes.length &&
              c(l, n)
            }
          }
          k || (value = a.textContent || a.nodeTypedValue || "", 4
          != a.firstChild.nodeType && (value = value.replace(/^[\s]+|[\s]+&/g,
              "")), value && "" != value && (e._value = value))
        };
        for (a = a.firstChild; ;) {
          if ("raonkeditor"
              != a.nodeName.toLowerCase()) {
            a = a.nextSibling;
          } else {
            break;
          }
        }
        c(a, d);
        return d
      }
    }, htmlToLowerCase: function (a) {
      if ("1" != KEDITORTOP.G_CURRKEDITOR._config.useGetHtmlToLowerCase || 8
          < KEDITORTOP.RAONKEDITOR.browser.ieVersion && 0
          == KEDITORTOP.RAONKEDITOR.browser.quirks || 11
          <= KEDITORTOP.RAONKEDITOR.browser.ieVersion && 1
          == KEDITORTOP.RAONKEDITOR.browser.quirks) {
        return a;
      }
      var d = RegExp("<[^>]+>", "g");
      results = a.match(d);
      if (null == results) {
        return a;
      }
      var c = d = -1, b = 0, e = results.length;
      for (i = 0; i < e; i++) {
        original = results[i];
        d = original.indexOf("'");
        c = original.indexOf('"');
        b = 2;
        1 < d * c && (-1 < original.indexOf('="')
            ? (results[i] = results[i].replace(/\'/g, "raonk_1q"), b = 2) : -1
            < original.indexOf("='") && (results[i] = results[i].replace(/\"/g,
                "raonk_2q"), b = 1));
        stripquoted = 1 == b ? results[i].replace(/ [^=]+= *\'[^\']*\'/g, "")
            : results[i].replace(/ [^=]+= *"[^"]*"/g, "");
        d = RegExp(" [^=]+=[^ >]+", "g");
        if (unquoted =
            stripquoted.match(d)) {
          for (d = unquoted.length, j = 0; j < d; j++) {
            if ("1" == KEDITORTOP.G_CURRKEDITOR._config.xss_use && "0"
                == KEDITORTOP.G_CURRKEDITOR._config.xss_allow_events_attribute
                && (c = KEDITORTOP.G_CURRKEDITOR._config.xss_remove_events, ""
                != c)) {
              var c = "," + c + ",", f = unquoted[j].split("=")[0];
              if (-1 < c.indexOf("," + RAONKEDITOR.util.trim(f) + ",")) {
                return a
              }
            }
            addquotes = 1 == b ? unquoted[j].replace(/( [^=]+=)([^ >]+)/g,
                "$1'$2'") : unquoted[j].replace(/( [^=]+=)([^ >]+)/g, '$1"$2"');
            results[i] = results[i].replace(unquoted[j], addquotes)
          }
        }
        results[i] =
            results[i].replace(/<\/?[^>|^ ]+/, function (a) {
              return a.toLowerCase()
            });
        results[i] = 1 == b ? results[i].replace(/ [^=|^ ]+=\'/g, function (a) {
          return a.toLowerCase()
        }) : results[i].replace(/ [^=|^ ]+="/g, function (a) {
          return a.toLowerCase()
        });
        results[i] = results[i].replace(/raonk_1q/g, "'");
        results[i] = results[i].replace(/raonk_2q/g, '"');
        a = a.replace(original, results[i])
      }
      return a
    }, hexDigits: "0123456789abcdef".split(""), hex: function (a) {
      return isNaN(a) ? "00" : this.hexDigits[(a - a % 16) / 16]
          + this.hexDigits[a % 16]
    }, rgb2hex: function (a) {
      a =
          a.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
      if (!(null == a || 4 > a.length)) {
        return "#" + this.hex(a[1]) + this.hex(
            a[2]) + this.hex(a[3])
      }
    }, rgbToHex: function () {
      var a, d, c;
      1 == arguments.length ? (a = arguments[0].toLowerCase(), a = a.replace(
          "rgb(", ""), a = a.replace("rgba(", ""), a = a.replace(")",
          ""), c = a.split(","), a = parseInt(c[0], 10), d = parseInt(c[1],
          10), c = parseInt(c[2], 10)) : 3 <= arguments.length
          && (a = arguments[0], d = arguments[1], c = arguments[2]);
      return "#" + (16777216 + (a << 16) + (d << 8) + c).toString(16).slice(1)
    }, raonkSetAttribute: function (a,
        d, c, b) {
      "string" == typeof c ? 0 < c.length && (a.style[d] = c + b) : "number"
          == typeof c && (a.style[d] = c)
    }, getRealBackgoundImagePath: function (a) {
      return a = a.replace(/url\(\s*(["']?)\s*([^\)]*)\s*\1\s*\)/i,
          function (a, c, b) {
            "1" == KEDITORTOP.G_CURRKEDITOR._config.useKManager
            && (b = decodeURIComponent(
                b), b = KEDITORTOP.G_CURRKEDITOR._FRAMEWIN.convertImageAgentSrc(
                b, !1), b = decodeURIComponent(b));
            return b
          })
    }, replaceForXSS: function (a, d, c, b, e) {
      var f = !1, k = !1;
      try {
        if (a) {
          a = KEDITORTOP.G_CURRKEDITOR._FRAMEWIN.setImgAltLineBreak(a, !0);
          var h = RegExp("&#x3c;", "gi");
          1 == h.test(a) && (f = !0, a = a.replace(h, "&amp;lt;"));
          h = RegExp("&#x3e;", "gi");
          1 == h.test(a) && (f = !0, a = a.replace(h, "&amp;gt;"));
          h = RegExp("&#9;", "gi");
          1 == h.test(a) && (f = !0, a = a.replace(h, ""));
          h = RegExp("&#13;", "gi");
          1 == h.test(a) && (f = !0, a = a.replace(h, ""));
          a = KEDITORTOP.G_CURRKEDITOR._FRAMEWIN.setImgAltLineBreak(a);
          if ("string" == typeof d && "" != d) {
            for (var l = d.split(","),
                n = l.length, p = 0; p < n; p++) {
              var m = l[p], q = new RegExp("<" + m + ">", "gi");
              q.test(a) && (a = a.replace(q,
                  "!@#ke_temp_script#@!"), q = RegExp(
                  "(<[a-zA-Z][a-zA-Z0-9]*[^>]*)!@#ke_temp_script#@!([^>]*)",
                  "g"), a = a.replace(q, "$1$2"), q = RegExp(
                  "!@#ke_temp_script#@!", "gi"), a = a.replace(q,
                  "<" + m + ">"))
            }
          }
          try {
            var h = !1, r = null, t = RAONKEDITOR.util.splitBodyInnerString(a);
            if ("function" === typeof DOMParser) {
              var v = new DOMParser, g = v.parseFromString("", "text/html");
              g && 9 == g.nodeType && (r = g.createElement("div"))
            } else {
              r = document.createElement("div");
            }
            if (r) {
              r.innerHTML = t.body;
              for (var m = ["embed", "iframe", "object"], z = m.length, p = 0;
                  p < z; p++) {
                for (var A = r.getElementsByTagName(m[p]),
                    w = A.length, q = w - 1; 0 <= q; q--) {
                  var u = A[q], G = u.getAttribute("src"),
                      D = !1;
                  "string" == typeof G
                  && (D = KEDITORTOP.G_CURRKEDITOR._FRAMEWIN.checkXssContentType(
                      G));
                  if (0 == D) {
                    var y = u.getAttribute("data");
                    "string" == typeof y
                    && (D = KEDITORTOP.G_CURRKEDITOR._FRAMEWIN.checkXssContentType(
                        y))
                  }
                  D && (u.parentNode.removeChild(u), h = !0)
                }
              }
              A = r.getElementsByTagName("meta");
              w = A.length;
              for (p = w - 1; 0 <= p; p--) {
                var u = A[p], B = u.getAttribute("http-equiv");
                "string" == typeof B && "refresh" == B.toLowerCase()
                && (u.parentNode.removeChild(u), h = !0)
              }
              h && (a = t.head + r.innerHTML + t.tail)
            }
            r = void 0;
            g && (g = void 0);
            v && (v = void 0)
          } catch (J) {
            RAONKEDITOR &&
            RAONKEDITOR.logMode && console && console.log(J)
          }
        }
        if ("" != c) {
          for (var x = c.split(","), Q = x.length, p = 0; p < Q;
              p++) {
            var E = x[p],
                H = new RegExp("<" + E + "[^>]*>[\\s\\S]*?</" + E + ">", "gim");
            1 == H.test(a) && (f = !0, a = a.replace(H, ""));
            var K = new RegExp("<" + E + "[^>]*>", "gi");
            1 == K.test(a) && (f = !0, a = a.replace(K, ""))
          }
        }
        if ("" != b) {
          "function" === typeof DOMParser
          && (v = new DOMParser, (g = v.parseFromString("", "text/html")) && 9
          == g.nodeType && (r = g.createElement(
              "div"), t = RAONKEDITOR.util.splitBodyInnerString(
              a), r.innerHTML = t.body, a = t.head + r.innerHTML +
              t.tail));
          for (var R = b.split(","), V = R.length, p = 0; p < V; p++) {
            var O = R[p],
                L = new RegExp("(?:" + O + ')\\s*=\\s*"[^"]*"\\s*', "gi"),
                M = new RegExp("(?:" + O + ")\\s*=\\s*'[^']*'\\s*", "gi"),
                K = new RegExp("(?:" + O + ")\\s*?=.*?(\\(.*?\\));?(\"|'| |)",
                    "gi");
            if (L.test(a) || M.test(a) || K.test(a)) {
              f = !0, a = a.replace(L,
                  ""), a = a.replace(M, ""), a = a.replace(K, "")
            }
          }
        }
        if ("" != d) {
          for (l = d.split(","), n = l.length, p = 0; p < n; p++) {
            var F = new RegExp("<\\/" + l[p] + ">", "gi"),
                I = a.match(new RegExp("<" + l[p] + "[^>]*>", "gi"));
            if (I) {
              var f = !0, C = I.length;
              d = "";
              c = !1;
              for (b =
                  0; b < C; b++) {
                if ("script" == l[p]) {
                  var N = I[b].match(
                      RegExp("src\\s*=\\s*(?:'|\")([^(\"|')]*)(?:'|\")", "gi"));
                  if (null != N) {
                    try {
                      for (var S = N[0].substring(5, N[0].length - 1),
                          P = KEDITORTOP.G_CURRKEDITOR._config.xss_allow_url,
                          r = 0;
                          r < P.length; r++) {
                        if (S == P[r]) {
                          c = !0;
                          break
                        }
                      }
                    } catch (W) {
                      k = !0
                    }
                  }
                }
                0 == c && (d = I[b].toLowerCase(), d = d.replace("<",
                    "&lt;"), d = d.replace(">", "&gt;"), a = a.replace(I[b], d))
              }
              0 == c && (a = a.replace(F, "&lt;/" + l[p] + "&gt;"))
            }
          }
        }
        null != e && void 0 != e && e && (f = !0, L = RegExp(
            "(<[^>]*url)(\\(['\"]?(javascript|jav ascript|vbscript)([^'\")]*)['\"]?[\\)]?[;]?\\))",
            "gi"), a = a.replace(L, "$1)"), e = "", 0
        < KEDITORTOP.G_CURRKEDITOR._config.xss_check_attribute.length
        && (e = KEDITORTOP.G_CURRKEDITOR._config.xss_check_attribute.join(
            "|"), M = new RegExp(
            "(<[^>]*(" + e + ')=")(javascript|jav ascript|vbscript).*?"',
            "gi"), a = a.replace(M, '$1"')))
      } catch (T) {
        k = !0
      }
      0 == f || 1 == k ? a = "" : "" == a
          && (a = KEDITORTOP.G_CURRKEDITOR._FRAMEWIN.getDefaultParagraphValue(
              !0));
      return a
    }, removeTags: function (a, d) {
      if ("" != d) {
        for (var c = d.split(","), b = null, e = c.length, f = 0,
            k = 0; k < e; k++) {
          for (b = a.getElementsByTagName(c[k]),
              f = b.length, --f; 0 <= f; f--) {
            var h = b[f];
            h.parentNode.removeChild(h)
          }
        }
      }
    }, removeEvents: function (a, d, c) {
      if ("" != d) {
        a = d.split(",");
        d = c.length;
        for (var b = 0, e = 0; e < d; e++) {
          for (var b = a.length, f = 0; f < b;
              f++) {
            c[e].removeAttribute(a[f])
          }
        }
      }
    }, removeElement: function (a) {
      try {
        if (null != a) {
          for (; a.firstChild;) {
            a.parentNode.insertBefore(a.firstChild, a);
          }
          a.parentNode.removeChild(a)
        }
      } catch (d) {
        RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(d)
      }
    }, removeElementWithChildNodes: function (a) {
      try {
        if (null != a) {
          if ("1" == a.nodeType && "iframe" ==
              a.tagName.toLowerCase()) {
            var d = a.contentDocument || a.contentWindow.document || a.document;
            if (d) {
              if (a.contentWindow) {
                for (var c in
                    a.contentWindow) {
                  if (a.contentWindow.hasOwnProperty(c)) {
                    try {
                      "location" != c
                      && (a.contentWindow[c] = null), delete a.contentWindow[c]
                    } catch (b) {
                      RAONKEDITOR && RAONKEDITOR.logMode && console
                      && console.log(
                          b)
                    }
                  }
                }
              }
              for (var e = d.getElementsByTagName("script"); 0 != e.length;) {
                e[0].parentNode.removeChild(e[0]);
                for (var f in e) {
                  delete e[f]
                }
              }
              d.body && (d.body.innerHTML = "");
              d.body.parentNode && (d.body.parentNode.innerHTML =
                  "")
            }
            a.setAttribute("src", "")
          }
          for (; a.hasChildNodes();) {
            try {
              a.removeChild(
                  a.firstChild), a.firstChild = null, delete a.firstChild
            } catch (k) {
              RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(k)
            }
          }
          a.parentNode.removeChild(a);
          try {
            delete null
          } catch (h) {
            RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(h)
          }
        }
      } catch (l) {
        RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(l)
      }
    }, officeCleanByDom: function (a, d) {
      if ("" == a || void 0 == a) {
        return "";
      }
      a = KEDITORTOP.G_CURRKEDITOR._FRAMEWIN.adjustMsoBorder(a);
      var c = !1;
      /([:| ])([-]{0,1}[0-9]+|[-]{0,1}[0-9]*[.]{1}[0-9]+)pt/gi.test(a) &&
      (c = !0);
      /([:| ])([:| ][-]{0,1}[0-9]+|[-]{0,1}[0-9]*[.]{1}[0-9]+)cm/gi.test(a)
      && (c = !0);
      var b = null, e = 0;
      if (1 == c) {
        try {
          a = KEDITORTOP.G_CURRKEDITOR._FRAMEWIN.applyFakeImgSrc(a)
        } catch (f) {
          RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(f)
        }
        c = document.createElement("div");
        c.innerHTML = a;
        c.style.display = "none";
        KEDITORTOP.G_CURRKEDITOR._FRAMEWIN.document.body.appendChild(c);
        for (var k = c.getElementsByTagName("*"), h = k.length, l = 0; l < h;
            l++) {
          var n = k[l], p = n.tagName;
          if (n.style.width) {
            var m = n.style.width.toLowerCase();
            -1 < m.indexOf("pt") ? (m = 4 * parseFloat(m) / 3, 0 < m && 1 > m
            && (m = 1), 0 > m && (m = 0), m = Math.round(m)
                + "px", n.style.width = m) : -1 < m.indexOf("cm")
                && (_cm = 37.795275593333 * parseFloat(m), 0 < _cm && 1 > _cm
                && (_cm = 1), 0 > _cm && (_cm = 0), m = Math.round(_cm)
                    + "px", n.style.width = m)
          }
          n.style.height && (m = n.style.height.toLowerCase(), -1 < m.indexOf(
              "pt") ? (m = 4 * parseFloat(m) / 3, 0 < m && 1 > m && (m = 1), 0
          > m && (m = 0), m = Math.round(m) + "px", n.style.height = m) : -1
              < m.indexOf("cm") && (_cm = 37.795275593333 * parseFloat(m), 0
              < _cm && 1 > _cm && (_cm = 1), 0 > _cm
              && (_cm = 0), m = Math.round(_cm) +
                  "px", n.style.height = m));
          m = "";
          n.style.borderStyle && (m = n.style.borderStyle);
          var q = {isFloor: !1};
          "HWP" == KEDITORTOP.G_CURRKEDITOR._FRAMEWIN.getPasteFormatType()
          && (q.isFloor = !0);
          "" != n.style.borderTop
          && (n.style.borderTop = RAONKEDITOR.util.replacePtOrCmToPx(
              n.style.borderTop, q));
          "" != n.style.borderRight
          && (n.style.borderRight = RAONKEDITOR.util.replacePtOrCmToPx(
              n.style.borderRight, q));
          "" != n.style.borderBottom
          && (n.style.borderBottom = RAONKEDITOR.util.replacePtOrCmToPx(
              n.style.borderBottom, q));
          "" != n.style.borderLeft &&
          (n.style.borderLeft = RAONKEDITOR.util.replacePtOrCmToPx(
              n.style.borderLeft, q));
          "" != n.style.borderWidth
          && (n.style.borderWidth = RAONKEDITOR.util.replacePtOrCmToPx(
              n.style.borderWidth, q));
          "" != m && (n.style.borderStyle = m);
          RAONKEDITOR.util.adjustBorderStyle(n);
          if ("HWP" == KEDITORTOP.G_CURRKEDITOR._FRAMEWIN.getPasteFormatType()
              && "TD" == n.tagName) {
            for (var m = ["borderTop", "borderRight",
              "borderBottom", "borderLeft"], q = m.length, r = 0; r < q; r++) {
              var t = n.style[m[r]], t = t.replace(/,\s+/g, ","),
                  t = t.split(" ");
              if (3 == t.length &&
                  "double" == t[1]) {
                var v = RAONKEDITOR.util.parseIntOr0(t[0]);
                if (2 == v || 4 == v) {
                  v = 3, t[0] = v + "px";
                }
                n.style[m[r]] = t.join(" ")
              }
            }
          }
          "PPT" == KEDITORTOP.G_CURRKEDITOR._FRAMEWIN.getPasteFormatType()
          && "COL" == p
          && (b = KEDITORTOP.G_CURRKEDITOR._FRAMEWIN.GetParentbyTagName(n,
              "table"), p = RAONKEDITOR.util.parseIntOr0(n.width), 0 == p
          && (p = RAONKEDITOR.util.parseIntOr0(n.style.width)), 0 < p
          && (n.style.width = p + 1 + "px", e++))
        }
        b && (k = RAONKEDITOR.util.parseIntOr0(b.style.width), 0 < k
        && (b.style.width = k + e + "px"));
        a = c.innerHTML;
        try {
          a = KEDITORTOP.G_CURRKEDITOR._FRAMEWIN.applyFakeImgSrc(a,
              !0)
        } catch (g) {
          RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(g)
        }
        try {
          c.innerHTML = "", c.parentNode.removeChild(c), delete null
        } catch (z) {
          RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(z)
        }
      }
      return a
    }, officeClean: function (a, d) {
      if ("" == a || void 0 == a) {
        return "";
      }
      var c = null, b = [];
      a = RAONKEDITOR.util.replaceAll(a, "hairline", "dotted");
      a = RAONKEDITOR.util.officeCleanByDom(a, d);
      a = a.replace(/\.0px/g, "px");
      a = a.replace(/\t/g, "");
      a = RAONKEDITOR.util.removeOfficeDummyTag(a, "\x3c!--[if supportFields]>",
          "<![endif]--\x3e");
      c = RegExp("<o:p></o:p>", "gi");
      a = a.replace(c, "");
      c = RegExp("<o:p>\\s+</o:p>", "gi");
      a = a.replace(c, "");
      c = RegExp("<o:p ([^>]+)></o:p>", "gi");
      a = a.replace(c, "");
      c = RegExp("<o:p ([^>]+)>\\s+</o:p>", "gi");
      a = a.replace(c, "");
      c = RegExp("<w:sdt[^>]*>", "gi");
      a = a.replace(c, "");
      c = RegExp("</w:sdt>", "gi");
      a = a.replace(c, "");
      c = RegExp('<[^>]+(lang=["]?en-us["])[^>]*>', "gi");
      if (c = a.match(c)) {
        for (var b = c.length, e = 0; e < b; e++) {
          var f = c[e], k = RegExp('\\slang=[\\"]?en-us[\\"]?', "gi"),
              f = f.replace(k, "");
          a = a.replace(c[e], f)
        }
      }
      c = RegExp("<[^>]+(mso)[^>]*>",
          "gi");
      if (c = a.match(c)) {
        for (b = c.length, e = 0; e < b; e++) {
          f = c[e], "1"
          == KEDITORTOP.G_CURRKEDITOR._config.removeMsoClass && (k = RegExp(
              '\\sclass=[\\"]?(mso)\\w+[\\"]?', "gi"), f = f.replace(k,
              "")), f = f.replace(/&quot;/gi, "^"), k = RegExp(
              "mso-[^:]+:\\^\\^(;?)", "gi"), f = f.replace(k, ""), k = RegExp(
              '(\\s+)?mso-number-format:(\\s+)?"(.+?)"(\\s+)?;',
              "gi"), f = f.replace(k, ""), k = RegExp(
              '(\\s+)?mso-number-format:(\\s+)?"(.+?)"(\\s+)?;?',
              "gi"), f = f.replace(k, ""), k = RegExp(
              "\\s?mso-[\\w\uac00-\ud7a3\\-: ?'\"\\^@%\\.\\\\_]+; ?", "gi"), f =
              f.replace(k, ""), k = RegExp(
              '\\s?mso-[\\w\uac00-\ud7a3\\-: ?\'"\\^@%\\.\\\\_]+" ?',
              "gi"), f = f.replace(k, '"'), k = RegExp(
              "\\s?mso-[\\w\uac00-\ud7a3\\-: ?]+(['\"])", "gi"), f = f.replace(
              k,
              "$1"), f = f.replace(/\^/gi, "&quot;"), a = a.replace(c[e], f);
        }
      }
      c = new RegExp(
          "(<span[^>]*?raon_placeholder.*?>)(?:\\s|<br>|<br />|  | |)</span>",
          "gim");
      a = a.replace(c, "$1" + unescape("%u200B") + "</span>");
      for (e = 0; 5 > e; e++) {
        b = ["o:p", "span", "font"];
        k = b.length;
        for (f = 0; f < k; f++) {
          c = new RegExp(
              "<" + b[f] + "[^>]*></" + b[f] + ">", "gi"), a = a.replace(c, ""),
              c = new RegExp("<" + b[f] + "[^>]*>&nbsp;</" + b[f] + ">",
                  "gi"), a = a.replace(c, "&nbsp;"), "span" != b[f]
          && (c = new RegExp("<" + b[f] + "[^>]*> </" + b[f] + ">",
              "gi"), a = a.replace(c, "&nbsp;"));
        }
        b = ["o", "v", "w", "m", "x"];
        k = b.length;
        for (f = 0; f < k; f++) {
          0 == f && (a = a.replace(/<o:p/gi,
              "<raonko:p")), -1 < a.indexOf("<" + b[f]) && (c = new RegExp(
              "<" + b[f] + ":[^/>]+/>", "gi"), a = a.replace(c,
              ""), c = new RegExp(
              "<" + b[f] + ":[^>]+>[^<]*</" + b[f] + ":[^>]+>",
              "gi"), a = a.replace(c, ""), "v" == b[f] && (c = new RegExp(
              "<" + b[f] + ":[^>]+>", "gi"), a = a.replace(c,
              ""), c = new RegExp(
              "</" +
              b[f] + ":[^>]+>", "gi"), a = a.replace(c, ""))), f == k - 1
          && (a = a.replace(/<raonko:p/gi, "<o:p"))
        }
      }
      e = "(<span[^>]*?raon_placeholder.*?>)(" + unescape("%u200B")
          + "?)</span>";
      c = new RegExp(e, "gim");
      a = a.replace(c, "$1</span>");
      a = a.replace(/style=""/gi, "");
      a = a.replace(/style=''/gi, "");
      a = a.replace(/\s>/gi, ">");
      a = KEDITORTOP.RAONKEDITOR.util.replaceOneSpaceToNbsp(a);
      a = a.replace(/<\/td>&nbsp;<\/tr>/g, "</td></tr>");
      a = a.replace(/<\/td>&nbsp;<\/td>/g, "</td></td>");
      a = a.replace(/<\/th>&nbsp;<\/tr>/g, "</th></tr>");
      a = a.replace(/<\/th>&nbsp;<\/th>/g,
          "</th></th>");
      if (KEDITORTOP.RAONKEDITOR.browser.ie && 10
          > KEDITORTOP.RAONKEDITOR.browser.ieVersion) {
        var c = a.length, f = b = !1, h = k = "", l = "";
        if (-1 == a.indexOf("<") && -1 == a.indexOf(">")) {
          for (e = 0; e < c;
              e++) {
            k = a.charAt(e), h = a.charAt(e + 1), " " != k && 32
            != k.charCodeAt(0) || " " != h && 32 != h.charCodeAt(0)
            || (k = "&nbsp;"), l += k;
          }
        } else {
          for (e = 0; e < c; e++) {
            k = a.charAt(
                e), h = a.charAt(e + 1), "<" == k ? (b = !1, f = "p"
            == h.toLowerCase() ? !0 : !1) : ">" == k && 1 == f ? b = !0 : 1 != b
                || " " != k && 32 != k.charCodeAt(0) || " " != h && 32
                != h.charCodeAt(0) || (k = "&nbsp;"), l += k;
          }
        }
        a = l
      }
      0 == d && (a =
          KEDITORTOP.RAONKEDITOR.util.removeLocalFileImage(a));
      return a
    }, removeLocalFileImage: function (a) {
      return "1" == KEDITORTOP.G_CURRKEDITOR._config.useKManager ? a : "" == a
      || void 0 == a ? "" : a = a.replace(
          RegExp("<(img)([^>]*?)src=('|\")(file://)[^>]+>", "gi"), "")
    }, html2xhtml: function (a) {
      if ("" == a || void 0 == a) {
        return "";
      }
      for (var d = "area base br col embed frame hr img input link meta param".split(
          " "), c = d.length, b = null, e = RegExp(), f = 0; f < c;
          f++) {
        b = d[f], e = new RegExp("<" + b + " ([^>]*)>",
            "gi"), a = a.replace(e, "<" + b + " $1 />"), e = new RegExp("<" +
            b + ">", "gi"), a = a.replace(e, "<" + b + " />");
      }
      return a
    }, emptyTagRemove: function (a) {
      if ("" == a || void 0 == a) {
        return "";
      }
      try {
        if ("1" == KEDITORTOP.G_CURRKEDITOR._config.empty_tag_remove) {
          var d = document.createElement("div");
          d.innerHTML = a;
          for (var c = ["p", "div"], b = c.length, e = [], f = 0; f < b; f++) {
            for (var k = d.getElementsByTagName(c[f]), h = k.length, l = 0;
                l < h; l++) {
              n = k[l], "" == n.innerHTML && e.push(n);
            }
            for (; 0 < e.length;) {
              var n = e.pop();
              n.parentNode.removeChild(n)
            }
          }
          a = d.innerHTML
        }
      } catch (p) {
        RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(p)
      }
      return a
    },
    emptyTagRemoveCheckInContentTag: function (a, d) {
      if ("" == a || void 0 == a) {
        return "";
      }
      try {
        if ("1" == KEDITORTOP.G_CURRKEDITOR._config.empty_tag_remove) {
          var c = document.createElement("div");
          c.innerHTML = a;
          for (var b = c.getElementsByTagName("p"), e = b.length, f, k, h = "",
              l = [], n = !1, p = 0; p < e; p++) {
            if (f = b[p], h = "textContent"
            in f ? f.textContent : f.innerText, "" == h) {
              k = f.innerHTML;
              for (var n = !1, m = d.length, q = 0; q < m; q++) {
                if (-1
                    < k.toLowerCase().indexOf("<" + d[q])) {
                  n = !0;
                  break
                }
              }
              0 == n && l.push(f)
            }
          }
          for (var r = l.length; 0 < r;) {
            f = l.pop(), c.removeChild(f);
          }
          a =
              c.innerHTML
        }
      } catch (t) {
        RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(t)
      }
      return a
    }, replaceBrOrSpaceToNbspString: function (a, d) {
      reg_exp = new RegExp("<" + d + "><br></" + d + ">", "gi");
      a = a.replace(reg_exp, "<" + d + ">&nbsp;</" + d + ">");
      reg_exp = new RegExp("<" + d + "><br/></" + d + ">", "gi");
      a = a.replace(reg_exp, "<" + d + ">&nbsp;</" + d + ">");
      reg_exp = new RegExp("<" + d + "><br /></" + d + ">", "gi");
      a = a.replace(reg_exp, "<" + d + ">&nbsp;</" + d + ">");
      reg_exp = new RegExp("<" + d + "></" + d + ">", "gi");
      a = a.replace(reg_exp, "<" + d + ">&nbsp;</" + d + ">");
      reg_exp =
          new RegExp("<" + d + ">\\s+</" + d + ">", "gi");
      a = a.replace(reg_exp, "<" + d + ">&nbsp;</" + d + ">");
      reg_exp = new RegExp("<" + d + " ([^>]+)><br></" + d + ">", "gi");
      a = a.replace(reg_exp, "<" + d + " $1>&nbsp;</" + d + ">");
      reg_exp = new RegExp("<" + d + " ([^>]+)><br/></" + d + ">", "gi");
      a = a.replace(reg_exp, "<" + d + " $1>&nbsp;</" + d + ">");
      reg_exp = new RegExp("<" + d + " ([^>]+)><br /></" + d + ">", "gi");
      a = a.replace(reg_exp, "<" + d + " $1>&nbsp;</" + d + ">");
      reg_exp = new RegExp("<" + d + " ([^>]+)></" + d + ">", "gi");
      a = a.replace(reg_exp, "<" + d + " $1>&nbsp;</" + d + ">");
      reg_exp =
          new RegExp("<" + d + " ([^>]+)>\\s+</" + d + ">", "gi");
      return a = a.replace(reg_exp, "<" + d + " $1>&nbsp;</" + d + ">")
    }, htmlRevision: function (a, d) {
      if ("" == a || void 0 == a) {
        return "";
      }
      var c = null;
      "1" == KEDITORTOP.G_CURRKEDITOR._config.removeComment && (a = a.replace(
          /(<style[^>]*>\s*\x3c!--)|(\x3c!--.*?--\x3e)|(\x3c!--[\w\W\n\s]+?--\x3e)/gi,
          "$1"));
      if (RAONKEDITOR.browser.ie && 11 > RAONKEDITOR.browser.ieVersion
          || d) {
        for (c = RegExp(
            "<(td|th)([^>]*?>)([\\\\w\\\\W\\\\s]*?)<p([^>]*?>)<br ?/?></p>([\\\\w\\\\W\\\\s]*?)</(td|th)>",
            "gi"); c.test(a);) {
          a =
              a.replace(c, "<$1$2$3<p$4&nbsp;</p>$5</$6>");
        }
      } else {
        for (c = RegExp(
            "<(td|th)([^>]*?>)([\\\\w\\\\W\\\\s]*?)<p([^>]*?>)&nbsp;</p>([\\\\w\\\\W\\\\s]*?)</(td|th)>",
            "gi"); c.test(a);) {
          a = a.replace(c, "<$1$2$3<p$4<br></p>$5</$6>");
        }
      }
      a = KEDITORTOP.G_CURRKEDITOR._FRAMEWIN.setImgAltLineBreak(a);
      c = new RegExp(
          "(<span[^>]*?raon_placeholder.*?>)(?:\\s|<br>|<br />|  | |)</span>",
          "gim");
      a = a.replace(c, "$1" + unescape("%u200B") + "</span>");
      for (var b = KEDITORTOP.G_CURRKEDITOR._config.setDefaultValueInEmptyTag,
          e = b.length, f = 0; f < e; f++) {
        var k =
            b[f];
        RAONKEDITOR.browser.ie && 11 > RAONKEDITOR.browser.ieVersion || d || "1"
        == KEDITORTOP.G_CURRKEDITOR._config.ie11_BugFixed_ReplaceBr ? "span"
            != k && (a = RAONKEDITOR.util.replaceBrOrSpaceToNbspString(a, k))
            : RAONKEDITOR.browser.ie && 11 == RAONKEDITOR.browser.ieVersion && 0
            == k.indexOf("h") ? (c = new RegExp("<" + k + "></" + k + ">",
                "gi"), a = a.replace(c,
                "<" + k + ">" + unescape("%u200B") + "</" + k
                + ">"), c = new RegExp("<" + k + ">&nbsp;</" + k + ">",
                "gi"), a = a.replace(c,
                "<" + k + ">" + unescape("%u200B") + "</" + k
                + ">"), c = new RegExp("<" + k + ">\\s+</" + k + ">", "gi"),
                a = a.replace(c, "<" + k + ">" + unescape("%u200B") + "</" + k
                    + ">"), c = new RegExp("<" + k + " ([^>]+)></" + k + ">",
                "gi"), a = a.replace(c,
                "<" + k + " $1>" + unescape("%u200B") + "</" + k
                + ">"), c = new RegExp("<" + k + " ([^>]+)>&nbsp;</" + k + ">",
                "gi"), a = a.replace(c,
                "<" + k + " $1>" + unescape("%u200B") + "</" + k
                + ">"), c = new RegExp("<" + k + " ([^>]+)>\\s+</" + k + ">",
                "gi"), a = a.replace(c,
                "<" + k + " $1>" + unescape("%u200B") + "</" + k + ">")) : "span"
                != k && (c = new RegExp("<" + k + "></" + k + ">",
                    "gi"), a = a.replace(c,
                    "<" + k + "><br></" + k + ">"), c = new RegExp(
                    "<" + k + ">&nbsp;</" + k + ">", "gi"),
                    a = a.replace(c, "<" + k + "><br></" + k + ">"), c = new RegExp(
                    "<" + k + ">\\s+</" + k + ">", "gi"), a = a.replace(c,
                    "<" + k + "><br></" + k + ">"), c = new RegExp(
                    "<" + k + " ([^>]+)></" + k + ">", "gi"), a = a.replace(c,
                    "<" + k + " $1><br></" + k + ">"), c = new RegExp(
                    "<" + k + " ([^>]+)>&nbsp;</" + k + ">", "gi"), a = a.replace(c,
                    "<" + k + " $1><br></" + k + ">"), c = new RegExp(
                    "<" + k + " ([^>]+)>\\s+</" + k + ">", "gi"), a = a.replace(c,
                    "<" + k + " $1><br></" + k + ">"))
      }
      c = "(<span[^>]*?raon_placeholder.*?>)(" + unescape("%u200B")
          + "?)</span>";
      c = new RegExp(c, "gim");
      a = a.replace(c, "$1</span>");
      0 ==
      KEDITORTOP.RAONKEDITOR.browser.ie && "1"
      == KEDITORTOP.G_CURRKEDITOR._config.removeCarriageReturnInTag
      && (c = RegExp("<([^>]*)([\r\n])(.*?)>", "igm"), c.test(a)
      && (a = a.replace(c, "<$1$3>")), c = RegExp("<([^>]*)([\n])(.*?)>",
          "igm"), c.test(a) && (a = a.replace(c, "<$1$3>")));
      c = RegExp("<c:foreach", "gi");
      a = a.replace(c, "<c:forEach");
      c = RegExp("</c:foreach", "gi");
      a = a.replace(c, "</c:forEach");
      c = new RegExp(unescape("%u202c"), "g");
      return a = a.replace(c, "")
    }, nbspRemove: function (a) {
      if ("" == a || void 0 == a) {
        return "";
      }
      var d = null, d = RegExp("<p>&nbsp;</p>",
          "gi");
      a = a.replace(d, "<p></p>");
      d = RegExp("<p ([^>]+)>&nbsp;</p>", "gi");
      return a = a.replace(d, "<p $1></p>")
    }, ImageSrcConvert: function (a, d, c) {
      var b = document.createElement("div");
      b.innerHTML = a;
      var e = b.getElementsByTagName("img"), f = e.length, k = null, h = "",
          l = "";
      c += "_raonk_base64_image_";
      for (var n = 0; n < f; n++) {
        k = e[n];
        l = c + n;
        try {
          h = k.src
        } catch (p) {
          RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(p)
        }
        1 == d ? -1 < h.indexOf("data:image") && -1 < h.indexOf("base64,")
            && (this.G_IMG_LIST[l] = h, k.removeAttribute(
                "src"), k.setAttribute("raon-tsrc",
                l)) : -1 < h.indexOf(c)
            && (k.src = this.G_IMG_LIST[l], this.G_IMG_LIST[l] = "")
      }
      d = !1;
      for (var m in this.G_IMG_LIST) {
        d = !0;
        break
      }
      d && (a = b.innerHTML, a = a.replace(/<img[^>]*? raon-tsrc=/gi,
          function (a) {
            return a.replace(" raon-tsrc=", " src=")
          }));
      b = null;
      return a
    }, getUrlString: function (a) {
      a = RAONKEDITOR.util.replaceAll(a, " ", "%20");
      a = RAONKEDITOR.util.replaceAll(a, "&nbsp;", "%21");
      a = RAONKEDITOR.util.replaceAll(a, "!", "%20");
      a = RAONKEDITOR.util.replaceAll(a, '"', "%22");
      a = RAONKEDITOR.util.replaceAll(a, "#", "%23");
      a = RAONKEDITOR.util.replaceAll(a,
          "$", "%24");
      a = RAONKEDITOR.util.replaceAll(a, "%", "%25");
      a = RAONKEDITOR.util.replaceAll(a, "&", "%26");
      a = RAONKEDITOR.util.replaceAll(a, "'", "%27");
      a = RAONKEDITOR.util.replaceAll(a, "+", "%2B");
      a = RAONKEDITOR.util.replaceAll(a, "/", "%2F");
      a = RAONKEDITOR.util.replaceAll(a, ":", "%3A");
      a = RAONKEDITOR.util.replaceAll(a, ";", "%3B");
      a = RAONKEDITOR.util.replaceAll(a, "<", "%3C");
      a = RAONKEDITOR.util.replaceAll(a, "=", "%3D");
      a = RAONKEDITOR.util.replaceAll(a, ">", "%3E");
      a = RAONKEDITOR.util.replaceAll(a, "?", "%3F");
      return a = RAONKEDITOR.util.replaceAll(a,
          "@", "%40")
    }, replaceAll: function (a, d, c) {
      a && "" != a && (a = a.split(d).join(c));
      return a
    }, getSkinNames: function () {
      return "blue brown darkgray gold gray green orange pink purple red silver yellow".split(
          " ")
    }, replaceOneSpaceToNbsp: function (a) {
      if (3 == KEDITORTOP.G_CURRKEDITOR.agentPasteFormatType && "0"
          == KEDITORTOP.G_CURRKEDITOR._config.replaceOneSpaceToNbspInExcel) {
        return a;
      }
      var d = a, c, b = "";
      try {
        for (var e = "span font a b strong i em strike u sup sub".split(" "),
            f = e.length, k = 0; k < f; k++) {
          var h = !0, l = e[k];
          ("font" == l || "b" ==
              l || "em" == l || "sup" == l || "sub" == l) && 0
          > d.toLowerCase().indexOf("<" + l) && (h = !1);
          if (h) {
            for (var n = 0; n < f; n++) {
              b = d;
              c = new RegExp("<" + e[k] + " *([^>?+])*>(\\s+)</" + e[n] + ">",
                  "gi");
              reg_exp2 = "u" == e[n] ? new RegExp(
                  "</" + e[k] + ">(\\s+)<" + e[n] + "[^l]", "gi") : new RegExp(
                  "</" + e[k] + ">(\\s+)<" + e[n] + " *([^>?+])*>", "gi");
              reg_exp3 = new RegExp(
                  "<" + e[k] + " *([^>?+])*>(\\s+)<" + e[n] + ">", "gi");
              reg_exp4 = "u" == e[n] ? new RegExp(
                  "</" + e[k] + ">(\\s+)</" + e[n] + "[^l]", "gi") : new RegExp(
                  "</" + e[k] + ">(\\s+)</" + e[n] + " *([^>?+])*>", "gi");
              try {
                var p = d.match(c);
                if (p) {
                  for (var m = p.length, q = 0; q < m; q++) {
                    var r = p[q];
                    if (!("b" == e[k] && -1 < r.toLowerCase().indexOf(
                        "<br"))) {
                      var t = />\s+</.exec(r),
                          v = t[0].replace(RegExp("\\s\\s", "gi"),
                              "&nbsp;&nbsp;"),
                          r = r.replace(t, v), d = d.replace(p[q], r)
                    }
                  }
                }
                if (p = d.match(reg_exp2)) {
                  for (m = p.length, q = 0; q < m;
                      q++) {
                    r = p[q], "b" == e[n] && -1
                    < match_string.toLowerCase().indexOf("<br")
                    || (t = />\s+</.exec(r), v = t[0].replace(
                        RegExp("\\s\\s", "gi"), "&nbsp;&nbsp;"), r = r.replace(
                        t,
                        v), d = d.replace(p[q], r));
                  }
                }
                if (p = d.match(reg_exp3)) {
                  for (m = p.length, q = 0; q < m;
                      q++) {
                    r = p[q], "b" == e[k] &&
                    -1 < match_string.toLowerCase().indexOf("<br")
                    || (t = />\s+</.exec(r), v = t[0].replace(
                        RegExp("\\s\\s", "gi"), "&nbsp;&nbsp;"), r = r.replace(
                        t,
                        v), d = d.replace(p[q], r));
                  }
                }
                if (p = d.match(reg_exp4)) {
                  for (m = p.length, q = 0; q < m;
                      q++) {
                    r = p[q], t = />\s+</.exec(r), v = t[0].replace(
                        RegExp("\\s\\s", "gi"), "&nbsp;&nbsp;"), r = r.replace(
                        t,
                        v), d = d.replace(p[q], r)
                  }
                }
              } catch (g) {
                d = b
              }
            }
          }
        }
        for (k = 0; k < f; k++) {
          if (h = !0, l = e[k], ("font" == l || "b" == l
              || "em" == l || "sup" == l || "sub" == l) && 0
          > d.toLowerCase().indexOf("<" + l) && (h = !1), h) {
            "b" == l ? (d = d.replace(/<br/gi, "<temp_br"),
                d = d.replace(/<\/br/gi, "</temp_br")) : "u" == l
                && (d = d.replace(/<ul/gi, "<temp_ul"), d = d.replace(/<\/ul/gi,
                    "</temp_ul"));
            for (n = 0; n < f; n++) {
              c = new RegExp("/" + e[k] + ">\\s<" + e[n],
                  "gi"), d = d.replace(c,
                  "/" + e[k] + ">&nbsp;<" + e[n]), c = new RegExp(
                  "/" + e[k] + ">\\s\\n<" + e[n], "gi"), d = d.replace(c,
                  "/" + e[k] + ">&nbsp;<" + e[n]);
            }
            "b" == l ? (d = d.replace(/<temp_br/gi, "<br"), d = d.replace(
                /<\/temp_br/gi, "</br")) : "u" == l && (d = d.replace(
                /<temp_ul/gi, "<ul"), d = d.replace(/<\/temp_ul/gi, "</ul"))
          }
        }
      } catch (z) {
        d = a
      }
      return d
    }, parseIntOr0: function (a) {
      a = parseInt(a,
          10);
      return isNaN(a) ? 0 : a
    }, parseFloatOr0: function (a) {
      a = parseFloat(a, 10);
      return isNaN(a) ? 0 : a
    }, getUserLang: function (a) {
      a = a.toLowerCase();
      var d = "ko-kr";
      "auto" == a && (d = "en-us", (a = navigator.language
          || navigator.userLanguage) || (a = d), a = a.toLowerCase());
      if (-1 < a.indexOf("ko")) {
        d = "ko-kr";
      } else if (-1 < a.indexOf(
          "en")) {
        d = "en-us";
      } else if (-1 < a.indexOf(
          "ja")) {
        d = "ja-jp";
      } else if (-1 < a.indexOf("zh-cn") || 0
          == a.indexOf("cn")) {
        d = "zh-cn";
      } else if (-1 < a.indexOf("zh-tw") || 0
          == a.indexOf("tw")) {
        d = "zh-tw";
      }
      return d
    }, postFormData: function (a,
        d, c, b) {
      void 0 == b && (b = []);
      var e = a.createElement("form");
      e.method = "post";
      e.action = d;
      e.target = c;
      d = b.length;
      for (c = 0; c < d; c++) {
        var f = a.createElement("input");
        f.type = "hidden";
        f.name = b[c][0];
        f.value = b[c][1];
        e.appendChild(f)
      }
      a.body.appendChild(e);
      e.submit();
      a.body.removeChild(e)
    }, base64_encode: function (a) {
      var d = "", c, b, e, f, k, h, l = 0;
      for (a = RAONKEDITOR.util.utf8_encode(a); l < a.length;) {
        c = a.charCodeAt(
            l++), b = a.charCodeAt(l++), e = a.charCodeAt(l++), f = c
            >> 2, c = (c
            & 3) << 4 | b >> 4, k = (b & 15) << 2 | e >> 6, h = e & 63, isNaN(b)
            ? k = h = 64 : isNaN(e) &&
            (h = 64), d = d
            + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(
                f)
            + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(
                c)
            + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(
                k)
            + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(
                h);
      }
      return d
    }, base64_decode: function (a, d) {
      var c = "", b, e, f, k, h, l = 0;
      for (a = a.replace(/[^A-Za-z0-9\+\/\=]/g, ""); l
      < a.length;) {
        b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
            a.charAt(l++)),
            e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
                a.charAt(
                    l++)), k = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
            a.charAt(
                l++)), h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
            a.charAt(l++)), b = b << 2 | e >> 4, e = (e & 15) << 4 | k
            >> 2, f = (k & 3) << 6 | h, c += String.fromCharCode(b), 64 != k
        && (c += String.fromCharCode(e)), 64 != h && (c += String.fromCharCode(
            f));
      }
      0 == !!d && (c = RAONKEDITOR.util.utf8_decode(c));
      return c
    }, makeEncryptParam: function (a) {
      a =
          RAONKEDITOR.util.base64_encode(a);
      10 <= a.length ? (a = RAONKEDITOR.util.insertAt(a,
              RAONKSolution.Agent.G_AP10,
              RAONKEDITOR.util.G_AP27), a = RAONKEDITOR.util.insertAt(a,
              RAONKEDITOR.util.G_AP11,
              RAONKSolution.Agent.G_AP.G_AP22), a = RAONKEDITOR.util.insertAt(a,
              RAONKEDITOR.browser.G_AP12,
              RAONKEDITOR.util.G_AP25), a = RAONKEDITOR.util.insertAt(a,
              RAONKEDITOR.util.G_AP13,
              RAONKSolution.Agent.G_AP23), a = RAONKEDITOR.util.insertAt(a,
              RAONKSolution.Agent.G_AP10,
              RAONKSolution.Agent.G_AP.G_AP29), a = RAONKEDITOR.util.insertAt(a,
              RAONKEDITOR.util.G_AP11,
              RAONKEDITOR.browser.G_AP24), a = RAONKEDITOR.util.insertAt(a,
              RAONKEDITOR.browser.G_AP12, RAONKSolution.Agent.G_AP20))
          : (a = RAONKEDITOR.util.insertAt(a, a.length - 1,
              "$"), a = RAONKEDITOR.util.insertAt(a, 0, "$"));
      return a = a.replace(/[+]/g, "%2B")
    }, makeEncryptParamOld: function (a) {
      a = RAONKEDITOR.util.base64_encode(a);
      a = "R" + a;
      a = RAONKEDITOR.util.base64_encode(a);
      return a = a.replace(/[+]/g, "%2B")
    }, makeEncryptParamEx: function (a) {
      var d = RAONKEDITOR.util.makeGuid().toLowerCase(),
          d = RAONKEDITOR.util.encode(d),
          d = d.substring(0, 15),
          c = G_CURRKEDITOR._FRAMEWIN.CryptoJS.enc.Utf8.parse(d);
      c.sigBytes = 16;
      a = G_CURRKEDITOR._FRAMEWIN.CryptoJS.enc.Utf8.parse(a);
      a = G_CURRKEDITOR._FRAMEWIN.CryptoJS.AES.encrypt(a, c, {iv: c});
      c = G_CURRKEDITOR._FRAMEWIN.CryptoJS.enc.Base64._map;
      G_CURRKEDITOR._FRAMEWIN.CryptoJS.enc.Base64._map = "adebcfijghklopmnqruvstwyzxAHIJDBCEFLMNUVGKRSTOWXPQYZ0163847259+/=";
      a = d + G_CURRKEDITOR._FRAMEWIN.CryptoJS.enc.Base64.stringify(
          a.ciphertext);
      G_CURRKEDITOR._FRAMEWIN.CryptoJS.enc.Base64._map = c;
      return a = a.replace(/[+]/g,
          "%2B")
    }, makeDecryptReponseMessage: function (a) {
      var d = function (a, b) {
        var e = a.split("");
        e.splice(b, 1);
        return e = e.join("")
      };
      a = a.replace(/ /g, "");
      a = a.replace(/\r/g, "");
      a = a.replace(/\n/g, "");
      a = a.replace(/%2B/g, "+");
      15 <= a.length ? (a = d(a, 9), a = d(a, 6), a = d(a, 8), a = d(a,
          7), a = d(a, 9), a = d(a, 6), a = d(a, 8)) : (a = a.replace(/#/g,
          ""), a = a.replace(/$/g, ""));
      return a = RAONKEDITOR.util.base64_decode(a)
    }, makeDecryptReponseMessageEx: function (a) {
      try {
        a = a.replace(/ /g, "");
        a = a.replace(/\r/g, "");
        a = a.replace(/\n/g, "");
        a = a.replace(/%2B/g,
            "+");
        var d = a.substring(0, 15);
        a = a.substring(15);
        d = G_CURRKEDITOR._FRAMEWIN.CryptoJS.enc.Utf8.parse(d);
        d.sigBytes = 16;
        var c = G_CURRKEDITOR._FRAMEWIN.CryptoJS.enc.Base64._map;
        G_CURRKEDITOR._FRAMEWIN.CryptoJS.enc.Base64._map = "adebcfijghklopmnqruvstwyzxAHIJDBCEFLMNUVGKRSTOWXPQYZ0163847259+/=";
        a = G_CURRKEDITOR._FRAMEWIN.CryptoJS.enc.Base64.parse(a);
        G_CURRKEDITOR._FRAMEWIN.CryptoJS.enc.Base64._map = c;
        a = G_CURRKEDITOR._FRAMEWIN.CryptoJS.AES.decrypt({ciphertext: a}, d,
            {iv: d}).toString(G_CURRKEDITOR._FRAMEWIN.CryptoJS.enc.Utf8)
      } catch (b) {
        RAONKEDITOR &&
        RAONKEDITOR.logMode && console && console.log(b)
      }
      return a
    }, utf8_decode: function (a) {
      for (var d = "", c = 0, b = c1 = c2 = 0; c < a.length;) {
        b = a.charCodeAt(
            c), 128 > b ? (d += String.fromCharCode(b), c++) : 191 < b && 224
        > b
            ? (c2 = a.charCodeAt(c + 1), d += String.fromCharCode(
                (b & 31) << 6 | c2 & 63), c += 2) : (c2 = a.charCodeAt(
                c + 1), c3 = a.charCodeAt(c + 2), d += String.fromCharCode(
                (b & 15) << 12 | (c2 & 63) << 6 | c3 & 63), c += 3);
      }
      return d
    }, utf8_encode: function (a) {
      a = a.replace(/\r\n/g, "\n");
      for (var d = "", c = 0; c < a.length; c++) {
        var b = a.charCodeAt(c);
        128 > b ? d += String.fromCharCode(b) :
            (127 < b && 2048 > b ? d += String.fromCharCode(b >> 6 | 192)
                : (d += String.fromCharCode(
                    b >> 12 | 224), d += String.fromCharCode(
                    b >> 6 & 63 | 128)), d += String.fromCharCode(b & 63 | 128))
      }
      return d
    }, encode: function (a) {
      var d = "", c, b, e, f, k, h, l = 0;
      for (a = RAONKEDITOR.util.utf8_encode(a); l < a.length;) {
        c = a.charCodeAt(
            l++), b = a.charCodeAt(l++), e = a.charCodeAt(l++), f = c
            >> 2, c = (c
            & 3) << 4 | b >> 4, k = (b & 15) << 2 | e >> 6, h = e & 63, isNaN(b)
            ? k = h = 64 : isNaN(e) && (h = 64), d = d
            + "adebcfijghklopmnqruvstwyzxAHIJDBCEFLMNUVGKRSTOWXPQYZ0163847259+/=".charAt(
                f)
            + "adebcfijghklopmnqruvstwyzxAHIJDBCEFLMNUVGKRSTOWXPQYZ0163847259+/=".charAt(
                c) +
            "adebcfijghklopmnqruvstwyzxAHIJDBCEFLMNUVGKRSTOWXPQYZ0163847259+/=".charAt(
                k)
            + "adebcfijghklopmnqruvstwyzxAHIJDBCEFLMNUVGKRSTOWXPQYZ0163847259+/=".charAt(
                h);
      }
      return d
    }, insertAt: function (a, d, c) {
      return String.prototype.insertAt ? a.insertAt(d, c) : a.substr(0, d) + c
          + a.substr(d)
    }, G_AP27: "r", G_AP25: "o", stringToXML: function (a) {
      a = RAONKEDITOR.util.trim(a);
      var d;
      try {
        window.DOMParser ? d = (new DOMParser).parseFromString(a, "text/xml")
            : (d = new ActiveXObject(
                "Microsoft.XMLDOM"), d.async = "false", d.loadXML(a))
      } catch (c) {
        d = null
      }
      return d
    },
    xmlToString: function (a) {
      return window.ActiveXObject ? a.xml
          : (new XMLSerializer).serializeToString(a)
    }, removeOfficeDummyTag: function (a, d, c) {
      var b = a;
      try {
        for (var e = a.indexOf(d), f = a.indexOf(c);
            -1 < e && -1 < f;) {
          var k = b.substring(0, e),
              h = b.substring(f + c.length), b = k + h, e = b.indexOf(d),
              f = b.indexOf(c)
        }
      } catch (l) {
        b = a
      }
      return b
    }, getStyle: function (a, d) {
      var c, b = !1, e;
      "fontSize" == d ? G_CURRKEDITOR._FRAMEWIN._iframeWin.getComputedStyle
          ? (KEDITORTOP.RAONKEDITOR.browser.ie && 11
          == KEDITORTOP.RAONKEDITOR.browser.ieVersion
          && G_CURRKEDITOR._config.defaultFontSize &&
          -1 < G_CURRKEDITOR._config.defaultFontSize.indexOf("px")
          && (e = a.style.lineHeight, a.style.lineHeight = "1", b = !0), c = G_CURRKEDITOR._FRAMEWIN._iframeWin.getComputedStyle(
              a, "")) : a.currentStyle && (c = a.currentStyle) : a.currentStyle
          ? c = a.currentStyle
          : G_CURRKEDITOR._FRAMEWIN._iframeWin.getComputedStyle
          && (c = G_CURRKEDITOR._FRAMEWIN._iframeWin.getComputedStyle(a, ""));
      c ? "all" != d && (c.getProperty ? c = c.getProperty(d) : "fontSize" == d
      && b ? (c = c.lineHeight, void 0 != e && (a.style.lineHeight = e))
          : c = c[d], "fontSize" == d && (0 > c.indexOf("px") &&
      0 > c.indexOf("pt") && 0 > c.indexOf("em") ? c = "" : -1 < c.indexOf("px")
          && (c = G_CURRKEDITOR._FRAMEWIN.getFontSizeStyle(c, "")))) : c = "";
      return c
    }, hashTable: function (a) {
      this.length = 0;
      this.items = {};
      for (var d in a) {
        a.hasOwnProperty(d)
        && (this.items[d] = a[d], this.length++);
      }
      this.setItem = function (a, b) {
        var e = void 0;
        this.hasItem(a) ? e = this.items[a] : this.length++;
        this.items[a] = b;
        return e
      };
      this.getItem = function (a) {
        return this.hasItem(a) ? this.items[a] : void 0
      };
      this.hasItem = function (a) {
        return this.items.hasOwnProperty(a)
      };
      this.removeItem =
          function (a) {
            if (this.hasItem(
                a)) {
              return previous = this.items[a], this.length--, delete this.items[a], previous
            }
          };
      this.keys = function () {
        var a = [], b;
        for (b in this.items) {
          this.hasItem(b) && a.push(b);
        }
        return a
      };
      this.values = function () {
        var a = [], b;
        for (b in this.items) {
          this.hasItem(b) && a.push(this.items[b]);
        }
        return a
      };
      this.each = function (a) {
        for (var b in this.items) {
          this.hasItem(b) && a(b, this.items[b])
        }
      };
      this.clear = function () {
        this.items = {};
        this.length = 0
      }
    }, isExistEditorName: function (a, d) {
      if (void 0 == a || "" == a) {
        return 1;
      }
      var c = RAONKEDITOR.RAONKMULTIPLE["raonk_frame_" +
      a];
      return void 0 == c || null == c ? 0 : "" != d.EditorHolder
      && RAONKEDITOR.RAONKHOLDER[a] == d.EditorHolder ? 3 : 2
    }, getNewNextEditorName: function (a) {
      var d = "", c = a.split("_"), b = 0;
      do {
        d = c.length, 1 < d && (a = a.replace("_" + c[d - 1], "")), d = a + "_"
            + b, b++;
      } while (0 < RAONKEDITOR.util.isExistEditorName(d));
      return d
    }, replacePtOrCmToPx: function (a, d) {
      try {
        for (var c = "object" == typeof d ? d : {},
            b = a.toLowerCase().split(" "), e = b.length, f, k, h = "", l = 0;
            l < e; l++) {
          var n = b[l];
          -1 < n.indexOf("pt") ? (f = 4 * parseFloat(n) / 3, 0 < f && 1 > f
          && (f = 1), 0 > f && (f = 0), k = !0 === c.isFloor ?
              Math.floor(f) + "px" : Math.round(f) + "px", h = "" != h ? h + " "
              + k : k) : -1 < n.indexOf("cm") ? (_cm = 37.795275593333
              * parseFloat(n), 0 < _cm && 1 > _cm && (_cm = 1), 0 > _cm
          && (_cm = 0), k = !0 === c.isFloor ? Math.floor(_cm) + "px"
              : Math.round(_cm) + "px", h = "" != h ? h + " " + k : k) : h = ""
          != h ? h + " " + n : n
        }
        return "" != h ? h : a
      } catch (p) {
        return a
      }
    }, GetUserRunTimeEditor: function (a) {
      a = a.toLowerCase();
      var d = "", c = !1;
      if ("" == a || "agent" == a) {
        c = !0;
      }
      d = 1 == RAONKEDITOR.browser.HTML5Supported ? "html5" : "html4";
      return {isAgent: c, mode: d}
    }, CheckEditorVisible: function (a) {
      a = document.getElementById("raonk_frame_" +
          a);
      var d = !1;
      "undefined" != typeof a && (d = !(0 == a.offsetWidth && 0
          == a.offsetHeight)) && (d = "hidden" != (window.getComputedStyle
          ? window.getComputedStyle(a, null) : a.currentStyle).visibility);
      return d
    }, IsCustomDomain: function (a) {
      if (!RAONKEDITOR.browser.ie) {
        return !1;
      }
      var d = a.domain;
      a = RAONKEDITOR.util.GetDocWindow(a).location.hostname;
      return d != a && d != "[" + a + "]"
    }, GetDocWindow: function (a) {
      return a.parentWindow || a.defaultView
    }, getUnitSize: function (a) {
      var d = 1;
      switch (a.toLowerCase()) {
        case "kb":
          d *= 1024;
          break;
        case "mb":
          d *=
              1048576;
          break;
        case "gb":
          d *= 1073741824
      }
      return d
    }, getUnit: function (a) {
      a = a.toLowerCase();
      var d = "";
      -1 < a.indexOf("mb") ? d = a.substring(a.indexOf("mb")) : -1 < a.indexOf(
          "gb") ? d = a.substring(a.indexOf("gb")) : -1 < a.indexOf("kb")
          ? d = a.substring(a.indexOf("kb")) : -1 < a.indexOf("b")
          && (d = a.substring(a.indexOf("b")));
      return d
    }, bytesToSize: function (a) {
      a = parseInt(a, 10);
      var d = "0 byte";
      isNaN(a) && (a = "", d = "N/A");
      d = {size: 0, unit: "byte", toString: d};
      if (0 == a) {
        return d;
      }
      var c = parseInt(Math.floor(Math.log(a) / Math.log(1024)));
      d.size = Math.round(a /
          Math.pow(1024, c) * 100, 2) / 100;
      d.unit = ["bytes", "KB", "MB", "GB", "TB"][c];
      d.toString = d.size + " " + d.unit;
      return d
    }, HtmlToText: function (a) {
      var d = a;
      try {
        var c = d.match(/<body[^>]*>([\w|\W]*)<\/body>/im);
        c && (d = c[1]);
        d = d.replace(/\r/g, "");
        d = d.replace(/[\n|\t]/g, "");
        d = d.replace(/[\v|\f]/g, "");
        d = d.replace(/<p><br><\/p>/gi, "\n");
        d = d.replace(/<P>&nbsp;<\/P>/gi, "\n");
        "undefined" != typeof RAONKEDITOR && RAONKEDITOR.browser.ie && 11
        <= RAONKEDITOR.browser.ieVersion && (d = d.replace(
            /<br(\s)*\/?><\/p>/gi, "</p>"), d = d.replace(
            /<br(\s[^\/]*)?><\/p>/gi,
            "</p>"));
        var d = d.replace(/<br(\s)*\/?>/gi, "\n"),
            d = d.replace(/<br(\s[^\/]*)?>/gi, "\n"),
            d = d.replace(/<\/p(\s[^\/]*)?>/gi, "\n"),
            d = d.replace(/<\/li(\s[^\/]*)?>/gi, "\n"),
            d = d.replace(/<\/tr(\s[^\/]*)?>/gi, "\n"), b = d.lastIndexOf("\n");
        -1 < b && "\n" == d.substring(b) && (d = d.substring(0, b));
        d = d.replace(RegExp("</?[^>]*>", "gi"), "");
        d = d.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&nbsp;/g,
            " ").replace(/&amp;/g, "&")
      } catch (e) {
        d = a
      }
      return d
    }, isPlainObject: function (a) {
      var d;
      d = {};
      for (var c = "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
              " "),
          b = 0, e = c.length; b < e; b++) {
        d["[object " + c[b]
        + "]"] = c[b].toLowerCase();
      }
      c = d.hasOwnProperty;
      d = !0;
      RAONKEDITOR.browser.ie && 9 > RAONKEDITOR.browser.ieVersion && (d = !1);
      var f;
      if (!a || "object" !== typeof a || a.nodeType || null != a && a
          == a.window) {
        return !1;
      }
      try {
        if (a.constructor && !c.call(a, "constructor") && !c.call(
            a.constructor.prototype, "isPrototypeOf")) {
          return !1
        }
      } catch (k) {
        return !1
      }
      if (!d) {
        for (f in a) {
          return c.call(a, f);
        }
      }
      for (f in a) {
        ;
      }
      return void 0 === f || c.call(a, f)
    }, objectExtend: function () {
      var a, d, c, b, e, f = arguments[0] || {}, k = 1, h = arguments.length,
          l = !1;
      "boolean" === typeof f && (l = f, f = arguments[k] || {}, k++);
      "object" !== typeof f && "function" !== typeof f && (f = {});
      k === h && (f = this, k--);
      for (; k < h; k++) {
        if (null != (e = arguments[k])) {
          for (b in
              e) {
            a = f[b], c = e[b], f !== c && (l && c && (this.isPlainObject(c)
                || (d = "array" === typeof c)) ? (d ? (d = !1, a = a && "array"
            === typeof a ? a : []) : a = a && this.isPlainObject(a) ? a
                : {}, f[b] = this.objectExtend(l, a, c)) : void 0 !== c
                && (f[b] = c));
          }
        }
      }
      return f
    }, getExtensionFromFileName: function (a) {
      var d = "";
      a && (d = a.split("."));
      a = "";
      1 < d.length && (a = d[d.length - 1]);
      return a
    }, _getEditor: function (a) {
      var d =
          null, d = RAONKEDITOR.util.getEditorByName(a);
      if (void 0 == d || null == d) {
        if (-1 == location.href.indexOf("editor_container.html")
            && RAONKEDITOR.ShowDestroyAlert) {
          a = "";
          try {
            if ("function" === typeof Error) {
              var c = Error();
              "string" == typeof c.stack && (a = "\n\n" + c.stack)
            }
          } catch (b) {
            RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(b)
          }
          alert(
              "Editor's Name is not correct, Please check editor's name. \ror\rThe editor was not initialized, Please check the location of api call"
              + a)
        }
        RAONKEDITOR.ShowDestroyAlert = !0;
        return null
      }
      return d
    },
    getEditorByName: function (a) {
      var d = null;
      if (void 0 == a || "" == a) {
        d = G_CURRKEDITOR;
      } else {
        try {
          if ("1" == KEDITORTOP.G_CURRKEDITOR._config.ignoreDifferentEditorName
              && 1 == RAONKEDITOR.RAONKMULTIPLEID.length) {
            var c = RAONKEDITOR.RAONKMULTIPLEID[0];
            a != c && RAONKEDITOR.isLoadedEditorEx(c) && (a = c)
          }
        } catch (b) {
          RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(b)
        }
        d = RAONKEDITOR.RAONKMULTIPLE["raonk_frame_" + a];
        "object" != typeof d && (d = null)
      }
      return d
    }, _getEditorName: function (a) {
      if (void 0 == a || "" == a) {
        if (null != RAONKEDITOR.RAONKMULTIPLEID &&
            void 0 != RAONKEDITOR.RAONKMULTIPLEID && 1
            == RAONKEDITOR.RAONKMULTIPLEID.length) {
          return RAONKEDITOR.RAONKMULTIPLEID[0];
        }
        -1 == location.href.indexOf("editor_container.html")
        && RAONKEDITOR.ShowDestroyAlert && alert(
            "Editor's Name is not correct, Please check editor's name. \ror\rThe editor was not initialized, Please check the location of api call");
        RAONKEDITOR.ShowDestroyAlert = !0;
        return null
      }
      return a
    }, _setEditor: function (a) {
      a = RAONKEDITOR.util._getEditor(a);
      if (void 0 == a || null == a) {
        return !1;
      }
      try {
        "function" === typeof a._FRAMEWIN.setCurrentEditor &&
        a._FRAMEWIN.setCurrentEditor(a)
      } catch (d) {
        RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(d)
      }
      return a
    }, getValueByMultiMode: function () {
      switch (G_CURRKEDITOR._config.changeMultiValueMode) {
        case "doctype":
          return RAONKEDITOR.getHtmlValueExWithDocType();
        case "htmlEx":
          return RAONKEDITOR.getHtmlValueEx();
        case "html":
          return RAONKEDITOR.getHtmlValue();
        case "bodyEx":
          return RAONKEDITOR.getBodyValueEx();
        case "body":
          return RAONKEDITOR.getBodyValue()
      }
    }, setValueByMultiMode: function (a) {
      switch (G_CURRKEDITOR._config.changeMultiValueMode) {
        case "doctype":
          return RAONKEDITOR.setHtmlValueExWithDocType(a);
        case "htmlEx":
          return RAONKEDITOR.setHtmlValueEx(a);
        case "html":
          return RAONKEDITOR.setHtmlValue(a);
        case "bodyEx":
          return RAONKEDITOR.setBodyValueEx(a);
        case "body":
          return RAONKEDITOR.setBodyValue(a)
      }
    }, removeHtmlLangAttrDuplication: function (a) {
      var d = a;
      try {
        var c = a.match(/<html ([^>]+)>/i);
        if (c) {
          var b = c[0],
              e = /( lang+)=["']?((?:.(?!["']?\s+(?:\S+)=|[>"']))+.)["']?/i,
              f = b.match(RegExp(
                  "( lang+)=[\"']?((?:.(?![\"']?\\s+(?:\\S+)=|[>\"']))+.)[\"']?",
                  "gi")).length;
          if (1 < f) {
            for (var k = 1; k < f; k++) {
              b = b.replace(e, "");
            }
            a = a.replace(c[0], b)
          }
          d = a
        }
      } catch (h) {
        RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(h)
      }
      return d
    }, setInLineDefaultStyle: function (a) {
      if ("2" == a._config.setDefaultStyle.value) {
        var d = ["span", "font"], c = d.length, b = function (a, c) {
          if ("" == a.style.fontFamily) {
            try {
              a.style.fontFamily = KEDITORTOP.RAONKEDITOR.util.getStyle(a,
                  "fontFamily")
            } catch (b) {
              RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(b)
            }
          }
          if ("" == a.style.fontSize) {
            for (var e = !1, d = 1; 5 >= d; d++) {
              if (null
                  != G_CURRKEDITOR._FRAMEWIN.GetParentbyTagName(a, "h" +
                      d)) {
                e = !0;
                break
              }
            }
            if (0 == e) {
              if ("font" == a.tagName.toLowerCase()) {
                if ("" == a.size) {
                  d = RAONKEDITOR.util.getStyle(a, "fontSize");
                  try {
                    isNaN(d) ? a.style.fontSize = d : a.size = d
                  } catch (f) {
                    RAONKEDITOR && RAONKEDITOR.logMode && console
                    && console.log(
                        f)
                  }
                }
                if ("" == a.face) {
                  try {
                    a.face = RAONKEDITOR.util.getStyle(a, "fontFamily")
                  } catch (k) {
                    RAONKEDITOR && RAONKEDITOR.logMode && console
                    && console.log(k)
                  }
                }
              } else {
                try {
                  a.style.fontSize = RAONKEDITOR.util.getStyle(a, "fontSize")
                } catch (t) {
                  RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(
                      t)
                }
              }
            }
          }
          if ("" ==
              a.style.lineHeight && "span" != a.tagName.toLowerCase()) {
            if ("2"
                == c._config.setDefaultStyle.line_height_mode) {
              d = "";
              try {
                d = RAONKEDITOR.util.getStyle(a, "lineHeight")
              } catch (v) {
                RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(v)
              }
              var e = -1 < c._config.defaultLineHeight.indexOf("px") ? !0 : !1,
                  g = -1 < d.indexOf("px") ? !0 : !1;
              if (0 == KEDITORTOP.RAONKEDITOR.browser.ie && 1 == g && 0 == e) {
                g = a.style.fontSize;
                if ("" == g) {
                  try {
                    g = RAONKEDITOR.util.getStyle(a, "fontSize")
                  } catch (z) {
                    RAONKEDITOR && RAONKEDITOR.logMode && console
                    && console.log(z)
                  }
                }
                if ("" !=
                    g) {
                  var e = -1 < g.indexOf("pt") ? !0 : !1,
                      A = -1 < g.indexOf("px") ? !0 : !1;
                  if (e || A) {
                    g = parseFloat(g), e && (g *= 4 / 3), e = -1
                    < c._config.defaultLineHeight.indexOf("%") ? !0
                        : !1, d = parseFloat(d) / g, d = Math.round(
                        10 * d), d = 1
                        * d / 10, e && (d = 100 * d + "%")
                  }
                }
              }
              "" != d && (a.style.lineHeight = d)
            } else {
              a.style.lineHeight = c._setting.line_height && ""
              != c._setting.line_height ? c._setting.line_height
                  : c._config.defaultLineHeight;
            }
          }
          0 != a.tagName.toLowerCase().indexOf("h") && "span"
          != a.tagName.toLowerCase() && ("" == a.style.marginTop
          && (a.style.marginTop = c._config.defaultFontMarginTop),
          "" == a.style.marginBottom
          && (a.style.marginBottom = c._config.defaultFontMarginBottom));
          e = c._config.setDefaultUserStyle.length;
          for (d = 0; d < e; d++) {
            if (""
                == a.style[c._config.setDefaultUserStyle[d]]) {
              try {
                a.style[c._config.setDefaultUserStyle[d]] = RAONKEDITOR.util.getStyle(
                    a, c._config.setDefaultUserStyle[d])
              } catch (w) {
                RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(w)
              }
            }
          }
        };
        if (document.createTreeWalker) {
          (function (c) {
            var e;
            for (c = document.createTreeWalker(c, NodeFilter.SHOW_TEXT, null,
                !1);
                e = c.nextNode();) {
              var f = e.nodeValue,
                  f = f.replace(/\n/g, ""), f = f.replace(/\t/g, "");
              "" != f && (e = e.parentNode) && e.tagName
              && (f = e.tagName.toLowerCase(), -1 < ("," + d.join(",")
                  + ",").indexOf("," + f + ",") && b(e, a))
            }
          })(a._BODY);
        } else {
          for (var e = 0; e < c;
              e++) {
            for (var f = a._DOC.getElementsByTagName(d[e]), k = f.length,
                k = k - 1; 0 <= k; k--) {
              b(f[k], a);
            }
          }
        }
        d = "li p h1 h2 h3 h4 h5 div".split(" ");
        c = d.length;
        for (e = 0; e < c; e++) {
          for (f = a._DOC.getElementsByTagName(
              d[e]), k = f.length, --k; 0 <= k; k--) {
            b(f[k], a)
          }
        }
      }
    }, postimageToServer: function (a, d, c) {
      var b = a._DOC, e = a._config;
      if ("1" == e.useKManager &&
          "0" == e.mimeUse) {
        for (var f = a._FRAMEWIN, k = [], h = "", l = f.getImagesInfoInHtml(b),
            n = l.length, p = [], b = 0; b < n; b++) {
          var m = l[b], q = "";
          if ("img" == m.tagName.toLowerCase()) {
            if (q = m.src, !(-1 < q.toLowerCase().indexOf("file:///none"))) {
              k.push(q);
              var r = q;
              try {
                -1 != r.indexOf(RAONKSolution.managerFinalUrl)
                && (r = decodeURIComponent(r), r = f.convertImageAgentSrc(r,
                    !1), q = r = decodeURIComponent(r))
              } catch (t) {
                RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(t)
              }
              if (0 == q.indexOf("file:///")) {
                q = q.replace("file:///",
                    ""), r = RAONKEDITOR.util.makeGuid(),
                    m.tempCid = "cid:" + r, h += "cid:" + r
                    + RAONKSolution.Agent.formfeed + q
                    + RAONKSolution.Agent.formfeed + "0"
                    + RAONKSolution.Agent.vertical;
              } else if ("1"
                  == e.replaceOutsideImage.use && (-1 < q.toLowerCase().indexOf(
                      "http:") || -1 < q.toLowerCase().indexOf("https:"))) {
                var r = q.replace("http://", "").replace("https://", "").split(
                        "/")[0], v = !0,
                    g = a._config.replaceOutsideImage.exceptDomain,
                    z = g.length,
                    A = a._config.replaceOutsideImage.targetDomain,
                    w = A.length;
                if (0 < w) {
                  for (var v = !1, u = 0; u < w; u++) {
                    if (-1 < r.indexOf(A[u])) {
                      v = !0;
                      break
                    }
                  }
                } else if (0 <
                    z) {
                  for (v = !0, u = 0; u < z; u++) {
                    if (-1 < r.indexOf(
                        g[u])) {
                      v = !1;
                      break
                    }
                  }
                }
                v && (k.push(
                    q), r = RAONKEDITOR.util.makeGuid(), m.tempCid = "cid:"
                    + r, h += "cid:" + r + RAONKSolution.Agent.formfeed + q
                    + RAONKSolution.Agent.formfeed + "0"
                    + RAONKSolution.Agent.vertical)
              }
            }
          } else if (q = m.style.backgroundImage, "none" == q && (q = ""), ""
          == q && m.getAttribute("background") && (q = m.getAttribute(
              "background")), q = RAONKEDITOR.util.getUrlInBackgroundStyle(
              q), -1 < q.toLowerCase().indexOf("file:///none") && (q = ""), ""
          != q && "none" != q.toLowerCase()) {
            if (q = decodeURIComponent(q),
                q = f.convertImageAgentSrc(q, !1), q = decodeURIComponent(q), 0
            == q.indexOf("file:///")) {
              k.push(q), q = q.replace("file:///",
                  ""), r = RAONKEDITOR.util.makeGuid(), m.tempCid = "url(cid:"
                  + r
                  + ")", h += "cid:" + r + RAONKSolution.Agent.formfeed + q
                  + RAONKSolution.Agent.formfeed + "0"
                  + RAONKSolution.Agent.vertical;
            } else if ("1"
                == e.replaceOutsideImage.use && (-1 < q.toLowerCase().indexOf(
                    "http:") || -1 < q.toLowerCase().indexOf("https:"))) {
              r = q.replace("http://", "").replace("https://", "").split(
                  "/")[0];
              v = !1;
              g = a._config.replaceOutsideImage.exceptDomain;
              z = g.length;
              if (0 == z) {
                v = !1;
              } else {
                for (u = 0; u < z; u++) {
                  if (-1 < r.indexOf(
                      g[u])) {
                    v = !0;
                    break
                  }
                }
              }
              v || (k.push(
                  q), r = RAONKEDITOR.util.makeGuid(), m.tempCid = "url(cid:"
                  + r
                  + ")", h += "cid:" + r + RAONKSolution.Agent.formfeed + q
                  + RAONKSolution.Agent.formfeed + "0"
                  + RAONKSolution.Agent.vertical)
            }
          }
        }
        b = [["kcmd", "KC30"]];
        b.push(["k00", {
          browser: RAONKEDITOR.UserAgent.browser.name.toLowerCase(),
          useragent: encodeURIComponent(navigator.userAgent)
        }]);
        b.push(["k04", encodeURIComponent(e.handlerUrl)]);
        b.push(["k05", e.security.keyValue]);
        b.push(["k06",
          "EDITOR"]);
        b.push(["k14", "K Editor"]);
        b.push(["k15", 1]);
        b.push(["k16", e.managerLang]);
        b.push(["k19", e.saveFileNameRule]);
        b.push(["k20", e.saveFileNameRuleEx]);
        b.push(["k21", e.saveFolderNameRule]);
        b.push(["k41", RAONKEDITOR.util.parseIntOr0(e.security.encryptParam)]);
        k = [];
        m = f.G_FormData.length;
        for (q = 0; q < m; q++) {
          r = {
            form: encodeURIComponent(
                f.G_FormData[q].form_name + "=" + f.G_FormData[q].form_value)
          }, k.push(r);
        }
        b.push(["k70", k]);
        b.push(["k71", f.getHttpHeaderAgentData(a)]);
        h = h.substring(0, h.length - 1);
        b.push(["kp1",
          encodeURIComponent(h)]);
        b.push(["kp2", e.fileFieldID]);
        e = f.setManagerParam("{}", b);
        e = RAONKSolution.Agent.makeEncryptManagerParam(e);
        f.sendMessageToAgent(e, function (c) {
          var b = KEDITORTOP.RAONKSolution.Agent.parseRtn(c);
          c = b.code;
          b = b.valueArr;
          if (1E3 == c || 7777 == c) {
            c = [];
            for (var e = 0; e < b.length; e++) {
              var g = b[e].split(RAONKSolution.Agent.formfeed), h = "";
              if ((h = "1" == g[1] ? g[2] : "[FAIL]" + g[2]) && "" != h) {
                var h = h.replace(/\r\n/g, ""), h = h.replace(/\n/g, ""),
                    h = h.replace(/\t/g, ""), h = f.web_url_remove_char(h),
                    k = f.parseImageUrlFromHandler(h);
                try {
                  var t = {strUrl: k.url}, m;
                  "function"
                  === typeof KEDITORTOP.G_CURRKEDITOR._config.event.beforeInsertUrl
                      ? m = KEDITORTOP.G_CURRKEDITOR._config.event.beforeInsertUrl(
                          KEDITORTOP.G_CURRKEDITOR.ID, t) : "function"
                      === typeof KEDITORTOP.KEDITORWIN.RAONKEDITOR_BeforeInsertUrl
                      && (m = KEDITORTOP.KEDITORWIN.RAONKEDITOR_BeforeInsertUrl(
                          KEDITORTOP.G_CURRKEDITOR.ID, t));
                  "string" == typeof m && (k.url = m)
                } catch (r) {
                  RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(
                      r)
                }
              }
              if ("[FAIL]" == h.substring(0, 6)) {
                try {
                  p.push(h)
                } catch (q) {
                  RAONKEDITOR &&
                  RAONKEDITOR.logMode && console && console.log(q)
                }
              }
              c.push(k)
            }
            if (0 < p.length) {
              try {
                if (t = {
                  strType: "imageUpload",
                  strMessage: p[0],
                  arrFileError: p
                }, "function"
                === typeof a._config.event.onError) {
                  a._config.event.onError(a.ID,
                      t);
                } else {
                  "function"
                  === typeof KEDITORTOP.KEDITORWIN.RAONKEDITOR_OnError
                  && KEDITORTOP.KEDITORWIN.RAONKEDITOR_OnError(a.ID, t)
                }
              } catch (z) {
                RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(z)
              }
            }
            for (e = t = 0; e < n; e++) {
              if (m = l[e], k = "", "img"
              == m.tagName.toLowerCase()) {
                if (k = m.tempCid, m.tempCid = "", "string" == typeof k &&
                0 == k.indexOf("cid:") && (k = c[t], h = k.url, 0 != !!h
                && (t++, "[FAIL]" == h.substring(0, 6) ? (m.setAttribute("src",
                        a._config.webPath.image
                        + "dialog/image_xbox.jpg"), m.setAttribute("alt",
                        h.substring(6, h.length).replace(/"/g, "'")))
                    : m.src = h, m.getAttribute("border") && ""
                != m.getAttribute(
                    "border") && 0 != m.getAttribute("border")
                && (m.style.border = m.getAttribute("border")
                    + "px solid currentColor"), k.imgAttrInfoArr && 1
                < k.imgAttrInfoArr.length))) {
                  for (h = k.imgAttrInfoArr.length, b = 0;
                      b < h; b++) {
                    m.setAttribute(k.imgAttrInfoArr[b].name,
                        k.imgAttrInfoArr[b].value)
                  }
                }
              } else {
                k = m.tempCid;
                m.tempCid = "";
                if ("string" != typeof k || ""
                    == k) {
                  k = m.style.backgroundImage, "" == k && m.getAttribute(
                      "background") && (k = m.getAttribute("background"));
                }
                k = RAONKEDITOR.util.getUrlInBackgroundStyle(k);
                0 == k.indexOf("cid:") && (k = c[t], h = k.url, t++, "" != h
                && (m.style.backgroundImage = "url(" + h
                    + ")", m.removeAttribute(
                    "background")))
              }
            }
          }
          d()
        }, null, c.async)
      } else {
        if ("upload"
            == G_CURRKEDITOR._config.uploadMethod) {
          for (c = b.body.getElementsByTagName(
              "img"), e = c.length, f = G_CURRKEDITOR._FRAMEWIN, b =
              0; b < e; b++) {
            if (c[b].getAttribute("raon_chart")
                || c[b].getAttribute("raon_raonkmatheditor")) {
              h = c[b].src, "data:"
              == h.substring(0, 5) && (h = h.split(","), 2 == h.length
              && (k = f.getExtFromImageDataSrc(h[0]), f.postBase64ImageToServer(
                  h[1],
                  k, c[b], !1)));
            }
          }
        }
        d()
      }
    }, setBodyBackground: function (a) {
      a._PageProp.bshowgrid && 1 == a._PageProp.bshowgrid || "1"
      == a._config.horizontalLine.use && -1
      < G_CURRKEDITOR._FRAMEWIN._iframeDoc.body.style.backgroundImage.indexOf(
          a._config.horizontalLine.url) || (""
      != G_CURRKEDITOR._FRAMEWIN._iframeDoc.body.style.backgroundImage ?
          a._PageProp.bodyimage = G_CURRKEDITOR._FRAMEWIN._iframeDoc.body.style.backgroundImage
          : G_CURRKEDITOR._FRAMEWIN._iframeDoc.body.getAttribute("background")
          && (a._PageProp.bodyimage = G_CURRKEDITOR._FRAMEWIN._iframeDoc.body.getAttribute(
              "background").replace(/\\/gi, "/")), ""
      != G_CURRKEDITOR._FRAMEWIN._iframeDoc.body.style.backgroundColor
      && (a._PageProp.bodycolor = G_CURRKEDITOR._FRAMEWIN._iframeDoc.body.style.backgroundColor), ""
      != G_CURRKEDITOR._FRAMEWIN._iframeDoc.body.style.backgroundAttachment
      && (a._PageProp.bodyattachment =
          G_CURRKEDITOR._FRAMEWIN._iframeDoc.body.style.backgroundAttachment), ""
      != G_CURRKEDITOR._FRAMEWIN._iframeDoc.body.style.backgroundRepeat
      && (a._PageProp.bodyrepeat = G_CURRKEDITOR._FRAMEWIN._iframeDoc.body.style.backgroundRepeat))
    }, checkServerLicense: function (a) {
      var d = RAONKEDITOR.util.makeEncryptParamOld(
          "ED" + a._config.unitAttributeDelimiter + a._FRAMEWIN.___
          + a._config.unitAttributeDelimiter + a._config.productKey);
      try {
        _S = "https:" != location.protocol ? a._FRAMEWIN.S1.toString()
            : a._FRAMEWIN.S2.toString();
        _S = _S.replace(/,/gi,
            "");
        _S = _S + "?t=" + RAONKEDITOR.util.getTimeStamp();
        var c = document.createElement("div"),
            b = RAONKEDITOR.util.getDefaultIframeSrc();
        c.innerHTML = '<iframe name="initCheckframeEditor" id="initCheckframeEditor" style="display:none;" src="'
            + b + '" title="RAON K Editor"></iframe>';
        c.style.display = "none";
        document.body.appendChild(c);
        RAONKEDITOR.util.postFormData(document, _S, "initCheckframeEditor",
            [["p", d]]);
        RAONKEDITOR.util.addEvent(c.firstChild, "load", function () {
          c.firstChild.contentWindow.postMessage("check", "*")
        });
        if (window.postMessage) {
          var e = function (b) {
            0 == _S.indexOf(b.origin) && (b = RAONKEDITOR.util.trim(b.data), "1"
            == b || "2" == b ? alert(
                    RAONKEDITOR.util.makeDecryptReponseMessage(a._FRAMEWIN.M1))
                : "3" == b ? alert(
                        RAONKEDITOR.util.makeDecryptReponseMessage(a._FRAMEWIN.M2))
                    : "4" == b && alert(
                    RAONKEDITOR.util.makeDecryptReponseMessage(
                        a._FRAMEWIN.M3)), document.body.removeChild(
                c), RAONKEDITOR.util.removeEvent(window, "message", e))
          };
          RAONKEDITOR.util.addEvent(window, "message", e)
        }
      } catch (f) {
        RAONKEDITOR && RAONKEDITOR.logMode && console &&
        console.log(f)
      }
    }, checkForOverlap: function (a, d) {
      var c = a.getBoundingClientRect(), b = d.getBoundingClientRect(),
          e = c.left <= b.left;
      return (e ? c : b).right > (e ? b : c).left ? (e = c.top <= b.top, (e ? c
          : b).bottom > (e ? b : c).top) : !1
    }, leadingZeros: function (a, d) {
      var c = "";
      a = a.toString();
      if (a.length < d) {
        for (i = 0; i < d - a.length; i++) {
          c += "0";
        }
      }
      return c + a
    }, removeDuplicatesArray: function (a) {
      if (!a) {
        return null;
      }
      for (var d = {}, c = [], b = 0; b < a.length; b++) {
        a[b] in d || (c.push(
            a[b]), d[a[b]] = !0);
      }
      return c
    }, jsonToString: function (a) {
      return KEDITORTOP.G_CURRKEDITOR._FRAMEWIN.JSON.stringify(a)
    },
    stringToJson: function (a) {
      return KEDITORTOP.G_CURRKEDITOR._FRAMEWIN.JSON.parse(a)
    }, saveJsonToLocalStorage: function (a, d) {
      var c = !0, b = RAONKEDITOR.util.jsonToString(d);
      try {
        window.localStorage.setItem(a, b)
      } catch (e) {
        c = !1
      }
      return c
    }, loadJsonFromLocalStorage: function (a) {
      a = window.localStorage[a];
      var d = null;
      a && (d = RAONKEDITOR.util.stringToJson(a));
      return d
    }, makeGuidTagName: function (a) {
      var d = 0, c = (new Date).getTime().toString(32), b;
      if ("undefined" != typeof crypto && "undefined"
          != typeof crypto.randomUUID) {
        c += crypto.randomUUID().replace(/-/g,
            "").substring(0, 20);
      } else {
        for (b = 0; 5 > b; b++) {
          c += Math.floor(
              65535 * Math.random()).toString(32);
        }
      }
      return (a || "o_") + c + (d++).toString(32)
    }, makeGuid: function (a) {
      var d = "";
      "undefined" != typeof crypto && "undefined" != typeof crypto.randomUUID
          ? d = crypto.randomUUID().replace(/-/g, "") : (d = function () {
            return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
          }, d = (d() + d() + d() + d() + d() + d() + d() + d()).toLowerCase());
      void 0 != a && (d = a + "-" + d);
      return d
    }, trim: function (a) {
      return a.trim ? a.trim() : a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
    },
    initHandlerCheck: function (a, d, c) {
      (a = RAONKEDITOR.util.parseDataFromServer(a)) && 0 == a.indexOf("_")
      && (a = RAONKEDITOR.util.makeDecryptReponseMessage(a.substring(1)));
      if (a && -1 < a.toLowerCase().indexOf("hello raonk")) {
        -1 < a.indexOf("-")
        && (RAONKEDITOR._$0S = RAONKEDITOR.util.base64_encode(
            a.split("-")[1]));
      } else if (a && 0 < a.length) {
        if (-1 < a.indexOf(
            d.unitDelimiter)) {
          d = a.split(
              d.unitDelimiter), RAONKEDITOR._$0S = RAONKEDITOR.util.base64_encode(
              d[1]), RAONKEDITOR._0_ = d[2], alert(d[0]);
        } else if (a && 0
            == a.indexOf("[FAIL]")) {
          try {
            var b =
                RAONKEDITOR.util.makeDecryptReponseMessage(a.substring(6));
            c = {strType: "handlerCheck", strMessage: b};
            if ("function" === typeof d.event.onError) {
              d.event.onError(d.editor_id,
                  c);
            } else {
              "function" === typeof RAONKEDITOR_OnError
                  ? RAONKEDITOR_OnError(d.editor_id, c) : alert(
                      "Error Type : handlerCheck\nError Message : " + b)
            }
          } catch (e) {
            RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(e)
          }
        } else {
          alert(a);
        }
      } else {
        b = "", c = 0 < c.InitXml.length ? c.InitXml
            : "raonkeditor.config.xml", "ko-kr" == d.lang
            ? (b = "Editor\uc758 \uc124\uc815\uac12\uc774 \uc62c\ubc14\ub974\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uc544\ub798 URL \uc811\uadfc\uc774 \uc720\ud6a8\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.\n\n"
                +
                (d.handlerUrl + "\n\n"), b += c
                + " \ud30c\uc77c\uc758 uploader_setting \uc139\uc158\uc758 <develop_langage>\uc640 <handler_url> \uc124\uc815\uac12\uc744 \ud655\uc778\ud558\uc138\uc694.")
            : (b = "Editor's setting is not correct. Access the following URL is not valid.\n\n"
                + (d.handlerUrl
                    + "\n\n"), b += 'Please check the settings, <handler_url> and <develop_langage> in "uploader_setting" section in the "'
                + c + '."'), alert(b)
      }
    }, parseDataFromServer: function (a) {
      if (a) {
        var d = a.toLowerCase().indexOf("<raonk>");
        -1 < d && (a = a.substring(d +
            7));
        d = a.toLowerCase().indexOf("</raonk>");
        -1 < d && (a = a.substring(0, d))
      }
      return a
    }, isEmptyContents: function (a) {
      var d = !1, c = "", b = "";
      if (a) {
        if (3 == a.nodeType) {
          c = a.textContent, b = "";
        } else if (1
            == a.nodeType) {
          if (c = a.innerText, b = a.innerHTML, -1
          < ",TABLE,IMG,A,IFRAME,HR,VIDEO,OBJECT,EMBED,INPUT,BUTTON,FIGURE,TEXTAREA,BLOCKQUOTE,".indexOf(
              "," + a.nodeName + ",")) {
            return d
          }
        } else {
          "string" === typeof a && (b = c = a);
        }
        c = c.replace(unescape("%u200B"), "");
        c = c.replace(unescape("%uFEFF"), "");
        b = b.replace(unescape("%u200B"), "");
        b = b.replace(unescape("%uFEFF"),
            "");
        "" == c && 0
        == /<table|<img|<a|<iframe|<hr|<video|<object|<embed/ig.test(b)
        && (d = !0)
      }
      return d
    }, replaceHyFont: function (a, d) {
      var c = a;
      try {
        if (RegExp("<.*?font-family:\\s*HY\\S+?[\\s\\S]*?>", "gi").test(
            c.replace(/[\n\r]/gm, ""))) {
          var b = KEDITORTOP.RAONKEDITOR.util.splitBodyInnerString(c),
              c = b.body;
          try {
            c = d._FRAMEWIN.applyFakeImgSrc(c)
          } catch (e) {
            RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(e)
          }
          var f = d._DOC.createElement("div");
          f.innerHTML = c;
          for (var k = f.getElementsByTagName("*"), h = k.length, l = 0; l < h;
              l++) {
            var n =
                k[l];
            if (1 == n.nodeType) {
              var p = n.style.fontFamily;
              "FONT" == n.tagName && "" == p && (p = n.face);
              if ("" != p && -1 < p.indexOf("HY")) {
                for (var m = p.split(","), q = m.length - 1; 0 <= q; q--) {
                  var r = m[q], r = RAONKEDITOR.util.trim(r),
                      r = r.replace(/['"]/g, "");
                  if (-1 < r.indexOf("HY")) {
                    var t = "";
                    d._config.ie_BugFixed_Hyfont_Replace_Font.all
                        ? t = d._config.ie_BugFixed_Hyfont_Replace_Font.all
                        : d._config.ie_BugFixed_Hyfont_Replace_Font[r]
                        && (t = d._config.ie_BugFixed_Hyfont_Replace_Font[r]);
                    "" == t ? m.splice(q, 1) : (-1 < t.indexOf(" ") && (t = "'"
                        + t + "'"), m[q] =
                        t)
                  }
                }
                n.style.fontFamily = m.join(",")
              }
            }
          }
          c = b.head + f.innerHTML + b.tail;
          try {
            c = d._FRAMEWIN.applyFakeImgSrc(c, !0)
          } catch (v) {
            RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(v)
          }
        }
      } catch (g) {
        c = a
      }
      return c
    }, dataURItoBlob: function (a) {
      var d = atob(a.split(",")[1]);
      a = a.split(",")[0].split(":")[1].split(";")[0];
      for (var c = new ArrayBuffer(d.length), b = new Uint8Array(c), e = 0;
          e < d.length; e++) {
        b[e] = d.charCodeAt(e);
      }
      d = new DataView(c);
      return new Blob([d.buffer], {type: a})
    }, getDomainInUrl: function (a) {
      var d = {
        fullDomain: "", domain: "",
        port: ""
      };
      try {
        var c = a.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
        d.fullDomain = c && c[1] ? c && c[1] : "";
        if ("" != d.fullDomain) {
          var b = d.fullDomain.split(":");
          if (b[0] && "" != b[0]) {
            var e = b[0].split("."), f = e.length;
            if (1 == f) {
              d.domain = e[0];
            } else {
              for (a = 1; a < f; a++) {
                d.domain += e[a] + ".";
              }
              d.domain = d.domain.substring(0, d.domain.length - 1)
            }
          }
          b[1] && (d.port = b[1])
        }
      } catch (k) {
        RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(k)
      }
      return d
    }, getDocType: function (a) {
      var d = "";
      if (a && a.doctype) {
        try {
          var c = a.doctype, d = "<!DOCTYPE " + c.name +
              (c.publicId ? ' PUBLIC "' + c.publicId + '"' : "") + (!c.publicId
              && c.systemId ? " SYSTEM" : "") + (c.systemId ? ' "' + c.systemId
                  + '"' : "") + ">"
        } catch (b) {
          RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(b)
        }
      }
      return d
    }, hexToBytes: function (a) {
      for (var d = [], c = a.length / 2, b = 0, b = 0; b < c; b++) {
        d.push(
            parseInt(a.substr(2 * b, 2), 16));
      }
      return d
    }, bytesToBase64: function (a) {
      for (var d = "", c = a.length, b = 0; b < c; b += 3) {
        var e = a.slice(b, b + 3), f = e.length, k = [], h = void 0;
        if (3 > f) {
          for (h = f; 3 > h; h++) {
            e[h] = 0;
          }
        }
        k[0] = (252 & e[0]) >> 2;
        k[1] = (3 & e[0]) << 4 | e[1] >> 4;
        k[2] = (15 &
            e[1]) << 2 | (192 & e[2]) >> 6;
        k[3] = 63 & e[2];
        for (h = 0; 4 > h; h++) {
          d += h <= f
              ? "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(
                  k[h]) : "="
        }
      }
      return d
    }, escapeHtml: function (a) {
      var d = null;
      try {
        d = KEDITORTOP.G_CURRKEDITOR._FRAMEWIN.document.createElement("div")
      } catch (c) {
        d = document.createElement("div")
      }
      void 0 != d.innerText ? d.innerText = a : d.textContent = a;
      return d.innerHTML
    }, setProtocolBaseDomainURL: function (a) {
      var d = "", d = "/" == a.substring(0, 1) ? location.protocol + "//"
          + location.host : 4 < a.length && "http" == a.substring(0,
          4).toLowerCase() ? "" : RAONKEDITOR.rootPath;
      return d + a
    }, getWordBreakStyle: function (a) {
      var d = "normal";
      a = a.wordBreakType;
      "1" == a ? d = "break-all" : "2" == a && (d = "keep-all");
      return d
    }, getWordWrapStyle: function (a) {
      var d = "normal", c = a.wordWrapType;
      if ("1" == a.autoBodyFit || "1" == c) {
        d = "break-word";
      }
      return d
    }, adjustBorderStyle: function (a, d) {
      try {
        var c = function (a) {
          for (var c = ["borderTop", "borderRight", "borderBottom",
            "borderLeft"], b = c.length, e = 0; e < b; e++) {
            var d = !1, f = a.style[c[e]].toLowerCase();
            "" != f && (-1 < f.indexOf("currentcolor") ?
                d = !0 : 2 == f.split(" ").length && "currentcolor"
                == a.style[c[e] + "Color"].toLowerCase() && (d = !0));
            if (d) {
              var k = f = d = "",
                  d = RAONKEDITOR.util.getStyle(a, c[e] + "Color"),
                  f = RAONKEDITOR.util.getStyle(a, c[e] + "Style"),
                  k = RAONKEDITOR.util.getStyle(a, c[e] + "Width");
              a.style[c[e]] = f + " " + k + " " + d
            }
          }
        };
        if (a) {
          c(a);
        } else {
          for (var b = d._DOC.getElementsByTagName("*"),
              e = b.length, f = 0; f < e; f++) {
            c(b[f])
          }
        }
      } catch (k) {
        RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(k)
      }
    }, getTimeStamp: function () {
      var a = "", a = this.makeGuid();
      return a = a.replace(/-/g,
          "")
    }, arrayIndexOf: function (a, d) {
      if (a.indexOf) {
        return a.indexOf(d);
      }
      for (var c = -1, b = a.length, e = 0; e < b; e++) {
        if (a[e] == d) {
          c = e;
          break
        }
      }
      return c
    }, parseSetApiParam: function (a) {
      var d = {html: ""};
      switch (typeof a) {
        case "string":
          d.html = a;
          break;
        case "object":
          d = a
      }
      return d
    }, overrideFn: function (a) {
      try {
        top.document.location.hostname != window.document.location.hostname
        && (a.alert = function (a) {
          top.alert(a)
        }, a.confirm = function (a) {
          return top.confirm(a)
        })
      } catch (d) {
        RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(d)
      }
    }, getOriginSrc: function (a) {
      var d =
          "";
      RAONKEDITOR.browser.ie ? d = a.src : null != / src="(.*?)"/i.exec(
          a.outerHTML) && (d = RegExp.$1);
      return d
    }, removeStyleAttribute: function (a, d) {
      null != a && (a.style.removeProperty ? a.style.removeProperty(d)
          : a.style.removeAttribute(d))
    }, getClientRect: function (a) {
      var d = {left: 0, top: 0, right: 0, bottom: 0};
      try {
        d = a.getBoundingClientRect()
      } catch (c) {
        RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(c)
      }
      return d
    }, getUrlInBackgroundStyle: function (a) {
      -1 < a.indexOf('url("') && (a = a.replace('url("', "").replace('")', ""));
      -1 < a.indexOf("url('") &&
      (a = a.replace("url('", "").replace("')", ""));
      -1 < a.indexOf("url(") && (a = a.replace("url(", "").replace(")", ""));
      return a
    }, cmToMm: function (a) {
      return 10 * a
    }, mmToPx: function (a) {
      return 3.7795275591 * a
    }, convertStringtoBoolean: function (a) {
      try {
        switch ((a + "").toLowerCase().trim()) {
          case "yes":
          case "true":
          case "1":
            return !0;
          case "no":
          case "false":
          case "0":
          case null:
            return !1;
          default:
            return Boolean(a)
        }
      } catch (d) {
        RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(d)
      }
    }, stringTypeIsEmpty: function (a) {
      return "string" == typeof a ?
          "" !== a ? !1 : !0 : !0
    }, getEditSpacePx: function (a) {
      var d = 0, c = 0;
      "1" == a._config.editorborder && (d = 2);
      "1" == a._config.defaultBodySpace.use
      && (c = a._config.defaultBodySpace.value.split(","), c = 4 == c.length
          ? KEDITORTOP.RAONKEDITOR.util.parseIntOr0(c[1])
          + KEDITORTOP.RAONKEDITOR.util.parseIntOr0(c[3]) : 2
          * KEDITORTOP.RAONKEDITOR.util.parseIntOr0(c[0]));
      return KEDITORTOP.RAONKEDITOR.util.parseIntOr0(a._FRAMEWIN.innerWidth) - d
          - c
    }, compareVersion: function (a, d) {
      for (var c = 0, b = a.split("."), e = d.split("."), f = b.length, k = 0;
          k < f; k++) {
        var h =
            parseInt(b[k], 10), l = parseInt(e[k], 10);
        if (h != l) {
          c = h > l ? 1 : -1;
          break
        }
      }
      return c
    }, getMimeFilter: function (a) {
      var d = "";
      if ("string" == typeof a) {
        d = a.split(",").join(",."), "" != d && (d = "."
            + d);
      } else if ("object" == typeof a) {
        for (var c = 0; c < a.length;
            c++) {
          d = c == a.length - 1 ? "." + d + a[c] : d + (a[c] + ",.");
        }
      }
      return d
    }, replaceQuotInStyle: function (a) {
      var d = a;
      try {
        d = d.replace(/(<\w{1,} .*?style=)"(.*?)"/gi, function (a, c, d) {
          var k = !1;
          -1 < d.indexOf("&quot;") && (k = !0);
          k && (d = d.replace(/&quot;/g, '"'), d = d.replace(/'/g, '"'), a = c
              + "'" + d + "'");
          return a
        })
      } catch (c) {
        d =
            a
      }
      return d
    }, setFullUrl: function (a) {
      var d = "";
      "/" == a.substring(0, 1) ? d = location.protocol + "//" + location.host
          : 4 < a.length && ("http" == a.substring(0, 4).toLowerCase() || "file"
          == a.substring(0, 4).toLowerCase()) && (d = "");
      return d + a
    }, addQueryStringToUrl: function (a, d, c) {
      var b = -1 < a.indexOf("?") ? "&" : "?";
      return a + b + d + "=" + c
    }, setUrlForDocumentDomain: function (a, d) {
      var c = a, b = d.domain;
      d.location.hostname != b && (c = RAONKEDITOR.util.addQueryStringToUrl(c,
          "d", b));
      return c
    }, makeRV: function (a) {
      var d = [];
      d.push(a.maj.join("").toString());
      d.push(parseInt(a.mi1.join(""), 10) * a.m1);
      d.push(a.mi2);
      d.push(a.l);
      return d.join(".")
    }, getRV: function (a) {
      return RAONKEDITOR.util.base64_decode(a)
    }, makeARV: function (a) {
      var d = [];
      d.push(a.maj.join("").toString());
      d.push(parseInt(a.mi1));
      d.push(parseInt(a.mi2));
      d.push(a.l);
      return d.join(",")
    }, splitBodyInnerString: function (a) {
      var d = "", c = "", b = "";
      if (b = a.match(/<body.*?>/i)) {
        var b = b.index + b[0].length, d = a.substring(0, b),
            e = a.match(/<\/body>/i);
        e && (c = a.substring(e.index));
        b = a.substring(b, e.index)
      } else {
        b = a;
      }
      return {
        head: d,
        body: b, tail: c
      }
    }
  });
  if (!window.RAONKSolution || window.RAONKSolution
      && !window.RAONKSolution.Agent.connectedPort) {
    window.RAONKSolution = {
      Agent: {
        vertical: "\x0B",
        formfeed: "\f",
        backspace: "\b",
        newline: "\n",
        space: " ",
        rtnCode1: "2000",
        parseRtn: function (a, d) {
          var c = {code: 0, valueArr: [], splitCode: ""};
          a = a.trim ? a.trim() : a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
          0 == a.indexOf("7777") && 5 == a.toLowerCase().indexOf("<pre")
          && (a = a.replace(/ <pre/i,
              RAONKSolution.Agent.vertical + "<pre"), a = a.replace(
              RAONKSolution.Agent.vertical + "<pre>",
              RAONKSolution.Agent.vertical), a = a.replace(/<\/pre>$/i, ""));
          var b;
          -1 < a.indexOf(RAONKSolution.Agent.vertical) ? (b = a.split(
                  RAONKSolution.Agent.vertical), c.splitCode = RAONKSolution.Agent.vertical)
              : (b = a.split(
                  RAONKSolution.Agent.space), c.splitCode = RAONKSolution.Agent.space);
          c.code = parseInt(b[0], 10);
          if (7777 == c.code) {
            for (var e = b.length, f = 1; f < e;
                f++) {
              c.valueArr[f - 1] = b[f];
            }
          } else {
            b[1]
                ? (b = RAONKSolution.Agent.decryptManagerParam(
                    b[1]), e = b.split(
                    RAONKSolution.Agent.newline), 2 == e.length
                    ? (b = e[0], e = e[1]) : e = null, "string" ==
                typeof e && d && !0 === d.isPaste
                && (b += e, e = null), c.valueArr = b.split(
                    RAONKSolution.Agent.vertical), ""
                == c.valueArr[c.valueArr.length - 1] && c.valueArr.splice(
                    c.valueArr.length - 1, 1), e && (c.extraValue = e)) : isNaN(
                c.code) && (c.valueArr[0] = a);
          }
          return c
        },
        isLoaded: !1,
        isUpdating: !1,
        isStartInstall: !1,
        isOtherUploadWaiting: !1,
        G_AP: {G_AP29: "w", G_AP22: "a"},
        makeEncryptManagerParam: function (a) {
          var d = null;
          try {
            RAONKEDITOR && RAONKEDITOR.util
            && (d = RAONKEDITOR.util.base64_encode)
          } catch (c) {
            RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(c)
          }
          try {
            null ==
            d && RAONKUPLOAD && RAONKUPLOAD.util
            && (d = RAONKUPLOAD.util.base64_encode)
          } catch (b) {
            RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(b)
          }
          try {
            null == d && RAONKPHOTO && RAONKPHOTO.util
            && (d = RAONKPHOTO.util.base64_encode)
          } catch (e) {
            RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(e)
          }
          a = "R" + d(a);
          a = d(a);
          a = a.replace(/[+]/g, "%2B");
          return a + "\x0B"
        },
        decryptManagerParam: function (a) {
          var d = null;
          try {
            RAONKEDITOR && RAONKEDITOR.util
            && (d = RAONKEDITOR.util.base64_decode)
          } catch (c) {
            RAONKEDITOR && RAONKEDITOR.logMode && console &&
            console.log(c)
          }
          try {
            null == d && RAONKUPLOAD && RAONKUPLOAD.util
            && (d = RAONKUPLOAD.util.base64_decode)
          } catch (b) {
            RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(b)
          }
          try {
            null == d && RAONKPHOTO && RAONKPHOTO.util
            && (d = RAONKPHOTO.util.base64_decode)
          } catch (e) {
            RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(e)
          }
          a = a.replace(/%2B/g, "+");
          a = d(a);
          a = a.substring(1);
          return a = d(a)
        },
        G_AP10: 8,
        G_AP23: "n",
        G_AP20: "z",
        isCheckingPort: !1,
        connectedPort: "",
        sendCount: 0,
        managerFinalUrl: "",
        reset: function () {
          this.isCheckingPort =
              this.isOtherUploadWaiting = this.isStartInstall = this.isUpdating = this.isLoaded = !1;
          this.connectedPort = "";
          this.sendCount = 0;
          this.managerFinalUrl = ""
        }
      }
    };
  }
  RAONKEDITOR._manager || (RAONKEDITOR._manager = {
    createManagerRequest: function (a) {
      var d = null;
      return d = "html4" == (a ? a
          : KEDITORTOP.G_CURRKEDITOR)._config.userRunTimeMode
          ? new XDomainRequest : new XMLHttpRequest
    }, sendDataWidthAjax: function (a) {
      var d = a.req;
      a.errorCallBack && (d.onerror = function () {
        a.errorCallBack(d)
      });
      a.successCallBack && (d.onload = function () {
        a.successCallBack(d.responseText);
        d = null;
        d = void 0
      });
      d.raonPort = a.port;
      d.open("POST", a.url ? a.url : KEDITORTOP.RAONKSolution.managerFinalUrl,
          a.async);
      -1 < a.data.indexOf("{") ? d.send("k02=" + a.data) : d.send(
          "k00=" + a.data)
    }, sendDataWithForm: function (a, d, c, b) {
      void 0 == b && (b = []);
      var e = a.createElement("form");
      e.method = "post";
      e.action = d;
      e.target = c;
      d = b.length;
      for (c = 0; c < d; c++) {
        var f = a.createElement("input");
        f.type = "hidden";
        f.name = b[c][0];
        f.value = b[c][1];
        e.appendChild(f)
      }
      a.body.appendChild(e);
      e.submit();
      a.body.removeChild(e)
    }
  });
  RAONKEDITOR.getEditorByName =
      RAONKEDITOR.GetEditorByName = function (a) {
        var d = null;
        try {
          void 0 == a || "" == a ? d = G_CURRKEDITOR
              : RAONKEDITOR.isLoadedEditorEx(a)
              && (d = RAONKEDITOR.RAONKMULTIPLE["raonk_frame_" + a]), void 0
          == d && (d = null)
        } catch (c) {
          RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(c)
        }
        return d
      };
  RAONKEDITOR.addFormData = RAONKEDITOR.AddFormData = function (a, d, c) {
    try {
      var b = RAONKEDITOR.util._setEditor(c);
      if (b) {
        KEDITORTOP.G_CURRKEDITOR = b;
        var e = KEDITORTOP.G_CURRKEDITOR._FRAMEWIN;
        if (e && a && "" != a && d && "" != d) {
          var f = e.G_FormData, k = f.length;
          c = !0;
          for (b = 0; b < k; b++) {
            if (f[b].form_name.toLowerCase()
                == a.toLowerCase()) {
              f[b].form_value = d;
              c = !1;
              break
            }
          }
          c && e.G_FormData.push({form_name: a, form_value: d})
        }
      }
    } catch (h) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(h)
    }
  };
  RAONKEDITOR.getEditor = RAONKEDITOR.GetEditor = function (a) {
    return RAONKEDITOR.util._getEditor(a)
  };
  RAONKEDITOR.setEditor = RAONKEDITOR.SetEditor = function (a) {
    return RAONKEDITOR.util._setEditor(a)
  };
  RAONKEDITOR.setAccessibility = RAONKEDITOR.SetAccessibility = function (a,
      d) {
    try {
      var c = RAONKEDITOR.util.getEditorByName(d);
      !c || "0" != a && "1" != a && "2" != a || (c._config.accessibility = a
          + "")
    } catch (b) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(b)
    }
  };
  RAONKEDITOR.getAccessibility = RAONKEDITOR.GetAccessibility = function (a) {
    var d = "";
    try {
      var c = RAONKEDITOR.util.getEditorByName(a);
      c && (d = c._config.accessibility)
    } catch (b) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(b)
    }
    return d
  };
  RAONKEDITOR.setVisibility = RAONKEDITOR.SetVisibility = function (a, d) {
    try {
      var c = RAONKEDITOR.util.getEditorByName(d);
      c && (c._config.visibility = 1 ==
      a ? a : !1)
    } catch (b) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(b)
    }
  };
  RAONKEDITOR.getVisibility = RAONKEDITOR.GetVisibility = function (a) {
    var d = "";
    try {
      var c = RAONKEDITOR.util.getEditorByName(a);
      c && (d = c._config.visibility)
    } catch (b) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(b)
    }
    return d
  };
  RAONKEDITOR.show = RAONKEDITOR.Show = function (a) {
    try {
      var d = RAONKEDITOR.util._setEditor(a);
      if (d) {
        if (void 0 == a || "" == a) {
          a = d.ID;
        }
        var c = d._FRAMEWIN,
            b = KEDITORDOC.getElementById("raonk_frame_holder" + a);
        b && (RAONKEDITOR.setVisibility(!0,
            a), b.style.width = d._config.style.width, b.style.height = d._config.style.height, b.style.display = "", c.resizeEditor(
            null, !0), "1" == d._config.ruler.view && c.showRuler(d))
      }
    } catch (e) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(e)
    }
  };
  RAONKEDITOR.hidden = RAONKEDITOR.Hidden = function (a) {
    try {
      var d = RAONKEDITOR.util._setEditor(a);
      if (d) {
        if (void 0 == a || "" == a) {
          a = d.ID;
        }
        var c = d._FRAMEWIN;
        KEDITORDOC.getElementById("keditor_context_iframe" + a)
        && (KEDITORDOC.getElementById(
            "keditor_context_iframe" + a).style.display = "none",
        KEDITORDOC.getElementById("keditor_context_background" + a)
        && (KEDITORDOC.getElementById("keditor_context_background"
            + a).style.display = "none", c.dialogCancel()));
        c.event_dialog_cancel(KEDITORDOC.getElementById("keditor_dialog"));
        c.hideTopMenuAndFocus();
        var b = KEDITORDOC.getElementById("keditor_toolmenu_background" + a);
        b && (c.dialogCancel(), c.G_SUB_DIALOG && (c.isGroupingIcon(
            c.G_USE_EDITOR_ID, "", c.G_SUB_DIALOG)
        && c.hideGroupingBox(), c.G_SUB_DIALOG.style.display = "none"), c.G_CURRENT_IFRAME
        && (c.G_CURRENT_IFRAME.style.display =
            "none"), c.G_CURRENT_IFRAME_HOLDER
        && (c.G_CURRENT_IFRAME_HOLDER.style.display = "none"), b.style.display = "none");
        var e = KEDITORDOC.getElementById("raonk_frame_holder" + a);
        e && (RAONKEDITOR.setVisibility(!1,
            a), e.style.height = "0px", e.style.display = "none", window.focus())
      }
    } catch (f) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(f)
    }
  };
  RAONKEDITOR.setSize = RAONKEDITOR.SetSize = function (a, d, c) {
    try {
      if (1 == RAONKEDITOR.getVisibility(c)) {
        var b = RAONKEDITOR.util._setEditor(c);
        if (b) {
          var e = b._FRAMEWIN;
          if (void 0 == c ||
              "" == c) {
            c = b.ID;
          }
          var f = KEDITORDOC.getElementById("raonk_frame_holder" + c),
              k = KEDITORDOC.getElementById(
                  "raonk_frame_" + c).contentWindow.document.getElementById(
                  "ue_editor_holder_" + c);
          0 < RAONKEDITOR.util.parseIntOr0(a) && (-1 < a.toString().indexOf("%")
          || -1 < a.toString().indexOf("px") ? f.style.width = a
              : f.style.width = a
                  + "px", b._config.style.width = f.style.width);
          0 < RAONKEDITOR.util.parseIntOr0(d) && (-1 < d.toString().indexOf("%")
              ? f.style.height = d
              : (f.style.height = RAONKEDITOR.util.parseIntOr0(d)
                  + "px", a = 0, e.isViewMode(b) ?
                  (a = 2, 7 == RAONKEDITOR.browser.trident || 12
                  <= RAONKEDITOR.browser.ieVersion
                  || !RAONKEDITOR.browser.quirks || (a = 0))
                  : a = b.baseMenuToolbarHeight, "0" == b._config.editorborder
              && (a -= 2), b._defaultHeight = parseInt(d, 10)
                  - a, k.style.height = b._defaultHeight
                  + "px"), b._config.style.height = f.style.height);
          e.G_Ruler && e.G_Ruler.viewRulerStatus && "design" == b._currentMode
          && e.G_Ruler.SetRulerPosition();
          e.groupingIcon();
          e.G_BodyFit.widthFixStatus && (e.setBodyFitStyle(b,
              !0), e.setAutoBodyFit(b));
          try {
            if (b.initSetSize) {
              b.initSetSize = !1;
            } else if (!b.isOccurredResizeEvent) {
              b.isOccurredResizeEvent = !0;
              var h = {objResizedWindow: KEDITORTOP.G_CURRKEDITOR.Frame};
              "function" === typeof b._config.event.resized
                  ? b._config.event.resized(b.ID, h) : "function"
                  === typeof KEDITORWIN.RAONKEDITOR_Resized
                  && KEDITORWIN.RAONKEDITOR_Resized(b.ID, h)
            }
          } catch (l) {
            RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(l)
          }
        }
      }
    } catch (n) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(n)
    }
  };
  RAONKEDITOR.getImages = RAONKEDITOR.GetImages = function (a, d) {
    var c = "";
    try {
      var b =
          RAONKEDITOR.util._setEditor(a);
      if (b) {
        var e = b._FRAMEWIN, f = b.getEditorMode();
        "source" != f && "text" != f || b.setChangeMode("design");
        e.ReplaceImageToRealObject();
        1 != d && e.changeBodyContenteditable(!1);
        e.changeBodyImageProperty(!0);
        for (var k = b._DOC.getElementsByTagName("img"), h = f = "", l = -1,
            n = k.length, p = 0; p < n; p++) {
          f = k[p].getAttribute("src");
          if ("1" == b._config.useKManager) {
            var m = f, m = decodeURIComponent(m),
                m = e.convertImageAgentSrc(m, !1), m = decodeURIComponent(m),
                m = m.replace(/\\/g, "/");
            m != f && (f = m)
          }
          -1 < f.indexOf("data:image") ?
              h = "" : (l = f.lastIndexOf("/"), h = f.substring(l + 1));
          c = "" == c ? f + b._config.unitAttributeDelimiter + h : c
              + b._config.unitDelimiter + f + b._config.unitAttributeDelimiter
              + h
        }
        e.G_BodyFit.noncreationAreaBackgroundStatus && e.setBodyFitStyle(b, !0);
        e.changeBodyImageProperty(!1);
        e.ReplaceRealObjectToImage();
        e.changeBodyContenteditable(!0)
      }
    } catch (q) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(q)
    }
    return c
  };
  RAONKEDITOR.getImagesEx = RAONKEDITOR.GetImagesEx = function (a, d) {
    var c = "";
    try {
      var b = RAONKEDITOR.util._setEditor(a);
      if (b) {
        var e = b._FRAMEWIN, f = b.getEditorMode();
        "source" != f && "text" != f || b.setChangeMode("design");
        e.ReplaceImageToRealObject();
        1 != d && e.changeBodyContenteditable(!1);
        e.changeBodyImageProperty(!0);
        var k = b._DOC.body.outerHTML, h = f = "", l = -1,
            n = RegExp("<img[^>]*src=(.*?)>", "gi"),
            p = k.match(RegExp("<[^>]*url\\((.*?)\\)", "gi")), m = k.match(n);
        if (p) {
          for (var q = p.length, r = 0; r < q; r++) {
            if ((f = p[r].match(
                "url\\((.*?)\\)")[1].replace(/"/gi, "").replace(/'/gi,
                "").replace(
                /&quot;/gi, "")) && "" != f) {
              if ("1" == b._config.useKManager) {
                var t =
                        f, t = decodeURIComponent(t),
                    t = e.convertImageAgentSrc(t, !1),
                    t = decodeURIComponent(t), t = t.replace(/\\/g, "/");
                t != f && (f = t)
              }
              -1 < f.indexOf("data:image") ? h = "" : (l = f.lastIndexOf(
                  "/"), h = f.substring(l + 1));
              c = "" == c ? f + b._config.unitAttributeDelimiter + h : c
                  + b._config.unitDelimiter + f
                  + b._config.unitAttributeDelimiter
                  + h
            }
          }
        }
        if (m) {
          for (var v = m.length, r = 0; r < v; r++) {
            (f = m[r].match(
                "src=\"(.*?)\"|src='(.*?)'")[1].replace(/"/gi, "").replace(
                /'/gi,
                "")) && "" != f && ("1" == b._config.useKManager
            && (t = f, t = decodeURIComponent(t), t = e.convertImageAgentSrc(t,
                !1), t = decodeURIComponent(t), t = t.replace(/\\/g, "/"), t
            != f
            && (f = t)), -1 < f.indexOf("data:image") ? h = ""
                : (l = f.lastIndexOf(
                    "/"), h = f.substring(l + 1)), c = "" == c ? f
                + b._config.unitAttributeDelimiter + h : c
                + b._config.unitDelimiter
                + f + b._config.unitAttributeDelimiter + h);
          }
        }
        e.G_BodyFit.noncreationAreaBackgroundStatus && e.setBodyFitStyle(b, !0);
        e.changeBodyImageProperty(!1);
        e.ReplaceRealObjectToImage();
        e.changeBodyContenteditable(!0)
      }
    } catch (g) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(g)
    }
    return c
  };
  RAONKEDITOR.getContentsUrl =
      RAONKEDITOR.GetContentsUrl = function (a, d) {
        var c = "";
        try {
          var b = RAONKEDITOR.util._setEditor(a);
          if (b) {
            var e = b._FRAMEWIN, f = b.getEditorMode();
            "source" != f && "text" != f || b.setChangeMode("design");
            e.ReplaceImageToRealObject();
            1 != d && e.changeBodyContenteditable(!1);
            e.changeBodyImageProperty(!0);
            var k = b._DOC.body.outerHTML, h = f = "", l = -1,
                n = RegExp("<[^>]*url\\((.*?)\\)", "gi"),
                p = RegExp("<img[^>]*src=(.*?)>", "gi"),
                m = RegExp("<embed[^>]*src=(.*?)>", "gi"),
                q = RegExp("<a[^>]*KEditorInsertFile(.*?)>", "gi");
            regExp5 = RegExp("<video[^>]*src=(.*?)>",
                "gi");
            var r = k.match(n), t = k.match(p), v = k.match(m), g = k.match(q),
                z = k.match(regExp5);
            if (r) {
              for (var A = r.length, w = 0; w < A;
                  w++) {
                if ((f = r[w].match("url\\((.*?)\\)")[1].replace(/"/gi,
                        "").replace(/'/gi, "").replace(/&quot;/gi, "")) && ""
                    != f) {
                  if ("1" == b._config.useKManager) {
                    var u = f, u = decodeURIComponent(u),
                        u = e.convertImageAgentSrc(u, !1),
                        u = decodeURIComponent(u), u = u.replace(/\\/g, "/");
                    u != f && (f = u)
                  }
                  l = f.lastIndexOf("/");
                  h = f.substring(l + 1);
                  c = "" == c ? f + b._config.unitAttributeDelimiter + h : c
                      + b._config.unitDelimiter + f
                      + b._config.unitAttributeDelimiter +
                      h
                }
              }
            }
            if (t) {
              for (var G = t.length, w = 0; w < G; w++) {
                (f = t[w].match(
                    "src=\"(.*?)\"|src='(.*?)'")[1].replace(/"/gi, "").replace(
                    /'/gi, "")) && "" != f && ("1" == b._config.useKManager
                && (u = f, u = decodeURIComponent(
                    u), u = e.convertImageAgentSrc(u,
                    !1), u = decodeURIComponent(u), u = u.replace(/\\/g, "/"), u
                != f && (f = u)), l = f.lastIndexOf("/"), h = f.substring(
                    l + 1), c = "" == c ? f + b._config.unitAttributeDelimiter
                    + h
                    : c + b._config.unitDelimiter + f
                    + b._config.unitAttributeDelimiter + h);
              }
            }
            if (v) {
              for (var D = v.length, w = 0; w < D; w++) {
                var f = "", y = v[w].match("src=\"(.*?)\"|src='(.*?)'");
                null == y && (y = v[w].match("src=(.*?)[ >]"));
                y && (f = y[1].replace(/"/gi, "").replace(/'/gi, ""));
                f && "" != f && ("1" == b._config.useKManager
                && (u = f, u = decodeURIComponent(
                    u), u = e.convertImageAgentSrc(
                    u, !1), u = decodeURIComponent(u), u = u.replace(/\\/g,
                    "/"), u != f && (f = u)), l = f.lastIndexOf(
                    "/"), h = f.substring(l + 1), c = "" == c ? f
                    + b._config.unitAttributeDelimiter + h : c
                    + b._config.unitDelimiter + f
                    + b._config.unitAttributeDelimiter + h)
              }
            }
            if (g) {
              for (var B = g.length, w = 0; w < B; w++) {
                (f = g[w].match(
                    "href=\"(.*?)\"|href='(.*?)'")[1].replace(/"/gi,
                    "").replace(
                    /'/gi,
                    "")) && "" != f && ("1" == b._config.useKManager
                && (u = f, u = decodeURIComponent(
                    u), u = e.convertImageAgentSrc(u,
                    !1), u = decodeURIComponent(u), u = u.replace(/\\/g, "/"), u
                != f && (f = u)), l = f.lastIndexOf("/"), h = f.substring(
                    l + 1), c = "" == c ? f + b._config.unitAttributeDelimiter
                    + h
                    : c + b._config.unitDelimiter + f
                    + b._config.unitAttributeDelimiter + h);
              }
            }
            if (z) {
              for (var J = z.length, w = 0; w < J; w++) {
                (f = z[w].match(
                    "src=\"(.*?)\"|src='(.*?)'")[1].replace(/"/gi, "").replace(
                    /'/gi, "")) && "" != f && (l = f.lastIndexOf(
                    "/"), h = f.substring(l + 1), c = "" == c ? f
                    + b._config.unitAttributeDelimiter +
                    h : c + b._config.unitDelimiter + f
                    + b._config.unitAttributeDelimiter + h);
              }
            }
            e.G_BodyFit.noncreationAreaBackgroundStatus && e.setBodyFitStyle(b,
                !0);
            e.changeBodyImageProperty(!1);
            e.ReplaceRealObjectToImage();
            e.changeBodyContenteditable(!0)
          }
        } catch (x) {
          RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(x)
        }
        return c
      };
  RAONKEDITOR.getServerImages = function (a, d, c) {
    var b = "";
    try {
      a = a.toLowerCase();
      var e = RAONKEDITOR.util._setEditor(d);
      if (e) {
        var f = e._FRAMEWIN, k = e.getEditorMode();
        "source" != k && "text" != k || e.setChangeMode("design");
        f.ReplaceImageToRealObject();
        1 != c && f.changeBodyContenteditable(!1);
        f.changeBodyImageProperty(!0);
        var h = e._DOC.getElementsByTagName("img");
        c = d = "";
        for (var k = -1, l = h.length, n = 0; n < l; n++) {
          d = h[n].src;
          if ("1" == e._config.useKManager) {
            var p = d, p = decodeURIComponent(p),
                p = f.convertImageAgentSrc(p, !1), p = decodeURIComponent(p);
            p != d && (d = p)
          }
          -1 < d.toLowerCase().indexOf(a) && (k = d.lastIndexOf(
              "/"), c = d.substring(k + 1), b = "" == b ? d
              + e._config.unitAttributeDelimiter + c : b
              + e._config.unitDelimiter + d + e._config.unitAttributeDelimiter +
              c)
        }
        f.G_BodyFit.noncreationAreaBackgroundStatus && f.setBodyFitStyle(e, !0);
        e._PageProp.bshowgrid && 1 == e._PageProp.bshowgrid
        && f.changeBodyImageProperty(!1);
        f.ReplaceRealObjectToImage();
        f.changeBodyContenteditable(!0)
      }
    } catch (m) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(m)
    }
    return b
  };
  RAONKEDITOR.setHtmlValueExWithDocType = RAONKEDITOR.SetHtmlValueExWithDocType = function (a,
      d) {
    var c = RAONKEDITOR.util.parseSetApiParam(a);
    a = c.html;
    if ("" == a || "" == RAONKEDITOR.util.trim(a)) {
      RAONKEDITOR.setBodyValue("",
          d);
    } else {
      try {
        if (d = RAONKEDITOR.util._getEditorName(d), null
        != d) {
          if (RAONKEDITOR.isLoadedEditorEx(d)) {
            try {
              var b = RAONKEDITOR.util._setEditor(d);
              if (b) {
                if ("lightview"
                    == b._config.mode) {
                  KEDITORTOP.G_CURRKEDITOR = b, b._FRAMEWIN.lightViewFunc(
                      "setHtmlValueExWithDocType", a, b);
                } else {
                  b.setValueIsBusy = !0;
                  var e = b._FRAMEWIN;
                  e.getApplyDragResize(b)
                  && b.keditor_dragresize.resizeHandleClear();
                  a = e.addHtmlToSetValue(b, a);
                  a = e.removeCarriageReturn(b, a);
                  e.setChangeModeForSetApi(b);
                  e.setGlobalTableDefaultValue();
                  b.UndoManager.reset();
                  "1" == b._config.emptyTagRemoveInSetapi
                  && (a = e.CleanZeroChar(a));
                  a = e.removeDummyTag(a);
                  a = e.removeIncorrectSpaceInTag(a);
                  a = e.RAONK_EDITOR.HTMLParser.RemoveOfficeTag2(a);
                  a = e.externalPageBreakDataRaplaceInEditor(a);
                  var f = function (a) {
                    "1" == b._config.useHtmlProcessByWorkerSetApi
                    && (e.destoryWebWorkerVar(), e.hideProcessingBackground());
                    a = e.removeTagStyle(a);
                    a = e.htmlAsciiToChar(a);
                    a = RAONKEDITOR.util.htmlRevision(a);
                    a = e.xssReplaceScript(null, a);
                    b._config.userCssUrl && "" != b._config.userCssUrl
                    && b._config.userCssAlwaysSet &&
                    "1" == b._config.userCssAlwaysSet && (a = e.userCssSet(a,
                        b._config.userCssUrl));
                    b._config.webFontCssUrl && "" != b._config.webFontCssUrl
                    && b._config.webFontCssAlwaysSet && "1"
                    == b._config.webFontCssAlwaysSet && (a = e.userCssSet(a,
                        b._config.webFontCssUrl));
                    a = e.adjustInputChecked(a);
                    "1" == b._config.ie_BugFixed_Hyfont
                    && (a = RAONKEDITOR.util.replaceHyFont(a, b));
                    "1" == b._config.replaceEmptySpanTagInSetapi
                    && (a = e.replaceEmptySpanTag(a));
                    e.command_InsertDogBGImg(b.ID, b._EDITOR.design, "Y", "",
                        "", "",
                        "", []);
                    try {
                      for (var d in e.G_KPlugin) {
                        if ("function" ===
                            typeof e.G_KPlugin[d].onBeforeDocumentWrite) {
                          var f = e.G_KPlugin[d].onBeforeDocumentWrite(
                              {html: a});
                          f && "string" == typeof f.html && (a = f.html)
                        }
                      }
                    } catch (h) {
                      RAONKEDITOR && RAONKEDITOR.logMode && console
                      && console.log(h)
                    }
                    a = e.insertCarriageReturnBeforeCloseCell(a);
                    a = e.removeEditorAttribute(a);
                    e.setHtmlValueWithDocTypeToEditor(a, !0, b);
                    e.replaceEmptySpaceInATag(b._BODY);
                    try {
                      for (d in e.G_KPlugin) {
                        if ("function"
                            === typeof e.G_KPlugin[d].onAfterDocumentWrite) {
                          e.G_KPlugin[d].onAfterDocumentWrite(
                              "SetHtmlValueExWithDocType")
                        }
                      }
                    } catch (k) {
                      RAONKEDITOR &&
                      RAONKEDITOR.logMode && console && console.log(k)
                    }
                    "1" == b._config.compatibility.dingBatCharSetApi
                    && e.dingBatFont(
                        "", b);
                    e.replaceFontTagToSpan(b);
                    "" != b._config.placeholder.content && e.placeholderControl(
                        b,
                        "set");
                    d = function (a, b) {
                      "1" == b._config.removeEmptyTagSetValue
                      && e.setEmptyTagWhiteSpace(b);
                      "0" != b._config.setDefaultStyle.value && "0"
                      != b._config.setDefaultStyle.set_style && b._BODY.id
                      != b._config.setDefaultStyle.body_id
                      && (b._BODY.id = b._config.setDefaultStyle.body_id);
                      e.G_BodyFit.SetBodyWidth();
                      b._config.zoomList &&
                      0 < b._config.zoomList.length && e.command_zoom(b.ID,
                          e.document.getElementById("keditor_design_" + b.ID));
                      "1" == b._config.useKManager && e.convertAllImageAgentSrc(
                          e._iframeDoc, !0, !0);
                      setTimeout(function () {
                        for (var a = e._iframeDoc.getElementsByTagName("input"),
                            c = a.length, d = 0; d < c; d++) {
                          "radio" == a[d].type
                          && null != a[d].getAttribute("keditorchecked")
                          && (a[d].checked = !0, a[d].setAttribute("checked",
                              "checked"), a[d].removeAttribute(
                              "keditorchecked"));
                        }
                        e.adjustInputNodeForFF(b._DOC, !0)
                      }, 10);
                      0 == e.isViewMode(b) && (b._editorCustomDataMode =
                          !0, "1" == b._config.formMode
                          ? (e.ReplaceRealEventToCustomData(), e.ReplaceRealObjectToImage(
                              !1)) : e.ReplaceRealObjectToImage());
                      e.xssReplaceScript(e._iframeDoc);
                      e.setScrollOverflow(b);
                      e.setStyleForTableBorderNodeClass(b);
                      e.setCssForFormMode(b);
                      "1" == b._config.adjustCurrentColorInSetApi
                      && RAONKEDITOR.util.adjustBorderStyle(null, b);
                      b.ShowTableBorder && (b.ShowTableBorder = !1);
                      b._iconEnable("");
                      0 == e.isViewMode(b) && e.setBodyDefaultValue();
                      e.wrapPtagForNotBlockTag(b);
                      e.removeEmptySpanBRTag(b._BODY);
                      e.replaceBrTag(b);
                      e.fn_IEJASOBug(b);
                      e.removeLastBrTag(b);
                      0 == e.isViewMode(b) && (e.removeNbspInPTag(
                          b), e.replaceClassForBorder(b, b._BODY,
                          "show"), e.replaceClassForBookmark(b, b._BODY,
                          "show"));
                      RAONKEDITOR.util.setBodyBackground(b);
                      0 == e.isViewMode(b)
                      && (b.UndoManager.putUndo(), b.UndoManager.charCount = 0, b.UndoManager.canUndo = !1, b.UndoManager.canRedo = !1);
                      b._iconEnable("");
                      e.insertImageSrc(b);
                      e.setClassTableAndCellLock(b);
                      e.set_view_mode_auto_height(b);
                      "1" == b._config.tableAutoAdjustInSetHtml
                      && e.command_AdjustTableAndCellWidth(b.ID,
                          b, {type: "setHtml"});
                      e.setAdjustTableBorder(b._DOC);
                      "show_blocks" == G_CURRKEDITOR.ShowBlocks
                      && (G_CURRKEDITOR.ShowBlocks = "", e.command_showBlocks(
                          b.ID, b));
                      e.G_Ruler && e.G_Ruler.SetRulerPosition();
                      e.setAutoBodyFit(b);
                      e.G_BodyFit.noncreationAreaBackgroundStatus
                      && e.setBodyFitStyle(
                          b, !0);
                      var d = !0 === c.notFocusToEditor;
                      setTimeout(function () {
                        if (e.setFocusToBody(b) && !1 === d) {
                          e.setFocusChildForStyle(
                              b._BODY, c.caretPos);
                        } else {
                          var a = null;
                          "" != b._config.focusInitObjId
                              ? a = KEDITORTOP.KEDITORDOC.getElementById(
                                  b._config.focusInitObjId) :
                              b.autoMoveInitFocusData.targetNode
                              && (a = b.autoMoveInitFocusData.targetNode);
                          null != a ? a.focus() : RAONKEDITOR.browser.ie
                              && (KEDITORTOP.focus(), KEDITORTOP.document.focus(), KEDITORTOP.document.body.focus())
                        }
                      }, 1);
                      setTimeout(function () {
                            try {
                              e.adjustScroll(b);
                              e.command_BeforeSetCompleteSpellCheck(b);
                              e.g_findRepalceRange = null;
                              try {
                                "" != b._config.focusInitEditorObjId
                                && (RAONKEDITOR.SetFocusToObject(
                                    b._config.focusInitEditorObjId, !1,
                                    b.ID), b._config.focusInitEditorObjId = "")
                              } catch (a) {
                                RAONKEDITOR && RAONKEDITOR.logMode &&
                                console.log(a)
                              }
                              try {
                                "function"
                                === typeof KEDITORTOP.G_CURRKEDITOR._config.event.setComplete
                                    ? KEDITORTOP.G_CURRKEDITOR._config.event.setComplete(
                                        b.ID) : "function"
                                    === typeof KEDITORTOP.RAONKEDITOR_SetComplete
                                    && KEDITORTOP.RAONKEDITOR_SetComplete(b.ID)
                              } catch (c) {
                                RAONKEDITOR && RAONKEDITOR.logMode && console
                                && console.log(c)
                              }
                              try {
                                e.onChange({editor: b})
                              } catch (d) {
                                RAONKEDITOR && RAONKEDITOR.logMode && console
                                && console.log(d)
                              }
                              b.UndoManager.reset();
                              "2" == b._config.undoMode && b.UndoManager.putUndo(
                                  !0);
                              b.setValueIsBusy = !1
                            } catch (f) {
                              e.restoreValueInSetError(b)
                            }
                          },
                          300)
                    };
                    "base64" == b._config.uploadMethod
                        ? /<img[^>]+file:\/\/\/[^>]+>/i.test(a)
                            ? e.localImageToBase64InHtml({
                              isAllLocalFile: !0,
                              targetNode: b._BODY,
                              callbackFn: d,
                              editor: b
                            }) : d(null, b) : d(null, b)
                  };
                  "1" == b._config.useHtmlCorrection ? "1"
                  == b._config.useHtmlProcessByWorkerSetApi
                      ? (e.showProcessingBackground(), e.releaseProcessHtmlWorker(), e.fn_processHtmlWorker(
                          {
                            editorBrowser: {
                              ie: RAONKEDITOR.browser.ie,
                              ieVersion: RAONKEDITOR.browser.ieVersion,
                              gecko: RAONKEDITOR.browser.gecko
                            },
                            editorConfig: b._config,
                            callFn: "htmlTagRevision",
                            callFnParam: [a, !1],
                            callBackFn: f
                          })) : (a = e.htmlTagRevision(a, !1), f(a)) : f(a)
                }
              }
            } catch (k) {
              e.restoreValueInSetError(b)
            }
          } else {
            null == RAONKEDITOR.InitEditorDataHashTable
            && (RAONKEDITOR.InitEditorDataHashTable = new RAONKEDITOR.util.hashTable), RAONKEDITOR.InitEditorDataHashTable.setItem(
                d, {mode: "setHtmlValueExWithDocType", value: c})
          }
        }
      } catch (h) {
        RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(h)
      }
    }
  };
  RAONKEDITOR.getHtmlContents = RAONKEDITOR.GetHtmlContents = function (a, d) {
    try {
      var c = function (a, c) {
        var b = a.type;
        if (void 0 ==
            b || "" == b) {
          b = "body";
        }
        var e = "";
        switch (b.toLowerCase()) {
          case "text":
            e = "GetBodyTextValue";
            break;
          case "htmlexwithdoctype":
            e = "GetHtmlValueExWithDocType";
            break;
          case "htmlex":
            e = "GetHtmlValueEx";
            break;
          case "html":
            e = "GetHtmlValue";
            break;
          case "bodyex":
            e = "GetBodyValueEx";
            break;
          default:
            e = "GetBodyValue"
        }
        RAONKEDITOR[e](a, c)
      }, b = RAONKEDITOR.util._setEditor(d);
      if (b) {
        if (0 == b.isLoadingFile) {
          c(a, d);
        } else {
          var e = setInterval(
              function () {
                0 == b.isLoadingFile && (clearInterval(e), c(a, d))
              }, 1E3)
        }
      }
    } catch (f) {
      RAONKEDITOR && RAONKEDITOR.logMode &&
      console && console.log(f)
    }
  };
  RAONKEDITOR.getHtmlValueExWithDocType = RAONKEDITOR.GetHtmlValueExWithDocType = function (a,
      d) {
    var c = "";
    try {
      var b = RAONKEDITOR.util._setEditor(d);
      if (b) {
        0 != !!a.isAuto || "undefined" != typeof a.undoReset && 1 != a.undoReset
        || b.UndoManager.reset();
        var e = b._FRAMEWIN;
        if (1 == a.isAuto) {
          e.getHTMLForAutoSave(b, a);
          return
        }
        try {
          for (var f in e.G_KPlugin) {
            if ("function"
                === typeof e.G_KPlugin[f].onBeforeGetApi) {
              e.G_KPlugin[f].onBeforeGetApi(
                  {targetDoc: b._DOC, isAuto: a.isAuto})
            }
          }
        } catch (k) {
          RAONKEDITOR && RAONKEDITOR.logMode &&
          console && console.log(k)
        }
        e.beforeGetApi(b);
        var h = b.getEditorMode();
        "source" != h && "text" != h || b.setChangeMode("design");
        e.clearAllFormControlSelected();
        e.ReplaceBase64ImageToArray(b._config, b._FRAMEWIN._iframeDoc.body);
        e.setRemoveClass(["td", "th"], ["keditor_dot"]);
        e.replaceClassForBorder(b, b._BODY, "hidden");
        e.replaceClassForBookmark(b, b._BODY, "hidden");
        e.ReplaceImageToRealObject();
        e.xssReplaceScript(e._iframeDoc);
        e.ClearDraggingTableAllTable();
        "1" == b._config.formMode && e.ReplaceCustomDataToRealEvent();
        var l, n;
        if (1 == a.isAuto) {
          try {
            RAONKEDITOR.browser.ie ? (l = Math.max(
                    e._iframeDoc.documentElement.scrollLeft,
                    e._iframeDoc.body.scrollLeft), n = Math.max(
                    e._iframeDoc.documentElement.scrollTop,
                    e._iframeDoc.body.scrollTop))
                : (l = e._iframeWin.scrollX, n = e._iframeWin.scrollY)
          } catch (p) {
            RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(p)
          }
        }
        0 == !!a.isAuto && e.changeBodyContenteditable(!1);
        e.changeBodyImageProperty(!0);
        f = function () {
          1 != a.isAuto && (e.removeEmptySpanBRTag(b._BODY), "1"
          == b._config.wrapPtagToGetApi && e.wrapPtagForNotBlockTag(b),
              e.removeFakeLineHeight(
                  b._BODY), RAONKEDITOR.util.setInLineDefaultStyle(b));
          e.setMatchSelectedValue(b._BODY);
          e.setMatchInputValue(b._BODY, a.isAuto);
          e.adjustInputNodeForFF(b._DOC, !1);
          e.removeScrollStyleForIOS(b);
          e.setEmptyTagWhiteSpace(b);
          var d = "", f = "", h = "";
          b._BODY.style.transformOrigin && "" != b._BODY.style.transformOrigin
          && (d = b._BODY.style.transformOrigin, b._BODY.style.transformOrigin = "");
          b._BODY.style.transform && "" != b._BODY.style.transform
          && (f = b._BODY.style.transform, b._BODY.style.transform = "");
          b._BODY.style.zoom &&
          "" != b._BODY.style.zoom
          && (h = b._BODY.style.zoom, b._BODY.style.zoom = "");
          "" != b._config.placeholder.content && e.placeholderControl(b,
              "remove");
          c = b._DOC.documentElement.outerHTML;
          "" != b._config.placeholder.content && e.placeholderControl(b, "set");
          "" != d && (b._BODY.style.transformOrigin = d);
          "" != f && (b._BODY.style.transform = f);
          "" != h && (b._BODY.style.zoom = h);
          c = RAONKEDITOR.util.removeHtmlLangAttrDuplication(c);
          c = e.dummyTagClassClear(c);
          b._PageProp.bshowgrid && 1 == b._PageProp.bshowgrid
          && e.changeBodyImageProperty(!1);
          "1" ==
          b._config.formMode
              ? (e.ReplaceRealEventToCustomData(), e.ReplaceRealObjectToImage(
                  !1)) : e.ReplaceRealObjectToImage();
          e.changeBodyContenteditable(!0);
          if (1 == a.isAuto) {
            try {
              e._iframeWin.scroll(l, n)
            } catch (g) {
              RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(g)
            }
          }
          void 0 != b._PageProp.doctype && 0
          < b._docType[b._PageProp.doctype].length
          && (c = b._docType[b._PageProp.doctype] + c);
          1 == RAONKEDITOR.browser.ie && (c = RAONKEDITOR.util.htmlToLowerCase(
              c));
          c = e.RemoveUnnecessaryChar(c);
          c = e.CleanZeroChar(c);
          d = !1;
          "1" == b._config.replaceEmptyTagWithSpace &&
          (d = !0);
          c = RAONKEDITOR.util.htmlRevision(c, d);
          "1" == b._config.xhtml_value && (c = RAONKEDITOR.util.html2xhtml(c));
          c = e.removeEditorCss(c, b);
          e.setAddClass(["td", "th"], ["keditor_dot"]);
          0 == e.isViewMode(b) && (e.replaceClassForBorder(b, b._BODY,
              "show"), e.replaceClassForBookmark(b, b._BODY, "show"));
          c = e.replaceLineBreak(b, c);
          c = e.insertCarriageReturn(b, c);
          c = e.ReplaceArrayToBase64Image(b._config,
              b._FRAMEWIN._iframeDoc.body, c);
          e.setScrollStyleForIOS(b);
          e.G_Ruler && e.G_Ruler.SetRulerPosition();
          "" != b._config.placeholder.content &&
          e.placeholderControl(b, "class");
          "1" == b._config.replaceRgbToHex && (c = e.replaceColorRgbToHex(c));
          c = e.replaceMsStyleName(c, b);
          e.G_KPlugin.webfontloader && "1"
          == e.G_KPlugin.webfontloader.config.uselocalstorage
          && (c = e.G_KPlugin.webfontloader.removeBase64WebFontFromHead(c));
          try {
            for (var k in e.G_KPlugin) {
              if ("function"
                  === typeof e.G_KPlugin[k].onAfterGetApi) {
                var m = e.G_KPlugin[k].onAfterGetApi(
                    {isAuto: a.isAuto, html: c});
              }
              "string" == typeof m && (c = m)
            }
          } catch (p) {
            RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(p)
          }
          k =
              {strEditorId: b.ID, strData: c};
          e.afterGetApi(b);
          a.callback(k)
        };
        try {
          a.async = !1 === a.async ? !1
              : !0, RAONKEDITOR.util.postimageToServer(b, f, a)
        } catch (m) {
          RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(m)
        }
      }
    } catch (q) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(q)
    }
    return c
  };
  RAONKEDITOR.setHtmlValueEx = RAONKEDITOR.SetHtmlValueEx = function (a, d) {
    var c = RAONKEDITOR.util.parseSetApiParam(a);
    a = c.html;
    if ("" == a || "" == RAONKEDITOR.util.trim(a)) {
      RAONKEDITOR.setBodyValue("",
          d);
    } else {
      try {
        if (d = RAONKEDITOR.util._getEditorName(d),
        null != d) {
          if (RAONKEDITOR.isLoadedEditorEx(d)) {
            try {
              var b = RAONKEDITOR.util._setEditor(d);
              if (b) {
                if ("lightview"
                    == b._config.mode) {
                  KEDITORTOP.G_CURRKEDITOR = b, b._FRAMEWIN.lightViewFunc(
                      "setHtmlValueEx", a, b);
                } else {
                  b.setValueIsBusy = !0;
                  var e = b._FRAMEWIN;
                  e.getApplyDragResize(b)
                  && b.keditor_dragresize.resizeHandleClear();
                  a = e.addHtmlToSetValue(b, a);
                  a = e.removeCarriageReturn(b, a);
                  e.setChangeModeForSetApi(b);
                  e.setGlobalTableDefaultValue();
                  b.UndoManager.reset();
                  "1" == b._config.emptyTagRemoveInSetapi
                  && (a = e.CleanZeroChar(a));
                  a = e.removeDummyTag(a);
                  a = e.removeIncorrectSpaceInTag(a);
                  a = e.RAONK_EDITOR.HTMLParser.RemoveOfficeTag2(a);
                  a = e.externalPageBreakDataRaplaceInEditor(a);
                  var f = function (a) {
                    "1" == b._config.useHtmlProcessByWorkerSetApi
                    && (e.destoryWebWorkerVar(), e.hideProcessingBackground());
                    a = e.removeTagStyle(a);
                    a = e.htmlAsciiToChar(a);
                    a = RAONKEDITOR.util.htmlRevision(a);
                    a = e.xssReplaceScript(null, a);
                    b._config.userCssUrl && "" != b._config.userCssUrl
                    && b._config.userCssAlwaysSet && "1"
                    == b._config.userCssAlwaysSet
                    && (a = e.userCssSet(a,
                        b._config.userCssUrl));
                    b._config.webFontCssUrl && "" != b._config.webFontCssUrl
                    && b._config.webFontCssAlwaysSet && "1"
                    == b._config.webFontCssAlwaysSet && (a = e.userCssSet(a,
                        b._config.webFontCssUrl));
                    a = e.adjustInputChecked(a);
                    "1" == b._config.ie_BugFixed_Hyfont
                    && (a = RAONKEDITOR.util.replaceHyFont(a, b));
                    "1" == b._config.replaceEmptySpanTagInSetapi
                    && (a = e.replaceEmptySpanTag(a));
                    e.command_InsertDogBGImg(b.ID, b._EDITOR.design, "Y", "",
                        "", "",
                        "", []);
                    try {
                      for (var d in e.G_KPlugin) {
                        if ("function"
                            === typeof e.G_KPlugin[d].onBeforeDocumentWrite) {
                          var f =
                              e.G_KPlugin[d].onBeforeDocumentWrite({html: a});
                          f && "string" == typeof f.html && (a = f.html)
                        }
                      }
                    } catch (h) {
                      RAONKEDITOR && RAONKEDITOR.logMode && console
                      && console.log(h)
                    }
                    a = e.insertCarriageReturnBeforeCloseCell(a);
                    a = e.removeEditorAttribute(a);
                    e.setHtmlValueToEditor(a, !0, b);
                    e.replaceEmptySpaceInATag(b._BODY);
                    try {
                      for (d in e.G_KPlugin) {
                        if ("function"
                            === typeof e.G_KPlugin[d].onAfterDocumentWrite) {
                          e.G_KPlugin[d].onAfterDocumentWrite(
                              "SetHtmlValueEx")
                        }
                      }
                    } catch (k) {
                      RAONKEDITOR && RAONKEDITOR.logMode && console
                      && console.log(k)
                    }
                    "1" ==
                    b._config.compatibility.dingBatCharSetApi && e.dingBatFont(
                        "", b);
                    e.replaceFontTagToSpan(b);
                    "" != b._config.placeholder.content && e.placeholderControl(
                        b,
                        "set");
                    d = function (a, b) {
                      "1" == b._config.removeEmptyTagSetValue
                      && e.setEmptyTagWhiteSpace(b);
                      "0" != b._config.setDefaultStyle.value && "0"
                      != b._config.setDefaultStyle.set_style && b._BODY.id
                      != b._config.setDefaultStyle.body_id
                      && (b._BODY.id = b._config.setDefaultStyle.body_id);
                      e.G_BodyFit.SetBodyWidth();
                      b._config.zoomList && 0 < b._config.zoomList.length
                      && e.command_zoom(b.ID,
                          e.document.getElementById("keditor_design_" + b.ID));
                      "1" == b._config.useKManager && e.convertAllImageAgentSrc(
                          e._iframeDoc, !0, !0);
                      setTimeout(function () {
                        for (var a = e._iframeDoc.getElementsByTagName("input"),
                            c = a.length, d = 0; d < c; d++) {
                          "radio" == a[d].type
                          && null != a[d].getAttribute("keditorchecked")
                          && (a[d].checked = !0, a[d].setAttribute("checked",
                              "checked"), a[d].removeAttribute(
                              "keditorchecked"));
                        }
                        e.adjustInputNodeForFF(b._DOC, !0)
                      }, 10);
                      0 == e.isViewMode(b) && (b._editorCustomDataMode = !0, "1"
                      == b._config.formMode ? (e.ReplaceRealEventToCustomData(),
                              e.ReplaceRealObjectToImage(!1))
                          : e.ReplaceRealObjectToImage());
                      e.xssReplaceScript(e._iframeDoc);
                      e.setScrollOverflow(b);
                      e.setStyleForTableBorderNodeClass(b);
                      e.setCssForFormMode(b);
                      "1" == b._config.adjustCurrentColorInSetApi
                      && RAONKEDITOR.util.adjustBorderStyle(null, b);
                      b.ShowTableBorder && (b.ShowTableBorder = !1);
                      b._iconEnable("");
                      0 == e.isViewMode(b) && e.setBodyDefaultValue();
                      e.wrapPtagForNotBlockTag(b);
                      e.removeEmptySpanBRTag(b._BODY);
                      e.replaceBrTag(b);
                      e.fn_IEJASOBug(b);
                      e.removeLastBrTag(b);
                      0 == e.isViewMode(b) &&
                      (e.removeNbspInPTag(b), e.replaceClassForBorder(b,
                          b._BODY,
                          "show"), e.replaceClassForBookmark(b, b._BODY,
                          "show"));
                      RAONKEDITOR.util.setBodyBackground(b);
                      0 == e.isViewMode(b) && "2" != b._config.undoMode
                      && (b.UndoManager.putUndo(), b.UndoManager.charCount = 0, b.UndoManager.canUndo = !1, b.UndoManager.canRedo = !1);
                      b._iconEnable("");
                      e.insertImageSrc(b);
                      e.setClassTableAndCellLock(b);
                      e.set_view_mode_auto_height(b);
                      "1" == b._config.tableAutoAdjustInSetHtml
                      && e.command_AdjustTableAndCellWidth(b.ID, b,
                          {type: "setHtml"});
                      e.setAdjustTableBorder(b._DOC);
                      "show_blocks" == G_CURRKEDITOR.ShowBlocks
                      && (G_CURRKEDITOR.ShowBlocks = "", e.command_showBlocks(
                          b.ID, b));
                      e.G_Ruler && e.G_Ruler.SetRulerPosition();
                      e.setAutoBodyFit(b);
                      e.G_BodyFit.noncreationAreaBackgroundStatus
                      && e.setBodyFitStyle(
                          b, !0);
                      var d = !0 === c.notFocusToEditor;
                      setTimeout(function () {
                        if (e.setFocusToBody(b) && !1 === d) {
                          e.setFocusChildForStyle(
                              b._BODY, c.caretPos);
                        } else {
                          var a = null;
                          "" != b._config.focusInitObjId
                              ? a = KEDITORTOP.KEDITORDOC.getElementById(
                                  b._config.focusInitObjId)
                              : b.autoMoveInitFocusData.targetNode &&
                              (a = b.autoMoveInitFocusData.targetNode);
                          null != a ? a.focus() : RAONKEDITOR.browser.ie
                              && (KEDITORTOP.focus(), KEDITORTOP.document.focus(), KEDITORTOP.document.body.focus())
                        }
                      }, 1);
                      setTimeout(function () {
                        try {
                          e.adjustScroll(b);
                          e.command_BeforeSetCompleteSpellCheck(b);
                          e.g_findRepalceRange = null;
                          try {
                            "" != b._config.focusInitEditorObjId
                            && (RAONKEDITOR.SetFocusToObject(
                                b._config.focusInitEditorObjId, !1,
                                b.ID), b._config.focusInitEditorObjId = "")
                          } catch (a) {
                            RAONKEDITOR && RAONKEDITOR.logMode && console.log(a)
                          }
                          try {
                            "function"
                            === typeof KEDITORTOP.G_CURRKEDITOR._config.event.setComplete
                                ?
                                KEDITORTOP.G_CURRKEDITOR._config.event.setComplete(
                                    b.ID)
                                : "function"
                                === typeof KEDITORTOP.RAONKEDITOR_SetComplete
                                && KEDITORTOP.RAONKEDITOR_SetComplete(b.ID)
                          } catch (c) {
                            RAONKEDITOR && RAONKEDITOR.logMode && console
                            && console.log(c)
                          }
                          try {
                            e.onChange({editor: b})
                          } catch (d) {
                            RAONKEDITOR && RAONKEDITOR.logMode && console
                            && console.log(d)
                          }
                          b.UndoManager.reset();
                          "2" == b._config.undoMode && b.UndoManager.putUndo(
                              !0);
                          b.setValueIsBusy = !1
                        } catch (f) {
                          e.restoreValueInSetError(b)
                        }
                      }, 300)
                    };
                    "base64" == b._config.uploadMethod
                        ? /<img[^>]+file:\/\/\/[^>]+>/i.test(a) ?
                            e.localImageToBase64InHtml({
                              isAllLocalFile: !0,
                              targetNode: b._BODY,
                              callbackFn: d,
                              editor: b
                            }) : d(null, b) : d(null, b)
                  };
                  "1" == b._config.useHtmlCorrection ? "1"
                  == b._config.useHtmlProcessByWorkerSetApi
                      ? (e.showProcessingBackground(), e.releaseProcessHtmlWorker(), e.fn_processHtmlWorker(
                          {
                            editorBrowser: {
                              ie: RAONKEDITOR.browser.ie,
                              ieVersion: RAONKEDITOR.browser.ieVersion,
                              gecko: RAONKEDITOR.browser.gecko
                            },
                            editorConfig: b._config,
                            callFn: "htmlTagRevision",
                            callFnParam: [a, !1],
                            callBackFn: f
                          })) : (a = e.htmlTagRevision(a, !1), f(a)) : f(a)
                }
              }
            } catch (k) {
              e.restoreValueInSetError(b)
            }
          } else {
            null ==
            RAONKEDITOR.InitEditorDataHashTable
            && (RAONKEDITOR.InitEditorDataHashTable = new RAONKEDITOR.util.hashTable), RAONKEDITOR.InitEditorDataHashTable.setItem(
                d, {mode: "setHtmlValueEx", value: c})
          }
        }
      } catch (h) {
        RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(h)
      }
    }
  };
  RAONKEDITOR.getHtmlValueEx = RAONKEDITOR.GetHtmlValueEx = function (a, d) {
    var c = "";
    try {
      var b = RAONKEDITOR.util._setEditor(d);
      if (b) {
        0 != !!a.isAuto || "undefined" != typeof a.undoReset && 1 != a.undoReset
        || b.UndoManager.reset();
        var e = b._FRAMEWIN;
        if (1 == a.isAuto) {
          e.getHTMLForAutoSave(b,
              a);
          return
        }
        try {
          for (var f in e.G_KPlugin) {
            if ("function"
                === typeof e.G_KPlugin[f].onBeforeGetApi) {
              e.G_KPlugin[f].onBeforeGetApi(
                  {targetDoc: b._DOC, isAuto: a.isAuto})
            }
          }
        } catch (k) {
          RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(k)
        }
        e.beforeGetApi(b);
        var h = b.getEditorMode();
        "source" != h && "text" != h || b.setChangeMode("design");
        e.clearAllFormControlSelected();
        e.ReplaceBase64ImageToArray(b._config, b._FRAMEWIN._iframeDoc.body);
        e.setRemoveClass(["td", "th"], ["keditor_dot"]);
        e.replaceClassForBorder(b, b._BODY, "hidden");
        e.replaceClassForBookmark(b, b._BODY, "hidden");
        e.ReplaceImageToRealObject();
        e.xssReplaceScript(e._iframeDoc);
        e.ClearDraggingTableAllTable();
        "1" == b._config.formMode && e.ReplaceCustomDataToRealEvent();
        var l, n;
        if (1 == a.isAuto) {
          try {
            RAONKEDITOR.browser.ie ? (l = Math.max(
                    e._iframeDoc.documentElement.scrollLeft,
                    e._iframeDoc.body.scrollLeft), n = Math.max(
                    e._iframeDoc.documentElement.scrollTop,
                    e._iframeDoc.body.scrollTop))
                : (l = e._iframeWin.scrollX, n = e._iframeWin.scrollY)
          } catch (p) {
            RAONKEDITOR && RAONKEDITOR.logMode && console &&
            console.log(p)
          }
        }
        0 == !!a.isAuto && e.changeBodyContenteditable(!1);
        e.changeBodyImageProperty(!0);
        f = function () {
          1 != a.isAuto && (e.removeEmptySpanBRTag(b._BODY), "1"
          == b._config.wrapPtagToGetApi && e.wrapPtagForNotBlockTag(
              b), e.removeFakeLineHeight(
              b._BODY), RAONKEDITOR.util.setInLineDefaultStyle(b));
          e.setMatchSelectedValue(b._BODY);
          e.setMatchInputValue(b._BODY, a.isAuto);
          e.adjustInputNodeForFF(b._DOC, !1);
          e.removeScrollStyleForIOS(b);
          e.setEmptyTagWhiteSpace(b);
          var d = "", f = "", h = "";
          b._BODY.style.transformOrigin && "" !=
          b._BODY.style.transformOrigin
          && (d = b._BODY.style.transformOrigin, b._BODY.style.transformOrigin = "");
          b._BODY.style.transform && "" != b._BODY.style.transform
          && (f = b._BODY.style.transform, b._BODY.style.transform = "");
          b._BODY.style.zoom && "" != b._BODY.style.zoom
          && (h = b._BODY.style.zoom, b._BODY.style.zoom = "");
          "" != b._config.placeholder.content && e.placeholderControl(b,
              "remove");
          c = b._DOC.documentElement.outerHTML;
          "" != b._config.placeholder.content && e.placeholderControl(b, "set");
          "" != d && (b._BODY.style.transformOrigin =
              d);
          "" != f && (b._BODY.style.transform = f);
          "" != h && (b._BODY.style.zoom = h);
          c = RAONKEDITOR.util.removeHtmlLangAttrDuplication(c);
          c = e.dummyTagClassClear(c);
          b._PageProp.bshowgrid && 1 == b._PageProp.bshowgrid
          && e.changeBodyImageProperty(!1);
          "1" == b._config.formMode
              ? (e.ReplaceRealEventToCustomData(), e.ReplaceRealObjectToImage(
                  !1)) : e.ReplaceRealObjectToImage();
          e.changeBodyContenteditable(!0);
          if (1 == a.isAuto) {
            try {
              e._iframeWin.scroll(l, n)
            } catch (g) {
              RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(g)
            }
          }
          1 == RAONKEDITOR.browser.ie &&
          (c = RAONKEDITOR.util.htmlToLowerCase(c));
          c = e.RemoveUnnecessaryChar(c);
          c = e.CleanZeroChar(c);
          d = !1;
          "1" == b._config.replaceEmptyTagWithSpace && (d = !0);
          c = RAONKEDITOR.util.htmlRevision(c, d);
          "1" == b._config.xhtml_value && (c = RAONKEDITOR.util.html2xhtml(c));
          c = e.removeEditorCss(c, b);
          e.setAddClass(["td", "th"], ["keditor_dot"]);
          0 == e.isViewMode(b) && (e.replaceClassForBorder(b, b._BODY,
              "show"), e.replaceClassForBookmark(b, b._BODY, "show"));
          c = e.replaceLineBreak(b, c);
          c = e.insertCarriageReturn(b, c);
          c = e.ReplaceArrayToBase64Image(b._config,
              b._FRAMEWIN._iframeDoc.body, c);
          e.setScrollStyleForIOS(b);
          e.G_Ruler && e.G_Ruler.SetRulerPosition();
          "" != b._config.placeholder.content && e.placeholderControl(b,
              "class");
          "1" == b._config.replaceRgbToHex && (c = e.replaceColorRgbToHex(c));
          c = e.replaceMsStyleName(c, b);
          try {
            for (var k in e.G_KPlugin) {
              if ("function"
                  === typeof e.G_KPlugin[k].onAfterGetApi) {
                var m = e.G_KPlugin[k].onAfterGetApi(
                    {isAuto: a.isAuto, html: c});
              }
              "string" == typeof m && (c = m)
            }
          } catch (p) {
            RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(p)
          }
          e.G_KPlugin.webfontloader &&
          "1" == e.G_KPlugin.webfontloader.config.uselocalstorage
          && (c = e.G_KPlugin.webfontloader.removeBase64WebFontFromHead(c));
          k = {strEditorId: b.ID, strData: c};
          a.defaultStyle
          && (k.defaultStyle = a.defaultStyle, k.defaultStyleText = a.defaultStyleText);
          e.afterGetApi(b);
          a.callback(k)
        };
        try {
          a.async = !1 === a.async ? !1
              : !0, RAONKEDITOR.util.postimageToServer(b, f, a)
        } catch (m) {
          RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(m)
        }
      }
    } catch (q) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(q)
    }
    return c
  };
  RAONKEDITOR.setHtmlValue =
      RAONKEDITOR.SetHtmlValue = function (a, d) {
        var c = RAONKEDITOR.util.parseSetApiParam(a);
        a = c.html;
        if ("" == a || "" == RAONKEDITOR.util.trim(a)) {
          RAONKEDITOR.setBodyValue(
              "", d);
        } else {
          try {
            if (d = RAONKEDITOR.util._getEditorName(d), null
            != d) {
              if (RAONKEDITOR.isLoadedEditorEx(d)) {
                try {
                  var b = RAONKEDITOR.util._setEditor(d);
                  if (b) {
                    if ("lightview"
                        == b._config.mode) {
                      KEDITORTOP.G_CURRKEDITOR = b, b._FRAMEWIN.lightViewFunc(
                          "setHtmlValue", a, b);
                    } else {
                      b.setValueIsBusy = !0;
                      var e = b._FRAMEWIN;
                      e.getApplyDragResize(b)
                      && b.keditor_dragresize.resizeHandleClear();
                      a = e.addHtmlToSetValue(b, a);
                      a = e.removeCarriageReturn(b, a);
                      e.setChangeModeForSetApi(b);
                      e.setGlobalTableDefaultValue();
                      b.UndoManager.reset();
                      "1" == b._config.emptyTagRemoveInSetapi
                      && (a = e.CleanZeroChar(
                          a));
                      a = e.removeDummyTag(a);
                      a = e.removeIncorrectSpaceInTag(a);
                      a = e.RAONK_EDITOR.HTMLParser.RemoveOfficeTag2(a);
                      a = e.externalPageBreakDataRaplaceInEditor(a);
                      var f = function (a) {
                        "1" == b._config.useHtmlProcessByWorkerSetApi
                        && (e.destoryWebWorkerVar(), e.hideProcessingBackground());
                        a = e.removeTagStyle(a);
                        a = e.htmlAsciiToChar(a);
                        a = RAONKEDITOR.util.htmlRevision(a);
                        a = e.xssReplaceScript(null, a);
                        b._config.userCssUrl && "" != b._config.userCssUrl
                        && b._config.userCssAlwaysSet && "1"
                        == b._config.userCssAlwaysSet && (a = e.userCssSet(a,
                            b._config.userCssUrl));
                        b._config.webFontCssUrl && "" != b._config.webFontCssUrl
                        && b._config.webFontCssAlwaysSet && "1"
                        == b._config.webFontCssAlwaysSet && (a = e.userCssSet(a,
                            b._config.webFontCssUrl));
                        a = e.adjustInputChecked(a);
                        "1" == b._config.ie_BugFixed_Hyfont
                        && (a = RAONKEDITOR.util.replaceHyFont(a, b));
                        "1" == b._config.replaceEmptySpanTagInSetapi &&
                        (a = e.replaceEmptySpanTag(a));
                        e.command_InsertDogBGImg(b.ID, b._EDITOR.design, "Y",
                            "", "",
                            "", "", []);
                        try {
                          for (var d in e.G_KPlugin) {
                            if ("function"
                                === typeof e.G_KPlugin[d].onBeforeDocumentWrite) {
                              var f = e.G_KPlugin[d].onBeforeDocumentWrite(
                                  {html: a});
                              f && "string" == typeof f.html && (a = f.html)
                            }
                          }
                        } catch (h) {
                          RAONKEDITOR && RAONKEDITOR.logMode && console
                          && console.log(
                              h)
                        }
                        a = e.insertCarriageReturnBeforeCloseCell(a);
                        a = e.removeEditorAttribute(a);
                        e.setHeadValueToEditor(a, b);
                        e.replaceEmptySpaceInATag(b._BODY);
                        try {
                          for (d in e.G_KPlugin) {
                            if ("function" ===
                                typeof e.G_KPlugin[d].onAfterDocumentWrite) {
                              e.G_KPlugin[d].onAfterDocumentWrite(
                                  "SetHtmlValue")
                            }
                          }
                        } catch (k) {
                          RAONKEDITOR && RAONKEDITOR.logMode && console
                          && console.log(
                              k)
                        }
                        "1" == b._config.compatibility.dingBatCharSetApi
                        && e.dingBatFont("", b);
                        e.replaceFontTagToSpan(b);
                        "" != b._config.placeholder.content
                        && e.placeholderControl(b,
                            "set");
                        d = function (a, b) {
                          "1" == b._config.removeEmptyTagSetValue
                          && e.setEmptyTagWhiteSpace(b);
                          "0" != b._config.setDefaultStyle.value && "0"
                          != b._config.setDefaultStyle.set_style && b._BODY.id
                          != b._config.setDefaultStyle.body_id &&
                          (b._BODY.id = b._config.setDefaultStyle.body_id);
                          e.G_BodyFit.SetBodyWidth();
                          b._config.zoomList && 0 < b._config.zoomList.length
                          && e.command_zoom(b.ID,
                              e.document.getElementById(
                                  "keditor_design_" + b.ID));
                          "1" == b._config.useKManager
                          && e.convertAllImageAgentSrc(
                              e._iframeDoc, !0, !0);
                          setTimeout(function () {
                            for (var a = e._iframeDoc.getElementsByTagName(
                                    "input"),
                                c = a.length, d = 0; d < c; d++) {
                              "radio" == a[d].type
                              && null != a[d].getAttribute("keditorchecked")
                              && (a[d].checked = !0, a[d].setAttribute(
                                  "checked",
                                  "checked"), a[d].removeAttribute(
                                  "keditorchecked"));
                            }
                            e.adjustInputNodeForFF(b._DOC, !0)
                          }, 10);
                          0 == e.isViewMode(b)
                          && (b._editorCustomDataMode = !0, "1"
                          == b._config.formMode
                              ? (e.ReplaceRealEventToCustomData(), e.ReplaceRealObjectToImage(
                                  !1))
                              : e.ReplaceRealObjectToImage(), e.replaceClassForBorder(
                              b,
                              b._BODY, "show"), e.replaceClassForBookmark(b,
                              b._BODY,
                              "show"));
                          e.xssReplaceScript(e._iframeDoc);
                          e.setScrollOverflow(b);
                          e.setStyleForTableBorderNodeClass(b);
                          e.setCssForFormMode(b);
                          "1" == b._config.adjustCurrentColorInSetApi
                          && RAONKEDITOR.util.adjustBorderStyle(null, b);
                          b.ShowTableBorder &&
                          (b.ShowTableBorder = !1);
                          b._iconEnable("");
                          0 == e.isViewMode(b) && e.setBodyDefaultValue();
                          e.wrapPtagForNotBlockTag(b);
                          e.removeEmptySpanBRTag(b._BODY);
                          e.replaceBrTag(b);
                          e.fn_IEJASOBug(b);
                          e.removeLastBrTag(b);
                          0 == e.isViewMode(b) && e.removeNbspInPTag(b);
                          RAONKEDITOR.util.setBodyBackground(b);
                          0 == e.isViewMode(b) && "2" != b._config.undoMode
                          && (b.UndoManager.putUndo(), b.UndoManager.charCount = 0, b.UndoManager.canUndo = !1, b.UndoManager.canRedo = !1);
                          b._iconEnable("");
                          e.insertImageSrc(b);
                          e.setClassTableAndCellLock(b);
                          e.set_view_mode_auto_height(b);
                          "1" == b._config.tableAutoAdjustInSetHtml
                          && e.command_AdjustTableAndCellWidth(b.ID, b,
                              {type: "setHtml"});
                          e.setAdjustTableBorder(b._DOC);
                          "show_blocks" == G_CURRKEDITOR.ShowBlocks
                          && (G_CURRKEDITOR.ShowBlocks = "", e.command_showBlocks(
                              b.ID,
                              b));
                          e.G_Ruler && e.G_Ruler.SetRulerPosition();
                          e.setAutoBodyFit(b);
                          e.G_BodyFit.noncreationAreaBackgroundStatus
                          && e.setBodyFitStyle(b, !0);
                          var d = !0 === c.notFocusToEditor;
                          setTimeout(function () {
                            if (e.setFocusToBody(b) && !1
                                === d) {
                              e.setFocusChildForStyle(b._BODY,
                                  c.caretPos);
                            } else {
                              var a = null;
                              "" != b._config.focusInitObjId
                                  ? a = KEDITORTOP.KEDITORDOC.getElementById(
                                      b._config.focusInitObjId)
                                  : b.autoMoveInitFocusData.targetNode
                                  && (a = b.autoMoveInitFocusData.targetNode);
                              null != a ? a.focus() : RAONKEDITOR.browser.ie
                                  && (KEDITORTOP.focus(), KEDITORTOP.document.focus(), KEDITORTOP.document.body.focus())
                            }
                          }, 1);
                          setTimeout(function () {
                            try {
                              e.adjustScroll(b);
                              e.command_BeforeSetCompleteSpellCheck(b);
                              e.g_findRepalceRange = null;
                              try {
                                "" != b._config.focusInitEditorObjId
                                && (RAONKEDITOR.SetFocusToObject(
                                    b._config.focusInitEditorObjId,
                                    !1,
                                    b.ID), b._config.focusInitEditorObjId = "")
                              } catch (a) {
                                RAONKEDITOR && RAONKEDITOR.logMode
                                && console.log(a)
                              }
                              try {
                                "function"
                                === typeof KEDITORTOP.G_CURRKEDITOR._config.event.setComplete
                                    ? KEDITORTOP.G_CURRKEDITOR._config.event.setComplete(
                                        b.ID) : "function"
                                    === typeof KEDITORTOP.RAONKEDITOR_SetComplete
                                    && KEDITORTOP.RAONKEDITOR_SetComplete(b.ID)
                              } catch (c) {
                                RAONKEDITOR && RAONKEDITOR.logMode && console
                                && console.log(c)
                              }
                              try {
                                e.onChange({editor: b})
                              } catch (d) {
                                RAONKEDITOR && RAONKEDITOR.logMode && console
                                && console.log(d)
                              }
                              b.UndoManager.reset();
                              "2" == b._config.undoMode
                              && b.UndoManager.putUndo(!0);
                              b.setValueIsBusy = !1
                            } catch (f) {
                              e.restoreValueInSetError(b)
                            }
                          }, 300)
                        };
                        "base64" == b._config.uploadMethod
                            ? /<img[^>]+file:\/\/\/[^>]+>/i.test(a)
                                ? e.localImageToBase64InHtml({
                                  isAllLocalFile: !0,
                                  targetNode: b._BODY,
                                  callbackFn: d,
                                  editor: b
                                }) : d(null, b) : d(null, b)
                      };
                      "1" == b._config.useHtmlCorrection ? "1"
                      == b._config.useHtmlProcessByWorkerSetApi
                          ? (e.showProcessingBackground(), e.releaseProcessHtmlWorker(), e.fn_processHtmlWorker(
                              {
                                editorBrowser: {
                                  ie: RAONKEDITOR.browser.ie,
                                  ieVersion: RAONKEDITOR.browser.ieVersion,
                                  gecko: RAONKEDITOR.browser.gecko
                                },
                                editorConfig: b._config,
                                callFn: "htmlTagRevision",
                                callFnParam: [a, !1],
                                callBackFn: f
                              })) : (a = e.htmlTagRevision(a, !1), f(a)) : f(a)
                    }
                  }
                } catch (k) {
                  e.restoreValueInSetError(b)
                }
              } else {
                null == RAONKEDITOR.InitEditorDataHashTable
                && (RAONKEDITOR.InitEditorDataHashTable = new RAONKEDITOR.util.hashTable), RAONKEDITOR.InitEditorDataHashTable.setItem(
                    d, {mode: "setHtmlValue", value: c})
              }
            }
          } catch (h) {
            RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(h)
          }
        }
      };
  RAONKEDITOR.getHtmlValue = RAONKEDITOR.GetHtmlValue =
      function (a, d) {
        var c = "";
        try {
          var b = RAONKEDITOR.util._setEditor(d);
          if (b) {
            0 != !!a.isAuto || "undefined" != typeof a.undoReset && 1
            != a.undoReset || b.UndoManager.reset();
            var e = b._FRAMEWIN;
            if (1 == a.isAuto) {
              e.getHTMLForAutoSave(b, a);
              return
            }
            try {
              for (var f in e.G_KPlugin) {
                if ("function"
                    === typeof e.G_KPlugin[f].onBeforeGetApi) {
                  e.G_KPlugin[f].onBeforeGetApi(
                      {targetDoc: b._DOC, isAuto: a.isAuto})
                }
              }
            } catch (k) {
              RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(k)
            }
            e.beforeGetApi(b);
            var h = b.getEditorMode();
            "source" != h && "text" !=
            h || b.setChangeMode("design");
            e.clearAllFormControlSelected();
            e.ReplaceBase64ImageToArray(b._config, b._FRAMEWIN._iframeDoc.body);
            e.setRemoveClass(["td", "th"], ["keditor_dot"]);
            e.replaceClassForBorder(b, b._BODY, "hidden");
            e.replaceClassForBookmark(b, b._BODY, "hidden");
            e.ReplaceImageToRealObject();
            e.xssReplaceScript(e._iframeDoc);
            e.ClearDraggingTableAllTable();
            "1" == b._config.formMode && e.ReplaceCustomDataToRealEvent();
            var l, n;
            if (1 == a.isAuto) {
              try {
                RAONKEDITOR.browser.ie ? (l = Math.max(
                        e._iframeDoc.documentElement.scrollLeft,
                        e._iframeDoc.body.scrollLeft), n = Math.max(
                        e._iframeDoc.documentElement.scrollTop,
                        e._iframeDoc.body.scrollTop))
                    : (l = e._iframeWin.scrollX, n = e._iframeWin.scrollY)
              } catch (p) {
                RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(p)
              }
            }
            0 == !!a.isAuto && e.changeBodyContenteditable(!1);
            e.changeBodyImageProperty(!0);
            f = function () {
              1 != a.isAuto && (e.removeEmptySpanBRTag(b._BODY), "1"
              == b._config.wrapPtagToGetApi && e.wrapPtagForNotBlockTag(
                  b), e.removeFakeLineHeight(
                  b._BODY), RAONKEDITOR.util.setInLineDefaultStyle(b));
              e.setMatchSelectedValue(b._BODY);
              e.setMatchInputValue(b._BODY, a.isAuto);
              e.adjustInputNodeForFF(b._DOC, !1);
              e.removeScrollStyleForIOS(b);
              e.setEmptyTagWhiteSpace(b);
              var d = "", f = "", h = "";
              b._BODY.style.transformOrigin && ""
              != b._BODY.style.transformOrigin
              && (d = b._BODY.style.transformOrigin, b._BODY.style.transformOrigin = "");
              b._BODY.style.transform && "" != b._BODY.style.transform
              && (f = b._BODY.style.transform, b._BODY.style.transform = "");
              b._BODY.style.zoom && "" != b._BODY.style.zoom
              && (h = b._BODY.style.zoom, b._BODY.style.zoom = "");
              "" != b._config.placeholder.content &&
              e.placeholderControl(b, "remove");
              c = b._DOC.documentElement.innerHTML;
              "" != b._config.placeholder.content && e.placeholderControl(b,
                  "set");
              "" != d && (b._BODY.style.transformOrigin = d);
              "" != f && (b._BODY.style.transform = f);
              "" != h && (b._BODY.style.zoom = h);
              c = e.dummyTagClassClear(c);
              b._PageProp.bshowgrid && 1 == b._PageProp.bshowgrid
              && e.changeBodyImageProperty(!1);
              "1" == b._config.formMode
                  ? (e.ReplaceRealEventToCustomData(), e.ReplaceRealObjectToImage(
                      !1)) : e.ReplaceRealObjectToImage();
              e.changeBodyContenteditable(!0);
              if (1 ==
                  a.isAuto) {
                try {
                  e._iframeWin.scroll(l, n)
                } catch (g) {
                  RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(
                      g)
                }
              }
              1 == RAONKEDITOR.browser.ie
              && (c = RAONKEDITOR.util.htmlToLowerCase(c));
              c = e.RemoveUnnecessaryChar(c);
              c = e.CleanZeroChar(c);
              d = !1;
              "1" == b._config.replaceEmptyTagWithSpace && (d = !0);
              c = RAONKEDITOR.util.htmlRevision(c, d);
              "1" == b._config.xhtml_value && (c = RAONKEDITOR.util.html2xhtml(
                  c));
              c = e.removeEditorCss(c, b);
              e.setAddClass(["td", "th"], ["keditor_dot"]);
              0 == e.isViewMode(b) && (e.replaceClassForBorder(b, b._BODY,
                  "show"),
                  e.replaceClassForBookmark(b, b._BODY, "show"));
              c = e.replaceLineBreak(b, c);
              c = e.insertCarriageReturn(b, c);
              c = e.ReplaceArrayToBase64Image(b._config,
                  b._FRAMEWIN._iframeDoc.body, c);
              e.setScrollStyleForIOS(b);
              e.G_Ruler && e.G_Ruler.SetRulerPosition();
              "" != b._config.placeholder.content && e.placeholderControl(b,
                  "class");
              "1" == b._config.replaceRgbToHex && (c = e.replaceColorRgbToHex(
                  c));
              c = e.replaceMsStyleName(c, b);
              e.G_KPlugin.webfontloader && "1"
              == e.G_KPlugin.webfontloader.config.uselocalstorage
              && (c = e.G_KPlugin.webfontloader.removeBase64WebFontFromHead(c));
              try {
                for (var k in e.G_KPlugin) {
                  if ("function"
                      === typeof e.G_KPlugin[k].onAfterGetApi) {
                    var m = e.G_KPlugin[k].onAfterGetApi(
                        {isAuto: a.isAuto, html: c});
                  }
                  "string" == typeof m && (c = m)
                }
              } catch (p) {
                RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(p)
              }
              k = {strEditorId: b.ID, strData: c};
              e.afterGetApi(b);
              a.callback(k)
            };
            try {
              a.async = !1 === a.async ? !1
                  : !0, RAONKEDITOR.util.postimageToServer(b, f, a)
            } catch (m) {
              RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(m)
            }
          }
        } catch (q) {
          RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(q)
        }
        return c
      };
  RAONKEDITOR.setBodyValueEx = RAONKEDITOR.SetBodyValueEx = function (a, d) {
    var c = RAONKEDITOR.util.parseSetApiParam(a);
    a = c.html;
    if ("" == a || "" == RAONKEDITOR.util.trim(a)) {
      RAONKEDITOR.setBodyValue("",
          d);
    } else {
      try {
        if (d = RAONKEDITOR.util._getEditorName(d), null
        != d) {
          if (RAONKEDITOR.isLoadedEditorEx(d)) {
            try {
              var b = RAONKEDITOR.util._setEditor(d);
              if (b) {
                if ("lightview"
                    == b._config.mode) {
                  KEDITORTOP.G_CURRKEDITOR = b, b._FRAMEWIN.lightViewFunc(
                      "setBodyValueEx", a, b);
                } else {
                  b.setValueIsBusy = !0;
                  var e = b._FRAMEWIN;
                  e.getApplyDragResize(b) &&
                  b.keditor_dragresize.resizeHandleClear();
                  a = e.addHtmlToSetValue(b, a);
                  a = e.removeCarriageReturn(b, a);
                  e.setChangeModeForSetApi(b);
                  e.setGlobalTableDefaultValue();
                  b.UndoManager.reset();
                  "1" == b._config.emptyTagRemoveInSetapi
                  && (a = e.CleanZeroChar(a));
                  a = e.removeDummyTag(a);
                  a = e.removeIncorrectSpaceInTag(a);
                  a = e.RAONK_EDITOR.HTMLParser.RemoveOfficeTag2(a);
                  a = e.externalPageBreakDataRaplaceInEditor(a);
                  var f = function (a) {
                    "1" == b._config.useHtmlProcessByWorkerSetApi
                    && (e.destoryWebWorkerVar(), e.hideProcessingBackground());
                    a = e.removeTagStyle(a);
                    a = e.htmlAsciiToChar(a);
                    a = RAONKEDITOR.util.htmlRevision(a);
                    a = e.xssReplaceScript(null, a);
                    "1" == b._config.ie_BugFixed_Hyfont
                    && (a = RAONKEDITOR.util.replaceHyFont(a, b));
                    "1" == b._config.replaceEmptySpanTagInSetapi
                    && (a = e.replaceEmptySpanTag(a));
                    e.command_InsertDogBGImg(b.ID, b._EDITOR.design, "Y", "",
                        "", "",
                        "", []);
                    try {
                      for (var d in e.G_KPlugin) {
                        if ("function"
                            === typeof e.G_KPlugin[d].onBeforeDocumentWrite) {
                          var f = e.G_KPlugin[d].onBeforeDocumentWrite(
                              {html: a});
                          f && "string" == typeof f.html && (a = f.html)
                        }
                      }
                    } catch (h) {
                      RAONKEDITOR &&
                      RAONKEDITOR.logMode && console && console.log(h)
                    }
                    a = e.insertCarriageReturnBeforeCloseCell(a);
                    a = e.removeEditorAttribute(a);
                    e.setBodyValueToEditorEx(a, b);
                    e.replaceEmptySpaceInATag(b._BODY);
                    try {
                      for (d in e.G_KPlugin) {
                        if ("function"
                            === typeof e.G_KPlugin[d].onAfterDocumentWrite) {
                          e.G_KPlugin[d].onAfterDocumentWrite(
                              "SetBodyValueEx")
                        }
                      }
                    } catch (k) {
                      RAONKEDITOR && RAONKEDITOR.logMode && console
                      && console.log(k)
                    }
                    "1" == b._config.compatibility.dingBatCharSetApi
                    && e.dingBatFont(
                        "", b);
                    e.replaceFontTagToSpan(b);
                    "" != b._config.placeholder.content &&
                    e.placeholderControl(b, "set");
                    d = function (a, b) {
                      "1" == b._config.removeEmptyTagSetValue
                      && e.setEmptyTagWhiteSpace(b);
                      "0" != b._config.setDefaultStyle.value && "0"
                      != b._config.setDefaultStyle.set_style && b._BODY.id
                      != b._config.setDefaultStyle.body_id
                      && (b._BODY.id = b._config.setDefaultStyle.body_id);
                      e.G_BodyFit.SetBodyWidth();
                      b._config.zoomList && 0 < b._config.zoomList.length
                      && e.command_zoom(b.ID,
                          e.document.getElementById("keditor_design_" + b.ID));
                      "1" == b._config.useKManager && e.convertAllImageAgentSrc(
                          e._iframeDoc, !0,
                          !0);
                      for (var d = e._iframeDoc.getElementsByTagName("input"),
                          f = d.length, h = 0; h < f; h++) {
                        "radio" == d[h].type && null
                        != d[h].getAttribute("keditorchecked")
                        && (d[h].checked = !0, d[h].setAttribute("checked",
                            "checked"), d[h].removeAttribute("keditorchecked"));
                      }
                      e.adjustInputNodeForFF(b._DOC, !0);
                      0 == e.isViewMode(b) && (b._editorCustomDataMode = !0, "1"
                      == b._config.formMode
                          ? (e.ReplaceRealEventToCustomData(), e.ReplaceRealObjectToImage(
                              !1))
                          : e.ReplaceRealObjectToImage(), e.replaceClassForBorder(
                          b,
                          b._BODY, "show"), e.replaceClassForBookmark(b,
                          b._BODY, "show"));
                      e.xssReplaceScript(e._iframeDoc.body);
                      e.setScrollOverflow(b);
                      e.setStyleForTableBorderNodeClass(b);
                      e.setCssForFormMode(b);
                      "1" == b._config.adjustCurrentColorInSetApi
                      && RAONKEDITOR.util.adjustBorderStyle(null, b);
                      b.ShowTableBorder && (b.ShowTableBorder = !1);
                      b._iconEnable("");
                      0 == e.isViewMode(b) && e.setBodyDefaultValue();
                      e.wrapPtagForNotBlockTag(b);
                      e.removeEmptySpanBRTag(b._BODY);
                      e.replaceBrTag(b);
                      e.fn_IEJASOBug(b);
                      e.removeLastBrTag(b);
                      0 == e.isViewMode(b) && e.removeNbspInPTag(b);
                      RAONKEDITOR.util.setBodyBackground(b);
                      0 == e.isViewMode(b) && "2" != b._config.undoMode
                      && (b.UndoManager.putUndo(), b.UndoManager.charCount = 0, b.UndoManager.canUndo = !1, b.UndoManager.canRedo = !1);
                      b._iconEnable("");
                      e.insertImageSrc(b);
                      e.setClassTableAndCellLock(b);
                      (RAONKEDITOR.browser.chrome || RAONKEDITOR.browser.opera
                          || RAONKEDITOR.browser.safari)
                      && e.set_view_mode_auto_height(
                          b);
                      "1" == b._config.tableAutoAdjustInSetHtml
                      && e.command_AdjustTableAndCellWidth(b.ID, b,
                          {type: "setHtml"});
                      e.setAdjustTableBorder(b._DOC);
                      e.G_Ruler && e.G_Ruler.SetRulerPosition();
                      e.setAutoBodyFit(b);
                      e.G_BodyFit.noncreationAreaBackgroundStatus
                      && e.setBodyFitStyle(
                          b, !0);
                      var k = !0 === c.notFocusToEditor;
                      setTimeout(function () {
                            if (e.setFocusToBody(b) && !1 === k) {
                              e.setFocusChildForStyle(
                                  b._BODY, c.caretPos);
                            } else {
                              var a = null;
                              "" != b._config.focusInitObjId
                                  ? a = KEDITORTOP.KEDITORDOC.getElementById(
                                      b._config.focusInitObjId)
                                  : b.autoMoveInitFocusData.targetNode
                                  && (a = b.autoMoveInitFocusData.targetNode);
                              null != a ? a.focus() : RAONKEDITOR.browser.ie
                                  && (KEDITORTOP.focus(), KEDITORTOP.document.focus(), KEDITORTOP.document.body.focus())
                            }
                          },
                          1);
                      setTimeout(function () {
                        try {
                          e.adjustScroll(b);
                          e.command_BeforeSetCompleteSpellCheck(b);
                          e.g_findRepalceRange = null;
                          try {
                            "" != b._config.focusInitEditorObjId
                            && (RAONKEDITOR.SetFocusToObject(
                                b._config.focusInitEditorObjId, !1,
                                b.ID), b._config.focusInitEditorObjId = "")
                          } catch (a) {
                            RAONKEDITOR && RAONKEDITOR.logMode && console.log(a)
                          }
                          try {
                            "function"
                            === typeof KEDITORTOP.G_CURRKEDITOR._config.event.setComplete
                                ? KEDITORTOP.G_CURRKEDITOR._config.event.setComplete(
                                    b.ID) : "function"
                                === typeof KEDITORTOP.RAONKEDITOR_SetComplete &&
                                KEDITORTOP.RAONKEDITOR_SetComplete(b.ID)
                          } catch (c) {
                            RAONKEDITOR && RAONKEDITOR.logMode && console
                            && console.log(c)
                          }
                          try {
                            e.onChange({editor: b})
                          } catch (d) {
                            RAONKEDITOR && RAONKEDITOR.logMode && console
                            && console.log(d)
                          }
                          b.UndoManager.reset();
                          "2" == b._config.undoMode && b.UndoManager.putUndo(
                              !0);
                          b.setValueIsBusy = !1
                        } catch (f) {
                          e.restoreValueInSetError(b)
                        }
                      }, 300)
                    };
                    "base64" == b._config.uploadMethod
                        ? /<img[^>]+file:\/\/\/[^>]+>/i.test(a)
                            ? e.localImageToBase64InHtml({
                              isAllLocalFile: !0,
                              targetNode: b._BODY,
                              callbackFn: d,
                              editor: b
                            }) : d(null,
                                b) : d(null, b)
                  };
                  "1" == b._config.useHtmlCorrection ? "1"
                  == b._config.useHtmlProcessByWorkerSetApi
                      ? (e.showProcessingBackground(), e.releaseProcessHtmlWorker(), e.fn_processHtmlWorker(
                          {
                            editorBrowser: {
                              ie: RAONKEDITOR.browser.ie,
                              ieVersion: RAONKEDITOR.browser.ieVersion,
                              gecko: RAONKEDITOR.browser.gecko
                            },
                            editorConfig: b._config,
                            callFn: "htmlTagRevision",
                            callFnParam: [a, !1],
                            callBackFn: f
                          })) : (a = e.htmlTagRevision(a, !1), f(a)) : f(a)
                }
              }
            } catch (k) {
              e.restoreValueInSetError(b)
            }
          } else {
            null == RAONKEDITOR.InitEditorDataHashTable
            && (RAONKEDITOR.InitEditorDataHashTable =
                new RAONKEDITOR.util.hashTable), RAONKEDITOR.InitEditorDataHashTable.setItem(
                d, {mode: "setBodyValueEx", value: c})
          }
        }
      } catch (h) {
        RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(h)
      }
    }
  };
  RAONKEDITOR.getBodyValueEx = RAONKEDITOR.GetBodyValueEx = function (a, d) {
    var c = "";
    try {
      var b = RAONKEDITOR.util._setEditor(d);
      if (b) {
        0 != !!a.isAuto || "undefined" != typeof a.undoReset && 1 != a.undoReset
        || b.UndoManager.reset();
        var e = b._FRAMEWIN;
        if (1 == a.isAuto) {
          e.getHTMLForAutoSave(b, a);
          return
        }
        try {
          for (var f in e.G_KPlugin) {
            if ("function" ===
                typeof e.G_KPlugin[f].onBeforeGetApi) {
              e.G_KPlugin[f].onBeforeGetApi(
                  {targetDoc: b._DOC, isAuto: a.isAuto})
            }
          }
        } catch (k) {
          RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(k)
        }
        e.beforeGetApi(b);
        var h = b.getEditorMode();
        "source" != h && "text" != h || b.setChangeMode("design");
        e.clearAllFormControlSelected();
        e.ReplaceBase64ImageToArray(b._config, b._FRAMEWIN._iframeDoc.body);
        e.setRemoveClass(["td", "th"], ["keditor_dot"]);
        e.replaceClassForBorder(b, b._BODY, "hidden");
        e.replaceClassForBookmark(b, b._BODY, "hidden");
        e.ReplaceImageToRealObject();
        e.xssReplaceScript(e._iframeDoc.body);
        e.ClearDraggingTableAllTable();
        "1" == b._config.formMode && e.ReplaceCustomDataToRealEvent();
        var l, n;
        if (1 == a.isAuto) {
          try {
            RAONKEDITOR.browser.ie ? (l = Math.max(
                    e._iframeDoc.documentElement.scrollLeft,
                    e._iframeDoc.body.scrollLeft), n = Math.max(
                    e._iframeDoc.documentElement.scrollTop,
                    e._iframeDoc.body.scrollTop))
                : (l = e._iframeWin.scrollX, n = e._iframeWin.scrollY)
          } catch (p) {
            RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(p)
          }
        }
        0 == !!a.isAuto && e.changeBodyContenteditable(!1);
        e.changeBodyImageProperty(!0);
        f = function () {
          1 != a.isAuto && (e.removeEmptySpanBRTag(b._BODY), "1"
          == b._config.wrapPtagToGetApi && e.wrapPtagForNotBlockTag(
              b), e.removeFakeLineHeight(
              b._BODY), RAONKEDITOR.util.setInLineDefaultStyle(b));
          e.setMatchSelectedValue(b._BODY);
          e.setMatchInputValue(b._BODY, a.isAuto);
          e.adjustInputNodeForFF(b._DOC, !1);
          e.setEmptyTagWhiteSpace(b);
          var d = "", f = "", h = "";
          b._BODY.style.transformOrigin && "" != b._BODY.style.transformOrigin
          && (d = b._BODY.style.transformOrigin, b._BODY.style.transformOrigin =
              "");
          b._BODY.style.transform && "" != b._BODY.style.transform
          && (f = b._BODY.style.transform, b._BODY.style.transform = "");
          b._BODY.style.zoom && "" != b._BODY.style.zoom
          && (h = b._BODY.style.zoom, b._BODY.style.zoom = "");
          "" != b._config.placeholder.content && e.placeholderControl(b,
              "remove");
          c = b._BODY.outerHTML;
          "" != b._config.placeholder.content && e.placeholderControl(b, "set");
          "" != d && (b._BODY.style.transformOrigin = d);
          "" != f && (b._BODY.style.transform = f);
          "" != h && (b._BODY.style.zoom = h);
          c = e.dummyTagClassClear(c);
          b._PageProp.bshowgrid &&
          1 == b._PageProp.bshowgrid && e.changeBodyImageProperty(!1);
          "1" == b._config.formMode
              ? (e.ReplaceRealEventToCustomData(), e.ReplaceRealObjectToImage(
                  !1)) : e.ReplaceRealObjectToImage();
          e.changeBodyContenteditable(!0);
          if (1 == a.isAuto) {
            try {
              e._iframeWin.scroll(l, n)
            } catch (g) {
              RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(g)
            }
          }
          1 == RAONKEDITOR.browser.ie && (c = RAONKEDITOR.util.htmlToLowerCase(
              c));
          c = e.RemoveUnnecessaryChar(c);
          c = e.CleanZeroChar(c);
          d = !1;
          "1" == b._config.replaceEmptyTagWithSpace && (d = !0);
          c = RAONKEDITOR.util.htmlRevision(c,
              d);
          "1" == b._config.xhtml_value && (c = RAONKEDITOR.util.html2xhtml(c));
          e.setAddClass(["td", "th"], ["keditor_dot"]);
          0 == e.isViewMode(b) && (e.replaceClassForBorder(b, b._BODY,
              "show"), e.replaceClassForBookmark(b, b._BODY, "show"));
          c = e.replaceLineBreak(b, c);
          c = e.insertCarriageReturn(b, c);
          c = e.ReplaceArrayToBase64Image(b._config,
              b._FRAMEWIN._iframeDoc.body, c);
          e.G_Ruler && e.G_Ruler.SetRulerPosition();
          "" != b._config.placeholder.content && e.placeholderControl(b,
              "class");
          "1" == b._config.replaceRgbToHex && (c = e.replaceColorRgbToHex(c));
          c = e.replaceMsStyleName(c, b);
          try {
            for (var k in e.G_KPlugin) {
              if ("function"
                  === typeof e.G_KPlugin[k].onAfterGetApi) {
                var m = e.G_KPlugin[k].onAfterGetApi(
                    {isAuto: a.isAuto, html: c});
              }
              "string" == typeof m && (c = m)
            }
          } catch (p) {
            RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(p)
          }
          k = {strEditorId: b.ID, strData: c};
          e.afterGetApi(b);
          a.callback(k)
        };
        try {
          a.async = !1 === a.async ? !1
              : !0, RAONKEDITOR.util.postimageToServer(b, f, a)
        } catch (m) {
          RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(m)
        }
      }
    } catch (q) {
      RAONKEDITOR && RAONKEDITOR.logMode &&
      console && console.log(q)
    }
    return c
  };
  RAONKEDITOR.setBodyValue = RAONKEDITOR.SetBodyValue = function (a, d, c, b,
      e) {
    try {
      var f = RAONKEDITOR.util.parseSetApiParam(a);
      a = f.html;
      !c || "" != d && void 0 != d || (d = KEDITORTOP.G_CURRKEDITOR.ID);
      d = RAONKEDITOR.util._getEditorName(d);
      if (null != d) {
        if (RAONKEDITOR.isLoadedEditorEx(d)) {
          try {
            var k = RAONKEDITOR.util._setEditor(d);
            if (k) {
              if ("lightview"
                  == k._config.mode) {
                KEDITORTOP.G_CURRKEDITOR = k, k._FRAMEWIN.lightViewFunc(
                    "setBodyValue", a, k);
              } else {
                0 == !!c && 0 == !!b && (k.setValueIsBusy = !0);
                if ("" == a || "" ==
                    RAONKEDITOR.util.trim(a)) {
                  a = "<p></p>";
                }
                var h = k._FRAMEWIN;
                h.getApplyDragResize(k)
                && k.keditor_dragresize.resizeHandleClear();
                a = h.addHtmlToSetValue(k, a);
                a = h.removeCarriageReturn(k, a);
                h.setChangeModeForSetApi(k, b);
                h.setGlobalTableDefaultValue();
                k.UndoManager.reset();
                "1" == k._config.emptyTagRemoveInSetapi && (a = h.CleanZeroChar(
                    a));
                a = h.removeDummyTag(a);
                a = h.removeIncorrectSpaceInTag(a);
                a = h.RAONK_EDITOR.HTMLParser.RemoveOfficeTag2(a);
                a = h.externalPageBreakDataRaplaceInEditor(a);
                d = function (a) {
                  "1" == k._config.useHtmlProcessByWorkerSetApi &&
                  (h.destoryWebWorkerVar(), h.hideProcessingBackground());
                  a = h.removeTagStyle(a);
                  a = h.htmlAsciiToChar(a);
                  var d = "BackCompat" == h._iframeDoc.compatMode;
                  RAONKEDITOR.browser.ie && 7 < RAONKEDITOR.browser.ieVersion
                  && 11
                  > RAONKEDITOR.browser.ieVersion && 1 != d ? 0 == !!c
                      && (a = RAONKEDITOR.util.htmlRevision(a))
                      : a = RAONKEDITOR.util.htmlRevision(a);
                  1 != b && (a = h.xssReplaceScript(null, a));
                  a = h.adjustInputChecked(a);
                  "1" == k._config.ie_BugFixed_Hyfont
                  && (a = RAONKEDITOR.util.replaceHyFont(a, k));
                  "1" == k._config.replaceEmptySpanTagInSetapi &&
                  (a = h.replaceEmptySpanTag(a));
                  try {
                    for (var l in h.G_KPlugin) {
                      if ("function"
                          === typeof h.G_KPlugin[l].onBeforeDocumentWrite) {
                        var n = h.G_KPlugin[l].onBeforeDocumentWrite({html: a});
                        n && "string" == typeof n.html && (a = n.html)
                      }
                    }
                  } catch (t) {
                    RAONKEDITOR && RAONKEDITOR.logMode && console
                    && console.log(t)
                  }
                  a = h.insertCarriageReturnBeforeCloseCell(a);
                  a = h.removeEditorAttribute(a);
                  h.setBodyValueToEditor(a, k);
                  h.replaceEmptySpaceInATag(k._BODY);
                  try {
                    for (l in h.G_KPlugin) {
                      if ("function"
                          === typeof h.G_KPlugin[l].onAfterDocumentWrite) {
                        h.G_KPlugin[l].onAfterDocumentWrite(
                            "SetBodyValue")
                      }
                    }
                  } catch (v) {
                    RAONKEDITOR &&
                    RAONKEDITOR.logMode && console && console.log(v)
                  }
                  "1" == k._config.compatibility.dingBatCharSetApi
                  && h.dingBatFont(
                      "", k);
                  h.replaceFontTagToSpan(k);
                  "" != k._config.placeholder.content && h.placeholderControl(k,
                      "set");
                  d = function (a, d) {
                    "1" == d._config.removeEmptyTagSetValue
                    && h.setEmptyTagWhiteSpace(d);
                    "0" != d._config.setDefaultStyle.value && "0"
                    != d._config.setDefaultStyle.set_style && d._BODY.id
                    != d._config.setDefaultStyle.body_id
                    && (d._BODY.id = d._config.setDefaultStyle.body_id);
                    h.G_BodyFit.SetBodyWidth();
                    0 == !!c && "1" == d._config.useKManager &&
                    h.convertAllImageAgentSrc(h._iframeDoc, !0, !0);
                    for (var k = h._iframeDoc.getElementsByTagName("input"),
                        l = k.length, m = 0; m < l; m++) {
                      "radio" == k[m].type && null
                      != k[m].getAttribute("keditorchecked")
                      && (k[m].checked = !0, k[m].setAttribute("checked",
                          "checked"), k[m].removeAttribute("keditorchecked"));
                    }
                    h.adjustInputNodeForFF(d._DOC, !0);
                    1 != c && 0 == h.isViewMode(d)
                    && (d._editorCustomDataMode = !0, "1" == d._config.formMode
                        ? (h.ReplaceRealEventToCustomData(), h.ReplaceRealObjectToImage(
                            !1))
                        : h.ReplaceRealObjectToImage(), h.replaceClassForBookmark(
                        d,
                        d._BODY, "show"));
                    h.xssReplaceScript(h._iframeDoc.body);
                    e && h.ReplaceRealObjectToImage();
                    h.setStyleForTableBorderNodeClass(d);
                    h.setCssForFormMode(d);
                    "1" == d._config.adjustCurrentColorInSetApi
                    && RAONKEDITOR.util.adjustBorderStyle(null, d);
                    d.ShowTableBorder && (d.ShowTableBorder = !1);
                    d._iconEnable("");
                    0 == h.isViewMode(d) && h.setBodyDefaultValue();
                    h.wrapPtagForNotBlockTag(d);
                    h.removeEmptySpanBRTag(d._BODY);
                    h.replaceBrTag(d);
                    h.fn_IEJASOBug(d);
                    h.removeLastBrTag(d);
                    0 == h.isViewMode(d) && h.removeNbspInPTag(d);
                    1 != c &&
                    0 == h.isViewMode(d) && (h.replaceClassForBorder(d, d._BODY,
                        "show"), h.replaceClassForBookmark(d, d._BODY, "show"));
                    RAONKEDITOR.util.setBodyBackground(d);
                    0 == h.isViewMode(d) && "2" != d._config.undoMode
                    && (d.UndoManager.putUndo(), d.UndoManager.charCount = 0, d.UndoManager.canUndo = !1, d.UndoManager.canRedo = !1);
                    d._iconEnable("");
                    h.insertImageSrc(d, null, b);
                    h.setClassTableAndCellLock(d);
                    (RAONKEDITOR.browser.chrome || RAONKEDITOR.browser.opera
                        || RAONKEDITOR.browser.safari)
                    && h.set_view_mode_auto_height(
                        d);
                    "1" == d._config.tableAutoAdjustInSetHtml &&
                    h.command_AdjustTableAndCellWidth(d.ID, d,
                        {type: "setHtml"});
                    h.setAdjustTableBorder(d._DOC);
                    b && "1" == d._config.useSelectionMark
                    && h.setRangeSelectionMarkInDesign();
                    h.G_Ruler && h.G_Ruler.SetRulerPosition();
                    h.setAutoBodyFit(d);
                    h.G_BodyFit.noncreationAreaBackgroundStatus
                    && h.setBodyFitStyle(
                        d, !0);
                    var n = !0 === f.notFocusToEditor;
                    setTimeout(function () {
                      if (h.setFocusToBody(d) && !1 === n) {
                        h.setFocusChildForStyle(
                            d._BODY, f.caretPos);
                      } else {
                        var a = null;
                        "" != d._config.focusInitObjId
                            ? a = KEDITORTOP.KEDITORDOC.getElementById(
                                d._config.focusInitObjId) :
                            d.autoMoveInitFocusData.targetNode
                            && (a = d.autoMoveInitFocusData.targetNode);
                        null != a ? a.focus() : RAONKEDITOR.browser.ie
                            && (KEDITORTOP.focus(), KEDITORTOP.document.focus(), KEDITORTOP.document.body.focus())
                      }
                    }, 1);
                    b || setTimeout(function () {
                          try {
                            h.adjustScroll(d);
                            h.command_BeforeSetCompleteSpellCheck(d);
                            h.g_findRepalceRange = null;
                            try {
                              "" != d._config.focusInitEditorObjId
                              && (RAONKEDITOR.SetFocusToObject(
                                  d._config.focusInitEditorObjId, !1,
                                  d.ID), d._config.focusInitEditorObjId = "")
                            } catch (a) {
                              RAONKEDITOR && RAONKEDITOR.logMode &&
                              console.log(a)
                            }
                            try {
                              "function"
                              === typeof KEDITORTOP.G_CURRKEDITOR._config.event.setComplete
                                  ? KEDITORTOP.G_CURRKEDITOR._config.event.setComplete(
                                      d.ID) : "function"
                                  === typeof KEDITORTOP.RAONKEDITOR_SetComplete
                                  && KEDITORTOP.RAONKEDITOR_SetComplete(d.ID)
                            } catch (b) {
                              RAONKEDITOR && RAONKEDITOR.logMode && console
                              && console.log(b)
                            }
                            try {
                              h.onChange({editor: d})
                            } catch (c) {
                              RAONKEDITOR && RAONKEDITOR.logMode && console
                              && console.log(c)
                            }
                            d.UndoManager.reset();
                            "2" == d._config.undoMode && d.UndoManager.putUndo(!0);
                            d.setValueIsBusy = !1
                          } catch (e) {
                            h.restoreValueInSetError(d)
                          }
                        },
                        300)
                  };
                  "base64" == k._config.uploadMethod
                      ? /<img[^>]+file:\/\/\/[^>]+>/i.test(a)
                          ? h.localImageToBase64InHtml({
                            isAllLocalFile: !0,
                            targetNode: k._BODY,
                            callbackFn: d,
                            editor: k
                          }) : d(null, k) : d(null, k)
                };
                "1" == k._config.useHtmlCorrection ? "1"
                == k._config.useHtmlProcessByWorkerSetApi
                    ? (h.showProcessingBackground(), h.releaseProcessHtmlWorker(), h.fn_processHtmlWorker(
                        {
                          editorBrowser: {
                            ie: RAONKEDITOR.browser.ie,
                            ieVersion: RAONKEDITOR.browser.ieVersion,
                            gecko: RAONKEDITOR.browser.gecko
                          }, editorConfig: k._config, callFn: "htmlTagRevision",
                          callFnParam: [a, !1], callBackFn: d
                        })) : (a = h.htmlTagRevision(a, !1), d(a)) : d(a)
              }
            }
          } catch (l) {
            h.restoreValueInSetError(k)
          }
        } else {
          null == RAONKEDITOR.InitEditorDataHashTable
          && (RAONKEDITOR.InitEditorDataHashTable = new RAONKEDITOR.util.hashTable), RAONKEDITOR.InitEditorDataHashTable.setItem(
              d, {mode: "setBodyValue", value: f})
        }
      }
    } catch (n) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(n)
    }
  };
  RAONKEDITOR.getBodyValue = RAONKEDITOR.GetBodyValue = function (a, d) {
    var c = "";
    try {
      var b = RAONKEDITOR.util._setEditor(d);
      if (b) {
        0 != !!a.isAuto ||
        "undefined" != typeof a.undoReset && 1 != a.undoReset
        || b.UndoManager.reset();
        var e = b._FRAMEWIN;
        if (1 == a.isAuto) {
          e.getHTMLForAutoSave(b, a);
        } else {
          try {
            for (var f in e.G_KPlugin) {
              if ("function"
                  === typeof e.G_KPlugin[f].onBeforeGetApi) {
                e.G_KPlugin[f].onBeforeGetApi(
                    {targetDoc: b._DOC, isAuto: a.isAuto})
              }
            }
          } catch (k) {
            RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(k)
          }
          e.beforeGetApi(b);
          var h = b.getEditorMode();
          "source" != h && "text" != h || b.setChangeMode("design");
          e.clearAllFormControlSelected();
          e.ReplaceBase64ImageToArray(b._config,
              b._FRAMEWIN._iframeDoc.body);
          e.setRemoveClass(["td", "th"], ["keditor_dot"]);
          e.replaceClassForBorder(b, b._BODY, "hidden");
          e.replaceClassForBookmark(b, b._BODY, "hidden");
          e.ReplaceImageToRealObject();
          e.xssReplaceScript(e._iframeDoc.body);
          e.ClearDraggingTableAllTable();
          "1" == b._config.formMode && e.ReplaceCustomDataToRealEvent();
          e.changeBodyImageProperty(!0);
          f = function () {
            1 != a.isAuto && (e.removeEmptySpanBRTag(b._BODY), "1"
            == b._config.wrapPtagToGetApi && e.wrapPtagForNotBlockTag(
                b), e.removeFakeLineHeight(b._BODY),
                RAONKEDITOR.util.setInLineDefaultStyle(b));
            e.setMatchSelectedValue(b._BODY);
            e.setMatchInputValue(b._BODY, a.isAuto);
            e.adjustInputNodeForFF(b._DOC, !1);
            e.setEmptyTagWhiteSpace(b);
            "" != b._config.placeholder.content && e.placeholderControl(b,
                "remove");
            c = b._BODY.innerHTML;
            "" != b._config.placeholder.content && e.placeholderControl(b,
                "set");
            c = e.dummyTagClassClear(c);
            b._PageProp.bshowgrid && 1 == b._PageProp.bshowgrid
            && e.changeBodyImageProperty(!1);
            "1" == b._config.formMode
                ? (e.ReplaceRealEventToCustomData(), e.ReplaceRealObjectToImage(
                    !1)) :
                e.ReplaceRealObjectToImage();
            1 == RAONKEDITOR.browser.ie
            && (c = RAONKEDITOR.util.htmlToLowerCase(c));
            c = e.RemoveUnnecessaryChar(c);
            c = e.CleanZeroChar(c);
            var d = !1;
            "1" == b._config.replaceEmptyTagWithSpace && (d = !0);
            c = RAONKEDITOR.util.htmlRevision(c, d);
            "1" == b._config.xhtml_value && (c = RAONKEDITOR.util.html2xhtml(
                c));
            e.setAddClass(["td", "th"], ["keditor_dot"]);
            0 == e.isViewMode(b) && (e.replaceClassForBorder(b, b._BODY,
                "show"), e.replaceClassForBookmark(b, b._BODY, "show"));
            c = e.replaceLineBreak(b, c);
            c = e.insertCarriageReturn(b,
                c);
            c = e.ReplaceArrayToBase64Image(b._config,
                b._FRAMEWIN._iframeDoc.body, c);
            "" != b._config.placeholder.content && e.placeholderControl(b,
                "class");
            "1" == b._config.replaceRgbToHex && (c = e.replaceColorRgbToHex(c));
            c = e.replaceMsStyleName(c, b);
            try {
              for (var f in e.G_KPlugin) {
                if ("function"
                    === typeof e.G_KPlugin[f].onAfterGetApi) {
                  var h = e.G_KPlugin[f].onAfterGetApi(
                      {isAuto: a.isAuto, html: c});
                }
                "string" == typeof h && (c = h)
              }
            } catch (k) {
              RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(k)
            }
            d = {strEditorId: b.ID, strData: c};
            e.afterGetApi(b);
            a.callback(d)
          };
          try {
            a.async = !1 === a.async ? !1
                : !0, RAONKEDITOR.util.postimageToServer(b, f, a)
          } catch (l) {
            RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(l)
          }
        }
      }
    } catch (n) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(n)
    }
  };
  RAONKEDITOR.loadHtmlValueExFromURL = RAONKEDITOR.LoadHtmlValueExFromURL = function (a,
      d) {
    try {
      if (d = RAONKEDITOR.util._getEditorName(d), null
      != d) {
        if (RAONKEDITOR.isLoadedEditorEx(d)) {
          try {
            if (RAONKEDITOR.util._setEditor(d)) {
              var c = RAONKEDITOR.ajax.load(a);
              RAONKEDITOR.setHtmlContents(c, d)
            }
          } catch (b) {
            RAONKEDITOR &&
            RAONKEDITOR.logMode && console && console.log(b)
          }
        } else {
          null == RAONKEDITOR.InitEditorDataHashTable
          && (RAONKEDITOR.InitEditorDataHashTable = new RAONKEDITOR.util.hashTable), RAONKEDITOR.InitEditorDataHashTable.setItem(
              d, {mode: "loadHtmlValueExFromURL", value: a})
        }
      }
    } catch (e) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(e)
    }
  };
  RAONKEDITOR.loadHtmlValueExFromServerURL = RAONKEDITOR.LoadHtmlValueExFromServerURL = function (a,
      d) {
    try {
      if (d = RAONKEDITOR.util._getEditorName(d), null
      != d) {
        if (RAONKEDITOR.isLoadedEditorEx(d)) {
          try {
            var c =
                RAONKEDITOR.util._setEditor(d);
            if (c) {
              0 != a.toLowerCase().indexOf("http:") && 0
              != a.toLowerCase().indexOf(
                  "https:") && (0 < a.toLowerCase().indexOf("www.")
                  ? a = location.protocol + "//" + a : 0
                  == a.toLowerCase().indexOf(
                      "/") && (a = location.protocol + "//" + location.host
                      + a));
              var b = "", b = b + ("kc" + RAONKSolution.Agent.formfeed + "c05"
                      + RAONKSolution.Agent.vertical),
                  b = b + ("k30" + RAONKSolution.Agent.formfeed + a),
                  b = RAONKEDITOR.util.makeEncryptParam(b);
              params = "k00=" + b;
              var e = RAONKEDITOR.ajax.postData(c._config.handlerUrl, params),
                  e = KEDITORTOP.RAONKEDITOR.util.parseDataFromServer(e);
              -1 >= e.indexOf("[OK]") ? alert(e) : (e = e.replace("[OK]",
                  ""), e = RAONKEDITOR.util.makeDecryptReponseMessage(
                  e), RAONKEDITOR.setHtmlContents(e, d))
            }
          } catch (f) {
            RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(f)
          }
        } else {
          null == RAONKEDITOR.InitEditorDataHashTable
          && (RAONKEDITOR.InitEditorDataHashTable = new RAONKEDITOR.util.hashTable), RAONKEDITOR.InitEditorDataHashTable.setItem(
              d, {mode: "loadHtmlValueExFromServerURL", value: a})
        }
      }
    } catch (k) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(k)
    }
  };
  RAONKEDITOR.setDirectEditHtmlUrl =
      RAONKEDITOR.SetDirectEditHtmlUrl = function (a, d) {
        try {
          if (d = RAONKEDITOR.util._getEditorName(d), null
          != d) {
            if (RAONKEDITOR.isLoadedEditorEx(d)) {
              if (a && "" != a) {
                try {
                  var c = RAONKEDITOR.util._setEditor(d);
                  if (c) {
                    c.ShowTableBorder && (c.ShowTableBorder = !1);
                    c._config.directEditHtmlUrl = a;
                    var b = c._FRAMEWIN;
                    b.getApplyDragResize(c)
                    && c.keditor_dragresize.resizeHandleClear();
                    b.loadDirectEditHtmlUrl(c._config)
                  }
                } catch (e) {
                  RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(
                      e)
                }
              }
            } else {
              null == RAONKEDITOR.InitEditorDataHashTable &&
              (RAONKEDITOR.InitEditorDataHashTable = new RAONKEDITOR.util.hashTable), RAONKEDITOR.InitEditorDataHashTable.setItem(
                  d, {mode: "setDirectEditHtmlUrl", value: a})
            }
          }
        } catch (f) {
          RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(f)
        }
      };
  RAONKEDITOR.getBodyTextValue = RAONKEDITOR.GetBodyTextValue = function (a,
      d) {
    var c = "";
    try {
      var b = RAONKEDITOR.util._setEditor(d), e = b._FRAMEWIN;
      if (b) {
        try {
          var f = b.getEditorMode();
          "source" != f && "text" != f || b.setChangeMode("design");
          var k = b._BODY;
          if ("string" == typeof k.innerText) {
            var h = k.outerHTML,
                h = h.replace(/<[a-zA-Z]+(\s+.*?)>/g, function (a, b) {
                  return a.replace(b, "")
                }), h = h.replace(/<body>\s*</gi, "<"),
                h = h.replace(/>\s*<\/body>/gi, ">"),
                h = h.replace(/<li>/gi, "<p>"),
                h = h.replace(/<\/li>/gi, "</p>"),
                h = h.replace(/<td>((?:.|\s)*?)<\/td>/gi, function (a, b) {
                  0 > b.toLowerCase().indexOf("<p>") && (a = a.replace("<td>",
                      "<p>"), a = a.replace("</td>", "</p>"));
                  return a
                }), h = h.replace(/<th>((?:.|\s)*?)<\/th>/gi, function (a, b) {
                  0 > b.toLowerCase().indexOf("<p>") && (a = a.replace("<th>",
                      "<p>"), a = a.replace("</th>", "</p>"));
                  return a
                }),
                h = h.replace(/<p><\/p>/gi, ""),
                h = h.replace(/<p>(?:<span>)*(<br>)(?:<\/span>)*<\/p>/gi,
                    "<br>"),
                h = h.replace(/<p>(?:<span>)*(&nbsp;)(?:<\/span>)*<\/p>/gi,
                    "<br>"),
                h = h.replace(/<(?!br\s*\/?>|\/?p\s*\/?>)[^>]+>/gi, ""),
                h = h.replace(/<p>/gi, ""),
                h = h.replace(/<br><\/p>/gi, "</p>"),
                h = h.replace(/<\/p>/gi, "<br>"), h = h.replace(/<br>$/i, ""),
                l = b._FRAMEWIN.document.createElement("div");
            l.style.position = "absolute";
            l.style.left = "-1000px";
            b._FRAMEWIN.document.body.appendChild(l);
            l.innerHTML = h;
            c = l.innerText;
            l.parentNode.removeChild(l)
          } else {
            c =
                b._BODY.innerHTML;
            c = c.replace(
                RegExp("<[^>]*>s*([^<>\\n]*\\n[^<>\\n]*)*s*</[^>]*>", "g"),
                function (a) {
                  return a.replace(/\n/g, " ")
                });
            c = c.replace(/\r/g, "");
            c = c.replace(/[\n|\t]/g, "");
            c = c.replace(/[\v|\f]/g, "");
            c = c.replace(/<p><br><\/p>/gi, "\n");
            c = c.replace(/<P>&nbsp;<\/P>/gi, "\n");
            RAONKEDITOR.browser.ie && 11 == RAONKEDITOR.browser.ieVersion
            && (c = c.replace(/<br(\s)*\/?><\/p>/gi, "</p>"), c = c.replace(
                /<br(\s[^\/]*)?><\/p>/gi, "</p>"));
            var c = c.replace(/<br(\s)*\/?>/gi, "\n"),
                c = c.replace(/<br(\s[^\/]*)?>/gi, "\n"),
                c = c.replace(/<\/p(\s[^\/]*)?>/gi, "\n"),
                c = c.replace(/<\/li(\s[^\/]*)?>/gi, "\n"),
                c = c.replace(/<\/tr(\s[^\/]*)?>/gi, "\n"),
                n = c.lastIndexOf("\n");
            -1 < n && "\n" == c.substring(n) && (c = c.substring(0, n))
          }
          c = e.removeStripTags(c, null);
          c = e.unhtmlSpecialChars(c);
          a.callback({strEditorId: b.ID, strData: c})
        } catch (p) {
          c = ""
        }
      }
    } catch (m) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(m)
    }
  };
  RAONKEDITOR.encodeMime = RAONKEDITOR.EncodeMime = function (a, d) {
    try {
      var c = RAONKEDITOR.util._setEditor(d), b = c._config, e = c._FRAMEWIN;
      if ("1" ==
          b.mimeUse) {
        0 == !!a.htmlType && (a.htmlType = "htmlvalueex");
        var f = !0;
        !1 === a.async && (f = !1);
        RAONKEDITOR.GetHtmlContents({
          type: a.htmlType, isAuto: !1, async: f, callback: function (d) {
            d = d.strData;
            var f = function (b) {
              a.callback({strEditorId: c.ID, strData: b})
            };
            "1" == b.useKManager ? e.encodeMimeAgent(d, a, c, f)
                : e.G_MIME_OBJ.toMIME(d, null, f)
          }
        }, c.ID)
      }
    } catch (k) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(k)
    }
  };
  RAONKEDITOR.decodeMime = RAONKEDITOR.DecodeMime = function (a, d) {
    try {
      var c = RAONKEDITOR.util._setEditor(d), b = c._FRAMEWIN;
      if ("1" == c._config.useKManager) {
        var e = [["kcmd", "KC33"]];
        e.push(["k00", {
          browser: RAONKEDITOR.UserAgent.browser.name.toLowerCase(),
          useragent: encodeURIComponent(navigator.userAgent)
        }]);
        e.push(["k15", 1]);
        e.push(["k71", b.getHttpHeaderAgentData(c)]);
        e.push(["kp1", 1]);
        e.push(["kp2", ""]);
        var f = a.mimeData, f = f.replace(/\r\n/g, "\n"),
            f = f.replace(/\n/g, "\r\n");
        e.push(["kp3", f]);
        var k = b.setManagerParam("{}", e), k = k + "\x0B", e = !0;
        !1 === a.async && (e = !1);
        b.sendMessageToAgent(k, function (b) {
          b = KEDITORTOP.RAONKSolution.Agent.parseRtn(b);
          var d = b.splitCode, e = b.code;
          b = b.valueArr;
          if (1E3 == e || 7777 == e) {
            var f = {strEditorId: c.ID, strData: b[0]};
            if (7777 == e && " " == d) {
              for (var e = b.length, h = 1; h < e;
                  h++) {
                f.strData += d + b[h];
              }
            }
            try {
              a.callback(f)
            } catch (k) {
              RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(k)
            }
          } else {
            f = {strEditorId: c.ID, strData: "0"}, a.callback(f)
          }
        }, null, e)
      } else {
        b.G_MIME_OBJ.toHTML(a.mimeData, function (b) {
          a.callback({strEditorId: c.ID, strData: b})
        })
      }
    } catch (h) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(h)
    }
  };
  RAONKEDITOR.decodeMimeEx = RAONKEDITOR.DecodeMimeEx =
      function (a, d) {
        try {
          var c = RAONKEDITOR.util._setEditor(d);
          c && RAONKEDITOR.DecodeMime({
            mimeData: a, callback: function (a) {
              if (0 < a.strData.length && "0" != a.strData) {
                var b = c._config.xss_use, d = c._config.xss_remove_tags,
                    h = c._config.xss_remove_events;
                c._config.xss_use = "";
                c._config.xss_remove_tags = "";
                c._config.xss_remove_events = "";
                RAONKEDITOR.setHtmlValueEx(a.strData, c.ID);
                c._config.xss_use = b;
                c._config.xss_remove_tags = d;
                c._config.xss_remove_events = h
              }
            }
          }, c.ID)
        } catch (b) {
          RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(b)
        }
      };
  RAONKEDITOR.isEmpty = RAONKEDITOR.IsEmpty = function (a) {
    var d = !1;
    try {
      var c = RAONKEDITOR.util._setEditor(a);
      if (c) {
        if ("" != c._config.defaultMessage) {
          return !0;
        }
        var b = c._FRAMEWIN,
            e = b._iframeDoc.body.textContent || b._iframeDoc.body.innerText;
        "" != e && (e = e.replace(/ /gi, ""), e = e.replace(/\s/gi,
            ""), e = e.replace(/\t/g, ""), e = e.replace(/\r?\n?\r?\n/g,
            ""), e = e.replace(/&nbsp;/gi, ""), e = e.replace(/<br \/>/gi,
            ""), e = e.replace(/<br>/gi, ""), e = e.replace(
            /<p *([^>?+])*><\/p>/gi, ""));
        var f = b._iframeDoc.body.innerHTML;
        if ("" != f) {
          var f =
                  f.replace(/ /gi, ""), f = f.replace(/\s/gi, ""),
              f = f.replace(/\t/g, ""), f = f.replace(/\r?\n?\r?\n/g, ""),
              f = f.replace(/&nbsp;/gi, ""), f = f.replace(/<br \/>/gi, ""),
              f = f.replace(/<br>/gi, ""), k = c._config.removeEmptyTag;
          c._config.removeEmptyTag = "1";
          f = b.CleanZeroChar(f);
          c._config.removeEmptyTag = k;
          f = f.replace(/<p *([^>?+])*><\/p>/gi, "");
          1 == RAONKEDITOR.util.isEmptyContents(f) && (f = "")
        }
        d = 0 == e.length && 0 == f.length ? !0 : !1
      } else {
        d = !1
      }
    } catch (h) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(h)
    }
    return d
  };
  RAONKEDITOR.isEmptyToString =
      RAONKEDITOR.IsEmptyToString = function (a) {
        var d = !1, d = RAONKEDITOR.isEmpty(a);
        return d = d.toString().toLowerCase()
      };
  RAONKEDITOR.setInsertHTMLToObject = RAONKEDITOR.SetInsertHTMLToObject = function (a,
      d, c) {
    if (void 0 != a && "" != a && void 0 != d && "" != d) {
      try {
        var b = RAONKEDITOR.util._setEditor(c);
        if (b) {
          var e = b._FRAMEWIN, f = b._DOC.getElementById(d);
          a = e.RAONK_EDITOR.HTMLParser.RemoveOfficeTag2(a);
          a = b._FRAMEWIN.externalPageBreakDataRaplaceInEditor(a);
          "1" == b._config.replaceEmptySpanTagInSetapi
          && (a = e.replaceEmptySpanTag(a));
          f &&
          (f.innerHTML = a);
          setTimeout(function () {
            try {
              "function"
              === typeof KEDITORTOP.G_CURRKEDITOR._config.event.setInsertComplete
                  ? KEDITORTOP.G_CURRKEDITOR._config.event.setInsertComplete(
                      b.ID)
                  : "function"
                  === typeof KEDITORTOP.RAONKEDITOR_SetInsertComplete
                  && KEDITORTOP.RAONKEDITOR_SetInsertComplete(b.ID)
            } catch (a) {
              RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(a)
            }
          }, 200)
        }
      } catch (k) {
        RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(k)
      }
    }
  };
  RAONKEDITOR.setInsertHTML = RAONKEDITOR.SetInsertHTML = function (a, d) {
    if (void 0 !=
        a && "" != a) {
      try {
        var c = RAONKEDITOR.util._setEditor(d);
        if (c) {
          var b = c._FRAMEWIN;
          b.restoreSelection();
          b.setFocusToBody();
          setTimeout(function () {
            0 < c.UndoManager.charCount && c.UndoManager.putUndo();
            b.ReplaceImageToRealObject();
            b.xssReplaceScript(b._iframeDoc);
            b.ClearDraggingTableAllTable();
            if (!RAONKEDITOR.browser.chrome && !RAONKEDITOR.browser.opera) {
              var d = document.createElement("div");
              d.innerHTML = a;
              d.lastChild && 1 == d.lastChild.nodeType && -1
              < ",input,select,button,textarea,".indexOf(
                  "," + d.lastChild.tagName.toLowerCase() +
                  ",") && (a += unescape("%uFEFF"))
            }
            a = b.RAONK_EDITOR.HTMLParser.RemoveOfficeTag2(a);
            a = b.externalPageBreakDataRaplaceInEditor(a);
            "1" == c._config.replaceEmptySpanTagInSetapi
            && (a = b.replaceEmptySpanTag(a));
            a = b.removeEditorAttribute(a);
            try {
              var e = c.isTablePaste;
              e && (c.isTablePaste = !1);
              b.pasteHtmlAtCaretHuge(a, !0, !1, e)
            } catch (h) {
              RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(h)
            }
            b.isViewMode(c)
            || (c._editorCustomDataMode = !0, b.ReplaceRealObjectToImage());
            try {
              b.onChange({editor: c, isPossibleDirty: !0})
            } catch (l) {
              RAONKEDITOR &&
              RAONKEDITOR.logMode && console && console.log(l)
            }
            c.UndoManager.putUndo();
            c.UndoManager.charCount = 0;
            c._iconEnable("");
            try {
              "function"
              === typeof KEDITORTOP.G_CURRKEDITOR._config.event.setInsertComplete
                  ? KEDITORTOP.G_CURRKEDITOR._config.event.setInsertComplete(
                      c.ID)
                  : "function"
                  === typeof KEDITORTOP.RAONKEDITOR_SetInsertComplete
                  && KEDITORTOP.RAONKEDITOR_SetInsertComplete(c.ID)
            } catch (n) {
              RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(n)
            }
          }, 200)
        }
      } catch (e) {
        RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(e)
      }
    }
  };
  RAONKEDITOR.setInsertHTMLEx = RAONKEDITOR.SetInsertHTMLEx = function (a, d,
      c) {
    if (void 0 != a && "" != a) {
      try {
        var b = RAONKEDITOR.util._setEditor(c), e = b._FRAMEWIN;
        b && (e.restoreSelection(), e.setFocusToBody(), setTimeout(function () {
          if ("" != d && (0 == d || 1 == d)) {
            var c = b._BODY;
            if (1 == RAONKEDITOR.browser.chrome || 1
                == RAONKEDITOR.browser.opera) {
              var f = document.createElement("p");
              f.innerHTML = "<br>";
              c = f;
              0 == d ? b._BODY.insertBefore(f, b._BODY.firstChild) : 1 == d
                  && b._BODY.appendChild(f)
            }
            e.doSetCaretPosition(c, d)
          }
          0 < b.UndoManager.charCount &&
          b.UndoManager.putUndo();
          e.ReplaceImageToRealObject();
          e.xssReplaceScript(e._iframeDoc);
          e.ClearDraggingTableAllTable();
          a = e.externalPageBreakDataRaplaceInEditor(a);
          a = e.removeEditorAttribute(a);
          if (1 == RAONKEDITOR.browser.chrome || 1 == RAONKEDITOR.browser.opera
              || 1 == RAONKEDITOR.browser.gecko) {
            1 == RAONKEDITOR.browser.gecko && (c = document.createElement(
                "div"), c.innerHTML = a, c.lastChild && 1
            == c.lastChild.nodeType
            && -1 < ",input,select,button,textarea,".indexOf(
                "," + c.lastChild.tagName.toLowerCase() + ",")
            && (a += unescape(
                "%uFEFF")));
            try {
              e._iframeDoc.execCommand("inserthtml", !1, a)
            } catch (l) {
              RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(l)
            }
          } else {
            c = document.createElement("div");
            c.innerHTML = a;
            c.lastChild && 1 == c.lastChild.nodeType && -1
            < ",input,select,button,textarea,".indexOf(
                "," + c.lastChild.tagName.toLowerCase() + ",")
            && (a += unescape(
                "%uFEFF"));
            try {
              e.pasteHtmlAtCaretHuge(a, !0)
            } catch (n) {
              RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(n)
            }
          }
          e.isViewMode(b)
          || (b._editorCustomDataMode = !0, e.ReplaceRealObjectToImage());
          try {
            e.onChange({
              editor: b,
              isPossibleDirty: !0
            })
          } catch (p) {
            RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(p)
          }
          b.UndoManager.putUndo();
          b.UndoManager.charCount = 0;
          b._iconEnable("");
          try {
            "function"
            === typeof KEDITORTOP.G_CURRKEDITOR._config.event.setInsertComplete
                ? KEDITORTOP.G_CURRKEDITOR._config.event.setInsertComplete(b.ID)
                : "function" === typeof KEDITORTOP.RAONKEDITOR_SetInsertComplete
                && KEDITORTOP.RAONKEDITOR_SetInsertComplete(b.ID)
          } catch (m) {
            RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(m)
          }
        }, 200))
      } catch (f) {
        RAONKEDITOR &&
        RAONKEDITOR.logMode && console && console.log(f)
      }
    }
  };
  RAONKEDITOR.setInsertText = RAONKEDITOR.SetInsertText = function (a, d) {
    if (void 0 != a && "" != a) {
      try {
        var c = RAONKEDITOR.util._setEditor(d), b = c._FRAMEWIN;
        c
        && (c.UndoManager.putUndo(), b.restoreSelection(), b.setFocusToBody(), setTimeout(
            function () {
              var d = b.getFirstRange(), e = d.range, d = d.sel;
              e.deleteContents();
              0 == e.collapsed ? b.setRestoreCaretPos(!0)
                  : b.setRestoreCaretPos(
                      !1);
              a += '<span id="keditor_symbol">keditor_symbol</span>';
              e.pasteHtml(a);
              var h = b._iframeDoc.getElementById("keditor_symbol");
              try {
                e.setStartBefore(h), e.setEndBefore(
                    h), d.removeAllRanges(), d.addRange(
                    e), h.parentNode.removeChild(h)
              } catch (l) {
                h && h.parentNode.removeChild(h)
              }
              try {
                b.onChange({editor: c, isPossibleDirty: !0})
              } catch (n) {
                RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(n)
              }
              c.UndoManager.putUndo();
              try {
                "function"
                === typeof KEDITORTOP.G_CURRKEDITOR._config.event.setInsertComplete
                    ? KEDITORTOP.G_CURRKEDITOR._config.event.setInsertComplete(
                        c.ID) : "function"
                    === typeof KEDITORTOP.RAONKEDITOR_SetInsertComplete
                    && KEDITORTOP.RAONKEDITOR_SetInsertComplete(c.ID)
              } catch (p) {
                RAONKEDITOR &&
                RAONKEDITOR.logMode && console && console.log(p)
              }
            }, 200))
      } catch (e) {
        RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(e)
      }
    }
  };
  RAONKEDITOR.setEditorBorder = RAONKEDITOR.SetEditorBorder = function (a, d) {
    try {
      var c = RAONKEDITOR.util._setEditor(d);
      if (c) {
        var b = c._FRAMEWIN;
        "string" === typeof a && (a = RAONKEDITOR.util.convertStringtoBoolean(
            a));
        c._config.editorborder = a ? "1" : "0";
        b.setEditorBorder(c);
        b.resizeEditor(c, !1)
      }
    } catch (e) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(e)
    }
  };
  RAONKEDITOR.setEditorMode = RAONKEDITOR.SetEditorMode =
      function (a, d) {
        try {
          var c = RAONKEDITOR.util._setEditor(d);
          if (c) {
            if ("lightview"
                == c._config.mode) {
              KEDITORTOP.G_CURRKEDITOR = c, c._FRAMEWIN.lightViewFunc(
                  "setEditorMode", a, c);
            } else {
              var b = c._FRAMEWIN, e = !1;
              if ("edit" == a && "edit" != c._config.mode) {
                c._BODY.contentEditable = !0;
                c._config.mode = "edit";
                if ((KEDITORTOP.RAONKEDITOR.browser.mobile
                        || RAONKEDITOR.browser.iOS) && "1"
                    == c._config.view_mode_auto_height) {
                  var f = KEDITORDOC.getElementById(c._config.holderID),
                      k = KEDITORDOC.getElementById("raonk_frame_" + c.ID),
                      h = k.contentWindow.document,
                      l = h.getElementById("ue_editor_holder_" + c.ID);
                  f.style.webkitOverflowScrolling = "touch";
                  l.style.webkitOverflowScrolling = "touch";
                  f.style.overflow = "";
                  l.style.overflow = ""
                }
                "0" == c._config.top_menu && (b.document.getElementById(
                    "keditor_menu_" + c.ID).style.display = "");
                if (3 > parseInt(c._config.tool_bar, 10)) {
                  b.document.getElementById(
                      "keditor_toolbar_" + c.ID).style.display = "";
                  if ("1" == c._config.tool_bar || "0"
                      == c._config.tool_bar) {
                    b.document.getElementById(
                        "keditor_tab_tool2_" + c.ID).style.display = "";
                  }
                  if ("2" == c._config.tool_bar ||
                      "0" == c._config.tool_bar) {
                    b.document.getElementById(
                        "keditor_tab_tool1_" + c.ID).style.display = ""
                  }
                }
                "0" == c._config.status_bar && (b.document.getElementById(
                    "keditor_statusbar_"
                    + c.ID).style.height = "23px", b.document.getElementById(
                    "keditor_statusbar_"
                    + c.ID).style.display = "", b.document.getElementById(
                    "div_resizebar_" + c.ID) && (b.document.getElementById(
                    "div_resizebar_" + c.ID).style.display = ""));
                "0" == c._config.top_status_bar && (b.document.getElementById(
                    "keditor_topstatusbar_"
                    + c.ID).style.height = "28px", b.document.getElementById(
                    "keditor_topstatusbar_" +
                    c.ID).style.display = "");
                if ("2" == c._config.horizontalLine.use) {
                  var n = b.document.getElementById(
                      "keditor_horizontal_line_" + c.ID);
                  n && (n.style.display = "")
                }
                e = !0;
                c._BODY.style.cursor = "text"
              } else if (("view" == a || "lightview" == a) && "view"
                  != c._config.mode) {
                c._BODY.contentEditable = !1;
                a = c._config.mode = "view";
                (KEDITORTOP.RAONKEDITOR.browser.mobile
                    || KEDITORTOP.RAONKEDITOR.browser.iOS) && "1"
                == c._config.view_mode_auto_height
                && (f = b.KEDITORTOP.KEDITORDOC.getElementById(
                    c._config.holderID), k = KEDITORTOP.KEDITORDOC.getElementById(
                    "raonk_frame_" +
                    c.ID), h = k.contentWindow.document, l = h.getElementById(
                    "ue_editor_holder_"
                    + c.ID), f.style.webkitOverflowScrolling = "touch", l.style.webkitOverflowScrolling = "touch", f.style.overflow = "hidden", l.style.overflow = "hidden");
                "0" == c._config.top_menu && (b.document.getElementById(
                    "keditor_menu_" + c.ID).style.display = "none");
                if (3 > parseInt(c._config.tool_bar, 10)) {
                  b.document.getElementById(
                      "keditor_toolbar_" + c.ID).style.display = "none";
                  if ("1" == c._config.tool_bar || "0"
                      == c._config.tool_bar) {
                    b.document.getElementById(
                        "keditor_tab_tool2_" +
                        c.ID).style.display = "none";
                  }
                  if ("2" == c._config.tool_bar || "0"
                      == c._config.tool_bar) {
                    b.document.getElementById(
                        "keditor_tab_tool1_" + c.ID).style.display = "none"
                  }
                }
                "0" == c._config.status_bar && (b.document.getElementById(
                    "keditor_statusbar_"
                    + c.ID).style.height = "1px", b.document.getElementById(
                    "keditor_statusbar_"
                    + c.ID).style.display = "none", b.document.getElementById(
                    "div_resizebar_" + c.ID) && (b.document.getElementById(
                    "div_resizebar_" + c.ID).style.display = "none"));
                "0" == c._config.top_status_bar && (b.document.getElementById(
                    "keditor_topstatusbar_" +
                    c.ID).style.height = "1px", b.document.getElementById(
                    "keditor_topstatusbar_" + c.ID).style.display = "none");
                "2" == c._config.horizontalLine.use
                && (n = b.document.getElementById(
                    "keditor_horizontal_line_" + c.ID))
                && (n.style.display = "none");
                e = !0;
                c._BODY.style.cursor = "auto"
              }
              e && (b.setEditorBorder(c), b.resizeEditor(null,
                  !1), RAONKEDITOR.GetHtmlContents({
                isAuto: !1, type: "htmlex", callback: function (d) {
                  RAONKEDITOR.setHtmlContents(d.strData, d.strEditorId);
                  "view" == a ? (b.hideRuler(c), 0 == RAONKEDITOR.browser.ie
                  && KEDITORTOP.focus(),
                      KEDITORDOC.body.focus(), ""
                  != c._config.placeholder.content
                  && b.placeholderControl(c, "remove")) : (b.G_Ruler
                  && b.G_Ruler.viewRulerStatus
                  && b.G_Ruler.SetRulerPosition(), ""
                  != c._config.placeholder.content && b.placeholderControl(c,
                      "set"))
                }
              }, c.ID));
              b.setEditorIframeTitle(c);
              b.groupingIcon()
            }
          }
        } catch (p) {
          RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(p)
        }
      };
  RAONKEDITOR.editorPrint = RAONKEDITOR.EditorPrint = function (a) {
    try {
      var d = RAONKEDITOR.util._setEditor(a);
      if (d) {
        try {
          d._FRAMEWIN.command_print("", d)
        } catch (c) {
          RAONKEDITOR &&
          RAONKEDITOR.logMode && console && console.log(c)
        }
      }
    } catch (b) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(b)
    }
  };
  RAONKEDITOR.doPrint = RAONKEDITOR.DoPrint = function (a, d, c) {
    try {
      var b = RAONKEDITOR.util._setEditor(c);
      b && b._editorCommands(b.ID, "print")
    } catch (e) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(e)
    }
  };
  RAONKEDITOR.doPrintPreview = RAONKEDITOR.DoPrintPreview = function (a, d, c) {
    try {
      var b = RAONKEDITOR.util._setEditor(c);
      if (b) {
        if (G_CURRKEDITOR._FRAMEWIN.G_dext5plugIn) {
          var e = b._config.printPreview;
          b._config.printPreview = "1";
          b.setChangeMode("preview");
          setTimeout(function () {
            var c;
            c = b._EDITOR.preview.contentDocument
                ? b._EDITOR.preview.contentDocument
                : b._EDITOR.preview.contentWindow.document;
            RAONKEDITOR.browser.ie && (c = c.getElementById(
                "keditorprintpreview")) && c.doPrintPreview(a, d, "");
            b.setChangeMode("design")
          }, 350);
          b._config.printPreview = e
        } else {
          b._FRAMEWIN.command_print("", b)
        }
      }
    } catch (f) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(f)
    }
  };
  RAONKEDITOR.doSaveHTML = RAONKEDITOR.DoSaveHTML = function (a,
      d, c, b) {
    try {
      var e = RAONKEDITOR.util._setEditor(b);
      if (e && "1" == e._config.useKManager) {
        var f = e._FRAMEWIN;
        if (0 == !!d || "" == d) {
          d = "RAONK";
        }
        f.agentSaveFile(e, d, a, function (a) {
          c(a)
        })
      }
    } catch (k) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(k)
    }
  };
  RAONKEDITOR.addUserCssUrl = RAONKEDITOR.AddUserCssUrl = function (a, d) {
    try {
      var c = RAONKEDITOR.util._setEditor(d);
      if (c) {
        var b = c._FRAMEWIN, e = c._DOC.getElementsByTagName("head")[0];
        e && b.createDynamicCssLinkToHeadTag(c._DOC, e, a)
      }
    } catch (f) {
      RAONKEDITOR && RAONKEDITOR.logMode &&
      console && console.log(f)
    }
  };
  RAONKEDITOR.clearUserCssUrl = RAONKEDITOR.ClearUserCssUrl = function (a, d) {
    try {
      var c = RAONKEDITOR.util._setEditor(d);
      if (c) {
        var b = c._FRAMEWIN, e = c._DOC.getElementsByTagName("head")[0];
        e && ("string" === typeof a
        && (a = RAONKEDITOR.util.convertStringtoBoolean(
            a)), b.clearDynamicCssLinkToHeadTag(e, a))
      }
    } catch (f) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(f)
    }
  };
  RAONKEDITOR.addWebFontCssUrl = RAONKEDITOR.AddWebFontCssUrl = function (a,
      d) {
    try {
      var c = RAONKEDITOR.util._setEditor(d);
      if (c) {
        var b =
            c._FRAMEWIN, e = c._DOC.getElementsByTagName("head")[0];
        if (e) {
          a = RAONKEDITOR.util.setProtocolBaseDomainURL(a);
          b.createDynamicCssLinkToHeadTag(c._DOC, e, a);
          var f = b.getDialogWindow().document.getElementById(
              "keditor_fontfamily_iframe_" + c.ID);
          f ? b.createDynamicCssLinkToHeadTag(f.contentWindow.document,
                  f.contentWindow.document.getElementsByTagName("head")[0], a)
              : c._config.webFontCssUrl = a;
          b.setFocusToBody();
          try {
            setTimeout(function () {
              var a = b.getFirstRange().range, c = null;
              a && a.startContainer && (c = b.getMyElementNode(
                  a.startContainer),
                  b.setMenuIconRealable(c))
            }, 10)
          } catch (k) {
            RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(k)
          }
        }
      }
    } catch (h) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(h)
    }
  };
  RAONKEDITOR.setUserCssText = RAONKEDITOR.SetUserCssText = function (a, d) {
    try {
      var c = RAONKEDITOR.util._setEditor(d);
      if (c) {
        var b = c._FRAMEWIN, e = c._DOC.getElementsByTagName("head")[0];
        e && b.addDynamicCssToHeadTag(c._DOC, e, a)
      }
    } catch (f) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(f)
    }
  };
  RAONKEDITOR.clearUserCssText = RAONKEDITOR.ClearUserCssText =
      function (a) {
        try {
          var d = RAONKEDITOR.util._setEditor(a);
          if (d) {
            var c = d._FRAMEWIN, b = d._DOC.getElementsByTagName("head")[0];
            b && c.addDynamicCssToHeadTag(d._DOC, b, "")
          }
        } catch (e) {
          RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(e)
        }
      };
  RAONKEDITOR.addUserJsUrl = RAONKEDITOR.AddUserJsUrl = function (a, d) {
    try {
      var c = RAONKEDITOR.util._setEditor(d);
      if (c) {
        a = RAONKEDITOR.util.setProtocolBaseDomainURL(a);
        var b = !1;
        if ("1" == c._config.xss_use) {
          for (var e = a.toLowerCase(), f = 0;
              f < c._config.xss_allow_url.length; f++) {
            if (c._config.xss_allow_url[f].toLowerCase() ==
                e) {
              b = !0;
              break
            }
          }
        } else {
          b = !0;
        }
        if (1 == b) {
          var k = c._FRAMEWIN, h = c._DOC.getElementsByTagName("head")[0];
          h && (k.createDynamicJsLinkToHeadTag(c._DOC, h,
              a), k.setFocusToBody())
        }
      }
    } catch (l) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(l)
    }
  };
  RAONKEDITOR.clearUserJsUrl = RAONKEDITOR.ClearUserJsUrl = function (a) {
    try {
      var d = RAONKEDITOR.util._setEditor(a);
      if (d) {
        var c = d._FRAMEWIN, b = d._DOC.getElementsByTagName("head")[0];
        b && (c.clearDynamicJsLinkToHeadTag(b), c.setFocusToBody())
      }
    } catch (e) {
      RAONKEDITOR && RAONKEDITOR.logMode &&
      console && console.log(e)
    }
  };
  RAONKEDITOR.setUserJsText = RAONKEDITOR.SetUserJsText = function (a, d) {
    try {
      var c = RAONKEDITOR.util._setEditor(d);
      if (c) {
        var b = c._FRAMEWIN, e = c._DOC.getElementsByTagName("head")[0];
        e && (b.addDynamicJsToHeadTag(c._DOC, e, a), b.setFocusToBody())
      }
    } catch (f) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(f)
    }
  };
  RAONKEDITOR.clearUserJsText = RAONKEDITOR.ClearUserJsText = function (a) {
    try {
      var d = RAONKEDITOR.util._setEditor(a);
      if (d) {
        var c = d._FRAMEWIN, b = d._DOC.getElementsByTagName("head")[0];
        b && (c.addDynamicJsToHeadTag(d._DOC, b, ""), c.setFocusToBody())
      }
    } catch (e) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(e)
    }
  };
  RAONKEDITOR.setNextTabElementId = RAONKEDITOR.SetNextTabElementId = function (a,
      d) {
    try {
      var c = RAONKEDITOR.util._setEditor(d);
      c && (c._config.NextTabElementId = a)
    } catch (b) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(b)
    }
  };
  RAONKEDITOR.setFullScreen = RAONKEDITOR.SetFullScreen = function (a) {
    try {
      var d = RAONKEDITOR.util._setEditor(a);
      d && d._FRAMEWIN.command_fullScreen(d.ID, d)
    } catch (c) {
      RAONKEDITOR &&
      RAONKEDITOR.logMode && console && console.log(c)
    }
  };
  RAONKEDITOR.loadAutoSaveHtml = RAONKEDITOR.LoadAutoSaveHtml = function (a) {
    try {
      var d = RAONKEDITOR.util._setEditor(a);
      if (d) {
        var c = d._FRAMEWIN.getAutoSaveHtml_userID(a,
            d._config.setAutoSave.unique_key, d._config.setAutoSave.maxCount);
        c && "" != c && RAONKEDITOR.setHtmlValueExWithDocType(
            c[c.length - 1].html, a)
      }
    } catch (b) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(b)
    }
  };
  RAONKEDITOR.saveCurrValueInMultiValue = RAONKEDITOR.SaveCurrValueInMultiValue = function (a,
      d) {
    try {
      var c =
          RAONKEDITOR.util._setEditor(d);
      if (c) {
        var b = RAONKEDITOR.util.getValueByMultiMode(), e = [];
        e.push(b);
        for (b = 2; b < arguments.length; b++) {
          e.push(arguments[b]);
        }
        c.changeMultiValue[a] || (c.changeMultiValue.valueLength += 1);
        c.changeMultiValue[a] = e
      }
    } catch (f) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(f)
    }
  };
  RAONKEDITOR.setNextValueInMultiValue = RAONKEDITOR.SetNextValueInMultiValue = function (a,
      d) {
    var c = null;
    try {
      var b = RAONKEDITOR.util._setEditor(d);
      if (b) {
        if (b.changeMultiValue[a]) {
          var e = b.changeMultiValue[a][0];
          RAONKEDITOR.util.setValueByMultiMode(e)
        } else {
          e = "<p><br></p>", RAONKEDITOR.browser.ie && 11
          > RAONKEDITOR.browser.ieVersion
          && (e = "<p>&nbsp</p>"), RAONKEDITOR.setBodyValue(e);
        }
        c = b.changeMultiValue[a] ? b.changeMultiValue[a] : null
      }
    } catch (f) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(f)
    }
    return c
  };
  RAONKEDITOR.getMultiValue = RAONKEDITOR.GetMultiValue = function (a, d) {
    var c = null;
    try {
      var b = RAONKEDITOR.util._setEditor(d);
      b && (c = b.changeMultiValue[a])
    } catch (e) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(e)
    }
    return c
  };
  RAONKEDITOR.getMultiValueLength = RAONKEDITOR.GetMultiValueLength = function (a) {
    var d = null;
    try {
      var c = RAONKEDITOR.util._setEditor(a);
      c && (d = c.changeMultiValue.valueLength)
    } catch (b) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(b)
    }
    return d
  };
  RAONKEDITOR.setEditorChangeMode = RAONKEDITOR.SetEditorChangeMode = function (a,
      d) {
    try {
      var c = RAONKEDITOR.util._setEditor(d);
      c && c.setChangeMode(a)
    } catch (b) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(b)
    }
  };
  RAONKEDITOR.setUserFontFamily = RAONKEDITOR.SetUserFontFamily =
      function (a, d) {
        try {
          if (void 0 != a && null != a && "" != a) {
            var c = RAONKEDITOR.util._setEditor(d);
            if (c && ("\ub9d1\uc740\uace0\ub515" == a
            && (a = "\ub9d1\uc740 \uace0\ub515"), c._DOC.body.style.fontFamily = a, "1"
            == c._setting.show_font_real)) {
              var b = document.getElementById("ue_" + c.ID + "font_family");
              b && (b.innerHTML = "<span>" + a
                  + "</span>", c._setting.font_family = a)
            }
          }
        } catch (e) {
          RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(e)
        }
      };
  RAONKEDITOR.setUserFontSize = RAONKEDITOR.SetUserFontSize = function (a, d) {
    try {
      if (void 0 != a && null !=
          a && "" != a) {
        var c = RAONKEDITOR.util._setEditor(d);
        if (c && (c._DOC.body.style.fontSize = a + "pt", "1"
        == c._setting.show_font_real)) {
          var b = document.getElementById("ue_" + c.ID + "font_size");
          b && (b.innerHTML = "<span>" + a
              + "pt</span>", c._setting.font_size = a + "pt")
        }
      }
    } catch (e) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(e)
    }
  };
  RAONKEDITOR.setFocusToEditor = RAONKEDITOR.SetFocusToEditor = function (a) {
    try {
      var d = RAONKEDITOR.util._setEditor(a);
      d && (d.isInitFocusHandler = !1, d.setFocusToBody(), setTimeout(
          function () {
            var a = d._FRAMEWIN,
                c = a.getFirstRange().range;
            c && c.startContainer == c.endContainer && 1 == c.collapsed
            && ((elem = a.getMyElementNode(c.startContainer)) && elem.tagName
            && "p" == elem.tagName.toLowerCase() && ("" == elem.innerHTML
                || "<br>" == elem.innerHTML.toLowerCase())
                ? a.doSetCaretPosition(elem, 0) : !elem || elem && elem.tagName
                && "body" == elem.tagName.toLowerCase()
                    ? ((c = d._BODY.firstChild) && "" == c.innerHTML
                    && (c.innerHTML = "<br>"), a.doSetCaretPosition(c, 0))
                    : a.setFocusToBody())
          }, 1))
    } catch (c) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(c)
    }
  };
  RAONKEDITOR.setRulerPosition = RAONKEDITOR.SetRulerPosition = function (a,
      d) {
    if (void 0 != a && "" != a) {
      try {
        var c = RAONKEDITOR.util._setEditor(d);
        if (c) {
          var b = c._FRAMEWIN;
          1 == c._config.ruler.use && b.G_Ruler.SetRulerPositionApi(a)
        }
      } catch (e) {
        RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(e)
      }
    }
  };
  RAONKEDITOR.setClassStyle = RAONKEDITOR.SetClassStyle = function (a, d) {
    try {
      var c = RAONKEDITOR.util._setEditor(d);
      c && c._FRAMEWIN.command_setClassStyle(c, a)
    } catch (b) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(b)
    }
  };
  RAONKEDITOR.removeClassStyle = RAONKEDITOR.RemoveClassStyle = function (a,
      d) {
    try {
      var c = RAONKEDITOR.util._setEditor(d);
      c && c._FRAMEWIN.command_removeClassStyle(c, a)
    } catch (b) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(b)
    }
  };
  RAONKEDITOR.setFontFamily = RAONKEDITOR.SetFontFamily = function (a, d) {
    if (void 0 != a && "" != a) {
      try {
        var c = RAONKEDITOR.util._setEditor(d);
        c && c._FRAMEWIN.command_fontfamily(c.ID, c._EDITOR.design, a)
      } catch (b) {
        RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(b)
      }
    }
  };
  RAONKEDITOR.setFontSize =
      RAONKEDITOR.SetFontSize = function (a, d) {
        if (void 0 != a && "" != a) {
          try {
            var c = RAONKEDITOR.util._setEditor(d);
            c && c._FRAMEWIN.command_fontsize(c.ID, c._EDITOR.design, a)
          } catch (b) {
            RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(b)
          }
        }
      };
  RAONKEDITOR.setFontFormat = RAONKEDITOR.SetFontFormat = function (a, d) {
    if (void 0 != a && "" != a) {
      try {
        var c = RAONKEDITOR.util._setEditor(d);
        if (c) {
          var b = c._FRAMEWIN;
          switch (a) {
            case "bold":
              b.command_bold(c.ID, c);
              break;
            case "underline":
              b.command_underline(c.ID, c);
              break;
            case "italic":
              b.command_italic(c.ID,
                  c);
              break;
            case "strike_through":
              b.command_strikeThrough(c.ID, c);
              break;
            case "superscript":
              b.command_superscript(c.ID, c);
              break;
            case "subscript":
              b.command_subscript(c.ID, c);
              break;
            case "remove_format":
              b.command_removeFormat(c.ID, c)
          }
        }
      } catch (e) {
        RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(e)
      }
    }
  };
  RAONKEDITOR.setFontColor = RAONKEDITOR.SetFontColor = function (a, d) {
    if (void 0 != a && "" != a) {
      try {
        var c = RAONKEDITOR.util._setEditor(d);
        c && c._FRAMEWIN.command_fontColor(c.ID, c._EDITOR.design, a)
      } catch (b) {
        RAONKEDITOR &&
        RAONKEDITOR.logMode && console && console.log(b)
      }
    }
  };
  RAONKEDITOR.setFontBgColor = RAONKEDITOR.SetFontBgColor = function (a, d) {
    if (void 0 != a && "" != a) {
      try {
        var c = RAONKEDITOR.util._setEditor(d);
        c && c._FRAMEWIN.command_fontBgColor(c.ID, c._EDITOR.design, a)
      } catch (b) {
        RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(b)
      }
    }
  };
  RAONKEDITOR.selectAll = RAONKEDITOR.SelectAll = function (a) {
    try {
      var d = RAONKEDITOR.util._setEditor(a);
      d && d._FRAMEWIN.command_selectAll(d.ID, d)
    } catch (c) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(c)
    }
  };
  RAONKEDITOR.removeCss = RAONKEDITOR.RemoveCss = function (a) {
    try {
      var d = RAONKEDITOR.util._setEditor(a);
      d && d._FRAMEWIN.command_removeCss(d.ID, d)
    } catch (c) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(c)
    }
  };
  RAONKEDITOR.setOriginalHtmlValue = RAONKEDITOR.SetOriginalHtmlValue = function (a,
      d) {
    try {
      if (d = RAONKEDITOR.util._getEditorName(d), null
      != d) {
        if (RAONKEDITOR.isLoadedEditorEx(d)) {
          try {
            var c = RAONKEDITOR.util._setEditor(d);
            if (c) {
              if ("lightview"
                  == c._config.mode) {
                KEDITORTOP.G_CURRKEDITOR = c, c._FRAMEWIN.lightViewFunc(
                    "setOriginalHtmlValue",
                    a, c);
              } else {
                var b = c._FRAMEWIN;
                1 == b.isViewMode(c)
                && (b.setGlobalTableDefaultValue(), b.FixFlashError2(
                    b._iframeDoc), b._iframeDoc.open("text/html",
                    "replace"), b.isCustomDomain(document)
                && (b._iframeDoc.domain = document.domain), b._iframeDoc.write(
                    a), b._iframeDoc.close(), c._load_editor_frame(!1))
              }
            }
          } catch (e) {
            RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(e)
          }
        } else {
          null == RAONKEDITOR.InitEditorDataHashTable
          && (RAONKEDITOR.InitEditorDataHashTable = new RAONKEDITOR.util.hashTable), RAONKEDITOR.InitEditorDataHashTable.setItem(
              d,
              {mode: "setOriginalHtmlValue", value: a})
        }
      }
    } catch (f) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(f)
    }
  };
  RAONKEDITOR.getDeletedImageUrl = RAONKEDITOR.GetDeletedImageUrl = function (a,
      d) {
    var c = [];
    try {
      var b = RAONKEDITOR.util._setEditor(a);
      if (b) {
        var e = b._FRAMEWIN, f = b.setImageArr, k = f.length,
            h = b.getEditorMode();
        "source" != h && "text" != h || b.setChangeMode("design");
        e.ReplaceImageToRealObject();
        1 != d && e.changeBodyContenteditable(!1);
        e.changeBodyImageProperty(!0);
        var l = b._DOC.body.outerHTML;
        e.G_BodyFit.noncreationAreaBackgroundStatus &&
        e.setBodyFitStyle(b, !0);
        e.changeBodyImageProperty(!1);
        e.ReplaceRealObjectToImage();
        e.changeBodyContenteditable(!0);
        for (b = 0; b < k; b++) {
          0 > l.indexOf(f[b].replace(/&/g, "&amp;"))
          && c.push(f[b])
        }
      }
    } catch (n) {
      c = null
    }
    return c
  };
  RAONKEDITOR.getDeletedElementsUrl = RAONKEDITOR.GetDeletedElementsUrl = function (a,
      d) {
    var c = [];
    try {
      var b = RAONKEDITOR.util._setEditor(a);
      if (b) {
        var e = b._FRAMEWIN, f = b.getEditorMode();
        "source" != f && "text" != f || b.setChangeMode("design");
        e.ReplaceImageToRealObject();
        1 != d && e.changeBodyContenteditable(!1);
        e.changeBodyImageProperty(!0);
        var k = b._DOC.body.outerHTML;
        e.G_BodyFit.noncreationAreaBackgroundStatus && e.setBodyFitStyle(b, !0);
        e.changeBodyImageProperty(!1);
        e.ReplaceRealObjectToImage();
        e.changeBodyContenteditable(!0);
        for (var h = b.setElementsArr, l = h.length, b = 0; b < l; b++) {
          0
          > k.indexOf(h[b].replace(/&/g, "&amp;")) && c.push(h[b])
        }
      }
    } catch (n) {
      c = null
    }
    return c
  };
  RAONKEDITOR.showTopMenu = RAONKEDITOR.ShowTopMenu = function (a, d) {
    try {
      var c = RAONKEDITOR.util._setEditor(d);
      if (c) {
        var b = c._FRAMEWIN;
        0 == b.isViewMode(c) && ("0" ==
        a ? (b.document.getElementById("keditor_menu_"
                + c.ID).style.display = "none", c._config.top_menu = "1")
            : (b.document.getElementById("keditor_menu_"
                + c.ID).style.display = "", c._config.top_menu = "0"), b.setEditorIframeTitle(
            c), b.setEditorBorder(c), b.resizeEditor(c, !1))
      }
    } catch (e) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(e)
    }
  };
  RAONKEDITOR.showToolbar = RAONKEDITOR.ShowToolbar = function (a, d) {
    try {
      var c = RAONKEDITOR.util._setEditor(d);
      if (c) {
        var b = c._FRAMEWIN;
        0 == b.isViewMode(c) && ("0" == a ? (b.document.getElementById(
            "keditor_toolbar_" +
            c.ID).style.display = "none", c._config.tool_bar = "3") : "1" == a
            ? (b.document.getElementById("keditor_tab_tool1_"
                + c.ID).style.display = "", b.document.getElementById(
                "keditor_tab_tool2_"
                + c.ID).style.display = "none", b.document.getElementById(
                "keditor_toolbar_"
                + c.ID).style.display = "", c._config.tool_bar = "2", b.displayAgentDocumentIcon(
                c), "1" == c._config.tool_bar_grouping && (b.groupingIcon(
                c), b.setPositionGroupingDiv(1))) : "2" == a
                ? (b.document.getElementById("keditor_tab_tool1_"
                    + c.ID).style.display = "none", b.document.getElementById(
                    "keditor_tab_tool2_" +
                    c.ID).style.display = "", b.document.getElementById(
                    "keditor_toolbar_"
                    + c.ID).style.display = "", c._config.tool_bar = "1", b.displayAgentDocumentIcon(
                    c), "1" == c._config.tool_bar_grouping && (b.groupingIcon(
                    c), b.setPositionGroupingDiv(2)))
                : (b.document.getElementById("keditor_tab_tool1_"
                    + c.ID).style.display = "", b.document.getElementById(
                    "keditor_tab_tool2_"
                    + c.ID).style.display = "", b.document.getElementById(
                    "keditor_toolbar_"
                    + c.ID).style.display = "", c._config.tool_bar = "0", b.displayAgentDocumentIcon(
                    c), "1" == c._config.tool_bar_grouping &&
                (b.groupingIcon(c), b.setPositionGroupingDiv(
                    1), b.setPositionGroupingDiv(2))), b.setEditorIframeTitle(
            c), b.setEditorBorder(c), b.resizeEditor(c, !1))
      }
    } catch (e) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(e)
    }
  };
  RAONKEDITOR.showStatusbar = RAONKEDITOR.ShowStatusbar = function (a, d) {
    try {
      var c = RAONKEDITOR.util._setEditor(d);
      if (c) {
        var b = c._FRAMEWIN;
        0 == b.isViewMode(c) && ("0" == a ? (b.document.getElementById(
                "keditor_statusbar_"
                + c.ID).style.display = "none", c._config.status_bar = "1")
            : (b.document.getElementById("keditor_statusbar_" +
                c.ID).style.display = "", c._config.status_bar = "0"), b.setEditorIframeTitle(
            c), b.setEditorBorder(c), b.resizeEditor(c, !1))
      }
    } catch (e) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(e)
    }
  };
  RAONKEDITOR.setHtmlContents = RAONKEDITOR.SetHtmlContents = function (a, d) {
    RAONKEDITOR.setHtmlContentsEw(a, d)
  };
  RAONKEDITOR.isLoadedEditor = RAONKEDITOR.IsLoadedEditor = function (a) {
    var d = null;
    try {
      var c = RAONKEDITOR.util._setEditor(a);
      c && (d = c._config.isLoadedEditor)
    } catch (b) {
      d = !1
    }
    return d
  };
  RAONKEDITOR.setHtmlContentsEw = RAONKEDITOR.SetHtmlContentsEw =
      function (a, d) {
        try {
          var c = RAONKEDITOR.util.parseSetApiParam(a);
          d = RAONKEDITOR.util._getEditorName(d);
          if (null != d) {
            if (RAONKEDITOR.isLoadedEditorEx(d)) {
              try {
                if (RAONKEDITOR.util._setEditor(d)) {
                  var b = c.html.toLowerCase(), e, f, k, h;
                  e = f = k = h = -1;
                  e = b.indexOf("<!doctype");
                  f = b.indexOf("<html");
                  k = b.indexOf("<head");
                  0 > k && (k = b.indexOf("<meta"));
                  0 > k && (k = b.indexOf("<title"));
                  h = b.indexOf("<body");
                  -1 < e && e < f && f < h
                      ? RAONKEDITOR.setHtmlValueExWithDocType(
                          c, d) : -1 < f && f < h ? RAONKEDITOR.setHtmlValueEx(c, d)
                          : -1 < k && k < h ? RAONKEDITOR.setHtmlValue(c,
                              d) : -1 < h ? RAONKEDITOR.setBodyValueEx(c, d)
                              : RAONKEDITOR.setBodyValue(c, d)
                }
              } catch (l) {
                RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(l)
              }
            } else {
              null == RAONKEDITOR.InitEditorDataHashTable
              && (RAONKEDITOR.InitEditorDataHashTable = new RAONKEDITOR.util.hashTable), RAONKEDITOR.InitEditorDataHashTable.setItem(
                  d, {mode: "setHtmlContents", value: c})
            }
          }
        } catch (n) {
          RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(n)
        }
      };
  RAONKEDITOR.isLoadedEditorEx = RAONKEDITOR.IsLoadedEditorEx = function (a) {
    var d = !1;
    try {
      var c = document.getElementById("raonk_frame_" +
          a);
      if (c && c.contentWindow.document.getElementById("editorContentArea")
          && RAONKEDITOR.IsEditorLoadedHashTable) {
        var b = RAONKEDITOR.IsEditorLoadedHashTable.getItem(a);
        "undefined" != typeof b && "1" == b && (d = !0)
      }
      if (!d && RAONKEDITOR.IsEditorLoadedHashTable) {
        try {
          b = RAONKEDITOR.IsEditorLoadedHashTable.getItem(a), "undefined"
          != typeof b && RAONKEDITOR.IsEditorLoadedHashTable.setItem(a, "0")
        } catch (e) {
          RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(e)
        }
      }
    } catch (f) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(f)
    }
    return d
  };
  RAONKEDITOR.setHeightForDisplay = RAONKEDITOR.SetHeightForDisplay = function (a) {
    try {
      var d = RAONKEDITOR.util._setEditor(a);
      d && "view" == d._config.mode && ("1" == d._config.view_mode_auto_height
      || "1" == d._config.view_mode_auto_width ? RAONKEDITOR.isEmpty()
          ? RAONKEDITOR.setSize(d._config.style.width, d._config.style.height,
              d.ID) : RAONKEDITOR.getHtmlContents({
            type: "htmlexwithdoctype", isAuto: !1, callback: function (a) {
              RAONKEDITOR.setHtmlValueExWithDocType(a.strData, d.ID)
            }
          }, d.ID) : RAONKEDITOR.setSize(d._config.style.width,
          d._config.style.height, d.ID))
    } catch (c) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(c)
    }
  };
  RAONKEDITOR.setFocusToObject = RAONKEDITOR.SetFocusToObject = function (a,
      d) {
    try {
      var c = RAONKEDITOR.util._setEditor(d);
      if (c) {
        var b = c._FRAMEWIN;
        c.isInitFocusHandler = !1;
        var e = null;
        "string" == typeof a ? e = c._DOC.getElementById(a) : "object"
            == typeof a && (e = a);
        if (null != e && void 0 != e) {
          if (RAONKEDITOR.browser.ie && e.firstChild && 3
              != e.firstChild.nodeType) {
            for (e = e.firstChild; e;) {
              if (1
                  == e.nodeType && e.firstChild && 3 != e.firstChild.nodeType) {
                e =
                    e.firstChild;
              } else {
                break;
              }
            }
          }
          e && (!e.tagName || "IMG" != e.tagName && "BR" != e.tagName
          || (e = e.parentNode), b.setFocusToBody(), setTimeout(function () {
            try {
              if (!e.tagName || "TEXTAREA" != e.tagName && "INPUT"
                  != e.tagName) {
                var a = b._iframeDoc.body.clientHeight,
                    c = b._iframeDoc.body.clientWidth,
                    d = b._iframeDoc.body.scrollTop, f = d + a,
                    p = b._iframeDoc.body.scrollLeft, m = p + c;
                b._iframeWin.scroll(0, 0);
                var q = b.getClientRect(e);
                d > q.top ? (b._iframeWin.scroll(p,
                    q.top), d = b._iframeDoc.body.scrollTop) : f < q.top
                    && (a = 50 - a, b._iframeWin.scroll(p, q.top +
                        (0 > a ? a : 0)), d = b._iframeDoc.body.scrollTop);
                p > q.left ? b._iframeWin.scroll(q.left, d) : m < q.left
                    ? (c = 50 - c, b._iframeWin.scroll(q.left + (0 > c ? c : 0),
                        d)) : b._iframeWin.scroll(p, d);
                b.doSetCaretPosition(e, !1)
              } else {
                e.focus()
              }
            } catch (r) {
              RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(r)
            }
          }, 1))
        }
      }
    } catch (f) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(f)
    }
  };
  RAONKEDITOR.getEditorSize = RAONKEDITOR.GetEditorSize = function (a) {
    var d = null;
    try {
      var c = RAONKEDITOR.util._setEditor(a);
      c && (d = {
        width: c._config.style.width,
        height: c._config.style.height
      })
    } catch (b) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(b)
    }
    return d
  };
  RAONKEDITOR.isDirty = RAONKEDITOR.IsDirty = function (a) {
    try {
      var d = RAONKEDITOR.util._setEditor(a);
      if (d) {
        if (1 == d._FRAMEWIN.G_IsPossibleDirty) {
          var c = d._BODY.innerHTML, c = c.replace(/\r?\n?\r?\n/g, ""),
              c = c.replace(/>\t+</g, "><"), c = c.replace(/> +</g, "><"),
              c = c.replace(/&nbsp;/g, " "), c = RAONKEDITOR.util.nbspRemove(c),
              b = d._editingCheckedValue;
          "" == b && (b = d._FRAMEWIN.G_BODY_DEFAULT_VALUE);
          b = b.replace(/\r?\n?\r?\n/g,
              "");
          b = b.replace(/>\t+</g, "><");
          b = b.replace(/> +</g, "><");
          b = b.replace(/&nbsp;/g, " ");
          b = RAONKEDITOR.util.nbspRemove(b);
          return c == b ? d._FRAMEWIN.G_IsPossibleDirty = !1 : !0
        }
        return !1
      }
    } catch (e) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(e)
    }
  };
  RAONKEDITOR.setDirty = RAONKEDITOR.SetDirty = function (a, d) {
    try {
      "undefined" != typeof arguments && 1 == arguments.length && (d = a);
      var c = RAONKEDITOR.util._setEditor(d);
      c && (c._FRAMEWIN.G_IsPossibleDirty = !0, "undefined" != typeof arguments
      && 2 <= arguments.length ? ("undefined" ===
          typeof a ? a = c._BODY.innerHTML : -1 < a.indexOf("<body")
              && (a = a.substring(a.indexOf("<body") + 5), a = a.substring(
                  a.indexOf("<")), a = a.substring(0, a.indexOf("</body>"))), ""
          == a
          && (a = c._FRAMEWIN.G_BODY_DEFAULT_VALUE), c._editingCheckedValue = a)
          : c._editingCheckedValue = c._BODY.innerHTML)
    } catch (b) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(b)
    }
  };
  RAONKEDITOR.getAccessibilityValidation = RAONKEDITOR.GetAccessibilityValidation = function (a) {
    var d = !1;
    try {
      var c = RAONKEDITOR.util._setEditor(a);
      if (c) {
        var b = c._FRAMEWIN,
            e = c.getEditorMode();
        "source" != e && "text" != e || c.setChangeMode("design");
        var f = b.getViolationNodes(c),
            d = 0 < f.violateNodes.length || 0 < f.idSamNodes.length ? !1 : !0
      }
    } catch (k) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(k)
    }
    return d
  };
  RAONKEDITOR.setAccessibilityValidation = RAONKEDITOR.SetAccessibilityValidation = function (a) {
    try {
      var d = RAONKEDITOR.util._setEditor(a);
      if (d) {
        var c = d._FRAMEWIN, b = d.getEditorMode();
        "source" != b && "text" != b || d.setChangeMode("design");
        c.RAONK_EDITOR.prototype.dialog.show(d._config.webPath.page,
            d._config.pages.accessibility_validation)
      }
    } catch (e) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(e)
    }
  };
  RAONKEDITOR.setEditorBodyEditable = RAONKEDITOR.SetEditorBodyEditable = function (a,
      d) {
    try {
      var c = RAONKEDITOR.util._setEditor(d);
      c && ("string" === typeof a
      && (a = RAONKEDITOR.util.convertStringtoBoolean(a)), a
          ? (c._BODY.contentEditable = !0, c._config.editorBodyEditable = !0, c._iconEnable(
              "default"))
          : (c._BODY.contentEditable = !1, c._config.editorBodyEditable = !1, c._iconEnable(
              "editableFalse"), c.keditor_dragresize &&
          c.keditor_dragresize.resizeHandleClear()))
    } catch (b) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(b)
    }
  };
  RAONKEDITOR.getEditorStyle = RAONKEDITOR.GetEditorStyle = function (a, d, c) {
    var b = null;
    try {
      RAONKEDITOR.util._setEditor(c) && (b = RAONKEDITOR.util.getStyle(a, d))
    } catch (e) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(e)
    }
    return b
  };
  RAONKEDITOR.setAdjustTableBorderStyle = RAONKEDITOR.SetAdjustTableBorderStyle = function (a) {
    try {
      var d = RAONKEDITOR.util._setEditor(a);
      d && d._FRAMEWIN.setAdjustTableBorder(d._DOC)
    } catch (c) {
      RAONKEDITOR &&
      RAONKEDITOR.logMode && console && console.log(c)
    }
  };
  RAONKEDITOR.getPersonalDataValidation = RAONKEDITOR.GetPersonalDataValidation = function (a) {
    var d = !1;
    try {
      var c = RAONKEDITOR.util._setEditor(a);
      if (c) {
        var b = c._FRAMEWIN, e = c.getEditorMode();
        "source" != e && "text" != e || c.setChangeMode("design");
        var f = b.getPersonalData(c), k;
        for (k in f) {
          if (f[k]) {
            d = !0;
            break
          }
        }
      }
    } catch (h) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(h)
    }
    return d
  };
  RAONKEDITOR.setPersonalDataValidation = RAONKEDITOR.SetPersonalDataValidation = function (a) {
    try {
      var d =
          RAONKEDITOR.util._setEditor(a);
      if (d) {
        var c = d._FRAMEWIN, b = d.getEditorMode();
        "source" != b && "text" != b || d.setChangeMode("design");
        c.RAONK_EDITOR.prototype.dialog.show(d._config.webPath.page,
            d._config.pages.personal_data)
      }
    } catch (e) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(e)
    }
  };
  RAONKEDITOR.getForbiddenWordValidation = RAONKEDITOR.GetForbiddenWordValidation = function (a) {
    var d = !1;
    try {
      var c = RAONKEDITOR.util._setEditor(a);
      if (c) {
        var b = c._FRAMEWIN, e = c.getEditorMode();
        "source" != e && "text" != e || c.setChangeMode("design");
        d = b.getForbiddenWord(c) ? !0 : !1
      }
    } catch (f) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(f)
    }
    return d
  };
  RAONKEDITOR.setForbiddenWordValidation = RAONKEDITOR.SetForbiddenWordValidation = function (a) {
    try {
      var d = RAONKEDITOR.util._setEditor(a);
      if (d) {
        var c = d._FRAMEWIN, b = d.getEditorMode();
        "source" != b && "text" != b || d.setChangeMode("design");
        c.command_forbidden_word(d.ID, d, "API")
      }
    } catch (e) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(e)
    }
  };
  RAONKEDITOR.getCaretElement = RAONKEDITOR.GetCaretElement = function (a) {
    try {
      var d =
          RAONKEDITOR.util._setEditor(a);
      if (d) {
        var c, b = d._FRAMEWIN, e = b.getFirstRange(), f = e.range;
        if (f && f.startContainer) {
          if ((c = e.sel.focusNode) && 3
              == c.nodeType) {
            for (; 1
            != c.nodeType;) {
              if (c.parentNode) {
                c = c.parentNode;
              } else {
                break;
              }
            }
          } else {
            c = b.getMyElementNode(
                f.startContainer);
          }
        }
        return c
      }
    } catch (k) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(k)
    }
  };
  RAONKEDITOR.getCaretElementEx = RAONKEDITOR.GetCaretElementEx = function (a) {
    try {
      var d = RAONKEDITOR.util._setEditor(a);
      if (d) {
        var c = d._FRAMEWIN;
        return c.G_CURSOR_ELEMENT && "html" !=
        c.G_CURSOR_ELEMENT.nodeName.toLowerCase() && "body"
        != c.G_CURSOR_ELEMENT.nodeName.toLowerCase() ? c.G_CURSOR_ELEMENT
            : RAONKEDITOR.getCaretElement(a)
      }
    } catch (b) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(b)
    }
  };
  RAONKEDITOR.setCaretMousePosition = RAONKEDITOR.SetCaretMousePosition = function (a,
      d) {
    try {
      var c = RAONKEDITOR.util._setEditor(d);
      if (c) {
        var b = c._FRAMEWIN;
        if (KEDITORTOP.RAONKEDITOR.browser.ie && 0
            == KEDITORTOP.RAONKEDITOR.browser.quirks && 7
            != KEDITORTOP.RAONKEDITOR.browser.ieVersion) {
          var e = b.getFirstRange().range;
          e && 1 == e.collapsed && b._iframeDoc.body.createTextRange
          && (e = b._iframeDoc.body.createTextRange(), e.moveToPoint(a.X,
              a.Y), e.select());
          b.setFocusToBody()
        } else if (KEDITORTOP.RAONKEDITOR.browser.chrome
            || KEDITORTOP.RAONKEDITOR.browser.opera) {
          if (1 == b.getFirstRange().range.collapsed) {
            try {
              b.createSelectionFromPoint(a.X, a.Y, a.X, a.Y), b.setFocusToBody()
            } catch (f) {
              RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(f)
            }
          }
        } else {
          b.setFocusToBody();
        }
        if ((elem = b.getFirstRange().sel.focusNode) && 3
            == elem.nodeType) {
          for (;
              1 != elem.nodeType;) {
            if (elem.parentNode) {
              elem =
                  elem.parentNode;
            } else {
              break;
            }
          }
        } else {
          (e = b.getFirstRange().range)
          && e.startContainer == e.endContainer && 1 == e.collapsed
          && (elem = b.getMyElementNode(e.startContainer));
        }
        b.setMenuIconRealable(elem)
      }
    } catch (k) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(k)
    }
  };
  RAONKEDITOR.setLockCommand = RAONKEDITOR.SetLockCommand = function (a, d, c) {
    try {
      var b = RAONKEDITOR.util._setEditor(c);
      if (b) {
        var e = "," + b.lockCommand.join(",") + ",";
        d ? 0 > e.indexOf("," + a + ",") && b.lockCommand.push(a)
            : (e = e.replace("," + a + ",", ","), e = "," == e ? ""
                : e.substring(1,
                    e.length - 1), b.lockCommand = e.split(","));
        b._iconEnable("")
      }
    } catch (f) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(f)
    }
  };
  RAONKEDITOR.setDomMode = RAONKEDITOR.SetDomMode = function (a, d) {
    try {
      var c = RAONKEDITOR.util._setEditor(d);
      if (c) {
        var b = c._FRAMEWIN;
        if (1 == a) {
          var e = c.getEditorMode();
          "source" != e && "text" != e || c.setChangeMode("design");
          b.ReplaceImageToRealObject();
          b.ClearDraggingTableAllTable();
          b.changeBodyImageProperty(!0);
          b.G_BodyFit.noncreationAreaBackgroundStatus && b.setBodyFitStyle(c,
              !0)
        } else {
          c._PageProp.bshowgrid &&
          1 == c._PageProp.bshowgrid && b.changeBodyImageProperty(
              !1), b.ReplaceRealObjectToImage()
        }
      }
    } catch (f) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(f)
    }
  };
  RAONKEDITOR.getDocumentDom = RAONKEDITOR.GetDocumentDom = function (a) {
    var d = null;
    try {
      var c = RAONKEDITOR.util._setEditor(a);
      c && (d = c._DOC)
    } catch (b) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(b)
    }
    return d
  };
  RAONKEDITOR.getDocumentElementDom = RAONKEDITOR.GetDocumentElementDom = function (a) {
    var d = null;
    try {
      var c = RAONKEDITOR.util._setEditor(a);
      c && (d =
          c._DOC.documentElement)
    } catch (b) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(b)
    }
    return d
  };
  RAONKEDITOR.getBodyDom = RAONKEDITOR.GetBodyDom = function (a) {
    var d = null;
    try {
      var c = RAONKEDITOR.util._setEditor(a);
      c && (d = c._BODY)
    } catch (b) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(b)
    }
    return d
  };
  RAONKEDITOR.getValueInTextMode = RAONKEDITOR.GetValueInTextMode = function (a) {
    var d = "";
    try {
      var c = RAONKEDITOR.util._setEditor(a);
      c && ("text" != c.getEditorMode()
      && (RAONKEDITOR.ShowTextChangeAlert = !1, c.setChangeMode("text"),
          RAONKEDITOR.ShowTextChangeAlert = !0), d = c._EDITOR.text.value)
    } catch (b) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(b)
    }
    return d
  };
  RAONKEDITOR.setValueInTextMode = RAONKEDITOR.SetValueInTextMode = function (a,
      d) {
    try {
      var c = RAONKEDITOR.util._setEditor(d);
      c && ("text" != c.getEditorMode()
      && (RAONKEDITOR.ShowTextChangeAlert = !1, c.setChangeMode(
          "text"), RAONKEDITOR.ShowTextChangeAlert = !0), c._EDITOR.text.value = a, c._EDITOR.text.focus())
    } catch (b) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(b)
    }
  };
  RAONKEDITOR.convertHtmlToText =
      RAONKEDITOR.ConvertHtmlToText = function (a, d) {
        var c = a;
        try {
          var b = RAONKEDITOR.util._setEditor(d), e = b._FRAMEWIN,
              c = e.removeDummyfontTagInTable(c),
              c = e.htmlTagRevision(c, !0, !1), c = c.replace(/\r/g, ""),
              c = c.replace(/[\n|\t]/g, ""), c = c.replace(/[\v|\f]/g, ""),
              c = c.replace(/(\s+)<td/gi, "<td"),
              c = c.replace(/(\s+)<th/gi, "<th"),
              c = c.replace(/(\s+)<tr/gi, "<tr"),
              c = c.replace(/(\s+)?<\/td>(\s+)?/gi, "&nbsp;"),
              c = c.replace(/(\s+)?<\/th>(\s+)?/gi, "&nbsp;"),
              c = c.replace(/<p><br><\/p>/gi, "\n"),
              c = c.replace(/<P>&nbsp;<\/P>/gi, "\n"),
              c = c.replace(/<div><br><\/div>/gi, "\n"),
              c = c.replace(/<div>&nbsp;<\/div>/gi, "\n"),
              c = c.replace(/<br(\s)*\/?>/gi, "\n"),
              c = c.replace(/<br(\s[^\/]*)?>/gi, "\n"),
              c = c.replace(/<\/p(\s[^\/]*)?>/gi, "\n"),
              c = c.replace(/<\/div(\s[^\/]*)?>/gi, "\n"),
              c = c.replace(/(\s+)?<\/tr(\s[^\/]*)?>(\s+)?/gi, "\n"),
              c = c.replace(/<\/li(\s[^\/]*)?>/gi, "\n"),
              f = RegExp("(<li(s[^/]*)?>)(.+?)(<ol)", "gi"),
              c = c.replace(f, "$1$3\n$4"),
              f = RegExp("(<li(s[^/]*)?>)(.+?)(<ul)", "gi"),
              c = c.replace(f, "$1$3\n$4");
          nIdx = c.lastIndexOf("\n");
          -1 < nIdx && "\n" ==
          c.substring(nIdx) && (c = c.substring(0, nIdx));
          c = e.removeStripTags(c, null);
          c = c.replace(/(\n\r|\n|\r)/gm, "\n");
          c = c.replace(/(\n \n)/gm, "\n\n");
          c = c.replace(/(\n\t\n)/gm, "\n\n");
          c = c.replace(/(\n\n\n\n\n\n\n)/gm, "\n\n");
          c = c.replace(/(\n\n\n\n\n\n)/gm, "\n\n");
          c = c.replace(/(\n\n\n\n\n)/gm, "\n\n");
          c = c.replace(/(\n\n\n\n)/gm, "\n\n");
          c = c.replace(/(\n\n\n)/gm, "\n\n");
          c = RAONKEDITOR.util.trim(c);
          c = e.addLineBreaker(b._config.enterTag, c);
          c = c.replace(/&amp;#13;/gi, "");
          c = c.replace(/&#13;/gi, "")
        } catch (k) {
          c = a
        }
        return c
      };
  RAONKEDITOR.getDom = RAONKEDITOR.GetDom = function (a) {
    var d = {}, c = !1;
    try {
      var b = RAONKEDITOR.util._setEditor(a);
      if (b) {
        var e = b._BODY.getElementsByTagName("*"), f = e.length;
        d.document = b._DOC;
        d.body = b._BODY;
        d.all = b._DOC.all;
        for (a = 0; a < f; a++) {
          var k = e[a];
          if (k.id && 0 < k.id.length) {
            var h = k.id;
            if (null == d[h] || void 0 == d[h]) {
              d[h] = k, c = !0
            }
          } else if (k.name && 0 < k.name.length) {
            h = k.name;
            if (null == d[h] || void 0 == d[h]) {
              d[h] = k;
            } else {
              if (d[h] && "undefined" == typeof d[h].length) {
                var l = d[h];
                delete d[h];
                d[h] = [l]
              }
              d[h].push(k)
            }
            c = !0
          }
        }
      }
    } catch (n) {
      RAONKEDITOR &&
      RAONKEDITOR.logMode && console && console.log(n)
    }
    0 == c && (d = null);
    return d
  };
  RAONKEDITOR.$ = function (a, d) {
    var c = null;
    try {
      var b = RAONKEDITOR.util._setEditor(d);
      if (b) {
        var e = b._DOC;
        if (void 0 == a || "" == a || "*" == a) {
          c = e.getElementsByTagName(
              "*");
        } else {
          b = "";
          0 < a.length && (b = a.substring(0, 1));
          var f = a.indexOf("*=");
          if ("#" == b) {
            return a = a.replace("#", ""), e.getElementById(a);
          }
          if ("." == b || -1 < f) {
            var k = "";
            if ("." == b) {
              k = a.substring(1, a.length);
            } else {
              var h = a.split("=");
              2 == h.length && "classname*" == h[0].toLowerCase() && 0
              < h[1].length && (k = h[1])
            }
            k =
                k.toLowerCase();
            if ("" == k) {
              return c;
            }
            for (var l = e.getElementsByTagName("*"), n = l.length, p = 0;
                p < n; p++) {
              var m = l[p], q = m.className;
              void 0 != q && (q = q.toLowerCase());
              "." == b && k == q ? (null == c && (c = []), c.push(m)) : -1 < f
                  && k.length <= q.length && k == q.substring(0, k.length)
                  && (null == c && (c = []), c.push(m))
            }
          } else if (-1 < a.indexOf(":")) {
            var r = a.split(":");
            if (2 == r.length && "form" == r[0].toLowerCase() && 0
                < r[1].length) {
              var t = r[1].toLowerCase(),
                  f = ["INPUT", "SELECT", "TEXTAREA", "BUTTON"];
              if ("all" == t) {
                for (k = f.length, p = 0; p < k; p++) {
                  if (l = e.getElementsByTagName(f[p]),
                      n = l.length, 0 < n) {
                    for (null == c && (c = []), h = 0;
                        h < n; h++) {
                      c.push(l[h])
                    }
                  }
                }
              } else {
                l = e.getElementsByTagName("INPUT");
                n = l.length;
                for (p = 0; p < n; p++) {
                  l[p] && void 0 != l[p].type && l[p].type
                  == t && (null == c && (c = []), c.push(l[p]));
                }
                l = [];
                if ("button" == t || "select" == t || "textarea"
                    == t) {
                  l = e.getElementsByTagName(t.toUpperCase());
                }
                n = l.length;
                for (p = 0; p < n; p++) {
                  null == c && (c = []), c.push(l[p])
                }
              }
            }
          } else {
            -1 < a.indexOf("=") ? (r = a.split("="), 2 == r.length
                && "name" == r[0].toLowerCase() && 0 < r[1].length
                && (c = e.getElementsByName(r[1])))
                : (a = a.toUpperCase(), c = e.getElementsByTagName(a))
          }
        }
      }
    } catch (v) {
      c =
          null
    }
    return c
  };
  RAONKEDITOR.getElementById = RAONKEDITOR.GetElementById = function (a, d) {
    var c = null;
    try {
      var b = RAONKEDITOR.util._setEditor(d);
      b && (c = b._DOC.getElementById(a))
    } catch (e) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(e)
    }
    return c
  };
  RAONKEDITOR.getElementsByName = RAONKEDITOR.GetElementsByName = function (a,
      d) {
    var c = [];
    try {
      var b = RAONKEDITOR.util._setEditor(d);
      b && (c = b._DOC.getElementsByName(a))
    } catch (e) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(e)
    }
    return c
  };
  RAONKEDITOR.getElementsByTagName =
      RAONKEDITOR.GetElementsByTagName = function (a, d) {
        var c = [];
        try {
          var b = RAONKEDITOR.util._setEditor(d);
          if (b) {
            var e = b._DOC;
            a.toUpperCase();
            c = e.getElementsByTagName(a)
          }
        } catch (f) {
          RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(f)
        }
        return c
      };
  RAONKEDITOR.setElementInnerHTML = RAONKEDITOR.SetElementInnerHTML = function (a,
      d, c) {
    var b = "";
    try {
      var e = RAONKEDITOR.util._setEditor(c);
      if (e) {
        var f = e._DOC.getElementById(a);
        f && (f.innerHTML = d)
      }
    } catch (k) {
      b = "An error has occurred during the current function operation.", RAONKEDITOR
      &&
      RAONKEDITOR.logMode && console && console.log(k)
    }
    return b
  };
  RAONKEDITOR.setElementInnerText = RAONKEDITOR.SetElementInnerText = function (a,
      d, c) {
    var b = "";
    try {
      var e = RAONKEDITOR.util._setEditor(c);
      if (e) {
        var f = e._DOC.getElementById(a);
        f && (f.innerText = d)
      }
    } catch (k) {
      b = "An error has occurred during the current function operation.", RAONKEDITOR
      && RAONKEDITOR.logMode && console && console.log(k)
    }
    return b
  };
  RAONKEDITOR.setFormDataTextValue = RAONKEDITOR.SetFormDataTextValue = function (a,
      d, c) {
    var b = "";
    try {
      var e = RAONKEDITOR.util._setEditor(c);
      if (e) {
        var f = e._DOC.getElementsByName(a);
        if (0 < f.length) {
          var k = f[0];
          k && (k.value = d)
        }
      }
    } catch (h) {
      b = "An error has occurred during the current function operation."
    }
    return b
  };
  RAONKEDITOR.setCaretBeforeOrAfter = RAONKEDITOR.SetCaretBeforeOrAfter = function (a,
      d) {
    try {
      if (a) {
        var c = a.node ? a.node : null;
        if (null != c) {
          var b = a.pos ? a.pos : "before", e = RAONKEDITOR.util._setEditor(d);
          if (e) {
            var f = e._FRAMEWIN.getFirstRange(), k = f.range,
                b = b.charAt(0).toUpperCase() + b.slice(1);
            k["setStart" + b](c);
            k["setEnd" + b](c);
            f.sel.removeAllRanges();
            f.sel.addRange(k);
            e._LastRange = k
          }
        }
      }
    } catch (h) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(h)
    }
  };
  RAONKEDITOR.removeNode = RAONKEDITOR.RemoveNode = function (a, d) {
    try {
      if (a) {
        var c = a.node ? a.node : null;
        null != c && RAONKEDITOR.util._setEditor(d)
        && a.node.parentNode.removeChild(c)
      }
    } catch (b) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(b)
    }
  };
  RAONKEDITOR.inputTextfield = RAONKEDITOR.InputTextfield = function (a) {
    try {
      var d = RAONKEDITOR.util._setEditor(a);
      d && d._FRAMEWIN.RAONK_EDITOR.prototype.dialog.show(
          d._config.webPath.page,
          d._config.pages.input_text)
    } catch (c) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(c)
    }
  };
  RAONKEDITOR.inputRadio = RAONKEDITOR.InputRadio = function (a) {
    try {
      var d = RAONKEDITOR.util._setEditor(a);
      d && d._FRAMEWIN.RAONK_EDITOR.prototype.dialog.show(
          d._config.webPath.page, d._config.pages.input_radio)
    } catch (c) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(c)
    }
  };
  RAONKEDITOR.inputCheckbox = RAONKEDITOR.InputCheckbox = function (a) {
    try {
      var d = RAONKEDITOR.util._setEditor(a);
      d && d._FRAMEWIN.RAONK_EDITOR.prototype.dialog.show(
          d._config.webPath.page,
          d._config.pages.input_checkbox)
    } catch (c) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(c)
    }
  };
  RAONKEDITOR.inputButton = RAONKEDITOR.InputButton = function (a) {
    try {
      var d = RAONKEDITOR.util._setEditor(a);
      d && d._FRAMEWIN.RAONK_EDITOR.prototype.dialog.show(
          d._config.webPath.page, d._config.pages.input_button)
    } catch (c) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(c)
    }
  };
  RAONKEDITOR.inputHiddenfield = RAONKEDITOR.InputHiddenfield = function (a) {
    try {
      var d = RAONKEDITOR.util._setEditor(a);
      d && d._FRAMEWIN.RAONK_EDITOR.prototype.dialog.show(
          d._config.webPath.page,
          d._config.pages.input_hidden)
    } catch (c) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(c)
    }
  };
  RAONKEDITOR.inputTextarea = RAONKEDITOR.InputTextarea = function (a) {
    try {
      var d = RAONKEDITOR.util._setEditor(a);
      d && d._FRAMEWIN.RAONK_EDITOR.prototype.dialog.show(
          d._config.webPath.page, d._config.pages.input_textarea)
    } catch (c) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(c)
    }
  };
  RAONKEDITOR.inputSelect = RAONKEDITOR.InputSelect = function (a) {
    try {
      var d = RAONKEDITOR.util._setEditor(a);
      d && d._FRAMEWIN.RAONK_EDITOR.prototype.dialog.show(
          d._config.webPath.page,
          d._config.pages.input_select)
    } catch (c) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(c)
    }
  };
  RAONKEDITOR.inputImagebutton = RAONKEDITOR.InputImagebutton = function (a) {
    try {
      var d = RAONKEDITOR.util._setEditor(a);
      d && d._FRAMEWIN.RAONK_EDITOR.prototype.dialog.show(
          d._config.webPath.page, d._config.pages.input_image)
    } catch (c) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(c)
    }
  };
  RAONKEDITOR.insertInput = RAONKEDITOR.InsertInput = function (a, d, c) {
    try {
      var b = RAONKEDITOR.util._setEditor(c);
      if (b) {
        var e = b._FRAMEWIN,
            f = b._DOC;
        e.restoreSelection();
        e.setFocusToBody();
        0 < b.UndoManager.charCount && b.UndoManager.putUndo();
        var k = e.getFirstRange().range, h;
        h = null == d ? f.createElement("input") : d;
        c = "";
        for (var l in a) {
          switch (l.toLowerCase()) {
            case "type":
              h.type = a[l];
              break;
            case "name":
              c = a[l];
              break;
            case "id":
              h.id = a[l];
              break;
            case "class":
              h.className = a[l];
              break;
            case "title":
              h.title = a[l];
              break;
            case "value":
              h.setAttribute(l, a[l]);
              break;
            case "size":
              "" != a[l] && (h.size = a[l]);
              break;
            case "maxlength":
              "" != a[l] && (h.maxlength = a[l]);
              break;
            case "disabled":
              0 !=
              a[l] && (h.disabled = !0);
              break;
            case "readonly":
              0 != a[l] && (h.readonly = !0);
              break;
            case "checked":
              0 != a[l] && (h.checked = !0, h.setAttribute(l, a[l]));
              break;
            case "alt":
              "" != a[l] && (h.alt = a[l]);
              break;
            case "style.width":
              "" != a[l] && (h.style.width = a[l]);
              break;
            case "style.height":
              "" != a[l] && (h.style.height = a[l]);
              break;
            case "style.text_align":
              "" != a[l] && (h.style.textAlign = a[l])
          }
        }
        if (null == d) {
          k.deleteContents();
          if (RAONKEDITOR.browser.ie && 8 <= RAONKEDITOR.browser.ieVersion
              || !RAONKEDITOR.browser.ie) {
            "" != c && h.setAttribute("name",
                c), k.insertNode(h), k.selectNode(h);
          } else {
            var n = h.outerHTML;
            "" != c && (n = n.replace(">", ' name="' + c + '" >'));
            k.pasteHtml(n)
          }
          "hidden" == h.type
          && (G_CURRKEDITOR._editorCustomDataMode = !0, ReplaceRealObjectToImage(
              !1));
          k.collapse(!1);
          e.rangy.getSelection(e).removeAllRanges();
          e.rangy.getSelection(e).addRange(k)
        } else {
          RAONKEDITOR.browser.ie && 8 <= RAONKEDITOR.browser.ieVersion
          || !RAONKEDITOR.browser.ie ? "" != c && h.setAttribute("name", c)
              : (n = h.outerHTML, "" != c && (n = n.replace(">",
                  ' name="' + c + '" >')), h.outerHTML = n);
        }
        b.UndoManager.putUndo();
        b.UndoManager.charCount = 0
      }
    } catch (p) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(p)
    }
  };
  RAONKEDITOR.insertTextarea = RAONKEDITOR.InsertTextarea = function (a, d, c) {
    try {
      var b = RAONKEDITOR.util._setEditor(c);
      if (b) {
        var e = b._FRAMEWIN, f = b._DOC;
        e.restoreSelection();
        e.setFocusToBody();
        0 < b.UndoManager.charCount && b.UndoManager.putUndo();
        var k = e.getFirstRange().range, h;
        h = null == d ? f.createElement("textarea") : d;
        var f = c = "", l;
        for (l in a) {
          switch (l.toLowerCase()) {
            case "name":
              c = a[l];
              break;
            case "id":
              h.id = a[l];
              break;
            case "class":
              h.className = a[l];
              break;
            case "title":
              h.title = a[l];
              break;
            case "value":
              h.setAttribute(l, a[l]);
              f = a[l];
              break;
            case "rows":
              "" != a[l] && (h.rows = a[l]);
              break;
            case "cols":
              "" != a[l] && (h.cols = a[l]);
              break;
            case "disabled":
              0 != a[l] && (h.disabled = a[l]);
              break;
            case "readonly":
              0 != a[l] && (h.readonly = a[l]);
              break;
            case "style.width":
              "" != a[l] && (h.style.width = a[l]);
              break;
            case "style.height":
              "" != a[l] && (h.style.height = a[l]);
              break;
            case "style.text_align":
              "" != a[l] && (h.style.textAlign = a[l])
          }
        }
        h.innerHTML = f;
        if (null == d) {
          k.deleteContents();
          if (RAONKEDITOR.browser.ie && 8 <= RAONKEDITOR.browser.ieVersion
              || !RAONKEDITOR.browser.ie) {
            "" != c && h.setAttribute("name",
                c), k.insertNode(h), k.selectNode(h);
          } else {
            var n = h.outerHTML;
            "" != c && (n = n.replace(">", ' name="' + c + '" >'));
            k.pasteHtml(n)
          }
          k.collapse(!1);
          e.rangy.getSelection(e).removeAllRanges();
          e.rangy.getSelection(e).addRange(k)
        } else {
          RAONKEDITOR.browser.ie && 8 <= RAONKEDITOR.browser.ieVersion
          || !RAONKEDITOR.browser.ie ? "" != c && h.setAttribute("name", c)
              : (n = h.outerHTML, "" != c && (n = n.replace(">",
                  ' name="' + c + '" >')),
                  h.outerHTML = n);
        }
        b.UndoManager.putUndo();
        b.UndoManager.charCount = 0
      }
    } catch (p) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(p)
    }
  };
  RAONKEDITOR.insertSelect = RAONKEDITOR.InsertSelect = function (a, d, c, b, e,
      f) {
    try {
      var k = RAONKEDITOR.util._setEditor(f);
      if (k) {
        var h = k._FRAMEWIN, l = k._DOC;
        h.restoreSelection();
        h.setFocusToBody();
        0 < k.UndoManager.charCount && k.UndoManager.putUndo();
        var n = h.getFirstRange().range, p;
        p = null == e ? l.createElement("select") : e;
        f = "";
        for (var m in a) {
          switch (m.toLowerCase()) {
            case "name":
              f = a[m];
              break;
            case "id":
              p.id = a[m];
              break;
            case "class":
              p.className = a[m];
              break;
            case "title":
              p.title = a[m];
              break;
            case "multiple":
              p.multiple = a[m];
              break;
            case "size":
              p.size = a[m];
              break;
            case "disabled":
              0 != a[m] && (p.disabled = a[m]);
              break;
            case "style.width":
              "" != a[m] && (p.style.width = a[m]);
              break;
            case "style.height":
              "" != a[m] && (p.style.height = a[m])
          }
        }
        if (null != e) {
          for (var q = e.childNodes.length, r = 0; r < q;
              r++) {
            e.removeChild(e.childNodes[r]);
          }
        }
        q = d.length;
        for (r = 0; r < q; r++) {
          var t = l.createElement("option");
          t.innerHTML = d[r];
          t.setAttribute("value",
              c[r]);
          "" != b[r] && (t.selected = b[r], t.setAttribute("selected", b[r]));
          p.appendChild(t)
        }
        n.deleteContents();
        if (RAONKEDITOR.browser.ie && 8 <= RAONKEDITOR.browser.ieVersion
            || !RAONKEDITOR.browser.ie) {
          "" != f && p.setAttribute("name",
              f), n.insertNode(p), n.selectNode(p);
        } else {
          var v = p.outerHTML;
          "" != f && (v = v.replace(">", ' name="' + f + '" >'));
          n.pasteHtml(v)
        }
        n.collapse(!1);
        h.rangy.getSelection(h).removeAllRanges();
        h.rangy.getSelection(h).addRange(n);
        k.UndoManager.putUndo();
        k.UndoManager.charCount = 0
      }
    } catch (g) {
      RAONKEDITOR && RAONKEDITOR.logMode &&
      console && console.log(g)
    }
  };
  RAONKEDITOR.insertImg = RAONKEDITOR.InsertImg = function (a, d, c) {
    try {
      var b = RAONKEDITOR.util._setEditor(c);
      if (b) {
        var e = b._FRAMEWIN, f = b._DOC;
        e.restoreSelection();
        e.setFocusToBody();
        0 < b.UndoManager.charCount && b.UndoManager.putUndo();
        var k = e.getFirstRange().range, h;
        h = null == d ? f.createElement("img") : d;
        d = "";
        for (var l in a) {
          switch (l.toLowerCase()) {
            case "name":
              d = a[l];
              break;
            case "id":
              h.id = a[l];
              break;
            case "class":
              h.className = a[l];
              break;
            case "title":
              h.title = a[l];
              break;
            case "src":
              h.src = a[l];
              break;
            case "alt":
              "" != a[l] && (h.alt = a[l]);
              break;
            case "style.width":
              "" != a[l] && (h.style.width = a[l]);
              break;
            case "style.height":
              "" != a[l] && (h.style.height = a[l]);
              break;
            case "style.text_align":
              "" != a[l] && (h.style.textAlign = a[l])
          }
        }
        k.deleteContents();
        if (RAONKEDITOR.browser.ie && 8 <= RAONKEDITOR.browser.ieVersion
            || !RAONKEDITOR.browser.ie) {
          "" != d && h.setAttribute("name",
              d), k.insertNode(h), k.selectNode(h);
        } else {
          var n = h.outerHTML;
          "" != d && (n = n.replace(">", ' name="' + d + '" >'));
          k.pasteHtml(n)
        }
        k.collapse(!1);
        e.rangy.getSelection(e).removeAllRanges();
        e.rangy.getSelection(e).addRange(k);
        b.UndoManager.putUndo();
        b.UndoManager.charCount = 0
      }
    } catch (p) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(p)
    }
  };
  RAONKEDITOR.insertDiv = RAONKEDITOR.InsertDiv = function (a, d, c) {
    try {
      var b = RAONKEDITOR.util._setEditor(c);
      if (b) {
        var e = b._FRAMEWIN, f = b._DOC;
        e.restoreSelection();
        e.setFocusToBody();
        0 < b.UndoManager.charCount && b.UndoManager.putUndo();
        var k = e.getFirstRange().range, h;
        h = null == d ? f.createElement("div") : d;
        d = "";
        for (var l in a) {
          switch (l.toLowerCase()) {
            case "name":
              d =
                  a[l];
              break;
            case "id":
              h.id = a[l];
              break;
            case "class":
              h.className = a[l];
              break;
            case "title":
              h.title = a[l];
              break;
            case "alt":
              "" != a[l] && (h.alt = a[l]);
              break;
            case "style.width":
              "" != a[l] && (h.style.width = a[l]);
              break;
            case "style.height":
              "" != a[l] && (h.style.height = a[l]);
              break;
            case "style.text_align":
              "" != a[l] && (h.style.textAlign = a[l])
          }
        }
        k.deleteContents();
        if (RAONKEDITOR.browser.ie && 8 <= RAONKEDITOR.browser.ieVersion
            || !RAONKEDITOR.browser.ie) {
          "" != d && h.setAttribute("name",
              d), k.insertNode(h), k.selectNode(h);
        } else {
          var n = h.outerHTML;
          "" != d && (n = n.replace(">", ' name="' + d + '" >'));
          k.pasteHtml(n)
        }
        k.collapse(!1);
        e.rangy.getSelection(e).removeAllRanges();
        e.rangy.getSelection(e).addRange(k);
        b.UndoManager.putUndo();
        b.UndoManager.charCount = 0
      }
    } catch (p) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(p)
    }
  };
  RAONKEDITOR.insertDynamicTable = RAONKEDITOR.InsertDynamicTable = function (a) {
    try {
      var d = RAONKEDITOR.util._setEditor(a);
      if (d) {
        var c = d._FRAMEWIN;
        c.restoreSelection();
        c.setFocusToBody();
        0 < d.UndoManager.charCount && d.UndoManager.putUndo();
        var b = c.getFirstRange().range,
            e = c.getMyElementNode(b.startContainer);
        if (e) {
          var f = c.GetParentbyTagName(e, "table");
          f && (f.className = "keditor_DynGird", b.collapse(
              !1), c.rangy.getSelection(
              c).removeAllRanges(), c.rangy.getSelection(c).addRange(
              b), d.UndoManager.putUndo(), d.UndoManager.charCount = 0)
        }
      }
    } catch (k) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(k)
    }
  };
  RAONKEDITOR.deleteDynamicTable = RAONKEDITOR.DeleteDynamicTable = function (a) {
    try {
      var d = RAONKEDITOR.util._setEditor(a);
      if (d) {
        var c = d._FRAMEWIN;
        c.restoreSelection();
        c.setFocusToBody();
        0 < d.UndoManager.charCount && d.UndoManager.putUndo();
        var b = c.getFirstRange().range,
            e = c.getMyElementNode(b.startContainer);
        if (e) {
          var f = c.GetParentbyTagName(e, "table");
          f && (f.className = "", b.collapse(!1), c.rangy.getSelection(
              c).removeAllRanges(), c.rangy.getSelection(c).addRange(
              b), d.UndoManager.putUndo(), d.UndoManager.charCount = 0)
        }
      }
    } catch (k) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(k)
    }
  };
  RAONKEDITOR.changeImageData = RAONKEDITOR.ChangeImageData = function (a,
      d) {
    try {
      var c = RAONKEDITOR.util._setEditor(d);
      if (c) {
        var b = c._FRAMEWIN;
        b.restoreSelection();
        b.setFocusToBody();
        0 < c.UndoManager.charCount && c.UndoManager.putUndo();
        var e = b.getFirstRange().range;
        RAONKEDITOR.G_SELECTED_ELEMENT.src = a.src;
        RAONKEDITOR.G_SELECTED_ELEMENT.style.width = a.width + "px";
        RAONKEDITOR.G_SELECTED_ELEMENT.style.height = a.height + "px";
        e.collapse(!1);
        b.rangy.getSelection(b).removeAllRanges();
        b.rangy.getSelection(b).addRange(e);
        c.UndoManager.putUndo();
        c.UndoManager.charCount = 0
      }
    } catch (f) {
      RAONKEDITOR &&
      RAONKEDITOR.logMode && console && console.log(f)
    }
  };
  RAONKEDITOR.getSelectedCell = RAONKEDITOR.GetSelectedCell = function (a) {
    try {
      var d = RAONKEDITOR.util._setEditor(a);
      if (d) {
        var c = d._FRAMEWIN,
            b = c.GetTableSelectionCells(RAONKEDITOR.G_SELECTED_ELEMENT);
        if (0 == b.length) {
          c.restoreSelection();
          var e = c.getFirstRange().range;
          if (e) {
            var f = c.GetTDTHCell(e.startContainer);
            f && b.push(f)
          }
        }
        return b
      }
    } catch (k) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(k)
    }
    return null
  };
  RAONKEDITOR.setSelectCell = RAONKEDITOR.SetSelectCell =
      function (a, d) {
        try {
          var c = RAONKEDITOR.util._setEditor(d);
          if (c) {
            var b = c._FRAMEWIN, e = a ? a : {};
            e.editor = c;
            b.setSelectCell(e)
          }
        } catch (f) {
          RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(f)
        }
      };
  RAONKEDITOR.setHorizontalLine = RAONKEDITOR.SetHorizontalLine = function (a,
      d) {
    try {
      var c = RAONKEDITOR.util._setEditor(d);
      if (c) {
        var b = c._FRAMEWIN, e = {}, f = "image";
        "string" === typeof a ? (f = "image", e.url = a, e.repeat = "1")
            : "object" === typeof a && (e = a, e.repeat = "undefined"
        === typeof e.repeat ? "1" : e.repeat + "", "string" === typeof e.url
            ? f =
                "image" : "undefined" !== typeof e.height
            && (f = "style", e.height = RAONKEDITOR.util.parseIntOr0(e.height)
                + "", "undefined" === typeof e.style && (e.style = "")));
        if ("image" === f) {
          "" != e.url
              ? (c._config.horizontalLine.use = "1", c._config.horizontalLine.url = e.url, c._config.horizontalLine.repeat = e.repeat, c._BODY.style.backgroundImage = 'url("'
                  + e.url + '")', c._BODY.style.backgroundRepeat = "repeat" + ("0"
              == e.repeat ? "-x"
                  : ""), c._BODY.style.margin = "0px 10px 10px 10px")
              : (c._config.horizontalLine.use = "0", c._config.horizontalLine.url = "",
                  c._config.horizontalLine.repeat = "0", c._BODY.style.backgroundImage = "", c._BODY.style.backgroundRepeat = "", c._BODY.style.margin = "10px", b.changeBodyImageProperty(
                  !0), b.G_BodyFit.noncreationAreaBackgroundStatus
              && b.setBodyFitStyle(c, !0));
        } else if ("style" === f) {
          var k = b.getEditorFrameDoc(c).getElementById(
              "keditor_horizontal_line_" + c.ID);
          null != k && k.parentNode.removeChild(k);
          "0" == e.height ? c._config.horizontalLine.use = "0"
              : (c._config.horizontalLine.use = "2", c._config.horizontalLine.height = e.height, c._config.horizontalLine.repeat =
                  e.repeat, c._config.horizontalLine.style = e.style + "");
          b.set_horizontal_line_2(c)
        }
      }
    } catch (h) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(h)
    }
  };
  RAONKEDITOR.commands = RAONKEDITOR.Commands = function (a, d) {
    try {
      var c = RAONKEDITOR.util._setEditor(d);
      c && c._editorCommands(c.ID, a)
    } catch (b) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(b)
    }
  };
  RAONKEDITOR.addHtmlToSetValue = RAONKEDITOR.AddHtmlToSetValue = function (a,
      d, c) {
    if (void 0 != a && "" != a) {
      try {
        var b = RAONKEDITOR.util._setEditor(c);
        b && (b._config.addHtmlToSetValue.html =
            a, void 0 != d
        && (b._config.addHtmlToSetValue.preOrSub = KEDITORTOP.RAONKEDITOR.util.parseIntOr0(
            d)))
      } catch (e) {
        RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(e)
      }
    }
  };
  RAONKEDITOR.getFileSize = RAONKEDITOR.GetFileSize = function (a, d, c) {
    if (null != a && void 0 != a && "" != a && ("[object Array]"
        !== Object.prototype.toString.call(a) || 0 != a.length)) {
      try {
        var b = RAONKEDITOR.util._setEditor(c);
        if (b) {
          var e = b._config.handlerUrl;
          c = "";
          c += "kc" + RAONKSolution.Agent.formfeed + "c07"
              + RAONKSolution.Agent.vertical;
          if ("[object Array]" === Object.prototype.toString.call(a)) {
            for (var f =
                a.length, k = 0; k < f; k++) {
              c += "k30"
                  + RAONKSolution.Agent.formfeed + a[k]
                  + RAONKSolution.Agent.vertical;
            }
          } else {
            c += "k30"
                + RAONKSolution.Agent.formfeed + a
                + RAONKSolution.Agent.vertical;
          }
          c = c.substring(0, c.length - 1);
          c = RAONKEDITOR.util.makeEncryptParam(c);
          var h = function (a) {
            a = RAONKEDITOR.util.parseDataFromServer(a);
            0 == a.indexOf("[OK]") ? (a = a.replace("[OK]",
                    ""), a = RAONKEDITOR.util.makeDecryptReponseMessage(a))
                : a = "";
            d && d(a)
          };
          if (b._config.isCrossDomain) {
            var l = RAONKEDITOR.util.getDefaultIframeSrc(), n;
            try {
              n = document.createElement('<iframe frameborder="0" >')
            } catch (p) {
              n =
                  document.createElement("iframe")
            }
            n.id = "download_frame";
            n.name = "download_frame";
            n.src = l;
            n.setAttribute("id", "download_frame");
            n.setAttribute("name", "download_frame");
            n.setAttribute("src", "");
            n.style.display = "none";
            n.frameBorder = 0;
            n.title = "RAON K Editor download";
            document.body.appendChild(n);
            RAONKEDITOR.util.addEvent(n, "load", function () {
              n.contentWindow.postMessage("check", "*")
            });
            if (window.postMessage) {
              var m = function (a) {
                if (0 == e.indexOf(a.origin)) {
                  a = a.data;
                  if (null == a || "" == a) {
                    a = "";
                  }
                  RAONKEDITOR.util.removeEvent(window,
                      "message", m);
                  document.body.removeChild(n);
                  h(a)
                }
              };
              RAONKEDITOR.util.addEvent(window, "message", m)
            }
            a = [];
            a.push(["k00", c]);
            RAONKEDITOR.util.postFormData(document, e, "download_frame", a)
          } else {
            RAONKEDITOR.ajax.postData(e, "k00=" + c, function (a) {
              h(a)
            })
          }
        }
      } catch (q) {
        RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(q)
      }
    }
  };
  RAONKEDITOR.destroy = RAONKEDITOR.Destroy = function (a, d) {
    try {
      if (editorTemp = null, "object" == typeof a ? editorTemp = a
          : (RAONKEDITOR.ShowDestroyAlert = !1, editorTemp = RAONKEDITOR.util._setEditor(
              a)), editorTemp) {
        var c =
                editorTemp._FRAMEWIN, b = c.getDialogWindow(),
            e = c.getDialogDocument();
        try {
          if (!RAONKEDITOR.browser.mobile && !c.isViewMode()) {
            var f = window.pageYOffset || document.documentElement.scrollTop
                    || document.body.scrollTop || 0,
                k = window.pageYOffset || document.documentElement.scrollTop
                    || document.body.scrollTop || 0,
                h = document.createElement("input");
            h.setAttribute("type", "input");
            document.body.appendChild(h);
            h.focus();
            h.parentNode.removeChild(h);
            var l = window.pageYOffset || document.documentElement.scrollTop
                || document.body.scrollTop ||
                0;
            k == (window.pageXOffset || document.documentElement.scrollLeft
                || document.body.scrollLeft || 0) && f == l || scrollTo(k, f)
          }
        } catch (n) {
          RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(n)
        }
        if (RAONKEDITOR.RAONKMULTIPLEEVENT[editorTemp.ID]) {
          editorEventList = RAONKEDITOR.RAONKMULTIPLEEVENT[editorTemp.ID];
          for (var p = 0, m = editorEventList.length; p < m; p++) {
            try {
              editorEventList[p].element && (RAONKEDITOR.util.removeEvent(
                  editorEventList[p].element, editorEventList[p].event,
                  editorEventList[p].func), editorEventList[p].func =
                  null, delete editorEventList[p].func)
            } catch (q) {
              RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(q)
            }
          }
          try {
            editorEventList
            && (editorEventList = null, delete editorEventList, RAONKEDITOR.RAONKMULTIPLEEVENT[editorTemp.ID] = null, delete RAONKEDITOR.RAONKMULTIPLEEVENT[editorTemp.ID])
          } catch (r) {
            RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(r)
          }
        }
        try {
          RAONKEDITOR.browser.ie ? (RAONKEDITOR.util.removeEvent(
                  editorTemp._DOC.body, "beforedeactivate",
                  c._iframeDoc_BlurHandler), RAONKEDITOR.util.removeEvent(
                  editorTemp._DOC.body,
                  "focus", c._iframeDoc_FocusHandler), RAONKEDITOR.util.removeEvent(
                  c.document.body, "focus", c._editorframe_Focus))
              : (RAONKEDITOR.util.removeEvent(editorTemp._DOC, "blur",
                  c._iframeDoc_BlurHandler), RAONKEDITOR.util.removeEvent(
                  editorTemp._DOC, "focus",
                  c._iframeDoc_FocusHandler), RAONKEDITOR.util.removeEvent(c,
                  "focus", c._editorframe_Focus))
        } catch (t) {
          RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(t)
        }
        try {
          RAONKEDITOR.util.removeEvent(KEDITORWIN, "resize",
              editorTemp.toolmenu_bg_resize), RAONKEDITOR.util.removeEvent(
              KEDITORWIN,
              "resize", c.resizeKeditorWin), RAONKEDITOR.util.removeEvent(
              KEDITORWIN, "resize",
              editorTemp.topmenu_bg_resize), RAONKEDITOR.util.removeEvent(b,
              "resize",
              editorTemp.context_bg_resize), RAONKEDITOR.util.removeEvent(b,
              "resize", c.setLayerbgResize)
        } catch (v) {
          RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(v)
        }
        try {
          "1" == editorTemp._config.resize_bar
          && (editorTemp.keditorResize.remove(
              e), delete editorTemp.keditorResize)
        } catch (g) {
          RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(g)
        }
        try {
          "1" == editorTemp._config.dragResize &&
          (editorTemp.keditor_dragresize.remove(
              editorTemp._DOC), delete editorTemp.keditor_dragresize)
        } catch (z) {
          RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(z)
        }
        RAONKEDITOR.util.removeElementWithChildNodes(
            e.getElementById("keditor_context_iframe" + editorTemp.ID));
        RAONKEDITOR.util.removeElementWithChildNodes(
            document.getElementById("keditor_paste_temp_frame"));
        RAONKEDITOR.util.removeElementWithChildNodes(
            e.getElementById("keditor_dialog"));
        RAONKEDITOR.util.removeElementWithChildNodes(
            e.getElementById("keditor_context_background" +
                editorTemp.ID));
        RAONKEDITOR.util.removeElementWithChildNodes(
            e.getElementById("keditor_toolmenu_background" + editorTemp.ID));
        RAONKEDITOR.util.removeElementWithChildNodes(
            e.getElementById("keditor_topmenu_background" + editorTemp.ID));
        RAONKEDITOR.util.removeElementWithChildNodes(
            e.getElementById("keditor_topmenu_iframe" + editorTemp.ID));
        RAONKEDITOR.util.removeElementWithChildNodes(
            e.getElementById("keditor_formatting_iframe_" + editorTemp.ID));
        RAONKEDITOR.util.removeElementWithChildNodes(
            e.getElementById("keditor_fontfamily_iframe_" +
                editorTemp.ID));
        RAONKEDITOR.util.removeElementWithChildNodes(
            e.getElementById("keditor_fontsize_iframe_" + editorTemp.ID));
        RAONKEDITOR.util.removeElementWithChildNodes(
            e.getElementById("keditor_lineheight_iframe_" + editorTemp.ID));
        RAONKEDITOR.util.removeElementWithChildNodes(e.getElementById(
            "keditor_detail_list_number_iframe_" + editorTemp.ID));
        RAONKEDITOR.util.removeElementWithChildNodes(e.getElementById(
            "keditor_detail_list_bullets_iframe_" + editorTemp.ID));
        RAONKEDITOR.util.removeElementWithChildNodes(
            e.getElementById("keditor_detail_align_group_iframe_" +
                editorTemp.ID));
        RAONKEDITOR.util.removeElementWithChildNodes(e.getElementById(
            "keditor_detail_table_group_iframe_" + editorTemp.ID));
        RAONKEDITOR.util.removeElementWithChildNodes(
            editorTemp._FRAMEWIN.document.getElementById(
                "keditor_design_" + editorTemp.ID));
        RAONKEDITOR.util.removeElementWithChildNodes(
            editorTemp._FRAMEWIN.document.getElementById(
                "keditor_source_" + editorTemp.ID));
        RAONKEDITOR.util.removeElementWithChildNodes(
            editorTemp._FRAMEWIN.document.getElementById(
                "keditor_preview_" + editorTemp.ID));
        RAONKEDITOR.util.removeElementWithChildNodes(
            editorTemp._FRAMEWIN.document.getElementById(
                "keditor_text_" + editorTemp.ID));
        try {
          for (var A in c.G_KPlugin) {
            if ("function"
                === typeof c.G_KPlugin[A].onDestroy) {
              c.G_KPlugin[A].onDestroy()
            }
          }
        } catch (w) {
          RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(w)
        }
        try {
          editorTemp._FRAMEWIN.RAONK_EDITOR
          && (editorTemp._FRAMEWIN.RAONK_EDITOR.prototype = null, delete editorTemp._FRAMEWIN.RAONK_EDITOR.prototype)
        } catch (u) {
          RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(u)
        }
        try {
          editorTemp._FRAMEWIN.keditorDragResize &&
          (editorTemp._FRAMEWIN.keditorDragResize.prototype = null, delete editorTemp._FRAMEWIN.keditorDragResize.prototype, editorTemp._FRAMEWIN.keditorDragResize = null, delete editorTemp._FRAMEWIN.keditorDragResize)
        } catch (G) {
          RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(G)
        }
        if ("undefined" != typeof editorTemp.UndoManager) {
          try {
            editorTemp.UndoManager.reset(), editorTemp.UndoManager = null, delete editorTemp.UndoManager
          } catch (D) {
            RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(D)
          }
        }
        try {
          editorTemp._FRAMEWIN.UndoManager &&
          (editorTemp._FRAMEWIN.UndoManager.prototype = null, delete editorTemp._FRAMEWIN.UndoManager.prototype, editorTemp._FRAMEWIN.UndoManager = null, delete editorTemp._FRAMEWIN.UndoManager)
        } catch (y) {
          RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(y)
        }
        try {
          editorTemp._FRAMEWIN.Range
          && (editorTemp._FRAMEWIN.Range.prototype = null, delete editorTemp._FRAMEWIN.Range.prototype, editorTemp._FRAMEWIN.Range = null, delete editorTemp._FRAMEWIN.Range)
        } catch (B) {
          RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(B)
        }
        var J =
            editorTemp._config.autoDestroy.moveCursor;
        if (RAONKEDITOR.RAONKMULTIPLE["raonk_frame_" + editorTemp.ID]) {
          RAONKEDITOR.IsEditorLoadedHashTable && "undefined"
          != typeof RAONKEDITOR.IsEditorLoadedHashTable.getItem(editorTemp.ID)
          && RAONKEDITOR.IsEditorLoadedHashTable.removeItem(editorTemp.ID);
          if (RAONKEDITOR.RAONKMULTIPLETIMEOUT && 0
              < RAONKEDITOR.RAONKMULTIPLETIMEOUT.length) {
            for (var p = 0,
                x = RAONKEDITOR.RAONKMULTIPLETIMEOUT, m = x.length; p < m;
                p++) {
              if (x[p]) {
                try {
                  window.clearTimeout(x[p]), x[p] = null, delete x[p]
                } catch (Q) {
                  RAONKEDITOR &&
                  RAONKEDITOR.logMode && console && console.log(Q)
                }
              }
            }
          }
          try {
            RAONKEDITOR.RAONKMULTIPLETIMEOUT = null, delete RAONKEDITOR.RAONKMULTIPLETIMEOUT
          } catch (E) {
            RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(E)
          }
          if (editorTemp._FRAMEWIN.KEDITOR_CONTEXT._config) {
            try {
              delete editorTemp._FRAMEWIN.KEDITOR_CONTEXT._config, editorTemp._FRAMEWIN.KEDITOR_CONTEXT = null, delete editorTemp._FRAMEWIN.KEDITOR_CONTEXT
            } catch (H) {
              RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(H)
            }
          }
          editorTemp._FRAMEWIN._k_editor._config
          && delete editorTemp._FRAMEWIN._k_editor._config;
          editorTemp._FRAMEWIN._k_editor.Frame.editor
          && delete editorTemp._FRAMEWIN._k_editor.Frame.editor;
          editorTemp._FRAMEWIN._k_editor.Frame
          && delete editorTemp._FRAMEWIN._k_editor.Frame;
          editorTemp._FRAMEWIN.RAONK_EDITOR.HTMLParser
          && delete editorTemp._FRAMEWIN.RAONK_EDITOR.HTMLParser;
          editorTemp._FRAMEWIN.RAONK_EDITOR.HWPFilter
          && delete editorTemp._FRAMEWIN.RAONK_EDITOR.HWPFilter;
          if (editorTemp._FRAMEWIN.RAONK_EDITOR) {
            try {
              delete editorTemp._FRAMEWIN.RAONK_EDITOR
            } catch (K) {
              editorTemp._FRAMEWIN.RAONK_EDITOR = null
            }
            editorTemp._FRAMEWIN.RAONK_EDITOR &&
            (editorTemp._FRAMEWIN.RAONK_EDITOR = null)
          }
          if (editorTemp._FRAMEWIN.keditorResizeObj) {
            try {
              delete editorTemp._FRAMEWIN.keditorResizeObj
            } catch (R) {
              editorTemp._FRAMEWIN.keditorResizeObj = null
            }
            editorTemp._FRAMEWIN.keditorResizeObj
            && (editorTemp._FRAMEWIN.keditorResizeObj = null)
          }
          if (editorTemp._FRAMEWIN.resizebar_props.editor) {
            try {
              delete editorTemp._FRAMEWIN.resizebar_props.editor
            } catch (V) {
              editorTemp._FRAMEWIN.resizebar_props.editor = null
            }
            try {
              delete editorTemp._FRAMEWIN.resizebar_props
            } catch (O) {
              editorTemp._FRAMEWIN.resizebar_props =
                  null
            }
            editorTemp.keditorResize && delete editorTemp.keditorResize
          }
          if (editorTemp._FRAMEWIN.KEditorResize) {
            try {
              delete editorTemp._FRAMEWIN.KEditorResize
            } catch (L) {
              editorTemp._FRAMEWIN.KEditorResize = null
            }
            editorTemp._FRAMEWIN.KEditorResize
            && (editorTemp._FRAMEWIN.KEditorResize = null)
          }
          if (editorTemp._FRAMEWIN._k_editor) {
            try {
              delete editorTemp._FRAMEWIN._k_editor
            } catch (M) {
              editorTemp._FRAMEWIN._k_editor = null
            }
            editorTemp._FRAMEWIN._k_editor
            && (editorTemp._FRAMEWIN._k_editor = null)
          }
          var F = editorTemp.ID, I = editorTemp.FrameID,
              C;
          for (C in editorTemp) {
            if (editorTemp.hasOwnProperty(C)) {
              try {
                editorTemp[C] = null, delete editorTemp[C]
              } catch (N) {
                RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(N)
              }
            }
          }
          try {
            editorTemp._BODY
            && (editorTemp._BODY = null, delete editorTemp._BODY)
          } catch (S) {
            RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(S)
          }
          try {
            editorTemp._DOC && (editorTemp._DOC = null, delete editorTemp._DOC)
          } catch (P) {
            RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(P)
          }
          RAONKEDITOR.util.removeElementWithChildNodes(
              document.getElementById(I));
          try {
            RAONKEDITOR.util.removeElementWithChildNodes(
                e.getElementById("raonk_frame_holder" + F))
          } catch (W) {
            RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(W)
          }
          var p = 0, T;
          for (T in RAONKEDITOR.RAONKHOLDER) {
            if (T == F) {
              break;
            } else {
              p++;
            }
          }
          RAONKEDITOR.RAONKMULTIPLEID.splice(p, 1);
          RAONKEDITOR.RAONKMULTIPLE["raonk_frame_" + F]
          && delete RAONKEDITOR.RAONKMULTIPLE["raonk_frame_" + F];
          "undefined" != typeof RAONKEDITOR.RAONKHOLDER[F]
          && delete RAONKEDITOR.RAONKHOLDER[F];
          if (RAONKEDITOR.RAONKMULTIPLEID && 0
              < RAONKEDITOR.RAONKMULTIPLEID.length) {
            G_CURRKEDITOR =
                RAONKEDITOR.RAONKMULTIPLE["raonk_frame_"
                + RAONKEDITOR.RAONKMULTIPLEID[0]];
          } else {
            try {
              G_CURRKEDITOR = null, delete G_CURRKEDITOR
            } catch (X) {
              RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(X)
            }
            try {
              delete RAONKEDITOR.RAONKMULTIPLEEVENT
            } catch (Y) {
              RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(Y)
            }
          }
        }
        editorTemp = null;
        delete editorTemp;
        if ("1" == J) {
          try {
            e.body.focus()
          } catch (Z) {
            RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(Z)
          }
          c = !1;
          try {
            for (var U = e.getElementsByTagName("input"), aa = U.length, b = 0;
                b < aa; b++) {
              if ("text" ==
                  U[b].type) {
                U[b].focus();
                c = !0;
                break
              }
            }
          } catch (ba) {
            RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(ba)
          }
          try {
            !c && e.getElementsByTagName("textarea")[0]
            && (e.getElementsByTagName("textarea")[0].focus(), c = !0)
          } catch (ca) {
            RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(ca)
          }
          try {
            c || e.getElementsByTagName("select")[0] && e.getElementsByTagName(
                "select")[0].focus()
          } catch (da) {
            RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(da)
          }
        }
        if (d) {
          KEDITORTOP.RAONKEDITOR.G_COPIEDCELLDATA = null;
          KEDITORTOP.RAONKEDITOR.IsCrossDomain =
              null;
          KEDITORTOP.RAONKEDITOR.G_COPIEDTABLE = null;
          KEDITORTOP.RAONKEDITOR.G_SELECTED_ELEMENT = null;
          KEDITORTOP.RAONKEDITOR.G_SELECTED_IMAGE_ELEMENT = null;
          try {
            delete KEDITORTOP.RAONKEDITOR.G_COPIEDCELLDATA, delete KEDITORTOP.RAONKEDITOR.IsCrossDomain, delete KEDITORTOP.RAONKEDITOR.G_COPIEDTABLE, delete KEDITORTOP.RAONKEDITOR.G_SELECTED_ELEMENT, delete KEDITORTOP.RAONKEDITOR.G_SELECTED_IMAGE_ELEMENT
          } catch (ea) {
            RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(ea)
          }
          try {
            KEDITORTOP = KEDITORDOC = KEDITORWIN = null,
                delete KEDITORTOP, delete KEDITORDOC, delete KEDITORWIN
          } catch (fa) {
            RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(fa)
          }
          for (C in RAONKEDITOR) {
            if (RAONKEDITOR.hasOwnProperty(C)) {
              try {
                RAONKEDITOR[C] = null, delete RAONKEDITOR[C]
              } catch (ga) {
                RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(ga)
              }
            }
          }
          try {
            RAONKEDITOR = null, delete RAONKEDITOR
          } catch (ha) {
            RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(ha)
          }
          try {
            RAONKEditor = RAONKEditor_CONFIG = null
          } catch (ia) {
            RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(ia)
          }
          if ("function" ===
              typeof RAONKEDITOR_CreationComplete) {
            try {
              RAONKEDITOR_CreationComplete = null, delete RAONKEDITOR_CreationComplete
            } catch (ja) {
              RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(ja)
            }
          }
          if ("function" === typeof RAONKEDITOR_BeforePaste) {
            try {
              RAONKEDITOR_BeforePaste = null, delete RAONKEDITOR_BeforePaste
            } catch (ka) {
              RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(ka)
            }
          }
          if ("function" === typeof RAONKEDITOR_CustomAction) {
            try {
              RAONKEDITOR_CustomAction = null, delete RAONKEDITOR_CustomAction
            } catch (la) {
              RAONKEDITOR && RAONKEDITOR.logMode &&
              console && console.log(la)
            }
          }
          if ("function" === typeof RAONKEDITOR_SetComplete) {
            try {
              RAONKEDITOR_SetComplete = null, delete RAONKEDITOR_SetComplete
            } catch (ma) {
              RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(ma)
            }
          }
          if ("function" === typeof RAONKEDITOR_OnLanguageDefinition) {
            try {
              RAONKEDITOR_OnLanguageDefinition = null, delete RAONKEDITOR_OnLanguageDefinition
            } catch (na) {
              RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(na)
            }
          }
          if ("function" === typeof RAONKEDITOR_AfterChangeMode) {
            try {
              RAONKEDITOR_AfterChangeMode = null, delete RAONKEDITOR_AfterChangeMode
            } catch (oa) {
              RAONKEDITOR &&
              RAONKEDITOR.logMode && console && console.log(oa)
            }
          }
          if ("function" === typeof RAONKEDITOR_BeforeInsertUrl) {
            try {
              RAONKEDITOR_BeforeInsertUrl = null, delete RAONKEDITOR_BeforeInsertUrl
            } catch (pa) {
              RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(pa)
            }
          }
          if ("function" === typeof RAONKEDITOR_OnError) {
            try {
              RAONKEDITOR_OnError = null, delete RAONKEDITOR_OnError
            } catch (qa) {
              RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(qa)
            }
          }
          if ("function" === typeof RAONKEDITOR_Resized) {
            try {
              RAONKEDITOR_Resized = null, delete RAONKEDITOR_Resized
            } catch (ra) {
              RAONKEDITOR &&
              RAONKEDITOR.logMode && console && console.log(ra)
            }
          }
          if ("function" === typeof RAONKEDITOR_KeyEvent) {
            try {
              RAONKEDITOR_KeyEvent = null, delete RAONKEDITOR_KeyEvent
            } catch (sa) {
              RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(sa)
            }
          }
          if ("function" === typeof RAONKEDITOR_MouseEvent) {
            try {
              RAONKEDITOR_MouseEvent = null, delete RAONKEDITOR_MouseEvent
            } catch (ta) {
              RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(ta)
            }
          }
          if ("function" === typeof RAONKEDITOR_CommandEvent) {
            try {
              RAONKEDITOR_CommandeEvent = null, delete RAONKEDITOR_CommandeEvent
            } catch (ua) {
              RAONKEDITOR &&
              RAONKEDITOR.logMode && console && console.log(ua)
            }
          }
        }
      }
    } catch (va) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(va)
    }
  };
  RAONKEDITOR.getByteLength = RAONKEDITOR.GetByteLength = function (a) {
    var d = 0;
    try {
      var c, b, e;
      for (c = b = 0; e = a.charCodeAt(b++);
          c += e >> 11 ? 3 : e >> 7 ? 2 : 1) {
        ;
      }
      d = c
    } catch (f) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(f)
    }
    return d
  };
  RAONKEDITOR.getUserRuntimeMode = RAONKEDITOR.GetUserRuntimeMode = function (a) {
    var d = null;
    try {
      var c = RAONKEDITOR.util._setEditor(a);
      c && (KEDITORTOP.G_CURRKEDITOR = c, d = "1" ==
      KEDITORTOP.G_CURRKEDITOR._config.useKManager ? "agent"
          : KEDITORTOP.G_CURRKEDITOR._config.runtimes)
    } catch (b) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(b)
    }
    return d
  };
  RAONKEDITOR.createHyperLink = RAONKEDITOR.CreateHyperLink = function (a, d) {
    try {
      var c = RAONKEDITOR.util._setEditor(d);
      if (c) {
        var b = c._FRAMEWIN;
        a.type = "hyperlink";
        a.target || (a.target = "");
        a.title || (a.title = "");
        b.command_InsertHyperLink(c.ID, c._EDITOR.design, a)
      }
    } catch (e) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(e)
    }
  };
  RAONKEDITOR.setTableEdgeReduce =
      RAONKEDITOR.SetTableEdgeReduce = function (a, d) {
        try {
          var c = RAONKEDITOR.util._setEditor(d);
          if (c) {
            var b = c._FRAMEWIN;
            if (b) {
              for (var e = b._iframeDoc.body.getElementsByTagName("table"),
                  f = e.length, c = 0; c < f; c++) {
                "N" == a ? e[c].style.borderCollapse = "collapse" : "Y" == a
                    && (e[c].style.borderCollapse = "separate");
                "" == e[c].style.borderTop
                && (e[c].style.borderTop = "1px solid rgb(0, 0, 0)");
                "" == e[c].style.borderLeft
                && (e[c].style.borderLeft = "1px solid rgb(0, 0, 0)");
                "" == e[c].style.borderBottom
                && (e[c].style.borderBottom = "1px solid rgb(0, 0, 0)");
                "" == e[c].style.borderRight
                && (e[c].style.borderRight = "1px solid rgb(0, 0, 0)");
                for (var k = e[c].rows.length, h = b = 0; h < k;
                    h++) {
                  for (var b = e[c].rows[h].cells.length, l = 0; l < b;
                      l++) {
                    "" == e[c].rows[h].cells[l].style.borderTop
                    && (e[c].rows[h].cells[l].style.borderTop = "1px solid rgb(0, 0, 0)"), ""
                    == e[c].rows[h].cells[l].style.borderLeft
                    && (e[c].rows[h].cells[l].style.borderLeft = "1px solid rgb(0, 0, 0)"), ""
                    == e[c].rows[h].cells[l].style.borderBottom
                    && (e[c].rows[h].cells[l].style.borderBottom = "1px solid rgb(0, 0, 0)"), ""
                    ==
                    e[c].rows[h].cells[l].style.borderRight
                    && (e[c].rows[h].cells[l].style.borderRight = "1px solid rgb(0, 0, 0)")
                  }
                }
              }
            }
          }
        } catch (n) {
          RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(n)
        }
      };
  RAONKEDITOR.getCaretObject = RAONKEDITOR.GetCaretObject = function (a) {
    var d = null;
    try {
      var c = RAONKEDITOR.util._setEditor(a);
      if (c) {
        KEDITORTOP.G_CURRKEDITOR = c;
        var b = c._FRAMEWIN;
        b.restoreSelection();
        b.setFocusToBody();
        var e = b.getFirstRange().range.commonAncestorContainer;
        if (e) {
          for (d = e; d && 1 !== d.nodeType;) {
            d = d.parentNode
          }
        }
      }
    } catch (f) {
      RAONKEDITOR &&
      RAONKEDITOR.logMode && console && console.log(f)
    }
    return d
  };
  RAONKEDITOR.replaceBlocktoBr = RAONKEDITOR.ReplaceBlocktoBr = function (a) {
    try {
      var d = RegExp("<p[^>]*>", "gi");
      a = a.replace(d, "");
      d = RegExp("</?p>", "gi");
      a = a.replace(d, "<br />")
    } catch (c) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(c)
    }
    return a
  };
  RAONKEDITOR.getMetaTag = RAONKEDITOR.GetMetaTag = function (a, d) {
    var c = "";
    try {
      if ("" == a) {
        return "";
      }
      var b = RAONKEDITOR.getEditorByName(KEDITORTOP.G_CURRKEDITOR.ID);
      if (b) {
        for (var e = b._FRAMEWIN._iframeDoc.getElementsByTagName("META"),
            b = 0, f = e.length, k; b < f; b++) {
          if (k = e[b], k.name.toLowerCase()
          == a.toLowerCase()) {
            c = k.content;
            break
          }
        }
      }
    } catch (h) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(h)
    }
    return c
  };
  RAONKEDITOR.setMetaTag = RAONKEDITOR.SetMetaTag = function (a, d, c) {
    try {
      if ("" != a && "" != d) {
        var b = RAONKEDITOR.getEditorByName(KEDITORTOP.G_CURRKEDITOR.ID);
        if (b) {
          c = !1;
          for (var e = b._FRAMEWIN._iframeDoc.getElementsByTagName("META"),
              f = 0, k = e.length, h; f < k;
              f++) {
            if (h = e[f], h.name.toLowerCase() == a.toLowerCase()) {
              h.content = d;
              c = !0;
              break
            }
          }
          if (0 == c) {
            var l =
                b._FRAMEWIN._iframeDoc.createElement("META");
            l.name = a;
            l.content = d;
            b._FRAMEWIN._iframeDoc.getElementsByTagName("head")[0].appendChild(
                l)
          }
        }
      }
    } catch (n) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(n)
    }
  };
  RAONKEDITOR.convertHWPFilter = RAONKEDITOR.ConvertHWPFilter = function (a,
      d) {
    var c = a;
    try {
      var b = null;
      try {
        b = RAONKEDITOR.getEditorByName(KEDITORTOP.G_CURRKEDITOR.ID)
      } catch (e) {
        b = RAONKEDITOR.getEditorByName("")
      }
      if (b) {
        var f;
        "string" == typeof d ? (f = d, d = {}) : "object" == typeof d
            ? f = d.extraID : d = {};
        c = b._FRAMEWIN.RAONK_EDITOR.HWPFilter.HTMLtoXML(a,
            f, d)
      }
    } catch (k) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(k)
    }
    return c
  };
  RAONKEDITOR.convertMMToPxUnit = RAONKEDITOR.ConvertMMToPxUnit = function (a) {
    var d = a;
    try {
      if (-1 < d.indexOf("mm")) {
        var c = function (a) {
          var b = a, c = !1;
          -1 < a.indexOf("mm") && (b = b.replace(/mm/ig, ""), c = !0);
          c && (b = b / .264583 + "px");
          return b
        }, b = !1, e = !1, d = d.replace(/ width=['\"](\d*(\.\d+)?mm)['\"]/ig,
            function (a, d) {
              b = !0;
              return ' width="' + c(d) + '"'
            }), d = d.replace(/ height=['\"](\d*(\.\d+)?mm)['\"]/ig,
            function (a, b) {
              e = !0;
              return ' height="' + c(b) +
                  '"'
            });
        0 == b && (d = d.replace(/ width=(\d*(\.\d+)?mm)/ig, function (a, b) {
          return ' width="' + c(b) + '"'
        }));
        0 == e && (d = d.replace(/ height=(\d*(\.\d+)?mm)/ig, function (a, b) {
          return ' height="' + c(b) + '"'
        }))
      }
    } catch (f) {
      d = a
    }
    return d
  };
  RAONKEDITOR.getBodyTextLength = RAONKEDITOR.GetBodyTextLength = function (a) {
    var d;
    try {
      var c = RAONKEDITOR.getEditorByName(a);
      if (c) {
        var b = c._FRAMEWIN._iframeDoc.body.innerText,
            b = b.replace(/\r\n/g, "");
        0 == c._config.wordCount.countwhitespace && (b = b.replace(/ /gim, ""));
        d = b.length
      }
    } catch (e) {
      RAONKEDITOR &&
      RAONKEDITOR.logMode && console && console.log(e)
    }
    return d
  };
  RAONKEDITOR.getBodyLineCount = RAONKEDITOR.GetBodyLineCount = function (a) {
    var d = 0;
    try {
      var c = RAONKEDITOR.getEditorByName(a);
      if (c) {
        var b = c._FRAMEWIN, e = b.getInnerText(b._iframeDoc.body, !0);
        e.match(/\n/gi) && (d = e.match(/\n/gi).length)
      }
    } catch (f) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(f)
    }
    return d
  };
  RAONKEDITOR.AddHttpHeader = function (a, d, c) {
    try {
      var b = RAONKEDITOR.util._setEditor(c);
      b && (RAONKEDITOR.G_CURRKEDITOR = b, RAONKEDITOR.G_CURRKEDITOR._FRAMEWIN
      &&
      "1" == b._config.useKManager && (b.tempHttpHeaderObj[a] = d))
    } catch (e) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(e)
    }
  };
  RAONKEDITOR.cleanNestedHtml = RAONKEDITOR.CleanNestedHtml = function (a, d,
      c) {
    try {
      var b = RAONKEDITOR.util._setEditor(c);
      b && b._FRAMEWIN.RAONK_EDITOR.HTMLParser.CleanNestedHtml(b, a, d)
    } catch (e) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(e)
    }
  };
  RAONKEDITOR.cleanNestedHtmlEx = RAONKEDITOR.CleanNestedHtmlEx = function (a,
      d, c, b) {
    try {
      var e = RAONKEDITOR.util._setEditor(b);
      e && e._FRAMEWIN.RAONK_EDITOR.HTMLParser.CleanNestedHtml(e,
          a, d, c)
    } catch (f) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(f)
    }
  };
  RAONKEDITOR.cleanNestedHtmlForNode = RAONKEDITOR.CleanNestedHtmlForNode = function (a,
      d, c, b) {
    var e = "";
    try {
      var f = RAONKEDITOR.util._setEditor(b);
      if (f) {
        if ("" == c || 0 == c) {
          c = "p";
        }
        e = f._FRAMEWIN.RAONK_EDITOR.HTMLParser.CleanNestedHtml(f, "2", d, c, a)
      }
    } catch (k) {
      e = html
    }
    return e
  };
  RAONKEDITOR.cleanNestedTag = RAONKEDITOR.CleanNestedTag = function (a, d, c,
      b, e, f) {
    try {
      var k = RAONKEDITOR.util._setEditor(f);
      if (k) {
        var h = f = null;
        if (d && "" != d) {
          if ("string" == typeof d) {
            var l =
                document.createElement("div");
            l.innerHTML = d;
            h = l
          } else {
            "object" == typeof d && 1 == d.nodeType
            && (h = d);
          }
        } else {
          h = k._DOC;
        }
        h && (d = "", void 0 != b && "" != b
        && (d = RAONKEDITOR.util.parseIntOr0(
            b)), k._FRAMEWIN.RAONK_EDITOR.HTMLParser.CheckNeedNestedHTML(h, d,
            e) && (d = !0, a && "" != a && (d = confirm(a)), d && (a = "", h
        != k._DOC
        && (a = h), f = k._FRAMEWIN.RAONK_EDITOR.HTMLParser.CleanNestedHtml(k,
            c, b, e, a))));
        return f
      }
    } catch (n) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(n)
    }
  };
  RAONKEDITOR.manuallyTempSave = RAONKEDITOR.ManuallyTempSave = function (a) {
    try {
      var d =
          RAONKEDITOR.util._setEditor(a);
      d && KEDITORTOP.RAONKEDITOR.GetHtmlContents({
        type: "htmlexwithdoctype", isAuto: !0, callback: function (a) {
          try {
            d._FRAMEWIN.fn_saveToLocalStorage(d, a)
            && d._setting.auto_save.toString().split(",")[1] && null
            != d._setting.auto_save_fn && (KEDITORTOP.KEDITORWIN.clearInterval(
                d._setting.auto_save_fn), d._setting.auto_save_fn = d._FRAMEWIN.fn_AutoSaveInterval(
                d))
          } catch (c) {
            RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(c)
          }
        }
      }, d.ID)
    } catch (c) {
      RAONKEDITOR && RAONKEDITOR.logMode && console &&
      console.log(c)
    }
  };
  RAONKEDITOR.closeDialogPopup = RAONKEDITOR.CloseDialogPopup = function (a) {
    var d, c;
    try {
      if (d = RAONKEDITOR.util._setEditor(a)) {
        c = d._FRAMEWIN;
        var b = KEDITORDOC.getElementById("keditor_dialog");
        "undefined" != typeof b && c.event_dialog_cancel(b)
      }
    } catch (e) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(e)
    }
  };
  RAONKEDITOR.findWord = RAONKEDITOR.FindWord = function (a, d) {
    var c, b;
    try {
      if (c = RAONKEDITOR.util._setEditor(d), b = c._FRAMEWIN, "undefined"
      != typeof a && "undefined" != typeof a.searchText) {
        var e = "undefined" !=
            typeof a.caseSensitive ? a.caseSensitive : !1,
            f = "undefined" != typeof a.revertEndDocument ? a.revertEndDocument
                : !0,
            k = "undefined" != typeof a.wordByWord ? a.wordByWord : !1,
            h = "undefined" != typeof a.searchDirection ? a.searchDirection
                : !0;
        if (1 == !!a.initFocus) {
          b.focus();
          b.document.body.focus();
          var l = b.getFirstRange().range;
          if (h) {
            l.setStart(b._iframeDoc.body, 0), l.setEnd(b._iframeDoc.body,
                0);
          } else {
            var n;
            try {
              n = b._iframeDoc.body.childNodes.length
            } catch (p) {
              n = 0
            }
            l.setStart(b._iframeDoc.body, n);
            l.setEnd(b._iframeDoc.body, n)
          }
          var m =
              b._iframeWin.getSelection ? b._iframeWin.getSelection()
                  : b._iframeDoc.selection;
          m && l && (l.select ? l.select() : m.removeAllRanges && m.addRange
              && (m.removeAllRanges(), m.addRange(l)));
          c._LastRange = l;
          b.g_findRepalceRange = null
        }
        b.event_keditor_find(a.searchText, e, f, k, h)
      }
    } catch (q) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(q)
    }
  };
  RAONKEDITOR.setReadOnly = RAONKEDITOR.SetReadOnly = function (a, d, c) {
    try {
      var b = RAONKEDITOR.util._setEditor(c);
      if (b) {
        var e = b._FRAMEWIN;
        "undefined" != typeof arguments && 3 == arguments.length &&
        "undefined" != typeof d && (d = d.replace(/ /gi,
            ""), e.G_ICON_READONLY_ACTIVATION_SET = d.split(","));
        b._config.editorBodyEditableMode = "2";
        "string" === typeof a && (a = RAONKEDITOR.util.convertStringtoBoolean(
            a));
        a ? (b._config.editorBodyEditable = !1, b._iconEnable(
                "default"), b._iconEnable("editableFalse"), ""
            != b._config.placeholder.content && e.placeholderControl(b, "remove"))
            : (b._config.editorBodyEditable = !0, b._iconEnable("default"), ""
            != b._config.placeholder.content && (e.placeholderControl(b,
                "set"), e.placeholderControl(b,
                "class")));
        e.changeBodyContenteditable(!a);
        var f = e.document.getElementById("ue_" + b.ID + "source");
        f && (f.style.display = a ? "none" : "");
        var k = e.document.getElementById("ue_" + b.ID + "preview");
        k && (k.style.display = a ? "none" : "");
        var h = e.document.getElementById("ue_" + b.ID + "text");
        h && (h.style.display = a ? "none" : "")
      }
    } catch (l) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(l)
    }
  };
  RAONKEDITOR.setCustomDisableIconList = RAONKEDITOR.SetCustomDisableIconList = function (a,
      d) {
    try {
      var c = RAONKEDITOR.util._setEditor(d);
      if (c) {
        var b =
            c._FRAMEWIN;
        "undefined" != typeof a && (a = a.replace(/ /ig,
            ""), b.G_ICON_CUSTOM_ADD_DISABLED_SET = "" != a ? a.split(",")
            : [], c._iconEnable(""), c._iconEnable("default"))
      }
    } catch (e) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(e)
    }
  };
  RAONKEDITOR.setZoom = RAONKEDITOR.SetZoom = function (a, d) {
    try {
      0 == !!a && (a = "100%");
      var c = RAONKEDITOR.util._setEditor(d);
      if (c) {
        var b = c._FRAMEWIN,
            e = b.document.getElementById("ue_" + c.ID + "zoom_text");
        e && (e.value = a, b.command_zoom(c.ID,
            b.document.getElementById("keditor_design_" + c.ID)))
      }
    } catch (f) {
      RAONKEDITOR &&
      RAONKEDITOR.logMode && console && console.log(f)
    }
  };
  RAONKEDITOR.changeToAgentMode = RAONKEDITOR.ChangeToAgentMode = function (a) {
    try {
      var d = RAONKEDITOR.util._setEditor(a);
      if (d && "0" == d._config.useKManager) {
        a = d.ID;
        var c = RAONKEDITOR.UserConfigHashTable.getItem(a);
        "undefined" != typeof c && (RAONKEDITOR.Destroy(a,
            !1), c.Runtimes = "agent", new RAONKEditor(c))
      }
    } catch (b) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(b)
    }
  };
  RAONKEDITOR.replaceTextAll = RAONKEDITOR.ReplaceTextAll = function (a, d) {
    try {
      var c = RAONKEDITOR.util._setEditor(d);
      if (c) {
        var b = c._FRAMEWIN;
        "undefined" != typeof a && "undefined" != typeof a.searchText
        && "undefined" != typeof a.replaceText && b.event_keditor_all_replace(
            a.searchText, a.replaceText,
            "undefined" != typeof a.caseSensitive ? a.caseSensitive : !1, null,
            "undefined" != typeof a.wordByWord ? a.wordByWord : !1, null,
            "undefined" != typeof a.showAlert ? !a.showAlert : !0,
            "undefined" != typeof a.selection ? a.selection : !1)
      }
    } catch (e) {
      RAONKUPLOAD.util.writeLog("FATAL", e.message, null)
    }
  };
  RAONKEDITOR.replaceText = RAONKEDITOR.ReplaceText = function (a,
      d) {
    try {
      var c = RAONKEDITOR.util._setEditor(d);
      if (c) {
        var b = c._FRAMEWIN;
        "undefined" != typeof a && "undefined" != typeof a.searchText
        && "undefined" != typeof a.replaceText && b.event_keditor_replace(
            a.searchText, a.replaceText,
            "undefined" != typeof a.caseSensitive ? a.caseSensitive : !1,
            "undefined" != typeof a.reverse ? !a.reverse : !0,
            "undefined" != typeof a.wordByWord ? a.wordByWord : !1,
            "undefined" != typeof a.direction ? a.direction : !1,
            "undefined" != typeof a.showLocation ? !a.showLocation : !0)
      }
    } catch (e) {
      RAONKEDITOR && RAONKEDITOR.logMode &&
      console && console.log(e)
    }
  };
  RAONKEDITOR.setEditorBodyWidth = RAONKEDITOR.SetEditorBodyWidth = function (a,
      d) {
    try {
      var c = RAONKEDITOR.util._setEditor(d);
      if (c) {
        var b = c._config;
        if ("1" == b.ruler.use && "1" == b.autoBodyFit) {
          var e = c._FRAMEWIN, c = a;
          "string" == typeof c && (c = parseInt(c, 10));
          0 < c && (e.G_BodyFit.SetBodyWidth(c), e.G_Ruler
          && e.G_Ruler.SetRulerPosition())
        }
      }
    } catch (f) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(f)
    }
  };
  RAONKEDITOR.getSelectedContent = RAONKEDITOR.GetSelectedContent = function (a) {
    try {
      var d = RAONKEDITOR.util._setEditor(a);
      if (d) {
        a = {text: "", html: ""};
        var c = d._FRAMEWIN, b = c.getFirstRange().range;
        if (null == b || void 0 == b || 1 == b.collapsed) {
          b = d._LastRange;
        }
        if (null != b && b.cloneContents()) {
          dummyDiv = document.createElement("div");
          dummyDiv.appendChild(b.cloneContents());
          a.html = dummyDiv.innerHTML;
          for (var e = dummyDiv.getElementsByTagName("p"), f = e.length, d = 0;
              d < f; d++) {
            var k = e[d];
            "" == k.textContent && 0 == RegExp("<br.*\\n*<br", "gim").test(
                k.innerHTML) && (k.innerHTML = "")
          }
          var h = dummyDiv.innerHTML, h = h.replace(/\r/g, ""),
              h = h.replace(/[\n|\t]/g, ""), h =
                  h.replace(/[\v|\f]/g, ""), h = h.replace(/<p><br><\/p>/gi, "\n"),
              h = h.replace(/<P>&nbsp;<\/P>/gi, "\n"),
              h = h.replace(/<br(\s)*\/?>/gi, "\n"),
              h = h.replace(/<br(\s[^\/]*)?>/gi, "\n"),
              h = h.replace(/<\/p(\s[^\/]*)?>/gi, "\n"),
              h = h.replace(/<\/li(\s[^\/]*)?>/gi, "\n"),
              h = h.replace(/<\/tr(\s[^\/]*)?>/gi, "\n"),
              h = h.replace(/<\/h[1-5](\s[^\/]*)?>/gi, "\n");
          nIdx = h.lastIndexOf("\n");
          -1 < nIdx && "\n" == h.substring(nIdx) && (h = h.substring(0, nIdx));
          h = c.removeStripTags(h, null);
          h = c.unhtmlSpecialChars(h);
          a.text = h;
          delete dummyDiv
        }
        return a
      }
    } catch (l) {
      RAONKEDITOR &&
      RAONKEDITOR.logMode && console && console.log(l)
    }
  };
  RAONKEDITOR.getStatusBarMode = RAONKEDITOR.GetStatusBarMode = function (a) {
    try {
      var d = RAONKEDITOR.getEditor(a);
      if (d) {
        return d.getEditorMode()
      }
    } catch (c) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(c)
    }
  };
  RAONKEDITOR.replaceAllContents = RAONKEDITOR.ReplaceAllContents = function (a,
      d) {
    try {
      if (0 != !!a) {
        var c = RAONKEDITOR.getEditor(d);
        if (c) {
          var b = c._FRAMEWIN, e = {
            searchValue: "",
            newValue: "",
            ignoreCapital: !0,
            ignoreAlert: !0
          }, f;
          for (f in a) {
            e[f] = a[f];
          }
          "" == e.searchValue &&
          "" == e.newValue || b.command_replaceAll(c.ID, c._EDITOR.design,
              e.searchValue, e.newValue, !e.ignoreCapital, !1, !0, !1,
              e.ignoreAlert, !1)
        }
      }
    } catch (k) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(k)
    }
  };
  RAONKEDITOR.openFileWithEditor = RAONKEDITOR.OpenFileWithEditor = function (a,
      d) {
    try {
      if (0 != !!a) {
        var c = RAONKEDITOR.getEditor(d);
        c && "1" == c._config.useKManager && c._FRAMEWIN.agentDocumentEdit(
            {type: "", filePath: a.filePath}, c)
      }
    } catch (b) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(b)
    }
  };
  RAONKEDITOR.setHorizontalLineHeight =
      RAONKEDITOR.SetHorizontalLineHeight = function (a, d) {
        try {
          if (0 != !!a) {
            var c = RAONKEDITOR.getEditor(d);
            if (c) {
              var b = c._FRAMEWIN, e = c._config, f = e.horizontalLine.height;
              "undefined" != typeof a.height
              && (f = RAONKEDITOR.util.parseIntOr0(
                  a.height), e.horizontalLine.height = f);
              "undefined" != typeof a.repeat
              && (e.horizontalLine.repeat = a.repeat);
              "2" == e.horizontalLine.use && b.set_horizontal_line_2(c)
            }
          }
        } catch (k) {
          RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(k)
        }
      };
  RAONKEDITOR.getWrittenAreaSize = RAONKEDITOR.GetWrittenAreaSize =
      function (a) {
        try {
          var d = RAONKEDITOR.getEditor(a);
          a = {width: 0, height: 0, min_width: 0, min_height: 0};
          if (d) {
            var c = d.getEditorMode();
            "source" != c && "preview" != c && "text" != c || d.setChangeMode(
                "design");
            var b = d._BODY, e = d._DOC.documentElement,
                f = d._FRAMEWIN.document.getElementById(
                    "ue_editor_holder_" + d.ID);
            a.min_width = f.clientWidth;
            a.min_height = f.clientHeight;
            a.width = Math.max(b.scrollWidth, b.offsetWidth, e.clientWidth,
                e.scrollWidth, e.offsetWidth, f.clientWidth);
            a.height = Math.max(b.scrollHeight, b.offsetHeight, e.clientHeight,
                e.scrollHeight, e.offsetHeight, f.clientHeight);
            var k = KEDITORTOP.G_CURRKEDITOR._FRAMEWIN.document.body.offsetHeight
                <= b.scrollHeight;
            if (KEDITORTOP.G_CURRKEDITOR._FRAMEWIN.document.body.offsetWidth
                <= b.scrollWidth || k) {
              a.width += 15, a.height += 30
            }
          }
          return a
        } catch (h) {
          RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(h)
        }
      };
  RAONKEDITOR.getFontStyleForCaret = RAONKEDITOR.GetFontStyleForCaret = function (a) {
    var d = {fontFamily: "", fontSize: "", lineHeight: ""};
    if (d = RAONKEDITOR.getEditor(a)) {
      if ("design" != d.getEditorMode()) {
        return null;
      }
      a = d._FRAMEWIN;
      a.keditor_src_init(d._EDITOR.design);
      a.restoreSelection();
      var d = null, c = a.getFirstRange().range;
      c && c.startContainer && (d = a.getMyElementNode(c.startContainer));
      return null == d ? null : d = a.getFontStyle(d)
    }
    return null
  };
  RAONKEDITOR.setBodyTextValue = RAONKEDITOR.SetBodyTextValue = function (a,
      d) {
    try {
      var c = RAONKEDITOR.util.parseSetApiParam(a);
      a = c.html;
      d = RAONKEDITOR.util._getEditorName(d);
      if (null != d) {
        if (RAONKEDITOR.isLoadedEditorEx(d)) {
          var b = RAONKEDITOR.util._setEditor(d), e = b._FRAMEWIN;
          a = e.htmlSpecialChars(a);
          a = e.addLineBreaker(b._config.enterTag, a);
          RAONKEDITOR.setBodyValue(a, d)
        } else {
          null == RAONKEDITOR.InitEditorDataHashTable
          && (RAONKEDITOR.InitEditorDataHashTable = new RAONKEDITOR.util.hashTable), RAONKEDITOR.InitEditorDataHashTable.setItem(
              d, {mode: "setBodyTextValue", value: c})
        }
      }
    } catch (f) {
      e.restoreValueInSetError(b)
    }
  };
  var rv = RAONKEDITOR.rvi,
      rva = [rv.maj.join(rv.s2), parseInt(rv.mi1.join(rv.s2), 10) * rv.m1,
        rv.mi2.join(rv.s2), rv.l[0]];
  RAONKEDITOR.UrlStamp = parseInt(rv.mi1.join(rv.s2), 10) * rv.m2 + rv.l[0];
  RAONKEDITOR._$0 =
      RAONKEDITOR.util.base64_encode(rva.join(rv.s1));
  delete RAONKEDITOR.rvi;
  RAONKEDITOR._$0S = "";
  window.RAONKEDITOR
  && (RAONKEDITOR.startUpEditor = RAONKEDITOR.StartUpEditor = function (a) {
    try {
      void 0 != a && "" != a || 1 != RAONKEDITOR.RAONKMULTIPLEID.length
      || (a = RAONKEDITOR.RAONKMULTIPLEID[0]);
      var d = document.getElementById("raonk_frame_" + a);
      if ("undefined" != typeof d && -1 < d.getAttribute("src").indexOf(
          "editor_dummy.html")) {
        var c = d.getAttribute("keditor_customsrc");
        d.setAttribute("keditor_customsrc", "");
        d.removeAttribute("keditor_customsrc");
        d.src = c;
        d.contentWindow.location.replace(c)
      }
    } catch (b) {
      RAONKEDITOR && RAONKEDITOR.logMode && console && console.log(b)
    }
  })
}
;
