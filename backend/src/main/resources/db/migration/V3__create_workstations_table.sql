CREATE TABLE workstations (
  workstation_id VARCHAR(32) PRIMARY KEY,
  employee VARCHAR(120) NOT NULL,
  origin_country VARCHAR(120) NOT NULL,
  destination_country VARCHAR(120) NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  office_days INTEGER NOT NULL,
  risk VARCHAR(16) NOT NULL
);
