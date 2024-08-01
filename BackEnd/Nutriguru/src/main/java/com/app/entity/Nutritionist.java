package com.app.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class Nutritionist {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String name;
	private String email;
	private String password;
	private double consulatationFees;
	private String Qualification;
	private double rating;

	// One nutritionist belongs to one Appointment
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "appointement_Id")
	private List<Appointment> appointements = new ArrayList<Appointment>();

	// One nutritionist belongs to many client
	@OneToMany(mappedBy = "nutritionist")
	private List<Client> client = new ArrayList<Client>();

	// One nutritionist belongs to many diet plan
	@OneToMany
	private List<DietPlan> dietPlan = new ArrayList<DietPlan>();

	// Many nutritionist belongs to one category
	@ManyToOne
	@JoinColumn(name = "category_Id")
	private Category category;
}
