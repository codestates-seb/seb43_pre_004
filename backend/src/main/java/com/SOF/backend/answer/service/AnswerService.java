package com.SOF.backend.answer.service;

import com.SOF.backend.answer.entity.Answer;
import com.SOF.backend.answer.repository.AnswerRepository;
import com.SOF.backend.exception.BusinessLogicException;
import com.SOF.backend.exception.ExceptionCode;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class AnswerService {
    private final AnswerRepository answerRepository;

    //답변 등록하기
    public Answer createAnswer(Answer answer){
        return answerRepository.save(answer);
    }

    //답변 수정하기
    public Answer updateAnswer(Answer answer){
        Answer findAnswer = findVerifiedAnswer(answer.getAnswerId());
        Optional.ofNullable(answer.getContent())
                .ifPresent(content->findAnswer.setContent(content));
        Answer updateAnswer = answerRepository.save(findAnswer);
        return updateAnswer;
    }

    //답변 조회하기
    public Answer findAnswer(Long answerId){
        return findVerifiedAnswer(answerId);
    }

    //답변 삭제하기
    public void deleteAnswer(Long answerId){
        answerRepository.deleteById(answerId);
    }

    private Answer findVerifiedAnswer(Long answerId) {
        Optional<Answer> optionalQuestion = answerRepository.findById(answerId);
        Answer findAnswer = optionalQuestion.orElseThrow(()->
                new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
        return findAnswer;
    }
}
