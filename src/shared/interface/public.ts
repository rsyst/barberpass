export interface iClient {
  id: string
  name: string
  phoneNumber: string
  document: string
  email: string
  password: string
  created_at: string
  updated_at: string
}

export interface iBarberShop {
  id: string
  name: string
  document: string
  phoneNumber: string
  email: string
  password: string
}

export interface iBarber {
  id: string
  barberShopId: string
  name: string
  phoneNumber: string
  startWork: string
  endWork: string
  timePerWork: number
  email: string
  password?: string
  created_at: string
  updated_at: string
}

export interface iService {
  id: string
  name: string
  price: string
  workAmount: string
}

export interface iCompany {
  id: string
  name: string
  companyName: string
  email: string
  password: string
  document: string
  phoneNumber: string
  created_at: string
  updated_at: string
}

export interface iAppointment {
  id: string
  start: string
  end: string
  serviceId: string
  barberId: string
  clientId: string
  statusId: string
}

export interface iStatus {
  id: string
  key: Status
  pt: string
}

export type Status = 'OCCUPIED' | 'CONFIRMED' | 'BREAK' | 'EMPTY'
