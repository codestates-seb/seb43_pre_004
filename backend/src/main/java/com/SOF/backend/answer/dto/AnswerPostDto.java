package com.SOF.backend.answer.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotEmpty;


@Getter
@Setter
@AllArgsConstructor

public class AnswerPostDto {
    @NotEmpty(message = "공백이 아니어야 합니다.")
    private String content;
    private Long memberId;
    private Long questionId;
}
