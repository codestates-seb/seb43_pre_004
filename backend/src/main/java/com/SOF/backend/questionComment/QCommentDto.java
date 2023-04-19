package com.SOF.backend.questionComment;

import com.sun.istack.NotNull;
import lombok.Builder;
import lombok.Getter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import java.time.LocalDateTime;

public class QCommentDto {


    @Getter
    public static class Create{

        @NotBlank
        @Pattern(regexp = "/^[0-9]{20,}$/",
                message = "최소 20자 이상 작성해야 합니다.")
        private String comment;

    }

    @Getter
    public static class Update{

        @NotNull
        @Pattern(regexp = "/^[0-9]{20,}$/",
                message = "최소 20자 이상 작성해야 합니다.")
        private String comment;
    }


    @Getter
    @Builder
    public static class Response{

        private Long QCommentId;

        private String comment;

        private LocalDateTime createdAt;

        private LocalDateTime modifiedAt;


    }
}
