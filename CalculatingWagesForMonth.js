const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

let empWage, workingHours=0;
let workingDays = 20;

while(workingDays != 0)
{
    let empCheck = Math.floor(Math.random()*10) % 3;
    workingHours += GetHours(empCheck);
    workingDays--;
}
empWage = workingHours * WAGE_PER_HOUR;
console.log("Employee Wage : " + empWage);
//function To Get empHours
function GetHours(empCheck)
{
    switch(empCheck)
    {
        case IS_PART_TIME :
             return PART_TIME_HOURS;
        case IS_FULL_TIME:
             return FULL_TIME_HOURS;
        default :
             return 0;
    }
}        
