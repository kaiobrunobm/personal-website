import React from 'react'
import Sidebar from './components/Sidebar'
import Content from './components/Content'

const App: React.FC = () => {
  return (
    <main className='bg-backgroud h-full flex flex-col items-start py-3 font-roboto text-base'>
      <Sidebar />
      <Content />
    </main>
  )
}


export default App
