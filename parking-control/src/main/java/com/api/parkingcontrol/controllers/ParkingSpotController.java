package com.api.parkingcontrol.controllers;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import javax.validation.Valid;

import org.springframework.beans.BeanUtils;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.api.parkingcontrol.dtos.ParkingSpotDTO;
import com.api.parkingcontrol.models.ParkinSpotModel;
import com.api.parkingcontrol.services.ParkingSpotService;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;


@RestController
@CrossOrigin(origins = "*", maxAge=3600)
@RequestMapping("/parking-spot")
public class ParkingSpotController 
{
	final ParkingSpotService parkingSporService;

	public ParkingSpotController(ParkingSpotService parkingSporService) {
		this.parkingSporService = parkingSporService;
	} 
	
	@PostMapping
	public ResponseEntity<Object> saveParkingSpot(@RequestBody @Valid ParkingSpotDTO parkingSpotDto)
	{
		
		if(parkingSporService.existsByLicensePlateCar(parkingSpotDto.getLicensePlateCar()))
		{
			return ResponseEntity.status(HttpStatus.CONFLICT).body("Conflict License");
		}
		if(parkingSporService.existsByParkingSpotNumber(parkingSpotDto.getParkingSpotNumber()))
		{
			return ResponseEntity.status(HttpStatus.CONFLICT).body("Conflict Spor Number");
		}
		if(parkingSporService.existsByApartmentAndBlock(parkingSpotDto.getApartment(),parkingSpotDto.getBlock())) 
		{
			return ResponseEntity.status(HttpStatus.CONFLICT).body("Conflict ja existe 1 vaga");
		}
		
		var parkingSpotModel = new ParkinSpotModel();
		
		BeanUtils.copyProperties(parkingSpotDto, parkingSpotModel);
		
		parkingSpotModel.setRegistrationDate(LocalDateTime.now(ZoneId.of("UTC")));
		
		return ResponseEntity.status(HttpStatus.CREATED).body(parkingSporService.save(parkingSpotModel));
	}
	
	@GetMapping
	public ResponseEntity<Page<ParkinSpotModel>> getAllParkingSpots(
			@PageableDefault(page=0, size=10,sort="id", direction = Sort.Direction.ASC) Pageable pageable
			)
	{
		Page<ParkinSpotModel> parkingSpot  = parkingSporService.findAll(pageable);
		for(ParkinSpotModel parking: parkingSpot)
		{
			UUID id =  parking.getId();
			parking.add(linkTo(methodOn(ParkingSpotController.class).getOneParkingSpot(id)).withSelfRel());
		}
		
		return ResponseEntity.status(HttpStatus.OK).body(parkingSpot);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Object> getOneParkingSpot(@PathVariable(value = "id") UUID id)
	{
		Optional<ParkinSpotModel> parkingSpotModeloptional = parkingSporService.findById(id);
		if(!parkingSpotModeloptional.isPresent())
		{
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Parking Spot not found"); 
		}
		
		parkingSpotModeloptional.get().add(linkTo(methodOn(ParkingSpotController.class).getAllParkingSpots(null)).withRel("Listar todos"));
		
		return ResponseEntity.status(HttpStatus.OK).body(parkingSpotModeloptional.get());
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Object> deleteParkingSpot(@PathVariable(value = "id") UUID id)
	{
		Optional<ParkinSpotModel> parkingSpotModeloptional = parkingSporService.findById(id);
		if(!parkingSpotModeloptional.isPresent())
		{
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Parking Spot not found"); 
		}
		parkingSporService.delete(parkingSpotModeloptional.get());
		
		return ResponseEntity.status(HttpStatus.OK).body(parkingSpotModeloptional.get());
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Object> updateParkingSpot(@PathVariable(value = "id") UUID id,
		@RequestBody @Valid ParkingSpotDTO parkingSpotDto)
	{
		Optional<ParkinSpotModel> parkingSpotModeloptional = parkingSporService.findById(id);
		if(!parkingSpotModeloptional.isPresent())
		{
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Parking Spot not found"); 
		}
		var parkingSpotModel =  new ParkinSpotModel();
		BeanUtils.copyProperties(parkingSpotDto, parkingSpotModel);
		parkingSpotModel.setId(parkingSpotModeloptional.get().getId());
		parkingSpotModel.setRegistrationDate(parkingSpotModeloptional.get().getRegistrationDate());


		return ResponseEntity.status(HttpStatus.OK).body(parkingSporService.save(parkingSpotModel));
	}
	
}
