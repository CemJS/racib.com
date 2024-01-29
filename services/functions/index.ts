export * from './sendApi'
export * from './sendApiDefault'
export * from './validate'
export * from './validForms'

export const loader = async function (Variable) {
  return
}

export const clickSoon = async function (e: MouseEvent) {
  this.Fn.initOne("modalSoon", {})
  e.preventDefault();
  return
}