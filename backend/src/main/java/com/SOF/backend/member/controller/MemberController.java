/*
 * 파일명 : MemberController.class
 * 목적 : URI를 연결해주는 컨트롤러
 * 파일 생성일 : 2023.04.15
 * 마지막 편집일 : 2023.04.17
 * 마지막 편집자 : 이호준
 *
 * */
package com.SOF.backend.member.controller;

import com.SOF.backend.member.Entity.Member;
import com.SOF.backend.member.dto.MemberDto;
import com.SOF.backend.member.mapper.MemberMapper;
import com.SOF.backend.member.service.MemberService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@Validated
public class MemberController {
    private final MemberService memberService;
    private final MemberMapper mapper;

    public MemberController(MemberService memberService, MemberMapper mapper) {
        this.memberService = memberService;
        this.mapper = mapper;
    }

    @PostMapping("/signup")
    public ResponseEntity postMember(@Valid @RequestBody MemberDto.Post postDto){
        Member member = mapper.memberPostDtoToMember(postDto);

        Member response = memberService.createMember(member);

        return new ResponseEntity<>(mapper.memberToMemberResponseDto(response),
                HttpStatus.CREATED);
    }

    @PatchMapping("/user/profile/{memberId}")
    public ResponseEntity patchMember(@PathVariable("memberId") @Positive long memberId,
                                      @Valid @RequestBody MemberDto.Patch patchDto){
        patchDto.setMemberId(memberId);

        Member member = mapper.memberPatchDtoToMember(patchDto);

        Member response = memberService.updateMember(member);

        return new ResponseEntity<>(mapper.memberToMemberResponseDto(response),
                HttpStatus.OK);
    }


}
