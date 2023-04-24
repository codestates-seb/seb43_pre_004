/*
 * 파일명 : BusinessLogicException.class
 * 목적 : Exception 코드에서 설정한 에러메시지를 리턴하기 위한 클래스.
 * 파일 생성일 : 2023.04.15
 * 마지막 편집일 : 2023.04.15
 * 마지막 편집자 : 이호준
 *
 * 해당 코드는 codestates의 SEB BE과정 Section 3의 예외 처리 코드에서 가져왔음을 알립니다.
 * */
package com.SOF.backend.exception;

import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Service;



public class BusinessLogicException extends RuntimeException{
    @Getter
    private ExceptionCode exceptionCode;

    public BusinessLogicException(ExceptionCode exceptionCode){
        super(exceptionCode.getMessage());
        this.exceptionCode = exceptionCode;
    }
}
