package study.jparest.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import study.jparest.entity.User_info_tbl;

import study.jparest.repository.UserRepository;

@CrossOrigin
@RestController
@RequestMapping(path ="/user")
public class UserController {
  
    
    @Autowired
    UserRepository repo;
    
    @GetMapping("/allusers")
	public List<User_info_tbl> f1()
	{
		
		List<User_info_tbl> list=repo.findAll();
		
		return list;
	}
	
	 @GetMapping("/users/{user_id}")
		public Optional<User_info_tbl> f5(@PathVariable int user_id)
		{
			Optional<User_info_tbl> list=repo.findById(user_id);
			
			return list;
		}
    
    @PostMapping("/adduser") //when user signup this method will save his record indb
	public String f2(@RequestBody User_info_tbl u)
	{
		
       User_info_tbl obj=new User_info_tbl(u.getFirstName(),u.getLastName(),u.getUserName(),u.getPassword(),u.getEmail(),u.getMobileNo());
        
       repo.save(obj);
		
		return "insert user";
	}
	
    
    @DeleteMapping("removeuser/{user_id}")
	public String f4(@PathVariable("user_id") int user_id)
	{
		repo.deleteById(user_id);
		return "user deleted";
	}
    
    @PostMapping("/signin")
	public Object f3(@RequestBody User_info_tbl u)
	{
		
      List<User_info_tbl> list=repo.findAll();
      String status = "";
      Object obj = null;
     // if(u.getUserName() !=null) {
    	  
        for(User_info_tbl user:list)
        {
    	   if(user.getUserName().equals(u.getUserName()) && user.getPassword().equals(u.getPassword()))
    	   {
    		   
    		   obj = user;
    		  return obj;
    	   }
    	   
    	  
        }
        status = "Signin Invalid";
		return status;
	}
    
}