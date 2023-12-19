let url = ''

  window.addEventListener('message', function (e) {
    console.log(e.data.url)
    url = e.data.url

    if (url === '/board/read') {
      console.log('read')
      const $script1 = document.createElement('script');
      const $div = document.createElement('div');
      $script1.src = '/js/read.js';
      $div.className = 'contentArea'
      document.body.appendChild($div);
      document.body.appendChild($script1);
    } else {
      console.log('else')
      const $script = document.createElement('script');
      const $div = document.createElement('div');

      $script.src = '/js/editor/PracEditor-config/loadscripts.js';
      $div.className = 'mainArea'
      document.body.appendChild($div);
      document.body.appendChild($script);
    }

    if (document.getElementsByClassName("contentArea").length > 0) {
      document.getElementsByClassName("contentArea")[0].innerHTML = board.content;
    }
  });

