package com.jiny.lolduo.controller;

import com.jiny.lolduo.entity.Card;
import com.jiny.lolduo.service.CardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/cards")
public class CardController {

    private final CardService cardService;

    @Autowired
    public CardController(CardService cardService) {
        this.cardService = cardService;
    }

    @GetMapping
    public List<Card> findAllByOrderByRegTimeDesc() {
        return cardService.findAllByOrderByRegTimeDesc();
    }

    @PostMapping
    public Card createCard(@RequestBody Map<String, String> requestData) {
        String cardName = requestData.get("cardName");
        String content = requestData.get("content");
        String category = requestData.get("category");
        String position = requestData.get("position");
        String tier = requestData.get("tier");

        // 현재시간은 서버에서 처리
        return cardService.createCard(cardName, content, category, position, tier);
    }

}
