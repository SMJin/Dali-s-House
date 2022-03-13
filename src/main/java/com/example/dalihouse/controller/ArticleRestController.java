package com.example.dalihouse.controller;

import com.example.dalihouse.model.Article;
import com.example.dalihouse.model.ArticleRequestDto;
import com.example.dalihouse.model.ArticleRepository;
import com.example.dalihouse.service.ArticleService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class ArticleRestController {

    private final ArticleRepository articleRepository;
    private final ArticleService articleService;

    @GetMapping("/api/articles")
    public List<Article> getArticles() {
        return articleRepository.findAll();
    }

    @PostMapping("/api/articles")
    public Article createArticle(@RequestBody ArticleRequestDto requestDto) {
        Article article = new Article(requestDto);
        articleRepository.save(article);
        return article;
    }

    @PutMapping("/api/articles/{id}")
    public Long updateArticle(@PathVariable Long id, @RequestBody ArticleRequestDto requestDto) {
        return articleService.update(id, requestDto);
    }

    @DeleteMapping("/api/article/{id}")
    public Long deleteArticle(@PathVariable Long id) {
        articleRepository.deleteById(id);
        return id;
    }
}
