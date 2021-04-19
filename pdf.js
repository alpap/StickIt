import pdf from 'html-pdf'
import { existsSync, mkdir, mkdirSync } from 'fs'
import { join } from 'path'
let options = { format: 'a4' }

function CurrentDatetime() {
  var today = new Date()
  var dd = String(today.getDate()).padStart(2, '0')
  var mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
  var yyyy = today.getFullYear()
  return dd + '_' + mm + '_' + yyyy
}

export function CreadteFolderStructure(folder_name) {
  if (!folder_name) folder_name = join(process.cwd(), CurrentDatetime())
  if (existsSync(folder_name)) {
    console.log('The folder ', folder_name, ' already exists please specify another folder name')
    process.exit(1)
  }
  mkdirSync(folder_name)
  return folder_name
}

function SaveToPdf(filename, folder_name, mark, html) {
  const folder_mark_name = join(folder_name, mark)
  if (!existsSync(folder_mark_name)) mkdirSync(folder_mark_name)
  pdf.create(html, options).toFile(join(folder_name, mark, filename + '.pdf'), function (err, res) {
    if (err) return console.log(err)
    console.log(res)
  })
}
