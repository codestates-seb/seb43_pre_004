package com.SOF.backend.dummy;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/")
public class DummyController {




    @GetMapping("/dummy1")
    public ResponseEntity getMemberDummies(){
        MemberDummy memberDummy1 = new MemberDummy(1L, "hgd123@naver.com", 3);

        MemberDummy memberDummy2 = new MemberDummy(2L, "kdh0511@naver.com", 15);

        MemberDummy memberDummy3 = new MemberDummy(3L, "bgb@naver.com", 333);

        memberDummy1.setCreated_date(LocalDateTime.of(2002, 9, 11, 23, 33));

        memberDummy2.setCreated_date(LocalDateTime.of(2023, 4, 11, 11, 11));

        memberDummy3.setCreated_date(LocalDateTime.of(2023, 4, 14, 20, 0));


        List<MemberDummy> list = List.of(memberDummy1, memberDummy2, memberDummy3);

        return new ResponseEntity(list, HttpStatus.OK);

    }


    @GetMapping("/dummy1/{member-id}")
    public ResponseEntity getMemberDummy(@PathVariable("member-id") Long memberId){
        MemberDummy memberDummy1 = new MemberDummy(1L, "hgd123@naver.com", 3);

        MemberDummy memberDummy2 = new MemberDummy(2L, "kdh0511@naver.com", 15);

        MemberDummy memberDummy3 = new MemberDummy(3L, "bgb@naver.com", 333);

        memberDummy1.setCreated_date(LocalDateTime.of(2002, 9, 11, 23, 33));

        memberDummy2.setCreated_date(LocalDateTime.of(2023, 4, 11, 11, 11));

        memberDummy3.setCreated_date(LocalDateTime.of(2023, 4, 14, 20, 0));

        int idx = memberId.intValue()-1;
        List<MemberDummy> list = List.of(memberDummy1, memberDummy2, memberDummy3);



        return new ResponseEntity(list.get(idx), HttpStatus.OK);
    }

}
