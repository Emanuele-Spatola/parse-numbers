const fs = require('fs');

const template = [
  ' _ | ||_|',
  '     |  |',
  ' _  _||_ ',
  ' _  _| _|',
  '   |_|  |',
  ' _ |_  _|',
  ' _ |_ |_|',
  ' _   |  |',
  ' _ |_||_|',
  ' _ |_| _|' ];

function parseNumbers (inputFile) {
  var input;
  try {
    input = fs.readFileSync(inputFile, {encoding: 'utf8'});
  } catch(ex) {
    return new Error('file not found');
  }
  const lines = input.split('\n');

  if (lines.length !== 4 || lines[0].length %3 !== 0
    || lines[1].length !== lines[0].length
    || lines[2].length !== lines[0].length)
  {
    return new Error('incorrect input file format');
  }

  const charsCount = lines[0].length / 3;
  var chars = [];

  for (var i=0; i<charsCount; i++) {
    chars[i] = template.indexOf(
      lines[0].substr(i*3, 3) +
      lines[1].substr(i*3, 3) +
      lines[2].substr(i*3, 3)
    )
  }

  return chars.join('');
}

module.exports = parseNumbers;

if (process.argv.length > 2) {
  console.log(parseNumbers(process.argv[2]));
} else {
  console.log('please specify an input file');
}
