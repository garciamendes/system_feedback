// Third party
import axios from 'axios'

// Project
import { IFeedbackData } from '../components/feedback_button/steps/types'

export const api = axios.create({
  baseURL: 'http://localhost:3333'
})

export const apiCreate = async (data: IFeedbackData) => {
  await api.post('/feedbacks', data)
}