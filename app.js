const submitBtn = document.querySelector(".submit");
const emailInput = document.querySelector(".email");
const inputContainer = document.querySelector(".input-field");
const errorIcon = document.querySelector(".error-icon");

submitBtn.addEventListener("click", toValidate); 

function toValidate(){
    emailValue = emailInput.value.trim(); 
    if(emailValue === "" ||  emailValidator(emailValue) === false){ 
        toError();
        submitBtn.disable = true; 
    }
}


function toError(e){
    inputContainer.classList.add("invalid");
    errorIcon.style.display = "inline-block";
 
}


function emailValidator(email) {
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}