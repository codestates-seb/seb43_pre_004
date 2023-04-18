package com.SOF.backend.answer.mapper;

import com.SOF.backend.answer.dto.AnswerPatchDto;
import com.SOF.backend.answer.dto.AnswerPostDto;
import com.SOF.backend.answer.dto.AnswerResponseDto;
import com.SOF.backend.answer.entity.Answer;
import java.time.LocalDateTime;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-04-18T17:03:30+0900",
    comments = "version: 1.5.1.Final, compiler: javac, environment: Java 11.0.17 (Azul Systems, Inc.)"
)
@Component
public class AnswerMapperImpl implements AnswerMapper {

    @Override
    public Answer answerPostDtoToAnswer(AnswerPostDto answerPostDto) {
        if ( answerPostDto == null ) {
            return null;
        }

        Answer answer = new Answer();

        answer.setContent( answerPostDto.getContent() );

        return answer;
    }

    @Override
    public Answer answerPatchDtoToAnswer(AnswerPatchDto answerPatchDto) {
        if ( answerPatchDto == null ) {
            return null;
        }

        Answer answer = new Answer();

        answer.setAnswerId( answerPatchDto.getAnswerId() );
        answer.setContent( answerPatchDto.getContent() );

        return answer;
    }

    @Override
    public AnswerResponseDto answerToAnswerResponseDto(Answer answer) {
        if ( answer == null ) {
            return null;
        }

        Long answerId = null;
        String content = null;

        answerId = answer.getAnswerId();
        content = answer.getContent();

        LocalDateTime createdDate = null;
        LocalDateTime modifiedDate = null;
        Long questionId = null;
        Long memberId = null;

        AnswerResponseDto answerResponseDto = new AnswerResponseDto( answerId, content, createdDate, modifiedDate, questionId, memberId );

        return answerResponseDto;
    }
}
