package com.app.service;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exception.ResourceNotFound;
import com.app.dto.AuthDTO;
import com.app.dto.UserRespDTO;
import com.app.entity.User;
import com.app.repository.UserRepository;



@Service
@Transactional
public class UserServiceImpl implements UserService {
@Autowired
private UserRepository userRepository;
@Autowired
private ModelMapper mapper;
@Override
public UserRespDTO authenticateUser(AuthDTO dto) {
	User user = userRepository.
			findByEmailAndPassword(dto.getEmail(), dto.getPwd())
					.orElseThrow(() -> 
					new ResourceNotFound("Invalid email or password !!!"));
			//map entity -> DTO
			return mapper.map(user, UserRespDTO.class);
}
}
