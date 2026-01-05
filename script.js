function calculateAge() {
    let date = document.getElementById('dob').value;
    if (date === "") {
        document.getElementById('result').innerHTML = "Please enter your date of birth.";
        return;
    }
    let birthDate = new Date(date);
    let today = new Date();
    let years = today.getFullYear()-birthDate.getFullYear()
    let months = today.getMonth()-birthDate.getMonth()
    let days = today.getDate()-birthDate.getDate()
    if(months<0){
        years--;
        months=months+12
    }

    if(days<0){
        months--;
        days = days + new Date(today.getFullYear(),today.getMonth(),0).getDate();

    }
   
    document.getElementById("result").innerHTML =`You are <b>${years}</b> years ,<b>${months}</b> months, <b>${days}</b> days old`
   
   
   
}