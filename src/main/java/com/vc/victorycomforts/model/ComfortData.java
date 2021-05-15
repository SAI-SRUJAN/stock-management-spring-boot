package com.vc.victorycomforts.model;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Component

//Spring jpa jars.
@Entity
@Table(name = "VC_STOCK_DATA")

//To increase speed and save sql statement execution time.
@DynamicInsert
@DynamicUpdate

public class ComfortData implements Serializable{

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "id_generator")
	@SequenceGenerator(name = "id_generator", sequenceName = "VCID_SEQUENCE", allocationSize = 1)
	@Column(name = "BAND_ID")
	private int bandId;

	@Column(name = "NAME")
	private String name;

	@Column(name = "BAND_SIZE")
	private String bandSize;

	@Column(name = "QUANTITY")
	private int quantity;

	@Column(name = "PURCHASED")
	private int purchased;

	@Column(name = "SOLD")
	private int sold;
	
	@Column(name = "BAND_LIMIT")
	private int bandLimit;
	
	@Column(name = "WASTAGE")
	private int wastage;
	
	@Column(name = "ROLL_SIZE")
	private int rollSize;
	
	@Column(name = "BAND_TYPE")
	private String bandType;
	
	@Column(name = "ORDERED")
	private String ordered;
	
	@Column(name = "DATE_ORDERED")
	private String dateOrdered;
	
	@Column(name = "QUANTITY_ORDERED")
	private int quantityOrdered;
	
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "refBandId")
//	@JoinColumn(name = "ID")
	private Set<HistoryData> historyData;
	
	@Column(name = "PURCHASED_BANDS")
	private double purchasedBands;
	
	@Column(name = "SOLD_BANDS")
	private double soldBands;
	
	@Column(name = "QUANTITY_BANDS")
	private double quantityBands;

	public int getBandId() {
		return bandId;
	}

	public void setBandId(int bandId) {
		this.bandId = bandId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getBandSize() {
		return bandSize;
	}

	public void setBandSize(String bandSize) {
		this.bandSize = bandSize;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public int getPurchased() {
		return purchased;
	}

	public void setPurchased(int purchased) {
		this.purchased = purchased;
	}

	public int getSold() {
		return sold;
	}

	public void setSold(int sold) {
		this.sold = sold;
	}
	
	public int getBandLimit() {
		return bandLimit;
	}

	public void setBandLimit(int bandLimit) {
		this.bandLimit = bandLimit;
	}
	
	public int getWastage() {
		return wastage;
	}

	public void setWastage(int wastage) {
		this.wastage = wastage;
	}
	
	public int getRollSize() {
		return rollSize;
	}

	public void setRollSize(int rollSize) {
		this.rollSize = rollSize;
	}
	
	public String getBandType() {
		return bandType;
	}

	public void setBandType(String bandType) {
		this.bandType = bandType;
	}

	public String getOrdered() {
		return ordered;
	}

	public void setOrdered(String ordered) {
		this.ordered = ordered;
	}
	
	public String getDateOrdered() {
		return dateOrdered;
	}

	public void setdateOrdered(String dateOrdered) {
		this.dateOrdered = dateOrdered;
	}

	public void setHistoryData(Set<HistoryData> historyData) {
		this.historyData = historyData;
	}
	
	public double getPurchasedBands() {
		return purchasedBands;
	}

	public void setPurchasedBands(double purchasedBands) {
		this.purchasedBands = purchasedBands;
	}
	
	public double getSoldBands() {
		return soldBands;
	}

	public void setSoldBands(double soldBands) {
		this.soldBands = soldBands;
	}
	
	public double getQuantityBands() {
		return quantityBands;
	}

	public void setQuantityBands(double quantityBands) {
		this.quantityBands = quantityBands;
	}
	
	public int getQuantityOrdered() {
		return quantityOrdered;
	}

	public void setQuantityOrdered(int quantityOrdered) {
		this.quantityOrdered = quantityOrdered;
	}
}
