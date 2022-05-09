package com.example.dalihouse.dto.User;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class SignupRequestDto {
    private String userId;
    private String password;
    private String username;
    private String phone;
    private String email;
    private boolean permission;
}
