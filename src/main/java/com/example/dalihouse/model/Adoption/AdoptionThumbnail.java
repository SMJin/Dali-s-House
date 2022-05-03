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

    @Column(nullable = false)
    private String videoUrl;

    public AdoptionThumbnail(AdoptionThumbnailDto dto) {
        this.name = dto.getName();
        this.species = dto.getSpecies();
        this.breedOf = dto.getBreedOf();
        this.entryDate = dto.getEntryDate();
        this.sex = dto.getSex();
        this.age = dto.getAge();
        this.videoUrl = dto.getVideoUrl();
    }

    public AdoptionThumbnail update(AdoptionThumbnailDto dto) {
        this.name = dto.getName();
        this.species = dto.getSpecies();
        this.breedOf = dto.getBreedOf();
        this.entryDate = dto.getEntryDate();
        this.sex = dto.getSex();
        this.age = dto.getAge();
        this.videoUrl = dto.getVideoUrl();
        return this;
    }

}
