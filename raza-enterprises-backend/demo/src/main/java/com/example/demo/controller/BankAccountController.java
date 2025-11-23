package com.example.demo.controller;

import com.example.demo.entity.BankAccountApplication;
import com.example.demo.entity.Booking;
import com.example.demo.repository.BankAccountApplicationRepository;
import com.example.demo.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/bank-accounts")
@CrossOrigin(origins = "http://localhost:3000")
public class BankAccountController {

    @Autowired
    private BankAccountApplicationRepository applicationRepository;

    @Autowired
    private BookingRepository bookingRepository;

    @PostMapping("/apply")
    public ResponseEntity<Map<String, Object>> applyForBankAccount(@RequestBody Map<String, Object> request) {
        try {
            // Create booking first
            Booking booking = new Booking();
            booking.setServiceId(1L); // Bank Account Opening service
            booking.setCustomerName((String) request.get("fullName"));
            booking.setCustomerEmail((String) request.get("email"));
            booking.setCustomerPhone((String) request.get("phone"));
            booking.setStatus(Booking.BookingStatus.PENDING);
            
            Booking savedBooking = bookingRepository.save(booking);

            // Create bank account application
            BankAccountApplication application = new BankAccountApplication();
            application.setBookingId(savedBooking.getId());
            application.setApplicantName((String) request.get("fullName"));
            application.setApplicantEmail((String) request.get("email"));
            application.setApplicantPhone((String) request.get("phone"));
            application.setAccountType((String) request.get("accountType"));
            application.setAadhaarNumber((String) request.get("aadhaar"));
            application.setPanNumber((String) request.get("pan"));
            application.setAddress((String) request.get("address"));
            application.setStatus(BankAccountApplication.ApplicationStatus.INITIATED);

            BankAccountApplication savedApplication = applicationRepository.save(application);

            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("referenceNo", savedBooking.getReferenceNo());
            response.put("applicationId", savedApplication.getId());
            response.put("message", "Application submitted successfully");

            return ResponseEntity.status(HttpStatus.CREATED).body(response);
        } catch (Exception e) {
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("success", false);
            errorResponse.put("message", "Failed to submit application: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
        }
    }

    @GetMapping
    public ResponseEntity<List<BankAccountApplication>> getAllApplications() {
        return ResponseEntity.ok(applicationRepository.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<BankAccountApplication> getApplicationById(@PathVariable Long id) {
        return applicationRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/email/{email}")
    public ResponseEntity<List<BankAccountApplication>> getApplicationsByEmail(@PathVariable String email) {
        return ResponseEntity.ok(applicationRepository.findByApplicantEmailOrderByCreatedAtDesc(email));
    }
}
