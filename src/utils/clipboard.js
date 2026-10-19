/**
 * Clipboard helper with navigator.clipboard primary and fallback textarea
 */
export function copyTextToClipboard(text) {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return false;
  }
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).catch(() => {});
    }
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    return true;
  } catch (err) {
    return false;
  }
}

/**
 * Deterministic Sqids-inspired bijective encoder for the live Backend Micro-Demo
 */
export function encodeSqid(seedNumber, customTag = '') {
  const alphabet = '23456789abcdefghijkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ';
  let num = Math.abs(seedNumber);
  let encoded = '';
  while (num > 0) {
    encoded = alphabet[num % alphabet.length] + encoded;
    num = Math.floor(num / alphabet.length);
  }
  const cleanTag = customTag.replace(/[^a-zA-Z0-9-]/g, '').slice(0, 10);
  return cleanTag ? `${cleanTag}-${encoded.slice(0, 4)}` : encoded.slice(0, 6);
}
