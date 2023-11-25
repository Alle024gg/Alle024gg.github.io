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

  typeof skills;
  console.debug("tipul variabilei skills", typeof skills);
}

function updateTitle() {
  var job = document.getElementById("job-title");
  console.warn("job:", job, title);
  console.info(typeof job);

  job.innerHTML = title;
}
variablesExamples();

updateTitle("Developer");
