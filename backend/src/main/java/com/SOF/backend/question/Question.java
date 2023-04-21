package com.SOF.backend.question;


import com.SOF.backend.answer.entity.Answer;
import com.SOF.backend.member.Entity.Member;
import com.SOF.backend.questionComment.QComment;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;
import java.sql.Blob;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Setter
@Builder
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Question {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionId;


    @Column
    private String title;

    @Column
    private String content;

    @Column
    private byte[] contentImg;

    @Column
    @ColumnDefault("0")
    private int bounty;

    @Column
    @ColumnDefault("0")
    private int answerCnt;

    @Column
    @ColumnDefault("0")
    private int viewed;

    @Column
    private LocalDateTime createdAt;

    @Column
    private LocalDateTime modifiedAt;

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;

    @JsonIgnore
    @OneToMany(mappedBy = "question", cascade = CascadeType.PERSIST)
    private List<QComment> comments = new ArrayList<>();

    @OneToMany(mappedBy = "question", cascade = CascadeType.PERSIST)
    private List<Answer> answers = new ArrayList<>();

    public void addMember(Member member) {
        this.member = member;
        if (!this.member.getQuestions().contains(this)) {
            this.member.getQuestions().add(this);
        }
    }


    public void addComment(QComment comment){
        comments.add(comment);
        if(comment.getQuestion() != this){
            comment.setQuestion(this);
        }
    }

    public void addAnswer(Answer answer){
        answers.add(answer);
        if(answer.getQuestion() !=this){
            answer.setQuestion(this);
        }
    }
}
