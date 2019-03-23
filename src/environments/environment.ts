// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyCpI_LrL_NKVOkfKFoXFUZq-jZFX_pf6uI',
    authDomain: 'travelagentdb.firebaseapp.com',
    databaseURL: 'https://travelagentdb.firebaseio.com',
    projectId: 'travelagentdb',
    storageBucket: 'travelagentdb.appspot.com',
    messagingSenderId: '132724980201'
  }
};
