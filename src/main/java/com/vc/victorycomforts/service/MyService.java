package com.vc.victorycomforts.service;
import java.util.List;
import java.util.Optional;

import com.vc.victorycomforts.model.AuthoritiesData;
import com.vc.victorycomforts.model.ComfortData;
import com.vc.victorycomforts.model.HistoryData;
import com.vc.victorycomforts.model.UserData;

public interface MyService {

	public List<ComfortData> getBandData();
	public List<HistoryData> getHistoryData();
	public List<ComfortData> getBandNames();
	public List<ComfortData> getBandDataByName(String name);
	public Optional<ComfortData> getBandById(int BAND_ID);
	public ComfortData addNewBand(ComfortData band);
	public HistoryData addNewHistory(HistoryData history);
	public ComfortData updateBand(ComfortData band);
	public List<HistoryData> getHistoryDataById(List<Integer> ids);
	public UserData addUser(UserData user);
	public AuthoritiesData addAuthority(AuthoritiesData userAuthority);
}
