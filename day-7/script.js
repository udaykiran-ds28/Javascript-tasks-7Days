
// function User(name) {
//   this.name = name;
// }

// User.prototype.getName = function () {
//   return this.name;
// };
// if (!Array.prototype.includes) {
//   Array.prototype.includes = function (element) {
//     for (let i = 0; i < this.length; i++) {
//       if (this[i] === element) {
//         return true;
//       }
//     }
//     return false;
//   };
// }

// function Visitor(name, visitCount) {
//   User.call(this, name); // inherit properties
//   this.visitCount = visitCount;
// }

// Visitor.prototype = Object.create(User.prototype);
// Visitor.prototype.constructor = Visitor;

// Visitor.prototype.getGreeting = function () {
//   return `Hello ${this.name}, this is your ${this.visitCount}${getSuffix(this.visitCount)} visit!`;
// };
// function setCookie(name, value, days) {
//   const expires = new Date(Date.now() + days * 86400000).toUTCString();
//   document.cookie = `${name}=${value}; expires=${expires}; path=/`;
// }

// function getCookie(name) {
//   const cookies = document.cookie.split("; ");
//   for (let cookie of cookies) {
//     const [key, value] = cookie.split("=");
//     if (key === name) return value;
//   }
//   return null;
// }

// function deleteCookie(name) {
//   document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
// }
// function initApp() {
//   let userName = localStorage.getItem("userName");

//   if (!userName) {
//     userName = prompt("Enter your name:");
//     if (!userName) return;
//     localStorage.setItem("userName", userName);
//   }

//   let visitCount = getCookie("visitCount");

//   if (!visitCount) {
//     visitCount = 1;
//   } else {
//     visitCount = Number(visitCount) + 1;
//   }

//   setCookie("visitCount", visitCount, 7);

//   const visitor = new Visitor(userName, visitCount);
//   document.getElementById("message").innerText = visitor.getGreeting();
// }

// initApp();
// function resetData() {
//   localStorage.removeItem("userName");
//   deleteCookie("visitCount");
//   location.reload();
// }
// function getSuffix(num) {
//   if (num === 1) return "st";
//   if (num === 2) return "nd";
//   if (num === 3) return "rd";
//   return "th";
// }
// if(!Array.prototype.includes){
//   Array.prototype.includes=function (value){
//     for(let i=0;i<this.length;i++){
//       if(this[i]===value ||(Number.isNaN(this[i])&&Number.isNaN(value))){
//         return true;
//       }
//     }
//     return false;
//   }
// }
// function User(name) {
//   this.name = name;
// }

// User.prototype.getName = function () {
//   return this.name;
// };

// function Visitor(name,visitCount){
//   User.call(this, name);
//   this.visitCount=visitCount

// }
// Visitor.prototype=Object.create(User.prototype)
// Visitor.prototype.constructor=Visitor;
// Visitor.prototype.incrementVisit = function () {
//   this.visitCount++;
// };
// const v1 = new Visitor("Uday");

// console.log(v1.getDetails()); 
// console.log(v1.visitCount);  

// v1.incrementVisit();
// console.log(v1.visitCount);  // 2
// let userName = localStorage.getItem("userName");
// if (!userName) {
//   userName = prompt("What is your name?");
//   localStorage.setItem("userName", userName);
// }
// let visitCount = localStorage.getItem("visitCount");

// if (visitCount) {
//   visitCount = parseInt(visitCount) + 1;
// } else {
//   visitCount = 1;
// }
// localStorage.setItem("visitCount", visitCount);
// document.getElementById("greeting").innerText =
//   `Hello ${userName}, this is your ${visitCount} visit!`;

// function getCookie(name){
//   let cookies=document.cookie.split("; ");
//   for (let c of cookies){
//     let [key,value] = c.split("=")
//     if(key===name) return value;
//     }
//     return null;
// }
// function setCookie(name,value,days){
//   let data=new Date();
//   data.setTime(data.getTime()+ days*24*60*60*1000);
//   document.cookie=`${name}=${value}; expires=${data.toUTCString()};path=/`;
// }
// let visits=getCookie("visitCount") ;
// if (visits){
//   visits=parseInt(visits)+1;
// } else{
//   visits=1;
// }
// setCookie("visitCount",visits,7);
// let visitor= new Visitor(userName,visits);
// document.getElementById("greeting").innerText=`hello ${visitor.name}, this is your${visitor.visitCount} visit!`
// function resetData(){
//   localStorage.clear();
//   document.cookie="visitCount=; expires=thu, 01 jan 2025 00:00:00 UTC; path=/;"
//   location.reload();
// }
if (!Array.prototype.includes) {
  Array.prototype.includes = function (value) {
    for (let i = 0; i < this.length; i++) {
      if (this[i] === value || 
        (Number.isNaN(this[i]) && Number.isNaN(value))) {
        return true;
      }
    }
    return false;
  };
}
function User(name) {
  this.name = name;
}

User.prototype.getName = function () {
  return this.name;
};

function Visitor(name, visitCount) {
  User.call(this, name);
  this.visitCount = visitCount;
}

Visitor.prototype = Object.create(User.prototype);
Visitor.prototype.constructor = Visitor;

Visitor.prototype.incrementVisit = function () {
  this.visitCount++;
};
function getCookie(name) {
  let cookies = document.cookie.split("; ");
  for (let c of cookies) {
    let [key, value] = c.split("=");
    if (key === name) return value;
  }
  return null;
}

function setCookie(name, value, days) {
  let date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
}

let visits = getCookie("visitCount");
visits = visits ? parseInt(visits) + 1 : 1;
setCookie("visitCount", visits, 7);

let userName = localStorage.getItem("userName");

if (!userName) {
  userName = prompt("What is your name?");
  localStorage.setItem("userName", userName);
}
let visitor = new Visitor(userName, visits);

document.getElementById("greeting").innerText =
  `Hello ${visitor.getName()}, this is your ${visitor.visitCount} visit!`;
function resetData() {
  localStorage.clear();
  document.cookie =
    "visitCount=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  location.reload();
}
