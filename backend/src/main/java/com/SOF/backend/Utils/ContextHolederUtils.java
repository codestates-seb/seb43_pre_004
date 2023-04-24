package com.SOF.backend.Utils;

import com.SOF.backend.exception.BusinessLogicException;
import com.SOF.backend.exception.ExceptionCode;
import com.SOF.backend.member.Entity.Member;
import com.SOF.backend.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;




@Component
@RequiredArgsConstructor
@Slf4j
public class ContextHolederUtils {

    private final MemberRepository memberRepository;


    public Long getAuthMemberId(){
//        boolean ss = SecurityContextHolder.getContext().getAuthentication().isAuthenticated();
//        Object aa = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
//        UserDetails principal = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
//        String email = ((UserDetails)principal).getUsername();
//        Member member = memberRepository.findByEmail(email).orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
//        return member.getMemberId();

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication == null || !authentication.isAuthenticated()) {
            return null;
        }
        Object principal = authentication.getPrincipal();
        if (principal instanceof UserDetails) {
            String email = ((UserDetails) principal).getUsername();
            Member member = memberRepository.findByEmail(email)
                    .orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
            return member.getMemberId();
        } else if (principal instanceof String) {
            String email = (String) principal;
            Member member = memberRepository.findByEmail(email)
                    .orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
            return member.getMemberId();
        } else {
            return null;
        }
    }
}
