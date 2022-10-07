package study.jparest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import study.jparest.entity.Doc_cat_tbl;

import study.jparest.repository.DocCategoryRepository;


@CrossOrigin
@RestController
@RequestMapping(path ="/category")
public class DocCategoryController {

	 @Autowired
	    DocCategoryRepository repo;
	    
	    @GetMapping("/allcategory")
		public List<Doc_cat_tbl> f1()
		{
			List<Doc_cat_tbl> list=repo.findAll();
			return list;
		}
}
