package com.SOF.backend.question;


import org.springframework.stereotype.Component;

@Component
public class QuestionMapper {


    public Question createDtoToQuestion(QuestionDto.Create createDto){
        if (createDto == null) {
            return null;
        }

        return Question.builder()
                .title(createDto.getTitle())
                .content(createDto.getContent())
                .contentImg(createDto.getContentImg())
                .build();
    }


    public Question updateDtoToQuestion(QuestionDto.Update updateDto){
        if (updateDto == null) {
            return null;
        }

        return Question.builder()
                .title(updateDto.getTitle())
                .content(updateDto.getContent())
                .contentImg(updateDto.getContentImg())
                .build();
    }


    public QuestionDto.response questionToResponseDto(Question question){
        if (question == null) {
            return null;
        }

        return QuestionDto.response.builder()
                .questionId(question.getQuestionId())
                .title(question.getTitle())
                .content(question.getContent())
                .contentImg(question.getContentImg())
                .createdAt(question.getCreatedAt())
                .modifiedAt(question.getModifiedAt())
                .build();

    }





}
