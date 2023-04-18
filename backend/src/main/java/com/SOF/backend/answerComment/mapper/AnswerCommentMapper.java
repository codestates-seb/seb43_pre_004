package com.SOF.backend.answerComment.mapper;

import com.SOF.backend.answerComment.dto.AnswerCommentPatchDto;
import com.SOF.backend.answerComment.dto.AnswerCommentPostDto;
import com.SOF.backend.answerComment.dto.AnswerCommentResponseDto;
import com.SOF.backend.answerComment.entity.AnswerComment;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface AnswerCommentMapper {
    AnswerComment answerCommentPostDtoToAnswerComment(AnswerCommentPostDto answerCommentPostDto);
    AnswerComment answerCommentPatchDtoToAnswerComment(AnswerCommentPatchDto answerCommentPatchDto);
    AnswerCommentResponseDto answerCommentToAnswerCommentResponseDto(AnswerComment answerComment);
}
