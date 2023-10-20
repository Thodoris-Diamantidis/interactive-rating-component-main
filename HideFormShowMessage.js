const form = document.getElementById('form');
const submitbtn = document.getElementById('submitbtn');
const thankyou = document.getElementById('thankyou');

submitbtn.addEventListener("click", (event) => {
    event.preventDefault();

    form.style.display = "none";

    thankyou.style.display = "grid";
})