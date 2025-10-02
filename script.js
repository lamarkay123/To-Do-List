function addTask() {
    let input = document.getElementById("inputstring");
    if (input.value.trim() === "") return;

    let li = document.createElement("li");
    li.textContent = input.value;
    li.onclick = () => li.classList.toggle("completed");

    document.getElementById("list").appendChild(li);
    input.value = "";
}

document.querySelector("button").addEventListener("click", addTask);

document.getElementById("inputstring").addEventListener("keypress", function (e) {
    if (e.key === "Enter") addTask();
});
