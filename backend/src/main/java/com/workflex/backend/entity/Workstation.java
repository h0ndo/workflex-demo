package com.workflex.backend.entity;

import com.workflex.backend.enums.WorkstationRisk;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.time.LocalDate;

@Entity
@Table(name = "workstations")
public class Workstation {

    @Id
    @Column(name = "workstation_id", nullable = false, length = 32)
    private String workstationId;

    @Column(nullable = false, length = 120)
    private String employee;

    @Column(name = "origin_country", nullable = false, length = 120)
    private String originCountry;

    @Column(name = "destination_country", nullable = false, length = 120)
    private String destinationCountry;

    @Column(name = "start_date", nullable = false)
    private LocalDate startDate;

    @Column(name = "end_date", nullable = false)
    private LocalDate endDate;

    @Column(name = "office_days", nullable = false)
    private Integer officeDays;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 16)
    private WorkstationRisk risk;

    public String getWorkstationId() {
        return workstationId;
    }

    public void setWorkstationId(String workstationId) {
        this.workstationId = workstationId;
    }

    public String getEmployee() {
        return employee;
    }

    public void setEmployee(String employee) {
        this.employee = employee;
    }

    public String getOriginCountry() {
        return originCountry;
    }

    public void setOriginCountry(String originCountry) {
        this.originCountry = originCountry;
    }

    public String getDestinationCountry() {
        return destinationCountry;
    }

    public void setDestinationCountry(String destinationCountry) {
        this.destinationCountry = destinationCountry;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }

    public Integer getOfficeDays() {
        return officeDays;
    }

    public void setOfficeDays(Integer officeDays) {
        this.officeDays = officeDays;
    }

    public WorkstationRisk getRisk() {
        return risk;
    }

    public void setRisk(WorkstationRisk risk) {
        this.risk = risk;
    }
}
