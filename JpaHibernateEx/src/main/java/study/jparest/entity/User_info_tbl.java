package study.jparest.entity;


import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "user_info_tbl")
public class User_info_tbl {
    @Id
    @Column(name="user_id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int user_id;
      
    @Column(name = "first_name")
    private String firstName;
    
    @Column(name = "last_name")
    private String lastName;
    
    @Column(name = "user_name")
    private String userName;
    
    @Column(name = "password")
    private String password;
    
    @Column(name = "email")
    private String email;
    
    @Column(name = "mobile_no")
    private String mobileNo;
    
   
    
    //@OneToMany( mappedBy = "user_info_tbl")
    //private List<Doc_cat_tbl> categoryList;
    
   
    public User_info_tbl()
    {
    	
    }
	
    /*
   public User_info_tbl(int user_id, String firstName, String lastName, String userName, String password, String email,
			String mobileNo) {
		super();
		this.user_id = user_id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.userName = userName;
		this.password = password;
		this.email = email;
		this.mobileNo = mobileNo;
		//this.categoryList = categoryList;
		//this.folderList = folderList;
	}
	*/

/*public List<Folder_info_tbl> getFolderList() {
		return folderList;
	}

	public void setFolderList(List<Folder_info_tbl> folderList) {
		this.folderList = folderList;
	}
*/
	// @JsonIgnoreProperties("user_info_tbl")
   /*
	public List<Doc_cat_tbl> getCategoryList() {
		return categoryList;
	}

	public void setCategoryList(List<Doc_cat_tbl> categoryList) {
		this.categoryList = categoryList;
	}
    */

	public User_info_tbl(int userId, String firstName, String lastName, String userName, String password, String email,
			String mobileNo) {
		super();
		this.user_id = userId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.userName = userName;
		this.password = password;
		this.email = email;
		this.mobileNo = mobileNo;
	}

	

	/*public List<Doc_info_tbl> getDocumentList() {
		return documentList;
	}

	public void setDocumentList(List<Doc_info_tbl> documentList) {
		this.documentList = documentList;
	}*/

	public User_info_tbl(String firstName, String lastName, String userName, String password, String email,
			String mobileNo) {
		
		this.firstName = firstName;
		this.lastName = lastName;
		this.userName = userName;
		this.password = password;
		this.email = email;
		this.mobileNo = mobileNo;
		
	}

	public User_info_tbl(String userName, String password) {
		this.userName = userName;
		this.password = password;
	}

	public int getUserId() {
		return user_id;
	}

	public void setUserId(int userId) {
		this.user_id = userId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getMobileNo() {
		return mobileNo;
	}

	public void setMobileNo(String string) {
		this.mobileNo = string;
	}

	@Override
	public String toString() {
		return "User_info_tbl [userName=" + userName + ", password=" + password + "]";
	}
    

   

}