package com.example.dalihouse.dto.User;

import lombok.Getter;

@Getter
public class FindPasswordByEmailDto {
    private String userId;
    private String email;
}
