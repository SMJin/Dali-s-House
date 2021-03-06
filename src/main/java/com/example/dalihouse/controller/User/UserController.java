package com.example.dalihouse.controller.User;

import com.example.dalihouse.dto.User.*;
import com.example.dalihouse.model.User.User;
import com.example.dalihouse.repository.User.UserRepository;
import com.example.dalihouse.service.User.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

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
        return userService.signup(dto);
    }

    @PostMapping("/user/login")
    public User login(@RequestBody LoginRequestDto dto, HttpServletRequest request) {
        return userService.login(dto, request);
    }

    @PostMapping("/user/logout")
    public String logout(@ModelAttribute("user") User user, HttpServletRequest request) {
        return userService.logout(user, request);
    }

    @GetMapping("/user/current")
    public User getCurrentUser(HttpServletRequest request) {
        return userService.getCurrentUser(request);
    }

    @PostMapping("/user/find/id/phone")
    public String findIdByPhone(@RequestBody FindIdByPhoneDto dto) {
        return userService.findIdByPhone(dto);
    }

    @PostMapping("/user/find/id/email")
    public String findIdByEmail(@RequestBody FindIdByEmailDto dto) {
        return userService.findIdByEmail(dto);
    }

    @PostMapping("/user/find/password/phone")
    public User findPasswordByPhone(@RequestBody FindPasswordByPhoneDto dto) {
        return userService.findPasswordByPhone(dto);
    }

    @PostMapping("/user/find/password/email")
    public User findPasswordByEmail(@RequestBody FindPasswordByEmailDto dto) {
        return userService.findPasswordByEmail(dto);
    }

}
