package com.SOF.backend.question;


import lombok.*;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;
import java.sql.Blob;
import java.time.LocalDateTime;

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
}
