# Stock-Widget-using-Google-Spreadsheets
How to create a Widget on IOS 14+ which allows you to display live information such as stocks from a Google Spreadsheet.

# Create an IOS Stocks Widget Tracker with Google Spreadsheets.
![](https://user-images.githubusercontent.com/77209522/139520410-090e5f71-1bfc-4300-bf6b-70e8db3bebdc.png)

***

### What you will need:
- Google Spreadsheet
- "Scriptable" App on the App Store
- Be familiar with "=GOOGLEFINANCE" on Google Spreadsheet. [Tutorial on GOOGLEFINANCE](https://support.google.com/docs/answer/3093281?hl=en)
## Steps:
1. You will need a Google Spreadsheet with the information you would like to be displayed. I have provided a Google Spreadsheet to get you started: [Template](https://docs.google.com/spreadsheets/d/1JUb-xGdvgL6EtBMy7T3cU17oeXsZu0xg34k-_u1FFVI/edit?usp=sharing). You may use this template or create your own. Make a copy of this template to be able to edit it.
2. Once set up with your Spreadsheet, you will need to publish it to the web to get the endpoint URL. To do that navigate to **File -> Publish to Web -> Select "Link" -> Select the Sheet with the information you want on the Widget -> Select "Web Page" -> Publish**.
3. Next you need to gather the Spreadsheet ID. To find the Spreadsheet ID, use the Spreadsheet URL at the search engine bar and find highlighted part as shown in this image:
![Spreadsheet ID](https://media.discordapp.net/attachments/677335560934916146/797572289804632113/unknown.png)
4. Next we need to find the sheet number, this will be at the bottom of your Spreadsheet: 
![sheet number](https://media.discordapp.net/attachments/677335560934916146/797575420580724736/unknown.png) In this example it is sheet number 1.
5. Using the information in steps 3 and 4, we will create the URL, use the provided URL and replace "<<YOUR_SPREADSHEET_ID>>" and "<<YOUR_SHEET_NUMBER>>" with the correct information as found in step 3 and 4: `https://sheets.googleapis.com/v4/spreadsheets/<<SPREADSHEETID>>/values/<<SPREADSHEETNAME>>1?alt=json&key=<<APIKEY>>`
6. We now can download the Scriptable app from the App store. Once downloaded open the app and press "+" to create a new script.
7. Find the "Code.js" file in code part of this GitHub and paste it into your script file on the Scriptable app.**Do not forget** to change the `const endpoint =` to your specific URL.
8. Add the widget to your IOS device and select the correct script to display on the widget.

***
### Code File: https://github.com/ayazzlockhat/Stock-Widget-using-Google-Spreadsheets/blob/main/code.js


***
### IMPORTANT:
- The X and Y variables in this part of the code `stockValue = json.values[y][x]`
`mktValue = json.values[y][x]` `roi = json.values[y][x]` will be different depending on the row and column your information is on the Spreadsheet. You must find the correct placement numbers to have the widget display the information you would like.
- You must change the `const endpoint = ` value to your specific URL found in step 5
