package com.SOF.backend.questionComment;


import com.SOF.backend.Utils.CustomBeanUtils;
import com.SOF.backend.exception.BusinessLogicException;
import com.SOF.backend.exception.ExceptionCode;
import com.SOF.backend.question.Question;
import com.SOF.backend.question.QuestionService;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class QCommentService {



    private final QCommentMapper qCommentMapper;
    private final QCommentRepository qCommentRepository;
    private final CustomBeanUtils<QComment> customBeanUtils;

    private final QuestionService questionService;

    public QCommentService(QCommentMapper qCommentMapper,
                           QCommentRepository qCommentRepository,
                           CustomBeanUtils<QComment> customBeanUtils,
                           QuestionService questionService) {
        this.qCommentMapper = qCommentMapper;
        this.qCommentRepository = qCommentRepository;
        this.customBeanUtils = customBeanUtils;
        this.questionService = questionService;
    }

    public QCommentDto.Response saveQComment(Long questionId, QCommentDto.Create createDto){
        questionService.findVerifiedQuestion(questionId);
        QComment qComment = qCommentMapper.createDtoToQComent(createDto);
        qComment.setCreatedAt(LocalDateTime.now());
        qCommentRepository.save(qComment);
        return qCommentMapper.qCommentToResponse(qComment);


    }


    public QCommentDto.Response updateQComment(Long questionId, Long commentId, QCommentDto.Update updateDto){
        questionService.findVerifiedQuestion(questionId);
        QComment findComment = findVerifiedQComment(commentId);
        QComment updateComment = qCommentMapper.updateDtoToQComment(updateDto);
        QComment response = customBeanUtils.copyNonNullProperties(updateComment, findComment);
        response.setModifiedAt(LocalDateTime.now());

        return qCommentMapper.qCommentToResponse(qCommentRepository.save(response));


    }

    public void deleteQComment(Long commentId){

        qCommentRepository.deleteById(commentId);
    }






    public QComment findVerifiedQComment(Long commentId){
        Optional<QComment> optionalQuestion = qCommentRepository.findById(commentId);

        QComment findComment =
                optionalQuestion.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.COMMENT_NOT_FOUND));



        return findComment;

    }
}
