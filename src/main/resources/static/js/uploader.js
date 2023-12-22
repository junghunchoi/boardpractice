const $uploaderArea = document.querySelector("#uploaderArea");


/// 첨부파일 드래그 엔 드랍 로직
var dropbox = document.querySelector('#uploaderArea');
var $fileAddBtn = document.getElementById("fileAddBtn");
var iframeGlobalFileList = [];

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

    iframeGlobalFileList.push(
        new File([fileList[i]], newFileName, {type: fileList[i].type}))
    iframeGlobalFileList[i].originLastModified = fileList[i].lastModified
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
  window.parent.postMessage("uploaderLoaded", "*");
}

function handleFileChange(e) {
  e.preventDefault();
  this.style.backgroundColor = 'white';
  var fileList = e.target.files;

  for (var i = 0; i < fileList.length; i++) {
    makeFileList(fileList[i]);
    var newFileName = uniqueAlphaNumericId() + '-' + fileList[i].name;

    iframeGlobalFileList.push(
        new File([fileList[i]], newFileName, {type: fileList[i].type})
    );
    iframeGlobalFileList[i].originLastModified = fileList[i].lastModified;
  }
  document.getElementById("uploaderArea").childNodes[0].data = "";
}

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


if(document.getElementById('button_download')){
document.getElementById('button_download').addEventListener('click', function(e) {
  return fetch('http://10.10.0.157:1234/download', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      fileList: getCheckedFileList(),
    }),
  })
  .then((response) => response.blob())
  .then((blob) => {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'files.zip';
    document.body.appendChild(a);
    a.click();
    a.remove();
  })
  .catch((error) => console.error('Error fetching files:', error));
});
}

function getCheckedFileList() {
  var checkboxes = document.querySelectorAll(".uploader-main input[type='checkbox']");
  var checked = [];
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      checked.push(checkboxes[i].defaultValue);
    }
  }
  return checked;
}

function filesDownload() {
  return fetch('http://10.10.0.157:1234/download', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      fileList: getCheckedFileList(),
    }),
  })
  .then((response) => {
    console.log(response);
    return response.blob();
  })
  .then((blob) => {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'files.zip';
    document.body.appendChild(a);
    a.click();
    a.remove();
  })
  .catch((error) => console.error('Error fetching files:', error));
}

window.addEventListener('message', function (e) {
  let url = e.data.url;
  if (url === "/board/read") {
    const $button = document.createElement("button");
    $button.innerText = "다운로드";
    $button.type = "button";
    $button.id = "button_download";
    $button.onclick = filesDownload;
    $uploaderArea.after($button, $uploaderArea.firstChild);
  }else{
    console.log("else")
    const $div = document.createElement("div");
    const $label = document.createElement("label");
    const $input = document.createElement("input");
    $div.style = "display: flex; margin-right: auto";
    $label.className = "append-btn";
    $label.innerText = "파일추가";
    $input.type = "file";
    $input.id = "fileAddBtn";
    $input.style = "display: none";
    $input.setAttribute("multiple", "");
    $input.onchange = handleFileChange;
    $label.appendChild($input);
    $div.appendChild($label);
    $uploaderArea.after($div, $uploaderArea.firstChild);
    window.parent.postMessage("uploaderLoaded", "*");
  }

  // 랜더링 완료 후 부모에게 메시지 전달
  // window.parent.postMessage("uploaderLoaded", "*");
})


