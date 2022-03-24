import { createGlobalStyle } from "styled-components";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Inter:wght@200;300;500;600&display=swap');
</style>;

const GlobalStyles = createGlobalStyle`
  :root{
    --purple: #7f56d9;
    --darkGrey: #475467;
    --black: #101828;
    --white: #fff;
    --font: "Inter","San Francisco","SF Pro Text",-apple-system,system-ui,sans-serif;
    --title-font-size: clamp(20px,5vw,50px);
    --h2-font-size: clamp(16px, 3vw, 25px);
    --text-font-size: clamp(12px, 1vw, 16px);
  }
  
  body {
    font-family: var(--font);
    color: var(--darkGrey);
    font-size: var(--text-font-size);
  }
  h1 {
    font-size: var(--title-font-size);
    color: var(--black);
    margin: 0 0 16px;  
  }
  .h1-small{
      font-size: var(--h2-font-size);
    }
  h2 {
    font-size: var(--h2-font-size);
  }
  .accent {
    color: var(--purple);
  }

  .btn {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    margin: 6px;
    padding: 12px 20px;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    border: 1px solid var(--purple);
    border-radius: 8px;
    background-color: var(--purple);
    box-shadow: 0 1px 2px 0 rgba(16,24,40,.05);
    -webkit-transition: .2s;
    transition: .2s;
    color: var(--white);
    font-weight: 500;
    letter-spacing: .5px;
    text-decoration: none;
    white-space: nowrap;
    cursor: pointer;
  }
`;

export default GlobalStyles;
