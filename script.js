function formatText(command) {
  document.execCommand(command, false, null);
}

function saveText() {
  const text = document.getElementById("editor").innerHTML;
  const blob = new Blob([text], { type: "text/html" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "document.html";
  link.click();
}

// Function to change background color of the editor
function changeBackgroundColor(color) {
  document.getElementById("editor").style.backgroundColor = color;
}

// Function to change font color of the editor
function changeFontColor(color) {
  document.getElementById("editor").style.color = color;
}
