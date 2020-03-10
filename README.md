# Gifty
Gifty is a completely free and open source gift exchange application for
Android modeled after the age-old tradition of drawing names from a bowl.
Start the application, enter the names of the participants, and pass the
device around while everyone is randomly assigned to each other.

Gifty is available on the [Google Play Store](https://play.google.com/store/apps/details?id=me.stevenortiz.gifty).

## Compilation
Those seeking to compile must have...

- Node.js 13.10
- NPM 6.13
- Ionic 6.1
- Cordova 9.0
- Cordova Resources 0.9
- Android Studio 4.0
- Android SDK 28

Once these requirements have been met, simply clone the repository and execute
`py setup.py -as` (this will download the required assets and initialize the
project). Once completed, the application can be compiled by executing
`ionic cordova build android --release`.
