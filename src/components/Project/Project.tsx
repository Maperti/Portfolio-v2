import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import { useTranslation } from "react-i18next";

export function Project() {
  const { t } = useTranslation()
  return (
    <Container id="project">
      <h2>{t('project.title')}</h2>
      <div className="projects">
        <ScrollAnimation animateIn="fadeInUp">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
            </header>
            <div className="body">
              <h3>{t('project.project1Title')}</h3>
              <p>{t('project.project1Description')}</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Angular</li>
                <li>React</li>
                <li>TypeScript</li>
                <li>Cordova</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
            </header>
            <div className="body">
              <h3>{t('project.project2Title')}</h3>
              <p>{t('project.project2Description')}</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Angular</li>
                <li>TypeScript</li>
                <li>RxJS</li>
                <li>Jest</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
            </header>
            <div className="body">
              <h3>{t('project.project3Title')}</h3>
              <p>{t('project.project3Description')}</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Angular</li>
                <li>.NET</li>
                <li>PostgreSQL</li>
                <li>Docker</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
