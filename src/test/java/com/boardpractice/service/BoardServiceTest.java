package com.boardpractice.service;

import com.boardpractice.dto.BoardDTO;
import com.boardpractice.dto.PageRequestDTO;
import com.boardpractice.dto.PageResponseDTO;
import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;


@Log4j2
@ExtendWith(SpringExtension.class)
@SpringBootTest
public class BoardServiceTest {

	@Autowired(required = false)
	private BoardService boardService;


	@Test
	public void testPaging() {
		PageRequestDTO pageRequestDTO = PageRequestDTO.builder().page(10).size(10).build();

		log.info("pageRequestDTO : "+ pageRequestDTO);

		PageResponseDTO<BoardDTO> pageResponseDTO = boardService.selectBoardList(pageRequestDTO);

		pageResponseDTO.getDtoList().forEach(log::info);
	}

	@Test
	public void testReadWithFiles() {
		Long bno = 997L;

		log.info(boardService.selectFilesByID(bno).toString());
	}
}
