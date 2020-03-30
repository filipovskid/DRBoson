package com.filipovski.drboson.drboson.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.boot.jackson.JsonObjectSerializer;

import javax.persistence.*;
import java.util.UUID;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class Run {
    @Id
    @GeneratedValue(generator = "uuid2")
    private UUID id;

    private String name;

    private String description;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonBackReference
    private Project project;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonBackReference
    private Dataset dataset;
}