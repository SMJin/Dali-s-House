package com.example.dalihouse.service;

import com.example.dalihouse.model.Article;
import com.example.dalihouse.repository.ArticleRepository;
import com.example.dalihouse.dto.ArticleRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@RequiredArgsConstructor
@Service
public class ArticleService {

    private final ArticleRepository articleRepository;

    @Transactional
    public Long update(Long id, ArticleRequestDto requestDto) {
        Article article = articleRepository.findById(id).orElseThrow(
                () -> new NullPointerException("존재하지 않는 게시물입니다.")
        );
        article.update(requestDto);
        return id;
    }

}
