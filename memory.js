// $C000 - $FFFF -> PRG-ROM Upper Bank 
// $8000 - $BFFF -> PRG-ROM Lower Bank
// $6000 - $7FFF -> SRAM
// $4020 - $5FFF -> Expansion ROM
// $4000 - $401F -> I/O Registers
// $2008 - $3FFF -> Mirrors $2000 - $2007
// $2000 - $2007 -> I/O Registers
// $0800 - $1FFF -> Mirrors $0000 - $07FFF
// $0200 - $07FF -> RAM
// $0100 - $01FF -> Stack
// $0000 - $00FF -> Zero Page

// 16-bit address bus (0x0000 - 0xFFFF)
// 8-bit data bus (0x00 - 0xFF)

let memory

function initialise () {
  memory = new Array(0xFFFF)
}

function set (location, data) {
  memory[location] = data
}

function get (location) {
  return memory[location]
}

module.exports = {
  initialise,
  set,
  get
}