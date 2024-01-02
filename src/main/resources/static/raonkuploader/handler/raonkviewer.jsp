<%@ page contentType="text/html;charset=utf-8"%><%@ page import="com.raonwiz.kupload.RAONKHandler" %><%@page import="com.raonwiz.kupload.util.RAONKParameterVo"%><%
	out.clear();
	
	request.setCharacterEncoding("UTF-8");
	
	RAONKHandler upload = new RAONKHandler();
	
	//디버깅
    //Log Type 설명
    
    //- C : 일반로그 출력(System.out.println 로그 출력)
    //RAONKParameterVo parameterVo = new RAONKParameterVo();
	//parameterVo.setIsDebugMode(true);
    //parameterVo.setLogType("C");
    //parameterVo.setLogLevel("DEBUG");
    //upload.settingVo.setDebugMode(parameterVo);
    
	//- L : Log4j 로그 출력
	// JDK 1.5 이하인 경우
	// 1. Log4j 로그 출력을 위한 모듈 추가 (/handler/JAVA/jdk1.5-/log4j-1.2.17.jar)
	// 2. Log4j 로그 출력을 위한 설정파일 추가 (/handler/JAVA/jdk1.5-/ 폴더의 log4j.properties 파일을 WEB-INF/classes에 적용)
	// 3. 기존 설정파일이 존재할 경우 /handler/JAVA/jdk1.5-/ 폴더의 log4j.properties 파일 내용 중 "# K Upload Log" 항목을 기존 설정파일에 적용
	// 4. 기존 설정파일의 위치가 WEB-INF/classes/log4j.properties 경로가 아닐 경우 parameterVo.setLogConfigPath("...")에 해당 경로 설정
	// JDK 1.6 인 경우
	// 1. Log4j 로그 출력을 위한 모듈 추가 (/handler/JAVA/jdk1.6/log4j-api-2.3.2.jar, log4j-core-2.3.2.jar, log4j-1.2-api-2.3.2.jar)
	// 2. Log4j 로그 출력을 위한 설정파일 추가 (/handler/JAVA/jdk1.6/ 폴더의 log4j2.xml 파일을 WEB-INF/classes에 적용)
	// 3. 기존 설정파일이 존재할 경우 /handler/JAVA/jdk1.6/ 폴더의 log4j2.xml 파일 내용 중 Appenders 내의 항목들과 Logger를 기존 설정파일에 적용
	// JDK 1.7 인 경우
	// 1. Log4j 로그 출력을 위한 모듈 추가 (/handler/JAVA/jdk1.7/log4j-api-2.12.4.jar, log4j-core-2.12.4.jar, log4j-1.2-api-2.12.4.jar)
	// 2. Log4j 로그 출력을 위한 설정파일 추가 (/handler/JAVA/jdk1.7/ 폴더의 log4j2.xml 파일을 WEB-INF/classes에 적용)
	// 3. 기존 설정파일이 존재할 경우 /handler/JAVA/jdk1.7/ 폴더의 log4j2.xml 파일 내용 중 Appenders 내의 항목들과 Logger를 기존 설정파일에 적용
	// JDK 1.8 이상인 경우
	// 1. Log4j 로그 출력을 위한 모듈 추가 (/handler/JAVA/jdk1.8+/log4j-api-2.17.1.jar, log4j-core-2.17.1.jar, log4j-1.2-api-2.17.1.jar)
	// 2. Log4j 로그 출력을 위한 설정파일 추가 (/handler/JAVA/jdk1.8+/ 폴더의 log4j2.xml 파일을 WEB-INF/classes에 적용)
	// 3. 기존 설정파일이 존재할 경우 /handler/JAVA/jdk1.8+/ 폴더의 log4j2.xml 파일 내용 중 Appenders 내의 항목들과 Logger를 기존 설정파일에 적용
    //RAONKParameterVo parameterVo = new RAONKParameterVo();
    //parameterVo.setIsDebugMode(true);
    //parameterVo.setLogType("L");
    //upload.settingVo.setDebugMode(parameterVo);

	//Viewer 페이지의 Encoding을 설정할 때 사용 (기본값 : utf-8)
	//upload.SetEncoding("utf-8");

	String result = upload.Viewer(request, response);

    if(!result.equals("")) {
		out.print(result);
	}
%>