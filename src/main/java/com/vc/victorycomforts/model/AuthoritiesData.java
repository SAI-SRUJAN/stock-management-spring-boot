package com.vc.victorycomforts.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.springframework.stereotype.Component;

@Component

//Spring jpa jars.
@Entity
@Table(name = "AUTHORITIES")

//To increase speed and save sql statement execution time.
@DynamicInsert
@DynamicUpdate

public class AuthoritiesData {
	
	@Id
	@Column(name = "USERNAME", unique = true, nullable = false)
	private String username;
	
	@Column(name = "AUTHORITY")
	private String authority;

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}
	
	public String getAuthority() {
		return authority;
	}

	public void setAuthority(String authority) {
		this.authority = authority;
	}

}
