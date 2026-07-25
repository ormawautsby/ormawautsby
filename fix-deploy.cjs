const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const pkgPath = '.output/server/package.json';

// 1. Hapus package Windows-only dan tambahkan firebase-functions
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
delete pkg.dependencies['@img/sharp-win32-x64'];
delete pkg.dependencies['@img/sharp-linux-x64'];
delete pkg.dependencies['@img/sharp-linux-arm64'];
pkg.engines = { node: '22' };

// Tambahkan/update firebase-functions ke versi terbaru
pkg.dependencies['firebase-functions'] = '^7.2.5';
console.log('✅ Added/updated firebase-functions to ^7.2.5');

fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
console.log('✅ Removed Windows-only sharp binaries & updated engines');

// 2. Hapus package-lock.json lama jika ada
const lockPath = '.output/server/package-lock.json';
if (fs.existsSync(lockPath)) {
  fs.unlinkSync(lockPath);
  console.log('✅ Deleted stale package-lock.json');
}

// 3. Buat .npmrc dengan legacy-peer-deps
fs.writeFileSync('.output/server/.npmrc', 'engine-strict=false\nlegacy-peer-deps=true\n');
console.log('✅ Created .npmrc');

// 4. Copy firebase-functions dari root node_modules ke output (lebih reliable dari npm install)
const src = path.resolve('node_modules/firebase-functions');
const dest = path.resolve('.output/server/node_modules/firebase-functions');
if (fs.existsSync(src)) {
  console.log('📦 Copying firebase-functions from root node_modules...');
  try {
    execSync(`xcopy /E /I /Y "${src}" "${dest}"`, { stdio: 'inherit' });
    console.log('✅ firebase-functions copied successfully');
  } catch (e) {
    console.error('❌ xcopy failed:', e.message);
    process.exit(1);
  }
} else {
  console.error('❌ firebase-functions not found in root node_modules. Run: npm install');
  process.exit(1);
}

console.log('🚀 Ready to deploy! Run: firebase deploy');

