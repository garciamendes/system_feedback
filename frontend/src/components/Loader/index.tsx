// React
import React from 'react'

// Third party
import { CircleNotch } from 'phosphor-react'

// Project
import '../../styles/loader.scss'

export function Loader() {

  return (
    <div className='loader'>
      <CircleNotch className='loader' size={32} />
    </div>
  )
}