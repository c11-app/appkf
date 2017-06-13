package cn.app.dao.backend_user;

import org.apache.ibatis.annotations.Param;

public interface Backend_userMapper {
	public int logincheckk(@Param("userCode") String userCode,@Param("userPassword") String userPassword);

}
