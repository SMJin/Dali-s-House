package com.example.dalihouse.service.VolunteerActivity;

import com.example.dalihouse.dto.VolunteerActivity.VolunteerActivityThumbnailDto;
import com.example.dalihouse.model.VolunteerActivity.VolunteerActivityThumbnail;
import com.example.dalihouse.repository.VolunteerActivity.VolunteerActivityThumbnailRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@RequiredArgsConstructor
@Service
public class VolunteerActivityThumbnailService {

    VolunteerActivityThumbnailRepository repository;

    @Transactional
    public VolunteerActivityThumbnail update(Long id, VolunteerActivityThumbnailDto dto) {
        VolunteerActivityThumbnail volunteerActivityThumbnail = repository.findById(id).orElseThrow(
                () -> new NullPointerException("일치하는 게시글이 없습니다.")
        );
        return volunteerActivityThumbnail.update(dto);
    }
}
