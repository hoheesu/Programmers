function solution(id_pw, db) {
    let answer = ''
    db.forEach(function a(dbLog, i){

        if(id_pw[0] === dbLog[0] && id_pw[1]===dbLog[1]){
            answer = 'login'
        }else if(id_pw[0] === dbLog[0] && id_pw[1] !== dbLog[1]){
            answer = 'wrong pw'
        }else if(id_pw[0] !== dbLog[0] && id_pw[1] !== dbLog[1]){
            answer = 'fail'
        }  
    })
    return answer
}