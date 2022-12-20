import React from "react";
import { useState } from "react";

function Nav() {
  // create hamburger state on and off
  const [hamburger, setHamburger] = useState(false);
  return (
    <div>
      <div className="navbar justify-between bg-[#121213]	font-sans	 py-3 text-white flex flex-row box-border px-5 ">
        <button
          className="hamLogo"
          onClick={() => {
            setHamburger(!hamburger);
          }}
        >
          <svg
            class="NavIcon-module_burgerSvg__WKh0A"
            width="20"
            height="17"
            viewBox="0 0 24 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.172974" width="20" height="3" rx="1.5" fill="white"></rect>
            <rect x="0.172974" y="7" width="20" height="3" rx="1.5" fill="white"></rect>
            <rect x="0.172974" y="14" width="20" height="3" rx="1.5" fill="white"></rect>
          </svg>
        </button>

        <h1 className="text-white text-[2rem] font-bold ">Wordle</h1>
        <div className="right flex-row gap-2 flex">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="27"
              viewBox="4 4 24 24"
              width="27"
              class="game-icon"
              data-testid="icon-help"
            >
              <path
                fill="white"
                d="M14.8333 23H17.1666V20.6667H14.8333V23ZM15.9999 4.33334C9.55992 4.33334 4.33325 9.56001 4.33325 16C4.33325 22.44 9.55992 27.6667 15.9999 27.6667C22.4399 27.6667 27.6666 22.44 27.6666 16C27.6666 9.56001 22.4399 4.33334 15.9999 4.33334ZM15.9999 25.3333C10.8549 25.3333 6.66659 21.145 6.66659 16C6.66659 10.855 10.8549 6.66668 15.9999 6.66668C21.1449 6.66668 25.3333 10.855 25.3333 16C25.3333 21.145 21.1449 25.3333 15.9999 25.3333ZM15.9999 9.00001C13.4216 9.00001 11.3333 11.0883 11.3333 13.6667H13.6666C13.6666 12.3833 14.7166 11.3333 15.9999 11.3333C17.2833 11.3333 18.3333 12.3833 18.3333 13.6667C18.3333 16 14.8333 15.7083 14.8333 19.5H17.1666C17.1666 16.875 20.6666 16.5833 20.6666 13.6667C20.6666 11.0883 18.5783 9.00001 15.9999 9.00001Z"
              ></path>
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="27"
              viewBox="4 4 24 24"
              width="27"
              class="game-icon"
              data-testid="icon-statistics"
            >
              <path
                fill="white"
                d="M20.6666 14.8333V5.5H11.3333V12.5H4.33325V26.5H27.6666V14.8333H20.6666ZM13.6666 7.83333H18.3333V24.1667H13.6666V7.83333ZM6.66659 14.8333H11.3333V24.1667H6.66659V14.8333ZM25.3333 24.1667H20.6666V17.1667H25.3333V24.1667Z"
              ></path>
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="27"
              viewBox="4 4 24 24"
              width="27"
              class="game-icon"
              data-testid="icon-settings"
            >
              <path
                fill="white"
                d="M25.52 17.2534C25.5733 16.8534 25.6 16.44 25.6 16C25.6 15.5734 25.5733 15.1467 25.5067 14.7467L28.2133 12.64C28.4533 12.4534 28.52 12.0934 28.3733 11.8267L25.8133 7.40004C25.6533 7.10671 25.32 7.01338 25.0267 7.10671L21.84 8.38671C21.1733 7.88004 20.4667 7.45338 19.68 7.13338L19.2 3.74671C19.1467 3.42671 18.88 3.20004 18.56 3.20004H13.44C13.12 3.20004 12.8666 3.42671 12.8133 3.74671L12.3333 7.13338C11.5467 7.45338 10.8267 7.89338 10.1733 8.38671L6.98665 7.10671C6.69332 7.00004 6.35998 7.10671 6.19998 7.40004L3.65332 11.8267C3.49332 12.1067 3.54665 12.4534 3.81332 12.64L6.51998 14.7467C6.45332 15.1467 6.39998 15.5867 6.39998 16C6.39998 16.4134 6.42665 16.8534 6.49332 17.2534L3.78665 19.36C3.54665 19.5467 3.47998 19.9067 3.62665 20.1734L6.18665 24.6C6.34665 24.8934 6.67998 24.9867 6.97332 24.8934L10.16 23.6134C10.8267 24.12 11.5333 24.5467 12.32 24.8667L12.8 28.2534C12.8667 28.5734 13.12 28.8 13.44 28.8H18.56C18.88 28.8 19.1467 28.5734 19.1867 28.2534L19.6667 24.8667C20.4533 24.5467 21.1733 24.12 21.8267 23.6134L25.0133 24.8934C25.3067 25 25.64 24.8934 25.8 24.6L28.36 20.1734C28.52 19.88 28.4533 19.5467 28.2 19.36L25.52 17.2534ZM16 20.8C13.36 20.8 11.2 18.64 11.2 16C11.2 13.36 13.36 11.2 16 11.2C18.64 11.2 20.8 13.36 20.8 16C20.8 18.64 18.64 20.8 16 20.8Z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <hr />
      {hamburger && (
        <div className=" transition-all hamMenu text-white py-5 gap-8 absolute left-0  px-5 w-fit bg-[#121213] flex-col box-content flex h-[60%]  overflow-scroll overflow-x-hidden	">
          <h1 className="flex flex-row justify-between ">
            <svg
              class="pz-nav__logo"
              width="95"
              height="18"
              viewBox="0 0 138 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="New York Times Games Logo. Click for more puzzles"
            >
              <rect width="138" height="25" fill="none"></rect>
              <path
                d="M42.4599 1.03519C44.219 1.00558 45.9577 1.41634 47.5176 2.23008V1.45245H53.4162V8.80515H47.5239C47.1067 7.03494 46.3607 6.2257 44.5904 6.2257C42.365 6.23834 41.0058 7.86947 41.0058 12.4151C41.0058 17.3148 42.2386 18.8827 45.0077 18.8827C45.7187 18.8975 46.4203 18.7183 47.0371 18.3643V16.2211H45.2037V11.9283H53.4225V24.0543H48.3648V22.9289C46.902 24.0012 45.1195 24.5471 43.307 24.4778C36.9216 24.4778 32.4392 20.2546 32.4392 12.4214C32.4708 5.2584 36.9849 1.03519 42.4599 1.03519Z"
                fill="white"
              ></path>
              <path
                d="M59.8645 24.3471C56.3494 24.3471 54.2883 22.4505 54.2883 19.2198C54.2883 15.9892 56.7097 13.9345 60.541 13.9345C61.9923 13.9222 63.4232 14.2767 64.701 14.965C64.6377 13.2264 63.3164 12.0947 60.8634 12.0947C59.0925 12.1015 57.3477 12.5215 55.7677 13.3212V9.25608C58.149 8.58084 60.6136 8.24457 63.0888 8.25718C69.7966 8.25718 72.0853 11.1907 72.0853 13.7701V19.8647H73.4382V24.0563H64.7705V22.5074C63.544 23.8603 61.7359 24.3471 59.8645 24.3471ZM64.859 18.8658C64.888 18.6431 64.8655 18.4166 64.7931 18.204C64.7207 17.9914 64.6005 17.7982 64.4417 17.6394C64.2829 17.4805 64.0897 17.3603 63.877 17.288C63.6644 17.2156 63.438 17.193 63.2153 17.222C62.1215 17.222 61.3755 17.7721 61.3755 18.8974C61.3755 20.0228 62.0077 20.478 63.1836 20.478C64.3596 20.478 64.8653 19.9911 64.8653 18.8848L64.859 18.8658Z"
                fill="white"
              ></path>
              <path
                d="M75.8371 19.8644V12.7709H74.5726V8.57927H83.1455V10.2546C85.1433 8.73732 86.2055 8.25684 87.786 8.25684C89.7206 8.25684 90.8839 8.80687 92.3949 10.3874C94.3611 8.83848 95.7456 8.25684 97.4526 8.25684C100.614 8.25684 102.801 10.419 102.801 13.2197V19.858H104.066V24.0496H95.5054V14.6739C95.5054 13.4473 95.0249 12.7772 94.1841 12.7772C93.3432 12.7772 92.9576 13.4094 92.9576 14.6739V19.8644H94.0513V24.056H85.6681V14.6106C85.6681 13.5169 85.1497 12.7709 84.4036 12.7709C83.6576 12.7709 83.1392 13.479 83.1392 14.6106V19.8644H84.2646V24.056H74.5474V19.8644H75.8371Z"
                fill="white"
              ></path>
              <path
                d="M113.781 24.3784C111.46 24.3784 108.881 23.8979 107.073 22.2858C106.216 21.5344 105.534 20.6058 105.072 19.5643C104.61 18.5229 104.38 17.3935 104.398 16.2544C104.398 11.1967 108.432 8.25684 113.25 8.25684C118.453 8.25684 121.924 11.93 121.924 16.3555C121.924 16.874 121.892 17.3545 121.86 17.8729H111.745C111.941 19.681 112.908 20.4839 114.387 20.4839C114.871 20.4803 115.347 20.3544 115.769 20.1178C116.191 19.8813 116.547 19.5418 116.803 19.131H121.86C120.773 22.6777 117.498 24.3784 113.781 24.3784ZM111.688 15.5273H115.481V15.1417C115.481 13.8204 115.159 12.4674 113.585 12.4674C113.201 12.4558 112.824 12.5691 112.51 12.7903C112.197 13.0115 111.964 13.3286 111.846 13.6939C111.68 14.2856 111.624 14.9028 111.682 15.5147L111.688 15.5273Z"
                fill="white"
              ></path>
              <path
                d="M126.195 24.059H122.712V18.8875H126.164C126.581 20.2404 127.131 20.9485 128.452 20.9485C129.451 20.9485 130.064 20.5313 130.064 19.7536C130.064 19.2036 129.71 18.7863 129.034 18.4892L125.683 17.073C124.909 16.7631 124.246 16.2281 123.779 15.5371C123.313 14.8462 123.064 14.0312 123.066 13.1975C123.066 10.5549 125.677 8.23462 128.964 8.23462C130.352 8.25084 131.718 8.58156 132.96 9.20191V8.5697H136.469V13.4062H133.244C132.954 11.9584 132.372 11.244 131.215 11.244C130.374 11.244 129.729 11.6612 129.729 12.3377C129.729 12.9194 130.115 13.3998 130.924 13.7223L134.212 14.9867C136.374 15.8276 137.373 17.2121 137.373 19.0835C137.373 22.0486 134.844 24.3372 131.215 24.3372C129.603 24.3372 128.477 24.078 126.157 23.2435L126.195 24.059Z"
                fill="white"
              ></path>
              <path d="M25.9544 1.46704H25.3601V24.0372H25.9544V1.46704Z" fill="white"></path>
              <path
                d="M19.2574 15.4535C18.8889 16.497 18.3042 17.4509 17.5416 18.2527C16.7789 19.0546 15.8555 19.6863 14.8318 20.1066V15.4535L17.3607 13.1586L14.8318 10.8952V7.69619C15.8763 7.67489 16.8715 7.24792 17.6067 6.50567C18.3419 5.76342 18.7593 4.76418 18.7706 3.71953C18.7706 0.975708 16.1532 0.00209168 14.6675 0.00209168C14.2653 -0.0102783 13.8633 0.0322617 13.4726 0.128535V0.261301C13.6686 0.261301 13.9594 0.22969 14.0542 0.22969C15.0847 0.22969 15.8624 0.716498 15.8624 1.65218C15.8562 1.85411 15.809 2.05266 15.7235 2.23571C15.638 2.41875 15.5161 2.58244 15.3652 2.71677C15.2143 2.85109 15.0376 2.95323 14.8459 3.01695C14.6542 3.08066 14.4515 3.1046 14.2502 3.08732C11.7213 3.08732 8.693 1.01996 5.43075 1.01996C2.52255 1.00732 0.537385 3.17583 0.537385 5.36962C0.537385 7.56342 1.80182 8.24622 3.12316 8.7267L3.15477 8.60026C2.91743 8.45028 2.72511 8.23886 2.59822 7.98842C2.47133 7.73797 2.41459 7.45785 2.43404 7.17777C2.4493 6.92796 2.51386 6.68363 2.62398 6.45888C2.73411 6.23414 2.88763 6.03341 3.07569 5.86826C3.26375 5.70312 3.48264 5.57683 3.71973 5.49668C3.95683 5.41652 4.20745 5.38408 4.45714 5.40124C7.20096 5.40124 11.6265 7.69619 14.3766 7.69619H14.6359V10.9268L12.107 13.1586L14.6359 15.4535V20.1572C13.5788 20.533 12.4638 20.7192 11.342 20.7072C7.07452 20.7072 4.38759 18.1215 4.38759 13.8287C4.37897 12.8127 4.51955 11.8009 4.80486 10.8257L6.93543 9.88999V19.3733L11.2661 17.4766V7.75941L4.88072 10.6044C5.17861 9.73458 5.646 8.93247 6.25588 8.24446C6.86575 7.55645 7.606 6.99621 8.43379 6.59613L8.40218 6.5013C4.13471 7.43698 0 10.6739 0 15.5167C0 21.1055 4.71635 25 10.2103 25C16.0267 25 19.3206 21.1245 19.3522 15.4725L19.2574 15.4535Z"
                fill="white"
              ></path>
            </svg>

            <svg
              className="ml-auto"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              class="game-icon"
              data-testid="icon-close"
            >
              <path
                fill="white"
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
              ></path>
            </svg>
          </h1>
          <div className="text-xs font-bold">MORE FROM NEW YORK TIMES GAMES</div>

          <div className="games gap-4 flex flex-col">
            <div className="games flex-row flex gap-4">
              <img
                className="w-5"
                src="https://www.nytimes.com/games-assets/v2/assets/wordle/nav-icons/SpellingBee-Icon-Normalized-Color.svg"
                alt=""
              />
              <div className="text-md ">Spelling Bee</div>
            </div>
            <div className="games flex-row flex gap-4">
              <img
                className="w-5"
                src="https://www.nytimes.com/games-assets/v2/assets/wordle/nav-icons/Crossword-Icon-Normalized-Color.svg"
                alt=""
              />
              <div className="text-md ">The Crossword</div>
            </div>
            <div className="games flex-row flex gap-4">
              <img
                className="w-5"
                src="https://www.nytimes.com/games-assets/v2/assets/wordle/nav-icons/Mini-Icon-Normalized-Color.svg"
                alt=""
              />
              <div className="text-md">The Mini</div>
            </div>
            <div className="games flex-row flex gap-4">
              <img
                className="w-5"
                src="https://www.nytimes.com/games-assets/v2/assets/wordle/nav-icons/WordleBot-Walking-Icon-Color.svg"
                alt=""
              />

              <div className="text-md">WordleBot: Your Daily Wordle Companion</div>
            </div>
            <div className="games">Gameplay Stories</div>
            <div className="games">More Games</div>
          </div>
          <hr />
          <div className="apps flex gap-4 flex-col ">
            <div className="apps flex-row flex gap-4">
              <img
                className="w-5"
                src="https://www.nytimes.com/games-assets/v2/assets/wordle/nav-icons/NYT-Icon-Normalized-Color.svg"
                alt=""
              />
              <div className="text-md">The New York Times</div>
            </div>
            <div className="apps flex-row flex gap-4">
              <img
                className="w-5"
                src="https://www.nytimes.com/games-assets/v2/assets/wordle/nav-icons/Vertex-Icon-Normalized-Color.svg"
                alt=""
              />
              <div className="text-md">The New York Times Cooking</div>
            </div>
            <div className="apps flex-row flex gap-4">
              <img
                className="w-5"
                src="https://www.nytimes.com/games-assets/v2/assets/wordle/nav-icons/LetterBoxed-Icon-Normalized-Color.svg"
                alt=""
              />
              <div className="text-md">The New York Times Wirecutter</div>
            </div>
            <div className="apps flex-row flex gap-4">
              <img
                className="w-5"
                src="https://www.nytimes.com/games-assets/v2/assets/wordle/nav-icons/Athletic-Icon-Normalized-Color.svg"
                alt=""
              />
              <div className="text-md">The Athletic</div>
            </div>
          </div>
          <hr className="w-[100%] box-border" />
          <a href="*" className="text-sm underline">
            Privacy Policy
          </a>
          <hr />
          <div className="account flex flex-row gap-4 justify-center ">
            <button className="w-[100%] bg-black py-3 rounded text-sm font-bold">SUBSCRIBE</button>
            <button className="w-[100%] bg-white text-black py-3 rounded text-sm font-bold">
              LOG IN
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Nav;
