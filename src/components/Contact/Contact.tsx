import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";
import { useTranslation } from "react-i18next";

export function Contact(){
  const { t } = useTranslation()
  return(
    <Container id="contact">
      <header>
        <h2>{t('contact.title')}</h2>
        <p>{t('contact.tagline1')}</p>
        <p>{t('contact.tagline2')}</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:martinpekny.7@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:martinpekny.7@gmail.com">martinpekny.7@gmail.com</a>
        </div>
        <div>
        <a href="tel:+919630576848"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+919630576848">(+421) 948234010</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}