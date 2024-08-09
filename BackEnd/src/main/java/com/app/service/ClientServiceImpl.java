package com.app.service;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.modelmapper.PropertyMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exception.InvalidClientId;
import com.app.custom_exception.ResourceNotFound;
import com.app.dto.ClientDto;
import com.app.dto.RegisterClientDto;
import com.app.entity.Appointment;
import com.app.entity.Client;
import com.app.entity.Nutritionist;
import com.app.entity.Slot;
import com.app.repository.AppoinmnetRepository;
import com.app.repository.ClientRepository;
import com.app.repository.NutritionistRepository;

@Service
@Transactional
public class ClientServiceImpl implements ClientService {
//dependency
	@Autowired
	private ClientRepository clientRepository;

	@Autowired
	private ModelMapper mapper;
	@Autowired
	private AppoinmnetRepository appoinmnetRepository;
	@Autowired
	private NutritionistRepository nutritionistRepository;

	//Get list of all client
	@Override
	public List<ClientDto> getAllClient() {
		return clientRepository.findAll().stream().map(client -> {
			ClientDto clientDto = new ClientDto();
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
			return clientDto;
		}).collect(Collectors.toList());
	}

	//Get Client's diet plan by client Id
	public ClientDto getDietPlan(Long clientId) throws InvalidClientId {
		Optional<Client> clientOptional = clientRepository.findById(clientId);
		if (!clientOptional.isPresent()) {
			throw new InvalidClientId("You entered invalid Id, Please enter valid Id");
		}
		Client client = clientOptional.get();
		ClientDto clientDto = new ClientDto();
		clientDto.setId(client.getId());
		clientDto.setName(client.getName());
		clientDto.setEmail(client.getEmail());
		clientDto.setAge(client.getAge());
		clientDto.setDob(client.getDob());

		if (client.getBookAppointment() != null) {
			clientDto.setBookAppointmentId(client.getBookAppointment().getId());
		}
		if (client.getNutritionist() != null) {
			clientDto.setNutritionistId(client.getNutritionist().getId());
		}
		if (client.getDietPlan() != null) {
			clientDto.setDietPlan(client.getDietPlan().getDescription());
		}
		return clientDto;
	}

	//Get all time slots
	@Override
	public List<Slot> getAllTimeSlots() {
		return Arrays.asList(Slot.values());
	}

	//Need to update
	@Override
	public RegisterClientDto registerClient(RegisterClientDto regClientDto) {

		// map dto --> entity
		Client client = mapper.map(regClientDto, Client.class);

		// add the new client in the db
		clientRepository.save(client);
		return regClientDto;
	}
	 
}
