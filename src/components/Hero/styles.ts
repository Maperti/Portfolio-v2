import styled from "styled-components";

export const Container = styled.section`
  padding-top: 15%;
  display: flex;
  justify-content: flex-start;
  background: rgba(0,0,0,0);

  .hero-content {
    display: flex;
    align-items: flex-start;
    gap: 5rem;
    max-width: 85rem;
  }

  .hero-text{
    & > p{
      font-size: 1.8rem;
    }
    h1{
      font-size: 7rem;
    }

    h3{
      color:var(--green);
      margin: 1rem 0;
    }

    
    p.small-resume {
      margin-bottom: 5rem;
    }
  }
// New added
  .social-media{
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding-top:5rem;
    padding-left:1rem;

    img,span{
      font-size: 3rem;
      width: 3.5rem;
    }
  }


  .button{
    margin-top: 5rem;
    padding: 1.4rem 6rem;
  }

  .hero-image{
    flex-shrink: 0;
    margin-top: 0.5rem;
    margin-left: 2rem;
    img.profile-photo{
      width: 28rem;
      height: 28rem;
      max-width: 28rem;
      object-fit: cover;
      border-radius: 50%;
    }
  }


  @media(max-width: 960px){
    .hero-content {
      flex-direction: column;
      align-items: center;
      max-width: 100%;
    }
    margin-top: 15%;
    .hero-text{
      order: 2;
      text-align: center;
      h1{
        font-size: 5rem;
      }
    }
    
    .hero-image{
      order: 1;
      display: flex;
      justify-content: center;
      margin-top: 0;
      margin-left: 0;
      margin-bottom: 3rem;
      img.profile-photo{
        width: 18rem;
        height: 18rem;
        max-width: 18rem;
      }
    }
  }

  @media(max-width: 600px){
    margin-top: 35%;
  }
  @media(max-width: 480px){
    margin-top: 45%;
  }
`