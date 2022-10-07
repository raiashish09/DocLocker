package study.jparest.entity;

import java.lang.annotation.Repeatable;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinColumns;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

//import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "doc_cat_tbl")
public class Doc_cat_tbl {

	   @Id
	    @GeneratedValue(strategy = GenerationType.AUTO)
	    private int catId;
	   
	  @Column(name = "group_id")
    private int groupId;

    @Column(name = "category_name")
    private String categoryName;
    
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id", referencedColumnName = "user_id")
    private User_info_tbl user_info_tbl;
    
    @OneToOne
    @JoinColumn(name = "doc_id", referencedColumnName = "doc_id")
    private Doc_info_tbl doc_info_tbl;
    		
  // @JsonIgnoreProperties("categoryList,categoryList1")
    
    public Doc_cat_tbl(int catId, int groupId, String categoryName, User_info_tbl user_info_tbl,
    		Doc_info_tbl doc_info_tbl) {
    	super();
    	this.catId = catId;
    	this.groupId = groupId;
    	this.categoryName = categoryName;
    	this.user_info_tbl = user_info_tbl;
    	this.doc_info_tbl = doc_info_tbl;
    }
    
	public int getCatId() {
		return catId;
	}
	public void setCatId(int catId) {
		this.catId = catId;
	}

	public User_info_tbl getUser_info_tbl() {
		return user_info_tbl;
	}

	public void setUser_info_tbl(User_info_tbl user_info_tbl) {
		this.user_info_tbl = user_info_tbl;
	}

	public Doc_info_tbl getDoc_info_tbl() {
		return doc_info_tbl;
	}

	public void setDoc_info_tbl(Doc_info_tbl doc_info_tbl) {
		this.doc_info_tbl = doc_info_tbl;
	}

	public int getGroupId() {
		return groupId;
	}

	public void setGroupId(int groupId) {
		this.groupId = groupId;
	}

	public String getCategoryName() {
		return categoryName;
	}

	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}
    
   

  
  
  
}