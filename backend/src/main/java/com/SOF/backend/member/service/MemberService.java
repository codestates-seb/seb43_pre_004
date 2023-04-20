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
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class MemberService {
    private final MemberRepository memberRepository;
    private final ApplicationEventPublisher publisher;
    private final PasswordEncoder passwordEncoder;

    public MemberService(MemberRepository memberRepository,
                         ApplicationEventPublisher publisher,
                         PasswordEncoder passwordEncoder) {
        this.memberRepository = memberRepository;
        this.publisher = publisher;
        this.passwordEncoder = passwordEncoder;
    }

    public Member createMember(Member member){
        try {
            verifyExistsEmail(member.getEmail());
            verifyExistsNickname(member.getNickname());

            String encryptedPassword = passwordEncoder.encode(member.getPassword());
            member.setPassword(encryptedPassword);

            Member returnMember = memberRepository.save(member);
            //publisher.publishEvent(new MemberRegistrationApplicationEvent(this, savedMember));
            return returnMember;
        } catch (DataIntegrityViolationException e) {
            throw new BusinessLogicException(ExceptionCode.VALUE_ALREADY_EXISTS);
        }
    }

    public Member updateMember(Member member){
        Member findMember = findVerifiedMember(member.getMemberId());

        verifyExistsEmail(member.getEmail());
        verifyExistsNickname(member.getNickname());

        Optional.ofNullable(member.getNickname())
                .ifPresent(name -> findMember.setNickname(name));
        Optional.ofNullable(member.getEmail())
                .ifPresent(email -> findMember.setEmail(email));
        Optional.ofNullable(member.getLocation())
                .ifPresent(location -> findMember.setLocation(location));
        Optional.ofNullable(member.getImage())
                .ifPresent(image -> findMember.setImage(image));
        Optional.ofNullable(member.getWebLink())
                        .ifPresent(webLink -> findMember.setWebLink(webLink));
        Optional.ofNullable(member.getTwitterLink())
                        .ifPresent(twitterLink -> findMember.setTwitterLink(twitterLink));
        Optional.ofNullable(member.getGithubLink())
                        .ifPresent(githubLink -> findMember.setGithubLink(githubLink));
        Optional.ofNullable(member.getRealName())
                        .ifPresent(realName -> findMember.setRealName(realName));

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

    private void verifyExistsEmail(String email) {
        Optional<Member> optionalMember =
                memberRepository.findByEmail(email);
        if(optionalMember.isPresent()){
            throw new BusinessLogicException(ExceptionCode.EMAIL_ALREADY_EXISTS);
        }
    }

    private void verifyExistsNickname(String nickname) {
        Optional<Member> optionalMember =
                memberRepository.findByNickname(nickname);
        if(optionalMember.isPresent()){
            throw new BusinessLogicException(ExceptionCode.NICKNAME_ALREADY_EXISTS);
        }
    }
}
