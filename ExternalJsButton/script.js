// a function to show alert for each button when user click on single button
function showMessage(btnId){	
    // use of if-else to solve problem
    if(btnId=="btnShowMsg1")   
        //  to show alert with button name when clicked on red buttom
        alert("This is the alert for RED Button.");
    else if(btnId=="btnShowMsg2")
        // to show alert with button name when clicked on green buttom
        alert("This is the alert for GREEN Button.");
    else if(btnId=="btnShowMsg3")
        // to show alert with button name when clicked on blue buttom
        alert("This is the alert for BLUE Button.");
    else	
        alert("Invalid Button Id.");
}