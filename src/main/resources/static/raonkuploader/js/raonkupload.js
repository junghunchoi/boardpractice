/*
 Copyright (c) 2014, Raonwiz Technology Inc. All rights reserved.
*/
if ("undefined" != typeof window && !window.RAONKUPLOAD) {
  window.RAONKUPLOAD = function () {
    var a = window.RAONKUPLOAD_ROOTPATH || "";
    if (!a) {
      for (var c = document.getElementsByTagName("script"), b = c.length,
          e = null, f = 0; f < b; f++) {
        if (e = c[f], e = e.src.match(
            /(^|.*[\\\/])raonkupload\.js/i)) {
          a = e[1];
          break
        }
      }
    }
    -1 == a.indexOf(":/") && (a = 0 === a.indexOf("/") ? location.href.match(
        /^.*?:\/\/[^\/]*/)[0] + a : location.href.match(/^[^\?]*\/(?:)/)[0]
        + a);
    a = a.substring(0, a.length - 1);
    a = a.substring(0, a.lastIndexOf("/")) + "/";
    if (!a) {
      throw"RAONK Upload installation path could not be automatically detected.";
    }
    return {
      isRelease: !0,
      logMode: !1,
      logLevel: "ALL",
      logGroupingName: "",
      isPopUpCssLoaded: !1,
      version: "RAON K Upload",
      UrlStamp: "",
      rootPath: a,
      RAONKMULTIPLE: {},
      RAONKHOLDER: {},
      RAONKMULTIPLEID: [],
      CUploadID: "",
      IsUploadLoadedHashTable: null,
      InitUploadDataHashTable: null,
      UserConfigHashTable: null,
      _0_: null,
      IsCreatedDropZone: !1,
      EnforceDocumentDomain: !1,
      rvi: {
        m1: 7,
        maj: ["20", "18"],
        mi2: ["10", "40"],
        l: ["01"],
        m2: 77,
        mi1: ["23", "10", "23"],
        s1: ".",
        s2: ""
      }
    }
  }();
  try {
    "undefined" == typeof RAONKSolutionLog && "undefined"
    != typeof RAONKUploadLogMode &&
    RAONKUploadLogMode && (RAONKUPLOAD.logMode = !0, "undefined"
    != typeof RAONKUploadLogModeLevel
    && (RAONKUPLOAD.logLevel = RAONKUploadLogModeLevel.toUpperCase()), document.write(
        '<script src="' + RAONKUPLOAD.rootPath
        + "js/log4javascript/raonk.log4javascript.min.js?t="
        + RAONKUPLOAD.UrlStamp + '" type="text/javascript">\x3c/script>'))
  } catch (e$$4) {
    RAONKUPLOAD.logMode && console && console.log(e$$4)
  }
  RAONKUPLOAD.browser || (RAONKUPLOAD.browser = function () {
    var a = navigator.userAgent.toLowerCase(), c = window.opera, c = {
      ie: -1 < a.search("trident") ||
      -1 < a.search("msie") || /(edge)\/((\d+)?[\w\.]+)/i.test(a) ? !0 : !1,
      edge: /(edge)\/((\d+)?[\w\.]+)/i.test(a) ? !0 : !1,
      opera: !!c && c.version,
      webkit: -1 < a.indexOf(" applewebkit/"),
      mac: -1 < a.indexOf("macintosh"),
      quirks: (-1 < a.search("trident") || -1 < a.search("msie")
              || /(edge)\/((\d+)?[\w\.]+)/i.test(a)) && "BackCompat"
          == document.compatMode,
      mobile: -1 < a.indexOf("mobile") || -1 < a.indexOf("android") || -1
          < a.indexOf("iphone"),
      iOS: /(ipad|iphone|ipod)/.test(a),
      isCustomDomain: function (a) {
        if (!this.ie) {
          return !1;
        }
        var b = a.domain;
        a = RAONKUPLOAD.util.getDocWindow(a).location.hostname;
        var c = !1;
        try {
          c = RAONKUPLOAD.EnforceDocumentDomain
        } catch (e) {
          RAONKUPLOAD.logMode && console && console.log(e)
        }
        return 1 == !!c || b != a && b != "[" + a + "]"
      },
      isHttps: "https:" == location.protocol,
      HTML5Supported: !0,
      HTML5PlusSupported: !1,
      ajaxOnProgressSupported: !1,
      G_AP12: 9,
      G_AP24: "i",
      postMessageSupported: window.postMessage ? !0 : !1,
      _AP12: "QzpcRG9jdW1lbnRzIGFuZC"
    };
    c.gecko = "Gecko" == navigator.product && !c.webkit && !c.opera;
    c.ie && (c.gecko = !1);
    c.webkit && (-1 < a.indexOf("chrome") ? (c.chrome = !0, -1 < a.indexOf(
        "opr") && (c.opera = !0, c.chrome =
        !1)) : c.safari = !0);
    var b;
    c.ieVersion = 0;
    c.ie && (c.quirks || !document.documentMode ? -1 < a.indexOf("msie")
            ? b = parseFloat(a.match(/msie (\d+)/)[1]) : -1 < a.indexOf("trident")
                ? b = parseFloat(a.match(/rv:([\d\.]+)/)[1])
                : /(edge)\/((\d+)?[\w\.]+)/i.test(a) ? (b = 12, c.chrome = !1)
                    : b = 7
        : b = document.documentMode, c.ieVersion = b, c.ie12 = 12
        == b, c.ie11 = 11 == b, c.ie10 = 10 == b, c.ie9 = 9 == b, c.ie8 = 8
        == b, c.ie7 = 7 == b, c.ie6 = 7 > b || c.quirks);
    c.gecko && (b = a.match(/rv:([\d\.]+)/)) && (b = b[1].split("."), b = 1E4
        * b[0] + 100 * (b[1] || 0) + 1 * (b[2] || 0));
    c.webkit && (b = parseFloat(a.match(/ applewebkit\/(\d+)/)[1]));
    c.HTML5Supported = "File" in window && "FileReader" in window && "Blob"
        in window;
    c.HTML5PlusSupported = "File" in window && "FileReader" in window && "Blob"
        in window && ("WebSocket" in window || "MozWebSocket" in window);
    c.ie && 10 > c.ieVersion
    && (c.HTML5Supported = !1, c.HTML5PlusSupported = !1);
    c.WorkerSupported = 0 == c.ie && "Worker" in window;
    c.imageProcessWorkerSupported = "Worker" in window;
    a = null;
    try {
      a = new XMLHttpRequest, c.ajaxOnProgressSupported = !!(a && "upload" in a
          && "onprogress" in a.upload)
    } catch (e) {
      c.ajaxOnProgressSupported = !1
    }
    a =
        null;
    c.LocalStorageSupported = !0;
    try {
      null == window.localStorage && (c.LocalStorageSupported = !1)
    } catch (f) {
      c.LocalStorageSupported = !1
    }
    c._AP01 = "QzpcUHJvZ3";
    return c
  }());
  RAONKUPLOAD._userAgent || (RAONKUPLOAD._userAgent = {});
  RAONKUPLOAD.UserAgent || (RAONKUPLOAD.UserAgent = function () {
    var a = window && window.navigator && window.navigator.userAgent
            ? window.navigator.userAgent : "", c = {
          extend: function (a, b) {
            for (var c in b) {
              -1 !== "browser cpu device engine os".indexOf(c) && 0
              === b[c].length % 2 && (a[c] = b[c].concat(a[c]));
            }
            return a
          },
          has: function (a, b) {
            return "string" === typeof a ? -1 !== b.toLowerCase().indexOf(
                a.toLowerCase()) : !1
          }, lowerize: function (a) {
            return a.toLowerCase()
          }, major: function (a) {
            return "string" === typeof a ? a.split(".")[0] : void 0
          }
        }, b = function () {
          for (var b, c = 0, d, e, f, n, t, r, g = arguments; c < g.length && !t;) {
            var v = g[c], u = g[c + 1];
            if ("undefined" === typeof b) {
              for (f in b = {}, u) {
                n = u[f], "object"
                === typeof n ? b[n[0]] = void 0 : b[n] = void 0;
              }
            }
            for (d = e = 0; d < v.length && !t;) {
              if (t = v[d++].exec(a)) {
                for (f = 0;
                    f < u.length; f++) {
                  r = t[++e], n = u[f], "object" === typeof n && 0
                  < n.length ?
                      2 == n.length ? b[n[0]] = "function" == typeof n[1]
                          ? n[1].call(
                              this, r) : n[1] : 3 == n.length ? b[n[0]] = "function"
                      !== typeof n[1] || n[1].exec && n[1].test ? r ? r.replace(
                          n[1],
                          n[2]) : void 0 : r ? n[1].call(this, r, n[2]) : void 0 : 4
                          == n.length && (b[n[0]] = r ? n[3].call(this,
                              r.replace(n[1], n[2])) : void 0) : b[n] = r ? r
                          : void 0;
                }
              }
            }
            c += 2
          }
          return b
        }, e = function (a, b) {
          for (var d in b) {
            if ("object" === typeof b[d] && 0
                < b[d].length) {
              for (var e = 0; e < b[d].length; e++) {
                if (c.has(b[d][e], a)) {
                  return "?" === d ? void 0 : d
                }
              }
            } else if (c.has(b[d], a)) {
              return "?" === d ? void 0 : d;
            }
          }
          return a
        }, f = {
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
        }, d = [[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],
          ["model", "vendor", ["type", "tablet"]],
          [/applecoremedia\/[\w\.]+ \((ipad)/],
          ["model", ["vendor", "Apple"], ["type", "tablet"]], [/(apple\s{0,1}tv)/i],
          [["model", "Apple TV"], ["vendor", "Apple"]],
          [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(kindle)\/([\w\.]+)/i,
            /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i],
          ["vendor", "model", ["type", "tablet"]],
          [/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],
          ["model", ["vendor", "Amazon"], ["type", "tablet"]],
          [/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],
          [["model", e, {"Fire Phone": ["SD", "KF"]}], ["vendor", "Amazon"],
            ["type", "mobile"]], [/\((ip[honed|\s\w*]+);.+(apple)/i],
          ["model", "vendor", ["type", "mobile"]], [/\((ip[honed|\s\w*]+);/i],
          ["model", ["vendor", "Apple"], ["type", "mobile"]],
          [/(blackberry)[\s-]?(\w+)/i,
            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,
            /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i],
          ["vendor", "model", ["type", "mobile"]], [/\(bb10;\s(\w+)/i],
          ["model", ["vendor", "BlackBerry"], ["type", "mobile"]],
          [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7)/i],
          ["model", ["vendor", "Asus"], ["type", "tablet"]],
          [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i],
          [["vendor", "Sony"], ["model", "Xperia Tablet"], ["type", "tablet"]],
          [/(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i],
          [["vendor", "Sony"], ["model", "Xperia Phone"], ["type",
            "mobile"]], [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
          ["vendor", "model", ["type", "console"]],
          [/android.+;\s(shield)\sbuild/i],
          ["model", ["vendor", "Nvidia"], ["type", "console"]],
          [/(playstation\s[3portablevi]+)/i],
          ["model", ["vendor", "Sony"], ["type", "console"]], [/(sprint\s(\w+))/i],
          [["vendor", e, {HTC: "APA", Sprint: "Sprint"}],
            ["model", e, {"Evo Shift 4G": "7373KT"}], ["type", "mobile"]],
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
            /mot[\s-]?(\w+)*/i, /(XT\d{3,4}) build\//i], ["model",
            ["vendor", "Motorola"], ["type", "mobile"]],
          [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
          ["model", ["vendor", "Motorola"], ["type", "tablet"]],
          [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9|nexus 10))/i,
            /((SM-T\w+))/i], [["vendor", "Samsung"], "model", ["type", "tablet"]],
          [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-n900))/i,
            /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i, /sec-((sgh\w+))/i],
          [["vendor", "Samsung"], "model", ["type", "mobile"]],
          [/(samsung);smarttv/i], ["vendor", "model", ["type", "smarttv"]],
          [/\(dtv[\);].+(aquos)/i],
          ["model", ["vendor", "Sharp"], ["type", "smarttv"]], [/sie-(\w+)*/i],
          ["model", ["vendor", "Siemens"], ["type", "mobile"]],
          [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]+)*/i],
          [["vendor", "Nokia"], "model", ["type", "mobile"]],
          [/android\s3\.[\s\w;-]{10}(a\d{3})/i],
          ["model", ["vendor", "Acer"], ["type", "tablet"]],
          [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
          [["vendor", "LG"], "model", ["type", "tablet"]], [/(lg) netcast\.tv/i],
          ["vendor", "model", ["type", "smarttv"]],
          [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w+)*/i],
          ["model", ["vendor", "LG"], ["type", "mobile"]],
          [/android.+(ideatab[a-z0-9\-\s]+)/i],
          ["model", ["vendor", "Lenovo"], ["type", "tablet"]],
          [/linux;.+((jolla));/i], ["vendor", "model", ["type", "mobile"]],
          [/((pebble))app\/[\d\.]+\s/i], ["vendor", "model", ["type", "wearable"]],
          [/android.+;\s(glass)\s\d/i],
          ["model", ["vendor", "Google"], ["type", "wearable"]],
          [/android.+(\w+)\s+build\/hm\1/i,
            /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,
            /android.+(mi[\s\-_]*(?:one|one[\s_]plus)?[\s_]*(?:\d\w)?)\s+build/i],
          [["model",
            /_/g, " "], ["vendor", "Xiaomi"], ["type", "mobile"]],
          [/(mobile|tablet);.+rv\:.+gecko\//i],
          [["type", c.lowerize], "vendor", "model"]],
        f = [[/microsoft\s(windows)\s(vista|xp)/i], ["name", "version"],
          [/(windows)\snt\s6\.2;\s(arm)/i,
            /(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],
          ["name", ["version", e, f]], [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
          [["name", "Windows"], ["version", e, f]], [/\((bb)(10);/i],
          [["name", "BlackBerry"], "version"],
          [/(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)[\/\s]([\w\.]+)/i,
            /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,
            /linux;.+(sailfish);/i], ["name", "version"],
          [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],
          [["name", "Symbian"], "version"], [/\((series40);/i], ["name"],
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
          [/(mac\sos\sx)\s?([\w\s\.]+\w)*/i, /(macintosh|mac(?=_powerpc)\s)/i],
          [["name", "Mac OS"], ["version", /_/g, "."]],
          [/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,
            /(haiku)\s(\w+)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,
            /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,
            /(unix)\s?([\w\.]+)*/i], ["name", "version"]], e = b.apply(this,
            [[/(opera\smini)\/([\w\.-]+)/i,
              /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,
              /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i],
              ["name", "version"], [/\s(opr)\/([\w\.]+)/i],
              [["name", "Opera"], "version"], [/(kindle)\/([\w\.]+)/i,
              /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,
              /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,
              /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]+)*/i,
              /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi)\/([\w\.-]+)/i],
              ["name", "version"], [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
              [["name", "IE"], "version"], [/(edge)\/((\d+)?[\w\.]+)/i],
              ["name", "version"], [/(yabrowser)\/([\w\.]+)/i],
              [["name", "Yandex"], "version"], [/(comodo_dragon)\/([\w\.]+)/i],
              [["name", /_/g, " "], "version"],
              [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i,
                /(uc\s?browser|qqbrowser)[\/\s]?([\w\.]+)/i],
              ["name", "version"], [/(dolfin)\/([\w\.]+)/i],
              [["name", "Dolphin"], "version"],
              [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
              [["name", "Chrome"], "version"], [/XiaoMi\/MiuiBrowser\/([\w\.]+)/i],
              ["version", ["name", "MIUI Browser"]],
              [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)/i],
              ["version", ["name", "Android Browser"]], [/FBAV\/([\w\.]+);/i],
              ["version", ["name", "Facebook"]],
              [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
              ["version", ["name", "Mobile Safari"]],
              [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
              ["version", "name"],
              [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i], ["name",
              ["version", e, {
                "1.0": "/8",
                "1.2": "/1",
                "1.3": "/3",
                "2.0": "/412",
                "2.0.2": "/416",
                "2.0.3": "/417",
                "2.0.4": "/419",
                "?": "/"
              }]], [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i],
              ["name", "version"], [/(navigator|netscape)\/([\w\.-]+)/i],
              [["name", "Netscape"], "version"], [/(swiftfox)/i,
              /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
              /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i,
              /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,
              /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf)[\/\s]?([\w\.]+)/i,
              /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]+)*/i,
              /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i],
              ["name", "version"]]);
    e.major = c.major(e.version);
    f = b.apply(this, f);
    if (b = b.apply(this, d)) {
      void 0 == b.model && (b.model = ""), void 0
      == b.type && (b.type = ""), void 0 == b.vendor && (b.vendor = "");
    }
    "windows" === f.name.toLowerCase() && (10 <= parseInt(f.name.version)
    && (f.name.version = "10 or later"), window.Promise &&
    "object" === typeof navigator.userAgentData && "function"
    === typeof navigator.userAgentData.getHighEntropyValues
    && navigator.userAgentData.getHighEntropyValues(["platformVersion"]).then(
        function (a) {
          "Windows" === navigator.userAgentData.platform && (a = parseInt(
              a.platformVersion.split(".")[0]), 13 <= a
              ? RAONKUPLOAD._userAgent.os.version = "11 or later" : 0 < a
              && (RAONKUPLOAD._userAgent.os.version = "10"))
        }));
    RAONKUPLOAD._userAgent = {
      userAgent: a,
      browser: e,
      os: f,
      device: b,
      osSeparator: 0 > f.name.toLowerCase().indexOf("windows") ?
          "/" : "\\"
    };
    return RAONKUPLOAD._userAgent
  }());
  RAONKUPLOAD.ajax || (RAONKUPLOAD.ajax = function () {
    var a = function () {
          try {
            var a = new XMLHttpRequest;
            RAONKUPLOAD.ajax.xhrWithCredentials && "withCredentials" in a
            && (a.withCredentials = !0);
            return a
          } catch (b) {
            RAONKUPLOAD.logMode && console && console.log(b)
          }
          try {
            return new ActiveXObject("Msxml2.XHLHTTP")
          } catch (c) {
            RAONKUPLOAD.logMode && console && console.log(c)
          }
          try {
            return new ActiveXObject("Microsoft.XMLHTTP")
          } catch (d) {
            RAONKUPLOAD.logMode && console && console.log(d)
          }
          return null
        },
        c = function () {
        }, b = function (a) {
          return 4 == a.readyState && (200 <= a.status && 300 > a.status || 304
              == a.status || 0 === a.status || 1223 == a.status)
        }, e = function (a) {
          var d = null;
          b(a) && (d = a.responseText);
          a && a.onreadystatechange && (a.onreadystatechange = c);
          return d
        }, f = function (a) {
          var d = null;
          b(a) && (d = a.responseXML, d || (d = a.responseText));
          a && a.onreadystatechange && (a.onreadystatechange = c);
          return d
        }, d = function (b, c, d, e) {
          var f = !!c, k = a();
          if (!k) {
            return null;
          }
          k.open("GET", b, f);
          RAONKUPLOAD.util.setXhrHttpHeader(k, e);
          f && (k.onreadystatechange =
              function () {
                4 == k.readyState && c(d(k))
              });
          try {
            k.send(null)
          } catch (r) {
            return null
          }
          if (!f) {
            var g = setTimeout(function () {
              try {
                k.abort()
              } catch (a) {
                RAONKUPLOAD.logMode && console && console.log(a)
              }
              clearTimeout(g)
            }, 5E3);
            "undefined" == typeof RAONKUPLOAD.RAONKMULTIPLETIMEOUT
            && (RAONKUPLOAD.RAONKMULTIPLETIMEOUT = []);
            RAONKUPLOAD.RAONKMULTIPLETIMEOUT.push(g)
          }
          return f ? "" : d(k)
        }, k = function (b, c, d, e, f) {
          var k = !!d, r = a();
          if (!r) {
            return null;
          }
          r.open("POST", b, k);
          RAONKUPLOAD.util.setXhrHttpHeader(r, f, !0);
          k && (r.onreadystatechange = function () {
            4 ==
            r.readyState && d(e(r, c), r)
          });
          try {
            r.send(c)
          } catch (g) {
            return null
          }
          if (!k) {
            var v = setTimeout(function () {
              try {
                r.abort()
              } catch (a) {
                RAONKUPLOAD.logMode && console && console.log(a)
              }
              clearTimeout(v)
            }, 5E3);
            "undefined" == typeof RAONKUPLOAD.RAONKMULTIPLETIMEOUT
            && (RAONKUPLOAD.RAONKMULTIPLETIMEOUT = []);
            RAONKUPLOAD.RAONKMULTIPLETIMEOUT.push(v)
          }
          return k ? "" : e(r)
        };
    return {
      load: function (a, b, c) {
        return d(a, b, e, c)
      }, loadXml: function (a, b, c) {
        return d(a, b, f, c)
      }, postData: function (a, b, c, d) {
        return k(a, b, c, e, d)
      }, postFileData: function (b,
          c, d) {
        var e;
        a:if (d = a()) {
          try {
            d.open("POST", b, !1);
            var f = KUPLOADTOP.RAONKUPLOAD.util.makeGuidTagName("----raonk_");
            d.setRequestHeader("Content-Type",
                "multipart/form-data; boundary=" + f);
            b = "--" + f;
            for (var f = "", k = c.split("&"), r = k.length, g = null,
                v = c = "", u = 0; u < r; u++) {
              g = k[u].split("="), "imagedata"
              == g[0] ? c = g[1] : (f += b
                  + "\r\n", f += 'Content-Disposition: form-data; name="' + g[0]
                  + '"\r\n\r\n', f += g[1] + "\r\n");
            }
            k = null;
            r = "";
            e = window.atob(c);
            for (var w = e.length, k = new Uint8Array(new ArrayBuffer(w)),
                u = 0; u < w; u++) {
              k[u] = e.charCodeAt(u),
                  r += String.fromCharCode(k[u]);
            }
            String.fromCharCode.apply([], new Uint8Array(k));
            new Uint8Array(k);
            v = r;
            f += b + "\r\n";
            f += 'Content-Disposition: form-data; name="Filedata"; filename="'
                + (new Date).getTime() + '"\r\n';
            f += "Content-Type: image/png\r\n";
            f += "\r\n";
            f += v + "\r\n";
            d.send(f + (b + "--\r\n"))
          } catch (A) {
            e = null;
            break a
          }
          e = d.responseText
        } else {
          e = null;
        }
        return e
      }, urlExists: function (b, c) {
        var d;
        (d = a()) ? (d.open("HEAD", b, !1), d.send(), d = 404 != d.status)
            : d = !1;
        return d
      }, createXMLHttpRequest: function () {
        return a()
      }
    }
  }());
  RAONKUPLOAD.util ||
  (RAONKUPLOAD.util = {
    G_IMG_LIST: {},
    writeLog: function (a, c, b, e) {
      if ("undefined" != typeof RAONKSolutionLog && "undefined"
          != typeof RAONKUploadLogMode && RAONKUploadLogMode) {
        var f = "";
        "string" == typeof e && (e = e.split("#"), 2 == e.length && (""
        == RAONKUPLOAD.logGroupingName && "s" == e[1].toLowerCase()
            ? (RAONKUPLOAD.logGroupingName = e[0].toLowerCase(), f = "#separator#")
            : "" != RAONKUPLOAD.logGroupingName && RAONKUPLOAD.logGroupingName
            == e[0].toLowerCase() && "e" == e[1].toLowerCase()
            && (RAONKUPLOAD.logGroupingName = "")));
        RAONKLogSolution.writeLog(f +
            "[RAONK Upload]", a, c, b)
      }
    },
    G_AP11: 6,
    G_AP13: 7,
    trim: function (a) {
      return a.trim ? a.trim() : a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
    },
    getDefaultIframeSrc: function () {
      var a = "",
          a = "document.open();" + (RAONKUPLOAD.browser.isCustomDomain(document)
                  ? 'document.domain="' + document.domain + '";' : "")
              + " document.close();";
      return a = RAONKUPLOAD.browser.ie && 12 > RAONKUPLOAD.browser.ieVersion
          ? "javascript:void(function(){" + encodeURIComponent(a) + "}())" : ""
    },
    makeIframe: function () {
      var a;
      try {
        a = document.createElement('<iframe frameborder="0" >')
      } catch (c) {
        a =
            document.createElement("iframe")
      }
      a.style.margin = "0px";
      a.style.padding = "0px";
      a.frameBorder = 0;
      a.style.overflow = "auto";
      a.style.overflowX = "hidden";
      a.style.backgroundColor = "#ffffff";
      a.title = "RAONKUpload";
      a.src = this.getDefaultIframeSrc();
      return a
    },
    addEvent: function (a, c, b, e, f) {
      a.addEventListener ? a.addEventListener(c, b, e) : a.attachEvent
          && a.attachEvent("on" + c, b);
      try {
        null != a.getAttribute("raonkcustomdata_filelistitem")
            ? KUPLOADTOP.G_CURRKUPLOADER && ("object"
        !== typeof RAONKUPLOAD.RAONKMULTIPLEEVENT_FILELIST
        && (RAONKUPLOAD.RAONKMULTIPLEEVENT_FILELIST =
            {}), "undefined"
        === typeof RAONKUPLOAD.RAONKMULTIPLEEVENT_FILELIST[KUPLOADTOP.G_CURRKUPLOADER.ID]
        && (RAONKUPLOAD.RAONKMULTIPLEEVENT_FILELIST[KUPLOADTOP.G_CURRKUPLOADER.ID] = []), RAONKUPLOAD.RAONKMULTIPLEEVENT_FILELIST[KUPLOADTOP.G_CURRKUPLOADER.ID].push(
            {element: a, event: c, func: b})) : "" != RAONKUPLOAD.CUploadID
                ? ("object" !== typeof RAONKUPLOAD.RAONKMULTIPLEEVENT
                && (RAONKUPLOAD.RAONKMULTIPLEEVENT = {}), "object"
                !== typeof RAONKUPLOAD.RAONKCOMMONPOPUPEVENT
                && (RAONKUPLOAD.RAONKCOMMONPOPUPEVENT = {
                  popup: [], popup_re: [],
                  popup_zip: [], imgPreview: [], context: [], context_bg: []
                }), RAONKUPLOAD.RAONKMULTIPLEEVENT[RAONKUPLOAD.CUploadID] = [], f
                    ? RAONKUPLOAD.RAONKCOMMONPOPUPEVENT[f].push(
                        {element: a, event: c, func: b, removetype: f})
                    : RAONKUPLOAD.RAONKMULTIPLEEVENT[RAONKUPLOAD.CUploadID].push({
                      element: a,
                      event: c,
                      func: b
                    }), RAONKUPLOAD.CUploadID = "") : KUPLOADTOP.G_CURRKUPLOADER
                && RAONKUPLOAD.RAONKMULTIPLEEVENT[KUPLOADTOP.G_CURRKUPLOADER.ID]
                && (f ? RAONKUPLOAD.RAONKCOMMONPOPUPEVENT[f].push(
                        {element: a, event: c, func: b, removetype: f})
                    : RAONKUPLOAD.RAONKMULTIPLEEVENT[KUPLOADTOP.G_CURRKUPLOADER.ID].push(
                        {
                          element: a,
                          event: c, func: b
                        }))
      } catch (d) {
        RAONKUPLOAD.logMode && console && console.log(d)
      }
    },
    removeEvent: function (a, c, b, e) {
      a.removeEventListener ? a.removeEventListener(c, b, e) : a.detachEvent
          && a.detachEvent("on" + c, b)
    },
    stopEvent: function (a) {
      "bubbles" in a ? a.bubbles && a.stopPropagation() : a.cancelBubble = !0
    },
    cancelEvent: function (a) {
      a.preventDefault ? a.preventDefault() : a.returnValue = !1
    },
    ajax: {
      xml_http_request: function () {
        var a;
        window.XMLHttpRequest ? a = new XMLHttpRequest : window.ActiveXObject
            && (a = new ActiveXObject("Microsoft.XMLHTTP"));
        return a
      }
    },
    url: {
      full_url: function (a) {
        var c = "";
        if (0 == a.indexOf("http://") || 0 == a.indexOf(
            "https://")) {
          c = a;
        } else if (0 == a.indexOf(
            "/")) {
          c = location.protocol + "//" + location.host
              + a;
        } else {
          var c = location.href, b = c.lastIndexOf("/"),
              c = c.substring(0, b + 1), c = c + a;
        }
        return c
      }
    },
    xml: {
      count: function (a, c) {
        return a ? a.getElementsByTagName(c).length : 0
      }, getNode: function (a, c) {
        return null == a || void 0 == a ? null : this.getNodeIdx(a, c, 0)
      }, getNodeIdx: function (a, c, b) {
        return a.getElementsByTagName(c)[b]
      }, getNodeValue: function (a, c) {
        return null ==
        a || void 0 == a ? "" : this.getNodeValueIdx(a, c, 0)
      }, getNodeValueIdx: function (a, c, b) {
        a = this.getNodeIdx(a, c, b);
        return this.getValue(a)
      }, getValue: function (a) {
        var c = "", b = "";
        if (void 0 != a) {
          try {
            0 < a.childNodes.length && (b = c = a.firstChild.nodeValue);
            try {
              ("product_key" == a.nodeName || "license_key" == a.nodeName
                  || "license_key_ex" == a.nodeName || "font" == a.nodeName
                  || "encoding" == a.nodeName || "doctype" == a.nodeName) && 2
              <= a.childNodes.length && (c = a.textContent ? a.textContent : b)
            } catch (e) {
              c = b
            }
          } catch (f) {
            c = "parsing error"
          }
        }
        return c
      }, getAllNodes: function (a) {
        var c =
            {}, b = function (a, c) {
          for (var d = a.childNodes, k = !1, l = 0; l < d.length; l++) {
            var m = d[l];
            if (3 != m.nodeType && 8 != m.nodeType && 4 != m.nodeType) {
              var k = !0, p = {};
              if (0 < m.attributes.length) {
                p._attributes = {};
                for (var q = 0; q < m.attributes.length; q++) {
                  var n = m.attributes[q];
                  p._attributes[n.nodeName] = n.nodeValue
                }
              }
              "undefined" == typeof c[m.nodeName] ? c[m.nodeName] = p : 0
              < c[m.nodeName].length ? c[m.nodeName].push(p)
                  : c[m.nodeName] = [c[m.nodeName], p];
              0 < m.childNodes.length && b(m, p)
            }
          }
          k || (value = a.textContent || a.nodeTypedValue || "", 4
          != a.firstChild.nodeType &&
          (value = value.replace(/^[\s]+|[\s]+&/g, "")), value && "" != value
          && (c._value = value))
        };
        for (a = a.firstChild; ;) {
          if ("raonkupload"
              != a.nodeName.toLowerCase()) {
            a = a.nextSibling;
          } else {
            break;
          }
        }
        b(a, c);
        return c
      }
    },
    removeEvents: function (a, c, b) {
      a = c.split(",");
      c = b.length;
      for (var e = 0, f = 0; f < c; f++) {
        for (var e = a.length, d = 0; d < e;
            d++) {
          b[f].removeAttribute(a[d])
        }
      }
    },
    removeElementWithChildNodes: function (a) {
      try {
        if (null != a) {
          if ("1" == a.nodeType && "iframe" == a.tagName.toLowerCase()) {
            var c = a.contentDocument || a.contentWindow.document || a.document;
            if (c) {
              if (a.contentWindow) {
                for (var b in a.contentWindow) {
                  if (0 !=
                      KUPLOADTOP.RAONKUPLOAD.browser.ieVersion && 9
                      > KUPLOADTOP.RAONKUPLOAD.browser.ieVersion
                      || a.contentWindow.hasOwnProperty(b)) {
                    try {
                      "location" != b
                      && (a.contentWindow[b] = null), delete a.contentWindow[b]
                    } catch (e) {
                      RAONKUPLOAD && RAONKUPLOAD.logMode && console
                      && console.log(e)
                    }
                  }
                }
              }
              var f = c.getElementsByTagName("script");
              try {
                for (; 0 != f.length;) {
                  f[0].parentNode.removeChild(f[0]);
                  for (var d in f) {
                    delete f[d]
                  }
                }
              } catch (k) {
                RAONKUPLOAD && RAONKUPLOAD.logMode && console && console.log(k)
              }
              try {
                c.body && (c.body.innerHTML = "")
              } catch (l) {
                RAONKUPLOAD &&
                RAONKUPLOAD.logMode && console && console.log(l)
              }
              try {
                c.body.parentNode && (c.body.parentNode.innerHTML = "")
              } catch (m) {
                RAONKUPLOAD && RAONKUPLOAD.logMode && console && console.log(m)
              }
            }
            a.setAttribute("src", "")
          }
          for (; a.hasChildNodes();) {
            try {
              a.removeChild(
                  a.firstChild), a.firstChild = null, delete a.firstChild
            } catch (p) {
              RAONKUPLOAD && RAONKUPLOAD.logMode && console && console.log(p)
            }
          }
          a.parentNode.removeChild(a);
          try {
            delete null
          } catch (q) {
            RAONKUPLOAD && RAONKUPLOAD.logMode && console && console.log(q)
          }
        }
      } catch (n) {
        RAONKUPLOAD && RAONKUPLOAD.logMode &&
        console && console.log(n)
      }
    },
    bytesToSize: function (a) {
      a = parseInt(a, 10);
      var c = "0 byte";
      isNaN(a) && (a = "", c = "N/A");
      c = {size: 0, unit: "byte", toString: c};
      if (0 == a) {
        return c;
      }
      var b = parseInt(Math.floor(Math.log(a) / Math.log(1024)));
      c.size = Math.round(a / Math.pow(1024, b) * 100, 2) / 100;
      c.unit = ["bytes", "KB", "MB", "GB", "TB"][b];
      c.toString = c.size + " " + c.unit;
      return c
    },
    stringToXML: function (a) {
      a = RAONKUPLOAD.util.trim(a);
      var c;
      try {
        window.DOMParser ? c = (new DOMParser).parseFromString(a, "text/xml")
            : (c = new ActiveXObject("Microsoft.XMLDOM"),
                c.async = "false", c.loadXML(a))
      } catch (b) {
        c = null
      }
      return c
    },
    xmlToString: function (a) {
      return window.ActiveXObject ? a.xml
          : (new XMLSerializer).serializeToString(a)
    },
    getUnitSize: function (a) {
      var c = 1;
      switch (a.toLowerCase()) {
        case "kb":
          c *= 1024;
          break;
        case "mb":
          c *= 1048576;
          break;
        case "gb":
          c *= 1073741824;
          break;
        case "tb":
          c *= 1099511627776
      }
      return c
    },
    getUnit: function (a) {
      a = a.toLowerCase();
      var c = "";
      -1 < a.indexOf("tb") ? c = a.substring(a.indexOf("tb")) : -1 < a.indexOf(
          "mb") ? c = a.substring(a.indexOf("mb")) : -1 < a.indexOf("gb")
          ? c = a.substring(a.indexOf("gb")) :
          -1 < a.indexOf("kb") ? c = a.substring(a.indexOf("kb")) : -1
              < a.indexOf("b") && (c = a.substring(a.indexOf("b")));
      return c
    },
    getDate: function () {
      var a = 0, c = new Date, a = "" + c.getFullYear(),
          b = "" + (c.getMonth() + 1);
      1 == b.length && (b = "0" + b);
      c = "" + c.getDate();
      1 == c.length && (c = "0" + c);
      return a = parseInt(a + b + c, 10)
    },
    getMimeFilter: function (a) {
      var c = "", c = a.split(",").join(",.");
      "" != c && (c = "." + c);
      return c
    },
    getMimeFilterEx: function (a) {
      var c = "", c = a.split(",").join(";*.");
      "" != c && (c = "*." + c);
      return c
    },
    getExtStringFromExtEx: function (a) {
      a = a.toLowerCase().split("|");
      for (var c = a.length, b = "", e = 1; e < c; e += 2) {
        var f = a[e].replace(/\*./gi, ""), f = f.replace(/\*/gi, ""),
            f = f.replace(/;$/gi, ""), f = f.replace(/;/gi, ",");
        "" != b && (b += ",");
        b += f
      }
      return b
    },
    parseIntOr0: function (a) {
      a = parseInt(a, 10);
      return isNaN(a) ? 0 : a
    },
    parseFloatOr0: function (a) {
      a = parseFloat(a);
      return isNaN(a) ? 0 : a
    },
    makeGuidTagName: function (a) {
      var c = 0, b = (new Date).getTime().toString(32), e;
      if ("undefined" != typeof crypto && "undefined"
          != typeof crypto.randomUUID) {
        b += crypto.randomUUID().replace(/-/g,
            "").substring(0, 20);
      } else {
        for (e =
            0; 5 > e; e++) {
          b += Math.floor(65535 * Math.random()).toString(32);
        }
      }
      return (a || "o_") + b + (c++).toString(32)
    },
    makeGuid: function (a) {
      var c = "";
      "undefined" != typeof crypto && "undefined" != typeof crypto.randomUUID
          ? c = crypto.randomUUID().replace(/-/g, "") : (c = function () {
            return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
          }, c = (c() + c() + c() + c() + c() + c() + c() + c()).toLowerCase());
      void 0 != a && (c = a + "-" + c);
      return c
    },
    isPlainObject: function (a) {
      var c;
      c = {};
      for (var b = "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
              " "),
          e = 0, f = b.length; e < f; e++) {
        c["[object " + b[e]
        + "]"] = b[e].toLowerCase();
      }
      b = c.hasOwnProperty;
      c = !0;
      RAONKUPLOAD.browser.ie && 9 > RAONKUPLOAD.browser.ieVersion && (c = !1);
      var d;
      if (!a || "object" !== typeof a || a.nodeType || null != a && a
          == a.window) {
        return !1;
      }
      try {
        if (a.constructor && !b.call(a, "constructor") && !b.call(
            a.constructor.prototype, "isPrototypeOf")) {
          return !1
        }
      } catch (k) {
        return !1
      }
      if (!c) {
        for (d in a) {
          return b.call(a, d);
        }
      }
      for (d in a) {
        ;
      }
      return void 0 === d || b.call(a, d)
    },
    objectExtend: function () {
      var a, c, b, e, f, d = arguments[0] || {}, k = 1, l = arguments.length,
          m = !1;
      "boolean" === typeof d && (m = d, d = arguments[k] || {}, k++);
      "object" !== typeof d && "function" !== typeof d && (d = {});
      k === l && (d = this, k--);
      for (; k < l; k++) {
        if (null != (f = arguments[k])) {
          for (e in
              f) {
            a = d[e], b = f[e], d !== b && (m && b && (this.isPlainObject(b)
                || (c = "array" === typeof b)) ? (c ? (c = !1, a = a && "array"
            === typeof a ? a : []) : a = a && this.isPlainObject(a) ? a
                : {}, d[e] = this.objectExtend(m, a, b)) : void 0 !== b
                && (d[e] = b));
          }
        }
      }
      return d
    },
    getUserLang: function (a) {
      a = a.toLowerCase();
      var c = "ko-kr";
      "auto" == a && (c = "en-us", (a = navigator.language
          || navigator.userLanguage) ||
      (a = c), a = a.toLowerCase());
      -1 < a.indexOf("auto") ? c = "Auto" : -1 < a.indexOf("ko") ? c = "ko-kr"
          : -1 < a.indexOf("en") ? c = "en-us" : -1 < a.indexOf("ja")
              ? c = "ja-jp" : -1 < a.indexOf("zh-cn") ? c = "zh-cn" : -1
                  < a.indexOf("zh-tw") && (c = "zh-tw");
      return c
    },
    getDocWindow: function (a) {
      return a.parentWindow || a.defaultView
    },
    getClientRect: function (a) {
      var c = {left: 0, top: 0, right: 0, bottom: 0};
      try {
        c = a.getBoundingClientRect()
      } catch (b) {
        RAONKUPLOAD.logMode && console && console.log(b)
      }
      return c
    },
    getParentbyTagName: function (a, c) {
      for (var b = a; null != b && (!b.tagName ||
          b.tagName.toLowerCase() != c);) {
        b = b.parentNode;
      }
      return b
    },
    getElementsByClass: function (a, c, b) {
      var e = [];
      null == c && (c = document);
      null == b && (b = "*");
      c = c.getElementsByTagName(b);
      b = c.length;
      a = new RegExp("(^|\\s)" + a + "(\\s|$)");
      for (j = i = 0; i < b; i++) {
        a.test(c[i].className) && (e[j] = c[i], j++);
      }
      return e
    },
    postFormData: function (a, c, b, e, f) {
      void 0 == e && (e = []);
      var d = a.createElement("form");
      d.method = "post";
      d.action = c;
      d.target = b;
      c = e.length;
      for (b = 0; b < c; b++) {
        var k = a.createElement("input");
        k.type = "hidden";
        k.name = e[b][0];
        k.value = e[b][1];
        d.appendChild(k)
      }
      RAONKUPLOAD.util.setCSRFHiddenInput(d, f, a);
      a.body.appendChild(d);
      d.submit();
      a.body.removeChild(d)
    },
    base64_decode: function (a) {
      var c = "", b, e, f, d, k, l = 0;
      for (a = a.replace(/[^A-Za-z0-9\+\/\=]/g, ""); l
      < a.length;) {
        b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
            a.charAt(
                l++)), e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
            a.charAt(
                l++)), d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
            a.charAt(
                l++)), k = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
            a.charAt(l++)),
            b = b << 2 | e >> 4, e = (e & 15) << 4 | d >> 2, f = (d & 3) << 6
            | k, c += String.fromCharCode(b), 64 != d
        && (c += String.fromCharCode(e)), 64 != k && (c += String.fromCharCode(
            f));
      }
      return c = RAONKUPLOAD.util.utf8_decode(c)
    },
    base64_encode: function (a) {
      var c = "", b, e, f, d, k, l, m = 0;
      for (a = RAONKUPLOAD.util.utf8_encode(a); m < a.length;) {
        b = a.charCodeAt(
            m++), e = a.charCodeAt(m++), f = a.charCodeAt(m++), d = b
            >> 2, b = (b
            & 3) << 4 | e >> 4, k = (e & 15) << 2 | f >> 6, l = f & 63, isNaN(e)
            ? k = l = 64 : isNaN(f) && (l = 64), c = c
            + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(
                d) +
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(
                b)
            + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(
                k)
            + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(
                l);
      }
      return c
    },
    utf8_encode: function (a) {
      a = a.replace(/\r\n/g, "\n");
      for (var c = "", b = 0; b < a.length; b++) {
        var e = a.charCodeAt(b);
        128 > e ? c += String.fromCharCode(e) : (127 < e && 2048 > e
            ? c += String.fromCharCode(e >> 6 | 192)
            : (c += String.fromCharCode(
                e >> 12 | 224), c += String.fromCharCode(e >> 6 & 63 | 128)),
            c += String.fromCharCode(e & 63 | 128))
      }
      return c
    },
    utf8_decode: function (a) {
      for (var c = "", b = 0, e = c1 = c2 = 0; b < a.length;) {
        e = a.charCodeAt(
            b), 128 > e ? (c += String.fromCharCode(e), b++) : 191 < e && 224
        > e
            ? (c2 = a.charCodeAt(b + 1), c += String.fromCharCode(
                (e & 31) << 6 | c2 & 63), b += 2) : (c2 = a.charCodeAt(
                b + 1), c3 = a.charCodeAt(b + 2), c += String.fromCharCode(
                (e & 15) << 12 | (c2 & 63) << 6 | c3 & 63), b += 3);
      }
      return c
    },
    dataURItoBlob: function (a) {
      var c = atob(a.split(",")[1]);
      a = a.split(",")[0].split(":")[1].split(";")[0];
      for (var b = new ArrayBuffer(c.length), e = new Uint8Array(b),
          f = 0; f < c.length; f++) {
        e[f] = c.charCodeAt(f);
      }
      c = new DataView(b);
      return new Blob([c.buffer], {type: a})
    },
    makeDecryptReponseMessage: function (a) {
      var c = function (a, b) {
        var c = a.split("");
        c.splice(b, 1);
        return c = c.join("")
      };
      a = a.replace(/ /g, "");
      a = a.replace(/\r/g, "");
      a = a.replace(/\n/g, "");
      a = a.replace(/%2B/g, "+");
      if (0 == a.indexOf("_")) {
        try {
          a = a.substring(1);
          var b = KUPLOADTOP.G_CURRKUPLOADER._config.security.keyValue,
              b = b.substring(0, 14),
              b = KUPLOADTOP.G_CURRKUPLOADER.frameWin.CryptoJS.enc.Utf8.parse(
                  b);
          b.sigBytes = 16;
          var e =
              KUPLOADTOP.G_CURRKUPLOADER.frameWin.CryptoJS.enc.Base64._map;
          KUPLOADTOP.G_CURRKUPLOADER.frameWin.CryptoJS.enc.Base64._map = "hituvabcdejklmnopqrxyzsfgwBCDEANOPQRSFGHIJKLYZMTUVWX5890167234+/=";
          a = KUPLOADTOP.G_CURRKUPLOADER.frameWin.CryptoJS.enc.Base64.parse(a);
          KUPLOADTOP.G_CURRKUPLOADER.frameWin.CryptoJS.enc.Base64._map = e;
          a = KUPLOADTOP.G_CURRKUPLOADER.frameWin.CryptoJS.AES.decrypt(
              {ciphertext: a}, b, {iv: b}).toString(
              KUPLOADTOP.G_CURRKUPLOADER.frameWin.CryptoJS.enc.Utf8)
        } catch (f) {
          a = "C012|response data decrypt error"
        }
      } else {
        15 <=
        a.length ? (a = c(a, 9), a = c(a, 6), a = c(a, 8), a = c(a, 7), a = c(a,
            9), a = c(a, 6), a = c(a, 8)) : (a = a.replace(/#/g,
            ""), a = a.replace(/$/g, "")), a = RAONKUPLOAD.util.base64_decode(
            a);
      }
      return a
    },
    getCodeAndMessage: function (a) {
      var c = {code: "", message: ""};
      a = a.split("|");
      0 == a.length ? c.message = a[0] : (c.code = a[0], c.message = a[1]);
      return c
    },
    set_handlerUrl: function (a) {
      var c = "",
          c = 0 == a.length ? RAONKUPLOAD.rootPath : "/" == a.substring(0, 1)
              ? location.protocol + "//" + location.host : 4 < a.length
              && ("http" == a.substring(0, 4).toLowerCase() || "file"
                  == a.substring(0,
                      4).toLowerCase()) ? "" : RAONKUPLOAD.rootPath;
      return c + a
    },
    buildFormData: function (a, c, b, e) {
      c = "" + ("--" + a + '\r\nContent-Disposition: form-data; name="' + c
          + '"') + "\r\n";
      c += "\r\n";
      c += b;
      c += "\r\n";
      e && (c += "--" + a + "--");
      return c
    },
    hashTable: function (a) {
      this.length = 0;
      this.items = {};
      for (var c in a) {
        a.hasOwnProperty(c)
        && (this.items[c] = a[c], this.length++);
      }
      this.setItem = function (a, c) {
        var f = void 0;
        this.hasItem(a) ? f = this.items[a] : this.length++;
        this.items[a] = c;
        return f
      };
      this.getItem = function (a) {
        return this.hasItem(a) ? this.items[a] :
            void 0
      };
      this.hasItem = function (a) {
        return this.items.hasOwnProperty(a)
      };
      this.removeItem = function (a) {
        if (this.hasItem(
            a)) {
          return previous = this.items[a], this.length--, delete this.items[a], previous
        }
      };
      this.keys = function () {
        var a = [], c;
        for (c in this.items) {
          this.hasItem(c) && a.push(c);
        }
        return a
      };
      this.values = function () {
        var a = [], c;
        for (c in this.items) {
          this.hasItem(c) && a.push(this.items[c]);
        }
        return a
      };
      this.each = function (a) {
        for (var c in this.items) {
          this.hasItem(c) && a(c, this.items[c])
        }
      };
      this.clear = function () {
        this.items = {};
        this.length = 0
      }
    },
    setSecuritySetting: function (a, c, b, e) {
      if (1 == e) {
        "NONE" == b.developLang
        && (b.security.encryptParam = "0", b.security.fileIntegrity = "0", b.security.fileIntegrityUpload = "", b.security.fileIntegrityDownload = "");
      } else {
        a.Security.EncryptParam && "" != a.Security.EncryptParam
            ? b.security.encryptParam = "1" == a.Security.EncryptParam ? "1"
                : "2" == a.Security.EncryptParam ? "2" : "0"
            : (e = RAONKUPLOAD.util.xml.getNodeValue(c,
                "encrypt_param"), b.security.encryptParam = "1" == e ? "1" : "2"
            == e ? "2" : "0");
        a.Security.FileExtensionDetector &&
        "" != a.Security.FileExtensionDetector
            ? b.security.fileExtensionDetector = "1"
            == a.Security.FileExtensionDetector ? "1" : "0"
            : (e = RAONKUPLOAD.util.xml.getNodeValue(c,
                "file_extension_detector"), b.security.fileExtensionDetector = "1"
            == e ? "1" : "0");
        a.Security.DeleteOpenFile && "" != a.Security.DeleteOpenFile
        && (b.security.deleteOpenFile = a.Security.DeleteOpenFile);
        a.Security.FileIntegrity && "" != a.Security.FileIntegrity
            ? b.security.fileIntegrity = "1" == a.Security.FileIntegrity ? "1"
                : "0" : (e = RAONKUPLOAD.util.xml.getNodeValue(c, "file_integrity"),
                b.security.fileIntegrity = "1" == e ? "1" : "0");
        if (a.Security.FileIntegrityUpload && ""
            != a.Security.FileIntegrityUpload) {
          b.security.fileIntegrityUpload = "1"
          == a.Security.FileIntegrityUpload ? "1" : "0"
          == a.Security.FileIntegrityUpload ? "0"
              : "";
        } else if (e = RAONKUPLOAD.util.xml.getNode(c,
            "file_integrity")) {
          e = e.getAttribute(
              "upload"), b.security.fileIntegrityUpload = "1" == e ? "1" : "0"
          == e ? "0" : "";
        }
        if (a.Security.FileIntegrityDownload && ""
            != a.Security.FileIntegrityDownload) {
          b.security.fileIntegrityDownload = "1"
          == a.Security.FileIntegrityDownload ?
              "1" : "0" == a.Security.FileIntegrityDownload ? "0"
                  : "";
        } else if (e = RAONKUPLOAD.util.xml.getNode(c,
            "file_integrity")) {
          e = e.getAttribute(
              "download"), b.security.fileIntegrityDownload = "1" == e ? "1"
              : "0"
              == e ? "0" : "";
        }
        a.Security.FileEncrypt && "" != a.Security.FileEncrypt
            ? b.security.fileEncrypt = a.Security.FileEncrypt
            : (e = RAONKUPLOAD.util.xml.getNodeValue(c,
                "file_encrypt"), b.security.fileEncrypt = e);
        0 < b.security.fileEncrypt && "1" != b.useKManager && ("html5"
        != b.userRunTimeMode ? b.security.fileEncrypt = "0" : "1"
            != a.Security.FileEncryptHtml5 &&
            ("0" == a.Security.FileEncryptHtml5 ? b.security.fileEncrypt = "0"
                : (e = RAONKUPLOAD.util.xml.getNode(c, "file_encrypt"))
                && e.getAttribute("use_html5") && "0" == e.getAttribute(
                    "use_html5") && (b.security.fileEncrypt = "0")));
        if ("html5" == b.userRunTimeMode && "0" == b.useKManager) {
          e = !1;
          if (a.Security && a.Security.UseMagicJs && ""
              != a.Security.UseMagicJs) {
            b.security.useMagicJs = a.Security.UseMagicJs;
          } else {
            var f = RAONKUPLOAD.util.xml.getNodeValue(c, "use_magicjs");
            "" != f && (b.security.useMagicJs = f)
          }
          a.Security && a.Security.UseMagicJsCrypto &&
          "" != a.Security.UseMagicJsCrypto
              ? b.security.useMagicJsCrypto = a.Security.UseMagicJsCrypto
              : (f = RAONKUPLOAD.util.xml.getNodeValue(c,
                  "use_magicjs_crypto"), "" != f
              && (b.security.useMagicJsCrypto = f));
          "0" != b.security.useMagicJs ? (b.pluginToolExArr.push(
              "magicjs"), e = !0) : "0" != b.security.useMagicJsCrypto
              && (b.pluginToolExArr.push("magicjscrypto"), e = !0);
          e
          && (b.resumeUpload = "0", b.security.fileEncrypt = "0", b.security.fileIntegrity = "0")
        }
      }
    },
    makeEncryptParam: function (a) {
      a = RAONKUPLOAD.util.base64_encode(a);
      10 <= a.length ? (a =
          RAONKUPLOAD.util.insertAt(a, RAONKSolution.Agent.G_AP10,
              RAONKUPLOAD.util.G_AP27), a = RAONKUPLOAD.util.insertAt(a,
          RAONKUPLOAD.util.G_AP11,
          RAONKSolution.Agent.G_AP.G_AP22), a = RAONKUPLOAD.util.insertAt(a,
          RAONKUPLOAD.browser.G_AP12,
          RAONKUPLOAD.util.G_AP25), a = RAONKUPLOAD.util.insertAt(a,
          RAONKUPLOAD.util.G_AP13,
          RAONKSolution.Agent.G_AP23), a = RAONKUPLOAD.util.insertAt(a,
          RAONKSolution.Agent.G_AP10,
          RAONKSolution.Agent.G_AP.G_AP29), a = RAONKUPLOAD.util.insertAt(a,
          RAONKUPLOAD.util.G_AP11, RAONKUPLOAD.browser.G_AP24),
          a = RAONKUPLOAD.util.insertAt(a, RAONKUPLOAD.browser.G_AP12,
              RAONKSolution.Agent.G_AP20)) : (a = RAONKUPLOAD.util.insertAt(a,
          a.length - 1, "$"), a = RAONKUPLOAD.util.insertAt(a, 0, "$"));
      return a = a.replace(/[+]/g, "%2B")
    },
    makeEncryptParam2: function (a) {
      var c = KUPLOADTOP.G_CURRKUPLOADER._config.security.keyValue,
          c = c.substring(0, 15),
          c = KUPLOADTOP.G_CURRKUPLOADER.frameWin.CryptoJS.enc.Utf8.parse(c);
      c.sigBytes = 16;
      a = KUPLOADTOP.G_CURRKUPLOADER.frameWin.CryptoJS.enc.Utf8.parse(a);
      a = KUPLOADTOP.G_CURRKUPLOADER.frameWin.CryptoJS.AES.encrypt(a,
          c, {iv: c});
      c = KUPLOADTOP.G_CURRKUPLOADER.frameWin.CryptoJS.enc.Base64._map;
      KUPLOADTOP.G_CURRKUPLOADER.frameWin.CryptoJS.enc.Base64._map = "hituvabcdejklmnopqrxyzsfgwBCDEANOPQRSFGHIJKLYZMTUVWX5890167234+/=";
      a = KUPLOADTOP.G_CURRKUPLOADER.frameWin.CryptoJS.enc.Base64.stringify(
          a.ciphertext);
      KUPLOADTOP.G_CURRKUPLOADER.frameWin.CryptoJS.enc.Base64._map = c;
      return a = a.replace(/[+]/g, "%2B")
    },
    makeEncryptParamOld: function (a) {
      a = RAONKUPLOAD.util.base64_encode(a);
      a = "R" + a;
      a = RAONKUPLOAD.util.base64_encode(a);
      return a =
          a.replace(/[+]/g, "%2B")
    },
    makeEncryptParamFinal: function (a, c) {
      var b = {name: "", value: ""},
          e = KUPLOADTOP.G_CURRKUPLOADER._config.security.encryptParam,
          f = KUPLOADTOP.G_CURRKUPLOADER._config.handlerInitCheck,
          d = KUPLOADTOP.G_CURRKUPLOADER._config.security.keyValue;
      if ("1" >= e) {
        "0" == f ? (b.name = "k10", b.value = c && 1 == c
                ? KUPLOADTOP.RAONKUPLOAD.util.makeEncryptParam(a) : d
                + KUPLOADTOP.RAONKUPLOAD.util.makeEncryptParam(a))
            : (b.name = "k00", b.value = KUPLOADTOP.RAONKUPLOAD.util.makeEncryptParam(
                a));
      } else if ("2" == e) {
        try {
          "0" == f ? (b.name =
                  "k11", b.value = c && 1 == c
                  ? KUPLOADTOP.RAONKUPLOAD.util.makeEncryptParam2(a) : d
                  + KUPLOADTOP.RAONKUPLOAD.util.makeEncryptParam2(a))
              : (b.name = "k01", b.value = KUPLOADTOP.RAONKUPLOAD.util.makeEncryptParam2(
                  a))
        } catch (k) {
          "0" == f ? (b.name = "k10", b.value = c && 1 == c
                  ? KUPLOADTOP.RAONKUPLOAD.util.makeEncryptParam(a) : d
                  + KUPLOADTOP.RAONKUPLOAD.util.makeEncryptParam(a))
              : (b.name = "k00", b.value = KUPLOADTOP.RAONKUPLOAD.util.makeEncryptParam(
                  a))
        }
      }
      return b
    },
    getIframeDocument: function (a) {
      return "undefined" != typeof a.contentDocument ? a.contentDocument :
          "undefined" != typeof a.contentWindow ? a.contentWindow.document
              : null
    },
    isExistUploaderName: function (a, c) {
      if (void 0 == a || "" == a) {
        return 1;
      }
      var b = RAONKUPLOAD.RAONKMULTIPLE["raonkuploader_frame_" + a];
      return void 0 == b || null == b ? 0 : "" != c.UploadHolder
      && RAONKUPLOAD.RAONKHOLDER[a] == c.UploadHolder ? 3 : 2
    },
    getNewNextUploaderName: function (a) {
      var c = "", b = a.split("_"), e = 0;
      do {
        c = b.length, 1 < c && (a = a.replace("_" + b[c - 1], "")), c = a + "_"
            + e, e++;
      } while (0 < RAONKUPLOAD.util.isExistUploaderName(c));
      return c
    },
    createEvent: function (a, c, b) {
      var e =
          document.createElement("script");
      e.setAttribute("for", a);
      e.event = c;
      e.appendChild(document.createTextNode(b));
      document.body.appendChild(e)
    },
    initHandlerCheck: function (a, c, b, e) {
      (a = RAONKUPLOAD.util.parseDataFromServer(a)) && 0 == a.indexOf("_")
      && (a = RAONKUPLOAD.util.makeDecryptReponseMessage(a.substring(1)));
      if (a && -1 < a.toLowerCase().indexOf("hello raonk")) {
        if (-1 < a.indexOf(RAONKSolution.Agent.formfeed)) {
          b = a.split(RAONKSolution.Agent.formfeed);
          e = b.length;
          a = b[0];
          if (null != c.cloudInfo && void 0 != c.cloudInfo && "1" ==
              c.cloudInfo.Use && 1 < e && "" != b[1]) {
            var f = b[1], f = f.replace(/ /g, ""), f = f.replace(/\r/g, ""),
                f = f.replace(/\n/g, "");
            c.cloudInfo ? c.cloudInfo.K256Key = f : c.cloudInfo = {K256Key: f}
          }
          2 < e && "" != b[2] && (e = b[2], e = e.replace(/ /g,
              ""), e = e.replace(/\r/g, ""), e = e.replace(/\n/g,
              ""), c.sworkInfo ? c.sworkInfo.K256Key = e
              : c.sworkInfo = {K256Key: e});
          b[3] && "" != b[3] && (c.openFolderApp = b[3])
        }
        -1 < a.indexOf("-")
        && (RAONKUPLOAD._$0S = RAONKUPLOAD.util.base64_encode(
            a.split("-")[1]), c.security.keyValue = RAONKUPLOAD.util.getRV(
            RAONKUPLOAD._$0S))
      } else if (a &&
          0 < a.length) {
        if (-1 < a.indexOf(c.unitDelimiter)) {
          c = a.split(
              c.unitDelimiter), RAONKUPLOAD._$0S = KUPLOADTOP.RAONKUPLOAD.util.base64_encode(
              c[1]), RAONKUPLOAD._0_ = c[2], alert(c[0]);
        } else if (a && 0
            == a.indexOf("[FAIL]")) {
          try {
            var d = RAONKUPLOAD.util.makeDecryptReponseMessage(
                    a.substring(6)).split("|"),
                f = {strType: "handlerCheck", strCode: d[0], strMessage: d[1]};
            if ("function" === typeof c.event.onError) {
              c.event.onError(b.Id,
                  f);
            } else {
              "function" === typeof RAONKUPLOAD_OnError
                  ? RAONKUPLOAD_OnError(b.Id, f) : alert(
                      "Error Code : " + f.strCode +
                      "\nError Message : " + f.strMessage)
            }
          } catch (k) {
            RAONKUPLOAD.logMode && console && console.log(k)
          }
        } else {
          alert(a);
        }
      } else {
        a = 0 < b.InitXml.length ? b.InitXml : "raonkupload.config.xml";
        try {
          if (f = {
            strType: "handlerCheck",
            strCode: "C200",
            strMessage: "",
            strStatus: ""
          }, "ko-kr" == c.lang
              ? (f.strMessage = "Uploader\uc758 \uc124\uc815\uac12\uc774 \uc62c\ubc14\ub974\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uc544\ub798 URL \uc811\uadfc\uc774 \uc720\ud6a8\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.\n\n", f.strMessage += c.handlerUrl
                  + "\n\n", f.strMessage +=
                  a
                  + " \ud30c\uc77c\uc758 uploader_setting \uc139\uc158\uc758 <develop_langage>\uc640 <handler_url> \uc124\uc815\uac12\uc744 \ud655\uc778\ud558\uc138\uc694.")
              : (f.strMessage = "Uploader's setting is not correct. Access the following URL is not valid.\n\n", f.strMessage += c.handlerUrl
                  + "\n\n", f.strMessage += 'Please check the settings, <handler_url> and <develop_langage> in "uploader_setting" section in the "'
                  + a + '."'), e
          && (f.strStatus = e.status.toString()), "function"
          === typeof c.event.onError) {
            c.event.onError(b.Id,
                f);
          } else {
            "function" === typeof RAONKUPLOAD_OnError
                ? RAONKUPLOAD_OnError(b.Id, f) : alert(f.strMessage)
          }
        } catch (l) {
          RAONKUPLOAD.logMode && console && console.log(l)
        }
      }
    },
    createUploaderIframe: function (a, c, b, e, f, d) {
      var k = document.createElement("iframe");
      c.appendChild(k);
      k.id = e;
      k.title = f;
      "" == k.title && (k.title = "RAONKUpload Area");
      k.frameBorder = 0;
      k.style.width = "100%";
      k.style.height = RAONKUPLOAD.browser.quirks ? a.height : "100%";
      k.style.borderWidth = "0px";
      e = RAONKUPLOAD.util.getDefaultIframeSrc();
      k.src = e;
      RAONKUPLOAD.util.addEvent(k,
          "load", function () {
            try {
              var e = document.getElementById("__" + c.id + "__");
              e && e.parentNode.removeChild(e);
              k.contentWindow.raonk_frame_loaded_event(d, a, b);
              var f = KUPLOADTOP.G_CURRKUPLOADER.frameWin.getDialogDocument(),
                  l = f.getElementsByTagName("head")[0],
                  n = l.getElementsByTagName("link"), t = n.length,
                  e = "raonkupload.popup.min.css";
              RAONKUPLOAD.isRelease || (e = "raonkupload.popup.css");
              for (var r = !1, g = 0; g < t; g++) {
                -1 < n[g].href.indexOf(e)
                && (r = !0);
              }
              if (!r) {
                var v = f.createElement("link");
                v.type = "text/css";
                v.rel = "stylesheet";
                var u = RAONKUPLOAD.UrlStamp;
                "1" == KUPLOADTOP.G_CURRKUPLOADER._config.cacheProtectMode
                && (u = RAONKUPLOAD.util.getTimeStamp());
                v.href = RAONKUPLOAD.isRelease ? a.webPath.css
                    + "raonkupload.popup.min.css?t=" + u : a.webPath.cssDev
                    + "raonkupload.popup.css?t=" + u;
                l.appendChild(v);
                if ("1"
                    == KUPLOADTOP.G_CURRKUPLOADER._config.userCssUrlDetailApply) {
                  var w = f.createElement("link");
                  w.type = "text/css";
                  w.rel = "stylesheet";
                  w.href = a.userCssUrl + "?t=" + u;
                  l.appendChild(w)
                }
              }
              b = a = null
            } catch (A) {
              RAONKUPLOAD.logMode && console && console.log(A)
            }
          },
          !1);
      e = RAONKUPLOAD.util.getIframeDocument(k);
      f = '<!DOCTYPE html><html lang="ko">';
      f += "<head>";
      f += "<title>RAONK Upload</title>";
      var l = RAONKUPLOAD.UrlStamp;
      "1" == a.cacheProtectMode && (l = RAONKUPLOAD.util.getTimeStamp());
      RAONKUPLOAD.isRelease ? ("1" == a.simpleUIMode.use
          ? (f += '<link rel="stylesheet" type="text/css" href="'
              + a.webPath.css + "raonkupload.simpleui.min.css?t=" + l
              + '" />', f += '<link rel="stylesheet" type="text/css" href="'
              + a.webPath.css + "raonkupload.simpleui.reset.min.css?t=" + l
              + '" />', "" != a.simpleUIMode.userCssUrl &&
          (f += '<link rel="stylesheet" type="text/css" href="'
              + a.simpleUIMode.userCssUrl + "?t=" + l + '" />'))
          : (f += '<link rel="stylesheet" type="text/css" href="'
              + a.webPath.css + "raonkupload.min.css?t=" + l
              + '" />', f += '<link rel="stylesheet" type="text/css" href="'
              + a.webPath.css + "raonkupload.context.min.css?t=" + l
              + '" />'), "" != a.userCssUrl
      && (f += '<link rel="stylesheet" type="text/css" href="' + a.userCssUrl
          + '" />'), "1" != a.simpleUIMode.use
      && (f += "<style>body,div,dl,dt,dd,ol,ul,li,h1,h2,h3,h4,h5,form,fieldset,p,button,input,object,pre,a,label{margin:0;padding:0;font-size:12px;font-family:"
          +
          RAONKUPLOAD.util.langFontStyle[a.lang]
          + "}</style>"), RAONKUPLOAD.browser.isCustomDomain(document)
      && (f += '<script type="text/javascript"> document.domain = "'
          + document.domain
          + '"; \x3c/script>'), f += '<script type="text/javascript" src="'
          + a.webPath.js + "raonkupload.xhr.js?t=" + l + '">\x3c/script>', 1
      > a.imageQuality.quality && "0" == a.useKManager
      && (f += '<script type="text/javascript" src="' + a.webPath.js
          + "raonkupload.image.exif.js?t=" + l
          + '">\x3c/script>'), f += '<script type="text/javascript" src="'
          + a.webPath.js + "raonkupload.core.js?t=" +
          l + '">\x3c/script>', f += '<script type="text/javascript" src="'
          + a.webPath.js + "json2.min.js?t=" + l + '">\x3c/script>', "0"
      != a.useKManager || "html5" != a.userRunTimeMode || "1" != (""
      != a.security.fileIntegrityUpload ? a.security.fileIntegrityUpload
          : a.security.fileIntegrity) && "1" != a.security.fileEncrypt && "2"
      != a.security.fileEncrypt || (f += '<script type="text/javascript" src="'
          + a.webPath.js + "raonkupload.fdi.aes.js?t=" + l
          + '">\x3c/script>'), "0" == a.useKManager && "html5"
      == a.userRunTimeMode && "1" == ("" != a.security.fileIntegrityUpload ?
          a.security.fileIntegrityUpload : a.security.fileIntegrity)
      && (f += '<script type="text/javascript" src="' + a.webPath.js
          + "hmac-sha256.js?t=" + l + '">\x3c/script>'), "0" != a.useKManager
      || "1" != a.security.fileEncrypt && "2" != a.security.fileEncrypt && "2"
      != a.security.encryptParam || (f += '<script type="text/javascript" src="'
          + a.webPath.js + "aes.js?t=" + l + '">\x3c/script>'), "0"
      != a.useCompressTransfer && (f += '<script type="text/javascript" src="'
          + a.webPath.js + "jszip/jszip.js?t=" + l
          + '">\x3c/script>'), f += '<script type="text/javascript" src="' +
          a.webPath.lang + a.lang + ".js?t=" + l + '">\x3c/script>', "0"
      == a.useKManager && "html4" == a.userRunTimeMode
      && (f += '<script type="text/javascript" src="' + a.webPath.js
          + "raonkupload.html4.js?t=" + l + '">\x3c/script>')) : ("1"
      == a.simpleUIMode.use
          ? (f += '<link rel="stylesheet" type="text/css" href="'
              + a.webPath.cssDev + "raonkupload.simpleui.css?t=" + l
              + '" />', f += '<link rel="stylesheet" type="text/css" href="'
              + a.webPath.cssDev + "raonkupload.simpleui.reset.css?t=" + l
              + '" />', "" != a.simpleUIMode.userCssUrl
          && (f += '<link rel="stylesheet" type="text/css" href="' +
              a.simpleUIMode.userCssUrl + "?t=" + l + '" />'))
          : (f += '<link rel="stylesheet" type="text/css" href="'
              + a.webPath.cssDev + "raonkupload.css?t=" + l
              + '" />', f += '<link rel="stylesheet" type="text/css" href="'
              + a.webPath.cssDev + "raonkupload.context.css?t=" + l
              + '" />'), "" != a.userCssUrl
      && (f += '<link rel="stylesheet" type="text/css" href="' + a.userCssUrl
          + '" />'), "1" != a.simpleUIMode.use
      && (f += "<style>body,div,dl,dt,dd,ol,ul,li,h1,h2,h3,h4,h5,form,fieldset,p,button,input,object,pre,a,label{margin:0;padding:0;font-size:12px;font-family:"
          +
          RAONKUPLOAD.util.langFontStyle[a.lang]
          + "}</style>"), RAONKUPLOAD.browser.isCustomDomain(document)
      && (f += '<script type="text/javascript"> document.domain = "'
          + document.domain
          + '"; \x3c/script>'), f += '<script type="text/javascript" src="'
          + a.webPath.jsDev + "raonkupload.xhr.js?t=" + l
          + '">\x3c/script>', f += '<script type="text/javascript" src="'
          + a.webPath.jsDev + "raonkupload.src.js?t=" + l
          + '">\x3c/script>', f += '<script type="text/javascript" src="'
          + a.webPath.jsDev + "raonkupload.api.js?t=" + l
          + '">\x3c/script>', f += '<script type="text/javascript" src="' +
          a.webPath.jsDev + "raonkupload.control.js?t=" + l
          + '">\x3c/script>', f += '<script type="text/javascript" src="'
          + a.webPath.jsDev + "raonkupload.base64.js?t=" + l
          + '">\x3c/script>', f += '<script type="text/javascript" src="'
          + a.webPath.jsDev + "raonkupload.context.js?t=" + l
          + '">\x3c/script>', f += '<script type="text/javascript" src="'
          + a.webPath.jsDev + "json2.min.js?t=" + l
          + '">\x3c/script>', f += '<script type="text/javascript" src="'
          + a.webPath.jsDev + "raonkupload.detector.js?t=" + l
          + '">\x3c/script>', 1 > a.imageQuality.quality && "0" ==
      a.useKManager && (f += '<script type="text/javascript" src="'
          + a.webPath.jsDev + "raonkupload.image.exif.js?t=" + l
          + '">\x3c/script>'), "0" != a.useKManager || "html5"
      != a.userRunTimeMode || "1" != ("" != a.security.fileIntegrityUpload
          ? a.security.fileIntegrityUpload : a.security.fileIntegrity) && "1"
      != a.security.fileEncrypt && "2" != a.security.fileEncrypt
      || (f += '<script type="text/javascript" src="' + a.webPath.jsDev
          + "raonkupload.fdi.aes.js?t=" + l + '">\x3c/script>'), "0"
      == a.useKManager && "html5" == a.userRunTimeMode && "1" == (""
      != a.security.fileIntegrityUpload ?
          a.security.fileIntegrityUpload : a.security.fileIntegrity)
      && (f += '<script type="text/javascript" src="' + a.webPath.jsDev
          + "hmac-sha256.js?t=" + l + '">\x3c/script>'), "0" != a.useKManager
      || "1" != a.security.fileEncrypt && "2" != a.security.fileEncrypt && "2"
      != a.security.encryptParam || (f += '<script type="text/javascript" src="'
          + a.webPath.jsDev + "aes.js?t=" + l + '">\x3c/script>'), "0"
      != a.useCompressTransfer && (f += '<script type="text/javascript" src="'
          + a.webPath.jsDev + "jszip/jszip.js?t=" + l
          + '">\x3c/script>'), f += '<script type="text/javascript" src="' +
          a.webPath.langDev + a.lang + ".js?t=" + l + '">\x3c/script>', "0"
      == a.useKManager && "html4" == a.userRunTimeMode
      && (f += '<script type="text/javascript" src="' + a.webPath.jsDev
          + "raonkupload.html4.js?t=" + l + '">\x3c/script>'));
      f += "</head>";
      f += '<body oncontextmenu="return false" class="raonk_' + a.lang + '">';
      f += "</body>";
      f += "</html>";
      e.open("text/html", "replace");
      e.write(f);
      e.close();
      return k
    },
    GetUserRunTimeUpload: function (a, c) {
      a = a.toLowerCase();
      var b = "", e = !1;
      "agent" == a && (e = !0, a = "html5");
      b = "html5plus" == a ? 1 == RAONKUPLOAD.browser.HTML5PlusSupported &&
      "1" == c ? "html5plus" : 1 == RAONKUPLOAD.browser.HTML5Supported ? "html5"
          : "html4agent" : "html5" == a ? 1
          == RAONKUPLOAD.browser.HTML5Supported ? "html5" : "html4agent"
          : "htmlonly" == a ? 1 == RAONKUPLOAD.browser.HTML5Supported ? "html5"
              : "html4" : 1 == RAONKUPLOAD.browser.HTML5PlusSupported && "1"
          == c ? "html5plus" : 1 == RAONKUPLOAD.browser.HTML5Supported ? "html5"
              : "html4agent";
      return {isAgent: e, mode: b}
    },
    gcRequest_postMessage: function (a) {
      var c;
      c = "" + ("kc" + RAONKSolution.Agent.formfeed + "c20");
      c = RAONKUPLOAD.util.makeEncryptParam(c);
      if ("html4" ==
          a.userRunTimeMode && a.isCrossDomain) {
        var b = document.createElement("div"),
            e = RAONKUPLOAD.util.getDefaultIframeSrc();
        b.innerHTML = '<iframe name="initCheckframe" id="initCheckframe" style="display:none;" src="'
            + e + '"></iframe>';
        b.style.display = "none";
        document.body.appendChild(b);
        RAONKUPLOAD.util.postFormData(document, a.handlerUrl, "initCheckframe",
            [["k00", c]], a.addCSRFToken);
        document.body.removeChild(b)
      } else {
        RAONKUPLOAD.ajax.postData(a.handlerUrl, "k00=" + c, function () {
        }, a.addHttpHeader)
      }
    },
    _setRaonKUploader: function (a,
        c) {
      var b = RAONKUPLOAD.util._getRaonKUploader(a, c);
      return void 0 == b || null == b ? !1 : b
    },
    _getRaonKUploader: function (a, c) {
      var b = null, b = RAONKUPLOAD.util._getUploaderByName(a);
      if (void 0 == b || null == b) {
        b = "";
        try {
          if ("function" === typeof Error) {
            var e = Error();
            "string" === typeof e.stack && (b = "\n\n" + e.stack)
          }
        } catch (f) {
          RAONKUPLOAD.logMode && console && console.log(f)
        }
        c || alert(
            "Uploader's Name is not correct, Please check uploader's name. \ror\rThe uploader was not initialized, Please check the location of api call"
            + b);
        return null
      }
      return b
    },
    _getUploaderByName: function (a) {
      var c = null;
      if (void 0 == a || "" == a) {
        c = KUPLOADTOP.G_CURRKUPLOADER;
      } else {
        try {
          if ("1"
              == KUPLOADTOP.G_CURRKUPLOADER._config.ignoreDifferentUploadName
              && 1 == RAONKUPLOAD.RAONKMULTIPLEID.length) {
            var b = RAONKUPLOAD.RAONKMULTIPLEID[0];
            a != b && RAONKUPLOAD.isLoadedUploadEx(b) && (a = b)
          }
        } catch (e) {
          RAONKUPLOAD.logMode && console && console.log(e)
        }
        c = RAONKUPLOAD.RAONKMULTIPLE["raonkuploader_frame_" + a];
        "object" != typeof c && (c = null)
      }
      return c
    },
    _getUploadName: function (a) {
      if (void 0 == a || "" == a) {
        if (null != RAONKUPLOAD.RAONKMULTIPLEID &&
            void 0 != RAONKUPLOAD.RAONKMULTIPLEID && 1
            == RAONKUPLOAD.RAONKMULTIPLEID.length) {
          return RAONKUPLOAD.RAONKMULTIPLEID[0];
        }
        alert(
            "Uploader's Name is not correct, Please check uploader's name. \ror\rThe uploader was not initialized, Please check the location of api call");
        return null
      }
      return a
    },
    prependZero: function (a, c) {
      for (; a.toString().length < c;) {
        a = "0" + a;
      }
      return a
    },
    insertAt: function (a, c, b) {
      return String.prototype.insertAt ? a.insertAt(c, b) : a.substr(0, c) + b
          + a.substr(c)
    },
    G_AP27: "r",
    G_AP25: "o",
    createDropZoneObject: function (a) {
      if (null ==
          document.getElementById("dext5dropzonePL")) {
        var c, b = a.licenseKey;
        c = '<object id="dext5dropzonePL" name="dext5dropzonePL" classid="CLSID:F7FEF85C-B9A4-421C-BD01-099E534ABFB0" width="0" height="0" style="width:0px; height:0px;">'
            + ('<param name="sPostURL" value="' + a.handlerUrl + '">');
        c += '<param name="strProductKey" value="' + a.productKey + '">';
        c = c + ('<param name="strLicenseKey" value="' + b + '">')
            + ('<param name="nUseDropzone" value="' + a.useDropzone + '">');
        c += "</object>";
        a = document.createElement("div");
        a.innerHTML =
            c;
        c = a.firstChild;
        document.body.appendChild(c);
        11 <= RAONKUPLOAD.browser.ieVersion ? RAONKUPLOAD.util.createEvent(
                "dext5dropzonePL",
                "d5_event_dropZone_drop(strID, strFullPath, bFolder, nDropCount)",
                "dext5_dropZone_drop(strID, strFullPath, bFolder, nDropCount)")
            : c.attachEvent("d5_event_dropZone_drop", dext5_dropZone_drop)
      }
    },
    rgbToHex: function () {
      var a, c, b;
      1 == arguments.length ? (a = arguments[0].toLowerCase(), a = a.replace(
          "rgb(", ""), a = a.replace("rgba(", ""), a = a.replace(")",
          ""), b = a.split(","), a = parseInt(b[0], 10),
          c = parseInt(b[1], 10), b = parseInt(b[2], 10)) : 3
          <= arguments.length
          && (a = arguments[0], c = arguments[1], b = arguments[2]);
      return "#" + (16777216 + (a << 16) + (c << 8) + b).toString(16).slice(1)
    },
    jsonToString: function (a) {
      return KUPLOADTOP.G_CURRKUPLOADER.frameWin.JSON.stringify(a)
    },
    stringToJson: function (a) {
      return KUPLOADTOP.G_CURRKUPLOADER.frameWin.JSON.parse(a)
    },
    saveJsonToLocalStorage: function (a, c) {
      var b = RAONKUPLOAD.util.jsonToString(c);
      window.localStorage[a] = b
    },
    loadJsonFromLocalStorage: function (a) {
      a = window.localStorage[a];
      var c = null;
      a && (c = RAONKUPLOAD.util.stringToJson(a));
      return c
    },
    langFontStyle: {
      "ko-kr": "dotum,\ub3cb\uc6c0,tahoma,sans-serif;",
      "en-us": "Arial,Verdana,sans-serif;",
      "zh-cn": "Arial,Verdana,sans-serif;",
      "zh-tw": "Arial,Verdana,sans-serif;",
      "ja-jp": "MS PGothic,MS UI Gothic,Verdana,sans-serif;"
    },
    parseDataFromServer: function (a) {
      if (a) {
        var c = a.toLowerCase().indexOf("<raonk>");
        -1 < c && (a = a.substring(c + 7));
        c = a.toLowerCase().indexOf("</raonk>");
        -1 < c && (a = a.substring(0, c))
      }
      return a
    },
    getParamInfoFromUrl: function (a) {
      var c =
          [];
      if ((a = a.split("?")[1]) && "" != a) {
        a = a.split("&");
        for (var b = a.length, e = 0; e < b; e++) {
          var f = a[e].split("="), d = "";
          if (2 < f.length) {
            for (var k = 1; k < f.length; k++) {
              d += f[k] + "=";
            }
            d = d.substring(0, d.length - 1)
          } else {
            d = f[1] ? f[1] : "";
          }
          c.push({name: f[0], value: d})
        }
      }
      return c
    },
    changeUrlForGetParam: function (a, c) {
      var b = a, e = RAONKUPLOAD.util.getParamInfoFromUrl(b), f = e.length;
      if (0 < f) {
        for (var b = a.split("?")[0], b = b + "?", d = 0; d < f; d++) {
          0 != d && (b += "&");
          var k = e[d].value,
              k = "1" == c ? RAONKUPLOAD.util.makeEncryptParam(k) : "2" == c
                  ? RAONKUPLOAD.util.makeEncryptParam2(k) :
                  encodeURIComponent(k), b = b + (e[d].name + "=" + k)
        }
      }
      return b
    },
    getInterValue: function (a) {
      var c = 1E3;
      try {
        var b = parseInt(a, 10);
        5242880 > b ? (c = parseInt(b * c / 5242880, 10), 500 > c && (c = 500))
            : 1048576 < b / 1024 && (c = 1500)
      } catch (e) {
        c = 1E3
      }
      return c
    },
    getDomainInUrl: function (a) {
      var c = {fullDomain: "", domain: "", port: ""};
      try {
        var b = a.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
        c.fullDomain = b && b[1] ? b && b[1] : "";
        if ("" != c.fullDomain) {
          var e = c.fullDomain.split(":");
          if (e[0] && "" != e[0]) {
            var f = e[0].split("."), d = f.length;
            if (1 == d) {
              c.domain = f[0];
            } else {
              for (a = 1; a < d; a++) {
                c.domain += f[a] + ".";
              }
              c.domain = c.domain.substring(0, c.domain.length - 1)
            }
          }
          e[1] && (c.port = e[1])
        }
      } catch (k) {
        RAONKUPLOAD.logMode && console && console.log(k)
      }
      return c
    },
    isLoadedResourceWithAppend: function (a, c, b, e) {
      if (null == a) {
        return !1;
      }
      var f = !1, d = a.getElementsByTagName("head")[0], k = c.toLowerCase(),
          l = "", m = "";
      if (-1 < k.indexOf(".js")) {
        l = "script", m = "src";
      } else if (-1
          < k.indexOf(".css")) {
        l = "link", m = "href";
      } else {
        return !1;
      }
      for (var k = d.getElementsByTagName(l), p = 0, q = k.length, n; p < q;
          p++) {
        if (n = k[p], -1 < n[m].toLowerCase().indexOf(c)) {
          f =
              !0;
          break
        }
      }
      if (!f && "undefined" != typeof b && b && "undefined" != typeof e && ""
          != e) {
        var t;
        "link" == l ? (t = a.createElement(
                "link"), t.type = "text/css", t.rel = "stylesheet", t.href = e)
            : "script" == l && (t = a.createElement(
            "script"), t.type = "text/javascript", t.src = e);
        d.appendChild(t)
      }
      return f
    },
    getTimeStamp: function () {
      var a = "", a = this.makeGuid();
      return a = a.replace(/-/g, "")
    },
    checkServerLicense: function (a, c) {
      var b = RAONKUPLOAD.util.makeEncryptParamOld(
          "UD" + a.unitDelimiter + c.frameWin.___ + a.unitDelimiter
          + a.productKey);
      try {
        _S = "https:" !=
        location.protocol ? c.frameWin.S1.toString() : c.frameWin.S2.toString();
        _S = _S.replace(/,/gi, "");
        _S = _S + "?t=" + RAONKUPLOAD.util.getTimeStamp();
        var e = document.createElement("div"),
            f = RAONKUPLOAD.util.getDefaultIframeSrc();
        e.innerHTML = '<iframe name="initCheckframe" id="initCheckframe" style="display:none;" src="'
            + f + '" title="KUpload"></iframe>';
        e.style.display = "none";
        document.body.appendChild(e);
        RAONKUPLOAD.util.postFormData(document, _S, "initCheckframe",
            [["p", b]], a.addCSRFToken);
        RAONKUPLOAD.util.addEvent(e.firstChild,
            "load", function () {
              e.firstChild.contentWindow.postMessage("check", "*")
            });
        if (window.postMessage) {
          var d = function (a) {
            0 == _S.indexOf(a.origin) && (a = RAONKUPLOAD.util.trim(a.data), "1"
            == a || "2" == a ? alert(
                RAONKUPLOAD.util.makeDecryptReponseMessage(c.frameWin.M1)) : "3"
            == a ? alert(
                RAONKUPLOAD.util.makeDecryptReponseMessage(c.frameWin.M2)) : "4"
                == a && alert(RAONKUPLOAD.util.makeDecryptReponseMessage(
                    c.frameWin.M3)), document.body.removeChild(
                e), RAONKUPLOAD.util.removeEvent(window, "message", d))
          };
          RAONKUPLOAD.util.addEvent(window,
              "message", d)
        }
      } catch (k) {
        RAONKUPLOAD.logMode && console && console.log(k)
      }
    },
    overrideFn: function (a) {
      try {
        top.document.location.hostname != window.document.location.hostname
        && (a.alert = function (a) {
          top.alert(a)
        }, a.confirm = function (a) {
          return top.confirm(a)
        })
      } catch (c) {
        RAONKUPLOAD.logMode && console && console.log(c)
      }
    },
    setXhrHttpHeader: function (a, c, b) {
      b && a.setRequestHeader("Content-Type",
          "application/x-www-form-urlencoded; charset=UTF-8");
      if (c) {
        for (var e in c) {
          0
          > ",accept-charset,accept-encoding,access-control-request-headers,access-control-request-method,connection,content-length,cookie,cookie2,date,dnt,expect,host,keep-alive,origin,referer,te,trailer,transfer-encoding,upgrade,user-agent,via,".indexOf(
              "," +
              e.toLowerCase() + ",") && a.setRequestHeader(e, c[e])
        }
      }
    },
    setCSRFHiddenInput: function (a, c, b) {
      try {
        if (c) {
          for (var e in c) {
            var f = e, d = c[e], k = b.createElement("input");
            k.type = "hidden";
            k.name = f;
            k.value = d;
            a.appendChild(k)
          }
        }
      } catch (l) {
        RAONKUPLOAD.logMode && console && console.log(l)
      }
    },
    convertStringtoBoolean: function (a) {
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
      } catch (c) {
        RAONKUPLOAD.logMode && console && console.log(c)
      }
    },
    runFunction: function (a) {
      if ("string" === typeof a) {
        return this.looseJsonParse(a)
      }
    },
    looseJsonParse: function (a) {
      return Function('"use strict";return (' + a + ")")()
    },
    getDateFormat: function (a, c) {
      var b = "\uc77c\uc694\uc77c \uc6d4\uc694\uc77c \ud654\uc694\uc77c \uc218\uc694\uc77c \ubaa9\uc694\uc77c \uae08\uc694\uc77c \ud1a0\uc694\uc77c".split(
          " "), e = function (a, b) {
        for (var c = "", e = 0; e++ < b - a.toString().length;) {
          c += "0";
        }
        return c + a.toString()
      };
      return c.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi, function (c) {
        switch (c) {
          case "yyyy":
            return a.getFullYear();
          case "yy":
            return e(a.getFullYear() % 1E3, 2);
          case "MM":
            return e(a.getMonth() + 1, 2);
          case "dd":
            return e(a.getDate(), 2);
          case "E":
            return b[a.getDay()];
          case "HH":
            return e(a.getHours(), 2);
          case "hh":
            return e((h = a.getHours() % 12) ? h : 12, 2);
          case "mm":
            return e(a.getMinutes(), 2);
          case "ss":
            return e(a.getSeconds(), 2);
          case "a/p":
            return 12 > a.getHours() ? "\uc624\uc804" : "\uc624\ud6c4";
          default:
            return c
        }
      })
    },
    realConfigName: function (a) {
      switch (a) {
        case "headerBar":
          return "showHeaderBar";
        case "statusBar":
          return "showStatusBar";
        case "buttonBarEdit":
          return "showButtonBarEdit";
        case "buttonBarView":
          return "showButtonBarView";
        case "extensionAllowOrLimit":
          return "extension.allowOrLimit";
        case "extensionArr":
          return "extension.extArr";
        case "wsWorkerCount":
          return "socketWorkerCount";
        case "wsWorkerJobSize":
          return "socketWorkerJobSize";
        case "wsMinSingleWorkerSize":
          return "minSingleSocketWorkerSize";
        case "uISetting":
          return "uiSetting";
        default:
          return a
      }
    },
    firstChartoLower: function (a, c) {
      var b = a;
      return "" !== a + "" ? (a = a.substring(0, 1).toLowerCase() + a.substring(
          1), c && (a = RAONKUPLOAD.util.realConfigName(a)),
          a) : b
    },
    setConfigCommon: function (a, c, b) {
      switch (a) {
        case "maxOneFileSizeByExtension":
          a = {};
          var e = "", f = "";
          c = c.split(",");
          for (var d = 0; d < c.length; d++) {
            var f = c[d].split("|"), e = RAONKUPLOAD.util.trim(f[0]),
                e = e.toLowerCase(), f = RAONKUPLOAD.util.trim(f[1]),
                k = RAONKUPLOAD.util.getUnit(f),
                k = RAONKUPLOAD.util.getUnitSize(k), f = parseInt(f, 10) * k;
            a[e] = f > b.maxOneFileSize && 0 != b.maxOneFileSize
                ? b.maxOneFileSize : f
          }
          c = a
      }
      return c
    },
    compareVersion: function (a, c) {
      for (var b = 0, e = a.replace(/,/g, "."), f = c.replace(/,/g, "."),
          e = e.split("."),
          f = f.split("."), d = e.length, k = 0; k < d; k++) {
        var l = parseInt(e[k], 10), m = parseInt(f[k], 10);
        if (l != m) {
          b = l > m ? 1 : -1;
          break
        }
      }
      return b
    },
    htmlCollectionToArray: function (a) {
      var c = [];
      try {
        c = c.concat(Array.prototype.slice.call(a, 0))
      } catch (b) {
        for (var e = a.length, f = 0; f < e; f++) {
          c.push(a[f])
        }
      }
      return c
    },
    getCommercialHybridAppFlag: function () {
      return -1 < RAONKUPLOAD.UserAgent.userAgent.toLowerCase().indexOf(
              "kakaotalk") || -1
          < RAONKUPLOAD.UserAgent.userAgent.toLowerCase().indexOf("naver") || -1
          < RAONKUPLOAD.UserAgent.userAgent.toLowerCase().indexOf("nate_app") ||
          -1 < RAONKUPLOAD.UserAgent.userAgent.toLowerCase().indexOf("daumapps")
    },
    makeRV: function (a) {
      var c = [];
      c.push(a.maj.join("").toString());
      c.push(parseInt(a.mi1.join(""), 10) * a.m1);
      c.push(a.mi2);
      c.push(a.l);
      return c.join(".")
    },
    getRV: function (a) {
      return RAONKUPLOAD.util.base64_decode(a)
    },
    makeARV: function (a) {
      var c = [];
      c.push(a.maj.join("").toString());
      c.push(parseInt(a.mi1));
      c.push(parseInt(a.mi2));
      c.push(a.l);
      return c.join(",")
    }
  });
  if (!window.RAONKSolution || window.RAONKSolution
      && !window.RAONKSolution.Agent.connectedPort) {
    window.RAONKSolution =
        {
          Agent: {
            _AP00: "tccmFvbmsuZXhl",
            vertical: "\x0B",
            formfeed: "\f",
            backspace: "\b",
            newline: "\n",
            space: " ",
            rtnCode1: "2000",
            parseRtn: function (a, c) {
              var b = {code: 0, valueArr: [], extraValue: null, splitCode: ""};
              a = a.trim ? a.trim() : a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
              0 == a.indexOf("7777") && 5 == a.toLowerCase().indexOf("<pre")
              && (a = a.replace(/ <pre/i,
                  RAONKSolution.Agent.vertical + "<pre"), a = a.replace(
                  RAONKSolution.Agent.vertical + "<pre>",
                  RAONKSolution.Agent.vertical), a = a.replace(/<\/pre>$/i,
                  ""));
              var e;
              -1 < a.indexOf(RAONKSolution.Agent.vertical) ?
                  (e = a.split(
                      RAONKSolution.Agent.vertical), b.splitCode = RAONKSolution.Agent.vertical)
                  : (e = a.split(
                      RAONKSolution.Agent.space), b.splitCode = RAONKSolution.Agent.space);
              b.code = parseInt(e[0], 10);
              if (7777 == b.code) {
                for (var f = e.length, d = 1; d < f;
                    d++) {
                  b.valueArr[d - 1] = e[d];
                }
              } else {
                e[1]
                    ? (e = RAONKSolution.Agent.decryptManagerParam(
                        e[1]), f = e.split(RAONKSolution.Agent.newline), 2
                    == f.length ? (e = f[0], f = f[1]) : f = null, "string"
                    == typeof f && c && !0 === c.isPaste
                    && (e += f, f = null), b.valueArr = e.split(
                        RAONKSolution.Agent.vertical), ""
                    == b.valueArr[b.valueArr.length -
                    1] && b.valueArr.splice(b.valueArr.length - 1, 1), f
                    && (b.extraValue = f)) : isNaN(b.code) && (b.valueArr[0] = a);
              }
              return b
            },
            parseRtnInWorker: function (a, c) {
              var b = "", b = RAONKUPLOAD.UrlStamp;
              "1" == KUPLOADTOP.G_CURRKUPLOADER._config.cacheProtectMode
              && (b = RAONKUPLOAD.util.getTimeStamp());
              var b = RAONKUPLOAD.isRelease
                      ? KUPLOADTOP.G_CURRKUPLOADER._config.webPath.js
                      + "raonkupload.processmanagerparam.min.js?t=" + b
                      : KUPLOADTOP.G_CURRKUPLOADER._config.webPath.jsDev
                      + "raonkupload.processmanagerparam.js?t=" + b,
                  e = new Worker(b), f = {
                    code: 0,
                    valueArr: []
                  };
              e.onmessage = function (a) {
                a = a.data;
                switch (a.type) {
                  case "decrypt":
                    f = a.agentMsg, e.terminate()
                }
                "undefined" != typeof c && c(f)
              };
              e.onerror = function (a) {
                e.terminate();
                "undefined" != typeof c
                && (f.valueArr[0] = "Agent Param Process Worker Error", c(f))
              };
              e.postMessage({
                type: "decrypt",
                agentMsg: a,
                agentVar: {
                  vertical: "\x0B",
                  formfeed: "\f",
                  backspace: "\b",
                  space: " "
                }
              })
            },
            isLoaded: !1,
            isUpdating: !1,
            isStartInstall: !1,
            isOtherUploadWaiting: !1,
            G_AP: {G_AP29: "w", G_AP22: "a"},
            makeEncryptManagerParam: function (a) {
              var c = null;
              try {
                RAONKEDITOR && RAONKEDITOR.util
                && (c = RAONKEDITOR.util.base64_encode)
              } catch (b) {
                RAONKUPLOAD.logMode && console && console.log(b)
              }
              try {
                null == c && RAONKUPLOAD && RAONKUPLOAD.util
                && (c = RAONKUPLOAD.util.base64_encode)
              } catch (e) {
                RAONKUPLOAD.logMode && console && console.log(e)
              }
              try {
                null == c && RAONKPHOTO && RAONKPHOTO.util
                && (c = RAONKPHOTO.util.base64_encode)
              } catch (f) {
                RAONKUPLOAD.logMode && console && console.log(f)
              }
              a = "R" + c(a);
              a = c(a);
              a = a.replace(/[+]/g, "%2B");
              return a + "\x0B"
            },
            decryptManagerParam: function (a) {
              var c = null;
              try {
                RAONKEDITOR &&
                RAONKEDITOR.util && (c = RAONKEDITOR.util.base64_decode)
              } catch (b) {
                RAONKUPLOAD.logMode && console && console.log(b)
              }
              try {
                null == c && RAONKUPLOAD && RAONKUPLOAD.util
                && (c = RAONKUPLOAD.util.base64_decode)
              } catch (e) {
                RAONKUPLOAD.logMode && console && console.log(e)
              }
              try {
                null == c && RAONKPHOTO && RAONKPHOTO.util
                && (c = RAONKPHOTO.util.base64_decode)
              } catch (f) {
                RAONKUPLOAD.logMode && console && console.log(f)
              }
              a = a.replace(/%2B/g, "+");
              a = c(a);
              a = a.substring(1);
              return a = c(a)
            },
            G_AP10: 8,
            G_AP23: "n",
            G_AP20: "z",
            isCheckingPort: !1,
            connectedPort: "",
            sendCount: 0,
            managerFinalUrl: "",
            isCheckingMultiUserPort: !1,
            reset: function () {
              this.isCheckingPort = this.isOtherUploadWaiting = this.isStartInstall = this.isUpdating = this.isLoaded = !1;
              this.connectedPort = "";
              this.sendCount = 0;
              this.managerFinalUrl = "";
              this.isCheckingMultiUserPort = !1
            },
            _AP15: "GljYXRpb24gRGF0YVxSQU9OV0laX"
          }, _AP11: "FJBT04gS1xyYW9uay5leGU="
        };
  }
  RAONKUPLOAD._manager || (RAONKUPLOAD._manager = {
    createManagerRequest: function (a) {
      return new XMLHttpRequest
    }, sendDataWidthAjax: function (a) {
      var c = a.req;
      a.errorCallBack && (c.onerror =
          function () {
            a.errorCallBack(c);
            c = null;
            c = void 0
          });
      a.successCallBack && (c.onload = function () {
        a.successCallBack(c.responseText);
        c = null;
        c = void 0
      });
      var b = a.url ? a.url : KUPLOADTOP.RAONKSolution.managerFinalUrl;
      try {
        c.open("POST", b, a.async), c.send("k00=" + a.data)
      } catch (e) {
        try {
          KUPLOADTOP.G_CURRKUPLOADER._config.sendToManagerType = "2", KUPLOADTOP.G_CURRKUPLOADER.frameWin.sendMessageToAgent(
              a.data, a.successCallBack, null, a.async, b,
              KUPLOADTOP.G_CURRKUPLOADER)
        } catch (f) {
          RAONKUPLOAD.logMode && console && console.log(f)
        }
      }
    }
  });
  RAONKUPLOAD.Transfer = function (a) {
    try {
      var c = RAONKUPLOAD.util._setRaonKUploader(a);
      if (c) {
        KUPLOADTOP.G_CURRKUPLOADER = c;
        var b = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
        b && b.startUpload()
      }
    } catch (e) {
      RAONKUPLOAD.logMode && console && console.log(e)
    }
  };
  RAONKUPLOAD.TransferEx = function (a) {
    try {
      var c = RAONKUPLOAD.util._setRaonKUploader(a);
      if (c) {
        KUPLOADTOP.G_CURRKUPLOADER = c;
        var b = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
        b && setTimeout(function () {
          b.startUpload()
        }, 100)
      }
    } catch (e) {
      RAONKUPLOAD.logMode && console && console.log(e)
    }
  };
  RAONKUPLOAD.MultiTransfer =
      function () {
        try {
          var a = RAONKUPLOAD.RAONKMULTIPLEID.length;
          if (0 < a) {
            var c = 0, b = [], e = setInterval(function () {
              if (c == a) {
                clearInterval(e);
                try {
                  "function"
                  === typeof KUPLOADTOP.G_CURRKUPLOADER._config.event.multiUploadComplete
                      ? KUPLOADTOP.G_CURRKUPLOADER._config.event.multiUploadComplete(
                          b) : "function"
                      === typeof KUPLOADTOP.KUPLOADWIN.RAONKUPLOAD_MultiUploadComplete
                      && KUPLOADTOP.KUPLOADWIN.RAONKUPLOAD_MultiUploadComplete(
                          b)
                } catch (d) {
                  RAONKUPLOAD.logMode && console && console.log(d)
                }
                try {
                  for (var f = 0; f < a; f++) {
                    var l = RAONKUPLOAD.RAONKMULTIPLE["raonkuploader_frame_" +
                    RAONKUPLOAD.RAONKMULTIPLEID[f]];
                    if (l && (KUPLOADTOP.G_CURRKUPLOADER = l, "0"
                    == KUPLOADTOP.G_CURRKUPLOADER._config.skipSentFile)) {
                      var m = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
                      m.fileListReset()
                    }
                  }
                } catch (p) {
                  RAONKUPLOAD.logMode && console && console.log(p)
                }
              } else if ((l = RAONKUPLOAD.RAONKMULTIPLE["raonkuploader_frame_"
                  + RAONKUPLOAD.RAONKMULTIPLEID[c]]) && "upload"
                  == l._config.mode) {
                if (KUPLOADTOP.G_CURRKUPLOADER = l, m = KUPLOADTOP.G_CURRKUPLOADER.frameWin) {
                  if (0
                      == m.G_MultiTranferCheck) {
                    m.G_MultiTranferCheck = 1, m.startUpload();
                  } else if (2
                      ==
                      m.G_MultiTranferCheck || 3 == m.G_MultiTranferCheck || 4
                      == m.G_MultiTranferCheck) {
                    2 == m.G_MultiTranferCheck ? (f = {
                      uploadID: RAONKUPLOAD.RAONKMULTIPLEID[c],
                      status: "complete"
                    }, b.push(f)) : 3 == m.G_MultiTranferCheck ? (f = {
                      uploadID: RAONKUPLOAD.RAONKMULTIPLEID[c],
                      status: "cancel"
                    }, b.push(f)) : 4 == m.G_MultiTranferCheck && (f = {
                      uploadID: RAONKUPLOAD.RAONKMULTIPLEID[c],
                      status: "error"
                    }, b.push(f)), m.G_MultiTranferCheck = 0, c++
                  }
                }
              } else {
                c++
              }
            }, 100)
          }
        } catch (f) {
          RAONKUPLOAD.logMode && console && console.log(f)
        }
      };
  RAONKUPLOAD.AddUploadedFile = function (a,
      c, b, e, f, d) {
    RAONKUPLOAD.AddUploadedFileEw(a, c, b, e, f, d)
  };
  RAONKUPLOAD.AddUploadedFileAsArray = function (a, c, b, e, f, d) {
    var k = "",
        k = "[object Array]" === Object.prototype.toString.call(d) ? d[0] : d;
    d = {};
    d.uniqueKey = a;
    d.originName = c;
    d.webPath = b;
    d.size = e;
    d.customValue = f;
    d.uploadName = k;
    d.apiName = "AddUploadedFileAsArray";
    RAONKUPLOAD.AddUploadedFileAsObject(d)
  };
  RAONKUPLOAD.AddUploadedFileWithGetFileSize = function (a, c, b, e, f) {
    var d = "",
        d = "[object Array]" === Object.prototype.toString.call(f) ? f[0] : f;
    f = {getFileSize: !0};
    f.uniqueKey =
        a;
    f.originName = c;
    f.webPath = b;
    f.customValue = e;
    f.uploadName = d;
    f.apiName = "AddUploadedFileWithGetFileSize";
    RAONKUPLOAD.AddUploadedFileAsObject(f)
  };
  RAONKUPLOAD.GetFileSize = function (a, c) {
    var b = "", e = KUPLOADTOP.G_CURRKUPLOADER._config.handlerUrl, f = [];
    "[object Array]" === Object.prototype.toString.call(a) ? f = a : f.push(a);
    var d = "", k;
    k = "" + ("kc" + KUPLOADTOP.RAONKSolution.Agent.formfeed + "c22"
        + KUPLOADTOP.RAONKSolution.Agent.vertical);
    k += "k01" + KUPLOADTOP.RAONKSolution.Agent.formfeed
        + KUPLOADTOP.G_CURRKUPLOADER._config.security.encryptParam +
        KUPLOADTOP.RAONKSolution.Agent.vertical;
    if ("1"
        <= KUPLOADTOP.G_CURRKUPLOADER._config.security.encryptParam) {
      for (var l = f.length,
          m = 0; m < l; m++) {
        k += "k30" + KUPLOADTOP.RAONKSolution.Agent.formfeed
            + f[m] + KUPLOADTOP.RAONKSolution.Agent.vertical;
      }
    }
    k = k.substring(0, k.length - 1);
    1 == KUPLOADTOP.G_CURRKUPLOADER._config.isCrossDomain
    && (k += KUPLOADTOP.RAONKSolution.Agent.vertical, k += "k22"
        + KUPLOADTOP.RAONKSolution.Agent.formfeed + "1");
    KUPLOADTOP.G_CURRKUPLOADER._config.cloudInfo.Use && "2"
    == KUPLOADTOP.G_CURRKUPLOADER._config.cloudInfo.Use &&
    (k += KUPLOADTOP.RAONKSolution.Agent.vertical + "k46"
        + KUPLOADTOP.RAONKSolution.Agent.formfeed
        + KUPLOADTOP.G_CURRKUPLOADER._config.cloudInfo.Use);
    l = KUPLOADTOP.RAONKUPLOAD.util.makeEncryptParamFinal(k);
    d = l.name + "=" + l.value;
    k = [];
    if (1 == KUPLOADTOP.G_CURRKUPLOADER._config.isCrossDomain) {
      if (k.push([l.name, l.value]), "0"
      == KUPLOADTOP.G_CURRKUPLOADER._config.security.encryptParam) {
        for (l = f.length, m = 0;
            m < l; m++) {
          k.push(["k30", encodeURIComponent(f[m])])
        }
      }
    } else if ("0"
        == KUPLOADTOP.G_CURRKUPLOADER._config.security.encryptParam) {
      for (l =
          f.length, m = 0; m < l; m++) {
        d += "&k30=" + encodeURIComponent(f[m]);
      }
    }
    var p = function (a) {
      null != a && "" != a ? (a = KUPLOADTOP.RAONKUPLOAD.util.trim(
          a), a = KUPLOADTOP.RAONKUPLOAD.util.parseDataFromServer(a), 0
      == a.indexOf("[OK]") ? (a = a.replace("[OK]",
              ""), a = KUPLOADTOP.RAONKUPLOAD.util.makeDecryptReponseMessage(a))
          : a = "") : a = "";
      "function" === typeof c && c(
          a.split(KUPLOADTOP.RAONKSolution.Agent.formfeed))
    };
    if (1 == KUPLOADTOP.G_CURRKUPLOADER._config.isCrossDomain) {
      var q = document.createElement("div"),
          f = KUPLOADTOP.RAONKUPLOAD.util.getDefaultIframeSrc();
      q.innerHTML = '<iframe name="sizeConfirmFrame" id="sizeConfirmFrame" style="display:none;" src="'
          + f + '"></iframe>';
      q.style.display = "none";
      document.body.appendChild(q);
      KUPLOADTOP.RAONKUPLOAD.util.addEvent(q.firstChild, "load", function () {
        q.firstChild.contentWindow.postMessage("check", "*")
      }, !0);
      if (window.postMessage) {
        var n = function (a) {
          0 == e.indexOf(a.origin) && (document.body.removeChild(
              q), KUPLOADTOP.RAONKUPLOAD.util.removeEvent(window, "message",
              n), b = KUPLOADTOP.RAONKUPLOAD.util.parseDataFromServer(a.data),
              p(b))
        };
        KUPLOADTOP.RAONKUPLOAD.util.addEvent(window, "message", n)
      }
      KUPLOADTOP.RAONKUPLOAD.util.postFormData(document, e, "sizeConfirmFrame",
          k, KUPLOADTOP.G_CURRKUPLOADER._config.addCSRFToken)
    } else {
      KUPLOADTOP.RAONKUPLOAD.ajax.postData(e, d, p,
          KUPLOADTOP.G_CURRKUPLOADER.tempHttpHeaderObj)
    }
  };
  RAONKUPLOAD.AddUploadedFileEx = function (a, c, b, e, f, d, k) {
    var l = {};
    l.uniqueKey = a;
    l.originName = c;
    l.webPath = b;
    l.size = e;
    l.customValue = f;
    l.headerEx = d;
    l.uploadName = k;
    l.apiName = "AddUploadedFileEx";
    RAONKUPLOAD.AddUploadedFileAsObject(l)
  };
  RAONKUPLOAD.AddUploadedFileExAsArray = function (a, c, b, e, f, d, k) {
    var l = "",
        l = "[object Array]" === Object.prototype.toString.call(k) ? k[0] : k;
    k = {};
    k.uniqueKey = a;
    k.originName = c;
    k.webPath = b;
    k.size = e;
    k.customValue = f;
    k.headerEx = d;
    k.uploadName = l;
    k.apiName = "AddUploadedFileExAsArray";
    RAONKUPLOAD.AddUploadedFileAsObject(k)
  };
  RAONKUPLOAD.AddUploadedFileExWithGetFileSize = function (a, c, b, e, f, d) {
    var k = "",
        k = "[object Array]" === Object.prototype.toString.call(d) ? d[0] : d;
    d = {getFileSize: !0};
    d.uniqueKey = a;
    d.originName = c;
    d.webPath =
        b;
    d.customValue = e;
    d.headerEx = f;
    d.uploadName = k;
    d.apiName = "AddUploadedFileExWithGetFileSize";
    RAONKUPLOAD.AddUploadedFileAsObject(d)
  };
  RAONKUPLOAD.OpenFileDialog = function (a, c) {
    try {
      var b = RAONKUPLOAD.util._setRaonKUploader(a);
      if (b) {
        KUPLOADTOP.G_CURRKUPLOADER = b;
        var e = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
        "string" === typeof c && (c = RAONKUPLOAD.util.convertStringtoBoolean(
            c));
        c ? e.selectFile(null, c) : e.selectFile()
      }
    } catch (f) {
      RAONKUPLOAD.logMode && console && console.log(f)
    }
  };
  RAONKUPLOAD.DeleteAllFile = function (a) {
    try {
      var c =
          RAONKUPLOAD.util._setRaonKUploader(a);
      if (c) {
        KUPLOADTOP.G_CURRKUPLOADER = c;
        var b = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
        b && b.deleteAllFile(null, !0)
      }
    } catch (e) {
      RAONKUPLOAD.logMode && console && console.log(e)
    }
  };
  RAONKUPLOAD.DeleteSelectedFile = function (a) {
    try {
      var c = RAONKUPLOAD.util._setRaonKUploader(a);
      if (c) {
        KUPLOADTOP.G_CURRKUPLOADER = c;
        var b = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
        b && b.deleteSelectedFile(null, !0)
      }
    } catch (e) {
      RAONKUPLOAD.logMode && console && console.log(e)
    }
  };
  RAONKUPLOAD.OpenSelectedFile = function (a) {
    try {
      var c =
          RAONKUPLOAD.util._setRaonKUploader(a);
      if (c) {
        KUPLOADTOP.G_CURRKUPLOADER = c;
        var b = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
        b && (RAONKUPLOAD.browser.mobile ? b.downloadFile(null, !0)
            : b.openFile(null, !0))
      }
    } catch (e) {
      RAONKUPLOAD.logMode && console && console.log(e)
    }
  };
  RAONKUPLOAD.Cancel = function (a) {
    try {
      var c = RAONKUPLOAD.util._setRaonKUploader(a);
      if (c) {
        KUPLOADTOP.G_CURRKUPLOADER = c;
        var b = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
        b && ("1" == c._config.useKManager ? b.uploadCancelAgent()
            : b.uploadCancel(!0))
      }
    } catch (e) {
      RAONKUPLOAD.logMode &&
      console && console.log(e)
    }
  };
  RAONKUPLOAD.GetTotalFileCount = function (a, c) {
    var b = null;
    try {
      var e = RAONKUPLOAD.util._setRaonKUploader(a);
      if (e) {
        KUPLOADTOP.G_CURRKUPLOADER = e;
        var f = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
        f && (b = f.getTotalFileCount(c))
      }
    } catch (d) {
      RAONKUPLOAD.logMode && console && console.log(d)
    }
    return b
  };
  RAONKUPLOAD.GetTotalFileSize = function (a, c) {
    var b = null;
    try {
      var e = RAONKUPLOAD.util._setRaonKUploader(a);
      if (e) {
        KUPLOADTOP.G_CURRKUPLOADER = e;
        var f = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
        f && (b = f.getTotalFileSize(c))
      }
    } catch (d) {
      RAONKUPLOAD.logMode &&
      console && console.log(d)
    }
    return b
  };
  RAONKUPLOAD.ResetUpload = function (a) {
    try {
      var c = RAONKUPLOAD.util._setRaonKUploader(a);
      c && (KUPLOADTOP.G_CURRKUPLOADER = c, c.reset(
          a), RAONKUPLOAD.ResetUploadCompleteState(c.ID))
    } catch (b) {
      RAONKUPLOAD.logMode && console && console.log(b)
    }
  };
  RAONKUPLOAD.ResetUploadEx = function (a, c) {
    try {
      var b = RAONKUPLOAD.util._setRaonKUploader(a);
      b && (c && (KUPLOADTOP.G_CURRKUPLOADER = b), b.reset(
          a), RAONKUPLOAD.ResetUploadCompleteStateEx(b.ID, c))
    } catch (e) {
      RAONKUPLOAD.logMode && console && console.log(e)
    }
  };
  RAONKUPLOAD.GetUploadCompleteState = function (a) {
    var c = null;
    try {
      var b = RAONKUPLOAD.util._setRaonKUploader(a);
      b
      && (KUPLOADTOP.G_CURRKUPLOADER = b, c = KUPLOADTOP.G_CURRKUPLOADER.isUploadComplete)
    } catch (e) {
      RAONKUPLOAD.logMode && console && console.log(e)
    }
    return c
  };
  RAONKUPLOAD.ResetUploadCompleteState = function (a) {
    try {
      var c = RAONKUPLOAD.util._setRaonKUploader(a);
      c
      && (KUPLOADTOP.G_CURRKUPLOADER = c, KUPLOADTOP.G_CURRKUPLOADER.isUploadComplete = !1)
    } catch (b) {
      RAONKUPLOAD.logMode && console && console.log(b)
    }
  };
  RAONKUPLOAD.ResetUploadCompleteStateEx =
      function (a, c) {
        try {
          var b = RAONKUPLOAD.util._setRaonKUploader(a);
          b && (c
          && (KUPLOADTOP.G_CURRKUPLOADER = b), KUPLOADTOP.G_CURRKUPLOADER.isUploadComplete = !1)
        } catch (e) {
          RAONKUPLOAD.logMode && console && console.log(e)
        }
      };
  RAONKUPLOAD.GetUserRuntimeMode = function (a) {
    var c = null;
    try {
      var b = RAONKUPLOAD.util._setRaonKUploader(a);
      b && (KUPLOADTOP.G_CURRKUPLOADER = b, c = "1"
      == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager ? "agent"
          : KUPLOADTOP.G_CURRKUPLOADER._config.userRunTimeMode)
    } catch (e) {
      RAONKUPLOAD.logMode && console && console.log(e)
    }
    return c
  };
  RAONKUPLOAD.SetAllowOrLimitExtension = function (a, c, b) {
    try {
      var e = RAONKUPLOAD.util._setRaonKUploader(b);
      if (e) {
        KUPLOADTOP.G_CURRKUPLOADER = e;
        var f = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
        f && f.setAllowOrLimitExtension(a.toString(), c)
      }
    } catch (d) {
      RAONKUPLOAD.logMode && console && console.log(d)
    }
  };
  RAONKUPLOAD.GetFileObjectList = function (a) {
    var c = null;
    try {
      var b = RAONKUPLOAD.util._setRaonKUploader(a);
      b && (KUPLOADTOP.G_CURRKUPLOADER = b, "1"
      == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager
      && (c = KUPLOADTOP.G_CURRKUPLOADER.frameWin.getFileObjectList()))
    } catch (e) {
      RAONKUPLOAD.logMode &&
      console && console.log(e)
    }
    return c
  };
  RAONKUPLOAD.SetFileObjectList = function (a, c) {
    try {
      var b = RAONKUPLOAD.util._setRaonKUploader(c);
      if (b && (KUPLOADTOP.G_CURRKUPLOADER = b, "1"
      == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager)) {
        for (var e = a.length,
            b = 0; b < e; b++) {
          KUPLOADTOP.RAONKUPLOAD.AddLocalFileDirectly(
              a[b].file, KUPLOADTOP.G_CURRKUPLOADER.ID)
        }
      }
    } catch (f) {
      RAONKUPLOAD.logMode && console && console.log(f)
    }
  };
  RAONKUPLOAD.SetMaxOneFileSize = function (a, c) {
    try {
      var b = RAONKUPLOAD.util._setRaonKUploader(c);
      if (b && (KUPLOADTOP.G_CURRKUPLOADER =
          b, KUPLOADTOP.G_CURRKUPLOADER.frameWin)) {
        a = a.toString();
        var e = RAONKUPLOAD.util.getUnit(a),
            f = RAONKUPLOAD.util.getUnitSize(e), d = parseInt(a, 10) * f;
        b._config.maxOneFileSize = d
      }
    } catch (k) {
      RAONKUPLOAD.logMode && console && console.log(k)
    }
  };
  RAONKUPLOAD.SetMaxTotalFileSize = function (a, c) {
    try {
      var b = RAONKUPLOAD.util._setRaonKUploader(c);
      if (b) {
        KUPLOADTOP.G_CURRKUPLOADER = b;
        var e = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
        if (e) {
          a = a.toString();
          var f = RAONKUPLOAD.util.getUnit(a),
              d = RAONKUPLOAD.util.getUnitSize(f), k = parseInt(a, 10) *
                  d;
          b._config.maxTotalFileSize = k;
          e.reLoadStatusBar(b._config)
        }
      }
    } catch (l) {
      RAONKUPLOAD.logMode && console && console.log(l)
    }
  };
  RAONKUPLOAD.SetMaxTotalFileCount = function (a, c) {
    try {
      var b = RAONKUPLOAD.util._setRaonKUploader(c);
      if (b) {
        KUPLOADTOP.G_CURRKUPLOADER = b;
        var e = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
        if (e) {
          b._config.maxTotalFileCount = parseInt(a, 10);
          b._config.multiFileSelect = 1 == b._config.maxTotalFileCount ? !1
              : !0;
          if ("0" == b._config.useKManager && "html5"
              == b._config.userRunTimeMode) {
            var f = e.document.getElementById("file_" +
                KUPLOADTOP.G_CURRKUPLOADER.TagID);
            f && "undefined" != typeof f.multiple
            && (f.multiple = b._config.multiFileSelect)
          }
          e.reLoadStatusBar(b._config)
        }
      }
    } catch (d) {
      RAONKUPLOAD.logMode && console && console.log(d)
    }
  };
  RAONKUPLOAD.SetDefaultDownloadPath = function (a, c) {
    try {
      var b = RAONKUPLOAD.util._setRaonKUploader(c);
      b && (KUPLOADTOP.G_CURRKUPLOADER = b, "1"
      == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager
      && (KUPLOADTOP.G_CURRKUPLOADER._config.defaultDownloadPath = a))
    } catch (e) {
      RAONKUPLOAD.logMode && console && console.log(e)
    }
  };
  RAONKUPLOAD.GetItemCount =
      function (a, c) {
        var b = null;
        try {
          var e = RAONKUPLOAD.util._setRaonKUploader(a);
          e && (KUPLOADTOP.G_CURRKUPLOADER = e, "1"
          == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager
          && (b = KUPLOADTOP.G_CURRKUPLOADER.frameWin.getTotalItemCount(c)))
        } catch (f) {
          RAONKUPLOAD.logMode && console && console.log(f)
        }
        return b
      };
  RAONKUPLOAD.GetSelectedFileCount = function (a) {
    var c = null;
    try {
      var b = RAONKUPLOAD.util._setRaonKUploader(a);
      if (b) {
        KUPLOADTOP.G_CURRKUPLOADER = b;
        var e = b.frameWin;
        e && (c = e.getSelectedFileCount())
      }
    } catch (f) {
      RAONKUPLOAD.logMode &&
      console && console.log(f)
    }
    return c
  };
  RAONKUPLOAD.GetSelectedFileSize = function (a) {
    var c = null;
    try {
      var b = RAONKUPLOAD.util._setRaonKUploader(a);
      if (b) {
        KUPLOADTOP.G_CURRKUPLOADER = b;
        var e = b.frameWin;
        e && (c = e.getSelectedFileSize())
      }
    } catch (f) {
      RAONKUPLOAD.logMode && console && console.log(f)
    }
    return c
  };
  RAONKUPLOAD.GetUploadNameSet = function () {
    return RAONKUPLOAD.RAONKMULTIPLEID
  };
  RAONKUPLOAD.SetLargeFile = function (a, c, b) {
    if (void 0 != a && null != a) {
      try {
        var e = RAONKUPLOAD.util._setRaonKUploader(b);
        if (e) {
          KUPLOADTOP.G_CURRKUPLOADER =
              e;
          var f = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
          if (f) {
            a = RAONKUPLOAD.util.parseIntOr0(a);
            if (void 0 == c || null == c) {
              c = !1;
            }
            f.setLargeFile(a, c)
          }
        }
      } catch (d) {
        RAONKUPLOAD.logMode && console && console.log(d)
      }
    }
  };
  RAONKUPLOAD.Destroy = function (a, c) {
    try {
      var b = RAONKUPLOAD.util._setRaonKUploader(a, c);
      if (b) {
        KUPLOADTOP.G_CURRKUPLOADER = b;
        var e = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
        try {
          if (RAONKUPLOAD.RAONKMULTIPLEEVENT[b.ID]) {
            uploadEventList = RAONKUPLOAD.RAONKMULTIPLEEVENT[b.ID];
            for (var f = 0, d = uploadEventList.length; f < d;
                f++) {
              uploadEventList[f].element &&
              (RAONKUPLOAD.util.removeEvent(uploadEventList[f].element,
                  uploadEventList[f].event,
                  uploadEventList[f].func), delete uploadEventList[f].func, uploadEventList[f].func = null);
            }
            delete uploadEventList;
            delete RAONKUPLOAD.RAONKMULTIPLEEVENT[b.ID]
          }
          RAONKUPLOAD.util.removeEvent(KUPLOADTOP, "keydown", e._top_Keydown);
          RAONKUPLOAD.util.removeEvent(KUPLOADTOP, "click", e._top_filebtn);
          var e = !0, k;
          for (k in RAONKUPLOAD.RAONKMULTIPLEEVENT) {
            e = !1;
            break
          }
          e && (b.frameWin.organizePopupObjEvent("popup",
              !0), b.frameWin.organizePopupObjEvent("popup_re"),
              b.frameWin.organizePopupObjEvent(
                  "popup_zip"), b.frameWin.organizePopupObjEvent("imgPreview",
              !0), delete RAONKUPLOAD.RAONKCOMMONPOPUPEVENT)
        } catch (l) {
          RAONKUPLOAD && RAONKUPLOAD.logMode && console && console.log(l)
        }
        try {
          if (RAONKUPLOAD.RAONKMULTIPLEEVENT_FILELIST[b.ID]) {
            uploadEventList_fileitemlist = RAONKUPLOAD.RAONKMULTIPLEEVENT_FILELIST[b.ID];
            f = 0;
            for (d = uploadEventList_fileitemlist.length; f < d;
                f++) {
              uploadEventList_fileitemlist[f].element
              && (RAONKUPLOAD.util.removeEvent(
                  uploadEventList_fileitemlist[f].element,
                  uploadEventList_fileitemlist[f].event,
                  uploadEventList_fileitemlist[f].func), delete uploadEventList_fileitemlist[f].func, uploadEventList_fileitemlist[f].func = null);
            }
            delete uploadEventList_fileitemlist;
            delete RAONKUPLOAD.RAONKMULTIPLEEVENT_FILELIST[b.ID]
          }
        } catch (m) {
          RAONKUPLOAD && RAONKUPLOAD.logMode && console && console.log(m)
        }
        var p = KUPLOADTOP.window.document;
        null != KUPLOADTOP.G_CURRKUPLOADER.dialogWindow
        && (p = KUPLOADTOP.G_CURRKUPLOADER.dialogWindow.document);
        try {
          RAONKUPLOAD.util.removeElementWithChildNodes(
              p.getElementById("RAON_K_UP_ly_wrapper")),
              RAONKUPLOAD.util.removeElementWithChildNodes(p.getElementById(
                  "RAON_K_UP_Popup_Mode")), b.frameWin.organizePopupObjEvent(
              "context"), b.frameWin.organizePopupObjEvent(
              "context_bg"), RAONKUPLOAD.util.removeElementWithChildNodes(
              p.getElementById("raonkupload_context_menu"))
        } catch (q) {
          RAONKUPLOAD && RAONKUPLOAD.logMode && console && console.log(q)
        }
        try {
          if (RAONKUPLOAD.RAONKMULTIPLE["raonkuploader_frame_" + b.ID]) {
            try {
              for (var f = 0, n = RAONKUPLOAD.RAONKMULTIPLETIMEOUT,
                  d = n.length; f < d; f++) {
                n[f] && (window.clearTimeout(n[f]),
                    delete n[f]);
              }
              delete RAONKUPLOAD.RAONKMULTIPLETIMEOUT
            } catch (t) {
              RAONKUPLOAD && RAONKUPLOAD.logMode && console && console.log(t)
            }
            RAONKUPLOAD.util.removeElementWithChildNodes(
                document.getElementById(b._frame.frameID));
            try {
              RAONKUPLOAD.util.removeElementWithChildNodes(
                  document.getElementById("raonkuploader_holder_" + b.ID))
            } catch (r) {
              RAONKUPLOAD && RAONKUPLOAD.logMode && console && console.log(r)
            }
            b._config && delete b._config;
            b._frame && delete b._frame;
            if (b.frameWin._raonk_uploader) {
              try {
                delete b.frameWin._raonk_uploader
              } catch (g) {
                b.frameWin._raonk_uploader =
                    null
              }
            }
            b.frameWin && delete b.frameWin;
            var f = 0, v;
            for (v in RAONKUPLOAD.RAONKHOLDER) {
              if (v == b.ID) {
                break;
              } else {
                f++;
              }
            }
            RAONKUPLOAD.RAONKMULTIPLEID.splice(f, 1);
            RAONKUPLOAD.RAONKMULTIPLE["raonkuploader_frame_" + b.ID]
            && delete RAONKUPLOAD.RAONKMULTIPLE["raonkuploader_frame_" + b.ID];
            "undefined" != typeof RAONKUPLOAD.RAONKHOLDER[b.ID]
            && delete RAONKUPLOAD.RAONKHOLDER[b.ID];
            if (RAONKUPLOAD.RAONKMULTIPLEID && 0
                < RAONKUPLOAD.RAONKMULTIPLEID.length) {
              G_CURRKUPLOADER = RAONKUPLOAD.RAONKMULTIPLE["raonkuploader_frame_"
              + RAONKUPLOAD.RAONKMULTIPLEID[0]];
            } else {
              G_CURRKUPLOADER = null;
              try {
                delete RAONKUPLOAD.RAONKMULTIPLEEVENT
              } catch (u) {
                RAONKUPLOAD && RAONKUPLOAD.logMode && console && console.log(u)
              }
            }
            try {
              RAONKSolution.Agent.reset()
            } catch (w) {
              RAONKUPLOAD && RAONKUPLOAD.logMode && console && console.log(w)
            }
            delete b
          }
        } catch (A) {
          RAONKUPLOAD && RAONKUPLOAD.logMode && console && console.log(A)
        }
        try {
          RAONKUPLOAD.IsUploadLoadedHashTable.removeItem(a)
        } catch (y) {
          RAONKUPLOAD && RAONKUPLOAD.logMode && console && console.log(y)
        }
      }
    } catch (C) {
      RAONKUPLOAD && RAONKUPLOAD.logMode && console && console.log(C)
    }
  };
  RAONKUPLOAD.DownloadFile = function (a) {
    try {
      var c = RAONKUPLOAD.util._setRaonKUploader(a);
      if (c) {
        KUPLOADTOP.G_CURRKUPLOADER = c;
        var b = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
        b && b.downloadFile(null, !0)
      }
    } catch (e) {
      RAONKUPLOAD.logMode && console && console.log(e)
    }
  };
  RAONKUPLOAD.DownloadAllFile = function (a) {
    try {
      var c = RAONKUPLOAD.util._setRaonKUploader(a);
      if (c) {
        KUPLOADTOP.G_CURRKUPLOADER = c;
        var b = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
        b && b.downloadAllFile(null, !0)
      }
    } catch (e) {
      RAONKUPLOAD.logMode && console && console.log(e)
    }
  };
  RAONKUPLOAD.SetUploadMode =
      function (a, c) {
        try {
          var b = RAONKUPLOAD.util._setRaonKUploader(c);
          if (b) {
            KUPLOADTOP.G_CURRKUPLOADER = b;
            var e = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
            if (e && 0 != e.isExecuteApi()) {
              if ("" == a || void 0 == a || "edit"
                  == a.toLowerCase()) {
                a = "upload";
              }
              e.setUploadMode(a)
            }
          }
        } catch (f) {
          RAONKUPLOAD.logMode && console && console.log(f)
        }
      };
  RAONKUPLOAD.Show = function (a) {
    try {
      var c = RAONKUPLOAD.util._setRaonKUploader(a);
      if (c) {
        KUPLOADTOP.G_CURRKUPLOADER = c;
        var b = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
        b && b.uploadShow()
      }
    } catch (e) {
      RAONKUPLOAD.logMode &&
      console && console.log(e)
    }
  };
  RAONKUPLOAD.Hidden = function (a) {
    try {
      var c = RAONKUPLOAD.util._setRaonKUploader(a);
      c && (KUPLOADTOP.G_CURRKUPLOADER = c, KUPLOADTOP.G_CURRKUPLOADER.frameWin
      && KUPLOADTOP.G_CURRKUPLOADER.frameWin.uploadHidden())
    } catch (b) {
      RAONKUPLOAD.logMode && console && console.log(b)
    }
  };
  RAONKUPLOAD.MoveFirstFile = function (a) {
    try {
      var c = RAONKUPLOAD.util._setRaonKUploader(a);
      if (c) {
        KUPLOADTOP.G_CURRKUPLOADER = c;
        var b = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
        b && 0 != b.isExecuteApi() && b.moveFirstFile()
      }
    } catch (e) {
      RAONKUPLOAD.logMode &&
      console && console.log(e)
    }
  };
  RAONKUPLOAD.MoveForwardFile = function (a) {
    try {
      var c = RAONKUPLOAD.util._setRaonKUploader(a);
      if (c) {
        KUPLOADTOP.G_CURRKUPLOADER = c;
        var b = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
        b && 0 != b.isExecuteApi() && b.moveForwardFile()
      }
    } catch (e) {
      RAONKUPLOAD.logMode && console && console.log(e)
    }
  };
  RAONKUPLOAD.MoveBackwardFile = function (a) {
    try {
      var c = RAONKUPLOAD.util._setRaonKUploader(a);
      if (c) {
        KUPLOADTOP.G_CURRKUPLOADER = c;
        var b = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
        b && 0 != b.isExecuteApi() && b.moveBackwardFile()
      }
    } catch (e) {
      RAONKUPLOAD.logMode &&
      console && console.log(e)
    }
  };
  RAONKUPLOAD.MoveEndFile = function (a) {
    try {
      var c = RAONKUPLOAD.util._setRaonKUploader(a);
      if (c) {
        KUPLOADTOP.G_CURRKUPLOADER = c;
        var b = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
        b && 0 != b.isExecuteApi() && b.moveEndFile()
      }
    } catch (e) {
      RAONKUPLOAD.logMode && console && console.log(e)
    }
  };
  RAONKUPLOAD.AddFormData = function (a, c, b) {
    try {
      var e = RAONKUPLOAD.util._setRaonKUploader(b);
      if (e) {
        KUPLOADTOP.G_CURRKUPLOADER = e;
        var f = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
        if (f && a && "" != a && null != c && void 0 != c) {
          c = c.toString();
          var d =
              f.G_FormData, k = d.length;
          b = !0;
          for (e = 0; e < k; e++) {
            if (d[e].form_name.toLowerCase()
                == a.toLowerCase()) {
              d[e].form_value = c;
              b = !1;
              break
            }
          }
          b && f.G_FormData.push({form_name: a, form_value: c})
        }
      }
    } catch (l) {
      RAONKUPLOAD.logMode && console && console.log(l)
    }
  };
  RAONKUPLOAD.SetSelectFile = function (a, c, b) {
    try {
      var e = RAONKUPLOAD.util._setRaonKUploader(b);
      if (e) {
        KUPLOADTOP.G_CURRKUPLOADER = e;
        var f = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
        if (f && !isNaN(Number(a)) && !isNaN(Number(c)) && "" != a.toString()
            && "" != c.toString()) {
          if (-1 == Number(a) && -1 == Number(c) &&
          (c = 0), -1 != Number(c)) {
            f.setSelectFile(parseInt(a, 10), parseInt(c, 10));
            try {
              if (a = parseInt(a, 10), -1 < a) {
                for (var d = f.document.getElementById("file_list"),
                    k = RAONKUPLOAD.util.htmlCollectionToArray(
                        d.getElementsByTagName("input")), l = k.length - 1;
                    0 <= l; l--) {
                  "checkbox" == k[l].getAttribute("type")
                  && k[l].getAttribute("id") && 0 == k[l].getAttribute(
                      "id").indexOf("chk_file") || k.splice(l, 1);
                }
                var m = k[a].getAttribute("listvalue");
                if (f.RESULTFILELIST[m]) {
                  c = null;
                  "0" == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager
                  && (c = f.RESULTFILELIST[m].file);
                  b = "";
                  "1" == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager && ""
                  != f.RESULTFILELIST[m].localPath
                  && (b = KUPLOADTOP.RAONKSolution.managerFinalUrl + "/"
                      + encodeURIComponent(f.RESULTFILELIST[m].localPath));
                  var p = {
                    isWebFile: f.RESULTFILELIST[m].isWebFile,
                    strLocalPath: f.RESULTFILELIST[m].localPath,
                    strWebPath: f.RESULTFILELIST[m].webPath,
                    nFileSize: f.RESULTFILELIST[m].fileSize,
                    strOriginalName: f.RESULTFILELIST[m].originName,
                    strExtension: f.RESULTFILELIST[m].fileExt,
                    nIndex: a,
                    strUniqkey: f.RESULTFILELIST[m].fileIdx,
                    strCustomValue: f.RESULTFILELIST[m].customValue,
                    strPreviewUrl: b,
                    objFile: c
                  };
                  "function"
                  === typeof KUPLOADTOP.G_CURRKUPLOADER._config.event.selectItem
                      ? KUPLOADTOP.G_CURRKUPLOADER._config.event.selectItem(
                          KUPLOADTOP.G_CURRKUPLOADER.ID, p) : "function"
                      === typeof KUPLOADTOP.KUPLOADWIN.RAONKUPLOAD_SelectItem
                      && KUPLOADTOP.KUPLOADWIN.RAONKUPLOAD_SelectItem(
                          KUPLOADTOP.G_CURRKUPLOADER.ID, p)
                }
              }
            } catch (q) {
              RAONKUPLOAD.logMode && console && console.log(q)
            }
          } else {
            0 <= Number(a) && f.setUnselectFile(parseInt(a, 10))
          }
        }
      }
    } catch (n) {
      RAONKUPLOAD.logMode && console && console.log(n)
    }
  };
  RAONKUPLOAD.SetSelectFileEx =
      function (a, c, b) {
        try {
          var e = RAONKUPLOAD.util._setRaonKUploader(b);
          if (e) {
            KUPLOADTOP.G_CURRKUPLOADER = e;
            var f = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
            if (f && (a = a.toString(), !isNaN(Number(c)) && ""
            != c.toString())) {
              if (-1 != Number(c)) {
                f.setSelectFileEx(a, parseInt(c, 10));
                try {
                  if ("" != a) {
                    var d = f.RESULTFILELIST.length;
                    if (0 < d) {
                      c = null;
                      for (var k = e = b = 0; k < d; k++) {
                        "y"
                        != f.RESULTFILELIST[k].isDelete && ("y"
                        == f.RESULTFILELIST[k].isWebFile
                        && f.RESULTFILELIST[k].fileIdx == a
                        && (c = k, b = e), e++);
                      }
                      if (null != c && f.RESULTFILELIST[c]) {
                        a = null;
                        "0" ==
                        KUPLOADTOP.G_CURRKUPLOADER._config.useKManager
                        && (a = f.RESULTFILELIST[c].file);
                        d = "";
                        "1" == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager
                        && "" != f.RESULTFILELIST[c].localPath
                        && (d = KUPLOADTOP.RAONKSolution.managerFinalUrl + "/"
                            + encodeURIComponent(
                                f.RESULTFILELIST[c].localPath));
                        var l = {
                          isWebFile: f.RESULTFILELIST[c].isWebFile,
                          strLocalPath: f.RESULTFILELIST[c].localPath,
                          strWebPath: f.RESULTFILELIST[c].webPath,
                          nFileSize: f.RESULTFILELIST[c].fileSize,
                          strOriginalName: f.RESULTFILELIST[c].originName,
                          strExtension: f.RESULTFILELIST[c].fileExt,
                          nIndex: b,
                          strUniqkey: f.RESULTFILELIST[c].fileIdx,
                          strCustomValue: f.RESULTFILELIST[c].customValue,
                          strPreviewUrl: d,
                          objFile: a
                        };
                        "function"
                        === typeof KUPLOADTOP.G_CURRKUPLOADER._config.event.selectItem
                            ? KUPLOADTOP.G_CURRKUPLOADER._config.event.selectItem(
                                KUPLOADTOP.G_CURRKUPLOADER.ID, l) : "function"
                            === typeof KUPLOADTOP.KUPLOADWIN.RAONKUPLOAD_SelectItem
                            && KUPLOADTOP.KUPLOADWIN.RAONKUPLOAD_SelectItem(
                                KUPLOADTOP.G_CURRKUPLOADER.ID, l)
                      }
                    }
                  }
                } catch (m) {
                  RAONKUPLOAD.logMode && console && console.log(m)
                }
              } else {
                f.setUnselectFileEx(a)
              }
            }
          }
        } catch (p) {
          RAONKUPLOAD.logMode &&
          console && console.log(p)
        }
      };
  RAONKUPLOAD.SetFileCustomValue = function (a, c, b) {
    try {
      var e = RAONKUPLOAD.util._setRaonKUploader(b);
      if (e) {
        KUPLOADTOP.G_CURRKUPLOADER = e;
        var f = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
        f && (isNaN(Number(a)) || "" == a.toString() || f.setFileCustomValue(
            parseInt(a, 10), c))
      }
    } catch (d) {
      RAONKUPLOAD.logMode && console && console.log(d)
    }
  };
  RAONKUPLOAD.AddLocalFileDirectly = function (a, c, b) {
    if (void 0 != a && "" != a) {
      try {
        var e = null, f = null, d = "";
        void 0 == b ? "string" == typeof c ? b = c : "object" == typeof c
            ? (f = c.size, e = c.callback,
                d = c.customValue) : e = c : "object" == typeof c
            ? (f = c.size, e = c.callback, d = c.customValue) : e = c;
        var k = RAONKUPLOAD.util._setRaonKUploader(b);
        if (k && (KUPLOADTOP.G_CURRKUPLOADER = k, "1"
        == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager)) {
          var l = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
          if (l) {
            if (f) {
              var m = {
                name: l.getFileName(a, !1),
                type: "",
                uniqValue: "",
                isFolder: "0",
                localPath: a,
                size: KUPLOADTOP.RAONKUPLOAD.util.parseIntOr0(f),
                subFolderCount: "",
                fileCount: ""
              };
              l.fileHandler([m], "", d);
              if ("function" === typeof e) {
                var p = setInterval(function () {
                  if (0 ==
                      l.G_FileHandlerProcessingFlag) {
                    var a = {strUploadId: k.ID, strPath: m.localPath};
                    clearInterval(p);
                    e(a)
                  }
                }, 1)
              }
            } else {
              c = [["kcmd", "KC10"]];
              c.push(["kp1", encodeURIComponent(a)]);
              var q = l.setManagerParam("{}", c),
                  q = KUPLOADTOP.RAONKSolution.Agent.makeEncryptManagerParam(q),
                  n = function (b) {
                    b = KUPLOADTOP.RAONKSolution.Agent.parseRtn(b);
                    var c = b.code;
                    b = b.valueArr;
                    if (1E3 == c) {
                      if (b[0] == "_"
                          + KUPLOADTOP.RAONKSolution.Agent.formfeed) {
                        var f = {
                          strType: "",
                          strCode: "C100",
                          strMessage: "File is not found"
                        };
                        if ("function"
                            === typeof KUPLOADTOP.G_CURRKUPLOADER._config.event.onError) {
                          KUPLOADTOP.G_CURRKUPLOADER._config.event.onError(
                              KUPLOADTOP.G_CURRKUPLOADER.ID,
                              f);
                        } else {
                          "function"
                          === typeof KUPLOADTOP.KUPLOADWIN.RAONKUPLOAD_OnError
                              ? KUPLOADTOP.KUPLOADWIN.RAONKUPLOAD_OnError(
                                  KUPLOADTOP.G_CURRKUPLOADER.ID, f) : alert(
                                  "Error Code : " + f.strCode + "\nError Message : "
                                  + f.strMessage)
                        }
                      } else {
                        f = l.getFileName(a, !1);
                        if (0 >= RAONKUPLOAD.util.compareVersion(
                            KUPLOADTOP.RAONKUPLOAD.util.getRV(
                                KUPLOADTOP.G_CURRKUPLOADER.av),
                            KUPLOADTOP.RAONKUPLOAD.util.makeARV({
                              maj: [20, "18"],
                              l: "36",
                              mi1: 0,
                              mi2: "2"
                            }))) {
                          var m = {
                            name: f,
                            type: "",
                            uniqValue: "",
                            isFolder: "0",
                            localPath: a,
                            size: KUPLOADTOP.RAONKUPLOAD.util.parseIntOr0(b[0]),
                            subFolderCount: "",
                            fileCount: ""
                          };
                        } else {
                          b = b[0].split(
                              KUPLOADTOP.RAONKSolution.Agent.formfeed), m = {
                            name: f,
                            type: "",
                            uniqValue: "",
                            isFolder: "0",
                            localPath: a,
                            size: KUPLOADTOP.RAONKUPLOAD.util.parseIntOr0(b[0]),
                            subFolderCount: "",
                            fileCount: "",
                            lastModifiedDate: b[2],
                            type: b[1]
                          };
                        }
                        l.fileHandler([m], "", d);
                        if ("function" === typeof e) {
                          var p = setInterval(
                              function () {
                                if (0 == l.G_FileHandlerProcessingFlag) {
                                  var a = {
                                    strUploadId: k.ID,
                                    strPath: m.localPath
                                  };
                                  clearInterval(p);
                                  e(a)
                                }
                              }, 1)
                        }
                      }
                      l.displayCommonReady(!1, KUPLOADTOP.G_CURRKUPLOADER)
                    } else if (2E3 ==
                        c) {
                      try {
                        if (f = {
                          strType: "",
                          strCode: "C100",
                          strMessage: b[0]
                        }, "function"
                        === typeof KUPLOADTOP.G_CURRKUPLOADER._config.event.onError) {
                          KUPLOADTOP.G_CURRKUPLOADER._config.event.onError(
                              KUPLOADTOP.G_CURRKUPLOADER.ID, f);
                        } else {
                          "function"
                          === typeof KUPLOADTOP.KUPLOADWIN.RAONKUPLOAD_OnError
                              ? KUPLOADTOP.KUPLOADWIN.RAONKUPLOAD_OnError(
                                  KUPLOADTOP.G_CURRKUPLOADER.ID, f) : alert(
                                  "Error Code : " + f.strCode + "\nError Message : "
                                  + f.strMessage)
                        }
                      } catch (r) {
                        RAONKUPLOAD.logMode && console && console.log(r)
                      }
                      l.displayCommonReady(!1, KUPLOADTOP.G_CURRKUPLOADER)
                    } else {
                      2001 ==
                      c && l.sendMessageToAgent(q, n, t, !1)
                    }
                  }, t = function (a) {
                    KUPLOADTOP.G_CURRKUPLOADER._config.sendToManagerType = "2";
                    l.sendMessageToAgent(q, n, null, !1)
                  };
              l.displayCommonReady(!0, KUPLOADTOP.G_CURRKUPLOADER);
              l.sendMessageToAgent(q, n, t, !1)
            }
          }
        }
      } catch (r) {
        RAONKUPLOAD.logMode && console && console.log(r)
      }
    }
  };
  RAONKUPLOAD.AddLocalFileDirectlyEx = function (a, c, b) {
    try {
      var e = RAONKUPLOAD.util._setRaonKUploader(b);
      if (e) {
        KUPLOADTOP.G_CURRKUPLOADER = e;
        var f = [];
        b = [];
        var d = 0, k = {message: "", fileList: []}, l = 0, m = [];
        null != a && void 0 != a && a.hasOwnProperty("setSize") ?
            (d = a.setSize, l = a.arrFileList.length, a = a.arrFileList)
            : l = a.length;
        if (null == a || void 0 == a || 0 == l) {
          if (k.message = "No file path.", "function" === typeof c) {
            var p = {
              strUploadId: e.ID,
              arrPath: null,
              arrErrorFlag: null,
              objError: k
            };
            c(p)
          }
        } else if ("upload"
            != KUPLOADTOP.G_CURRKUPLOADER._config.mode) {
          k.message = "It does not work in view mode.", "function"
          === typeof c && (p = {
            strUploadId: e.ID,
            arrPath: null,
            arrErrorFlag: null,
            objError: k
          }, c(p));
        } else {
          for (p = 0; p < l; p++) {
            null != a[p].path && void 0 != a[p].path && ""
            != a[p].path && (f[p] = a[p].path),
            null != a[p].size && void 0 != a[p].size && "" != a[p].size
            && (b[p] = a[p].size), null != a[p].customValue && void 0
            != a[p].customValue && "" !== a[p].customValue
            && (m[p] = a[p].customValue);
          }
          if ("1" == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager) {
            var q = [], n = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
            if (n) {
              if (0 == d && null != b && 0 != b.length) {
                for (p = 0; p < l; p++) {
                  var t = {
                    name: n.getFileName(f[p], !1),
                    type: "",
                    uniqValue: "",
                    isFolder: "0",
                    localPath: f[p],
                    size: KUPLOADTOP.RAONKUPLOAD.util.parseIntOr0(b[p]),
                    subFolderCount: "",
                    fileCount: "",
                    customValue: null !=
                    m & 0 != m.length ? m[p] : ""
                  };
                  q.push(t)
                }
                n.fileHandler(q, "", "");
                if ("function" === typeof c) {
                  var r = setInterval(function () {
                    if (0 == n.G_FileHandlerProcessingFlag) {
                      var a = {
                        strUploadId: e.ID,
                        arrPath: f,
                        arrErrorFlag: null,
                        objError: null
                      };
                      clearInterval(r);
                      c(a)
                    }
                  }, 1)
                }
              } else {
                a = "";
                for (p = 0; p < l; p++) {
                  a += f[p], a = p != l - 1 ? a
                      + KUPLOADTOP.RAONKSolution.Agent.formfeed : a
                      + KUPLOADTOP.RAONKSolution.Agent.vertical;
                }
                t = [["kcmd", "KC10"]];
                t.push(["kp1", encodeURIComponent(a)]);
                var g = n.setManagerParam("{}", t),
                    g = KUPLOADTOP.RAONKSolution.Agent.makeEncryptManagerParam(
                        g),
                    v = function (a) {
                      a = KUPLOADTOP.RAONKSolution.Agent.parseRtn(a);
                      var b = a.code;
                      a = a.valueArr;
                      var d = !1;
                      if (1E3 == b) {
                        var B = [];
                        if (0 >= RAONKUPLOAD.util.compareVersion(
                            KUPLOADTOP.RAONKUPLOAD.util.getRV(
                                KUPLOADTOP.G_CURRKUPLOADER.av),
                            KUPLOADTOP.RAONKUPLOAD.util.makeARV({
                              maj: [20, "18"],
                              l: "36",
                              mi1: 0,
                              mi2: "2"
                            }))) {
                          for (var p = a[0].split(
                              KUPLOADTOP.RAONKSolution.Agent.formfeed), b = 0;
                              b < l; b++) {
                            B.push(!1);
                            var r = n.getFileName(f[b], !1), r = {
                              name: r,
                              type: "",
                              uniqValue: "",
                              isFolder: "0",
                              localPath: f[b],
                              size: KUPLOADTOP.RAONKUPLOAD.util.parseIntOr0(
                                  p[b]),
                              subFolderCount: "",
                              fileCount: "",
                              customValue: null != m & 0 != m.length ? m[b] : ""
                            };
                            q.push(r)
                          }
                        } else {
                          for (b = 0; b < l; b++) {
                            a[b] == "_"
                            + KUPLOADTOP.RAONKSolution.Agent.formfeed ? (B.push(
                                !0), d = !0, k.fileList.push({
                              index: b,
                              path: f[b],
                              customValue: null != m & 0 != m.length ? m[b] : ""
                            })) : (B.push(!1), r = n.getFileName(f[b],
                                !1), p = a[b].split(
                                KUPLOADTOP.RAONKSolution.Agent.formfeed), r = {
                              name: r,
                              type: "",
                              uniqValue: "",
                              isFolder: "0",
                              localPath: f[b],
                              size: KUPLOADTOP.RAONKUPLOAD.util.parseIntOr0(
                                  p[0]),
                              subFolderCount: "",
                              fileCount: "",
                              lastModifiedDate: p[2],
                              type: p[1],
                              customValue: null != m & 0 != m.length ? m[b] : ""
                            }, q.push(r));
                          }
                          if (d) {
                            if (p = {
                              strType: "",
                              strCode: "C100",
                              strMessage: k.fileList.length
                                  + " Files not found",
                              arrErrorFileList: k.fileList
                            }, "function"
                            === typeof KUPLOADTOP.G_CURRKUPLOADER._config.event.onError) {
                              KUPLOADTOP.G_CURRKUPLOADER._config.event.onError(
                                  KUPLOADTOP.G_CURRKUPLOADER.ID, p);
                            } else {
                              "function"
                              === typeof KUPLOADTOP.KUPLOADWIN.RAONKUPLOAD_OnError
                                  ? KUPLOADTOP.KUPLOADWIN.RAONKUPLOAD_OnError(
                                      KUPLOADTOP.G_CURRKUPLOADER.ID, p) : alert(
                                      "Error Code : " + p.strCode
                                      + "\nError Message : " +
                                      p.strMessage)
                            }
                          }
                        }
                        if (0 < q.length) {
                          if (n.fileHandler(q, "", ""), "function"
                          === typeof c) {
                            var t = setInterval(function () {
                              if (0 == n.G_FileHandlerProcessingFlag) {
                                d ? k.message = "File is not found" : k = null;
                                var a = {
                                  strUploadId: e.ID,
                                  arrPath: f,
                                  arrErrorFlag: B,
                                  objError: k
                                };
                                clearInterval(t);
                                c(a)
                              }
                            }, 1)
                          }
                        } else {
                          n.displayCommonReady(!1,
                              KUPLOADTOP.G_CURRKUPLOADER)
                        }
                      } else if (2E3 == b) {
                        try {
                          if (p = {
                            strType: "",
                            strCode: "C100",
                            strMessage: a[0]
                          }, "function"
                          === typeof KUPLOADTOP.G_CURRKUPLOADER._config.event.onError) {
                            KUPLOADTOP.G_CURRKUPLOADER._config.event.onError(
                                KUPLOADTOP.G_CURRKUPLOADER.ID,
                                p);
                          } else {
                            "function"
                            === typeof KUPLOADTOP.KUPLOADWIN.RAONKUPLOAD_OnError
                                ? KUPLOADTOP.KUPLOADWIN.RAONKUPLOAD_OnError(
                                    KUPLOADTOP.G_CURRKUPLOADER.ID, p) : alert(
                                    "Error Code : " + p.strCode
                                    + "\nError Message : " + p.strMessage)
                          }
                        } catch (z) {
                          RAONKUPLOAD.logMode && console && console.log(z)
                        }
                        n.displayCommonReady(!1, KUPLOADTOP.G_CURRKUPLOADER)
                      } else {
                        2001 == b && n.sendMessageToAgent(g, v, u, !0)
                      }
                    }, u = function (a) {
                      KUPLOADTOP.G_CURRKUPLOADER._config.sendToManagerType = "2";
                      n.sendMessageToAgent(g, v, null, !0)
                    };
                n.displayCommonReady(!0, KUPLOADTOP.G_CURRKUPLOADER);
                n.sendMessageToAgent(g, v, u, !0)
              }
            }
          }
        }
      }
    } catch (w) {
      RAONKUPLOAD.logMode && console && console.log(w)
    }
  };
  RAONKUPLOAD.AddLocalFileDirectlyExWithCallback = function (a, c, b) {
    var e = a && a.fileDataArray ? a.fileDataArray : void 0, f = null;
    a = !0 === a.setSize;
    var d = [], k = [], l = function (a, b, c) {
      null == f && (f = {data: []});
      f.data.push({type: a, index: b, reason: c})
    }, m = function () {
      "function" === typeof c && c(f)
    }, p = function (a) {
      for (var b = a.length, c = 0; c < b; c++) {
        var g = a[c];
        if (g) {
          var e = g._realIndex;
          try {
            delete g._realIndex
          } catch (f) {
            RAONKUPLOAD.logMode && console &&
            console.log(f)
          }
          d.push(g);
          k.push(e)
        }
      }
    };
    if (0 == ("object" == typeof e && "number" == typeof e.length) || 0
        == e.length) {
      l("error", -1, "file data does not exist"), m();
    } else {
      try {
        var q = RAONKUPLOAD.util._setRaonKUploader(b);
        if (q) {
          if (KUPLOADTOP.G_CURRKUPLOADER = q, "1"
          != q._config.useKManager) {
            l("error", -1,
                "It is not supported when not in Agent mode."), m();
          } else if ("upload"
              != q._config.mode) {
            l("error", -1,
                "It is not supported when not in upload mode."), m();
          } else {
            var n = [], t = [];
            b = "";
            var r = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
            if (r) {
              for (var g =
                  e.length, q = 0; q < g; q++) {
                var v = e[q].path, u = e[q].size,
                    w = "string" == typeof e[q].customValue ? e[q].customValue
                        : "";
                "string" == typeof u && (u = RAONKUPLOAD.util.parseIntOr0(u));
                if (0 == a && "number" == typeof u) {
                  var A = {
                    name: r.getFileName(v, !1),
                    type: "",
                    uniqValue: "",
                    isFolder: "0",
                    localPath: v,
                    size: KUPLOADTOP.RAONKUPLOAD.util.parseIntOr0(u),
                    subFolderCount: "",
                    fileCount: "",
                    customValue: w,
                    _realIndex: q
                  };
                  n[q] = A
                } else {
                  t.push({index: q, path: v, customValue: w}), b += v, b = q
                  != g - 1 ? b + KUPLOADTOP.RAONKSolution.Agent.formfeed : b
                      + KUPLOADTOP.RAONKSolution.Agent.vertical
                }
              }
              if (0 <
                  t.length) {
                e = [["kcmd", "KC10"]];
                e.push(["kp1", encodeURIComponent(b)]);
                var y = r.setManagerParam("{}", e),
                    y = RAONKSolution.Agent.makeEncryptManagerParam(y);
                r.displayCommonReady(!0, KUPLOADTOP.G_CURRKUPLOADER);
                r.sendMessageToAgent(y, function (a) {
                  a = KUPLOADTOP.RAONKSolution.Agent.parseRtn(a);
                  var b = a.code;
                  a = a.valueArr;
                  if (1E3 == b) {
                    for (b = 0; b < a.length; b++) {
                      var c = t[b].index, g = t[b].path, e = t[b].customValue;
                      if (a[b] == "_"
                          + KUPLOADTOP.RAONKSolution.Agent.formfeed) {
                        l(
                            "error", c, "could not get file size.");
                      } else {
                        var f = r.getFileName(g,
                                !1),
                            q = a[b].split(
                                KUPLOADTOP.RAONKSolution.Agent.formfeed),
                            g = {
                              name: f,
                              type: "",
                              uniqValue: "",
                              isFolder: "0",
                              localPath: g,
                              size: KUPLOADTOP.RAONKUPLOAD.util.parseIntOr0(
                                  q[0]),
                              subFolderCount: "",
                              fileCount: "",
                              lastModifiedDate: q[2],
                              type: q[1],
                              customValue: e,
                              _realIndex: c
                            };
                        n[c] = g
                      }
                    }
                    p(n);
                    0 < d.length ? r.fileHandler(d, "", "", void 0, {
                      realIndexArr: k, fn_callback: function (a) {
                        if (a) {
                          for (var b = 0; b < a.length; b++) {
                            l("filtered",
                                a[b].index, a[b].reason);
                          }
                        }
                        r.displayCommonReady(!1, KUPLOADTOP.G_CURRKUPLOADER);
                        m()
                      }
                    }) : (r.displayCommonReady(!1,
                        KUPLOADTOP.G_CURRKUPLOADER), m())
                  } else {
                    2E3 == b && (r.displayCommonReady(!1,
                        KUPLOADTOP.G_CURRKUPLOADER), l("error", -1,
                        "agent error"), m())
                  }
                }, function (a) {
                  l("error", -1, "agent error");
                  m()
                }, !0)
              } else {
                p(n), 0 < d.length ? r.fileHandler(d, "", "", void 0, {
                  realIndexArr: k, fn_callback: function (a) {
                    if (a) {
                      for (var b = 0; b < a.length; b++) {
                        l("filtered",
                            a[b].index, a[b].reason);
                      }
                    }
                    r.displayCommonReady(!1, KUPLOADTOP.G_CURRKUPLOADER);
                    m()
                  }
                }) : (r.displayCommonReady(!1, KUPLOADTOP.G_CURRKUPLOADER), m())
              }
            }
          }
        }
      } catch (C) {
        RAONKUPLOAD.logMode && console && console.log(C)
      }
    }
  };
  RAONKUPLOAD.AddLocalFileObject = function (a, c, b) {
    try {
      var e = RAONKUPLOAD.util._setRaonKUploader(b);
      if (e) {
        KUPLOADTOP.G_CURRKUPLOADER = e;
        var f = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
        if (f && 0 != f.isExecuteApi() && "object" == typeof a) {
          if ("VirtualFile" == a._type_name) {
            a = {
              type: "file",
              value: a.path,
              files: [a._handle]
            };
          } else if (0 < a.length && "VirtualFile" == a[0]._type_name) {
            tempFileObject = {type: "file", files: []};
            for (b = 0; b < a.length; b++) {
              tempFileObject.files.push(
                  a[b]._handle);
            }
            a = tempFileObject
          }
          "file" == a.type && "html5" == e._config.userRunTimeMode &&
          0 < a.files.length && f.fileHandler(a.files, a.value, c)
        }
      }
    } catch (d) {
      RAONKUPLOAD.logMode && console && console.log(d)
    }
  };
  RAONKUPLOAD.AddLocalFileObjectWithCallback = function (a, c, b) {
    a = a && a.fileDataArray ? a.fileDataArray : void 0;
    var e = null, f = function (a, b, c) {
      null == e && (e = {data: []});
      e.data.push({type: a, index: b, reason: c})
    }, d = function () {
      "function" === typeof c && c(e)
    };
    if (0 == ("object" === typeof a && "number" === typeof a.length) || 0
        == a.length) {
      f("error", -1, "file data does not exist"), d();
    } else {
      try {
        var k = RAONKUPLOAD.util._setRaonKUploader(b);
        if (k) {
          if (KUPLOADTOP.G_CURRKUPLOADER = k, "1"
          == k._config.useKManager) {
            f("error", -1,
                "It is not supported when in Agent mode."), d();
          } else if ("upload"
              != k._config.mode) {
            f("error", -1,
                "It is not supported when not in upload mode."), d();
          } else {
            var l = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
            if (l) {
              if (0 == l.isExecuteApi()) {
                f("error", -1,
                    "Other work is currently in progress."), d();
              } else {
                var m = a.length;
                b = [];
                for (var k = [], p = 0; p < m; p++) {
                  var q = a[p].object,
                      n = "string" == typeof a[p].customValue ? a[p].customValue
                          : "",
                      t = null;
                  if ("object" == typeof q) {
                    if ("VirtualFile" ==
                        q._type_name) {
                      t = {
                        type: "file",
                        value: q.path,
                        files: [q._handle]
                      };
                    } else if (0 < q.length && "VirtualFile"
                        == q[0]._type_name) {
                      for (var r = {type: "file", files: []}, g = 0;
                          g < q.length;
                          g++) {
                        r.files.push(q[g]._handle);
                      }
                      t = r
                    } else {
                      t = "file" != q.type && "number" == typeof q.size
                      && "string" == typeof q.name ? {type: "file", files: [q]}
                          : q;
                    }
                    if ("file" == t.type) {
                      var v = t.files.length;
                      if (0 < v) {
                        for (r = 0; r < v; r++) {
                          var u = t.files[r];
                          "" != n && (u.customValue = n);
                          b.push(u);
                          k.push(p)
                        }
                      }
                    } else {
                      f("error", currIndex, "Not supported file object type")
                    }
                  }
                }
                0 < b.length ? l.fileHandler(b,
                    "", "", void 0, {
                      realIndexArr: k, fn_callback: function (a) {
                        if (a) {
                          for (var b = 0; b < a.length; b++) {
                            f("filtered",
                                a[b].index, a[b].reason);
                          }
                        }
                        d()
                      }
                    }) : d()
              }
            }
          }
        }
      } catch (w) {
        RAONKUPLOAD.logMode && console && console.log(w)
      }
    }
  };
  RAONKUPLOAD.AddLocalFolderDirectly = RAONKUPLOAD.AddLocalFolderDirectlyEx = function (a,
      c, b) {
    if (void 0 != a && 0 != a.length) {
      try {
        var e = RAONKUPLOAD.util._setRaonKUploader(b);
        if (e && (KUPLOADTOP.G_CURRKUPLOADER = e, "1"
        == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager && "0"
        != KUPLOADTOP.G_CURRKUPLOADER._config.folderTransfer)) {
          void 0 ==
          c && (c = {});
          "string" == typeof a && (a = [a]);
          var f = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
          if (f) {
            b = [["kcmd", "KC10A"]];
            b.push(["kp1", encodeURIComponent(
                a.join(KUPLOADTOP.RAONKSolution.Agent.formfeed))]);
            b.push(["s09", KUPLOADTOP.RAONKUPLOAD.util.parseIntOr0(
                KUPLOADTOP.G_CURRKUPLOADER._config.getFolderInFile)]);
            var d = 0;
            1 == c.addFiles && (d = 1);
            b.push(["kp2", d]);
            var k = f.setManagerParam("{}", b),
                k = KUPLOADTOP.RAONKSolution.Agent.makeEncryptManagerParam(k),
                l = function (a) {
                  a = KUPLOADTOP.RAONKSolution.Agent.parseRtn(a);
                  var b =
                      a.code;
                  a = a.valueArr;
                  var p = [];
                  if (1E3 == b) {
                    if (a[0] == "_" + KUPLOADTOP.RAONKSolution.Agent.formfeed) {
                      var r = {
                        strType: "",
                        strCode: "C100",
                        strMessage: "Folder is not found"
                      };
                      if ("function"
                          === typeof KUPLOADTOP.G_CURRKUPLOADER._config.event.onError) {
                        KUPLOADTOP.G_CURRKUPLOADER._config.event.onError(
                            KUPLOADTOP.G_CURRKUPLOADER.ID, r);
                      } else {
                        "function"
                        === typeof KUPLOADTOP.KUPLOADWIN.RAONKUPLOAD_OnError
                            ? KUPLOADTOP.KUPLOADWIN.RAONKUPLOAD_OnError(
                                KUPLOADTOP.G_CURRKUPLOADER.ID, r) : alert(
                                "Error Code : " + r.strCode + "\nError Message : " +
                                r.strMessage)
                      }
                    } else {
                      for (var r = [], b = a.length, g = 0; g < b; g++) {
                        var v = a[g].split(
                            KUPLOADTOP.RAONKSolution.Agent.formfeed), u = "";
                        0 == d ? (u = v[1].lastIndexOf(
                                KUPLOADTOP.RAONKUPLOAD.UserAgent.osSeparator), u = u
                            == v[1].length - 1 ? v[1].substring(0, u - 1) : v[1])
                            : u = v[1];
                        u = f.getFileName(u);
                        u = {
                          name: u,
                          type: "",
                          uniqValue: "",
                          isFolder: 0 == d ? "1" : "2",
                          localPath: v[1],
                          size: KUPLOADTOP.RAONKUPLOAD.util.parseIntOr0(v[2]),
                          subFolderCount: "",
                          fileCount: "",
                          logicalPath: ""
                        };
                        if (0 == d) {
                          u.localPath += KUPLOADTOP.RAONKUPLOAD.UserAgent.osSeparator;
                          u.subFolderCount =
                              KUPLOADTOP.RAONKUPLOAD.util.parseIntOr0(v[3]);
                          u.fileCount = KUPLOADTOP.RAONKUPLOAD.util.parseIntOr0(
                              v[4]);
                          u.logicalPath = v[1];
                          var w = v[1].split(
                              KUPLOADTOP.RAONKUPLOAD.UserAgent.osSeparator);
                          u.rootFolderName = w[w.length - 1];
                          u.folderIdx = f.FOLDERLISTINFO.length;
                          f.FOLDERLISTINFO[u.folderIdx] = [];
                          if (v[7]) {
                            for (var w = v[7].split(
                                    KUPLOADTOP.RAONKSolution.Agent.backspace),
                                A = w.length, y = 0; y < A; y++) {
                              var C = v[1];
                              0 == w[y].indexOf(v[1]) && (C = u.rootFolderName
                                  + "/"
                                  + w[y].substring(v[1].length + 1).replace(
                                      /\\/g,
                                      "/"), C = C.substring(0,
                                  C.lastIndexOf("/")));
                              C = {
                                uploadName: "",
                                uploadPath: "",
                                logicalPath: C,
                                originName: f.getFileName(w[y], !1),
                                fileSize: "",
                                customValue: "",
                                localPath: w[y],
                                lastModifiedDate: "",
                                mimeType: "",
                                hashValue: ""
                              };
                              f.FOLDERLISTINFO[u.folderIdx].push(C)
                            }
                          }
                        } else {
                          u.lastModifiedDate = v[2], u.type = v[1];
                        }
                        p.push(v[1]);
                        r.push(u)
                      }
                      if (0 < r.length && (f.fileHandler(r, "", ""), "function"
                      === typeof c.callback)) {
                        var B = setInterval(function () {
                          if (0 == f.G_FileHandlerProcessingFlag) {
                            var a = {strUploadId: e.ID, strPath: p};
                            clearInterval(B);
                            c.callback(a)
                          }
                        }, 1)
                      }
                    }
                    f.displayCommonReady(!1,
                        KUPLOADTOP.G_CURRKUPLOADER)
                  } else if (2E3 == b) {
                    try {
                      if (r = {
                        strType: "",
                        strCode: "C100",
                        strMessage: a[0]
                      }, "function"
                      === typeof KUPLOADTOP.G_CURRKUPLOADER._config.event.onError) {
                        KUPLOADTOP.G_CURRKUPLOADER._config.event.onError(
                            KUPLOADTOP.G_CURRKUPLOADER.ID, r);
                      } else {
                        "function"
                        === typeof KUPLOADTOP.KUPLOADWIN.RAONKUPLOAD_OnError
                            ? KUPLOADTOP.KUPLOADWIN.RAONKUPLOAD_OnError(
                                KUPLOADTOP.G_CURRKUPLOADER.ID, r) : alert(
                                "Error Code : " + r.strCode + "\nError Message : "
                                + r.strMessage)
                      }
                    } catch (x) {
                      RAONKUPLOAD.logMode && console && console.log(x)
                    }
                    f.displayCommonReady(!1,
                        KUPLOADTOP.G_CURRKUPLOADER)
                  } else {
                    2001 == b && f.sendMessageToAgent(k, l, m, !1)
                  }
                }, m = function (a) {
                  KUPLOADTOP.G_CURRKUPLOADER._config.sendToManagerType = "2";
                  f.sendMessageToAgent(k, l, null, !1)
                };
            f.displayCommonReady(!0, KUPLOADTOP.G_CURRKUPLOADER);
            f.sendMessageToAgent(k, l, m, !1)
          }
        }
      } catch (p) {
        RAONKUPLOAD.logMode && console && console.log(p)
      }
    }
  };
  RAONKUPLOAD.AddLocalFolderDirectlyExWithCallback = function (a, c, b) {
    var e = a && a.folderDataArray ? a.folderDataArray : void 0, f = null,
        d = !0 === a.addFiles, k = function (a, b, c) {
          null == f && (f = {data: []});
          f.data.push({type: a, index: b, reason: c})
        }, l = function () {
          "function" === typeof c && c(f)
        };
    if (0 == ("object" === typeof e && "number" === typeof e.length) || 0
        == e.length) {
      k("error", -1,
          "folder data does not exist"), l();
    } else {
      try {
        var m = RAONKUPLOAD.util._setRaonKUploader(b);
        if (m) {
          if (KUPLOADTOP.G_CURRKUPLOADER = m, "1"
          != m._config.useKManager) {
            k("error", -1,
                "It is not supported when not in Agent mode."), l();
          } else if ("upload"
              != m._config.mode) {
            k("error", -1,
                "It is not supported when not in upload mode."), l();
          } else if ("0"
              == m._config.folderTransfer) {
            k("error",
                -1,
                "It is not supported when not in folder transfer setting."), l();
          } else {
            var p = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
            if (p) {
              var q = [], n = e.length;
              for (a = 0; a < n; a++) {
                var t = e[a].path,
                    r = t.lastIndexOf(RAONKUPLOAD.UserAgent.osSeparator);
                r == t.length - 1 && (t = t.substring(0, r));
                q.push(t)
              }
              n = [["kcmd", "KC10A"]];
              n.push(["kp1",
                encodeURIComponent(q.join(RAONKSolution.Agent.formfeed))]);
              n.push(["s09", KUPLOADTOP.RAONKUPLOAD.util.parseIntOr0(
                  m._config.getFolderInFile)]);
              var g = 0;
              1 == d && (g = 1);
              n.push(["kp2", g]);
              var v = p.setManagerParam("{}",
                      n),
                  v = KUPLOADTOP.RAONKSolution.Agent.makeEncryptManagerParam(v);
              p.displayCommonReady(!0, KUPLOADTOP.G_CURRKUPLOADER);
              p.sendMessageToAgent(v, function (a) {
                a = KUPLOADTOP.RAONKSolution.Agent.parseRtn(a);
                var b = a.code;
                a = a.valueArr;
                if (1E3 == b) {
                  var b = [], c = [], f = a.length, B = !1;
                  !0 !== d && f != e.length && (B = !0);
                  for (var m = 0; m < f; m++) {
                    var n = a[m].split(KUPLOADTOP.RAONKSolution.Agent.formfeed),
                        r = !0, u = n[1];
                    B && (q[0] != u && (r = !1, k("error", m,
                        "Folder is not found."), m--), q.splice(0, 1));
                    if (r) {
                      r = u;
                      0 == g ? (r = u.lastIndexOf(
                              KUPLOADTOP.RAONKUPLOAD.UserAgent.osSeparator),
                              r = r == u.length - 1 ? u.substring(0, r) : u)
                          : r = u;
                      r = p.getFileName(r);
                      r = {
                        name: r,
                        type: "",
                        uniqValue: "",
                        isFolder: 0 == g ? "1" : "2",
                        localPath: u,
                        size: KUPLOADTOP.RAONKUPLOAD.util.parseIntOr0(n[2]),
                        subFolderCount: "",
                        fileCount: "",
                        logicalPath: ""
                      };
                      if (0 == g) {
                        r.localPath += KUPLOADTOP.RAONKUPLOAD.UserAgent.osSeparator;
                        r.subFolderCount = KUPLOADTOP.RAONKUPLOAD.util.parseIntOr0(
                            n[3]);
                        r.fileCount = KUPLOADTOP.RAONKUPLOAD.util.parseIntOr0(
                            n[4]);
                        r.logicalPath = u;
                        var t = u.split(
                            KUPLOADTOP.RAONKUPLOAD.UserAgent.osSeparator);
                        r.rootFolderName =
                            t[t.length - 1];
                        r.folderIdx = p.FOLDERLISTINFO.length;
                        p.FOLDERLISTINFO[r.folderIdx] = [];
                        if (n[7]) {
                          for (var n = n[7].split(
                                  KUPLOADTOP.RAONKSolution.Agent.backspace),
                              t = n.length,
                              v = 0; v < t; v++) {
                            var D = u;
                            0 == n[v].indexOf(u) && (D = r.rootFolderName + "/"
                                + n[v].substring(u.length + 1).replace(/\\/g,
                                    "/"), D = D.substring(0,
                                D.lastIndexOf("/")));
                            D = {
                              uploadName: "",
                              uploadPath: "",
                              logicalPath: D,
                              originName: p.getFileName(n[v], !1),
                              fileSize: "",
                              customValue: "",
                              localPath: n[v],
                              lastModifiedDate: "",
                              mimeType: "",
                              hashValue: ""
                            };
                            p.FOLDERLISTINFO[r.folderIdx].push(D)
                          }
                        }
                      } else {
                        r.lastModifiedDate =
                            n[2], r.type = n[1];
                      }
                      b.push(r);
                      c.push(m)
                    }
                  }
                  0 < b.length ? p.fileHandler(b, "", "", void 0, {
                    realIndexArr: c, fn_callback: function (a) {
                      if (a) {
                        for (var b = 0; b < a.length; b++) {
                          k("filtered",
                              a[b].index, a[b].reason);
                        }
                      }
                      p.displayCommonReady(!1, KUPLOADTOP.G_CURRKUPLOADER);
                      l()
                    }
                  }) : (p.displayCommonReady(!1,
                      KUPLOADTOP.G_CURRKUPLOADER), l())
                } else {
                  2E3 == b && (p.displayCommonReady(!1,
                      KUPLOADTOP.G_CURRKUPLOADER), k("error", -1,
                      "agent error"), l())
                }
              }, function (a) {
                k("error", -1, "agent error");
                l()
              }, !1)
            }
          }
        }
      } catch (u) {
        RAONKUPLOAD.logMode && console && console.log(u)
      }
    }
  };
  RAONKUPLOAD.SaveAndOpen = function (a) {
    try {
      var c = RAONKUPLOAD.util._setRaonKUploader(a);
      c
      && (KUPLOADTOP.G_CURRKUPLOADER = c, KUPLOADTOP.G_CURRKUPLOADER.frameWin.saveAndOpenEx(
          null, !0))
    } catch (b) {
      RAONKUPLOAD.logMode && console && console.log(b)
    }
  };
  RAONKUPLOAD.SaveAndFolderOpen = function (a) {
    try {
      var c = RAONKUPLOAD.util._setRaonKUploader(a);
      c
      && (KUPLOADTOP.G_CURRKUPLOADER = c, KUPLOADTOP.G_CURRKUPLOADER.frameWin.saveAndFolderOpenEx(
          null, !0))
    } catch (b) {
      RAONKUPLOAD.logMode && console && console.log(b)
    }
  };
  RAONKUPLOAD.PrintSelectedFile =
      function (a) {
        try {
          var c = RAONKUPLOAD.util._setRaonKUploader(a);
          c
          && (KUPLOADTOP.G_CURRKUPLOADER = c, KUPLOADTOP.G_CURRKUPLOADER.frameWin.printFileEx(
              null, !0))
        } catch (b) {
          RAONKUPLOAD.logMode && console && console.log(b)
        }
      };
  RAONKUPLOAD.DoSelectFolder = function (a) {
    try {
      var c = RAONKUPLOAD.util._setRaonKUploader(a);
      c
      && (KUPLOADTOP.G_CURRKUPLOADER = c, KUPLOADTOP.G_CURRKUPLOADER.frameWin.selectFile(
          null, !0))
    } catch (b) {
      RAONKUPLOAD.logMode && console && console.log(b)
    }
  };
  RAONKUPLOAD.AddHttpHeader = function (a, c, b) {
    try {
      var e = RAONKUPLOAD.util._setRaonKUploader(b);
      e && (KUPLOADTOP.G_CURRKUPLOADER = e, KUPLOADTOP.G_CURRKUPLOADER.frameWin
      && (e.tempHttpHeaderObj[a] = c))
    } catch (f) {
      RAONKUPLOAD.logMode && console && console.log(f)
    }
  };
  RAONKUPLOAD.AddKMonitorHttpHeader = function (a, c, b) {
    try {
      var e = RAONKUPLOAD.util._setRaonKUploader(b);
      e && (KUPLOADTOP.G_CURRKUPLOADER = e, KUPLOADTOP.G_CURRKUPLOADER.frameWin
      && (e.tempKMonitorHttpHeaderObj[a] = c))
    } catch (f) {
      RAONKUPLOAD.logMode && console && console.log(f)
    }
  };
  RAONKUPLOAD.setSize = RAONKUPLOAD.SetSize = function (a, c, b) {
    if ("" != a && "" != c) {
      try {
        var e = RAONKUPLOAD.util._setRaonKUploader(b);
        if (e) {
          KUPLOADTOP.G_CURRKUPLOADER = e;
          var f = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
          f && (a = a.toString(), c = c.toString(), f.setUploadSize(a, c, !0))
        }
      } catch (d) {
        RAONKUPLOAD.logMode && console && console.log(d)
      }
    }
  };
  RAONKUPLOAD.SetConfig = function (a, c, b) {
    try {
      var e = RAONKUPLOAD.util._setRaonKUploader(b);
      if (e) {
        KUPLOADTOP.G_CURRKUPLOADER = e;
        var f = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
        if (f) {
          var d = RAONKUPLOAD.util.firstChartoLower(a, !0), k = d.split("."),
              l = k.length, m = e._config;
          for (a = 0; a < l; a++) {
            a == l - 1
            && (k[a] = RAONKUPLOAD.util.firstChartoLower(k[a]),
                m[k[a]] = c), m = m[k[a]];
          }
          f.setExtraConfig(d, c, e)
        }
      }
    } catch (p) {
      RAONKUPLOAD.logMode && console && console.log(p)
    }
  };
  RAONKUPLOAD.GetConfig = function (a, c) {
    try {
      var b = RAONKUPLOAD.util._setRaonKUploader(c), e = null;
      if (b
          && (KUPLOADTOP.G_CURRKUPLOADER = b, KUPLOADTOP.G_CURRKUPLOADER.frameWin
          && "" !== a + "")) {
        var f = a.substring(0, 1).toLowerCase() + a.substring(1);
        switch (f) {
          case "wsWorkerCount":
            f = "socketWorkerCount";
            break;
          case "wsWorkerJobSize":
            f = "socketWorkerJobSize";
            break;
          case "wsMinSingleWorkerSize":
            f = "minSingleSocketWorkerSize";
            break;
          case "headerBar":
            f = "showHeaderBar";
            break;
          case "statusBar":
            f = "showStatusBar";
            break;
          case "buttonBarEdit":
            f = "showButtonBarEdit";
            break;
          case "buttonBarView":
            f = "showButtonBarView";
            break;
          case "extensionAllowOrLimit":
            f = "extension.allowOrLimit";
            break;
          case "extensionArr":
            f = "extension.extArr"
        }
        for (var d = f.split("."), k = d.length, l = b._config, b = 0; b < k;
            b++) {
          if (b == k - 1) {
            d[b] = d[b].substring(0, 1).toLowerCase() + d[b].substring(1);
            e = l[d[b]];
            break
          }
          l = l[d[b]]
        }
      }
      return e
    } catch (m) {
      RAONKUPLOAD.logMode && console && console.log(m)
    }
  };
  RAONKUPLOAD.GetListInfoByIndex = function (a, c, b) {
    var e = null;
    try {
      var f = RAONKUPLOAD.util._setRaonKUploader(b);
      if (f) {
        KUPLOADTOP.G_CURRKUPLOADER = f;
        var d = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
        if (d) {
          switch (0 == !!a && (a = ""), c = void 0 == c ? -1
              : RAONKUPLOAD.util.parseIntOr0(c), b = !0, -1 == c
          && (b = !1), d.setCurrFileStatus(c), a.toLowerCase()) {
            case "text":
              e = d.getListInfoByIndexText(b);
              break;
            case "xml":
              e = d.getListInfoByIndexXml(b);
              break;
            case "json":
              e = d.getListInfoByIndexJson(b);
              break;
            default:
              e = d.getListInfoByIndexArray(b)
          }
        }
      }
    } catch (k) {
      RAONKUPLOAD.logMode &&
      console && console.log(k)
    }
    return e
  };
  RAONKUPLOAD.GetListInfo = function (a, c) {
    var b = null;
    try {
      var e = RAONKUPLOAD.util._setRaonKUploader(c);
      if (e) {
        KUPLOADTOP.G_CURRKUPLOADER = e;
        var f = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
        if (f) {
          f.setCurrFileStatus(-1);
          0 == !!a && (a = "");
          b = {newFile: null, deleteFile: null, webFile: null, mergeFile: null};
          switch (a.toLowerCase()) {
            case "text":
              b.newFile = f.getNewListInfoText();
              b.deleteFile = f.getDeleteListInfoText();
              b.webFile = f.getNoneDeleteListInfoText();
              break;
            case "xml":
              b.newFile = f.getNewListInfoXml();
              b.deleteFile = f.getDeleteListInfoXml();
              b.webFile = f.getNoneDeleteListInfoXml();
              break;
            case "json":
              b.newFile = f.getNewListInfoJson();
              b.deleteFile = f.getDeleteListInfoJson();
              b.webFile = f.getNoneDeleteListInfoJson();
              break;
            default:
              b.newFile = f.getNewListInfoArray(), b.deleteFile = f.getDeleteListInfoArray(), b.webFile = f.getNoneDeleteListInfoArray()
          }
          b.mergeFile = RAONKUPLOAD.GetListInfoByIndex(a, -1, c)
        }
      }
    } catch (d) {
      RAONKUPLOAD.logMode && console && console.log(d)
    }
    return b
  };
  RAONKUPLOAD.GetNewUploadList = function (a, c) {
    var b =
        null;
    try {
      var e = RAONKUPLOAD.util._setRaonKUploader(c);
      if (e) {
        KUPLOADTOP.G_CURRKUPLOADER = e;
        var f = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
        if (f) {
          switch (f.setCurrFileStatus(-1), 0 == !!a
          && (a = ""), a.toLowerCase()) {
            case "text":
              b = f.getNewListInfoText();
              break;
            case "xml":
              b = f.getNewListInfoXml();
              break;
            case "json":
              b = f.getNewListInfoJson();
              break;
            default:
              b = f.getNewListInfoArray()
          }
        }
      }
    } catch (d) {
      RAONKUPLOAD.logMode && console && console.log(d)
    }
    return b
  };
  RAONKUPLOAD.GetDeleteList = function (a, c) {
    var b = null;
    try {
      var e = RAONKUPLOAD.util._setRaonKUploader(c);
      if (e) {
        KUPLOADTOP.G_CURRKUPLOADER = e;
        var f = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
        if (f) {
          switch (f.setCurrFileStatus(-1), 0 == !!a
          && (a = ""), a.toLowerCase()) {
            case "text":
              b = f.getDeleteListInfoText();
              break;
            case "xml":
              b = f.getDeleteListInfoXml();
              break;
            case "json":
              b = f.getDeleteListInfoJson();
              break;
            default:
              b = f.getDeleteListInfoArray()
          }
        }
      }
    } catch (d) {
      RAONKUPLOAD.logMode && console && console.log(d)
    }
    return b
  };
  RAONKUPLOAD.GetSelectedListInfo = function (a, c) {
    var b = null;
    try {
      var e = RAONKUPLOAD.util._setRaonKUploader(c);
      if (e) {
        KUPLOADTOP.G_CURRKUPLOADER =
            e;
        var f = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
        if (f) {
          switch (f.setCurrFileStatus(-1), 0 == !!a
          && (a = ""), b = {newFile: null, webFile: null}, a.toLowerCase()) {
            case "text":
              var d = f.getSelectedListInfoText();
              b.newFile = d.newFile;
              b.webFile = d.webFile;
              break;
            case "xml":
              d = f.getSelectedListInfoXml();
              b.newFile = d.newFile;
              b.webFile = d.webFile;
              break;
            case "json":
              d = f.getSelectedListInfoJson();
              b.newFile = d.newFile;
              b.webFile = d.webFile;
              break;
            default:
              d = f.getSelectedListInfoArray(), b.newFile = d.newFile, b.webFile = d.webFile
          }
        }
      }
    } catch (k) {
      RAONKUPLOAD.logMode &&
      console && console.log(k)
    }
    return b
  };
  RAONKUPLOAD.FileSort = function (a, c, b) {
    try {
      var e = RAONKUPLOAD.util._setRaonKUploader(b);
      if (e) {
        KUPLOADTOP.G_CURRKUPLOADER = e;
        var f = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
        f && (f.sortTotalFileList(a, c, !0), f.setListvalue())
      }
    } catch (d) {
      RAONKUPLOAD.logMode && console && console.log(d)
    }
  };
  RAONKUPLOAD.GetUploadByName = function (a) {
    var c = null;
    try {
      void 0 == a || "" == a ? c = G_CURRKUPLOADER
          : RAONKUPLOAD.isLoadedUploadEx(a)
          && (c = RAONKUPLOAD.RAONKMULTIPLE["raonkuploader_frame_" + a]), void 0
      == c && (c = null)
    } catch (b) {
      RAONKUPLOAD.logMode &&
      console && console.log(b)
    }
    return c
  };
  RAONKUPLOAD.SetViewModeChange = function (a, c) {
    try {
      var b = RAONKUPLOAD.util._setRaonKUploader(c);
      if (b) {
        KUPLOADTOP.G_CURRKUPLOADER = b;
        var e = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
        if (e && a != KUPLOADTOP.G_CURRKUPLOADER._config.views) {
          KUPLOADTOP.G_CURRKUPLOADER._config.views = a;
          var f = KUPLOADTOP.RAONKUPLOAD.util.getElementsByClass(
              "RAON_K_UP_uploadbox_tit", e.document, "div")[0];
          if ("thumbs"
              == a) {
            KUPLOADTOP.G_CURRKUPLOADER._config.showHeaderBar = "0", f.style.display = "none";
          } else if (("list"
                  ==
                  a || "1" == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager
                  && "detail" == a) && "1"
              == KUPLOADTOP.G_CURRKUPLOADER._config.showHeaderBarOrg) {
            KUPLOADTOP.G_CURRKUPLOADER._config.showHeaderBar = "1";
            f.style.display = "block";
            var d = e.document.getElementById("header_bar_file_name"), k;
            k = "1" == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager
            && "detail" == KUPLOADTOP.G_CURRKUPLOADER._config.views
                ? document.createTextNode(e.RAONKUpload_Lang.file_path)
                : document.createTextNode(e.RAONKUpload_Lang.file_name);
            d.replaceChild(k, d.firstChild)
          }
          var l =
              parseInt(KUPLOADTOP.G_CURRKUPLOADER._config.height);
          if (-1 < KUPLOADTOP.G_CURRKUPLOADER._config.height.indexOf(
              "%")) {
            var m = KUPLOADTOP.RAONKUPLOAD.util.getClientRect(
                    KUPLOADTOP.KUPLOADDOC.getElementById(
                        "raonkuploader_holder_" + KUPLOADTOP.G_CURRKUPLOADER.ID)),
                l = m.bottom - m.top;
          }
          e.setFileListHeight(l, KUPLOADTOP.G_CURRKUPLOADER._config,
              KUPLOADTOP.G_CURRKUPLOADER);
          e.document.getElementById(
              "RAON_K_UP_file_temp").style.height = KUPLOADTOP.G_CURRKUPLOADER.fileListHeight
              + "px";
          e.document.getElementById("file_list").innerHTML =
              "";
          var p = e.RESULTFILELIST.length;
          KUPLOADTOP.G_CURRKUPLOADER.checkThumbsArr = [];
          for (b = 0; b < p; b++) {
            "n" == e.RESULTFILELIST[b].isDelete && ("y"
            == e.RESULTFILELIST[b].isWebFile ? e.addFileList(
                e.RESULTFILELIST[b],
                !0, b) : e.addFileList(e.RESULTFILELIST[b], !1, b));
          }
          "thumbs" == a && e.thumbsViewWithCanvas()
        }
      }
    } catch (q) {
      RAONKUPLOAD.logMode && console && console.log(q)
    }
  };
  RAONKUPLOAD.AddUploadedFileEw = function (a, c, b, e, f, d) {
    var k, l = {};
    if ("object" == typeof a) {
      var m = a;
      a = m.fileUniqueKey;
      c = m.fileName;
      b = m.filePath;
      e = m.fileSize;
      f = m.customValue;
      d = m.uploadId;
      k = m.bucketName;
      l.cloudObj = m
    }
    l.uniqueKey = a;
    l.originName = c;
    l.webPath = b;
    l.size = e;
    l.customValue = f;
    l.uploadName = d;
    l.bucketName = k;
    l.apiName = "AddUploadedFileEw";
    RAONKUPLOAD.AddUploadedFileAsObject(l)
  };
  RAONKUPLOAD.IsLoadedUploadEx = RAONKUPLOAD.isLoadedUploadEx = function (a) {
    var c = !1;
    try {
      var b = document.getElementById("raonkuploader_frame_" + a);
      if (b && b.contentWindow.document.getElementById("RAON_K_UP_wrapper")
          && RAONKUPLOAD.IsUploadLoadedHashTable) {
        var e = RAONKUPLOAD.IsUploadLoadedHashTable.getItem(a);
        "undefined" != typeof e && "1" == e && (c = !0)
      }
      if (!c && RAONKUPLOAD.IsUploadLoadedHashTable) {
        try {
          e = RAONKUPLOAD.IsUploadLoadedHashTable.getItem(a), "undefined"
          != typeof e && RAONKUPLOAD.IsUploadLoadedHashTable.setItem(a, "0")
        } catch (f) {
          RAONKUPLOAD.logMode && console && console.log(f)
        }
      }
    } catch (d) {
      RAONKUPLOAD.logMode && console && console.log(d)
    }
    return c
  };
  RAONKUPLOAD.AddBase64Data = function (a, c, b) {
    if (0 != !!a && "" != a) {
      try {
        var e = RAONKUPLOAD.util._setRaonKUploader(b);
        if (e) {
          KUPLOADTOP.G_CURRKUPLOADER = e;
          var f = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
          if ("1" == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager) {
            b = [["kcmd", "KC05"]];
            b.push(["kp1", a.replace(/[+]/g, "%2B")]);
            var d = f.setManagerParam("{}", b),
                d = KUPLOADTOP.RAONKSolution.Agent.makeEncryptManagerParam(d),
                k = function (a) {
                  a = KUPLOADTOP.RAONKSolution.Agent.parseRtn(a);
                  var b = a.code;
                  a = a.valueArr;
                  if (1E3 == b) {
                    for (var b = [], e = a.length, m = 0; m < e; m++) {
                      try {
                        var g = a[m].split(
                                KUPLOADTOP.RAONKSolution.Agent.formfeed),
                            p = "", p = 0 == !!c || "" == c ? g[1].substring(
                                    g[1].lastIndexOf(RAONKUPLOAD.UserAgent.osSeparator)
                                    + 1)
                                : c, u = {
                              name: p,
                              type: "",
                              uniqValue: "",
                              isFolder: g[0],
                              localPath: g[1],
                              size: KUPLOADTOP.RAONKUPLOAD.util.parseIntOr0(g[2]),
                              subFolderCount: "",
                              fileCount: ""
                            };
                        "1" == g[0]
                        && (u.subFolderCount = KUPLOADTOP.RAONKUPLOAD.util.parseIntOr0(
                            g[3]), u.fileCount = KUPLOADTOP.RAONKUPLOAD.util.parseIntOr0(
                            g[4]));
                        b.push(u)
                      } catch (w) {
                        RAONKUPLOAD.logMode && console && console.log(w)
                      }
                    }
                    f.fileHandler(b, "", "");
                    f.displayCommonReady(!1, KUPLOADTOP.G_CURRKUPLOADER)
                  } else {
                    2001 == b && f.sendMessageToAgent(d, k, l, !1)
                  }
                }, l = function (a) {
                  KUPLOADTOP.G_CURRKUPLOADER._config.sendToManagerType =
                      "2";
                  f.sendMessageToAgent(d, k, null, !1)
                };
            f.displayCommonReady(!0, KUPLOADTOP.G_CURRKUPLOADER);
            f.sendMessageToAgent(d, k, l, !1)
          } else if (0 != !!c && "" != c) {
            b = null;
            try {
              b = RAONKUPLOAD.util.dataURItoBlob(a)
            } catch (m) {
              RAONKUPLOAD.logMode && console && console.log(m)
            }
            b && (b.name = c, b.lastModifiedDate = "", f.fileHandler([b]))
          }
        }
      } catch (p) {
        RAONKUPLOAD.logMode && console && console.log(p)
      }
    }
  };
  RAONKUPLOAD.AddBase64DataWithCallback = function (a, c, b) {
    var e = a && a.imageDataArray ? a.imageDataArray : void 0, f = null,
        d = function (a, b, c) {
          null == f && (f = {data: []});
          f.data.push({type: a, index: b, reason: c})
        }, k = function () {
          "function" === typeof c && c(f)
        };
    if (0 == ("object" === typeof e && "number" === typeof e.length) || 0
        == e.length) {
      d("error", -1,
          "image data does not exist"), k();
    } else {
      try {
        var l = RAONKUPLOAD.util._setRaonKUploader(b);
        if (l) {
          KUPLOADTOP.G_CURRKUPLOADER = l;
          var m = l.frameWin;
          if ("upload" != l._config.mode) {
            for (var p = 0; p < e.length; p++) {
              d("error", p,
                  "It is not supported when not in upload mode.");
            }
            k()
          } else {
            for (p = 0; p < e.length; p++) {
              var q = e[p], n = b = a = "";
              /\/(.*);/.test(q.base64) && (a = RegExp.$1);
              b = "string" == typeof q.fileName && "" != q.fileName ? 0
              > q.fileName.indexOf(".") ? q.fileName : m.getFileName(q.fileName,
                  !0) : RAONKUPLOAD.util.makeGuid();
              n = b + "." + a;
              q.fileNameInfo = {ext: a, fileName: b, fileFullName: n}
            }
            if ("1" == l._config.useKManager) {
              for (var l = [["kcmd", "KC05"]], q = "", t = e.length, p = 0;
                  p < t;
                  p++) {
                q += e[p].base64, "string" == typeof e[p].fileName && ""
                != e[p].fileName && (q += ":" + e[p].fileNameInfo.fileName), p
                != t
                - 1 && (q += RAONKSolution.Agent.formfeed);
              }
              l.push(["kp1", q.replace(/[+]/g, "%2B")]);
              var r = m.setManagerParam("{}", l),
                  r = KUPLOADTOP.RAONKSolution.Agent.makeEncryptManagerParam(r);
              m.sendMessageToAgent(r, function (a) {
                a = KUPLOADTOP.RAONKSolution.Agent.parseRtn(a);
                var b = a.code;
                a = a.valueArr;
                if (1E3 == b) {
                  for (var b = [], c = [], g = a.length, f = 0; f < g; f++) {
                    try {
                      var B = a[f].split(
                          KUPLOADTOP.RAONKSolution.Agent.formfeed);
                      if (0 == RAONKUPLOAD.util.parseIntOr0(B[2])) {
                        d("error", f,
                            "can not convert to image");
                      } else {
                        var l = {
                          name: e[f].fileNameInfo.fileFullName,
                          type: "",
                          uniqValue: "",
                          isFolder: B[0],
                          localPath: B[1],
                          size: KUPLOADTOP.RAONKUPLOAD.util.parseIntOr0(B[2]),
                          subFolderCount: "",
                          fileCount: "",
                          customValue: "string" == typeof e[f].customValue
                              ? e[f].customValue : ""
                        };
                        "1" == B[0]
                        && (l.subFolderCount = KUPLOADTOP.RAONKUPLOAD.util.parseIntOr0(
                            B[3]), l.fileCount = KUPLOADTOP.RAONKUPLOAD.util.parseIntOr0(
                            B[4]));
                        c.push(f);
                        b.push(l)
                      }
                    } catch (p) {
                      RAONKUPLOAD.logMode && console && console.log(p)
                    }
                  }
                  0 < b.length ? m.fileHandler(b, "", "", void 0, {
                    realIndexArr: c, fn_callback: function (a) {
                      if (a) {
                        for (var b = 0; b < a.length; b++) {
                          d("filtered",
                              a[b].index, a[b].reason);
                        }
                      }
                      k()
                    }
                  }) : k()
                } else {
                  2E3 == b && (d("error", -1, "agent error"),
                      k())
                }
              }, function (a) {
                d("error", -1, "agent error");
                k()
              }, !1)
            } else {
              r = [];
              l = [];
              t = e.length;
              for (p = 0; p < t; p++) {
                q = null;
                try {
                  q = RAONKUPLOAD.util.dataURItoBlob(e[p].base64)
                } catch (g) {
                  RAONKUPLOAD.logMode && console && console.log(g)
                }
                q
                    ? (q.name = e[p].fileNameInfo.fileFullName, q.lastModifiedDate = "", "string"
                    == typeof e[p].customValue
                    && (q.customValue = e[p].customValue), r.push(q), l.push(p))
                    : d(
                        "error", p, "can not convert to image")
              }
              0 < r.length ? m.fileHandler(r, void 0, void 0, void 0, {
                realIndexArr: l, fn_callback: function (a) {
                  if (a) {
                    for (var b =
                        0; b < a.length; b++) {
                      d("filtered", a[b].index,
                          a[b].reason);
                    }
                  }
                  k()
                }
              }) : k()
            }
          }
        }
      } catch (v) {
        RAONKUPLOAD.logMode && console && console.log(v)
      }
    }
  };
  RAONKUPLOAD.GetImageSize = function (a, c, b) {
    try {
      var e = RAONKUPLOAD.util._setRaonKUploader(b);
      if (e) {
        KUPLOADTOP.G_CURRKUPLOADER = e;
        var f = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
        if (f) {
          var d = f.RESULTFILELIST.length;
          b = 0;
          if ("1" == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager) {
            var k = f.getRealIndexByListIndex(a);
            "" != f.RESULTFILELIST[k].localPath
            && (m = new Image, m.onload = function () {
              var a = {
                width: this.width,
                height: this.height
              };
              try {
                m = void 0
              } catch (b) {
                RAONKUPLOAD.logMode && console && console.log(b)
              }
              c && c(a)
            }, m.onerror = function () {
              c && c(null)
            }, m.src = KUPLOADTOP.RAONKSolution.managerFinalUrl + "/"
                + f.RESULTFILELIST[k].localPath)
          } else {
            k = null;
            for (e = 0; e < d; e++) {
              if ("y" != f.RESULTFILELIST[e].isDelete) {
                if (-1 != a && b == a) {
                  k = f.RESULTFILELIST[e].file;
                  break
                }
                b++
              }
            }
            if (k) {
              if (-1 < k.type.indexOf("image")) {
                var l, m;
                if (l = k) {
                  m = new Image, m.onload = function () {
                    var a = {width: this.width, height: this.height};
                    try {
                      window.URL.revokeObjectURL(this.src), m = void 0
                    } catch (b) {
                      RAONKUPLOAD.logMode &&
                      console && console.log(b)
                    }
                    c && c(a)
                  }, m.src = window.URL.createObjectURL(l)
                }
              } else {
                c && c(null);
              }
            } else {
              c && c(null)
            }
          }
        }
      }
    } catch (p) {
      RAONKUPLOAD.logMode && console && console.log(p)
    }
  };
  RAONKUPLOAD.SetUploadedFile = function (a, c, b, e, f, d, k) {
    try {
      var l = RAONKUPLOAD.util._setRaonKUploader(k);
      if (l) {
        KUPLOADTOP.G_CURRKUPLOADER = l;
        var m = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
        m && m._setUploadedFile(a, c, b, e, f, d, k)
      }
    } catch (p) {
      RAONKUPLOAD.logMode && console && console.log(p)
    }
  };
  RAONKUPLOAD.ChangeToAgentMode = function (a, c) {
    try {
      var b = RAONKUPLOAD.util._setRaonKUploader(a);
      if (b && "0" == b._config.useKManager) {
        a = b.ID;
        var e = RAONKUPLOAD.UserConfigHashTable.getItem(a);
        "undefined" != typeof e && ("undefined" != typeof c && 0 == c
        && (b._config.disableAlertMessage.disableDeleteConfirm = "1", RAONKUPLOAD.DeleteAllFile(
            a)), RAONKUPLOAD.Destroy(a,
            !1), e.Runtimes = "agent", new RAONKUpload(e))
      }
    } catch (f) {
      RAONKUPLOAD.logMode && console && console.log(f)
    }
  };
  RAONKUPLOAD.GetFileObjectByIndex = function (a, c) {
    var b = null;
    try {
      var e = RAONKUPLOAD.util._setRaonKUploader(c);
      if (e && (KUPLOADTOP.G_CURRKUPLOADER = e, "0"
      == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager &&
      "upload" == KUPLOADTOP.G_CURRKUPLOADER._config.mode)) {
        var f = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
        if (f) {
          a = parseInt(a, 10);
          var d = f.document.getElementById("file_list");
          if (d) {
            var k = d.childNodes[a];
            if (k) {
              for (var l, m = k.getElementsByTagName("input").length, e = 0;
                  e < m; e++) {
                var p = k.getElementsByTagName("input")[e];
                if ("checkbox" == p.getAttribute("type") && p.getAttribute("id")
                    && 0 == p.getAttribute("id").indexOf("chk_file")) {
                  l = p;
                  break
                }
              }
              var q = parseInt(l.getAttribute("listvalue"), 10),
                  b = f.RESULTFILELIST[q].file
            }
          }
        }
      }
    } catch (n) {
      RAONKUPLOAD.logMode &&
      console && console.log(n)
    }
    return b
  };
  RAONKUPLOAD.RecoveryTransfer = function (a, c) {
    try {
      var b = RAONKUPLOAD.util._setRaonKUploader(c);
      if (b && (KUPLOADTOP.G_CURRKUPLOADER = b, "1"
      == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager)) {
        var e = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
        e && (null != a && void 0 != a && "" != a
        && (KUPLOADTOP.G_CURRKUPLOADER._config.autoRecoveryId = a), e.recoveryUpload(
            b), e.recoveryDownload(b))
      }
    } catch (f) {
      RAONKUPLOAD.logMode && console && console.log(f)
    }
  };
  RAONKUPLOAD.SetExceptionPath = function (a, c) {
    try {
      var b = RAONKUPLOAD.util._setRaonKUploader(c);
      b && (KUPLOADTOP.G_CURRKUPLOADER = b, "1"
      == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager
      && KUPLOADTOP.G_CURRKUPLOADER.frameWin && (DirControl.BLACK_LIST = a))
    } catch (e) {
      RAONKUPLOAD.logMode && console && console.log(e)
    }
  };
  RAONKUPLOAD.SetAllowExecFile = function (a, c) {
    try {
      var b = RAONKUPLOAD.util._setRaonKUploader(c);
      b && (KUPLOADTOP.G_CURRKUPLOADER = b, "1"
      == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager
      && KUPLOADTOP.G_CURRKUPLOADER.frameWin && (DirControl.allowExeFile = a))
    } catch (e) {
      RAONKUPLOAD.logMode && console && console.log(e)
    }
  };
  RAONKUPLOAD.SetAllowViewerFile = function (a, c) {
    try {
      var b = RAONKUPLOAD.util._setRaonKUploader(c);
      b && (KUPLOADTOP.G_CURRKUPLOADER = b, "1"
      == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager
      && KUPLOADTOP.G_CURRKUPLOADER.frameWin
      && (DirControl.allowViewerFile = a))
    } catch (e) {
      RAONKUPLOAD.logMode && console && console.log(e)
    }
  };
  RAONKUPLOAD.GetCompressionType = function (a, c) {
    try {
      var b = RAONKUPLOAD.util._setRaonKUploader(c);
      if (b && (KUPLOADTOP.G_CURRKUPLOADER = b, "1"
      == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager)) {
        var e = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
        if (e) {
          var f = "";
          if (RAONKUPLOAD.browser.ie && 10 > RAONKUPLOAD.browser.ieVersion) {
            var d = function (b) {
              b = b.split(RAONKSolution.Agent.vertical);
              var c = b[0];
              1E3 == c ? f = b[1] : 2E3 == c ? f = "" : 2001 == c && d(
                  raonkPatent.CompressionTypeGet(a))
            };
            d(raonkPatent.CompressionTypeGet(a))
          } else {
            b = [["kcmd", "KC77"]];
            b.push(["kp1", encodeURIComponent("CompressionTypeGet")]);
            b.push(["kp2", encodeURIComponent(a)]);
            var k = e.setManagerParam("{}", b),
                k = KUPLOADTOP.RAONKSolution.Agent.makeEncryptManagerParam(k),
                d = function (a) {
                  a = KUPLOADTOP.RAONKSolution.Agent.parseRtn(a);
                  var b = a.code;
                  a = a.valueArr;
                  1E3 == b ? (f = a[0], e.displayCommonReady(!1,
                      KUPLOADTOP.G_CURRKUPLOADER)) : 2E3 == b
                      ? (f = "", e.displayCommonReady(!1,
                          KUPLOADTOP.G_CURRKUPLOADER)) : 2001 == b
                      && e.sendMessageToAgent(k, d, l, !1)
                }, l = function (a) {
                  KUPLOADTOP.G_CURRKUPLOADER._config.sendToManagerType = "2";
                  e.sendMessageToAgent(k, d, null, !1)
                };
            e.displayCommonReady(!0, KUPLOADTOP.G_CURRKUPLOADER);
            e.sendMessageToAgent(k, d, l, !1)
          }
          return f
        }
      }
    } catch (m) {
      RAONKUPLOAD.logMode && console && console.log(m)
    }
  };
  RAONKUPLOAD.GetLocalDirList = function (a, c) {
    try {
      var b =
          RAONKUPLOAD.util._setRaonKUploader(c);
      if (b && (KUPLOADTOP.G_CURRKUPLOADER = b, "1"
      == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager)) {
        var e = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
        if (e) {
          try {
            a = a.toLowerCase()
          } catch (f) {
            RAONKUPLOAD.logMode && console && console.log(f)
          }
          var b = [], d = DirControl.BLACK_LIST;
          "" != d && (d = d.replace(/"/gi, ""), d = d.replace(/'/gi,
              ""), b = d.split(","));
          var d = !1, k = b.length;
          if (0 < k) {
            for (var l = 0; l < k; l++) {
              var m = RAONKUPLOAD.util.trim(b[l]), m = m.toLowerCase();
              if (-1 < a.indexOf(m)) {
                d = !0;
                break
              }
            }
          }
          if (d) {
            return e.RAONKUpload_Lang.etc.message1;
          }
          var p = "";
          if (RAONKUPLOAD.browser.ie && 10 > RAONKUPLOAD.browser.ieVersion) {
            var q = function (b) {
              var c = b.split(RAONKSolution.Agent.vertical);
              b = c[0];
              if (1E3 == b) {
                if (0 < c.length && 0 < c[1].length) {
                  b = [];
                  var c = c[1].split(";"), d = c.length;
                  a = a.substr(0, a.lastIndexOf("\\") + 1);
                  for (var f = 0; f < d; f++) {
                    var e = c[f], e = e.replace(a, "");
                    if (0 > e.lastIndexOf("\\")) {
                      b.push(e);
                    } else {
                      for (var e = e.split("\\")[0], k = !1, l = b.length - 1;
                          0 <= l; l--) {
                        if (b[l] == e) {
                          k = !0;
                          break
                        }
                      }
                      0 == k && b.push(e)
                    }
                  }
                  p = b.join(";")
                }
              } else {
                2E3 == b ? p = "" : 2001 == b && q(
                    raonkPatent.GetLocalDirList(a))
              }
            };
            q(raonkPatent.GetLocalDirList(a))
          } else {
            k = [["kcmd", "KC77"]];
            k.push(["kp1", encodeURIComponent("GetLocalDirList")]);
            k.push(["kp2", encodeURIComponent(a)]);
            var n = e.setManagerParam("{}", k),
                n = KUPLOADTOP.RAONKSolution.Agent.makeEncryptManagerParam(n),
                q = function (b) {
                  var c = KUPLOADTOP.RAONKSolution.Agent.parseRtn(b);
                  b = c.code;
                  c = c.valueArr;
                  if (1E3 == b) {
                    if (0 < c.length && 0 < c[0].length) {
                      b = [];
                      var c = c[0].split(";"), d = c.length;
                      a = a.substr(0, a.lastIndexOf("\\") + 1);
                      for (var f = 0; f < d; f++) {
                        var k = c[f], k = k.replace(a, "");
                        if (0 > k.lastIndexOf("\\")) {
                          b.push(k);
                        } else {
                          for (var k = k.split("\\")[0], l = !1,
                              m = b.length - 1; 0 <= m; m--) {
                            if (b[m] == k) {
                              l = !0;
                              break
                            }
                          }
                          0 == l && b.push(k)
                        }
                      }
                      p = b.join(";")
                    }
                    e.displayCommonReady(!1, KUPLOADTOP.G_CURRKUPLOADER)
                  } else {
                    2E3 == b ? (p = "", e.displayCommonReady(!1,
                        KUPLOADTOP.G_CURRKUPLOADER)) : 2001 == b
                        && e.sendMessageToAgent(n, q, t, !1)
                  }
                }, t = function (a) {
                  KUPLOADTOP.G_CURRKUPLOADER._config.sendToManagerType = "2";
                  e.sendMessageToAgent(n, q, null, !1)
                };
            e.displayCommonReady(!0, KUPLOADTOP.G_CURRKUPLOADER);
            e.sendMessageToAgent(n, q, t, !1)
          }
          return p
        }
      }
    } catch (r) {
      RAONKUPLOAD.logMode &&
      console && console.log(r)
    }
  };
  RAONKUPLOAD.MakeDir = function (a, c) {
    try {
      var b = RAONKUPLOAD.util._setRaonKUploader(c);
      if (b && (KUPLOADTOP.G_CURRKUPLOADER = b, "1"
      == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager)) {
        var e = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
        if (e) {
          var b = [], f = DirControl.BLACK_LIST;
          "" != f && (f = f.replace(/"/gi, ""), f = f.replace(/'/gi,
              ""), b = f.split(","));
          var f = !1, d = a.toLowerCase(), k = b.length;
          if (0 < k) {
            for (var l = 0; l < k; l++) {
              var m = RAONKUPLOAD.util.trim(b[l]), m = m.toLowerCase();
              if (-1 < d.indexOf(m)) {
                f = !0;
                break
              }
            }
          }
          if (f) {
            return !1;
          }
          var p = "";
          if (RAONKUPLOAD.browser.ie && 10 > RAONKUPLOAD.browser.ieVersion) {
            var q = function (b) {
              b = b.split(RAONKSolution.Agent.vertical)[0];
              1E3 == b ? p = !0 : 2E3 == b ? p = !1 : 2001 == b && q(
                  raonkPatent.MakeDir(a))
            };
            q(raonkPatent.MakeDir(a))
          } else {
            d = [["kcmd", "KC77"]];
            d.push(["kp1", encodeURIComponent("MakeDir")]);
            d.push(["kp2", encodeURIComponent(a)]);
            var n = e.setManagerParam("{}", d),
                n = KUPLOADTOP.RAONKSolution.Agent.makeEncryptManagerParam(n),
                q = function (a) {
                  a = KUPLOADTOP.RAONKSolution.Agent.parseRtn(a).code;
                  1E3 == a ? (p = !0, e.displayCommonReady(!1,
                      KUPLOADTOP.G_CURRKUPLOADER)) : 2E3 == a
                      ? (p = !1, e.displayCommonReady(!1,
                          KUPLOADTOP.G_CURRKUPLOADER)) : 2001 == a
                      && e.sendMessageToAgent(n, q, t, !1)
                }, t = function (a) {
                  KUPLOADTOP.G_CURRKUPLOADER._config.sendToManagerType = "2";
                  e.sendMessageToAgent(n, q, null, !1)
                };
            e.displayCommonReady(!0, KUPLOADTOP.G_CURRKUPLOADER);
            e.sendMessageToAgent(n, q, t, !1)
          }
          return p
        }
      }
    } catch (r) {
      RAONKUPLOAD.logMode && console && console.log(r)
    }
  };
  RAONKUPLOAD.RemoveDir = function (a, c) {
    try {
      var b = RAONKUPLOAD.util._setRaonKUploader(c);
      if (b && (KUPLOADTOP.G_CURRKUPLOADER =
          b, "1" == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager)) {
        var e = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
        if (e) {
          try {
            a = a.toLowerCase()
          } catch (f) {
            RAONKUPLOAD.logMode && console && console.log(f)
          }
          var b = [], d = DirControl.BLACK_LIST;
          "" != d && (d = d.replace(/"/gi, ""), d = d.replace(/'/gi,
              ""), b = d.split(","));
          var d = !1, k = b.length;
          if (0 < k) {
            for (var l = 0; l < k; l++) {
              var m = RAONKUPLOAD.util.trim(b[l]), m = m.toLowerCase();
              if (-1 < a.indexOf(m)) {
                d = !0;
                break
              }
            }
          }
          if (d) {
            return !1;
          }
          var p = "";
          if (RAONKUPLOAD.browser.ie && 10 > RAONKUPLOAD.browser.ieVersion) {
            var q =
                function (b) {
                  b = b.split(RAONKSolution.Agent.vertical)[0];
                  1E3 == b ? p = !0 : 2E3 == b ? p = !1 : 2001 == b && q(
                      raonkPatent.RemoveDir(a))
                };
            q(raonkPatent.RemoveDir(a))
          } else {
            k = [["kcmd", "KC77"]];
            k.push(["kp1", encodeURIComponent("RemoveDir")]);
            k.push(["kp2", encodeURIComponent(a)]);
            var n = e.setManagerParam("{}", k),
                n = KUPLOADTOP.RAONKSolution.Agent.makeEncryptManagerParam(n),
                q = function (a) {
                  a = KUPLOADTOP.RAONKSolution.Agent.parseRtn(a).code;
                  1E3 == a ? (p = !0, e.displayCommonReady(!1,
                      KUPLOADTOP.G_CURRKUPLOADER)) : 2E3 == a
                      ? (p = !1, e.displayCommonReady(!1,
                          KUPLOADTOP.G_CURRKUPLOADER)) : 2001 == a
                      && e.sendMessageToAgent(n, q, t, !1)
                }, t = function (a) {
                  KUPLOADTOP.G_CURRKUPLOADER._config.sendToManagerType = "2";
                  e.sendMessageToAgent(n, q, null, !1)
                };
            e.displayCommonReady(!0, KUPLOADTOP.G_CURRKUPLOADER);
            e.sendMessageToAgent(n, q, t, !1)
          }
          return p
        }
      }
    } catch (r) {
      RAONKUPLOAD.logMode && console && console.log(r)
    }
  };
  RAONKUPLOAD.RemoveFile = function (a, c) {
    try {
      var b = RAONKUPLOAD.util._setRaonKUploader(c);
      if (b && (KUPLOADTOP.G_CURRKUPLOADER = b, "1"
      == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager)) {
        var e =
            KUPLOADTOP.G_CURRKUPLOADER.frameWin;
        if (e) {
          try {
            a = a.toLowerCase()
          } catch (f) {
            RAONKUPLOAD.logMode && console && console.log(f)
          }
          var b = [], d = DirControl.BLACK_LIST;
          "" != d && (d = d.replace(/"/gi, ""), d = d.replace(/'/gi,
              ""), b = d.split(","));
          var d = !1, k = b.length;
          if (0 < k) {
            for (var l = 0; l < k; l++) {
              var m = RAONKUPLOAD.util.trim(b[l]), m = m.toLowerCase();
              if (-1 < a.indexOf(m)) {
                d = !0;
                break
              }
            }
          }
          if (d) {
            return !1;
          }
          var p = "";
          if (RAONKUPLOAD.browser.ie && 10 > RAONKUPLOAD.browser.ieVersion) {
            var q = function (b) {
              b = b.split(RAONKSolution.Agent.vertical)[0];
              1E3 ==
              b ? p = !0 : 2E3 == b ? p = !1 : 2001 == b && q(
                  raonkPatent.RemoveFile(a))
            };
            q(raonkPatent.RemoveFile(a))
          } else {
            k = [["kcmd", "KC77"]];
            k.push(["kp1", encodeURIComponent("RemoveFile")]);
            k.push(["kp2", encodeURIComponent(a)]);
            var n = e.setManagerParam("{}", k),
                n = KUPLOADTOP.RAONKSolution.Agent.makeEncryptManagerParam(n),
                q = function (a) {
                  a = KUPLOADTOP.RAONKSolution.Agent.parseRtn(a).code;
                  1E3 == a ? (p = !0, e.displayCommonReady(!1,
                      KUPLOADTOP.G_CURRKUPLOADER)) : 2E3 == a
                      ? (p = !1, e.displayCommonReady(!1,
                          KUPLOADTOP.G_CURRKUPLOADER)) : 2001 == a
                      && e.sendMessageToAgent(n,
                          q, t, !1)
                }, t = function (a) {
                  KUPLOADTOP.G_CURRKUPLOADER._config.sendToManagerType = "2";
                  e.sendMessageToAgent(n, q, null, !1)
                };
            e.displayCommonReady(!0, KUPLOADTOP.G_CURRKUPLOADER);
            e.sendMessageToAgent(n, q, t, !1)
          }
          return p
        }
      }
    } catch (r) {
      RAONKUPLOAD.logMode && console && console.log(r)
    }
  };
  RAONKUPLOAD.Rename = function (a, c, b) {
    try {
      var e = RAONKUPLOAD.util._setRaonKUploader(b);
      if (e && (KUPLOADTOP.G_CURRKUPLOADER = e, "1"
      == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager)) {
        var f = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
        if (f) {
          try {
            a = a.toLowerCase(),
                c = c.toLowerCase()
          } catch (d) {
            RAONKUPLOAD.logMode && console && console.log(d)
          }
          b = [];
          var k = DirControl.BLACK_LIST;
          "" != k && (k = k.replace(/"/gi, ""), k = k.replace(/'/gi,
              ""), b = k.split(","));
          var k = !1, l = b.length;
          if (0 < l) {
            for (e = 0; e < l; e++) {
              var m = RAONKUPLOAD.util.trim(b[e]), m = m.toLowerCase();
              if (-1 < a.indexOf(m)) {
                k = !0;
                break
              }
              if (-1 < c.indexOf(m)) {
                k = !0;
                break
              }
            }
          }
          if (k) {
            return !1;
          }
          var p = "";
          if (RAONKUPLOAD.browser.ie && 10 > RAONKUPLOAD.browser.ieVersion) {
            var q = function (b) {
              b = b.split(RAONKSolution.Agent.vertical)[0];
              1E3 == b ? p = !0 : 2E3 == b ? p = !1 :
                  2001 == b && q(raonkPatent.RenameFileOrFolder(a, c))
            };
            q(raonkPatent.RenameFileOrFolder(a, c))
          } else {
            l = [["kcmd", "KC77"]];
            l.push(["kp1", encodeURIComponent("Rename")]);
            l.push(["kp2", encodeURIComponent(a)]);
            l.push(["kp3", encodeURIComponent(c)]);
            var n = f.setManagerParam("{}", l),
                n = KUPLOADTOP.RAONKSolution.Agent.makeEncryptManagerParam(n),
                q = function (a) {
                  a = KUPLOADTOP.RAONKSolution.Agent.parseRtn(a).code;
                  1E3 == a ? (p = !0, f.displayCommonReady(!1,
                      KUPLOADTOP.G_CURRKUPLOADER)) : 2E3 == a
                      ? (p = !1, f.displayCommonReady(!1,
                          KUPLOADTOP.G_CURRKUPLOADER)) :
                      2001 == a && f.sendMessageToAgent(n, q, t, !1)
                }, t = function (a) {
                  KUPLOADTOP.G_CURRKUPLOADER._config.sendToManagerType = "2";
                  f.sendMessageToAgent(n, q, null, !1)
                };
            f.displayCommonReady(!0, KUPLOADTOP.G_CURRKUPLOADER);
            f.sendMessageToAgent(n, q, t, !1)
          }
          return p
        }
      }
    } catch (r) {
      RAONKUPLOAD.logMode && console && console.log(r)
    }
  };
  RAONKUPLOAD.ExcuteFile = function (a, c) {
    try {
      var b = RAONKUPLOAD.util._setRaonKUploader(c);
      if (b && (KUPLOADTOP.G_CURRKUPLOADER = b, "1"
      == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager)) {
        var e = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
        if (e) {
          b = "";
          try {
            a = a.toLowerCase();
            var f = a.split("\\"), b = f[f.length - 1]
          } catch (d) {
            RAONKUPLOAD.logMode && console && console.log(d)
          }
          var f = [], k = DirControl.allowExeFile;
          "" != k && (k = k.replace(/"/gi, ""), k = k.replace(/'/gi,
              ""), f = k.split(","));
          var k = !1, l = f.length;
          if (0 < l) {
            for (var m = 0; m < l; m++) {
              var p = RAONKUPLOAD.util.trim(f[m]), p = p.toLowerCase();
              if (b == p) {
                k = !0;
                break
              }
            }
          }
          if (!(0 < l && 0 == k)) {
            if (RAONKUPLOAD.browser.ie && 10
                > RAONKUPLOAD.browser.ieVersion) {
              var q = function (b) {
                b = b.split(RAONKSolution.Agent.vertical)[0];
                1E3 != b && 2E3 != b &&
                2001 == b && q(raonkPatent.FileExe(a))
              };
              q(raonkPatent.FileExe(a))
            } else {
              l = [["kcmd", "KC77"]];
              l.push(["kp1", encodeURIComponent("FileExe")]);
              l.push(["kp2", encodeURIComponent(a)]);
              var n = e.setManagerParam("{}", l),
                  n = KUPLOADTOP.RAONKSolution.Agent.makeEncryptManagerParam(n),
                  q = function (a) {
                    a = KUPLOADTOP.RAONKSolution.Agent.parseRtn(a).code;
                    1E3 == a ? e.displayCommonReady(!1,
                        KUPLOADTOP.G_CURRKUPLOADER) : 2E3 == a
                        ? e.displayCommonReady(!1, KUPLOADTOP.G_CURRKUPLOADER)
                        : 2001 == a && e.sendMessageToAgent(n, q, t, !1)
                  }, t = function (a) {
                    KUPLOADTOP.G_CURRKUPLOADER._config.sendToManagerType =
                        "2";
                    e.sendMessageToAgent(n, q, null, !1)
                  };
              e.displayCommonReady(!0, KUPLOADTOP.G_CURRKUPLOADER);
              e.sendMessageToAgent(n, q, t, !1)
            }
          }
        }
      }
    } catch (r) {
      RAONKUPLOAD.logMode && console && console.log(r)
    }
  };
  RAONKUPLOAD.ExcuteViewer = function (a, c, b) {
    try {
      var e = RAONKUPLOAD.util._setRaonKUploader(b);
      if (e && (KUPLOADTOP.G_CURRKUPLOADER = e, "1"
      == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager)) {
        var f = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
        if (f) {
          b = "";
          try {
            a = a.toLowerCase();
            var d = a.split("\\");
            b = d[d.length - 1]
          } catch (k) {
            RAONKUPLOAD.logMode &&
            console && console.log(k)
          }
          var d = [], l = DirControl.allowViewerFile;
          "" != l && (l = l.replace(/"/gi, ""), l = l.replace(/'/gi,
              ""), d = l.split(","));
          var l = !1, m = d.length;
          if (0 < m) {
            for (e = 0; e < m; e++) {
              var p = RAONKUPLOAD.util.trim(d[e]), p = p.toLowerCase();
              if (b == p) {
                l = !0;
                break
              }
            }
          }
          if (0 < m && 0 == l) {
            return 1;
          }
          var q = "";
          if (RAONKUPLOAD.browser.ie && 10 > RAONKUPLOAD.browser.ieVersion) {
            var n = function (b) {
              b = b.split(RAONKSolution.Agent.vertical)[0];
              1E3 == b ? q = 0 : 2E3 == b ? q = 1 : 2001 == b && n(
                  raonkPatent.ExecTheViewer(a, c))
            };
            n(raonkPatent.ExecTheViewer(a, c))
          } else {
            m =
                [["kcmd", "KC77"]];
            m.push(["kp1", encodeURIComponent("ExecTheViewer")]);
            m.push(["kp2", encodeURIComponent(a)]);
            m.push(["kp3", encodeURIComponent(c)]);
            var t = f.setManagerParam("{}", m),
                t = KUPLOADTOP.RAONKSolution.Agent.makeEncryptManagerParam(t),
                n = function (a) {
                  a = KUPLOADTOP.RAONKSolution.Agent.parseRtn(a).code;
                  1E3 == a ? (q = 0, f.displayCommonReady(!1,
                      KUPLOADTOP.G_CURRKUPLOADER)) : 2E3 == a
                      ? (q = 1, f.displayCommonReady(!1,
                          KUPLOADTOP.G_CURRKUPLOADER)) : 2001 == a
                      && f.sendMessageToAgent(t, n, r, !1)
                }, r = function (a) {
                  KUPLOADTOP.G_CURRKUPLOADER._config.sendToManagerType =
                      "2";
                  f.sendMessageToAgent(t, n, null, !1)
                };
            f.displayCommonReady(!0, KUPLOADTOP.G_CURRKUPLOADER);
            f.sendMessageToAgent(t, n, r, !1)
          }
          return q
        }
      }
    } catch (g) {
      RAONKUPLOAD.logMode && console && console.log(g)
    }
  };
  RAONKUPLOAD.OpenLocalFile = function (a, c, b) {
    try {
      var e = RAONKUPLOAD.util._setRaonKUploader(b);
      if (e && (KUPLOADTOP.G_CURRKUPLOADER = e, "1"
      == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager)) {
        var f = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
        if (f) {
          try {
            a = a.toLowerCase()
          } catch (d) {
            RAONKUPLOAD.logMode && console && console.log(d)
          }
          b = [];
          var k =
              DirControl.BLACK_LIST;
          "" != k && (k = k.replace(/"/gi, ""), k = k.replace(/'/gi,
              ""), b = k.split(","));
          var k = !1, l = b.length;
          if (0 < l) {
            for (e = 0; e < l; e++) {
              var m = RAONKUPLOAD.util.trim(b[e]), m = m.toLowerCase();
              if (-1 < a.indexOf(m)) {
                k = !0;
                break
              }
            }
          }
          if (k) {
            return !1;
          }
          DirControl.openFile = a;
          DirControl.nextLineNo = 0;
          var p = "";
          if (RAONKUPLOAD.browser.ie && 10 > RAONKUPLOAD.browser.ieVersion) {
            var q = function (b) {
              b = b.split(RAONKSolution.Agent.vertical)[0];
              1E3 == b ? p = !0 : 2E3 == b ? p = !1 : 2001 == b && q(
                  raonkPatent.OpenLocalFile(a, c))
            };
            q(raonkPatent.OpenLocalFile(a,
                c))
          } else {
            l = [["kcmd", "KC77"]];
            l.push(["kp1", encodeURIComponent("OpenLocalFile")]);
            l.push(["kp2", encodeURIComponent(a)]);
            l.push(["kp3", encodeURIComponent(c)]);
            var n = f.setManagerParam("{}", l),
                n = KUPLOADTOP.RAONKSolution.Agent.makeEncryptManagerParam(n),
                q = function (a) {
                  a = KUPLOADTOP.RAONKSolution.Agent.parseRtn(a).code;
                  1E3 == a ? (p = !0, f.displayCommonReady(!1,
                      KUPLOADTOP.G_CURRKUPLOADER)) : 2E3 == a
                      ? (p = !1, f.displayCommonReady(!1,
                          KUPLOADTOP.G_CURRKUPLOADER)) : 2001 == a
                      && f.sendMessageToAgent(n, q, t, !1)
                }, t = function (a) {
                  KUPLOADTOP.G_CURRKUPLOADER._config.sendToManagerType =
                      "2";
                  f.sendMessageToAgent(n, q, null, !1)
                };
            f.displayCommonReady(!0, KUPLOADTOP.G_CURRKUPLOADER);
            f.sendMessageToAgent(n, q, t, !1)
          }
          return p
        }
      }
    } catch (r) {
      RAONKUPLOAD.logMode && console && console.log(r)
    }
  };
  RAONKUPLOAD.CloseLocalFile = function (a) {
    try {
      var c = RAONKUPLOAD.util._setRaonKUploader(a);
      if (c && (KUPLOADTOP.G_CURRKUPLOADER = c, "1"
      == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager)) {
        var b = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
        if (b) {
          var e = "";
          if (RAONKUPLOAD.browser.ie && 10 > RAONKUPLOAD.browser.ieVersion) {
            var f = function (a) {
              a =
                  a.split(RAONKSolution.Agent.vertical)[0];
              1E3 == a ? e = !0 : 2E3 == a ? e = !1 : 2001 == a && f(
                  raonkPatent.CloseLocalFile(DirControl.openFile))
            };
            f(raonkPatent.CloseLocalFile(DirControl.openFile))
          } else {
            a = [["kcmd", "KC77"]];
            a.push(["kp1", encodeURIComponent("CloseLocalFile")]);
            a.push(["kp2", encodeURIComponent(DirControl.openFile)]);
            var d = b.setManagerParam("{}", a),
                d = KUPLOADTOP.RAONKSolution.Agent.makeEncryptManagerParam(d),
                f = function (a) {
                  a = KUPLOADTOP.RAONKSolution.Agent.parseRtn(a).code;
                  1E3 == a ? (e = !0, b.displayCommonReady(!1,
                      KUPLOADTOP.G_CURRKUPLOADER)) : 2E3 == a
                      ? (e = !1, b.displayCommonReady(!1,
                          KUPLOADTOP.G_CURRKUPLOADER)) : 2001 == a
                      && b.sendMessageToAgent(d, f, k, !1)
                }, k = function (a) {
                  KUPLOADTOP.G_CURRKUPLOADER._config.sendToManagerType = "2";
                  b.sendMessageToAgent(d, f, null, !1)
                };
            b.displayCommonReady(!0, KUPLOADTOP.G_CURRKUPLOADER);
            b.sendMessageToAgent(d, f, k, !1)
          }
          return e
        }
      }
    } catch (l) {
      RAONKUPLOAD.logMode && console && console.log(l)
    }
  };
  RAONKUPLOAD.WriteString = function (a, c) {
    try {
      var b = RAONKUPLOAD.util._setRaonKUploader(c);
      if (b && (KUPLOADTOP.G_CURRKUPLOADER =
          b, "1" == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager)) {
        var e = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
        if (e) {
          var f = "";
          if (RAONKUPLOAD.browser.ie && 10 > RAONKUPLOAD.browser.ieVersion) {
            var d = function (b) {
              b = b.split(RAONKSolution.Agent.vertical)[0];
              1E3 == b ? f = !0 : 2E3 == b ? f = !1 : 2001 == b && d(
                  raonkPatent.WriteString(DirControl.openFile, a, "0"))
            };
            d(raonkPatent.WriteString(DirControl.openFile, a, "0"))
          } else {
            b = [["kcmd", "KC77"]];
            b.push(["kp1", encodeURIComponent("WriteString")]);
            b.push(["kp2", encodeURIComponent(DirControl.openFile)]);
            b.push(["kp3", encodeURIComponent(a)]);
            b.push(["kp4", encodeURIComponent("0")]);
            var k = e.setManagerParam("{}", b),
                k = KUPLOADTOP.RAONKSolution.Agent.makeEncryptManagerParam(k),
                d = function (a) {
                  a = KUPLOADTOP.RAONKSolution.Agent.parseRtn(a).code;
                  1E3 == a ? (f = !0, e.displayCommonReady(!1,
                      KUPLOADTOP.G_CURRKUPLOADER)) : 2E3 == a
                      ? (f = !1, e.displayCommonReady(!1,
                          KUPLOADTOP.G_CURRKUPLOADER)) : 2001 == a
                      && e.sendMessageToAgent(k, d, l, !1)
                }, l = function (a) {
                  KUPLOADTOP.G_CURRKUPLOADER._config.sendToManagerType = "2";
                  e.sendMessageToAgent(k,
                      d, null, !1)
                };
            e.displayCommonReady(!0, KUPLOADTOP.G_CURRKUPLOADER);
            e.sendMessageToAgent(k, d, l, !1)
          }
          return f
        }
      }
    } catch (m) {
      RAONKUPLOAD.logMode && console && console.log(m)
    }
  };
  RAONKUPLOAD.WritelnString = function (a, c) {
    try {
      var b = RAONKUPLOAD.util._setRaonKUploader(c);
      if (b && (KUPLOADTOP.G_CURRKUPLOADER = b, "1"
      == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager)) {
        var e = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
        if (e) {
          var f = "";
          if (RAONKUPLOAD.browser.ie && 10 > RAONKUPLOAD.browser.ieVersion) {
            var d = function (b) {
              b = b.split(RAONKSolution.Agent.vertical)[0];
              1E3 == b ? f = !0 : 2E3 == b ? f = !1 : 2001 == b && d(
                  raonkPatent.WriteString(DirControl.openFile, a, "1"))
            };
            d(raonkPatent.WriteString(DirControl.openFile, a, "1"))
          } else {
            b = [["kcmd", "KC77"]];
            b.push(["kp1", encodeURIComponent("WriteString")]);
            b.push(["kp2", encodeURIComponent(DirControl.openFile)]);
            b.push(["kp3", encodeURIComponent(a)]);
            b.push(["kp4", encodeURIComponent("1")]);
            var k = e.setManagerParam("{}", b),
                k = KUPLOADTOP.RAONKSolution.Agent.makeEncryptManagerParam(k),
                d = function (a) {
                  a = KUPLOADTOP.RAONKSolution.Agent.parseRtn(a).code;
                  1E3 == a ? (f = !0, e.displayCommonReady(!1,
                      KUPLOADTOP.G_CURRKUPLOADER)) : 2E3 == a
                      ? (f = !1, e.displayCommonReady(!1,
                          KUPLOADTOP.G_CURRKUPLOADER)) : 2001 == a
                      && e.sendMessageToAgent(k, d, l, !1)
                }, l = function (a) {
                  KUPLOADTOP.G_CURRKUPLOADER._config.sendToManagerType = "2";
                  e.sendMessageToAgent(k, d, null, !1)
                };
            e.displayCommonReady(!0, KUPLOADTOP.G_CURRKUPLOADER);
            e.sendMessageToAgent(k, d, l, !1)
          }
          return f
        }
      }
    } catch (m) {
      RAONKUPLOAD.logMode && console && console.log(m)
    }
  };
  RAONKUPLOAD.ReadString = function (a) {
    try {
      var c = RAONKUPLOAD.util._setRaonKUploader(a);
      if (c && (KUPLOADTOP.G_CURRKUPLOADER = c, "1"
      == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager)) {
        var b = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
        if (b) {
          var e = "";
          if (RAONKUPLOAD.browser.ie && 10 > RAONKUPLOAD.browser.ieVersion) {
            var f = function (a) {
              a = a.split(RAONKSolution.Agent.vertical);
              var b = a[0];
              1E3 == b ? (DirControl.nextLineNo++, e = a[1]) : 2E3 == b ? e = ""
                  : 2001 == b && f(raonkPatent.ReadString(DirControl.openFile,
                  DirControl.nextLineNo + ""))
            };
            f(raonkPatent.ReadString(DirControl.openFile,
                DirControl.nextLineNo + ""))
          } else {
            a = [["kcmd", "KC77"]];
            a.push(["kp1", encodeURIComponent("ReadString")]);
            a.push(["kp2", encodeURIComponent(DirControl.openFile)]);
            a.push(["kp3", encodeURIComponent(DirControl.nextLineNo + "")]);
            var d = b.setManagerParam("{}", a),
                d = KUPLOADTOP.RAONKSolution.Agent.makeEncryptManagerParam(d),
                f = function (a) {
                  a = KUPLOADTOP.RAONKSolution.Agent.parseRtn(a);
                  var c = a.code;
                  a = a.valueArr;
                  1E3 == c
                      ? (DirControl.nextLineNo++, e = a[0], b.displayCommonReady(
                          !1, KUPLOADTOP.G_CURRKUPLOADER)) : 2E3 == c
                          ? (e = "", b.displayCommonReady(!1,
                              KUPLOADTOP.G_CURRKUPLOADER)) :
                          2001 == c && b.sendMessageToAgent(d, f, k, !1)
                }, k = function (a) {
                  KUPLOADTOP.G_CURRKUPLOADER._config.sendToManagerType = "2";
                  b.sendMessageToAgent(d, f, null, !1)
                };
            b.displayCommonReady(!0, KUPLOADTOP.G_CURRKUPLOADER);
            b.sendMessageToAgent(d, f, k, !1)
          }
          return e
        }
      }
    } catch (l) {
      RAONKUPLOAD.logMode && console && console.log(l)
    }
  };
  RAONKUPLOAD.SaveUTF8 = function (a, c) {
    try {
      var b = RAONKUPLOAD.util._setRaonKUploader(c);
      if (b && (KUPLOADTOP.G_CURRKUPLOADER = b, "1"
      == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager)) {
        var e = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
        if (e) {
          if (RAONKUPLOAD.browser.ie && 10
              > RAONKUPLOAD.browser.ieVersion) {
            var f = function (b) {
              b = b.split(RAONKSolution.Agent.vertical)[0];
              1E3 != b && 2E3 != b && 2001 == b && f(raonkPatent.SaveToUTF8(a))
            };
            f(raonkPatent.SaveToUTF8(a))
          } else {
            b = [["kcmd", "KC77"]];
            b.push(["kp1", encodeURIComponent("SaveUTF8")]);
            b.push(["kp2", encodeURIComponent(a)]);
            var d = e.setManagerParam("{}", b),
                d = KUPLOADTOP.RAONKSolution.Agent.makeEncryptManagerParam(d),
                f = function (a) {
                  a = KUPLOADTOP.RAONKSolution.Agent.parseRtn(a).code;
                  1E3 == a ? e.displayCommonReady(!1,
                      KUPLOADTOP.G_CURRKUPLOADER) : 2E3 == a
                      ? e.displayCommonReady(!1, KUPLOADTOP.G_CURRKUPLOADER)
                      : 2001 == a && e.sendMessageToAgent(d, f, k, !1)
                }, k = function (a) {
                  KUPLOADTOP.G_CURRKUPLOADER._config.sendToManagerType = "2";
                  e.sendMessageToAgent(d, f, null, !1)
                };
            e.displayCommonReady(!0, KUPLOADTOP.G_CURRKUPLOADER);
            e.sendMessageToAgent(d, f, k, !1)
          }
        }
      }
    } catch (l) {
      RAONKUPLOAD.logMode && console && console.log(l)
    }
  };
  RAONKUPLOAD.OpenFileToBrowser = function (a, c) {
    try {
      var b = RAONKUPLOAD.util._setRaonKUploader(c);
      if (b && (KUPLOADTOP.G_CURRKUPLOADER =
          b, "1" == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager)) {
        var e = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
        if (e) {
          var f = "firefox.exe" + KUPLOADTOP.RAONKSolution.Agent.formfeed
              + "chrome.exe" + KUPLOADTOP.RAONKSolution.Agent.formfeed
              + "opera.exe" + KUPLOADTOP.RAONKSolution.Agent.formfeed
              + "safari.exe" + KUPLOADTOP.RAONKSolution.Agent.formfeed
              + "iexplore.exe";
          if (RAONKUPLOAD.browser.ie && 10 > RAONKUPLOAD.browser.ieVersion) {
            var d = function (b) {
              b = b.split(RAONKSolution.Agent.vertical)[0];
              1E3 != b && 2E3 != b && 2001 == b && d(raonkPatent.OpenHtml(a,
                  f))
            };
            d(raonkPatent.OpenHtml(a, f))
          } else {
            b = [["kcmd", "KC77"]];
            b.push(["kp1", encodeURIComponent("OpenHtml")]);
            b.push(["kp2", encodeURIComponent(a)]);
            b.push(["kp3", encodeURIComponent(f)]);
            var k = e.setManagerParam("{}", b),
                k = KUPLOADTOP.RAONKSolution.Agent.makeEncryptManagerParam(k),
                d = function (a) {
                  a = KUPLOADTOP.RAONKSolution.Agent.parseRtn(a).code;
                  1E3 == a ? e.displayCommonReady(!1,
                      KUPLOADTOP.G_CURRKUPLOADER) : 2E3 == a
                      ? e.displayCommonReady(!1, KUPLOADTOP.G_CURRKUPLOADER)
                      : 2001 == a && e.sendMessageToAgent(k, d, l, !1)
                }, l = function (a) {
                  KUPLOADTOP.G_CURRKUPLOADER._config.sendToManagerType =
                      "2";
                  e.sendMessageToAgent(k, d, null, !1)
                };
            e.displayCommonReady(!0, KUPLOADTOP.G_CURRKUPLOADER);
            e.sendMessageToAgent(k, d, l, !1)
          }
        }
      }
    } catch (m) {
      RAONKUPLOAD.logMode && console && console.log(m)
    }
  };
  RAONKUPLOAD.OpenFileToBrowser2 = function (a, c) {
    try {
      var b = RAONKUPLOAD.util._setRaonKUploader(c);
      if (b && (KUPLOADTOP.G_CURRKUPLOADER = b, "1"
      == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager)) {
        var e = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
        if (e) {
          var f = "iexplore.exe" + KUPLOADTOP.RAONKSolution.Agent.formfeed
              + "firefox.exe" + KUPLOADTOP.RAONKSolution.Agent.formfeed +
              "chrome.exe" + KUPLOADTOP.RAONKSolution.Agent.formfeed
              + "opera.exe" + KUPLOADTOP.RAONKSolution.Agent.formfeed
              + "safari.exe";
          if (RAONKUPLOAD.browser.ie && 10 > RAONKUPLOAD.browser.ieVersion) {
            var d = function (b) {
              b = b.split(RAONKSolution.Agent.vertical)[0];
              1E3 != b && 2E3 != b && 2001 == b && d(raonkPatent.OpenHtml(a, f))
            };
            d(raonkPatent.OpenHtml(a, f))
          } else {
            b = [["kcmd", "KC77"]];
            b.push(["kp1", encodeURIComponent("OpenHtml")]);
            b.push(["kp2", encodeURIComponent(a)]);
            b.push(["kp3", encodeURIComponent(f)]);
            var k = e.setManagerParam("{}",
                    b),
                k = KUPLOADTOP.RAONKSolution.Agent.makeEncryptManagerParam(k),
                d = function (a) {
                  a = KUPLOADTOP.RAONKSolution.Agent.parseRtn(a).code;
                  1E3 == a ? e.displayCommonReady(!1,
                      KUPLOADTOP.G_CURRKUPLOADER) : 2E3 == a
                      ? e.displayCommonReady(!1, KUPLOADTOP.G_CURRKUPLOADER)
                      : 2001 == a && e.sendMessageToAgent(k, d, l, !1)
                }, l = function (a) {
                  KUPLOADTOP.G_CURRKUPLOADER._config.sendToManagerType = "2";
                  e.sendMessageToAgent(k, d, null, !1)
                };
            e.displayCommonReady(!0, KUPLOADTOP.G_CURRKUPLOADER);
            e.sendMessageToAgent(k, d, l, !1)
          }
        }
      }
    } catch (m) {
      RAONKUPLOAD.logMode &&
      console && console.log(m)
    }
  };
  RAONKUPLOAD.ZipFile = function (a, c, b) {
    try {
      var e = RAONKUPLOAD.util._setRaonKUploader(b);
      if (e && (KUPLOADTOP.G_CURRKUPLOADER = e, "1"
      == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager)) {
        var f = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
        if (f) {
          var d = "";
          if (RAONKUPLOAD.browser.ie && 10 > RAONKUPLOAD.browser.ieVersion) {
            var k = function (b) {
              b = b.split(RAONKSolution.Agent.vertical)[0];
              1E3 == b ? d = 1 : 2E3 == b ? d = 0 : 2001 == b && k(
                  raonkPatent.AddFile(a, c))
            };
            k(raonkPatent.AddFile(a, c))
          } else {
            b = [["kcmd", "KC77"]];
            b.push(["kp1",
              encodeURIComponent("AddFile")]);
            b.push(["kp2", encodeURIComponent(a)]);
            b.push(["kp3", encodeURIComponent(c)]);
            var l = f.setManagerParam("{}", b),
                l = KUPLOADTOP.RAONKSolution.Agent.makeEncryptManagerParam(l),
                k = function (a) {
                  a = KUPLOADTOP.RAONKSolution.Agent.parseRtn(a).code;
                  1E3 == a ? (d = 1, f.displayCommonReady(!1,
                      KUPLOADTOP.G_CURRKUPLOADER)) : 2E3 == a
                      ? (d = 0, f.displayCommonReady(!1,
                          KUPLOADTOP.G_CURRKUPLOADER)) : 2001 == a
                      && f.sendMessageToAgent(l, k, m, !1)
                }, m = function (a) {
                  KUPLOADTOP.G_CURRKUPLOADER._config.sendToManagerType =
                      "2";
                  f.sendMessageToAgent(l, k, null, !1)
                };
            f.displayCommonReady(!0, KUPLOADTOP.G_CURRKUPLOADER);
            f.sendMessageToAgent(l, k, m, !1)
          }
          return d
        }
      }
    } catch (p) {
      RAONKUPLOAD.logMode && console && console.log(p)
    }
  };
  RAONKUPLOAD.UnZipFile = function (a, c, b) {
    try {
      var e = RAONKUPLOAD.util._setRaonKUploader(b);
      if (e && (KUPLOADTOP.G_CURRKUPLOADER = e, "1"
      == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager)) {
        var f = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
        if (f) {
          var d = "";
          if (RAONKUPLOAD.browser.ie && 10 > RAONKUPLOAD.browser.ieVersion) {
            var k = function (b) {
              b =
                  b.split(RAONKSolution.Agent.vertical)[0];
              1E3 == b ? d = 1 : 2E3 == b ? d = 0 : 2001 == b && k(
                  raonkPatent.ExtractFile(a, c))
            };
            k(raonkPatent.ExtractFile(a, c))
          } else {
            b = [["kcmd", "KC77"]];
            b.push(["kp1", encodeURIComponent("ExtractFile")]);
            b.push(["kp2", encodeURIComponent(a)]);
            b.push(["kp3", encodeURIComponent(c)]);
            var l = f.setManagerParam("{}", b),
                l = KUPLOADTOP.RAONKSolution.Agent.makeEncryptManagerParam(l),
                k = function (a) {
                  a = KUPLOADTOP.RAONKSolution.Agent.parseRtn(a).code;
                  1E3 == a ? (d = 1, f.displayCommonReady(!1,
                          KUPLOADTOP.G_CURRKUPLOADER)) :
                      2E3 == a ? (d = 0, f.displayCommonReady(!1,
                          KUPLOADTOP.G_CURRKUPLOADER)) : 2001 == a
                          && f.sendMessageToAgent(l, k, m, !1)
                }, m = function (a) {
                  KUPLOADTOP.G_CURRKUPLOADER._config.sendToManagerType = "2";
                  f.sendMessageToAgent(l, k, null, !1)
                };
            f.displayCommonReady(!0, KUPLOADTOP.G_CURRKUPLOADER);
            f.sendMessageToAgent(l, k, m, !1)
          }
          return d
        }
      }
    } catch (p) {
      RAONKUPLOAD.logMode && console && console.log(p)
    }
  };
  RAONKUPLOAD.SetUnZipPaperInfo = function (a, c, b, e, f) {
    try {
      var d = RAONKUPLOAD.util._setRaonKUploader(f);
      if (d && (KUPLOADTOP.G_CURRKUPLOADER = d, "1" ==
      KUPLOADTOP.G_CURRKUPLOADER._config.useKManager
      && KUPLOADTOP.G_CURRKUPLOADER.frameWin)) {
        f = "";
        var k = a.split("\\"), l = k.length;
        for (a = 0; a < l - 1; a++) {
          f += k[a] + "\\";
        }
        c.lastIndexOf("\\") != c.length - 1 && (c += "\\");
        UnZipPaper.SendDelFileList = f;
        UnZipPaper.ZipSourceDir = c;
        UnZipPaper.ZipSourceFile = b;
        UnZipPaper.UnZipTargetFile = e
      }
    } catch (m) {
      RAONKUPLOAD.logMode && console && console.log(m)
    }
  };
  RAONKUPLOAD.UnZipPaperInfo = function (a) {
    try {
      var c = RAONKUPLOAD.util._setRaonKUploader(a);
      if (c && (KUPLOADTOP.G_CURRKUPLOADER = c, "1"
      == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager)) {
        var b =
            KUPLOADTOP.G_CURRKUPLOADER.frameWin;
        if (b) {
          var e = "";
          if (RAONKUPLOAD.browser.ie && 10 > RAONKUPLOAD.browser.ieVersion) {
            var f = function (a) {
              a = a.split(RAONKSolution.Agent.vertical)[0];
              1E3 == a ? e = 0 : 2E3 == a ? e = 1 : 2001 == a && f(
                  raonkPatent.UnZipPaperInfo(UnZipPaper.SendDelFileList,
                      UnZipPaper.ZipSourceDir + UnZipPaper.ZipSourceFile,
                      UnZipPaper.UnZipTargetFile))
            };
            f(raonkPatent.UnZipPaperInfo(UnZipPaper.SendDelFileList,
                UnZipPaper.ZipSourceDir + UnZipPaper.ZipSourceFile,
                UnZipPaper.UnZipTargetFile))
          } else {
            a = [["kcmd", "KC77"]];
            a.push(["kp1",
              encodeURIComponent("UnZipPaperInfo")]);
            a.push(["kp2", encodeURIComponent(UnZipPaper.SendDelFileList)]);
            a.push(["kp3", encodeURIComponent(
                UnZipPaper.ZipSourceDir + UnZipPaper.ZipSourceFile)]);
            a.push(["kp4", encodeURIComponent(UnZipPaper.UnZipTargetFile)]);
            var d = b.setManagerParam("{}", a),
                d = KUPLOADTOP.RAONKSolution.Agent.makeEncryptManagerParam(d),
                f = function (a) {
                  a = KUPLOADTOP.RAONKSolution.Agent.parseRtn(a).code;
                  1E3 == a ? (e = 0, b.displayCommonReady(!1,
                      KUPLOADTOP.G_CURRKUPLOADER)) : 2E3 == a
                      ? (e = 1, b.displayCommonReady(!1,
                          KUPLOADTOP.G_CURRKUPLOADER)) : 2001 == a
                      && b.sendMessageToAgent(d, f, k, !1)
                }, k = function (a) {
                  KUPLOADTOP.G_CURRKUPLOADER._config.sendToManagerType = "2";
                  b.sendMessageToAgent(d, f, null, !1)
                };
            b.displayCommonReady(!0, KUPLOADTOP.G_CURRKUPLOADER);
            b.sendMessageToAgent(d, f, k, !1)
          }
          return e
        }
      }
    } catch (l) {
      RAONKUPLOAD.logMode && console && console.log(l)
    }
  };
  RAONKUPLOAD.GetZipSourceDir = function (a) {
    var c = "";
    try {
      var b = RAONKUPLOAD.util._setRaonKUploader(a);
      b && (KUPLOADTOP.G_CURRKUPLOADER = b, "1"
      == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager &&
      KUPLOADTOP.G_CURRKUPLOADER.frameWin && (c = UnZipPaper.ZipSourceDir))
    } catch (e) {
      RAONKUPLOAD.logMode && console && console.log(e)
    }
    return c
  };
  RAONKUPLOAD.GetUnZipTargetFile = function (a) {
    var c = "";
    try {
      var b = RAONKUPLOAD.util._setRaonKUploader(a);
      b && (KUPLOADTOP.G_CURRKUPLOADER = b, "1"
      == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager
      && KUPLOADTOP.G_CURRKUPLOADER.frameWin
      && (c = UnZipPaper.UnZipTargetFile))
    } catch (e) {
      RAONKUPLOAD.logMode && console && console.log(e)
    }
    return c
  };
  RAONKUPLOAD.GetZipSourceFile = function (a) {
    var c = "";
    try {
      var b =
          RAONKUPLOAD.util._setRaonKUploader(a);
      b && (KUPLOADTOP.G_CURRKUPLOADER = b, "1"
      == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager
      && KUPLOADTOP.G_CURRKUPLOADER.frameWin && (c = UnZipPaper.ZipSourceFile))
    } catch (e) {
      RAONKUPLOAD.logMode && console && console.log(e)
    }
    return c
  };
  RAONKUPLOAD.GetSendDelFileList = function (a) {
    var c = "";
    try {
      var b = RAONKUPLOAD.util._setRaonKUploader(a);
      b && (KUPLOADTOP.G_CURRKUPLOADER = b, "1"
      == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager
      && KUPLOADTOP.G_CURRKUPLOADER.frameWin
      && (c = UnZipPaper.SendDelFileList))
    } catch (e) {
      RAONKUPLOAD.logMode &&
      console && console.log(e)
    }
    return c
  };
  RAONKUPLOAD.SetDialogInitDir = function (a, c) {
    try {
      var b = RAONKUPLOAD.util._setRaonKUploader(c);
      b && (KUPLOADTOP.G_CURRKUPLOADER = b, "1"
      == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager
      && KUPLOADTOP.G_CURRKUPLOADER.frameWin && (SelectFile.initDir = a))
    } catch (e) {
      RAONKUPLOAD.logMode && console && console.log(e)
    }
  };
  RAONKUPLOAD.SetDialogTitle = function (a, c) {
    try {
      var b = RAONKUPLOAD.util._setRaonKUploader(c);
      b && (KUPLOADTOP.G_CURRKUPLOADER = b, "1"
      == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager &&
      KUPLOADTOP.G_CURRKUPLOADER.frameWin && (SelectFile.DialogTitle = a))
    } catch (e) {
      RAONKUPLOAD.logMode && console && console.log(e)
    }
  };
  RAONKUPLOAD.SetDialogFilter = function (a, c) {
    try {
      var b = RAONKUPLOAD.util._setRaonKUploader(c);
      if (b && (KUPLOADTOP.G_CURRKUPLOADER = b, "1"
      == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager
      && KUPLOADTOP.G_CURRKUPLOADER.frameWin)) {
        var e = a.length;
        "|" == a.substring(e - 1, e) && (a = a.substring(0, e - 1));
        if (-1 < a.indexOf(".wad") || -1 < a.indexOf(".sg1")) {
          var f = a.split("|"), d = f.length;
          a = "";
          for (b = 0; b < d; b++) {
            0 ==
            b % 2 && (-1 < f[b].indexOf(".wad") && "*.*" == f[b + 1] ? f[b
            + 1] = "*.txt;*.wad" : -1 < f[b].indexOf(".sg1") && "*.*" == f[b
                + 1]
                && (f[b + 1] = "*.txt;*.zg1;*.sg1")), a += f[b] + "|"
          }
        }
        e = a.length;
        "|" == a.substring(e - 1, e) && (a = a.substring(0, e - 1));
        SelectFile.Filter = a
      }
    } catch (k) {
      RAONKUPLOAD.logMode && console && console.log(k)
    }
  };
  RAONKUPLOAD.OpenDialogMultiSelect = function (a) {
    try {
      var c = RAONKUPLOAD.util._setRaonKUploader(a);
      if (c && (KUPLOADTOP.G_CURRKUPLOADER = c, "1"
      == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager)) {
        var b = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
        if (b) {
          var e = "";
          if (RAONKUPLOAD.browser.ie && 10 > RAONKUPLOAD.browser.ieVersion) {
            var f = function (a) {
              a = a.split(RAONKSolution.Agent.vertical);
              var b = a[0];
              if (1E3 == b) {
                SelectFile.fileName = "";
                SelectFile.fileExt = "";
                SelectFile.fileLength = 0;
                for (var b = a.length, c = 1; c < b; c++) {
                  var d = a[c].split(KUPLOADTOP.RAONKSolution.Agent.formfeed);
                  SelectFile.fileName += d[0] + "+"
                }
                e = !0
              } else {
                2E3 == b ? e = !1 : 2001 == b && f(
                    raonkPatent.MultiSave(SelectFile.initDir,
                        SelectFile.DialogTitle, SelectFile.Filter,
                        "" + RAONKSolution.Agent.formfeed + "1"
                        + RAONKSolution.Agent.formfeed +
                        "0"))
              }
            };
            f(raonkPatent.MultiSave(SelectFile.initDir, SelectFile.DialogTitle,
                SelectFile.Filter, "" + RAONKSolution.Agent.formfeed + "1"
                + RAONKSolution.Agent.formfeed + "0"))
          } else {
            a = [["kcmd", "KC77"]];
            a.push(["kp1", encodeURIComponent("MultiSave")]);
            a.push(["kp2", encodeURIComponent(SelectFile.initDir)]);
            a.push(["kp3", encodeURIComponent(SelectFile.DialogTitle)]);
            a.push(["kp4", encodeURIComponent(SelectFile.Filter)]);
            a.push(["kp5", encodeURIComponent("")]);
            a.push(["kp6", encodeURIComponent("1")]);
            a.push(["kp7", encodeURIComponent("0")]);
            var d = b.setManagerParam("{}", a),
                d = KUPLOADTOP.RAONKSolution.Agent.makeEncryptManagerParam(d),
                f = function (a) {
                  a = KUPLOADTOP.RAONKSolution.Agent.parseRtn(a);
                  var c = a.code;
                  a = a.valueArr;
                  if (1E3 == c) {
                    SelectFile.fileName = "";
                    SelectFile.fileExt = "";
                    SelectFile.fileLength = 0;
                    for (var c = a.length, l = 0; l < c; l++) {
                      var n = a[l].split(
                          KUPLOADTOP.RAONKSolution.Agent.formfeed);
                      SelectFile.fileName += n[0] + "+"
                    }
                    e = !0;
                    b.displayCommonReady(!1, KUPLOADTOP.G_CURRKUPLOADER)
                  } else {
                    2E3 == c ? (e = !1, b.displayCommonReady(!1,
                            KUPLOADTOP.G_CURRKUPLOADER)) :
                        2001 == c && b.sendMessageToAgent(d, f, k, !1)
                  }
                }, k = function (a) {
                  KUPLOADTOP.G_CURRKUPLOADER._config.sendToManagerType = "2";
                  b.sendMessageToAgent(d, f, null, !1)
                };
            b.displayCommonReady(!0, KUPLOADTOP.G_CURRKUPLOADER);
            b.sendMessageToAgent(d, f, k, !1)
          }
          return e
        }
      }
    } catch (l) {
      RAONKUPLOAD.logMode && console && console.log(l)
    }
  };
  RAONKUPLOAD.OpenFolderDialog = function (a) {
    try {
      var c = RAONKUPLOAD.util._setRaonKUploader(a);
      if (c && (KUPLOADTOP.G_CURRKUPLOADER = c, "1"
      == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager)) {
        var b = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
        if (b) {
          var e = "";
          if (RAONKUPLOAD.browser.ie && 10 > RAONKUPLOAD.browser.ieVersion) {
            var f = SelectFile.DialogTitle,
                f = f + (KUPLOADTOP.RAONKSolution.Agent.formfeed
                    + KUPLOADTOP.G_CURRKUPLOADER._config.folderSelectDialogButtonName),
                d = function (a) {
                  a = a.split(RAONKSolution.Agent.vertical);
                  var b = a[0];
                  1E3 == b
                      ? (SelectFile.dirPath = "", SelectFile.dirPath = a[1], e = !0)
                      : 2E3 == b ? e = !1 : 2001 == b && d(
                          raonkPatent.ShowDirectoryDialog(SelectFile.initDir, f))
                };
            d(raonkPatent.ShowDirectoryDialog(SelectFile.initDir, f))
          } else {
            a = [["kcmd", "KC77"]];
            a.push(["kp1", encodeURIComponent("Show")]);
            a.push(["kp2", encodeURIComponent(SelectFile.initDir)]);
            f = SelectFile.DialogTitle;
            f += KUPLOADTOP.RAONKSolution.Agent.formfeed
                + KUPLOADTOP.G_CURRKUPLOADER._config.folderSelectDialogButtonName;
            a.push(["kp3", encodeURIComponent(f)]);
            var k = b.setManagerParam("{}", a),
                k = KUPLOADTOP.RAONKSolution.Agent.makeEncryptManagerParam(k),
                d = function (a) {
                  a = KUPLOADTOP.RAONKSolution.Agent.parseRtn(a);
                  var c = a.code;
                  a = a.valueArr;
                  1E3 == c
                      ? (SelectFile.dirPath = "", SelectFile.dirPath = a[0], e =
                          !0, b.displayCommonReady(!1, KUPLOADTOP.G_CURRKUPLOADER))
                      : 2E3 == c ? (e = !1, b.displayCommonReady(!1,
                          KUPLOADTOP.G_CURRKUPLOADER)) : 2001 == c
                          && b.sendMessageToAgent(k, d, l, !1)
                }, l = function (a) {
                  KUPLOADTOP.G_CURRKUPLOADER._config.sendToManagerType = "2";
                  b.sendMessageToAgent(k, d, null, !1)
                };
            b.displayCommonReady(!0, KUPLOADTOP.G_CURRKUPLOADER);
            b.sendMessageToAgent(k, d, l, !1)
          }
          return e
        }
      }
    } catch (m) {
      RAONKUPLOAD.logMode && console && console.log(m)
    }
  };
  RAONKUPLOAD.OpenDialogSingleSelect = function (a) {
    try {
      var c = RAONKUPLOAD.util._setRaonKUploader(a);
      if (c && (KUPLOADTOP.G_CURRKUPLOADER = c, "1"
      == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager)) {
        var b = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
        if (b) {
          var e = "";
          if (RAONKUPLOAD.browser.ie && 10 > RAONKUPLOAD.browser.ieVersion) {
            var f = function (a) {
              a = a.split(RAONKSolution.Agent.vertical);
              var b = a[0];
              if (1E3 == b) {
                SelectFile.fileName = "";
                SelectFile.fileExt = "";
                SelectFile.fileLength = 0;
                for (var b = a.length, c = 1; c < b; c++) {
                  var d = a[c].split(KUPLOADTOP.RAONKSolution.Agent.formfeed);
                  SelectFile.fileName = d[0];
                  SelectFile.fileLength = RAONKUPLOAD.util.parseIntOr0(d[1]);
                  var d = SelectFile.fileName.split("."), k = d.length;
                  SelectFile.fileExt = 1 < k ? d[k - 1] : ""
                }
                e = !0
              } else {
                2E3 == b ? e = !1 : 2001 == b && f(
                    raonkPatent.MultiSave(SelectFile.initDir,
                        SelectFile.DialogTitle, SelectFile.Filter,
                        "" + RAONKSolution.Agent.formfeed + "0"
                        + RAONKSolution.Agent.formfeed + "0"))
              }
            };
            f(raonkPatent.MultiSave(SelectFile.initDir, SelectFile.DialogTitle,
                SelectFile.Filter, "" + RAONKSolution.Agent.formfeed + "0"
                + RAONKSolution.Agent.formfeed + "0"))
          } else {
            a = [["kcmd", "KC77"]];
            a.push(["kp1", encodeURIComponent("MultiSave")]);
            a.push(["kp2",
              encodeURIComponent(SelectFile.initDir)]);
            a.push(["kp3", encodeURIComponent(SelectFile.DialogTitle)]);
            a.push(["kp4", encodeURIComponent(SelectFile.Filter)]);
            a.push(["kp5", encodeURIComponent("")]);
            a.push(["kp6", encodeURIComponent("0")]);
            a.push(["kp7", encodeURIComponent("0")]);
            var d = b.setManagerParam("{}", a),
                d = KUPLOADTOP.RAONKSolution.Agent.makeEncryptManagerParam(d),
                f = function (a) {
                  a = KUPLOADTOP.RAONKSolution.Agent.parseRtn(a);
                  var c = a.code;
                  a = a.valueArr;
                  if (1E3 == c) {
                    SelectFile.fileName = "";
                    SelectFile.fileExt =
                        "";
                    SelectFile.fileLength = 0;
                    for (var c = a.length, l = 0; l < c; l++) {
                      var n = a[l].split(
                          KUPLOADTOP.RAONKSolution.Agent.formfeed);
                      SelectFile.fileName = n[0];
                      SelectFile.fileLength = RAONKUPLOAD.util.parseIntOr0(
                          n[1]);
                      var n = SelectFile.fileName.split("."), t = n.length;
                      SelectFile.fileExt = 1 < t ? n[t - 1] : ""
                    }
                    e = !0;
                    b.displayCommonReady(!1, KUPLOADTOP.G_CURRKUPLOADER)
                  } else {
                    2E3 == c ? (e = !1, b.displayCommonReady(!1,
                        KUPLOADTOP.G_CURRKUPLOADER)) : 2001 == c
                        && b.sendMessageToAgent(d, f, k, !1)
                  }
                }, k = function (a) {
                  KUPLOADTOP.G_CURRKUPLOADER._config.sendToManagerType =
                      "2";
                  b.sendMessageToAgent(d, f, null, !1)
                };
            b.displayCommonReady(!0, KUPLOADTOP.G_CURRKUPLOADER);
            b.sendMessageToAgent(d, f, k, !1)
          }
          return e
        }
      }
    } catch (l) {
      RAONKUPLOAD.logMode && console && console.log(l)
    }
  };
  RAONKUPLOAD.OpenSaveDialog = function (a) {
    try {
      var c = RAONKUPLOAD.util._setRaonKUploader(a);
      if (c && (KUPLOADTOP.G_CURRKUPLOADER = c, "1"
      == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager)) {
        var b = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
        if (b) {
          var e = SelectFile.fileName;
          if ("" != e) {
            var f = SelectFile.fileName.split("\\"),
                e = f[f.length - 1];
          }
          var d = "";
          if (RAONKUPLOAD.browser.ie && 10 > RAONKUPLOAD.browser.ieVersion) {
            var k = function (a) {
              a = a.split(RAONKSolution.Agent.vertical);
              var b = a[0];
              if (1E3 == b) {
                SelectFile.fileName = "";
                SelectFile.fileExt = "";
                SelectFile.fileLength = 0;
                for (var b = a.length, c = 1; c < b; c++) {
                  var f = a[c].split(RAONKSolution.Agent.formfeed);
                  SelectFile.fileName = f[0]
                }
                d = !0
              } else {
                2E3 == b ? d = !1 : 2001 == b && k(
                    raonkPatent.MultiSave(SelectFile.initDir,
                        SelectFile.DialogTitle, SelectFile.Filter,
                        e + RAONKSolution.Agent.formfeed + "0"
                        + RAONKSolution.Agent.formfeed +
                        "1"))
              }
            };
            k(raonkPatent.MultiSave(SelectFile.initDir, SelectFile.DialogTitle,
                SelectFile.Filter, e + RAONKSolution.Agent.formfeed + "0"
                + RAONKSolution.Agent.formfeed + "1"))
          } else {
            a = [["kcmd", "KC77"]];
            a.push(["kp1", encodeURIComponent("MultiSave")]);
            a.push(["kp2", encodeURIComponent(SelectFile.initDir)]);
            a.push(["kp3", encodeURIComponent(SelectFile.DialogTitle)]);
            a.push(["kp4", encodeURIComponent(SelectFile.Filter)]);
            a.push(["kp5", encodeURIComponent(e)]);
            a.push(["kp6", encodeURIComponent("0")]);
            a.push(["kp7", encodeURIComponent("1")]);
            var l = b.setManagerParam("{}", a),
                l = KUPLOADTOP.RAONKSolution.Agent.makeEncryptManagerParam(l),
                k = function (a) {
                  a = KUPLOADTOP.RAONKSolution.Agent.parseRtn(a);
                  var c = a.code;
                  a = a.valueArr;
                  if (1E3 == c) {
                    SelectFile.fileName = "";
                    SelectFile.fileExt = "";
                    SelectFile.fileLength = 0;
                    for (var c = a.length, f = 0; f < c;
                        f++) {
                      SelectFile.fileName = a[0];
                    }
                    d = !0;
                    b.displayCommonReady(!1, KUPLOADTOP.G_CURRKUPLOADER)
                  } else {
                    2E3 == c ? (d = !1, b.displayCommonReady(!1,
                        KUPLOADTOP.G_CURRKUPLOADER)) : 2001 == c
                        && b.sendMessageToAgent(l, k, m, !1)
                  }
                }, m = function (a) {
                  KUPLOADTOP.G_CURRKUPLOADER._config.sendToManagerType =
                      "2";
                  b.sendMessageToAgent(l, k, null, !1)
                };
            b.displayCommonReady(!0, KUPLOADTOP.G_CURRKUPLOADER);
            b.sendMessageToAgent(l, k, m, !1)
          }
          return d
        }
      }
    } catch (p) {
      RAONKUPLOAD.logMode && console && console.log(p)
    }
  };
  RAONKUPLOAD.GetDialogFilePath = function (a, c) {
    var b = "";
    try {
      var e = RAONKUPLOAD.util._setRaonKUploader(c);
      e && (KUPLOADTOP.G_CURRKUPLOADER = e, "1"
      == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager
      && KUPLOADTOP.G_CURRKUPLOADER.frameWin && (b = SelectFile.fileName))
    } catch (f) {
      RAONKUPLOAD.logMode && console && console.log(f)
    }
    return b
  };
  RAONKUPLOAD.GetDialogFolderPath = function (a, c) {
    var b = "";
    try {
      var e = RAONKUPLOAD.util._setRaonKUploader(c);
      e && (KUPLOADTOP.G_CURRKUPLOADER = e, "1"
      == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager
      && KUPLOADTOP.G_CURRKUPLOADER.frameWin && (b = SelectFile.dirPath))
    } catch (f) {
      RAONKUPLOAD.logMode && console && console.log(f)
    }
    return b
  };
  RAONKUPLOAD.GetDialogFileSize = function (a, c) {
    var b = 0;
    try {
      var e = RAONKUPLOAD.util._setRaonKUploader(c);
      e && (KUPLOADTOP.G_CURRKUPLOADER = e, "1"
      == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager
      && KUPLOADTOP.G_CURRKUPLOADER.frameWin &&
      (b = SelectFile.fileLength))
    } catch (f) {
      RAONKUPLOAD.logMode && console && console.log(f)
    }
    return b
  };
  RAONKUPLOAD.GetDialogFileExt = function (a, c) {
    var b = "";
    try {
      var e = RAONKUPLOAD.util._setRaonKUploader(c);
      e && (KUPLOADTOP.G_CURRKUPLOADER = e, "1"
      == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager
      && KUPLOADTOP.G_CURRKUPLOADER.frameWin && (b = SelectFile.fileExt))
    } catch (f) {
      RAONKUPLOAD.logMode && console && console.log(f)
    }
    return b
  };
  RAONKUPLOAD.GetRegValue = function (a, c, b) {
    try {
      var e = RAONKUPLOAD.util._setRaonKUploader(b);
      if (e && (KUPLOADTOP.G_CURRKUPLOADER =
          e, "1" == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager)) {
        var f = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
        if (f) {
          var d = "";
          if (RAONKUPLOAD.browser.ie && 10 > RAONKUPLOAD.browser.ieVersion) {
            var k = function (b) {
              b = b.split(RAONKSolution.Agent.vertical);
              var f = b[0];
              1E3 == f ? d = b[1] : 2E3 == f ? d = "" : 2001 == f && k(
                  raonkPatent.GetRegString(a, c))
            };
            k(raonkPatent.GetRegString(a, c))
          } else {
            b = [["kcmd", "KC77"]];
            b.push(["kp1", encodeURIComponent("getregstring")]);
            b.push(["kp2", encodeURIComponent(a)]);
            b.push(["kp3", encodeURIComponent(c)]);
            var l =
                    f.setManagerParam("{}", b),
                l = KUPLOADTOP.RAONKSolution.Agent.makeEncryptManagerParam(l),
                k = function (a) {
                  a = KUPLOADTOP.RAONKSolution.Agent.parseRtn(a);
                  var b = a.code;
                  a = a.valueArr;
                  1E3 == b ? (d = a[0], f.displayCommonReady(!1,
                      KUPLOADTOP.G_CURRKUPLOADER)) : 2E3 == b
                      ? (d = "", f.displayCommonReady(!1,
                          KUPLOADTOP.G_CURRKUPLOADER)) : 2001 == b
                      && f.sendMessageToAgent(l, k, m, !1)
                }, m = function (a) {
                  KUPLOADTOP.G_CURRKUPLOADER._config.sendToManagerType = "2";
                  f.sendMessageToAgent(l, k, null, !1)
                };
            f.displayCommonReady(!0, KUPLOADTOP.G_CURRKUPLOADER);
            f.sendMessageToAgent(l, k, m, !1)
          }
          return d
        }
      }
    } catch (p) {
      RAONKUPLOAD.logMode && console && console.log(p)
    }
  };
  RAONKUPLOAD.SetRegValue = function (a, c, b, e) {
    try {
      var f = RAONKUPLOAD.util._setRaonKUploader(e);
      if (f && (KUPLOADTOP.G_CURRKUPLOADER = f, "1"
      == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager)) {
        var d = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
        if (d) {
          if (RAONKUPLOAD.browser.ie && 10
              > RAONKUPLOAD.browser.ieVersion) {
            var k = function (d) {
              d = d.split(RAONKSolution.Agent.vertical)[0];
              1E3 != d && 2E3 != d && 2001 == d && k(raonkPatent.SetRegString(a,
                  c, b))
            };
            k(raonkPatent.SetRegString(a, c, b))
          } else {
            e = [["kcmd", "KC77"]];
            e.push(["kp1", encodeURIComponent("setregstring")]);
            e.push(["kp2", encodeURIComponent(a)]);
            e.push(["kp3", encodeURIComponent(c)]);
            e.push(["kp4", encodeURIComponent(b)]);
            var l = d.setManagerParam("{}", e),
                l = KUPLOADTOP.RAONKSolution.Agent.makeEncryptManagerParam(l),
                k = function (a) {
                  a = KUPLOADTOP.RAONKSolution.Agent.parseRtn(a).code;
                  1E3 == a ? d.displayCommonReady(!1,
                          KUPLOADTOP.G_CURRKUPLOADER)
                      : 2E3 == a ? d.displayCommonReady(!1,
                              KUPLOADTOP.G_CURRKUPLOADER) :
                          2001 == a && d.sendMessageToAgent(l, k, m, !1)
                }, m = function (a) {
                  KUPLOADTOP.G_CURRKUPLOADER._config.sendToManagerType = "2";
                  d.sendMessageToAgent(l, k, null, !1)
                };
            d.displayCommonReady(!0, KUPLOADTOP.G_CURRKUPLOADER);
            d.sendMessageToAgent(l, k, m, !1)
          }
        }
      }
    } catch (p) {
      RAONKUPLOAD.logMode && console && console.log(p)
    }
  };
  RAONKUPLOAD.GetFileVersion = function (a, c, b, e) {
    try {
      var f = RAONKUPLOAD.util._setRaonKUploader(e);
      if (f) {
        KUPLOADTOP.G_CURRKUPLOADER = f;
        var d = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
        if (d && "1" == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager &&
            (d = KUPLOADTOP.G_CURRKUPLOADER.frameWin)) {
          e = [["kcmd", "KC07"]];
          e.push(["kp1", encodeURIComponent(a)]);
          "," != c && (c = ".");
          e.push(["kp2", c]);
          var k = d.setManagerParam("{}", e),
              k = KUPLOADTOP.RAONKSolution.Agent.makeEncryptManagerParam(k),
              l = function (a) {
                a = KUPLOADTOP.RAONKSolution.Agent.parseRtn(a);
                var c = a.code;
                a = a.valueArr;
                1E3 == c ? ("function" === typeof b && b(
                        a[0]), d.displayCommonReady(!1, KUPLOADTOP.G_CURRKUPLOADER))
                    : 2E3 == c ? ("function" === typeof b && b(
                            ""), d.displayCommonReady(!1, KUPLOADTOP.G_CURRKUPLOADER))
                        : 2001 == c &&
                        d.sendMessageToAgent(k, l, m, !1)
              }, m = function (a) {
                KUPLOADTOP.G_CURRKUPLOADER._config.sendToManagerType = "2";
                d.sendMessageToAgent(k, l, null, !1)
              };
          d.displayCommonReady(!0, KUPLOADTOP.G_CURRKUPLOADER);
          d.sendMessageToAgent(k, l, m, !1)
        }
      }
    } catch (p) {
      RAONKUPLOAD.logMode && console && console.log(p)
    }
  };
  RAONKUPLOAD.SetAgentTempRootDirectory = function (a, c) {
    try {
      var b = RAONKUPLOAD.util._setRaonKUploader(c);
      b
      && (KUPLOADTOP.G_CURRKUPLOADER = b, KUPLOADTOP.G_CURRKUPLOADER._config.agentTempRootDirectory = a)
    } catch (e) {
      RAONKUPLOAD.logMode &&
      console && console.log(e)
    }
  };
  RAONKUPLOAD.GetExcelData = function (a, c) {
    try {
      var b = RAONKUPLOAD.util._setRaonKUploader(c);
      if (b && "1" == b._config.useKManager) {
        var e = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
        e && e.selectExcelForImport(a, b)
      }
    } catch (f) {
      RAONKUPLOAD.logMode && console && console.log(f)
    }
  };
  RAONKUPLOAD.GetClientIP = function (a) {
    var c = "";
    try {
      var b = RAONKUPLOAD.util._setRaonKUploader(a);
      b && (c = b.clientIP)
    } catch (e) {
      RAONKUPLOAD.logMode && console && console.log(e)
    }
    return c
  };
  RAONKUPLOAD.GetPlugin = function (a, c) {
    try {
      var b = RAONKUPLOAD.util._setRaonKUploader(c);
      if (b) {
        var e = b.frameWin;
        if (e) {
          return e.G_KUPlugin[a]
        }
      }
    } catch (f) {
      RAONKUPLOAD.logMode && console && console.log(f)
    }
  };
  RAONKUPLOAD.AddCSRFToken = function (a, c, b) {
    try {
      var e = RAONKUPLOAD.util._setRaonKUploader(b);
      e && RAONKUPLOAD.AddHttpHeader(a, c, e.ID)
    } catch (f) {
      RAONKUPLOAD.logMode && console && console.log(f)
    }
  };
  RAONKUPLOAD._AP03 = "JhbURhdGFcUkFPTldJWlxSQU9OIE";
  RAONKUPLOAD._AP10 = "BTZXR0aW5nc1xBbGwgVXNlcnNcQXBwb";
  RAONKUPLOAD.IsAgentInstalled = function (a) {
    try {
      var c = "http://127.0.0.1:", b;
      if (RAONKUPLOAD.browser.isHttps) {
        c = c.replace("http:",
            "https:");
        b = ["47337", "47159", "57337", "57338", "57439"];
        try {
          null != window.localStorage.kupload_manager_port2 && ""
          != window.localStorage.kupload_manager_port2
          && (b = [window.localStorage.kupload_manager_port2])
        } catch (e) {
          RAONKUPLOAD.logMode && console && console.log(e)
        }
      } else {
        b = ["47317", "47139", "57317", "57318", "57419"];
        try {
          null != window.localStorage.kupload_manager_port && ""
          != window.localStorage.kupload_manager_port
          && (b = [window.localStorage.kupload_manager_port])
        } catch (f) {
          RAONKUPLOAD.logMode && console && console.log(f)
        }
      }
      for (var d =
          [], k = [], l = 0; l < b.length; l++) {
        d.push(b[l]), k.push(b[l]);
      }
      var m = function (a) {
        for (var b = a.length, c = 0; c < b; c++) {
          a[c].parentNode.removeChild(
              a[c]), a[c] = void 0
        }
      };
      (function () {
        for (var b = d.length, f = [], e = 0; e < b; e++) {
          var l = new Image;
          l.style.display = "none";
          l.onload = function (b) {
            return function (c) {
              try {
                var d = f[b].src, d = d.replace("http://", ""),
                    d = d.replace("https://", ""),
                    e = d.substring(d.indexOf(":") + 1, d.length),
                    e = e.substring(0, e.indexOf("/"));
                RAONKUPLOAD.browser.isHttps
                    ? window.localStorage.kupload_manager_port2 = e
                    : window.localStorage.kupload_manager_port =
                        e
              } catch (k) {
                RAONKUPLOAD.logMode && console && console.log(k)
              }
              m(f);
              "function" === typeof a && a(!0)
            }
          }(e);
          l.onerror = function (b) {
            return function (c) {
              c = d[b];
              for (var e = k.length - 1; 0 <= e; e--) {
                k[e] == c && k.splice(e,
                    1);
              }
              0 == k.length && (m(f), "function" === typeof a && a(!1))
            }
          }(e);
          f.push(l);
          document.body.appendChild(l)
        }
        for (e = 0; e < b; e++) {
          f[e] && (f[e].src = c + d[e] + "/png.png?t="
              + RAONKUPLOAD.util.makeGuid())
        }
      })()
    } catch (p) {
      RAONKUPLOAD.logMode && console && console.log(p)
    }
  };
  RAONKUPLOAD.IsUpdateRequired = RAONKUPLOAD.isUpdateRequired = function (a, c,
      b) {
    0 == !!c && (c = "0");
    try {
      0 == !!b || "" == b ? b = RAONKUPLOAD.rootPath + "agent/" : "/"
          != b.substring(b.length - 1) && (b += "/");
      b += "kversion.js?t=" + RAONKUPLOAD.util.getTimeStamp();
      var e = RAONKUPLOAD.ajax.load(b), e = e.replace(/\r\n/g, ""),
          e = e.replace(/\r/g, ""), e = e.replace(/\n/g, ""),
          e = e.replace(/\s/g, ""), f = e.indexOf('"agent":'),
          d = e.indexOf('","'), e = e.substring(f + 8, d + 1),
          e = e.replace(/"/g, ""), e = e.replace(/,/g, "."),
          k = function (a, b, c, d, e, f) {
            0 == f && RAONKUPLOAD.browser.ie && 10
            <= RAONKUPLOAD.browser.ieVersion || RAONKUPLOAD.browser.chrome ||
            RAONKUPLOAD.browser.opera || RAONKUPLOAD.browser.gecko ? (a = {
              req: RAONKUPLOAD._manager.createManagerRequest(),
              async: d ? !0 : !1,
              errorCallBack: c,
              successCallBack: b,
              data: a,
              url: e
            }, RAONKUPLOAD._manager.sendDataWidthAjax(a)) : (a = {
              managerParamStr: a,
              fn_success: b,
              frameId: RAONKUPLOAD.util.makeGuid(),
              currUpload: null
            }, a.url = e, null == b
            && (a.frameId = RAONKUPLOAD.util.makeGuid()), function (a) {
              document.getElementById(a.frameId) && document.getElementById(
                  a.frameId).parentNode.removeChild(
                  document.getElementById(a.frameId));
              var b =
                  document.createElement("iframe");
              b.style.display = "none";
              b.id = a.frameId;
              document.body.appendChild(b);
              var c = RAONKUPLOAD.util.getDefaultIframeSrc();
              b.src = c;
              var d = b.contentWindow.document,
                  b = RAONKUPLOAD.util.getDocWindow(d),
                  c = '<!doctype html><html lang="ko">', c = c + "<head>";
              RAONKUPLOAD.browser.isCustomDomain(document)
              && (c += '<script> document.domain = "' + document.domain
                  + '"; \x3c/script>');
              c += "</head>";
              c += "<body>";
              c += '<form id="send_form" target="response_frame" method="post" action="'
                  + a.url + '">';
              c += "</form>";
              c += '<iframe id="response_frame" name="response_frame"></iframe>';
              c += "</body>";
              c += "</html>";
              d.open("text/html", "replace");
              d.write(c);
              d.close();
              c = d.createElement("input");
              c.type = "hidden";
              c.name = "k01";
              c.value = a.managerParamStr;
              d.getElementById("send_form").appendChild(c);
              d.getElementById("send_form").submit();
              RAONKUPLOAD.util.addEvent(b, "message", function (b) {
                if (0 == a.url.indexOf(b.origin) && (b = RAONKUPLOAD.util.trim(
                    b.data), "" != b)) {
                  clearInterval(e);
                  try {
                    document.getElementById(a.frameId).parentNode.removeChild(
                        document.getElementById(a.frameId))
                  } catch (c) {
                    clearInterval(e)
                  }
                  a.fn_success &&
                  a.fn_success(b)
                }
              });
              var e = null;
              if (a.fn_success) {
                e = setInterval(function () {
                  try {
                    d.getElementById(
                        "response_frame").contentWindow.postMessage(
                        "", "*")
                  } catch (a) {
                    clearInterval(e)
                  }
                }, 100);
              } else {
                try {
                  var f = document.getElementById(a.frameId);
                  setTimeout(function () {
                    f && f.parentNode.removeChild(f)
                  }, 500)
                } catch (g) {
                  RAONKUPLOAD.logMode && console && console.log(g)
                }
              }
            }(a))
          }, l = RAONKUPLOAD.browser._AP01 + RAONKUPLOAD._AP03
              + RAONKSolution.Agent._AP00;
      "xp" == RAONKUPLOAD.UserAgent.os.version.toLowerCase()
      && (l = RAONKUPLOAD.browser._AP12 +
          RAONKUPLOAD._AP10 + RAONKSolution.Agent._AP15 + RAONKSolution._AP11);
      var m = '{ "kcmd": "KC07", "kp1": "' + encodeURIComponent(
              RAONKUPLOAD.util.base64_decode(l)) + '", "kp2": "."}',
          p = RAONKSolution.Agent.makeEncryptManagerParam(m), q = "";
      if (RAONKUPLOAD.browser.isHttps) {
        q = "https://127.0.0.1:";
        try {
          q = window.localStorage.kupload_manager_port2 && ""
          != window.localStorage.kupload_manager_port2 ? q
              + (window.localStorage.kupload_manager_port2 + "/") : q + "47337/"
        } catch (n) {
          q += "47337/"
        }
      } else {
        q = "http://127.0.0.1:";
        try {
          q = window.localStorage.kupload_manager_port &&
          "" != window.localStorage.kupload_manager_port ? q
              + (window.localStorage.kupload_manager_port + "/") : q + "47317/"
        } catch (t) {
          q += "47317/"
        }
      }
      var r = function (b) {
        b = RAONKSolution.Agent.parseRtn(b);
        var d = b.code;
        b = b.valueArr;
        1E3 == d ? "function" === typeof a && (d = !1, "1" == c ? b[0] != e
            && (d = !0) : b[0] < e && (d = !0), a(d)) : 2E3 == d ? "function"
            === typeof a && a(!1) : 2001 == d && k(p, r, g, !1, q, !1)
      }, g = function (a) {
        KUPLOADTOP.G_CURRKUPLOADER._config.sendToManagerType = "2";
        k(p, r, g, !1, q, !0)
      };
      k(p, r, g, !1, q, !1)
    } catch (v) {
      RAONKUPLOAD.logMode && console && console.log(v)
    }
  };
  RAONKUPLOAD.SetCustomHeaderByIndex = function (a, c, b) {
    var e = null;
    try {
      var f = RAONKUPLOAD.util._setRaonKUploader(b);
      if (f) {
        KUPLOADTOP.G_CURRKUPLOADER = f;
        var d = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
        d && (e = d._setCustomHeaderByIndex(a, c))
      }
    } catch (k) {
      RAONKUPLOAD.logMode && console && console.log(k)
    }
    return e
  };
  RAONKUPLOAD.SetCacheKeyByIndex = function (a, c, b) {
    try {
      var e = RAONKUPLOAD.util._setRaonKUploader(b);
      if (e) {
        KUPLOADTOP.G_CURRKUPLOADER = e;
        var f = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
        if (f) {
          var d = f.getRealIndexByListIndex(a);
          f.RESULTFILELIST[d].cacheKey = c
        }
      }
    } catch (k) {
      RAONKUPLOAD.logMode && console && console.log(k)
    }
  };
  RAONKUPLOAD.SetButtonList = function (a, c) {
    try {
      var b = RAONKUPLOAD.util._setRaonKUploader(c);
      if (b) {
        KUPLOADTOP.G_CURRKUPLOADER = b;
        var e = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
        e && null != a && void 0 != a && "" != a && ("upload"
        == KUPLOADTOP.G_CURRKUPLOADER._config.mode
            ? KUPLOADTOP.G_CURRKUPLOADER._config.showButtonBarEdit = "0" == a
                ? "" : a.split(",")
            : KUPLOADTOP.G_CURRKUPLOADER._config.showButtonBarView = "0" == a
                ? "" : a.split(","), e.setUploadMode(
            KUPLOADTOP.G_CURRKUPLOADER._config.mode))
      }
    } catch (f) {
      RAONKUPLOAD.logMode &&
      console && console.log(f)
    }
  };
  RAONKUPLOAD.SetSessionKeepUrl = function (a, c, b, e) {
    try {
      var f = RAONKUPLOAD.util._setRaonKUploader(e);
      if (f && (KUPLOADTOP.G_CURRKUPLOADER = f, "" != a
      && (f.sessionKeepUrl[a] = {auth: {}, pollingTime: 30}, "object"
      == typeof c && (f.sessionKeepUrl[a].auth = c), b))) {
        var d = RAONKUPLOAD.util.parseIntOr0(b);
        f.sessionKeepUrl[a].pollingTime = d
      }
    } catch (k) {
      RAONKUPLOAD.logMode && console && console.log(k)
    }
  };
  RAONKUPLOAD.SetCloudInfo = function (a, c) {
    try {
      var b = RAONKUPLOAD.util._setRaonKUploader(c);
      b && (KUPLOADTOP.G_CURRKUPLOADER =
          b, b._config.cloudInfo = a, b._config.cloudInfo.Type
      && (b._config.cloudInfo.Type = b._config.cloudInfo.Type), b._config.cloudInfo.AuthMethod
      && (b._config.cloudInfo.AuthMethod = b._config.cloudInfo.AuthMethod), b._config.cloudInfo.AccessKeyID
      && (b._config.cloudInfo.AccessKeyID = encodeURIComponent(
          b._config.cloudInfo.AccessKeyID)), b._config.cloudInfo.SecretKey
      && (b._config.cloudInfo.SecretKey = encodeURIComponent(
          b._config.cloudInfo.SecretKey)), b._config.cloudInfo.EndPoint
      && (b._config.cloudInfo.EndPoint = encodeURIComponent(
          b._config.cloudInfo.EndPoint)),
      b._config.cloudInfo.Bucket
      && (b._config.cloudInfo.Bucket = encodeURIComponent(
          b._config.cloudInfo.Bucket)), b._config.cloudInfo.AuthHeader
      && (b._config.cloudInfo.AuthHeader = encodeURIComponent(
          b._config.cloudInfo.AuthHeader)))
    } catch (e) {
      RAONKUPLOAD.logMode && console && console.log(e)
    }
  };
  RAONKUPLOAD.GetCloudInfo = function (a) {
    try {
      var c = RAONKUPLOAD.util._setRaonKUploader(a);
      if (c) {
        return KUPLOADTOP.G_CURRKUPLOADER = c, c._config.cloudInfo.Type
        && (c._config.cloudInfo.Type = c._config.cloudInfo.Type), c._config.cloudInfo.AuthMethod
        &&
        (c._config.cloudInfo.AuthMethod = c._config.cloudInfo.AuthMethod), c._config.cloudInfo.AccessKeyID
        && (c._config.cloudInfo.AccessKeyID = decodeURIComponent(
            c._config.cloudInfo.AccessKeyID)), c._config.cloudInfo.SecretKey
        && (c._config.cloudInfo.SecretKey = decodeURIComponent(
            c._config.cloudInfo.SecretKey)), c._config.cloudInfo.EndPoint
        && (c._config.cloudInfo.EndPoint = decodeURIComponent(
            c._config.cloudInfo.EndPoint)), c._config.cloudInfo.Bucket
        && (c._config.cloudInfo.Bucket = decodeURIComponent(
            c._config.cloudInfo.Bucket)),
        c._config.cloudInfo.AuthHeader
        && (c._config.cloudInfo.AuthHeader = decodeURIComponent(
            c._config.cloudInfo.AuthHeader)), c._config.cloudInfo
      }
    } catch (b) {
      RAONKUPLOAD.logMode && console && console.log(b)
    }
  };
  RAONKUPLOAD.SetImageMultiThumnail = function (a, c) {
    try {
      var b = RAONKUPLOAD.util._setRaonKUploader(c);
      if (b
          && (KUPLOADTOP.G_CURRKUPLOADER = b, KUPLOADTOP.G_CURRKUPLOADER._config.imageMultiThumnail = a, KUPLOADTOP.G_CURRKUPLOADER._config.imageMultiThumnail)) {
        for (var e = KUPLOADTOP.G_CURRKUPLOADER._config.imageMultiThumnail.thumnail,
            f = e.length, b = 0; b < f; b++) {
          e[b].id = encodeURIComponent(e[b].id)
        }
      }
    } catch (d) {
      RAONKUPLOAD.logMode && console && console.log(d)
    }
  };
  RAONKUPLOAD.SetMultiFileSelect = function (a, c) {
    try {
      var b = RAONKUPLOAD.util._setRaonKUploader(c);
      if (b) {
        KUPLOADTOP.G_CURRKUPLOADER = b;
        var e = b.frameWin.document.getElementById("file_" + b.TagID);
        "0" == b._config.useKManager && (0 == a ? e.removeAttribute("multiple")
            : (e.removeAttribute("multiple"), e.setAttribute("multiple", a)));
        b._config.multiFileSelect = a
      }
    } catch (f) {
      RAONKUPLOAD.logMode && console && console.log(f)
    }
  };
  RAONKUPLOAD.StartAgentInstall = function (a) {
    try {
      var c = RAONKUPLOAD.util._setRaonKUploader(a);
      c
      && (KUPLOADTOP.G_CURRKUPLOADER = c, KUPLOADTOP.G_CURRKUPLOADER.frameWin.startAgentInstall(
          c, {isApi: !0}))
    } catch (b) {
      RAONKUPLOAD.logMode && console && console.log(b)
    }
  };
  RAONKUPLOAD.AddRAONKFileObject = function (a, c) {
    try {
      var b = RAONKUPLOAD.util._setRaonKUploader(c);
      if (b) {
        KUPLOADTOP.G_CURRKUPLOADER = b;
        var e = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
        if (e && 0 != e.isExecuteApi() && "object" == typeof a
            && a.length) {
          for (var f = 0, d = a.length, k; f <
          d; f++) {
            if (k = a[f], "1" == k.isWebFile) {
              RAONKUPLOAD.AddUploadedFileEw(
                  k.uniqKey, k.originalName, k.uploadPath, k.size,
                  k.customValue,
                  b.ID);
            } else if ("1" == b._config.useKManager) {
              var l = {
                name: e.getFileName(k.localPath, !1),
                type: "",
                uniqValue: "",
                isFolder: "0",
                localPath: k.localPath,
                size: KUPLOADTOP.RAONKUPLOAD.util.parseIntOr0(k.size),
                subFolderCount: "",
                fileCount: ""
              };
              e.fileHandler([l], "", "")
            } else {
              e.fileHandler([k.fileObject], k.localPath, "", "")
            }
          }
        }
      }
    } catch (m) {
      RAONKUPLOAD.logMode && console && console.log(m)
    }
  };
  RAONKUPLOAD.GetImageDownSize =
      function (a, c) {
        try {
          var b = RAONKUPLOAD.util._setRaonKUploader(c);
          if (b) {
            KUPLOADTOP.G_CURRKUPLOADER = b;
            var e = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
            if (e && a && a.targetFiles) {
              RAONKUPLOAD.ResetUpload(c);
              var f = a.targetFiles;
              e._convertImgIdxAry = [];
              e.G_DONOTSTARTUPLOAD = !0;
              e.G_ImageQualityEndCallBack = function () {
                e.G_DONOTSTARTUPLOAD = !1;
                var b = RAONKUPLOAD.GetListInfo("array", c).newFile;
                if (b && b.length
                    === e._convertImgIdxAry.length) {
                  for (var d = b.length, k;
                      0 < d; d--) {
                    k = e._convertImgIdxAry.pop(), f.splice(k, 0,
                        [b[d - 1].fileObject]),
                        f.splice(k + 1, 1), f[k][0].rDown = !0;
                  }
                }
                "function" === typeof a.callBack && a.callBack(f)
              };
              for (var b = 0, d = a.targetFiles.length, k; b < d;
                  b++) {
                (k = a.targetFiles[b][0]) && 0 === k.type.indexOf(
                    "image") && parseInt(k.size, 10) >= parseInt(
                    KUPLOADTOP.G_CURRKUPLOADER._config.imageQuality.overFileSize,
                    10) && "undefined" === typeof k.rDown && (e.fileHandler(
                    a.targetFiles[b], a.targetFiles[b].name,
                    ""), e._convertImgIdxAry.push(b));
              }
              0 < e._convertImgIdxAry.length
                  ? (e.startUpload(), window.setTimeout(function () {
                    e.startUpload()
                  }, 500)) : e.G_ImageQualityEndCallBack()
            }
          }
        } catch (l) {
          RAONKUPLOAD.logMode &&
          console && console.log(l)
        }
      };
  RAONKUPLOAD.SetOriginalFileName = function (a, c, b) {
    try {
      var e = RAONKUPLOAD.util._setRaonKUploader(b);
      if (e) {
        KUPLOADTOP.G_CURRKUPLOADER = e;
        var f = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
        0 < f.RESULTFILELIST.length && (isNaN(Number(a)) || (c.match(
            /[\\\/:*?\"<>|]/gi) ? f.alert(
            f.RAONKUpload_Lang.message_not_allow_file_name) : "html5"
            != KUPLOADTOP.G_CURRKUPLOADER._config.userRunTimeMode && "html4"
            != KUPLOADTOP.G_CURRKUPLOADER._config.userRunTimeMode
            || f.setOriginalFileName(parseInt(a, 10), c)))
      }
    } catch (d) {
      RAONKUPLOAD.logMode &&
      console && console.log(d)
    }
  };
  RAONKUPLOAD.MultiUserPortCheck = function (a, c) {
    try {
      var b = RAONKUPLOAD.util._setRaonKUploader(c);
      if (b) {
        KUPLOADTOP.G_CURRKUPLOADER = b;
        var e = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
        a.currUpload = b;
        e.multiUserPortCheckAsync(a)
      }
    } catch (f) {
      RAONKUPLOAD.logMode && console && console.log(f)
    }
  };
  RAONKUPLOAD.GetZipFileInfo = function (a, c) {
    try {
      var b = RAONKUPLOAD.util._setRaonKUploader(c);
      b
      && (KUPLOADTOP.G_CURRKUPLOADER = b, KUPLOADTOP.G_CURRKUPLOADER.frameWin.getZipFileInfo(
          a))
    } catch (e) {
      RAONKUPLOAD.logMode &&
      console && console.log(e)
    }
  };
  RAONKUPLOAD.DetectFileExtensionAndInspectZipFile = function (a, c, b, e) {
    (e = RAONKUPLOAD.util._setRaonKUploader(e)) && "0" == e._config.useKManager
    && (KUPLOADTOP.G_CURRKUPLOADER = e, KUPLOADTOP.G_CURRKUPLOADER.frameWin.detectFileExtensionAndInspectZipFile(
        a, c, b))
  };
  RAONKUPLOAD.CustomRequest = function (a, c) {
    try {
      var b = RAONKUPLOAD.util._setRaonKUploader(c);
      if (b) {
        KUPLOADTOP.G_CURRKUPLOADER = b;
        b = "";
        b += "kc" + RAONKSolution.Agent.formfeed + "c900"
            + RAONKSolution.Agent.vertical;
        b += "k01" + RAONKSolution.Agent.formfeed +
            KUPLOADTOP.G_CURRKUPLOADER._config.security.encryptParam;
        KUPLOADTOP.G_CURRKUPLOADER._config.isCrossDomain
        && (b += RAONKSolution.Agent.vertical + "k22"
            + RAONKSolution.Agent.formfeed + "1");
        for (key in a) {
          b += RAONKSolution.Agent.vertical + key
              + RAONKSolution.Agent.formfeed + a[key];
        }
        b = RAONKUPLOAD.util.makeEncryptParam(b);
        if (KUPLOADTOP.G_CURRKUPLOADER._config.isCrossDomain) {
          if (RAONKUPLOAD.browser.postMessageSupported) {
            var e = document.createElement("div"),
                f = RAONKUPLOAD.util.getDefaultIframeSrc();
            e.innerHTML = '<iframe name="customRequestFrame" id="customRequestFrame" style="display:none;" src="'
                +
                f + '"></iframe>';
            e.style.display = "none";
            document.body.appendChild(e);
            RAONKUPLOAD.util.postFormData(document,
                KUPLOADTOP.G_CURRKUPLOADER._config.handlerUrl,
                "customRequestFrame", [["k00", b]],
                KUPLOADTOP.G_CURRKUPLOADER._config.addCSRFToken);
            RAONKUPLOAD.util.addEvent(e.firstChild, "load", function () {
              e.firstChild.contentWindow.postMessage("check", "*")
            }, !0);
            if (window.postMessage) {
              var d = function (a) {
                0 == KUPLOADTOP.G_CURRKUPLOADER._config.handlerUrl.indexOf(
                    a.origin) && (RAONKUPLOAD.util.trim(
                    a.data), document.body.removeChild(e),
                    RAONKUPLOAD.util.removeEvent(window, "message", d))
              };
              RAONKUPLOAD.util.addEvent(window, "message", d)
            }
          }
        } else {
          RAONKUPLOAD.ajax.postData(
              KUPLOADTOP.G_CURRKUPLOADER._config.handlerUrl, "k00=" + b,
              function (a) {
              }, KUPLOADTOP.G_CURRKUPLOADER._config.addHttpHeader)
        }
      }
    } catch (k) {
      RAONKUPLOAD.logMode && console && console.log(k)
    }
  };
  RAONKUPLOAD.SetConfigByObject = function (a, c) {
    try {
      var b = RAONKUPLOAD.util._setRaonKUploader(c);
      if (b) {
        KUPLOADTOP.G_CURRKUPLOADER = b;
        var e = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
        if (e && "object" === typeof a) {
          for (var f in a) {
            var d =
                b._config, k = a[f];
            f = RAONKUPLOAD.util.firstChartoLower(f, !0);
            for (var l = f.split("."), m = l.length, p = 0; p < m; p++) {
              p == m - 1
                  ? f = l[p] : d = d[l[p]];
            }
            if ("object" === typeof k) {
              var d = d[f], q;
              for (q in k) {
                var n = k[q];
                q = RAONKUPLOAD.util.firstChartoLower(q);
                d.hasOwnProperty(q) && (d[q] = n, e.setExtraConfig(f, n, b))
              }
            } else {
              d[f] = k, e.setExtraConfig(f, k, b)
            }
          }
        }
      }
    } catch (t) {
      RAONKUPLOAD.logMode && console && console.log(t)
    }
  };
  RAONKUPLOAD.Compress = function (a, c, b) {
    try {
      var e = RAONKUPLOAD.util._setRaonKUploader(b);
      if (e) {
        KUPLOADTOP.G_CURRKUPLOADER = e;
        var f =
            KUPLOADTOP.G_CURRKUPLOADER.frameWin;
        f && f.compressFiles(a, c, e)
      }
    } catch (d) {
      RAONKUPLOAD.logMode && console && console.log(d)
    }
  };
  RAONKUPLOAD.Decompress = function (a, c, b) {
    try {
      var e = RAONKUPLOAD.util._setRaonKUploader(b);
      if (e) {
        KUPLOADTOP.G_CURRKUPLOADER = e;
        var f = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
        f && f.decompress(a, c, e)
      }
    } catch (d) {
      RAONKUPLOAD.logMode && console && console.log(d)
    }
  };
  RAONKUPLOAD.AddUploadedFileAsObject = function (a, c) {
    var b = RAONKUPLOAD.util._getUploadName(a.uploadName);
    if (null != b) {
      a.uploadName = b;
      try {
        var e =
            a.apiName && "" != a.apiName ? a.apiName
                : "AddUploadedFileAsObject";
        if (RAONKUPLOAD.isLoadedUploadEx(b)) {
          try {
            var f = RAONKUPLOAD.util._setRaonKUploader(b);
            if (f) {
              KUPLOADTOP.G_CURRKUPLOADER = f;
              var d = a.getFileSize ? !0 : !1, k;
              k = a.fileList && "object" == typeof a.fileList ? "list"
                  : !a.fileList && a.uniqueKey && "object" == typeof a.uniqueKey
                      ? "array" : "onefile";
              var l = function (a, e) {
                KUPLOADTOP.G_CURRKUPLOADER = f;
                var g = f.frameWin, l = [];
                d && e && "" != e && (l = e.split(
                    KUPLOADTOP.RAONKSolution.Agent.formfeed));
                if ("list" == k || "array" == k) {
                  f.frameWin.displayCommonReady(!0,
                      f), setTimeout(function () {
                    var e = "list" == k ? a.fileList.length
                        : a.uniqueKey.length;
                    if (g && 0 != g.isExecuteApi()) {
                      for (var m, n, p, q, r, x, t = 0; t < e; t++) {
                        if ("list" == k) {
                          m = a.fileList[t].uniqueKey;
                          n = a.fileList[t].originName;
                          p = a.fileList[t].webPath;
                          q = d ? l[t] : a.fileList[t].size;
                          r = a.fileList[t].customValue;
                          x = a.fileList[t].headerEx;
                          var u = "";
                          void 0 != m && null != m && (u = m);
                          m = "";
                          void 0 != n && null != n && (m = n);
                          n = "";
                          void 0 != p && null != p && (n = p);
                          p = "";
                          void 0 != q && null != q && (p = q);
                          q = "";
                          void 0 != r && null != r && (q = r);
                          var z;
                          void 0 != x && null != x && (z = x)
                        } else {
                          m =
                              a.uniqueKey, n = a.originName, p = a.webPath, q = d
                              ? l
                              : a.size, r = a.customValue, x = a.headerEx, u = "", void 0
                          != m && null != m && void 0 != m[t] && null != m[t]
                          && (u = m[t]), m = "", void 0 != n && null != n
                          && void 0
                          != n[t] && null != n[t] && (m = n[t]), n = "", void 0
                          != p
                          && null != p && void 0 != p[t] && null != p[t]
                          && (n = p[t]), p = "", void 0 != q && null != q
                          && void 0
                          != q[t] && null != q[t] && (p = q[t]), q = "", void 0
                          != r
                          && null != r && void 0 != r[t] && null != r[t]
                          && (q = r[t]), void 0 != x && null != x && void 0
                          != x[t]
                          && null != x[t] && (z = x[t]);
                        }
                        if (void 0 != z && null
                            != z) {
                          if (r = f._config.headerBarItem.length, ""
                          == z) {
                            for (x =
                                1; x < r; x++) {
                              z += "|";
                            }
                          } else {
                            var v = z.split("|"), w = v.length;
                            if (w < r) {
                              for (x = 0; x < r - w;
                                  x++) {
                                z += "|";
                              }
                            } else if (w > r) {
                              for (z = "", x = 0;
                                  x < r; x++) {
                                0 != x && (z += "|"), z += v[x]
                              }
                            }
                          }
                        }
                        if (""
                            != f._config.headerBarItem) {
                          for (r = f._config.headerBarItem.length, x = 0;
                              x < r; x++) {
                            g.document.getElementById(
                                "user_header_bar_" + x).getElementsByTagName(
                                "span")[0].style.display = "none";
                          }
                        }
                        p = p.toString();
                        p = p.replace(/,/g, "");
                        p = isNaN(Number(p)) || 0 > Number(p) || "" == p ? ""
                            : parseInt(p, 10);
                        r = !0;
                        t == e - 1 && (r = !1);
                        void 0 != z && null != z ? g._addUploadedFileEx(u, m, n,
                            p,
                            q, z, b) : g._addUploadedFile({
                          uniqueKey: u,
                          originName: m,
                          webPath: n,
                          size: p,
                          customValue: q,
                          uploadName: b,
                          bHugeCount: r
                        })
                      }
                      f.frameWin.displayCommonReady(!1, f);
                      e = {};
                      c && "function" == typeof c
                      && (e.uploadName = a.uploadName, c(e))
                    }
                  }, 1);
                } else if (KUPLOADTOP.G_CURRKUPLOADER = f, g = f.frameWin) {
                  d && (a.size = l[0]);
                  void 0 != a.headerEx && null != a.headerEx
                      ? g._addUploadedFileEx(a.uniqueKey, a.originName,
                          a.webPath,
                          a.size, a.customValue, a.headerEx, b)
                      : g._addUploadedFile({
                        uniqueKey: a.uniqueKey,
                        originName: a.originName,
                        webPath: a.webPath,
                        size: a.size,
                        customValue: a.customValue,
                        uploadName: b,
                        bucketName: a.bucketName
                      });
                  var m = {};
                  c && "function" == typeof c
                  && (m.uploadName = a.uploadName, c(
                      m))
                }
              };
              if (d) {
                var m = "", p = f._config.handlerUrl, e = [];
                if ("list" == k) {
                  for (var q = 0; q < a.fileList.length;
                      q++) {
                    e.push(a.fileList[q].webPath);
                  }
                } else {
                  "array" == k
                      ? e = a.webPath : e.push(a.webPath);
                }
                var n = q = "",
                    n = n + ("kc" + KUPLOADTOP.RAONKSolution.Agent.formfeed
                        + "c22" + KUPLOADTOP.RAONKSolution.Agent.vertical),
                    n = n + ("k01" + KUPLOADTOP.RAONKSolution.Agent.formfeed
                        + f._config.security.encryptParam
                        + KUPLOADTOP.RAONKSolution.Agent.vertical);
                if ("1" <=
                    f._config.security.encryptParam) {
                  for (var t = e.length, r = 0;
                      r < t; r++) {
                    n += "k30"
                        + KUPLOADTOP.RAONKSolution.Agent.formfeed + e[r]
                        + KUPLOADTOP.RAONKSolution.Agent.vertical;
                  }
                }
                n = n.substring(0, n.length - 1);
                1 == f._config.isCrossDomain
                && (n += KUPLOADTOP.RAONKSolution.Agent.vertical, n += "k22"
                    + KUPLOADTOP.RAONKSolution.Agent.formfeed + "1");
                f._config.cloudInfo.Use && "2" == f._config.cloudInfo.Use
                && (n += KUPLOADTOP.RAONKSolution.Agent.vertical + "k46"
                    + KUPLOADTOP.RAONKSolution.Agent.formfeed
                    + f._config.cloudInfo.Use);
                var g = KUPLOADTOP.RAONKUPLOAD.util.makeEncryptParamFinal(n),
                    q = g.name + "=" + g.value, n = [];
                if (1 == f._config.isCrossDomain) {
                  if (n.push([g.name, g.value]), "0"
                  == f._config.security.encryptParam) {
                    for (t = e.length, r = 0;
                        r < t; r++) {
                      n.push(["k30", encodeURIComponent(e[r])])
                    }
                  }
                } else if ("0"
                    == f._config.security.encryptParam) {
                  for (t = e.length, r = 0;
                      r < t; r++) {
                    q += "&k30=" + encodeURIComponent(e[r]);
                  }
                }
                var v = function (b) {
                  null != b && "" != b ? (b = KUPLOADTOP.RAONKUPLOAD.util.trim(
                      b), b = KUPLOADTOP.RAONKUPLOAD.util.parseDataFromServer(
                      b), 0 == b.indexOf("[OK]") ? (b = b.replace("[OK]",
                          ""), b = KUPLOADTOP.RAONKUPLOAD.util.makeDecryptReponseMessage(
                          b)) :
                      b = "") : b = "";
                  f && f.frameWin.displayCommonReady(!1, f);
                  l(a, b)
                };
                if (1 == f._config.isCrossDomain) {
                  var u = document.createElement("div"),
                      w = KUPLOADTOP.RAONKUPLOAD.util.getDefaultIframeSrc();
                  u.innerHTML = '<iframe name="sizeConfirmFrame" id="sizeConfirmFrame" style="display:none;" src="'
                      + w + '"></iframe>';
                  u.style.display = "none";
                  document.body.appendChild(u);
                  KUPLOADTOP.RAONKUPLOAD.util.addEvent(u.firstChild, "load",
                      function () {
                        u.firstChild.contentWindow.postMessage("check", "*")
                      }, !0);
                  if (window.postMessage) {
                    var A = function (a) {
                      0 ==
                      p.indexOf(a.origin) && (document.body.removeChild(
                          u), KUPLOADTOP.RAONKUPLOAD.util.removeEvent(window,
                          "message",
                          A), m = KUPLOADTOP.RAONKUPLOAD.util.parseDataFromServer(
                          a.data), v(m))
                    };
                    KUPLOADTOP.RAONKUPLOAD.util.addEvent(window, "message", A)
                  }
                  KUPLOADTOP.RAONKUPLOAD.util.postFormData(document, p,
                      "sizeConfirmFrame", n, f._config.addCSRFToken)
                } else {
                  KUPLOADTOP.RAONKUPLOAD.ajax.postData(p, q, v,
                      f._config.addHttpHeader)
                }
              } else {
                l(a)
              }
            }
          } catch (y) {
            RAONKUPLOAD.logMode && console && console.log(y)
          }
        } else {
          null == RAONKUPLOAD.InitUploadDataHashTable &&
          (RAONKUPLOAD.InitUploadDataHashTable = new RAONKUPLOAD.util.hashTable), q = RAONKUPLOAD.InitUploadDataHashTable.getItem(
              b), "undefined" == typeof q && (q = []), "AddUploadedFileEw" == e
          && a.cloudObj && (a.uniqueKey = a.cloudObj), q.push({
            mode: e,
            paramObj: a,
            callBack: c,
            uniqueKey: a.uniqueKey,
            originName: a.originName,
            webPath: a.webPath,
            size: a.size,
            customValue: a.customValue,
            headerEx: a.headerEx
          }), RAONKUPLOAD.InitUploadDataHashTable.setItem(b, q)
        }
      } catch (C) {
        RAONKUPLOAD.logMode && console && console.log(C)
      }
    }
  };
  var rv = RAONKUPLOAD.rvi, rva =
      [rv.maj.join(rv.s2), parseInt(rv.mi1.join(rv.s2), 10) * rv.m1,
        rv.mi2.join(rv.s2), rv.l[0]];
  RAONKUPLOAD.UrlStamp = parseInt(rv.mi1.join(rv.s2), 10) * rv.m2 + rv.l[0];
  RAONKUPLOAD._$0 = RAONKUPLOAD.util.base64_encode(rva.join(rv.s1));
  delete RAONKUPLOAD.rvi;
  RAONKUPLOAD._$0S = ""
}

function kupload_user_config() {
  return {
    RootPath: "",
    InitXml: "",
    InitServerXml: "",
    InitVisible: !0,
    SkinName: "",
    Width: "",
    Height: "",
    Lang: "",
    LanguageExtendObject: "",
    HeaderBar: "",
    StatusBar: "",
    ButtonBar: "",
    ButtonBarEdit: "",
    ButtonBarView: "",
    BorderStyle: "",
    MaxTotalFileCount: "",
    MaxTotalFileSize: "",
    MaxOneFileSize: "",
    MultiFileSelect: "",
    ExtensionAllowOrLimit: "",
    ExtensionArr: "",
    Mode: "",
    Views: "",
    Runtimes: "",
    RunTimes: "",
    UseWS: "",
    FolderNameRule: "",
    CustomHeaderColor: "",
    CustomFooterColor: "",
    CustomProgressBarColor: "",
    CustomTextColor: "",
    CustomWebFileColor: "",
    UploadHolder: "",
    ResumeUpload: "",
    ResumeUpChunkMode: "",
    ResumeDownload: "",
    FolderTransfer: "",
    GetFolderInFile: "",
    UseAddEvent: "",
    UseBeforeAddEvent: "",
    UseAfterAddEvent: "",
    UseAfterAddEndTimeEvent: "",
    UseAfterAddAllEvent: "",
    UseDeleteEvent: "",
    UseBeforeDeleteEvent: "",
    UseDeleteAfterEvent: "",
    UseAfterDeleteEvent: "",
    UseDeleteEndTimeEvent: "",
    UseDeleteAllEvent: "",
    UseOpenEvent: "",
    UseBeforeOpenEvent: "",
    UseDownloadEvent: "",
    UseBeforeDownloadEvent: "",
    UseAfterDownloadEvent: "",
    UseDownloadCompleteEvent: "",
    UseFinishDownloadedEvent: "",
    UseDownloadCompleteAllEvent: "",
    UseUploadingCancelEvent: "",
    UseAfterMoveFileEvent: "",
    UseExcuteDownloadInMobile: "",
    UseAddLocalFileDirectlyCallBackEvent: "",
    UseAddLocalFileDirectlyExCallBackEvent: "",
    UseGetZipFileInfoCallBackEvent: "",
    UseGetExcelDataCallBackEvent: "",
    Timeout: "",
    AutomaticConnection: "",
    ShowFolderView: "",
    IgnoreSameUploadName: "0",
    HandlerUrl: "",
    DownloadHandlerUrl: "",
    ProcessHandlerUrl: "",
    MessageTitle: "",
    UseScriptEventControl: "",
    DevelopLangage: "",
    ShowCheckBox: "",
    HideContextMenu: "",
    SizeColumnWidth: "",
    UnitDelimiter: "",
    UnitAttributeDelimiter: "",
    DownloadMulti: "",
    CssRootPath: "",
    ViewerHandlerUrl: "",
    UseAutoHeight: "",
    RemoveContextItem: "",
    DisableDeleteConfirmMessage: "",
    DisplayFileSizeHtml4: "",
    ListViewDbclick: "",
    ListViewDragAndDrop: "",
    HideListInfo: "",
    NTLM: "",
    LargeFiles: "",
    CacheProtectMode: "",
    UseFileSort: "",
    FileSortField: "",
    FileSortAscDesc: "",
    AutoSort: "",
    ShowEditAlign: "",
    ShowViewAlign: "",
    FileMoveContextMenu: "",
    CompleteEventResetUse: "",
    ImgPreView: "",
    ImgPreViewWidth: "",
    ImgPreViewHeight: "",
    StatusBarShowLimit: "",
    StatusBarShowStatus: "",
    ButtonBarPosition: "",
    UserMessage: "",
    UseSingleSelect: "",
    DisableAlertMessage: {
      Duplication: "",
      DeleteUnchosen: "",
      DownloadUnchosen: "",
      OpenUnchosen: "",
      DisableDeleteConfirm: "",
      DisableUploadCancelConfirm: "",
      DisableRecoveryConfirm: "",
      FileExtensionDetect: "",
      FileMaxCountAdd: "",
      OpenFileTransfer: ""
    },
    AllowedZeroFileSize: "",
    AllowedEmptyFolder: "",
    ChunkSize: "",
    MaxChunkSize: "",
    FileNameRule: "",
    FileNameRuleEx: null,
    UploadFileNameRuleEx: null,
    DownloadFileNameRuleEx: null,
    AsyncUpload: "",
    SilentUpload: "",
    SilentDownload: "",
    SilentDownloadEx: "",
    ProductKey: "",
    LicenseKey: "",
    LicenseKeyHtml5: "",
    Security: {
      EncryptParam: "",
      FileExtensionDetector: "",
      FileIntegrity: "",
      FileIntegrityUpload: "",
      FileIntegrityDownload: "",
      FileEncrypt: "",
      DeleteOpenFile: "",
      HandlerKey: "",
      UseMagicJs: "",
      UseMagicJsCrypto: "",
      RequestValidationSecond: ""
    },
    HighSpeed: "",
    SizeForChunkUpload: "",
    HeaderBarItem: "",
    HeaderBarItemWidth: "",
    HeaderBarItemAlign: "",
    HeaderBarItemSetTitle: "",
    WsWorkerCount: "",
    WsWorkerJobSize: "",
    WsMinSingleWorkerSize: "",
    UploadTransferWindow: {
      View: "",
      ViewWidth: "",
      ViewHeight: "",
      ButtonType: "",
      HideDownloadedPath: "",
      UISetting: {
        Width: "",
        SystemTitleUpload: "",
        SystemTitleDownload: "",
        SystemTitleFontFamily: "",
        SystemTitleFontSize: "",
        SystemTitleFontBold: "",
        UserColor: "",
        FileListView: "",
        FileListStatusAlign: "",
        UseSetting: "",
        SpeedText: "",
        SpeedTextDesc: "",
        ViewTheme: ""
      },
      ViewFilesInFolder: "",
      DisplayTotalProgressByFileCount: ""
    },
    PluginInstallType: "",
    PluginInstallUrl: "",
    DefaultDownloadPath: null,
    TransferOpenFile: "",
    SelectByClicked: "",
    SavePathSetting: "",
    TransferBackgroundStyle: "",
    UseDropzone: "",
    AllowOpenExtension: "",
    FileFilterEx: "",
    ImageQuality: "",
    UseZipDownload: "",
    ManagerUploadWindowMode: "",
    ManagerDownloadWindowMode: "",
    DialogWindow: null,
    AllowedRealtimeDownloadAdd: "",
    AgentTransferWindowItemCount: "",
    AutoDestroy: "",
    SkipSentFile: "",
    ForceOverwrite: "",
    Event: {
      OnError: null,
      CreationComplete: null,
      BeforeUpload: null,
      UploadComplete: null,
      MultiUploadComplete: null,
      TransferComplete: null,
      BeforeDownloadFile: null,
      DownloadCompleteFile: null,
      DownloadCompleteAllFile: null,
      ExcuteDownloadFile: null,
      BeforeOpenFile: null,
      BeforeAddFile: null,
      AfterAddFile: null,
      AfterAddAllFile: null,
      AfterAddWebFile: null,
      BeforeDeleteFile: null,
      AfterDeleteFile: null,
      DeleteAllFile: null,
      SelectItem: null,
      AfterMoveFile: null,
      UploadingCancel: null,
      DownloadCancel: null,
      CustomAction: null,
      OnLanguageDefinition: null,
      Alert: null,
      AgentInstall: null,
      MultipleAccessEvent: null,
      ExtendFunction: null,
      UnselectItem: null,
      CloseInstallPopup: null,
      InitAddAllFile: null,
      TransferStatusChange: null
    },
    EmptyDownloadFileText: "",
    EmptyDownloadFileTextColor: "",
    EmptyDownloadFileTextBold: "",
    EmptyDownloadFileTextItalic: "",
    EmptyDownloadFileTextUnderline: "",
    EmptyDownloadFileTextStrike: "",
    ZIndex: "",
    UseSingleDownloadDialog: "",
    UseDbclickOpen: "",
    ChangeDbclickCommand: "",
    ZipFileName: "",
    ZipFileNameUserSettingMode: "",
    DisableMultiFileSelectInMobile: "",
    UseHashExtract: "",
    UseAgentLog: "",
    UseKManagerEncodingUrl: "",
    AgentBandwidth: "",
    UseAdminConfig: "",
    UseAdminLog: "",
    AgentMultiTransferCount: "",
    AgentMultiDownloadCount: "",
    AgentMultiUploadCount: "",
    DropZoneTransparency: "",
    AgentHttps: "",
    CheckNetworkSpeed: "",
    UseCompressTransfer: "",
    CompressUploadAllFile: {
      Use: "",
      FileName: "",
      Password: "",
      Level: "",
      AddRootFolder: ""
    },
    AgentCompressBufferSize: "",
    AgentIntelligentCompressValue: "",
    AgentAutoDecompression: "",
    AgentAutoDecompressionPassword: "",
    DirectDownload: "",
    AgentAdmin: {
      ChunkSize: "",
      RequestCount: "",
      MultiTransferCount: "",
      InternetOpenType: "",
      BufferSize: "",
      BufferSizeUpload: "",
      BufferSizeDownload: "",
      Timeout: "",
      DownloadFileNameSuffix: "",
      SystemCode: "",
      SmartRequestSize: "",
      ChunkSizeForWirelessLowSpeed: "",
      RequestCountForWirelessLowSpeed: "",
      EnableDownloadLock: "",
      KeepClientBandwidth: ""
    },
    UseInstallGuide: "",
    InstallGuideZIndex: "",
    InstallGuideLogoUrl: "",
    UseAutoInstall: "",
    UseAgentInstallGuide: "",
    AgentInstallGuideZIndex: "",
    AgentInstallGuideLogoUrl: "",
    AgentInstallFileUrl: "",
    AgentInstallFileUrl2: "",
    AgentInstallFolderUrl: "",
    MoveMouseDrag: "",
    CookieWindow: null,
    ApplyAgentOs: "",
    EnforceHtml5: "",
    EnforceDocumentDomain: "",
    ExtendFunction: "",
    SkipInternetState: "",
    FileOpenDialogTitle: "",
    FileOpenDialogType: "",
    FileSaveDialogTitle: "",
    FolderSelectDialogTitle: "",
    FolderSelectDialogButtonName: "",
    FolderSelectDialogType: "",
    AgentCommunicationMethod: "",
    TrustSites: "",
    ShowTrayIcon: "",
    AgentTempRootDirectory: "",
    AgentEventInterval: "",
    AgentEventType: "",
    AgentEventWaitTime: "",
    AutoRecoveryTransfer: "",
    AutoRecoveryId: "",
    AutoTransfer: "",
    UserCssUrl: "",
    AllowDuplicationFile: "",
    AllowDuplicationFileOnlyFileName: "",
    SessionKeep: {Use: "", Url: "", RetryTime: ""},
    DisableChunkUpload: "",
    DisableChunkDownload: "",
    UseBrowserUseragent: "",
    UseWebfileThumbnailView: "",
    UseKMonitoring: "",
    KMonitorUrl: "",
    KMonitorPartUrl: "",
    KMonitorPollingTime: "",
    KMonitorSkipCachedBandwidth: "",
    KMonitorGroupId: "",
    EnableAdminLog: "",
    DEXT5Install: "",
    UseWorkingImg: {
      UseUploadPre: "",
      UploadPreImage: "",
      UploadPreCaption: "",
      UploadPreUseOnce: "",
      UseUploadEnd: "",
      UploadEndImage: "",
      UploadEndCaption: "",
      UploadEndUseOnce: "",
      UseDownloadPre: "",
      DownloadPreImage: "",
      DownloadPreCaption: "",
      DownloadPreUseOnce: "",
      UseDownloadEnd: "",
      DownloadEndImage: "",
      DownloadEndCaption: "",
      DownloadEndUseOnce: ""
    },
    ThumbsSize: "",
    ThumbsViewMode: "",
    CloudInfo: {},
    UseZipInspector: "",
    ImageMultiThumnail: "",
    AgentInstallFailCheck: null,
    AgentTransferType: "",
    DownloadHybridApp: "",
    MultipleAccessCheck: {
      Use: "",
      ExcludeCI: "",
      CallUrl: "",
      CheckInterval: ""
    },
    UseCompressTransferHtml5: "",
    PluginVersion: "",
    AgentRequestCount: "",
    AgentChunkSize: "",
    UseSWorkConnect: "",
    DragAndDropMode: "",
    UseDropZoneOverClass: "",
    UseDownloadCache: "",
    MobileSelectImage: "",
    MobileCameraOnly: "",
    AgentEventMethod: "",
    DisableLastNotify: "",
    EnableAgentShortcut: "",
    UseFormDataInRangeInfo: "",
    UseWirelessMode: "",
    UseLocalFileDownload: "",
    ShowConfirmLocalFileDownload: "",
    AutoRenameLocalFileDownload: "",
    ShowProgressLocalFileDownload: "",
    AlertToEvent: "",
    AgentDownloadMethod: "",
    DownloadSkipCheckWithFileSize: "",
    PreCheckFileExistInDownload: "",
    ReportFailedList: "",
    LocalLongPathEnable: "",
    IgnoreDifferentUploadName: "",
    PluginToolEx: "",
    DisablePreEndRequest: "",
    DisableMultiTransferSync: "",
    DownloadStatusCheckInterval: "",
    OpenExecuteFileOption: "",
    LicenseKeyHandler: "",
    PrintMulti: "",
    OpenMulti: "",
    SaveAndOpenMulti: "",
    UseWorker: "",
    OpenFolderApp: "",
    UploadSkipErrorFile: "",
    AddHttpHeader: null,
    AddCSRFToken: null,
    UseVirtualList: "",
    MassFileMode: "",
    HandlerInitCheck: "",
    DefaultFileDialogPath: "",
    ValidateFileSizeChanged: {Use: "", UploadChangedFile: ""},
    SimpleUIMode: {
      Use: "",
      Mode: "",
      EditModeVisibleHeader: "",
      EditModeVisibleIcon: "",
      EditModeIconList: [],
      EditModeVisibleTitle: "",
      EditModeTitleText: "",
      ViewModeVisibleHeader: "",
      ViewModeVisibleIcon: "",
      ViewModeIconList: [],
      ViewModeVisibleTitle: "",
      ViewModeTitleText: "",
      UserCssUrl: ""
    },
    ApplyPreDownloadRequestRange: "",
    FormdataFileNameToOrigin: "",
    FileOpenIndependent: "",
    UserCssUrlDetailApply: "",
    AutoSetZoom: {Use: "", CheckNode: null},
    MaxOneFileSizeByExtension: "",
    ResetBeforeAddNewFile: "",
    RunAsDifferentProcessName: {
      All: "",
      Upload: "",
      Download: "",
      ChooseFiles: ""
    },
    AddRAONKInfoToFileUploadRequest: {Use: "", StartAndEndChunkSync: ""},
    DownloadMethod: "",
    AutoChangeToHtml5Mode: ""
  }
}

function RAONKUpload_Config(a) {
  "" != a.RootPath && (RAONKUPLOAD.rootPath = a.RootPath);
  RAONKUPLOAD.rootPath = RAONKUPLOAD.util.set_handlerUrl(RAONKUPLOAD.rootPath);
  this.licenseKeyHtml5 = this.licenseKey = this.productKey = "";
  this.webPath = {
    image: RAONKUPLOAD.rootPath + "images/",
    skin: RAONKUPLOAD.rootPath + "images/skin/",
    page: RAONKUPLOAD.rootPath + "pages/",
    js: RAONKUPLOAD.rootPath + "js/",
    jsDev: RAONKUPLOAD.rootPath + "js_dev/",
    lang: RAONKUPLOAD.rootPath + "js/lang/",
    langDev: RAONKUPLOAD.rootPath + "js_dev/lang/",
    css: RAONKUPLOAD.rootPath +
        "css/",
    cssDev: RAONKUPLOAD.rootPath + "css_dev/",
    config: RAONKUPLOAD.rootPath + "config/",
    plugin: RAONKUPLOAD.rootPath + "plugin/",
    manager: RAONKUPLOAD.rootPath + "agent/",
    installGuide: RAONKUPLOAD.rootPath + "agent/installguide/raonk_setup.html",
    multiUserCheck: RAONKUPLOAD.rootPath
        + "agent/installguide/multi_user_check.html"
  };
  this.initVisible = !0;
  this.configUrl = this.webPath.config + "raonkupload.config.xml";
  this.skinName = "bluegray";
  this.customTextColor = this.customProgressBarColor = this.customFooterColor = this.customHeaderColor =
      "";
  this.customWebFileColor = "#f9f5f5";
  this.width = "500px";
  this.height = "316px";
  this.minHeight = 120;
  this.statusBarHeight = 26;
  this.buttonBarHeight = 34;
  this.minHeaderBarHeight = 28;
  this.originHeight = "316px";
  this.customHeaderHeight = "28";
  this.lang = "ko-kr";
  this.languageExtendObject = "";
  this.managerLang = "auto";
  this.isCrossDomain = !1;
  this.maxOneFileSize = this.maxTotalFileCount = this.maxTotalFileSize = 0;
  this.useLogoImage = {
    use: "0",
    logoPath: this.webPath.image + "raonklogo.png",
    logoVer: ""
  };
  this.hideListInfo = "0";
  this.extension =
      {allowOrLimit: "1", extArr: [], extToString: "", mimeAccept: ""};
  this.showHeaderBarOrg = this.showHeaderBar = this.showStatusBar = "1";
  this.showButtonBarEdit = [];
  this.showButtonBarView = [];
  this.uploadBorderStyle = "none";
  this.multiFileSelect = !0;
  this.listViewDragAndDrop = this.listViewDbclick = "1";
  this.mode = "upload";
  this.views = "list";
  this.canvasWidth = 88;
  this.canvasHeight = 60;
  this.userRunTimeMode = "html5";
  this.managerParam = "";
  this.managerDownloadWindowMode = this.managerUploadWindowMode = "0";
  this.developLang = "NET";
  this.handlerUrl =
      RAONKUPLOAD.rootPath + "handler/raonkhandler.ashx";
  this.processHandlerUrl = this.downloadHandlerUrl = "";
  this.viewerUrl = RAONKUPLOAD.rootPath + "handler/raonkviewer.aspx";
  this.folderNameRule = "";
  this.fileNameRule = "GUID";
  this.uploadFileNameRuleEx = this.fileNameRuleEx = "_";
  this.downloadFileNameRuleEx = "";
  this.asyncUpload = !0;
  this.chunkSize = 1048576;
  this.maxChunkSize = 0;
  this.getFolderInFile = this.folderTransfer = this.resumeDownload = this.resumeUpChunkMode = this.resumeUpload = "0";
  this.useAfterMoveFileEvent = this.useFinishDownloadedEvent =
      this.useAfterDownloadEvent = this.useAfterAddEndTimeEvent = this.useAfterAddEvent = this.useDownloadEvent = this.useUploadingCancelEvent = this.useOpenEvent = this.useDeleteEndTimeEvent = this.useDeleteAfterEvent = this.useDeleteEvent = this.useAddEvent = "1";
  this.useExcuteDownloadInMobile = "0";
  this.useGetExcelDataCallBackEvent = this.useGetZipFileInfoCallBackEvent = this.useAddLocalFileDirectlyExCallBackEvent = this.useAddLocalFileDirectlyCallBackEvent = "1";
  this.addExtIcon = [];
  this.isPause = !1;
  this.automaticConnection = this.timeout =
      "0";
  this.showFolderView = "1";
  this.messageTitle = "RAON K";
  this.useScriptEventControl = "1";
  this.downloadCancel = this.uploadCancel = !1;
  this.showCheckBox = "1";
  this.hideContextMenu = "0";
  this.sizeColumnWidth = "100";
  this.unitDelimiter = "\x0B";
  this.unitAttributeDelimiter = "\f";
  this.trans_unitDelimiter = "\x0B";
  this.trans_unitAttributeDelimiter = "\f";
  this.useAutoHeight = this.downloadMulti = "0";
  this.removeContextItem = "";
  this.displayFileSizeHtml4 = this.disableDeleteConfirmMessage = "0";
  this.NTLM = "";
  this.largeFiles = {
    markSize: 0,
    maxCount: 0,
    maxTotalSize: 0,
    text: "",
    color: "",
    markBaseTotalSize: 0,
    customMode: 0
  };
  this.cacheProtectMode = "0";
  this.use_file_sort = "1";
  this.auto_sort = this.sort_ascdesc = this.sort_field = "0";
  this.showViewAlign = this.showEditAlign = "left";
  this.imgPreView = this.completeEventResetUse = this.fileMoveContextMenu = "0";
  this.imgPreViewHeight = this.imgPreViewWidth = "100px";
  this.statusBarShowStatus = this.statusBarShowLimit = "1";
  this.buttonBarPosition = "buttom";
  this.userMessage = {edit: "", view: ""};
  this.useSingleSelect = "0";
  this.disableAlertMessage =
      {
        duplication: "1",
        deleteUnchosen: "1",
        downloadUnchosen: "1",
        openUnchosen: "1",
        disableDeleteConfirm: "0",
        disableUploadCancelConfirm: "0",
        disableRecoveryConfirm: "0",
        fileExtensionDetect: "0",
        fileMaxCountAdd: "0"
      };
  this.silentDownloadEx = this.silentDownload = this.silentUpload = this.allowedEmptyFolder = this.allowedZeroFileSize = "0";
  this.security = {
    encryptParam: "0",
    fileExtensionDetector: "0",
    fileIntegrity: "0",
    fileIntegrityUpload: "",
    fileIntegrityDownload: "",
    fileEncrypt: "0",
    deleteOpenFile: "0",
    keyValue: RAONKUPLOAD.util.getRV(RAONKUPLOAD._$0).substring(0,
        11),
    handlerKey: "",
    useMagicJs: "0",
    useMagicJsCrypto: "0",
    requestValidationSecond: "0"
  };
  this.sizeForChunkUpload = this.highSpeed = "0";
  this.headerBarItemFileNameOrder = 1;
  this.headerBarItemFileSizeOrder = 2;
  this.headerBarItem = [];
  this.headerBarItemWidth = [];
  this.headerBarItemAlign = [];
  this.headerBarItemSetTitle = [];
  this.uploadTransferWindow = {
    view: "1",
    viewWidth: "470px",
    viewHeight: "170px",
    buttonType: 0,
    hideDownloadedPath: 0,
    uiSetting: {
      width: "",
      systemTitleUpload: "",
      systemTitleDownload: "",
      systemTitleFontFamily: "",
      systemTitleFontSize: "",
      systemTitleFontBold: "",
      userColor: "",
      fileListView: "",
      fileListStatusAlign: "",
      useSetting: "",
      speedText: "",
      speedTextDesc: "",
      viewTheme: ""
    },
    viewFilesInFolder: "0",
    displayTotalProgressByFileCount: ""
  };
  this.defaultDownloadPath = "#|";
  this.transferOpenFile = "1";
  this.selectByClicked = "0";
  this.savePathSetting = "";
  this.transferBackgroundStyle = "filter:alpha(opacity=50); opacity:0.5; -moz-opacity:0.5; -ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=50); -khtml-opacity: 0.5; background-color:black;";
  this.useDropzone =
      "0";
  this.allowOpenExtension = "";
  this.fileFilterEx = "*.*";
  this.imageQuality = {
    quality: 1,
    workerCount: 7,
    extension: "",
    changedExtension: "jpg",
    allowOrLimit: "1",
    overFileSize: "0",
    processingWindow: "0"
  };
  this.useZipDownload = "0";
  this.allowedRealtimeDownloadAdd = 1;
  this.managerShowItemCount = 5;
  this.forceOverwrite = this.skipSentFile = this.autoDestroy = "0";
  this.event = {
    onError: null,
    creationComplete: null,
    beforeUpload: null,
    uploadComplete: null,
    multiUploadComplete: null,
    transferComplete: null,
    beforeDownloadFile: null,
    downloadCompleteFile: null,
    downloadCompleteAllFile: null,
    excuteDownloadFile: null,
    beforeOpenFile: null,
    beforeAddFile: null,
    afterAddFile: null,
    afterAddAllFile: null,
    afterAddWebFile: null,
    beforeDeleteFile: null,
    afterDeleteFile: null,
    deleteAllFile: null,
    selectItem: null,
    afterMoveFile: null,
    uploadingCancel: null,
    downloadCancel: null,
    customAction: null,
    onLanguageDefinition: null,
    alert: null,
    agentInstall: null,
    multipleAccessEvent: null,
    extendFunction: null,
    unselectItem: null,
    closeInstallPopup: null,
    initAddAllFile: null,
    transferStatusChange: null
  };
  this.emptyDownloadFileText =
      "";
  this.emptyDownloadFileTextColor = "#000000";
  this.emptyDownloadFileTextStrike = this.emptyDownloadFileTextUnderline = this.emptyDownloadFileTextItalic = this.emptyDownloadFileTextBold = "0";
  this.workerSupported = 0 == RAONKUPLOAD.browser.ie && "Worker" in window;
  this.zIndex = 9999;
  this.useSingleDownloadDialog = "0";
  this.interworkingModuleThird = this.interworkingModuleSecond = this.interworkingModuleFirst = null;
  this.useServerLicense = !1;
  this.useDbclickOpen = "1";
  this.changeDbclickCommand = "";
  this.zipFileName = "download.zip";
  this.useHashExtract = this.DisableMultiFileSelectInMobile = this.zipFileNameUserSettingMode = "0";
  this.useAgentLog = this.useKManager = "1";
  this.useAdminLog = this.useAdminConfig = this.agentBandwidth = this.useKManagerEncodingUrl = "0";
  this.agentMultiUploadCount = this.agentMultiDownloadCount = this.agentMultiTransferCount = "1";
  this.agentAdmin = {
    chunkSize: 0,
    requestCount: "0",
    multiTransferCount: "0",
    internetOpenType: "0",
    bufferSize: "0",
    bufferSizeUpload: "",
    bufferSizeDownload: "",
    timeout: "0",
    downloadFileNameSuffix: "",
    systemCode: "",
    smartRequestSize: "",
    chunkSizeForWirelessLowSpeed: 0,
    requestCountForWirelessLowSpeed: "0",
    enableDownloadLock: "0",
    keepClientBandwidth: "0"
  };
  this.dialogWindow = null;
  this.managerPortArr = ["47317", "47139", "57317", "57318", "57419"];
  this.managerHttpsPortArr = ["47337", "47159", "57337", "57338", "57439"];
  this.sendToManagerType = "1";
  -1 < RAONKUPLOAD.UserAgent.os.name.toLowerCase().indexOf("windows") && -1
  < RAONKUPLOAD.UserAgent.browser.name.toLocaleLowerCase().indexOf("safari")
  && (this.sendToManagerType = "2");
  "1" == this.sendToManagerType &&
  RAONKUPLOAD.browser.ie && 9 >= RAONKUPLOAD.browser.ieVersion
  && (this.sendToManagerType = "2");
  this.dropZoneTransparency = 1;
  this.agentHttps = !1;
  this.useCompressTransfer = this.checkNetworkSpeed = "0";
  this.compressUploadAllFile = {
    use: "",
    fileName: "",
    password: "",
    level: "",
    addRootFolder: ""
  };
  this.agentCompressBufferSize = "0";
  this.agentIntelligentCompressValue = "15";
  this.agentAutoDecompression = "0";
  this.agentAutoDecompressionPassword = "";
  this.directDownload = !1;
  this.useInstallGuide = "0";
  this.installGuideZIndex = 9999;
  this.installGuideLogoUrl =
      "";
  this.useAutoInstall = "1";
  this.agentInstallFileName = "raonkSetup.exe";
  this.agentInstallFileUrl2 = this.agentInstallFileUrl = this.agentInstallFileName2 = "";
  this.agentInstallFolderUrl = this.webPath.manager;
  this.moveMouseDrag = 0;
  this.cookieWindow = parent.parent;
  this.applyAgentOs = ",windows,";
  this.enforceHtml5 = "0";
  this.extendFunction = [];
  this.skipInternetState = "1";
  this.fileOpenDialogTitle = "";
  this.fileOpenDialogType = "0";
  this.folderSelectDialogButtonName = this.folderSelectDialogTitle = this.fileSaveDialogTitle = "";
  this.agentCommunicationMethod = this.folderSelectDialogType = "0";
  this.trustSites = "";
  this.showTrayIcon = "1";
  this.agentTempRootDirectory = "";
  this.agentEventInterval = 300;
  this.agentEventType = "1";
  this.autoRecoveryTransfer = "0";
  this.autoRecoveryId = this.agentEventWaitTime = "";
  this.autoTransfer = "1";
  this.userCssUrl = "";
  this.allowDuplicationFileOnlyFileName = this.allowDuplicationFile = "0";
  this.sessionKeep = {
    use: "0",
    url: RAONKUPLOAD.rootPath + "handler/raonksession.aspx",
    retryTime: "30",
    requestFlag: !1
  };
  this.disableChunkDownload =
      this.disableChunkUpload = "0";
  this.useBrowserUseragent = "1";
  this.transferProcess = "";
  this.useWebfileThumbnailView = "1";
  this.useKMonitoring = "0";
  this.kMonitorUrl = RAONKUPLOAD.rootPath + "handler/raonkmonitor.ashx";
  this.kMonitorPartUrl = RAONKUPLOAD.rootPath + "handler/raonkmonitor.ashx";
  this.kMonitorPollingTime = "";
  this.kMonitorSkipCachedBandwidth = "1";
  this.enableAdminLog = this.kMonitorGroupId = "";
  this.dext5Install = "1";
  this.useWorkingImg = {
    use: [0, 0, 0, 0],
    useOnce: [0, 0, 0, 0],
    caption: ["Processing on server", "Processing on server",
      "Processing on server", "Processing on server"],
    image: [this.webPath.image + "process_mini.gif",
      this.webPath.image + "upload_end.gif",
      this.webPath.image + "download_pre.gif",
      this.webPath.image + "process_mini.gif"]
  };
  this.thumbsSize = "";
  this.thumbsViewMode = "0";
  this.cloudInfo = {
    Use: "0",
    deleteUploadedFileInCaseCancled: "0",
    cloudNameString: ""
  };
  this.sworkInfo = null;
  this.useZipInspector = "0";
  this.imageMultiThumnail = null;
  this.agentInstallFailCheck = {use: "0", time: 30, stopInstallCheck: !1};
  this.agentTransferType = 0;
  this.downloadHybridApp =
      "0";
  this.multipleAccessCheck = {
    use: "0",
    excludeCI: "",
    callUrl: "",
    checkInterval: 0
  };
  this.useSWorkConnect = "0";
  this.dragAndDropMode = "1";
  this.useDropZoneOverClass = -1;
  this.mobileCameraOnly = this.mobileSelectImage = this.useDownloadCache = "0";
  this.agentEventMethod = "1";
  this.disableLastNotify = "0";
  this.enableAgentShortcut = "1";
  this.auditLogEnable = null;
  this.useFormDataInRangeInfo = "1";
  this.useWirelessMode = "";
  this.useLocalFileDownload = "0";
  this.alertToEvent = this.showProgressLocalFileDownload = this.autoRenameLocalFileDownload =
      this.showConfirmLocalFileDownload = "";
  this.agentDownloadMethod = 0;
  this.ignoreDifferentUploadName = this.localLongPathEnable = this.reportFailedList = this.preCheckFileExistInDownload = this.downloadSkipCheckWithFileSize = "0";
  this.pluginToolExArr = [];
  this.disableMultiTransferSync = this.disablePreEndRequest = "0";
  this.downloadStatusCheckInterval = 1;
  this.openExecuteFileOption = "1";
  this.saveAndOpenMulti = this.openMulti = this.printMulti = "0";
  this.useWorker = "1";
  this.openFolderApp = "";
  this.uploadSkipErrorFile = "0";
  this.addHttpHeader =
      a.AddHttpHeader ? a.AddHttpHeader : null;
  this.addCSRFToken = a.AddCSRFToken ? a.AddCSRFToken : null;
  this.massFileMode = this.useVirtualList = "0";
  this.handlerInitCheck = "1";
  this.defaultFileDialogPath = "";
  this.validateFileSizeChanged = {use: "0", uploadChangedFile: "1"};
  this.simpleUIMode = {
    use: "0",
    mode: "multi",
    editModeVisibleHeader: "1",
    editModeVisibleIcon: "1",
    editModeIconList: ["fileAdd", "fileSend", "deleteAll"],
    editModeVisibleTitle: "1",
    editModeTitleText: "UPLOAD",
    viewModeVisibleHeader: "1",
    viewModeVisibleIcon: "1",
    viewModeIconList: ["downloadAll"],
    viewModeVisibleTitle: "1",
    viewModeTitleText: "DOWNLOAD",
    userCssUrl: ""
  };
  this.applyPreDownloadRequestRange = "0";
  this.formdataFileNameToOrigin = "1";
  this.userCssUrlDetailApply = this.fileOpenIndependent = "0";
  this.autoSetZoom = {use: "0", checkNode: null};
  this.maxOneFileSizeByExtension = {};
  this.resetBeforeAddNewFile = "0";
  this.runAsDifferentProcessName = {
    all: "",
    upload: "",
    download: "",
    chooseFiles: ""
  };
  this.addRAONKInfoToFileUploadRequest = {use: "0", startAndEndChunkSync: ""};
  this.downloadMethod = "post";
  this.autoChangeToHtml5Mode =
      "0";
  if (this.addCSRFToken) {
    null == this.addHttpHeader && (this.addHttpHeader = {});
    for (var c in this.addCSRFToken) {
      this.addCSRFToken.hasOwnProperty(c)
      && (this.addHttpHeader[c] = this.addCSRFToken[c])
    }
  }
}

function RAONKUpload(a) {
  var c = a.Id, b = new kupload_user_config, e;
  for (e in a) {
    a.hasOwnProperty(e) && (b[e] = a[e]);
  }
  void 0 == c && (c = RAONKUPLOAD.util.makeGuidTagName("raonkupload_"));
  RAONKUPLOAD.CUploadID = c;
  a = RAONKUPLOAD.util.isExistUploaderName(c, b);
  if (1 == a) {
    alert(
        "uploader's name is empty. Please, check uploader's name");
  } else {
    if (2 == a) {
      if ("1"
          == b.IgnoreSameUploadName) {
        c = RAONKUPLOAD.util.getNewNextUploaderName(
            c);
      } else {
        alert(
            "uploader's name is already exist. Please, check uploader's name");
        return
      }
    }
    3 != a && (RAONKUPLOAD.RAONKMULTIPLEID.push(c),
        RAONKUPLOAD.RAONKMULTIPLE["raonkuploader_frame_"
        + c] = c, RAONKUPLOAD.RAONKHOLDER[c] = b.UploadHolder);
    this.frameID = "raonkuploader_frame_" + c;
    this.ID = c;
    try {
      null == RAONKUPLOAD.UserConfigHashTable
      && (RAONKUPLOAD.UserConfigHashTable = new RAONKUPLOAD.util.hashTable), b.Id = c, RAONKUPLOAD.UserConfigHashTable.setItem(
          c, b)
    } catch (f) {
      RAONKUPLOAD.logMode && console && console.log(f)
    }
    b.XhrWithCredentials && (RAONKUPLOAD.ajax.xhrWithCredentials = !0);
    var d = new RAONKUpload_Config(b);
    b.DialogWindow && (d.dialogWindow = b.DialogWindow);
    if (0 < b.InitServerXml.length) {
      -1 == b.InitServerXml.indexOf("f=") && (-1 < b.InitServerXml.indexOf("?")
          ? b.InitServerXml += "&f=raonkupload.config.xml"
          : b.InitServerXml += "?f=raonkupload.config.xml");
      try {
        var k = b.InitServerXml.split("?"), l = k[0], m = k[1].split("&"),
            p = m.length;
        e = a = "";
        for (k = 0; k < p; k++) {
          var q = m[k].split("=");
          "f" == q[0] ? a = q[1] : e += "&" + q[0] + "=" + q[1]
        }
        var n = "kc" + RAONKSolution.Agent.formfeed + "c21"
                + RAONKSolution.Agent.vertical,
            n = n + ("k14" + RAONKSolution.Agent.formfeed + a),
            n = RAONKUPLOAD.util.makeEncryptParam(n);
        d.configUrl = l + "?k00=" + n;
        1 < e.length && (d.configUrl += e)
      } catch (t) {
        alert("Error occurred reading the Upload Settings")
      }
    } else {
      0 < b.InitXml.length && (0 == b.InitXml.indexOf("http")
          ? d.configUrl = b.InitXml : d.configUrl = RAONKUPLOAD.rootPath
              + "config/" + b.InitXml);
    }
    d.configUrl = RAONKUPLOAD.util.set_handlerUrl(d.configUrl);
    -1 < d.configUrl.indexOf("?") ? d.configUrl += "&t="
        + RAONKUPLOAD.util.getTimeStamp() : d.configUrl += "?t="
        + RAONKUPLOAD.util.getTimeStamp();
    n = null;
    n = 0 < b.InitServerXml.length ? RAONKUPLOAD.ajax.load(d.configUrl,
        !1, d.addHttpHeader) : RAONKUPLOAD.ajax.loadXml(d.configUrl, !1,
        d.addHttpHeader);
    if (null == n) {
      alert("Error occurred reading the Upload Settings");
    } else {
      "object" == typeof n ? "" == n.xml && (n = RAONKUPLOAD.ajax.load(
          d.configUrl, !1, d.addHttpHeader), n = RAONKUPLOAD.util.stringToXML(n,
          !1, d.addHttpHeader)) : (n = RAONKUPLOAD.util.trim(n), 0
      < b.InitServerXml.length && (n = RAONKUPLOAD.util.parseDataFromServer(
          n)), 0 == n.indexOf("[OK]") ? (0 == n.indexOf("[OK]")
      && (n = n.substring(4), n = RAONKUPLOAD.util.makeDecryptReponseMessage(
          n)), n = n.substring(n.indexOf("<?")),
          n = RAONKUPLOAD.util.stringToXML(n)) : 0 == n.indexOf("[FAIL]")
          ? alert("Error occurred reading the Upload Settings")
          : (n = RAONKUPLOAD.util.stringToXML(n)) || alert(
          "Error occurred reading the Upload Settings"));
      var r = RAONKUPLOAD.util.xml.getAllNodes(n);
      if (r && "undefined" != typeof r.parsererror) {
        alert(
            "Error occurred parsing the Upload Settings");
      } else {
        var g = {
          "JS|InterworkingModuleFirst": {config: "interworkingModuleFirst"},
          "JS|InterworkingModuleSecond": {config: "interworkingModuleSecond"},
          "JS|InterworkingModuleThird": {config: "interworkingModuleThird"},
          "JS|InitVisible": {
            config: "initVisible", configFn: function (a) {
              0 == a && (d.initVisible = a)
            }
          }
        };
        g["XML|license.product_key"] = g["JS|ProductKey"] = {config: "productKey"};
        g["XML|license.license_key"] = g["JS|LicenseKey"] = {config: "licenseKey"};
        g["XML|license.license_key_html5"] = g["JS|LicenseKeyHtml5"] = {config: "licenseKeyHtml5"};
        g["XML|uploader_setting.high_speed"] = g["JS|HighSpeed"] = {config: "highSpeed"};
        g["XML|uploader_setting.develop_langage"] = g["JS|DevelopLangage"] = {config: "developLang"};
        g["XML|uploader_setting.download_handler_url"] =
            g["JS|DownloadHandlerUrl"] = {config: "downloadHandlerUrl"};
        g["XML|uploader_setting.process_handler_url"] = g["JS|ProcessHandlerUrl"] = {config: "processHandlerUrl"};
        g["XML|uploader_setting.handler_url@init_check"] = g["JS|HandlerInitCheck"] = {config: "handlerInitCheck"};
        g["XML|uploader_setting.folder_name_rule"] = g["JS|FolderNameRule"] = {config: "folderNameRule"};
        g["XML|uploader_setting.file_name_rule"] = g["JS|FileNameRule"] = {config: "fileNameRule"};
        g["XML|uploader_setting.file_name_rule_ex"] = g["XML|uploader_setting.file_name_rule_ex@upload"] =
            g["JS|FileNameRuleEx"] = g["JS|UploadFileNameRuleEx"] = {
              config: "fileNameRuleEx",
              allowEmpty: !0,
              jsFn: function (a) {
                null != a && (this.inEmpty = !0);
                return a
              },
              configFn: function (a) {
                if ("" == a || "#" == a || -1 < a.indexOf("i") || "_"
                    == a) {
                  return a
                }
              }
            };
        g["XML|uploader_setting.file_name_rule_ex@download"] = g["JS|DownloadFileNameRuleEx"] = {
          config: "downloadFileNameRuleEx",
          allowEmpty: !0,
          jsFn: function (a) {
            null != a && (this.inEmpty = !0);
            return a
          },
          configFn: function (a) {
            if ("" == a || "#" == a || -1 < a.indexOf("i") || "_" == a) {
              return a
            }
          }
        };
        g["XML|uploader_setting.async_upload"] =
            g["JS|AsyncUpload"] = {
              config: "asyncUploadTemp",
              configFn: function (a) {
                d.asyncUpload = "0" == a ? !1 : !0;
                return a
              }
            };
        g["XML|uploader_setting.max_chunk_size"] = g["JS|MaxChunkSize"] = {
          config: "maxChunkSize",
          configFn: function (a) {
            var b = RAONKUPLOAD.util.getUnit(a),
                b = RAONKUPLOAD.util.getUnitSize(b);
            return parseInt(a, 10) * b
          }
        };
        g["XML|uploader_setting.size_for_chunk_upload"] = g["JS|SizeForChunkUpload"] = {
          config: "sizeForChunkUpload", configFn: function (a) {
            var b = RAONKUPLOAD.util.getUnit(a),
                b = RAONKUPLOAD.util.getUnitSize(b);
            return parseInt(a,
                10) * b
          }
        };
        g["XML|uploader_setting.disable_chunk_upload"] = g["JS|DisableChunkUpload"] = {config: "disableChunkUpload"};
        g["XML|uploader_setting.disable_chunk_download"] = g["JS|DisableChunkDownload"] = {config: "disableChunkDownload"};
        g["XML|uploader_setting.use_browser_useragent"] = g["JS|UseBrowserUseragent"] = {config: "useBrowserUseragent"};
        g["XML|setting.skin_name"] = g["JS|SkinName"] = {config: "skinName"};
        g["XML|setting.enforce_document_domain"] = g["JS|EnforceDocumentDomain"] = {
          config: "EnforceDocumentDomainTemp", configFn: function (a) {
            RAONKUPLOAD.EnforceDocumentDomain =
                "1" == a ? !0 : !1;
            return a
          }
        };
        g["XML|setting.skin_name@color1"] = g["JS|CustomHeaderColor"] = {config: "customHeaderColor"};
        g["XML|setting.skin_name@color2"] = g["JS|CustomFooterColor"] = {config: "customFooterColor"};
        g["XML|setting.skin_name@color3"] = g["JS|CustomProgressBarColor"] = {config: "customProgressBarColor"};
        g["XML|setting.skin_name@text_color"] = g["JS|CustomTextColor"] = {config: "customTextColor"};
        g["XML|setting.skin_name@webfile_color"] = g["JS|CustomWebFileColor"] = {config: "customWebFileColor"};
        g["XML|setting.skin_name@css_root_path"] =
            g["JS|CssRootPath"] = {
              config: "webPath.css",
              configFn: function (a) {
                return d.webPath.cssDev = a
              }
            };
        g["XML|setting.width"] = g["JS|Width"] = {
          config: "width",
          configFn: function (a) {
            return a + ""
          }
        };
        g["XML|setting.height"] = g["JS|Height"] = {
          config: "height",
          configFn: function (a) {
            d.originHeight = a;
            return a + ""
          }
        };
        g["XML|setting.lang"] = g["JS|Lang"] = {
          config: "lang",
          configFn: function (a) {
            d.managerLang = a;
            return a = "" == a ? "ko-kr" : RAONKUPLOAD.util.getUserLang(a)
          }
        };
        g["XML|setting.language_extend_object"] = g["JS|LanguageExtendObject"] = {config: "languageExtendObject"};
        g["XML|setting.max_total_file_size"] = g["JS|MaxTotalFileSize"] = {
          config: "maxTotalFileSize",
          configFn: function (a) {
            var b = RAONKUPLOAD.util.getUnit(a),
                b = RAONKUPLOAD.util.getUnitSize(b);
            return a = parseInt(a, 10) * b
          }
        };
        g["XML|setting.max_total_file_count"] = g["JS|MaxTotalFileCount"] = {
          config: "maxTotalFileCount",
          configFn: function (a) {
            return parseInt(a, 10)
          }
        };
        g["XML|setting.max_one_file_size"] = g["JS|MaxOneFileSize"] = {
          config: "maxOneFileSize", configFn: function (a) {
            var b = RAONKUPLOAD.util.getUnit(a),
                b = RAONKUPLOAD.util.getUnitSize(b);
            return a = parseInt(a, 10) * b
          }
        };
        g["XML|setting.upload_transfer_window@upload_window_mode"] = g["JS|ManagerUploadWindowMode"] = g["JS|UploadWindowMode"] = {config: "managerUploadWindowMode"};
        g["XML|setting.upload_transfer_window@download_window_mode"] = g["JS|ManagerDownloadWindowMode"] = g["JS|DownloadWindowMode"] = {config: "managerDownloadWindowMode"};
        g["XML|setting.upload_transfer_window.view"] = g["JS|UploadTransferWindow.View"] = {config: "uploadTransferWindow.view"};
        g["XML|setting.upload_transfer_window.view@width"] =
            g["JS|UploadTransferWindow.ViewWidth"] = {
              config: "uploadTransferWindow.viewWidth",
              configFn: function (a) {
                250 >= RAONKUPLOAD.util.parseIntOr0(a) && (a = "250px");
                return a
              }
            };
        g["XML|setting.upload_transfer_window.view@height"] = g["JS|UploadTransferWindow.ViewHeight"] = {
          config: "uploadTransferWindow.viewHeight",
          configFn: function (a) {
            150 >= RAONKUPLOAD.util.parseIntOr0(a) && (a = "150px");
            return a
          }
        };
        g["XML|setting.upload_transfer_window.button_type"] = g["JS|UploadTransferWindow.ButtonType"] = {
          config: "uploadTransferWindow.buttonType",
          configFn: function (a) {
            return RAONKUPLOAD.util.parseIntOr0(a)
          }
        };
        g["XML|setting.upload_transfer_window.hide_downloaded_path"] = g["JS|UploadTransferWindow.HideDownloadedPath"] = {
          config: "uploadTransferWindow.hideDownloadedPath",
          configFn: function (a) {
            return RAONKUPLOAD.util.parseIntOr0(a)
          }
        };
        g["XML|setting.upload_transfer_window.use_logo_image"] = g["JS|UseLogoImage.Use"] = {config: "useLogoImage.use"};
        g["XML|setting.upload_transfer_window.use_logo_image@logo_path"] = g["JS|UseLogoImage.LogoPath"] = {config: "useLogoImage.logoPath"};
        g["XML|setting.upload_transfer_window.use_logo_image@logo_ver"] = g["JS|UseLogoImage.LogoVer"] = {
          config: "useLogoImage.logoVer",
          configFn: function (a) {
            if ("1" == d.useLogoImage.use) {
              return a
            }
          }
        };
        g["XML|setting.upload_transfer_window.silent_upload"] = g["JS|SilentUpload"] = {config: "silentUpload"};
        g["XML|setting.upload_transfer_window.silent_download"] = g["JS|SilentDownload"] = {config: "silentDownload"};
        g["XML|setting.upload_transfer_window.silent_download_ex"] = g["JS|SilentDownloadEx"] = {config: "silentDownloadEx"};
        g["XML|setting.upload_transfer_window.display_total_progress_by_file_count"] =
            g["JS|UploadTransferWindow.DisplayTotalProgressByFileCount"] = {config: "uploadTransferWindow.displayTotalProgressByFileCount"};
        g["XML|setting.upload_transfer_window.ui_setting.width"] = g["JS|UploadTransferWindow.UISetting.Width"] = {config: "uploadTransferWindow.uiSetting.width"};
        g["XML|setting.upload_transfer_window.ui_setting.system_title_upload"] = g["JS|UploadTransferWindow.UISetting.SystemTitleUpload"] = {config: "uploadTransferWindow.uiSetting.systemTitleUpload"};
        g["XML|setting.upload_transfer_window.ui_setting.system_title_download"] =
            g["JS|UploadTransferWindow.UISetting.SystemTitleDownload"] = {config: "uploadTransferWindow.uiSetting.systemTitleDownload"};
        g["XML|setting.upload_transfer_window.ui_setting.system_title_font_family"] = g["JS|UploadTransferWindow.UISetting.SystemTitleFontFamily"] = {config: "uploadTransferWindow.uiSetting.systemTitleFontFamily"};
        g["XML|setting.upload_transfer_window.ui_setting.system_title_font_size"] = g["JS|UploadTransferWindow.UISetting.SystemTitleFontSize"] = {config: "uploadTransferWindow.uiSetting.systemTitleFontSize"};
        g["XML|setting.upload_transfer_window.ui_setting.system_title_font_bold"] = g["JS|UploadTransferWindow.UISetting.SystemTitleFontBold"] = {config: "uploadTransferWindow.uiSetting.systemTitleFontBold"};
        g["XML|setting.upload_transfer_window.ui_setting.userColor"] = g["JS|UploadTransferWindow.UISetting.UserColor"] = {config: "uploadTransferWindow.uiSetting.userColor"};
        g["XML|setting.upload_transfer_window.ui_setting.user_color"] = g["JS|UploadTransferWindow.UISetting.UserColor"] = {config: "uploadTransferWindow.uiSetting.userColor"};
        g["XML|setting.upload_transfer_window.ui_setting.file_list_view"] = g["JS|UploadTransferWindow.UISetting.FileListView"] = {config: "uploadTransferWindow.uiSetting.fileListView"};
        g["XML|setting.upload_transfer_window.ui_setting.file_list_status_align"] = g["JS|UploadTransferWindow.UISetting.FileListStatusAlign"] = {config: "uploadTransferWindow.uiSetting.fileListStatusAlign"};
        g["XML|setting.upload_transfer_window.ui_setting.use_setting"] = g["JS|UploadTransferWindow.UISetting.UseSetting"] = {config: "uploadTransferWindow.uiSetting.useSetting"};
        g["XML|setting.upload_transfer_window.ui_setting.speed_text"] = g["JS|UploadTransferWindow.UISetting.SpeedText"] = {config: "uploadTransferWindow.uiSetting.speedText"};
        g["XML|setting.upload_transfer_window.ui_setting.speed_text_desc"] = g["JS|UploadTransferWindow.UISetting.SpeedTextDesc"] = {config: "uploadTransferWindow.uiSetting.speedTextDesc"};
        g["XML|setting.upload_transfer_window.ui_setting.view_theme"] = g["JS|UploadTransferWindow.UISetting.ViewTheme"] = {config: "uploadTransferWindow.uiSetting.viewTheme"};
        g["XML|setting.upload_transfer_window.view_files_in_folder"] = g["JS|UploadTransferWindow.ViewFilesInFolder"] = {config: "uploadTransferWindow.viewFilesInFolder"};
        g["XML|setting.hide_list_info"] = g["JS|HideListInfo"] = {config: "hideListInfo"};
        g["XML|setting.extension"] = g["JS|ExtensionArr"] = {config: "extension.extArr"};
        g["XML|setting.extension@allow_or_limit"] = g["JS|ExtensionAllowOrLimit"] = {
          config: "extension.allowOrLimit", configFn: function (a) {
            if ("" != a.toString() && "" != d.extension.extArr && "0" != a) {
              var b = RAONKUPLOAD.util.getMimeFilter(
                  d.extension.extArr.toLowerCase());
              d.extension.mimeAccept = b
            }
            return a
          }
        };
        g["XML|setting.border_style"] = g["JS|BorderStyle"] = {config: "uploadBorderStyle"};
        g["XML|setting.multi_file_select"] = g["JS|MultiFileSelect"] = {
          config: "multiFileSelectTemp",
          configFn: function (a) {
            d.multiFileSelect = "0" == a ? !1 : !0;
            1 == d.maxTotalFileCount && (d.multiFileSelect = !1);
            return a
          }
        };
        g["XML|setting.multi_file_select@disable_mobile"] = g["JS|DisableMultiFileSelectInMobile"] = {
          config: "DisableMultiFileSelectInMobile", configFn: function (a) {
            if (RAONKUPLOAD.browser.mobile && d.multiFileSelect) {
              return "1" ==
              a && (d.multiFileSelect = !1), a
            }
          }
        };
        g["XML|setting.mode"] = g["JS|Mode"] = {
          config: "mode",
          configFn: function (a) {
            a = a.toLowerCase();
            "edit" == a && (a = "upload");
            return a
          }
        };
        g["XML|setting.list_view_dbclick"] = g["JS|ListViewDbclick"] = {config: "listViewDbclick"};
        g["XML|setting.list_view_drag_and_drop"] = g["JS|ListViewDragAndDrop"] = {config: "listViewDragAndDrop"};
        g["XML|setting.runtimes"] = g["JS|Runtimes"] = g["JS|RunTimes"] = {config: "userRunTimeMode"};
        g["XML|setting.runtimes@agent_os"] = g["JS|ApplyAgentOs"] = {
          config: "applyAgentOs",
          configFn: function (a) {
            return "," + a.toLocaleLowerCase() + ","
          }
        };
        g["XML|setting.resume_mode@upload"] = g["JS|ResumeUpload"] = {config: "resumeUpload"};
        g["XML|setting.resume_mode@download"] = g["JS|ResumeDownload"] = {config: "resumeDownload"};
        g["XML|setting.resume_mode@resume_up_chunk_mode"] = g["JS|ResumeUpChunkMode"] = {config: "resumeUpChunkMode"};
        g["XML|setting.runtimes@use_ws"] = g["JS|UseWS"] = {
          config: "useWS",
          configFn: function (a) {
            "1" != a && (a = "0");
            return a
          }
        };
        g["XML|setting.allowed_realtime_download_add"] = g["JS|AllowedRealtimeDownloadAdd"] =
            {
              config: "allowedRealtimeDownloadAdd", jsFn: function (a) {
                return RAONKUPLOAD.util.parseIntOr0(a)
              }, xmlFn: function (a) {
                return parseInt(a, 10)
              }
            };
        g["XML|setting.agent_transfer_window_item_count"] = g["JS|AgentTransferWindowItemCount"] = {
          config: "managerShowItemCount",
          configFn: function (a) {
            3 > a ? a = 3 : 15 < a && (a = 15);
            return RAONKUPLOAD.util.parseIntOr0(a)
          }
        };
        g["XML|setting.enforce_html5"] = g["JS|EnforceHtml5"] = {config: "enforceHtml5"};
        g["XML|setting.use_agent_install_guide"] = g["JS|UseAgentInstallGuide"] = {config: "useInstallGuide"};
        g["XML|setting.use_agent_install_guide@zindex"] = g["JS|AgentInstallGuideZIndex"] = {
          config: "installGuideZIndex",
          configFn: function (a) {
            if ("1" == d.useInstallGuide) {
              return parseInt(a, 10)
            }
          }
        };
        g["XML|setting.use_agent_install_guide@logo_url"] = g["JS|AgentInstallGuideLogoUrl"] = {
          config: "installGuideLogoUrl",
          configFn: function (a) {
            if ("1" == d.useInstallGuide) {
              return a
            }
          }
        };
        g["XML|setting.use_install_guide"] = g["JS|UseInstallGuide"] = {config: "useInstallGuide"};
        g["XML|setting.use_install_guide@zindex"] = g["JS|InstallGuideZIndex"] =
            {
              config: "installGuideZIndex", configFn: function (a) {
                if ("1" == d.useInstallGuide) {
                  return parseInt(a, 10)
                }
              }
            };
        g["XML|setting.use_install_guide@logo_url"] = g["JS|InstallGuideLogoUrl"] = {
          config: "installGuideLogoUrl",
          configFn: function (a) {
            if ("1" == d.useInstallGuide) {
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
        g["XML|setting.use_auto_install"] = g["JS|UseAutoInstall"] = {config: "useAutoInstall"};
        g["XML|setting.agent_https"] = g["JS|AgentHttps"] = {config: "agentHttps"};
        g["XML|setting.use_agent_log"] = g["JS|UseAgentLog"] = {config: "useAgentLog"};
        g["XML|setting.agent_bandwidth"] = g["JS|AgentBandwidth"] = {config: "agentBandwidth"};
        g["XML|setting.agent_chunk_size"] = g["JS|AgentChunkSize"] = {config: "agentChunkSize"};
        g["XML|setting.agent_request_count"] = g["JS|AgentRequestCount"] = {config: "agentRequestCount"};
        g["XML|setting.agent_compress_buffer_size"] = g["JS|AgentCompressBufferSize"] = {
          config: "agentCompressBufferSize",
          configFn: function (a) {
            if ("0" != a) {
              var b = RAONKUPLOAD.util.getUnit(a),
                  b = RAONKUPLOAD.util.getUnitSize(b);
              return parseInt(a, 10) * b
            }
          }
        };
        g["XML|setting.agent_intelligent_compress_value"] = g["JS|AgentIntelligentCompressValue"] = {config: "agentIntelligentCompressValue"};
        g["XML|setting.agent_auto_decompression"] = g["JS|AgentAutoDecompression"] = {config: "agentAutoDecompression"};
        g["XML|setting.agent_auto_decompression@password"] = g["JS|AgentAutoDecompressionPassword"] = {config: "agentAutoDecompressionPassword"};
        g["XML|setting.agent_multi_transfer_count"] =
            g["JS|AgentMultiTransferCount"] = {
              config: "agentMultiTransferCount",
              configFn: function (a) {
                d.agentMultiUploadCount = a;
                return d.agentMultiDownloadCount = a
              }
            };
        g["XML|setting.agent_multi_upload_count"] = g["JS|AgentMultiUploadCount"] = {config: "agentMultiUploadCount"};
        g["XML|setting.agent_multi_download_count"] = g["JS|AgentMultiDownloadCount"] = {config: "agentMultiDownloadCount"};
        g["XML|setting.agent_admin.chunk_size"] = g["JS|AgentAdmin.ChunkSize"] = {
          config: "agentAdmin.chunkSize", configFn: function (a) {
            var b;
            0 !== a && (b =
                RAONKUPLOAD.util.getUnit(a), "" != b
                ? (b = RAONKUPLOAD.util.getUnitSize(b), b *= parseInt(a, 10))
                : b = RAONKUPLOAD.util.parseIntOr0(a,
                    10), d.sizeForChunkUpload = b);
            return b
          }
        };
        g["XML|setting.agent_admin.request_count"] = g["JS|AgentAdmin.RequestCount"] = {config: "agentAdmin.requestCount"};
        g["XML|setting.agent_admin.multi_transfer_count"] = g["JS|AgentAdmin.MultiTransferCount"] = {config: "agentAdmin.multiTransferCount"};
        g["XML|setting.agent_admin.internet_open_type"] = g["JS|AgentAdmin.InternetOpenType"] = {config: "agentAdmin.internetOpenType"};
        g["XML|setting.agent_admin.buffer_size"] = g["JS|AgentAdmin.BufferSize"] = {config: "agentAdmin.bufferSize"};
        g["XML|setting.agent_admin.buffer_size_upload"] = g["JS|AgentAdmin.BufferSizeUpload"] = {config: "agentAdmin.bufferSizeUpload"};
        g["XML|setting.agent_admin.buffer_size_download"] = g["JS|AgentAdmin.BufferSizeDownload"] = {config: "agentAdmin.bufferSizeDownload"};
        g["XML|setting.agent_admin.timeout"] = g["JS|AgentAdmin.Timeout"] = {config: "agentAdmin.timeout"};
        g["XML|setting.agent_admin.download_file_name_suffix"] =
            g["JS|AgentAdmin.DownloadFileNameSuffix"] = {config: "agentAdmin.downloadFileNameSuffix"};
        g["XML|setting.agent_admin.system_code"] = g["JS|AgentAdmin.SystemCode"] = {config: "agentAdmin.systemCode"};
        g["XML|setting.agent_admin.smart_request_size"] = g["JS|AgentAdmin.SmartRequestSize"] = {config: "agentAdmin.smartRequestSize"};
        g["XML|setting.agent_admin.chunk_size@wireless_low_speed"] = g["JS|AgentAdmin.ChunkSizeForWirelessLowSpeed"] = {
          config: "agentAdmin.chunkSizeForWirelessLowSpeed",
          configFn: function (a) {
            var b;
            0 !==
            a && (b = RAONKUPLOAD.util.getUnit(a), "" != b
                ? (b = RAONKUPLOAD.util.getUnitSize(b), b *= parseInt(a, 10))
                : b = RAONKUPLOAD.util.parseIntOr0(a, 10));
            return b
          }
        };
        g["XML|setting.agent_admin.request_count@wireless_low_speed"] = g["JS|AgentAdmin.RequestCountForWirelessLowSpeed"] = {config: "agentAdmin.requestCountForWirelessLowSpeed"};
        g["XML|setting.agent_admin.enable_download_lock"] = g["JS|AgentAdmin.EnableDownloadLock"] = {config: "agentAdmin.enableDownloadLock"};
        g["XML|setting.agent_admin.keep_client_bandwidth"] = g["JS|AgentAdmin.KeepClientBandwidth"] =
            {config: "agentAdmin.keepClientBandwidth"};
        g["JS|DropZoneTransparency"] = {
          config: "dropZoneTransparency",
          configFn: function (a) {
            "" != a && (a = parseInt(a, 10), 0 > a ? a = 0 : 255 < a
                && (a = 255));
            return a
          }
        };
        g["XML|setting.plugin_version"] = g["JS|PluginVersion"] = {config: "plugin_version"};
        g["XML|setting.show_status_bar"] = g["JS|StatusBar"] = {config: "showStatusBar"};
        g["XML|setting.show_status_bar@show_limit"] = g["JS|StatusBarShowLimit"] = {
          config: "statusBarShowLimit",
          configFn: function (a) {
            if ("1" == d.showStatusBar) {
              return a
            }
          }
        };
        g["XML|setting.show_status_bar@show_status"] =
            g["JS|StatusBarShowStatus"] = {
              config: "statusBarShowStatus",
              configFn: function (a) {
                if ("1" == d.showStatusBar) {
                  return a
                }
              }
            };
        g["XML|setting.show_header_bar"] = g["JS|HeaderBar"] = {
          config: "showHeaderBar",
          configFn: function (a) {
            return d.showHeaderBarOrg = a
          }
        };
        g["XML|setting.show_header_bar@header_height"] = g["JS|CustomHeaderHeight"] = {
          config: "customHeaderHeight",
          configFn: function (a) {
            RAONKUPLOAD.util.parseIntOr0(a) < d.minHeaderBarHeight
            && (a = "28px");
            return a
          }
        };
        g["XML|setting.show_button_bar_edit"] = g["JS|ButtonBarEdit"] = {
          config: "showButtonBarEdit",
          configFn: function (a) {
            if ("" != b.ButtonBar || "" != a) {
              var c = "";
              "" != b.ButtonBarEdit && (c = b.ButtonBar);
              "" != a && (c = a);
              a = "0" == c ? "" : c.split(",")
            }
            return a
          }
        };
        g["XML|setting.show_button_bar_edit@align"] = g["JS|ShowEditAlign"] = {config: "showEditAlign"};
        g["XML|setting.show_button_bar_view"] = g["JS|ButtonBarView"] = {
          config: "showButtonBarView",
          configFn: function (a) {
            return a = "0" == a ? "" : a.split(",")
          }
        };
        g["XML|setting.show_button_bar_view@align"] = g["JS|ShowViewAlign"] = {config: "showViewAlign"};
        g["XML|setting.button_bar_position"] =
            g["JS|ButtonBarPosition"] = {config: "buttonBarPosition"};
        g["XML|setting.folder_transfer"] = g["JS|FolderTransfer"] = {config: "folderTransfer"};
        g["XML|setting.folder_transfer@get_folder_in_file"] = g["JS|GetFolderInFile"] = {
          config: "getFolderInFile",
          configFn: function (a) {
            if ("1" == d.folderTransfer) {
              return a
            }
          }
        };
        g["XML|setting.use_dbclick_open"] = g["JS|UseDbclickOpen"] = {config: "useDbclickOpen"};
        g["XML|setting.change_dbclick_command"] = g["JS|ChangeDbclickCommand"] = {config: "changeDbclickCommand"};
        g["XML|setting.use_single_download_dialog"] =
            g["JS|UseSingleDownloadDialog"] = {config: "useSingleDownloadDialog"};
        g["XML|setting.use_before_add_event"] = g["JS|UseBeforeAddEvent"] = {config: "useAddEvent"};
        g["XML|setting.use_add_event"] = g["JS|UseAddEvent"] = {config: "useAddEvent"};
        g["XML|setting.use_before_delete_event"] = g["JS|UseBeforeDeleteEvent"] = {config: "useDeleteEvent"};
        g["XML|setting.use_delete_event"] = g["JS|UseDeleteEvent"] = {config: "useDeleteEvent"};
        g["XML|setting.use_after_delete_event"] = g["JS|UseAfterDeleteEvent"] = {config: "useDeleteAfterEvent"};
        g["XML|setting.use_delete_after_event"] = g["JS|UseDeleteAfterEvent"] = {config: "useDeleteAfterEvent"};
        g["XML|setting.use_before_open_event"] = g["JS|UseBeforeOpenEvent"] = {config: "useOpenEvent"};
        g["XML|setting.use_open_event"] = g["JS|UseOpenEvent"] = {config: "useOpenEvent"};
        g["XML|setting.use_uploading_cancel_event"] = g["JS|UseUploadingCancelEvent"] = {config: "useUploadingCancelEvent"};
        g["XML|setting.use_before_download_event"] = g["JS|UseBeforeDownloadEvent"] = {config: "useDownloadEvent"};
        g["XML|setting.use_download_event"] =
            g["JS|UseDownloadEvent"] = {config: "useDownloadEvent"};
        g["XML|setting.use_after_add_event"] = g["JS|UseAfterAddEvent"] = {config: "useAfterAddEvent"};
        g["XML|setting.use_after_add_all_event"] = g["JS|UseAfterAddAllEvent"] = {config: "useAfterAddEndTimeEvent"};
        g["XML|setting.use_after_add_end_time_event"] = g["JS|UseAfterAddEndTimeEvent"] = {config: "useAfterAddEndTimeEvent"};
        g["XML|setting.use_download_complete_event"] = g["JS|UseDownloadCompleteEvent"] = {config: "useAfterDownloadEvent"};
        g["XML|setting.use_after_download_event"] =
            g["JS|UseAfterDownloadEvent"] = {config: "useAfterDownloadEvent"};
        g["XML|setting.use_delete_all_event"] = g["JS|UseDeleteAllEvent"] = {config: "useDeleteEndTimeEvent"};
        g["XML|setting.use_delete_end_time_event"] = g["JS|UseDeleteEndTimeEvent"] = {config: "useDeleteEndTimeEvent"};
        g["XML|setting.use_download_complete_all_event"] = g["JS|UseDownloadCompleteAllEvent"] = {config: "useFinishDownloadedEvent"};
        g["XML|setting.use_finish_downloaded_event"] = g["JS|UseFinishDownloadedEvent"] = {config: "useFinishDownloadedEvent"};
        g["XML|setting.use_after_move_file_event"] = g["JS|UseAfterMoveFileEvent"] = {config: "useAfterMoveFileEvent"};
        g["XML|setting.use_excute_download_in_mobile"] = g["JS|UseExcuteDownloadInMobile"] = {config: "useExcuteDownloadInMobile"};
        g["XML|setting.use_addlocalfiledirectly_callback_event"] = g["JS|UseAddLocalFileDirectlyCallBackEvent"] = {config: "useAddLocalFileDirectlyCallBackEvent"};
        g["XML|setting.use_addlocalfiledirectlyex_callback_event"] = g["JS|UseAddLocalFileDirectlyExCallBackEvent"] = {config: "useAddLocalFileDirectlyExCallBackEvent"};
        g["XML|setting.use_getzipfileinfo_callback_event"] = g["JS|UseGetZipFileInfoCallBackEvent"] = {config: "useGetZipFileInfoCallBackEvent"};
        g["XML|setting.use_getexceldata_callback_event"] = g["JS|UseGetExcelDataCallBackEvent"] = {config: "useGetExcelDataCallBackEvent"};
        g["XML|setting.use_alert_event"] = g["JS|UseAlertEvent"] = {config: "useAlertEvent"};
        g["XML|setting.timeout"] = g["JS|Timeout"] = {config: "timeout"};
        g["XML|setting.automatic_connection"] = g["JS|AutomaticConnection"] = {config: "automaticConnection"};
        g["XML|setting.show_folder_view"] =
            g["JS|ShowFolderView"] = {config: "showFolderView"};
        g["XML|setting.message_title"] = g["JS|MessageTitle"] = {config: "messageTitle"};
        g["XML|setting.use_script_event_control"] = g["JS|UseScriptEventControl"] = {config: "useScriptEventControl"};
        g["XML|setting.show_checkbox"] = g["JS|ShowCheckBox"] = {config: "showCheckBox"};
        g["XML|setting.hide_context_menu"] = g["JS|HideContextMenu"] = {config: "hideContextMenu"};
        g["XML|setting.use_size_column"] = g["JS|SizeColumnWidth"] = {config: "sizeColumnWidth"};
        g["XML|setting.file_delimiter@unit_delimiter"] =
            g["JS|UnitDelimiter"] = {
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
        g["XML|setting.use_auto_height"] = g["JS|UseAutoHeight"] = {config: "useAutoHeight"};
        g["XML|setting.remove_context_item"] = g["JS|RemoveContextItem"] = {config: "removeContextItem"};
        g["XML|setting.display_file_size_html4"] = g["JS|DisplayFileSizeHtml4"] =
            {config: "displayFileSizeHtml4"};
        g["XML|setting.allowed_zero_file_size"] = g["JS|AllowedZeroFileSize"] = {config: "allowedZeroFileSize"};
        g["XML|setting.allowed_empty_folder"] = g["JS|AllowedEmptyFolder"] = {config: "allowedEmptyFolder"};
        g["XML|setting.use_dropzone"] = g["JS|UseDropzone"] = {config: "useDropzone"};
        g["XML|setting.use_zip_download"] = g["JS|UseZipDownload"] = {config: "useZipDownload"};
        g["XML|setting.allow_open_extension"] = g["JS|AllowOpenExtension"] = {config: "allowOpenExtension"};
        g["XML|setting.file_filter_ex"] =
            g["JS|FileFilterEx"] = {config: "fileFilterEx"};
        g["XML|uploader_setting.download_multi"] = g["JS|DownloadMulti"] = {config: "downloadMulti"};
        g["JS|NTLM"] = {
          config: "NTLM", configFn: function (a) {
            if (-1 < a.indexOf("Basic")) {
              return a
            }
          }
        };
        g["XML|setting.large_files"] = g["JS|LargeFiles.MarkSize"] = {
          config: "largeFiles.markSize",
          configFn: function (a) {
            var b = RAONKUPLOAD.util.getUnit(a),
                b = RAONKUPLOAD.util.getUnitSize(b);
            return parseInt(a, 10) * b
          }
        };
        g["XML|setting.large_files@max_total_size"] = g["JS|LargeFiles.MaxTotalSize"] = {
          config: "largeFiles.maxTotalSize",
          configFn: function (a) {
            var b = RAONKUPLOAD.util.getUnit(a),
                b = RAONKUPLOAD.util.getUnitSize(b);
            return parseInt(a, 10) * b
          }
        };
        g["XML|setting.large_files@max_count"] = g["JS|LargeFiles.MaxCount"] = {
          config: "largeFiles.maxCount",
          configFn: function (a) {
            return RAONKUPLOAD.util.parseIntOr0(a)
          }
        };
        g["XML|setting.large_files@text"] = g["JS|LargeFiles.Text"] = {config: "largeFiles.text"};
        g["XML|setting.large_files@color"] = g["JS|LargeFiles.Color"] = {config: "largeFiles.color"};
        g["XML|setting.large_files@base_total_size"] = g["JS|LargeFiles.MarkBaseTotalSize"] =
            {
              config: "largeFiles.markBaseTotalSize", configFn: function (a) {
                var b = RAONKUPLOAD.util.getUnit(a),
                    b = RAONKUPLOAD.util.getUnitSize(b);
                return parseInt(a, 10) * b
              }
            };
        g["XML|setting.large_files@custom_mode"] = g["JS|LargeFiles.CustomMode"] = {config: "largeFiles.customMode"};
        g["XML|setting.mode@views"] = g["JS|Views"] = {
          config: "views",
          configFn: function (a) {
            "thumbs" == a && (d.largeFiles = {
              markSize: 0,
              maxCount: 0,
              maxTotalSize: 0,
              text: "",
              color: ""
            }, d.showHeaderBar = 0);
            return a
          }
        };
        g["XML|setting.auto_destroy"] = g["JS|AutoDestroy"] = {config: "autoDestroy"};
        g["XML|setting.cache_protect_mode"] = g["JS|CacheProtectMode"] = {config: "cacheProtectMode"};
        g["XML|setting.file_sort"] = g["JS|UseFileSort"] = {config: "use_file_sort"};
        g["XML|setting.file_sort@sort_field"] = g["JS|FileSortField"] = {config: "sort_field"};
        g["XML|setting.file_sort@sort_ascdesc"] = g["JS|FileSortAscDesc"] = {config: "sort_ascdesc"};
        g["XML|setting.file_sort@auto_sort"] = g["JS|AutoSort"] = {
          config: "auto_sort",
          configFn: function (a) {
            if ("1" == a || "2" == a) {
              return a
            }
          }
        };
        g["XML|setting.file_move_context_menu"] = g["JS|FileMoveContextMenu"] =
            {
              config: "fileMoveContextMenu", configFn: function (a) {
                "thumbs" == d.views && (a = "0");
                return a
              }
            };
        g["XML|setting.complete_event_reset_use"] = g["JS|CompleteEventResetUse"] = {config: "completeEventResetUse"};
        g["XML|setting.img_preview"] = g["JS|ImgPreView"] = {
          config: "imgPreView",
          configFn: function (a) {
            if (1 == RAONKUPLOAD.browser.mobile || "mobile"
                == RAONKUPLOAD.UserAgent.device.type) {
              a = "0";
            }
            return a
          }
        };
        g["XML|setting.img_preview@width"] = g["JS|ImgPreViewWidth"] = {
          config: "imgPreViewWidth", configFn: function (a) {
            if ("1" == d.imgPreView) {
              return 100 >=
              RAONKUPLOAD.util.parseIntOr0(a) && (a = "100px"), a
            }
          }
        };
        g["XML|setting.img_preview@height"] = g["JS|ImgPreViewHeight"] = {
          config: "imgPreViewHeight",
          configFn: function (a) {
            if ("1" == d.imgPreView) {
              return 100 >= RAONKUPLOAD.util.parseIntOr0(
                  a) && (a = "100px"), a
            }
          }
        };
        g["XML|setting.user_message"] = g["JS|UserMessage"] = {config: "userMessageTemp"};
        g["XML|setting.user_message@edit"] = g["JS|UserMessage.Edit"] = {
          config: "userMessage.edit",
          configFn: function (a) {
            if ("1" == d.userMessageTemp) {
              return a
            }
          }
        };
        g["XML|setting.user_message@view"] = g["JS|UserMessage.View"] =
            {
              config: "userMessage.view", configFn: function (a) {
                if ("1" == d.userMessageTemp) {
                  return a
                }
              }
            };
        g["XML|setting.use_single_select"] = g["JS|UseSingleSelect"] = {
          config: "useSingleSelect",
          configFn: function (a) {
            "1" == a && (d.showCheckBox = "0");
            return a
          }
        };
        g["XML|setting.disable_alert_message.duplication"] = g["JS|DisableAlertMessage.Duplication"] = {config: "disableAlertMessage.duplication"};
        g["XML|setting.disable_alert_message.delete_unchosen"] = g["JS|DisableAlertMessage.DeleteUnchosen"] = {config: "disableAlertMessage.deleteUnchosen"};
        g["XML|setting.disable_alert_message.download_unchosen"] = g["JS|DisableAlertMessage.DownloadUnchosen"] = {config: "disableAlertMessage.downloadUnchosen"};
        g["XML|setting.disable_alert_message.open_unchosen"] = g["JS|DisableAlertMessage.OpenUnchosen"] = {config: "disableAlertMessage.openUnchosen"};
        g["XML|setting.disable_delete_confirm_message"] = g["JS|DisableDeleteConfirmMessage"] = {
          config: "disableAlertMessage.disableDeleteConfirm",
          configFn: function (a) {
            if ("1" == a || "2" == a || "3" == a) {
              return a
            }
          }
        };
        g["XML|setting.disable_alert_message.disable_delete_confirm"] =
            g["JS|DisableAlertMessage.DisableDeleteConfirm"] = {
              config: "disableAlertMessage.disableDeleteConfirm",
              configFn: function (a) {
                if ("0" == a || "1" == a || "2" == a || "3" == a) {
                  return a
                }
              }
            };
        g["XML|setting.disable_alert_message.disable_upload_cancel_confirm"] = g["JS|DisableAlertMessage.DisableUploadCancelConfirm"] = {
          config: "disableAlertMessage.disableUploadCancelConfirm",
          configFn: function (a) {
            if ("0" == a || "1" == a) {
              return a
            }
          }
        };
        g["XML|setting.disable_alert_message.disable_recovery_confirm"] = g["JS|DisableAlertMessage.DisableRecoveryConfirm"] =
            {
              config: "disableAlertMessage.disableRecoveryConfirm",
              configFn: function (a) {
                if ("0" == a || "1" == a) {
                  return a
                }
              }
            };
        g["XML|setting.disable_alert_message.file_extension_detect"] = g["JS|DisableAlertMessage.FileExtensionDetect"] = {config: "disableAlertMessage.fileExtensionDetect"};
        g["XML|setting.disable_alert_message.file_max_count_add"] = g["JS|DisableAlertMessage.FileMaxCountAdd"] = {config: "disableAlertMessage.fileMaxCountAdd"};
        g["XML|setting.header_item.item"] = g["JS|HeaderBarItem"] = {
          config: "headerBarItem", valueType: "array",
          jsFn: function (a) {
            return a.split(",")
          }
        };
        g["XML|setting.header_item.item@width"] = g["JS|HeaderBarItemWidth"] = {
          config: "headerBarItemWidth",
          valueType: "array",
          jsFn: function (a) {
            return a.split(",")
          },
          configFn: function (a) {
            for (var b = a.length, c = 0; c < b; c++) {
              a[c]
              && (a[c] = a[c].replace(/\%/gi, "px"));
            }
            return a
          }
        };
        g["XML|setting.header_item.item@align"] = g["JS|HeaderBarItemAlign"] = {
          config: "headerBarItemAlign", valueType: "array", jsFn: function (a) {
            return a.split(",")
          }, xmlFn: function (a) {
            for (var b = a.length, c = 0; c < b; c++) {
              a[c] = a[c] ?
                  a[c].toLowerCase() : "left";
            }
            return a
          }
        };
        g["XML|setting.header_item.item@set_title"] = g["JS|HeaderBarItemSetTitle"] = {
          config: "headerBarItemSetTitle",
          valueType: "array",
          jsFn: function (a) {
            return a.split(",")
          },
          xmlFn: function (a) {
            for (var b = a.length, c = 0; c < b; c++) {
              a[c] = a[c] ? a[c] : "1";
            }
            return a
          }
        };
        g["XML|setting.transfer_open_file"] = g["JS|TransferOpenFile"] = {config: "transferOpenFile"};
        g["XML|setting.select_by_clicked"] = g["JS|SelectByClicked"] = {config: "selectByClicked"};
        g["XML|setting.image_quality"] = g["JS|ImageQuality.Quality"] =
            {config: "imageQuality.quality"};
        g["XML|setting.image_quality@worker_count"] = g["JS|ImageQuality.WorkerCount"] = {config: "imageQuality.workerCount"};
        g["XML|setting.image_quality@extension"] = g["JS|ImageQuality.Extension"] = {config: "imageQuality.extension"};
        g["XML|setting.image_quality@changed_extension"] = g["JS|ImageQuality.ChangedExtension"] = {config: "imageQuality.changedExtension"};
        g["XML|setting.image_quality@over_file_size"] = g["JS|ImageQuality.OverFileSize"] = {config: "imageQuality.overFileSize"};
        g["XML|setting.image_quality@processing_window"] =
            g["JS|ImageQuality.ProcessingWindow"] = {config: "imageQuality.processingWindow"};
        g["XML|setting.skip_sent_file"] = g["JS|SkipSentFile"] = {config: "skipSentFile"};
        g["XML|setting.check_network_speed"] = g["JS|CheckNetworkSpeed"] = {config: "checkNetworkSpeed"};
        g["XML|setting.use_compress_transfer"] = g["JS|UseCompressTransfer"] = {config: "useCompressTransfer"};
        g["XML|setting.compress_upload_all_file"] = g["JS|CompressUploadAllFile.Use"] = {config: "compressUploadAllFile.use"};
        g["XML|setting.compress_upload_all_file@password"] =
            g["JS|CompressUploadAllFile.Password"] = {config: "compressUploadAllFile.password"};
        g["XML|setting.compress_upload_all_file@file_name"] = g["JS|CompressUploadAllFile.FileName"] = {config: "compressUploadAllFile.fileName"};
        g["XML|setting.compress_upload_all_file@level"] = g["JS|CompressUploadAllFile.Level"] = {config: "compressUploadAllFile.level"};
        g["XML|setting.compress_upload_all_file@add_root_folder"] = g["JS|CompressUploadAllFile.AddRootFolder"] = {config: "compressUploadAllFile.addRootFolder"};
        g["XML|setting.use_compress_transfer@use_html5"] =
            g["JS|UseCompressTransferHtml5"] = {config: "useCompressTransferHtml5"};
        g["XML|setting.direct_download"] = g["JS|DirectDownload"] = {
          config: "directDownloadTemp",
          configFn: function (a) {
            d.directDownload = "1" == a ? !0 : !1;
            return a
          }
        };
        g["XML|setting.force_overwrite"] = g["JS|ForceOverwrite"] = {config: "forceOverwrite"};
        g["JS|Event.OnError"] = {
          config: "event.onError",
          configFn: function (a) {
            if ("function" === typeof a) {
              return a
            }
          }
        };
        g["JS|Event.CreationComplete"] = {
          config: "event.creationComplete", configFn: function (a) {
            if ("function" ===
                typeof a) {
              return a
            }
          }
        };
        g["JS|Event.BeforeUpload"] = {
          config: "event.beforeUpload",
          configFn: function (a) {
            if ("function" === typeof a) {
              return a
            }
          }
        };
        g["JS|Event.UploadComplete"] = {
          config: "event.uploadComplete",
          configFn: function (a) {
            if ("function" === typeof a) {
              return a
            }
          }
        };
        g["JS|Event.TransferComplete"] = {
          config: "event.transferComplete",
          configFn: function (a) {
            if ("function" === typeof a) {
              return a
            }
          }
        };
        g["JS|Event.MultiUploadComplete"] = {
          config: "event.multiUploadComplete",
          configFn: function (a) {
            if ("function" === typeof a) {
              return a
            }
          }
        };
        g["JS|Event.BeforeDownloadFile"] =
            {
              config: "event.beforeDownloadFile", configFn: function (a) {
                if ("function" === typeof a) {
                  return a
                }
              }
            };
        g["JS|Event.DownloadCompleteFile"] = {
          config: "event.downloadCompleteFile",
          configFn: function (a) {
            if ("function" === typeof a) {
              return a
            }
          }
        };
        g["JS|Event.DownloadCompleteAllFile"] = {
          config: "event.downloadCompleteAllFile",
          configFn: function (a) {
            if ("function" === typeof a) {
              return a
            }
          }
        };
        g["JS|Event.ExcuteDownloadFile"] = {
          config: "event.excuteDownloadFile",
          configFn: function (a) {
            if ("function" === typeof a) {
              return a
            }
          }
        };
        g["JS|Event.BeforeOpenFile"] =
            {
              config: "event.beforeOpenFile", configFn: function (a) {
                if ("function" === typeof a) {
                  return a
                }
              }
            };
        g["JS|Event.BeforeAddFile"] = {
          config: "event.beforeAddFile",
          configFn: function (a) {
            if ("function" === typeof a) {
              return a
            }
          }
        };
        g["JS|Event.AfterAddFile"] = {
          config: "event.afterAddFile",
          configFn: function (a) {
            if ("function" === typeof a) {
              return a
            }
          }
        };
        g["JS|Event.AfterAddAllFile"] = {
          config: "event.afterAddAllFile",
          configFn: function (a) {
            if ("function" === typeof a) {
              return a
            }
          }
        };
        g["JS|Event.AfterAddWebFile"] = {
          config: "event.afterAddWebFile", configFn: function (a) {
            if ("function" ===
                typeof a) {
              return a
            }
          }
        };
        g["JS|Event.BeforeDeleteFile"] = {
          config: "event.beforeDeleteFile",
          configFn: function (a) {
            if ("function" === typeof a) {
              return a
            }
          }
        };
        g["JS|Event.AfterDeleteFile"] = {
          config: "event.afterDeleteFile",
          configFn: function (a) {
            if ("function" === typeof a) {
              return a
            }
          }
        };
        g["JS|Event.DeleteAllFile"] = {
          config: "event.deleteAllFile",
          configFn: function (a) {
            if ("function" === typeof a) {
              return a
            }
          }
        };
        g["JS|Event.SelectItem"] = {
          config: "event.selectItem",
          configFn: function (a) {
            if ("function" === typeof a) {
              return a
            }
          }
        };
        g["JS|Event.AfterMoveFile"] =
            {
              config: "event.afterMoveFile", configFn: function (a) {
                if ("function" === typeof a) {
                  return a
                }
              }
            };
        g["JS|Event.UploadingCancel"] = {
          config: "event.uploadingCancel",
          configFn: function (a) {
            if ("function" === typeof a) {
              return a
            }
          }
        };
        g["JS|Event.DownloadCancel"] = {
          config: "event.downloadCancel",
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
        g["JS|Event.OnLanguageDefinition"] = {
          config: "event.onLanguageDefinition",
          configFn: function (a) {
            if ("function" === typeof a) {
              return a
            }
          }
        };
        g["JS|Event.Alert"] = {
          config: "event.alert", configFn: function (a) {
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
        g["JS|Event.MultipleAccessEvent"] = {
          config: "event.multipleAccessEvent",
          configFn: function (a) {
            if ("function" === typeof a) {
              return a
            }
          }
        };
        g["JS|Event.ExtendFunction"] = {
          config: "event.extendFunction",
          configFn: function (a) {
            if ("function" === typeof a) {
              return a
            }
          }
        };
        g["JS|Event.UnselectItem"] = {
          config: "event.unselectItem",
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
        g["JS|Event.InitAddAllFile"] = {
          config: "event.initAddAllFile",
          configFn: function (a) {
            if ("function" === typeof a) {
              return a
            }
          }
        };
        g["JS|Event.TransferStatusChange"] = {
          config: "event.transferStatusChange",
          configFn: function (a) {
            if ("function" === typeof a) {
              return a
            }
          }
        };
        g["XML|setting.text.empty_download_file"] =
            g["JS|EmptyDownloadFileText"] = {config: "emptyDownloadFileText"};
        g["XML|setting.text.empty_download_file@color"] = g["JS|EmptyDownloadFileTextColor"] = {
          config: "emptyDownloadFileTextColor",
          configFn: function (a) {
            if ("" != d.emptyDownloadFileText) {
              return a
            }
          }
        };
        g["XML|setting.text.empty_download_file@bold"] = g["JS|EmptyDownloadFileTextBold"] = {
          config: "emptyDownloadFileTextBold",
          configFn: function (a) {
            if ("" != d.emptyDownloadFileText) {
              return a
            }
          }
        };
        g["XML|setting.text.empty_download_file@italic"] = g["JS|EmptyDownloadFileTextItalic"] =
            {
              config: "emptyDownloadFileTextItalic", configFn: function (a) {
                if ("" != d.emptyDownloadFileText) {
                  return a
                }
              }
            };
        g["XML|setting.text.empty_download_file@underline"] = g["JS|EmptyDownloadFileTextUnderline"] = {
          config: "emptyDownloadFileTextUnderline",
          configFn: function (a) {
            if ("" != d.emptyDownloadFileText) {
              return a
            }
          }
        };
        g["XML|setting.text.empty_download_file@strike"] = g["JS|EmptyDownloadFileTextStrike"] = {
          config: "emptyDownloadFileTextStrike",
          configFn: function (a) {
            if ("" != d.emptyDownloadFileText) {
              return a
            }
          }
        };
        g["XML|setting.file_open_dialog_title"] =
            g["JS|FileOpenDialogTitle"] = {config: "fileOpenDialogTitle"};
        g["XML|setting.file_open_dialog_type"] = g["JS|FileOpenDialogType"] = {config: "fileOpenDialogType"};
        g["XML|setting.file_save_dialog_title"] = g["JS|FileSaveDialogTitle"] = {config: "fileSaveDialogTitle"};
        g["XML|setting.folder_select_dialog_title"] = g["JS|FolderSelectDialogTitle"] = {config: "folderSelectDialogTitle"};
        g["XML|setting.folder_select_dialog_button_name"] = g["JS|FolderSelectDialogButtonName"] = {config: "folderSelectDialogButtonName"};
        g["XML|setting.folder_select_dialog_type"] =
            g["JS|FolderSelectDialogType"] = {config: "folderSelectDialogType"};
        g["XML|setting.agent_communication_method"] = g["JS|AgentCommunicationMethod"] = {
          config: "agentCommunicationMethod",
          configFn: function (a) {
            "1" == a && (d.sendToManagerType = "2");
            return a
          }
        };
        g["XML|setting.trust_sites"] = g["JS|TrustSites"] = {config: "trustSites"};
        g["XML|setting.show_tray_icon"] = g["JS|ShowTrayIcon"] = {config: "showTrayIcon"};
        g["XML|setting.agent_temp_root_directory"] = g["JS|AgentTempRootDirectory"] = {config: "agentTempRootDirectory"};
        g["XML|setting.agent_event_interval"] =
            g["JS|AgentEventInterval"] = {config: "agentEventInterval"};
        g["XML|setting.agent_event_type"] = g["JS|AgentEventType"] = {config: "agentEventType"};
        g["XML|setting.agent_event_wait_time"] = g["JS|AgentEventWaitTime"] = {config: "agentEventWaitTime"};
        g["XML|setting.auto_recovery_transfer"] = g["JS|AutoRecoveryTransfer"] = {
          config: "autoRecoveryTransfer",
          configFn: function (a) {
            "0" != a && 0 == RAONKUPLOAD.browser.LocalStorageSupported
            && (a = "0");
            return a
          }
        };
        g["XML|setting.auto_recovery_transfer@auto_transfer"] = g["JS|AutoTransfer"] =
            {
              config: "autoTransfer", configFn: function (a) {
                if ("0" != d.autoRecoveryTransfer) {
                  return a
                }
              }
            };
        g["JS|AutoRecoveryId"] = {config: "autoRecoveryId"};
        g["XML|setting.use_webfile_thumbnail_view"] = g["JS|UseWebfileThumbnailView"] = {config: "useWebfileThumbnailView"};
        g["XML|setting.use_kmonitoring"] = g["JS|UseKMonitoring"] = {config: "useKMonitoring"};
        g["XML|setting.DEXT5_install"] = g["JS|DEXT5Install"] = {config: "dext5Install"};
        g["XML|setting.enable_admin_log"] = g["JS|EnableAdminLog"] = {config: "enableAdminLog"};
        g["XML|setting.use_working_image.upload_pre"] =
            g["JS|UseWorkingImg.UseUploadPre"] = {
              config: "tempUseWorkingImg",
              configFn: function (a) {
                "1" == a && (d.useWorkingImg.use[0] = a)
              }
            };
        g["XML|setting.use_working_image.upload_pre@image"] = g["JS|UseWorkingImg.UploadPreImage"] = {
          config: "tempWorkingImg",
          configFn: function (a) {
            "1" == d.useWorkingImg.use[0] && ("/" == a.substring(0, 1)
            && (a = location.protocol + "//" + location.host
                + a), d.useWorkingImg.image[0] = a)
          }
        };
        g["XML|setting.use_working_image.upload_pre@caption"] = g["JS|UseWorkingImg.UploadPreCaption"] = {
          config: "tempWorkingCaption",
          configFn: function (a) {
            "1" == d.useWorkingImg.use[0] && (d.useWorkingImg.caption[0] = a)
          }
        };
        g["XML|setting.use_working_image.upload_pre@use_once"] = g["JS|UseWorkingImg.UploadPreUseOnce"] = {
          config: "tempWorkingUseOnce",
          configFn: function (a) {
            "1" == d.useWorkingImg.use[0]
            && (d.useWorkingImg.useOnce[0] = RAONKUPLOAD.util.parseIntOr0(a))
          }
        };
        g["XML|setting.use_working_image.upload_end"] = g["JS|UseWorkingImg.UseUploadEnd"] = {
          config: "tempUseWorkingImg",
          configFn: function (a) {
            "1" == a && (d.useWorkingImg.use[1] = a)
          }
        };
        g["XML|setting.use_working_image.upload_end@image"] =
            g["JS|UseWorkingImg.UploadEndImage"] = {
              config: "tempWorkingImg",
              configFn: function (a) {
                "1" == d.useWorkingImg.use[1] && ("/" == a.substring(0, 1)
                && (a = location.protocol + "//" + location.host
                    + a), d.useWorkingImg.image[1] = a)
              }
            };
        g["XML|setting.use_working_image.upload_end@caption"] = g["JS|UseWorkingImg.UploadEndCaption"] = {
          config: "tempWorkingCaption",
          configFn: function (a) {
            "1" == d.useWorkingImg.use[1] && (d.useWorkingImg.caption[1] = a)
          }
        };
        g["XML|setting.use_working_image.upload_end@use_once"] = g["JS|UseWorkingImg.UploadEndUseOnce"] =
            {
              config: "tempWorkingUseOnce", configFn: function (a) {
                "1" == d.useWorkingImg.use[1]
                && (d.useWorkingImg.useOnce[1] = RAONKUPLOAD.util.parseIntOr0(
                    a))
              }
            };
        g["XML|setting.use_working_image.download_pre"] = g["JS|UseWorkingImg.UseDownloadPre"] = {
          config: "tempUseWorkingImg",
          configFn: function (a) {
            "1" == a && (d.useWorkingImg.use[2] = a)
          }
        };
        g["XML|setting.use_working_image.download_pre@image"] = g["JS|UseWorkingImg.DownloadPreImage"] = {
          config: "tempWorkingImg", configFn: function (a) {
            "1" == d.useWorkingImg.use[2] && ("/" == a.substring(0,
                1) && (a = location.protocol + "//" + location.host
                + a), d.useWorkingImg.image[2] = a)
          }
        };
        g["XML|setting.use_working_image.download_pre@caption"] = g["JS|UseWorkingImg.DownloadPreCaption"] = {
          config: "tempWorkingCaption",
          configFn: function (a) {
            "1" == d.useWorkingImg.use[2] && (d.useWorkingImg.caption[2] = a)
          }
        };
        g["XML|setting.use_working_image.download_pre@use_once"] = g["JS|UseWorkingImg.DownloadPreUseOnce"] = {
          config: "tempWorkingUseOnce",
          configFn: function (a) {
            "1" == d.useWorkingImg.use[2]
            && (d.useWorkingImg.useOnce[2] = RAONKUPLOAD.util.parseIntOr0(a))
          }
        };
        g["XML|setting.use_working_image.download_end"] = g["JS|UseWorkingImg.UseDownloadEnd"] = {
          config: "tempUseWorkingImg",
          configFn: function (a) {
            "1" == a && (d.useWorkingImg.use[3] = a)
          }
        };
        g["XML|setting.use_working_image.download_end@image"] = g["JS|UseWorkingImg.DownloadEndImage"] = {
          config: "tempWorkingImg",
          configFn: function (a) {
            "1" == d.useWorkingImg.use[3] && ("/" == a.substring(0, 1)
            && (a = location.protocol + "//" + location.host
                + a), d.useWorkingImg.image[3] = a)
          }
        };
        g["XML|setting.use_working_image.download_end@caption"] = g["JS|UseWorkingImg.DownloadEndCaption"] =
            {
              config: "tempWorkingCaption", configFn: function (a) {
                "1" == d.useWorkingImg.use[3]
                && (d.useWorkingImg.caption[3] = a)
              }
            };
        g["XML|setting.use_working_image.download_end@use_once"] = g["JS|UseWorkingImg.DownloadEndUseOnce"] = {
          config: "tempWorkingUseOnce",
          configFn: function (a) {
            "1" == d.useWorkingImg.use[3]
            && (d.useWorkingImg.useOnce[3] = RAONKUPLOAD.util.parseIntOr0(a))
          }
        };
        g["XML|setting.thumbs_size"] = g["JS|ThumbsSize"] = {
          config: "thumbsSize", configFn: function (a) {
            -1 < a.indexOf(",") ? (88 < RAONKUPLOAD.util.parseIntOr0(
                    a.split(",")[0]) &&
                (d.canvasWidth = RAONKUPLOAD.util.parseIntOr0(a.split(",")[0])), 60
                < RAONKUPLOAD.util.parseIntOr0(a.split(",")[1])
                && (d.canvasHeight = RAONKUPLOAD.util.parseIntOr0(a.split(",")[1])))
                : (88 < RAONKUPLOAD.util.parseIntOr0(a)
                && (d.canvasWidth = RAONKUPLOAD.util.parseIntOr0(a)), 60
                < RAONKUPLOAD.util.parseIntOr0(a)
                && (d.canvasHeight = RAONKUPLOAD.util.parseIntOr0(a)));
            return a
          }
        };
        g["XML|setting.thumbs_view_mode"] = g["JS|ThumbsViewMode"] = {config: "thumbsViewMode"};
        g["XML|setting.upload_skip_error_file"] = g["JS|UploadSkipErrorFile"] =
            {config: "uploadSkipErrorFile"};
        g["JS|CloudInfo"] = {config: "cloudInfo"};
        g["XML|setting.clound_info.use"] = {config: "cloudInfo.Use"};
        g["XML|setting.cloud_info.use"] = {config: "cloudInfo.Use"};
        g["XML|setting.cloud_info.cloud_name_string"] = {config: "cloudInfo.cloudNameString"};
        g["XML|setting.cloud_info.upload_skip_error_file"] = g["JS|CloudInfo.UploadSkipErrorFile"] = {config: "uploadSkipErrorFile"};
        g["XML|setting.cloud_info.delete_uploaded_file_in_case_cancled"] = g["JS|CloudInfo.DeleteUploadedFileInCaseCancled"] =
            {config: "cloudInfo.deleteUploadedFileInCaseCancled"};
        g["XML|setting.use_zip_inspector"] = g["JS|UseZipInspector"] = {config: "useZipInspector"};
        g["JS|ImageMultiThumnail"] = {
          config: "imageMultiThumnail",
          configFn: function (a) {
            if (d.imageMultiThumnail) {
              a = d.imageMultiThumnail.thumnail;
              for (var b = a.length, c = 0; c < b;
                  c++) {
                a[c].id = encodeURIComponent(a[c].id)
              }
            }
            return a
          }
        };
        g["XML|setting.agent_install_fail_check"] = g["JS|AgentInstallFailCheck.Use"] = {config: "agentInstallFailCheck.use"};
        g["XML|setting.agent_install_fail_check@time"] =
            g["JS|AgentInstallFailCheck.Time"] = {
              config: "agentInstallFailCheck.time",
              configFn: function (a) {
                a = RAONKUPLOAD.util.parseIntOr0(a);
                0 < a && (a = RAONKUPLOAD.util.parseIntOr0(a));
                return a
              }
            };
        g["XML|setting.agent_install_fail_check@stop_install_check"] = g["JS|AgentInstallFailCheck.StopInstallCheck"] = {
          config: "agentInstallFailCheck.stopInstallCheckTemp",
          configFn: function (a) {
            "1" == a ? d.agentInstallFailCheck.stopInstallCheck = !0 : "0" == a
                && (d.agentInstallFailCheck.stopInstallCheck = !1);
            return a
          }
        };
        g["XML|setting.agent_transfer_type"] =
            g["JS|AgentTransferType"] = {config: "agentTransferType"};
        g["XML|setting.multiple_access_check@use"] = g["JS|MultipleAccessCheck.Use"] = {config: "multipleAccessCheck.use"};
        g["XML|setting.multiple_access_check@call_url"] = g["JS|MultipleAccessCheck.CallUrl"] = {config: "multipleAccessCheck.callUrl"};
        g["XML|setting.multiple_access_check@check_interval"] = g["JS|MultipleAccessCheck.CheckInterval"] = {
          config: "multipleAccessCheck.checkInterval",
          configFn: function (a) {
            return RAONKUPLOAD.util.parseIntOr0(a)
          }
        };
        g["XML|setting.multiple_access_check@exclude_ci"] =
            g["JS|MultipleAccessCheck.ExcludeCI"] = {config: "multipleAccessCheck.excludeCI"};
        g["XML|setting.default_download_path"] = g["JS|DefaultDownloadPath"] = {
          config: "defaultDownloadPath",
          allowEmpty: !0,
          jsFn: function (a) {
            null != a && (this.inEmpty = !0);
            return a
          },
          configFn: function (a) {
            if (null != a) {
              return a
            }
          }
        };
        g["XML|setting.save_path_setting"] = g["JS|SavePathSetting"] = {config: "savePathSetting"};
        g["XML|setting.transfer_background_style"] = g["JS|TransferBackgroundStyle"] = {config: "transferBackgroundStyle"};
        g["XML|setting.zindex"] =
            g["JS|ZIndex"] = {
              config: "zIndex", configFn: function (a) {
                if (1E3 < parseInt(a, 10)) {
                  return parseInt(a, 10)
                }
              }
            };
        g["XML|setting.zip_file_name"] = g["JS|ZipFileName"] = {config: "zipFileName"};
        g["XML|setting.zip_file_name@user_setting_mode"] = g["JS|ZipFileNameUserSettingMode"] = {config: "zipFileNameUserSettingMode"};
        g["XML|setting.use_hash_extract"] = g["JS|UseHashExtract"] = {config: "useHashExtract"};
        g["XML|setting.move_mouse_drag"] = g["JS|MoveMouseDrag"] = {config: "moveMouseDrag"};
        g["JS|CookieWindow"] = {config: "cookieWindow"};
        g["XML|setting.simple_ui_mode@use"] = g["JS|SimpleUIMode.Use"] = {
          config: "simpleUIMode.use",
          configFn: function (a) {
            RAONKUPLOAD.browser.ie && 11 > RAONKUPLOAD.browser.ieVersion
                ? a = "0" : d.minHeight = 1;
            return a
          }
        };
        g["XML|setting.simple_ui_mode@mode"] = g["JS|SimpleUIMode.Mode"] = {
          config: "simpleUIMode.mode",
          configFn: function (a) {
            a = a.toLowerCase();
            "1" == d.simpleUIMode.use && "single" == a
            && (d.multiFileSelect = !1);
            return a
          }
        };
        g["XML|setting.simple_ui_mode.edit_mode_visible_header"] = g["JS|SimpleUIMode.EditMode.VisibleHeader"] = {config: "simpleUIMode.editModeVisibleHeader"};
        g["XML|setting.simple_ui_mode.edit_mode_visible_header@edit_mode_visible_icon"] = g["JS|SimpleUIMode.EditMode.VisibleIcon"] = {
          config: "simpleUIMode.editModeVisibleIcon",
          configFn: function (a) {
            "1" == a && (d.simpleUIMode.editModeVisibleHeader = "1");
            return a
          }
        };
        g["XML|setting.simple_ui_mode.edit_mode_visible_header@edit_mode_icon_list"] = g["JS|SimpleUIMode.EditMode.IconList"] = {
          config: "simpleUIMode.editModeIconList",
          configFn: function (a) {
            d.simpleUIMode.editModeVisibleHeader = "1";
            return a.split(",")
          }
        };
        g["XML|setting.simple_ui_mode.edit_mode_visible_header@edit_mode_visible_title"] =
            g["JS|SimpleUIMode.EditMode.VisibleTitle"] = {
              config: "simpleUIMode.editModeVisibleTitle",
              configFn: function (a) {
                "1" == a && (d.simpleUIMode.editModeVisibleHeader = "1");
                return a
              }
            };
        g["XML|setting.simple_ui_mode.edit_mode_visible_header@edit_mode_title_text"] = g["JS|SimpleUIMode.EditMode.TitleText"] = {
          config: "simpleUIMode.editModeTitleText",
          configFn: function (a) {
            "" != a && (d.simpleUIMode.editModeVisibleHeader = "1");
            return a
          }
        };
        g["XML|setting.simple_ui_mode@view_mode_visible_header"] = g["JS|SimpleUIMode.ViewMode.VisibleHeader"] =
            {config: "simpleUIMode.viewModeVisibleHeader"};
        g["XML|setting.simple_ui_mode.view_mode_visible_header@view_mode_visible_icon"] = g["JS|SimpleUIMode.ViewMode.VisibleIcon"] = {
          config: "simpleUIMode.viewModeVisibleIcon",
          configFn: function (a) {
            "1" == a && (d.simpleUIMode.viewModeVisibleHeader = "1");
            return a
          }
        };
        g["XML|setting.simple_ui_mode.view_mode_visible_header@view_mode_icon_list"] = g["JS|SimpleUIMode.ViewMode.IconList"] = {
          config: "simpleUIMode.viewModeIconList", configFn: function (a) {
            d.simpleUIMode.viewModeVisibleHeader =
                "1";
            return a.split(",")
          }
        };
        g["XML|setting.simple_ui_mode.view_mode_visible_header@view_mode_visible_title"] = g["JS|SimpleUIMode.ViewMode.VisibleTitle"] = {
          config: "simpleUIMode.viewModeVisibleTitle",
          configFn: function (a) {
            "1" == a && (d.simpleUIMode.viewModeVisibleHeader = "1");
            return a
          }
        };
        g["XML|setting.simple_ui_mode.view_mode_visible_header@view_mode_title_text"] = g["JS|SimpleUIMode.ViewMode.TitleText"] = {
          config: "simpleUIMode.viewModeTitleText", configFn: function (a) {
            "" != a && (d.simpleUIMode.viewModeVisibleHeader =
                "1");
            return a
          }
        };
        g["XML|setting.simple_ui_mode@user_css_url"] = g["JS|SimpleUIMode.UserCssUrl"] = {config: "simpleUIMode.userCssUrl"};
        g["XML|extend_function.function"] = g["JS|ExtendFunction"] = {
          config: "extendFunction", valueType: "array", jsFn: function (a) {
            return a
          }, xmlFn: function (a) {
            var b = a.length;
            if (1 == b) {
              if (this.nodeObj._attributes) {
                var c = {
                  name: a,
                  id: "" != this.nodeObj._attributes.id
                      ? this.nodeObj._attributes.id : "",
                  version: "" != this.nodeObj._attributes.version
                      ? this.nodeObj._attributes.version : ""
                };
                d.extendFunction.push(c)
              }
              return d.extendFunction
            }
            for (var e =
                0; e < b; e++) {
              this.nodeObj[e]._attributes && (c = {
                name: a[e],
                id: "" != this.nodeObj[e]._attributes.id
                    ? this.nodeObj[e]._attributes.id : "",
                version: "" != this.nodeObj[e]._attributes.version
                    ? this.nodeObj[e]._attributes.version : ""
              }, d.extendFunction.push(c));
            }
            return d.extendFunction
          }
        };
        g["XML|setting.skip_internet_state"] = g["JS|SkipInternetState"] = {config: "skipInternetState"};
        g["XML|setting.user_css_url"] = g["JS|UserCssUrl"] = {config: "userCssUrl"};
        g["XML|setting.allow_duplication_file"] = g["JS|AllowDuplicationFile"] = {config: "allowDuplicationFile"};
        g["XML|setting.allow_duplication_file@only_file_name"] = g["JS|AllowDuplicationFileOnlyFileName"] = {config: "allowDuplicationFileOnlyFileName"};
        g["XML|setting.use_session_keep"] = g["JS|SessionKeep.Use"] = {config: "sessionKeep.use"};
        g["XML|setting.download_hybrid_app"] = g["JS|DownloadHybridApp"] = {config: "downloadHybridApp"};
        g["XML|setting.use_swork_connect"] = g["JS|UseSWorkConnect"] = {config: "useSWorkConnect"};
        g["XML|setting.drag_and_drop_mode"] = g["JS|DragAndDropMode"] = {config: "dragAndDropMode"};
        g["XML|setting.use_dropzone_over_class"] =
            g["JS|UseDropZoneOverClass"] = {config: "useDropZoneOverClass"};
        g["XML|setting.use_download_cache"] = g["JS|UseDownloadCache"] = {config: "useDownloadCache"};
        g["XML|setting.mobile_select_image"] = g["JS|MobileSelectImage"] = {
          config: "mobileSelectImage",
          configFn: function (a) {
            return RAONKUPLOAD.browser.mobile ? a : "0"
          }
        };
        g["XML|setting.mobile_select_image@camera_only"] = g["JS|MobileCameraOnly"] = {
          config: "mobileCameraOnly",
          configFn: function (a) {
            return RAONKUPLOAD.browser.mobile && "1" == d.mobileSelectImage ? a
                : "0"
          }
        };
        g["XML|setting.agent_event_method"] =
            g["JS|AgentEventMethod"] = {config: "agentEventMethod"};
        g["XML|setting.disable_last_notify"] = g["JS|DisableLastNotify"] = {config: "disableLastNotify"};
        g["XML|setting.enable_agent_shortcut"] = g["JS|EnableAgentShortcut"] = {config: "enableAgentShortcut"};
        g["XML|setting.use_form_data_in_range_info"] = g["JS|UseFormDataInRangeInfo"] = {config: "useFormDataInRangeInfo"};
        g["XML|setting.use_wireless_mode"] = g["JS|UseWirelessMode"] = {config: "useWirelessMode"};
        g["XML|setting.use_local_file_download"] = g["JS|UseLocalFileDownload"] =
            {config: "useLocalFileDownload"};
        g["XML|setting.show_confirm_local_file_download"] = g["JS|ShowConfirmLocalFileDownload"] = {config: "showConfirmLocalFileDownload"};
        g["XML|setting.auto_rename_local_file_download"] = g["JS|AutoRenameLocalFileDownload"] = {config: "autoRenameLocalFileDownload"};
        g["XML|setting.show_progress_local_file_download"] = g["JS|ShowProgressLocalFileDownload"] = {config: "showProgressLocalFileDownload"};
        g["XML|setting.alert_to_event"] = g["JS|AlertToEvent"] = {config: "useAlertEvent"};
        g["XML|setting.download_skip_check_with_file_size"] =
            g["JS|DownloadSkipCheckWithFileSize"] = {config: "downloadSkipCheckWithFileSize"};
        g["XML|setting.pre_check_file_exist_in_download"] = g["JS|PreCheckFileExistInDownload"] = {config: "preCheckFileExistInDownload"};
        g["XML|setting.report_failed_list"] = g["JS|ReportFailedList"] = {config: "reportFailedList"};
        g["XML|setting.local_long_path_enable"] = g["JS|LocalLongPathEnable"] = {config: "localLongPathEnable"};
        g["XML|uploader_setting.agent_download_method"] = g["JS|AgentDownloadMethod"] = {
          config: "agentDownloadMethod", configFn: function (a) {
            if ("" !=
                a && "post" == a.toLowerCase()) {
              return 1
            }
          }
        };
        g["XML|setting.ignore_different_upload_name"] = g["JS|IgnoreDifferentUploadName"] = {config: "ignoreDifferentUploadName"};
        g["XML|plugin_ex.tool"] = g["JS|PluginToolEx"] = {
          config: "pluginToolExArr",
          valueType: "array",
          configFn: function (a) {
            "string" == typeof a && (a = a.split(","));
            for (var b = [], c = 0; c < a.length; c++) {
              b.push(a[c]);
            }
            return b
          }
        };
        g["XML|setting.disable_pre_end_request"] = g["JS|DisablePreEndRequest"] = {config: "disablePreEndRequest"};
        g["XML|setting.disable_multi_transfer_sync"] =
            g["JS|DisableMultiTransferSync"] = {config: "disableMultiTransferSync"};
        g["XML|setting.download_status_check_interval"] = g["JS|DownloadStatusCheckInterval"] = {config: "downloadStatusCheckInterval"};
        g["XML|setting.open_execute_file_option"] = g["JS|OpenExecuteFileOption"] = {config: "openExecuteFileOption"};
        g["XML|setting.security.handler_key"] = g["JS|Security.HandlerKey"] = {config: "security.handlerKey"};
        g["XML|setting.security.request_validation_second"] = g["JS|Security.RequestValidationSecond"] = {config: "security.requestValidationSecond"};
        g["XML|setting.use_virtual_list"] = g["JS|UseVirtualList"] = {
          config: "useVirtualList",
          configFn: function (a) {
            return 1 == RAONKUPLOAD.browser.ie ? "0" : a
          }
        };
        g["XML|setting.mass_file_mode"] = g["JS|MassFileMode"] = {
          config: "massFileMode",
          configFn: function (a) {
            1 == RAONKUPLOAD.browser.ie && (a = "0");
            "1" == a
            && (d.useVirtualList = "1", d.allowDuplicationFile = "1", d.fileMoveContextMenu = "0", d.use_file_sort = "0");
            return a
          }
        };
        g["XML|setting.default_file_dialog_path"] = g["JS|DefaultFileDialogPath"] = {config: "defaultFileDialogPath"};
        g["XML|setting.validate_file_size_changed"] =
            g["JS|ValidateFileSizeChanged.Use"] = {config: "validateFileSizeChanged.use"};
        g["XML|setting.validate_file_size_changed@upload_changed_file"] = g["JS|ValidateFileSizeChanged.UploadChangedFile"] = {config: "validateFileSizeChanged.uploadChangedFile"};
        g["XML|setting.apply_pre_download_request_range"] = g["JS|ApplyPreDownloadRequestRange"] = {config: "applyPreDownloadRequestRange"};
        g["XML|setting.file_open_independent"] = g["JS|FileOpenIndependent"] = {config: "fileOpenIndependent"};
        g["XML|setting.runtimes@auto_change_to_html5_mode"] =
            g["JS|AutoChangeToHtml5Mode"] = {config: "autoChangeToHtml5Mode"};
        g["XML|uploader_setting.print_multi"] = g["JS|PrintMulti"] = {config: "printMulti"};
        g["XML|uploader_setting.open_multi"] = g["JS|OpenMulti"] = {config: "openMulti"};
        g["XML|uploader_setting.save_and_open_multi"] = g["JS|SaveAndOpenMulti"] = {config: "saveAndOpenMulti"};
        g["XML|uploader_setting.use_worker"] = g["JS|UseWorker"] = {
          config: "useWorker",
          configFn: function (a) {
            if (RAONKUPLOAD.browser.WorkerSupported) {
              return a
            }
          }
        };
        g["XML|uploader_setting@formdata_file_name_to_origin"] =
            g["JS|FormdataFileNameToOrigin"] = {config: "formdataFileNameToOrigin"};
        g["XML|setting.user_css_url@detail_apply"] = g["JS|UserCssUrlDetailApply"] = {
          config: "userCssUrlDetailApply",
          configFn: function (a) {
            1 != RAONKUPLOAD.util.parseIntOr0(a) || "" == d.userCssUrl ? a = "0"
                : a = "1";
            return a
          }
        };
        g["XML|setting.auto_set_zoom"] = g["JS|AutoSetZoom.Use"] = {
          config: "autoSetZoom.use",
          configFn: function (a) {
            if (RAONKUPLOAD.browser.ie || RAONKUPLOAD.browser.gecko) {
              a = "0";
            }
            return a
          }
        };
        g["JS|AutoSetZoom.CheckNode"] = {config: "autoSetZoom.checkNode"};
        g["XML|setting.max_one_file_size@file_size_by_extension"] = g["JS|MaxOneFileSizeByExtension"] = {
          config: "maxOneFileSizeByExtension",
          valueType: "object",
          configFn: function (a) {
            return a = RAONKUPLOAD.util.setConfigCommon(
                "maxOneFileSizeByExtension", a, d)
          }
        };
        g["XML|setting.reset_before_add_new_file"] = g["JS|ResetBeforeAddNewFile"] = {config: "resetBeforeAddNewFile"};
        g["XML|setting.run_as_different_processname.all"] = g["JS|RunAsDifferentProcessName.All"] = {config: "runAsDifferentProcessName.all"};
        g["XML|setting.run_as_different_processname.upload"] =
            g["JS|RunAsDifferentProcessName.Upload"] = {config: "runAsDifferentProcessName.upload"};
        g["XML|setting.run_as_different_processname.download"] = g["JS|RunAsDifferentProcessName.Download"] = {config: "runAsDifferentProcessName.download"};
        g["XML|setting.run_as_different_processname.choose_files"] = g["JS|RunAsDifferentProcessName.ChooseFiles"] = {config: "runAsDifferentProcessName.chooseFiles"};
        g["XML|setting.add_raonk_info_to_file_upload_request"] = g["JS|AddRAONKInfoToFileUploadRequest.Use"] = {
          config: "addRAONKInfoToFileUploadRequest.use",
          configFn: function (a) {
            "1" == a && (d.resumeUpload = "0");
            return a
          }
        };
        g["XML|setting.add_raonk_info_to_file_upload_request@start_and_end_chunk_sync"] = g["JS|AddRAONKInfoToFileUploadRequest.StartAndEndChunkSync"] = {config: "addRAONKInfoToFileUploadRequest.startAndEndChunkSync"};
        g["XML|setting.downloadMethod"] = g["JS|DownloadMethod"] = {config: "downloadMethod"};
        var v = function (a, b, e) {
          var f = d, g = a.config;
          if (-1 < g.indexOf(".")) {
            for (var g = g.split("."), k = 0; k < g.length - 1;
                k++) {
              f = f[g[k]];
            }
            g = g[k]
          }
          if (e) {
            if ((b = e(b)) || 0 === b || "" ==
                b) {
              f[g] = b, a["set" + c] = 1
            }
          } else {
            f[g] = b, a["set" + c] = 1
          }
        };
        (function () {
          for (var a in g) {
            var d = g[a];
            if (!d["set" + c]) {
              if (0 == a.indexOf("JS|")) {
                for (var e = a.substring(3).split("."), f = e.length, k = b,
                    l = 0; l < f; l++) {
                  k = k ? k[e[l]] : void 0;
                }
                e = !1;
                !d.allowEmpty || k && "" != k || (e = !0);
                if ("boolean" == typeof k || k && "" != k || d.allowEmpty) {
                  d.jsFn && (returnValue = d.jsFn(k)) && (k = returnValue);
                  try {
                    v(d, k, d.configFn), e && d.inEmpty && (d["set" + c] = !0)
                  } catch (m) {
                    RAONKUPLOAD.logMode && console && console.log(m)
                  }
                }
              } else {
                for (var e = a.split("@"), f = e[0].split(":"),
                    l = f[0].substring(4).split("."),
                    n = l.length, f = 1 < f.length ? f[1] : 0,
                    e = 1 < e.length ? e[1] : 0, k = r, p = 0; p < n; p++) {
                  var q = l[p],
                      k = k ? k[q] || (k[0] ? k[0][q] : void 0) : void 0;
                  d.nodeObj = k
                }
                if (f && k) {
                  n = !1;
                  for (l = 0; l < k.length; l++) {
                    if (k[l]._value == f) {
                      k = k[l];
                      n = !0;
                      break
                    }
                  }
                  if (!n) {
                    continue
                  }
                }
                if ("undefined" != typeof k) {
                  if (e) {
                    if ("array" == d.valueType) {
                      if (k.slice) {
                        tempXmlValue = k.slice();
                        for (l = 0; l < tempXmlValue.length;
                            l++) {
                          tempXmlValue[l] = tempXmlValue[l]._attributes
                              ? tempXmlValue[l]._attributes[e] : "";
                        }
                        k = tempXmlValue
                      } else if (k._attributes) {
                        k = [k._attributes[e]];
                      } else {
                        continue;
                      }
                    } else if (k._attributes) {
                      k =
                          k._attributes[e];
                    } else {
                      continue;
                    }
                  } else {
                    f = e = !1;
                    if ("object" == typeof k && 0 < k.length) {
                      k.slice && (k = k.slice());
                      for (l = 0; l < k.length; l++) {
                        k[l]._value
                        && (k[l] = k[l]._value);
                      }
                      "array" != d.valueType ? k = k[0] : e = !0
                    } else if ("array"
                        == d.valueType) {
                      k = [k._value], e = !0;
                    } else if ("object"
                        == typeof k) {
                      for (var t in k) {
                        f = !0;
                        break
                      }
                      f || (k = "")
                    }
                    !e && k._value && (k = k._value);
                    e || "string" == typeof k || (k = "")
                  }
                  if ("boolean" == typeof k || k && "" != k || d.allowEmpty) {
                    d.xmlFn && (returnValue = d.xmlFn(k)) && (k = returnValue);
                    try {
                      v(d, k, d.configFn)
                    } catch (u) {
                      RAONKUPLOAD.logMode &&
                      console && console.log(u)
                    }
                  }
                }
              }
            }
          }
        })();
        k = RAONKUPLOAD.util.xml.getNode(n, "setting");
        "html5plus" == d.userRunTimeMode && (d.useWS = "1");
        l = RAONKUPLOAD.util.GetUserRunTimeUpload(d.userRunTimeMode, d.useWS);
        d.userRunTimeMode = l.mode;
        0 == l.isAgent && (d.useKManager = "0");
        "0" == d.useKManager && "1" == d.silentDownloadEx
        && (d.useAfterDownloadEvent = "0", d.useFinishDownloadedEvent = "0", d.downloadMulti = "0", d.silentDownload = "1");
        "1" == d.multipleAccessCheck.use
        && (d.useKManager = "1", d.checkNetworkSpeed = "0", d.developLang = "none");
        "html4agent" ==
        d.userRunTimeMode && (d.useKManager = "1", d.userRunTimeMode = "html4");
        "" != b.AgentInstallFileUrl
            ? (d.agentInstallFileUrl = b.AgentInstallFileUrl, l = d.agentInstallFileUrl.split(
                "/"), d.agentInstallFileName = l[l.length - 1])
            : (l = RAONKUPLOAD.util.xml.getNodeValue(k,
                "agent_install_file_url"), "" != l
            && (d.agentInstallFileUrl = l, l = d.agentInstallFileUrl.split(
                "/"), d.agentInstallFileName = l[l.length - 1]));
        "" != d.agentInstallFileName2 && ("" != b.AgentInstallFileUrl2
            ? (d.agentInstallFileUrl2 = b.AgentInstallFileUrl2, l = d.agentInstallFileUrl2.split(
                "/"),
                d.agentInstallFileName2 = l[l.length - 1])
            : (l = RAONKUPLOAD.util.xml.getNodeValue(k,
                "agent_install_file_url2"), "" != l
            && (d.agentInstallFileUrl2 = l, l = d.agentInstallFileUrl2.split(
                "/"), d.agentInstallFileName2 = l[l.length - 1])));
        "1" == d.useKManager && (-1
        < RAONKUPLOAD.UserAgent.device.type.toLowerCase().indexOf("mobile")
            ? d.useKManager = "0" : 0
            == RAONKUPLOAD.UserAgent.os.name.toLowerCase().indexOf("windows")
                ? 0 > d.applyAgentOs.indexOf(",windows,")
                && (d.useKManager = "0") : 0
                == RAONKUPLOAD.UserAgent.os.name.toLowerCase().indexOf("mac") ?
                    0 > d.applyAgentOs.indexOf(",mac,") ? d.useKManager = "0"
                        : d.agentInstallFileName = "raonk-2018.pkg" : 0
                    == RAONKUPLOAD.UserAgent.os.name.toLowerCase().indexOf(
                        "fedora") ? -1 < d.applyAgentOs.indexOf(",linux,")
                    || d.applyAgentOs.indexOf(",fedora,")
                        ? d.agentInstallFileName = "raonk-2018.x86_64.rpm"
                        : d.useKManager = "0" : 0
                    == RAONKUPLOAD.UserAgent.os.name.toLowerCase().indexOf(
                        "ubuntu") ? -1 < d.applyAgentOs.indexOf(",linux,")
                    || d.applyAgentOs.indexOf(",ubuntu,")
                        ? d.agentInstallFileName = "raonk-2018_amd64.deb"
                        : d.useKManager = "0" : 0
                    == RAONKUPLOAD.UserAgent.os.name.toLowerCase().indexOf(
                        "linux") ?
                        -1 < d.applyAgentOs.indexOf(",linux,")
                            ? (d.agentInstallFileName = "raonk-2018_amd64.deb", d.agentInstallFileName2 = "raonk-2018.x86_64.rpm")
                            : d.useKManager = "0" : d.useKManager = "0");
        "" == d.agentInstallFileUrl
        && (d.agentInstallFileUrl = d.agentInstallFolderUrl
            + d.agentInstallFileName);
        "" != d.agentInstallFileName2 && "" == d.agentInstallFileUrl2
        && (d.agentInstallFileUrl2 = d.agentInstallFolderUrl
            + d.agentInstallFileName2);
        "1" == d.useKManager && "1" == d.enforceHtml5 && (d.useKManager = "0");
        "0" != d.useKManager || "html4" != d.userRunTimeMode ||
        "" != d.showButtonBarEdit && 0 != d.showButtonBarEdit.length
        || (d.showButtonBarEdit = ["add"]);
        "1" == d.useKManager ? RAONKUPLOAD.browser.isHttps
            && (d.agentHttps = !0)
            : (d.agentHttps = !1, d.printMulti = "0", d.openMulti = "0", d.saveAndOpenMulti = "0", 2
            < RAONKUPLOAD.util.parseIntOr0(d.uploadTransferWindow.view)
            && (d.uploadTransferWindow.view = "1"));
        RAONKUPLOAD.browser.iOS && "1" == d.resumeDownload
        && (d.resumeDownload = "0");
        4 == d.productKey.split("_").length && (d.useServerLicense = !0);
        k = RAONKUPLOAD.util.xml.getNode(n, "setting");
        l = RAONKUPLOAD.util.xml.getNode(n,
            "uploader_setting");
        switch (d.developLang.toUpperCase()) {
          case "JAVA":
          case "JSP":
            d.handlerUrl = RAONKUPLOAD.rootPath + "handler/raonkhandler.jsp";
            d.viewerUrl = RAONKUPLOAD.rootPath + "handler/raonkviewer.jsp";
            d.sessionKeep.url = RAONKUPLOAD.rootPath
                + "handler/raonksession.jsp";
            d.kMonitorUrl = RAONKUPLOAD.rootPath + "handler/raonkmonitor.jsp";
            d.kMonitorPartUrl = RAONKUPLOAD.rootPath
                + "handler/raonkmonitor.jsp";
            break;
          case "PHP":
            d.handlerUrl = RAONKUPLOAD.rootPath + "handler/raonkhandler.php";
            d.viewerUrl = RAONKUPLOAD.rootPath +
                "handler/raonkviewer.php";
            d.sessionKeep.url = RAONKUPLOAD.rootPath
                + "handler/raonksession.php";
            d.kMonitorUrl = RAONKUPLOAD.rootPath + "handler/raonkmonitor.php";
            d.kMonitorPartUrl = RAONKUPLOAD.rootPath
                + "handler/raonkmonitor.php";
            break;
          case "NONE":
            d.handlerUrl = "";
            d.viewerUrl = "";
            break;
          default:
            d.handlerUrl = RAONKUPLOAD.rootPath
                + "handler/raonkhandler.ashx", d.viewerUrl = RAONKUPLOAD.rootPath
                + "handler/raonkviewer.aspx", d.sessionKeep.url = RAONKUPLOAD.rootPath
                + "handler/raonksession.aspx", d.kMonitorUrl = RAONKUPLOAD.rootPath
                +
                "handler/raonkmonitor.ashx", d.kMonitorPartUrl = RAONKUPLOAD.rootPath
                + "handler/raonkmonitor.ashx"
        }
        "" != d.downloadHandlerUrl
        && (d.downloadHandlerUrl = RAONKUPLOAD.util.set_handlerUrl(
            d.downloadHandlerUrl));
        "" != b.HandlerUrl ? d.handlerUrl = b.HandlerUrl
            : (xmlHandlerUrl = RAONKUPLOAD.util.xml.getNodeValue(l,
                "handler_url"), 0 < xmlHandlerUrl.length
            && (d.handlerUrl = xmlHandlerUrl));
        d.handlerUrl = RAONKUPLOAD.util.set_handlerUrl(d.handlerUrl);
        "" != b.KMonitorUrl ? d.kMonitorUrl = b.KMonitorUrl
            : (m = RAONKUPLOAD.util.xml.getNode(k, "use_kmonitoring")) &&
            m.getAttribute("url") && "" != m.getAttribute("url")
            && (d.kMonitorUrl = m.getAttribute("url"));
        d.kMonitorUrl = RAONKUPLOAD.util.set_handlerUrl(d.kMonitorUrl);
        "" != b.KMonitorPartUrl ? d.kMonitorPartUrl = b.KMonitorPartUrl
            : (m = RAONKUPLOAD.util.xml.getNode(k, "use_kmonitoring"))
            && m.getAttribute("part_url") && "" != m.getAttribute("part_url")
                ? d.kMonitorPartUrl = m.getAttribute("part_url")
                : d.kMonitorPartUrl = d.kMonitorUrl;
        d.kMonitorPartUrl = RAONKUPLOAD.util.set_handlerUrl(d.kMonitorPartUrl);
        "" != b.KMonitorPollingTime ? d.kMonitorPollingTime =
            b.KMonitorPollingTime : (m = RAONKUPLOAD.util.xml.getNode(k,
                "use_kmonitoring")) && m.getAttribute("polling_time") && ""
            != m.getAttribute("polling_time")
            && (d.kMonitorPollingTime = m.getAttribute("polling_time"));
        if ("" == d.kMonitorPollingTime || 0 >= parseFloat(
            d.kMonitorPollingTime)) {
          d.kMonitorPollingTime = "5";
        }
        "" != b.KMonitorSkipCachedBandwidth
            ? d.kMonitorSkipCachedBandwidth = b.KMonitorSkipCachedBandwidth
            : (m = RAONKUPLOAD.util.xml.getNode(k, "use_kmonitoring"))
            && m.getAttribute("skip_cached_bandwidth") && "" != m.getAttribute(
                "skip_cached_bandwidth") &&
            (d.kMonitorSkipCachedBandwidth = m.getAttribute(
                "skip_cached_bandwidth"));
        "" != b.KMonitorGroupId ? d.kMonitorGroupId = b.KMonitorGroupId
            : (m = RAONKUPLOAD.util.xml.getNode(k, "use_kmonitoring"))
            && m.getAttribute("group_id") && "" != m.getAttribute("group_id")
            && (d.kMonitorGroupId = m.getAttribute("group_id"));
        0 == RAONKUPLOAD.browser.iOS && 4 < d.handlerUrl.length && "http"
        == d.handlerUrl.substring(0, 4).toLowerCase() && 0
        == RAONKUPLOAD.browser.HTML5Supported && d.handlerUrl.match(
            /:\/\/(.[^\/]+)/)[1] != window.location.host && "file:" !=
        location.protocol && (d.isCrossDomain = !0);
        "" != b.ViewerHandlerUrl ? d.viewerUrl = b.ViewerHandlerUrl
            : (l = RAONKUPLOAD.util.xml.getNodeValue(l,
                "viewer_handler_url"), "" != l && (d.viewerUrl = l));
        d.viewerUrl = RAONKUPLOAD.util.set_handlerUrl(d.viewerUrl);
        "1" == d.sessionKeep.use && (k = RAONKUPLOAD.util.xml.getNode(k,
            "use_session_keep"), "" != b.SessionKeep.Url
            ? d.sessionKeep.url = b.SessionKeep.Url : (l = k.getAttribute(
                "url"), "" != l
            && (d.sessionKeep.url = l)), d.sessionKeep.url = RAONKUPLOAD.util.set_handlerUrl(
            d.sessionKeep.url), "" != b.SessionKeep.RetryTime ?
            d.sessionKeep.retryTime = b.SessionKeep.RetryTime
            : (k = k.getAttribute("retry_time"), "" != k
            && (d.sessionKeep.retryTime = k)));
        d.processHandlerUrl = "" != d.processHandlerUrl
            ? RAONKUPLOAD.util.set_handlerUrl(d.processHandlerUrl) : ""
            == d.downloadHandlerUrl ? d.handlerUrl : d.downloadHandlerUrl;
        "1" == d.resumeUpload && "0" == d.useKManager && "html5"
        == d.userRunTimeMode && 0 == RAONKUPLOAD.browser.LocalStorageSupported
        && (d.resumeUpload = "0");
        "0" == d.useWorker
        && (RAONKUPLOAD.browser.WorkerSupported = !1, RAONKUPLOAD.browser.imageProcessWorkerSupported =
            !1, d.workerSupported = !1);
        0 > RAONKUPLOAD.UserAgent.os.name.toLowerCase().indexOf("windows")
        && "1" == d.useKManager
        && (d.listViewDragAndDrop = "0", d.useDropzone = "0");
        "0" != d.uploadTransferWindow.view && RAONKUPLOAD.browser.mobile
        && (d.uploadTransferWindow.view = "0");
        "1" == d.useKManager && "1" == d.useLogoImage.use && ""
        != d.useLogoImage.logoPath
        && (d.useLogoImage.logoPath = RAONKUPLOAD.util.set_handlerUrl(
            d.useLogoImage.logoPath));
        "1" == d.useKManager || "0" == d.useKManager && -1
        < d.userRunTimeMode.indexOf("html5") ? (d.imageQuality.quality =
                parseFloat(
                    d.imageQuality.quality), d.imageQuality.workerCount = RAONKUPLOAD.util.parseIntOr0(
                d.imageQuality.workerCount), "" != d.imageQuality.extension
            && (d.imageQuality.extension = "," + d.imageQuality.extension
                + ","), "0" != d.imageQuality.overFileSize
            && (k = RAONKUPLOAD.util.getUnit(
                d.imageQuality.overFileSize), k = RAONKUPLOAD.util.getUnitSize(
                k), l = parseInt(d.imageQuality.overFileSize,
                10), d.imageQuality.overFileSize = l * k))
            : (d.imageQuality.quality = 1, d.imageQuality.workerCount = 7, d.imageQuality.extension = "", d.imageQuality.changedExtension =
                "jpg", d.imageQuality.overFileSize = "0", d.imageQuality.processingWindow = "0");
        "html5" != d.userRunTimeMode || "1" != d.resumeDownload && "1"
        != d.downloadMulti && !RAONKUPLOAD.util.getCommercialHybridAppFlag()
        || (d.downloadMethod = "get");
        "jpg" != d.imageQuality.changedExtension
        && (d.imageQuality.changedExtension = "jpg");
        0 < d.useCompressTransfer && "1" != d.useKManager && ("html5"
        != d.userRunTimeMode ? d.useCompressTransfer = "0" : d.workerSupported
            ? "1" != d.useCompressTransferHtml5 && "0"
            == d.useCompressTransferHtml5 && (d.useCompressTransfer =
                "0") : d.useCompressTransfer = "0");
        "11" == d.useCompressTransfer && "1" != d.useKManager
        && (d.useCompressTransfer = "0");
        "1" == d.useZipInspector && "0" == d.useKManager
        && (d.useZipInspector = "0");
        "" != d.extension.allowOrLimit.toString() && "" != d.extension.extArr
        && (-1 < d.extension.extArr.indexOf("|")
            ? d.extension.extToString = d.extension.extArr
            : (d.extension.extArr = d.extension.extArr.toLowerCase().split(
                ","), d.extension.extToString = d.extension.extArr.toString()));
        if ("0" == d.useKManager && "html5"
            == d.userRunTimeMode) {
          if (RAONKUPLOAD.browser.WorkerSupported) {
            k =
                "";
            k = RAONKUPLOAD.UrlStamp;
            "1" == d.cacheProtectMode && (k = RAONKUPLOAD.util.getTimeStamp());
            k = RAONKUPLOAD.isRelease ? d.webPath.js
                + "raonkupload.processuploadfile.min.js?t=" + k
                : d.webPath.jsDev
                + "raonkupload.processuploadfile.js?t=" + k;
            try {
              d.tempWorker = new Worker(
                  k), d.tempWorker.onerror = function (a) {
                RAONKUPLOAD.browser.WorkerSupported = !1;
                RAONKUPLOAD.browser.imageProcessWorkerSupported = !1;
                d.workerSupported = !1
              }
            } catch (u) {
              RAONKUPLOAD.browser.WorkerSupported = !1, RAONKUPLOAD.browser.imageProcessWorkerSupported = !1, d.workerSupported =
                  !1
            }
          } else {
            RAONKUPLOAD.browser.imageProcessWorkerSupported = !1, d.workerSupported = !1;
          }
        }
        d.webPath.css.lastIndexOf("/") < d.webPath.css.length - 1
        && (d.webPath.css += "/");
        d.webPath.cssDev.lastIndexOf("/") < d.webPath.cssDev.length - 1
        && (d.webPath.cssDev += "/");
        if ("1" != d.agentMultiUploadCount || "1"
            != d.agentMultiDownloadCount) {
          d.agentMultiTransferCount = d.agentMultiUploadCount
          > d.agentMultiDownloadCount ? d.agentMultiUploadCount
              : d.agentMultiDownloadCount;
        }
        if ("0" == d.useKManager && "html5" == d.userRunTimeMode && 1
            == RAONKUPLOAD.browser.WorkerSupported &&
            RAONKUPLOAD.browser.ie) {
          k = RAONKUPLOAD.UrlStamp;
          "1" == d.cacheProtectMode && (k = RAONKUPLOAD.util.getTimeStamp());
          var w = new Worker(RAONKUPLOAD.isRelease ? d.webPath.js
              + "raonkupload.processuploadfile.min.js?t=" + k : d.webPath.jsDev
              + "raonkupload.processuploadfile.js?t=" + k);
          w.onmessage = function (a) {
            a = a.data;
            switch (a.type) {
              case "check_formdata":
                RAONKUPLOAD.browser.WorkerSupported = a.isFormDataSupport, d.workerSupported = a.isFormDataSupport, w.terminate()
            }
          };
          w.onerror = function (a) {
            w.terminate()
          };
          w.postMessage({type: "check_formdata"})
        }
        l =
            RAONKUPLOAD.util.xml.getNode(n, "add_ext_icon");
        m = RAONKUPLOAD.util.xml.count(l, "icon");
        for (k = 0; k < m; k++) {
          p = RAONKUPLOAD.util.xml.getNodeValueIdx(l,
              "icon", k), d.addExtIcon[k] = p;
        }
        k = RAONKUPLOAD.util.xml.getNode(n, "setting");
        n = RAONKUPLOAD.util.xml.getNode(k, "security");
        RAONKUPLOAD.util.setSecuritySetting(b, n, d, !1);
        n = document.location.href;
        -1 < n.indexOf("?") && (n = n.substring(0, n.indexOf("?")));
        "" != d.extension.extToString && -1 < d.extension.extToString.indexOf(
            "|") && (-1 < d.extension.extToString.indexOf("*.*")
            ? (d.extension.extArr =
                [], d.extension.mimeAccept = "")
            : (n = RAONKUPLOAD.util.getExtStringFromExtEx(
                d.extension.extToString), d.extension.extArr = n.split(","), "1"
            == d.extension.allowOrLimit
            && (d.extension.mimeAccept = RAONKUPLOAD.util.getMimeFilter(
                d.extension.extArr.toString()))));
        n = d.headerBarItemWidth.length;
        for (k = 0; k < n;
            k++) {
          d.headerBarItemWidth[k] = RAONKUPLOAD.util.parseIntOr0(
              d.headerBarItemWidth[k]) + "px";
        }
        l = d.headerBarItem.length;
        n = d.headerBarItemWidth.length;
        m = d.headerBarItemAlign.length;
        p = d.headerBarItemSetTitle.length;
        for (k =
            l - 1; 0 <= k; k--) {
          if ("#FILENAME#" == d.headerBarItem[k]
              ? d.headerBarItemFileNameOrder = k + 1 : "#FILESIZE#"
              == d.headerBarItem[k] && (d.headerBarItemFileSizeOrder = k
                  + 1), "#FILENAME#" == d.headerBarItem[k] || "#FILESIZE#"
          == d.headerBarItem[k]) {
            d.headerBarItem.splice(k, 1), l == n
            && d.headerBarItemWidth.splice(k, 1), l == m
            && d.headerBarItemAlign.splice(k, 1), l == p
            && d.headerBarItemSetTitle.splice(k, 1);
          }
        }
        for (k = n - 1; 0 <= k; k--) {
          "#FILENAME#" != d.headerBarItemWidth[k]
          && "#FILESIZE#" != d.headerBarItemWidth[k]
          || d.headerBarItemWidth.splice(k, 1);
        }
        for (k =
            m - 1; 0 <= k; k--) {
          "#FILENAME#" != d.headerBarItemAlign[k]
          && "#FILESIZE#" != d.headerBarItemAlign[k]
          || d.headerBarItemAlign.splice(k, 1);
        }
        for (k = p - 1; 0 <= k; k--) {
          "#FILENAME#" != d.headerBarItemSetTitle[k]
          && "#FILESIZE#" != d.headerBarItemSetTitle[k]
          || d.headerBarItemSetTitle.splice(k, 1);
        }
        d.headerBarItemFileNameOrder > d.headerBarItemFileSizeOrder && "0"
        == d.sizeColumnWidth
        && (--d.headerBarItemFileNameOrder, d.headerBarItemFileSizeOrder = d.headerBarItemFileNameOrder
            + 1);
        if ("NONE" == d.developLang.toUpperCase()) {
          RAONKUPLOAD.util.setSecuritySetting(b,
              null, d, !0);
          d.sizeForChunkUpload = 0;
          if (0 == d.maxOneFileSize || 2147483648
              < d.maxOneFileSize) {
            d.maxOneFileSize = 2147483648;
          }
          RAONKUPLOAD._$0S = RAONKUPLOAD._$0
        } else if ("1" == d.handlerInitCheck) {
          var A = d.handlerUrl,
              n = "" + ("kc" + RAONKSolution.Agent.formfeed + "c00"
                  + RAONKSolution.Agent.vertical),
              n = n + ("k01" + RAONKSolution.Agent.formfeed
                  + d.security.encryptParam);
          d.isCrossDomain && (n += RAONKSolution.Agent.vertical + "k22"
              + RAONKSolution.Agent.formfeed + "1");
          n += RAONKSolution.Agent.vertical + "k47"
              + RAONKSolution.Agent.formfeed + "1";
          n = RAONKUPLOAD.util.makeEncryptParam(n);
          A = -1 < A.indexOf("?") ? A + ("&raonk="
              + RAONKUPLOAD.util.getTimeStamp()) : A + ("?raonk="
              + RAONKUPLOAD.util.getTimeStamp());
          if (d.isCrossDomain) {
            if (RAONKUPLOAD.browser.postMessageSupported) {
              var y = document.createElement("div"),
                  k = RAONKUPLOAD.util.getDefaultIframeSrc();
              y.innerHTML = '<iframe name="initCheckframe" id="initCheckframe" style="display:none;" src="'
                  + k + '"></iframe>';
              y.style.display = "none";
              document.body.appendChild(y);
              RAONKUPLOAD.util.postFormData(document, A, "initCheckframe",
                  [["k00", n]], d.addCSRFToken);
              RAONKUPLOAD.util.addEvent(y.firstChild, "load", function () {
                y.firstChild.contentWindow.postMessage("check", "*")
              }, !0);
              if (window.postMessage) {
                var C = function (a) {
                  0 == A.indexOf(a.origin) && (a = RAONKUPLOAD.util.trim(
                      a.data), RAONKUPLOAD.util.initHandlerCheck(a, d,
                      b), document.body.removeChild(
                      y), RAONKUPLOAD.util.removeEvent(window, "message", C))
                };
                RAONKUPLOAD.util.addEvent(window, "message", C)
              }
            }
          } else {
            RAONKUPLOAD.ajax.postData(A, "k00=" + n, function (a, c) {
              RAONKUPLOAD.util.initHandlerCheck(a,
                  d, b, c)
            }, d.addHttpHeader)
          }
        }
        "0" == d.handlerInitCheck
        && (n = RAONKUPLOAD.util.makeGuid().toLowerCase(), n = RAONKUPLOAD.util.base64_encode(
            n), d.security.keyValue = n.substring(0, 20));
        null != d.cloudInfo && (d.cloudInfo.AccessKeyID
        && (d.cloudInfo.AccessKeyID = encodeURIComponent(
            d.cloudInfo.AccessKeyID)), d.cloudInfo.SecretKey
        && (d.cloudInfo.SecretKey = encodeURIComponent(
            d.cloudInfo.SecretKey)), d.cloudInfo.EndPoint
        && (d.cloudInfo.EndPoint = encodeURIComponent(
            d.cloudInfo.EndPoint)), d.cloudInfo.Bucket
        && (d.cloudInfo.Bucket = encodeURIComponent(d.cloudInfo.Bucket)),
        d.cloudInfo.AuthHeader && (d.cloudInfo.AuthHeader = encodeURIComponent(
            d.cloudInfo.AuthHeader)));
        "0" != d.useCompressTransfer && 0
        > RAONKUPLOAD.UserAgent.os.name.toLowerCase().indexOf("windows")
        && (d.useCompressTransfer = "2");
        n = "";
        n = d.minHeight;
        n = "1" == d.showHeaderBar ? n + RAONKUPLOAD.util.parseIntOr0(
            d.customHeaderHeight) - d.minHeaderBarHeight : n
            - d.minHeaderBarHeight;
        "0" == d.showStatusBar && (n -= d.statusBarHeight);
        "upload" == d.mode ? 0 == d.showButtonBarEdit.length && "0"
            == d.useKManager && "html4" != d.userRunTimeMode
            && (n -= d.buttonBarHeight) :
            0 == d.showButtonBarView.length && (n -= d.buttonBarHeight);
        d.minHeight = n;
        0 > d.height.indexOf("%") && n > RAONKUPLOAD.util.parseIntOr0(d.height)
        && (d.height = n + "px");
        "1" == d.useKMonitoring && (d.uploadSkipErrorFile = "0", "0"
        == d.useKManager && d.pluginToolExArr.push("kmonitoring"));
        0 == RAONKUPLOAD.browser.mobile && (d.useExcuteDownloadInMobile = "0");
        "1" == d.useKManager && "NET" == d.developLang && "1" == d.resumeUpload
        && (d.resumeUpChunkMode = "1");
        this._config = d;
        n = "raonkuploader_holder_" + c;
        k = document.createElement("div");
        k.id = n;
        k.style.width =
            d.width;
        d.initVisible ? k.style.height = d.height
            : (k.style.height = "0px", k.style.display = "none");
        (l = document.getElementById(n)) ? (l.id = "__" + n
                + "__", l.style.display = "none", l.parentNode.appendChild(k))
            : (n = k.outerHTML, "" != b.UploadHolder
                ? (k = document.getElementById(b.UploadHolder)) ? k.innerHTML = n
                    : document.write(n) : document.write(n));
        n = document.getElementById("raonkuploader_holder_" + c);
        RAONKUPLOAD.util.createUploaderIframe(d, n, this,
            "raonkuploader_frame_" + c, "", c)
      }
    }
  }
};
