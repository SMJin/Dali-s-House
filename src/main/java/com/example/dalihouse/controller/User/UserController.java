package com.example.dalihouse.controller.User;

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

    @PostMapping("/user/login")
    public User login(@RequestBody SignupRequestDto dto) {
        userService.checkPermission(dto.isPermission());
        userService.checkPhone(dto.getPhone());
        userService.checkEmail(dto.getEmail());
        User user = new User(dto);
        return userRepository.save(user);
    }

}
