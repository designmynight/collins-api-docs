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
    ViewVenue,
    ViewVenueFromJSON,
    ViewVenueFromJSONTyped,
    ViewVenueToJSON,
} from './';

/**
 * 
 * @export
 * @interface VenueListResponse
 */
export interface VenueListResponse {
    /**
     * 
     * @type {Array<ViewVenue>}
     * @memberof VenueListResponse
     */
    venues?: Array<ViewVenue>;
}

export function VenueListResponseFromJSON(json: any): VenueListResponse {
    return VenueListResponseFromJSONTyped(json, false);
}

export function VenueListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): VenueListResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'venues': !exists(json, 'venues') ? undefined : ((json['venues'] as Array<any>).map(ViewVenueFromJSON)),
    };
}

export function VenueListResponseToJSON(value?: VenueListResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'venues': value.venues === undefined ? undefined : ((value.venues as Array<any>).map(ViewVenueToJSON)),
    };
}


