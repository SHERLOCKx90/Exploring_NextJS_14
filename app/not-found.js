import React from 'react'
import Animation from '../app/components/Animation'
const notfound = () => {
  return (
    <div className='w-screen h-screen px-[5rem] sm:px-auto flex flex-col items-center justify-center text-white bg-slate-900 font-semibold text-3xl text-center py-2'>
      <Animation />
      <h3 className='mt-0'>Oops! looks like you have lost your way!☹️</h3>
    </div>
  )
}

export default notfound