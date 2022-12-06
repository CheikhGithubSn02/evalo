import { IDepartment, NewDepartment } from './department.model';

export const sampleWithRequiredData: IDepartment = {
  id: 39095,
  departmentName: 'neutral markets',
};

export const sampleWithPartialData: IDepartment = {
  id: 15133,
  departmentName: 'Incredible Games Table',
};

export const sampleWithFullData: IDepartment = {
  id: 20843,
  departmentName: 'Mozambique',
};

export const sampleWithNewData: NewDepartment = {
  departmentName: 'Assistant',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
