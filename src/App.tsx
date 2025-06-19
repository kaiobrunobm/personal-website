import React from 'react'
import Sidebar from './components/Sidebar'
import Content from './components/Content'

const App: React.FC = () => {
  return (
    <main className='bg-backgroud h-full flex flex-col items-start py-3 font-roboto text-base lg:grid lg:grid-cols-3 lg:py-0'>
      <Sidebar />
      <Content />
    </main>
  )
}


export default App
