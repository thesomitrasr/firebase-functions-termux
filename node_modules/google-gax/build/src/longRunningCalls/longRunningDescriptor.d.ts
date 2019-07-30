import { Descriptor } from '../descriptor';
import { CallSettings } from '../gax';
import { Metadata } from '../grpc';
import { OperationsClient } from '../operationsClient';
import { LongrunningApiCaller } from './longRunningApiCaller';
/**
 * A callback to upack a google.protobuf.Any message.
 */
export interface AnyDecoder {
    (message: {}): Metadata;
}
/**
 * A descriptor for long-running operations.
 */
export declare class LongRunningDescriptor implements Descriptor {
    operationsClient: OperationsClient;
    responseDecoder: AnyDecoder;
    metadataDecoder: AnyDecoder;
    constructor(operationsClient: OperationsClient, responseDecoder: AnyDecoder, metadataDecoder: AnyDecoder);
    getApiCaller(settings: CallSettings): LongrunningApiCaller;
}
