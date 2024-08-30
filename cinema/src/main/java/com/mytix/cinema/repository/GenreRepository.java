package com.mytix.cinema.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.mytix.cinema.model.Genre;

public interface GenreRepository 
extends JpaRepository<Genre, Integer>{
    @Query("select g from Genre g where g.genreName != 'deleted_genre'")
    List<Genre> findAllNotDeleted();
    @Query("select g from Genre g where g.genreName=:genreName")
    Optional<Genre> findByGenreName(String genreName);
}
