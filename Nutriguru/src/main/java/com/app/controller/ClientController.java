package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ClientDto;
import com.app.entity.Client;
import com.app.service.ClientService;

@RestController
@RequestMapping("/client")
public class ClientController {
	//depedency
	
	 @Autowired private ClientService clientService;
	 
	  //get All client
	  
	  @GetMapping("/getAllClient") public ResponseEntity<?> getAllClient(){
	  List<ClientDto> clients=clientService.getAllClient();
	 
	  return ResponseEntity.status(HttpStatus.OK).body(clients);
	 
	  }
	 

	// bookAppoinmet
	// 1.-> show all nutritionist 2.-> show all available timeslots 3.-> payment

}
