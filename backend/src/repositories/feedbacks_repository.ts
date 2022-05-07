export interface IFeedbackData {
  type: string,
  comment: string,
  screenshot?: string
}

export interface IFeedbacksRepository {
  create(data: IFeedbackData): Promise<void>
}