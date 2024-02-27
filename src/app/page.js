"use client"; // TODO: 이후 Card와 분리 예정(Main:ServerSide , Card:ClientSide)

import Image from "next/image";
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import Card from "@/components/card/card";
import Duoform from "@/components/modal/duoform";

const tier = [
  { name: '티어 선택' },
  { name: '아이언' },
  { name: '브론즈' },
  { name: '실버' },
  { name: '골드' },
  { name: '플레티넘' },
  { name: '다이아몬드' },
  { name: '마스터' },
  { name: '그랜드마스터' },
  { name: '챌린져' },
]

export default function Home() {
  const [selected, setSelected] = useState(tier[0])
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 열림/닫힘 상태 관리

  const openModal = () => {
    setIsModalOpen(true); // 모달 열기
    console.log(isModalOpen);
  }

  const closeModal = () => {
    setIsModalOpen(false); // 모달 닫기
  }

  return (
    
    <div className="flex justify-center items-center h-dvh bg-slate-900">
      <div className="Main w-6/12 h-full p-4 bg-slate-950 rounded-lg  min-w-[960px]">
        <div className="Header mb-4 h-10 flex justify-between gap-3">
        <div className="btn w-1/5 flex justify-center align-items">
            <button className="Top bg-slate-950 hover:bg-gray-400 text-gray-800 font-bold py-1 px-1 rounded-l">
              <Image src="/images/Position_Top.png" width={30} height={30} alt="Position_Top"/>
            </button>
            <button className="Jungle bg-slate-950 hover:bg-gray-400 text-gray-800 font-bold py-1 px-1 rounded-c">
             <Image src="/images/Position_Jungle.png" width={30} height={30} alt="Position_Top"/>
            </button>
            <button className="Mid bg-slate-950 hover:bg-gray-400 text-gray-800 font-bold py-1 px-1 rounded-c">
              <Image src="/images/Position_Mid.png" width={30} height={30} alt="Position_Top"/>
            </button>
            <button className="AD bg-slate-950 hover:bg-gray-400 text-gray-800 font-bold py-1 px-1 rounded-c">
             <Image src="/images/Position_Bot.png" width={30} height={30} alt="Position_Top"/>
            </button>
            <button className="Sup bg-slate-950 hover:bg-gray-400 text-gray-800 font-bold py-1 px-1 rounded-r">
             <Image src="/images/Position_Support.png" width={30} height={30} alt="Position_Top"/>
            </button>
        </div>
        <div className="w-1/6">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {tier.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {person.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
          <div className="btn w-1/3 flex items-center justify-center">
            <button className="hover:text-yellow-600 text-white font-bold py-2 px-4 rounded-l">솔로랭크</button>
            <button className="hover:text-yellow-600 text-white font-bold py-2 px-4 rounded-c">자유랭크</button>
            <button className="hover:text-yellow-600 text-white font-bold py-2 px-4 rounded-c">일반게임</button>
            <button className="hover:text-yellow-600 text-white font-bold py-2 px-4 rounded-r">칼바람나락</button>
          </div>
          <button className="bg-yellow-600 hover:bg-white hover:text-yellow-600 text-white font-bold py-2 px-4 rounded" onClick={openModal}>듀오 구하기</button>
          <Duoform isOpen={isModalOpen} onClose={closeModal} />
        </div>
        <div className="Content p-4 space-y-4">
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
    </div>
  );
}
