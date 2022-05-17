package com.example.dalihouse.dto.Adoption;

import lombok.Getter;
import org.json.JSONObject;

import java.io.File;

@Getter
public class AdoptionThumbnailDto {
    private String name;
    private String species;
    private String breedOf;
    private String entryDate;
    private String sex;
    private String age;
    private double weight;
    private String adoptionStatus;
    private String tempProtect;
    private String videoUrl;
    private String imgUrl;
    private String details;

    public AdoptionThumbnailDto(JSONObject itemJson) {
        this.name = itemJson.getString("NM");
        this.species = itemJson.getString("SPCS");
        this.breedOf = itemJson.getString("BREEDS");
        this.entryDate = itemJson.getString("ENTRNC_DATE");
        this.sex = itemJson.getString("SEXDSTN");
        this.age = itemJson.getString("AGE");
        this.weight = itemJson.getDouble("BDWGH");
        this.adoptionStatus = itemJson.getString("ADP_STTUS");
        this.tempProtect = itemJson.getString("TMPR_PRTC_STTUS");
        this.videoUrl = itemJson.getString("INTRCN_MVP_URL");
        if (videoUrl.equals("")) {
            this.imgUrl = "https://my-dallihouse-bucket.s3.ap-northeast-2.amazonaws.com/icon.png";
        } else {
            String youtube = "youtu.be/";
            String videoId = videoUrl.substring(videoUrl.lastIndexOf(youtube)+youtube.length());
//            System.out.println("videoId ::::: " + videoId);
            this.imgUrl = "https://img.youtube.com/vi/"+videoId+"/mqdefault.jpg";
        }

        this.details = itemJson.getString("INTRCN_CN");
    }
}
