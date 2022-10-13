const input = document.querySelector("#favchap");
const button = document.querySelector("#add");
const list = document.querySelector(".list");

button.addEventListener('click', function() {
    const favchap = input.value;
    
    if (favchap == "") {
        input.focus();
    } else {
        const newBtn = document.createElement("button");
        const newLi = document.createElement("li");

        newLi.innerHTML = favchap;
        newLi.appendChild(newBtn);
        newBtn.innerHTML = "\u274C"; 
        list.appendChild(newLi);
        newBtn.addEventListener("click", () => {
        list.removeChild(newLi);
        });
        input.value = "";
    }
});

