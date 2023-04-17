package com.SOF.backend.question;

import com.sun.istack.NotNull;
import lombok.Builder;
import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;
import org.springframework.data.domain.Page;
import org.springframework.lang.Nullable;

import java.sql.Blob;
import java.time.LocalDateTime;
import java.util.List;


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
    @Builder
    public static class Response{

        private Long questionId;

        private String title;

        private String content;

        private Blob contentImg;

        private LocalDateTime createdAt;

        private LocalDateTime modifiedAt;
    }

    @Getter
    public static class QuestionPageResponse<T>{
        private List<T> data;
        private QuestionPage questionPage;

        public QuestionPageResponse(List<T> data, Page page) {
            this.data = data;
            this.questionPage = new QuestionPage(page.getNumber() +1,
                    page.getSize(), page.getTotalElements(), page.getTotalPages());
        }
    }



}
