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

    // 생성자, 게터, 세터 등 필요한 메소드들을 추가

    public Card() {}

    public Card(String cardName, String category, LocalDateTime regTime, String content, String imageLink) {
        this.cardName = cardName;
        this.category = category;
        this.regTime = String.valueOf(regTime);
        this.content = content;
        this.imageLink = imageLink;
    }

    public Card(String cardName, String content, String category, LocalDateTime regTime) {
        this.cardName = cardName;
        this.category = category;
        this.content = content;
        this.regTime = String.valueOf(regTime);
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

    public String getcategory() {
        return category;
    }

    public void setcategory(String category) {
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
}
