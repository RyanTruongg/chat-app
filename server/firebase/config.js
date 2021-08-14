require("dotenv").config();

const config = {
  type: "service_account",
  project_id: "chat-app-73a8d",
  private_key_id: "1ab4f7aafc60adce535d8475e27b4a22dca1b35d",
  private_key: process.env.PRIVATE_KEY.replace(/\\n/g, "\n"),
  client_email:
    "firebase-adminsdk-rd1zg@chat-app-73a8d.iam.gserviceaccount.com",
  client_id: "112520198797901919483",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-rd1zg%40chat-app-73a8d.iam.gserviceaccount.com",
};

module.exports = config;
