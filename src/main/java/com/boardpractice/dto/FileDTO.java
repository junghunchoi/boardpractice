package com.boardpractice.dto;

import java.time.LocalDateTime;
import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class FileDTO {

	private Long fno;
	private Long bno;
	private String fileName;
	private String uuid;
	private LocalDateTime regDate;
	private String status;

}
