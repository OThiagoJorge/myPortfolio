'use client'
import "./globals.css"
import { useState, useEffect } from 'react'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import TranslateIcon from '@mui/icons-material/Translate'

  export default function Portfolio() {
    const fullName = "Olá visitante, como vai?"
    const description = `Meu nome é Thiago Jorge e sou um desenvolvedor web. Sou apaixonado por criar soluções para problemas do dia a dia. Meu foco é em desenvolvimento web, mas também tenho interesse em outras áreas da tecnologia. 
    --Gosto de desenvolver aplicações em React, mas também estou sempre aberto a novas ferramentas.
    --Tenho uma certa compreensão de Cloud Computing - AWS, Google Cloud(Firebase).
    --Estou atualmente no 5º semestre de Ciência da Computação.
    --Sou um entusiasta, sei que ainda há muito o que ser explorado nessa área, e acredito no poder que as aplicações podem ter para melhorar a vida das pessoas.`
    const [displayedName, setDisplayedName] = useState("")
    const [displayedDescription, setDisplayedDescription] = useState("")

    const [showNameCursor, setShowNameCursor] = useState(true)
    const [showDescriptionCursor, setShowDescriptionCursor] = useState(true)

    useEffect(() => {
      let typeTimeout
      let currentIndex = 0

      const type = () => {
      typeTimeout = setTimeout(() => {
        if (currentIndex === fullName.length) {
          setTimeout( () => {
            setShowNameCursor(false)
          }
          , 1000)
        clearTimeout(typeTimeout)
        return
        }
        currentIndex++
        setDisplayedName(fullName.slice(0, currentIndex))
        type()
      }, 150)
      }

      type()

      return () => clearTimeout(typeTimeout)
    }, [])

    useEffect(() => {
      if (showNameCursor) return

      let typeTimeout
      let currentIndex = 0

      const type = () => {
      typeTimeout = setTimeout(() => {
        if (currentIndex === description.length) {
        setTimeout(() => {
          setShowDescriptionCursor(false)
        }, 1000)
        clearTimeout(typeTimeout)
        return
        }
        currentIndex++
        setDisplayedDescription(description.slice(0, currentIndex))
        type()
      }, 50)
      }

      type()

      return () => clearTimeout(typeTimeout)
    }, [showNameCursor])

      const phoneNumber = "5511930198510"
      const message = "Olá! Vim por causa do portfolio"
    
      const handleClick = () => {
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
        window.open(url, "_blank")
      }

    return (
      <main className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth flex flex-col font-sans text-center text-white background">
      <header className="w-full fixed top-0 z-10">
      <nav className="w-full bg-black/80 flex justify-center md:justify-evenly py-4 h-16 items-center">
      <a 
        href="#sobre" 
        className="mr-4 text-white hover:underline">
        Sobre
      </a>
      <a 
        href="#projetos" 
        className="mr-4 text-white hover:underline">
        Projetos
      </a>
      <a 
        href="#contato" 
        className="text-white hover:underline">
        Contato
      </a>
      <button className="h-10 w-10 bg-white rounded-full right-5 fixed cursor-pointer hover:bg-white/80">
        <MoreHorizIcon className="text-black" />
      </button>
      </nav>
      <div className="fixed h-auto w-14 right-3 pb-3 bg-black/80 rounded-b-full cursor-pointer flex flex-col items-center z-40 drop-shadow-lg">
        <button className="h-10 w-10 bg-white rounded-full mb-3 cursor-pointer hover:bg-white/80">
          <TranslateIcon className="text-black" />
        </button>
        <button className="h-10 w-10 bg-white rounded-full cursor-pointer hover:bg-white/80">
          <DarkModeIcon className="text-black" />
        </button>
      </div>
      </header>
      {/* Wrap sections in a div with padding-top to offset the fixed nav */}
      <div className="pt-16">
      <section 
      id="sobre" 
      className="pt-20 px-5 pb-5 md:w-full flex flex-col items-center mx-auto h-screen snap-center bg-black/5">
      <h1 className="text-2xl md:text-4xl font-bold flex items-center justify-center mb-3">
      <img 
        src="/eu.jpg" 
        alt="Foto de perfil" 
        className="rounded-full mr-2 w-12 h-12 drop-shadow-lg" />
      <span className="text-black bg-yellow-300/80">
        {displayedName}
      </span>
      {showNameCursor ? (
        <span className="cursor"></span>
      ) : (
        <span className="cursorTransparent"></span>
      )}
      </h1>
      <div className="md:w-2/3 bg-black/75 rounded-lg overflow-scroll h-72">
      <div className="bg-[#222222] rounded-t-xl h-8 md:h-11 grid grid-cols-3 px-1 md:px-2 content-center">
        <img 
        src="/icon1.png" 
        className="my-auto h-6 md:h-7 select-none active:bg-amber-950" 
        alt="Icon 1"
        draggable="false" />
        <p className="md:text-[15px] my-auto text-[12px] md:font-bold select-none">thiago@ubuntu:~</p>
        <div className="flex justify-end items-center gap-2 md:gap-4">
        <div className="flex justify-end items-center gap-0.5 md:gap-2">
        <img 
        src="/icon2.png" 
        className="my-auto h-6 md:h-7 select-none" 
        alt="Icon 2"
        draggable="false" />
        <img 
        src="/icon3.png" 
        className="my-auto h-6 md:h-7 select-none" 
        alt="Icon 3"
        draggable="false" />
        </div>
        <div className="flex justify-end items-center gap-1 md:gap-4 mr-1">
        <img 
        src="/icon4.png" 
        className="my-auto h-4 md:h-5 select-none" 
        alt="Icon 4"
        draggable="false" />
        <img 
        src="/icon5.png" 
        className="my-auto h-4 md:h-5 select-none" 
        alt="Icon 5"
        draggable="false" />
        <img 
        src="/icon6.png" 
        className="my-auto h-4 md:h-5 select-none" 
        alt="Icon 6"
        draggable="false" />
        </div>
        </div>
      </div>
      <h3 className="md:text-xl text-left ml-0.5 ubuntu-mono-regular">
        <span className="text-white font-bold">
        <span className="text-[#54fe55]">thiago@ubuntu</span>:<span className="text-[#5555ff]">~</span>
        <span className="font-normal">$ </span> 
        </span>
        <span className="h-96">
        {displayedDescription}
        {showDescriptionCursor ? (
        <span className="cursor"></span>
        ) : (
        <span className="cursorTransparent"></span>
        )}
        </span>
      </h3>
      </div>
      <div className="flex flex-col slide-in mt-4">
        <div className="flex items-center mt-4 gap-2 bg-white/90 p-2 rounded-full slide-in">
        <img 
          src="logos/tailwind.png" 
          className="w-20 rounded-full" 
          alt="Tailwind logo"
          title='Veja mais' 
        />
        <img 
          src="logos/react.png" 
          className="w-20 rounded-full" 
          alt="React logo"
          title='Veja mais' 
        />
        <img 
          src="logos/nextjs.png" 
          className="w-20 rounded-full" 
          alt="Next.js logo"
          title='Veja mais' 
        />
        <img 
          src="logos/linux.png" 
          className="w-20 rounded-full" 
          alt="Linux logo"
          title='Veja mais' 
        />
        <img 
          src="logos/firebase.png" 
          className="w-20 rounded-full" 
          alt="Firebase logo"
          title='Veja mais' 
        />
        <img 
          src="logos/git.png" 
          className="w-20 rounded-full" 
          alt="Git logo"
          title='Veja mais' 
        />
        <img 
          src="logos/github.png" 
          className="w-20 rounded-full" 
          alt="GitHub logo"
          title='Veja mais' 
        />
        </div>
      </div>
      </section>
    
      <section 
      id="projetos" 
      className="pt-20 px-5 pb-5 flex flex-col mx-auto h-screen snap-center bg-black/10 "
      >
      <h2 className="text-2xl md:text-4xl font-bold flex items-center justify-center mb-3">
        <span className="text-black bg-yellow-300/80">
        Projetos
        </span>
      </h2>
      <ul className="mt-3 flex flex-row gap-4 flex-wrap justify-center">
        <li className="mb-4 rounded-lg bg-black/50 w-1/2">
        <h3 className="text-xl font-medium bg-black rounded-t-lg py-2">~ Projeto de rede social ~</h3>
        <p className="my-2">Um humilde projeto de rede social que pretende expandir no futuro:</p>
        <div className="flex overflow-x-auto object-cover">
          <img 
          src="Projects/socialPosting0.png"
          className="flex-shrink-0 object-cover w-full h-full"
          alt="Imagem do projeto de rede social 0"
          />
          <img 
          src="Projects/socialPosting1.png"
          className="flex-shrink-0 object-cover w-full h-full"
          alt="Imagem do projeto de rede social 1"
          />
          <img 
          src="Projects/socialPosting2.png"
          className="flex-shrink-0 object-cover w-full h-full"
          alt="Imagem do projeto de rede social 2"
          />
          <img 
          src="Projects/socialPosting3.png"
          className="flex-shrink-0 object-cover w-full h-full"
          alt="Imagem do projeto de rede social 3"
          />
        </div>
        <a 
          target="new" 
          rel="noopener noreferrer" 
          className="font-bold" 
          href="https://socialposting--socialposting-11343.us-central1.hosted.app/"
        >
          {"------->>> Veja <<<-------"}
        </a>
        </li>
      </ul>
      </section>
      <section 
      id="contato" 
      className="pt-20 px-5 pb-5 flex flex-col mx-auto h-screen snap-center bg-black/15"
      >
      <h2 className="text-2xl md:text-4xl font-bold flex items-center justify-center mb-3">
        <span className="text-black bg-yellow-300/80">
        Contato
        </span>
      </h2>
      <div>
        <p className="mt-3">E-mail: thiagojorgedasilva7@gmail.com</p>
        <button onClick={handleClick} className="cursor-pointer flex align-middle justify-">
        <WhatsAppIcon></WhatsAppIcon> Fale comigo no WhatsApp
        </button>
      </div>
      <p>&copy; {new Date().getFullYear()} Meu Portfolio</p>
      </section>
      </div>
      <style jsx>{`
      .cursor {
      display: inline-block;
      margin-left: 2px;
      height: 1em;
      width: 9px;
      background-color: white;
      vertical-</footer>align: middle;
      animation: blink 1s step-start infinite;
      }
      @keyframes blink {
      50% { opacity: 0; }
      }
      .cursorTransparent {
      display: inline-block;
      margin-left: 2px;
      height: 1em;
      width: 9px;
      vertical-align: middle;
      opacity: 0;
      }
      .background {
      background-image: url('/van-gogh1.gif');
      background-size: cover;
      width: 100%;
      min-height: 100vh;
      background-attachment: fixed;
      }
      .ubuntu-mono-regular {
      font-family: "Ubuntu Mono", monospace;
      font-weight: 400;
      }
      .ubuntu-mono-bold {
      font-family: "Ubuntu Mono", monospace;
      font-weight: 700;
      }
      .ubuntu-mono-regular-italic {
      font-family: "Ubuntu Mono", monospace;
      font-weight: 400;
      font-style: italic;
      }
      .ubuntu-mono-bold-italic {
      font-family: "Ubuntu Mono", monospace;
      font-weight: 700;
      font-style: italic;
      }
      .slide-in {
      animation: slideIn 1s forwards;
      }
      @keyframes slideIn {
      from {
        transform: translateX(-100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
      `}</style>
      </main>
    )
  }