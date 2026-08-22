import fs from "node:fs";

const path = "dist/index.html";
let html = fs.readFileSync(path, "utf8");
const head = `<link rel="manifest" href="./manifest.json">
<meta name="theme-color" content="#073B4C">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="Turismo Bertioga">
<link rel="apple-touch-icon" href="./icon.svg">`;
const worker = `<script>if("serviceWorker" in navigator){window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js"));}</script>`;
html = html.replace("</head>", `${head}\n</head>`).replace("</body>", `${worker}\n</body>`);
fs.writeFileSync(path, html);
