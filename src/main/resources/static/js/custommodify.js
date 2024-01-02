function RAONKUPLOAD_CreationComplete(uploadID) {

  // callBack 이벤트 설정
  // 파일추가 완료 후 발생하며, 파라미터 Object내에 API동작을 완료한 uploadID를 포함하여 반환합니다.
  var callBackEvt = function (paramObj) {
    console.log(paramObj.uploadName + ": 파일추가 완료.");
  }

  // Case_1
  // fileList로 추가
  // 파일 Object를 fileList 배열로 추가합니다.

  var fileList = [];
  console.log(files);

  files.forEach((file) => {
    var fileObj = {
      uniqueKey: file.uuid,
      originName: file.filename,
      webPath: "D:\\file\\raonkdownload\\" + file.uuid + "."
          + file.filename.split(".")[1],
      size: "",
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

  childButton.click(); // 자식 iframe 내의 버튼 클릭 트리거
});