package com.jiny.lolduo.service;

import com.jiny.lolduo.entity.Card;
import com.jiny.lolduo.repository.CardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CardService {

    private final CardRepository cardRepository;

    @Autowired
    public CardService(CardRepository cardRepository) {
        this.cardRepository = cardRepository;
    }

    public List<Card> getAllCards() {
        return cardRepository.findAll();
    }

    public Card createCard(Card card) {
        return cardRepository.save(card);
    }
}
