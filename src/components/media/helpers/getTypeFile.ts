const getTypeFile = (type?: string | null | undefined): string => {
  // If type doesn't exist return unknown
  if (!type) return 'unknown';

  // Office type
  if (
    type.includes('msword') ||
    type.includes('officedocument') ||
    type.includes('vnd.ms-excel') ||
    type.includes('vnd.ms-powerpoint')
  ) {
    return 'officedocument';
  }

  // Main files types
  if (type.startsWith('image/')) return 'image';
  if (type.startsWith('video/')) return 'video';
  if (type.startsWith('audio/')) return 'audio';

  // Document type
  if (type === 'application/pdf') return 'document';

  // Compressed types
  if (
    type === 'application/zip' ||
    type.includes('compressed') ||
    type.includes('rar')
  ) return 'compressed';

  // Files of data integration
  if (type.includes('json') || type.includes('csv') || type.includes('xml'))
    return 'integration';

  // Plain text
  if (type.startsWith('text/')) return 'text';

  return 'unknown';
};

export default getTypeFile;