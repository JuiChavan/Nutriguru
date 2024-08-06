package com.app.dto;

import java.time.LocalDate;

import javax.persistence.Embedded;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import org.springframework.web.bind.annotation.Mapping;

import com.app.entity.Address;
import com.app.entity.Appointment;
import com.app.entity.Nutritionist;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ClientDto {
	private Long id;
	private String name;
	private String email;
	private String password;
	private String contact;
	private int age;
	private LocalDate dob;
	private Address address;
	private Long bookAppointmentId;
	 
	private Long nutritionistId;


	
	
	
}
