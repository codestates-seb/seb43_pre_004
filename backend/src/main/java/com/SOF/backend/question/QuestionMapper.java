package com.SOF.backend.question;


import org.springframework.data.domain.Page;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

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


    public QuestionDto.Response questionToResponseDto(Question question){
        if (question == null) {
            return null;
        }

        return QuestionDto.Response.builder()
                .questionId(question.getQuestionId())
                .title(question.getTitle())
                .content(question.getContent())
                .contentImg(question.getContentImg())
                .createdAt(question.getCreatedAt())
                .modifiedAt(question.getModifiedAt())
                .viewed(question.getViewed())
                .build();

    }

    public List<QuestionDto.Response> questionToQuestionResponseDtos(List<Question> questions){
        if (questions ==null){
            return null;
        }
        List<QuestionDto.Response> list = new ArrayList<>(questions.size());
        Iterator iterator = questions.iterator();

        while (iterator.hasNext()){
            Question question = (Question) iterator.next();
            list.add(this.questionToResponseDto(question));
        }

        return list;
    }

    public QuestionDto.QuestionPageResponse questionResponseToPageResponse(List<QuestionDto.Response> questions, Page page){
            if (questions == null){
                return null;
            }

        return new QuestionDto.QuestionPageResponse(questions, page);
    }

}
