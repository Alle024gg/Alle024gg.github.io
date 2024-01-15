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
  // = de la document da-mi skills ul
  var ul = document.querySelector("#skills ul");
  //aray
  var skills = [
    {
      name: "html",
      endorcements: 6,
      favorite: true,
    },
    {
      name: "css",
      endorcements: 5,
    },
    {
      name: "js",
      endorcements: 4,
      favorite: true,
    },

    {
      name: "word",
      endorcements: 1,
      favorite: false,
    },
  ];

  var text = skills.map(function (skill) {
    var cls = "";
    if (skill.favorite == true) {
      cls = "favorite";
    }

    console.info("%o (%o)", skill.name, cls);
    return `<li class="${cls}">${skill.name} <span> - ${skill.endorcements}</span></li>`;
  });
  console.warn(text);

  ul.innerHTML = text.join("");
}

// excutii

showSkills();
showPage(activePage);
initEvents();

//exercitii
