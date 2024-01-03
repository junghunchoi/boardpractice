function RAONKUPLOAD_UploadComplete(uploadID) {
  console.log('RAONKUPLOAD_UploadComplete');
  const uploadList = RAONKUPLOAD.GetNewUploadList('json', uploadID);

  // 게시판 정보 추출
  const requestData = {};
  const board = {};
  requestData.files = [];
  board.title = document.getElementsByClassName("boardtitle")[0].value
  board.content = RAONKEDITOR.getBodyDom('editor1').innerHTML;
  requestData.board = board;

  for (let i = 0; i < uploadList.originalName.length; i++) {
    const file = {}
    file.filename = uploadList.originalName[i];
    file.uuid = uploadList.fileId[i];
    file.size = uploadList.size[i];
    requestData.files.push(file);
  }

  return fetch("/board/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    }
    , body: JSON.stringify(requestData)
  }).then(() => {
    location.href = "/board/list"
  })
  .catch((error) => console.error('Error fetching files:', error));
}

document.getElementById('submitBtn').addEventListener('click', function () {
  var iframe = document.getElementById("raonkuploader_frame_upload1");
  var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
  var childButton = iframeDocument.getElementById("button_send");

  childButton.click(); // 자식 iframe 내의 버튼 클릭 트리거
});

document.getElementById('goToListButton').addEventListener('click',
    function () {
      if (confirm('목록으로 돌아가시겠습니까? \n작성중인 글은 저장되지 않습니다.')) {
        location.href = "/board/list"
      } else {

      }
    });

