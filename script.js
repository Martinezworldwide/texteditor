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
