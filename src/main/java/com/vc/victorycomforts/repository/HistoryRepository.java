package com.vc.victorycomforts.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.vc.victorycomforts.model.ComfortData;
import com.vc.victorycomforts.model.HistoryData;

public interface HistoryRepository extends JpaRepository<HistoryData, Integer> {

	@Query( "select h from HistoryData h where h.refBandId in :ids" )
	List<HistoryData> findByIds(@Param("ids") List<Integer> ids);
}
