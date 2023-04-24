package com.SOF.backend.answer.dto;

import com.SOF.backend.answer.entity.Answer;
import com.SOF.backend.answerComment.entity.AnswerComment;
import com.SOF.backend.member.Entity.Member;
import com.SOF.backend.question.Question;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotEmpty;
import java.time.LocalDateTime;
import java.util.List;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AnswerResponseDto {
    private Long answerId;
    private String content;
    private LocalDateTime createdDate;
    private LocalDateTime modifiedDate;
    private Question question;
    private Member member;
    private List<AnswerComment> answerComments;
}

