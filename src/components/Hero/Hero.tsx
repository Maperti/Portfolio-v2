import { Container } from "./styles"
import ScrollAnimation from "react-animate-on-scroll"
import AboutPicture from "../../assets/AboutPicture.png"
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import Hello from '../../assets/Hello.gif'
import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"

export function Hero() {
  const { t } = useTranslation()
  const [gifKey, setGifKey] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setGifKey(prev => prev + 1)
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Container id="home">
      <div className="hero-content">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>{t('hero.hello')} <img key={gifKey} src={Hello} alt={t('hero.hello')} width="20px"/>, {t('hero.introduceAs')}</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>   
          <h1>{t('hero.name')}</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3>{t('hero.title')}</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume">{t('hero.experience')}</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
          <a href="#contact" className="button">{t('hero.contact')}</a>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
      <div className="social-media"><a
        href="https://www.linkedin.com/in/martin-pekny-33560b176/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedin} alt="Linkedin" />
      </a>
        <a
          href="https://github.com/Maperti"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        </div>
        </ScrollAnimation>
      </div>
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.4 * 1000}>
          <img src={AboutPicture} alt={t('hero.name')} className="profile-photo" />
        </ScrollAnimation>
      </div>
      </div>
    </Container>
  )
}
