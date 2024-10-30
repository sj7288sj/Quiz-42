import { useState, EventHandler, ReactNode } from 'react'

const Main = () => {
	return (<div className="relative w-[412px] h-[917px] bg-[#444] border-[1px] border-solid border-[#ffffff1a] rounded-[2px] overflow-hidden">
  <div className="absolute left-0 top-0 w-[412px] h-[917px] bg-[#fff] overflow-hidden">
    <img className="absolute left-0 top-0" width="412" height="917" src="school-supplies-7069762_1920 11_22.png"></img>
    <div className="absolute left-[-10px] top-[356px] flex flex-row items-center justify-start p-[10px]">
      <div className="w-[412px] h-[551px] shrink-0 bg-[#fff] rounded-tl-[50px] rounded-tr-[50px] rounded-br-0 rounded-bl-0"></div>
    </div>
    <div className="absolute -translate-x-1/2 left-1/2 top-[459px] w-[316px] flex flex-row items-center justify-center py-[15px] px-[50px] bg-[#fff] border-[2px] border-solid border-[#f4d7c0] rounded-[25px]">
      <div className="text-[32px] font-['JetBrains_Mono'] text-[#000] text-center whitespace-nowrap">Start</div>
    </div>
    <div className="absolute -translate-x-1/2 left-1/2 top-[574px] flex flex-row items-center justify-center py-[15px] px-[25px] bg-[#fff] border-[2px] border-solid border-[#f4d7c0] rounded-[25px]">
      <div className="text-[32px] font-['JetBrains_Mono'] text-[#000] text-center whitespace-nowrap">Make Question</div>
    </div>
    <div className="absolute -translate-x-1/2 left-1/2 top-[145px] flex flex-row items-start justify-start">
      <div className="relative w-[178px] h-[100px] shrink-0">
        <div className="absolute left-0 top-[8px] w-[178px] text-[70px] font-['JetBrains_Mono'] text-[#000] text-center">QUIZ</div>
      </div>
      <img width="115" height="115" src="42_Logo.svg 11_17.png"></img>
    </div>
  </div>
</div>)
}

export default Main