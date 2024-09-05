# Usaly static page
This project is using Firebase as database, image store and hosting.

## Development
Environment app variables
```
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
``` 
Install NPM depedencies and run project locally with

```npm run dev```

## Deploy
_Follow Firebase steps to configure Hosting_
1. Configure firebase-tools: ```npm install -g firebase-tools```
2. Login to firebase tools: ```firebase login```

Once you are logged in:

1. Build image locally through Vite build: ```npm run build```
2. Deploy files to Firebas hoting: ```firebase deploy```