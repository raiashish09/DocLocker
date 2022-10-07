package study.jparest.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import study.jparest.entity.Doc_cat_tbl;

@Repository
public interface DocCategoryRepository extends JpaRepository<Doc_cat_tbl,Integer> {

}
