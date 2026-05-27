function openWindow(id) {
    document.getElementById(id).style.display = "block";
}

function closeWindow(id) {
    document.getElementById(id).style.display = "none";
}

/* Calculator */

function addNumbers() {

    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    let total = num1 + num2;

    document.getElementById("calcResult").innerText =
        "Result: " + total;
}

/* Terminal */

function runCommand(event) {

    if (event.key === "Enter") {

        let input =
            document.getElementById("terminalInput").value;

        let output =
            document.getElementById("terminalOutput");

        if (input === "help") {

            output.innerHTML +=
                "<p>Commands: help, about, clear</p>";

        } else if (input === "about") {

            output.innerHTML +=
                "<p>KrizzyOS Version 1.0</p>";

        } else if (input === "clear") {

            output.innerHTML = "";

        } else {

            output.innerHTML +=
                "<p>Unknown command</p>";
        }

        document.getElementById("terminalInput").value = "";
    }
}

/* Clock */

function updateClock() {

    let now = new Date();

    document.getElementById("clock").innerText =
        now.toLocaleTimeString();
}

setInterval(updateClock, 1000);
updateClock();