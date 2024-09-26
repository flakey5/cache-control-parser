export interface CacheControlDirectives {
  'max-stale'?: number;
  'min-fresh'?: number;
  'max-age'?: number;
  's-maxage'?: number;
  'stale-while-revalidate'?: number;
  'stale-if-error'?: number;
  public?: true;
  private?: true | string[];
  'no-store'?: true;
  'no-cache'?: true | string[];
  'must-revalidate'?: true;
  'proxy-revalidate'?: true;
  immutable?: true;
  'no-transform'?: true;
  'must-understand'?: true;
  'only-if-cached'?: true;
}

export function parseCacheControlHeader(header: string): CacheControlDirectives
