package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entity.Nutritionist;

public interface NutritionistRepository extends JpaRepository<Nutritionist, Long> {

}
