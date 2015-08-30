
//This function makes the loading bar on my main page work.
//It loads at 1 percent for every 75 milliseconds
(function() {
  var percent = 0;
  var loadSpeed = 1;
  var loadingBar = document.getElementById("loadingBar");
  var loadingText = document.getElementById("loadingText");

  window.setInterval(changeLoad, 75);

  function changeLoad() {
    percent = percent + loadSpeed;
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
