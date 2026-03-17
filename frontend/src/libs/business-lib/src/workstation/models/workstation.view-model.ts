export interface WorkstationViewModel {
  workstationId: string;
  employee: string;
  originCountry: string;
  destinationCountry: string;
  startDate: Date;
  endDate: Date;
  officeDays: number;
  risk: 'HIGH' | 'LOW' | 'NO';
}
