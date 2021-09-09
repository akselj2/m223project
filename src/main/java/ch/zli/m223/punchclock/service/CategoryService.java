package ch.zli.m223.punchclock.service;

import ch.zli.m223.punchclock.domain.Category;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

public class CategoryService {
    private EntityManager entityManager;

    public CategoryService(){}

    @Transactional
    public Category createCategory(Category category){
        entityManager.persist(category);
        return category;
    }

    @Transactional
    public void deleteCategory(Category category){
        entityManager.persist(category);
    }
}
