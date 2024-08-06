package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dto.NutritionistDto;
import com.app.repository.NutritionistRepository;
@Service
@Transactional
public class NutritionistServiceImpl implements NutritionistService {
//dependecy
	@Autowired
	private NutritionistRepository nutritionistRepository;
	
	@Autowired
	private ModelMapper mapper;
	@Override
	public List<NutritionistDto> getAllNutritionist() {
	
		
		return nutritionistRepository.findAll()
				.stream()
				.map(nutritionist->{NutritionistDto nutriDto=new NutritionistDto();
				nutriDto.setId(nutritionist.getId());
				nutriDto.setName(nutritionist.getName());
				nutriDto.setEmail(nutritionist.getEmail());
				nutriDto.setConsulatationFees(nutritionist.getConsulatationFees());
				nutriDto.setQualification(nutritionist.getQualification());
				nutriDto.setRating(nutritionist.getRating());
				nutriDto.setCategoryName(nutritionist.getCategory().getName());
				return nutriDto;}
		   	).collect(Collectors.toList());
			
				
				
	}

}
