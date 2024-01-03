package com.boardpractice.config;

import java.util.HashMap;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;

public class CustomMultipartResolver extends CommonsMultipartResolver {
	
	public boolean isMultipart(HttpServletRequest request) {
		String _url = request.getRequestURL().toString();
		if(_url.indexOf("/kupload") > -1 || _url.indexOf("/keditor") > -1) {
			return false;
		}

		return super.isMultipart(request);
	}
}
