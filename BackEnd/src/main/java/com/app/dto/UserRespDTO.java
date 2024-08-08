package com.app.dto;

import java.time.LocalDate;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

//firstname , last name,phone no , dob
@Getter
@Setter
@ToString
public class UserRespDTO {
	private String name;
	private String email;
		private LocalDate dob;
		private String contact;
}
