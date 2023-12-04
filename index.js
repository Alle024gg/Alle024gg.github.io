var activePage = "Projects";

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
  hide(activPage);
  show("HOME");
  activePage = "HOME";
}

function showSkills() {
  hide(activePage);
  show("Skills");
  activePage = "Skills";
}

function showProjects() {
  hide(activePage);
  show("Projects");
  activePage = "Projects";
}

function showLanguages() {
  hide(activePage);
  show("Languages");
  activePage = "Languages";
}
