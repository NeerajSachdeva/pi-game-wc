const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/pi-game-wc/runtime.js',
    './dist/pi-game-wc/polyfills.js',
    './dist/pi-game-wc/main.js'
  ];

  await fs.ensureDir('public');
  await concat(files, 'public/pi-game-wc.js');
})();