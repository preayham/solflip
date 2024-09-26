const Tokenomics = () => {
  return (
    <div className="flex flex-col w-screen h-screen items-center justify-center gap-8 max-lg:h-fit max-lg:pb-12">
      <span className="font-semibold font-special text-[84px] tracking-tight text-white italic max-md:text-6xl">
        $FLIP
      </span>

      <div className="flex flex-wrap items-center justify-center w-fit h-fit gap-4 px-8">
        <div className="relative flex card rounded-md px-8 py-8 min-w-[200px] w-full min-h-full max-lg:min-h-fit items-center max-w-[500px]">
          <img
            src="/noise.png"
            className="absolute w-full h-full opacity-[0.03] z-[-1]"
          />

          <div className="flex flex-col gap-8">
            <div className="flex flex-col items-center justify-center gap-2">
              <span className="bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text font-bold text-2xl">
                1 Billion Supply
              </span>

              <span className="text-gray-400 font-medium text-base tracking-tight text-center">
                $FLIP Token Supply stands at 1 Billion. There will be an initial
                distribution through a fair launch using Raydium.
              </span>
            </div>

            <div className="flex items-center justify-center gap-2">
              <span className="text-white font-bold text-2xl">
                Name: SolFlip
              </span>

              <span className="text-white font-bold text-2xl">
                Symbol: $FLIP
              </span>
            </div>
          </div>
        </div>

        <div className="relative flex card rounded-md px-8 py-8 min-w-[200px] w-full min-h-full max-lg:min-h-fit items-center max-w-[500px]">
          <img
            src="/noise.png"
            className="absolute w-full h-full opacity-[0.03] z-[-1]"
          />

          <div className="flex flex-col gap-8">
            <div className="flex flex-col items-center gap-2">
              <span className="bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text font-bold text-2xl">
                Provably fair
              </span>

              <span className="text-gray-400 font-medium text-base tracking-tight text-center">
                The outcome of each coinflip is determined by a provably fair
                and transparent randomization process, ensuring trust and
                integrity within the platform.
              </span>
            </div>

            <div className="flex items-center justify-center gap-2.5">
              <div className="group flex items-center justify-center border border-white w-[100px] h-[35px] rounded-[5px] hover:bg-white transition-all ease-linear cursor-default">
                <span className="text-sm text-white group-hover:hidden">
                  Heads
                </span>

                <span className="text-sm text-black hidden group-hover:flex">
                  50%
                </span>
              </div>

              <div className="group flex items-center justify-center border border-white w-[100px] h-[35px] rounded-[5px] hover:bg-white transition-all ease-linear cursor-default">
                <span className="text-sm text-white group-hover:hidden">
                  Tails
                </span>

                <span className="text-sm text-black hidden group-hover:flex transition-all">
                  50%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <span className="font-semibold font-special text-[84px] tracking-tight text-white italic max-md:text-6xl">
        ROADMAP
      </span>

      <div className="flex flex-wrap items-center justify-center w-fit h-fit gap-4 px-8">
        <div className="relative flex card rounded-md px-8 py-8 min-w-[200px] w-full min-h-full max-lg:min-h-fit items-center max-w-[500px]">
          <img
            src="/noise.png"
            className="absolute w-full h-full opacity-[0.03] z-[-1]"
          />

          <div className="flex flex-col gap-8">
            <div className="flex flex-col items-center justify-center gap-2">
              <span className="bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text font-bold text-2xl">
                Cross-Platform Integration
              </span>

              <span className="text-gray-400 font-medium text-base tracking-tight text-center">
                SolFlip utility token may be integrated with other Solana-based
                decentralized applications, expanding its utility and
                interoperability.
              </span>
            </div>
          </div>
        </div>

        <div className="relative flex card rounded-md px-8 py-8 min-w-[200px] w-full min-h-full max-lg:min-h-fit items-center max-w-[500px]">
          <img
            src="/noise.png"
            className="absolute w-full h-full opacity-[0.03] z-[-1]"
          />

          <div className="flex flex-col gap-8">
            <div className="flex flex-col items-center gap-2">
              <span className="bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text font-bold text-2xl">
                Integration with $FLIP
              </span>

              <span className="text-gray-400 font-medium text-base tracking-tight text-center">
                The utility token will be seamlessly integrated into the SolFlip
                platform, enhancing user experience and providing additional
                benefits to token holders.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
