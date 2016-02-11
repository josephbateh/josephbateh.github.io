
//This function makes the loading bar on my main page work.
//It loads at 10 percent for every second
(function() {
  var percent = 0;
  var loadSpeed = 10;
  var loadingBar = document.getElementById("loadingBar");
  var loadingText = document.getElementById("loadingText");

  window.setInterval(changeLoad, 1000);

  function changeLoad() {
    percent = percent + loadSpeed;
    if(percent >= 100) {
      loadingBar.style.width = "100%";
      loadingText.innerText = "Completed!";
      loadingBar.className = "progress-bar progress-bar-danger progress-bar-striped";
      window.clearInterval(changeLoad);
      document.getElementById("dangerZoneVideo").style.display = "block";
		document.getElementById("virusDownload").style.display = "none";
      return;
    }
    loadingBar.style.width = percent + "%";
    loadingText.innerText = percent + "%";
  }
})();
