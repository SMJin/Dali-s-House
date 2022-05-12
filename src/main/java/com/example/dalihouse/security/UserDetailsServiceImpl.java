package com.example.dalihouse.security;

//import com.example.dalihouse.model.User.User;
//import com.example.dalihouse.repository.User.UserRepository;
//import lombok.RequiredArgsConstructor;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Service;

//@RequiredArgsConstructor
//@Service
//public class UserDetailsServiceImpl implements UserDetailsService {
//
//    private final UserRepository userRepository;
//
//    @Override
//    public UserDetails loadUserByUsername(String userId) throws UsernameNotFoundException {
//        User user = userRepository.findByUserId(userId)
//                .orElseThrow(() -> new UsernameNotFoundException("유저를 찾을 수 없습니다. " + userId));
//        return new UserDetailsImpl(user);
//    }
//}
