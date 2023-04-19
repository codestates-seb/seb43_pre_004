package com.SOF.backend.questionComment;


import com.SOF.backend.question.QuestionDto;
import com.SOF.backend.question.QuestionService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/comment")
public class QCommentController {


    private final QCommentService qCommentService;

    public QCommentController(QCommentService qCommentService) {
        this.qCommentService = qCommentService;
    }

    @PostMapping("/{question-id}")
    public ResponseEntity createQComment(@PathVariable("question-id") Long questionId ,@RequestBody QCommentDto.Create createDto){


        return new ResponseEntity(qCommentService.saveQComment(questionId, createDto), HttpStatus.CREATED);
    }


    @PatchMapping("/{question-id}/{comment-id}")
    public ResponseEntity updateQComment(@PathVariable("question-id") Long questionId,
                                         @PathVariable("comment-id") Long commentId,
                                         @RequestBody QCommentDto.Update updateDto){


        return new ResponseEntity(qCommentService.updateQComment(questionId, commentId, updateDto), HttpStatus.OK);

    }



    @DeleteMapping("/{question-id}/{comment-id}")
    public ResponseEntity deleteQComment(@PathVariable("comment-id") Long commentId){

        qCommentService.deleteQComment(commentId);

        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
