export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const formatWithComma = (value: string) => {
  const num = value.replace(/,/g, ""); // 기존 쉼표 제거
  if (isNaN(Number(num))) return ""; // 숫자가 아니면 무시
  return Number(num).toLocaleString(); // 쉼표 붙이기
};
