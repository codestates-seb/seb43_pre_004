package com.SOF.backend.questionComment;


import com.SOF.backend.Utils.ContextHolederUtils;
import com.SOF.backend.question.QuestionDto;
import com.SOF.backend.question.QuestionService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(originPatterns = "http://localhost:3000")
@RestController
@RequestMapping("/comment")
public class QCommentController {


    private final QCommentService qCommentService;

    private final ContextHolederUtils contextHolederUtils;

    public QCommentController(QCommentService qCommentService, ContextHolederUtils contextHolederUtils) {
        this.qCommentService = qCommentService;
        this.contextHolederUtils = contextHolederUtils;
    }

    @PostMapping("/{question-id}")
    public ResponseEntity createQComment(@PathVariable("question-id") Long questionId ,@RequestBody QCommentDto.Create createDto){

        Long memberId = contextHolederUtils.getAuthMemberId();

        return new ResponseEntity(qCommentService.saveQComment(memberId, questionId, createDto), HttpStatus.CREATED);
    }


    @PatchMapping("/{question-id}/{comment-id}")
    public ResponseEntity updateQComment(@PathVariable("question-id") Long questionId,
                                         @PathVariable("comment-id") Long commentId,
                                         @RequestBody QCommentDto.Update updateDto){
        Long memberId = contextHolederUtils.getAuthMemberId();

        return new ResponseEntity(qCommentService.updateQComment(memberId,questionId, commentId, updateDto), HttpStatus.OK);

    }



    @DeleteMapping("/{question-id}/{comment-id}")
    public ResponseEntity deleteQComment(@PathVariable("comment-id") Long commentId){
        Long memberId = contextHolederUtils.getAuthMemberId();
        qCommentService.deleteQComment(memberId,commentId);

        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
