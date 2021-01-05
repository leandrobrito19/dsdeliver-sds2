package com.devsuperior.dsdeliver.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsdeliver.entities.product;

public interface ProductRepository  extends JpaRepository<product, Long>{

	List<product> findAllByOrderByNameAsc();
}
