package study.jparest.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "folder_info_tbl")
public class Folder_info_tbl {

	@Id
	@Column(name="folder_id")
    @GeneratedValue(strategy = GenerationType.AUTO)
	public int folder_id;
	   
	@Column(name = "folder_name")
    private String folderName;   
    
	
    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "user_id")
    private User_info_tbl user_info_tbl;
    
    //@OneToMany(mappedBy="folder_info_tbl")
    //private List<Doc_info_tbl> docList;

    public Folder_info_tbl()
    {
    	
    }
    
    /*
	public Folder_info_tbl(int folder_id, String folderName, User_info_tbl user_info_tbl) {
		super();
		this.folder_id = folder_id;
		this.folderName = folderName;
		this.user_info_tbl = user_info_tbl;
		//this.docList = docList;
	}
	*/
	
	public Folder_info_tbl(int folder_id, String folderName, User_info_tbl user_info_tbl) {
		super();
		this.folder_id = folder_id;
		this.folderName = folderName;
		this.user_info_tbl = user_info_tbl;
		
	}

	
	public Folder_info_tbl(String folderName, User_info_tbl user_info_tbl) {
		this.folderName = folderName;
		this.user_info_tbl = user_info_tbl;
	}

	public Folder_info_tbl(String folderName, int userId) {
		this.folderName = folderName;
		getUser_info_tbl().setUserId(userId);
	}

	public int getFolder_id() {
		return folder_id;
	}

	public void setFolder_id(int folder_id) {
		this.folder_id = folder_id;
	}

	public String getFolderName() {
		return folderName;
	}

	public void setFolderName(String folderName) {
		this.folderName = folderName;
	}

	public User_info_tbl getUser_info_tbl() {
		return user_info_tbl;
	}

	public void setUser_info_tbl(User_info_tbl user_info_tbl) {
		this.user_info_tbl = user_info_tbl;
	}

	/*
	public List<Doc_info_tbl> getDocList() {
		return docList;
	}

	public void setDocList(List<Doc_info_tbl> docList) {
		this.docList = docList;
	}
    */
    
    
}