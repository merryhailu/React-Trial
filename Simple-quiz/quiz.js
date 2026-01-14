function checkAnswer() {

    const correctAnswer = '4';

    const userAnswer = document.querySelector('[name="quiz"]:checked').value;
    const feedback = document.getElementById('feedback');


    if (userAnswer === correctAnswer) {
        feedback.textContent = 'Correct! Well done.';
    }
    else {
        feedback.textContent = 'Thats incorrect. Try again!';
    }
}

const btn = document.getElementById('submit-answer');
btn.addEventListener('click', checkAnswer)