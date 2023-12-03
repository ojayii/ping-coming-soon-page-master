const formData = document.getElementById("form-data");
const emailAdd = document.querySelector("input[type='email']");
const submit = document.querySelector("input[type='submit']");
let errormsg = document.getElementById("errormsg");
const emailReg = /^[(\w\d\W)+]+@[\w+]+\.[\w+]+$/i;

submit.addEventListener("click", (e) => {
  e.preventDefault();

  if (emailReg.test(emailAdd.value)) {
  } else if (emailAdd.value === "") {
    errormsg.innerHTML="Whoops! It looks like you forgot to add your email"
    errormsg.style.display="block";
    emailAdd.style.borderColor="red"
  } else {
    errormsg.innerHTML="Please provide a valid email address"
    errormsg.style.display="block";
    emailAdd.style.borderColor="hsl(354, 100%, 66%)"
  }
});

formData.addEventListener("input", function() {
    errormsg.innerHTML=""
    errormsg.style.display="none";
    emailAdd.style.borderColor=""
})