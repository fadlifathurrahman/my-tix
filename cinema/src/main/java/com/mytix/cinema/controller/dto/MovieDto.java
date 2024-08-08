package com.mytix.cinema.controller.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MovieDto {

    private String title;
    private Integer duration;
    private String director;
    private String producer;
    private String casts;
    private String synopsis;
    private String posterUrl;
    private String trailerUrl;
    private List<Integer> genreIds;
}