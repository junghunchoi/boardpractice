package com.boardpractice;

import org.junit.jupiter.api.Test;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
@MapperScan(basePackages = {"com.boardpractice.mapper"})
class BoardpracticeApplicationTests {

	@Test
	void contextLoads() {
	}

}
