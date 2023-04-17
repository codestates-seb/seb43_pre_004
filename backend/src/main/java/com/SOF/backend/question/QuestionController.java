package com.SOF.backend.question;


import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/question")
@Slf4j
public class QuestionController {


    private QuestionService questionService;



    public QuestionController(QuestionService questionService) {
        this.questionService = questionService;

    }

    @GetMapping("/list")
    public ResponseEntity getQuestionList(@RequestParam int page, @RequestParam int size){

        QuestionDto.QuestionPageResponse questionPage = questionService.findQuestions(page -1, size);

        return ResponseEntity.ok(questionPage);
    }


    @GetMapping("/{question-id}")
    public ResponseEntity getQuestion(@PathVariable("question-id") Long questionId){

        return ResponseEntity.ok(questionService.findQuestion(questionId));
    }

    @GetMapping("/ask")
    public ResponseEntity getAsk(){
        return null;
    }


    @GetMapping("/{question-id}/edit")
    public ResponseEntity getEdit(@PathVariable("post-id") Long questionId){


        return null;
    }


    @PostMapping("/ask")
    public ResponseEntity creatQuestion(@RequestBody QuestionDto.Create createDto){

        return new ResponseEntity(questionService.saveQuestion(createDto), HttpStatus.CREATED);
    }


    @PatchMapping("/ask/{question-id}")
    public ResponseEntity updateQuestion(@PathVariable("question-id") Long questionId,
                                         @RequestBody QuestionDto.Update updateDto){


        return ResponseEntity.ok(questionService.updateQuestion(questionId, updateDto));

    }


    @DeleteMapping("/ask/{question-id}")
    public ResponseEntity deleteQuestion(@PathVariable("question-id") Long questionId){

        questionService.deleteQuestion(questionId);

        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }




}
