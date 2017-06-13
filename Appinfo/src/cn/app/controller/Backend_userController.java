package cn.app.controller;

import javax.servlet.http.HttpServletRequest;

import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import cn.app.service.backend_user.Backend_userService;

@RequestMapping("/manager")
@Controller
public class Backend_userController {
	@Autowired
	Backend_userService backend_userService;
	@RequestMapping(value="/login.html", method=RequestMethod.GET)
	public String login(){
		
		return "backendlogin";
	}
	
	
	@RequestMapping(value="/dologin.html", method=RequestMethod.POST)
	public String logincheckk(@Param("userCode") String userCode,@Param("userPassword") String userPassword,HttpServletRequest request){
		int row = backend_userService.logincheckk(userCode, userPassword);
		if(row==1){
			request.setAttribute("userCode", userCode);
			return "backend/main";}
		else {
			return "backendlogin";
		}
		
	}
	@RequestMapping(value="/logout", method=RequestMethod.GET)
	public String loginout(HttpServletRequest request){
		request.removeAttribute("userCode");
		return "login";
	}
	
}
