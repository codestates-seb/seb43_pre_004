package com.SOF.backend.answer.controller;

import com.SOF.backend.Utils.ContextHolederUtils;
import com.SOF.backend.answer.dto.AnswerPatchDto;
import com.SOF.backend.answer.dto.AnswerPostDto;
import com.SOF.backend.answer.entity.Answer;
import com.SOF.backend.answer.mapper.AnswerMapper;
import com.SOF.backend.answer.service.AnswerService;
import com.SOF.backend.question.QuestionService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/answer")
@Slf4j
@Validated
public class AnswerController {
    private final AnswerService answerService;
    private final AnswerMapper answerMapper;
    private final ContextHolederUtils contextHolederUtils;
    private final QuestionService questionService;


    public AnswerController(AnswerService answerService, AnswerMapper answerMapper, ContextHolederUtils contextHolederUtils, QuestionService questionService) {
        this.answerService = answerService;
        this.answerMapper = answerMapper;
        this.contextHolederUtils = contextHolederUtils;
        this.questionService = questionService;
    }

    //답변 추가하기
    @PostMapping("/{post-id}")
    public ResponseEntity postAnswer(@PathVariable("post-id") Long postId,
                                     @Valid @RequestBody AnswerPostDto answerPostDto){
        Long memberId = contextHolederUtils.getAuthMemberId();
        Answer answer = answerMapper.answerPostDtoToAnswer(answerPostDto);

        Answer response = answerService.createAnswer(postId,memberId,answer);

        return new ResponseEntity<>(answerMapper.answerToAnswerResponseDto(response), HttpStatus.CREATED);
    }

    //답변 수정하기
    @PatchMapping("/{post-id}/{answer-id}")
    public ResponseEntity patchAnswer(@PathVariable("post-id") Long postId,
                                      @PathVariable("answer-id") Long answerId,
                                      @Valid @RequestBody AnswerPatchDto answerPatchDto){
        answerPatchDto.setAnswerId(answerId);
        Long memberId = contextHolederUtils.getAuthMemberId();

        Answer answer = answerMapper.answerPatchDtoToAnswer(answerPatchDto);

        Answer response = answerService.updateAnswer(memberId,postId,answerId,answer);

        return new ResponseEntity(answerMapper.answerToAnswerResponseDto(response),HttpStatus.OK);
    }

    //답변 조회하기
    @GetMapping("/{answer-id}/edit")
    public ResponseEntity getAnswer(@PathVariable("answer-id") Long answerId){
        Answer response = answerService.findAnswer(answerId);

        return new ResponseEntity(answerMapper.answerToAnswerResponseDto(response),HttpStatus.OK);
    }

    //답변 삭제하기
    @DeleteMapping("/{post-id}/{answer-id}")
    public ResponseEntity deleteAnswer(@PathVariable("post-id") Long postId,
                                       @PathVariable("answer-id") Long answerId){

        Long memberId = contextHolederUtils.getAuthMemberId();

        answerService.deleteAnswer(memberId,postId,answerId);

        return ResponseEntity.noContent().build();
    }


}
