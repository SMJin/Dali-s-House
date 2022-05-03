package com.example.dalihouse.model.Adoption;

import com.example.dalihouse.dto.Adoption.AdoptionThumbnailDto;
import com.example.dalihouse.model.Timestamped;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Entity
public class AdoptionThumbnail extends Timestamped {

    @GeneratedValue(strategy = GenerationType.AUTO)
    @Id
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String species;

    @Column(nullable = false)
    private String breedOf;

    @Column(nullable = false)
    private String entryDate;

    @Column(nullable = false)
    private String sex;

    @Column(nullable = false)
    private String age;

    private double weight;

    private String adoptionStatus;

    private String tempProtect;

    private String videoUrl;

    private String imgUrl;

    @Column(nullable = false)
    private String details;

    public AdoptionThumbnail(AdoptionThumbnailDto dto) {
        this.name = dto.getName();
        this.species = dto.getSpecies();
        this.breedOf = dto.getBreedOf();
        this.entryDate = dto.getEntryDate();
        this.sex = dto.getSex();
        this.age = dto.getAge();
        this.weight = dto.getWeight();
        this.adoptionStatus = dto.getAdoptionStatus();
        this.tempProtect = dto.getTempProtect();
        this.videoUrl = dto.getVideoUrl();
        String youtube = "youtu.be/";
        String videoId = videoUrl.substring(videoUrl.lastIndexOf(youtube)+youtube.length());
        this.imgUrl = "https://img.youtube.com/vi/"+videoId+"/mqdefault.jpg";
        this.details = dto.getDetails();
    }

    public AdoptionThumbnail update(AdoptionThumbnailDto dto) {
        this.name = dto.getName();
        this.species = dto.getSpecies();
        this.breedOf = dto.getBreedOf();
        this.entryDate = dto.getEntryDate();
        this.sex = dto.getSex();
        this.age = dto.getAge();
        this.weight = dto.getWeight();
        this.adoptionStatus = dto.getAdoptionStatus();
        this.tempProtect = dto.getTempProtect();
        this.videoUrl = dto.getVideoUrl();
        String youtube = "youtu.be/";
        String videoId = videoUrl.substring(videoUrl.lastIndexOf(youtube)+youtube.length());
        this.imgUrl = "https://img.youtube.com/vi/"+videoId+"/mqdefault.jpg";
        this.details = dto.getDetails();
        return this;
    }

}
