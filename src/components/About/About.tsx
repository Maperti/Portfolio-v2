import { Container } from "./styles";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import bootstrapIcon from "../../assets/bootstrap-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";
import { useTranslation } from "react-i18next";

export function About() {
  const { t } = useTranslation()
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>{t('about.title')}</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>{t('about.intro1')}</p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.2 * 1000}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <p>{t('about.intro2')}</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>{t('about.intro3')}</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={550}>
          <div>
          <h3 className="mb-4">{t('about.experienceTitle')}</h3>
            <div className="mb-4">
              <h4>{t('about.job1Title')}</h4>
              <p>{t('about.job1Company')} | {t('about.job1Period')}</p>
              <p>{t('about.job1Location')}</p>
            </div>
            <div className="mb-4">
              <h4>{t('about.job2Title')}</h4>
              <p>{t('about.job2Company')} | {t('about.job2Period')}</p>
              <p>{t('about.job2Location')}</p>
            </div>
            <div className="mb-4">
              <h4>{t('about.job3Title')}</h4>
              <p>{t('about.job3Company')} | {t('about.job3Period')}</p>
              <p>{t('about.job3Location')}</p>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>{t('about.skillsTitle')}</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={typescriptIcon} alt="Typescript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
              <img src={bootstrapIcon} alt="Bootstrap" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </Container>
  );
}
