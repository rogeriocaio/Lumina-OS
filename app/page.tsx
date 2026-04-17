import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen">
      {/* Imagem de fundo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-bl from-transparent from-30% to-black to-93%">
          <div className="absolute inset-0 bg-[linear-gradient(300deg,transparent_40%,#00000073_60%)]">
            <div className="absolute inset-0 bg-[linear-gradient(280deg,transparent_35%,#0F0F0F73_46%,#000000)]">
              <Image
              src="/fundo_Grande.jpg"
              alt="Fundo"
              width={2394}
              height={1347}
              priority
              className="opacity-30 max-w-none"
              />
            </div>
          </div>
        </div>
        {/* Elipse de iluminação do Notebook */}
          <div className="absolute z-3 w-209.75 h-199.5 left-286 bottom-9.5 rounded-full 
          bg-radial-[at_35%_50%] from-[#1D96E2] to-transparent blur-[87px] mix-blend-soft-light "></div>
      </div>
      {/* Barra de navegação */}
      <div className="absolute inset-0 mt-10 mx-80">
          <div  className="absolute right-0 bottom-35 ">
          {/* Elipse de iluminação atrás do Notebook */}
          <div className="absolute w-132.75 z-1 h-133.25 -top-4 right-5 rounded-full bg-radial from-[#1D96E2]/90 to-transparent blur-[87px]"></div>
          {/* Notebook posicionado em relação a barra de navegação */}
          <Image
            src="/notebook_Grande.jpg"
            alt="Notebook"
            height={667}
            width={670}
            className="relative z-2 drop-shadow-[0_0_1px_#1D96E2]"
            priority
            style={{height: 'auto'}}
          />
        </div>
        {/* Conteúdo da barra de navegação */}
        <div className="bg-[#FAFAFA]/[0.07] backdrop-blur-[100px] h-13.5 rounded-[14px]  border border-white/10 shadow-lg shadow-black/20">
              {/* Conteúdo da barra de navegação */}
              <div className="h-full flex items-center text-[16px] text-white/85 font-sans tracking-wider font-extralight">
                <div className="flex gap-9 px-6 ">
                  <button>INICIO</button>
                  <button>HOME</button>
                  <button>ABOUT</button>
                </div>
                {/* Botões de ação */}
                <div className="ml-auto flex gap-5 tracking-wide px-2.5 py-1 font-sans">
                  {/* Botão de histórico */}
                  <div className="border border-white/25 rounded-md text-white flex w-30 h-9.75 items-center justify-center font-light">
                    <button>HISTORICO</button>
                  </div>
                  <div className="border-transparent rounded-md text-black bg-white/92  flex w-30 h-9.75 items-center justify-center font-semibold">
                    {/* Botão de perfil */}
                    <button>PROFILE</button>
                  </div>
                </div>
              </div>
          </div>
          {/* Texto */}
          <div className="font-sans absolute top-1/2  -translate-y-50 ">
            {/* Parágrafo 1 */}
            <p className="text-[20px] text-[#E2E2E2]/70 font-extralight">empor incididunt ut labore</p>
            {/* Parágrafo 2 */}
            <h1 className="text-[64px] font-bold leading-tight pt-4.5 
            bg-linear-to-r from-white to-[#ACC3CE] bg-clip-text text-transparent">Voluptate velit <br/> esse cillum dolore</h1>
            {/* Parágrafo 3 */}
            <p className="text-[20px] pt-4.5 text-[#E2E2E2]/90 font-light w-149.25 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
              enim ad minim veniam, quis nostrud exercitation ullamco <br/>
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute i</p>
            {/* Botão Garantir Vaga */}
            <button className="w-56.5 h-12 text-[18px] font-medium/90 flex justify-center items-center mt-10 tracking-widest
             bg-white/5 border border-white/20 backdrop-blur-3xl ">
              <span className="text-white [-webkit-text-stroke:0.1px_white] drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">GARANTIR VAGA</span>
              <span className="ml-3 opacity-70">→</span>    
            </button>
          </div>
        </div>
    </main>
  );
}
