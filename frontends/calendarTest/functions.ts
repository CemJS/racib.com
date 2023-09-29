//функция для конвертации дня недели
export const getDateCalendar = function (date: any) {
  let day = date.getDay();
  if (day == 0) day = 7
  return day - 1
}

export const createCalendar = function (elem: HTMLElement, year: any, month: any) {
  console.log('=HTML el=', elem)
  console.log('=year=', year)
  console.log('=month=', month)

  let m = month - 1 //чтобы писать месяца привычным образом от 1 до 12
  let d = new Date(year, month)

  let calendar = `
  <div>${month}.${year}</div>
  <div>
    <div
  </div>

  `
}
