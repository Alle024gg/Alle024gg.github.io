// variable publice
var activePage = "skills";

// functii publice
function hide(id) {
  console.info("hide", id);
  document.getElementById(id).style.display = "none";
}

function show(id) {
  console.info("show", id);
  var page = document.getElementById(id);
  console.debug("show page", page);
  page.style.display = "block";
}

function showPage(id) {
  console.info("show page", id);
  var prevLink = document.querySelector("a[data-page=" + activePage + "]");
  prevLink.classList.remove("active");
  hide(activePage);

  var nextLink = document.querySelector(`a[data-page=${id}]`);
  nextLink.classList.add("active");
  show(id);
  activePage = id;
}

function initEvents() {
  var toolbar = document.querySelector("#top-menu-bar");
  toolbar.addEventListener("click", function (e) {
    if (e.target.matches("a")) {
      var page = e.target.dataset.page;
      console.warn("click", page);
      showPage(page);
    }
  });
}

function showSkills() {
  var ul = document.querySelector("#skills ul");

  var skills = [
    "Artistic Skills:",
    "Painting",
    "Jewelry Making",
    "Sketching and Illustration",
    "Graphic Design (logos, promotional materials, graphics for various products)",
    "",
    "Design and Digital Graphics:",
    "Animation and digital illustrations ",
    "Creating and printing designs for personalized products",
    "",
    "Technical Skills and Education:",
    "Studies in Marketing and Management (Bachelor's and Master's degrees)",
    "Skills in time and project management",
    "Experience in sales and entrepreneurship",
    "Teaching certification",
    "",
    "Other Skills:",
    "Knowledge of programming and web design (HTML, CSS, JavaScript)",
    "Multitasking and time management abilities",
    "Capability to work under pressure and self-motivate",
    "Communication and teamwork skills",
    "Experience in using online business platforms and tools",
  ];

  var text = skills.map(function (skill) {
    console.info("inside %o map", skill);
    return `<li>${skill}</li>`;
  });
  console.warn(text);

  ul.innerHTML = text.join("");
}

// excutii

showSkills();
showPage(activePage);
initEvents();

//exercitii
