function show(id) {
  console.info("show", id);

  var page = document.getElementById(id);
  console.info("page", page);
  page.style.display = "block";
}

function hide(id) {
  console.info("hide", id);
  document.getElementById(id).style.display = "none";
}

function showHOME() {
  hide("Skills");
  hide("Projects");
  hide("Languages");

  show("HOME");
}

function showSkills() {
  hide("HOME");
  hide("Projects");
  hide("Languages");

  show("Skills");
}

function showProjects() {
  hide("HOME");
  hide("Skills");
  hide("Languages");

  show("Projects");
}

function showLanguages() {
  hide("HOME");
  hide("Skills");
  hide("Projects");

  show("Languages");
}
