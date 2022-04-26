package com.example.dalihouse.repository.Adoption;

import com.example.dalihouse.model.Adoption.AdoptionThumbnail;
import org.springframework.data.jpa.repository.JpaRepository;

//https://docs.spring.io/spring-data/jpa/docs/current/reference/html/#jpa.query-methods

public interface AdoptionThumbnailRepository extends JpaRepository<AdoptionThumbnail, Long> {
//    List<AdoptionThumbnail> findAllByOrderByModifiedAtDesc();
}
