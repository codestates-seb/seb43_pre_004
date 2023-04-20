package com.SOF.backend.answerComment.entity;

import com.SOF.backend.answer.entity.Answer;
import com.SOF.backend.member.Entity.Member;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@NoArgsConstructor
@Setter
@Getter
public class AnswerComment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long answerCommentId;

    @Column(nullable = false)
    private String answerComment;
    @CreatedDate
    private LocalDateTime createDate = LocalDateTime.now();

    @LastModifiedDate
    private LocalDateTime modifyDate = LocalDateTime.now();

    @ManyToOne
    @JoinColumn(name = "ANSWER_ID")
    private Answer answer;

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    public AnswerComment(String answerComment, Member member, Answer answer) {
        this.answerComment = answerComment;
        this.member = member;
        this.answer = answer;
    }

    public AnswerComment(String answerComment, Long answerCommentId) {
        this.answerComment = answerComment;
        this.answerCommentId = answerCommentId;
    }
}
