package com.example.dalihouse.repository;

import com.example.dalihouse.model.Article;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ArticleRepository extends JpaRepository<Article, Long> {

}
