package com.SOF.backend.answerComment.dto;

import com.SOF.backend.answer.entity.Answer;
import com.SOF.backend.member.Entity.Member;
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
    private String answerComment;
    private Member memberId;
    private Answer answerId;
}
