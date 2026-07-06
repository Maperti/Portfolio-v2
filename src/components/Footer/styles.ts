import styled from "styled-components";


export const Container = styled.footer`
  background-color: #2b2b2b;
  padding: 3rem 15rem;
  margin-top: 10rem;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;

  .footer-spacer {
    display: block;
  }

  .footer-main {
    justify-self: center;
    text-align: center;
  }

  .logo{
    font-size: 2.8rem;
  }

  p{
    letter-spacing: 0.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    img{
      width: 2.6rem;
      animation: spinning 5s infinite linear;
    }
  }
  .social-media{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1rem;
    justify-self: end;

    img,span{
      font-size: 3rem;
      width: 3rem;
    }
  }


  @keyframes spinning {
    0%{
      transform: rotate(0);
    }
    100%{
      transform: rotate(360deg);
    }
  }

  @media(max-width: 800px){
    padding: 4rem 10rem;
    grid-template-columns: 1fr;
    gap: 2rem;

    .footer-spacer {
      display: none;
    }

    .footer-main,
    .social-media {
      justify-self: center;
    }

    .social-media {
      justify-content: center;
    }
  }
  @media(max-width: 600px){
    padding: 4rem 1rem;
    p{
      font-size: 1.2rem;
    }
  }
`