export const cn = (...classes: Array<string | false | null | undefined>) => classes.filter(Boolean).join(' ');
export const currency = (value?: number) => (value === undefined ? 'Valor não definido' : `R$ ${value.toFixed(2)}`);
