
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
