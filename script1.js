

function validateForm(){


  var nameInput = document.querySelector("#name");
  var email = document.querySelector("#email");
  var message = document.querySelector("#message");
  var success = document.querySelector("#success");
  var errorNodes = document.querySelectorAll(".error");


  clearMessags();

  

  
    console.log (nameInput)
    if(nameInput.value.length < 1){
        errorNodes[0].innerText = "You need to type your Name";
        nameInput.classList.add("error-border");
    }

    if(emailIsValid(email.value)){
      errorNodes[1].innerText = "Invalid Email";
      nameInput.classList.add("error-border");
  }
  
  
  
}

function clearMessags(); {

  for(let i=0; i < errorNodes.length; i++ ){
    errorNodes[i].innerText = "";
  
  nameInput.classList.remove("error-border");
}
}