package com.daw.springproducts.products;

import java.time.LocalDate;
import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data // Getters/Setters, toString y constructor
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(nullable = false)
    private String description;
    @Column(scale = 2, nullable = false)
    private double price;
    @Column(insertable = false)
    private int rating;
    @Column(name = "imageurl", nullable = false)
    private String imageUrl;
    @Column(insertable = false, updatable = false)
    @CreationTimestamp
    private LocalDate available;
}
