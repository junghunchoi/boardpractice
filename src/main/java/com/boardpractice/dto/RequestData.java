package com.boardpractice.dto;

import com.boardpractice.entity.Board;
import com.boardpractice.entity.Files;
import java.util.List;
import lombok.Data;

@Data
public class RequestData {
	private Board board;
	private List<Files> files;
}
