import { Container, ContainerSucces } from './styles'
import { toast, ToastContainer } from 'react-toastify'
import { FormEvent, useState } from 'react'
import { useTranslation } from 'react-i18next'

const CONTACT_EMAIL = 'martinpekny.7@gmail.com'

export function Form() {
  const { t } = useTranslation()
  const [submitting, setSubmitting] = useState(false)
  const [succeeded, setSucceeded] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const email = (form.elements.namedItem('email') as HTMLInputElement).value
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value

    setSubmitting(true)

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          email,
          message,
          _subject: 'Portfolio contact form',
          _template: 'table',
        }),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setSucceeded(true)
        toast.success(t('form.toastSuccess'), {
          position: toast.POSITION.BOTTOM_LEFT,
          pauseOnFocusLoss: false,
          closeOnClick: true,
          hideProgressBar: false,
          toastId: 'succeeded',
        })
        return
      }

      toast.error(t('form.toastError'))
    } catch {
      toast.error(t('form.toastError'))
    } finally {
      setSubmitting(false)
    }
  }

  if (succeeded) {
    return (
      <ContainerSucces>
        <h3>{t('form.successTitle')}</h3>
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          {t('form.backToTop')}
        </button>
        <ToastContainer />
      </ContainerSucces>
    )
  }

  return (
    <Container>
      <h2>{t('form.title')}</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder={t('form.emailPlaceholder')}
          id="email"
          type="email"
          name="email"
          required
        />
        <textarea
          required
          placeholder={t('form.messagePlaceholder')}
          id="message"
          name="message"
        />
        <button type="submit" disabled={submitting}>
          {submitting ? t('form.sending') : t('form.submit')}
        </button>
      </form>
      <ToastContainer />
    </Container>
  )
}
