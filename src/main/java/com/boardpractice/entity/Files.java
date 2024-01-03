package com.boardpractice.entity;

import javax.persistence.*;
import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Files {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long fno;
	private long bno;
	private String uuid;
	private String filename;
	private LocalDateTime regDate;
	private String status;
	private int size;


}
