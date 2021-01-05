package com.devsuperior.dsdeliver.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsdeliver.dto.productDTO;
import com.devsuperior.dsdeliver.entities.product;
import com.devsuperior.dsdeliver.repositories.ProductRepository;

@Service
public class productService {
	@Autowired
	private ProductRepository repository;
	@Transactional(readOnly = true)
	public List<productDTO> findAll(){
		List<product> list = repository.findAllByOrderByNameAsc();
		return list.stream().map(x -> new productDTO(x)).collect(Collectors.toList());
	}
}
