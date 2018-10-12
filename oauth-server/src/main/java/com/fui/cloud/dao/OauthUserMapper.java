package com.fui.cloud.dao;

import com.fui.cloud.model.OauthUser;
import org.springframework.stereotype.Repository;

@Repository
public interface OauthUserMapper extends BaseMapper<OauthUser, Long> {

    OauthUser findByName(String username);
}