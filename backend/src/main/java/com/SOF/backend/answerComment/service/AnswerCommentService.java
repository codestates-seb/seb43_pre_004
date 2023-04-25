package com.SOF.backend.answerComment.service;

import com.SOF.backend.Utils.CustomBeanUtils;
import com.SOF.backend.answer.entity.Answer;
import com.SOF.backend.answer.service.AnswerService;
import com.SOF.backend.answerComment.entity.AnswerComment;
import com.SOF.backend.answerComment.repository.AnswerCommentRepository;
import com.SOF.backend.exception.BusinessLogicException;
import com.SOF.backend.exception.ExceptionCode;
import com.SOF.backend.member.Entity.Member;
import com.SOF.backend.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class AnswerCommentService {
    private final AnswerCommentRepository answerCommentRepository;
    private final AnswerService answerService;
    private final MemberService memberService;
    private final CustomBeanUtils customBeanUtils;

    //답변 댓글 등록하기
    public AnswerComment createAnswerComment(Long memberId,Long answerId,AnswerComment answerComment){
        Answer answer = answerService.findVerifiedAnswer(answerId);
        Member member = memberService.findMember(memberId);

        answerComment.setAnswer(answer);
        answerComment.setMember(member);

        answer.addComment(answerComment);
        member.addAnswerComment(answerComment);

        answerComment.setCreateDate(LocalDateTime.now());

        return answerCommentRepository.save(answerComment);
    }

    //답변 댓글 수정하기
    public AnswerComment updateAnswerComment(Long memberId,Long answerId,AnswerComment answerComment){
        AnswerComment findAnswerComment = findVerifiedAnswerComment(answerComment.getAnswerCommentId());

        if (!findAnswerComment.getMember().getMemberId().equals(memberId)){
            throw new BusinessLogicException(ExceptionCode.ACCESS_NOT_ALLOWED);
        }
        answerService.findVerifiedAnswer(answerId);

        Optional.ofNullable(answerComment.getComment())
                .ifPresent(comment->findAnswerComment.setComment(comment));

        AnswerComment updateAnswerComment = (AnswerComment) customBeanUtils.copyNonNullProperties(answerComment,findAnswerComment);

        updateAnswerComment.setModifyDate(LocalDateTime.now());

        updateAnswerComment = answerCommentRepository.save(findAnswerComment);

        return updateAnswerComment;
    }

    //답변 댓글 삭제하기
    public void deleteAnswerComment(Long memberId,Long answerId,Long answerCommentId){

        AnswerComment findAnswerComment = findVerifiedAnswerComment(answerCommentId);

        if (!findAnswerComment.getMember().getMemberId().equals(memberId)){
            throw new BusinessLogicException(ExceptionCode.ACCESS_NOT_ALLOWED);
        }

        answerService.findVerifiedAnswer(answerId);

        answerCommentRepository.deleteById(answerCommentId);
    }

    private AnswerComment findVerifiedAnswerComment(Long answerCommentId) {
        Optional<AnswerComment> optionalQuestion = answerCommentRepository.findById(answerCommentId);
        AnswerComment findAnswerComment = optionalQuestion.orElseThrow(()->
                new BusinessLogicException(ExceptionCode.COMMENT_NOT_FOUND));
        return findAnswerComment;
    }

}
