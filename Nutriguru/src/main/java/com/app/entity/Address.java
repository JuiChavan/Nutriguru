//demo

package com.app.entity;

import javax.persistence.Embeddable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Embeddable
public class Address {	
	
	private String addressLine1;
	private String addressLine2;
	private String state;
	private int coutryCode;
	private int zipCode;
	
}
