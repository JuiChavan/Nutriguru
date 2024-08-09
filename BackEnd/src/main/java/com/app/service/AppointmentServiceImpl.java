package com.app.service;

import java.time.LocalDate;
import java.util.Optional;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.AppointmentDTO;
import com.app.entity.Appointment;
import com.app.entity.Client;
import com.app.entity.Nutritionist;
import com.app.entity.Slot;
import com.app.entity.User;
import com.app.repository.AppoinmnetRepository;
import com.app.repository.ClientRepository;
import com.app.repository.NutritionistRepository;
import com.app.repository.UserRepository;


@Service
@Transactional
public class AppointmentServiceImpl implements AppointmentService {

	@Autowired
	private NutritionistRepository nutritionistRepository;

	@Autowired
	private ClientRepository clientRepository;

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	AppoinmnetRepository appoinmnetRepository;

	@Override
	public AppointmentDTO bookAppointment(Long userId, Long nutritionistId, String date, String timeSlot) {
		Optional<User> user = userRepository.findById(userId);
		Optional<Nutritionist> nutritionist = nutritionistRepository.findById(nutritionistId);

		Client client = new Client();
		client.setId(user.get().getId());
		client.setName(user.get().getName());
		client.setEmail(user.get().getEmail());
		client.setPassword(user.get().getPassword());
		client.setContact(user.get().getContact());
		client.setAge(user.get().getAge());
		client.setAddress(user.get().getAddress());
		client.setDob(user.get().getDob());
		client.setNutritionist(nutritionist.get());
		
		// creating client from user info
		clientRepository.save(client);

        System.out.println("The selected nutri is "+nutritionist.get());
		//Parsing
		LocalDate bookedDate=LocalDate.parse(date);
	    Slot bookedSlot=Slot.valueOf(timeSlot);
		
		Appointment appointment = new Appointment();
		appointment.setNutritionist(nutritionist.get());
		appointment.setDate(bookedDate);
		appointment.setTimeSlot(bookedSlot);
		appointment.setClient(client);
		
		
		appoinmnetRepository.save(appointment);
		client.setBookAppointment(appointment);
		clientRepository.save(client);
		
		AppointmentDTO appointmentDTO=mapper.map(appointment, AppointmentDTO.class);
		
		appointmentDTO.setClientName(appointment.getClient().getName());
		appointmentDTO.setClientId(appointment.getClient().getId());
		appointmentDTO.setClientEmail(appointment.getClient().getEmail());
		
		appointmentDTO.setNutritionistId(appointment.getNutritionist().getId());
		appointmentDTO.setNutritionistName(appointment.getNutritionist().getName());
		appointmentDTO.setEmail(appointment.getNutritionist().getEmail());

		return appointmentDTO;
	}

}
