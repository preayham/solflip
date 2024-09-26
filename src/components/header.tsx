import { useState } from "react";

const HRef = ({ value, href }: { value: string; href: string }) => {
  return (
    <a
      className="aref transition-all ease-linear"
      href={href}
      target={href ? "_blank" : ""}
    >
      <span className="text-sm tracking-tighter bg-gradient-to-r bg-[-200px] from-gray-400 to-gray-400 text-transparent bg-clip-text skeleton">
        {value}
      </span>
    </a>
  );
};

const Header = () => {
  const [opened, setOpened] = useState(false);

  return (
    <div
      className={`fixed flex w-full h-fit px-20 py-6 items-center justify-between header max-sm:px-6 z-[1] ${
        opened
          ? "max-sm:bg-white/[0.025] max-backdrop-blur-lg max-drop-shadow-lg"
          : ""
      }`}
    >
      <div className="flex w-fit h-fit items-center gap-2 cursor-pointer imgAnimDiv place-self-start">
        <img src="/logo.png" className="w-[32px] h-[32px]" />

        <a href="/">
          <span className="text-white font-special font-bold text-xl tracking-wider">
            SOLFLIP
          </span>
        </a>
      </div>

      <div className="flex flex-col items-end justify-center max-sm:gap-4">
        <div className="flex items-center justify-center sm:hidden hover:cursor-pointer">
          <svg
            width="22"
            height="18"
            viewBox="0 0 22 18"
            fill="none"
            onClick={() => setOpened(!opened)}
          >
            <path
              d="M9.20002 16.1998H20.6M1.40002 8.9998H20.6M1.40002 1.7998H20.6"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </div>

        <div
          className={`flex gap-6 leading-[0] max-sm:flex-col max-sm:text-right max-sm:gap-4 ${
            opened ? "visible" : "max-sm:hidden"
          }`}
        >
          <HRef value="Github" href="https://github.com/preayham/solflip" />
          <HRef value="Play game" href="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
