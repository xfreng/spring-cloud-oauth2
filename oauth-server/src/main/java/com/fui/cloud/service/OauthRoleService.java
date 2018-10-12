package com.fui.cloud.service;

import com.fui.cloud.dao.OauthRoleMapper;
import com.fui.cloud.model.OauthRole;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.List;

@Service
public class OauthRoleService extends BaseService<OauthRole, Long> {

    @Autowired
    private OauthRoleMapper oauthRoleMapper;

    @PostConstruct
    public void initMapper() {
        this.baseMapper = oauthRoleMapper;
    }

    public List<OauthRole> getRolesByUserId(Long oauthUserId) {
        return oauthRoleMapper.getRolesByUserId(oauthUserId);
    }
}
