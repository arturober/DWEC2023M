package com.daw.springproducts.products.dto;

import java.util.List;

import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.daw.springproducts.products.Product;

import lombok.Data;

@Data
public class ProductsResponseDTO {
    private final List<Product> products;

    public static ProductsResponseDTO from(List<Product> products) {
        String urlServidor = ServletUriComponentsBuilder
                .fromCurrentContextPath()
                .build()
                .toUriString();
        products.forEach(p -> {
            p.setImageUrl(urlServidor + "/" + p.getImageUrl());
        });
        return new ProductsResponseDTO(products);
    }
}
