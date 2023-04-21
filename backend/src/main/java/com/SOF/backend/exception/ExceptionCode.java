/*
 * 파일명 : ExceptionCode.enum
 * 목적 : 에러코드를 더 자세히 알리기 위해서 설정한 enum.
 * 파일 생성일 : 2023.04.15
 * 마지막 편집일 : 2023.04.15
 * 마지막 편집자 : 이호준
 *
 * 해당 코드는 codestates의 SEB BE과정 Section 3의 예외 처리 코드에서 가져왔음을 알립니다.
 * */
package com.SOF.backend.exception;

import lombok.Getter;

public enum ExceptionCode {
    MEMBER_NOT_FOUND(404, "Member Not Found"),

    QUESTION_NOT_FOUND(404, "Question Not Found"),

    VALUE_ALREADY_EXISTS(409, "Email or Nickname already exists"),

    COMMENT_NOT_FOUND(404, "Comment Not Found"),

    BOUNTY_AMOUNT_ERROR(400, "Bounty must be a multiple of 50");

    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int status, String message) {
        this.status = status;
        this.message = message;
    }
}
