function rot13() {
  let strCopy = document.getElementById("string").value.toUpperCase().split('');
  for (let i = 0; i < strCopy.length; i++) {
    if (/[A-Z]/.test(strCopy[i])) {
      strCopy[i] = (strCopy[i].charCodeAt(0) - 13);
      if (strCopy[i] < 65) {
        strCopy[i] += 26;
      }
      strCopy[i] = String.fromCharCode(strCopy[i]);
    }
  }
  console.log(strCopy.join(''));
  document.getElementById("string").value = strCopy.join("");
}