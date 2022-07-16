/// <reference types="node" />
import http2, { IncomingHttpHeaders, IncomingHttpStatusHeader } from 'http2';
import { HttpRequestOptions, JsonObjectLike, AnyResponse } from './http';
import { Credentials } from './authentication';
/**
 * Create a HTTP/2.0 client session.
 *
 * This invocation requires the credentials to have
 */
export declare function createHttpSession(credentials: Credentials): Promise<http2.ClientHttp2Session>;
export declare class Http2Response<T = JsonObjectLike> implements AnyResponse<T> {
    headers: IncomingHttpHeaders & IncomingHttpStatusHeader;
    private raw;
    ok: boolean;
    redirected: boolean;
    status: number;
    constructor(headers: IncomingHttpHeaders & IncomingHttpStatusHeader, stream: http2.ClientHttp2Stream, raw: T);
    json(): T;
}
export declare function createHttp2Request<T>(options: HttpRequestOptions<T>, session: http2.ClientHttp2Session, credentials: Credentials): Promise<Http2Response>;
