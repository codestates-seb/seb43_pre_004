package com.SOF.backend.question;


import com.SOF.backend.member.Entity.Member;
import com.SOF.backend.questionComment.QComment;
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
    private Blob contentImg;

    @Column
    @ColumnDefault("0")
    private int viewed;

    @Column
    private LocalDateTime createdAt;

    @Column
    private LocalDateTime modifiedAt;

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    @OneToMany(mappedBy = "question", cascade = CascadeType.PERSIST)
    private List<QComment> questionComment = new ArrayList<>();

}
