
export const formatDate = (date: Date | string) => {
  if (typeof date === 'string') {
    const dateObj = new Date(date + 'T00:00:00'); // Añadir T00:00:00 para evitar la zona horaria
    return dateObj.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });
  }

  return date.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });
}
