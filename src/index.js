const { existsSync } = require('fs')
const { GenerateSides, GetDataFromExcel } = require('./data_loading.js')
const { CreateFolderStructure,  SaveToHTML } = require('./export.js')
const MapToHTML = require('./html_generator.js')

function PrintLogo() {
  console.log(`

███████╗████████╗██╗ ██████╗██╗  ██╗  ██╗████████╗
██╔════╝╚══██╔══╝██║██╔════╝██║ ██╔╝  ██║╚══██╔══╝
███████╗   ██║   ██║██║     █████╔╝   ██║   ██║
╚════██║   ██║   ██║██║     ██╔═██╗   ██║   ██║
███████║   ██║   ██║╚██████╗██║  ██╗  ██║   ██║
╚══════╝   ╚═╝   ╚═╝ ╚═════╝╚═╝  ╚═╝  ╚═╝   ╚═╝

`)
}

async function main() {
  const file = process.argv.slice(2)[0]
  const outdir = process.argv.slice(2)[1]
  PrintLogo()
  const output_folder = CreateFolderStructure(outdir)
  if (!existsSync(file)) console.log(`File ${file} could not be found`)
  else {
  console.log('verion: 1.1.0')
  console.log('Loading file ' + file)
  const data = await GetDataFromExcel(file)
  console.log('Generating QR codes')
  const mapOfData = await GenerateSides(data, true)
  mapOfData.forEach((value, key) => {
    console.log('Generating files for mark: ', key)
    // const html = MapToHTML(value)
    const a_side = value.filter((val) => val.side_letter === 'A')
    const a_html = MapToHTML(a_side)
    SaveToHTML('A', output_folder, key, a_html)

    const b_side = value.filter((val) => val.side_letter === 'B')
    const b_html = MapToHTML(b_side)
    SaveToHTML('B', output_folder, key, b_html)

    const c_side = value.filter((val) => val.side_letter === 'C')
    const c_html = MapToHTML(c_side)
    SaveToHTML('C', output_folder, key, c_html)
  })
  console.log('Done')
  }
}

main().then((m) => m)
