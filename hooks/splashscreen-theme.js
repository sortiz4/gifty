const fs = require('fs');

const PATH = './platforms/android/app/src/main/java/org/apache/cordova/splashscreen/SplashScreen.java';
const OLD_TEXT = 'android.R.style.Theme_Translucent_NoTitleBar';
const NEW_TEXT = 'cordova.getActivity().getResources().getIdentifier("AppTheme", "style", cordova.getActivity().getPackageName())';

module.exports = function() {
  try {
    fs.writeFileSync(PATH, fs.readFileSync(PATH, 'utf-8').replace(OLD_TEXT, NEW_TEXT));
  } catch(exc) {
    console.error(exc);
  }
};
