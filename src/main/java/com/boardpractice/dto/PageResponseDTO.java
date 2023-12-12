package com.boardpractice.dto;

import java.util.List;
import lombok.Builder;
import lombok.Data;
import lombok.ToString;

@Data
public class PageResponseDTO<E> {

	private int page;
	private int size;
	private int total;

	private int start;
	private int end;

	private boolean prev;
	private boolean next;

	private List<E> dtoList;

	@Builder(builderMethodName = "withAll")
	public PageResponseDTO(PageRequestDTO pageRequestDTO, List<E> dtoList, int total){
		this.page = pageRequestDTO.getPage();
		this.size = pageRequestDTO.getSize();

		this.total = total;
		this.dtoList = dtoList;

		this.end = (int)(Math.ceil(this.page / 10.0)) * 10;
		this.start = this.end - 9;
		int last = (int)(Math.ceil(total / (double)this.size));
		this.end = Math.min(this.end, last);
		this.prev = this.start > 1;
		this.next = this.end * this.size < total;
	}
}
