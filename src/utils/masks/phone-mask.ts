export function addPhoneMask(phone: string | undefined) {
  if (!phone) return "";

  phone = phone.replace(/\D/g, "");
  phone = phone.replace(/^(\d{2})(\d)/g, "($1) $2");
  phone = phone.replace(/(\d)(\d{4})$/, "$1-$2");
  return phone;
}

export function removePhoneMask(maskedPhone: string) {
  if (!maskedPhone) return "";

  return maskedPhone.replace(/\D/g, "");
}
