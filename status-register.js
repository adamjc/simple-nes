let flag = 0b00000000

const flagMap = {
  'N' : 0b10000000,
  'V' : 0b01000000,
  '-' : 0b00100000,
  'B' : 0b00010000,
  'D' : 0b00001000,
  'I' : 0b00000100,
  'Z' : 0b00000010,
  'C' : 0b00000001,
}

function getFlag () {
  return flag
}

function setFlag (value) {
  flag |= flagMap[value]
}

function isFlagSet(value) {
  return (flag & flagMap[value]) === flagMap[value]
}

function toString () {
  const n = isFlagSet('N') ? 1 : 0
  const v = isFlagSet('V') ? 1 : 0
  const b = isFlagSet('B') ? 1 : 0
  const d = isFlagSet('D') ? 1 : 0
  const i = isFlagSet('I') ? 1 : 0
  const z = isFlagSet('Z') ? 1 : 0
  const c = isFlagSet('C') ? 1 : 0

  return `
    NV-BDIZC
    --------
    ${n}${v}0${b}${d}${i}${z}${c}
  `
}

module.exports = {
  setFlag,
  getFlag,
  toString
}