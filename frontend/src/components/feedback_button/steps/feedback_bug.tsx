// React
import React, { FormEvent, useState } from 'react'

// Project
import { ScreenshortBtn } from '../screenshort_btn'
import { isNull } from 'lodash'
import { api, apiCreate } from '../../../services/api'
import { Loader } from '../../Loader'

export function FeedbackBug() {
  // State
  const [isLoading, setIsLoading] = useState(false)
  const [comment, setComment] = useState('')
  const [screenshot, setScreenshot] = useState<string | null>(null)

  async function handleSendFeedback(event: FormEvent) {
    event.preventDefault()
    setIsLoading(true)

    const data = {
      type: 'BUG',
      comment,
      screenshot
    }

    try {
      await api.post('/feedbacks', data)
    } catch (error) {
      console.log(error);
    }

    setComment('')
    setScreenshot(null)
    setIsLoading(false)
  }

  return (
    <div className='container_feedback_selected'>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        cols={30}
        rows={6}
        placeholder='Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo...'
      />
      <div className='container_send_and_print'>
        <ScreenshortBtn
          screenshot={screenshot}
          onScreenshotTosk={setScreenshot}
        />
        <button
          className={`send ${((comment.length > 0) || (!isNull(screenshot))) ? 'not_disable' : ''}`}
          onClick={handleSendFeedback}
        >
          {isLoading ? (
            <Loader />
          ) : (
            'Enviar feedback'
          )}
        </button>
      </div>
    </div>
  )
}