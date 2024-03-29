package com.daw.springproducts.products;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.daw.springproducts.products.dto.ProductsResponseDTO;
import com.daw.springproducts.products.dto.SingleProductResponseDTO;
import com.daw.springproducts.products.dto.UpdateRatingDTO;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/products")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class ProductController {
    private final ProductService productService;

    @GetMapping
    public ProductsResponseDTO findAll() {
        var products = productService.findAll();
        return ProductsResponseDTO.from(products);
    }

    @GetMapping("{id}")
    public ResponseEntity<SingleProductResponseDTO> findById(@PathVariable int id) {
        var product = productService.findById(id);
        return product
                .map(SingleProductResponseDTO::from)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED) // 201
    public SingleProductResponseDTO insert(@RequestBody @NonNull Product product) {
        Product insertedProd = productService.insert(product);
        return SingleProductResponseDTO.from(insertedProd);
    }

    @DeleteMapping("{id}")
    @ResponseStatus(code = HttpStatus.NO_CONTENT) // 204
    public void delete(@PathVariable int id) {
        productService.delete(id);
    }

    @PutMapping("{id}/rating")
    public ResponseEntity<UpdateRatingDTO> putMethodName(
            @PathVariable int id, @RequestBody UpdateRatingDTO ratingDto) {
        try {
            int rating = productService.updateRating(id, ratingDto.getRating());
            return ResponseEntity.ok(new UpdateRatingDTO(rating));
        } catch (NoSuchElementException e) {
            return ResponseEntity.notFound().build();
        }
    }
}
