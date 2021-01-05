package com.devsuperior.dsdeliver.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dsdeliver.dto.productDTO;
import com.devsuperior.dsdeliver.services.productService;

@RestController
@RequestMapping(value = "/products")
public class productController {

	@Autowired
	private productService service;
	
	@GetMapping
	public ResponseEntity<List<productDTO>> findAll() {
		List<productDTO> list = service.findAll();
		return ResponseEntity.ok().body(list);
	}
	
}