package com.api.parkingcontrol.services;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.api.parkingcontrol.models.ParkinSpotModel;
import com.api.parkingcontrol.repositories.IParkingSpotRepository;

@Service
public class ParkingSpotService 
{
//	@Autowired
//	IParkingSpotRepository parkingSpotRepository;
	final IParkingSpotRepository parkingSpotRepository;
	
	public ParkingSpotService(IParkingSpotRepository parkingSpotRepository) {
			this.parkingSpotRepository = parkingSpotRepository;

	}

	@Transactional
	public ParkinSpotModel save(ParkinSpotModel parkingSpotModel) {
		// TODO Auto-generated method stub
		return parkingSpotRepository.save(parkingSpotModel);
	}

	public boolean existsByLicensePlateCar(String licensePlateCar) {
		// TODO Auto-generated method stub
		return parkingSpotRepository.existsByLicensePlateCar(licensePlateCar);
	}

	public boolean existsByParkingSpotNumber(String parkingSpotNumber) {
		// TODO Auto-generated method stub
		return parkingSpotRepository.existsByParkingSpotNumber(parkingSpotNumber);
	}

	public boolean existsByApartmentAndBlock(String apartment, String block) {
		// TODO Auto-generated method stub
		return parkingSpotRepository.existsByApartmentAndBlock(apartment, block);
	}

	public Page<ParkinSpotModel> findAll(Pageable pageable) {
		// TODO Auto-generated method stub
		return parkingSpotRepository.findAll(pageable);
	}

	public Optional<ParkinSpotModel> findById(UUID id) {
		// TODO Auto-generated method stub
		return parkingSpotRepository.findById(id);
	}

	@Transactional
	public void delete(ParkinSpotModel parkinSpotModel) {
		// TODO Auto-generated method stub
		parkingSpotRepository.delete(parkinSpotModel);
	}
	
}
