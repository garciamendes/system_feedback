// React
import React, { FormEvent, useState } from 'react'

// Project
import { ScreenshortBtn } from '../screenshort_btn'

export function FeedbackOthers() {
  // State
  const [text, setText] = useState('')
  const [screenshot, setScreenshot] = useState<string | null>(null)

  function handleSendFeedback(event: FormEvent) {
    event.preventDefault()

    console.log({
      text, screenshot
    })
  }

  return (
    <div className='container_feedback_selected'>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        cols={30}
        rows={6}
        placeholder='Queremos te ouvir. O que você gostaria de nos dizer? '
      />
      <div className='container_send_and_print'>
        <ScreenshortBtn
          screenshot={screenshot}
          onScreenshotTosk={setScreenshot}
        />
        <button
          className={`send ${(text.length > 0) || (!screenshot) ? 'not_disable' : ''}`}
          onClick={handleSendFeedback}
        >
          Enviar feedback
        </button>
      </div>
    </div>
  )
}