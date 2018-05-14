statusRegister = require('./status-register')

let opCodes = {
  "00": BRK, // interrupt
  "01": ORAXIndirect // OR Memory with Accumulator
}

function ORAXIndirect () {
  // bytes: 2
  // cycles: 6 
  //  (indirect,X) ORA (oper,X) 01 2 6
}

function SEI () {
  // bytes: 1
  // cycles: 2
  statusRegister.setFlag('I')
}

function BRK () {
  // bytes: 1
  // cycles: 2
  
  statusRegister.setFlag('I')
}

module.exports = opCodes