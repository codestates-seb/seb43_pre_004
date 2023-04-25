package com.SOF.backend.answer.service;

import com.SOF.backend.Utils.CustomBeanUtils;
import com.SOF.backend.answer.entity.Answer;
import com.SOF.backend.answer.repository.AnswerRepository;
import com.SOF.backend.exception.BusinessLogicException;
import com.SOF.backend.exception.ExceptionCode;
import com.SOF.backend.member.Entity.Member;
import com.SOF.backend.member.service.MemberService;
import com.SOF.backend.question.Question;
import com.SOF.backend.question.QuestionService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class AnswerService {
    private final AnswerRepository answerRepository;
    private final MemberService memberService;
    private final QuestionService questionService;
    private final CustomBeanUtils customBeanUtils;

    //답변 등록하기
    public Answer createAnswer(Long postId,Long memberId,Answer answer){
        Member member = memberService.findMember(memberId);

        Question question = questionService.findVerifiedQuestion(postId);

        answer.setQuestion(question);
        answer.setMember(member);
        answer.setCreateDate(LocalDateTime.now());

        question.addAnswer(answer);
        member.addAnswer(answer);

        question.setAnswerCnt(question.getAnswerCnt()+1);

        return answerRepository.save(answer);
    }

    //답변 수정하기
    public Answer updateAnswer(Long memberId,Long questionId,Long answerId,Answer answer){
        Answer findAnswer = findVerifiedAnswer(answerId);

        if (!findAnswer.getMember().getMemberId().equals(memberId)){
            throw new BusinessLogicException(ExceptionCode.ACCESS_NOT_ALLOWED);
        }


        questionService.findVerifiedQuestion(questionId);

        Optional.ofNullable(answer.getContent())
                .ifPresent(content->findAnswer.setContent(content));

        //answer.setModifyDate(LocalDateTime.now());
        Answer updateAnswer = (Answer) customBeanUtils.copyNonNullProperties(answer,findAnswer);

        updateAnswer.setModifyDate(LocalDateTime.now());
        updateAnswer = answerRepository.save(findAnswer);
        //Answer updateAnswer = answerRepository.save(findAnswer);

        return updateAnswer;
    }

    //답변 조회하기
    public Answer findAnswer(Long answerId){
        return findVerifiedAnswer(answerId);
    }

    //답변 삭제하기
    public void deleteAnswer(Long memberId,Long postId,Long answerId){

        Answer findAnswer = findVerifiedAnswer(answerId);

        if (!findAnswer.getMember().getMemberId().equals(memberId)){
            throw new BusinessLogicException(ExceptionCode.ACCESS_NOT_ALLOWED);
        }

        questionService.findVerifiedQuestion(postId);

        answerRepository.deleteById(answerId);
    }

    public Answer findVerifiedAnswer(Long answerId) {
        Optional<Answer> optionalQuestion = answerRepository.findById(answerId);
        Answer findAnswer = optionalQuestion.orElseThrow(()->
                new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));
        return findAnswer;
    }
}
