import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --pink: #E31F71;
    --black: #212121;
    --green: #23ce6b;
    --blue: #016fb9;
    scroll-behavior: smooth;
    scroll-padding-top: 10rem;

    &.light{

      body{
        transition: 0.5s;
        background-color: #f5f5f5;
        color: var(--black);
      }

      .logo{
        color: var(--black);
      }

      header.header-fixed{
        transition: 0.5s;
        background-color: #f5f5f550;
        a{
          transition: 0.5s;
          color: black;
        }
        .menu,.menu:before, .menu:after{
          background-color: var(--black); 
        }
        .menu.active{
          background-color: rgba(555,555,555,0);
        }
      }

      footer.footer{
        transition: 0.5s;
        background-color: rgba(0,0,0,0.1);
        color: var(--black);
      }

      form{
        input,textarea{
          transition: 0.5s;
          border: solid 1px var(--black);
          color: var(--black);
          &::placeholder{
            transition: 0.5s;
            color: var(--black);
          }
        }
      }

    }
  }

  ul, li {
    text-decoration: none;
    list-style: none;
    margin: 0;
    padding:0;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }

  body{
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    background-color: var(--black);
    color: #FFFF;
  }

  body, input, textarea, button{
    font-family: 'Red Hat Display', sans-serif;
    font-weight: 400;
  }

  a{
    text-decoration: none;
  }

  button, .button{
    border: none;
    cursor: pointer;
    background-color: var(--green);
    color: #FFFF;
    border-radius: 2rem;
    font-weight: 500;
    transition: filter 0.25s;
    &:hover{
      filter: brightness(0.8);
    }
  }

  button:disabled, .button:disabled{
    filter: brightness(0.8);
    cursor: not-allowed;
  }


  .logo{
    font-size: 3rem;
    color: #FFFF;
    // &::first-letter{
    //   color: var(--green);
    // }
  }

  /* Utility classes for spacing */
  
  /* Margin Bottom */
  .mb-0 { margin-bottom: 0; }
  .mb-1 { margin-bottom: 0.25rem; }
  .mb-2 { margin-bottom: 0.5rem; }
  .mb-3 { margin-bottom: 0.75rem; }
  .mb-4 { margin-bottom: 1rem; }
  .mb-5 { margin-bottom: 1.25rem; }
  .mb-6 { margin-bottom: 1.5rem; }
  .mb-8 { margin-bottom: 2rem; }
  .mb-10 { margin-bottom: 2.5rem; }
  .mb-12 { margin-bottom: 3rem; }

  /* Margin Top */
  .mt-0 { margin-top: 0; }
  .mt-1 { margin-top: 0.25rem; }
  .mt-2 { margin-top: 0.5rem; }
  .mt-3 { margin-top: 0.75rem; }
  .mt-4 { margin-top: 1rem; }
  .mt-5 { margin-top: 1.25rem; }
  .mt-6 { margin-top: 1.5rem; }
  .mt-8 { margin-top: 2rem; }
  .mt-10 { margin-top: 2.5rem; }
  .mt-12 { margin-top: 3rem; }

  /* Margin Left & Right */
  .ml-0 { margin-left: 0; }
  .ml-1 { margin-left: 0.25rem; }
  .ml-2 { margin-left: 0.5rem; }
  .ml-3 { margin-left: 0.75rem; }
  .ml-4 { margin-left: 1rem; }
  .ml-6 { margin-left: 1.5rem; }
  .ml-8 { margin-left: 2rem; }

  .mr-0 { margin-right: 0; }
  .mr-1 { margin-right: 0.25rem; }
  .mr-2 { margin-right: 0.5rem; }
  .mr-3 { margin-right: 0.75rem; }
  .mr-4 { margin-right: 1rem; }
  .mr-6 { margin-right: 1.5rem; }
  .mr-8 { margin-right: 2rem; }

  /* Margin X & Y (horizontal & vertical) */
  .mx-0 { margin-left: 0; margin-right: 0; }
  .mx-1 { margin-left: 0.25rem; margin-right: 0.25rem; }
  .mx-2 { margin-left: 0.5rem; margin-right: 0.5rem; }
  .mx-4 { margin-left: 1rem; margin-right: 1rem; }
  .mx-6 { margin-left: 1.5rem; margin-right: 1.5rem; }
  .mx-8 { margin-left: 2rem; margin-right: 2rem; }
  .mx-auto { margin-left: auto; margin-right: auto; }

  .my-0 { margin-top: 0; margin-bottom: 0; }
  .my-1 { margin-top: 0.25rem; margin-bottom: 0.25rem; }
  .my-2 { margin-top: 0.5rem; margin-bottom: 0.5rem; }
  .my-4 { margin-top: 1rem; margin-bottom: 1rem; }
  .my-6 { margin-top: 1.5rem; margin-bottom: 1.5rem; }
  .my-8 { margin-top: 2rem; margin-bottom: 2rem; }

  /* Padding */
  .p-0 { padding: 0; }
  .p-1 { padding: 0.25rem; }
  .p-2 { padding: 0.5rem; }
  .p-3 { padding: 0.75rem; }
  .p-4 { padding: 1rem; }
  .p-6 { padding: 1.5rem; }
  .p-8 { padding: 2rem; }

  .pt-0 { padding-top: 0; }
  .pt-1 { padding-top: 0.25rem; }
  .pt-2 { padding-top: 0.5rem; }
  .pt-3 { padding-top: 0.75rem; }
  .pt-4 { padding-top: 1rem; }
  .pt-6 { padding-top: 1.5rem; }
  .pt-8 { padding-top: 2rem; }

  .pb-0 { padding-bottom: 0; }
  .pb-1 { padding-bottom: 0.25rem; }
  .pb-2 { padding-bottom: 0.5rem; }
  .pb-3 { padding-bottom: 0.75rem; }
  .pb-4 { padding-bottom: 1rem; }
  .pb-6 { padding-bottom: 1.5rem; }
  .pb-8 { padding-bottom: 2rem; }

  .pl-0 { padding-left: 0; }
  .pl-1 { padding-left: 0.25rem; }
  .pl-2 { padding-left: 0.5rem; }
  .pl-3 { padding-left: 0.75rem; }
  .pl-4 { padding-left: 1rem; }
  .pl-6 { padding-left: 1.5rem; }
  .pl-8 { padding-left: 2rem; }

  .pr-0 { padding-right: 0; }
  .pr-1 { padding-right: 0.25rem; }
  .pr-2 { padding-right: 0.5rem; }
  .pr-3 { padding-right: 0.75rem; }
  .pr-4 { padding-right: 1rem; }
  .pr-6 { padding-right: 1.5rem; }
  .pr-8 { padding-right: 2rem; }

  .px-0 { padding-left: 0; padding-right: 0; }
  .px-1 { padding-left: 0.25rem; padding-right: 0.25rem; }
  .px-2 { padding-left: 0.5rem; padding-right: 0.5rem; }
  .px-4 { padding-left: 1rem; padding-right: 1rem; }
  .px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
  .px-8 { padding-left: 2rem; padding-right: 2rem; }

  .py-0 { padding-top: 0; padding-bottom: 0; }
  .py-1 { padding-top: 0.25rem; padding-bottom: 0.25rem; }
  .py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
  .py-4 { padding-top: 1rem; padding-bottom: 1rem; }
  .py-6 { padding-top: 1.5rem; padding-bottom: 1.5rem; }
  .py-8 { padding-top: 2rem; padding-bottom: 2rem; }

  /* Display utilities */
  .d-none { display: none; }
  .d-block { display: block; }
  .d-inline { display: inline; }
  .d-inline-block { display: inline-block; }
  .d-flex { display: flex; }
  .d-grid { display: grid; }

  /* Flexbox utilities */
  .flex-row { flex-direction: row; }
  .flex-column { flex-direction: column; }
  .flex-wrap { flex-wrap: wrap; }
  .flex-nowrap { flex-wrap: nowrap; }
  .justify-start { justify-content: flex-start; }
  .justify-center { justify-content: center; }
  .justify-end { justify-content: flex-end; }
  .justify-between { justify-content: space-between; }
  .justify-around { justify-content: space-around; }
  .align-start { align-items: flex-start; }
  .align-center { align-items: center; }
  .align-end { align-items: flex-end; }
  .align-stretch { align-items: stretch; }

  /* Text utilities */
  .text-left { text-align: left; }
  .text-center { text-align: center; }
  .text-right { text-align: right; }
  .text-bold { font-weight: bold; }
  .text-normal { font-weight: normal; }
  .text-light { font-weight: 300; }
  .text-uppercase { text-transform: uppercase; }
  .text-lowercase { text-transform: lowercase; }
  .text-capitalize { text-transform: capitalize; }

  /* Width & Height utilities */
  .w-full { width: 100%; }
  .w-auto { width: auto; }
  .w-50 { width: 50%; }
  .w-25 { width: 25%; }
  .w-75 { width: 75%; }
  .h-full { height: 100%; }
  .h-auto { height: auto; }
  .h-screen { height: 100vh; }

  /* Position utilities */
  .position-relative { position: relative; }
  .position-absolute { position: absolute; }
  .position-fixed { position: fixed; }
  .position-static { position: static; }

  /* Border utilities */
  .border { border: 1px solid #e2e8f0; }
  .border-0 { border: 0; }
  .border-radius { border-radius: 0.25rem; }
  .border-radius-lg { border-radius: 0.5rem; }
  .border-radius-xl { border-radius: 1rem; }
  .border-radius-full { border-radius: 50%; }

  /* Shadow utilities */
  .shadow { box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); }
  .shadow-md { box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); }
  .shadow-lg { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); }
  .shadow-none { box-shadow: none; }

  /* Animation utilities */
`