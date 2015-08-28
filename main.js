

(function() {
  var percent = 0;
  var loadingBar = document.getElementById("loadingBar");
  var loadingText = document.getElementById("loadingText");

  window.setInterval(changeLoad, 100);

  function changeLoad() {
    percent = percent + 2;
    if(percent >= 100) {
      loadingBar.style.width = "100%";
      loadingText.innerText = "Completed!";
      loadingBar.className = "progress-bar progress-bar-info progress-bar-striped";
      window.clearInterval(changeLoad);
      document.getElementById("uniqueId").style.display = "block";
      return;
    }
    loadingBar.style.width = percent + "%";
    loadingText.innerText = percent + "%";
  }
})();
