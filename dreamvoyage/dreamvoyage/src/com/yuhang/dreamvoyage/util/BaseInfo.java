package com.yuhang.dreamvoyage.util;

import javax.servlet.http.HttpServletRequest;

import com.yuhang.dreamvoyage.po.Admin;

public class BaseInfo {
	public static String getAdmin(HttpServletRequest request){
		Admin admin = (Admin)request.getSession().getAttribute("admin");
		return admin.getLoginName();
	}
}
