import React, { useState } from 'react';
import ToggleButton from './toggleButton.jsx';
import { Columna1 } from './columna1.jsx';

export default function App() {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <>
      <main className={`bg-${isSelected ? 'white' : 'black'} min-h-screen flex flex-col justify-center items-center`}>
        <div className='flex flex-col m-5'>
        <div className="grid grid-cols-7 gap-x-2 gap-y-8 md:grid-cols-4 md:gap-y-2 my-20 mx-auto l:px-10"
            style={{ transform: "scale(1.1)"}}>

            {/* Columna 1 */}
            <div className=" max-w-screen-sm relative col-span-3 aspect-auto md:aspect-auto md:row-span-2 bg-[#1c053a9c] dark:bg-[#af72ff56] rounded-3xl overflow-hidden text-base">
              <Columna1 />
            </div>

            {/* Columna 2 */}
            <div style={{ marginTop: '0px' }}>
            <div className={` flex flex-col justify-center items-center bg-[#1c053a9c] dark:bg-[#af72ff56] rounded-3xl relative overflow-hidden col-span-1 aspect-square shadow-sm cursor-pointer hover:scale-[103%] transition duration-300 ease-in-out gap-x-4`}>
              <ToggleButton isSelected={isSelected} onClick={() => setIsSelected(!isSelected)} />
            </div>
            </div>
            {/* Columna 3 */}
            <div style={{ marginBottom: '108px' }}>
            <div className={`flex flex-col justify-center items-center text-white bg-[#ff246d9c] dark:bg-[#5870df56] rounded-3xl relative overflow-hidden col-span-1 aspect-square shadow-sm cursor-pointer hover:scale-[103%] transition duration-300 ease-in-out gap-x-4`}>
              <p className="text-xs md:text-lg uppercase font">Tengo</p>
              <p className="text-4xl md:text-8xl font-bold"> 26</p>
              <p className="text-xs md:text-xl uppercase font-semibold text-center">años</p>
            </div>
            </div>
            

            {/* Columna 4 */}
  <div className="flex flex-col justify-center items-center bg-blue-300 rounded-3xl relative overflow-hidden col-span-1 aspect-square shadow-sm cursor-pointer hover:scale-[103%] transition duration-300 ease-in-out">
  {/* Mini icono arriba a la derecha */}
  <div className="absolute top-0 right-0 p-2">
    <svg
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 text-gray-800 dark:text-white"
    >
      {/* Your new SVG */}
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.51194 3.00541C9.18829 2.54594 10.0435 2.53694 10.6788 2.95419C10.8231 3.04893 10.9771 3.1993 11.389 3.61119C11.8009 4.02307 11.9513 4.17714 12.046 4.32141C12.4633 4.95675 12.4543 5.81192 11.9948 6.48827C11.8899 6.64264 11.7276 6.80811 11.3006 7.23511L10.6819 7.85383C10.4867 8.04909 10.4867 8.36567 10.6819 8.56093C10.8772 8.7562 11.1938 8.7562 11.389 8.56093L12.0077 7.94221L12.0507 7.89929C12.4203 7.52976 12.6568 7.2933 12.822 7.0502C13.4972 6.05623 13.5321 4.76252 12.8819 3.77248C12.7233 3.53102 12.4922 3.30001 12.1408 2.94871L12.0961 2.90408L12.0515 2.85942C11.7002 2.508 11.4692 2.27689 11.2277 2.11832C10.2377 1.46813 8.94398 1.50299 7.95001 2.17822C7.70691 2.34336 7.47044 2.57991 7.1009 2.94955L7.058 2.99247L6.43928 3.61119C6.24401 3.80645 6.24401 4.12303 6.43928 4.31829C6.63454 4.51355 6.95112 4.51355 7.14638 4.31829L7.7651 3.69957C8.1921 3.27257 8.35757 3.11027 8.51194 3.00541ZM4.31796 7.14672C4.51322 6.95146 4.51322 6.63487 4.31796 6.43961C4.12269 6.24435 3.80611 6.24435 3.61085 6.43961L2.99213 7.05833L2.94922 7.10124C2.57957 7.47077 2.34303 7.70724 2.17788 7.95035C1.50265 8.94432 1.4678 10.238 2.11799 11.2281C2.27656 11.4695 2.50766 11.7005 2.8591 12.0518L2.90374 12.0965L2.94837 12.1411C3.29967 12.4925 3.53068 12.7237 3.77214 12.8822C4.76219 13.5324 6.05589 13.4976 7.04986 12.8223C7.29296 12.6572 7.52943 12.4206 7.89896 12.051L7.89897 12.051L7.94188 12.0081L8.5606 11.3894C8.75586 11.1941 8.75586 10.8775 8.5606 10.6823C8.36533 10.487 8.04875 10.487 7.85349 10.6823L7.23477 11.301C6.80777 11.728 6.6423 11.8903 6.48794 11.9951C5.81158 12.4546 4.95642 12.4636 4.32107 12.0464C4.17681 11.9516 4.02274 11.8012 3.61085 11.3894C3.19896 10.9775 3.0486 10.8234 2.95385 10.6791C2.53661 10.0438 2.54561 9.18863 3.00507 8.51227C3.10993 8.35791 3.27224 8.19244 3.69924 7.76544L4.31796 7.14672ZM9.62172 6.08558C9.81698 5.89032 9.81698 5.57373 9.62172 5.37847C9.42646 5.18321 9.10988 5.18321 8.91461 5.37847L5.37908 8.91401C5.18382 9.10927 5.18382 9.42585 5.37908 9.62111C5.57434 9.81637 5.89092 9.81637 6.08619 9.62111L9.62172 6.08558Z"
          fill="#000000"
        ></path>
      </g>
    </svg>
  </div>
  {/* Icono de LinkedIn */}
  <a href="https://www.linkedin.com/in/matias-andres-mu%C3%B1oz-soto-2aa9ab263/" target="_blank" rel="noopener noreferrer" aria-label="Linkedin">
    <svg height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.02 512.02" xmlSpace="preserve" className="h-16 w-16 md:h-20 md:w-20">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier" transform="translate(0 -1)">
        <path fill="#007AAA" d="M61.813,5.424c33.545,0,61.793,28.248,61.793,61.793c0,35.31-30.014,62.676-61.793,61.793 C29.151,129.893,0.02,102.527,0.02,67.217C-0.863,32.789,27.386,5.424,61.813,5.424"></path>
        <path fill="#007AAA" d="M96.241,508.596H25.62c-9.71,0-17.655-7.945-17.655-17.655V181.976 c0-9.71,7.062-17.655,16.772-17.655h71.503c9.71,0,17.655,7.945,17.655,17.655v309.848 C113.896,500.651,105.951,508.596,96.241,508.596"></path>
        <path fill="#007AAA" d="M511.137,272.017c0-65.324-48.552-116.524-113.876-116.524h-18.538 c-35.31,0-69.738,16.772-88.276,44.138c-6.179,6.179-8.828,8.828-8.828,8.828v-35.31c0-3.531-5.297-8.828-8.828-8.828h-88.276 c-3.531,0-8.828,3.531-8.828,7.945v329.269c0,3.531,5.297,7.062,8.828,7.062h97.103c3.531,0,8.828-3.531,8.828-7.062V310.858 c0-32.662,24.717-60.028,57.379-60.91c16.772,0,31.779,6.179,43.255,17.655c10.593,10.593,15.007,25.6,15.007,42.372v189.793 c0,3.531,5.297,8.828,8.828,8.828h88.276c3.531,0,8.828-5.297,8.828-8.828V272.017H511.137z"></path>
      </g>
    </svg>
  </a>
</div>
           {/* Columna 5 */}
<div className="flex flex-col justify-center items-center bg-blue-300 rounded-3xl relative overflow-hidden col-span-1 aspect-square shadow-sm cursor-pointer hover:scale-[103%] transition duration-300 ease-in-out">
  {/* Mini icono arriba a la derecha */}
  <div className="absolute top-0 right-0 p-2">
    <svg
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 text-gray-800 dark:text-white"
    >
      {/* Your new SVG */}
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.51194 3.00541C9.18829 2.54594 10.0435 2.53694 10.6788 2.95419C10.8231 3.04893 10.9771 3.1993 11.389 3.61119C11.8009 4.02307 11.9513 4.17714 12.046 4.32141C12.4633 4.95675 12.4543 5.81192 11.9948 6.48827C11.8899 6.64264 11.7276 6.80811 11.3006 7.23511L10.6819 7.85383C10.4867 8.04909 10.4867 8.36567 10.6819 8.56093C10.8772 8.7562 11.1938 8.7562 11.389 8.56093L12.0077 7.94221L12.0507 7.89929C12.4203 7.52976 12.6568 7.2933 12.822 7.0502C13.4972 6.05623 13.5321 4.76252 12.8819 3.77248C12.7233 3.53102 12.4922 3.30001 12.1408 2.94871L12.0961 2.90408L12.0515 2.85942C11.7002 2.508 11.4692 2.27689 11.2277 2.11832C10.2377 1.46813 8.94398 1.50299 7.95001 2.17822C7.70691 2.34336 7.47044 2.57991 7.1009 2.94955L7.058 2.99247L6.43928 3.61119C6.24401 3.80645 6.24401 4.12303 6.43928 4.31829C6.63454 4.51355 6.95112 4.51355 7.14638 4.31829L7.7651 3.69957C8.1921 3.27257 8.35757 3.11027 8.51194 3.00541ZM4.31796 7.14672C4.51322 6.95146 4.51322 6.63487 4.31796 6.43961C4.12269 6.24435 3.80611 6.24435 3.61085 6.43961L2.99213 7.05833L2.94922 7.10124C2.57957 7.47077 2.34303 7.70724 2.17788 7.95035C1.50265 8.94432 1.4678 10.238 2.11799 11.2281C2.27656 11.4695 2.50766 11.7005 2.8591 12.0518L2.90374 12.0965L2.94837 12.1411C3.29967 12.4925 3.53068 12.7237 3.77214 12.8822C4.76219 13.5324 6.05589 13.4976 7.04986 12.8223C7.29296 12.6572 7.52943 12.4206 7.89896 12.051L7.89897 12.051L7.94188 12.0081L8.5606 11.3894C8.75586 11.1941 8.75586 10.8775 8.5606 10.6823C8.36533 10.487 8.04875 10.487 7.85349 10.6823L7.23477 11.301C6.80777 11.728 6.6423 11.8903 6.48794 11.9951C5.81158 12.4546 4.95642 12.4636 4.32107 12.0464C4.17681 11.9516 4.02274 11.8012 3.61085 11.3894C3.19896 10.9775 3.0486 10.8234 2.95385 10.6791C2.53661 10.0438 2.54561 9.18863 3.00507 8.51227C3.10993 8.35791 3.27224 8.19244 3.69924 7.76544L4.31796 7.14672ZM9.62172 6.08558C9.81698 5.89032 9.81698 5.57373 9.62172 5.37847C9.42646 5.18321 9.10988 5.18321 8.91461 5.37847L5.37908 8.91401C5.18382 9.10927 5.18382 9.42585 5.37908 9.62111C5.57434 9.81637 5.89092 9.81637 6.08619 9.62111L9.62172 6.08558Z"
          fill="#000000"
        ></path>
      </g>
    </svg>
  </div>
  {/* Icono de GitHub */}
  <a href="https://github.com/code-mochi" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
    <svg height="200px" width="200px" viewBox="0 0 64 64" id="i-github" xmlns="http://www.w3.org/2000/svg" fill="#000000" className="h-16 w-16 md:h-20 md:w-20">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path
          stroke-width="0"
          fill="#000000"
          d="M32 0 C14 0 0 14 0 32 0 53 19 62 22 62 24 62 24 61 24 60 L24 55 C17 57 14 53 13 50 13 50 13 49 11 47 10 46 6 44 10 44 13 44 15 48 15 48 18 52 22 51 24 50 24 48 26 46 26 46 18 45 12 42 12 31 12 27 13 24 15 22 15 22 13 18 15 13 15 13 20 13 24 17 27 15 37 15 40 17 44 13 49 13 49 13 51 20 49 22 49 22 51 24 52 27 52 31 52 42 45 45 38 46 39 47 40 49 40 52 L40 60 C40 61 40 62 42 62 45 62 64 53 64 32 64 14 50 0 32 0 Z"
          id="github-[#142]"
        ></path>
      </g>
    </svg>
  </a>
</div>

           {/* Columna 6 */}
           <div style={{ marginRight: '10px', }} className="col-span-1">
      <div className="flex flex-col justify-center items-center bg-blue-300 rounded-3xl relative overflow-hidden col-span-1 aspect-square shadow-sm cursor-pointer hover:scale-[103%] transition duration-300 ease-in-out">
  {/* Mini icono arriba a la derecha */}
  <div className="absolute top-0 right-0 p-2">
    <svg
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 text-gray-800 dark:text-white"
    >
      {/* Your new SVG */}
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.51194 3.00541C9.18829 2.54594 10.0435 2.53694 10.6788 2.95419C10.8231 3.04893 10.9771 3.1993 11.389 3.61119C11.8009 4.02307 11.9513 4.17714 12.046 4.32141C12.4633 4.95675 12.4543 5.81192 11.9948 6.48827C11.8899 6.64264 11.7276 6.80811 11.3006 7.23511L10.6819 7.85383C10.4867 8.04909 10.4867 8.36567 10.6819 8.56093C10.8772 8.7562 11.1938 8.7562 11.389 8.56093L12.0077 7.94221L12.0507 7.89929C12.4203 7.52976 12.6568 7.2933 12.822 7.0502C13.4972 6.05623 13.5321 4.76252 12.8819 3.77248C12.7233 3.53102 12.4922 3.30001 12.1408 2.94871L12.0961 2.90408L12.0515 2.85942C11.7002 2.508 11.4692 2.27689 11.2277 2.11832C10.2377 1.46813 8.94398 1.50299 7.95001 2.17822C7.70691 2.34336 7.47044 2.57991 7.1009 2.94955L7.058 2.99247L6.43928 3.61119C6.24401 3.80645 6.24401 4.12303 6.43928 4.31829C6.63454 4.51355 6.95112 4.51355 7.14638 4.31829L7.7651 3.69957C8.1921 3.27257 8.35757 3.11027 8.51194 3.00541ZM4.31796 7.14672C4.51322 6.95146 4.51322 6.63487 4.31796 6.43961C4.12269 6.24435 3.80611 6.24435 3.61085 6.43961L2.99213 7.05833L2.94922 7.10124C2.57957 7.47077 2.34303 7.70724 2.17788 7.95035C1.50265 8.94432 1.4678 10.238 2.11799 11.2281C2.27656 11.4695 2.50766 11.7005 2.8591 12.0518L2.90374 12.0965L2.94837 12.1411C3.29967 12.4925 3.53068 12.7237 3.77214 12.8822C4.76219 13.5324 6.05589 13.4976 7.04986 12.8223C7.29296 12.6572 7.52943 12.4206 7.89896 12.051L7.89897 12.051L7.94188 12.0081L8.5606 11.3894C8.75586 11.1941 8.75586 10.8775 8.5606 10.6823C8.36533 10.487 8.04875 10.487 7.85349 10.6823L7.23477 11.301C6.80777 11.728 6.6423 11.8903 6.48794 11.9951C5.81158 12.4546 4.95642 12.4636 4.32107 12.0464C4.17681 11.9516 4.02274 11.8012 3.61085 11.3894C3.19896 10.9775 3.0486 10.8234 2.95385 10.6791C2.53661 10.0438 2.54561 9.18863 3.00507 8.51227C3.10993 8.35791 3.27224 8.19244 3.69924 7.76544L4.31796 7.14672ZM9.62172 6.08558C9.81698 5.89032 9.81698 5.57373 9.62172 5.37847C9.42646 5.18321 9.10988 5.18321 8.91461 5.37847L5.37908 8.91401C5.18382 9.10927 5.18382 9.42585 5.37908 9.62111C5.57434 9.81637 5.89092 9.81637 6.08619 9.62111L9.62172 6.08558Z"
          fill="#000000"
        ></path>
      </g>
    </svg>
  </div>
  {/* Icono de GitHub */}
  <a href="https://github.com/code-mochi" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
    <svg height="200px" width="200px" viewBox="0 0 64 64" id="i-github" xmlns="http://www.w3.org/2000/svg" fill="#000000" className="h-16 w-16 md:h-20 md:w-20">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path
          stroke-width="0"
          fill="#000000"
          d="M32 0 C14 0 0 14 0 32 0 53 19 62 22 62 24 62 24 61 24 60 L24 55 C17 57 14 53 13 50 13 50 13 49 11 47 10 46 6 44 10 44 13 44 15 48 15 48 18 52 22 51 24 50 24 48 26 46 26 46 18 45 12 42 12 31 12 27 13 24 15 22 15 22 13 18 15 13 15 13 20 13 24 17 27 15 37 15 40 17 44 13 49 13 49 13 51 20 49 22 49 22 51 24 52 27 52 31 52 42 45 45 38 46 39 47 40 49 40 52 L40 60 C40 61 40 62 42 62 45 62 64 53 64 32 64 14 50 0 32 0 Z"
          id="github-[#142]"
        ></path>
      </g>
    </svg>
  </a>
</div>

</div>
 {/* Columna 7 */}
 
 <div style={{ marginBottom: '10px' }} className='hidden md:flex max-h-[200px] bg-lime-600 text-white relative flex-col gap-2 p-3 md:p-7 lg:p-8 rounded-3xl md:col-span-2 col-span-2 row-span-1 overflow-hidden'>
 <div className="flex flex-col justify-center items-center bg-lime-600 rounded-3xl relative overflow-hidden col-span-1 aspect-square shadow-sm cursor-pointer hover:scale-[103%] transition duration-300 ease-in-out">
  {/* Mini icono arriba a la derecha */}
  <div className="absolute top-0 right-0 p-2">
    <svg
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 text-gray-800 dark:text-white"
    >
      {/* Your new SVG */}
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.51194 3.00541C9.18829 2.54594 10.0435 2.53694 10.6788 2.95419C10.8231 3.04893 10.9771 3.1993 11.389 3.61119C11.8009 4.02307 11.9513 4.17714 12.046 4.32141C12.4633 4.95675 12.4543 5.81192 11.9948 6.48827C11.8899 6.64264 11.7276 6.80811 11.3006 7.23511L10.6819 7.85383C10.4867 8.04909 10.4867 8.36567 10.6819 8.56093C10.8772 8.7562 11.1938 8.7562 11.389 8.56093L12.0077 7.94221L12.0507 7.89929C12.4203 7.52976 12.6568 7.2933 12.822 7.0502C13.4972 6.05623 13.5321 4.76252 12.8819 3.77248C12.7233 3.53102 12.4922 3.30001 12.1408 2.94871L12.0961 2.90408L12.0515 2.85942C11.7002 2.508 11.4692 2.27689 11.2277 2.11832C10.2377 1.46813 8.94398 1.50299 7.95001 2.17822C7.70691 2.34336 7.47044 2.57991 7.1009 2.94955L7.058 2.99247L6.43928 3.61119C6.24401 3.80645 6.24401 4.12303 6.43928 4.31829C6.63454 4.51355 6.95112 4.51355 7.14638 4.31829L7.7651 3.69957C8.1921 3.27257 8.35757 3.11027 8.51194 3.00541ZM4.31796 7.14672C4.51322 6.95146 4.51322 6.63487 4.31796 6.43961C4.12269 6.24435 3.80611 6.24435 3.61085 6.43961L2.99213 7.05833L2.94922 7.10124C2.57957 7.47077 2.34303 7.70724 2.17788 7.95035C1.50265 8.94432 1.4678 10.238 2.11799 11.2281C2.27656 11.4695 2.50766 11.7005 2.8591 12.0518L2.90374 12.0965L2.94837 12.1411C3.29967 12.4925 3.53068 12.7237 3.77214 12.8822C4.76219 13.5324 6.05589 13.4976 7.04986 12.8223C7.29296 12.6572 7.52943 12.4206 7.89896 12.051L7.89897 12.051L7.94188 12.0081L8.5606 11.3894C8.75586 11.1941 8.75586 10.8775 8.5606 10.6823C8.36533 10.487 8.04875 10.487 7.85349 10.6823L7.23477 11.301C6.80777 11.728 6.6423 11.8903 6.48794 11.9951C5.81158 12.4546 4.95642 12.4636 4.32107 12.0464C4.17681 11.9516 4.02274 11.8012 3.61085 11.3894C3.19896 10.9775 3.0486 10.8234 2.95385 10.6791C2.53661 10.0438 2.54561 9.18863 3.00507 8.51227C3.10993 8.35791 3.27224 8.19244 3.69924 7.76544L4.31796 7.14672ZM9.62172 6.08558C9.81698 5.89032 9.81698 5.57373 9.62172 5.37847C9.42646 5.18321 9.10988 5.18321 8.91461 5.37847L5.37908 8.91401C5.18382 9.10927 5.18382 9.42585 5.37908 9.62111C5.57434 9.81637 5.89092 9.81637 6.08619 9.62111L9.62172 6.08558Z"
          fill="#000000"
        ></path>
      </g>
    </svg>
  </div>
  {/* Icono de LinkedIn */}
  <a href="https://www.linkedin.com/in/matias-andres-mu%C3%B1oz-soto-2aa9ab263/" target="_blank" rel="noopener noreferrer" aria-label="Linkedin">
    <svg height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.02 512.02" xmlSpace="preserve" className="h-16 w-16 md:h-20 md:w-20">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier" transform="translate(0 -1)">
        <path fill="#007AAA" d="M61.813,5.424c33.545,0,61.793,28.248,61.793,61.793c0,35.31-30.014,62.676-61.793,61.793 C29.151,129.893,0.02,102.527,0.02,67.217C-0.863,32.789,27.386,5.424,61.813,5.424"></path>
        <path fill="#007AAA" d="M96.241,508.596H25.62c-9.71,0-17.655-7.945-17.655-17.655V181.976 c0-9.71,7.062-17.655,16.772-17.655h71.503c9.71,0,17.655,7.945,17.655,17.655v309.848 C113.896,500.651,105.951,508.596,96.241,508.596"></path>
        <path fill="#007AAA" d="M511.137,272.017c0-65.324-48.552-116.524-113.876-116.524h-18.538 c-35.31,0-69.738,16.772-88.276,44.138c-6.179,6.179-8.828,8.828-8.828,8.828v-35.31c0-3.531-5.297-8.828-8.828-8.828h-88.276 c-3.531,0-8.828,3.531-8.828,7.945v329.269c0,3.531,5.297,7.062,8.828,7.062h97.103c3.531,0,8.828-3.531,8.828-7.062V310.858 c0-32.662,24.717-60.028,57.379-60.91c16.772,0,31.779,6.179,43.255,17.655c10.593,10.593,15.007,25.6,15.007,42.372v189.793 c0,3.531,5.297,8.828,8.828,8.828h88.276c3.531,0,8.828-5.297,8.828-8.828V272.017H511.137z"></path>
      </g>
    </svg>
  </a>
</div>
</div>

          </div>
        </div>
      </main>
    </>
  );
}