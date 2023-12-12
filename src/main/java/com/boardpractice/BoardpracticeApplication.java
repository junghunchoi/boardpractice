package com.boardpractice;

import javax.sql.DataSource;
import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.core.io.Resource;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;

@SpringBootApplication
//@MapperScan(basePackages = "com.boardpractice.mapper")
public class BoardpracticeApplication {

	public static void main(String[] args) {
		SpringApplication.run(BoardpracticeApplication.class, args);
	}


	}
