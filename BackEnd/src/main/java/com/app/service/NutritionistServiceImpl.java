package com.app.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dto.AppoimnetForTodayDto;
import com.app.dto.NutritionistDto;
import com.app.entity.Appointment;
import com.app.entity.Nutritionist;
import com.app.repository.AppointmentRepository;
import com.app.repository.NutritionistRepository;

//getAllAppoinmnet
@Service
@Transactional
public class NutritionistServiceImpl implements NutritionistService {
//dependecy
	@Autowired
	private NutritionistRepository nutritionistRepository;

	@Autowired
	private AppointmentRepository appoinmnetRepository;
	@Autowired
	private ModelMapper mapper;

	// Find all nutritionists
	@Override
	public List<NutritionistDto> getAllNutritionist() {

		return nutritionistRepository.findAll().stream().map(nutritionist -> {
			NutritionistDto nutriDto = new NutritionistDto();
			nutriDto.setId(nutritionist.getId());
			nutriDto.setName(nutritionist.getName());
			nutriDto.setEmail(nutritionist.getEmail());
			nutriDto.setConsulatationFees(nutritionist.getConsulatationFees());
			nutriDto.setQualification(nutritionist.getQualification());
			nutriDto.setRating(nutritionist.getRating());
			nutriDto.setCategoryName(nutritionist.getCategory().getName());
			return nutriDto;
		}).collect(Collectors.toList());

	}

	// Get all appointments for today by nutritionists Id
	@Override
	public List<AppoimnetForTodayDto> getAllAppoinmnetForToday(Long nutritionistId) {
		Optional<Nutritionist> nutritionist = nutritionistRepository.findById(nutritionistId);
		Nutritionist nutri = nutritionist.get();
		LocalDate today = LocalDate.now();
		List<Appointment> appointmentsForToday = appoinmnetRepository.findByNutritionistAndDate(nutri, today);
		// list of appoinmnet
		List<AppoimnetForTodayDto> appoimnetForTodayDtos = new ArrayList<>();
		// attach for loop for get all the appoimnets for today

		for (Appointment appointment : appointmentsForToday) {
			AppoimnetForTodayDto appoimnetForTodayDto = new AppoimnetForTodayDto();
			appoimnetForTodayDto.setId(appointment.getId());
			appoimnetForTodayDto.setDate(appointment.getDate());
			appoimnetForTodayDto.setTimeSlot(appointment.getTimeSlot());
			appoimnetForTodayDto.setNutritionistId(appointment.getNutritionist().getId());
			appoimnetForTodayDto.setNutritionistName(appointment.getNutritionist().getName());
			appoimnetForTodayDto.setClientId(appointment.getClient().getId());
			appoimnetForTodayDto.setClientName(appointment.getClient().getName());
			appoimnetForTodayDto.setClientEmail(appointment.getClient().getEmail());
			appoimnetForTodayDto.setEmail(appointment.getNutritionist().getEmail());
			appoimnetForTodayDtos.add(appoimnetForTodayDto);
		}
		return appoimnetForTodayDtos;
	}

}
