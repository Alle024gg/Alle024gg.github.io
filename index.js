var activePage = "Projects";

function show(id) {
  console.info("show", id);

  var page = document.getElementById(id);
  console.info("page", page);
  page.style.display = "block";
}
//functii pubice
function hide(id) {
  console.info("hide", id);
  document.getElementById(id).style.display = "none";
}

function showPage(id) {
  console.info("show page", id);
  hide(activePage);
  show(id);
  activePage = id;
}

function showHOME() {
  showPage("HOME");
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

//executii
showPage(activePage);
