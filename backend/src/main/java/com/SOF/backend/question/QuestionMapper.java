package com.SOF.backend.question;


import org.springframework.data.domain.Page;
import org.springframework.stereotype.Component;

import javax.sql.rowset.serial.SerialBlob;
import java.io.IOException;
import java.sql.Blob;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@Component
public class QuestionMapper {


    public Question createDtoToQuestion(QuestionDto.Create createDto){
        if (createDto == null) {
            return null;
        }
        try{
            if (createDto.getContentImg() != null) {
                byte[] blobToByteArray =
                        createDto.getContentImg().getBytes(1, (int) createDto.getContentImg().length());

                return Question.builder()
                        .title(createDto.getTitle())
                        .content(createDto.getContent())
                        .bounty(createDto.getBounty())
                        .contentImg(blobToByteArray)
                        .build();
            }
            return Question.builder()
                    .title(createDto.getTitle())
                    .content(createDto.getContent())
                    .bounty(createDto.getBounty())
                    .build();
        }catch (SQLException e){
            throw new RuntimeException(e);
        }


    }


    public Question updateDtoToQuestion(QuestionDto.Update updateDto){
        if (updateDto == null) {
            return null;
        }
        try {
            if(updateDto.getContentImg() != null) {
                byte[] blobToByteArray = updateDto.getContentImg().getBytes(1, (int) updateDto.getContentImg().length());
                return Question.builder()
                        .title(updateDto.getTitle())
                        .content(updateDto.getContent())
                        .contentImg(blobToByteArray)
                        .build();
            }
            return Question.builder()
                    .title(updateDto.getTitle())
                    .content(updateDto.getContent())
                    .build();

        }catch (SQLException e){
            throw new RuntimeException(e);
        }

    }


    public QuestionDto.Response questionToResponseDto(Question question){
        if (question == null) {
            return null;
        }
        try {
            if(question.getContentImg() != null) {
                return QuestionDto.Response.builder()
                        .questionId(question.getQuestionId())
                        .title(question.getTitle())
                        .content(question.getContent())
                        .contentImg(new SerialBlob(question.getContentImg()))
                        .createdAt(question.getCreatedAt())
                        .modifiedAt(question.getModifiedAt())
                        .bounty(question.getBounty())
                        .answerCnt(question.getAnswerCnt())
                        .viewed(question.getViewed())
                        .comments(question.getComments())
                        .build();
            }   return QuestionDto.Response.builder()
                    .questionId(question.getQuestionId())
                    .title(question.getTitle())
                    .content(question.getContent())
                    .createdAt(question.getCreatedAt())
                    .modifiedAt(question.getModifiedAt())
                    .bounty(question.getBounty())
                    .answerCnt(question.getAnswerCnt())
                    .viewed(question.getViewed())
                    .comments(question.getComments())
                    .build();


        }catch (SQLException e){
            throw new RuntimeException(e);
        }


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
