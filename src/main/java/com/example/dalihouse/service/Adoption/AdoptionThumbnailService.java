package com.example.dalihouse.service.Adoption;

import com.example.dalihouse.dto.Adoption.AdoptionThumbnailDto;
import com.example.dalihouse.model.Adoption.AdoptionThumbnail;
import com.example.dalihouse.repository.Adoption.AdoptionThumbnailRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@RequiredArgsConstructor
@Service
public class AdoptionThumbnailService {

    private final AdoptionThumbnailRepository repository;

    @Transactional
    public AdoptionThumbnail update(Long id, AdoptionThumbnailDto dto) {
        AdoptionThumbnail adoptionThumbnail = repository.findById(id).orElseThrow(
                () -> new NullPointerException("아이디가 존재하지 않습니다.")
        );
        return adoptionThumbnail.update(dto);
    }
}
