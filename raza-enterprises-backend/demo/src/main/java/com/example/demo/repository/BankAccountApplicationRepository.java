package com.example.demo.repository;

import com.example.demo.entity.BankAccountApplication;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BankAccountApplicationRepository extends JpaRepository<BankAccountApplication, Long> {
    Optional<BankAccountApplication> findByBookingId(Long bookingId);
    List<BankAccountApplication> findByApplicantEmailOrderByCreatedAtDesc(String email);
    List<BankAccountApplication> findByStatusOrderByCreatedAtDesc(BankAccountApplication.ApplicationStatus status);
}
