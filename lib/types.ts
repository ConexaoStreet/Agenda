export type Tab = 'hoje' | 'agenda' | 'clientes' | 'financeiro' | 'mais';
export type AppointmentStatus = 'Marcado' | 'Confirmado' | 'Remarcado' | 'Concluído' | 'Cancelado' | 'Pendente';
export type PaymentStatus = 'Não pago' | 'Sinal pago' | 'Pago completo' | 'Pendente';

export interface Service {
  id: string;
  name: string;
  description: string;
  category: string;
  duration: number;
  value?: number;
  active: boolean;
  notes: string;
}

export interface Client {
  id: string;
  name: string;
  whatsapp: string;
  notes: string;
}

export interface Appointment {
  id: string;
  clientId?: string;
  clientName: string;
  whatsapp: string;
  serviceId?: string;
  serviceName: string;
  date: string;
  time: string;
  duration: number;
  value?: number;
  signalPaid: number;
  paymentStatus: PaymentStatus;
  status: AppointmentStatus;
  notes: string;
  rescheduleHistory?: { fromDate: string; fromTime: string; toDate: string; toTime: string; reason: string; at: string }[];
}

export interface Reminder { id: string; text: string; done: boolean; date: string; }
export interface Block { id: string; date: string; start?: string; end?: string; reason: string; }

export type DayRoutine = { enabled: boolean; start: string; end: string; pauseStart: string; pauseEnd: string; note: string };
export interface WorkRoutine {
  durationDefault: number;
  remindersBeforeMin: number;
  days: Record<string, DayRoutine>;
}

export interface AppData {
  services: Service[];
  clients: Client[];
  appointments: Appointment[];
  reminders: Reminder[];
  blocks: Block[];
  routine: WorkRoutine;
}
