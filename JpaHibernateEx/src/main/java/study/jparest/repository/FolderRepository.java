package study.jparest.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import study.jparest.entity.Folder_info_tbl;


@Repository
public interface FolderRepository extends JpaRepository<Folder_info_tbl, Integer> {

	//@Query(value="select from Folder_info_tbl (folder_id) from study.jparest.entity.Folder_info_tbl f where f.folderName=:folderName")
	public int findByFolderName(@Param("folderName") String name);
	
	
	//@Query(value=" from study.jparest.hw.entity.UserEntity u where u.uname=:uname")
	//public List<UserEntity> findByUname(@Param("uname")String n);
	
	@Query(value=" select * from folder_info_tbl where user_id=:Id",nativeQuery = true)
	public List<Folder_info_tbl> findByfId(int Id);
}
