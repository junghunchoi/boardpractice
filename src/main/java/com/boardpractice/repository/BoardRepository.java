package com.boardpractice.repository;

import com.boardpractice.dto.BoardDTO;
import com.boardpractice.dto.PageResponseDTO;
import com.boardpractice.entity.Board;
import org.springframework.stereotype.Repository;

@Repository
public interface BoardRepository {

	Long register(BoardDTO boardDTO);

	BoardDTO readOne(Long bno);

	void modify(BoardDTO boardDTO);

	void remove(Long bno);

	Board selectById(Long bno);

}
