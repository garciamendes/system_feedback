// React
import React, { useState } from 'react'

// Third party
import html2canvas from 'html2canvas'
import { Camera, Trash } from 'phosphor-react'
import { Loader } from '../Loader'

// Local
import { IScreenshotTook } from './types'

export function ScreenshortBtn({ screenshot, onScreenshotTosk }: IScreenshotTook) {
  // State
  const [isTakingScreenshort, setIsTakingScreenshort] = useState(false)

  async function handleTakeScreenshort() {
    setIsTakingScreenshort(true)

    const canvas = await html2canvas(document.querySelector('html')!)
    const base64image = canvas.toDataURL('image/png')

    onScreenshotTosk(base64image)
    setIsTakingScreenshort(false)
  }

  if (screenshot) {
    return (
      <button
        className='container_print_exist'
        onClick={() => onScreenshotTosk(null)}
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: 'right bottom',
          backgroundSize: 180
        }}
      >
        <Trash weight='fill' className='icon_trash' />
      </button>
    )
  }

  return (
    <button onClick={handleTakeScreenshort} className='camera'>
      {isTakingScreenshort ? <Loader /> : <Camera size={32} /> }
    </button>
  )
}