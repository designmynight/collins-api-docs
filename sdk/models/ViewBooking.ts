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
    ViewBookingAssignedAreas,
    ViewBookingAssignedAreasFromJSON,
    ViewBookingAssignedAreasFromJSONTyped,
    ViewBookingAssignedAreasToJSON,
    ViewBookingCompanyAddress,
    ViewBookingCompanyAddressFromJSON,
    ViewBookingCompanyAddressFromJSONTyped,
    ViewBookingCompanyAddressToJSON,
    ViewBookingType,
    ViewBookingTypeFromJSON,
    ViewBookingTypeFromJSONTyped,
    ViewBookingTypeToJSON,
    ViewDeposit,
    ViewDepositFromJSON,
    ViewDepositFromJSONTyped,
    ViewDepositToJSON,
    ViewRefund,
    ViewRefundFromJSON,
    ViewRefundFromJSONTyped,
    ViewRefundToJSON,
} from './';

/**
 * 
 * @export
 * @interface ViewBooking
 */
export interface ViewBooking {
    /**
     * The ID of the booking.
     * @type {string}
     * @memberof ViewBooking
     */
    id?: string;
    /**
     * The user ID which the booking is assigned to.
     * @type {string}
     * @memberof ViewBooking
     */
    assignedTo?: string | null;
    /**
     * The user ID which the booking was created by.
     * @type {string}
     * @memberof ViewBooking
     */
    createdBy?: string | null;
    /**
     * The status of the booking
     * @type {string}
     * @memberof ViewBooking
     */
    status?: ViewBookingStatusEnum;
    /**
     * The date and time the status was last changed.
     * @type {Date}
     * @memberof ViewBooking
     */
    statusChangedDate?: Date | null;
    /**
     * The date and time the follow up email should be sent.
     * @type {Date}
     * @memberof ViewBooking
     */
    followUp?: Date | null;
    /**
     * The booking reference ID.
     * @type {number}
     * @memberof ViewBooking
     */
    reference?: number | null;
    /**
     * The venue ID which the booking is associated with.
     * @type {string}
     * @memberof ViewBooking
     */
    venueId?: string | null;
    /**
     * The venue group ID which the booking is associated with.
     * @type {string}
     * @memberof ViewBooking
     */
    venueGroup?: string;
    /**
     * An array of areas the booking is assigned to.
     * @type {Array<ViewBookingAssignedAreas>}
     * @memberof ViewBooking
     */
    assignedAreas?: Array<ViewBookingAssignedAreas>;
    /**
     * Whether the assigned areas have been locked.
     * @type {boolean}
     * @memberof ViewBooking
     */
    assignedAreaLocked?: boolean;
    /**
     * The user ID of the user who locked the assigned areas.
     * @type {string}
     * @memberof ViewBooking
     */
    assignedAreaLockedBy?: string | null;
    /**
     * The number of people the booking is for.
     * @type {number}
     * @memberof ViewBooking
     */
    numPeople?: number | null;
    /**
     * The date the booking takes place.
     * @type {Date}
     * @memberof ViewBooking
     */
    date?: Date | null;
    /**
     * The time the booking starts in a 24 hour format.
     * @type {string}
     * @memberof ViewBooking
     */
    time?: string | null;
    /**
     * The duration of the booking in minutes.
     * @type {number}
     * @memberof ViewBooking
     */
    duration?: number | null;
    /**
     * 
     * @type {ViewBookingType}
     * @memberof ViewBooking
     */
    type?: ViewBookingType | null;
    /**
     * The total value of this booking.
     * @type {number}
     * @memberof ViewBooking
     */
    value?: number | null;
    /**
     * The customer ID associated with the booking
     * @type {string}
     * @memberof ViewBooking
     */
    customerId?: string | null;
    /**
     * The first name for the booking.
     * @type {string}
     * @memberof ViewBooking
     */
    firstName?: string | null;
    /**
     * The last name for the booking.
     * @type {string}
     * @memberof ViewBooking
     */
    lastName?: string | null;
    /**
     * The email address for the booking.
     * @type {string}
     * @memberof ViewBooking
     */
    email?: string | null;
    /**
     * An array of additional email addresses for the booking.
     * @type {Array<string>}
     * @memberof ViewBooking
     */
    additionalEmails?: Array<string>;
    /**
     * The phone number for the booking.
     * @type {string}
     * @memberof ViewBooking
     */
    phone?: string | null;
    /**
     * An alternative phone number for the booking.
     * @type {string}
     * @memberof ViewBooking
     */
    alternativePhone?: string | null;
    /**
     * The name of the company for the booking.
     * @type {string}
     * @memberof ViewBooking
     */
    company?: string | null;
    /**
     * 
     * @type {ViewBookingCompanyAddress}
     * @memberof ViewBooking
     */
    companyAddress?: ViewBookingCompanyAddress;
    /**
     * An array of any deposits or payments made or requested against this booking.
     * @type {Array<ViewDeposit>}
     * @memberof ViewBooking
     */
    deposits?: Array<ViewDeposit>;
    /**
     * An array of any refunds made against this booking.
     * @type {Array<ViewRefund>}
     * @memberof ViewBooking
     */
    refunds?: Array<ViewRefund>;
    /**
     * Whether the booking has been lost
     * @type {boolean}
     * @memberof ViewBooking
     */
    lost?: boolean;
    /**
     * The number of guests who arrived at the booking. For no-shows, this will be `0`.
     * @type {number}
     * @memberof ViewBooking
     */
    actualGuests?: number | null;
    /**
     * The current stage of the booking.
     * @type {string}
     * @memberof ViewBooking
     */
    currentStage?: string | null;
    /**
     * An array of labels attached to the booking.
     * @type {Array<string>}
     * @memberof ViewBooking
     */
    labels?: Array<string>;
    /**
     * Whether the booking was a walk-in.
     * @type {boolean}
     * @memberof ViewBooking
     */
    walkIn?: boolean;
    /**
     * Whether the booking was auto-confirmed.
     * @type {boolean}
     * @memberof ViewBooking
     */
    autoConfirmed?: boolean;
    /**
     * The partner defined source where this booking came from.
     * @type {string}
     * @memberof ViewBooking
     */
    partnerSource?: string | null;
    /**
     * The date and time the booking was created.
     * @type {Date}
     * @memberof ViewBooking
     */
    createdDate?: Date;
    /**
     * The date and time the booking was last updated.
     * @type {Date}
     * @memberof ViewBooking
     */
    lastUpdated?: Date;
}

/**
* @export
* @enum {string}
*/
export enum ViewBookingStatusEnum {
    New = 'new',
    InProgress = 'in_progress',
    Complete = 'complete',
    Rejected = 'rejected',
    Deleted = 'deleted',
    Lost = 'lost'
}

export function ViewBookingFromJSON(json: any): ViewBooking {
    return ViewBookingFromJSONTyped(json, false);
}

export function ViewBookingFromJSONTyped(json: any, ignoreDiscriminator: boolean): ViewBooking {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'assignedTo': !exists(json, 'assigned_to') ? undefined : json['assigned_to'],
        'createdBy': !exists(json, 'created_by') ? undefined : json['created_by'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'statusChangedDate': !exists(json, 'status_changed_date') ? undefined : (json['status_changed_date'] === null ? null : new Date(json['status_changed_date'])),
        'followUp': !exists(json, 'follow_up') ? undefined : (json['follow_up'] === null ? null : new Date(json['follow_up'])),
        'reference': !exists(json, 'reference') ? undefined : json['reference'],
        'venueId': !exists(json, 'venue_id') ? undefined : json['venue_id'],
        'venueGroup': !exists(json, 'venue_group') ? undefined : json['venue_group'],
        'assignedAreas': !exists(json, 'assigned_areas') ? undefined : ((json['assigned_areas'] as Array<any>).map(ViewBookingAssignedAreasFromJSON)),
        'assignedAreaLocked': !exists(json, 'assigned_area_locked') ? undefined : json['assigned_area_locked'],
        'assignedAreaLockedBy': !exists(json, 'assigned_area_locked_by') ? undefined : json['assigned_area_locked_by'],
        'numPeople': !exists(json, 'num_people') ? undefined : json['num_people'],
        'date': !exists(json, 'date') ? undefined : (json['date'] === null ? null : new Date(json['date'])),
        'time': !exists(json, 'time') ? undefined : json['time'],
        'duration': !exists(json, 'duration') ? undefined : json['duration'],
        'type': !exists(json, 'type') ? undefined : ViewBookingTypeFromJSON(json['type']),
        'value': !exists(json, 'value') ? undefined : json['value'],
        'customerId': !exists(json, 'customer_id') ? undefined : json['customer_id'],
        'firstName': !exists(json, 'first_name') ? undefined : json['first_name'],
        'lastName': !exists(json, 'last_name') ? undefined : json['last_name'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'additionalEmails': !exists(json, 'additional_emails') ? undefined : json['additional_emails'],
        'phone': !exists(json, 'phone') ? undefined : json['phone'],
        'alternativePhone': !exists(json, 'alternative_phone') ? undefined : json['alternative_phone'],
        'company': !exists(json, 'company') ? undefined : json['company'],
        'companyAddress': !exists(json, 'company_address') ? undefined : ViewBookingCompanyAddressFromJSON(json['company_address']),
        'deposits': !exists(json, 'deposits') ? undefined : ((json['deposits'] as Array<any>).map(ViewDepositFromJSON)),
        'refunds': !exists(json, 'refunds') ? undefined : ((json['refunds'] as Array<any>).map(ViewRefundFromJSON)),
        'lost': !exists(json, 'lost') ? undefined : json['lost'],
        'actualGuests': !exists(json, 'actual_guests') ? undefined : json['actual_guests'],
        'currentStage': !exists(json, 'current_stage') ? undefined : json['current_stage'],
        'labels': !exists(json, 'labels') ? undefined : json['labels'],
        'walkIn': !exists(json, 'walk_in') ? undefined : json['walk_in'],
        'autoConfirmed': !exists(json, 'auto_confirmed') ? undefined : json['auto_confirmed'],
        'partnerSource': !exists(json, 'partner_source') ? undefined : json['partner_source'],
        'createdDate': !exists(json, 'created_date') ? undefined : (new Date(json['created_date'])),
        'lastUpdated': !exists(json, 'last_updated') ? undefined : (new Date(json['last_updated'])),
    };
}

export function ViewBookingToJSON(value?: ViewBooking | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'assigned_to': value.assignedTo,
        'created_by': value.createdBy,
        'status': value.status,
        'status_changed_date': value.statusChangedDate === undefined ? undefined : (value.statusChangedDate === null ? null : value.statusChangedDate.toISOString()),
        'follow_up': value.followUp === undefined ? undefined : (value.followUp === null ? null : value.followUp.toISOString()),
        'reference': value.reference,
        'venue_id': value.venueId,
        'venue_group': value.venueGroup,
        'assigned_areas': value.assignedAreas === undefined ? undefined : ((value.assignedAreas as Array<any>).map(ViewBookingAssignedAreasToJSON)),
        'assigned_area_locked': value.assignedAreaLocked,
        'assigned_area_locked_by': value.assignedAreaLockedBy,
        'num_people': value.numPeople,
        'date': value.date === undefined ? undefined : (value.date === null ? null : value.date.toISOString().substr(0,10)),
        'time': value.time,
        'duration': value.duration,
        'type': ViewBookingTypeToJSON(value.type),
        'value': value.value,
        'customer_id': value.customerId,
        'first_name': value.firstName,
        'last_name': value.lastName,
        'email': value.email,
        'additional_emails': value.additionalEmails,
        'phone': value.phone,
        'alternative_phone': value.alternativePhone,
        'company': value.company,
        'company_address': ViewBookingCompanyAddressToJSON(value.companyAddress),
        'deposits': value.deposits === undefined ? undefined : ((value.deposits as Array<any>).map(ViewDepositToJSON)),
        'refunds': value.refunds === undefined ? undefined : ((value.refunds as Array<any>).map(ViewRefundToJSON)),
        'lost': value.lost,
        'actual_guests': value.actualGuests,
        'current_stage': value.currentStage,
        'labels': value.labels,
        'walk_in': value.walkIn,
        'auto_confirmed': value.autoConfirmed,
        'partner_source': value.partnerSource,
        'created_date': value.createdDate === undefined ? undefined : (value.createdDate.toISOString()),
        'last_updated': value.lastUpdated === undefined ? undefined : (value.lastUpdated.toISOString()),
    };
}


