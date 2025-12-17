export const getMimeFromBase64 = (dataUrl: string): string | null => {
  const match = dataUrl.match(/^data:(.*?);base64,/);
  return match ? match[1] ?? null : null;
};

export const getMimeFromBlob = (blob: Blob): string => {
  return blob.type || 'unknown';
};