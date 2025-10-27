const morseCode = {
  A: ".-", B: "-...", C: "-.-.", D: "-..", E: ".", F: "..-.", G: "--.",
  H: "....", I: "..", J: ".---", K: "-.-", L: ".-..", M: "--", N: "-.",
  O: "---", P: ".--.", Q: "--.-", R: ".-.", S: "...", T: "-",
  U: "..-", V: "...-", W: ".--", X: "-..-", Y: "-.--", Z: "--..",
  0: "-----", 1: ".----", 2: "..---", 3: "...--", 4: "....-",
  5: ".....", 6: "-....", 7: "--...", 8: "---..", 9: "----.",
  ".": ".-.-.-", ",": "--..--", "?": "..--..", "'": ".----.",
  "!": "-.-.--", "/": "-..-.", "(": "-.--.", ")": "-.--.-",
  "&": ".-...", ":": "---...", ";": "-.-.-.", "=": "-...-",
  "+": ".-.-.", "-": "-....-", "_": "..--.-", "\"": ".-..-.",
  "$": "...-..-", "@": ".--.-.", " ": "/"
};

const reverseMorse = Object.fromEntries(
  Object.entries(morseCode).map(([k, v]) => [v, k])
);

function encodeMorse() {
  const text = document.getElementById("input").value.toUpperCase();
  const result = text.split("").map(ch => morseCode[ch] || ch).join(" ");
  document.getElementById("output").value = result;
}

function decodeMorse() {
  const code = document.getElementById("input").value.trim();
  const result = code.split(" / ")
    .map(word => word.split(" ").map(sym => reverseMorse[sym] || "").join(""))
    .join(" ");
  document.getElementById("output").value = result;
}

function clearFields() {
  document.getElementById("input").value = "";
  document.getElementById("output").value = "";
}

