package com.SOF.backend.answer.mapper;

import com.SOF.backend.answer.dto.AnswerPatchDto;
import com.SOF.backend.answer.dto.AnswerPostDto;
import com.SOF.backend.answer.dto.AnswerResponseDto;
import com.SOF.backend.answer.entity.Answer;
import org.springframework.stereotype.Component;

@Component
public class AnswerMapper {
    public Answer answerPostDtoToAnswer(AnswerPostDto answerPostDto){
        if (answerPostDto == null){
            return null;
        }
        return new Answer(
                answerPostDto.getContent()
        );
    }
    public Answer answerPatchDtoToAnswer(AnswerPatchDto answerPatchDto){
        if (answerPatchDto == null){
            return null;
        }
        return new Answer(
                answerPatchDto.getContent(),
                answerPatchDto.getAnswerId()
        );
    }
    public AnswerResponseDto answerToAnswerResponseDto(Answer response){
        if (response == null){
            return null;
        }
        return new AnswerResponseDto(
                response.getAnswerId(),
                response.getContent(),
                response.getCreateDate(),
                response.getModifyDate(),
                response.getQuestion(),
                response.getMember(),
                response.getAnswerComments()
        );
    }
}
