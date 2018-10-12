package com.fui.cloud.controller;

import io.swagger.annotations.Api;
import org.springframework.security.access.annotation.Secured;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(value = "/notification")
@Api(description = "用户通知controller")
public class NotificationController {

    @PostMapping("/getNotifications")
    @Secured("ROLE_ADMIN")
    @ResponseBody
    public String getNotifications() {
        return null;
    }

    @PostMapping("/setAllRead")
    @Secured("ROLE_ADMIN")
    @ResponseBody
    public String setAllRead() {
        return null;
    }
}
