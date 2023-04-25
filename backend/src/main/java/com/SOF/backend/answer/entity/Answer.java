package com.SOF.backend.answer.entity;


import com.SOF.backend.answerComment.entity.AnswerComment;
import com.SOF.backend.member.Entity.Member;
import com.SOF.backend.question.Question;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@Setter
@Getter
public class Answer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long answerId;

    @Column(nullable = false)
    private String content;

    @CreatedDate
    private LocalDateTime createDate;

    @LastModifiedDate
    private LocalDateTime modifyDate;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "QUESTION_ID")
    private Question question;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    @JsonIgnore
    @OneToMany(mappedBy = "answer", cascade = CascadeType.ALL)
    private List<AnswerComment> answerComments = new ArrayList<>();


    public Answer(String content) {
        this.content = content;
    }

    public Answer(String content, Long answerId) {
        this.content = content;
        this.answerId = answerId;
    }

    public Answer(Long answerId) {
        this.answerId = answerId;
    }

    public void addComment(AnswerComment comment){
        answerComments.add(comment);
        if (comment.getAnswer() != this){
            comment.setAnswer(this);
        }
    }
    public void addMember(Member member) {
        this.member = member;
        if (!this.member.getAnswers().contains(this)) {
            this.member.getAnswers().add(this);
        }
    }
    public void addQuestion(Question question){
        this.question = question;
        if(!this.question.getAnswers().contains(this)){
            this.question.getAnswers().add(this);
        }
    }

}
