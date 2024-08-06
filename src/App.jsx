import { useState } from 'react'
import CryptoPage from './CryptoPage'

function App() {
  return (
    <div className='bg-[#edeeef] min-h-[100vh] h-[100%]'>
      <div className='h-8'></div>
      <div className='bg-white md:w-[60%] m-auto pt-3 rounded-lg border'>
        <CryptoPage/>
      </div>
    </div>
    
  )
}

export default App
