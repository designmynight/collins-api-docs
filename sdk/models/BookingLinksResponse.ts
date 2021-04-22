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
 * 
 * @export
 * @interface BookingLinksResponse
 */
export interface BookingLinksResponse {
    /**
     * Link to download a calendar (.ics) attachment for a booking
     * @type {string}
     * @memberof BookingLinksResponse
     */
    calendar?: string;
    /**
     * Link for a customer to cancel their booking
     * @type {string}
     * @memberof BookingLinksResponse
     */
    cancel?: string;
    /**
     * Link for a customer to change their booking
     * @type {string}
     * @memberof BookingLinksResponse
     */
    change?: string;
    /**
     * Link for a customer to pre-order for their booking (if enabled)
     * @type {string}
     * @memberof BookingLinksResponse
     */
    preorder?: string;
    /**
     * Link for a customer to manage pre-orders for their booking (if enabled)
     * @type {string}
     * @memberof BookingLinksResponse
     */
    managePreorder?: string;
    /**
     * Link for a customer to pay any outstanding deposits for their booking
     * @type {string}
     * @memberof BookingLinksResponse
     */
    payment?: string;
    /**
     * Link for a customer to sign the contract attached to their booking
     * @type {string}
     * @memberof BookingLinksResponse
     */
    signContract?: string;
}

export function BookingLinksResponseFromJSON(json: any): BookingLinksResponse {
    return BookingLinksResponseFromJSONTyped(json, false);
}

export function BookingLinksResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BookingLinksResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'calendar': !exists(json, 'calendar') ? undefined : json['calendar'],
        'cancel': !exists(json, 'cancel') ? undefined : json['cancel'],
        'change': !exists(json, 'change') ? undefined : json['change'],
        'preorder': !exists(json, 'preorder') ? undefined : json['preorder'],
        'managePreorder': !exists(json, 'manage_preorder') ? undefined : json['manage_preorder'],
        'payment': !exists(json, 'payment') ? undefined : json['payment'],
        'signContract': !exists(json, 'sign_contract') ? undefined : json['sign_contract'],
    };
}

export function BookingLinksResponseToJSON(value?: BookingLinksResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'calendar': value.calendar,
        'cancel': value.cancel,
        'change': value.change,
        'preorder': value.preorder,
        'manage_preorder': value.managePreorder,
        'payment': value.payment,
        'sign_contract': value.signContract,
    };
}

