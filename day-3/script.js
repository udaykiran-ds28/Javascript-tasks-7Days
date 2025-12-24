
list=document.getElementById("list")
content=document.createElement("p")
let array=[]

function newUser() {
    let name=prompt("enter the Name")
    let id=Number(prompt("Enter the Id"))
    let email=prompt("enter the email")
    array.push({
        id: id,
        name: name,
        email: email
    })
    alert("User added successfully!");
    console.log(array)
}
function details(){
    list.innerHTML = "";     
    content.innerText = "";
    if (array.length ===  0) {
        document.body.appendChild(content);
        content.innerText = "There are no users";
        console.log("there is no data");
        return;
    }
    for (let users of array) {
    let li = document.createElement("li");
    li.innerText = `${users.id} - ${users.name} (${users.email})`;
    list.appendChild(li);
    
}
}
function clearUsers(){
    array.splice(0,array.length)
    alert("all users removed")

}