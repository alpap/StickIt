import pdf from 'html-pdf'

let h1 = '<h1>lkashjlakshf</h1>'
let html = ''
for (let i = 0; i < 1000; i++) {
  html += h1
}

let options = { format: 'a4' }

pdf.create(html, options).toFile('./businesscard.pdf', function (err, res) {
  if (err) return console.log(err)
  console.log(res) // { filename: '/app/businesscard.pdf' }
})
