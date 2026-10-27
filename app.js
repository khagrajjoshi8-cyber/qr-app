const input = document.getElementById("input");
const generateBtn = document.getElementById("generate");
const qrBox = document.getElementById("qr");
const errorEl = document.getElementById("error");
const downloadBtn = document.getElementById("download");

// Runs when you click "Generate"
generateBtn.addEventListener("click", () => {
  const text = input.value.trim();
  errorEl.textContent = "";
  qrBox.innerHTML = "";
  downloadBtn.hidden = true;

  if (!text) {
    errorEl.textContent = "Enter something first.";
    return;
  }

  try {
    new QRCode(qrBox, {
      text: text,
      width: 256,
      height: 256,
    });
    downloadBtn.hidden = false;   // show the download button
  } catch (e) {
    errorEl.textContent = "That's too much text for a QR code. Shorten it.";
  }
});

// Runs when you click "Download PNG"
downloadBtn.addEventListener("click", () => {
  const canvas = qrBox.querySelector("canvas");
  const link = document.createElement("a");
  link.href = canvas.toDataURL("image/png");
  link.download = "qr-code.png";
  link.click();
});