package study.jparest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import study.jparest.entity.Request_tbl;
import study.jparest.repository.RequestRepository;

@CrossOrigin
@RestController
@RequestMapping(path ="/request")
public class RequestController {

	 @Autowired
	    RequestRepository repo;
	    
	    @GetMapping("/allcategory")
		public List<Request_tbl> f1()
		{
			List<Request_tbl> list=repo.findAll();
			return list;
		}
}
