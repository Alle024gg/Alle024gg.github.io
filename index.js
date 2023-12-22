//variabile publice
var activePage = "projects";

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
  showPage("home");
}

function showSkills() {
  hide(activePage);
  show("skills");
  activePage = "skills";
}

function showProjects() {
  hide(activePage);
  show("projects");
  activePage = "projects";
}

function showLanguages() {
  hide(activePage);
  show("languages");
  activePage = "languages";
}

function initEvents() {
  var toolbar = document.querySelector("#top-menu-bar");
  toolbar.addEventListener("click", function (e) {
    var page = e.target.innerHTML.toLowerCase();
    console.warn("event", page);
    showPage(page);
  });
}

//executii
