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
    private String breedOf;

    @Column(nullable = false)
    private int ageYear;

    @Column(nullable = false)
    private int ageMonth;

    @Column(nullable = false)
    private boolean sex;

    @Column(nullable = false)
    private boolean neutering;

    @Column(nullable = false)
    private boolean identification;

    @Column(nullable = false)
    private String imgUrl;

    public AdoptionThumbnail(AdoptionThumbnailDto dto) {
        this.name = dto.getName();
        this.breedOf = dto.getBreedOf();
        this.ageYear = dto.getAgeYear();
        this.ageMonth = dto.getAgeMonth();
        this.sex = dto.isSex();
        this.neutering = dto.isNeutering();
        this.identification = dto.isIdentification();
        this.imgUrl = dto.getImgUrl();
    }

    public AdoptionThumbnail update(AdoptionThumbnailDto dto) {
        this.name = dto.getName();
        this.breedOf = dto.getBreedOf();
        this.ageYear = dto.getAgeYear();
        this.ageMonth = dto.getAgeMonth();
        this.sex = dto.isSex();
        this.neutering = dto.isNeutering();
        this.identification = dto.isIdentification();
        this.imgUrl = dto.getImgUrl();
        return this;
    }

}
