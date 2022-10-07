package study.jparest.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import study.jparest.entity.User_tbl;

@Repository
public interface UserRepo extends JpaRepository<User_tbl, Integer>{

	@Query(value="select last_insert_id()",nativeQuery = true)
	int getid();
	
	@Query(value="select * from user_tbl where id=:id",nativeQuery = true)
	List<User_tbl> findById(int id);
	
	
}
