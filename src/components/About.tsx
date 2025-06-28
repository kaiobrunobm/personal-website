import React from 'react';
import { pt } from '../utils/strings';
import { en } from '../utils/strings';

interface aboutProps {
  aboutRef: React.RefObject<HTMLDivElement | null>;
  language?: 'PT' | 'EN';
}

const About: React.FC<aboutProps> = ({ aboutRef, language }) => {
  return (
    <div className='h-screen flex flex-col items-center self-stretch gap-16 pt-32' ref={aboutRef} id='about'>
      <div className='flex flex-col items-center justify-center gap-6 self-stretch px-6 md:text-xl lg:text-2xl lg:px-24'>
        {language === 'PT' ? (
          <p className='text-center lg:text-start'>Sou desenvolvedor  <span className='font-bold text-highlights'>full-stack</span> e<span className='font-bold text-highlights'> designer UX/UI
          </span>, apaixonado por criar sites e aplicações impecáveis e acessíveis. Gosto de trabalhar tanto no design quanto no código, criando soluções que não apenas têm uma boa aparência, mas também funcionam bem para todos.</p>
        ) : (
          <p className='text-center lg:text-start'>I'm a <span className='font-bold text-highlights'>full-stack</span> developer and <span className='font-bold text-highlights'>UX/UI designer
          </span> who loves building clean, accessible websites and applications. I enjoy working on both the design and the code-making things that not only look good but also work well for everyone.</p>
        )}
        {language === 'PT' ? (
          <p className='text-center lg:text-start'>
            Atualmente, trabalho como <span className='font-bold text-highlights'>Técnico em TI </span> enquanto curso Bacharelado em Ciência da Computação. Estou sempre aprendendo e explorando novas tecnologias, e gosto de resolver problemas por meio de um design inteligente e um desenvolvimento sólido.
          </p>
        ) : (
          <p className='text-center lg:text-start'>
            Right now, I’m working as an <span className='font-bold text-highlights'>IT Technician</span> while pursuing a degree in Computer Science. I’m always learning and exploring new technologies, and I enjoy solving problems through smart design and solid development.
          </p>
        )}

      </div>
      <h2 className='text-4xl md:text-6xl'>{language === 'PT' ? pt.about.title : en.about.title}</h2>
    </div>
  );
};

export default About;
