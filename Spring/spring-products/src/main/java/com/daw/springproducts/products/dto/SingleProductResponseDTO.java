package com.daw.springproducts.products.dto;

import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.daw.springproducts.products.Product;

import lombok.Data;

@Data
public class SingleProductResponseDTO {
    private final Product product;

    public static SingleProductResponseDTO from(Product product) {
        String urlServidor = ServletUriComponentsBuilder
                .fromCurrentContextPath()
                .build()
                .toUriString();
        product.setImageUrl(urlServidor + "/" + product.getImageUrl());
        return new SingleProductResponseDTO(product);
    }
}
