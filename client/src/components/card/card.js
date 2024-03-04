"use client"

import Image from "next/image";
import Cubeicon from "../cubeicon/cubeicon";
import { PencilSquareIcon } from "@heroicons/react/20/solid";
import { fetchData } from "./data";
import { useState, useEffect } from "react";

export default function Card({ data, className }) {

  const [cards, setCards] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const fetchedData = await fetchData(); // fetchData 함수를 호출하여 데이터를 가져옴
        setCards(fetchedData);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    
    getData();
  }, []);

  return (
    <div className={`Card border border-gray-400 p-4 h-96 rounded-lg bg-slate-950 ${className}`}>
    <div className="Card-first h-1/6 flex justify-between">
      <div className="Card-first-left justify-start flex items-center gap-3">
        <div className="Card-first-left-left">
          <Image src={data.image} width={48} height={48} alt=""/>
        </div>
        <div className="Card-first-left-right">
        {cards !== null && (
  <div className="Nickname text-white">
    {/* cards가 배열인 경우에만 map 함수를 호출합니다 */}
    {Array.isArray(cards) && cards.map(card => (
      <div key={card.id}>
        <p>Card Name: {card.card_name}</p>
        <p>ID: {card.id}</p>
        {/* 다른 카드 데이터를 표시하는 로직 */}
      </div>
    ))}
  </div>
)}


          <div className="LatestConnect text-white">
            {data.reg_time}
          </div>
        </div>
      </div>
      <div className="Card-first-right justify-end flex items-center gap-3">
        <div className="Playtype text-white">
          {data.type}
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
          <Image src="/images/challenger.webp" width={64} height={64} alt="TierImage" />
        </div>  
        <div className="h-1/5 text-white text-center">
          1승 1패 (50%)
        </div>
      </div>
      <div className="Teamrank flex flex-col border border-gray-400 w-96 h-full">
      <div className="h-1/5 text-white text-center">자유랭크</div>
        <div className="h-3/5 flex justify-center">
          <Image src="/images/challenger.webp" width={64} height={64} alt="TierImage" />
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
      <Cubeicon/>
    </div>
  </div>

  );
}