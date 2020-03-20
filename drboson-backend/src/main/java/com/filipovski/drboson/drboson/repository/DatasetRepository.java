package com.filipovski.drboson.drboson.repository;

import com.filipovski.drboson.drboson.model.Dataset;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface DatasetRepository extends JpaRepository<Dataset, UUID> {
    List<Dataset> findDatasetsByProjectId(UUID projectId);
}
