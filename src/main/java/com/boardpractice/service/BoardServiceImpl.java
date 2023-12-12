package com.boardpractice.service;

import com.boardpractice.dto.BoardDTO;
import com.boardpractice.dto.PageRequestDTO;
import com.boardpractice.dto.PageResponseDTO;
import com.boardpractice.entity.Board;
import com.boardpractice.entity.Files;
import com.boardpractice.mapper.BoardMapper;
import com.boardpractice.repository.BoardRepository;
import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

@Log4j2
@Service
@RequiredArgsConstructor
public class BoardServiceImpl implements BoardService {

	private final BoardMapper boardMapper;

	@Override
	public Board selectById(Long bno) {
		return boardMapper.selectById(bno);
	}

	@Override
	public int insertBoard(Board board) {
		boardMapper.insertBoard(board);
		return board.getBno().intValue();
	}

	@Override
	public void updateBoard(Board board) {
		boardMapper.updateBoard(board);
	}

	@Override
	public void deleteBoard(Long bno) {
		boardMapper.deleteBoard(bno);
	}

	@Override
	public void addViewCount(Long bno) {
		boardMapper.addViewCount(bno);
	}

	@Override
	public PageResponseDTO<BoardDTO> selectBoardList(PageRequestDTO pageRequestDTO) {
		List<BoardDTO> boardList = boardMapper.selectBoardList(pageRequestDTO);

		int total = boardMapper.getCount(pageRequestDTO);

		return PageResponseDTO.<BoardDTO>withAll()
		                      .dtoList(boardList)
		                      .total(total)
		                      .pageRequestDTO(pageRequestDTO)
		                      .build();
	}

	@Override
	public int getCount(PageRequestDTO pageRequestDTO) {
		return 0;
	}

	@Override
	public List<Object> selectFilesByID(Long bno) {
		return boardMapper.selectFilesByID(bno);
	}

	@Override
	public void insertFiles(Files files) {
		boardMapper.insertFiles(files);
	}

	@Override
	public void deleteFiles(Long bno) {
		boardMapper.deleteFiles(bno);
	}


}