/** 0546887442 becomes 054-6887442. */
export const formatPhone = (phone: string) => phone.replace(/^(\d{3})(\d{7})$/, "$1-$2");

/** 0546887442 becomes +972546887442, for tel: links and structured data. */
export const intlPhone = (phone: string) => `+972${phone.slice(1)}`;

/** The site address without https://, for printing. */
export const bareUrl = (url: string) => url.replace("https://", "");
