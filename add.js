function addItemList() {
    
    //Dodanie listy tasków
    const task_list = document.getElementById("list");
    const element = document.createElement("li");
    element.className = "single-task";

    //Uzupełnienie inputa
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Tytuł zadania";


    //Przekreślenie po kliknięciu
    const btn1 = document.createElement("a");
    btn1.className = "waves-effect waves-light btn-small completeBtn";
    btn1.onclick = function () { input.style.textDecoration = "line-through"; };

    const green = document.createElement("i");
    green.className = "material-icons left";
    green.textContent = "check";

    //Usunięcie elementu z listy
    const btn2 = document.createElement("a");
    btn2.className = "waves-effect waves-light btn-small deleteBtn";
    btn2.onclick = function () { this.parentNode.parentNode.removeChild(this.parentNode); };

    const red = document.createElement("i");
    red.className = "material-icons left";
    red.textContent = "clear";


    task_list.appendChild(element);
    const task_listItem = document.querySelectorAll(".single-task");

    for (i = 0; i < task_listItem.length; i++) {
        task_list[i].appendChild(input);
        task_listItem[i].appendChild(btn1);
        task_listItem[i].appendChild(btn2);
    }

    const task_btn1 = document.querySelectorAll(".completeBtn");
    const task_btn2 = document.querySelectorAll(".deleteBtn");

    for (j = 0; j < task_btn1.length; j++) {
        task_btn1[j].appendChild(green);
        task_btn2[j].appendChild(red);
    }
}