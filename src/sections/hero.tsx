const Hero = () => {
  return (
    <div className="relative flex flex-col w-screen h-screen items-center justify-center gap-12">
      <div className="flex flex-col items-center z-[1] max-sm:gap-6 px-6">
        <span className="font-semibold font-special text-white text-[100px] tracking-tighter leading-none max-lg:text-7xl max-md:text-6xl max-sm:text-5xl text-center">
          Solana's best game yet,
        </span>

        <div className="relative flex items-center justify-center loadingTitle">
          <span className="font-semibold font-special text-[100px] tracking-tight text-transparent bg-clip-text skeletonAlways max-sm:text-7xl">
            Solflip
          </span>

          <img
            src="/logo.png"
            className="min-w-[100px] w-[100px] min-h-[100px] h-[100px] imgFlipConstant max-sm:min-w-[72px] max-sm:w-[72px] max-sm:min-h-[72px] max-sm:h-[72px]"
          />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 z-[1]">
        <button className="relative group flex gap-2 items-center justify-center pl-6 pr-12 py-3 bg-gradient-to-tr from-[#9565e1] to-[#31cab8] transition-all ease-linear rounded-full">
          <span className=" text-white tracking-wide transition-all ease-linear">
            Buy $FLIP
          </span>

          <img
            src="/arrow.svg"
            className="absolute scale-[0.8] right-6 mb-[0.5px] group-hover:right-4 transition-all ease-linear"
          />
        </button>

        <button className="group flex items-center justify-center px-8 py-3 border border-white bg-white bg-opacity-0 hover:bg-opacity-100 transition-all ease-linear rounded-full">
          <span className=" text-white group-hover:text-black tracking-wide transition-all ease-linear">
            Launch Game
          </span>
        </button>
      </div>

      <div className="absolute bgBlur left-1/2 -translate-x-1/2 z-[-1]"></div>
    </div>
  );
};

export default Hero;
