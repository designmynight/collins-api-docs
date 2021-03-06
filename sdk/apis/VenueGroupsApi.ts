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
    PreferenceResponse,
    PreferenceResponseFromJSON,
    PreferenceResponseToJSON,
} from '../models';

export interface GetVenueGroupMarketingPreferencesRequest {
    venueGroupId: string;
}

/**
 * 
 */
export class VenueGroupsApi extends runtime.BaseAPI {

    /**
     * Returns an array of marketing preferences which have been set up for the given venue group.
     * Get marketing preferences
     */
    async getVenueGroupMarketingPreferencesRaw(requestParameters: GetVenueGroupMarketingPreferencesRequest): Promise<runtime.ApiResponse<Array<PreferenceResponse>>> {
        if (requestParameters.venueGroupId === null || requestParameters.venueGroupId === undefined) {
            throw new runtime.RequiredError('venueGroupId','Required parameter requestParameters.venueGroupId was null or undefined when calling getVenueGroupMarketingPreferences.');
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
            path: `/venue-groups/{venueGroupId}/marketing-preferences`.replace(`{${"venueGroupId"}}`, encodeURIComponent(String(requestParameters.venueGroupId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(PreferenceResponseFromJSON));
    }

    /**
     * Returns an array of marketing preferences which have been set up for the given venue group.
     * Get marketing preferences
     */
    async getVenueGroupMarketingPreferences(requestParameters: GetVenueGroupMarketingPreferencesRequest): Promise<Array<PreferenceResponse>> {
        const response = await this.getVenueGroupMarketingPreferencesRaw(requestParameters);
        return await response.value();
    }

}
