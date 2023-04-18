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
import java.io.IOException;
import java.sql.Blob;
import java.sql.SQLException;
import java.util.Optional;

@Component
public class MemberMapper {
    public Member memberPostDtoToMember(MemberDto.Post postDto){
        try {
            postDto.setImage();
            byte[] blobToByteArray = postDto.getBlob().getBytes(1,(int)postDto.getBlob().length());
            return new Member(
                    postDto.getEmail(),
                    postDto.getNickname(),
                    postDto.getPassword(),
                    blobToByteArray,
                    postDto.getLocation()
            );
        } catch (SQLException | IOException e) {
            throw new RuntimeException(e);
        }

    }

    public Member memberPatchDtoToMember(MemberDto.Patch patchDto){
        try {
            if(patchDto.getBlob() != null) {
                byte[] blobToByteArray = patchDto.getBlob().getBytes(1, (int) patchDto.getBlob().length());
                return new Member(
                        patchDto.getMemberId(),
                        patchDto.getEmail(),
                        patchDto.getNickname(),
                        blobToByteArray,
                        patchDto.getLocation()
                );
            }
            else{
                return new Member(
                        patchDto.getMemberId(),
                        patchDto.getEmail(),
                        patchDto.getNickname(),
                        patchDto.getLocation()
                );
            }
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }

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
