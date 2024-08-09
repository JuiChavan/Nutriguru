package com.app.service;

import java.util.Optional;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.AuthDTO;
import com.app.dto.RegisterUserDTO;
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
		Optional<User> user = userRepository.findByEmailAndPassword(dto.getEmail(), dto.getPassword());
		// map entity -> DTO
		return mapper.map(user.get(), UserRespDTO.class);
	}

	@Override
	public UserRespDTO registerUser(RegisterUserDTO user) {
		User u = mapper.map(user, User.class);
		userRepository.save(u);
		return mapper.map(u, UserRespDTO.class);
	}

	@Override
	public UserRespDTO getByEmail(String email) {
		System.out.println("email "+email);
		Optional<User> u=userRepository.findByEmail(email);
		System.out.println("user u "+u.get());
		return mapper.map(u.get(), UserRespDTO.class);
	}
}
