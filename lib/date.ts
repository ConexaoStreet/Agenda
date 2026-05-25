export const todayISO = () => new Date().toISOString().slice(0, 10);
export const formatBR = (date: string) => new Date(`${date}T00:00:00`).toLocaleDateString('pt-BR');
