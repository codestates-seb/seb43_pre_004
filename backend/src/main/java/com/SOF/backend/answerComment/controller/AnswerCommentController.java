package com.SOF.backend.answerComment.controller;

import com.SOF.backend.answerComment.dto.AnswerCommentPatchDto;
import com.SOF.backend.answerComment.dto.AnswerCommentPostDto;
import com.SOF.backend.answerComment.dto.AnswerCommentResponseDto;
import com.SOF.backend.answerComment.entity.AnswerComment;
import com.SOF.backend.answerComment.mapper.AnswerCommentMapper;
import com.SOF.backend.answerComment.service.AnswerCommentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/answerComment")
@Validated
public class AnswerCommentController {
    private final AnswerCommentMapper answerCommentMapper;
    private final AnswerCommentService answerCommentService;

    public AnswerCommentController(AnswerCommentMapper answerCommentMapper, AnswerCommentService answerCommentService) {
        this.answerCommentMapper = answerCommentMapper;
        this.answerCommentService = answerCommentService;
    }

    //답변에 댓글 추가하기
    @PostMapping("/{answer-id}")
    public ResponseEntity postAnswerComment(@PathVariable("answer-id") Long answerId,
                                            @Valid @RequestBody AnswerCommentPostDto answerCommentPostDto){
        AnswerComment answerComment = answerCommentMapper.answerCommentPostDtoToAnswerComment(answerCommentPostDto);

        AnswerComment response = answerCommentService.createAnswerComment(answerComment);

        return new ResponseEntity<>(answerCommentMapper.answerCommentToAnswerCommentResponseDto(response), HttpStatus.CREATED);
    }

    //답변 댓글 수정하기
    @PatchMapping("/{answer-id}/{answerComment-id}")
    public ResponseEntity patchAnswerComment(@PathVariable("answer-id") Long answerId,
                                             @PathVariable("answerComment-id") Long answerCommentId,
                                             @Valid @RequestBody AnswerCommentPatchDto answerCommentPatchDto){
        answerCommentPatchDto.setAnswerCommentId(answerCommentId);

        AnswerComment answerComment = answerCommentMapper.answerCommentPatchDtoToAnswerComment(answerCommentPatchDto);

        AnswerComment response = answerCommentService.updateAnswerComment(answerComment);

        return new ResponseEntity<>(answerCommentMapper.answerCommentToAnswerCommentResponseDto(response),HttpStatus.OK);
    }


    @DeleteMapping("/{answer-id}/{answerComment-id}")
    public ResponseEntity deleteAnswerComment(@PathVariable("answer-id") Long answerId,
                                              @PathVariable("answerComment-id") Long answerCommentId){
        answerCommentService.deleteAnswerComment(answerCommentId);

        return ResponseEntity.noContent().build();
    }
}
