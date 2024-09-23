export function addCpfMask(value: string | undefined) {
  if (!value) return "";

  value = value.replace(/\D/g, "");

  if (value.length > 11) {
    value = value.substring(0, 11);
  }

  if (value.length <= 11) {
    return value
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  }

  return value;
}

export function removeCpfMask(maskedValue: string) {
  if (!maskedValue) return "";

  return maskedValue.replace(/\D/g, "");
}
