// The URL of your JSON endpoint
const endpoint = "https://spreadsheets.google.com/feeds/cells/1tgBHYKBqikSJkPrj5KupmP336NXdvG1hz3qYDv_stIc/1/public/full?alt=json"

// Function that performs the request to the JSON endpoint
async function loadItems() {
    let at = endpoint
    let req = new Request(at)
    let corpo = await req.loadJSON()
    // We return just the cells
    return corpo.feed.entry
}
// Request the spreadsheet data
let json = await loadItems()

// Obtaining the content of the exact cell we are looking for
stockValue = json[64].content["$t"]
mktValue = json[63].content["$t"]
roi = json[66].content["$t"]

// Create the widget
let w = new ListWidget()
w.backgroundColor = new Color("#323F4B")

// Add the value of the stock to the widget
u = w.addText(mktValue)
u.textColor = new Color("#7984EE")
u.font = new Font("Avenir-Heavy",18)

t = w.addText(stockValue)

t.textColor = new Color("#85C3FF")
t.font = new Font("Avenir-Heavy",22)

var num = roi
var final = parseFloat(num)

if (final < 0.00) {
  roiP = w.addText(roi)
  roiP.shadowRadius = 9
  roiP.shadowColor = Color.red()
  roiP.textColor = new Color("#CF5C60")
  roiP.font = new Font("Avenir-Heavy",14)
} else if (final == 0.00) {
  roiP = w.addText(roi)
  roiP.textColor = Color.gray()
  roiP.font = new Font("Avenir-Heavy",14)

} else {
  roiP = w.addText(roi)
  roiP.shadowRadius = 9
  roiP.shadowColor = Color.green()
  roiP.textColor = new Color("#4AB471")
  roiP.font = new Font("Avenir-Heavy",14)
}


Script.setWidget(w)
Script.complete()
