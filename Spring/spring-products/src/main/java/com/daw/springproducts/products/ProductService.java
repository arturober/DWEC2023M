package com.daw.springproducts.products;

import java.util.List;
import java.util.Optional;

import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;

import com.daw.springproducts.utils.ImageUtils;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProductService {
    private final ProductRepository productRepository;
    private final ImageUtils imageUtils;

    public List<Product> findAll() {
        return productRepository.findAll();
    }

    public Optional<Product> findById(int id) {
        return productRepository.findById(id);
    }

    public Product insert(@NonNull Product p) {
        String imgPath = imageUtils.saveImageBase64("products", p.getImageUrl());
        p.setImageUrl(imgPath);
        return productRepository.save(p);
    }

    public void delete(int id) {
        productRepository.deleteById(id);
    }

    public int updateRating(int id, int rating) {
        // Lanza NoSuchElementException si no lo encuentra al llamar a get()
        Product p = productRepository.findById(id).get();
        p.setRating(rating);
        productRepository.save(p);
        return p.getRating();
    }
}
