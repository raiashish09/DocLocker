package study.jparest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import study.jparest.entity.Req_doc_tbl;
import study.jparest.repository.RequestDocRepository;


@RestController
@RequestMapping(path="/reqdoc")
public class RequestDocController {

	@Autowired
    RequestDocRepository repo;
    
    @GetMapping("/allcategory")
	public List<Req_doc_tbl> f1()
	{
		List<Req_doc_tbl> list=repo.findAll();
		return list;
	}
}
