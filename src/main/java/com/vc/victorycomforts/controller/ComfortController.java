package com.vc.victorycomforts.controller;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletResponse;

import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.vc.victorycomforts.model.AuthoritiesData;
import com.vc.victorycomforts.model.ComfortData;
import com.vc.victorycomforts.model.HistoryData;
import com.vc.victorycomforts.model.UpdateRequest;
import com.vc.victorycomforts.model.UserAddRequest;
import com.vc.victorycomforts.model.UserData;
import com.vc.victorycomforts.service.MyService;

@RestController()
@CrossOrigin("localhost:4200")
public class ComfortController {

	private static final String EXCEL_FILE_NAME = "VC_Stock_Report.xls";
	private static final String HISTORY_EXCEL_FILE_NAME = "VC_Stock_History.xls";
	@Autowired
	MyService myService;

	@Autowired

	@RequestMapping(value = "/api/getData", method = RequestMethod.GET)
	public List<ComfortData> getBandData() {
		System.out.println(this.getClass().getSimpleName() + " - Get all bands service is invoked.");
		return myService.getBandData();
	}

	@RequestMapping(value = "/api/getDistinctBands", method = RequestMethod.GET)
	public List<ComfortData> getBandNames() {
		System.out.println(this.getClass().getSimpleName() + " - Get all bands names service is invoked.");
		return myService.getBandNames();
	}

	@RequestMapping(value = "/api/getDataByName/{name}", method = RequestMethod.GET)
	public List<ComfortData> getBandDataByName(@PathVariable String name) throws Exception {
		System.out.println(this.getClass().getSimpleName() + " - Get band details by name is invoked.");
		return myService.getBandDataByName(name);
	}

	@RequestMapping(value = "/api/getDataById/{id}", method = RequestMethod.GET)
	public ComfortData getBandById(@PathVariable int id) throws Exception {
		System.out.println(this.getClass().getSimpleName() + " - Get band details by id is invoked.");

		Optional<ComfortData> band = myService.getBandById(id);
		if (!band.isPresent())
			throw new Exception("Could not find band with id- " + id);

		return band.get();
	}

	@RequestMapping(value = "/api/band/add", method = RequestMethod.POST)
	public ComfortData createEmployee(@RequestBody ComfortData newband) {
		System.out.println(this.getClass().getSimpleName() + " - Create new band method is invoked.");
		ComfortData bandAdded = myService.addNewBand(newband);
		HistoryData data = new HistoryData();
		data.setBandDescription("Purchased");
		data.setRefBandId(bandAdded.getBandId());
		data.setQuantity(bandAdded.getQuantity());
		myService.addNewHistory(data);
		return bandAdded;
	}

	@RequestMapping(value = "/api/band/update", method = RequestMethod.POST)
	public List<ComfortData> updateBand(@RequestBody UpdateRequest bandData) throws Exception {
		System.out.println(this.getClass().getSimpleName() + " - Update band details is invoked.");

		for (int i = 0; i < bandData.getBands().size(); i++) {
			int bandId = bandData.getBands().get(i).getBandId();
			Optional<ComfortData> bandOldData = myService.getBandById(bandId);
			ComfortData ifBandOldData = bandOldData.get();
			int oldPurchased = ifBandOldData.getPurchased();
			int oldSold = ifBandOldData.getSold();
			Optional<ComfortData> band = myService.getBandById(bandId);
			if (!band.isPresent())
				throw new Exception("Could not find band with id- " + bandId);

			// Required for the "where" clause in the sql query template.
			bandData.getBands().get(i).setBandId(bandId);
			myService.updateBand(bandData.getBands().get(i));
			HistoryData data = new HistoryData();
			int quantity;
			if (oldPurchased < bandData.getBands().get(i).getPurchased()) {
				data.setBandDescription("Purchased");
				quantity = bandData.getBands().get(i).getPurchased() - oldPurchased;
			} else if (oldSold < bandData.getBands().get(i).getSold()) {
				data.setBandDescription("Sold");
				quantity = bandData.getBands().get(i).getSold() - oldSold;
			} else {
				data.setBandDescription("Order Placed");
				quantity = bandData.getBands().get(i).getQuantityOrdered();
			}
			data.setRefBandId(bandData.getBands().get(i).getBandId());
			data.setQuantity(quantity);
			data.setInvoice(bandData.getInvoice());
			data.setUpdatedBy(bandData.getUserName());
			myService.addNewHistory(data);
		}
		return myService.getBandData();
	}

	@RequestMapping(value = "/api/getHistoryData", method = RequestMethod.GET)
	public List<HistoryData> getHistoryData() {
		System.out.println(this.getClass().getSimpleName() + " - Get history of bands service is invoked.");
		return myService.getHistoryData();
	}

	@RequestMapping(value = "/api/getHistoryDataByName/{name}", method = RequestMethod.GET)
	public List<HistoryData> getHistoryDataByName(@PathVariable String name) throws Exception {
		System.out.println(this.getClass().getSimpleName() + " - Get band details by name is invoked.");
		List<ComfortData> bandData = myService.getBandDataByName(name);
		List<Integer> ids = new ArrayList<Integer>();
		for (int i = 0; i < bandData.size(); i++) {
			ids.add(bandData.get(i).getBandId());
		}
		return myService.getHistoryDataById(ids);
	}

	@RequestMapping(value = "/api/download/stock", method = RequestMethod.GET)
	public void download(HttpServletResponse response) throws Exception {
		Iterable<ComfortData> bandsData = myService.getBandData();

		Workbook workbook = new HSSFWorkbook();
		Sheet sheet = workbook.createSheet("All Bands List");
		sheet.setDefaultColumnWidth(15);
		Row header = sheet.createRow(0);
		header.createCell(0).setCellValue("BAND_ID");
		header.createCell(1).setCellValue("BAND_NAME");
		header.createCell(2).setCellValue("BAND_SIZE");
		header.createCell(3).setCellValue("QUANTITY");
		header.createCell(4).setCellValue("PURCHASED");
		header.createCell(5).setCellValue("SOLD");
		header.createCell(6).setCellValue("BAND_LIMIT");
		header.createCell(7).setCellValue("WASTAGE");
		header.createCell(8).setCellValue("ROLL_SIZE");
		header.createCell(9).setCellValue("BAND_TYPE");
		header.createCell(10).setCellValue("ORDERED");
		header.createCell(11).setCellValue("DATE_ORDERED");
		header.createCell(12).setCellValue("PURCHASED(ROLLS)");
		header.createCell(13).setCellValue("SOLD(ROLLS)");
		header.createCell(14).setCellValue("QUANTITY(ROLLS)");
		header.createCell(15).setCellValue("QUANTITY_ORDERED");
		int rowNum = 1;
		for (ComfortData band : bandsData) {
			Row row = sheet.createRow(rowNum++);
			row.createCell(0).setCellValue(band.getBandId());
			row.createCell(1).setCellValue(band.getName());
			row.createCell(2).setCellValue(band.getBandSize());
			row.createCell(3).setCellValue(band.getQuantity());
			row.createCell(4).setCellValue(band.getPurchased());
			row.createCell(5).setCellValue(band.getSold());
			row.createCell(6).setCellValue(band.getBandLimit());
			row.createCell(7).setCellValue(band.getWastage());
			row.createCell(8).setCellValue(band.getRollSize());
			row.createCell(9).setCellValue(band.getBandType());
			row.createCell(10).setCellValue(band.getOrdered());
			row.createCell(11).setCellValue(band.getDateOrdered());
			row.createCell(12).setCellValue(band.getPurchasedBands());
			row.createCell(13).setCellValue(band.getSoldBands());
			row.createCell(14).setCellValue(band.getQuantityBands());
			row.createCell(15).setCellValue(band.getQuantityOrdered());
		}

		response.setHeader("Content-disposition", "attachment; filename=" + EXCEL_FILE_NAME);
		workbook.write(response.getOutputStream());
	}

	@RequestMapping(value = "/api/download/history", method = RequestMethod.GET)
	public void downloadHistory(HttpServletResponse response) throws Exception {
		Iterable<HistoryData> bandsHistory = myService.getHistoryData();

		Workbook workbook = new HSSFWorkbook();
		Sheet sheet = workbook.createSheet("All Bands History");
		sheet.setDefaultColumnWidth(15);
		Row header = sheet.createRow(0);
		header.createCell(0).setCellValue("ID");
		header.createCell(1).setCellValue("BAND_ID");
		header.createCell(2).setCellValue("DESCRIPTION");
		header.createCell(3).setCellValue("DATE");
		header.createCell(4).setCellValue("QUANTIY");
		header.createCell(5).setCellValue("INVOICE");
		header.createCell(6).setCellValue("UPDATED_BY");
		int rowNum = 1;
		for (HistoryData band : bandsHistory) {
			Row row = sheet.createRow(rowNum++);
			row.createCell(0).setCellValue(band.getId());
			row.createCell(1).setCellValue(band.getRefBandId());
			row.createCell(2).setCellValue(band.getBandDescription());
			row.createCell(3).setCellValue(band.getDateCreated());
			row.createCell(4).setCellValue(band.getQuantity());
			row.createCell(5).setCellValue(band.getInvoice());
			row.createCell(6).setCellValue(band.getUpdatedBy());
		}

		response.setHeader("Content-disposition", "attachment; filename=" + HISTORY_EXCEL_FILE_NAME);
		workbook.write(response.getOutputStream());
	}

	@RequestMapping(value = "/api/myusername", method = RequestMethod.GET)
	@ResponseBody
	public String currentUserName(Principal principal) {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		return principal.getName() + auth.getAuthorities();
	}

	@RequestMapping(value = "/api/user/add", method = RequestMethod.POST)
	public UserData createUser(@RequestBody UserAddRequest user) {
		System.out.println(this.getClass().getSimpleName() + " - Create new band method is invoked.");
		UserData createUser = new UserData();
		createUser.setUsername(user.getUsername());
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		createUser.setPassword(encoder.encode(user.getPassword()));
		createUser.setEnabled("1");
		UserData userAdded = myService.addUser(createUser);
		AuthoritiesData authority = new AuthoritiesData();
		authority.setUsername(user.getUsername());
		authority.setAuthority(user.getAuthority());
		myService.addAuthority(authority);
		return userAdded;
	}
}
