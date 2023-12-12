package com.boardpractice.mapper;

import com.boardpractice.dto.BoardDTO;
import com.boardpractice.dto.PageRequestDTO;
import com.boardpractice.entity.Board;
import com.boardpractice.entity.Files;
import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface BoardMapper {

	Board selectById(Long bno);

	int insertBoard(Board board);

	void updateBoard(Board board);

	void deleteBoard(Long bno);

	void addViewCount(Long bno);

	List<BoardDTO> selectBoardList(PageRequestDTO pageRequestDTO);

	int getCount(PageRequestDTO pageRequestDTO);

	List<Object> selectFilesByID(Long bno);

	void insertFiles(Files files);

	void deleteFiles(Long bno);

}
