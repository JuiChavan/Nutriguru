package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entity.Client;

public interface ClientRepository extends JpaRepository<Client,Long> {

}
