package com.example.dalihouse.dto.VolunteerActivity;

import lombok.Getter;

@Getter
public class VolunteerActivityThumbnailDto {
    private String title;
    private String content;
    private Long authorId;
    private Long startTime;
    private Long endTime;
    private String place;
    private int limitNumOfPeople;
    private String imgUrl;
}
