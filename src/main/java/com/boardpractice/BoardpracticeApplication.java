package com.boardpractice;

import com.boardpractice.config.CustomMultipartResolver;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.core.annotation.Order;
import org.springframework.web.multipart.support.MultipartFilter;

@SpringBootApplication
//@MapperScan(basePackages = "com.boardpractice.mapper")
public class BoardpracticeApplication {

	public static void main(String[] args) {
		SpringApplication.run(BoardpracticeApplication.class, args);
	}

	@Bean
	public CustomMultipartResolver customMultipartResolver() {
		CustomMultipartResolver multipart = new CustomMultipartResolver();

		return multipart;
	}

	@Bean
	@Order(0)
	public MultipartFilter multipartFilter() {
		MultipartFilter multipartFilter = new MultipartFilter();
		multipartFilter.setMultipartResolverBeanName("customMultipartResolver");

		return multipartFilter;
	}


}
