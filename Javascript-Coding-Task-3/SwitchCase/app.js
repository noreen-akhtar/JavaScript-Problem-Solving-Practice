
   function myGrading() {
    var grade;
    var score = document.getElementById('grade').value
    switch(true) {
        case (score <= 100 && score >= 85):
            grade = 'A';
            break;
        case (score <= 84 && score > 80):
            grade= 'A-';
            break;
        case (score <= 80 && score > 70):
            grade = 'B';
            break;
        case (score <= 70 && score > 60):
            grade = 'C';
             break;
        case (score <= 60 && score > 40):
            grade = 'D';
            break;
        case (score <= 40 && score > 35):
            grade = 'D';
            break;
        case (score <= 35 && score > 0):
            grade = 'D';
            break;
        case (score > 100 && score < 0):
            grade = 'INVALID SCORE';
            break; 

        default:
        return 'INVALID SCORE';
        }
                document.getElementById('grades').innerHTML=grade;


        }