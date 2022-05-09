package com.example.dalihouse.service.User;

import com.example.dalihouse.dto.User.FindIdByEmailDto;
import com.example.dalihouse.dto.User.FindIdByPhoneDto;
import com.example.dalihouse.dto.User.LoginRequestDto;
import com.example.dalihouse.model.User.User;
import com.example.dalihouse.repository.User.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.expression.ExpressionException;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@RequiredArgsConstructor
@Service
public class UserService {

    private final int PHONE_NUMBER_LENGTH = 11;
    private final UserRepository userRepository;

    public boolean checkPermission(boolean permission) {
        if (!permission) {
            throw new ExpressionException("개인정보 수집 동의를 하지 않으셨습니다.");
        }
        return true;
    }

    public boolean checkPhone(String phone) {
        if (phone.length() != PHONE_NUMBER_LENGTH || phone.charAt(0) != '0' || phone.charAt(1) != '1') {
            throw new ExpressionException("전화번호가 잘못되었습니다.");
        }
        return true;
    }

    public boolean checkEmail(String email) {
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
}
