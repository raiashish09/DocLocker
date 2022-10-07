package study.jparest.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import study.jparest.entity.Folder_info_tbl;

@Repository
public interface FolderRepo extends JpaRepository<Folder_info_tbl, Integer> {

	@Query(value="Select * from folder_info_tbl",nativeQuery = true)  
	List<Folder_info_tbl> findAll();
	
	
}
