package com.dealership.start.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.dealership.start.model.CarModel;
import com.dealership.start.repository.CarModelRepository;

@Service
public class CarModelService {
    

    private final CarModelRepository carModelRepository;

    public CarModelService(CarModelRepository carModelRepository){
        this.carModelRepository = carModelRepository;
    }


    public CarModel saveCar(CarModel carModel){
        return carModelRepository.save(carModel);
    }

    public List<CarModel> getAllCars(){
        return carModelRepository.findAll();
    }
}
