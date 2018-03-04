// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCPR5aXjhbCxZpgA6Y4BSQEccIz_hHLi_Q',
    authDomain: 'fb-storage-app.firebaseapp.com',
    databaseURL: 'https://fb-storage-app.firebaseio.com',
    projectId: 'fb-storage-app',
    storageBucket: 'fb-storage-app.appspot.com',
    messagingSenderId: '265603018413'
  }
};
