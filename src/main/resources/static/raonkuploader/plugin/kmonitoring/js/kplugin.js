(function () {
  try {
    var c = {
      pluginName: "kmonitoring",
      transferId: "",
      transferSpeed: {recentSpeed: 0, avgSpeed: 0},
      transferPath: [],
      transferStartTime: [],
      transferCompleteTime: [],
      intervalProcess: "",
      bandwidth: 0,
      zipDownloadGuid: "",
      downloadLISTLen: "",
      downloadIdxArr: []
    };
    G_KUPlugin.kmonitoring = c;
    c.setTransferTime = function (c) {
      var f, b = new Date;
      b.setHours(b.getHours() - 9);
      f = "" + b.getFullYear();
      var e = "" + (b.getMonth() + 1);
      1 == e.length && (e = "0" + e);
      var d = "" + b.getDate();
      1 == d.length && (d = "0" + d);
      var h = "" + b.getHours();
      1 == h.length && (h =
          "0" + h);
      var k = "" + b.getMinutes();
      1 == k.length && (k = "0" + k);
      b = "" + b.getSeconds();
      1 == b.length && (b = "0" + b);
      f = f + "-" + e + "-" + d + " " + h + ":" + k + ":" + b;
      "start" == c ? G_KUPlugin.kmonitoring.transferStartTime.push(f)
          : G_KUPlugin.kmonitoring.transferCompleteTime.push(f)
    };
    c.dataReset = function () {
      clearInterval(c.intervalProcess);
      c.transferSpeed = {recentSpeed: 0, avgSpeed: 0};
      c.transferPath = [];
      c.transferStartTime = [];
      c.transferCompleteTime = [];
      c.bandwidth = 0;
      c.zipDownloadGuid = "";
      c.downloadLISTLen = 0;
      c.downloadIdxArr = []
    };
    c.preUploadRequest =
        function (p) {
          var f = "", b = "", e = "", d = "", h = "";
          "" == c.transferId
          && (c.transferId = (new Date).toISOString().substring(0, 10) + "_"
              + KUPLOADTOP.RAONKUPLOAD.util.makeGuid());
          for (var k = 0; k < uploaders.length; k++) {
            var n = "";
            KUPLOADTOP.G_CURRKUPLOADER.isCurrResumeUpload = !1;
            if ("1" == KUPLOADTOP.G_CURRKUPLOADER._config.resumeUpload
                && (KUPLOADTOP.G_CURRKUPLOADER.resumeInfoObj = KUPLOADTOP.RAONKUPLOAD.util.loadJsonFromLocalStorage(
                    "RAONK_resume_up_info"), KUPLOADTOP.G_CURRKUPLOADER.resumeInfoObj
                && KUPLOADTOP.G_CURRKUPLOADER.resumeInfoObj.originName ==
                RESULTFILELIST[uploaders[k]].originName
                && KUPLOADTOP.G_CURRKUPLOADER.resumeInfoObj.fileSize
                == RESULTFILELIST[uploaders[k]].fileSize)) {
              KUPLOADTOP.G_CURRKUPLOADER.isCurrResumeUpload = !0;
              try {
                var m = KUPLOADTOP.G_CURRKUPLOADER.resumeInfoObj.uploadedTaskId;
                if (0 < m.length) {
                  KUPLOADTOP.G_CURRKUPLOADER.uploadedTaskId = m;
                  var a = KUPLOADTOP.G_CURRKUPLOADER.uploadedTaskId.substring(0,
                      KUPLOADTOP.G_CURRKUPLOADER.uploadedTaskId.length - 1);
                  KUPLOADTOP.G_CURRKUPLOADER.uploadedTaskIdArr = a.split(",")
                }
              } catch (q) {
                KUPLOADTOP.RAONKUPLOAD.logMode &&
                console.log(q)
              }
            }
            n = KUPLOADTOP.G_CURRKUPLOADER.isCurrResumeUpload
                ? KUPLOADTOP.G_CURRKUPLOADER.resumeInfoObj.guid
                : KUPLOADTOP.RAONKUPLOAD.util.makeGuid();
            RESULTFILELIST[uploaders[k]].guid = n;
            e += KUPLOADTOP.RAONKSolution.Agent.backspace
                + RESULTFILELIST[uploaders[k]].guid;
            d += KUPLOADTOP.RAONKSolution.Agent.backspace
                + RESULTFILELIST[uploaders[k]].originName;
            h += KUPLOADTOP.RAONKSolution.Agent.backspace
                + RESULTFILELIST[uploaders[k]].fileSize
          }
          e = e.replace(KUPLOADTOP.RAONKSolution.Agent.backspace, "");
          d = d.replace(KUPLOADTOP.RAONKSolution.Agent.backspace,
              "");
          h = h.replace(KUPLOADTOP.RAONKSolution.Agent.backspace, "");
          b += "kmc" + KUPLOADTOP.RAONKSolution.Agent.formfeed + "c00"
              + KUPLOADTOP.RAONKSolution.Agent.vertical;
          b += "km00" + KUPLOADTOP.RAONKSolution.Agent.formfeed + c.transferId
              + KUPLOADTOP.RAONKSolution.Agent.vertical;
          b += "km01" + KUPLOADTOP.RAONKSolution.Agent.formfeed
              + uploaders.length + KUPLOADTOP.RAONKSolution.Agent.vertical;
          b += "km02" + KUPLOADTOP.RAONKSolution.Agent.formfeed
              + TOTALUPLOADSIZE + KUPLOADTOP.RAONKSolution.Agent.vertical;
          b += "km04" + KUPLOADTOP.RAONKSolution.Agent.formfeed +
              e + KUPLOADTOP.RAONKSolution.Agent.vertical;
          b += "km05" + KUPLOADTOP.RAONKSolution.Agent.formfeed + d
              + KUPLOADTOP.RAONKSolution.Agent.vertical;
          b += "km06" + KUPLOADTOP.RAONKSolution.Agent.formfeed + h;
          null != KUPLOADTOP.G_CURRKUPLOADER._config.kMonitorGroupId && void 0
          != KUPLOADTOP.G_CURRKUPLOADER._config.kMonitorGroupId && ""
          != KUPLOADTOP.G_CURRKUPLOADER._config.kMonitorGroupId
          && (b += KUPLOADTOP.RAONKSolution.Agent.vertical + "km17"
              + KUPLOADTOP.RAONKSolution.Agent.formfeed
              + KUPLOADTOP.G_CURRKUPLOADER._config.kMonitorGroupId);
          var g = KUPLOADTOP.RAONKUPLOAD.ajax.createXMLHttpRequest();
          g.onreadystatechange = function () {
            if (4 == g.readyState) {
              if (200 == g.status) {
                var a = KUPLOADTOP.RAONKUPLOAD.util.parseDataFromServer(
                    g.responseText);
                0 == a.indexOf("[OK]") ? (a = a.replace("[OK]",
                        ""), a = KUPLOADTOP.RAONKUPLOAD.util.makeDecryptReponseMessage(
                        a), c.bandwidth = a, changeBandwidth(
                        c.bandwidth), p(), c.intervalProcess = setInterval(
                        function () {
                          c.processUpload()
                        }, 1E3 * parseInt(
                        KUPLOADTOP.G_CURRKUPLOADER._config.kMonitorPollingTime,
                        10)))
                    : 0 == a.indexOf("[FAIL]") &&
                    (a = a.replace("[FAIL]",
                        ""), a = KUPLOADTOP.RAONKUPLOAD.util.makeDecryptReponseMessage(
                        a), a = KUPLOADTOP.RAONKUPLOAD.util.getCodeAndMessage(
                        a), c.fn_sendError(null, g.status, a,
                        "preUploadRequest"), g = void 0)
              } else if (400 <= g.status && 600 > g.status || 0
                  == g.status) {
                c.fn_sendError(null, g.status, "",
                    "preUploadRequest"), g = void 0
              }
            }
          };
          b = KUPLOADTOP.RAONKUPLOAD.util.makeEncryptParamFinal(b);
          f += b.name + "=" + b.value;
          b = G_FormData.length;
          for (e = 0; e < b; e++) {
            d = G_FormData[e].form_value, d = "1"
            <= KUPLOADTOP.G_CURRKUPLOADER._config.security.encryptParam ?
                KUPLOADTOP.RAONKUPLOAD.util.makeEncryptParamFinal(d).value
                : encodeURIComponent(d), f += "&" + G_FormData[e].form_name
                + "="
                + d;
          }
          g.open("POST", KUPLOADTOP.G_CURRKUPLOADER._config.kMonitorUrl, !0);
          g.setRequestHeader("Content-Type",
              "application/x-www-form-urlencoded; charset=UTF-8");
          try {
            g.send(f)
          } catch (r) {
            c.fn_sendError(r, "", "", "preUploadRequest"), g = void 0
          }
        };
    c.processUpload = function () {
      var p = "", f,
          b = c.transferSpeed.recentSpeed ? c.transferSpeed.recentSpeed : 0,
          e = c.transferSpeed.avgSpeed ? c.transferSpeed.avgSpeed : 0;
      f = "" +
          ("kmc" + KUPLOADTOP.RAONKSolution.Agent.formfeed + "c01"
              + KUPLOADTOP.RAONKSolution.Agent.vertical);
      f += "km00" + KUPLOADTOP.RAONKSolution.Agent.formfeed + c.transferId
          + KUPLOADTOP.RAONKSolution.Agent.vertical;
      f += "km08" + KUPLOADTOP.RAONKSolution.Agent.formfeed
          + PREVIOUSUPLOADEDSIZE + KUPLOADTOP.RAONKSolution.Agent.vertical;
      f += "km13" + KUPLOADTOP.RAONKSolution.Agent.formfeed + e + "/" + b + "/"
          + c.bandwidth + KUPLOADTOP.RAONKSolution.Agent.vertical;
      f += "km14" + KUPLOADTOP.RAONKSolution.Agent.formfeed
          + upload_complete_count;
      var d = KUPLOADTOP.RAONKUPLOAD.ajax.createXMLHttpRequest();
      d.onreadystatechange = function () {
        if (4 == d.readyState) {
          if (200 == d.status) {
            var b = KUPLOADTOP.RAONKUPLOAD.util.parseDataFromServer(
                d.responseText);
            0 == b.indexOf("[OK]") ? (b = b.replace("[OK]",
                ""), b = KUPLOADTOP.RAONKUPLOAD.util.makeDecryptReponseMessage(
                b), c.bandwidth = b, changeBandwidth(c.bandwidth)) : 0
                == b.indexOf("[FAIL]") && (clearInterval(
                    c.intervalProcess), b = b.replace("[FAIL]",
                    ""), b = KUPLOADTOP.RAONKUPLOAD.util.makeDecryptReponseMessage(
                    b), b = KUPLOADTOP.RAONKUPLOAD.util.getCodeAndMessage(
                    b), c.fn_sendError(null, d.status,
                    b, "processUpload"), d = void 0)
          } else if (400 <= d.status && 600 > d.status || 0
              == d.status) {
            c.fn_sendError(null, d.status, "",
                "processUpload"), d = void 0
          }
        }
      };
      f = KUPLOADTOP.RAONKUPLOAD.util.makeEncryptParamFinal(f);
      p += f.name + "=" + f.value;
      d.open("POST", KUPLOADTOP.G_CURRKUPLOADER._config.kMonitorPartUrl
          ? KUPLOADTOP.G_CURRKUPLOADER._config.kMonitorPartUrl
          : KUPLOADTOP.G_CURRKUPLOADER._config.kMonitorUrl, !0);
      d.setRequestHeader("Content-Type",
          "application/x-www-form-urlencoded; charset=UTF-8");
      try {
        d.send(p)
      } catch (h) {
        c.fn_sendError(h,
            "", "", "processUpload"), d = void 0
      }
    };
    c.endUploadRequest = function (p, f) {
      clearInterval(c.intervalProcess);
      var b = "", e = "", d = "", h = "", k = "", n = "", m = "", a = "";
      if ("2" != f && "3" != f || 0
          != KUPLOADTOP.G_CURRKUPLOADER.frameWin.upload_complete_count) {
        for (var q = 0; q < uploaders.length; q++) {
          "complete"
          == RESULTFILELIST[uploaders[q]].status
          && (b += KUPLOADTOP.RAONKSolution.Agent.backspace
              + RESULTFILELIST[uploaders[q]].guid, e += KUPLOADTOP.RAONKSolution.Agent.backspace
              + RESULTFILELIST[uploaders[q]].fileSize, h += KUPLOADTOP.RAONKSolution.Agent.backspace
              +
              (c.transferPath[q] ? c.transferPath[q]
                  : ""), d += KUPLOADTOP.RAONKSolution.Agent.backspace
              + (RESULTFILELIST[uploaders[q]].compress ? "1"
                  : "0"), k += KUPLOADTOP.RAONKSolution.Agent.backspace
              + (c.transferStartTime[q] ? c.transferStartTime[q]
                  : ""), n += KUPLOADTOP.RAONKSolution.Agent.backspace
              + (c.transferCompleteTime[q] ? c.transferCompleteTime[q] : ""));
        }
        b = b.replace(KUPLOADTOP.RAONKSolution.Agent.backspace, "");
        e = e.replace(KUPLOADTOP.RAONKSolution.Agent.backspace, "");
        h = h.replace(KUPLOADTOP.RAONKSolution.Agent.backspace, "");
        d = d.replace(KUPLOADTOP.RAONKSolution.Agent.backspace, "");
        k = k.replace(KUPLOADTOP.RAONKSolution.Agent.backspace, "");
        n = n.replace(KUPLOADTOP.RAONKSolution.Agent.backspace, "");
        c.fileId = b.split(KUPLOADTOP.RAONKSolution.Agent.backspace);
        a += "kmc" + KUPLOADTOP.RAONKSolution.Agent.formfeed + "c02"
            + KUPLOADTOP.RAONKSolution.Agent.vertical;
        a += "km00" + KUPLOADTOP.RAONKSolution.Agent.formfeed + c.transferId
            + KUPLOADTOP.RAONKSolution.Agent.vertical;
        a += "km04" + KUPLOADTOP.RAONKSolution.Agent.formfeed + b
            + KUPLOADTOP.RAONKSolution.Agent.vertical;
        a += "km06" + KUPLOADTOP.RAONKSolution.Agent.formfeed + e
            + KUPLOADTOP.RAONKSolution.Agent.vertical;
        a += "km07" + KUPLOADTOP.RAONKSolution.Agent.formfeed + h
            + KUPLOADTOP.RAONKSolution.Agent.vertical;
        a += "km09" + KUPLOADTOP.RAONKSolution.Agent.formfeed
            + KUPLOADTOP.G_CURRKUPLOADER._config.security.encryptParam
            + KUPLOADTOP.RAONKSolution.Agent.vertical;
        a += "km10" + KUPLOADTOP.RAONKSolution.Agent.formfeed + d
            + KUPLOADTOP.RAONKSolution.Agent.vertical;
        a += "km11" + KUPLOADTOP.RAONKSolution.Agent.formfeed + p
            + KUPLOADTOP.RAONKSolution.Agent.vertical;
        a += "km12" + KUPLOADTOP.RAONKSolution.Agent.formfeed + f
            + KUPLOADTOP.RAONKSolution.Agent.vertical;
        a += "km15" + KUPLOADTOP.RAONKSolution.Agent.formfeed + k
            + KUPLOADTOP.RAONKSolution.Agent.vertical;
        a += "km16" + KUPLOADTOP.RAONKSolution.Agent.formfeed + n
      } else {
        a += "kmc" + KUPLOADTOP.RAONKSolution.Agent.formfeed + "c02"
            + KUPLOADTOP.RAONKSolution.Agent.vertical, a += "km00"
            + KUPLOADTOP.RAONKSolution.Agent.formfeed + c.transferId
            + KUPLOADTOP.RAONKSolution.Agent.vertical, a += "km09"
            + KUPLOADTOP.RAONKSolution.Agent.formfeed
            + KUPLOADTOP.G_CURRKUPLOADER._config.security.encryptParam +
            KUPLOADTOP.RAONKSolution.Agent.vertical, a += "km11"
            + KUPLOADTOP.RAONKSolution.Agent.formfeed + p
            + KUPLOADTOP.RAONKSolution.Agent.vertical, a += "km12"
            + KUPLOADTOP.RAONKSolution.Agent.formfeed + f
            + KUPLOADTOP.RAONKSolution.Agent.vertical;
      }
      b = KUPLOADTOP.RAONKUPLOAD.util.makeEncryptParamFinal(a);
      m += b.name + "=" + b.value;
      b = G_FormData.length;
      for (e = 0; e < b; e++) {
        d = G_FormData[e].form_value, d = "1"
        <= KUPLOADTOP.G_CURRKUPLOADER._config.security.encryptParam
            ? KUPLOADTOP.RAONKUPLOAD.util.makeEncryptParamFinal(d).value
            : encodeURIComponent(d),
            m += "&" + G_FormData[e].form_name + "=" + d;
      }
      var g = KUPLOADTOP.RAONKUPLOAD.ajax.createXMLHttpRequest();
      g.onreadystatechange = function () {
        if (4 == g.readyState) {
          if (200 == g.status) {
            c.dataReset();
            var a = KUPLOADTOP.RAONKUPLOAD.util.parseDataFromServer(
                g.responseText);
            if (0 == a.indexOf("[OK]")) {
              for (a = 0; a < uploaders.length;
                  a++) {
                RESULTFILELIST[uploaders[a]].fileId
                && (RESULTFILELIST[uploaders[a]].fileId = c.fileId[a]), RESULTFILELIST[uploaders[a]].transferId
                && (RESULTFILELIST[uploaders[a]].transferId = c.transferId);
              }
              c.transferId = "";
              c.fileId = ""
            } else {
              0 == a.indexOf("[FAIL]")
              && (c.transferId = "", c.fileId = "", a = a.replace("[FAIL]",
                  ""), a = KUPLOADTOP.RAONKUPLOAD.util.makeDecryptReponseMessage(
                  a), a = KUPLOADTOP.RAONKUPLOAD.util.getCodeAndMessage(
                  a), c.fn_sendError(null, g.status, a,
                  "endUploadRequest"), g = void 0)
            }
          } else if (400 <= g.status && 600 > g.status || 0
              == g.status) {
            c.fn_sendError(null, g.status, "",
                "endUploadRequest"), g = void 0
          }
        }
      };
      g.open("POST", KUPLOADTOP.G_CURRKUPLOADER._config.kMonitorUrl, !0);
      g.setRequestHeader("Content-Type",
          "application/x-www-form-urlencoded; charset=UTF-8");
      try {
        g.send(m)
      } catch (r) {
        c.fn_sendError(r, "", "", "endUploadRequest"), g = void 0
      }
    };
    c.fn_sendError = function (p, f, b, e) {
      try {
        var d = {
          strType: "upload",
          strStatus: "error",
          strTransferId: KUPLOADTOP.G_CURRKUPLOADER.transferId
        };
        "function"
        === typeof KUPLOADTOP.G_CURRKUPLOADER._config.event.transferStatusChange
            ? KUPLOADTOP.G_CURRKUPLOADER._config.event.transferStatusChange(
                KUPLOADTOP.G_CURRKUPLOADER.ID, d) : "function"
            === typeof KUPLOADTOP.KUPLOADWIN.RAONKUPLOAD_TransferStatusChange
            && KUPLOADTOP.KUPLOADWIN.RAONKUPLOAD_TransferStatusChange(
                KUPLOADTOP.G_CURRKUPLOADER.ID,
                d)
      } catch (h) {
        KUPLOADTOP.RAONKUPLOAD.logMode && console.log(h)
      }
      try {
        "preUploadRequest" != e && "processUpload" != e || !b ? c.dataReset()
            : c.endUploadRequest(b.code + "|" + b.message, "3");
        var k = getUploadedFileListObj(), n = d = "", m = "";
        b ? (n = b.code, d = b.message) : ("preUploadRequest" == e ? n = "C005"
            : "processUpload" == e ? n = "C009" : "endUploadRequest" == e
                && (n = "C006"), p ? d = p.message : void 0 != f
            && (d = "http(s) status is "
                + f), m = RAONKUpload_Lang.error_info["error_code_" + n] + "\n"
            + d);
        p = {
          strType: "upload",
          strCode: n,
          strMessage: "" == m ? d : m,
          arrUploadedFileList: k
        };
        if ("function"
            === typeof KUPLOADTOP.G_CURRKUPLOADER._config.event.onError) {
          KUPLOADTOP.G_CURRKUPLOADER._config.event.onError(
              KUPLOADTOP.G_CURRKUPLOADER.ID, p);
        } else {
          "function"
          === typeof KUPLOADTOP.KUPLOADWIN.RAONKUPLOAD_OnError
              ? KUPLOADTOP.KUPLOADWIN.RAONKUPLOAD_OnError(
                  KUPLOADTOP.G_CURRKUPLOADER.ID, p) : alert(
                  "Error Code : " + p.strCode + "\nError Message : "
                  + p.strMessage)
        }
      } catch (a) {
        KUPLOADTOP.RAONKUPLOAD.logMode && console.log(a)
      }
      KUPLOADTOP.G_CURRKUPLOADER.transferId = "";
      try {
        if (1 == G_MultiTranferCheck) {
          G_MultiTranferCheck =
              4;
        } else {
          try {
            "0" == KUPLOADTOP.G_CURRKUPLOADER._config.skipSentFile
            && fileListReset()
          } catch (q) {
            KUPLOADTOP.RAONKUPLOAD.logMode && console.log(q)
          }
        }
        0 < getSessionKeepData(KUPLOADTOP.G_CURRKUPLOADER).length
        && (KUPLOADTOP.G_CURRKUPLOADER._config.sessionKeep.requestFlag = !1);
        displayCommonReady(!1, KUPLOADTOP.G_CURRKUPLOADER);
        closeSendDialog();
        KUPLOADTOP.G_CURRKUPLOADER.cancel()
      } catch (g) {
        KUPLOADTOP.RAONKUPLOAD.logMode && console.log(g)
      }
    };
    c.preDownloadRequest = function (p, f) {
      var b = "", e = "", d = "", h = "", k = "";
      "" == c.transferId &&
      (c.transferId = (new Date).toISOString().substring(0, 10) + "_"
          + KUPLOADTOP.RAONKUPLOAD.util.makeGuid());
      var n = 0;
      c.downloadLISTLen = p;
      c.downloadIdxArr = G_downloadIdxArr;
      for (var m = 0; m < G_downloadIdxArr.length;
          m++) {
        RESULTFILELIST[G_downloadIdxArr[m]].guid = KUPLOADTOP.RAONKUPLOAD.util.makeGuid(), d += KUPLOADTOP.RAONKSolution.Agent.backspace
            + RESULTFILELIST[G_downloadIdxArr[m]].guid, h += KUPLOADTOP.RAONKSolution.Agent.backspace
            + RESULTFILELIST[G_downloadIdxArr[m]].originName, k += KUPLOADTOP.RAONKSolution.Agent.backspace
            +
            ("" == RESULTFILELIST[G_downloadIdxArr[m]].fileSize ? "0"
                : RESULTFILELIST[G_downloadIdxArr[m]].fileSize), n += ""
        == RESULTFILELIST[G_downloadIdxArr[m]].fileSize ? 0
            : RESULTFILELIST[G_downloadIdxArr[m]].fileSize;
      }
      d = d.replace(KUPLOADTOP.RAONKSolution.Agent.backspace, "");
      h = h.replace(KUPLOADTOP.RAONKSolution.Agent.backspace, "");
      k = k.replace(KUPLOADTOP.RAONKSolution.Agent.backspace, "");
      e += "kmc" + KUPLOADTOP.RAONKSolution.Agent.formfeed + "c10"
          + KUPLOADTOP.RAONKSolution.Agent.vertical;
      e += "km00" + KUPLOADTOP.RAONKSolution.Agent.formfeed +
          c.transferId + KUPLOADTOP.RAONKSolution.Agent.vertical;
      e += "km01" + KUPLOADTOP.RAONKSolution.Agent.formfeed
          + G_downloadIdxArr.length + KUPLOADTOP.RAONKSolution.Agent.vertical;
      e += "km02" + KUPLOADTOP.RAONKSolution.Agent.formfeed + n
          + KUPLOADTOP.RAONKSolution.Agent.vertical;
      e += "km04" + KUPLOADTOP.RAONKSolution.Agent.formfeed + d
          + KUPLOADTOP.RAONKSolution.Agent.vertical;
      e += "km05" + KUPLOADTOP.RAONKSolution.Agent.formfeed + h
          + KUPLOADTOP.RAONKSolution.Agent.vertical;
      e += "km06" + KUPLOADTOP.RAONKSolution.Agent.formfeed + k;
      null !=
      KUPLOADTOP.G_CURRKUPLOADER._config.kMonitorGroupId && void 0
      != KUPLOADTOP.G_CURRKUPLOADER._config.kMonitorGroupId && ""
      != KUPLOADTOP.G_CURRKUPLOADER._config.kMonitorGroupId
      && (e += KUPLOADTOP.RAONKSolution.Agent.vertical + "km17"
          + KUPLOADTOP.RAONKSolution.Agent.formfeed
          + KUPLOADTOP.G_CURRKUPLOADER._config.kMonitorGroupId);
      m = KUPLOADTOP.RAONKUPLOAD.util.makeEncryptParamFinal(e);
      b += m.name + "=" + m.value;
      m = G_FormData.length;
      for (e = 0; e < m; e++) {
        d = G_FormData[e].form_value, d = "1"
        <= KUPLOADTOP.G_CURRKUPLOADER._config.security.encryptParam ?
            KUPLOADTOP.RAONKUPLOAD.util.makeEncryptParamFinal(d).value
            : encodeURIComponent(d), b += "&" + G_FormData[e].form_name + "="
            + d;
      }
      e = KUPLOADTOP.G_CURRKUPLOADER._config.kMonitorUrl;
      if ("1" == KUPLOADTOP.G_CURRKUPLOADER._config.useDownloadCache) {
        d = {list: []};
        h = !1;
        for (m = 0; m < G_downloadIdxArr.length; m++) {
          if (RESULTFILELIST[G_downloadIdxArr[m]].cacheKey) {
            h = !0;
            break
          }
          "1" == KUPLOADTOP.G_CURRKUPLOADER._config.downloadMulti
          && d.list.push({
            url: KUPLOADTOP.G_CURRKUPLOADER._config.handlerUrl + "?cache_key="
                + RESULTFILELIST[G_downloadIdxArr[m]].customValue,
            cached: !1
          })
        }
        h || ("0" == KUPLOADTOP.G_CURRKUPLOADER._config.downloadMulti
        && d.list.push({
          url: KUPLOADTOP.G_CURRKUPLOADER._config.handlerUrl + "?cache_key=",
          cached: !1
        }), b += "&fdn=" + JSON.stringify(d), e += "?method=check_cache_status")
      }
      var a = KUPLOADTOP.RAONKUPLOAD.ajax.createXMLHttpRequest();
      a.onreadystatechange = function () {
        if (4 == a.readyState) {
          if (200 == a.status) {
            var b = KUPLOADTOP.RAONKUPLOAD.util.parseDataFromServer(
                a.responseText);
            0 == b.indexOf("[OK]") ? (b = b.replace("[OK]",
                    ""), b = KUPLOADTOP.RAONKUPLOAD.util.makeDecryptReponseMessage(
                    b),
                    c.bandwidth = b, changeBandwidth(
                    c.bandwidth), f(), c.intervalProcess = setInterval(function () {
                  c.processDownload()
                }, 1E3 * parseInt(
                    KUPLOADTOP.G_CURRKUPLOADER._config.kMonitorPollingTime, 10)))
                : 0
                == b.indexOf("[FAIL]") && (b = b.replace("[FAIL]",
                    ""), b = KUPLOADTOP.RAONKUPLOAD.util.makeDecryptReponseMessage(
                    b), b = KUPLOADTOP.RAONKUPLOAD.util.getCodeAndMessage(
                    b), a = void 0)
          } else if (400 <= a.status && 600 > a.status || 0
              == a.status) {
            a = void 0
          }
        }
      };
      a.open("POST", e, !0);
      a.setRequestHeader("Content-Type",
          "application/x-www-form-urlencoded; charset=UTF-8");
      try {
        a.send(b)
      } catch (q) {
        KUPLOADTOP.RAONKUPLOAD.logMode && console.log(q)
      }
    };
    c.processDownload = function () {
      var p = "", f,
          b = c.transferSpeed.recentSpeed ? c.transferSpeed.recentSpeed : 0,
          e = c.transferSpeed.avgSpeed ? c.transferSpeed.avgSpeed : 0;
      f = "" + ("kmc" + KUPLOADTOP.RAONKSolution.Agent.formfeed + "c11"
          + KUPLOADTOP.RAONKSolution.Agent.vertical);
      f += "km00" + KUPLOADTOP.RAONKSolution.Agent.formfeed + c.transferId
          + KUPLOADTOP.RAONKSolution.Agent.vertical;
      f += "km08" + KUPLOADTOP.RAONKSolution.Agent.formfeed
          + PREVIOUSUPLOADEDSIZE + KUPLOADTOP.RAONKSolution.Agent.vertical;
      f += "km13" + KUPLOADTOP.RAONKSolution.Agent.formfeed + e + "/" + b + "/"
          + c.bandwidth + KUPLOADTOP.RAONKSolution.Agent.vertical;
      f += "km14" + KUPLOADTOP.RAONKSolution.Agent.formfeed
          + upload_complete_count;
      var d = KUPLOADTOP.RAONKUPLOAD.ajax.createXMLHttpRequest();
      d.onreadystatechange = function () {
        if (4 == d.readyState) {
          if (200 == d.status) {
            var b = KUPLOADTOP.RAONKUPLOAD.util.parseDataFromServer(
                d.responseText);
            0 == b.indexOf("[OK]") ? (b = b.replace("[OK]",
                    ""), b = KUPLOADTOP.RAONKUPLOAD.util.makeDecryptReponseMessage(
                    b), c.bandwidth = b, changeBandwidth(c.bandwidth)) :
                0 == b.indexOf("[FAIL]") && (d = void 0)
          } else if (400 <= d.status && 600 > d.status || 0
              == d.status) {
            d = void 0
          }
        }
      };
      f = KUPLOADTOP.RAONKUPLOAD.util.makeEncryptParamFinal(f);
      p += f.name + "=" + f.value;
      d.open("POST", KUPLOADTOP.G_CURRKUPLOADER._config.kMonitorPartUrl
          ? KUPLOADTOP.G_CURRKUPLOADER._config.kMonitorPartUrl
          : KUPLOADTOP.G_CURRKUPLOADER._config.kMonitorUrl, !0);
      d.setRequestHeader("Content-Type",
          "application/x-www-form-urlencoded; charset=UTF-8");
      try {
        d.send(p)
      } catch (h) {
        d = void 0
      }
    };
    c.endDownloadRequest = function (p, f) {
      clearInterval(c.intervalProcess);
      var b = "", e = "", d = "", h = "", k = "", n = "", m = "", a = "",
          q = [];
      "" != G_DownloadPathList && (q = G_DownloadPathList.split(
          KUPLOADTOP.RAONKSolution.Agent.formfeed), G_DownloadPathList = "");
      if ("2" != f && "3" != f || 0
          != KUPLOADTOP.G_CURRKUPLOADER.frameWin.upload_complete_count || "0"
          != KUPLOADTOP.G_CURRKUPLOADER._config.downloadMulti) {
        if ("2" != f
            && "3" != f || 0
            != KUPLOADTOP.G_CURRKUPLOADER.frameWin.upload_complete_count || "1"
            != KUPLOADTOP.G_CURRKUPLOADER._config.downloadMulti || 0
            != c.downloadIdxArr.length) {
          for (var g = 0, r = 0; r < c.downloadIdxArr.length; r++) {
            var u =
                !1;
            if (0 < G_downloadErrorIndexList.length) {
              for (l = 0;
                  l < G_downloadErrorIndexList.length;
                  l++) {
                RESULTFILELIST[c.downloadIdxArr[r]].guid
                == RESULTFILELIST[G_downloadErrorIndexList[l]].guid && (u = !0);
              }
            }
            u || (b += KUPLOADTOP.RAONKSolution.Agent.backspace
                + RESULTFILELIST[c.downloadIdxArr[r]].guid, e += KUPLOADTOP.RAONKSolution.Agent.backspace
                + ("" == RESULTFILELIST[c.downloadIdxArr[r]].fileSize ? "0"
                    : RESULTFILELIST[c.downloadIdxArr[r]].fileSize), d += KUPLOADTOP.RAONKSolution.Agent.backspace
                + (RESULTFILELIST[c.downloadIdxArr[r]].compress ?
                    "1" : "0"), "0"
            == KUPLOADTOP.G_CURRKUPLOADER._config.downloadMulti
                ? (h += KUPLOADTOP.RAONKSolution.Agent.backspace
                    + q[g], k += KUPLOADTOP.RAONKSolution.Agent.backspace
                    + c.transferStartTime[0], n += KUPLOADTOP.RAONKSolution.Agent.backspace
                    + c.transferCompleteTime[0], g++) : 2 == f && G_DownloadCnt
                >= r + 1 ? (h += KUPLOADTOP.RAONKSolution.Agent.backspace
                    + q[g], k += KUPLOADTOP.RAONKSolution.Agent.backspace
                    + c.transferStartTime[g], n += KUPLOADTOP.RAONKSolution.Agent.backspace
                    + c.transferCompleteTime[g], g++) : 2 == f && G_DownloadCnt
                < r + 1 ? (h += KUPLOADTOP.RAONKSolution.Agent.backspace +
                        "-", k += KUPLOADTOP.RAONKSolution.Agent.backspace
                        + "-", n += KUPLOADTOP.RAONKSolution.Agent.backspace + "-")
                    : (h += KUPLOADTOP.RAONKSolution.Agent.backspace
                        + q[g], k += KUPLOADTOP.RAONKSolution.Agent.backspace
                        + c.transferStartTime[g], n += KUPLOADTOP.RAONKSolution.Agent.backspace
                        + c.transferCompleteTime[g], g++))
          }
          b = b.replace(KUPLOADTOP.RAONKSolution.Agent.backspace, "");
          e = e.replace(KUPLOADTOP.RAONKSolution.Agent.backspace, "");
          h = h.replace(KUPLOADTOP.RAONKSolution.Agent.backspace, "");
          d = d.replace(KUPLOADTOP.RAONKSolution.Agent.backspace,
              "");
          k = k.replace(KUPLOADTOP.RAONKSolution.Agent.backspace, "");
          n = n.replace(KUPLOADTOP.RAONKSolution.Agent.backspace, "");
          a += "kmc" + KUPLOADTOP.RAONKSolution.Agent.formfeed + "c12"
              + KUPLOADTOP.RAONKSolution.Agent.vertical;
          a += "km00" + KUPLOADTOP.RAONKSolution.Agent.formfeed + c.transferId
              + KUPLOADTOP.RAONKSolution.Agent.vertical;
          a += "km04" + KUPLOADTOP.RAONKSolution.Agent.formfeed + b
              + KUPLOADTOP.RAONKSolution.Agent.vertical;
          a += "km06" + KUPLOADTOP.RAONKSolution.Agent.formfeed + e
              + KUPLOADTOP.RAONKSolution.Agent.vertical;
          a +=
              "km07" + KUPLOADTOP.RAONKSolution.Agent.formfeed + h
              + KUPLOADTOP.RAONKSolution.Agent.vertical;
          a += "km09" + KUPLOADTOP.RAONKSolution.Agent.formfeed
              + KUPLOADTOP.G_CURRKUPLOADER._config.security.encryptParam
              + KUPLOADTOP.RAONKSolution.Agent.vertical;
          a += "km10" + KUPLOADTOP.RAONKSolution.Agent.formfeed + d
              + KUPLOADTOP.RAONKSolution.Agent.vertical;
          a += "km11" + KUPLOADTOP.RAONKSolution.Agent.formfeed + p
              + KUPLOADTOP.RAONKSolution.Agent.vertical;
          a += "km12" + KUPLOADTOP.RAONKSolution.Agent.formfeed + f
              + KUPLOADTOP.RAONKSolution.Agent.vertical;
          a += "km15" + KUPLOADTOP.RAONKSolution.Agent.formfeed + k
              + KUPLOADTOP.RAONKSolution.Agent.vertical;
          a += "km16" + KUPLOADTOP.RAONKSolution.Agent.formfeed + n
        } else {
          a += "kmc" + KUPLOADTOP.RAONKSolution.Agent.formfeed + "c12"
              + KUPLOADTOP.RAONKSolution.Agent.vertical, a += "km00"
              + KUPLOADTOP.RAONKSolution.Agent.formfeed + c.transferId
              + KUPLOADTOP.RAONKSolution.Agent.vertical, a += "km09"
              + KUPLOADTOP.RAONKSolution.Agent.formfeed
              + KUPLOADTOP.G_CURRKUPLOADER._config.security.encryptParam
              + KUPLOADTOP.RAONKSolution.Agent.vertical, a += "km11" +
              KUPLOADTOP.RAONKSolution.Agent.formfeed + p
              + KUPLOADTOP.RAONKSolution.Agent.vertical, a += "km12"
              + KUPLOADTOP.RAONKSolution.Agent.formfeed + f
              + KUPLOADTOP.RAONKSolution.Agent.vertical;
        }
      } else {
        a += "kmc"
            + KUPLOADTOP.RAONKSolution.Agent.formfeed + "c12"
            + KUPLOADTOP.RAONKSolution.Agent.vertical, a += "km00"
            + KUPLOADTOP.RAONKSolution.Agent.formfeed + c.transferId
            + KUPLOADTOP.RAONKSolution.Agent.vertical, a += "km09"
            + KUPLOADTOP.RAONKSolution.Agent.formfeed
            + KUPLOADTOP.G_CURRKUPLOADER._config.security.encryptParam
            + KUPLOADTOP.RAONKSolution.Agent.vertical,
            a += "km11" + KUPLOADTOP.RAONKSolution.Agent.formfeed + p
                + KUPLOADTOP.RAONKSolution.Agent.vertical, a += "km12"
            + KUPLOADTOP.RAONKSolution.Agent.formfeed + f
            + KUPLOADTOP.RAONKSolution.Agent.vertical;
      }
      b = KUPLOADTOP.RAONKUPLOAD.util.makeEncryptParamFinal(a);
      m += b.name + "=" + b.value;
      b = G_FormData.length;
      for (e = 0; e < b; e++) {
        d = G_FormData[e].form_value, d = "1"
        <= KUPLOADTOP.G_CURRKUPLOADER._config.security.encryptParam
            ? KUPLOADTOP.RAONKUPLOAD.util.makeEncryptParamFinal(d).value
            : encodeURIComponent(d), m += "&" + G_FormData[e].form_name + "=" +
            d;
      }
      var t = KUPLOADTOP.RAONKUPLOAD.ajax.createXMLHttpRequest();
      t.onreadystatechange = function () {
        if (4 == t.readyState) {
          if (200 == t.status) {
            c.dataReset();
            var a = KUPLOADTOP.RAONKUPLOAD.util.parseDataFromServer(
                t.responseText);
            0 == a.indexOf("[OK]") ? (c.transferId = "", c.fileId = "") : 0
                == a.indexOf("[FAIL]")
                && (t = void 0, c.transferId = "", c.fileId = "")
          } else if (400 <= t.status && 600 > t.status || 0
              == t.status) {
            t = void 0
          }
        }
      };
      t.open("POST", KUPLOADTOP.G_CURRKUPLOADER._config.kMonitorUrl, !0);
      t.setRequestHeader("Content-Type",
          "application/x-www-form-urlencoded; charset=UTF-8");
      try {
        t.send(m)
      } catch (v) {
        t = void 0
      }
    }
  } catch (v) {
    KUPLOADTOP.RAONKUPLOAD.logMode && console.log(v)
  }
})();
