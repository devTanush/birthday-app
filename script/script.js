$(document).ready(()=> {
    $("#form-submit form").on("submit", (event)=> {
        event.preventDefault();
        let name = $("input#first-name").val();
        let female = $("input#female").val();
        let male = $("input#male").val();
        let day = $("select#day").val();
        let month = $("select#month").val();
        let year = $("input#year").val();
        console.log(`Name: ${name}`);
        console.log(`Female: ${female}`);
        console.log(`Male: ${male}`);
        console.log(`Day: ${day}`);
        console.log(`Month: ${month}`);
        console.log(`Year: ${year}`);
        validateInputs(name, female, male, day, month, year);
    });
    const displayNotification = (text)=> {
        $('#notification').text("Error! " + text);
        $("#notification").toggle();
        setTimeout(() => $("#notification").toggle(), 4000 );
    }
    const validateInputs = (name, female, male, day, month, year)=> {
        if(name == '' || name.length() == 0) {
            displayNotification(`Kindly indicate you name in the 'First Name' section.`);
        }
        if(female == undefined && male == undefined) {
            displayNotification(`Kindly indicate your gender.`); 
        }
    }

    const validateDate = (day, month, year) => {
        let inputDay = parseInt(day);
        let inputMonth = parseInt(month);
        let inputYear = parseInt(year);
        // Feb month validation
        if(inputMonth == 2) {
            if(inputDay > 29) {
                displayNotification(`The day entered is greater for the month of February.`);
            }
            if(inputDay > 28 && inputDay < 30) {
                if(!isLeapYear(inputYear)) {
                    displayNotification(`The year ${year} is not a leap year!`);
                }
            }
        
        }
        //
    }

    const isLeapYear = (year) => {
        return (year%400)?((year%100)?((year%4)?false:true):false):true;
    }
  });