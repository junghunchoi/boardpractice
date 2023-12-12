package com.boardpractice.repository;


import com.boardpractice.dto.FileDTO;
import org.springframework.stereotype.Repository;

@Repository
public interface FileRepository {
	Long register(FileDTO boardDTO);

	FileDTO read(Long fno);

	void remove(Long fno);

}
