export interface Istd {
  sid: number;
  sname: string;
  course: string;
  age: number;
  status: 'active' | 'inactive' | 'completed';
  canEnroll: boolean;
}