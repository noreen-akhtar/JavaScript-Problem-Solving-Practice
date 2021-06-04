function myGrading() {
    var grade;
    var score = document.getElementById('grade').value
    if(score <= 100 || score >= 50){
        console.log("pass");
    }
    else{
        console.log("fail");
    }
}
            
     