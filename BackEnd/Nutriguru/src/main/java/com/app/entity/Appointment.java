package com.app.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Appointment {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	// One appointment belongs to many time slot
	@ManyToOne
	@JoinColumn(name = "time_Slot")
	private TimeSlot timeSlot;

	// One Appointment belongs to one client
	@OneToOne
	private Client client;

	// One Appointment belongs to one nutritionist
	@ManyToOne
	@JoinColumn(name = "nutritionist_Id")
	private Nutritionist nutritionist;
		
}

