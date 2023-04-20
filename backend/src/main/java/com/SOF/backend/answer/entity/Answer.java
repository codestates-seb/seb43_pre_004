package com.SOF.backend.answer.entity;


import com.SOF.backend.answerComment.entity.AnswerComment;
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
    private LocalDateTime createDate = LocalDateTime.now();

    @LastModifiedDate
    private LocalDateTime modifyDate = LocalDateTime.now();

    @ManyToOne
    @JoinColumn(name = "QUESTION_ID")
    private Long questionId;

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Long memberId;

    @OneToMany(mappedBy = "answer")
    private List<AnswerComment> answerComments = new ArrayList<>();

    public Answer(String content, Long memberId, Long questionId) {
        this.content = content;
        this.memberId = memberId;
        this.questionId = questionId;
    }

    public Answer(String content, Long answerId) {
        this.content = content;
        this.answerId = answerId;
    }
}
