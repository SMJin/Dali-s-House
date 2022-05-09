package com.example.dalihouse.repository.User;

import com.example.dalihouse.model.User.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUserId(String userId) ;
    Optional<User> findByUsernameAndPhone(String username, String phone);
}
