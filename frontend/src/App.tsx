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
import LogoutButton from './components/LogoutButton/LogoutButton';
import Main from "./components/Main/Main";

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
var uiConfig: firebaseui.auth.Config = {
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
}
ui.start("#firebaseui-auth-container", uiConfig);

var initApp = function() {
  localStorage.clear();
  firebase.auth().onAuthStateChanged(function(user) {
    var signInStatus = document.getElementById('sign-in-status')!;
    var signIn = document.getElementById('sign-in')!;
    var accountDetails = document.getElementById('account-details')!;

    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var uid = user.uid;
      var phoneNumber = user.phoneNumber;
      var providerData = user.providerData;
      user.getIdToken().then(function(accessToken) {
        localStorage.setItem("token", accessToken);
        signInStatus.textContent = 'Signed in';
        signIn.textContent = 'Sign out';
        accountDetails.textContent = JSON.stringify({
          displayName: displayName,
          email: email,
          emailVerified: emailVerified,
          phoneNumber: phoneNumber,
          photoURL: photoURL,
          uid: uid,
          accessToken: accessToken,
          providerData: providerData
        }, null, '  ');
      });
    } else {
      // User is signed out.
      signInStatus.textContent = 'Signed out';
      signIn.textContent = 'Sign In';
      accountDetails.textContent = 'null';
    }
  }, function(error) {
    console.log(error);
  });
};

window.addEventListener('load', function() {
  initApp();
});

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter> */}
      <div id="firebaseui-auth-container"></div>
      <div id="loader">Loading...</div>

      <div id="sign-in-status"></div>
      <div id="sign-in"></div>
      <pre id="account-details"></pre>
      <Main></Main>
      <LogoutButton></LogoutButton>
    </div>
  );
}

export default App;
