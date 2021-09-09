package ch.zli.m223.punchclock.controller;

import ch.zli.m223.punchclock.domain.User;
import ch.zli.m223.punchclock.service.UserService;

import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.awt.*;
import java.util.List;

@Path("/users")
public class UserController {

    @Inject
    UserService userService;

    @SuppressWarnings("unchecked")
    public List<User> list(){
        return userService.findAll();
    }

    @PUT
    @Produces(MediaType.APPLICATION_JSON)
    public void update(User user){userService.updateUser(user);}
}
