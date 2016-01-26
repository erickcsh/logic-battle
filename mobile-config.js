App.accessRule("*");
App.info({
  name: 'Logic Battle',
  description: 'Challenge your friends to see who can reason more quickly, with Logic Battle',
  version: '1.0.0'
});

App.icons({
  // iOS
  'iphone': 'resources/logo/ios/Icon-Small-50.png',
  'iphone_2x': 'resources/logo/ios/Icon-Small-50@2x.png',
  'ipad': 'resources/logo/ios/Icon-72.png',
  'ipad_2x': 'resources/logo/ios/Icon-72@2x.png',

  // Android
  'android_ldpi': 'resources/logo/android/mipmap-ldpi/ic_launcher.png',
  'android_mdpi': 'resources/logo/android/mipmap-mdpi/ic_launcher.png',
  'android_hdpi': 'resources/logo/android/mipmap-hdpi/ic_launcher.png',
  'android_xhdpi': 'resources/logo/android/mipmap-xhdpi/ic_launcher.png'
});

App.setPreference('Orientation', 'portrait');
App.setPreference('SplashScreen', 'CDVSplashScreen')
App.setPreference('HideKeyboardFormAccessoryBar', true);

