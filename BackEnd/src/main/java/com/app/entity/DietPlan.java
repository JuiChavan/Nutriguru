package com.app.entity;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class DietPlan {


	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String description;
	@OneToOne
	private Appointment appointment;
	
	//One Diet plan belongs to one client
	//@OneToOne
	//@JoinColumn(name="client_Id")
	//private Client client;
	
//	@ManyToOne
//	@JoinColumn(name="nutritionist_Id")
//	private Nutritionist nutritionist;
}
