// Local
import { feedbackTypes } from './feedback_form'

export interface ICloseButton {
  onClose(): void
}

export interface IFormBug {
  text: string,
  print: string | null
}

export interface IScreenshotTook {
  screenshot: string | null,
  onScreenshotTosk(screenshort: string | null): void
}

export type IFeedForm = ICloseButton

export type FeedbackTypes = keyof typeof feedbackTypes