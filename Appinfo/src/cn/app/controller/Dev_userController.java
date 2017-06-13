package cn.app.controller;

import javax.servlet.http.HttpServletRequest;

import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import cn.app.service.dev_user.Dev_userService;

@RequestMapping("/dev")
@Controller
public class Dev_userController {
	@Autowired
	Dev_userService dev_userService;
	
	@RequestMapping(value="/login.html", method=RequestMethod.GET)
	public String login(){
		
		return "devlogin";
	}
	@RequestMapping(value="/dologin.html", method=RequestMethod.POST)
	public String logincheck(@Param("devCode") String devCode,@Param("devPassword") String devPassword,HttpServletRequest request){
		int row=dev_userService.logincheck(devCode, devPassword);
		if(row==1){
		request.setAttribute("devName", devCode);
		return "developer/main";
		}
		else{return "devlogin";}
		
		
	}
	@RequestMapping(value="/logout", method=RequestMethod.GET)
	public String loginout(HttpServletRequest request){
		request.removeAttribute("devName");
		return "login";
	}

}
