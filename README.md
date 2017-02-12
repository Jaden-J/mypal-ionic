# mypal-ionic
Mobile app to see Myki account details

I'm making this app because the [Myki site](https://www.mymyki.com.au/NTSWebPortal/Login.aspx) doesn't have a mobile view nor a mobile app, and I wanted to experiment with the [Ionic framework](https://ionicframework.com) to make a hybrid mobile app. This is a spinoff from my abandoned [Eastlink app](https://github.com/longzheng/eastly-ionic/).

## Design mockup
Coming soon

## Current features
- Log in to Myki online account with username & password
- Show current/archived myki cards
- Shows myki money & myki pass balance
- Shows card information
- Shows recent transactions

## Planned features
- Top up with credit card
- Show top up locations

## Build requirements
Must have Cordova and [Ionic 2 installed](https://ionicframework.com/getting-started/) ```npm install -g cordova ionic```
Install npm packages ```npm install```
When debugging with Chrome, security limitations must be disabled since we're accessing a third-party site without CORS headers
```
OSX from terminal
open -a Google\ Chrome --args --disable-web-security --user-data-dir
  
Windows from cmd
chrome.exe --disable-web-security --user-data-dir
```
