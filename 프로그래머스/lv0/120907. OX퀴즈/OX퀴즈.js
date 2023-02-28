function solution(quiz) {
    return quiz.map(el=> {
        let newQuiz = el.split(" "); 
        if (newQuiz[1] === "-") return newQuiz[0]*1 - newQuiz[2]*1 === newQuiz[newQuiz.length - 1]*1 ? "O" : "X";
        else return newQuiz[0]*1 + newQuiz[2]*1 === newQuiz[newQuiz.length - 1]*1 ? "O" : "X";
    })
}
    