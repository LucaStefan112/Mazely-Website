const sharp = require("sharp");
const path = require("path");

const WIDTH = 1200;
const HEIGHT = 630;

const svg = `
<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#001a3a;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#002d5c;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#00172b;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#0074d9;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#1a85ff;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="textGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#4da3ff;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#85c1ff;stop-opacity:1" />
    </linearGradient>
    <!-- Grid pattern -->
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <circle cx="20" cy="20" r="1" fill="rgba(255,255,255,0.06)" />
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)" />
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#grid)" />

  <!-- Decorative blobs -->
  <circle cx="950" cy="120" r="250" fill="rgba(0,116,217,0.08)" />
  <circle cx="200" cy="500" r="200" fill="rgba(26,133,255,0.06)" />
  <circle cx="1100" cy="530" r="150" fill="rgba(0,116,217,0.05)" />

  <!-- Top accent line -->
  <rect x="0" y="0" width="${WIDTH}" height="4" fill="url(#accent)" />

  <!-- Logo area -->
  <circle cx="100" cy="80" r="24" fill="rgba(0,116,217,0.25)" stroke="rgba(0,116,217,0.4)" stroke-width="1.5" />
  <text x="100" y="86" font-family="Arial, Helvetica, sans-serif" font-size="18" font-weight="bold" fill="#4da3ff" text-anchor="middle">M</text>
  <text x="136" y="88" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="bold" fill="#ffffff">Mazely</text>

  <!-- Badge -->
  <rect x="80" y="190" width="340" height="32" rx="16" fill="rgba(0,116,217,0.15)" stroke="rgba(0,116,217,0.3)" stroke-width="1" />
  <circle cx="100" cy="206" r="4" fill="#0074d9" />
  <text x="114" y="212" font-family="Arial, Helvetica, sans-serif" font-size="13" fill="#4da3ff" letter-spacing="0.5">Enterprise Indoor Navigation Platform</text>

  <!-- Main headline -->
  <text x="80" y="280" font-family="Arial, Helvetica, sans-serif" font-size="52" font-weight="bold" fill="#ffffff">Every Visitor Finds</text>
  <text x="80" y="342" font-family="Arial, Helvetica, sans-serif" font-size="52" font-weight="bold" fill="url(#textGrad)">Their Way. Every Time.</text>

  <!-- Subtitle -->
  <text x="80" y="395" font-family="Arial, Helvetica, sans-serif" font-size="18" fill="rgba(255,255,255,0.55)">Purpose-built indoor wayfinding for hospitals, universities,</text>
  <text x="80" y="420" font-family="Arial, Helvetica, sans-serif" font-size="18" fill="rgba(255,255,255,0.55)">and public institutions. No app download required.</text>

  <!-- Bottom cards -->
  <rect x="80" y="475" width="200" height="70" rx="12" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.08)" stroke-width="1" />
  <text x="105" y="510" font-family="Arial, Helvetica, sans-serif" font-size="14" font-weight="bold" fill="#ffffff">Hospitals</text>
  <text x="105" y="530" font-family="Arial, Helvetica, sans-serif" font-size="12" fill="rgba(255,255,255,0.4)">Patient wayfinding</text>

  <rect x="300" y="475" width="200" height="70" rx="12" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.08)" stroke-width="1" />
  <text x="325" y="510" font-family="Arial, Helvetica, sans-serif" font-size="14" font-weight="bold" fill="#ffffff">Universities</text>
  <text x="325" y="530" font-family="Arial, Helvetica, sans-serif" font-size="12" fill="rgba(255,255,255,0.4)">Campus navigation</text>

  <rect x="520" y="475" width="200" height="70" rx="12" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.08)" stroke-width="1" />
  <text x="545" y="510" font-family="Arial, Helvetica, sans-serif" font-size="14" font-weight="bold" fill="#ffffff">Government</text>
  <text x="545" y="530" font-family="Arial, Helvetica, sans-serif" font-size="12" fill="rgba(255,255,255,0.4)">Public buildings</text>

  <!-- Right side mockup - simplified dashboard -->
  <rect x="800" y="160" width="340" height="380" rx="16" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" stroke-width="1" />

  <!-- Mockup header -->
  <circle cx="824" cy="184" r="5" fill="#ff5f57" />
  <circle cx="842" cy="184" r="5" fill="#febc2e" />
  <circle cx="860" cy="184" r="5" fill="#28c840" />
  <rect x="885" y="178" width="120" height="12" rx="6" fill="rgba(255,255,255,0.06)" />

  <!-- Mockup stats -->
  <rect x="820" y="210" width="100" height="55" rx="8" fill="rgba(0,116,217,0.1)" stroke="rgba(0,116,217,0.15)" stroke-width="1" />
  <text x="835" y="238" font-family="Arial, Helvetica, sans-serif" font-size="18" font-weight="bold" fill="#4da3ff">2,471</text>
  <text x="835" y="254" font-family="Arial, Helvetica, sans-serif" font-size="10" fill="rgba(255,255,255,0.3)">Sessions</text>

  <rect x="930" y="210" width="100" height="55" rx="8" fill="rgba(40,200,64,0.1)" stroke="rgba(40,200,64,0.15)" stroke-width="1" />
  <text x="945" y="238" font-family="Arial, Helvetica, sans-serif" font-size="18" font-weight="bold" fill="#28c840">94%</text>
  <text x="945" y="254" font-family="Arial, Helvetica, sans-serif" font-size="10" fill="rgba(255,255,255,0.3)">Completion</text>

  <rect x="1040" y="210" width="80" height="55" rx="8" fill="rgba(254,188,46,0.1)" stroke="rgba(254,188,46,0.15)" stroke-width="1" />
  <text x="1055" y="238" font-family="Arial, Helvetica, sans-serif" font-size="18" font-weight="bold" fill="#febc2e">4.8</text>
  <text x="1055" y="254" font-family="Arial, Helvetica, sans-serif" font-size="10" fill="rgba(255,255,255,0.3)">Rating</text>

  <!-- Mockup chart bars -->
  <rect x="820" y="285" width="298" height="100" rx="8" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.04)" stroke-width="1" />
  <rect x="835" y="350" width="18" height="22" rx="2" fill="rgba(0,116,217,0.3)" />
  <rect x="860" y="335" width="18" height="37" rx="2" fill="rgba(0,116,217,0.35)" />
  <rect x="885" y="345" width="18" height="27" rx="2" fill="rgba(0,116,217,0.3)" />
  <rect x="910" y="320" width="18" height="52" rx="2" fill="rgba(0,116,217,0.4)" />
  <rect x="935" y="340" width="18" height="32" rx="2" fill="rgba(0,116,217,0.35)" />
  <rect x="960" y="310" width="18" height="62" rx="2" fill="rgba(0,116,217,0.45)" />
  <rect x="985" y="325" width="18" height="47" rx="2" fill="rgba(0,116,217,0.4)" />
  <rect x="1010" y="315" width="18" height="57" rx="2" fill="rgba(0,116,217,0.42)" />
  <rect x="1035" y="330" width="18" height="42" rx="2" fill="rgba(0,116,217,0.38)" />
  <rect x="1060" y="305" width="18" height="67" rx="2" fill="rgba(0,116,217,0.5)" />
  <rect x="1085" y="322" width="18" height="50" rx="2" fill="rgba(0,116,217,0.43)" />

  <!-- Mockup list items -->
  <rect x="820" y="400" width="298" height="35" rx="6" fill="rgba(255,255,255,0.03)" />
  <rect x="835" y="410" width="24" height="15" rx="4" fill="rgba(0,116,217,0.15)" />
  <rect x="868" y="412" width="100" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
  <rect x="868" y="422" width="70" height="4" rx="2" fill="rgba(255,255,255,0.05)" />

  <rect x="820" y="442" width="298" height="35" rx="6" fill="rgba(255,255,255,0.03)" />
  <rect x="835" y="452" width="24" height="15" rx="4" fill="rgba(0,116,217,0.15)" />
  <rect x="868" y="454" width="120" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
  <rect x="868" y="464" width="80" height="4" rx="2" fill="rgba(255,255,255,0.05)" />

  <rect x="820" y="484" width="298" height="35" rx="6" fill="rgba(255,255,255,0.03)" />
  <rect x="835" y="494" width="24" height="15" rx="4" fill="rgba(0,116,217,0.15)" />
  <rect x="868" y="496" width="90" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
  <rect x="868" y="506" width="60" height="4" rx="2" fill="rgba(255,255,255,0.05)" />

  <!-- Bottom URL -->
  <text x="1120" y="600" font-family="Arial, Helvetica, sans-serif" font-size="14" fill="rgba(255,255,255,0.3)" text-anchor="end">mazely.app</text>
</svg>`;

async function generate() {
  await sharp(Buffer.from(svg))
    .resize(WIDTH, HEIGHT)
    .png({ quality: 95 })
    .toFile(path.join(__dirname, "..", "public", "og-image.png"));
  console.log(`Generated og-image.png (${WIDTH}x${HEIGHT})`);
}

generate().catch(console.error);
