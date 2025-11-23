package com.example.demo.controller;

import com.example.demo.entity.Branch;
import com.example.demo.repository.BranchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/branches")
@CrossOrigin(origins = "http://localhost:3000")
public class BranchController {

    @Autowired
    private BranchRepository branchRepository;

    @GetMapping
    public ResponseEntity<List<Branch>> getAllBranches() {
        return ResponseEntity.ok(branchRepository.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Branch> getBranchById(@PathVariable Long id) {
        return branchRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/city/{city}")
    public ResponseEntity<List<Branch>> getBranchesByCity(@PathVariable String city) {
        return ResponseEntity.ok(branchRepository.findByCity(city));
    }

    @PostMapping
    public ResponseEntity<Branch> createBranch(@RequestBody Branch branch) {
        Branch savedBranch = branchRepository.save(branch);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedBranch);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Branch> updateBranch(@PathVariable Long id, @RequestBody Branch branchDetails) {
        return branchRepository.findById(id)
                .map(branch -> {
                    branch.setName(branchDetails.getName());
                    branch.setAddress(branchDetails.getAddress());
                    branch.setCity(branchDetails.getCity());
                    branch.setState(branchDetails.getState());
                    branch.setPincode(branchDetails.getPincode());
                    branch.setContactEmail(branchDetails.getContactEmail());
                    branch.setContactPhone(branchDetails.getContactPhone());
                    return ResponseEntity.ok(branchRepository.save(branch));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBranch(@PathVariable Long id) {
        branchRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
