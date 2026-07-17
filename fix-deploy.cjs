const fs = require('fs');
const path = require('path');
const pkgPath = '.output/server/package.json';

// 1. Hapus package Windows-only
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
delete pkg.dependencies['@img/sharp-win32-x64'];
delete pkg.dependencies['@img/sharp-linux-x64'];
delete pkg.dependencies['@img/sharp-linux-arm64'];
pkg.engines = { node: '22' };
fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
console.log('✅ Removed Windows-only sharp binaries & updated engines');

// 2. Hapus package-lock.json lama jika ada (agar Firebase pakai npm install, bukan npm ci)
const lockPath = '.output/server/package-lock.json';
if (fs.existsSync(lockPath)) {
  fs.unlinkSync(lockPath);
  console.log('✅ Deleted stale package-lock.json');
}

// 3. Buat .npmrc
fs.writeFileSync('.output/server/.npmrc', 'engine-strict=false\nlegacy-peer-deps=true\n');
console.log('✅ Created .npmrc');
