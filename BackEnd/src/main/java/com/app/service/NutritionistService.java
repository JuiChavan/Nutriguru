package com.app.service;

import java.util.List;

import com.app.dto.AppoimnetForTodayDto;
import com.app.dto.NutritionistDto;
import com.app.entity.Appointment;

public interface NutritionistService {

	List<NutritionistDto> getAllNutritionist();

	

	List<AppoimnetForTodayDto> getAllAppoinmnetForToday(Long nutritionistId);

}
