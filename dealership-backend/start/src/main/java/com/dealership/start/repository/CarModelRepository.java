package com.dealership.start.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dealership.start.model.CarModel;

@Repository
public interface CarModelRepository extends JpaRepository<CarModel, Long>{
    
}
