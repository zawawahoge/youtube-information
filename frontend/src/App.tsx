import React, { useEffect, useState } from "react";
// import "./App.css";
import {
  ListSubscribedChannelsRequest,
  ListSubscribedChannelsResponse,
  Channel,
} from "./proto/commonservice_pb";
import { CommonServiceClient } from "./proto/commonservice_grpc_web_pb";
import Routes from "./routes/Routes";
import config from "./config";
import * as firebaseui from "firebaseui";
import firebase from "firebase";
import { BrowserRouter } from "react-router-dom";

const firebaseConfig = {
  apiKey: config.FirebaseAPIKey,
  authDomain: "information-56b87.firebaseapp.com",
  databaseURL: "https://information-56b87.firebaseio.com",
  projectId: "information-56b87",
  storageBucket: "information-56b87.appspot.com",
  messagingSenderId: "20695122318",
  appId: "1:20695122318:web:7de966d779c4bcc4dea4df",
  measurementId: "G-9FM7MD1TS5",
};

console.log(firebaseConfig);
firebase.initializeApp(firebaseConfig);

var ui = new firebaseui.auth.AuthUI(firebase.auth());
ui.start("#firebaseui-auth-container", {
  callbacks: {
    signInSuccessWithAuthResult: function (authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      console.log(authResult, redirectUrl);
      return true;
    },
    uiShown: function () {
      // The widget is rendered.
      // Hide the loader.
      var e = document.getElementById("loader");
      if (e !== null) {
        e.style.display = "none";
      }
    },
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  // signInFlow: 'popup',
  signInSuccessUrl: "/main",
  signInOptions: [
    {
      provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      // scopes: [
      //   'https://www.googleapis.com/auth/contacts.readonly'
      // ],
      customParameters: {
        // Forces account selection even when one account
        // is available.
        prompt: "select_account",
      },
    },
  ],
  // // Terms of service url.
  // tosUrl: '<your-tos-url>',
  // // Privacy policy url.
  // privacyPolicyUrl: '<your-privacy-policy-url>'
});

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter>
      <div id="firebaseui-auth-container"></div>
      <div id="loader">Loading...</div>
    </div>
  );
}

export default App;
