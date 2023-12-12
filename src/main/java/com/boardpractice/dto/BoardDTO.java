package com.boardpractice.dto;

import com.boardpractice.entity.Files;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class BoardDTO {

	private Long bno;
	private String title;
	private String content;
	private String regDate;
	private String modDate;
	private int view;
	private int files;


}
