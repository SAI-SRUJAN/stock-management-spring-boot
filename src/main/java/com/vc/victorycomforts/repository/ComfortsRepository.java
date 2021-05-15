package com.vc.victorycomforts.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.vc.victorycomforts.model.ComfortData;

@Repository
public interface ComfortsRepository extends JpaRepository<ComfortData, Integer> {
	@Query("select t from ComfortData t where t.name = ?1")
	List<ComfortData> findByName(String name);
	
	@Query("select distinct t.name from ComfortData t")
	List<ComfortData> findDistinctName();

}
