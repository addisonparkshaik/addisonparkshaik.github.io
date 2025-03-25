function calculate_age() {
const date = new Date();
let current_year = date.getFullYear();
let current_month = date.getMonth(); // 0-based index (0 = January)
let current_day = date.getDate();
let dob = new Date(document.getElementById("dob_input").value);
let dob_year = dob.getFullYear();
let dob_month = dob.getMonth(); // 0-based index
let dob_day = dob.getDate();
let age = current_year - dob_year;
let msg = "You are " + age + " year(s) old!";
document.getElementById("output_div").innerHTML = msg;
}
