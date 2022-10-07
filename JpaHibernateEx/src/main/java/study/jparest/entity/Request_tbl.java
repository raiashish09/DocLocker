package study.jparest.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "request_tbl")
public class Request_tbl {
    @Id
    @Column(name="req_id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int req_id;
      
    @Column(name = "req_desc")
    private String reqDesc;
    
    @Column(name = "req_link")
    private String reqLink;
    
    @Column(name = "startdate")
    private Date startDate;
    
    @Column(name = "enddate")
    private Date endDate;
    
    @Column(name = "access_level")
    private String accessLevel;
    
    @OneToOne(mappedBy = "request_tbl")
    private Req_doc_tbl req;

    
	public Request_tbl(int req_id, String reqDesc, String reqLink, Date startDate, Date endDate, String accessLevel,
			Req_doc_tbl req) {
		super();
		this.req_id = req_id;
		this.reqDesc = reqDesc;
		this.reqLink = reqLink;
		this.startDate = startDate;
		this.endDate = endDate;
		this.accessLevel = accessLevel;
		this.req = req;
	}

	public Req_doc_tbl getReq() {
		return req;
	}

	public void setReq(Req_doc_tbl req) {
		this.req = req;
	}

	public int getReq_id() {
		return req_id;
	}

	public void setReq_id(int req_id) {
		this.req_id = req_id;
	}

	public String getReqDesc() {
		return reqDesc;
	}

	public void setReqDesc(String reqDesc) {
		this.reqDesc = reqDesc;
	}

	public String getReqLink() {
		return reqLink;
	}

	public void setReqLink(String reqLink) {
		this.reqLink = reqLink;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	public String getAccessLevel() {
		return accessLevel;
	}

	public void setAccessLevel(String accessLevel) {
		this.accessLevel = accessLevel;
	}

	public Request_tbl(int req_id, String reqDesc, String reqLink, Date startDate, Date endDate, String accessLevel) {
		super();
		this.req_id = req_id;
		this.reqDesc = reqDesc;
		this.reqLink = reqLink;
		this.startDate = startDate;
		this.endDate = endDate;
		this.accessLevel = accessLevel;
	}
   
    
}