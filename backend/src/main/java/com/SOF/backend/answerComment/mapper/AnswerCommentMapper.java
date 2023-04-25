package com.SOF.backend.answerComment.mapper;

import com.SOF.backend.answerComment.dto.AnswerCommentPatchDto;
import com.SOF.backend.answerComment.dto.AnswerCommentPostDto;
import com.SOF.backend.answerComment.dto.AnswerCommentResponseDto;
import com.SOF.backend.answerComment.entity.AnswerComment;
import org.springframework.stereotype.Component;

@Component
public class AnswerCommentMapper {

    public AnswerComment answerCommentPostDtoToAnswerComment(AnswerCommentPostDto answerCommentPostDto){
        if (answerCommentPostDto == null){
            return null;
        }
        return new AnswerComment(
                answerCommentPostDto.getComment()
        );
    }
    public AnswerComment answerCommentPatchDtoToAnswerComment(AnswerCommentPatchDto answerCommentPatchDto){
        if (answerCommentPatchDto == null){
            return null;
        }
        return new AnswerComment(
                answerCommentPatchDto.getComment(),
                answerCommentPatchDto.getAnswerCommentId()
        );
    }
    public AnswerCommentResponseDto answerCommentToAnswerCommentResponseDto(AnswerComment response){
        if (response == null){
            return null;
        }
        return new AnswerCommentResponseDto(
                response.getAnswerCommentId(),
                response.getComment(),
                response.getCreateDate(),
                response.getModifyDate(),
                response.getAnswer().getAnswerId(),
                response.getMember()
        );
    }
}
