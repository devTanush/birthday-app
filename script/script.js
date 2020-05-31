$(document).ready(() => {
    $("#form-submit form").on("submit", (event) => {
        event.preventDefault();
        let name = $("input#first-name").val();
        let female = $("input#female").val();
        let male = $("input#male").val();
        let day = $("select#day").val();
        let month = $("select#month").val();
        let year = $("input#year").val();
        validateInputs(name, female, male, day, month, year);
    });
    const displayNotification = (text) => {
        $('#notification').text("Error! " + text);
        $("#notification").toggle();
        setTimeout(() => $("#notification").toggle(), 4000 );
    }
    const validateInputs = (name, female, male, day, month, year)=> {
        if(name == '') {
            displayNotification(`Kindly indicate you name in the 'First Name' section.`);
        }
        if(female == undefined && male == undefined) {
            displayNotification(`Kindly indicate your gender.`); 
        }

        validateDate(day, month, year);
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
        // 30-day Month validation
        if(inputMonth == 4 || inputMonth == 6 || inputMonth == 9 || inputMonth == 11) {
            if(inputDay > 30) {
                displayNotification(`${getMonthName(inputMonth)} is a 30 day month! Please input correct date.`);
            }
        }
    }

    const isLeapYear = (year) => {
        return (year%400)?((year%100)?((year%4)?false:true):false):true;
    }

    const getMonthName = (monthIndex) => {
        let monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let monthName = '';
        monthArr.forEach((element, i) => {
            if(i+1 === monthIndex) {
                console.log(`index: ${i}`);
                monthName = monthArr[i];
            }
        });
        return monthName;
    }
  });