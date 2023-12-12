var dropbox = document.querySelector('#uploaderArea');
var $fileAddBtn = document.getElementById("fileAddBtn");
var globalFileList = [];

//박스 안에 drag 하고 있을 때
dropbox.addEventListener('dragover', function (e) {
  e.preventDefault();
  this.style.backgroundColor = 'rgb(13 110 253 )';
});

//박스 밖으로 drag가 나갈 때
dropbox.addEventListener('dragleave', function (e) {
  this.style.backgroundColor = 'white';
});

//박스 안에 drop 했을 때
dropbox.addEventListener('drop', function (e) {
  e.preventDefault();
  this.style.backgroundColor = 'white'
  var fileList = e.dataTransfer.files

  for (var i = 0; i < fileList.length; i++) {
    makeFileList(fileList[i])
    var newFileName = uniqueAlphaNumericId() + '-' + fileList[i].name;

    globalFileList.push(
        new File([fileList[i]], newFileName, {type: fileList[i].type}))
    globalFileList[i].originLastModified = fileList[i].lastModified
  }

  document.getElementById("uploaderArea").childNodes[0].data = "";
});

function makeFileList(file) {
  if (document.getElementsByClassName("tb_files").length == 0) {
    var $uploaderArea = document.getElementById("uploaderArea");
    var $tb_files = ''

    $uploaderArea.innerHTML = '';
    $uploaderArea.innerHTML = `
     <table>
         <thead>
         <tr>
             <th></th>
             <th>Filename</th>
         </tr>
         </thead>
         <tbody class="tb_files">
         </tbody>
     </table>
    `

  }

  var $tr = document.createElement('tr');
  var $td = document.createElement('td');
  var $td_wrapinput = document.createElement('td');
  var $input = document.createElement('input');
  $tb_files = document.querySelector('.tb_files');

  var fileName = file.name

  $td.textContent = fileName
  $input.type = 'checkbox'
  $input.name = 'fileCheckbox'
  $input.value = fileName

  $td_wrapinput.appendChild($input);
  $tr.appendChild($td_wrapinput);
  $tr.appendChild($td);

  $tb_files.appendChild($tr);
}

$fileAddBtn.addEventListener("change", function (e) {
  e.preventDefault();
  this.style.backgroundColor = 'white'
  var fileList = e.target.files;

  for (var i = 0; i < fileList.length; i++) {
    makeFileList(fileList[i])
    var newFileName = uniqueAlphaNumericId() + '-' + fileList[i].name;

    globalFileList.push(
        new File([fileList[i]], newFileName, {type: fileList[i].type}))
    globalFileList[i].originLastModified = fileList[i].lastModified
  }
  document.getElementById("uploaderArea").childNodes[0].data = "";
})

function uniqueAlphaNumericId() {
  var heyStack = "0123456789abcdefghijklmnopqrstuvwxyz";
  var randomInt = function () {
    return Math.floor(Math.random() * Math.floor(heyStack.length));
  };

  var result = [];
  for (var i = 0; i < 24; i++) {
    result.push(heyStack[randomInt()]);
  }

  return result.join("");
}


// 서버 요청 로직
document.querySelector(".submitBtn").addEventListener("click", function (e) {

  const title = document.getElementsByClassName("boardtitle")[0].value
  const content = document.getElementsByClassName("editorArea")[0].innerHTML;
  const requestData = {};
  const board = {};

  board.title = title;
  board.content = content;
  requestData.board = board;
  requestData.files = [];

  globalFileList.forEach(
      row => {
        const files = {}
        files.filename = row.name.slice(26);
        files.uuid = row.name.split("-")[0]
        requestData.files.push(files)
      }
  )

  fetch("/board/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    }
    , body: JSON.stringify(requestData)
  }).then(response => {
    if (response.ok) {
      window.location.href = '/board/list'
      return response.json();
    }
  })

}, false)
