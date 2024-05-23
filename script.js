document.addEventListener("DOMContentLoaded", function() {
    let balls = document.getElementsByClassName("ball");
    let score1 = document.getElementById("score-team1");
    let score2 = document.getElementById("score-team2");
    let totalBalls = balls.length;
    let currentIndex = 0;
    let indScore = 0; 
    let pakScore = 0; 

    function generate() {
        let randomNumber = Math.floor(Math.random() * 6) + 1; 
        return randomNumber;
    }

    document.getElementById("strike").onclick = function() {
        let score = generate();
        balls[currentIndex].innerText = score;

        if (currentIndex < totalBalls / 2) { 
            indScore += score; 
            score1.innerText = indScore; 
        } else { 
            pakScore += score; 
            score2.innerText = pakScore; 
        }

        currentIndex++;

        if (currentIndex === totalBalls) {
            setTimeout(function() {
                if (indScore > pakScore) {
                    window.alert("India won!");
                } else if (pakScore > indScore) {
                    window.alert("Pakistan won!");
                } else {
                    window.alert("It's a tie!");
                }
                currentIndex = 0; 
            }, 100); 
        }
    };
});











