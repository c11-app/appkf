package cn.app.service.dev_user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cn.app.dao.dev_user.Dev_userMapper;

@Service("dev_userService")
public class Dev_userServiceImpl implements Dev_userService {

	
	@Autowired
	Dev_userMapper dev_userMapper;
	
	@Override
	
	
	public int logincheck(String devCode, String devPassword) {
		
		return dev_userMapper.logincheck(devCode, devPassword);
	}

}
