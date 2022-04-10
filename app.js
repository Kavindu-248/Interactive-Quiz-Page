const correctAnswers = ['A', 'A', 'A'];
const form = document.querySelector('.quiz-form');
const results = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();


    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value,]

    // check answers 

    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 25;
        }
    });


    //Show results on page

    result.querySelector('span').textContent = '${score}%';
    result.classList.remove('d-none')

});