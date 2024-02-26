import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-dvh">
      <div className="Main w-6/12 h-full p-4 bg-gray-100 rounded-lg">
        <div className="Header mb-4 flex gap-3">
        <button className="btn flex-1 border border-gray-400 rounded-lg">POSITION</button>
          <button className="btn flex-1 border border-gray-400 rounded-lg">TIER</button>
          <button className="btn flex-1 border border-gray-400 rounded-lg">TYPE</button>
          <button className="btn flex-1 border border-gray-400 rounded-lg">POST</button>
        </div>
        <div className="Content">
          <div className="Card border border-gray-400 p-4 h-96 rounded-lg">
            <div className="Card-first h-1/6 flex justify-between bg-yellow-300">
              <div className="Card-first-left justify-start bg-blue-300 flex items-center gap-3">
                <div className="Card-first-left-left">
                  <Image src="/images/flower.png" width={48} height={48} alt="FLowerImage"/>
                </div>
                <div className="Card-first-left-right">
                  <div className="Nickname">
                    닉네임
                  </div>
                  <div className="LatestConnect">
                    최근 접속일 : 1일 전
                  </div>
                </div>
              </div>
              <div className="Card-first-right justify-end flex items-center gap-3">
                <div className="Playtype">
                  솔로랭크
                </div>      
                <div><Image src="/images/mic.png"width={30} height={30} alt="MicImage" /></div>
                <button className="detail border border-gray-400 rounded-lg">
                  더보기
                </button>
              </div>
            </div>
            <div className="Card-second h-1/3 bg-green-300 flex items-center pl-3">
              <div className="border border-gray-300">
                내용
              </div>
            </div>
            <div className="Card-third h-1/3 bg-pink-300 flex justify-around items-center">
              <div className="Solorank flex flex-col">
                <div className="h-1/5">솔로랭크</div>
                <div className="h-4/5">
                  <Image src="/images/challenger.webp" width={64} height={64} alt="TierImage" />
                </div>  
              </div>
              <div className="Teamrank flex flex-col">
              <div className="h-1/5">자유랭크</div>
                <div className="h-4/5">
                  <Image src="/images/challenger.webp" width={64} height={64} alt="TierImage" />
                </div>  
                </div>  
              <div className="Mannerscore flex flex-col">
              <div className="h-1/5">매너점수</div>
                <div className="h-4/5">
                  <Image src="/images/challenger.webp" width={64} height={64} alt="TierImage" />
                </div>  
              </div>
              </div>
            <div className="Card-fourth h-1/6 bg-violet-400 flex items-center pl-3">
              아이콘
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
