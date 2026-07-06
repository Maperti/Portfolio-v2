import { Container, ContainerSucces } from './styles'
import { toast, ToastContainer } from 'react-toastify'
import { FormEvent, useState } from 'react'
import { useTranslation } from 'react-i18next'

const CONTACT_EMAIL = 'martinpekny.7@gmail.com'
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function Form() {
  const { t } = useTranslation()
  const [submitting, setSubmitting] = useState(false)
  const [succeeded, setSucceeded] = useState(false)

  function validateForm(email: string, message: string): string | null {
    if (!EMAIL_REGEX.test(email)) {
      return t('form.invalidEmail')
    }
    if (message.trim().length < 10) {
      return t('form.messageTooShort')
    }
    if (message.length > 5000) {
      return t('form.messageTooLong')
    }
    return null
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const email = (form.elements.namedItem('email') as HTMLInputElement).value
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value

    const validationError = validateForm(email, message)
    if (validationError) {
      toast.warn(validationError, {
        position: toast.POSITION.BOTTOM_LEFT,
        closeOnClick: true,
      })
      return
    }

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
          _honey: '',
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

      toast.error(t('form.toastError'), {
        position: toast.POSITION.BOTTOM_LEFT,
      })
    } catch {
      toast.error(t('form.toastError'), {
        position: toast.POSITION.BOTTOM_LEFT,
      })
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
          maxLength={254}
        />
        <textarea
          required
          placeholder={t('form.messagePlaceholder')}
          id="message"
          name="message"
          maxLength={5000}
        />
        <button type="submit" disabled={submitting}>
          {submitting ? t('form.sending') : t('form.submit')}
        </button>
      </form>
      <ToastContainer />
    </Container>
  )
}
