function showHOME() {
  document.getElementById("Skills").style.display = "none";
  document.getElementById("Projects").style.display = "none";
  document.getElementById("Languages").style.display = "none";

  var page = document.getElementById("HOME");
  page.style.display = "block";
}

function showSkills() {
  document.getElementById("HOME").style.display = "none";
  document.getElementById("Projects").style.display = "none";
  document.getElementById("Languages").style.display = "none";

  var page = document.getElementById("Skills");
  page.style.display = "block";
}

function showProjects() {
  document.getElementById("HOME").style.display = "none";
  document.getElementById("Skills").style.display = "none";
  document.getElementById("Languages").style.display = "none";

  var page = document.getElementById("Projects");
  page.style.display = "block";
}

function showLanguages() {
  document.getElementById("HOME").style.display = "none";
  document.getElementById("Skills").style.display = "none";
  document.getElementById("Projects").style.display = "none";

  var page = document.getElementById("Languages");
  page.style.display = "block";
}
