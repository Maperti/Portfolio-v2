import { Container } from './styles'
import { useState, type MouseEvent as ReactMouseEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { downloadResumes } from '../../utils/downloadResumes'

export function Header() {
  const { t } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)

  function toggleTheme() {
    let html = document.getElementsByTagName('html')[0]
    html.classList.toggle('light')
  }
  function closeMenu() {
    setMenuOpen(false)
  }
  function handleResumeDownload(event: ReactMouseEvent<HTMLAnchorElement>) {
    event.preventDefault()
    downloadResumes()
    closeMenu()
  }

  return (
    <Container className="header-fixed">
      <a href="#home" className="logo">
        <span>{t('header.logoPrefix')}</span>
        <span>{t('header.logoSuffix')}</span>
      </a>
      <input
        onChange={toggleTheme}
        className="container_toggle"
        type="checkbox"
        id="switch"
        name="mode"
      />
      <label htmlFor="switch">{t('header.toggle')}</label>
      <nav className={menuOpen ? 'active' : ''}>
        <a href="#home" onClick={closeMenu}>
          {t('header.nav.home')}
        </a>
        <a href="#about" onClick={closeMenu}>
          {t('header.nav.about')}
        </a>
        <a href="#project" onClick={closeMenu}>
          {t('header.nav.project')}
        </a>
        <a href="#contact" onClick={closeMenu}>
          {t('header.nav.contact')}
        </a>
        <a
          href="/cv/Martin-Pekny-CV-ENG.pdf"
          className="button"
          onClick={handleResumeDownload}
        >
          {t('header.nav.resume')}
        </a>
      </nav>
      <div
        aria-expanded={menuOpen ? 'true' : 'false'}
        aria-haspopup="true"
        aria-label={menuOpen ? t('header.menuClose') : t('header.menuOpen')}
        className={menuOpen ? 'menu active' : 'menu'}
        onClick={() => {
          setMenuOpen(!menuOpen)
        }}
      ></div>
    </Container>
  )
}
