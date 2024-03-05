import Image from "next/image"

export default function Cubeicon( { position } ){

    return (
        <div className="flex gap-2">
          <div className="box-border h-10 w-10 border-2">
          <Image src={`/images/Position_${position}.png`} width={48} height={48} alt={`Position_${position}`} />
          </div>
          <div className="box-border h-10 w-10 border-2">
            <Image src="https://ddragon.leagueoflegends.com/cdn/10.6.1/img/champion/Fizz.png" width={48} height={48} alt="Fizz" />
          </div>
          <div className="box-border h-10 w-10 border-2">
            <Image src="https://ddragon.leagueoflegends.com/cdn/10.6.1/img/champion/Annie.png" width={48} height={48} alt="Annie" />
          </div>
        </div>
    )
}