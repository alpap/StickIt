export function ArrToHTML(arr) {}

function embedToHTML(svgs) {
  let htmlStart = `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body style="margin: 0; padding: 0; text-align: center">
    <div id="dpo8-final-preview" style="text-align: center; overflow: auto; background: white none repeat scroll 0% 0%">
  `

  const htmlEnd = `</div></body></html>`
  for (svg of svgs) {
    htmlStart += svg
  }
  return htmlStart + htmlEnd
}

function ArrToSvg(arr) {
  const svgArr = new Array()
}
