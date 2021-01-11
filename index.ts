import QRCode from "qrcode";
import arg from "arg";

const args = arg({
  // Types
  "--username": String,
  "--secret": String,
  "--issuer": String,

  // Aliases
  "-u": "--username",
  "-s": "--secret",
  "-i": "--issuer",
});
console.log(args);

const username = args["--username"];
const secret = args["--secret"];
const issuer = args["--issuer"];

if (!username) {
  throw new Error("Please provide the '--username' argument");
} else if (!secret) {
  throw new Error("Please provide the '--secret' argument");
} else if (!issuer) {
  throw new Error("Please provide the '--issuer' argument");
}

const data = encodeURI(
  `otpauth://totp/${issuer}:${username}?secret=${secret}&issuer=${issuer}`
);

QRCode.toFile("image.png", data);
