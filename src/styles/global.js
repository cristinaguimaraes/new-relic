import { createGlobalStyle } from "styled-components";
import HelveticaNeueBold from "assets/fonts/HelveticaNeueBold.ttf";
import HelveticaNeue from "assets/fonts/HelveticaNeue.ttf";

export const GlobalStyles = createGlobalStyle`
 @font-face {
    font-family: 'Helvetica Bold';
    src: local('Helvetica Bold'), url(${HelveticaNeueBold.ttf}) format('opentype');
  }
  
   @font-face {
    font-family: 'Helvetica';
    src: local('Helvetica'), url(${HelveticaNeue.ttf}) format('opentype');
  }

`;
