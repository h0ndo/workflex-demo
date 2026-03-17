export type WorkstationRisk = 'HIGH' | 'LOW' | 'NO';

export interface WorkstationApiModel {
  workstationId: string;
  employee: string;
  originCountry: string;
  destinationCountry: string;
  startDate: string;
  endDate: string;
  officeDays: number;
  risk: WorkstationRisk;
}
