package com.fui.cloud.service;

import com.fui.cloud.dao.OauthUserMapper;
import com.fui.cloud.model.OauthAuthority;
import com.fui.cloud.model.OauthRole;
import com.fui.cloud.model.OauthUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class OauthUserService extends BaseService<OauthUser, Long> {

    @Autowired
    private OauthUserMapper oauthUserMapper;
    @Autowired
    private OauthRoleService oauthRoleService;
    @Autowired
    private OauthAuthorityService oauthAuthorityService;

    @PostConstruct
    public void initMapper() {
        this.baseMapper = oauthUserMapper;
    }

    public OauthUser findByName(String username) {
        return oauthUserMapper.findByName(username);
    }

    public Set<GrantedAuthority> getAuthorities(Long oauthUserId) {
        Set<GrantedAuthority> userAuthorities = new HashSet<>();
        List<OauthRole> roles = oauthRoleService.getRolesByUserId(oauthUserId);
        for (OauthRole role : roles) {
            List<OauthAuthority> authorities = oauthAuthorityService.getOauthAuthorityByRoleId(role.getId());
            for (OauthAuthority authority : authorities) {
                userAuthorities.add(new SimpleGrantedAuthority(authority.getValue()));
            }
        }
        return userAuthorities;
    }
}
