//package study.jparest.controller;
//
//import java.util.ArrayList;
//import java.util.List;
//import java.util.Optional;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import study.jparest.entity.Folder_info_tbl;
//import study.jparest.entity.User_info_tbl;
//import study.jparest.repository.FolderRepository;
//import study.jparest.repository.UserRepository;
//
//@CrossOrigin
//@RestController
//@RequestMapping(path ="/folder")
//public class FolderController {
//
//	@Autowired
//	FolderRepository repo;
//	@Autowired
//	UserRepository repo1;
//	
//	    @PostMapping("/addfolder/{folderName}/{user_id}")
//		public String f2(@PathVariable String folderName,@PathVariable int user_id)
//		{
//			
//	       //Folder_info_tbl obj=new Folder_info_tbl(f.getFolderName(),f.getUser_info_tbl().getUserId());
//	    	//repo1.save(f.getUser_info_tbl());
//	    	
//	    	//System.out.println(f.getFolderName());
//	    	
//	    	User_info_tbl u=repo1.findById(user_id).get();
//	    	Folder_info_tbl obj=new Folder_info_tbl(folderName,u);
//	         repo.save(obj);
//			return "folder created ";
//		}
//	    
//	    @GetMapping("/getfolder/{user_id}")
//	    public List<Folder_info_tbl> f1(@PathVariable int user_id)
//	    {
//	    	 List<Folder_info_tbl> list=repo.findAll();
//	    	 List<Folder_info_tbl> list1=new ArrayList<>();
//	    	 
//	    	 for(Folder_info_tbl fi:list )
//	    	 {
//	    		if(fi.getUser_info_tbl().getUserId()==user_id)
//	    		 {
//	    			System.out.println(user_id);
//	    			System.out.println(fi.getUser_info_tbl().getUserId());
//	    			list1.add(fi); 
//	    		 }
//	    	 }
//			return list1;
//	    }
//	    
//	    @DeleteMapping("removefolder/{folder_id}")
//		public String f4(@PathVariable("folder_id") int folder_id)
//		{
//			repo.deleteById(folder_id);
//			return "folder deleted";
//		}
//		
//}
