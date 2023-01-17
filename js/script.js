// Copyright (c) 2023 Ekaterina All rights reserved
//
// Created by: Ekaterina
// Created on: Jan 2023
// This file contains the JS functions for index.html

"use strict"

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Assignment-5/sw.js", {
    scope: "/ICS20-Assignment-5/",
  })
}

/**
 * This function displays an alert.
 */
function myButtonClicked() {
  // input
  const numberOfLoops = parseFloat(document.getElementById("numberOfLoops").value)
  let counter = 0
  let denominator = -1
  let pi = 0

  // process
  while (counter < numberOfLoops) {
    let numerator = 4
    denominator = denominator + 2
    let multiply = (-1) ** counter
    let aLittleBit = (numerator / denominator) * multiply
    pi = pi + aLittleBit
    counter = counter + 1
  }

  // output
  document.getElementById("answer").innerHTML = "Your PI is: " + pi
}
