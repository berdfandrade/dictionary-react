import { Global } from "@emotion/react";

const FontMS = () => (
  <Global
    styles={`
      @font-face {
        font-family: "MSungGold PRC Black";
        src: url("https://db.onlinewebfonts.com/t/9858825add5dfc27e04714fda690b1ea.eot");
        src: url("https://db.onlinewebfonts.com/t/9858825add5dfc27e04714fda690b1ea.eot?#iefix") format("embedded-opentype"),
        url("https://db.onlinewebfonts.com/t/9858825add5dfc27e04714fda690b1ea.woff2") format("woff2"),
        url("https://db.onlinewebfonts.com/t/9858825add5dfc27e04714fda690b1ea.woff") format("woff"),
        url("https://db.onlinewebfonts.com/t/9858825add5dfc27e04714fda690b1ea.ttf") format("truetype"),
        url("https://db.onlinewebfonts.com/t/9858825add5dfc27e04714fda690b1ea.svg#MSungGold PRC Black") format("svg");
      }
      
      @font-face {
        font-family: "Winthorpe W00 Regular";
        src: url("https://db.onlinewebfonts.com/t/4a5e26aab1b7abf63b4c77abf9652552.eot");
        src: url("https://db.onlinewebfonts.com/t/4a5e26aab1b7abf63b4c77abf9652552.eot?#iefix")format("embedded-opentype"),
        url("https://db.onlinewebfonts.com/t/4a5e26aab1b7abf63b4c77abf9652552.woff2")format("woff2"),
        url("https://db.onlinewebfonts.com/t/4a5e26aab1b7abf63b4c77abf9652552.woff")format("woff"),
        url("https://db.onlinewebfonts.com/t/4a5e26aab1b7abf63b4c77abf9652552.ttf")format("truetype"),
        url("https://db.onlinewebfonts.com/t/4a5e26aab1b7abf63b4c77abf9652552.svg#Winthorpe W00 Regular")format("svg");
    }
    
    @font-face {
      font-family: "Winthorpe Rg Bold Italic";
      src: url("https://db.onlinewebfonts.com/t/d373282711e69ac2d5d662830556ae3c.eot");
      src: url("https://db.onlinewebfonts.com/t/d373282711e69ac2d5d662830556ae3c.eot?#iefix")format("embedded-opentype"),
      url("https://db.onlinewebfonts.com/t/d373282711e69ac2d5d662830556ae3c.woff2")format("woff2"),
      url("https://db.onlinewebfonts.com/t/d373282711e69ac2d5d662830556ae3c.woff")format("woff"),
      url("https://db.onlinewebfonts.com/t/d373282711e69ac2d5d662830556ae3c.ttf")format("truetype"),
      url("https://db.onlinewebfonts.com/t/d373282711e69ac2d5d662830556ae3c.svg#Winthorpe Rg Bold Italic")format("svg");
  }
  
      @font-face {
        font-family: "Nicolas Cochin W01 Regular";
        src: url("https://db.onlinewebfonts.com/t/fc5925cf1c277171821cde5812096fd1.eot");
        src: url("https://db.onlinewebfonts.com/t/fc5925cf1c277171821cde5812096fd1.eot?#iefix")format("embedded-opentype"),
        url("https://db.onlinewebfonts.com/t/fc5925cf1c277171821cde5812096fd1.woff2")format("woff2"),
        url("https://db.onlinewebfonts.com/t/fc5925cf1c277171821cde5812096fd1.woff")format("woff"),
        url("https://db.onlinewebfonts.com/t/fc5925cf1c277171821cde5812096fd1.ttf")format("truetype"),
        url("https://db.onlinewebfonts.com/t/fc5925cf1c277171821cde5812096fd1.svg#Nicolas Cochin W01 Regular")format("svg");
    }
    `}
  />
);

export default FontMS;
