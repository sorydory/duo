"use client"

// 필요한 라이브러리 및 컴포넌트 import
import Image from "next/image";
import { useState, useEffect } from 'react';
import Card from "@/components/card/card";
import Duoform from "@/components/modal/duoform";
import { fetchData } from "@/components/card/data";
import { CSSTransition, TransitionGroup } from "react-transition-group";

// 큐 타입 및 티어 옵션 배열 정의
const quetype = ['솔로랭크', '자유랭크', '칼바람나락', '일반게임'];
const tiers = ['iron', 'bronze', 'silver', 'gold', 'platinum', 'emerald', 'diamond', 'master', 'grandmaster', 'challenger'];

export default function Home() {
  // 상태 관리를 위한 useState 훅 사용
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visibleCards, setVisibleCards] = useState(5);
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedTier, setSelectedTier] = useState(null);
  const [filteredCards, setFilteredCards] = useState(null);
  const [cards, setCards] = useState(null);

  // 페이지 로딩 시 데이터를 가져오는 useEffect
  useEffect(() => {
    const getData = async () => {
      try {
        const fetchedData = await fetchData();
        setCards(fetchedData);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    // 데이터 초기 로드
    getData();

  }, []);

  // 필터링 기능을 위한 useEffect
  useEffect(() => {
    handleFilters(selectedType, selectedPosition, selectedTier);
  }, [cards, selectedType, selectedPosition, selectedTier]);

  // 스크롤 감지하여 추가적인 카드 로딩 기능을 위한 useEffect
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        setVisibleCards(prev => prev + 5); // 5장씩 추가적으로 보이도록 설정
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleCards]); // visibleCards가 변경될 때마다 스크롤 이벤트 감지

// 큐 타입 필터링 함수
const handleTypeFilter = (type) => {
  // 이미 선택된 타입과 동일한 경우 필터링을 수행하지 않습니다.
  if (type === selectedType) {
    return;
  }

  setSelectedType(type);

  // DB에 저장된 큐 타입 값 확인 및 변경
  let dbType;
  switch (type) {
    case '솔로랭크':
      dbType = 'solo';
      break;
    case '자유랭크':
      dbType = 'team';
      break;
    case '칼바람나락':
      dbType = 'aram';
      break;
    case '일반게임':
      dbType = 'normal';
      break;
    default:
      dbType = null;
  }

  // 만약 선택된 큐 타입이 null이라면 모든 카드를 보여줍니다.
  if (dbType === null) {
    setFilteredCards(cards);
    console.log('null임');
  } else {
    // DB에 저장된 큐 타입 값을 변환하여 필터링합니다.
    const filteredCards = cards.filter(card => card.category === dbType);
    setFilteredCards(filteredCards);
  }
};




  // 포지션 필터링 함수
  const handlePositionFilter = (position) => {
    console.log(position);
    setSelectedPosition(position);
  };

  // 티어 필터링 함수
  const handleTierFilter = (tier) => {
    setSelectedTier(tier);
  };

  // 필터 적용 함수
  const handleFilters = (type, position, tier) => {
    let filtered = cards;

  // DB에 저장된 큐 타입 값 확인 및 변경
  let dbType;
  switch (type) {
    case '솔로랭크':
      dbType = 'solo';
      break;
    case '자유랭크':
      dbType = 'team';
      break;
    case '칼바람나락':
      dbType = 'aram';
      break;
    case '일반게임':
      dbType = 'normal';
      break;
    default:
      dbType = null;
  }

    // 포지션 필터링
    if (position !== null) {
      filtered = filtered.filter(card => card.position === position);
    }

    // 티어 필터링
    if (tier !== null) {
      filtered = filtered.filter(card => card.tier === tier);
    }

    // 필터된 결과를 상태에 반영
    setFilteredCards(filtered);
    console.log(dbType);
    console.log(position);
    console.log(tier);
  };

  // 모달 열기 함수
  const openModal = () => {
    setIsModalOpen(true);
  };

  // 모달 닫기 함수
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex justify-center h-full bg-slate-900">
      <div className="Main w-6/12 h-auto p-4 bg-slate-950 rounded-lg min-w-[960px]">
        {/* 헤더 부분 */}
        <div className="Header mb-4 h-[40px] flex justify-between gap-3 top-0 z-10 m-4">
          {/* 포지션 필터링 버튼 */}
          <div className="btn w-1/6 flex justify-center align-items">
            {['top', 'jungle', 'mid', 'ad', 'support'].map((position, index) => (
              <button
                key={index}
                onClick={() => handlePositionFilter(position)}
                className={`bg-slate-950 hover:bg-gray-400 text-gray-800 font-bold py-1 px-1 rounded-${index === 0 ? 'l' : index === 4 ? 'r' : 'c'} ${selectedPosition === position ? 'bg-gray-400' : 'bg-gray-800'}`}
              >
                <Image src={`/images/Position_${position}.png`} width={30} height={30} alt={`Position_${position}`} />
              </button>
            ))}
          </div>
          {/* 티어 선택 */}
          <div className="w-1/6 flex items-center">
            <select className="text-sm w-64 h-8" onChange={(e) => handleTierFilter(e.target.value)}>
              <option value="">전체</option>
              {tiers.map((tier, index) => (
                <option key={index} value={tier}>{tier}</option>
              ))}
            </select>
          </div>
          {/* 큐 타입 필터링 버튼 */}
          <div className="btn w-1/3 flex items-center justify-center">
            <button
              onClick={() => handleTypeFilter(null)}
              className={`hover:text-yellow-600 text-xs text-white font-bold py-2 px-4 rounded-l ${
                selectedType === null ? 'bg-gray-400' : 'bg-gray-800'
              }`}
            >
              전체
            </button>
            {quetype.map((type, index) => (
              <button
                key={index}
                onClick={() => handleTypeFilter(type)}
                className={`hover:text-yellow-600 text-white text-xs font-bold py-2 px-4 rounded${index === 0 ? '-c' : index === quetype.length - 1 ? '-r' : '-c'} ${selectedType === type ? 'bg-gray-400' : 'bg-gray-800'}`}
              >
                {type}
              </button>
            ))}
          </div>
          {/* 듀오 구하기 버튼 */}
          <button className="bg-yellow-600 hover:bg-white hover:text-yellow-600 text-white font-bold py-2 px-4 rounded" onClick={openModal}>듀오 구하기</button>
          <Duoform isOpen={isModalOpen} onClose={closeModal} />
        </div>
        {/* 컨텐츠 부분 */}
        <div className="Content p-4 space-y-4">
          <TransitionGroup>
            {filteredCards !== null && filteredCards.slice(0, visibleCards).map((card, index) => (
              <CSSTransition key={index} classNames="fade" timeout={500}>
                <Card key={index} data={card} className={index === 0 ? 'mt-3' : ''} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      </div>
    </div>
  );
}
