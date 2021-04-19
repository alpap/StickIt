import pdf from 'html-pdf'
import { existsSync } from 'fs'

let options = { format: 'a4' }

function creadteFolderStructure(folder_name) {
  existsSync()
}

function SaveToPdf(filename, folder_name, path, html) {
  if (!path) path = process.cwd()
  pdf.create(html, options).toFile('./businesscard.pdf', function (err, res) {
    if (err) return console.log(err)
    console.log(res) // { filename: '/app/businesscard.pdf' }
  })
}
