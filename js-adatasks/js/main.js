'use strict';
//QUERYSELECTOR
const taskList = document.querySelector('.js_task-list');
// const
//VARIABLES
const inputCheck = `<input type="checkbox" class="js_ckeck"/>`;
const tasks = [
    { name: "Recoger setas en el campo", completed: true },
    { name: "Comprar pilas", completed: true },
    { name: "Poner una lavadora de blancos", completed: true },
    {
        name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
        completed: false,
    },
];

for (const task of tasks) {
    if (task.completed === true) {
        taskList.innerHTML += 
        `<li class="tachado">${task.name} 
        <input type="checkbox" checked/>
        </li>`;

    } else {
        taskList.innerHTML += `<li>${task.name} ${inputCheck}</li>`;
    }
}

// function clickinput () {

// }
// clickinput()
console.log(taskList);
console.log(inputCheck);

inputCheck.addEventListener('click', (event) => {
`<li class="tachado">${task.name}`;
});