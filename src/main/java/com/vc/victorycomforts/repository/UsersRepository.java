package com.vc.victorycomforts.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.vc.victorycomforts.model.UserData;


@Repository
public interface UsersRepository extends JpaRepository<UserData, Integer> {

}
