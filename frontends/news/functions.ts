export const isLeapYear = function (year) {
    return (
        (year % 4 == 0 && year % 100 != 0 && year % 400 != 0) ||
        (year % 100 == 0 && year % 400 == 0)
    );
}

export const getFebDay = function (year) {
    if (this.fn("isLeapYear", year)) {
        console.log(29);
    } else {
        console.log(28);
    }

    return this.fn("isLeapYear", year) ? 29 : 28;
}


export const getRecords = async function () {
    console.log('=d2f90b=', 5555)
    let answer = await this.Services.functions.sendApi("/api/News", {})
    console.log('=74d989=', answer)
}