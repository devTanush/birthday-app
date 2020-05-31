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
        validateYear(year);
    }
    const validateName = (name) => {
        let nameCheck = false;
        if(name == '') {
            displayNotification(`Kindly indicate you name in the 'First Name' section.`);
        } else {
            nameCheck = true;
        }
        return nameCheck;
    }

    const validateGender = (female, male) => {
        let genderCheck = false;
        if(female == undefined && male == undefined) {
            displayNotification(`Kindly indicate your gender.`); 
        } else {
            genderCheck = true;
        }
    }

    const validateFeb = (day, month) => {
        let febCheck = false;
        let inputDay = parseInt(day);
        let inputMonth = parseInt(month);
        if(inputMonth == 2) {
            if(inputDay > 29) {
                displayNotification(`The day entered is greater for the month of February.`);
            } else {
                febCheck = true;
            }
        }
        return febCheck;
    }

    const validateLeapYearFebDay = (day, month, year) => {
        let leapYearCheck = false;
        let inputDay = parseInt(day);
        let inputMonth = parseInt(month);
        let inputYear = parseInt(year);
        if(inputMonth == 2) {
            if(inputDay > 28 && inputDay < 30) {
                if(!isLeapYear(inputYear)) {
                    displayNotification(`The year ${year} is not a leap year!`);
                } else {
                    leapYearCheck = true;
                }
            }
        
        }
        return leapYearCheck;
    }

    const validate30DayMonth = (day, month) => {
        let monthCheck = false;
        let inputDay = parseInt(day);
        let inputMonth = parseInt(month);
        if(inputMonth == 4 || inputMonth == 6 || inputMonth == 9 || inputMonth == 11) {
            if(inputDay > 30) {
                displayNotification(`${getMonthName(inputMonth)} is a 30 day month! Please input correct date.`);
            } else {
                monthCheck = true;
            }
        }
    }

    const isLeapYear = (year) => {
        return (year%400)?((year%100)?((year%4)?false:true):false):true;
    }

    const validateYear = (year) => {
        let yearCheck = false;
        let inputYear = parseInt(year);
        if(Number.isNaN(inputYear)) {
            displayNotification(`Sorry ${name}, kindly ensure the year is entered in the correct format. For example 1992.`);
        } else {
            yearCheck = true;
        }
        return yearCheck;
    }

    /**
     * This function takes a month in number form and returns the name associated with the month.
     * @param {*} monthIndex 
     */
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