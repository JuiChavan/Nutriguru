//optinal
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
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
@Entity
public class ClientHistory {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String name;
	private String email;
	private String password;
	private String contact;

	@Embedded
	private Address address;

	@OneToOne
	@JoinColumn(name = "appointment_id", unique = true) // Unique constraint
	private Appointment appointment;

	private Long nutritionistId;
	// private TimeSlot timeSlot;
	private int age;
	private LocalDate dob;
	
	private String concern;
}
