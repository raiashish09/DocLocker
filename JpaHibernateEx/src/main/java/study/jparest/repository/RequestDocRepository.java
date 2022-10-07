package study.jparest.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import study.jparest.entity.Req_doc_tbl;

@Repository
public interface RequestDocRepository extends JpaRepository<Req_doc_tbl, Integer>{

}
