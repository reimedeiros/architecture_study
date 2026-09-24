import { execSync } from 'node:child_process';
import { readFileSync } from 'node:fs';

interface PackageJson {
  version: string;
}

const packageJson = JSON.parse(readFileSync('./package.json', 'utf-8')) as PackageJson;

const image = 'architecture-study-frontend';
const version = packageJson.version;

const versionedImage = `${image}:${version}`;
const latestImage = `${image}:latest`;

console.log(`Building ${versionedImage}`);

execSync(`docker build -t ${versionedImage} -t ${latestImage} .`, {
  stdio: 'inherit',
});

console.log(`\nImages created:`);
console.log(`- ${versionedImage}`);
console.log(`- ${latestImage}`);
