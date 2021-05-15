package com.vc.victorycomforts.service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vc.victorycomforts.repository.AuthoritiesRepository;
import com.vc.victorycomforts.repository.ComfortsRepository;
import com.vc.victorycomforts.repository.HistoryRepository;
import com.vc.victorycomforts.repository.UsersRepository;
import com.vc.victorycomforts.model.AuthoritiesData;
import com.vc.victorycomforts.model.ComfortData;
import com.vc.victorycomforts.model.HistoryData;
import com.vc.victorycomforts.model.UserData;

@Service
public class MyServiceImpl implements MyService{

	 	@Autowired
	    ComfortsRepository dao;
	 	
	 	@Autowired
		HistoryRepository historyRepository;
	 	
	 	@Autowired
		UsersRepository userRepository;
	 	
	 	@Autowired
		AuthoritiesRepository authorityRepository;
	 
	    public List<ComfortData> getBandData() {
	        return dao.findAll();
	    }
	    
	    public List<HistoryData> getHistoryData() {
	        return historyRepository.findAll();
	    }
	    
	    public List<ComfortData> getBandNames() {
	        return dao.findDistinctName();
	    }
	    
	    public List<ComfortData> getBandDataByName(String name) {
	        return dao.findByName(name);
	    }
	    
	    public Optional<ComfortData> getBandById(int bandId) {
	        return dao.findById(bandId);
	    }
	    
		public ComfortData addNewBand(ComfortData band) {
			return dao.save(band);
		}
		
		public ComfortData updateBand(ComfortData band) {
	        return dao.save(band);
	    }
		
		public HistoryData addNewHistory(HistoryData history) {
			return historyRepository.save(history);
		}
		
		public List<HistoryData> getHistoryDataById(List<Integer> ids) {
		 return historyRepository.findByIds(ids);
		}
		
		public UserData addUser(UserData user) {
			return userRepository.save(user);
		}
		
		public AuthoritiesData addAuthority(AuthoritiesData userAuthority) {
			return authorityRepository.save(userAuthority);
		}
}
