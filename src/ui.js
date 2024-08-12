import { getTasks } from "./task";

// Funcion para mostrarle al usauario las tareas
export const renderTasks = () => {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = '';
    const tasks = getTasks();

    tasks.forEach((task) => {
        const li = document.createElement("li");
        li.setAttribute("data-id", task.id);
        
        //Anadir clase solo si la tarea esta completada
        if(task.completed === true) {
            li.classList.add("completed");
        }

        li.innerHTML = `
            ${task.text}
            <button class="delete"> Eliminar </button>
            <button class="toggle"> ${ task.completed === false ? "Completar" : "Deshacer" } </button>
        `;

        taskList.appendChild(li);
    });

};