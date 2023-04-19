package com.SOF.backend.question;


import com.SOF.backend.Utils.CustomBeanUtils;
import com.SOF.backend.exception.BusinessLogicException;
import com.SOF.backend.exception.ExceptionCode;
import com.SOF.backend.question.QuestionDto.QuestionPageResponse;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Sort;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;


@Service
public class QuestionService {

    private final QuestionRepository questionRepository;

    private final QuestionMapper questionMapper;

    private final CustomBeanUtils<Question> customBeanUtils;


    public QuestionService(QuestionRepository questionRepository,
                           QuestionMapper questionMapper,
                           CustomBeanUtils<Question> customBeanUtils) {
        this.questionRepository = questionRepository;
        this.questionMapper = questionMapper;
        this.customBeanUtils = customBeanUtils;
    }

    public QuestionDto.Response saveQuestion(QuestionDto.Create createDto){

        Question question = questionMapper.createDtoToQuestion(createDto);
        question.setCreatedAt(LocalDateTime.now());

        return questionMapper.questionToResponseDto(questionRepository.save(question));
    }

    public QuestionDto.Response updateQuestion(Long questionId, QuestionDto.Update updateDto){
        Question findquestion = findVerifiedQuestion(questionId);
        Question question = questionMapper.updateDtoToQuestion(updateDto);
        Question updateQuestion = customBeanUtils.copyNonNullProperties(question, findquestion);
        updateQuestion.setModifiedAt(LocalDateTime.now());

        return questionMapper.questionToResponseDto(questionRepository.save(updateQuestion));
    }

    public void deleteQuestion(Long questId){

        questionRepository.deleteById(questId);
    }

    public QuestionPageResponse findQuestions(int page, int size){

        Page<Question> questionPage = questionRepository.findAll(PageRequest.of(page, size,
                Sort.by("questionId").descending()));


        List<Question> questions = questionPage.getContent();

        return questionMapper.questionResponseToPageResponse(questionMapper.questionToQuestionResponseDtos(questions)
                ,questionPage);
    }

    public QuestionDto.Response findQuestion(Long questionId){
          Question question = findVerifiedQuestion(questionId);
          question.setViewed(question.getViewed()+1);

          questionRepository.save(question);

          return questionMapper.questionToResponseDto(question);
    }



    public Question findVerifiedQuestion(Long questionId){
        Optional<Question> optionalQuestion = questionRepository.findById(questionId);

        Question findQuestion =
                optionalQuestion.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));



        return findQuestion;

    }

}