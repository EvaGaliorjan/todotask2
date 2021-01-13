const loadTodosBtn = document.getElementById("loadTodos");
const todosContainer = document.querySelector(".todos");
const baseApiUrl = "https://jsonplaceholder.typicode.com";
loadTodosBtn.addEventListener("click", () => {
    fetch(baseApiUrl + "/todos")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            loadTodosBtn.textContent = `Todos Loaded - ${data.length}`;
            data.forEach((todos) => {
                const todosCardElement = todosCard(todos);
                todosContainer.appendChild(todosCardElement);
            });
        })
        .catch((err) => {
            console.log(err);
        });
});

function todosCard(todos) {
    const div = document.createElement("div");
    div.className = "todos-card";
    console.log(todos)

    const h2 = document.createElement("h2");
    h2.textContent = todos.title;

    const button = document.createElement("button");
    button.dataset.todosId = todos.id;
    const p = document.createElement("p");

    div.appendChild(h2);
    div.appendChild(p);
    return div;
}