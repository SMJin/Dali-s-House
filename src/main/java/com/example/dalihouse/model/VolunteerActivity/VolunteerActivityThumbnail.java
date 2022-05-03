package com.example.dalihouse.model.VolunteerActivity;

import com.example.dalihouse.dto.VolunteerActivity.VolunteerActivityThumbnailDto;
import com.example.dalihouse.model.Timestamped;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Entity
public class VolunteerActivityThumbnail extends Timestamped {

    @GeneratedValue(strategy = GenerationType.AUTO)
    @Id
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String content;

    @Column(nullable = false)
    private Long authorId;

    @Column(nullable = false)
    private Long startTime;

    @Column(nullable = false)
    private Long endTime;

    @Column(nullable = false)
    private String place;

    @Column(nullable = false)
    private int limitNumOfPeople;

    @Column(nullable = false)
    private String imgUrl;

    public VolunteerActivityThumbnail(VolunteerActivityThumbnailDto dto) {
        this.title = dto.getTitle();
        this.content = dto.getContent();
        this.authorId = dto.getAuthorId();
        this.startTime = dto.getStartTime();
        this.endTime = dto.getEndTime();
        this.place = dto.getPlace();
        this.limitNumOfPeople = dto.getLimitNumOfPeople();
        this.imgUrl = dto.getImgUrl();
    }

    public VolunteerActivityThumbnail update(VolunteerActivityThumbnailDto dto) {
        this.title = dto.getTitle();
        this.content = dto.getContent();
        this.authorId = dto.getAuthorId();
        this.startTime = dto.getStartTime();
        this.endTime = dto.getEndTime();
        this.place = dto.getPlace();
        this.limitNumOfPeople = dto.getLimitNumOfPeople();
        this.imgUrl = dto.getImgUrl();
        return this;
    }

}
