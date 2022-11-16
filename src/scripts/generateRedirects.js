const { writeFileSync } = require('fs');

const redirectsUrls = [];

result = [];
for (let redirectUrl of redirectsUrls) {
  let obj = {
    fromPath: redirectUrl,
    toPath: '/tags/',
  };
  result.push(obj);
}

let data = JSON.stringify(result);
writeFileSync('result.json', data);
