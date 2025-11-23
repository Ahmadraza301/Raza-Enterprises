package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.sql.DataSource;
import java.sql.Connection;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/health")
public class HealthController {

    @Autowired
    private DataSource dataSource;

    @GetMapping("/db-status")
    public ResponseEntity<Map<String, Object>> checkDatabaseConnection() {
        Map<String, Object> response = new HashMap<>();
        
        try (Connection connection = dataSource.getConnection()) {
            if (connection != null && !connection.isClosed()) {
                response.put("status", "SUCCESS");
                response.put("message", "Database connected successfully!");
                response.put("database", connection.getCatalog());
                response.put("url", connection.getMetaData().getURL());
                response.put("username", connection.getMetaData().getUserName());
                return ResponseEntity.ok(response);
            } else {
                response.put("status", "FAILED");
                response.put("message", "Database connection is closed");
                return ResponseEntity.status(500).body(response);
            }
        } catch (Exception e) {
            response.put("status", "ERROR");
            response.put("message", "Failed to connect to database");
            response.put("error", e.getMessage());
            return ResponseEntity.status(500).body(response);
        }
    }

    @GetMapping
    public ResponseEntity<Map<String, String>> healthCheck() {
        Map<String, String> response = new HashMap<>();
        response.put("status", "UP");
        response.put("application", "Raza Enterprise Backend");
        return ResponseEntity.ok(response);
    }
}
