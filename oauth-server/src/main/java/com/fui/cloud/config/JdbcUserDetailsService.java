package com.fui.cloud.config;

import com.fui.cloud.model.OauthUser;
import com.fui.cloud.service.OauthUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.Optional;
import java.util.Set;

@Component
public class JdbcUserDetailsService implements UserDetailsService {

    @Autowired
    private OauthUserService oauthUserService;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        OauthUser oauthUser = oauthUserService.findByName(username);
        Optional<OauthUser> realUser = Optional.ofNullable(oauthUser);
        return realUser.map(user -> {
            Set<GrantedAuthority> grantedAuthorities = oauthUserService.getAuthorities(user.getId());
            user.setAuthorities(grantedAuthorities);
            return user;
        }).orElseThrow(() -> new UsernameNotFoundException("用户" + username + "不存在!"));
    }

}
