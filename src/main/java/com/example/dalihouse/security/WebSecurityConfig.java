package com.example.dalihouse.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

        @Bean
        public BCryptPasswordEncoder encodePassword() {
            return new BCryptPasswordEncoder();
        }

        @Override
        public void configure(WebSecurity web) {
            web
                    .ignoring()
                    .antMatchers("/h2-console/**");
        }

        @Override
        protected void configure(HttpSecurity http) throws Exception {
            http.csrf()
                    .ignoringAntMatchers("/**");

            http.authorizeRequests()
                    .antMatchers("/**").permitAll()
                    .anyRequest().authenticated()
//                    .and()
//                        .formLogin()
//                        .loginPage("/")
//                        .defaultSuccessUrl("/")
//                        .permitAll()
//                    .and()
//                        .logout()
//                        .permitAll()
            ;
        }
}
