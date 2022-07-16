/// <reference types="node" />
import { IncomingMessage } from 'http';
import { Credentials } from './authentication';
export declare type JsonObjectLike = Record<string, unknown>;
export interface HttpRequestOptions<T = JsonObjectLike> {
    /**
     * Relative URL (relative to LCU API base url) to send api request to
     */
    url: string;
    /**
     * Http verb to use for request
     */
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
    /**
     * Optionally a body to pass to PUT/PATCH/POST/DELETE. This is typically
     * an object type as the library will parse this into JSON and send along
     * with the request
     */
    body?: T;
}
/** Shared HTTP/1.1 and HTTP/2.0 response interface */
export interface AnyResponse<T> {
    ok: boolean;
    redirected: boolean;
    status: number;
    json(): T;
}
/**
 * Mini-wrapper around http.IncomingMessage implementing common fields found in
 * fetch for easier transition from v5
 *
 * The previous implementation used fetch, so the fields ok, redirected, status
 * and statusText have been preserved.
 */
export declare class Http1Response<T = JsonObjectLike> implements AnyResponse<T> {
    message: IncomingMessage;
    private raw;
    ok: boolean;
    redirected: boolean;
    status: number;
    statusText: string;
    constructor(message: IncomingMessage, raw: T);
    /** Convenience method kept for easy migration from v5 */
    json(): T;
}
export declare function createHttp1Request<T = JsonObjectLike, R = JsonObjectLike>(options: HttpRequestOptions, credentials: Credentials): Promise<Http1Response<R>>;
export declare function trim(s: string): string;
