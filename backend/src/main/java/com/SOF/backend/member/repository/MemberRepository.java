/*
 * 파일명 : MemberRepository.interface
 * 목적 : 데이터베이스와 직접적으로 상호작용할 리포지토리 인터페이스
 * 파일 생성일 : 2023.04.15
 * 마지막 편집일 : 2023.04.15
 * 마지막 편집자 : 이호준
 * */
package com.SOF.backend.member.repository;

import com.SOF.backend.member.Entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Long> {
    Optional<Member> findByEmail(String email);
}
