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
@RequestMapping("/comment/answer")
@Validated
public class AnswerCommentController {
    private final AnswerCommentMapper answerCommentMapper;
    private final AnswerCommentService answerCommentService;

    public AnswerCommentController(AnswerCommentMapper answerCommentMapper, AnswerCommentService answerCommentService) {
        this.answerCommentMapper = answerCommentMapper;
        this.answerCommentService = answerCommentService;
    }

    //답변에 댓글 추가하기
    @PostMapping("/comment")
    public ResponseEntity postAnswerComment(@Valid @RequestBody AnswerCommentPostDto answerCommentPostDto){
        AnswerComment answerComment = answerCommentMapper.answerCommentPostDtoToAnswerComment(answerCommentPostDto);

        AnswerComment response = answerCommentService.createAnswerComment(answerComment);

        return new ResponseEntity<>(answerCommentMapper.answerCommentToAnswerCommentResponseDto(response), HttpStatus.CREATED);
    }

    //답변 댓글 수정하기
    @PatchMapping("/comment/{answer-id}/{comment-id}")
    public ResponseEntity patchAnswerComment(@PathVariable("answer-id") Long answerId,
                                             @PathVariable("comment-id") Long commentId,
                                             @Valid @RequestBody AnswerCommentPatchDto answerCommentPatchDto){
        answerCommentPatchDto.setCommentId(commentId);

        AnswerComment answerComment = answerCommentMapper.answerCommentPatchDtoToAnswerComment(answerCommentPatchDto);

        AnswerComment response = answerCommentService.updateAnswerComment(answerComment);

        return new ResponseEntity<>(answerCommentMapper.answerCommentToAnswerCommentResponseDto(response),HttpStatus.OK);
    }

    @DeleteMapping("/comment/{answer-id}/{comment-id}")
    public ResponseEntity deleteAnswerComment(@PathVariable("answer-id") Long answerId,
                                              @PathVariable("comment-id") Long commentId){
        answerCommentService.deleteAnswerComment(commentId);

        return ResponseEntity.noContent().build();
    }
}
