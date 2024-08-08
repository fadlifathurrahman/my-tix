package com.mytix.cinema.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.mytix.cinema.model.Movie;

public interface MovieRepository 
extends JpaRepository<Movie, Integer>{

    @Query("select m from Movie m where m.id in (select s.movie.id from Schedule s)")
    List<Movie> findMovieBySchedule();
}
