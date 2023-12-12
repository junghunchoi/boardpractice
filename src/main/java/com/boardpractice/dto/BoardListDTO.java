package com.boardpractice.dto;

import java.time.LocalDateTime;
import lombok.Data;

@Data
public class BoardListDTO {

	private String title;
	private int view;
	private int fileCount;
	private LocalDateTime regDate;


}
