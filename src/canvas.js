module.exports = function MapToHTML(arr) {
  const pages = ArrToPages(arr)
  const svgs = pages.map((page) => PageDataToSvg(page))
  return EmbedSvgsToHTML(svgs)
}

function EmbedSvgsToHTML(svgs) {
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
  for (const svg of svgs) {
    htmlStart += svg
  }
  return htmlStart + htmlEnd
}

function ArrToPages(arr) {
  const svgArr = new Array()
  while (arr.length > 0) {
    svgArr.push(arr.splice(0, 14))
  }
  return svgArr
}

function PageDataToSvg(page) {
  const svgCode = `      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="754.016"
        height="1066.394"
        viewBox="-1 -1 597.276 843.89"
        pointer-events="none"
      >
        <defs>
          <path
            d="M251.322 90.246H218.05V56.973h33.272v33.273z"
            fill="#fff"
            stroke="#000"
            stroke-width="2"
            stroke-linejoin="round"
            fill-opacity="0"
            id="c"
          />
          <path
            d="M109.81 102.15h69.739z"
            fill="#fde291"
            stroke="#393939"
            stroke-width="1.99998"
            stroke-linejoin="round"
            id="d"
          />
          <clipPath id="a">
            <path
              d="M8.504 0h263.792c5.67 0 8.504 2.835 8.504 8.504v90.992c0 5.67-2.835 8.504-8.504 8.504H8.504C2.834 108 0 105.165 0 99.496V8.504C0 2.834 2.835 0 8.504 0"
            />
          </clipPath>
          <text style="font-kerning: normal" transform="translate(109.367 2.85)" id="b">
            <tspan
              x="0"
              y="37.528"
              style="font-feature-settings: 'liga' 0, 'case' 0, 'cpsp' 0"
              font-size="43"
              font-family="DPO8 Arial,DPO8Fallback,Arial"
              font-weight="400"
            >
                ${page[0].mark}
            </tspan>
          </text>
        </defs>
        <path fill="#fff" d="M0 0h595.276v841.89H0z" />
        <path fill="none" stroke="#b8c2c9" d="M0 0h595.276v841.89H0z" />
        <g transform="translate(13.2 42.9)" clip-path="url('#a')">
          <path fill="#fff" d="M-4.5-4.5h288.9V108H-4.5z" />
          <g transform="translate(-12.725 -14.2)" fill="none">
            <path d="M0 0h136v136H0z" />
            <image
              preserveAspectRatio="none"
              width="136"
              height="136"
              href="${page[0].qr}"
            />
          </g>
          <use href="#b" />
          <use href="#c" />
          <text style="font-kerning: normal" transform="translate(109.748 51.512)">
            <tspan
              x="0"
              y="36.928"
              style="font-feature-settings: 'liga' 0, 'case' 0, 'cpsp' 0"
              font-size="43"
              font-family="DPO8 Arial,DPO8Fallback,Arial"
              font-weight="400"
            >
               ${page[0].side}
            </tspan>
          </text>
          <use href="#d" />
          <path
            d="M8.504 0h263.792q8.504 0 8.504 8.504v90.992q0 8.504-8.504 8.504H8.504Q0 108 0 99.496V8.504Q0 0 8.504 0z"
            fill="none"
            stroke="#b8c2c9"
            vector-effect="non-scaling-stroke"
            pointer-events="all"
          />
        </g>
        <g transform="translate(301.2 42.9)" clip-path="url('#a')">
          <path fill="#fff" d="M-3.6-4.5h288.9V108H-3.6z" />
          <g transform="translate(-12.725 -14.2)" fill="none">
            <path d="M0 0h136v136H0z" />
            <image
              href="${page[7].qr}" preserveAspectRatio="none"
              width="136"
              height="136"
            />
          </g>
          <use href="#b" />
          <use href="#c" />
          <text style="font-kerning: normal" transform="translate(109.748 51.512)">
            <tspan
              x="0"
              y="36.928"
              style="font-feature-settings: 'liga' 0, 'case' 0, 'cpsp' 0"
              font-size="43"
              font-family="DPO8 Arial,DPO8Fallback,Arial"
              font-weight="400"
            >
            ${page[7].side}
            </tspan>
          </text>
          <use href="#d" />
          <path
            d="M8.504 0h263.792q8.504 0 8.504 8.504v90.992q0 8.504-8.504 8.504H8.504Q0 108 0 99.496V8.504Q0 0 8.504 0z"
            fill="none"
            stroke="#b8c2c9"
            vector-effect="non-scaling-stroke"
            pointer-events="all"
          />
        </g>
        <g transform="translate(13.2 150.9)" clip-path="url('#a')">
          <path fill="#fff" d="M-4.5 0h288.9v108H-4.5z" />
          <g transform="translate(-12.725 -14.2)" fill="none">
            <path d="M0 0h136v136H0z" />
            <image
              href="${page[1].qr}"
              preserveAspectRatio="none"
              width="136"
              height="136"
            />
          </g>
          <use href="#b" />
          <use href="#c" />
          <text style="font-kerning: normal" transform="translate(109.748 51.512)">
            <tspan
              x="0"
              y="36.928"
              style="font-feature-settings: 'liga' 0, 'case' 0, 'cpsp' 0"
              font-size="43"
              font-family="DPO8 Arial,DPO8Fallback,Arial"
              font-weight="400"
            >
              ${page[1].side}
            </tspan>
          </text>
          <use href="#d" />
          <path
            d="M8.504 0h263.792q8.504 0 8.504 8.504v90.992q0 8.504-8.504 8.504H8.504Q0 108 0 99.496V8.504Q0 0 8.504 0z"
            fill="none"
            stroke="#b8c2c9"
            vector-effect="non-scaling-stroke"
            pointer-events="all"
          />
        </g>
        <g transform="translate(301.2 150.9)" clip-path="url('#a')">
          <path fill="#fff" d="M-3.6 0h288.9v108H-3.6z" />
          <g transform="translate(-12.725 -14.2)" fill="none">
            <path d="M0 0h136v136H0z" />
            <image
                 href="${page[8].qr}"
              preserveAspectRatio="none"
              width="136"
              height="136"
            />
          </g>
          <use href="#b" />
          <use href="#c" />
          <text style="font-kerning: normal" transform="translate(109.748 51.512)">
            <tspan
              x="0"
              y="36.928"
              style="font-feature-settings: 'liga' 0, 'case' 0, 'cpsp' 0"
              font-size="43"
              font-family="DPO8 Arial,DPO8Fallback,Arial"
              font-weight="400"
            >
               ${page[8].side}
            </tspan>
          </text>
          <use href="#d" />
          <path
            d="M8.504 0h263.792q8.504 0 8.504 8.504v90.992q0 8.504-8.504 8.504H8.504Q0 108 0 99.496V8.504Q0 0 8.504 0z"
            fill="none"
            stroke="#b8c2c9"
            vector-effect="non-scaling-stroke"
            pointer-events="all"
          />
        </g>
        <g transform="translate(13.2 258.9)" clip-path="url('#a')">
          <path fill="#fff" d="M-4.5 0h288.9v108H-4.5z" />
          <g transform="translate(-12.725 -14.2)" fill="none">
            <path d="M0 0h136v136H0z" />
            <image
              href="${page[2].qr}"
              preserveAspectRatio="none"
              width="136"
              height="136"
            />
          </g>
          <use href="#b" />
          <use href="#c" />
          <text style="font-kerning: normal" transform="translate(109.748 51.512)">
            <tspan
              x="0"
              y="36.928"
              style="font-feature-settings: 'liga' 0, 'case' 0, 'cpsp' 0"
              font-size="43"
              font-family="DPO8 Arial,DPO8Fallback,Arial"
              font-weight="400"
            >
              ${page[2].side}
            </tspan>
          </text>
          <use href="#d" />
          <path
            d="M8.504 0h263.792q8.504 0 8.504 8.504v90.992q0 8.504-8.504 8.504H8.504Q0 108 0 99.496V8.504Q0 0 8.504 0z"
            fill="none"
            stroke="#b8c2c9"
            vector-effect="non-scaling-stroke"
            pointer-events="all"
          />
        </g>
        <g transform="translate(301.2 258.9)" clip-path="url('#a')">
          <path fill="#fff" d="M-3.6 0h288.9v108H-3.6z" />
          <g transform="translate(-12.725 -14.2)" fill="none">
            <path d="M0 0h136v136H0z" />
            <image
                href="${page[9].qr}"
              preserveAspectRatio="none"
              width="136"
              height="136"
            />
          </g>
          <use href="#b" />
          <use href="#c" />
          <text style="font-kerning: normal" transform="translate(109.748 51.512)">
            <tspan
              x="0"
              y="36.928"
              style="font-feature-settings: 'liga' 0, 'case' 0, 'cpsp' 0"
              font-size="43"
              font-family="DPO8 Arial,DPO8Fallback,Arial"
              font-weight="400"
            >
                  ${page[9].side}
            </tspan>
          </text>
          <use href="#d" />
          <path
            d="M8.504 0h263.792q8.504 0 8.504 8.504v90.992q0 8.504-8.504 8.504H8.504Q0 108 0 99.496V8.504Q0 0 8.504 0z"
            fill="none"
            stroke="#b8c2c9"
            vector-effect="non-scaling-stroke"
            pointer-events="all"
          />
        </g>
        <g transform="translate(13.2 366.9)" clip-path="url('#a')">
          <path fill="#fff" d="M-4.5 0h288.9v108H-4.5z" />
          <g transform="translate(-12.725 -14.2)" fill="none">
            <path d="M0 0h136v136H0z" />
            <image
               href="${page[3].qr}"
              preserveAspectRatio="none"
              width="136"
              height="136"
            />
          </g>
          <use href="#b" />
          <use href="#c" />
          <text style="font-kerning: normal" transform="translate(109.748 51.512)">
            <tspan
              x="0"
              y="36.928"
              style="font-feature-settings: 'liga' 0, 'case' 0, 'cpsp' 0"
              font-size="43"
              font-family="DPO8 Arial,DPO8Fallback,Arial"
              font-weight="400"
            >
                ${page[3].side}
            </tspan>
          </text>
          <use href="#d" />
          <path
            d="M8.504 0h263.792q8.504 0 8.504 8.504v90.992q0 8.504-8.504 8.504H8.504Q0 108 0 99.496V8.504Q0 0 8.504 0z"
            fill="none"
            stroke="#b8c2c9"
            vector-effect="non-scaling-stroke"
            pointer-events="all"
          />
        </g>
        <g transform="translate(301.2 366.9)" clip-path="url('#a')">
          <path fill="#fff" d="M-3.6 0h288.9v108H-3.6z" />
          <g transform="translate(-12.725 -14.2)" fill="none">
            <path d="M0 0h136v136H0z" />
            <image
              href="${page[10].qr}"
              preserveAspectRatio="none"
              width="136"
              height="136"
            />
          </g>
          <use href="#b" />
          <use href="#c" />
          <text style="font-kerning: normal" transform="translate(109.748 51.512)">
            <tspan
              x="0"
              y="36.928"
              style="font-feature-settings: 'liga' 0, 'case' 0, 'cpsp' 0"
              font-size="43"
              font-family="DPO8 Arial,DPO8Fallback,Arial"
              font-weight="400"
            >
              ${page[10].side}
            </tspan>
          </text>
          <use href="#d" />
          <path
            d="M8.504 0h263.792q8.504 0 8.504 8.504v90.992q0 8.504-8.504 8.504H8.504Q0 108 0 99.496V8.504Q0 0 8.504 0z"
            fill="none"
            stroke="#b8c2c9"
            vector-effect="non-scaling-stroke"
            pointer-events="all"
          />
        </g>
        <g transform="translate(13.2 474.9)" clip-path="url('#a')">
          <path fill="#fff" d="M-4.5 0h288.9v108H-4.5z" />
          <g transform="translate(-12.725 -14.2)" fill="none">
            <path d="M0 0h136v136H0z" />
            <image
              href="${page[4].qr}"
              preserveAspectRatio="none"
              width="136"
              height="136"
            />
          </g>
          <use href="#b" />
          <use href="#c" />
          <text style="font-kerning: normal" transform="translate(109.748 51.512)">
            <tspan
              x="0"
              y="36.928"
              style="font-feature-settings: 'liga' 0, 'case' 0, 'cpsp' 0"
              font-size="43"
              font-family="DPO8 Arial,DPO8Fallback,Arial"
              font-weight="400"
            >
              ${page[4].side}
            </tspan>
          </text>
          <use href="#d" />
          <path
            d="M8.504 0h263.792q8.504 0 8.504 8.504v90.992q0 8.504-8.504 8.504H8.504Q0 108 0 99.496V8.504Q0 0 8.504 0z"
            fill="none"
            stroke="#b8c2c9"
            vector-effect="non-scaling-stroke"
            pointer-events="all"
          />
        </g>
        <g transform="translate(301.2 474.9)" clip-path="url('#a')">
          <path fill="#fff" d="M-3.6 0h288.9v108H-3.6z" />
          <g transform="translate(-12.725 -14.2)" fill="none">
            <path d="M0 0h136v136H0z" />
            <image
              href="${page[11].qr}"
              preserveAspectRatio="none"
              width="136"
              height="136"
            />
          </g>
          <use href="#b" />
          <use href="#c" />
          <text style="font-kerning: normal" transform="translate(109.748 51.512)">
            <tspan
              x="0"
              y="36.928"
              style="font-feature-settings: 'liga' 0, 'case' 0, 'cpsp' 0"
              font-size="43"
              font-family="DPO8 Arial,DPO8Fallback,Arial"
              font-weight="400"
            >
              ${page[11].side}
            </tspan>
          </text>
          <use href="#d" />
          <path
            d="M8.504 0h263.792q8.504 0 8.504 8.504v90.992q0 8.504-8.504 8.504H8.504Q0 108 0 99.496V8.504Q0 0 8.504 0z"
            fill="none"
            stroke="#b8c2c9"
            vector-effect="non-scaling-stroke"
            pointer-events="all"
          />
        </g>
        <g transform="translate(13.2 582.9)" clip-path="url('#a')">
          <path fill="#fff" d="M-4.5 0h288.9v108H-4.5z" />
          <g transform="translate(-12.725 -14.2)" fill="none">
            <path d="M0 0h136v136H0z" />
            <image
              href="${page[5].qr}"
              preserveAspectRatio="none"
              width="136"
              height="136"
            />
          </g>
          <use href="#b" />
          <use href="#c" />
          <text style="font-kerning: normal" transform="translate(109.748 51.512)">
            <tspan
              x="0"
              y="36.928"
              style="font-feature-settings: 'liga' 0, 'case' 0, 'cpsp' 0"
              font-size="43"
              font-family="DPO8 Arial,DPO8Fallback,Arial"
              font-weight="400"
            >
              ${page[5].side}
            </tspan>
          </text>
          <use href="#d" />
          <path
            d="M8.504 0h263.792q8.504 0 8.504 8.504v90.992q0 8.504-8.504 8.504H8.504Q0 108 0 99.496V8.504Q0 0 8.504 0z"
            fill="none"
            stroke="#b8c2c9"
            vector-effect="non-scaling-stroke"
            pointer-events="all"
          />
        </g>
        <g transform="translate(301.2 582.9)" clip-path="url('#a')">
          <path fill="#fff" d="M-3.6 0h288.9v108H-3.6z" />
          <g transform="translate(-12.725 -14.2)" fill="none">
            <path d="M0 0h136v136H0z" />
            <image
              href="${page[12].qr}"
              preserveAspectRatio="none"
              width="136"
              height="136"
            />
          </g>
          <use href="#b" />
          <use href="#c" />
          <text style="font-kerning: normal" transform="translate(109.748 51.512)">
            <tspan
              x="0"
              y="36.928"
              style="font-feature-settings: 'liga' 0, 'case' 0, 'cpsp' 0"
              font-size="43"
              font-family="DPO8 Arial,DPO8Fallback,Arial"
              font-weight="400"
            >
              ${page[12].side}
            </tspan>
          </text>
          <use href="#d" />
          <path
            d="M8.504 0h263.792q8.504 0 8.504 8.504v90.992q0 8.504-8.504 8.504H8.504Q0 108 0 99.496V8.504Q0 0 8.504 0z"
            fill="none"
            stroke="#b8c2c9"
            vector-effect="non-scaling-stroke"
            pointer-events="all"
          />
        </g>
        <g transform="translate(13.2 690.9)" clip-path="url('#a')">
          <path fill="#fff" d="M-4.5 0h288.9v112.5H-4.5z" />
          <g transform="translate(-12.725 -14.2)" fill="none">
            <path d="M0 0h136v136H0z" />
            <image
              href="${page[6].qr}"
              preserveAspectRatio="none"
              width="136"
              height="136"
            />
          </g>
          <use href="#b" />
          <use href="#c" />
          <text style="font-kerning: normal" transform="translate(109.748 51.512)">
            <tspan
              x="0"
              y="36.928"
              style="font-feature-settings: 'liga' 0, 'case' 0, 'cpsp' 0"
              font-size="43"
              font-family="DPO8 Arial,DPO8Fallback,Arial"
              font-weight="400"
            >
              ${page[6].side}
            </tspan>
          </text>
          <use href="#d" />
          <path
            d="M8.504 0h263.792q8.504 0 8.504 8.504v90.992q0 8.504-8.504 8.504H8.504Q0 108 0 99.496V8.504Q0 0 8.504 0z"
            fill="none"
            stroke="#b8c2c9"
            vector-effect="non-scaling-stroke"
            pointer-events="all"
          />
        </g>
        <g transform="translate(301.2 690.9)" clip-path="url('#a')">
          <path fill="#fff" d="M-3.6 0h288.9v112.5H-3.6z" />
          <g transform="translate(-12.725 -14.2)" fill="none">
            <path d="M0 0h136v136H0z" />
            <image
              href="${page[13].qr}"
              preserveAspectRatio="none"
              width="136"
              height="136"
            />
          </g>
          <use href="#b" />
          <use href="#c" />
          <text style="font-kerning: normal" transform="translate(109.748 51.512)">
            <tspan
              x="0"
              y="36.928"
              style="font-feature-settings: 'liga' 0, 'case' 0, 'cpsp' 0"
              font-size="43"
              font-family="DPO8 Arial,DPO8Fallback,Arial"
              font-weight="400"
            >
              ${page[13].side}
            </tspan>
          </text>
          <use href="#d" />
          <path
            d="M8.504 0h263.792q8.504 0 8.504 8.504v90.992q0 8.504-8.504 8.504H8.504Q0 108 0 99.496V8.504Q0 0 8.504 0z"
            fill="none"
            stroke="#b8c2c9"
            vector-effect="non-scaling-stroke"
            pointer-events="all"
          />
        </g>
      </svg>`

  return svgCode
}
