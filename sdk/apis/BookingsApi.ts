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


import * as runtime from '../runtime';
import {
    BookingAssignedAreasResponse,
    BookingAssignedAreasResponseFromJSON,
    BookingAssignedAreasResponseToJSON,
    BookingLinksResponse,
    BookingLinksResponseFromJSON,
    BookingLinksResponseToJSON,
    BookingListResponse,
    BookingListResponseFromJSON,
    BookingListResponseToJSON,
    InlineObject,
    InlineObjectFromJSON,
    InlineObjectToJSON,
    InlineObject1,
    InlineObject1FromJSON,
    InlineObject1ToJSON,
    InlineObject2,
    InlineObject2FromJSON,
    InlineObject2ToJSON,
    InlineResponse401,
    InlineResponse401FromJSON,
    InlineResponse401ToJSON,
    InlineResponse404,
    InlineResponse404FromJSON,
    InlineResponse404ToJSON,
    InlineResponse429,
    InlineResponse429FromJSON,
    InlineResponse429ToJSON,
    NotificationResponse,
    NotificationResponseFromJSON,
    NotificationResponseToJSON,
    NotificationsListResponse,
    NotificationsListResponseFromJSON,
    NotificationsListResponseToJSON,
} from '../models';

export interface AppendAssignedAreasRequest {
    bookingId: string;
    inlineObject: InlineObject;
}

export interface GetAllBookingsRequest {
    actualGuests?: string;
    assignedArea?: Array<string>;
    assignedTo?: Array<string>;
    reference?: number;
    createdDate?: Date;
    createdDateFrom?: Date;
    createdDateTo?: Date;
    currentStage?: string;
    date?: Date;
    dateFrom?: Date;
    dateTo?: Date;
    email?: string;
    autoConfirmed?: boolean;
    walkIn?: boolean;
    followUp?: Date;
    followUpFrom?: Date;
    followUpTo?: Date;
    hasPreorders?: boolean;
    labels?: Array<string>;
    lastUpdated?: Date;
    lastUpdatedFrom?: Date;
    lastUpdatedTo?: Date;
    notifications?: Array<string>;
    numPeople?: string;
    offer?: Array<string>;
    partnerSource?: string;
    pendingDeposits?: Array<GetAllBookingsPendingDepositsEnum>;
    phone?: string;
    preordersStatus?: GetAllBookingsPreordersStatusEnum;
    privateHire?: boolean;
    query?: string;
    startTime?: string;
    statusChangedDate?: Date;
    statusChangedDateFrom?: Date;
    statusChangedDateTo?: Date;
    status?: Array<GetAllBookingsStatusEnum>;
    time?: string;
    type?: Array<string>;
    customerId?: Array<string>;
    venueId?: Array<string>;
    waitlisted?: boolean;
    zone?: string;
    limit?: number;
    sort?: Array<string>;
    page?: string;
}

export interface GetAllNotificationsRequest {
    status?: string;
    type?: string;
}

export interface GetAssignedAreasRequest {
    bookingId: string;
}

export interface GetBookingRequest {
    bookingId: string;
}

export interface GetBookingLinksRequest {
    bookingId: string;
}

export interface ReplaceAssignedAreasRequest {
    bookingId: string;
    inlineObject1: InlineObject1;
}

export interface UnassignAllAreasRequest {
    bookingId: string;
}

export interface UnassignOneAreaRequest {
    bookingId: string;
    assignedAreaId: string;
}

export interface UpdateNotificationRequest {
    inlineObject2?: InlineObject2;
}

/**
 * 
 */
export class BookingsApi extends runtime.BaseAPI {

    /**
     * Assigns the given areas to the booking, whilst keeping the areas which are already assigned.  This request accepts an array of bookable area IDs, which you can retrieve using the Venues endpoint.  A validation error will be returned if you attempt to assign area(s) to a booking which doesn\'t have a venue, or if you attempt to assign area(s) which don\'t belong to the attached venue. Keep in mind that the request *won\'t* return an error response if you attempt to assign an area which is already assigned to the booking. 
     * Appends to the assigned areas of the booking
     */
    async appendAssignedAreasRaw(requestParameters: AppendAssignedAreasRequest): Promise<runtime.ApiResponse<BookingAssignedAreasResponse>> {
        if (requestParameters.bookingId === null || requestParameters.bookingId === undefined) {
            throw new runtime.RequiredError('bookingId','Required parameter requestParameters.bookingId was null or undefined when calling appendAssignedAreas.');
        }

        if (requestParameters.inlineObject === null || requestParameters.inlineObject === undefined) {
            throw new runtime.RequiredError('inlineObject','Required parameter requestParameters.inlineObject was null or undefined when calling appendAssignedAreas.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("BearerAuth", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/bookings/{bookingId}/assigned-areas`.replace(`{${"bookingId"}}`, encodeURIComponent(String(requestParameters.bookingId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: InlineObjectToJSON(requestParameters.inlineObject),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => BookingAssignedAreasResponseFromJSON(jsonValue));
    }

    /**
     * Assigns the given areas to the booking, whilst keeping the areas which are already assigned.  This request accepts an array of bookable area IDs, which you can retrieve using the Venues endpoint.  A validation error will be returned if you attempt to assign area(s) to a booking which doesn\'t have a venue, or if you attempt to assign area(s) which don\'t belong to the attached venue. Keep in mind that the request *won\'t* return an error response if you attempt to assign an area which is already assigned to the booking. 
     * Appends to the assigned areas of the booking
     */
    async appendAssignedAreas(requestParameters: AppendAssignedAreasRequest): Promise<BookingAssignedAreasResponse> {
        const response = await this.appendAssignedAreasRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns an array of all bookings which the authenticated user is authorised to view. The response will be [paginated](/#tag/Pagination). 
     * Get bookings
     */
    async getAllBookingsRaw(requestParameters: GetAllBookingsRequest): Promise<runtime.ApiResponse<BookingListResponse>> {
        const queryParameters: any = {};

        if (requestParameters.actualGuests !== undefined) {
            queryParameters['actual_guests'] = requestParameters.actualGuests;
        }

        if (requestParameters.assignedArea) {
            queryParameters['assigned_area'] = requestParameters.assignedArea.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.assignedTo) {
            queryParameters['assigned_to'] = requestParameters.assignedTo.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.reference !== undefined) {
            queryParameters['reference'] = requestParameters.reference;
        }

        if (requestParameters.createdDate !== undefined) {
            queryParameters['created_date'] = (requestParameters.createdDate as any).toISOString().substr(0,10);
        }

        if (requestParameters.createdDateFrom !== undefined) {
            queryParameters['created_date_from'] = (requestParameters.createdDateFrom as any).toISOString().substr(0,10);
        }

        if (requestParameters.createdDateTo !== undefined) {
            queryParameters['created_date_to'] = (requestParameters.createdDateTo as any).toISOString().substr(0,10);
        }

        if (requestParameters.currentStage !== undefined) {
            queryParameters['current_stage'] = requestParameters.currentStage;
        }

        if (requestParameters.date !== undefined) {
            queryParameters['date'] = (requestParameters.date as any).toISOString().substr(0,10);
        }

        if (requestParameters.dateFrom !== undefined) {
            queryParameters['date_from'] = (requestParameters.dateFrom as any).toISOString().substr(0,10);
        }

        if (requestParameters.dateTo !== undefined) {
            queryParameters['date_to'] = (requestParameters.dateTo as any).toISOString().substr(0,10);
        }

        if (requestParameters.email !== undefined) {
            queryParameters['email'] = requestParameters.email;
        }

        if (requestParameters.autoConfirmed !== undefined) {
            queryParameters['auto_confirmed'] = requestParameters.autoConfirmed;
        }

        if (requestParameters.walkIn !== undefined) {
            queryParameters['walk_in'] = requestParameters.walkIn;
        }

        if (requestParameters.followUp !== undefined) {
            queryParameters['follow_up'] = (requestParameters.followUp as any).toISOString().substr(0,10);
        }

        if (requestParameters.followUpFrom !== undefined) {
            queryParameters['follow_up_from'] = (requestParameters.followUpFrom as any).toISOString().substr(0,10);
        }

        if (requestParameters.followUpTo !== undefined) {
            queryParameters['follow_up_to'] = (requestParameters.followUpTo as any).toISOString().substr(0,10);
        }

        if (requestParameters.hasPreorders !== undefined) {
            queryParameters['has_preorders'] = requestParameters.hasPreorders;
        }

        if (requestParameters.labels) {
            queryParameters['labels'] = requestParameters.labels.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.lastUpdated !== undefined) {
            queryParameters['last_updated'] = (requestParameters.lastUpdated as any).toISOString().substr(0,10);
        }

        if (requestParameters.lastUpdatedFrom !== undefined) {
            queryParameters['last_updated_from'] = (requestParameters.lastUpdatedFrom as any).toISOString().substr(0,10);
        }

        if (requestParameters.lastUpdatedTo !== undefined) {
            queryParameters['last_updated_to'] = (requestParameters.lastUpdatedTo as any).toISOString().substr(0,10);
        }

        if (requestParameters.notifications) {
            queryParameters['notifications'] = requestParameters.notifications.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.numPeople !== undefined) {
            queryParameters['num_people'] = requestParameters.numPeople;
        }

        if (requestParameters.offer) {
            queryParameters['offer'] = requestParameters.offer.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.partnerSource !== undefined) {
            queryParameters['partner_source'] = requestParameters.partnerSource;
        }

        if (requestParameters.pendingDeposits) {
            queryParameters['pending_deposits'] = requestParameters.pendingDeposits.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.phone !== undefined) {
            queryParameters['phone'] = requestParameters.phone;
        }

        if (requestParameters.preordersStatus !== undefined) {
            queryParameters['preorders_status'] = requestParameters.preordersStatus;
        }

        if (requestParameters.privateHire !== undefined) {
            queryParameters['private_hire'] = requestParameters.privateHire;
        }

        if (requestParameters.query !== undefined) {
            queryParameters['query'] = requestParameters.query;
        }

        if (requestParameters.startTime !== undefined) {
            queryParameters['start_time'] = requestParameters.startTime;
        }

        if (requestParameters.statusChangedDate !== undefined) {
            queryParameters['status_changed_date'] = (requestParameters.statusChangedDate as any).toISOString().substr(0,10);
        }

        if (requestParameters.statusChangedDateFrom !== undefined) {
            queryParameters['status_changed_date_from'] = (requestParameters.statusChangedDateFrom as any).toISOString().substr(0,10);
        }

        if (requestParameters.statusChangedDateTo !== undefined) {
            queryParameters['status_changed_date_to'] = (requestParameters.statusChangedDateTo as any).toISOString().substr(0,10);
        }

        if (requestParameters.status) {
            queryParameters['status'] = requestParameters.status.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.time !== undefined) {
            queryParameters['time'] = requestParameters.time;
        }

        if (requestParameters.type) {
            queryParameters['type'] = requestParameters.type.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.customerId) {
            queryParameters['customer_id'] = requestParameters.customerId.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.venueId) {
            queryParameters['venue_id'] = requestParameters.venueId.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.waitlisted !== undefined) {
            queryParameters['waitlisted'] = requestParameters.waitlisted;
        }

        if (requestParameters.zone !== undefined) {
            queryParameters['zone'] = requestParameters.zone;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.sort) {
            queryParameters['sort'] = requestParameters.sort.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("BearerAuth", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/bookings`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => BookingListResponseFromJSON(jsonValue));
    }

    /**
     * Returns an array of all bookings which the authenticated user is authorised to view. The response will be [paginated](/#tag/Pagination). 
     * Get bookings
     */
    async getAllBookings(requestParameters: GetAllBookingsRequest): Promise<BookingListResponse> {
        const response = await this.getAllBookingsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns an array of all notifications for this booking. This includes read notifications. If you only want to see unread notifications, you can use the `status` filter. 
     * Get notifications
     */
    async getAllNotificationsRaw(requestParameters: GetAllNotificationsRequest): Promise<runtime.ApiResponse<NotificationsListResponse>> {
        const queryParameters: any = {};

        if (requestParameters.status !== undefined) {
            queryParameters['status'] = requestParameters.status;
        }

        if (requestParameters.type !== undefined) {
            queryParameters['type'] = requestParameters.type;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("BearerAuth", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/bookings/{bookingId}/notifications`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => NotificationsListResponseFromJSON(jsonValue));
    }

    /**
     * Returns an array of all notifications for this booking. This includes read notifications. If you only want to see unread notifications, you can use the `status` filter. 
     * Get notifications
     */
    async getAllNotifications(requestParameters: GetAllNotificationsRequest): Promise<NotificationsListResponse> {
        const response = await this.getAllNotificationsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns an array of areas which the booking is assigned to 
     * Get assigned areas (tables) for a booking
     */
    async getAssignedAreasRaw(requestParameters: GetAssignedAreasRequest): Promise<runtime.ApiResponse<BookingAssignedAreasResponse>> {
        if (requestParameters.bookingId === null || requestParameters.bookingId === undefined) {
            throw new runtime.RequiredError('bookingId','Required parameter requestParameters.bookingId was null or undefined when calling getAssignedAreas.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("BearerAuth", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/bookings/{bookingId}/assigned-areas`.replace(`{${"bookingId"}}`, encodeURIComponent(String(requestParameters.bookingId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => BookingAssignedAreasResponseFromJSON(jsonValue));
    }

    /**
     * Returns an array of areas which the booking is assigned to 
     * Get assigned areas (tables) for a booking
     */
    async getAssignedAreas(requestParameters: GetAssignedAreasRequest): Promise<BookingAssignedAreasResponse> {
        const response = await this.getAssignedAreasRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns details about a specific booking 
     * Get a booking
     */
    async getBookingRaw(requestParameters: GetBookingRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.bookingId === null || requestParameters.bookingId === undefined) {
            throw new runtime.RequiredError('bookingId','Required parameter requestParameters.bookingId was null or undefined when calling getBooking.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("BearerAuth", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/bookings/{bookingId}`.replace(`{${"bookingId"}}`, encodeURIComponent(String(requestParameters.bookingId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Returns details about a specific booking 
     * Get a booking
     */
    async getBooking(requestParameters: GetBookingRequest): Promise<void> {
        await this.getBookingRaw(requestParameters);
    }

    /**
     * Returns an array of URLs for customer-facing actions relating to a booking 
     * Get links for a booking
     */
    async getBookingLinksRaw(requestParameters: GetBookingLinksRequest): Promise<runtime.ApiResponse<BookingLinksResponse>> {
        if (requestParameters.bookingId === null || requestParameters.bookingId === undefined) {
            throw new runtime.RequiredError('bookingId','Required parameter requestParameters.bookingId was null or undefined when calling getBookingLinks.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("BearerAuth", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/bookings/{bookingId}/links`.replace(`{${"bookingId"}}`, encodeURIComponent(String(requestParameters.bookingId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => BookingLinksResponseFromJSON(jsonValue));
    }

    /**
     * Returns an array of URLs for customer-facing actions relating to a booking 
     * Get links for a booking
     */
    async getBookingLinks(requestParameters: GetBookingLinksRequest): Promise<BookingLinksResponse> {
        const response = await this.getBookingLinksRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns the notification by the given ID. 
     * Get a notification
     */
    async getNotificationRaw(): Promise<runtime.ApiResponse<NotificationResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("BearerAuth", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/bookings/{bookingId}/notifications/{notificationId}`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => NotificationResponseFromJSON(jsonValue));
    }

    /**
     * Returns the notification by the given ID. 
     * Get a notification
     */
    async getNotification(): Promise<NotificationResponse> {
        const response = await this.getNotificationRaw();
        return await response.value();
    }

    /**
     * Unassigns all areas from the booking and assigns the given ones. This request accepts an array of bookable area IDs, which you can retrieve using the Venues endpoint.  A validation error will be returned if you attempt to assign area(s) to a booking which doesn\'t have a venue, or if you attempt to assign area(s) which don\'t belong to the attached venue. Keep in mind that the request *won\'t* return an error response if you attempt to assign an area which is already assigned to the booking.  If you\'re looking to append assigned areas rather than replace, see [Appending assigned areas](#operation/AppendAssignedAreas). 
     * Replaces the assigned areas of the booking
     */
    async replaceAssignedAreasRaw(requestParameters: ReplaceAssignedAreasRequest): Promise<runtime.ApiResponse<BookingAssignedAreasResponse>> {
        if (requestParameters.bookingId === null || requestParameters.bookingId === undefined) {
            throw new runtime.RequiredError('bookingId','Required parameter requestParameters.bookingId was null or undefined when calling replaceAssignedAreas.');
        }

        if (requestParameters.inlineObject1 === null || requestParameters.inlineObject1 === undefined) {
            throw new runtime.RequiredError('inlineObject1','Required parameter requestParameters.inlineObject1 was null or undefined when calling replaceAssignedAreas.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("BearerAuth", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/bookings/{bookingId}/assigned-areas`.replace(`{${"bookingId"}}`, encodeURIComponent(String(requestParameters.bookingId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: InlineObject1ToJSON(requestParameters.inlineObject1),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => BookingAssignedAreasResponseFromJSON(jsonValue));
    }

    /**
     * Unassigns all areas from the booking and assigns the given ones. This request accepts an array of bookable area IDs, which you can retrieve using the Venues endpoint.  A validation error will be returned if you attempt to assign area(s) to a booking which doesn\'t have a venue, or if you attempt to assign area(s) which don\'t belong to the attached venue. Keep in mind that the request *won\'t* return an error response if you attempt to assign an area which is already assigned to the booking.  If you\'re looking to append assigned areas rather than replace, see [Appending assigned areas](#operation/AppendAssignedAreas). 
     * Replaces the assigned areas of the booking
     */
    async replaceAssignedAreas(requestParameters: ReplaceAssignedAreasRequest): Promise<BookingAssignedAreasResponse> {
        const response = await this.replaceAssignedAreasRaw(requestParameters);
        return await response.value();
    }

    /**
     * Unassigns all areas from the booking. This request *won\'t* return an error response if the booking doesn\'t have any assigned areas.  If you\'re looking to unassign a particular area, see [Unassigning an area](#operation/UnassignOneArea) 
     * Unassigns all areas from the booking
     */
    async unassignAllAreasRaw(requestParameters: UnassignAllAreasRequest): Promise<runtime.ApiResponse<BookingAssignedAreasResponse>> {
        if (requestParameters.bookingId === null || requestParameters.bookingId === undefined) {
            throw new runtime.RequiredError('bookingId','Required parameter requestParameters.bookingId was null or undefined when calling unassignAllAreas.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("BearerAuth", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/bookings/{bookingId}/assigned-areas`.replace(`{${"bookingId"}}`, encodeURIComponent(String(requestParameters.bookingId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => BookingAssignedAreasResponseFromJSON(jsonValue));
    }

    /**
     * Unassigns all areas from the booking. This request *won\'t* return an error response if the booking doesn\'t have any assigned areas.  If you\'re looking to unassign a particular area, see [Unassigning an area](#operation/UnassignOneArea) 
     * Unassigns all areas from the booking
     */
    async unassignAllAreas(requestParameters: UnassignAllAreasRequest): Promise<BookingAssignedAreasResponse> {
        const response = await this.unassignAllAreasRaw(requestParameters);
        return await response.value();
    }

    /**
     * Unassigns the given area from the booking.  This request will return an error response if you attempt to unassign an area which is not assigned to the booking.  If you\'re looking to unassign *all* areas, see [Unassigning all areas](#operation/UnassignAllAreas) 
     * Unassigns an area from the booking
     */
    async unassignOneAreaRaw(requestParameters: UnassignOneAreaRequest): Promise<runtime.ApiResponse<BookingAssignedAreasResponse>> {
        if (requestParameters.bookingId === null || requestParameters.bookingId === undefined) {
            throw new runtime.RequiredError('bookingId','Required parameter requestParameters.bookingId was null or undefined when calling unassignOneArea.');
        }

        if (requestParameters.assignedAreaId === null || requestParameters.assignedAreaId === undefined) {
            throw new runtime.RequiredError('assignedAreaId','Required parameter requestParameters.assignedAreaId was null or undefined when calling unassignOneArea.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("BearerAuth", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/bookings/{bookingId}/assigned-areas/{assignedAreaId}`.replace(`{${"bookingId"}}`, encodeURIComponent(String(requestParameters.bookingId))).replace(`{${"assignedAreaId"}}`, encodeURIComponent(String(requestParameters.assignedAreaId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => BookingAssignedAreasResponseFromJSON(jsonValue));
    }

    /**
     * Unassigns the given area from the booking.  This request will return an error response if you attempt to unassign an area which is not assigned to the booking.  If you\'re looking to unassign *all* areas, see [Unassigning all areas](#operation/UnassignAllAreas) 
     * Unassigns an area from the booking
     */
    async unassignOneArea(requestParameters: UnassignOneAreaRequest): Promise<BookingAssignedAreasResponse> {
        const response = await this.unassignOneAreaRaw(requestParameters);
        return await response.value();
    }

    /**
     * Updates the given booking notification 
     * Update a notification
     */
    async updateNotificationRaw(requestParameters: UpdateNotificationRequest): Promise<runtime.ApiResponse<NotificationResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("BearerAuth", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/bookings/{bookingId}/notifications/{notificationId}`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: InlineObject2ToJSON(requestParameters.inlineObject2),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => NotificationResponseFromJSON(jsonValue));
    }

    /**
     * Updates the given booking notification 
     * Update a notification
     */
    async updateNotification(requestParameters: UpdateNotificationRequest): Promise<NotificationResponse> {
        const response = await this.updateNotificationRaw(requestParameters);
        return await response.value();
    }

}

/**
    * @export
    * @enum {string}
    */
export enum GetAllBookingsPendingDepositsEnum {
    RequestAuth = 'request_auth',
    ManualAuth = 'manual_auth',
    RequestPayment = 'request_payment',
    ManualPayment = 'manual_payment',
    CustomerPreorder = 'customer_preorder',
    Paid = 'paid'
}
/**
    * @export
    * @enum {string}
    */
export enum GetAllBookingsPreordersStatusEnum {
    Open = 'open',
    Complete = 'complete'
}
/**
    * @export
    * @enum {string}
    */
export enum GetAllBookingsStatusEnum {
    New = 'new',
    InProgress = 'in_progress',
    Complete = 'complete',
    Rejected = 'rejected',
    Deleted = 'deleted',
    Lost = 'lost'
}
