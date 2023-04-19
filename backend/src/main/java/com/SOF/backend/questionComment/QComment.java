package com.SOF.backend.questionComment;


import com.SOF.backend.question.Question;
import com.sun.istack.NotNull;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Setter
@Builder
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class QComment {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long QCommentId;


    @Column
    private String comment;

    @Column
    private LocalDateTime createdAt;

    @Column
    private LocalDateTime modifiedAt;

    @ManyToOne
    @JoinColumn(name = "QUESTION_ID")
    private Question question;


}
