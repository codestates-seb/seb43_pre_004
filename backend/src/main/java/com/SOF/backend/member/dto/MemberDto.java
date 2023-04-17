package com.SOF.backend.member.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import java.sql.Blob;
import java.time.LocalDateTime;

@Getter
@Setter
@Builder
public class MemberDto {

    @Getter
    @Setter
    @Builder
    public static class Post{
        @NotBlank
        private String email;

        @NotBlank
        private String nickname;

        @NotBlank
        @Pattern(regexp = "^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$",
                message = "비밀번호는 영대소문자, 숫자, 특수기호(!@#$%^&*)포함 8자 이상이어야 합니다.")
        private String password;

        private Blob blob;
        private String location;
    }

    @Getter
    @AllArgsConstructor
    public static class Response{
        private long memberId;
        private String email;
        private String nickname;
        private Blob blob;
        private String location;
        private LocalDateTime createdDate;
        private LocalDateTime latestLog;
        private int visited;
    }
}
