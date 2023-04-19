package com.SOF.backend.questionComment;

public class QCommentMapper {



    public QComment createDtoToQComent(QCommentDto.Create createDto){

        if (createDto == null){
            return null;
        }

        return QComment.builder()
                .comment(createDto.getComment())
                .build();
    }

    public QComment updateDtoToQComment(QCommentDto.Update updateDto){

        if (updateDto == null){
            return null;
        }

        return QComment.builder()
                .comment(updateDto.getComment())
                .build();
    }

    public QCommentDto.Response qCommentToResponse(QComment qComment){
        if (qComment == null){
            return null;
        }

        return QCommentDto.Response.builder()
                .QCommentId(qComment.getQCommentId())
                .comment(qComment.getComment())
                .createdAt(qComment.getCreatedAt())
                .modifiedAt(qComment.getModifiedAt())
                .build();

    }
}
