package ch.zli.m223.punchclock.service;

import ch.zli.m223.punchclock.domain.User;

import javax.inject.Inject;
import javax.persistence.EntityManager;
import java.util.List;

public class UserService {

    @Inject
    EntityManager entityManager;

    public UserService() {

    }

    public List<User> findAll(){
        var query = entityManager.createQuery("FROM User");
        return query.getResultList();
    }

    public void updateUser(User user){
        entityManager.merge(user);
    }
}
