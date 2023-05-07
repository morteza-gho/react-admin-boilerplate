import useMediaQuery from "@hooks/useMediaQuery";
import { FC, ReactNode } from "react";

/* 
  font-weight:
  thin: 100;
  extralight: 200;
  light: 300;
  normal | regular: 400;
  medium: 500;
  semibold: 600;
  bold: 700;
  extrabold: 800;
  black: 900;
*/

/*
  font-size:
  text-xs:    0.75rem    12px 
  text-sm:    0.875rem   14px 
  text-base:  1rem       16px 
  text-lg:    1.125rem   18px 
  text-xl:    1.25rem    20px 
  text-2xl:   1.5rem     24px 
  text-3xl:   1.875rem   30px 
  text-4xl:   2.25rem    36px 
  text-5xl:   3rem       48px 
  text-6xl:   3.75rem    60px 
  text-7xl:   4.5rem     72px 
  text-8xl:   6rem       96px 
  text-9xl:   8rem       128px 
*/

interface IPropTypes {
  fontFamily?: string,
  fontSize?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl', // base on tailwind
  fontSizeMobile?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl', // base on tailwind
  customFontSize?: number, // take font-size as `px` and convert it to `rem` => user send 16 => font-size="1rem"
  fontWeight?: 'thin' | 'extralight' | 'light' | 'regular' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black', // base on tailwind config | regular is equal to normal
  italic?: boolean,
  color?: 'snowy-main' | 'black-main' | 'gray-main' | 'blue-main' | 'red-main' | 'yellow-main' | 'orange-main' | 'green-main', // base on tailwind custom config
  customColor?: string,
  hoverColor?: 'snowy-main' | 'black-main' | 'gray-main' | 'blue-main' | 'red-main' | 'yellow-main' | 'orange-main' | 'green-main', // base on tailwind custom config
  children: ReactNode,
  truncate?: boolean,
  lineHeight?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '12' | '14' | '16' | '18' | '20' | '22' | '24' | '26' | '28' | '30' | '32', // base on tailwind and tailwind custom config
  customLineHeight?: number, // take line-height as `px` and convert it to `rem` => user send 16 => line-height="1rem"
  lineClamp?: '1' | '2' | '3' | '4' | '5' | '6',
  transform?: 'normal-case' | 'uppercase' | 'lowercase' | 'capitalize',
  align?: 'left' | 'right' | 'center' | 'justify'
  id?: string,
  display?: 'inline' | 'inline-block' | 'block' | 'flex' | 'inline-flex',
  underline?: boolean,
  nonResponsive?: boolean, // prevent to convert `px` to `rem` to prevent responsive `font-size`
  className?: string,
  onClick?: () => void
};

const DsText: FC<IPropTypes> = ({
  fontFamily,
  customFontSize,
  fontSize = customFontSize ? '' : 'base',
  fontWeight = 'medium',
  italic,
  color,
  customColor,
  hoverColor,
  children,
  truncate = false,
  lineHeight,
  customLineHeight,
  lineClamp,
  transform,
  align,
  id,
  display,
  underline = false,
  nonResponsive,
  className = '',
  onClick
}) => {

  /* const is2Xl = useMediaQuery('(min-width: 1840px)');
  const isXl = useMediaQuery('(min-width: 1600px)'); */
  /* 
    root(html) font-size
    12px for 0 to xl    -  mobile | tablet | normal monitors
    14px for xl to 2xl  -  large monitors
    16px for 2xl to up  -  very large monitors
  */
  // let baseFontSize = is2Xl ? 16 : isXl ? 14 : 13;
  let baseFontSize = 16;

  let fontSizeInRem = customFontSize ? customFontSize / baseFontSize + 'rem' : '' // convert px to rem for custom font-size
  let lineHeightInRem = customLineHeight ? customLineHeight / baseFontSize + 'rem' : ''; // convert px to rem for custom line-height

  return (
    <span
      id={id}
      className={`ds-text ${`text-${fontSize}`} font-${fontWeight} ${color ? `text-${color}` : ''} ${hoverColor ? `cursor-pointer hover:text-${hoverColor}` : ''} ${align ? `text-${align}` : ''} ${truncate ? 'block truncate' : ''} ${italic ? 'italic' : ''} ${transform ? transform : ''} ${lineHeight ? `leading-${lineHeight}` : ''} ${lineClamp ? `line-clamp-${lineClamp}` : ''} ${display ? display : ''} ${underline ? 'curved-underline' : ''} ${onClick ? 'cursor-pointer' : ''} ${className}`}
      style={{
        fontFamily: fontFamily ? fontFamily : '',
        color: customColor ? customColor : '',
      }}
      ref={(node) => {
        /* I have to use this way to set style property because of `!important` */
        if (node && customFontSize) {
          node.style.setProperty('font-size', nonResponsive ? customFontSize + 'px' : fontSizeInRem, 'important');
        }
        if (node && customLineHeight) {
          node.style.setProperty('line-height', lineHeightInRem, 'important');
        }
      }}
      onClick={onClick}
    >
      {children}
    </span>
  )
};

export default DsText;