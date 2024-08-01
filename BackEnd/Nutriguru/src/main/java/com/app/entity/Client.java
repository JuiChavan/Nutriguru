package com.app.entity;

import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.core.sym.Name;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Client {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String name;
	private String email;
	private String password;
	private String contact;
	private int age;
	private LocalDate dob;
	@Embedded
	private Address address;

	//One Client belongs to one Appointment
	@OneToOne
	private Appointment appointment;

	//Many client have one nutritionist
	@ManyToOne()
	private Nutritionist nutritionist;
	
	//One client have one biling
	@OneToOne
	private Billing bill;
	
	//One Client belongs to one diet plan
	@OneToOne
	private DietPlan dietPlan;
}
