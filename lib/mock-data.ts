import { AppData, DayRoutine } from './types';

const emptyDay = (): DayRoutine => ({ enabled: false, start: '', end: '', pauseStart: '', pauseEnd: '', note: '' });
const today = new Date().toISOString().slice(0, 10);

export const initialData: AppData = {
  services: [
    { id: 's1', name: 'Gel na tips', description: 'Especialidade', category: 'Gel', duration: 120, active: true, notes: 'Valor não definido' },
    { id: 's2', name: 'Banho de gel', description: 'Exemplo editável', category: 'Gel', duration: 90, active: true, notes: '' },
  ],
  clients: [{ id: 'c1', name: 'Cliente Exemplo', whatsapp: '5583999999999', notes: '' }],
  appointments: [{ id: 'a1', clientId: 'c1', clientName: 'Cliente Exemplo', whatsapp: '5583999999999', serviceId: 's1', serviceName: 'Gel na tips', date: today, time: '09:00', duration: 120, signalPaid: 0, paymentStatus: 'Pendente', status: 'Marcado', notes: '' }],
  reminders: [{ id: 'r1', text: 'Conferir materiais', done: false, date: today }],
  blocks: [{ id: 'b1', date: today, start: '13:00', end: '14:00', reason: 'compromisso pessoal' }],
  routine: {
    durationDefault: 90,
    remindersBeforeMin: 60,
    days: { segunda: emptyDay(), terca: emptyDay(), quarta: emptyDay(), quinta: emptyDay(), sexta: emptyDay(), sabado: emptyDay(), domingo: emptyDay() },
  },
};
