#!/bin/bash
old='android.R.style.Theme_Translucent_NoTitleBar'
new='cordova.getActivity().getResources().getIdentifier("AppTheme", "style", cordova.getActivity().getPackageName())'
sed -i "s/$old/$new/" "./platforms/android/app/src/main/java/org/apache/cordova/splashscreen/SplashScreen.java"
