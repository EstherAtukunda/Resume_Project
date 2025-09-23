let name = "Esther Atukunda";
console.log("Hello, my name is " + name);

let education = "Oral Roberts University";
let experience = "Tutoring, Outreach member, Singer";

document.getElementById("name").textContent = name;
document.getElementById("education").textContent =
"Education: " + education;
document.getElementById("experience").textContent =
"Experience: " + experience;

let skills = ["HTML", "CSS", "Javascript", "C"];
let skillsList = document.createElement("ul");

for (let i = 0; i < skills.length; i++){
    let li = document.createElement("li");
    li.textContent = skills[i];
    skillsList.appendChild(li);
}

document.body.appendChild(skillsList);


function showFunFact(){
    alert("Fun Fact: I love solving challenging problems!");

}
