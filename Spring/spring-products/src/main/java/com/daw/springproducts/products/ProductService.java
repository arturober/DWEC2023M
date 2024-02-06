package com.daw.springproducts.products;

import java.util.List;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProductService {
    private final ProductRespository productRespository;

    public List<Product> findAll() {
        return productRespository.findAll();
    }
}
