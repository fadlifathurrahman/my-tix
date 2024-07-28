package com.mytix.cinema.controller;

import java.time.LocalDateTime;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mytix.cinema.controller.dto.GenreDto;
import com.mytix.cinema.model.Genre;
import com.mytix.cinema.repository.GenreRepository;

@RestController
@CrossOrigin
@RequestMapping("api/genre")
public class GenreController {

    GenreRepository genreRepository;

    public GenreController(GenreRepository genreRepository) {

        this.genreRepository = genreRepository;
    }

    @GetMapping("/find-all")
    public Object findAll() {

        return genreRepository.findAll();
    }

    @GetMapping("/{id}")
    public Object getById(@PathVariable("id") Long id) {

        Genre genre = genreRepository.findById(id).orElse(null);
        if (genre == null) {
            return ResponseEntity.badRequest().body("Id invalid");
        }
        return genreRepository.findById(id).orElse(null);
    }

    @PostMapping("/add-genre")
    public Object create(@RequestBody GenreDto genreDto) {

        if (genreRepository.findByGenreName(genreDto.getGenreName()).isPresent()) {
            return ResponseEntity.badRequest().body("Genre already exists");
        }

        Genre genre = new Genre();
        genre.setGenreName(genreDto.getGenreName());
        return genreRepository.save(genre);
    }

    @PutMapping("edit-genre/{id}")
    public Object update(@PathVariable("id") Long id,
            @RequestBody GenreDto genreDto) {

        Genre genre = genreRepository.findById(id).orElse(null);
        if (genre == null) {
            return ResponseEntity.badRequest().body("Id invalid");
        }
        if (genreRepository.findByGenreName(genreDto.getGenreName()).isPresent()) {
            return ResponseEntity.badRequest().body("Genre already exists");
        }
        genre.setGenreName(genreDto.getGenreName());
        genre = genreRepository.save(genre);
        return ResponseEntity.ok("Genre has been successfully edited");
    }

    @DeleteMapping("delete-genre/{id}")
    public Object delete(@PathVariable("id") Long id) {

        Genre genre = genreRepository.findById(id).orElse(null);
        if (genre == null || genre.getDeletedAt() != null) {
            return ResponseEntity.badRequest().body("Id invalid");
        }
        genre.setDeletedAt(LocalDateTime.now());
        genreRepository.save(genre);
        return ResponseEntity.ok("Genre has been successfully deleted");
    }
}