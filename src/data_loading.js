const QRCode = require('qrcode')
const xlsx2json = require('xlsx2json')

function PopulateSides(mark, side_letters, to) {
  const list_of_objs = new Array()
  side_letters.forEach((sideLetter) => {
    for (let i = 0; i <= to; i++) {
      const numToString = i.toString()
      const side = `${sideLetter}${numToString.length === 1 ? '0' + numToString : numToString}`
      list_of_objs.push({
        qr_text: `${mark},${side}`,
        qr: '',
        side: side,
        side_letter: sideLetter,
        mark: mark,
      })
    }
  })
  return list_of_objs
}

async function CreateQrCodes(values) {
  for (const value of values) {
    value.qr = await QRCode.toDataURL(value.qr_text)
  }
}

module.exports = {
  GetDataFromExcel: async function GetDataFromExcel(path) {
    const json_data = await xlsx2json(path, {
      keysRow: 1,
    })
    const map = new Map()
    json_data[0].forEach((element) => {
      map.set(element['Assembly Mark'].trim(), element)
    })
    const list_from_map = []
    map.forEach((value) => {
      list_from_map.push(value)
    })
    return list_from_map
  },
  GenerateSides: async function GenerateSides(values, side_c, to_number) {
    if (!to_number) to_number = 97
    const side_letters = ['A', 'B']
    if (side_c) side_letters.push('C')

    const map_of_assemblies = new Map()
    for (const value of values) {
      const mark = value['Assembly Mark'].trim()
      if (!mark) continue
      const populated_side_data = PopulateSides(mark, side_letters, to_number)
      await CreateQrCodes(populated_side_data)
      map_of_assemblies.set(mark, populated_side_data)
      // return map_of_assemblies //! remove this
    }
    return map_of_assemblies
  },
}
