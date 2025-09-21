function addTask() {

    let input = document.getElementById("inputstring");
    if (input.value.trim() === "") return;
    let li = document.createElement("li");
    li.textContent = input.value;
    li.onclick = () => li.classList.toggle("done"); // mark as done
    document.getElementById("list").appendChild(li);
    input.value = "";
}