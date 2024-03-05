import React, { useState } from 'react';
import axios from 'axios'; // axios를 사용하여 서버에 HTTP 요청을 보냄

export default function Duoform({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    cardName: '',
    category: 'solo',
    position: 'top',
    tier: 'iron',
    content: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // 유효성 검사
    if (!formData.cardName || !formData.content) {
      setErrorMessage('소환사 이름과 내용은 필수 입력 항목입니다.');
      return;
    }

    // 소환사 이름에 # 뒤에 아무 문자가 있는지 확인
    const hasValidTag = formData.cardName.split('#')[1];
    if (!hasValidTag) {
      setErrorMessage('소환사 이름은 # 뒤에 아무 문자가 포함되어야 합니다.');
      return;
    }

    try {
      // 서버에 POST 요청 보냄
      await axios.post('http://localhost:8081/api/cards', formData);
      // 성공적으로 요청이 완료되면 모달을 닫음
      onClose();
    } catch (error) {
      console.error('Failed to create card:', error);
    }
  };

  
  

  if (!isOpen) return null;

  return (
    <div id="crud-modal" className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-75">
      <div className="relative w-full max-w-md p-6 mx-auto bg-white rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">듀오 찾기</h3>
          <button
            type="button"
            className="text-gray-400 bg-transparent rounded-full hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-600"
            onClick={onClose}
          >
            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        {errorMessage && (
          <div className="text-red-500 mb-4">
            <span className="block">{errorMessage}</span>
          </div>
        )}
        <form onSubmit={handleFormSubmit}>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
                소환사 이름
              </label>
              <input
                type="text"
                id="name"
                name="cardName"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="hide on bush#KR1"
                value={formData.cardName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col-span-1">
              <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900">
                큐 타입
              </label>
              <select
                id="category"
                name="category"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={formData.category}
                onChange={handleInputChange}
              >
                <option value="solo">솔로랭크</option>
                <option value="team">자유랭크</option>
                <option value="normal">일반게임</option>
                <option value="aram">칼바람나락</option>
              </select>
            </div>
            <div className="col-span-1">
              <label htmlFor="position" className="block mb-2 text-sm font-medium text-gray-900">
                포지션
              </label>
              <select
                id="position"
                name="position"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={formData.position}
                onChange={handleInputChange}
              >
                <option value="top">탑</option>
                <option value="jungle">정글</option>
                <option value="mid">미드</option>
                <option value="ad">원딜</option>
                <option value="support">서폿</option>
              </select>
            </div>
            <div className="col-span-1">
              <label htmlFor="tier" className="block mb-2 text-sm font-medium text-gray-900">
                티어
              </label>
              <select
                id="tier"
                name="tier"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={formData.tier}
                onChange={handleInputChange}
              >
                <option value="iron">아이언</option>
                <option value="bronze">브론즈</option>
                <option value="silver">실버</option>
                <option value="gold">골드</option>
                <option value="platinum">플레티넘</option>
                <option value="emerald">에메랄드</option>
                <option value="diamond">다이아몬드</option>
                <option value="master">마스터</option>
                <option value="grandmaster">그랜드마스터</option>
                <option value="challenger">챌린져</option>
              </select>
            </div>
            <div className="col-span-2">
              <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">
                내용
              </label>
              <textarea
                id="description"
                name="content"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={formData.content}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            등록
          </button>
        </form>
      </div>
    </div>
  );
}
