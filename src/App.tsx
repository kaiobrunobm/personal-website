import React from 'react'
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import { useRef } from 'react'
const App: React.FC = () => {

  const about = useRef<HTMLDivElement | null>(null)
  const experiences = useRef<HTMLDivElement | null>(null)
  const projects = useRef<HTMLDivElement | null>(null)


  return (
    <>
      <main className='bg-backgroud flex flex-col items-start py-3 font-roboto text-base lg:grid lg:grid-cols-3 lg:py-0'>
        <Sidebar aboutRef={about} experiencesRef={experiences} projectsRef={projects} />
        <Content aboutRef={about} experiencesRef={experiences} projectsRef={projects} />
      </main>
    </>
  )
}


export default App
