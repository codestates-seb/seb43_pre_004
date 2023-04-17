/*
 * 파일명 : MemberMapper.class
 * 목적 : Member를 Dto로 혹은 반대로 전환해주는 클래스
 * 파일 생성일 : 2023.04.17
 * 마지막 편집일 : 2023.04.17
 * 마지막 편집자 : 이호준
 * */
package com.SOF.backend.member.mapper;

import com.SOF.backend.member.Entity.Member;
import com.SOF.backend.member.dto.MemberDto;
import org.springframework.stereotype.Component;

import javax.sql.rowset.serial.SerialBlob;
import java.sql.Blob;
import java.sql.SQLException;

@Component
public class MemberMapper {
    public Member memberPostDtoToMember(MemberDto.Post postDto){
        try {
            byte[] blobToByteArray = postDto.getBlob().getBytes(1,(int)postDto.getBlob().length());
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
        return new Member(
                postDto.getEmail(),
                postDto.getNickname(),
                postDto.getPassword(),
                postDto.getBlob(),
                postDto.getLocation()
        );
    }

    public MemberDto.Response memberToMemberResponseDto(Member member){
        try {
            Blob byteArrayToBlob = new SerialBlob(member.getImage());
            return new MemberDto.Response(
                    member.getMemberId(),
                    member.getEmail(),
                    member.getNickname(),
                    byteArrayToBlob,
                    member.getLocation(),
                    member.getCreatedDate(),
                    member.getLatestLog(),
                    member.getVisited()
            );
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }

    }
}
