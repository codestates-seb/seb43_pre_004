package com.SOF.backend.answer.controller;

import com.SOF.backend.answer.dto.AnswerPatchDto;
import com.SOF.backend.answer.dto.AnswerPostDto;
import com.SOF.backend.answer.dto.AnswerResponseDto;
import com.SOF.backend.answer.entity.Answer;
import com.SOF.backend.answer.mapper.AnswerMapper;
import com.SOF.backend.answer.service.AnswerService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/answer")
@Validated
public class AnswerController {
    private final AnswerService answerService;
    private final AnswerMapper answerMapper;


    public AnswerController(AnswerService answerService, AnswerMapper answerMapper) {
        this.answerService = answerService;
        this.answerMapper = answerMapper;
    }

    //답변 추가하기
    @PostMapping("/{post-id}")
    public ResponseEntity postAnswer(@PathVariable("post-id") Long postId,
                                     @Valid @RequestBody AnswerPostDto answerPostDto){
        Answer answer = answerMapper.answerPostDtoToAnswer(answerPostDto);

        Answer response = answerService.createAnswer(answer);

        return new ResponseEntity<>(answerMapper.answerToAnswerResponseDto(response), HttpStatus.CREATED);
    }

    //답변 수정하기
    @PatchMapping("/{post-id}/{answer-id}")
    public ResponseEntity patchAnswer(@PathVariable("post-id") Long postId,
                                      @PathVariable("answer-id") Long answerId,
                                      @Valid @RequestBody AnswerPatchDto answerPatchDto){
        answerPatchDto.setAnswerId(answerId);

        Answer answer = answerMapper.answerPatchDtoToAnswer(answerPatchDto);

        Answer response = answerService.updateAnswer(answer);

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
        answerService.deleteAnswer(answerId);

        return ResponseEntity.noContent().build();
    }


}
