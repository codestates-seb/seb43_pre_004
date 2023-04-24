package com.SOF.backend.answerComment.repository;

import com.SOF.backend.answerComment.entity.AnswerComment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnswerCommentRepository extends JpaRepository<AnswerComment,Long> {
}
