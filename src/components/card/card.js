"use client"

import Image from "next/image";

export default function Card() {
  return (
    <div className="Card border border-gray-400 p-4 h-96 rounded-lg bg-slate-950">
    <div className="Card-first h-1/6 flex justify-between">
      <div className="Card-first-left justify-start flex items-center gap-3">
        <div className="Card-first-left-left">
          <Image src="/images/flower.png" width={48} height={48} alt="FLowerImage"/>
        </div>
        <div className="Card-first-left-right">
          <div className="Nickname text-white">
            닉네임
          </div>
          <div className="LatestConnect text-white">
            최근 접속일 : 1일 전
          </div>
        </div>
      </div>
      <div className="Card-first-right justify-end flex items-center gap-3">
        <div className="Playtype text-white">
          솔로랭크
        </div>      
        <button className="detail border border-gray-400 rounded-lg text-white">
          더보기
        </button>
      </div>
    </div>
    <div className="Card-second h-1/3 flex items-center pl-3 border border-gray-300 ">
      <div className="text-white">
        내용
      </div>
    </div>
    <div className="Card-third h-1/3 flex justify-between items-center">
      <div className="Solorank flex flex-col border border-gray-400 w-96 h-full">
        <div className="h-1/5 text-white">솔로랭크</div>
        <div className="h-4/5">
          <Image src="/images/challenger.webp" width={64} height={64} alt="TierImage" />
        </div>  
      </div>
      <div className="Teamrank flex flex-col border border-gray-400 w-96 h-full">
      <div className="h-1/5 text-white">자유랭크</div>
        <div className="h-4/5">
          <Image src="/images/challenger.webp" width={64} height={64} alt="TierImage" />
        </div>  
        </div>  
      <div className="Mannerscore flex flex-col border border-gray-400 w-96 h-full">
      <div className="h-1/5 text-white">매너점수</div>
        <div className="h-4/5">
          <Image src="/images/challenger.webp" width={64} height={64} alt="TierImage" />
        </div>  
      </div>
      </div>
    <div className="Card-fourth h-1/6 flex items-center pl-3 text-white border border-gray-300 ">
      아이콘컴포넌트
    </div>
  </div>

  );
}