package com.example.demo.repository;

import com.example.demo.entity.Service;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ServiceRepository extends JpaRepository<Service, Long> {
    Optional<Service> findByCode(String code);
    List<Service> findByIsActiveTrue();
    List<Service> findByCategoryIdAndIsActiveTrue(Long categoryId);
    List<Service> findByNameContainingIgnoreCaseAndIsActiveTrue(String name);
}
