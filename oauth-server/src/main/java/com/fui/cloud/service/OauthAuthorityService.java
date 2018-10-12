package com.fui.cloud.service;

import com.fui.cloud.dao.OauthAuthorityMapper;
import com.fui.cloud.model.OauthAuthority;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.List;

@Service
public class OauthAuthorityService extends BaseService<OauthAuthority, Long> {

    @Autowired
    private OauthAuthorityMapper oauthAuthorityMapper;

    @PostConstruct
    public void initMapper() {
        this.baseMapper = oauthAuthorityMapper;
    }

    public List<OauthAuthority> getOauthAuthorityByRoleId(Long oauthRoleId) {
        return oauthAuthorityMapper.getOauthAuthorityByRoleId(oauthRoleId);
    }
}
