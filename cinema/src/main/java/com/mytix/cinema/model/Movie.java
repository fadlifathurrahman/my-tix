package com.mytix.cinema.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Data
@Entity
public class Movie {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @ManyToMany(mappedBy = "movies")
    @Column(nullable = false)
    private List<Genre> genre;

    @Column(nullable = false)
    private Integer duration;

    @Column(nullable = false)
    private String director;

    @Column(nullable = false)
    private String producer;

    @Column(nullable = false)
    private String casts;

    @Column(nullable = false)
    private String synopsis;

    @Column(nullable = false)
    private String posterUrl;

    @Column(nullable = false)
    private String trailerUrl;

}
