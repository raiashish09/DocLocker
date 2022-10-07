package study.jparest.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import study.jparest.entity.Doc_info_tbl;
import study.jparest.entity.Folder_info_tbl;

@Repository
public interface DocumentRepository extends JpaRepository<Doc_info_tbl,Long> {

	 @Query(value="Select new Doc_info_tbl(doc_id, fileName, fileSize) from study.jparest.entity.Doc_info_tbl ")  
		List<Doc_info_tbl> findAll();
		
		@Query(value=" select * from doc_info_tbl where folder_id=:Id",nativeQuery = true)
		public List<Doc_info_tbl> findBydId(int Id);
		
		@Transactional
		@Modifying
		@Query(value=" delete from doc_info_tbl where folder_id=:Id",nativeQuery = true)
		public int deleteBydId(int Id);
}
