export function formatDate(dateInput: string | number | undefined | null): string {
  if (!dateInput) return "N/A";

  let date = new Date(dateInput);

  const time = date.getTime();
  
  if (isNaN(time) || date.getFullYear() === 1970) {
    date = new Date(Number(dateInput) * 1000);
  }
  if (isNaN(date.getTime())) return "Invalid Date";

  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}