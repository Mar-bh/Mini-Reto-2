const path = require('path');

const dirPath = '/var/log';
const filePath = 'app.log';

const fullPath = path.join(dirPath, filePath);

console.log(fullPath);
