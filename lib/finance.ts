import { Appointment } from './types';

export const financeTotals = (appointments: Appointment[]) => {
  const predicted = appointments.reduce((sum, item) => sum + (item.value ?? 0), 0);
  const received = appointments
    .filter((item) => item.paymentStatus === 'Pago completo')
    .reduce((sum, item) => sum + (item.value ?? 0), 0);
  const pending = predicted - received;
  const missingValues = appointments.filter((item) => item.value === undefined).length;
  return { predicted, received, pending, missingValues };
};
