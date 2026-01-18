const pass = document.getElementById("password");
const msg = document.getElementById("message");
const str = document.getElementById("Strength");

pass.addEventListener("input", () => {
  if (pass.value.length === 0) {
    msg.style.display = "none";
    pass.style.borderColor = "#ccc";
    return;
  }

  msg.style.display = "block";

  if (pass.value.length < 4) {
    str.innerHTML = "Weak";
    pass.style.borderColor = "#ff5925";
    msg.style.color = "#ff5925";
  } 
  else if (pass.value.length < 8) {
    str.innerHTML = "Medium";
    pass.style.borderColor = "yellow";
    msg.style.color = "yellow";
  } 
  else {
    str.innerHTML = "Strong";
    pass.style.borderColor = "#26d730";
    msg.style.color = "#26d730";
  }
});

