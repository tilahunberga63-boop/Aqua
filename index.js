const form = document.getElementById("reportForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(e){

    e.preventDefault();

    message.innerHTML = "Report submitted successfully!";

    form.reset();

});