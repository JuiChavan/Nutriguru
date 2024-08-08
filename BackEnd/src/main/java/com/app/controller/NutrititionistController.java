package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AppoimnetForTodayDto;
import com.app.dto.ClientDto;
import com.app.dto.NutritionistDto;
import com.app.entity.Appointment;
import com.app.entity.Nutritionist;
import com.app.repository.AppoinmnetRepository;
import com.app.service.ClientService;
import com.app.service.NutritionistService;

@RestController
@RequestMapping("/nutritionist")
public class NutrititionistController {

	@Autowired
	 private NutritionistService nutritionistService;
	
	@GetMapping("/getAllNutritionist")
	
	public ResponseEntity<?> getAllNutritionist(){
		List<NutritionistDto> nutriList=nutritionistService.getAllNutritionist();
		
		return ResponseEntity.status(HttpStatus.OK).body(nutriList);
	}
	
	//get all appoinmnets 
	
	@GetMapping("/getAllAppoinmnet/{nutritionistId}")
	public ResponseEntity<?> getAllAppoinmnet(@PathVariable Long nutritionistId){
		List<AppoimnetForTodayDto> appoimnet=nutritionistService.getAllAppoinmnetForToday(nutritionistId);
		return ResponseEntity.status(HttpStatus.OK).body(appoimnet);
	}

}
