package com.example.dalihouse.model.VolunteerActivity;

import javax.persistence.*;

@Entity
public class VolunteerActivityThumbnail {

    @GeneratedValue(strategy = GenerationType.AUTO)
    @Id
    private Long id;

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

}
