package com.jiny.lolduo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class LolduoApplication {

    public static void main(String[] args) {
        SpringApplication.run(LolduoApplication.class, args);
        System.out.println("LolduoApplication started successfully.");
    }
}
