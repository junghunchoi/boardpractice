document.querySelector((".pagination")).addEventListener("click", function (e) {
  e.preventDefault();
  e.stopPropagation();

  const target = e.target;

  if(target.tagName !== "A"){
    return
  }

  const num = target.getAttribute("data-num")

  self.location = `/board/list?page=${num}`
}, false)