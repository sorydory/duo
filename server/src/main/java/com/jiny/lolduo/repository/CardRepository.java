package com.jiny.lolduo.repository;

import com.jiny.lolduo.entity.Card;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CardRepository extends JpaRepository<Card, Long> {
    // 등록 시간을 기준으로 정렬된 카드 리스트 가져오기
    List<Card> findAllByOrderByRegTimeDesc();
}
