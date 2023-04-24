package com.SOF.backend.jwt.auth.userdetails;

import com.SOF.backend.exception.BusinessLogicException;
import com.SOF.backend.exception.ExceptionCode;
import com.SOF.backend.jwt.auth.utils.CustomAuthorityUtils;
import com.SOF.backend.member.Entity.Member;
import com.SOF.backend.member.repository.MemberRepository;
import lombok.Getter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.Optional;

@Slf4j
@Component
public class MemberDetailsService implements UserDetailsService {
    private final MemberRepository memberRepository;
    private final CustomAuthorityUtils authorityUtils;

    public MemberDetailsService(MemberRepository memberRepository,
                                CustomAuthorityUtils authorityUtils) {
        this.memberRepository = memberRepository;
        this.authorityUtils = authorityUtils;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Optional<Member> optionalMember = memberRepository.findByEmail(email);
        Member findMember = optionalMember.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
        log.info("회원 이메일 = {}, 회원 권한 = {}",findMember.getEmail(),findMember.getRoles());
        log.info("암호화된 회원 비밀번호 = {}",findMember.getPassword());
        return new MemberDetails(findMember);
    }

    @Getter
    private final class MemberDetails extends Member implements UserDetails {
        public MemberDetails(Member member) {
            setMemberId(member.getMemberId());
            setEmail(member.getEmail());
            setNickname(member.getNickname());
            setPassword(member.getPassword());
            setImage(member.getImage());
            setLocation(member.getLocation());
            setWebLink(member.getWebLink());
            setTwitterLink(member.getTwitterLink());
            setGithubLink(member.getGithubLink());
            setRealName(member.getRealName());
            setRoles(member.getRoles());
        }



        @Override
        public Collection<? extends GrantedAuthority> getAuthorities() {
            return authorityUtils.createAuthorities(this.getRoles());
        }

        @Override
        public String getUsername() {
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            MemberDetails memberDetails = (MemberDetails) authentication.getPrincipal();
            String email = memberDetails.getEmail();
            return email;
        }

        @Override
        public boolean isAccountNonExpired() {
            return true;
        }

        @Override
        public boolean isAccountNonLocked() {
            return true;
        }

        @Override
        public boolean isCredentialsNonExpired() {
            return true;
        }

        @Override
        public boolean isEnabled() {
            return true;
        }



    }
}
