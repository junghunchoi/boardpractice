package com.boardpractice.controller;

import com.boardpractice.dto.BoardDTO;
import com.boardpractice.dto.PageRequestDTO;
import com.boardpractice.dto.PageResponseDTO;
import com.boardpractice.dto.RequestData;
import com.boardpractice.entity.Board;
import com.boardpractice.entity.Files;
import com.boardpractice.service.BoardService;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.springframework.web.servlet.view.RedirectView;

@Controller
@Log4j2
@RequestMapping("/board")
public class BoardController {

	@Resource
	private BoardService boardService;

	@GetMapping("/list")
	public void list(PageRequestDTO pageRequestDTO, Model model) {
		log.info("/list");
		PageResponseDTO<BoardDTO> responseDTO = boardService.selectBoardList(pageRequestDTO);
		model.addAttribute("responseDTO", responseDTO);
	}

	@GetMapping("/read")
	public void read(@RequestParam Long bno, Model model) {
		log.info("/read");
		Board board = boardService.selectById(bno);

		boardService.addViewCount(bno);
		model.addAttribute("board", board);
		model.addAttribute("files", boardService.selectFilesByID(bno));
	}

	@GetMapping("/register")
	public void registerGET() {

	}

	@PostMapping("/register")
	@Transactional
	public RedirectView register(@RequestBody RequestData requestData) {
		log.info("/register");
		int bno = boardService.insertBoard(requestData.getBoard());
		requestData.getFiles().forEach(files -> {
			files.setBno((long) bno);
			boardService.insertFiles(files);
		});
		return new RedirectView("/board/read?bno=" + bno);
	}

	@GetMapping("/modify")
	public void modifyGET(@RequestParam Long bno, Model model) {

		Board board = boardService.selectById(bno);

		model.addAttribute("board", board);
		model.addAttribute("files", boardService.selectFilesByID(bno));

	}


	@PostMapping("/modify")
	@ResponseBody
	public String  modify(@RequestBody RequestData requestData) {
		log.info("/modify");
		log.info("requestData", requestData);
		Board board = requestData.getBoard();
		List<Files> files = requestData.getFiles();

		boardService.updateBoard(board);
		files.forEach(file -> {
			file.setBno(board.getBno());
			boardService.insertFiles(file);
		});
		log.info("board", board);
		log.info("files", files);

		return "/board/read?bno=" + board.getBno();
	}

	@PostMapping("/remove")
	@Transactional
	public String remove(Board board) {
		boardService.deleteBoard(board.getBno());
		boardService.deleteFiles(board.getBno());

		return "redirect:/board/list";
	}

	@GetMapping("/editor")
	public void editor(@RequestParam Long bno, Model model) {
		log.info("/editor");

		Board board = boardService.selectById(bno);
		log.info("board", board);
		model.addAttribute("board", board);
	}

	@GetMapping("/uploader")
	public void uploader(@RequestParam Long bno, Model model) {
		log.info("/uploader");

		model.addAttribute("files", boardService.selectFilesByID(bno));
	}


}
