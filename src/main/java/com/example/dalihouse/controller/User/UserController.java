package com.example.dalihouse.controller.User;

import com.example.dalihouse.dto.User.FindIdByEmailDto;
import com.example.dalihouse.dto.User.FindIdByPhoneDto;
import com.example.dalihouse.dto.User.LoginRequestDto;
import com.example.dalihouse.dto.User.SignupRequestDto;
import com.example.dalihouse.model.User.User;
import com.example.dalihouse.repository.User.UserRepository;
import com.example.dalihouse.service.User.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class UserController {

    private final UserRepository userRepository;
    private final UserService userService;

//    {
//        "userId": "1234",
//            "password": "12345",
//            "username": "고밍이",
//            "phone": "01000000000",
//            "email": "asdf@asdf.com",
//            "permission": true
//    }
    @PostMapping("/user/signup")
    public User signup(@RequestBody SignupRequestDto dto) {
        userService.checkPermission(dto.isPermission());
        userService.checkPhone(dto.getPhone());
        userService.checkEmail(dto.getEmail());
        User user = new User(dto);
        return userRepository.save(user);
    }

    @PostMapping("/user/login")
    public User login(@RequestBody LoginRequestDto dto) {
        return userService.login(dto);
    }

    @PostMapping("/user/find/id/phone")
    public String findIdByPhone(@RequestBody FindIdByPhoneDto dto) {
        return userService.findIdByPhone(dto);
    }

    @PostMapping("/user/find/id/email")
    public String findIdByEmail(@RequestBody FindIdByEmailDto dto) {
        return userService.findIdByEmail(dto);
    }

}