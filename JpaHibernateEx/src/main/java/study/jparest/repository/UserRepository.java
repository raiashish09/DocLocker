package study.jparest.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import study.jparest.entity.User_info_tbl;

@Repository
public interface UserRepository extends JpaRepository<User_info_tbl,Integer> {

	//@Query(value="select * from User_info_tbl from study.jparest.entity.User_info_tbl f where f.userName=:userName",nativeQuery=true)
		public int findByUserName(@Param("userName") String userName);
}
