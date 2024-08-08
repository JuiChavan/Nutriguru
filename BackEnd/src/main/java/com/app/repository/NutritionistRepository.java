package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entity.Nutritionist;
@Repository
public interface NutritionistRepository extends JpaRepository<Nutritionist, Long> {

}
