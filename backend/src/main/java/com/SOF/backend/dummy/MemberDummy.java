package com.SOF.backend.dummy;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Timestamp;
import java.time.LocalDateTime;


@AllArgsConstructor
@NoArgsConstructor
@Setter
public class MemberDummy {

    public Long memberID;

    public String email;

    public LocalDateTime created_date;

    public int visited;


    public MemberDummy(Long memberID, String email, int visited) {
        this.memberID = memberID;
        this.email = email;
        this.visited = visited;
    }
}
