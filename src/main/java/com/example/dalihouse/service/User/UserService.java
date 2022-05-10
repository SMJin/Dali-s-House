package com.example.dalihouse.service.User;

import com.example.dalihouse.dto.User.*;
import com.example.dalihouse.model.User.User;
import com.example.dalihouse.repository.User.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.expression.ExpressionException;
//import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@RequiredArgsConstructor
@Service
public class UserService {

    private final int PHONE_NUMBER_LENGTH = 11;
    private final UserRepository userRepository;
//    private final PasswordEncoder passwordEncoder;

    public User signup(SignupRequestDto dto) {
        checkPermission(dto.isPermission());
        checkPhone(dto.getPhone());
        checkEmail(dto.getEmail());
//        dto.setPassword(encodingPassword(dto.getPassword()));
        User user = new User(dto);
        return userRepository.save(user);
    }

//    private String encodingPassword(String password) {
//        return passwordEncoder.encode(password);
//    }

    private boolean checkPermission(boolean permission) {
        if (!permission) {
            throw new ExpressionException("개인정보 수집 동의를 하지 않으셨습니다.");
        }
        return true;
    }

    private boolean checkPhone(String phone) {
        if (phone.length() != PHONE_NUMBER_LENGTH || phone.charAt(0) != '0' || phone.charAt(1) != '1') {
            throw new ExpressionException("전화번호가 잘못되었습니다.");
        }
        return true;
    }

    private boolean checkEmail(String email) {
        if (!email.contains("@") || !email.contains(".")) {
            throw new ExpressionException("이메일이 잘못되었습니다.");
        }
        return true;
    }

    @Transactional
    public User login(LoginRequestDto dto) {
        User user = userRepository.findByUserId(dto.getUserId()).orElseThrow(
                () -> new NullPointerException("일치하는 아이디가 없습니다.")
        );

//        String encodedPassword = passwordEncoder.encode(dto.getPassword());
//        if (!user.getPassword().equals(encodedPassword)) {
        if (!user.getPassword().equals(dto.getPassword())) {
            throw new ExpressionException("비밀번호가 틀렸습니다.");
        }

        return user;
    }

    @Transactional
    public String findIdByPhone(FindIdByPhoneDto dto) {
        User user = userRepository.findByUsernameAndPhone(dto.getUsername(), dto.getPhone()).orElseThrow(
                () -> new NullPointerException("일치하는 아이디가 없습니다.")
        );
        return user.getUserId();
    }

    public String findIdByEmail(FindIdByEmailDto dto) {
        User user = userRepository.findByUsernameAndEmail(dto.getUsername(), dto.getEmail()).orElseThrow(
                () -> new NullPointerException("일치하는 아이디가 없습니다.")
        );
        return user.getUserId();
    }

    public User findPasswordByPhone(FindPasswordByPhoneDto dto) {
        return userRepository.findByUserIdAndPhone(dto.getUserId(), dto.getPhone()).orElseThrow(
                () -> new NullPointerException("일치하는 아이디가 없습니다.")
        );
    }

    public User findPasswordByEmail(FindPasswordByEmailDto dto) {
        return userRepository.findByUserIdAndEmail(dto.getUserId(), dto.getEmail()).orElseThrow(
                () -> new NullPointerException("일치하는 아이디가 없습니다.")
        );
    }
}
