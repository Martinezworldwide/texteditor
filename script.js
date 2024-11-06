// Format text commands
function formatText(command) {
  document.execCommand(command, false, null);
}

// Save text as HTML file
function saveText() {
  const text = document.getElementById("editor").innerHTML;
  const blob = new Blob([text], { type: "text/html" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "document.html";
  link.click();
}

// Change background color of the editor
function changeBackgroundColor(color) {
  const editor = document.getElementById("editor");
  editor.style.backgroundColor = color;
}

// Change font color of the editor
function changeFontColor(color) {
  const editor = document.getElementById("editor");
  editor.style.color = color;
}
