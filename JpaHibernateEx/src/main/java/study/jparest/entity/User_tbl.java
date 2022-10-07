package study.jparest.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "user_tbl")
public class User_tbl {

	    @Id
	    @Column(name="id")
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private int id;
	      
	    @Column(name = "session_id")
	    private int session_id;

		public int getId() {
			return id;
		}

		public void setId(int id) {
			this.id = id;
		}

		public int getSession_id() {
			return session_id;
		}

		public void setSession_id(int session_id) {
			this.session_id = session_id;
		}
		public User_tbl()
		{
			
		}

		public User_tbl(int id, int session_id) {
			super();
			this.id = id;
			this.session_id = session_id;
		}

		@Override
		public String toString() {
			return "User_tbl [id=" + id + ", session_id=" + session_id + "]";
		}
	    
	    
}
