const ean128Encoding = {
    0: '11011001100',
    1: '11001101100',
    2: '11001100110',
    3: '10010011000',
    4: '10010001100',
    5: '10001001100',
    6: '10011001000',
    7: '10011000100',
    8: '10001100100',
    9: '11001001000',
    A: '10111011100',
    B: '10011101100',
    C: '10001110110',
    D: '10111011000',
    E: '10011111000',
    F: '10001111100',
    G: '11011011000',
    H: '11001111000',
    I: '11000111100',
    J: '10100011110',
    K: '10010011110',
    L: '10111001110',
    M: '10001110110',
    N: '11011001110',
    O: '10010011010',
    P: '10011001100',
    Q: '10010101100',
    R: '11001101010',
    S: '10100110110',
    T: '10010110110',
    U: '10011011010',
    V: '10010010010',
    W: '10101011000',
    X: '11011001000',
    Y: '11001101000',
    Z: '11001011010',
    '-': '11001010100',
    '.': '10101010100',
    ' ': '10010101000',
    '$': '10010010000',
    '/': '10010010100',
    '+': '10010100100',
    '%': '10010110100',
    '*': '11010101000', 
    START: '11010000100', 
    STOP: '11000111010', 
    '(': '10100011100', 
    ')': '10111100010', 
  };
  
  export function generateEAN128Barcode(
    value,
    height,
    width,
    showValue,
    fontSize,
    fontFamily,
    fontWeight,
    color,
    textColor,
    lineSpacing,
    totalWidth 
  ) {
    const startCode = ean128Encoding.START; 
    const stopCode = ean128Encoding.STOP;
    let encodedData = startCode + value + stopCode;
    let barcodePattern = '';
  
    // Construye el patrón del código de barras
    for (let char of encodedData) {
      if (ean128Encoding[char]) {
        barcodePattern += ean128Encoding[char] + '0'; 
      } else {
        throw new Error(`Carácter inválido para EAN-128: ${char}`);
      }
    }
  
    // Simplifica el patrón del código de barras
    const simplifiedPattern = [];
    let sum = 0;
    for (let i of barcodePattern) {
      if (i === '1') {
        sum += 1;
      } else {
        if (sum > 0) {
          simplifiedPattern.push(sum);
          sum = 0;
        }
        simplifiedPattern.push(0);
      }
    }
    if (sum > 0) simplifiedPattern.push(sum); // Último bloque
  
    // Calcula el ancho total basado en el patrón y el ancho de cada barra
    let totalBarcodeWidth = simplifiedPattern.reduce((acc, cur) => {
      return acc + (cur === 2 ? width * 2 : width) + (cur === 0 ? width : 0);
    }, 0);
  
    // Si se pasa un totalWidth, ajusta el width y también el totalBarcodeWidth proporcionalmente
    let adjustedWidth = width;
    if (totalWidth && totalBarcodeWidth > 0) {
      const scaleFactor = totalWidth / totalBarcodeWidth;
      adjustedWidth = width * scaleFactor;
    }
  
    // Genera los elementos SVG
    let x = 0; // Posición X inicial
    let svgContent = '';
  
    for (let i of simplifiedPattern) {
      const adjustedPatting = i === 2 ? adjustedWidth * 2 : 0;
      if (i !== 0) {
        svgContent += `<rect x="${x}" y="0" width="${adjustedWidth + adjustedPatting}" height="${height}" />`;
        x += adjustedWidth + adjustedPatting;
      }
      x += adjustedWidth;
    }
  
    // Configura los colores
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
  