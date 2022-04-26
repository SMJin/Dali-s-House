package com.example.dalihouse.controller.Adoption;

import com.example.dalihouse.dto.Adoption.AdoptionThumbnailDto;
import com.example.dalihouse.model.Adoption.AdoptionThumbnail;
import com.example.dalihouse.repository.Adoption.AdoptionThumbnailRepository;
import com.example.dalihouse.service.Adoption.AdoptionThumbnailService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class AdoptionThumbnailRestController {
    private final AdoptionThumbnailRepository repository;
    private final AdoptionThumbnailService service;

    @PostMapping("/api/adoptionThumbnails")
    public AdoptionThumbnail createAdoptionThumbnail(@RequestBody AdoptionThumbnailDto dto) {
        AdoptionThumbnail adoptionThumbnail = new AdoptionThumbnail(dto);
        return repository.save(adoptionThumbnail);
    }

    @GetMapping("/api/adoptionThumbnails")
    public List<AdoptionThumbnail> getAdoptionThumbnail() {
        return repository.findAll();
    }

    @PutMapping("/api/adoptionThumbnails/{id}")
    public AdoptionThumbnail updateAdoptionThumbnail(@PathVariable Long id, @RequestBody AdoptionThumbnailDto dto) {
        return service.update(id, dto);
    }

    @DeleteMapping("/api/adoptionThumbnails/{id}")
    public Long deleteAdoptionThumbnail(@PathVariable Long id) {
        repository.deleteById(id);
        return id;
    }
}
