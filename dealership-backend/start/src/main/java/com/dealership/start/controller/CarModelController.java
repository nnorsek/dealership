package com.dealership.start.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dealership.start.model.CarModel;
import com.dealership.start.service.CarModelService;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/cars")
public class CarModelController {
    
    private final CarModelService carModelService;

    public CarModelController(CarModelService carModelService){
        this.carModelService = carModelService;
    }

    @PostMapping("/add")
    public CarModel addCar(@RequestBody CarModel carModel) {
        return carModelService.saveCar(carModel);
    }

    @GetMapping("/all")
    public List<CarModel> getAllCars() {
        return carModelService.getAllCars();
    }
    
}
