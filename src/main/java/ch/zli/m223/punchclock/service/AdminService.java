package ch.zli.m223.punchclock.service;

import ch.zli.m223.punchclock.controller.SecuredController;
import ch.zli.m223.punchclock.domain.Admin;
import ch.zli.m223.punchclock.domain.Category;
import ch.zli.m223.punchclock.domain.User;

import javax.persistence.EntityManager;
import javax.transaction.TransactionScoped;
import javax.transaction.Transactional;

public class AdminService extends SecuredController {

    private EntityManager entityManager;

    public AdminService() {
    }

    @Transactional
    public User createUser(User user){
        entityManager.persist(user);
        return user;
    }

    @Transactional
    public void deleteUser(long id){
        User user = entityManager.find(User.class, id);
        entityManager.remove(user);
    }

    @Transactional
    public Category createCategory(Category category){
        entityManager.persist(category);
        return category;
    }

    @Transactional
    public void updateCategory(Category category){
        entityManager.merge(category);
    }

    @Transactional
    public void deleteCategory(long id){
        entityManager.remove(id);
    }
}
