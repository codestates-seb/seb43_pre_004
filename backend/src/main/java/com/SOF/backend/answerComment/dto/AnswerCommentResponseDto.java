package com.SOF.backend.answerComment.dto;

import com.SOF.backend.answer.entity.Answer;
import com.SOF.backend.answerComment.entity.AnswerComment;
import com.SOF.backend.member.Entity.Member;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AnswerCommentResponseDto {
    private Long answerCommentId;
    private String answerComment;
    private LocalDateTime createdDate;
    private LocalDateTime modifiedDate;
    private Answer answerId;
    private Member memberId;
}
