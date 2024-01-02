G_KUPlugin["magicjscrypto"].options = {
	/* extraJsModules
	 * 라온K 업로드에서 로드해야 할 magicjs 파일 url을 배열 안에 넣어줍니다.
	 * url을 넣지 않으면 업로드폴더/plugin/magicjscrypto/js/magicjs_1.2.4.0.min.js 파일이 로드 됩니다.
	 * */
	extraJsModules: [],

	/* initKey
	 * magicjs에서 init할 때 필요한 키 값을 넣어 줍니다.
	 * */
	initKey: '',

	/* kmCert
	 * 서버 인증서 값을 넣어줍니다.
	 * */
	kmCert: '',

	/* encrypt > decryptInServer
	 * 암호화 전송 시 서버에서 파일을 어떻게 저장할지에 대한 설정입니다.
	 * "0": 서버에서 암호화 된 채로 저장합니다.
	 * "1": 서버에서 복호화하여 원본파일로 저장합니다.
	 * */
	encrypt: {
		decryptInServer: '1'
	}
};
