import { useCallback, useEffect, useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState('false')
  const [charAllowed, setCharAllowed] = useState('false')
  const [password, setPassword] = useState('ahsgd123')

  const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM"

    if(numberAllowed) str+= '0123456789'
    if(charAllowed) str+= '!@#$%^&*()_+'

    for(let i=1; i<length; i++) {
      const char = Math.floor(Math.random() * str.length + 1)
      pass+= str.charAt(char);
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed])

  const copyToClipboard = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current.select()
  }

  useEffect(() => {
    generatePassword()
  }, [length, numberAllowed, charAllowed])




  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-md px-4 py-3 my-8 bg-gray-800 text-orange-500'>
        <h1 className='text-white text-3xl font-bold mb-2 text-center'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className='outline-none w-screen py-1 px-3'
            placeholder='password'
            ref={passwordRef}
            readOnly
          />
          <button onClick={copyToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>
        <div
        className='flex text-sm gap-x-2'
        >
          <div 
          className='flex items-center gap-x-1'
          >
            <input 
            type='range'
            min={8}
            max={39}
            value={length}
            className='cursor-Pointer'
            onChange={(e) => setLength(e.target.value)}
             />
             <label htmlFor="length">Length: {length}</label>
             <input 
             type="checkbox" 
             defaultChecked={numberAllowed}
             onChange={() => {setNumberAllowed((prev) => (!prev))}}
             />
             <label htmlFor="number">Numbers</label>
             <input 
             type="checkbox" 
             defaultChecked={charAllowed}
             onChange={() => {setCharAllowed((prev) => (!prev))}}
             />
             <label htmlFor="charInput">Character</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App