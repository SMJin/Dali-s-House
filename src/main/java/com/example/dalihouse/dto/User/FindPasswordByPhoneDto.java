package com.example.dalihouse.dto.User;

import lombok.Getter;

@Getter
public class FindPasswordByPhoneDto {
    private String userId;
    private String phone;
}
