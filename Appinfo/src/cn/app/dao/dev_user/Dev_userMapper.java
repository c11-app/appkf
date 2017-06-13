package cn.app.dao.dev_user;

import org.apache.ibatis.annotations.Param;

public interface Dev_userMapper {
	public int logincheck(@Param("devCode") String devCode,@Param("devPassword") String devPassword);

}
