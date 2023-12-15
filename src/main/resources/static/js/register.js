/// 첨부파일 드래그 엔 드랍 로직
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

// 파일업로드 서버로직
var uploadFiles = (function() {
  var fileRequests = new WeakMap();
  var ENDPOINTS = {
    UPLOAD: 'http://10.10.0.157:1234/upload',
    UPLOAD_STATUS: 'http://10.10.0.157:1234/upload-status',
    UPLOAD_REQUEST: 'http://10.10.0.157:1234/upload-request',
  };
  var defaultOptions = {
    url: ENDPOINTS.UPLOAD,
    startingByte: 0,
    fileName: '',
    currentChunkIndex: 0,
    onAbort: function() {},
    onProgress: function() {},
    onError: function() {},
    onComplete: function() {},
  };

  var uploadFileChunks = function(file, options) {
    var chunkSize = 1024 * 1024 * 1; // 청크 크기 설정값 1MB
    var currentChunkIndex = options.currentChunkIndex;

    setDownloadProgress(
        file.name,
        options.startingByte + '|' + (options.startingByte + chunkSize) + '|' + file.size + '|' + file.originLastModified
    );

    if (currentChunkIndex * chunkSize <= file.size) {
      var chunk = file.slice(options.startingByte, options.startingByte + chunkSize);
      uploadChunk(chunk, currentChunkIndex, file, options, function(err) {
        if (err) {
          console.error('error', err);
        } else {
          if (options.startingByte !== file.size) {
            options.currentChunkIndex = currentChunkIndex + 1;
            uploadFileChunks(file, options);
          }
        }
      });
    }
  };

  function uploadChunk(chunk, chunkIndex, file, options, callback) {
    var formData = new FormData();
    formData.append('fileChunk', chunk);
    formData.append('fileName', file.name);

    var req = new XMLHttpRequest();
    req.open('POST', options.url, true);
    req.setRequestHeader(
        'Content-Range',
        'bytes=' + options.startingByte + '-' + (options.startingByte + chunk.size) + '/' + file.size
    );
    req.setRequestHeader('X-File-Id', encodeURI(file.name));
    options.startingByte += chunk.size;

    req.onload = function() {
      if (req.status === 200) {
        // HTTP 상태 코드가 200일 경우
        if (options.startingByte === file.size) {
          options.onComplete({
            url: options.url,
            startingByte: options.startingByte,
            fileName: options.fileName,
            currentChunkIndex: options.currentChunkIndex,
            onAbort: options.onAbort,
            onProgress: options.onProgress,
            onError: options.onError,
            onComplete: options.onComplete,
            status: 'COMPLETE',
            percentage: (options.startingByte * 100) / file.size,
            progressElement: options.progressElement,
            file: file
          });
          clearDownloadProgress(encodeURI(file.name));
          // createUploadedFileList();
          removeFileList(file);
        } else {
          options.onProgress({
            // 여기서 스프레드 연산자(...) 대신 객체의 속성을 직접 복사합니다.
            url: options.url,
            startingByte: options.startingByte,
            fileName: options.fileName,
            currentChunkIndex: options.currentChunkIndex,
            onAbort: options.onAbort,
            onProgress: options.onProgress,
            onError: options.onError,
            onComplete: options.onComplete,
            status: 'UPLOADING',
            percentage: (options.startingByte * 100) / file.size,
            progressElement: options.progressElement,
            file: file
          });
        }
        callback(null);
      } else {
        // 다른 HTTP 상태 코드일 경우
        callback(new Error('Upload failed with status: ' + req.status));
      }
    };

    req.ontimeout = function() { options.onError(file); };
    req.onabort = function() { options.onAbort(file); };
    req.onerror = function() { options.onError(file); };

    fileRequests.get(file).request = req;

    req.send(formData);
  }

  var uploadFile = function(file, options) {
    // 스프레드 연산자 대신 수동으로 객체 속성 복사
    var extendedOptions = {
      url: options.url || defaultOptions.url,
      startingByte: options.startingByte || defaultOptions.startingByte,
      fileName: options.fileName || defaultOptions.fileName,
      currentChunkIndex: options.currentChunkIndex
          || defaultOptions.currentChunkIndex,
      onAbort: options.onAbort || defaultOptions.onAbort,
      onProgress: options.onProgress || defaultOptions.onProgress,
      onError: options.onError || defaultOptions.onError,
      onComplete: options.onComplete || defaultOptions.onComplete
    };

    fileRequests.set(file, {request: null, options: extendedOptions});
    uploadFileChunks(file, extendedOptions);
  }

  var abortFileUpload = function(file){
    var fileReq = fileRequests.get(file);

    if (fileReq && fileReq.request) {
      fileReq.request.abort();
      return true;
    }

    return false;
  };

  var resumeFileUpload = function(file) {
    var fileReq = fileRequests.get(file);

    if (fileReq) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', ENDPOINTS.UPLOAD_STATUS + '?fileName=' + encodeURIComponent(file.name), true);

      xhr.onload = function() {
        if (xhr.status === 200) {
          var res = JSON.parse(xhr.responseText);
          var updatedOptions = {
            url: fileReq.options.url,
            startingByte: Number(res.totalChunkUploaded),
            fileName: fileReq.options.fileName,
            currentChunkIndex: fileReq.options.currentChunkIndex,
            onAbort: fileReq.options.onAbort,
            onProgress: fileReq.options.onProgress,
            onError: fileReq.options.onError,
            onComplete: fileReq.options.onComplete
          };
          uploadFileChunks(file, updatedOptions);
        } else {
          console.log('error', xhr.statusText);
          fileReq.options.onError({ error: xhr.statusText, file: file });
        }
      };

      xhr.onerror = function() {
        console.log('Network error');
        fileReq.options.onError({ error: 'Network error', file: file });
      };

      xhr.send();
    }
  };

  var clearFileUpload = function(file) {
    var fileReq = fileRequests.get(file);

    if (fileReq) {
      abortFileUpload(file, function(success) {
        if (success) {
          fileRequests.delete(file);
          clearDownloadProgress(encodeURI(file.name));
          removeFileList(file);
        }
      });
    }
  };

// abortFileUpload 함수도 콜백을 받도록 수정
  var abortFileUpload = function(file, callback) {
    var fileReq = fileRequests.get(file);

    if (fileReq && fileReq.request) {
      fileReq.request.abort();
      callback(true);
    } else {
      callback(false);
    }
  };


  var removeFileList = function(file){
    var $fileUploader = document.getElementById('fileUploader');
    var childComponent = document.getElementById(file.name.slice(25));

    if ($fileUploader && childComponent) {
      $fileUploader.removeChild(childComponent);
    }
  }

  var progressBox = document.createElement('div');

  progressBox.className = 'upload-progress-tracker';
  progressBox.textContent = 'Uploading...';
  progressBox.innerHTML = `
				<div class="uploads-progress-bar" style="width: 0;"></div>
				<div class="file-progress-wrapper" style="width: 100%"></div>
			`;

  return function(files, options) {
    var filesArray = [];
    for (var i = 0; i < files.length; i++) {
      filesArray.push(files[i]);
    }

    filesArray.forEach(function(file) {
      uploadFile(file, options || defaultOptions);
    });

    return {
      abortFileUpload: abortFileUpload,
      resumeFileUpload: resumeFileUpload,
      clearFileUpload: clearFileUpload
    };
  };
})();

var uploadAndTrackFiles = (function() {
  var files = {}; // Map 대신 일반 객체 사용
  // var $progressArea = document.getElementsByClassName('progress-area')[0];
  var progressBox = document.createElement('div');
  var closetBtn = document.createElement('span')
  var uploader = null;

  closetBtn.className = 'close-btn';
  closetBtn.textContent = 'Close';

  progressBox.className = 'upload-progress-tracker';
  progressBox.innerHTML =
      '<div class="uploads-progress-bar" style="width: 0;"></div>' +
      '<div class="file-progress-wrapper" style="width: 100%"></div>';

  var setFileElement = function(file) {
    var fileElement = document.createElement('div');
    fileElement.className = 'file-progress';
    fileElement.innerHTML =
        '<div class="file-details" style="position: relative">' +
        '<p>' +
        '<span class="status">pending</span>' +
        '<span class="file-name">' + file.name.slice(25) + '</span>' +
        '<span class="file-ext"></span>' +
        '</p>' +
        '<div class="progress-bar" style="width: 0;"></div>' +
        '</div>' +
        '<div class="file-actions">' +
        '<button type="button" class="cancel-btn" style="display: none">Pause</button>' +
        '<button type="button" class="resume-btn" style="display: none">Resume</button>' +
        '<button type="button" class="clear-btn" style="display: none">Clear</button>' +
        '</div>';

    var fileActions = fileElement.children[1];
    var pauseBtn = fileActions.children[0];
    var resumeBtn = fileActions.children[1];
    var clearBtn = fileActions.children[2];

    files[file.name] = { // 파일 이름을 키로 사용
      element: fileElement,
      size: file.size,
      status: 'PENDING',
      percentage: 0,
      uploadedChunkSize: 0,
    };

    clearBtn.addEventListener('click', function() {
      uploader.clearFileUpload(file);
      delete files[file.name];
      fileElement.remove();
    });

    pauseBtn.addEventListener('click', function() {
      uploader.abortFileUpload(file);
    });

    resumeBtn.addEventListener('click', function() {
      uploader.resumeFileUpload(file);
    });

    closetBtn.addEventListener('click', function() {
      removeModal();
      unblurBackground();
      window.location.href = '/board/list'
    });

    progressBox.querySelector('.file-progress-wrapper').appendChild(fileElement);
    progressBox.appendChild(closetBtn);
    return fileElement;
  };

  function updateFileElement(fileObject) {
    var fileElementChildren = fileObject.element.children;

    // 첫 번째 자식 요소는 건너뛰고 두 번째 자식 요소의 자식들을 가져옵니다.
    var actionButtons = fileElementChildren[1].children;
    var pauseBtn = actionButtons[0];
    var resumeBtn = actionButtons[1];
    var clearBtn = actionButtons[2];

    var processBar = fileObject.element.getElementsByClassName('progress-bar')[0];

    processBar.style.width = fileObject.percentage + '%';
    processBar.style.background = 'green';
    pauseBtn.style.display = fileObject.status === 'UPLOADING' ? 'inline-block' : 'none';
    resumeBtn.style.display = fileObject.status === 'PAUSED' ? 'inline-block' : 'none';
    clearBtn.style.display =
        fileObject.status === 'COMPLETED' || fileObject.status === 'PAUSED' ? 'inline-block' : 'none';
  }

  function onComplete(file){
    var fileObj = files[file.file.name];

    fileObj.status = 'COMPLETED';
    fileObj.percentage = 100;

    updateFileElement(fileObj);
  }

  function onProgress(file){
    var fileObj = files[file.file.name];

    fileObj.status = 'UPLOADING';
    fileObj.percentage = file.percentage;

    updateFileElement(fileObj);
  }

  function onError(file){
    var fileObj = files[file.file.name];

    fileObj.status = 'FAILED';
    fileObj.percentage = 100;

    updateFileElement(fileObj);
  }

  function onAbort(file){
    var fileObj = files[file.file.name];
    fileObj.status = 'PAUSED';

    updateFileElement(fileObj);
  }

  return function(globalFileList) {
    for (var i = 0; i < globalFileList.length; i++) {
      globalFileList[i].element = setFileElement(globalFileList[i]);
    }
    document.body.appendChild(progressBox);
    blurBackground();
    uploader = uploadFiles(globalFileList, {
      onProgress: onProgress,
      onError: onError,
      onAbort: onAbort,
      onComplete: onComplete
    });
  };
})();

var fileInput = document.getElementsByClassName('submitBtn');


// 파일 업로드 시작
fileInput[0].addEventListener('click', function(e) {
  e.preventDefault();

  if(globalFileList.length === 0) {
    requestJavaToSave();
  }else {
    checkProgressedFiles()
    .then(() => {
      uploadAndTrackFiles(globalFileList);
      globalFileList.length = 0;
    })
    .then(requestJavaToSave())
    .catch((e) => {
      console.log('error', e);
    });
  }

  async function checkSavedServerFiles(fileName) {
    let saveFileSize = 0;
    const url = `http://10.10.0.157:1234/upload-status?fileName=${fileName}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      saveFileSize = data.totalChunkUploaded;
    } catch (error) {
      console.error('Error:', error);
    }

    return saveFileSize;
  }

  async function checkProgressedFiles() {
    const localStorageList = [];
    let progressedFileString = '';

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i).slice(25);
      const value = localStorage.getItem(localStorage.key(i));
      localStorageList.push({ key, value });
    }


    for (let i = 0; i < globalFileList.length; i++) {
      for (let j = 0; j < localStorageList.length; j++) {
        if (
            globalFileList[i].name.slice(25) === localStorageList[j].key &&
            Number(globalFileList[i].originLastModified) === Number(localStorageList[j].value.split('|')[3]) &&
            globalFileList[i].size === Number(localStorageList[j].value.split('|')[2])
        ) {
          const newFileName = localStorage.key(j);
          const newFile = new File([globalFileList[i]], newFileName, {
            type: globalFileList[i].type,
          });

          globalFileList[i] = newFile;
          globalFileList[i].startingByte = await checkSavedServerFiles(newFileName);

          progressedFileString += globalFileList[i].name.slice(25) + ' ';
          break;
        }
      }
    }

    if (progressedFileString.length !== 0) {
      alert(`${progressedFileString} 파일은 이전에 업로드가 진행되었던 파일입니다. 이어서 업로드를 진행합니다.`);
    }
  }

});


// 이어올리기 로컬스토리지
function setDownloadProgress(fileName, bytesDownloaded) {
  localStorage.setItem(fileName, bytesDownloaded.toString());
}

function clearDownloadProgress(fileName) {
  localStorage.removeItem(decodeURIComponent(fileName));
}

function blurBackground() {
  // body의 모든 자식 요소에 블러 스타일 적용RF
  const bodyChildren = document.body.children;
  for (let i = 0; i < bodyChildren.length; i++) {
    if (bodyChildren[i].className !== 'upload-progress-tracker') {
      bodyChildren[i].style.filter = 'blur(8px)';
    }
  }
}

function removeModal() {
  const modal = document.getElementsByClassName('upload-progress-tracker');
  if (modal) {
    document.body.removeChild(modal[0]);
  }

  unblurBackground();
}

function unblurBackground() {
  // 블러 스타일 제거
  const bodyChildren = document.body.children;
  for (let i = 0; i < bodyChildren.length; i++) {
    bodyChildren[i].style.filter = '';
  }
}

// 자바서버 요청 로직
function requestJavaToSave(){
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
        files.filename = row.name.slice(25);
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
  }).catch((error) => console.error('Error fetching files:', error));
}
