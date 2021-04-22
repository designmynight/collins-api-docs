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
/**
 * The address of the customer's company
 * @export
 * @interface ViewCustomerCompanyAddress
 */
export interface ViewCustomerCompanyAddress {
    /**
     * The street name of the company
     * @type {string}
     * @memberof ViewCustomerCompanyAddress
     */
    street?: string;
    /**
     * The city which the company is located
     * @type {string}
     * @memberof ViewCustomerCompanyAddress
     */
    city?: string;
    /**
     * The post code of the company
     * @type {string}
     * @memberof ViewCustomerCompanyAddress
     */
    postCode?: string;
}

export function ViewCustomerCompanyAddressFromJSON(json: any): ViewCustomerCompanyAddress {
    return ViewCustomerCompanyAddressFromJSONTyped(json, false);
}

export function ViewCustomerCompanyAddressFromJSONTyped(json: any, ignoreDiscriminator: boolean): ViewCustomerCompanyAddress {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'street': !exists(json, 'street') ? undefined : json['street'],
        'city': !exists(json, 'city') ? undefined : json['city'],
        'postCode': !exists(json, 'post_code') ? undefined : json['post_code'],
    };
}

export function ViewCustomerCompanyAddressToJSON(value?: ViewCustomerCompanyAddress | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'street': value.street,
        'city': value.city,
        'post_code': value.postCode,
    };
}

