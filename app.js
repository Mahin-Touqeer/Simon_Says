let logIn=document.querySelector(".logIn");
let signUp=document.querySelector(".signUp");
let log=document.querySelector(".log");
let sgn=document.querySelector(".sgn");
let change=function(){
    logIn.classList.remove("logInGoes");
    logIn.classList.add("logInComes");
    logIn.classList.remove("logInFront");
    signUp.classList.add("signUpFront");
    // setTimeout(function(){
    //     logIn.classList.remove("logInComes");
    //     logIn.classList.add("logInRotate");
    // },750);
}
let change2=function(){
    signUp.classList.remove("signUpGoes");
    signUp.classList.add("signUpComes");
    signUp.classList.remove("signUpFront");
    logIn.classList.add("logInFront");
    // setTimeout(function(){
    //     signUp.classList.remove("signUpComes");
    //     signUp.classList.add("signUpRotate");
    // },750);
}
let func1=function(){
    logIn.classList.add("logInGoes");
    signUp.classList.remove("signUpComes");
    // signUp.classList.remove("signUpRotate");
    setTimeout(change,750);
}
let func2=function(){
    signUp.classList.add("signUpGoes");
    // logIn.classList.remove("logInRotate");
    logIn.classList.remove("logInComes");
    setTimeout(change2,750);
}
sgn.addEventListener("click",func1);
log.addEventListener("click",func2);




let userName=document.querySelector(".userName");
let password=document.querySelector(".password");
let label_1=document.querySelector(".usr label");
let label_2=document.querySelector(".pass label");


userName.addEventListener("focusin",function(){
    label_1.style.transform="translateY(-150%)";
})
userName.addEventListener("focusout",function(){
    if(userName.value.trim()==""){
    label_1.style.transform="translateY(-50%)";
    userName.value="";
    }
})
password.addEventListener("focusin",function(){
    label_2.style.transform="translateY(-150%)";
})
password.addEventListener("focusout",function(){
    if(password.value.trim()==""){
    label_2.style.transform="translateY(-50%)";
    password.value="";
    }
})

let userName2=document.querySelector(".userName2");
let password2=document.querySelector(".password2");
let email=document.querySelector(".email");

let label_3=document.querySelector(".usr2 label");
let label_4=document.querySelector(".pass2 label");
let label_5=document.querySelector(".eml label");

userName2.addEventListener("focusin",function(){
    label_3.style.transform="translateY(-150%)";
})
userName2.addEventListener("focusout",function(){
    if(userName2.value.trim()==""){
    label_3.style.transform="translateY(-50%)";
    userName2.value="";
    }
})
password2.addEventListener("focusin",function(){
    label_4.style.transform="translateY(-150%)";
})
password2.addEventListener("focusout",function(){
    if(password2.value.trim()==""){
    label_4.style.transform="translateY(-50%)";
    password2.value="";
    }
})
email.addEventListener("focusin",function(){
    label_5.style.transform="translateY(-150%)";
})
email.addEventListener("focusout",function(){
    if(email.value.trim()==""){
    label_5.style.transform="translateY(-50%)";
    email.value="";
    }
})