package study.jparest.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import study.jparest.entity.Folder_info_tbl;
import study.jparest.entity.User_info_tbl;
import study.jparest.entity.User_tbl;
import study.jparest.repository.DocumentRepository;
import study.jparest.repository.FolderRepo;
import study.jparest.repository.FolderRepository;
import study.jparest.repository.UserRepo;
import study.jparest.repository.UserRepository;

@Controller
public class FolderController1 {

	@Autowired
	FolderRepo repo;
	
	@Autowired
	UserRepository repo1; //user info table
	
	@Autowired
	UserRepo repo2; // only id table
	
	@Autowired
	FolderRepository repo3; //folder table repo...which has
	                        //userid foldername and folder id
	
	@Autowired
	DocumentRepository repo4; //doc_info_tbl...which has folder id as mul
	                          //main table of doc storage
	
	@GetMapping("/createfolder")
	public String getFolder(Model model,HttpSession session)
	{
		int id=repo2.getid();
		List<User_tbl> user1=new ArrayList<User_tbl>();
		int value=0;
		 user1 =repo2.findAll();
		 for(User_tbl u:user1)
		 {
			 if(u.getId()==id)
			 {
				 value=u.getSession_id(); //it will give user id of person logged in
				 break;
			 }
		 }
		System.out.println(value);
		
		List<Folder_info_tbl> list = repo3.findByfId(value); //native query fired 
		                              //can be seen in folderREpository
	
	                  //this query will give all folder list of corresponding user id
		model.addAttribute("list", list);
		
	
		
		session.setAttribute("user_id",value );
		
		return "FolderHome";
	}
	
	@PostMapping("/create")
	public String CreateFolder(@RequestParam("folName") String folName,RedirectAttributes ra,HttpServletRequest request) throws IOException
	{
		
		HttpSession session=request.getSession();
		int id=(int) session.getAttribute("user_id");
		
		System.out.println("session"+id);
		
		
    
		User_info_tbl u=repo1.findById(id).get();
    	Folder_info_tbl obj=new Folder_info_tbl(folName,u);
    	
         repo.save(obj);
		
		
		ra.addFlashAttribute("message1", "The Folder has been Created");
		return "redirect:/createfolder";
	}
	
	
	@GetMapping("/delete")
	public String DeleteFolder(@RequestParam("fol_id") int fol_id,RedirectAttributes ra) throws IOException
	{
		int id=fol_id;
		repo4.deleteBydId(id);
		repo.deleteById(id);
		ra.addFlashAttribute("message1", "The Folder Has Been Deleted");
		return "redirect:/createfolder";
		//<a th:href="@{'/download?id='+${doc.doc_id}}">[[${doc.file_name}]]</a>
	}
}
