/*
 * 파일명 : MemberDto.class
 * 목적 : MemberDto를 관리하기 위한 클래스
 * 파일 생성일 : 2023.04.17
 * 마지막 편집일 : 2023.04.17
 * 마지막 편집자 : 이호준
 * */
package com.SOF.backend.member.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

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
    @Setter
    @Builder
    public static class Patch{
        private long memberId;

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
