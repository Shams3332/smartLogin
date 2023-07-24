
var signName = document.getElementById("signName");
var signEmail = document.getElementById("signEmail");
var signPass = document.getElementById("signPass");
var signbtn = document.getElementById("signbtn");

var emailInput = document.getElementById("emailInput");
var passInput = document.getElementById("passInput");
var btn = document.getElementById("btn");

var welcome = document.getElementById("welcome");
var logout = document.getElementById("logout");

var userName = document.getElementById("userName")



if(localStorage.getItem('signupData') == null){
  var signList =[];

}
else{
  signList = JSON.parse(localStorage.getItem('signupData'));
}




function signUp(){
  var signData =
  {
    fname :signName.value,
    email:signEmail.value,
    pass:signPass.value,
  };

  signList.push(signData);

  var x = JSON.stringify(signList);
  localStorage.setItem('signupData', x);


  clear();
  
}


// function check(){

//   var x =true;
//   for(var i =0; i<signList.length; i++){
//   if(signEmail.value == signList[i].email){
//     alert("exist");
//     return false;
//   }
  
// }
// if(x=false){
//   alert("sucess");
//   return true;
// }
// }



if(signbtn != null){
  signbtn.addEventListener('click', signUp);
}


function clear(){
  signName.value ="";
  signEmail.value="";
  signPass.value ="";

}

function signIn(){

for(var i=0; i<signList.length; i++){
  if(emailInput.value === signList[i].email && passInput.value === signList[i].pass){

    welcome.setAttribute('href','login.html');
    
  
  }
}
}



if(btn != null){
  btn.addEventListener('click', signIn);
}


function logOut(){
  logout.setAttribute('href','index.html')
}

if(logout !=null){
logout.addEventListener('click', logOut);
}

function user(){
  for(var i =0; i<signList.length; i++){
    userName.innerHTML =signList[i].fname;
  }
};

user();


