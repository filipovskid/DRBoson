package com.filipovski.drboson.drboson.config;

import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import lombok.Data;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

import javax.annotation.PostConstruct;

@Data
@Configuration
@PropertySource("classpath:security/aws.properties")
public class AmazonS3Config {
    @Value("${aws.AccessKeyId}")
    private String accessKeyId;

    @Value("${aws.SecretKey}")
    private String secretKey;

    @Value("${aws.datasetBucketName}")
    private String datasetBucketName;

    @Value("${aws.imagesBucketName}")
    private String imagesBucketName;

    @Value("${aws.runFilesBucketName}")
    private String runFilesBucketName;
}
