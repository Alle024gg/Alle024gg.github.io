function hide(id) {
  console.info("hide", id);
  document.getElementById(id).style.display = "none";
}

function showHOME() {
  hide("skills");
  hide("Projects");
  hide("Languages");

  var page = document.getElementById("HOME");
  page.style.display = "block";
}

function showSkills() {
  hide("HOME");
  hide("Projects");
  hide("Languages");

  var page = document.getElementById("Skills");
  page.style.display = "block";
}

function showProjects() {
  hide("HOME");
  hide("Skills");
  hide("Languages");

  var page = document.getElementById("Projects");
  page.style.display = "block";
}

function showLanguages() {
  hide("HOME");
  hide("Skills");
  hide("Projects");

  var page = document.getElementById("Languages");
  page.style.display = "block";
}
