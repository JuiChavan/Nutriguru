package com.app.service;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.app.dto.AppointmentDTO;

public interface AppointmentService {

	AppointmentDTO bookAppointment(Long userId, Long nutritionistId, String date, String timeSlot);

}
