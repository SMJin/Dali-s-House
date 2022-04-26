package com.example.dalihouse.dto.Adoption;

import lombok.Getter;

@Getter
public class AdoptionThumbnailDto {
    private String name;
    private String breedOf;
    private int ageYear;
    private int ageMonth;
    private boolean sex;
    private boolean neutering;
    private boolean identification;
    private String imgUrl;
}
