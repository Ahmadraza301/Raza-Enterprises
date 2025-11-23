package com.example.demo.controller;

import com.example.demo.entity.Service;
import com.example.demo.repository.ServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/services")
@CrossOrigin(origins = "http://localhost:3000")
public class ServiceController {

    @Autowired
    private ServiceRepository serviceRepository;

    @GetMapping
    public ResponseEntity<List<Service>> getAllServices() {
        return ResponseEntity.ok(serviceRepository.findByIsActiveTrue());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Service> getServiceById(@PathVariable Long id) {
        return serviceRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/code/{code}")
    public ResponseEntity<Service> getServiceByCode(@PathVariable String code) {
        return serviceRepository.findByCode(code)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/category/{categoryId}")
    public ResponseEntity<List<Service>> getServicesByCategory(@PathVariable Long categoryId) {
        return ResponseEntity.ok(serviceRepository.findByCategoryIdAndIsActiveTrue(categoryId));
    }

    @GetMapping("/search")
    public ResponseEntity<List<Service>> searchServices(@RequestParam String query) {
        return ResponseEntity.ok(serviceRepository.findByNameContainingIgnoreCaseAndIsActiveTrue(query));
    }

    @PostMapping
    public ResponseEntity<Service> createService(@RequestBody Service service) {
        Service savedService = serviceRepository.save(service);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedService);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Service> updateService(@PathVariable Long id, @RequestBody Service serviceDetails) {
        return serviceRepository.findById(id)
                .map(service -> {
                    service.setName(serviceDetails.getName());
                    service.setShortDescription(serviceDetails.getShortDescription());
                    service.setLongDescription(serviceDetails.getLongDescription());
                    service.setBaseFee(serviceDetails.getBaseFee());
                    service.setGovernmentFee(serviceDetails.getGovernmentFee());
                    service.setEstimatedProcessingDays(serviceDetails.getEstimatedProcessingDays());
                    service.setIsActive(serviceDetails.getIsActive());
                    return ResponseEntity.ok(serviceRepository.save(service));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteService(@PathVariable Long id) {
        serviceRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
