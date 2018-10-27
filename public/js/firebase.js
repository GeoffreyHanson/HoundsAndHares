// const firebase = require("firebase");
// const firebaseui = require("firebaseui");

const config = {
  apiKey: "AIzaSyBEgVFhRfuKzyoJNWuTU86h7ft6jeJwsaw",
  authDomain: "french-military-game-online.firebaseapp.com",
  databaseURL: "https://french-military-game-online.firebaseio.com",
  projectId: "french-military-game-online",
  storageBucket: "french-military-game-online.appspot.com",
  messagingSenderId: "287137146730"
};
firebase.initializeApp(config);

initApp = function() {
  firebase.auth().onAuthStateChanged(
    user => {
      if (user) {
        // User is signed in.
        const displayName = user.displayName;
        const email = user.email;
        const emailVerified = user.emailVerified;
        const photoURL = user.photoURL;
        const uid = user.uid;
        const phoneNumber = user.phoneNumber;
        const providerData = user.providerData;
        user.getIdToken().then(accessToken => {
          document.getElementById("sign-in-status").textContent = "Signed in";
          document.getElementById("sign-in").textContent = "Sign out";
          document.getElementById(
            "account-details"
          ).textContent = JSON.stringify(
            {
              displayName,
              email,
              emailVerified,
              phoneNumber,
              photoURL,
              uid,
              accessToken,
              providerData
            },
            null,
            "  "
          );
        });
      } else {
        // User is signed out.
        document.getElementById("sign-in-status").textContent = "Signed out";
        document.getElementById("sign-in").textContent = "Sign in";
        document.getElementById("account-details").textContent = "null";
        // FirebaseUI config.
        const uiConfig = {
          signInSuccessUrl: "game.html",
          signInOptions: [
            // Leave the lines as is for the providers you want to offer your users.
            // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
            // firebase.auth.GithubAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
            // firebase.auth.PhoneAuthProvider.PROVIDER_ID,
            firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
          ],
          // tosUrl and privacyPolicyUrl accept either url string or a callback
          // function.
          // Terms of service url/callback.
          tosUrl: "notyet.html",
          // Privacy policy url/callback.
          privacyPolicyUrl() {
            window.location.assign("notyet.html");
          }
        };

        // Initialize the FirebaseUI Widget using Firebase.
        const ui = new firebaseui.auth.AuthUI(firebase.auth());
        // The start method will wait until the DOM is loaded.
        ui.start("#firebaseui-auth-container", uiConfig);
      }
    },
    error => {
      console.log(error);
    }
  );
};

window.addEventListener("load", () => {
  initApp();
});
