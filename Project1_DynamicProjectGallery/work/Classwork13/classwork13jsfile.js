const student = {
name: "Hassain.shaik",
id: "12345",
cgpa: "3.8",
description: function(){
return "Student Name: " + this.name + "<br>Student ID: " + this.id + "<br>CGPA: " +
this.cgpa;
}
};
let students = [student];
function show_student_info(){
let displayText = "";
students.forEach(student => {
displayText += "<p>" + student.description() + "</p>";
});
document.getElementById("demo_div").innerHTML = displayText;
}
function insert(){
let name_value = document.getElementById("name").value;
let id_value = document.getElementById("id").value;
let cgpa_value = document.getElementById("cgpa").value;
}
let new_student = {
name: name_value,
id: id_value,
cgpa: cgpa_value,
description: function (){
return "Student Name: " + this.name + "<br>Student ID: " + this.id + "<br>CGPA: " +
this.cgpa;
}
}
students.push(new_student);
