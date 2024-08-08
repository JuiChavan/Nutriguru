package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AuthDTO;
import com.app.dto.UserRespDTO;
import com.app.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {
//dependecy
@Autowired
private UserService userService;
@PostMapping("/signin")
public ResponseEntity<?> userSignIn(@RequestBody AuthDTO dto) {
	System.out.println("in sigin " + dto);
	try {			
		UserRespDTO respDto = userService.authenticateUser(dto);

		return ResponseEntity.ok(respDto);
	} catch (RuntimeException e) {
		//invalid login 
		System.out.println(e);
		return ResponseEntity.
				status(HttpStatus.NOT_FOUND).
				body("User Not Found");
	}

}
	

}
