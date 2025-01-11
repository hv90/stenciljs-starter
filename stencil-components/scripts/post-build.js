const fs = require('fs');
const path = require('path');

const filesToFix = [
  // path.join(__dirname, '../../react-wrapper/dist/types/components/stencil-generated/components.d.ts'),
  // path.join(__dirname, '../../dist/react-wrapper/components/components.ts'),
];

filesToFix.forEach((filePath, index) => {
  fs.readFile(filePath, 'utf8', function (err, data) {
    if (err) {
      return console.error(`Error on file reading: ${filePath}`, err);
    }

    let correctedData;

    switch (index) {
      // case 0:
      //   correctedData = data.replace(/@stencil\/react-output-target\/runtime/g, '@stencil/react-output-target/dist/react');
      //   break;
      // case 1:
      case 0:
        correctedData = data.replace(/\"stencil-components/g, '"../../../stencil-components');
        break;
    }

    fs.writeFile(filePath, correctedData, 'utf8', function (err) {
      if (err) {
        return console.error(`Error on file writing: ${filePath}`, err);
      }
      console.log(`imports fixed at: ${filePath}`);
    });
  });
});