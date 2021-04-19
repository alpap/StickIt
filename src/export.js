const create = require('html-pdf').create
const { existsSync, mkdirSync, writeFile } = require('fs')
const { join } = require('path')

function CurrentDatetime() {
  var today = new Date()
  var dd = String(today.getDate()).padStart(2, '0')
  var mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
  var yyyy = today.getFullYear()
  return dd + '_' + mm + '_' + yyyy
}

module.exports = {
  CreadteFolderStructure: function CreadteFolderStructure(folder_name) {
    if (!folder_name) folder_name = join(process.cwd(), CurrentDatetime())
    if (existsSync(folder_name)) {
      console.log('The folder ', folder_name, ' already exists please specify another folder name')
      process.exit(1)
    }
    mkdirSync(folder_name)
    return folder_name
  },

  SaveToPdf: function SaveToPdf(filename, folder_name, mark, html) {
    const folder_mark_name = join(folder_name, mark)
    if (!existsSync(folder_mark_name)) mkdirSync(folder_mark_name)
    let options = { format: 'A4', renderDelay: '2000' }
    create(html, options).toFile(join(folder_mark_name, filename + '.pdf'), function (err, res) {
      if (err) return console.log(err)
    })
  },
  SaveToHTML: function SaveToHTML(filename, folder_name, mark, html) {
    const folder_mark_name = join(folder_name, mark)
    if (!existsSync(folder_mark_name)) mkdirSync(folder_mark_name)
    writeFile(join(folder_mark_name, filename + '.html'), html, (err, res) => {
      if (err) return console.log(err)
    })
  },
}
