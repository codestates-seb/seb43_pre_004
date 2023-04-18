package com.SOF.backend.answerComment.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotEmpty;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AnswerCommentPostDto {
    @NotEmpty(message = "공백이 아니어야 합니다.")
    private String comment;
    private Long memberId;
    private Long answerId;
}
