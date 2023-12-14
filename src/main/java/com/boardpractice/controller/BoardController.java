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

		PageResponseDTO<BoardDTO> responseDTO = boardService.selectBoardList(pageRequestDTO);
		model.addAttribute("responseDTO", responseDTO);
	}

	@GetMapping("/read")
	public void read(@RequestParam Long bno, Model model) {
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
	public void register(@RequestBody RequestData requestData) {
		int bno = boardService.insertBoard(requestData.getBoard());
		requestData.getFiles().forEach(files -> {
			files.setBno((long) bno);
			boardService.insertFiles(files);
		});

	}

	@GetMapping("/modify")
	public void modifyGET(@RequestParam Long bno, Model model) {
		Board board = boardService.selectById(bno);

		model.addAttribute("board", board);
		model.addAttribute("files", boardService.selectFilesByID(bno));

	}


	@PostMapping("/modify")
	public ResponseEntity<Map<String, String>> modify(@RequestBody RequestData requestData,
		RedirectAttributes redirectAttributes) {
		Board board = requestData.getBoard();
		List<Files> files = requestData.getFiles();

		boardService.updateBoard(board);
		files.forEach(file -> {
			file.setBno(board.getBno());
			boardService.insertFiles(file);
		});

		redirectAttributes.addFlashAttribute("result", "modified");
		redirectAttributes.addAttribute("bno", board.getBno());

		String redirectURL = "/board/read?bno=" + board.getBno();
		Map<String, String> response = new HashMap<>();
		response.put("redirectUrl", redirectURL);
		return ResponseEntity.ok(response);

	}

	@PostMapping("/remove")
	@Transactional
	public String remove(Board board) {
		boardService.deleteBoard(board.getBno());
		boardService.deleteFiles(board.getBno());

		return "redirect:/board/list";
	}

	@PostMapping("/test")
	public void test(@RequestBody RequestData requestData) {
		log.info("-------------test-------------");
		log.info(requestData);
		log.info(requestData.getBoard());
		int bno = boardService.insertBoard(requestData.getBoard());
		requestData.getFiles().forEach(files -> {
			files.setBno((long) bno);
		});
		log.info("files" + requestData.getFiles());
	}

}
