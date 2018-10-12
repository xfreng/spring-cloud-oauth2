package com.fui.cloud.dao;

import com.fui.cloud.model.OauthRole;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OauthRoleMapper extends BaseMapper<OauthRole, Long> {

    List<OauthRole> getRolesByUserId(Long oauthUserId);
}