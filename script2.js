function validateForm() {
  // console.log("im here");

  const Form = document.getElementById("Form");
  const email = document.getElementById("Email");
  const password = document.getElementById("Password");
  const retype = document.getElementById("ReType");
  const FirstName = document.getElementById("FirstName");
  const lastname = document.getElementById("LastName");
  const radio = document.getElementById("RadioOne");
  const country = document.getElementById("Country");
  const termone = document.getElementById("TermConone");
  const termtwo = document.getElementById("TermContwo");
  const errorElement = document.getElementById("erro");
  const btn = document.getElementById("btn");
  
  let messages = [];
  if(termone.value=="" || termone.value == null){
    messages.push("Agree to the terms& Condition")
  }
  if (email.value ==="" || email.value===null){
    messages.push("Enter your Email address")
  } 

  if (password.value ==="" || password.value===null){
    messages.push("Please enter your correct password")
  } 

  if (password.value.length <= 6) {
    messages.push("password must be longer than 6 characters");
  }
  if (password.value.length >= 20) {
    messages.push("password must be less than 20 characters");
  }

  if (retype.value === "" || reset.value === null) {
    messages.push("Re-type password");
  }

  if (retype.value != password.value) {
    
    messages.push("password must be the same");
  }


  if (FirstName.value === "" || FirstName.value == null) {
    messages.push("First  Name is required");
  }

  if (lastname.value === "" || lastname.value == null) {
    messages.push("last Name is required");
  }

  // if (country.value === "" || country.value == null) {
  //   messages.push("Please select your country");
  // }



  if (messages.length > 0) {
    errorElement.innerText = messages.join(",");
  }

  // console.log(messages);

  return messages;
}

//   function checkInput(){
//   // get thr value from the input
//   const firstnamevalue = firstname.Value.trim();
//   const passwordvalue =password.value.trim();
//   const restvalue = reset.value.trim();

// if(firstnamevalue === ""){
//   setErrorFor(firstname, "name  is required");
// }else{
//   setSuccessfor(firstname);
// }
//  }

// function setErrorFor(input,message){
// const nameinfo = input.parentElement;
// const small =  nameinfo.querySelctor("small");
// small.innerText = message;
// formControl.className = "form-control erro"
// }

// function setSuccessfor(input){
//   const formControl = first-input.parentElement;
//   formControl.className = "form-control succes"
// }
