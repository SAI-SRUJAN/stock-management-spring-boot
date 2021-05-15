package com.vc.victorycomforts.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.vc.victorycomforts.model.AuthoritiesData;


@Repository
public interface AuthoritiesRepository extends JpaRepository<AuthoritiesData, Integer> {

}
