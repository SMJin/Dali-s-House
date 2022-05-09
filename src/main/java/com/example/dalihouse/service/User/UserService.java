package com.example.dalihouse.service.User;

import com.example.dalihouse.dto.User.SignupRequestDto;
import org.springframework.expression.ExpressionException;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final int PHONE_NUMBER_LENGTH = 11;

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

}
