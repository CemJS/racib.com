export const test = function () {
  let tmp1 = +new Date()
  // tmp.setDate(tmp.getDate() + 2) //смешение
  // +tmp преобразование даты к числу timestamp для этой даты | +new Date(2016, 1, 28)

  for (let i = 0; i < 100; i++) {
    console.log('=0ac921=', 0)
  }

  let tmp2 = +new Date()

  console.log('=dc4df5=', tmp2 - tmp1) // за какое время выполнился цикл
}
