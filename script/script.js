$(document).ready(() => {
    $("#form-submit form").on("submit", (event) => {
        event.preventDefault();
        let name = $("input#first-name").val();
        let gender = $("input[name='gender']:checked").val();
        let day = $("select#day").val();
        let month = $("select#month").val();
        let year = $("input#year").val();
        validateInputs(name, gender, day, month, year);
    });
    const displayNotification = (text) => {
        $('#notification').text("Error! " + text);
        $("#notification").toggle();
        setTimeout(() => $("#notification").toggle(), 4000 );
    }
    const validateInputs = (name, gender, day, month, year)=> {
        if(validateName(name)) {
            console.log(`Name Check`);
            if(validateGender(gender)) {
                console.log(`Gender Check`);
                if(validateFeb(day, month)) {
                    console.log(`Feb Check`);
                    if(validateLeapYearFebDay(day, month, year)) {
                        console.log(`Leap Check`);
                        if(validate30DayMonth(day, month)) {
                            console.log(`Month Check`);
                            if(validateYear(year)) {
                                console.log(`Year Check`);
                                const dayOfWeek = getDayOfWeek(day, month, year);
                                const akan = getAkanName(dayOfWeek, gender);
                                $(".username").text(name);
                                $(".day-of-week").text(dayOfWeek);
                                $(".akan-name").text(akan);
                                $("#hbd-results").show();
                            }
                        }
                    }
                }
            }
        }
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

    const validateGender = (gender) => {
        let genderCheck = false;
        if(gender == undefined) {
            displayNotification(`Kindly indicate your gender.`); 
        } else {
            genderCheck = true;
        }
        return genderCheck;
    }

    const validateFeb = (day, month) => {
        let febCheck = false;
        let inputDay = parseInt(day);
        let inputMonth = parseInt(month);
        if(inputMonth == 2 && inputDay > 29) {
            displayNotification(`The day entered is greater for the month of February.`); 
        }else {
            febCheck = true;
        }
        return febCheck;
    }

    const validateLeapYearFebDay = (day, month, year) => {
        let leapYearCheck = false;
        let inputDay = parseInt(day);
        let inputMonth = parseInt(month);
        let inputYear = parseInt(year);
        if((inputMonth == 2) && (inputDay > 28 && inputDay < 30) && (!isLeapYear(inputYear))) {
            displayNotification(`The year ${year} is not a leap year!`); 
        }else {
            leapYearCheck = true;
        }
        return leapYearCheck; 
    }

    const validate30DayMonth = (day, month) => {
        let monthCheck = false;
        let inputDay = parseInt(day);
        let inputMonth = parseInt(month);
        if((inputMonth == 4 || inputMonth == 6 || inputMonth == 9 || inputMonth == 11) && (inputDay > 30)) {
            displayNotification(`${getMonthName(inputMonth)} is a 30 day month! Please input correct date.`);
        }else {
            monthCheck = true;
        }
        return monthCheck;
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

    const getDayOfWeek = (day, month, year) => {
        let inputDay = parseInt(day);
        let inputMonth = parseInt(month);
        let inputYear = parseInt(year);
        let Day = "";
        
        if (inputMonth < 3) {
            inputMonth += 12;
            inputYear -= 1;
        }

        const century = Math.floor(inputYear / 100);
        const K = inputYear - (100 * century);
        const S = Math.floor(2.6 * inputMonth - 5.39) + Math.floor(K / 4) + Math.floor(century / 4) + inputDay + K - (2 * century);
        
        ans = S - (7 * Math.floor(S / 7));
    
        if (ans == 0) {
            Day = "Sunday";
        }
        else if (ans == 1) {
            Day = "Monday";
        }
        else if (ans == 2) {
            Day = "Tuesday";
        }
        else if (ans == 3) {
            Day = "Wednesday";
        }
        else if (ans == 4) {
            Day = "Thursday";
        }
        else if (ans == 5) {
            Day = "Friday";
        }
        else {
            Day = "Saturday";
        }
        return Day;
    }

    const getAkanName = (day, gender) => {
        let akanName = '';
        if(gender === 1) {
            switch (day) {
                case "Sunday":
                    akanName = "Kwasi"
                    break;
                case "Monday":
                    akanName = "Kwadwo"
                    break;
                case "Tuesday":
                    akanName = "Kwabena"
                    break;
                case "Wednesday":
                    akanName = "Kwaku"
                    break;
                case "Thursday":
                    akanName = "Yaw"
                    break;
                case "Friday":
                    akanName = "Kofi"
                    break;
                case "Saturday":
                    akanName = "Kwame"
                    break;
                default:
                    break;
            }
        } else {
            switch (day) {
                case "Sunday":
                    akanName = "Akosua"
                    break;
                case "Monday":
                    akanName = "Adwoa"
                    break;
                case "Tuesday":
                    akanName = "Abenaa"
                    break;
                case "Wednesday":
                    akanName = "Akua"
                    break;
                case "Thursday":
                    akanName = "Yaa"
                    break;
                case "Friday":
                    akanName = "Afua"
                    break;
                case "Saturday":
                    akanName = "Ama"
                    break;
                default:
                    break;
            }
        }
        return akanName;
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