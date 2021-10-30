// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: blue; icon-glyph: chart-line;
// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: blue; icon-glyph: chart-line;
// The URL of your JSON endpoint
const endpoint = 'https://sheets.googleapis.com/v4/spreadsheets/<<SPREADSHEETID>>/values/<<SPREADSHEETNAME>>1?alt=json&key=<<APIKEY>>';

// Function that performs the request to the JSON endpoint
async function loadItems() {
    let at = endpoint
    let req = new Request(at)
    let corpo = await req.loadJSON()
    // We return just the cells
    return corpo
}
// Request the spreadsheet data
let json = await loadItems()

// Obtaining the content of the exact cell we are looking for
stockValue = json.values[y][x] // Must update y and x to fit your google sheet cells
mktValue = json.values[y][x]
roi = json.values[y][x]

// Create title and appIcon
let title = "Portfolio"
let appIcon = await loadAppIcon()

// Create the widget
let widget = new ListWidget()
let gradient = new LinearGradient()
gradient.locations = [0,1]
gradient.colors = [
  new Color("141414"),
  new Color("13233F")
]
widget.backgroundGradient = gradient

// Show appIcon and title
let titleStack = widget.addStack()
let appIconElement = titleStack.addImage(appIcon)
appIconElement.imageSize = new Size(20,20)
appIconElement.cornerRadius = 4
titleStack.addSpacer(4)
let titleElement = titleStack.addText(title)
titleElement.textColor = Color.white()
titleElement.textOpacity = 0.7
titleElement.font = new Font("Avenir-Heavy",16)
widget.addSpacer(10)

// Add the value of the stock to the widget
u = widget.addText(mktValue)
u.textColor = new Color("#8860d0")
u.font = new Font("Avenir-Heavy",18)

t = widget.addText(stockValue)
t.textColor = new Color("#fafafa")
t.font = new Font("Avenir-Heavy",22)

var num = roi
var final = parseFloat(num)

if (final < 0.00) {
  roiP = widget.addText(roi)
  roiP.shadowRadius = 7
  roiP.shadowColor = Color.red()
  roiP.textColor = new Color("#CF5C60")
  roiP.font = new Font("Avenir-Heavy",14)
} else if (final == 0.00) {
  roiP = widget.addText(roi)
  roiP.textColor = Color.gray()
  roiP.font = new Font("Avenir-Heavy",14)

} else {
  roiP = widget.addText(roi)
  roiP.shadowRadius = 7
  roiP.shadowColor = Color.green()
  roiP.textColor = new Color("#4AB471")
  roiP.font = new Font("Avenir-Heavy",14)
}

// Add symbol
let docsSymbol = SFSymbol.named("chart.bar")
let footerStack = widget.addStack()
let docsElement = footerStack.addImage(docsSymbol.image)
docsElement.imageSize = new Size(20,20)
docsElement.tintColor = Color.white()
docsElement.imageOpacity = 0.5
docsElement.url = "https://docs.scriptable.app"


async function loadAppIcon() {
  let url = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/279/rocket_1f680.png"
  //let url = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/279/gem-stone_1f48e.png"
  let request = new Request(url)
  return request.loadImage()
}

Script.setWidget(widget)
Script.complete()
args.widgetParameter
