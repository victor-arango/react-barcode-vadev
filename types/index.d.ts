declare function Barcode39Svg(props: {
    value: string;
    height?: number;
    width?: number;
    showValue?: boolean;
    fontSize?: number;
    fontFamily?: string;
    fontWeight?: string;
    padding?: number;
    color?: string;
    textColor?: string;
    lineSpacing?: number;
    className?: string;
    id?: string;
    style?: React.CSSProperties;
  }): JSX.Element;

  declare function BarcodeEAN128Svg(props:{
    value: string;
    height?: number;
    width?: number;
    showValue?: boolean;
    fontSize?: number;
    fontFamily?: string;
    fontWeight?: string;
    padding?: number;
    color?: string;
    textColor?: string;
    lineSpacing?: number;
    className?: string;
    id?: string;
    style?: React.CSSProperties;
    totalWidth ?: number;
  
  }) : JSX.Element;
  
  
  export { Barcode39Svg, BarcodeEAN128Svg};
  