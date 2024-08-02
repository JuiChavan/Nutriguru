package com.app.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
public class Billing {


	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String Name;
	private String email;
	private double fee;
	
	@OneToOne
	private Appointment appointment;
	//private Long nutritionistId;
	
	//One Bill belongs to one client
	//@OneToOne
	//@JoinColumn(name="client_Id")
	//private Client clientId;
	
	
}
