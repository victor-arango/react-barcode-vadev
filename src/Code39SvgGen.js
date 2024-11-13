const code39Encoding = {
    0: '101001101101',
    1: '110100101011',
    2: '101100101011',
    3: '110110010101',
    4: '101001101011',
    5: '110100110101',
    6: '101100110101',
    7: '101001011011',
    8: '110100101101',
    9: '101100101101',
    A: '110101001011',
    B: '101101001011',
    C: '110110100101',
    D: '101011001011',
    E: '110101100101',
    F: '101101100101',
    G: '101010011011',
    H: '110101001101',
    I: '101101001101',
    J: '101011001101',
    K: '110101010011',
    L: '101101010011',
    M: '110110101001',
    N: '101011010011',
    O: '110101101001',
    P: '101101101001',
    Q: '101010110011',
    R: '110101011001',
    S: '101101011001',
    T: '101011011001',
    U: '110010101011',
    V: '100110101011',
    W: '110011010101',
    X: '100101101011',
    Y: '110010110101',
    Z: '100110110101',
    '-': '100101011011',
    '.': '110010101101',
    ' ': '100110101101',
    $: '100100100101',
    '/': '100100101001',
    '+': '100101001001',
    '%': '101001001001',
    '*': '100101101101',
  };
  
  export function generateCode39Barcode(
    value,
    height,
    width,
    showValue,
    fontSize,
    fontFamily,
    fontWeight,
    color,
    textColor,
    lineSpacing
  ) {
    const startStop = '*';
    const encodedData = startStop + value.toUpperCase() + startStop;
    let barcodePattern = '';
  
    if (encodedData.length > 43) throw new Error('Data too long for Code39 barcode');
  
    // Build the barcode pattern
    for (let char of encodedData) {
      if (code39Encoding[char]) {
        barcodePattern += code39Encoding[char] + '0'; // 0 represents narrow space between characters
      } else {
        throw new Error(`Invalid character for Code39 barcode: ${char}`);
      }
    }
  
    //Simplify the barcode pattern
    const simplifiedPattern = [];
    let sum = 0;
    for (let i of barcodePattern) {
      if (i === '1') {
        sum += 1;
      } else {
        simplifiedPattern.push(sum);
        sum = 0;
      }
    }
  
    // Create SVG elements
    let x = 0; // Starting X position
    let svgContent = '';
  
    for (let i of simplifiedPattern) {
      const patting = i === 2 ? width * 2 : 0;
      if (i !== 0) {
        svgContent += `<rect x="${x}" y="0" width="${width + patting}" height="${height}" />`;
        x += width + patting;
      }
      x += width;
    }
  
    if (!color) color = 'black';
    if (!textColor) textColor = color;
  
    const valueDisplay = showValue
      ? `<div style="font: ${fontSize}px ${fontFamily}; text-align:center; width: ${x}px; color: ${textColor}; ${
          lineSpacing ? 'line-height:' + lineSpacing + 'px' : ''
        }; font-weight: ${fontWeight}" >${value.toUpperCase()}</div>`
      : '';
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${x}" version="1.1" height="${height}"><g style="fill:${color};">${svgContent}</g></svg>${valueDisplay}`;
    return svg;
  }
  