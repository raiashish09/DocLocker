package study.jparest.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import study.jparest.entity.User_tbl;
import study.jparest.repository.UserRepo;

@CrossOrigin
@RestController
@RequestMapping(path ="/usersession")
public class UserCon {

	@Autowired
	UserRepo repo;
	
	@PostMapping("/add/{session_id}")
	public String f1(@PathVariable int session_id)
	{
		User_tbl user=new User_tbl();
		user.setSession_id(session_id);
		repo.save(user);
		return "added";
		
	}
}
