const { existsSync } = require('fs')
const { GenerateSides, GetDataFromExcel } = require('./data_loading.js')
const { CreadteFolderStructure, SaveToPdf, SaveToHTML } = require('./export.js')
const MapToHTML = require('./canvas.js')

function PrintLogo() {
  console.log(`

███████╗████████╗██╗ ██████╗██╗  ██╗  ██╗████████╗
██╔════╝╚══██╔══╝██║██╔════╝██║ ██╔╝  ██║╚══██╔══╝
███████╗   ██║   ██║██║     █████╔╝   ██║   ██║
╚════██║   ██║   ██║██║     ██╔═██╗   ██║   ██║s
███████║   ██║   ██║╚██████╗██║  ██╗  ██║   ██║
╚══════╝   ╚═╝   ╚═╝ ╚═════╝╚═╝  ╚═╝  ╚═╝   ╚═╝

`)
}

async function main() {
  // const file = process.argv.slice(2)[0]
  const outdir = process.argv.slice(2)[1]
  const pdf = process.argv.slice(2)[2]
  PrintLogo()
  const output_folder = CreadteFolderStructure(outdir)
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
    const a_html = MapToHTML(a_side)

    if (pdf) SaveToPdf('A', output_folder, key, a_html)
    else SaveToHTML('A', output_folder, key, a_html)
    // const b_side = value.filter((val) => val.side_letter === 'B')
    // const b_html = MapToHTML(b_side)
    // SaveToPdf('B.pdf', output_folder, key, b_html)

    // const c_side = value.filter((val) => val.side_letter === 'C')
    // const c_html = MapToHTML(c_side)
    // SaveToPdf('C.pdf', output_folder, key, c_html)
  })
  console.log('Done')
  // }
}

main().then((m) => m)
