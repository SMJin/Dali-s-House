package com.example.dalihouse.repository.User;

import com.example.dalihouse.model.User.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
