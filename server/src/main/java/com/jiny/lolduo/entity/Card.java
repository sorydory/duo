package com.jiny.lolduo.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "card")
public class Card {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String cardName;

    private String description;

    // 생성자, 게터, 세터 등 필요한 메소드들을 추가

    public Card() {}

    public Card(String cardName, String description) {
        this.cardName = cardName;
        this.description = description;
    }

    // 게터와 세터 메소드
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCardName() {
        return cardName;
    }

    public void setCardName(String cardName) {
        this.cardName = cardName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}