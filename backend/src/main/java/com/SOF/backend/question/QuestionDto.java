package com.SOF.backend.question;

import com.SOF.backend.member.Entity.Member;
import com.SOF.backend.questionComment.QComment;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.lang.Nullable;

import javax.sql.rowset.serial.SerialBlob;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.sql.Blob;
import java.sql.SQLException;
import java.time.LocalDateTime;
import java.util.List;


public class QuestionDto {


    @Getter
    public static class Create {


        @NotBlank
        @Pattern(regexp = "^.{2,}$",
                message = "최소 두 글자 이상 작성해야 합니다.")
        private String title;

        @NotBlank
        @Pattern(regexp = "^.{20,}$",
        message = "20자 이상 작성해야 합니다.")
        private String content;

        @Nullable
        private int bounty;



        private Blob contentImg;

        public void setImage() throws IOException, SQLException {
            // 파일을 바이트 배열로 읽어옴
            byte[] imageBytes = Files.readAllBytes(Paths.get("src","main","resources","pictures","default-image.png"));

            // 바이트 배열을 Blob으로 변환
            Blob contentImg = new SerialBlob(imageBytes);

            // Dto 객체에 Blob 객체 설정
            this.contentImg = contentImg;
        }

    }



    @Getter
    public static class Update {


        private String title;

        private int bounty;

        private String content;

        private Blob contentImg;
    }


    @Getter
    @Builder
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Response{

        private Long questionId;

        private String title;

        private String content;

        private Blob contentImg;

        private LocalDateTime createdAt;

        private LocalDateTime modifiedAt;

        private int bounty;

        private int answerCnt;

        private int commentCnt;

        private int viewed;

        private Member member;

        private List<QComment> comments;
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
