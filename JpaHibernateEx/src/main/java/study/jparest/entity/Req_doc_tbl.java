package study.jparest.entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "req_doc_tbl")
public class Req_doc_tbl {
    @Id
    @Column(name="req_doc_id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int req_doc_id;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "doc_id", referencedColumnName = "doc_id")
    private Doc_info_tbl doc_info_tbl;
    
    @OneToOne
    @JoinColumn(name = "req_id", referencedColumnName = "req_id")
    private Request_tbl request_tbl;

    
	public Req_doc_tbl(int req_doc_id, Doc_info_tbl doc_info_tbl, Request_tbl request_tbl) {
		super();
		this.req_doc_id = req_doc_id;
		this.doc_info_tbl = doc_info_tbl;
		this.request_tbl = request_tbl;
	}

	public int getReq_doc_id() {
		return req_doc_id;
	}

	public void setReq_doc_id(int req_doc_id) {
		this.req_doc_id = req_doc_id;
	}

	public Doc_info_tbl getDoc_info_tbl() {
		return doc_info_tbl;
	}

	public void setDoc_info_tbl(Doc_info_tbl doc_info_tbl) {
		this.doc_info_tbl = doc_info_tbl;
	}
    
    
}