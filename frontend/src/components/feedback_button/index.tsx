// React
import React, { useState } from 'react'

// Third party
import { ChatCircleDots } from 'phosphor-react'
import { isEqual } from 'lodash'

// Project
import '../../styles/widget.scss'

// Local
import { FeedbackForm } from './feedback_form'

export function FeedbackButton() {
  // State
  const [openNote, setOpenNote] = useState(false)


  function handleOpenNote() {
    if (!isEqual(openNote, true))
      setOpenNote(true)
  }

  return (
    <div className='container_main_widget'>
      {openNote && (
        <FeedbackForm onClose={() => setOpenNote(false)} />
      )}
      <button onClick={handleOpenNote} className={`content_btn_widget ${openNote && 'active'}`}>
        <ChatCircleDots size={30} className='widget-icon' />
        <span className='title_widget'>Feedback</span>
      </button>
    </div>
  )
}