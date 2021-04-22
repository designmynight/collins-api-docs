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
 * @interface ViewNotification
 */
export interface ViewNotification {
    /**
     * The ID of the notification.
     * @type {string}
     * @memberof ViewNotification
     */
    id?: string;
    /**
     * The status of the notification
     * @type {string}
     * @memberof ViewNotification
     */
    status?: ViewNotificationStatusEnum;
    /**
     * The type of notification
     * @type {string}
     * @memberof ViewNotification
     */
    type?: ViewNotificationTypeEnum;
}

/**
* @export
* @enum {string}
*/
export enum ViewNotificationStatusEnum {
    New = 'new',
    Unread = 'unread'
}/**
* @export
* @enum {string}
*/
export enum ViewNotificationTypeEnum {
    EmailDeliveryFailed = 'email_delivery_failed',
    ContractSigned = 'contract_signed',
    CustomerCancelled = 'customer_cancelled',
    CustomerNotes = 'customer_notes'
}

export function ViewNotificationFromJSON(json: any): ViewNotification {
    return ViewNotificationFromJSONTyped(json, false);
}

export function ViewNotificationFromJSONTyped(json: any, ignoreDiscriminator: boolean): ViewNotification {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function ViewNotificationToJSON(value?: ViewNotification | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'status': value.status,
        'type': value.type,
    };
}

