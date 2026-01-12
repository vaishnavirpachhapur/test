import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>This is a demo for embedding a Power BI report:
        <iframe title="Sample Report Demo" width="1140" height="541.25" src="https://playground.powerbi.com/sampleReportEmbed" frameborder="0" allowFullScreen="true"></iframe>
    </div>
    </>
  )
}

export default App
