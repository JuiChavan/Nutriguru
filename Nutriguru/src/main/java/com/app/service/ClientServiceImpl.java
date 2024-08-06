package com.app.service;

import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.modelmapper.PropertyMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dto.ClientDto;
import com.app.entity.Client;
import com.app.repository.ClientRepository;


@Service
@Transactional
public class ClientServiceImpl implements ClientService {
//dependency
	@Autowired
   private ClientRepository clientRepository;
	@Autowired
	private ModelMapper mapper;
	

	
	
	@Override
	public List<ClientDto> getAllClient() {
		return clientRepository.findAll()
				.stream()
				.map(client->{ClientDto clientDto = new ClientDto();
                clientDto.setId(client.getId());
                clientDto.setName(client.getName());
                clientDto.setEmail(client.getEmail());
                clientDto.setPassword(client.getPassword());
                clientDto.setContact(client.getContact());
                clientDto.setAge(client.getAge());
                clientDto.setDob(client.getDob());
                clientDto.setAddress(client.getAddress());
                clientDto.setBookAppointmentId(client.getBookAppointment().getId());
                clientDto.setNutritionistId(client.getNutritionist().getId());
                return clientDto;})
				.collect(Collectors.toList());
	}

}
