// React
import React, { useState } from 'react'

// Third party
import { ArrowLeft } from 'phosphor-react'

// Project
import '../../styles/feed_form.scss'
import BugImageurl from '../../assets/images/bug.svg'
import IdeiaImageurl from '../../assets/images/idea.svg'
import ThoughtImageurl from '../../assets/images/thought.svg'

// Local
import { FeedbackTypes, IFeedForm } from './types'
import { CloseButton } from './close_button'
import { isEqual, isNull } from 'lodash'
import { FeedbackBug } from './steps/feedback_bug'
import { FeedbackIdea } from './steps/feedback_idea'
import { FeedbackOthers } from './steps/feedback_others'
import {
  RENDER_BUG,
  RENDER_IDEA,
  RENDER_OTHERS
} from './constants'

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: BugImageurl,
      alt: 'Icon Bug'
    }
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: IdeiaImageurl,
      alt: 'Icon Ideia'
    }
  },
  OTHERS: {
    title: 'Outro',
    image: {
      source: ThoughtImageurl,
      alt: 'Icon Others'
    }
  },
}

export function FeedbackForm({ onClose }: IFeedForm) {
  // State
  const [feedbackType, setFeedbackType] = useState<FeedbackTypes | null>(null)

  return (
    <div className='container_form_main'>
      <header>
        {!isNull(feedbackType) && <ArrowLeft
          onClick={() => setFeedbackType(null)}
          className='back_feedback_container_select'
          size={27}
        />}
        <>
          {isNull(feedbackType) ? (
            <h3>Deixe seu feedback</h3>
          ) : (
            <div className='feedback_selected'>
              <img src={feedbackTypes[feedbackType].image.source} alt={feedbackTypes[feedbackType].image.alt} />
              <h3>{feedbackTypes[feedbackType].title}</h3>
            </div>
          )}
        </>
        <CloseButton onClose={onClose} />
      </header>

      {isNull(feedbackType) && (
        <div className='content_select_feedback'>
          {Object.entries(feedbackTypes).map(([key, value]) => {
            return (
              <button
                key={key}
                className='btn_select_feddback'
                onClick={() => setFeedbackType(key as FeedbackTypes)}
              >
                <img src={value.image.source} alt={value.image.alt} />
                <span>{value.title}</span>
              </button>
            )
          })}
        </div>
      )}

      {isEqual(feedbackType, RENDER_BUG) && <FeedbackBug />}
      {isEqual(feedbackType, RENDER_IDEA) && <FeedbackIdea />}
      {isEqual(feedbackType, RENDER_OTHERS) && <FeedbackOthers />}

      <footer>
        Feito com ♥ pela <a className='link_footer' href="#">Matheus Garcia</a>
      </footer>
    </div>
  )
}