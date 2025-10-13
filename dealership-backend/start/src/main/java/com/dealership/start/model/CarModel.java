package com.dealership.start.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="vechile-lookup")
public class CarModel {
    @Id
    private String id;
    private String model;
    private String make;
    private int year;
    private String condition;

}
