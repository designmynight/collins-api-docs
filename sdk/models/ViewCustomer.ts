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
    ViewCustomerBookings,
    ViewCustomerBookingsFromJSON,
    ViewCustomerBookingsFromJSONTyped,
    ViewCustomerBookingsToJSON,
    ViewCustomerCompanyAddress,
    ViewCustomerCompanyAddressFromJSON,
    ViewCustomerCompanyAddressFromJSONTyped,
    ViewCustomerCompanyAddressToJSON,
    ViewCustomerMarketingPreferences,
    ViewCustomerMarketingPreferencesFromJSON,
    ViewCustomerMarketingPreferencesFromJSONTyped,
    ViewCustomerMarketingPreferencesToJSON,
} from './';

/**
 * 
 * @export
 * @interface ViewCustomer
 */
export interface ViewCustomer {
    /**
     * The customer's ID
     * @type {string}
     * @memberof ViewCustomer
     */
    id?: string;
    /**
     * The customer's email address
     * @type {string}
     * @memberof ViewCustomer
     */
    email?: string;
    /**
     * The customer's first name
     * @type {string}
     * @memberof ViewCustomer
     */
    firstName?: string;
    /**
     * The customer's last name
     * @type {string}
     * @memberof ViewCustomer
     */
    lastName?: string;
    /**
     * The customer's phone number
     * @type {string}
     * @memberof ViewCustomer
     */
    phone?: string;
    /**
     * The name of the customer's company
     * @type {string}
     * @memberof ViewCustomer
     */
    company?: string;
    /**
     * 
     * @type {ViewCustomerCompanyAddress}
     * @memberof ViewCustomer
     */
    companyAddress?: ViewCustomerCompanyAddress;
    /**
     * The customer's date of birth
     * @type {string}
     * @memberof ViewCustomer
     */
    dob?: string;
    /**
     * The value given for the custom field
     * @type {string}
     * @memberof ViewCustomer
     */
    customFieldValue?: string;
    /**
     * An array of associated venue IDs
     * @type {Array<string>}
     * @memberof ViewCustomer
     */
    associatedVenues?: Array<string>;
    /**
     * An array of marketing preferences this user has given or revoked consent to
     * @type {Array<ViewCustomerMarketingPreferences>}
     * @memberof ViewCustomer
     */
    marketingPreferences?: Array<ViewCustomerMarketingPreferences>;
    /**
     * An array of bookings this customer has made
     * @type {Array<ViewCustomerBookings>}
     * @memberof ViewCustomer
     */
    bookings?: Array<ViewCustomerBookings>;
    /**
     * An array of labels that have been applied to the customer
     * @type {Array<string>}
     * @memberof ViewCustomer
     */
    labels?: Array<string>;
    /**
     * Any notes that have been applied to the customer
     * @type {string}
     * @memberof ViewCustomer
     */
    notes?: string;
    /**
     * The date and time the customer was created.
     * 
     * <small>Prior to February 2019, we did not keep 
     * a record of the created date, except for some situations such as data imports. If we don't have 
     * the created date for a customer, `null` will be returned instead.</small>
     * @type {Date}
     * @memberof ViewCustomer
     */
    createdDate?: Date | null;
    /**
     * The date and time the customer was last updated
     * @type {Date}
     * @memberof ViewCustomer
     */
    lastUpdated?: Date;
}

export function ViewCustomerFromJSON(json: any): ViewCustomer {
    return ViewCustomerFromJSONTyped(json, false);
}

export function ViewCustomerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ViewCustomer {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'firstName': !exists(json, 'first_name') ? undefined : json['first_name'],
        'lastName': !exists(json, 'last_name') ? undefined : json['last_name'],
        'phone': !exists(json, 'phone') ? undefined : json['phone'],
        'company': !exists(json, 'company') ? undefined : json['company'],
        'companyAddress': !exists(json, 'company_address') ? undefined : ViewCustomerCompanyAddressFromJSON(json['company_address']),
        'dob': !exists(json, 'dob') ? undefined : json['dob'],
        'customFieldValue': !exists(json, 'custom_field_value') ? undefined : json['custom_field_value'],
        'associatedVenues': !exists(json, 'associated_venues') ? undefined : json['associated_venues'],
        'marketingPreferences': !exists(json, 'marketing_preferences') ? undefined : ((json['marketing_preferences'] as Array<any>).map(ViewCustomerMarketingPreferencesFromJSON)),
        'bookings': !exists(json, 'bookings') ? undefined : ((json['bookings'] as Array<any>).map(ViewCustomerBookingsFromJSON)),
        'labels': !exists(json, 'labels') ? undefined : json['labels'],
        'notes': !exists(json, 'notes') ? undefined : json['notes'],
        'createdDate': !exists(json, 'created_date') ? undefined : (json['created_date'] === null ? null : new Date(json['created_date'])),
        'lastUpdated': !exists(json, 'last_updated') ? undefined : (new Date(json['last_updated'])),
    };
}

export function ViewCustomerToJSON(value?: ViewCustomer | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'email': value.email,
        'first_name': value.firstName,
        'last_name': value.lastName,
        'phone': value.phone,
        'company': value.company,
        'company_address': ViewCustomerCompanyAddressToJSON(value.companyAddress),
        'dob': value.dob,
        'custom_field_value': value.customFieldValue,
        'associated_venues': value.associatedVenues,
        'marketing_preferences': value.marketingPreferences === undefined ? undefined : ((value.marketingPreferences as Array<any>).map(ViewCustomerMarketingPreferencesToJSON)),
        'bookings': value.bookings === undefined ? undefined : ((value.bookings as Array<any>).map(ViewCustomerBookingsToJSON)),
        'labels': value.labels,
        'notes': value.notes,
        'created_date': value.createdDate === undefined ? undefined : (value.createdDate === null ? null : value.createdDate.toISOString()),
        'last_updated': value.lastUpdated === undefined ? undefined : (value.lastUpdated.toISOString()),
    };
}


