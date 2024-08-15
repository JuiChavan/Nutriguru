package com.app.service;

import java.util.List;

import com.app.dto.AppoimnetForTodayDto;
import com.app.dto.DietPlanDto;
import com.app.dto.NutritionistDto;
import com.app.entity.Nutritionist;

public interface NutritionistService {

	List<NutritionistDto> getAllNutritionist();

	List<AppoimnetForTodayDto> getAllAppoinmnetForToday(Long nutritionistId);

	DietPlanDto addDietPlan(Long clientId, DietPlanDto dietPlanDto);

	Long getIdByEmail(String email);

}
