function variablesExamples() {
  console.info(2 + 3);
  console.warn("Alexandra");

  var employed = true;
  var age = 18;
  console.log("angajat:", employed);
  employed = false;
  console.log("angajat:", employed);
  employed = "da";
  console.log("angajat:", employed);

  var skills = ["html", "css"];
  console.debug("tipul variabilei skills", typeof skills);

  var job = document.getElementById("job-title");
  console.warn("job", job);
  console.info(typeof job);
}

function updateTitle(title) {
  var job = document.getElementById("job-title");
  console.warn("job", job, title);
  console.info(typeof job);
  job.innerHTML = title;
}
variablesExamples();
updateTitle("Developer");

window.onscroll = function () {
  myFunction();
};

// var navbar = document.getElementById("navbar");

// var sticky = navbar.offsetTop;
// function myFunction() {
//   if (window.pageY0ffset >= sticky) {
//     navbar.classList.add("sticky");
//   }
// }
