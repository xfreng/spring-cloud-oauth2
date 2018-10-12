package com.fui.cloud.dao;

import com.fui.cloud.model.OauthAuthority;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OauthAuthorityMapper extends BaseMapper<OauthAuthority, Long> {

    List<OauthAuthority> getOauthAuthorityByRoleId(Long oauthRoleId);
}