
export interface Patient {
  id: number;
  name: string;
  email: string;
  gender: string;
  telephone: string;
  birthDate: string;
  lastAttendance: string;
}

export interface ResponsePatients {
  current_page: number;
  data: Patient[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url?: any;
  to: number;
  total: number;
}
