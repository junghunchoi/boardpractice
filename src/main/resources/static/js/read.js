function filesDownload(){
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
}
