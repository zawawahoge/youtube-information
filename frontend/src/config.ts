export default {
  APIUrl: process.env.REACT_APP_API_URL ?? "",
  FirebaseAPIKey: process.env.REACT_APP_FIREBASE_API_KEY ?? "",
  FirebaseAuthDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN ?? "",
  FirebaseDatabaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL ?? "",
  ProjectID: process.env.REACT_APP_PROJECT_ID ?? "",
  StorageBucket: process.env.REACT_APP_STORAGE_BUCKET ?? "",
  MessagingSenderID: process.env.REACT_APP_MESSAGING_SENDER_ID ?? "",
  AppID: process.env.REACT_APP_APP_ID ?? "",
  AppMeasurementID: process.env.REACT_APP_MEASUREMENT_ID ?? "",
};
