package com.app.service;

import com.app.dto.AuthDTO;
import com.app.dto.UserRespDTO;

public interface UserService {

	UserRespDTO authenticateUser(AuthDTO dto);

}
