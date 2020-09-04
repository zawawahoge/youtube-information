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
  authDomain: config.FirebaseAuthDomain,
  databaseURL: config.FirebaseDatabaseURL,
  projectId: config.ProjectID,
  storageBucket: config.StorageBucket,
  messagingSenderId: config.MessagingSenderID,
  appId: config.AppID,
  measurementId: config.AppMeasurementID,
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
      return false;
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
  // signInSuccessUrl: "/main",
  signInOptions: [
    {
      provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      // scopes: [
      //   'https://www.googleapis.com/auth/youtube.channel-memberships.creator',
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
      {/* <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter> */}
      <div id="firebaseui-auth-container"></div>
      <div id="loader">Loading...</div>
    </div>
  );
}

export default App;
