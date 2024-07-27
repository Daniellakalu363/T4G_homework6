// when the user enters the explore button on the homepage
//it takes their name
function changeColor(){
    let name =prompt("What is your name?");
    let head=document.getElementById("head");
    // head.style.overscrollBehavior="hover";
    if (name === null){
        head.style.cursor="pointer";
        head.innerHTML=`👋👋Hi there Welcome to African Choice`;
        let browse=document.getElementById("browse");
        browse.innerHTML=`Welcome there Taste The Raw Goodness Of Africa`;
      
    } else {
    head.style.cursor="pointer";
    head.innerHTML=`👋👋Hi ${name} Welcome to African Choice`;
    let browse=document.getElementById("browse");
    browse.innerHTML=`Welcome ${name} Taste The Raw Goodness Of Africa`;
}
}
letlinking=document.getElementById("linking");
linking.addEventListener(`mouseenter`,changeColor);


// function purpose is that when the user enters an image it should reduces
// Also its sizes and when it leaves the image it will increases its size

                            //   ONE ID
function size() {    //increase size for one id
    let increase=document.getElementById(`oneid`);
    increase.style.width=("300pt");

}

let increase=document.getElementById("oneid");
increase.addEventListener("mouseleave",size);

function changeShape(){     //seondly will change the size for the first image
    let oneid=document.getElementById(`oneid`);
    oneid.style.width=("95%");   
    oneid.style.transitionDuration = "800ms";

}

let oneid=document.getElementById("oneid");
oneid.addEventListener("mouseenter",changeShape);

                    //    //TWO ID                 
function changeSize(){        //reduces size for second image
    let twoid=document.getElementById(`twoid`);
    twoid.style.width=("250pt");

}
let twoid=document.getElementById("twoid");
twoid.addEventListener("mouseenter",changeSize);


function sizesecond(){    //increase size for second image
    let increasedsecond=document.getElementById("twoid");
    increasedsecond.style.width=("100%");
    twoid.style.transitionDuration = "800ms";
}
let decreasesecond=document.getElementById("twoid");
decreasesecond.addEventListener("mouseleave",sizesecond);


                       //THREE ID
function red(){    //reduces size for third image
    let threeid=document.getElementById(`threeid`);
    threeid.style.width=("250pt");

}
let threeid=document.getElementById("threeid");
threeid.addEventListener("mouseenter",red);


function sizethird(){    //increase size for third image
    let increasedthird=document.getElementById("threeid");
    increasedthird.style.width=("100%");
    threeid.style.transitionDuration = "800ms";
}
let increasethird=document.getElementById("threeid");
increasethird.addEventListener("mouseleave",sizethird);


                                    //FOUR ID
function yellow(){       //reduces size for forth image
    let leave=document.getElementById(`fourid`);
    leave.style.width=("250pt");

}
let fourid=document.getElementById("fourid");
fourid.addEventListener("mouseenter",yellow);


function sizefour(){    //increase size forth image
    let increasedfour=document.getElementById("fourid");
    increasedfour.style.width=("100%");
    fourid.style.transitionDuration = "800ms";
}
let increasefour=document.getElementById("fourid");
increasefour.addEventListener("mouseleave",sizefour);

                         //FIRTH ID
 function steam(){    //reduces size for firth image
    let leave=document.getElementById(`fiveid`);
    leave.style.width=("250pt");

}
let fiveid=document.getElementById("fiveid");
fiveid.addEventListener("mouseenter",steam);


function sizefirth(){    //increase size firth image
    let increasedfirth=document.getElementById("fiveid");
    increasedfirth.style.width=("100%");
    fiveid.style.transitionDuration = "800ms";
}
let increasefirth=document.getElementById("fiveid");
increasefirth.addEventListener("mouseleave",sizefirth);


                   //SIXTH ID
function last(){       //reduces size for sixth image
    let leave=document.getElementById(`sixthid`);
    leave.style.width=("250pt");

}
let sixthid=document.getElementById("sixthid");
sixthid.addEventListener("mouseenter",last);


function sizesixth(){    //increase size sixth image
    let increasedsixth=document.getElementById("sixthid");
    increasedsixth.style.width=("100%");
    sixthid.style.transitionDuration = "800ms";
}
let increasedsixth=document.getElementById("sixthid");
increasedsixth.addEventListener("mouseleave",sizesixth);




//button to show more images and show less images
//showmore
function loadMore(){
    let reveal=document.getElementById("photo");
    reveal.style.display=("block");
    reveal.style.display=("flex");
    reveal.style.flexWrap="wrap"
    reveal.style.justifyContent="space-around";
    let missing =document.getElementById("extra");
    missing.style.display="none";
    let hide=document.querySelector(".less");
    hide.style.display="block";

}
let extra=document.getElementById("extra");
extra.addEventListener("click",loadMore);


//showless
function hide(){
    let lessimage=document.getElementById("photo");
    lessimage.style.display="none";
    let disappear=document.querySelector(".less");
    disappear.style.display="none";
    let here=document.getElementById("extra");
    here.style.display="flex";

}
let off=document.querySelector(".less");
off.addEventListener("click",hide);




// const signupForm = document.getElementById('signup-form');

// signupForm.addEventListener('submit', function(event) {
//   // Email validation
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   const emailInput = document.getElementById('email');
//   const emailValue = emailInput.value;

//   if (!emailRegex.test(emailValue)) {
//     event.preventDefault();
//     alert('Please enter a valid email address.');
//     return;
//   }

//   // Password complexity validation
//   const passwordInput = document.getElementById('password');
//   const passwordValue = passwordInput.value;

//   const hasUpperCase = /[A-Z]/.test(passwordValue);
//   const hasLowerCase = /[a-z]/.test(passwordValue);
//   const hasNumber = /[0-9]/.test(passwordValue);
//   const hasSymbol = /[^\w\s]/.test(passwordValue);
//   const isLongEnough = passwordValue.length >= 8;

//   if (!hasUpperCase || !hasLowerCase || !hasNumber || !hasSymbol || !isLongEnough) {
//     event.preventDefault();
//     alert('Password must be at least 8 characters and include uppercase, lowercase, numbers, and symbols.');
//     return;
//   }

//   // If validation passes, allow form submission (optional: add code to submit the form data)
//   console.log('Form submitted successfully!'); // Example for successful submission
// });

// let email=document.forms[`form`][`email`];
// let password=document.forms[`form`][`password`];

// let email_error =document.getElementById(`email_error`);
// let pass_error =document.getElementById(`pass_error`);

// email.addEventListener(`textInput`,email_Verify);
// password.addEventListener(`textInput`,email_Verify);

// function validated(){
    // if(email.value.length <9) {
    //     email.style.border ="1px solid red";
    //     email_error.style.display ="block";
    //     email.focus();
    //     return false;
    // }
// }

// function validation(){
//     if(password.value.length <6) {
//         password.style.border ="1px solid red";
//         password_error.style.display ="block";
//         password.focus();
//         return false;
//     }
// }
             
// function email_Verify(){
//     if(password.value.length >=8) {
//         password.style.border ="1px solid red";
//         password_error.style.display ="none";;
//         password.focus();
//         return true;
//     }
// }
                 
                        




    




 
