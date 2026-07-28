type NetlifyImageOpts = {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'avif' | 'webp' | 'jpg' | 'png';
  fit?: 'contain' | 'cover' | 'fill';
};

export function netlifyImage(sourceUrl: string, opts: NetlifyImageOpts = {}) {
  const params = new URLSearchParams({ url: sourceUrl });
  if (opts.width) params.set('w', String(opts.width));
  if (opts.height) params.set('h', String(opts.height));
  if (opts.quality) params.set('q', String(opts.quality));
  if (opts.format) params.set('fm', opts.format);
  if (opts.fit) params.set('fit', opts.fit);
  return `/.netlify/images?${params.toString()}`;
}
