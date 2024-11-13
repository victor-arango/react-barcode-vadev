/// <reference path="../types/index.d.ts" />

import React from 'react';
import { generateCode39Barcode } from './Code39SvgGen';
import { generateEAN128Barcode } from './codeEANSvgGen';

export function Barcode39Svg({
  value = '',
  height = 60,
  width = 1,
  showValue = true,
  fontSize = 16,
  fontFamily = 'monospace',
  fontWeight = '500',
  padding = 10,
  color = 'black',
  textColor = '',
  lineSpacing,
  className = '',
  id = '',
  style = {},
}) {
  if (!value) throw new Error('Barcode39Svg: value prop is required');
  return (
    <div
      id={id}
      className={className}
      style={{ ...style, padding }}
      dangerouslySetInnerHTML={{
        __html: generateCode39Barcode(
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
          className = '',
          id = '',
          style = {},
        ),
      }}
    />
  );
}
export function BarcodeEANSvg({
  value = '',
  height = 60,
  width = 1.,
  showValue = true,
  fontSize = 16,
  fontFamily = 'monospace',
  fontWeight = '500',
  padding = 10,
  color = 'black',
  textColor = '',
  lineSpacing,
  className = '',
  id = '',
  style = {},
  totalWidth, 

}) {
  if (!value) throw new Error('BarcodeEAN-128vg: value prop is required');
  return (
    <div
    id={id}
    className={className}
    style={{ ...style, padding }}
      dangerouslySetInnerHTML={{
        __html: generateEAN128Barcode(
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
          className = '',
          id = '',
          style = {},
          totalWidth, 
        ),
      }}
    />
  );
}
