package com.app.dto;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.app.entity.Appointment;
import com.app.entity.Category;
import com.app.entity.Client;
import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
@Getter
@Setter
@ToString
public class NutritionistDto {

	
	private Long id;
	private String name;
	private String email;
	private String password;
	private double consulatationFees;
	private String Qualification;
	private double rating;
	private String categoryName;
	
	
}
