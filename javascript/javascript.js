setTimeout(function () {
  document.getElementById("introDiv").style.display = "none";

  document.getElementById("mainContentDiv").style.display = "block";
}, 5000);

window.addEventListener("load", () => {
  document.querySelector(".introHeading").classList.add("open");
});
