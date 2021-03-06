package com.example.dalihouse.controller.Adoption;

import com.example.dalihouse.dto.Adoption.AdoptionThumbnailDto;
import com.example.dalihouse.utils.SeoulOpenApi;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class SearchSeoulOpenAPIController {

    private final SeoulOpenApi seoulOpenApi;

    @GetMapping("/api/adoptionThumbnails/{startIdx}/{endIdx}")
    public List<AdoptionThumbnailDto> getAdoptionThumbnail(@PathVariable int startIdx, @PathVariable int endIdx) {
        String result = seoulOpenApi.search(startIdx, endIdx);
        return seoulOpenApi.fromJSONtoItems(result);
    }

}
