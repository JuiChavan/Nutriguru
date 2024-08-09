package com.app.service;

import com.app.dto.AuthDTO;
import com.app.dto.RegisterUserDTO;
import com.app.dto.UserRespDTO;

public interface UserService {

	UserRespDTO authenticateUser(AuthDTO dto);
	
	UserRespDTO registerUser(RegisterUserDTO dto);
	
	UserRespDTO getByEmail(String email);

}
