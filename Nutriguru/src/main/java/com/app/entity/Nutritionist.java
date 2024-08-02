package com.app.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.blogs.entities.BlogPost;

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
	//@OneToMany(cascade = CascadeType.ALL)
	@OneToOne
	@JoinColumn(name = "appointement_Id")
	//private List<Appointment> appointements = new ArrayList<Appointment>();
    private Appointment appointment;
	// One nutritionist belongs to many client
	@OneToMany(mappedBy = "nutritionist", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private List<Client> clients = new ArrayList<Client>();
	//private Client client;

	// One nutritionist belongs to many diet plan
	/*
	 * @OneToMany private List<DietPlan> dietPlan = new ArrayList<DietPlan>();
	 */

	// Many nutritionist belongs to one category
	@ManyToOne
	@JoinColumn(name = "category_Id")
	private Category category;
	
	//helper mathod
	//client has set nutritionist id and book appoinmnet
	public void bookClient(Client client) {
		clients.add(client);
		client.setNutritionist(this);
	}
	//for cancelling appoinmnet client remove nutri id
	public void removeClient(Client client) {
		clients.remove(client);
		client.setNutritionist(null);
	}
	
}
