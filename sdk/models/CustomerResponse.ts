/* tslint:disable */
/* eslint-disable */
/**
 * Collins API
 * This site provides details on the various ways that you can integrate with Collins. Not sure you want to be here after all? Check out what’s new on the [London Bar Scene](https://www.designmynight.com/london/new-bar-spy) instead. 
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    ViewCustomer,
    ViewCustomerFromJSON,
    ViewCustomerFromJSONTyped,
    ViewCustomerToJSON,
} from './';

/**
 * 
 * @export
 * @interface CustomerResponse
 */
export interface CustomerResponse {
    /**
     * 
     * @type {ViewCustomer}
     * @memberof CustomerResponse
     */
    customer?: ViewCustomer;
}

export function CustomerResponseFromJSON(json: any): CustomerResponse {
    return CustomerResponseFromJSONTyped(json, false);
}

export function CustomerResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'customer': !exists(json, 'customer') ? undefined : ViewCustomerFromJSON(json['customer']),
    };
}

export function CustomerResponseToJSON(value?: CustomerResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'customer': ViewCustomerToJSON(value.customer),
    };
}

