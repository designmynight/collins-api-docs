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
 * @interface InlineObject
 */
export interface InlineObject {
    /**
     * Array of bookable area IDs
     * @type {Array<string>}
     * @memberof InlineObject
     */
    areas?: Array<string>;
}

export function InlineObjectFromJSON(json: any): InlineObject {
    return InlineObjectFromJSONTyped(json, false);
}

export function InlineObjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineObject {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'areas': !exists(json, 'areas') ? undefined : json['areas'],
    };
}

export function InlineObjectToJSON(value?: InlineObject | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'areas': value.areas,
    };
}


