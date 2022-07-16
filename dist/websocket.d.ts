import WebSocket, { ClientOptions } from 'ws';
import { AuthenticationOptions } from './authentication';
export interface EventResponse<T = any> {
    /**
     * The uri this event was dispatched at
     */
    uri: string;
    /**
     * The data, if any
     */
    data: T;
}
/**
 * Callback function for an subscription listener
 *
 * @param data The data payload (deserialized json)
 */
export declare type EventCallback<T = any> = (data: T | null, event: EventResponse<T>) => void;
/**
 * WebSocket extension
 */
export declare class LeagueWebSocket extends WebSocket {
    subscriptions: Map<string, EventCallback[]>;
    constructor(address: string, options: ClientOptions);
    subscribe<T extends any = any>(path: string, effect: EventCallback<T>): void;
    unsubscribe(path: string): void;
}
export interface ConnectionOptions {
    /**
     * Options that will be used to authenticate to the LCU WebSocket API
     */
    authenticationOptions: AuthenticationOptions;
    /**
     * Polling interval in case connection fails.
     *
     * Default: 1000
     */
    pollInterval: number;
    /** Internal, do not use, only used for testing. */
    __internalMockFaultyConnection?: number;
    __internalMockCallback?: () => void;
}
export declare function createWebSocketConnection(options: ConnectionOptions): Promise<LeagueWebSocket>;
