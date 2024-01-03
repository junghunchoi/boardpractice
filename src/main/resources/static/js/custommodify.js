function RAONKUPLOAD_CreationComplete(uploadID) {
  var callBackEvt = function (paramObj) {
    console.log(paramObj.uploadName + ": 파일추가 완료.");
  }

  var fileList = [];
  console.log(files);

  files.forEach((file) => {
    var fileObj = {
      uniqueKey: file.uuid,
      originName: file.filename,
      webPath: "D:\\file\\raonkdownload\\" + file.uuid + "."
          + file.filename.split(".")[1],
      size: file.size,
      customValue: "",
    };
    fileList.push(fileObj);
  });

  var paramObj_1 = {
    fileList: fileList,
    uploadName: "upload1"
  };

  RAONKUPLOAD.AddUploadedFileAsObject(paramObj_1, callBackEvt);
}

function RAONKUPLOAD_UploadComplete(uploadID) {
  console.log('RAONKUPLOAD_UploadComplete');
  const uploadList = RAONKUPLOAD.GetNewUploadList('json', uploadID);

  // 게시판 정보 추출
  const boardObject = {
    bno: board.bno,
    title: document.getElementsByClassName("boardtitle")[0].value,
    content: RAONKEDITOR.getBodyDom('editor1').innerHTML
  };

  const requestData = {
    files: [],
    board: boardObject,
  };

  requestData.files = [];

  if (uploadList !== null) {
    for (let i = 0; i < uploadList.originalName.length; i++) {
      const file = {}
      file.filename = uploadList.originalName[i];
      file.uuid = uploadList.fileId[i];
      file.size = uploadList.size[i];
      requestData.files.push(file);
    }
  }
  return fetch("/board/modify", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    }
    , body: JSON.stringify(requestData)
  }).then(() => {
    window.location.href = "/board/read?bno="+window.location.search.split("=")[1];
  })
  .catch((error) => console.error('Error fetching files:', error));
}

document.getElementById('submitBtn').addEventListener('click', function () {
  var iframe = document.getElementById("raonkuploader_frame_upload1");
  var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
  var childButton = iframeDocument.getElementById("button_send");

  childButton.click();
});
