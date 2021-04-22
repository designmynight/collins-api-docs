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
    ViewVenueAddress,
    ViewVenueAddressFromJSON,
    ViewVenueAddressFromJSONTyped,
    ViewVenueAddressToJSON,
} from './';

/**
 * 
 * @export
 * @interface ViewVenue
 */
export interface ViewVenue {
    /**
     * The ID of the venue.
     * @type {string}
     * @memberof ViewVenue
     */
    id?: string;
    /**
     * The name of the venue.
     * @type {string}
     * @memberof ViewVenue
     */
    title?: string | null;
    /**
     * The ID of the venue group which this venue belongs to.
     * @type {string}
     * @memberof ViewVenue
     */
    venueGroup?: string;
    /**
     * Whether this venue is responsible for managing it's own bookings
     * @type {boolean}
     * @memberof ViewVenue
     */
    manageOwnBookings?: boolean;
    /**
     * The visibility of this venue on the DesignMyNight website
     * @type {string}
     * @memberof ViewVenue
     */
    status?: ViewVenueStatusEnum;
    /**
     * A customisable venue identifier
     * @type {string}
     * @memberof ViewVenue
     */
    storeCode?: string;
    /**
     * 
     * @type {ViewVenueAddress}
     * @memberof ViewVenue
     */
    address?: ViewVenueAddress;
    /**
     * An array of tag IDs which this venue is associated with. Tag IDs correspond to tags defined on the venue group.
     * @type {Array<string>}
     * @memberof ViewVenue
     */
    tags?: Array<string>;
    /**
     * The date and time the venue was created.
     * @type {Date}
     * @memberof ViewVenue
     */
    createdDate?: Date;
    /**
     * The date and time the venue was last updated.
     * @type {Date}
     * @memberof ViewVenue
     */
    lastUpdated?: Date;
}

/**
* @export
* @enum {string}
*/
export enum ViewVenueStatusEnum {
    Public = 'public',
    Private = 'private',
    Inactive = 'inactive'
}

export function ViewVenueFromJSON(json: any): ViewVenue {
    return ViewVenueFromJSONTyped(json, false);
}

export function ViewVenueFromJSONTyped(json: any, ignoreDiscriminator: boolean): ViewVenue {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'title': !exists(json, 'title') ? undefined : json['title'],
        'venueGroup': !exists(json, 'venue_group') ? undefined : json['venue_group'],
        'manageOwnBookings': !exists(json, 'manage_own_bookings') ? undefined : json['manage_own_bookings'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'storeCode': !exists(json, 'store_code') ? undefined : json['store_code'],
        'address': !exists(json, 'address') ? undefined : ViewVenueAddressFromJSON(json['address']),
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'createdDate': !exists(json, 'created_date') ? undefined : (new Date(json['created_date'])),
        'lastUpdated': !exists(json, 'last_updated') ? undefined : (new Date(json['last_updated'])),
    };
}

export function ViewVenueToJSON(value?: ViewVenue | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'title': value.title,
        'venue_group': value.venueGroup,
        'manage_own_bookings': value.manageOwnBookings,
        'status': value.status,
        'store_code': value.storeCode,
        'address': ViewVenueAddressToJSON(value.address),
        'tags': value.tags,
        'created_date': value.createdDate === undefined ? undefined : (value.createdDate.toISOString()),
        'last_updated': value.lastUpdated === undefined ? undefined : (value.lastUpdated.toISOString()),
    };
}

