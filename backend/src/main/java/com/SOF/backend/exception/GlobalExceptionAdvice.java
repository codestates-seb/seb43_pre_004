package com.SOF.backend.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import javax.servlet.ServletException;
import javax.validation.ConstraintViolationException;

@RestControllerAdvice
public class GlobalExceptionAdvice {
    @ExceptionHandler
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ErrorResponse handleMethodArgumentNotValidException(
            MethodArgumentNotValidException e) {
        final ErrorResponse response = ErrorResponse.of(e.getBindingResult());

        return response;
    }

    @ExceptionHandler
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ErrorResponse handleConstraintViolationException(
            ConstraintViolationException e) {
        final ErrorResponse response = ErrorResponse.of(e.getConstraintViolations());

        return response;
    }

    @ExceptionHandler
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ErrorResponse handleBusinessLogicException(BusinessLogicException e) {
        System.out.println(e.getExceptionCode().getStatus());
        System.out.println(e.getMessage());

        // TODO GlobalExceptionAdvice 기능 추가 1
        final ErrorResponse response = ErrorResponse.of(e.getExceptionCode());

        return response;
    }

    // TODO GlobalExceptionAdvice 기능 추가 2
    @ExceptionHandler
    @ResponseStatus(HttpStatus.METHOD_NOT_ALLOWED)
    public ErrorResponse handleHttpRequestMethodNotSupportedException(HttpRequestMethodNotSupportedException e) {
        HttpStatus httpStatus = HttpStatus.METHOD_NOT_ALLOWED;
        final ErrorResponse response = ErrorResponse.of(httpStatus);
        return response;
    }

    // TODO GlobalExceptionAdvice 기능 추가 3
    @ExceptionHandler
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ErrorResponse handleException(NullPointerException e){
        HttpStatus httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
        final ErrorResponse response = ErrorResponse.of(httpStatus);
        return response;
    }
}
