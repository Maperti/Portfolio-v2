import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
// import DownloadApp from '../../assets/download.webp'
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function Project() {
  return (
    <Container id="project">
      <h2>Projects i worked on</h2>
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
              <h3>IBM: In house applications focused on work automization</h3>
              <p>
                Applications used to automate the work of the BMS team. Helpdesk
                to reduce number of tickets raised. Portal to keep all tools
                accessible in one place with integrated slack messaging system
                to notify the team about news and outages. Error tracking tool
                to keep track of errors and issues. Time@IBM used to track work
                hours and expenditures.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Angular</li>
                <li>postgreSQL</li>
                <li>Node.js</li>
                <li>Docker</li>
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
                {" "}
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg>
            </header>
            <div className="body">
              <h3>Emprover: Data Visualization in Manufacturing</h3>
              <p>
                One-tool solution for data-validation, data-controlling, and
                error-detection for Clark Capital Management Group (CCMG). The
                possibility of filtering data by several customized requirements
                Clear auto-created reports turned into a solid base for making
                investment management decisions
              </p>
            </div>
            <footer>
              {" "}
              <ul className="tech-list">
                {" "}
                <li>Angular</li>
                <li>MySQL</li>
                <li>AWS Lambda</li>{" "}
              </ul>{" "}
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
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg>
            </header>
            <div className="body">
              <h3>Goldmann Systems: Banking and Telemedicine applications</h3>
              <p>
                Worked on 365 Bank web and mobile application. Amongst other
                things worked on a canceled 365 Bank and Post Bank merger.
                Telemon medicine application. Telemon provides healthcare
                professionals with tools for early diagnosis and personalized
                healthcare.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Angular</li>
                <li>Postgre SQL</li>
                <li>Cordova</li>
                <li>Jenkins</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* <ScrollAnimation animateIn="fadeInUp">
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
                <title>Code</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/CodeVinayak/Real-Time-Hand-Gesture-Driven-3D-Object-Manipulation"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a
                  href="https://youtu.be/NOm-3MynPLE"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Real-Time Hand Gesture-Driven 3D Object Manipulation</h3>
              <p>
                Developed a real-time hand gesture recognition system for
                intuitive 3D object manipulation. Leveraged a multimodal
                approach integrating OpenCV for video processing, MediaPipe for
                hand detection/landmark extraction, and scikit-learn for machine
                learning model training. Achieved 95.2% accuracy in hand gesture
                classification with efficient real-time performance.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>OpenCV</li>
                <li>MediaPipe</li>
                <li>scikit-learn</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}
      </div>
    </Container>
  );
}
