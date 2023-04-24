package com.SOF.backend.questionComment;


import com.SOF.backend.Utils.CustomBeanUtils;
import com.SOF.backend.exception.BusinessLogicException;
import com.SOF.backend.exception.ExceptionCode;
import com.SOF.backend.member.Entity.Member;
import com.SOF.backend.member.service.MemberService;
import com.SOF.backend.question.Question;
import com.SOF.backend.question.QuestionRepository;
import com.SOF.backend.question.QuestionService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class QCommentService {



    private final QCommentMapper qCommentMapper;
    private final QCommentRepository qCommentRepository;
    private final CustomBeanUtils<QComment> customBeanUtils;
    private QuestionRepository questionRepository;
    private final QuestionService questionService;
    private final MemberService memberService;
    

    public QCommentDto.Response saveQComment(Long memberId, Long questionId, QCommentDto.Create createDto){
        QComment qComment = qCommentMapper.createDtoToQComent(createDto);
        qComment.addMember(memberService.findMember(memberId));
        qComment.setCreatedAt(LocalDateTime.now());
        Question question = questionService.findVerifiedQuestion(questionId);
        question.setCommentsCnt(question.getCommentsCnt()+1);
        qComment.addQuestion(question);
        qCommentRepository.save(qComment);

        return qCommentMapper.qCommentToResponse(qComment);
    }


    public QCommentDto.Response updateQComment(Long memberId, Long questionId, Long commentId, QCommentDto.Update updateDto){
        questionService.findVerifiedQuestion(questionId);
        QComment findComment = findVerifiedQComment(commentId);
        if (!findComment.getMember().getMemberId().equals(memberId) ){
            throw new BusinessLogicException(ExceptionCode.ACCESS_NOT_ALLOWED);
        }
        QComment updateComment = qCommentMapper.updateDtoToQComment(updateDto);
        QComment response = customBeanUtils.copyNonNullProperties(updateComment, findComment);
        response.setModifiedAt(LocalDateTime.now());
        return qCommentMapper.qCommentToResponse(qCommentRepository.save(response));


    }

    public void deleteQComment(Long memberId, Long commentId){
        QComment findComment = findVerifiedQComment(commentId);
        if (!findComment.getMember().getMemberId().equals(memberId) ){
            throw new BusinessLogicException(ExceptionCode.ACCESS_NOT_ALLOWED);
        }
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
