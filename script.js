const textArray = ["First Tab content to be displayed here.", "Second Tab content to be displayed here.", "Third Tab content to be displayed here.", "Fourth Tab content to be displayed here."];

function changeTab(id) {
    container = document.getElementById("text");
    tab = document.getElementById(Number(id));
    tab.style.borderBottom = "2px solid black";
    for (let i = 1; i <= 4; i++) {
        if (i != Number(id)) {
            document.getElementById(i).style.borderBottom = "none";
        }
    }
    container.innerHTML = textArray[Number(id) - 1];
}