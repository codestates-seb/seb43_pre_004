package com.SOF.backend.question;

import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.NonNull;
import org.springframework.lang.Nullable;

import java.sql.Blob;
import java.time.LocalDateTime;


public class QuestionDto {


    @Getter
    public static class Create {


        @NotNull
        private String title;

        @NotNull
        private String content;

        @Nullable
        private Blob contentImg;

    }



    @Getter
    public static class Update {

        private String title;

        private String content;

        private Blob contentImg;
    }


    @Getter
    public static class response{

        private Long questionId;

        private String title;

        private String content;

        private Blob contentImg;

        private LocalDateTime createdAt;

        private LocalDateTime modifiedAt;


    }




}
