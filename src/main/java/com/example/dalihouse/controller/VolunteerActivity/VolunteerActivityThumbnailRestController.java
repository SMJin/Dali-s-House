package com.example.dalihouse.controller.VolunteerActivity;

import com.example.dalihouse.model.VolunteerActivity.VolunteerActivityThumbnail;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class VolunteerActivityThumbnailRestController {

    @PostMapping("/api/volunteerActivity/thumbnails")
    public VolunteerActivityThumbnail createVolunteerActivityThumbnail(VolunteerActivityThumbnailDto dto) {
        VolunteerActivityThumbnail volunteerActivityThumbnail = new VolunteerActivityThumbnail(dto);
        return repository.save(volunteerActivityThumbnail)
    }
}
