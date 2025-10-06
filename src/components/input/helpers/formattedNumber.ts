const formattedNumber = (
  input: string | number,
  format: string,
  separator: string,
  isDeleting = false
): string => {
  const digits = String(input).replace(/\D/g, '');

  // If they do are deleting, return the same value
  if (isDeleting) return input.toString();

  let formatted = '';
  let digitIndex = 0;

  for (let i = 0; i < format.length; i++) {
    if (format[i] === separator) {
      if (digitIndex < digits.length) formatted += separator;
    } else {
      if (digitIndex < digits.length) {
        formatted += digits[digitIndex];
        digitIndex++;
      } else {
        break;
      }
    }
  }

  return formatted;
};

export default formattedNumber;