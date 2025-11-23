package com.example.demo.entity;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "services")
public class Service {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "category_id")
    private Long categoryId;
    
    @Column(unique = true, length = 50)
    private String code;
    
    @Column(nullable = false, length = 200)
    private String name;
    
    @Column(length = 500)
    private String shortDescription;
    
    @Column(columnDefinition = "TEXT")
    private String longDescription;
    
    @Column(name = "estimated_processing_days")
    private Integer estimatedProcessingDays = 0;
    
    @Column(name = "base_fee", precision = 12, scale = 2)
    private BigDecimal baseFee = BigDecimal.ZERO;
    
    @Column(name = "government_fee", precision = 12, scale = 2)
    private BigDecimal governmentFee = BigDecimal.ZERO;
    
    @Column(name = "requires_appointment")
    private Boolean requiresAppointment = false;
    
    @Column(name = "is_active")
    private Boolean isActive = true;
    
    @Column(length = 50)
    private String icon;
    
    @Column(length = 200)
    private String tags; // Comma-separated
    
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;
    
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
    
    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
        updatedAt = LocalDateTime.now();
    }
    
    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    
    public Long getCategoryId() { return categoryId; }
    public void setCategoryId(Long categoryId) { this.categoryId = categoryId; }
    
    public String getCode() { return code; }
    public void setCode(String code) { this.code = code; }
    
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    
    public String getShortDescription() { return shortDescription; }
    public void setShortDescription(String shortDescription) { this.shortDescription = shortDescription; }
    
    public String getLongDescription() { return longDescription; }
    public void setLongDescription(String longDescription) { this.longDescription = longDescription; }
    
    public Integer getEstimatedProcessingDays() { return estimatedProcessingDays; }
    public void setEstimatedProcessingDays(Integer estimatedProcessingDays) { this.estimatedProcessingDays = estimatedProcessingDays; }
    
    public BigDecimal getBaseFee() { return baseFee; }
    public void setBaseFee(BigDecimal baseFee) { this.baseFee = baseFee; }
    
    public BigDecimal getGovernmentFee() { return governmentFee; }
    public void setGovernmentFee(BigDecimal governmentFee) { this.governmentFee = governmentFee; }
    
    public Boolean getRequiresAppointment() { return requiresAppointment; }
    public void setRequiresAppointment(Boolean requiresAppointment) { this.requiresAppointment = requiresAppointment; }
    
    public Boolean getIsActive() { return isActive; }
    public void setIsActive(Boolean isActive) { this.isActive = isActive; }
    
    public String getIcon() { return icon; }
    public void setIcon(String icon) { this.icon = icon; }
    
    public String getTags() { return tags; }
    public void setTags(String tags) { this.tags = tags; }
    
    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
    
    public LocalDateTime getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(LocalDateTime updatedAt) { this.updatedAt = updatedAt; }
}
