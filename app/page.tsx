import Image from "next/image";
import { Button } from "./components/button";
import { Code, History, House, Info, User } from "lucide-react";
import { NavmobileButton } from "./components/navmobile";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden ">

      {/* IMAGEM PRINCIPAL DE FUNDO */}
      <div className="fixed inset-0 overflow-hidden">
        <Image
          src="/fundo_Grande.jpg"
          alt="Fundo"
          width={2394}
          height={1347}
          quality={100}
          priority
          sizes=" width: auto height: auto"
          className="md:max-w-none  min-h-screen w-[125%] object-cover opacity-70 "
        />
        <div className="absolute inset-0 bg-[linear-gradient(290deg,transparent_30%,#00000099_93%)]"/>
        <div className="absolute inset-0 bg-[linear-gradient(300deg,transparent_38%,#00000073_55%)]"/>
        <div className="absolute inset-0 bg-[linear-gradient(280deg,transparent_34%,#00000073_44%,black)]"/>
      </div>


      {/* BARRA DE NAVEGAÇÃO DESKTOP*/}
      <div className="flex flex-col h-screen relative mx-auto md:max-w-7xl md:pt-10 items-center  "> 
        <div className="hidden md:block h-13.5 md:w-full bg-[#FAFAFA]/[0.07] backdrop-blur-[120px] 
          rounded-2xl border border-white/8 shadow-lg shadow-black/20">
          {/* CONTEÚDO */}
          <div className="h-full md:flex text-white/85 font-sans tracking-wider font-extralight ">
            <div className=" flex md:gap-5 gap-4 md:px-5 px-3.5 h-auto w-full md:w-auto pt-4 md:pt-0">
              <Button label="INICIO" />
              <Button label="PROJETOS" />
              <Button label="SOBRE" />
            </div>
            <div className="h-full md:ml-auto md:flex md:gap-5 tracking-wide md:px-2.5 md:items-center font-sans">
              <div className="md:border border-white/30 rounded-xl text-white flex w-30 h-9.75 items-center justify-center font-light hover:bg-white/10 transition-colors duration-200">
                <Button label="HISTORICO"/>
              </div>
              <div className="border-transparent rounded-xl text-black md:bg-white flex w-30 h-9.75 justify-center font-semibold hover:bg-white/85 transition-colors duration-200">
                <Button label="PERFIL"/>
              </div>
            </div>
          </div>
        </div>

        {/* CONTEÚDO ABAIXO DA BARRA DE NAVEGAÇÃO */}
        <div className=" flex flex-col md:flex-row h-full px-8 md:px-0 ">
          {/* TEXTO*/}
          <div className="md:w-1/2 text-center md:text-left flex flex-col justify-center font-sans  ">
            <div className="md:overflow-y-auto flex flex-col gap-4">
              <div>
              </div>
              <p className="text-base md:text-xl font-extralight">empor incididunt ut labore</p>
              <h1 className="text-4xl md:text-[64px]  font-bold bg-[linear-gradient(160deg,white_30%,#78a5bf)] bg-clip-text text-transparent">Voluptate velit esse cillum dolore</h1>
              <p className="text-base md:text-xl font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute i
              </p>
              <button className="md:mt-6 md:mb-3 md:text-left border border-white/10 bg-[#222222]/80  w-fit md:self-start  md:px-10 md:py-3 hidden md:block  ">
                <span className="text-white [-webkit-text-stroke:0.1px_white] drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">GARANTIR VAGA</span>
                <span className="ml-3 opacity-70">→</span>
              </button>
            </div>
          </div>

          {/* NOTEBOOK */}
          <div className="md:w-1/2 relative h-full flex flex-col">
            <div className="relative flex-1">
              <div className="absolute inset-0 flex justify-center items-center ">
                <div className=" max-h-[60%] h-65 md:h-60 md:max-h-[50%] xl:h-90 xl:max-h-[70%] aspect-square  rounded-full bg-radial from-indigo-600 to-transparent blur-[120px]"></div>
              </div>
              <Image
                src="/notebook_Grande.jpg"
                alt="Notebook"
                fill
                quality={100}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain drop-shadow-[0_0_25px_rgba(29,150,226,0.3)]"
              />
            </div>
            <button className="block md:hidden border border-white/10 bg-[#222222]/80 self-center px-8 py-4 mb-34">
              <span className="text-white [-webkit-text-stroke:0.1px_white] drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">GARANTIR VAGA</span>
              <span className="ml-3 opacity-70">→</span>
            </button>
          </div>

          {/* BARRA DE NAVEGAÇÃO MOBILE */}
          <div className="block md:hidden absolute bottom-11 self-center min-w-fit w-[82vw] h-16 bg-white/8 backdrop-blur-md rounded-full border border-white/10 shadow-xl shadow-black/40 overflow-x-auto">
              <div className="flex justify-between items-center h-full mx-3 gap-3 ">
                <NavmobileButton/>
              </div>
          </div>
          {/* <div className="self-center block md:hidden absolute bottom-0 w-[82vw] border h-10"></div> */}
        </div>
      </div>
    </main>
  );
}
