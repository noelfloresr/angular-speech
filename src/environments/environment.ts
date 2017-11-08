// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  //Initialize firebase
  firebase : {
    apiKey: "AIzaSyCB3esljHlWWfsF1JjDlaetAIbUb7Ds0Rc",
    authDomain: "speech-app-9c5ca.firebaseapp.com",
    databaseURL: "https://speech-app-9c5ca.firebaseio.com",
    projectId: "speech-app-9c5ca",
    storageBucket: "speech-app-9c5ca.appspot.com",
    messagingSenderId: "189019232422"
  }
};
