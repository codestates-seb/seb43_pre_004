package com.SOF.backend.question;


import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class QuestionPage {

    private int page;
    private int size;
    private long totalElements;
    private int totalPages;
}

