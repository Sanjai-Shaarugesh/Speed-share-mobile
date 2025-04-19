const sdpCompact = require('sdp-compact') as {
  compactSDP: (s: string) => string;
  decompactSDP: (s: string, isOffer: boolean) => string;
};

export function sdpEncode(s: string): string {
  return sdpCompact.compactSDP(s)
    .replace(/\//g, '_')
    .replace(/\+/g, '~')
    .replace(/=/g, '-');
}

export function sdpDecode(s: string, isOffer: boolean): string {
  const base64 = s
    .replace(/_/g, '/')
    .replace(/~/g, '+')
    .replace(/-/g, '=');

  return sdpCompact.decompactSDP(base64, isOffer);
}
