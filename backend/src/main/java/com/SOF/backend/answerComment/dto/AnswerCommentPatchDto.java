package com.SOF.backend.answerComment.dto;

import com.SOF.backend.answerComment.entity.AnswerComment;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotEmpty;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AnswerCommentPatchDto {
    @NotEmpty(message = "공백이 아니어야 합니다.")
    private String answerComment;
    private Long answerCommentId;

}
