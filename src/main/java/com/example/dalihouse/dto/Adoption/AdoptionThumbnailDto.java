package com.example.dalihouse.dto.Adoption;

import lombok.Getter;
import org.json.JSONObject;

@Getter
public class AdoptionThumbnailDto {
    private String name;
    private String species;
    private String breedOf;
    private String entryDate;
    private String sex;
    private String age;
    private String videoUrl;

    public AdoptionThumbnailDto(JSONObject itemJson) {
        this.name = itemJson.getString("NM");
        this.species = itemJson.getString("SPCS");
        this.breedOf = itemJson.getString("BREEDS");
        this.entryDate = itemJson.getString("ENTRNC_DATE");
        this.sex = itemJson.getString("SEXDSTN");
        this.age = itemJson.getString("AGE");
        this.videoUrl = itemJson.getString("INTRCN_CN");
    }
}
