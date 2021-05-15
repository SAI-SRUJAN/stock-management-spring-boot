package com.vc.victorycomforts.model;

import java.io.Serializable;
import java.sql.Date;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Component

//Spring jpa jars.
@Entity
@Table(name = "VC_STOCK_HISTORY")

//To increase speed and save sql statement execution time.
@DynamicInsert
@DynamicUpdate

public class HistoryData implements Serializable {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "id_generator")
	@SequenceGenerator(name = "id_generator", sequenceName = "VCID_HISTORY_SEQUENCE", allocationSize = 1)
	@Column(name = "ID")
	private int id;
	
	@Column(name = "REF_BAND_ID")
	private int refBandId;
	
	@ManyToOne
    @JoinColumn(name = "REF_BAND_ID", insertable = false, updatable = false)
	private ComfortData comfortData;
	
	@Column(name = "BAND_DESCRIPTION")
	private String bandDescription;
	
	@Column(name = "QUANTITY")
	private int quantity;
	
	@Basic(optional = true)
	@Column(name = "DATE_CREATED")
	private Date dateCreated;
	
	@Column(name = "INVOICE")
	private String invoice;
	
	@Column(name = "UPDATED_BY")
	private String updatedBy;
	
	public HistoryData() {
		
	}
	
	public HistoryData(String description, ComfortData comfortData) {
		this.bandDescription = description;
//		this.comfortData = comfortData;
	}
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}
	
	public int getRefBandId() {
		return refBandId;
	}

	public void setRefBandId(int refBandId) {
		this.refBandId = refBandId;
	}
	
	public ComfortData getComfortData() {
		return comfortData;
	}

	public void setComfortData(ComfortData comfortData) {
		this.comfortData = comfortData;
	}
	
	public String getBandDescription() {
		return bandDescription;
	}

	public void setBandDescription(String bandDescription) {
		this.bandDescription = bandDescription;
	}
	
	public Date getDateCreated() {
		return dateCreated;
	}

	public void setDateCreated(Date dateCreated) {
		this.dateCreated = dateCreated;
	}
	
	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	
	public String getInvoice() {
		return invoice;
	}

	public void setInvoice(String invoice) {
		this.invoice = invoice;
	}
	
	public String getUpdatedBy() {
		return updatedBy;
	}

	public void setUpdatedBy(String updatedBy) {
		this.updatedBy = updatedBy;
	}

}
