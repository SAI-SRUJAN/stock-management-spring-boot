package com.vc.victorycomforts.model;

import java.util.List;

public class UpdateRequest {
	private List<ComfortData> bands;
	private String invoice;
	private String userName;
	
	public void setBands(List<ComfortData> bands) {
		this.bands = bands;
	}

	public List<ComfortData> getBands() {
		return bands;
	}
	
	public void setInvoice(String invoice) {
		this.invoice = invoice;
	}

	public String getInvoice() {
		return invoice;
	}
	
	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getUserName() {
		return userName;
	}
}
