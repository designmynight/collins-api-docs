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
    MoneyResponse,
    MoneyResponseFromJSON,
    MoneyResponseFromJSONTyped,
    MoneyResponseToJSON,
} from './';

/**
 * 
 * @export
 * @interface ViewDeposit
 */
export interface ViewDeposit {
    /**
     * The ID of the deposit.
     * @type {string}
     * @memberof ViewDeposit
     */
    id?: string;
    /**
     * 
     * @type {MoneyResponse}
     * @memberof ViewDeposit
     */
    amount?: MoneyResponse;
    /**
     * Describes how the deposit was paid for.
     * @type {string}
     * @memberof ViewDeposit
     */
    paidType?: string | null;
    /**
     * The status which the deposit is in.
     * @type {string}
     * @memberof ViewDeposit
     */
    status?: ViewDepositStatusEnum;
    /**
     * The type of deposit.
     * @type {string}
     * @memberof ViewDeposit
     */
    type?: ViewDepositTypeEnum;
    /**
     * Any notes that are attached to this deposit.
     * @type {string}
     * @memberof ViewDeposit
     */
    notes?: string | null;
    /**
     * The Stripe payment reference for this deposit.
     * @type {string}
     * @memberof ViewDeposit
     */
    paymentRef?: string | null;
    /**
     * The date when the deposit was created.
     * @type {Date}
     * @memberof ViewDeposit
     */
    date?: Date;
    /**
     * An array of refund IDs relating to this deposit. These IDs relate to the `refunds` array within a booking.
     * @type {Array<string>}
     * @memberof ViewDeposit
     */
    refundIds?: Array<string>;
}

/**
* @export
* @enum {string}
*/
export enum ViewDepositStatusEnum {
    Pending = 'pending',
    Paid = 'paid'
}/**
* @export
* @enum {string}
*/
export enum ViewDepositTypeEnum {
    RequestAuth = 'request_auth',
    ManualAuth = 'manual_auth',
    RequestPayment = 'request_payment',
    ManualPayment = 'manual_payment',
    CustomerPreorder = 'customer_preorder'
}

export function ViewDepositFromJSON(json: any): ViewDeposit {
    return ViewDepositFromJSONTyped(json, false);
}

export function ViewDepositFromJSONTyped(json: any, ignoreDiscriminator: boolean): ViewDeposit {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'amount': !exists(json, 'amount') ? undefined : MoneyResponseFromJSON(json['amount']),
        'paidType': !exists(json, 'paid_type') ? undefined : json['paid_type'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'notes': !exists(json, 'notes') ? undefined : json['notes'],
        'paymentRef': !exists(json, 'payment_ref') ? undefined : json['payment_ref'],
        'date': !exists(json, 'date') ? undefined : (new Date(json['date'])),
        'refundIds': !exists(json, 'refund_ids') ? undefined : json['refund_ids'],
    };
}

export function ViewDepositToJSON(value?: ViewDeposit | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'amount': MoneyResponseToJSON(value.amount),
        'paid_type': value.paidType,
        'status': value.status,
        'type': value.type,
        'notes': value.notes,
        'payment_ref': value.paymentRef,
        'date': value.date === undefined ? undefined : (value.date.toISOString()),
        'refund_ids': value.refundIds,
    };
}


