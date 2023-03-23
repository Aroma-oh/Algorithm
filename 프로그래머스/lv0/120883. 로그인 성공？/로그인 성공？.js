function solution(id_pw, db) {
    let result = [];
        db.filter(el => {
        if (el[0] === id_pw[0]) { 
            result.push(el[0]);
            if (el[1] === id_pw[1]) result.push(el[1]);
        } 
    }); 
    return result.length === 2 ? "login" : result.length === 1 ? "wrong pw" : "fail" ; 
}