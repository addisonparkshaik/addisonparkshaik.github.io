const student = {
Name: "Hassain",
Studying: "masters",
Year: "2025",
description: function() {
return "Name: " + this.Name + ", Studying: " + this.Studying + ", Year: " +
this.Year;
}
};
function show_student_info() {
document.getElementById("demo_div").innerHTML = student.description();
}
function insert() {
student.Name = document.getElementById("Name").value;
student.Studying = document.getElementById("Studying").value;
student.Year = document.getElementById("Year").value;
}
