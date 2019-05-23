function validationNumber(value) {
  return Number(value) ? Number(value) : 0
}

let plugin = {
  install: (Vue, option) => {
    Vue.prototype.validationNumber = validationNumber
  }
}
export default plugin