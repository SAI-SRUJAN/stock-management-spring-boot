package com.vc.victorycomforts;

import java.util.ArrayList;
import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.csrf.CsrfFilter;

@Configuration
@EnableWebSecurity
public class Security extends WebSecurityConfigurerAdapter {

	@Autowired
    DataSource dataSource;

	//Enable jdbc authentication
	@Autowired
	public void configAuthentication(AuthenticationManagerBuilder auth) throws Exception {
	    auth.jdbcAuthentication().passwordEncoder(new BCryptPasswordEncoder())
	        .dataSource(dataSource)
	        .usersByUsernameQuery("select username, password, 1 from users where username=?")
	        .authoritiesByUsernameQuery("select username, authority from authorities where username=?");
	}
	
	@Override
	public void configure(HttpSecurity http) throws Exception {
		 http.authorizeRequests()
		 .antMatchers("/resources/**","/rest/**,/login*").permitAll()
         .anyRequest().authenticated()
         .and()
         .formLogin()
         .usernameParameter("username").passwordParameter("password")
         .permitAll()
         .and().csrf().disable();
	}
}