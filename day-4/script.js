let output=document.getElementById("output")
let total=document.getElementById("total")
const employees =[
    { name:"uday",salary:50000},
    {name:"kiran",salary:60000},
    { name:"vamsi",salary:45000}
]
    
function bonusCalculation(percentage){
    return this.salary * percentage/100
}
function calculateBonus(){
    output.innerHTML = "";
    const highEarners = employees.filter(emp => emp.salary > 45000);
    // console.log(highEarners)
    let updatedEmployees=highEarners.map(emp=>{
        bonus=bonusCalculation.call(emp,10)
        return { ...emp,bonus};
    });
    // console.log(updatedEmployees)
    updatedEmployees.forEach(({ name, salary, bonus }) => {
    output.innerHTML += `<p>${name} earns ₹${salary} and got a bonus of ₹${bonus}</p>`;
    });
    const totalBonus = updatedEmployees.reduce(
    (sum, emp) => sum + emp.bonus,0);
    total.innerText=`total bonus${totalBonus}`
}