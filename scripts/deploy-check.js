#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Checking deployment requirements...\n');

const checks = [
  {
    name: 'netlify.toml exists',
    check: () => fs.existsSync('netlify.toml'),
    fix: 'Create netlify.toml configuration file'
  },
  {
    name: 'package.json exists',
    check: () => fs.existsSync('package.json'),
    fix: 'Ensure package.json is present'
  },
  {
    name: 'tsconfig.json exists',
    check: () => fs.existsSync('tsconfig.json'),
    fix: 'Create tsconfig.json configuration'
  },
  {
    name: 'postcss.config.js exists',
    check: () => fs.existsSync('postcss.config.js'),
    fix: 'Create postcss.config.js for Tailwind CSS'
  },
  {
    name: 'next.config.js exists',
    check: () => fs.existsSync('next.config.js'),
    fix: 'Create next.config.js with export configuration'
  },
  {
    name: 'out directory exists after build',
    check: () => fs.existsSync('out') && fs.statSync('out').isDirectory(),
    fix: 'Run build command to generate static files'
  },
  {
    name: 'index.html exists in out directory',
    check: () => fs.existsSync('out/index.html'),
    fix: 'Ensure static export generates index.html'
  }
];

let allPassed = true;

checks.forEach(({ name, check, fix }) => {
  const passed = check();
  const status = passed ? '✅' : '❌';
  console.log(`${status} ${name}`);

  if (!passed) {
    console.log(`   💡 Fix: ${fix}`);
    allPassed = false;
  }
});

console.log('\n' + '='.repeat(50));

if (allPassed) {
  console.log('🎉 All deployment checks passed!');
  console.log('Your project is ready for Netlify deployment.');
} else {
  console.log('⚠️  Some checks failed. Please fix the issues above.');
  process.exit(1);
}

console.log('\n📝 Deployment Instructions:');
console.log('1. Push your code to your Git repository');
console.log('2. Connect your repository to Netlify');
console.log('3. Netlify will automatically run: bun install && bun run build');
console.log('4. Static files will be served from the out/ directory');
