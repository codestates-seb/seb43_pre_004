package com.SOF.backend.answerComment.entity;

import com.SOF.backend.answer.entity.Answer;
import com.SOF.backend.member.Entity.Member;
import com.fasterxml.jackson.annotation.JsonIgnore;
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
    private String comment;
    @CreatedDate
    private LocalDateTime createDate ;

    @LastModifiedDate
    private LocalDateTime modifyDate ;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ANSWER_ID")
    @JsonIgnore
    private Answer answer;

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;



    public AnswerComment(String comment) {
        this.comment = comment;
    }

    public AnswerComment(String comment, Long answerCommentId) {
        this.comment = comment;
        this.answerCommentId = answerCommentId;
    }
    public void addAnswer(Answer answer){
        this.answer = answer;
        if (!this.answer.getAnswerComments().contains(this)){
            this.answer.getAnswerComments().add(this);
        }
    }
    public void addMember(Member member) {
        this.member = member;
        if (!this.member.getAnswerComments().contains(this)){
            this.member.getAnswerComments().add(this);
        }
    }
}
