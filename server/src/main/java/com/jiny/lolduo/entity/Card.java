package com.jiny.lolduo.entity;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "card")
public class Card {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cardIdx")
    private Long cardIdx;

    @Column(name = "cardName")
    private String cardName;

    @Column(name = "category")
    private String category;

    @Column(name = "regTime")
    private String regTime;

    @Column(name = "content")
    private String content;

    @Column(name = "imageLink")
    private String imageLink;
    @Column(name = "postition")
    private String position;
    @Column(name = "tier")
    private String tier;

    // 생성자, 게터, 세터 등 필요한 메소드들을 추가

    public Card() {}

    public Card(String cardName, String category, String position, String tier, LocalDateTime regTime, String content, String imageLink) {
        this.cardName = cardName;
        this.category = category;
        this.position = position;
        this.tier = tier;
        this.regTime = String.valueOf(regTime);
        this.content = content;
        this.imageLink = imageLink;
    }


    // 게터와 세터 메소드
    public Long getCardIdx() {
        return cardIdx;
    }

    public void setCardIdx(Long cardIdx) {
        this.cardIdx = cardIdx;
    }

    public String getCardName() {
        return cardName;
    }

    public void setCardName(String cardName) {
        this.cardName = cardName;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getRegTime() {
        return regTime;
    }

    public void setRegTime(String regTime) {
        this.regTime = regTime;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getImageLink() {
        return imageLink;
    }

    public void setImageLink(String imageLink) {
        this.imageLink = imageLink;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String imageLink) {
        this.position = position;
    }

    public String getTier() {
        return tier;
    }

    public void setTier(String tier) {
        this.tier = tier;
    }
}
