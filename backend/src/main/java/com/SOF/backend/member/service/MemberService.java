/*
 * 파일명 : MemberService.class
 * 목적 : 회원의 CRUD 관리하기 위한 클래스
 * 파일 생성일 : 2023.04.15
 * 마지막 편집일 : 2023.04.15
 * 마지막 편집자 : 이호준
 * */
package com.SOF.backend.member.service;

import com.SOF.backend.exception.BusinessLogicException;
import com.SOF.backend.exception.ExceptionCode;
import com.SOF.backend.member.Entity.Member;
import com.SOF.backend.member.repository.MemberRepository;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class MemberService {
    private final MemberRepository memberRepository;

    public MemberService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    public Member createMember(Member member){
        try {
            Member returnMember = memberRepository.save(member);
            return returnMember;
        } catch (DataIntegrityViolationException e) {
            throw new BusinessLogicException(ExceptionCode.VALUE_ALREADY_EXISTS);
        }
    }

    public Member updateMember(Member member){
        Member findMember = findVerifiedMember(member.getMemberId());

        Optional.ofNullable(member.getNickname())
                .ifPresent(name -> findMember.setNickname(name));
        Optional.ofNullable(member.getEmail())
                .ifPresent(email -> findMember.setEmail(email));
        Optional.ofNullable(member.getLocation())
                .ifPresent(location -> findMember.setLocation(location));

        findMember.setLatestLog(LocalDateTime.now());

        return memberRepository.save(findMember);
    }

    public Member findMember(long memberId){
        return findVerifiedMember(memberId);
    }

    public Page<Member> findMembers(int page, int size){
        return memberRepository.findAll(PageRequest.of(page,size,
                Sort.by("memberId").descending()));
    }

    public void deleteMember(long memberId){
        Member findMember = findVerifiedMember(memberId);

        memberRepository.delete(findMember);
    }

    private Member findVerifiedMember(Long memberId) {
        Optional<Member> optionalMember =
                memberRepository.findById(memberId);
        Member findMember =
                optionalMember.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
        return findMember;
    }
}
