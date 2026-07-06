const RESUME_FILE = {
  href: '/cv/Martin-Pekny-CV-ENG.pdf',
  filename: 'Martin-Pekny-CV-ENG.pdf',
} as const

export function downloadResumes() {
  const link = document.createElement('a')
  link.href = RESUME_FILE.href
  link.download = RESUME_FILE.filename
  link.rel = 'noopener'
  document.body.appendChild(link)
  link.click()
  link.remove()
}
