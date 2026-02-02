// QUIZ LOGIC
function checkAnswer(answer) {
    let result = document.getElementById("quizResult");
    if (answer === "right") {
        result.innerText = "Correct Answer 🎉";
        result.style.color = "green";
    } else {
        result.innerText = "Wrong Answer ❌";
        result.style.color = "red";
    }
}

// API FETCH (Joke API)
function getJoke() {
    fetch("https://official-joke-api.appspot.com/random_joke")
        .then(response => response.json())
        .then(data => {
            document.getElementById("joke").innerText =
                data.setup + " - " + data.punchline;
        });
}