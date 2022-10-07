package study.jparest.entity;


import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "doc_info_tbl")
public class Doc_info_tbl {

    @Id
    @Column(name="doc_id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    public long doc_id;

    @Column(name = "file_name")
    private String fileName;
    
    @Column(name = "file_size")
    private long fileSize;
    
    @Column(name = "upload_date")
    private Date date;
    
    @Column(name = "doc_type")
    private String docType;
    
    
    @Lob
    private byte [] content;

  
    @OneToOne(mappedBy = "doc_info_tbl")
    private Doc_cat_tbl categoryList1;
    

    @OneToMany( mappedBy = "doc_info_tbl")
    private List<Req_doc_tbl> requestList;
    
    
    @ManyToOne
    @JoinColumn(name = "folder_id", referencedColumnName = "folder_id")
    private Folder_info_tbl folder_info_tbl;
    
    
   
   
    
	public Doc_info_tbl() {
		
	}
	public Doc_info_tbl(long doc_id, String fileName, long fileSize)
	{
		this.doc_id = doc_id;
		this.fileName = fileName;
		this.fileSize = fileSize;
		
	}

	public Doc_info_tbl(long doc_id, String fileName, long fileSize, Date date, String docType, byte[] content,
		 Folder_info_tbl folder_info_tbl, Doc_cat_tbl categoryList1, List<Req_doc_tbl> requestList) {//
	super();
	this.doc_id = doc_id;
	this.fileName = fileName;
	this.fileSize = fileSize;
	this.date = date;
	this.docType = docType;
	this.content = content;
	this.categoryList1 = categoryList1;
	this.requestList = requestList;
	this.folder_info_tbl = folder_info_tbl;
}

	public Doc_info_tbl(String filename2, byte[] bytes, long size, Date date2, Folder_info_tbl f) {
		this.fileName = filename2;
		this.content = bytes;
		this.fileSize = size;
		this.date = date2;
		this.folder_info_tbl = f;
		
	}
	public Folder_info_tbl getFolder_info_tbl() {
		return folder_info_tbl;
	}


	public void setFolder_info_tbl(Folder_info_tbl folder_info_tbl) {
		this.folder_info_tbl = folder_info_tbl;
	}

	
	public List<Req_doc_tbl> getRequestList() {
		return requestList;
	}

	public void setRequestList(List<Req_doc_tbl> requestList) {
		this.requestList = requestList;
	}

	public  Doc_cat_tbl getCategoryList1() {
		return categoryList1;
	}

	public void setCategoryList1(Doc_cat_tbl categoryList1) {
		this.categoryList1 = categoryList1;
	}
	

/*	public User_info_tbl getUser_info_tbl() {
		return user_info_tbl;
	}

	public void setUser_info_tbl(User_info_tbl user_info_tbl) {
		this.user_info_tbl = user_info_tbl;
	}
*/
	public byte[] getContent() {
	return content;
}

public void setContent(byte[] content) {
	this.content = content;
}

	public long getDocId() {
		return doc_id;
	}

	public void setDocId(long l) {
		this.doc_id = l;
	}

	public String getFileName() {
		return fileName;
	}

	public void setFileName(String fileName) {
		this.fileName = fileName;
	}

	public long getFileSize() {
		return fileSize;
	}

	public void setFileSize(long fileSize) {
		this.fileSize = fileSize;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public String getDocType() {
		return docType;
	}

	public void setDocType(String docType) {
		this.docType = docType;
	}

	/*
	public User_info_tbl getUser() {
		return user_info_tbl;
	}

	public void setUser(User_info_tbl user) {
		this.user_info_tbl = user;
	}
	*/
    
    

    }
