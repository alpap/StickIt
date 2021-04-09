import xlsx2json from 'xlsx2json'

async function GetDataFromExcel() {
  const json_data = await xlsx2json('./123.xlsx', {
    keysRow: 1,
  })
  const map = new Map()
  json_data[0].forEach((element) => {
    map.set(element['Assembly Mark'].trim(), element)
  })
  return Array.from(myMap.values())
}

function IterateSides(mark, side_letters, to) {
  const list_of_objs = new Array()
  side_letters.forEach((sideLetter) => {
    for (let i = 0; i <= to; i++) {
      const numToString = i.toString()
      const side = sideLetter + numToString.length === 1 ? '0' + numToString : numToString
      list_of_objs.push({
        qr: `${mark},${side}`,
        side: side,
        mark: mark,
      })
    }
  })
}

async function GenerateSides(values, side_c, to_number) {
  if (!to_number) to_number = 97
  const side_letters = ['A', 'B']
  if (side_c) side_letters.push('C')

  const data = values.map((value) => {
    return IterateSides(value['Assembly Mark'].trim(), side_letters, to_number)
  })
}
