package com.example.dalihouse.model.User;

import com.example.dalihouse.dto.User.SignupRequestDto;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Setter
@Getter
@NoArgsConstructor
@Entity
public class User {

    @GeneratedValue(strategy = GenerationType.AUTO)
    @Id
    private long id;

    @Column(nullable = false, unique = true)
    private String userId;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String username;

    @Column(nullable = false, unique = true)
    private String phone;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private boolean permission;

    public User(SignupRequestDto dto) {
        this.userId = dto.getUserId();
        this.password = dto.getPassword();
        this.username = dto.getUsername();
        this.phone = dto.getPhone();
        this.email = dto.getEmail();
        this.permission = dto.isPermission();
    }

}
