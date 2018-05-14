const opCodes = require('./op-codes')
const fs = require('fs')

var readFile = new Promise((resolve, reject) => {
  fs.readFile('2048/2048.nes', (err, data) => {
    resolve(data.toString('hex'))
  })
})

readFile.then(data => {
  const prgRomSize = data.slice(08, 10) // Size of PRG ROM in 16 KB units
  const chrRomSize = data.slice(10, 12) // Size of CHR ROM in 8 KB units (0 means the board uses CHR RAM)
  const flags6 = data.slice(12, 14) // ROM Control Byte 1
  const flags7 = data.slice(14, 16) // ROM Control Byte 2
  const prgRamSize = data.slice(16, 18) // Size of PRG RAM in 8KB units (0 infers 8 KB for compatibility; see PRG RAM circuit)
  const flags9 = data.slice(18,20)
  const flags10 = data.slice(20, 22)

  
})

// The format of the header is as follows:
// 0-3: Constant $4E $45 $53 $1A ("NES" followed by MS-DOS end-of-file)
// 4: Size of PRG ROM in 16 KB units
// 5: Size of CHR ROM in 8 KB units (Value 0 means the board uses CHR RAM)
// 6: Flags 6
// 7: Flags 7
// 8: Size of PRG RAM in 8 KB units (Value 0 infers 8 KB for compatibility; see PRG RAM circuit)
// 9: Flags 9
// 10: Flags 10 (unofficial)
// 11-15: Zero filled

// Example: 
// 00 01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 
// 4e 45 53 1a 01 00 00 00 00 00 00 00 00 00 00 00

// ROM Control Byte 1: 
// •
//     Bit 0 - Indicates the type of mirroring used by the game 
// where   0   indicates   horizontal   mirroring,   1   indicates   
// vertical mirroring. 
// •
//     Bit 1 - Indicates the presence of battery-backed RAM at 
// memory locations $6000-$7FFF. 
// •
//     Bit  2  -  Indicates  the  presence  of  a  512-byte  trainer  at  
// memory locations $7000-$71FF. 
// •
//     Bit 3 - If this bit is set it overrides bit 0 to indicate four-
// screen mirroring should be used. 
// •
//     Bits 4-7 - Four lower bits of the mapper number. 

// ROM Control Byte 2: 
// •
//     Bits 0-3 - Reserved for future usage and should all be 0. 
// •
//     Bits 4-7 - Four upper bits of the mapper number. 

// Reset  interrupts  are  triggered  when  the  system  first  starts  and  when  the  user  presses  the  
// reset  button.  When  a  reset  occurs  the  system  jumps  to  the  address  located  at  $FFFC  and  
// $FFFD. 


