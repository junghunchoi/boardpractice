package com.boardpractice.controller;

import com.raonwiz.kupload.RAONKHandler;
import com.raonwiz.kupload.event.EventClass;
import javax.servlet.ServletContext;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Log4j2
public class KuploadController {

	@RequestMapping(value = "/kupload", method = {RequestMethod.GET, RequestMethod.POST})
	public void handler(HttpServletRequest request, HttpServletResponse response) throws Exception {
		log.info("/upload");
		request.setCharacterEncoding("UTF-8");

		RAONKHandler upload = new RAONKHandler();

		//디버깅
		//2번째 파라미터의 Log Mode 설명
		//- C : 일반로그 출력(System.out.println 로그 출력)
		//- L : 1. Log4j 모듈에 의한 로그 출력(/handler/JAVA 폴더의 log4j.properties 파일을 WEB-INF/classes에 적용)
		//      2. 기존 설정파일이 존재할 경우 /handler/JAVA 폴더의 log4j.properties 파일 내용 중 "# K Upload Log" 항목을 기존 설정파일에 적용
		//      3. 기존 설정파일의 위치가 WEB-INF/classes/log4j.properties 경로가 아닐 경우 3번째 파라미터에 해당 경로 설정
		//      4. WEB-INF/lib에 log4j-......jar 파일이 존재하지 않을 경우 DebugMode가 false로 설정됨
//		upload.settingVo.setDebugMode(true, "C");
		upload.settingVo.setDebugMode(true, "L");

		///////////////////////////////
		//        이벤트를 등록 처리          //
		///////////////////////////////
		EventClass event = new EventClass();


		///////////////////////////////
		//         서버모듈 설정              //
		///////////////////////////////

		//실제 업로드 할 기본경로 설정 (가상경로와 물리적 경로로 설정 가능)
		//폴더명 제일 뒤에 .과 공백이 있다면 제거하시고 설정해 주세요.(운영체제에서 지원되지 않는 문자열입니다.)

		//-------------------- [설정방법1] 물리적 경로 설정 시작 --------------------//

		//해당 설정은 PhysicalPath를 RAONK Upload 제품폴더\raonkuploaddata\ 를 저장 Root 경로로 설정하는 내용입니다.
//		String strPathChar = com.raonwiz.kupload.util.StaticVariables.strPathChar;
//		String strRootFolder = request.getServletPath();
//		strRootFolder = strRootFolder.substring(0,strRootFolder.lastIndexOf("/"));
//		strRootFolder = request.getSession().getServletContext().getRealPath(strRootFolder.substring(0,strRootFolder.lastIndexOf("/")));
		upload.settingVo.setPhysicalPath("D:\\file\\raonkdownload");
		
		//임시파일 물리적 경로설정 ( setPhysicalPath에 설정된 경로 + raonktemp )
		upload.settingVo.setTempPath("D:\\file\\raonkdownload\\raonktemp");
		
		// ***************보안 설정 : 업로드 가능한 경로 설정 - 이외의 경로로 업로드 불가능***************
//		String[] arrAllowUploadDirectoryPath = {strRootFolder + strPathChar + "raonkuploaddata"};
//		upload.settingVo.setAllowUploadDirectoryPath(arrAllowUploadDirectoryPath);
		
		// ***************보안 설정 : 다운로드 가능한 경로 설정 - 이외의 경로에서 다운로드 불가능***************
		// context.Request.MapPath("/") 값은 샘플 동작을 위한 설정으로 실제 적용 시 제외하시면 됩니다.
//		String[] arrAllowDownloadDirectoryPath = {strRootFolder + strPathChar + "raonkuploaddata", request.getSession().getServletContext().getRealPath("/")};
//		upload.settingVo.setAllowDownloadDirectoryPath(arrAllowDownloadDirectoryPath);

		//-------------------- [설정방법1] 물리적 경로 설정 끝 --------------------//

		//-------------------- [설정방법2] 가상경로 설정 시작 ---------------------//
//		upload.settingVo.setVirtualPath("/raonkuploaddata");
//
//		//임시파일 물리적 경로설정 ( setVirtualPath에 설정된 경로 + raonktemp )
//		upload.settingVo.setTempPath(
//			request.getSession().getServletContext().getRealPath("/raonkuploaddata")
//				+ java.io.File.separator + "raonktemp");

		//***************보안 설정 : 업로드 가능한 경로 설정 - 이외의 경로로 업로드 불가능***************
//		String[] arrAllowUploadDirectoryPath = {request.getSession().getServletContext().getRealPath("/raonkuploaddata")};
//		upload.settingVo.setAllowUploadDirectoryPath(arrAllowUploadDirectoryPath);
//
//		//***************보안 설정 : 다운로드 가능한 경로 설정 - 이외의 경로에서 다운로드 불가능***************
//		//context.Request.MapPath("/") 값은 샘플 동작을 위한 설정으로 실제 적용 시 제외하시면 됩니다.
//		String[] arrAllowDownloadDirectoryPath = {request.getSession().getServletContext().getRealPath("/raonkuploaddata"), request.getSession().getServletContext().getRealPath("/")};
//		upload.settingVo.setAllowDownloadDirectoryPath(arrAllowDownloadDirectoryPath);
//		//-------------------- [설정방법2] 가상경로 설정 끝 --------------------//
//
//		//위에 설정된 임시파일 물리적 경로에 불필요한 파일을 삭제 처리하는 설정 (단위: 일)
//		upload.settingVo.setGarbageCleanDay(2);
//
		///////////////////////////////
		//      SMB Protocol 설정        //
		///////////////////////////////

		//1. SMB Protocol 연결 설정 
		//SMB Protocol 사용을 위한 연결설정을 해야 합니다. 
		//upload.settingVo.setNtlmAuthentication("smb://SMB Domain 또는 IP", "ID", "Password"); 

		//2. 파일 업로드시 사용되는 Temp Path 설정
		//파일 업로드시 사용되는 Temp Path를 SMB Protocol의 경로로 설정해야 합니다.
		//upload.settingVo.setTempPath("smb://SMB Domain 또는 IP/temp ");

		//3. 파일이 업로드 될 최종 Path 설정
		//파일이 업로드 될 최종 Path를 SMB Protocol의 경로로 설정해야 합니다.
		//upload.settingVo.setPhysicalPath("smb://SMB Domain 또는 IP/savePath");

		///////////////////////////////

		//환경설정파일 물리적 폴더 (서버 환경설정 파일을 사용할 경우)
//		upload.settingVo.setConfigPhysicalPath("D:\\file\\raonkdownload");
		//서버 구성정보중 Context Path가 있다면, 아래와 같이 설정해주세요. (SetVirtualPath 사용시만 필요)
		//upload.settingVo.setContextPath("Context Path");

		//***************보안 설정 : 업로드 제한 확장자 설정***************
		//적용에 필요 없는 확장자는 제외하시면 됩니다.
		//setUploadCheckFileExtension 1번째 Parameter : 0-제한,1-허용 , 2번째 Parameter : 확장자 리스트 Array Type
		String[] arrUploadCheckFileExtension = {"exe", "bat", "sh", "jsp", "php"};
//		upload.settingVo.setUploadCheckFileExtension(0, arrUploadCheckFileExtension);

		// Servlet으로 handler 작업을 하시려면 다음과 같이 작성해 주세요.
		// Servlet으로 구성하실 때 해당 Function의 Return Type은 void로 선언 후 return 되는 값은 반드시 없어야합니다.

		// 만일 getServletContext()가 undefined 이면 request.getSession().getServletContext(); 으로 하시면 됩니다.
		ServletContext application = request.getSession().getServletContext();

		String result = "";
		try {
			result = upload.Process(request, response, application, event);
		} catch (Exception e) {
			e.printStackTrace();
		}

		if (!result.equals("")) {
			response.setContentType("text/html");
			ServletOutputStream out = response.getOutputStream();
			out.print(result);
			out.close();
		}

	}
}