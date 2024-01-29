// variable publice globale
let activePage = "skills";

// functii publice

function $(selector) {
  const el = document.querySelector(selector);
  //console.info("% found:", selector, el);
  return el;
}

function hide(id) {
  //  console.info("hide", id);
  $("#" + id).style.display = "none"; // ## face acelasi lucru cu urmatorul rand, cod<== inlocuieste cod --->
  //document.getElementById(id).style.display = "none";//
}

function show(id) {
  // console.info("show", id);
  const page = $(`#${id}`); // forma scurtata ca cea de mai sus ##
  // console.debug("show page", page);
  page.style.display = "block";
}

function showPage(id) {
  // console.info("show page", id);
  const prevLink = $("a[data-page=" + activePage + "]");
  prevLink.classList.remove("active");
  hide(activePage);

  const nextLink = $(`a[data-page=${id}]`);
  nextLink.classList.add("active");
  show(id);
  activePage = id;
}
//meniu
function initEvents() {
  const toolbar = $("#top-menu-bar");
  toolbar.addEventListener("click", function (e) {
    if (e.target.matches("a")) {
      const page = e.target.dataset.page;
      console.warn("click %0", page);
      showPage(page);
    }
  });
}

function sortSkillsByEndorcements(a, b) {
  console.info("sort", a, b);
  return b.endorcements - a.endorcements;
}

function sortByName(a, b) {
  return a.name.localeCompare(b.name);
}

function showSkills(skills) {
  // skills.sort(sortSkillsByEndorcements);
  skills.sort(sortByName);
  const ul = $("#skills ul");

  const text = skills.map(function (skill) {
    let cls = "";
    if (skill.favorite == true) {
      cls = "favorite";
    }

    console.info("%o (%o)", skill.name, cls);
    return `<li class="${cls}">${skill.name} <span> - ${skill.endorcements}</span></li>`;
  });

  console.warn(text);

  ul.innerHTML = text.join("");
}

function loadSkills() {
  fetch("skills.json").then(function (r) {
    r.json().then(function (skills) {
      showSkills(skills); //array
    });
  });
}

// executii
//showSkills([]);
//start executie
showPage(activePage);
initEvents();
loadSkills();

//exercitii
