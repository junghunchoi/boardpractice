package com.boardpractice.board;

import static org.mockito.Mockito.when;

import com.boardpractice.dto.BoardDTO;
import com.boardpractice.dto.PageRequestDTO;
import com.boardpractice.dto.PageResponseDTO;
import com.boardpractice.entity.Board;
import com.boardpractice.mapper.BoardMapper;
import com.boardpractice.service.BoardServiceImpl;
import java.util.List;
import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.mybatis.spring.boot.test.autoconfigure.MybatisTest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.test.context.junit.jupiter.SpringExtension;


@MybatisTest
@Log4j2
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@ExtendWith(SpringExtension.class)
public class BoardTest {

	@Autowired(required = false)
	private BoardMapper boardMapper;

	@Test
	public void testSelectById() {
		Long bno = 10L;
		log.info(bno);
		log.info(boardMapper.selectById(bno));
//		log.info("LOG....." + board.toString());
	}

	@Test
	public void testSelectList() {
		PageRequestDTO pageRequestDTO = PageRequestDTO.builder().page(3).size(10).build();

		List<BoardDTO> list = boardMapper.selectBoardList(pageRequestDTO);

		list.forEach(log::info);
	}

	@Test
	public void testView() {
		Long bno = 903L;
		boardMapper.addViewCount(bno);
		log.info(boardMapper.selectById(bno));



	}


}
