package com.SOF.backend.answerComment.service;

import com.SOF.backend.answer.entity.Answer;
import com.SOF.backend.answerComment.controller.AnswerCommentController;
import com.SOF.backend.answerComment.entity.AnswerComment;
import com.SOF.backend.answerComment.repository.AnswerCommentRepository;
import com.SOF.backend.exception.BusinessLogicException;
import com.SOF.backend.exception.ExceptionCode;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class AnswerCommentService {
    private final AnswerCommentRepository answerCommentRepository;
    private final AnswerCommentController answerComment;

    //답변 댓글 등록하기
    public AnswerComment createAnswerComment(AnswerComment answerComment){
        return answerCommentRepository.save(answerComment);
    }

    //답변 댓글 수정하기
    public AnswerComment updateAnswerComment(AnswerComment answerComment){
        AnswerComment findAnswerComment = findVerifiedAnswerComment(answerComment.getCommentId());
        Optional.ofNullable(answerComment.getComment())
                .ifPresent(comment->findAnswerComment.setComment(comment));
        AnswerComment updateAnswerComment = answerCommentRepository.save(findAnswerComment);
        return updateAnswerComment;
    }

    //답변 댓글 삭제하기
    public void deleteAnswerComment(Long commentId){
        answerCommentRepository.deleteById(commentId);
    }

    private AnswerComment findVerifiedAnswerComment(Long commentId) {
        Optional<AnswerComment> optionalQuestion = answerCommentRepository.findById(commentId);
        AnswerComment findAnswerComment = optionalQuestion.orElseThrow(()->
                new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
        return findAnswerComment;
    }

}
