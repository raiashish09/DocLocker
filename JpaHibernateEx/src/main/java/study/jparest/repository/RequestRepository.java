package study.jparest.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import study.jparest.entity.Request_tbl;

@Repository
public interface RequestRepository extends JpaRepository<Request_tbl, Integer> {

}
