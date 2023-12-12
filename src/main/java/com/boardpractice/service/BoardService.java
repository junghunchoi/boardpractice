package com.boardpractice.service;


import com.boardpractice.dto.BoardDTO;
import com.boardpractice.dto.PageRequestDTO;
import com.boardpractice.dto.PageResponseDTO;
import com.boardpractice.entity.Board;
import com.boardpractice.entity.Files;
import java.util.List;

public interface BoardService {

	Board selectById(Long bno);

	int insertBoard(Board board);

	void updateBoard(Board board);

	void deleteBoard(Long bno);

	void addViewCount(Long bno);

	PageResponseDTO<BoardDTO> selectBoardList(PageRequestDTO pageRequestDTO);

	int getCount(PageRequestDTO pageRequestDTO);

	List<Object> selectFilesByID(Long bno);

	void insertFiles(Files files);

	void deleteFiles(Long bno);

}
