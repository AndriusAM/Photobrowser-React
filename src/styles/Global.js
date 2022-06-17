import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`

@font-face {font-family: "Calendas Plus"; src: url("//db.onlinewebfonts.com/t/7d06f75f5be76c96979e0936770794c2.eot"); src: url("//db.onlinewebfonts.com/t/7d06f75f5be76c96979e0936770794c2.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/7d06f75f5be76c96979e0936770794c2.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/7d06f75f5be76c96979e0936770794c2.woff") format("woff"), url("//db.onlinewebfonts.com/t/7d06f75f5be76c96979e0936770794c2.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/7d06f75f5be76c96979e0936770794c2.svg#Calendas Plus") format("svg"); }
:root {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  caret-color: transparent;
}

html {
  font-size: calc(12px + (24 - 12) * ((100vw - 400px) / (800 - 400)));
@media (max-width:400px)
  {font-size: 12px;}

@media (min-width:800px)
  {font-size: 24px;}


}
  body {
    font-family: "Calendas Plus", Arial, Helvetica, sans-serif; 
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: #000;
    background-image: linear-gradient(90deg, rgba(255,192,203, 0.75), rgba(173, 216, 230, 0.75));
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  
  a {
    text-decoration: none;
    cursor: pointer;
  }
  li {
    padding: 0;
    margin: 0.5rem;
    list-style-type: none;
    
  }
`