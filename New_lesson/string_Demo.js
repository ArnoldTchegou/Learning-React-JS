//creating html templates
const title = "book";
let html = `<h2>${title}</h2>`;
//callbacks & foreach
let students = ["student1", "student2", "student3", "student4"];
const ul = document.querySelector(".students");
const log_student = (e, index) => {
  html += `<li style = "color :red">${e} with index ${index}</li>`;
};
students.forEach(log_student);
ul.innerHTML = html;
