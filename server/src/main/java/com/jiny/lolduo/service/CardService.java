package com.jiny.lolduo.service;

import com.jiny.lolduo.entity.Card;
import com.jiny.lolduo.repository.CardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
public class CardService {

    private final CardRepository cardRepository;

    @Autowired
    public CardService(CardRepository cardRepository) {
        this.cardRepository = cardRepository;
    }

    public List<Card> findAllByOrderByRegTimeDesc() {
        return cardRepository.findAllByOrderByRegTimeDesc();
    }
    public Card createCard(String cardName, String content, String category, String position, String tier) {
        // 현재시간 생성
        LocalDateTime regTime = LocalDateTime.now();
        String imageLink = "https://ddragon.leagueoflegends.com/cdn/10.6.1/img/profileicon/4529.png";

        // 카드 생성 및 저장
        Card card = new Card(cardName, category, position, tier, regTime, content, imageLink);
        return cardRepository.save(card);
    }


}
