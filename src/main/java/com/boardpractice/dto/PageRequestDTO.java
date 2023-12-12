package com.boardpractice.dto;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.Positive;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class PageRequestDTO {

	@Builder.Default
	@Min(value =1)
	@Positive
	private int page = 1;

	@Builder.Default
	@Min(value =10)
	@Max(value = 100)
	@Positive
	private int size = 10;

	public int getSkip() {
		return (page - 1) * size;
	}



//	@Builder.Default
//	private int page = 1;
//
//	@Builder.Default
//	private int size = 10;
//
//	//사용하는 pageable 타입을 반환하는 기능도 필요하다.
//	public Pageable getPageable(String...props) {
//		return PageRequest.of(this.page - 1, this.size, Sort.by(props).descending());
//	}
//
//	private String link;
//
//	public String getLink() {
//		if (link == null) {
//			StringBuilder builder = new StringBuilder();
//			builder.append("page=" + this.page);
//			builder.append("&size=" + this.size);
//		}
//		return link;
//	}


}
