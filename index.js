import xlsx2json from 'xlsx2json'
import { existsSync } from 'fs'
import QRCode from 'qrcode'
import { MapToHTML } from './canvas.js'

function PrintLogo() {
  console.log(`

███████╗████████╗██╗ ██████╗██╗  ██╗██╗████████╗
██╔════╝╚══██╔══╝██║██╔════╝██║ ██╔╝██║╚══██╔══╝
███████╗   ██║   ██║██║     █████╔╝ ██║   ██║
╚════██║   ██║   ██║██║     ██╔═██╗ ██║   ██║
███████║   ██║   ██║╚██████╗██║  ██╗██║   ██║
╚══════╝   ╚═╝   ╚═╝ ╚═════╝╚═╝  ╚═╝╚═╝   ╚═╝

`)
}

async function GetDataFromExcel(path) {
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
}

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

async function GenerateSides(values, side_c, to_number) {
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
    return map_of_assemblies //! remove this
  }
  return map_of_assemblies
}

async function main() {
  // const file = process.argv.slice(2)[0]
  // const outdir = process.argv.slice(2)[1]
  PrintLogo()
  // if (!existsSync(file)) console.log(`File ${file} could not be found`)
  // else {
  console.log('verion: 1.0.0')
  let file = './123.xlsx'
  console.log('Loading file ' + file)
  const data = await GetDataFromExcel(file)
  console.log('Generating QR codes')
  const mapOfData = await GenerateSides(data, true)
  mapOfData.forEach((value, key) => {
    console.log('Generating PDFs for mark: ', key)
    // const html = MapToHTML(value)
    const a_side = value.filter((val) => val.side_letter === 'A')
    const a_htmls = MapToHTML(a_side)
    const b_side = value.filter((val) => val.side_letter === 'B')
    const b_htmls = MapToHTML(b_side)
    const c_side = value.filter((val) => val.side_letter === 'C')
    const c_htmls = MapToHTML(c_side)
  })
  console.log('Done')
  // }
}

main().then((m) => m)
// data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAB0CAYAAABUmhYnAAAAAklEQVR4AewaftIAAAKgSURBVO3BQQ7kRgwEwSxC//9yeo88NSBIGq9pRsQ/WGMUa5RijVKsUYo1SrFGKdYoxRqlWKMUa5RijVKsUYo1SrFGKdYoxRrl4qEk/JLKHUm4Q6VLwi+pPFGsUYo1SrFGuXiZypuScEcSvqTypiS8qVijFGuUYo1y8bEk3KFyRxI6lS4JnUqXhCeScIfKl4o1SrFGKdYoF8Mk4SQJkxVrlGKNUqxRLoZR6ZLQqXRJmKRYoxRrlGKNcvExlV9KQqfSJaFTeULlb1KsUYo1SrFGuXhZEv5NKl0SOpUuCZ3KSRL+ZsUapVijFGuU+Af/YUnoVP7PijVKsUYp1igXDyWhU+mS8CaVTuWOJHQqJ0l4k8qXijVKsUYp1igXD6l0SThR6ZLQqZwk4Q6VkyR0Kp1Kl4RO5…iZykkSOpUuCXeonCShU+mScIdKl4QTlV8q1ijFGqVYo8Q/+FAS7lA5ScKJykkS3qRykoQ7VJ4o1ijFGqVYo1z8mMpJEk5UnlDpktCpvEnll4o1SrFGKdYoFx9TuUPljiR0Kl0SOpUnktCp3JGETuVNxRqlWKMUa5SLh5LwSyqdSpeEkyR0Kl9KwkkSOpUnijVKsUYp1igXL1N5UxJOknCi8iaVN6m8qVijFGuUYo1y8bEk3KHyhMpJEjqVO5LQqXRJOFH5UrFGKdYoxRrlYrgknCThDpUuCZ1Kl4RfKtYoxRqlWKNcDKdykoROpUtCl4S/WbFGKdYoxRrl4mMqX1K5IwknSbhD5Y4kdCpvKtYoxRqlWKNcvCwJv5SETuVEpUtCp3KShJMknKh8qVijFGuUYo0S/2CNUaxRijVKsUYp1ijFGqVYoxRrlGKNUqxRijVKsUYp1ijFGqVYoxRrlH8AzmP37woduiEAAAAASUVORK5CYII=
