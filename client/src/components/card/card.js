"use client"

import Image from "next/image";
import Cubeicon from "../cubeicon/cubeicon";
import { PencilSquareIcon } from "@heroicons/react/20/solid";

export default function Card({ data, className }) {

  const calculateTimeDifference = (regTime) => {
    const currentTime = new Date();
    const registrationTime = new Date(regTime);
    const timeDifference = Math.abs(currentTime - registrationTime);

    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return `${days}일 전`;
    } else if (hours > 0) {
      return `${hours}시간 전`;
    } else if (minutes > 0) {
      return `${minutes}분 전`;
    } else {
      return `${seconds}초 전`;
    }
  };

  const convertCategoryToDisplayName = (category) => {
    switch (category) {
      case 'solo':
        return '솔로랭크';
      case 'team':
        return '자유랭크';
      case 'normal':
        return '일반게임';
      case 'aram':
        return '칼바람나락';
      default:
        return category; // 만약에 해당하지 않는 경우 그대로 반환
    }
  };
  

  return (
    <div className={`Card border border-gray-400 p-4 h-96 rounded-lg bg-slate-950 ${className}`}>
    <div className="Card-first h-1/6 flex justify-between">
      <div className="Card-first-left justify-start flex items-center gap-3">
        <div className="Card-first-left-left">
          <Image src={data.imageLink} width={48} height={48} alt=""/>
        </div>
        <div className="Card-first-left-right">
        {data !== null && (
          <div className="Nickname text-yellow-500">
            {data.cardName}
          </div>
        )}
          <div className="LatestConnect text-white">
            {calculateTimeDifference(data.regTime)}
          </div>
        </div>
      </div>
      <div className="Card-first-right justify-end flex items-center gap-3">
        <div className="Playtype text-white">
          {convertCategoryToDisplayName(data.category)}
        </div>      
        <button className="detail  rounded-lg text-white">
          <PencilSquareIcon className="hover:bg-yellow"width={24} height={24}/>
        </button>
      </div>
    </div>
    <div className="Card-second h-1/3 flex items-center pl-3 border border-gray-300 ">
      <div className="text-white">
        {data.content}
      </div>
    </div>
    <div className="Card-third h-1/3 flex justify-between items-center">
      <div className="Solorank flex flex-col border border-gray-400 w-96 h-full">
        <div className="h-1/5 text-white text-center">솔로랭크</div>
        <div className="h-3/5 flex justify-center">
        <Image src={`/images/Rank=${data.tier}.png`} width={64} height={64} alt="TierImage" />
        </div>  
        <div className="h-1/5 text-white text-center">
          1승 1패 (50%)
        </div>
      </div>
      <div className="Teamrank flex flex-col border border-gray-400 w-96 h-full">
      <div className="h-1/5 text-white text-center">자유랭크</div>
        <div className="h-3/5 flex justify-center">
          <Image src={`/images/Rank=${data.tier}.png`} width={64} height={64} alt="TierImage" />
        </div>  
        <div className="h-1/5 text-white text-center">
          2승 1패 (67%)
        </div>
        </div>  
      <div className="Mannerscore flex flex-col border border-gray-400 w-96 h-full">
      <div className="h-1/5 text-white text-center">매너점수</div>
      <div className="h-3/5 flex justify-center">
          <Image src="/images/challenger.webp" width={64} height={64} alt="TierImage" />
        </div>  
        <div className="h-1/5 text-white text-center">
          100
        </div>
      </div>
      </div>
    <div className="Card-fourth h-1/6 flex items-center pl-3 text-white border border-gray-300 ">
      <Cubeicon position={data.position}/> 
    </div>
  </div>

  );
}