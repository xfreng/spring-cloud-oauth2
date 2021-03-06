package com.fui.cloud.model;

public class OauthClientDetails extends BaseModel {
    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column oauth_client_details.client_id
     *
     * @mbggenerated
     */
    private String clientId;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column oauth_client_details.resource_ids
     *
     * @mbggenerated
     */
    private String resourceIds;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column oauth_client_details.client_secret
     *
     * @mbggenerated
     */
    private String clientSecret;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column oauth_client_details.scope
     *
     * @mbggenerated
     */
    private String scope;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column oauth_client_details.authorized_grant_types
     *
     * @mbggenerated
     */
    private String authorizedGrantTypes;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column oauth_client_details.web_server_redirect_uri
     *
     * @mbggenerated
     */
    private String webServerRedirectUri;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column oauth_client_details.authorities
     *
     * @mbggenerated
     */
    private String authorities;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column oauth_client_details.access_token_validity
     *
     * @mbggenerated
     */
    private Integer accessTokenValidity;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column oauth_client_details.refresh_token_validity
     *
     * @mbggenerated
     */
    private Integer refreshTokenValidity;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column oauth_client_details.additional_information
     *
     * @mbggenerated
     */
    private String additionalInformation;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column oauth_client_details.autoapprove
     *
     * @mbggenerated
     */
    private String autoapprove;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column oauth_client_details.client_id
     *
     * @return the value of oauth_client_details.client_id
     *
     * @mbggenerated
     */
    public String getClientId() {
        return clientId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column oauth_client_details.client_id
     *
     * @param clientId the value for oauth_client_details.client_id
     *
     * @mbggenerated
     */
    public void setClientId(String clientId) {
        this.clientId = clientId == null ? null : clientId.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column oauth_client_details.resource_ids
     *
     * @return the value of oauth_client_details.resource_ids
     *
     * @mbggenerated
     */
    public String getResourceIds() {
        return resourceIds;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column oauth_client_details.resource_ids
     *
     * @param resourceIds the value for oauth_client_details.resource_ids
     *
     * @mbggenerated
     */
    public void setResourceIds(String resourceIds) {
        this.resourceIds = resourceIds == null ? null : resourceIds.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column oauth_client_details.client_secret
     *
     * @return the value of oauth_client_details.client_secret
     *
     * @mbggenerated
     */
    public String getClientSecret() {
        return clientSecret;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column oauth_client_details.client_secret
     *
     * @param clientSecret the value for oauth_client_details.client_secret
     *
     * @mbggenerated
     */
    public void setClientSecret(String clientSecret) {
        this.clientSecret = clientSecret == null ? null : clientSecret.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column oauth_client_details.scope
     *
     * @return the value of oauth_client_details.scope
     *
     * @mbggenerated
     */
    public String getScope() {
        return scope;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column oauth_client_details.scope
     *
     * @param scope the value for oauth_client_details.scope
     *
     * @mbggenerated
     */
    public void setScope(String scope) {
        this.scope = scope == null ? null : scope.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column oauth_client_details.authorized_grant_types
     *
     * @return the value of oauth_client_details.authorized_grant_types
     *
     * @mbggenerated
     */
    public String getAuthorizedGrantTypes() {
        return authorizedGrantTypes;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column oauth_client_details.authorized_grant_types
     *
     * @param authorizedGrantTypes the value for oauth_client_details.authorized_grant_types
     *
     * @mbggenerated
     */
    public void setAuthorizedGrantTypes(String authorizedGrantTypes) {
        this.authorizedGrantTypes = authorizedGrantTypes == null ? null : authorizedGrantTypes.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column oauth_client_details.web_server_redirect_uri
     *
     * @return the value of oauth_client_details.web_server_redirect_uri
     *
     * @mbggenerated
     */
    public String getWebServerRedirectUri() {
        return webServerRedirectUri;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column oauth_client_details.web_server_redirect_uri
     *
     * @param webServerRedirectUri the value for oauth_client_details.web_server_redirect_uri
     *
     * @mbggenerated
     */
    public void setWebServerRedirectUri(String webServerRedirectUri) {
        this.webServerRedirectUri = webServerRedirectUri == null ? null : webServerRedirectUri.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column oauth_client_details.authorities
     *
     * @return the value of oauth_client_details.authorities
     *
     * @mbggenerated
     */
    public String getAuthorities() {
        return authorities;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column oauth_client_details.authorities
     *
     * @param authorities the value for oauth_client_details.authorities
     *
     * @mbggenerated
     */
    public void setAuthorities(String authorities) {
        this.authorities = authorities == null ? null : authorities.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column oauth_client_details.access_token_validity
     *
     * @return the value of oauth_client_details.access_token_validity
     *
     * @mbggenerated
     */
    public Integer getAccessTokenValidity() {
        return accessTokenValidity;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column oauth_client_details.access_token_validity
     *
     * @param accessTokenValidity the value for oauth_client_details.access_token_validity
     *
     * @mbggenerated
     */
    public void setAccessTokenValidity(Integer accessTokenValidity) {
        this.accessTokenValidity = accessTokenValidity;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column oauth_client_details.refresh_token_validity
     *
     * @return the value of oauth_client_details.refresh_token_validity
     *
     * @mbggenerated
     */
    public Integer getRefreshTokenValidity() {
        return refreshTokenValidity;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column oauth_client_details.refresh_token_validity
     *
     * @param refreshTokenValidity the value for oauth_client_details.refresh_token_validity
     *
     * @mbggenerated
     */
    public void setRefreshTokenValidity(Integer refreshTokenValidity) {
        this.refreshTokenValidity = refreshTokenValidity;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column oauth_client_details.additional_information
     *
     * @return the value of oauth_client_details.additional_information
     *
     * @mbggenerated
     */
    public String getAdditionalInformation() {
        return additionalInformation;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column oauth_client_details.additional_information
     *
     * @param additionalInformation the value for oauth_client_details.additional_information
     *
     * @mbggenerated
     */
    public void setAdditionalInformation(String additionalInformation) {
        this.additionalInformation = additionalInformation == null ? null : additionalInformation.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column oauth_client_details.autoapprove
     *
     * @return the value of oauth_client_details.autoapprove
     *
     * @mbggenerated
     */
    public String getAutoapprove() {
        return autoapprove;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column oauth_client_details.autoapprove
     *
     * @param autoapprove the value for oauth_client_details.autoapprove
     *
     * @mbggenerated
     */
    public void setAutoapprove(String autoapprove) {
        this.autoapprove = autoapprove == null ? null : autoapprove.trim();
    }
}