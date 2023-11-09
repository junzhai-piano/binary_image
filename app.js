console.log("test app");

import database from "./db.js";
console.log(database.bio);

const bio = document.querySelector(".bio");
const wordCount = document.querySelector(".word-count");

const url = document.querySelector(".url");
const user = document.querySelector(".user");
const tel = document.querySelector(".tel");
const img = document.querySelector("img");

console.log(bio, url, user, tel, img);

bio.textContent = database.bio;
wordCount.textContent = database.bio.trim().split(/\s+/).length;
url.textContent = database.url.split("/")[2].replace("www.", "");
user.textContent = `${database.user.firstName} ${database.user.lastName}`;
tel.textContent = `(${database.tel.substring(0, 3)})-${database.tel.substring(
  3,
  6
)}`;

img.setAttribute("src", database.img);

console.log(database.bio.trim().split(/\s+/).length);
