package cn.app.service.backend_user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cn.app.dao.backend_user.Backend_userMapper;

@Service("Backend_userService")
public class Backend_userServiceImpl implements Backend_userService {
	@Autowired
	Backend_userMapper backend_userMapper;
	@Override
	public int logincheckk(String userCode, String userPassword) {
		// TODO Auto-generated method stub
		return backend_userMapper.logincheckk(userCode, userPassword);
	}

}
