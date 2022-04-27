package com.example.dalihouse.controller.VolunteerActivity;

import com.example.dalihouse.dto.VolunteerActivity.VolunteerActivityThumbnailDto;
import com.example.dalihouse.model.VolunteerActivity.VolunteerActivityThumbnail;
import com.example.dalihouse.repository.VolunteerActivity.VolunteerActivityThumbnailRepository;
import com.example.dalihouse.service.VolunteerActivity.VolunteerActivityThumbnailService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class VolunteerActivityThumbnailRestController {

    private final VolunteerActivityThumbnailRepository repository;
    private final VolunteerActivityThumbnailService service;

    @PostMapping("/api/volunteerActivity/thumbnails")
    public VolunteerActivityThumbnail createVolunteerActivityThumbnail(VolunteerActivityThumbnailDto dto) {
        VolunteerActivityThumbnail volunteerActivityThumbnail = new VolunteerActivityThumbnail(dto);
        return repository.save(volunteerActivityThumbnail);
    }

    @GetMapping("/api/volunteerActivity/thumbnails")
    public List<VolunteerActivityThumbnail> getVolunteerActivityThumbnail() {
        return repository.findAll();
    }

    @PutMapping("/api/VolunteerActivity/thumbnails/{id}")
    public VolunteerActivityThumbnail updateVolunteerActivityThumbnail(@PathVariable Long id, @RequestBody VolunteerActivityThumbnailDto dto) {
        return service.update(id, dto);
    }

    @DeleteMapping("/api/VolunteerActivity/thumbnails/{id}")
    public Long deleteVolunteerActivityThumbnail(@PathVariable Long id) {
        repository.deleteById(id);
        return id;
    }
}
