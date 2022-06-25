/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
document.querySelector(".boton").addEventListener("click", myFunction);
function myFunction() {
  //write your code here

  let tipos = ["♦", "♥", "♠", "♣"];
  let numelet = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  let primero = Math.floor(Math.random() * tipos.length);
  let segundo = Math.floor(Math.random() * numelet.length);

  document.querySelector(".figura").innerHTML = tipos[primero];
  document.querySelector(".figura2").innerHTML = tipos[primero];
  document.querySelector(".numero").innerHTML = numelet[segundo];
  document.querySelector(".numero2").innerHTML = numelet[segundo];
  if (primero == 0 || primero == 1) {
    document.querySelector(".figura").style.color = "red";
    document.querySelector(".figura2").style.color = "red";
  } else {
    document.querySelector(".figura").style.color = "black";
    document.querySelector(".figura2").style.color = "black";
  }
}
