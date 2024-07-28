package com.mytix.cinema.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.mytix.cinema.model.Genre;

public interface GenreRepository 
extends JpaRepository<Genre, Long>{
    
    @Query("select g from Genre g where g.genreName=:genreName")
    Optional<Genre> findByGenreName(String genreName);
}
