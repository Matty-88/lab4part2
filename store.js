document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("dictionaryForm").addEventListener("submit", function(event) {
        event.preventDefault();

        const word = document.getElementById("word").value.trim();
        const definition = document.getElementById("definition").value.trim();
        const responseArea = document.getElementById("response");

        if (!word || !definition) {
            responseArea.textContent = "please enter the word and dfinition";
            return;
        }

        fetch("https://lab4-8zqb.onrender.com/api/definitions", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ word, definition })
        })
        .then(res => res.json())
        .then(data => responseArea.textContent = data.message || data.error)
        .catch(err => responseArea.textContent = "error " + err);
    });
});
