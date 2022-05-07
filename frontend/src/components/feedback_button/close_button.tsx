// React
import React from 'react'

// Third party
import { X } from 'phosphor-react'

// Local
import { ICloseButton } from './types'

export function CloseButton({ onClose }: ICloseButton) {

  return <X onClick={onClose} className='close_modal_form' size={30} />
}