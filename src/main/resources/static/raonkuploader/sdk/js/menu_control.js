var G_vertical = '\u000B';
var G_formfeed = '\u000C';

var strSelectedMenu = '0,0';
var strMenuStatus = '';

//1 : icon (1 : intro, 2 : guide, 3 : sample, 4 : setting, 5 : brace, 6 : serverinfo, 7 : js, 8 : net, 9 : java)
//2 : title flag (0 : false, 1 : true)
//3 : title
//4 : url

var arrFirstMenu = ['1' + G_vertical + '0' + G_vertical + '소개', '2' + G_vertical + '0' + G_vertical + '클라이언트 가이드', '2' + G_vertical + '0' + G_vertical + '서버 가이드(.NET)', '2' + G_vertical + '0' + G_vertical + '서버 가이드(JAVA)', '2' + G_vertical + '0' + G_vertical + '기타 가이드', '3' + G_vertical + '0' + G_vertical + '샘플'];
var arrSecondMenu = [
    ['4' + G_vertical + '1' + G_vertical + '설치 및 기본설정' + G_vertical + 'html/kuploadSdkMain.html',
     '2' + G_vertical + '1' + G_vertical + '보안 개발 가이드' + G_vertical + 'html/securityDevelopment.html'],
    ['4' + G_vertical + '0' + G_vertical + 'Settings',
     '5' + G_vertical + '0' + G_vertical + 'Methods',
     '5' + G_vertical + '0' + G_vertical + 'Events'],
    ['5' + G_vertical + '0' + G_vertical + 'Methods',
     '5' + G_vertical + '0' + G_vertical + 'Image Methods',
     '5' + G_vertical + '0' + G_vertical + 'Events',
     '6' + G_vertical + '0' + G_vertical + '서버 설정 가이드'],
    ['5' + G_vertical + '0' + G_vertical + 'Methods',
     '5' + G_vertical + '0' + G_vertical + 'Image Methods',
     '5' + G_vertical + '0' + G_vertical + 'Events',
     '6' + G_vertical + '0' + G_vertical + '서버 설정 가이드'],
    ['2' + G_vertical + '1' + G_vertical + '서버에서 환경설정 파일 읽기' + G_vertical + 'html/etc/_Sample1.html',
     '2' + G_vertical + '1' + G_vertical + '파라미터 추가 후 서버에서 받는 방법' + G_vertical + 'html/etc/_Sample2.html',
     '2' + G_vertical + '1' + G_vertical + '파일 추가할 때 각 파일에 특정 정보 추가 후 서버에서 받는 방법' + G_vertical + 'html/etc/_Sample3.html',
     '2' + G_vertical + '1' + G_vertical + '파일을 원하는 파일명으로 변환하는 방법' + G_vertical + 'html/etc/_Sample4.html',
     '2' + G_vertical + '1' + G_vertical + '서버 이벤트에서 업로드 된 파일 정보 얻는 방법' + G_vertical + 'html/etc/_Sample5.html'],
    ['3' + G_vertical + '1' + G_vertical + '기본 업로드' + G_vertical + 'sample/html/sample_upload.html',
     '3' + G_vertical + '1' + G_vertical + '기본 다운로드' + G_vertical + 'sample/html/sample_download.html',
     '3' + G_vertical + '1' + G_vertical + '동적 생성' + G_vertical + 'sample/html/sample_ajax.html',
     '3' + G_vertical + '1' + G_vertical + '보안컨텐츠 다운로드' + G_vertical + 'sample/html/sample_custom_download.html',
     '3' + G_vertical + '1' + G_vertical + '다중 업로드' + G_vertical + 'sample/html/sample_multi_upload.html',
     '3' + G_vertical + '1' + G_vertical + '다운로드 모드 설정' + G_vertical + 'sample/html/sample_download_mode.html',
     '3' + G_vertical + '1' + G_vertical + '편집모드 이벤트' + G_vertical + 'sample/html/sample_edit_event.html',
     '3' + G_vertical + '1' + G_vertical + '보기모드 이벤트' + G_vertical + 'sample/html/sample_view_event.html',
     '3' + G_vertical + '1' + G_vertical + '폴더 구조로 업로드' + G_vertical + 'sample/html/sample_folder_upload.html',
     '3' + G_vertical + '1' + G_vertical + '폴더 구조로 다운로드' + G_vertical + 'sample/html/sample_folder_download.html',
     '3' + G_vertical + '1' + G_vertical + '이미지 미리보기' + G_vertical + 'sample/html/sample_img_preview.html',
     '3' + G_vertical + '1' + G_vertical + '졍렬/파일 순서 바꾸기' + G_vertical + 'sample/html/sample_file_sort.html',
     '3' + G_vertical + '1' + G_vertical + '대용량 설정' + G_vertical + 'sample/html/sample_large_file.html',
     '3' + G_vertical + '1' + G_vertical + '저장경로 설정 방법' + G_vertical + 'sample/html/sample_set_save_folder.html',
     '3' + G_vertical + '1' + G_vertical + '커스텀버튼 추가' + G_vertical + 'sample/html/sample_custom_button.html',
     '3' + G_vertical + '1' + G_vertical + '편집/보기 모드 동시 사용' + G_vertical + 'sample/html/sample_upload_view.html',
     '3' + G_vertical + '1' + G_vertical + '파라미터 추가' + G_vertical + 'sample/html/sample_add_formdata.html',
     '3' + G_vertical + '1' + G_vertical + 'Drop Zone' + G_vertical + 'sample/html/sample_drop_zone.html',
     '3' + G_vertical + '1' + G_vertical + '각 파일에 data 추가하는 방법' + G_vertical + 'sample/html/sample_set_custom_value.html',
     '3' + G_vertical + '1' + G_vertical + 'File 태그 연동' + G_vertical + 'sample/html/sample_inputfile_upload.html',
     '3' + G_vertical + '1' + G_vertical + '업로드 경로 암호화' + G_vertical + 'sample/html/sample_path_encrypt.html',
     '3' + G_vertical + '1' + G_vertical + '다중 카테고리 업로드' + G_vertical + 'sample/html/sample_multicategory_singleupload.html',
     '3' + G_vertical + '1' + G_vertical + 'Simple UI 업로드' + G_vertical + 'sample/html/sample_simpleUI_upload.html']
];
var arrThirdMenu = [
    [],
    [
        ['7' + G_vertical + '1' + G_vertical + 'InitXml' + G_vertical + 'html/client/_s_InitXml.html',
         '7' + G_vertical + '1' + G_vertical + 'InitServerXml' + G_vertical + 'html/client/_s_InitServerXml.html',
         '7' + G_vertical + '1' + G_vertical + 'InitVisible' + G_vertical + 'html/client/_s_InitVisible.html',
         '7' + G_vertical + '1' + G_vertical + 'UploadHolder' + G_vertical + 'html/client/_s_UploadHolder.html',
         '7' + G_vertical + '1' + G_vertical + 'IgnoreSameUploadName' + G_vertical + 'html/client/_s_IgnoreSameUploadName.html',
         '7' + G_vertical + '1' + G_vertical + 'License' + G_vertical + 'html/client/_s_License.html',
         '7' + G_vertical + '1' + G_vertical + 'Runtimes' + G_vertical + 'html/client/_s_Runtimes.html',
         '7' + G_vertical + '1' + G_vertical + 'Width' + G_vertical + 'html/client/_s_Width.html',
         '7' + G_vertical + '1' + G_vertical + 'Height' + G_vertical + 'html/client/_s_Height.html',
         '7' + G_vertical + '1' + G_vertical + 'SkinName' + G_vertical + 'html/client/_s_SkinName.html',
         '7' + G_vertical + '1' + G_vertical + 'CssRootPath' + G_vertical + 'html/client/_s_CssRootPath.html',
         '7' + G_vertical + '1' + G_vertical + 'CustomColor' + G_vertical + 'html/client/_s_CustomColor.html',
         '7' + G_vertical + '1' + G_vertical + 'CustomWebFileColor' + G_vertical + 'html/client/_s_CustomWebFileColor.html',
         '7' + G_vertical + '1' + G_vertical + 'Lang' + G_vertical + 'html/client/_s_Lang.html',
         '7' + G_vertical + '1' + G_vertical + 'Mode' + G_vertical + 'html/client/_s_Mode.html',
         '7' + G_vertical + '1' + G_vertical + 'Views' + G_vertical + 'html/client/_s_Views.html',
         '7' + G_vertical + '1' + G_vertical + 'ImgPreview' + G_vertical + 'html/client/_s_ImgPreview.html',
         '7' + G_vertical + '1' + G_vertical + 'ShowStatusBar' + G_vertical + 'html/client/_s_ShowStatusBar.html',
         '7' + G_vertical + '1' + G_vertical + 'ShowHeaderBar' + G_vertical + 'html/client/_s_ShowHeaderBar.html',
         '7' + G_vertical + '1' + G_vertical + 'HeaderItem' + G_vertical + 'html/client/_s_HeaderItem.html',
         '7' + G_vertical + '1' + G_vertical + 'UploadTransferWindow' + G_vertical + 'html/client/_s_UploadTransferWindow.html',
         '7' + G_vertical + '1' + G_vertical + 'UseLogoImage' + G_vertical + 'html/client/_s_UseLogoImage.html',
         '7' + G_vertical + '1' + G_vertical + 'SilentUpload' + G_vertical + 'html/client/_s_SilentUpload.html',
         '7' + G_vertical + '1' + G_vertical + 'SilentDownload' + G_vertical + 'html/client/_s_SilentDownload.html',
         '7' + G_vertical + '1' + G_vertical + '[HTML]SilentDownloadEx' + G_vertical + 'html/client/_s_SilentDownloadEx.html',
         '7' + G_vertical + '1' + G_vertical + 'ShowButtonBarEdit' + G_vertical + 'html/client/_s_ShowButtonBarEdit.html',
         '7' + G_vertical + '1' + G_vertical + 'ShowEditAlign' + G_vertical + 'html/client/_s_ShowEditAlign.html',
         '7' + G_vertical + '1' + G_vertical + 'ShowButtonBarView' + G_vertical + 'html/client/_s_ShowButtonBarView.html',
         '7' + G_vertical + '1' + G_vertical + 'ShowViewAlign' + G_vertical + 'html/client/_s_ShowViewAlign.html',
         '7' + G_vertical + '1' + G_vertical + 'ButtonBarPosition' + G_vertical + 'html/client/_s_ButtonBarPosition.html',
         '7' + G_vertical + '1' + G_vertical + 'BorderStyle' + G_vertical + 'html/client/_s_BorderStyle.html',
         '7' + G_vertical + '1' + G_vertical + 'MaxOneFileSize' + G_vertical + 'html/client/_s_MaxOneFileSize.html',
         '7' + G_vertical + '1' + G_vertical + 'MaxTotalFileSize' + G_vertical + 'html/client/_s_MaxTotalFileSize.html',
         '7' + G_vertical + '1' + G_vertical + 'MaxTotalFileCount' + G_vertical + 'html/client/_s_MaxTotalFileCount.html',
         '7' + G_vertical + '1' + G_vertical + 'HideListInfo' + G_vertical + 'html/client/_s_HideListInfo.html',
         '7' + G_vertical + '1' + G_vertical + 'Extension' + G_vertical + 'html/client/_s_Extension.html',
         '7' + G_vertical + '1' + G_vertical + 'MultiFileSelect' + G_vertical + 'html/client/_s_MultiFileSelect.html',
         '7' + G_vertical + '1' + G_vertical + 'ListViewDbclick' + G_vertical + 'html/client/_s_ListViewDbclick.html',
         '7' + G_vertical + '1' + G_vertical + 'ListViewDragAndDrop' + G_vertical + 'html/client/_s_ListViewDragAndDrop.html',
         '7' + G_vertical + '1' + G_vertical + 'ResumeUpload' + G_vertical + 'html/client/_s_ResumeUpload.html',
         '7' + G_vertical + '1' + G_vertical + 'ResumeDownload' + G_vertical + 'html/client/_s_ResumeDownload.html',
         '7' + G_vertical + '1' + G_vertical + '[Agent]FolderTransfer' + G_vertical + 'html/client/_s_FolderTransfer.html',
         '7' + G_vertical + '1' + G_vertical + '[Agent]Timeout' + G_vertical + 'html/client/_s_Timeout.html',
         '7' + G_vertical + '1' + G_vertical + '[Agent]AutomaticConnection' + G_vertical + 'html/client/_s_AutomaticConnection.html',
         '7' + G_vertical + '1' + G_vertical + 'ShowCheckBox' + G_vertical + 'html/client/_s_ShowCheckbox.html',
         '7' + G_vertical + '1' + G_vertical + 'HideContextMenu' + G_vertical + 'html/client/_s_HideContextMenu.html',
         '7' + G_vertical + '1' + G_vertical + 'UseSizeColumn' + G_vertical + 'html/client/_s_UseSizeColumn.html',
         '7' + G_vertical + '1' + G_vertical + 'RemoveContextItem' + G_vertical + 'html/client/_s_RemoveContextItem.html',
         '7' + G_vertical + '1' + G_vertical + '[Agent]UseScriptEventControl' + G_vertical + 'html/client/_s_UseScriptEventControl.html',
         '7' + G_vertical + '1' + G_vertical + 'LargeFiles' + G_vertical + 'html/client/_s_LargeFiles.html',
         '7' + G_vertical + '1' + G_vertical + 'FileSort' + G_vertical + 'html/client/_s_FileSort.html',
         '7' + G_vertical + '1' + G_vertical + 'FileMoveContextMenu' + G_vertical + 'html/client/_s_FileMoveContextMenu.html',
         '7' + G_vertical + '1' + G_vertical + 'CompleteEventResetUse' + G_vertical + 'html/client/_s_CompleteEventResetUse.html',
         '7' + G_vertical + '1' + G_vertical + 'UserMessage' + G_vertical + 'html/client/_s_UserMessage.html',
         '7' + G_vertical + '1' + G_vertical + 'DisableAlertMessage' + G_vertical + 'html/client/_s_DisableAlertMessage.html',
         '7' + G_vertical + '1' + G_vertical + 'AllowedZeroFileSize' + G_vertical + 'html/client/_s_AllowedZeroFileSize.html',
         '7' + G_vertical + '1' + G_vertical + 'EncryptParam' + G_vertical + 'html/client/_s_EncryptParam.html',
         '7' + G_vertical + '1' + G_vertical + 'FileExtensionDetector' + G_vertical + 'html/client/_s_FileExtensionDetector.html',
         '7' + G_vertical + '1' + G_vertical + 'FileIntegrity' + G_vertical + 'html/client/_s_FileIntegrity.html',
         '7' + G_vertical + '1' + G_vertical + 'FileEncrypt' + G_vertical + 'html/client/_s_FileEncrypt.html',
         '7' + G_vertical + '1' + G_vertical + '[Agent]DefaultDownloadPath' + G_vertical + 'html/client/_s_DefaultDownloadPath.html',
         '7' + G_vertical + '1' + G_vertical + 'UseBeforeAddEvent' + G_vertical + 'html/client/_s_UseBeforeAddEvent.html',
         '7' + G_vertical + '1' + G_vertical + 'UseAfterAddEvent' + G_vertical + 'html/client/_s_UseAfterAddEvent.html',
         '7' + G_vertical + '1' + G_vertical + 'UseAfterAddAllEvent' + G_vertical + 'html/client/_s_UseAfterAddAllEvent.html',
         '7' + G_vertical + '1' + G_vertical + 'UseBeforeDeleteEvent' + G_vertical + 'html/client/_s_UseBeforeDeleteEvent.html',
         '7' + G_vertical + '1' + G_vertical + 'UseAfterDeleteEvent' + G_vertical + 'html/client/_s_UseAfterDeleteEvent.html',
         '7' + G_vertical + '1' + G_vertical + 'UseDeleteAllEvent' + G_vertical + 'html/client/_s_UseDeleteAllEvent.html',
         '7' + G_vertical + '1' + G_vertical + 'UseBeforeOpenEvent' + G_vertical + 'html/client/_s_UseBeforeOpenEvent.html',
         '7' + G_vertical + '1' + G_vertical + 'UseBeforeDownloadEvent' + G_vertical + 'html/client/_s_UseBeforeDownloadEvent.html',
         '7' + G_vertical + '1' + G_vertical + 'UseDownloadCompleteEvent' + G_vertical + 'html/client/_s_UseDownloadCompleteEvent.html',
         '7' + G_vertical + '1' + G_vertical + 'UseDownloadCompleteAllEvent' + G_vertical + 'html/client/_s_UseDownloadCompleteAllEvent.html',
         '7' + G_vertical + '1' + G_vertical + 'UseUploadingCancelEvent' + G_vertical + 'html/client/_s_UseUploadingCancelEvent.html',
         '7' + G_vertical + '1' + G_vertical + 'UseAddLocalFileDirectlyCallBackEvent' + G_vertical + 'html/client/_s_UseAddLocalFileDirectlyCallBackEvent.html',
         '7' + G_vertical + '1' + G_vertical + 'UseAddLocalFileDirectlyExCallBackEvent' + G_vertical + 'html/client/_s_UseAddLocalFileDirectlyExCallBackEvent.html',
         '7' + G_vertical + '1' + G_vertical + 'UseGetZipFileInfoCallBackEvent' + G_vertical + 'html/client/_s_UseGetZipFileInfoCallBackEvent.html',
         '7' + G_vertical + '1' + G_vertical + 'UseGetExcelDataCallBackEvent' + G_vertical + 'html/client/_s_UseGetExcelDataCallBackEvent.html',
         '7' + G_vertical + '1' + G_vertical + '[HTML]TransferBackgroundStyle' + G_vertical + 'html/client/_s_TransferBackgroundStyle.html',
         '7' + G_vertical + '1' + G_vertical + 'UseDropzone' + G_vertical + 'html/client/_s_UseDropzone.html',
         '7' + G_vertical + '1' + G_vertical + '[HTML]AllowOpenExtension' + G_vertical + 'html/client/_s_AllowOpenExtension.html',
         '7' + G_vertical + '1' + G_vertical + '[Agent]UseAgentInstallGuide' + G_vertical + 'html/client/_s_UseAgentInstallGuide.html',
         '7' + G_vertical + '1' + G_vertical + 'UseDbclickOpen' + G_vertical + 'html/client/_s_UseDbclickOpen.html',
         '7' + G_vertical + '1' + G_vertical + 'DevelopLangage' + G_vertical + 'html/client/_s_DevelopLangage.html',
         '7' + G_vertical + '1' + G_vertical + 'HandlerUrl' + G_vertical + 'html/client/_s_HandlerUrl.html',
         '7' + G_vertical + '1' + G_vertical + 'ViewerHandlerUrl' + G_vertical + 'html/client/_s_ViewerHandlerUrl.html',
         '7' + G_vertical + '1' + G_vertical + 'DownloadHandlerUrl' + G_vertical + 'html/client/_s_DownloadHandlerUrl.html',
         '7' + G_vertical + '1' + G_vertical + 'FolderNameRule' + G_vertical + 'html/client/_s_FolderNameRule.html',
         '7' + G_vertical + '1' + G_vertical + 'FileNameRule' + G_vertical + 'html/client/_s_FileNameRule.html',
         '7' + G_vertical + '1' + G_vertical + 'FileNameRuleEx' + G_vertical + 'html/client/_s_FileNameRuleEx.html',
         '7' + G_vertical + '1' + G_vertical + 'ImageQuality' + G_vertical + 'html/client/_s_ImageQuality.html',
         '7' + G_vertical + '1' + G_vertical + 'ZIndex' + G_vertical + 'html/client/_s_ZIndex.html',
         '7' + G_vertical + '1' + G_vertical + 'UserCssUrl' + G_vertical + 'html/client/_s_UserCssUrl.html',
         '7' + G_vertical + '1' + G_vertical + 'AllowDuplicationFile' + G_vertical + 'html/client/_s_AllowDuplicationFile.html',
         // sdk 추가 - by LimSW 22.10.21
         '7' + G_vertical + '1' + G_vertical + 'Event.OnError' + G_vertical + 'html/client/_s_Event.OnError.html',
         '7' + G_vertical + '1' + G_vertical + 'Event.CreationComplete' + G_vertical + 'html/client/_s_Event.CreationComplete.html',
         '7' + G_vertical + '1' + G_vertical + 'Event.BeforeUpload' + G_vertical + 'html/client/_s_Event.BeforeUpload.html',
         '7' + G_vertical + '1' + G_vertical + 'Event.UploadComplete' + G_vertical + 'html/client/_s_Event.UploadComplete.html',
         '7' + G_vertical + '1' + G_vertical + 'Event.MultiUploadComplete' + G_vertical + 'html/client/_s_Event.MultiUploadComplete.html',
         '7' + G_vertical + '1' + G_vertical + 'Event.BeforeDownloadFile' + G_vertical + 'html/client/_s_Event.BeforeDownloadFile.html',
         '7' + G_vertical + '1' + G_vertical + 'Event.DownloadCompleteFile' + G_vertical + 'html/client/_s_Event.DownloadCompleteFile.html',
         '7' + G_vertical + '1' + G_vertical + 'Event.DownloadCompleteAllFile' + G_vertical + 'html/client/_s_Event.DownloadCompleteAllFile.html',
         '7' + G_vertical + '1' + G_vertical + 'Event.BeforeOpenFile' + G_vertical + 'html/client/_s_Event.BeforeOpenFile.html',
         '7' + G_vertical + '1' + G_vertical + 'Event.BeforeAddFile' + G_vertical + 'html/client/_s_Event.BeforeAddFile.html',
         '7' + G_vertical + '1' + G_vertical + 'Event.AfterAddFile' + G_vertical + 'html/client/_s_Event.AfterAddFile.html',
         '7' + G_vertical + '1' + G_vertical + 'Event.AfterAddAllFile' + G_vertical + 'html/client/_s_Event.AfterAddAllFile.html',
         '7' + G_vertical + '1' + G_vertical + 'Event.BeforeDeleteFile' + G_vertical + 'html/client/_s_Event.BeforeDeleteFile.html',
         '7' + G_vertical + '1' + G_vertical + 'Event.AfterDeleteFile' + G_vertical + 'html/client/_s_Event.AfterDeleteFile.html',
         '7' + G_vertical + '1' + G_vertical + 'Event.DeleteAllFile' + G_vertical + 'html/client/_s_Event.DeleteAllFile.html',
         '7' + G_vertical + '1' + G_vertical + 'Event.SelectItem' + G_vertical + 'html/client/_s_Event.SelectItem.html',
         '7' + G_vertical + '1' + G_vertical + 'Event.AfterMoveFile' + G_vertical + 'html/client/_s_Event.AfterMoveFile.html',
         '7' + G_vertical + '1' + G_vertical + 'Event.UploadingCancel' + G_vertical + 'html/client/_s_Event.UploadingCancel.html',
         '7' + G_vertical + '1' + G_vertical + '[Agent]Event.DownloadCancel' + G_vertical + 'html/client/_s_Event.DownloadCancel.html',
         '7' + G_vertical + '1' + G_vertical + 'Event.CustomAction' + G_vertical + 'html/client/_s_Event.CustomAction.html',
         '7' + G_vertical + '1' + G_vertical + 'Event.OnLanguageDefinition' + G_vertical + 'html/client/_s_Event.OnLanguageDefinition.html',
         '7' + G_vertical + '1' + G_vertical + 'Event.Alert' + G_vertical + 'html/client/_s_Event.Alert.html',
         '7' + G_vertical + '1' + G_vertical + '[Agent]Event.AgentInstall' + G_vertical + 'html/client/_s_Event.AgentInstall.html',
         '7' + G_vertical + '1' + G_vertical + '[Agent]Event.CloseInstallPopup' + G_vertical + 'html/client/_s_Event.CloseInstallPopup.html',
         '7' + G_vertical + '1' + G_vertical + '[Agent]AgentAdmin' + G_vertical + 'html/client/_s_AgentAdmin.html',
         '7' + G_vertical + '1' + G_vertical + '[Agent]AgentCompressBufferSize' + G_vertical + 'html/client/_s_AgentCompressBufferSize.html',
         '7' + G_vertical + '1' + G_vertical + '[Agent]AgentEventInterval' + G_vertical + 'html/client/_s_AgentEventInterval.html',
         '7' + G_vertical + '1' + G_vertical + '[Agent]AgentEventType' + G_vertical + 'html/client/_s_AgentEventType.html',
         '7' + G_vertical + '1' + G_vertical + '[Agent]AgentEventWaitTime' + G_vertical + 'html/client/_s_AgentEventWaitTime.html',
         '7' + G_vertical + '1' + G_vertical + '[Agent]AgentInstallFailCheck' + G_vertical + 'html/client/_s_AgentInstallFailCheck.html',
         '7' + G_vertical + '1' + G_vertical + '[Agent]AgentInstallFolderUrl' + G_vertical + 'html/client/_s_AgentInstallFolderUrl.html',
         '7' + G_vertical + '1' + G_vertical + '[Agent]AgentMultiDownloadCount' + G_vertical + 'html/client/_s_AgentMultiDownloadCount.html',
         '7' + G_vertical + '1' + G_vertical + '[Agent]AgentMultiTransferCount' + G_vertical + 'html/client/_s_AgentMultiTransferCount.html',
         '7' + G_vertical + '1' + G_vertical + '[Agent]AgentMultiUploadCount' + G_vertical + 'html/client/_s_AgentMultiUploadCount.html',
         '7' + G_vertical + '1' + G_vertical + '[Agent]AgentTempRootDirectory' + G_vertical + 'html/client/_s_AgentTempRootDirectory.html',
         '7' + G_vertical + '1' + G_vertical + '[Agent]AgentTransferType' + G_vertical + 'html/client/_s_AgentTransferType.html',
         '7' + G_vertical + '1' + G_vertical + 'UseAlertEvent' + G_vertical + 'html/client/_s_UseAlertEvent.html',
         '7' + G_vertical + '1' + G_vertical + '[Agent]AllowedEmptyFolder' + G_vertical + 'html/client/_s_AllowedEmptyFolder.html',
         '7' + G_vertical + '1' + G_vertical + 'AutoDestroy' + G_vertical + 'html/client/_s_AutoDestroy.html',
         '7' + G_vertical + '1' + G_vertical + '[Agent]AutoRecoveryTransfer' + G_vertical + 'html/client/_s_AutoRecoveryTransfer.html',
         '7' + G_vertical + '1' + G_vertical + '[Agent]AutoRenameLocalFileDownload' + G_vertical + 'html/client/_s_AutoRenameLocalFileDownload.html',
         '7' + G_vertical + '1' + G_vertical + '[Agent]ChangeDbclickCommand' + G_vertical + 'html/client/_s_ChangeDbclickCommand.html',
         '7' + G_vertical + '1' + G_vertical + '[Agent]CheckNetworkSpeed' + G_vertical + 'html/client/_s_CheckNetworkSpeed.html',
         '7' + G_vertical + '1' + G_vertical + '[Agent]DEXT5Install' + G_vertical + 'html/client/_s_DEXT5Install.html',
         '7' + G_vertical + '1' + G_vertical + '[Agent]DisableLastNotify' + G_vertical + 'html/client/_s_DisableLastNotify.html',
         '7' + G_vertical + '1' + G_vertical + '[Agent]DisablePreEndRequest' + G_vertical + 'html/client/_s_DisablePreEndRequest.html',
         '7' + G_vertical + '1' + G_vertical + '[Hybrid]DownloadHybridApp' + G_vertical + 'html/client/_s_DownloadHybridApp.html',
         '7' + G_vertical + '1' + G_vertical + '[Agent]DownloadSkipCheckWithFileSize' + G_vertical + 'html/client/_s_DownloadSkipCheckWithFileSize.html',
         '7' + G_vertical + '1' + G_vertical + '[Agent]DownloadStatusCheckInterval' + G_vertical + 'html/client/_s_DownloadStatusCheckInterval.html',
         '7' + G_vertical + '1' + G_vertical + '[Agent]DragAndDropMode' + G_vertical + 'html/client/_s_DragAndDropMode.html',
         '7' + G_vertical + '1' + G_vertical + '[Agent]EnableAdminLog' + G_vertical + 'html/client/_s_EnableAdminLog.html',
         '7' + G_vertical + '1' + G_vertical + '[Agent]EnableAgentShortcut' + G_vertical + 'html/client/_s_EnableAgentShortcut.html',
         '7' + G_vertical + '1' + G_vertical + 'EnforceDocumentDomain' + G_vertical + 'html/client/_s_EnforceDocumentDomain.html',
         '7' + G_vertical + '1' + G_vertical + 'EnforceHtml5' + G_vertical + 'html/client/_s_EnforceHtml5.html',
         '7' + G_vertical + '1' + G_vertical + 'FileDelimiter' + G_vertical + 'html/client/_s_FileDelimiter.html',
         '7' + G_vertical + '1' + G_vertical + '[Agent]FileSaveDialogTitle' + G_vertical + 'html/client/_s_FileSaveDialogTitle.html',
         '7' + G_vertical + '1' + G_vertical + '[Agent]FolderSelectDialogButtonName' + G_vertical + 'html/client/_s_FolderSelectDialogButtonName.html',
         '7' + G_vertical + '1' + G_vertical + '[Agent]FolderSelectDialogTitle' + G_vertical + 'html/client/_s_FolderSelectDialogTitle.html',
         '7' + G_vertical + '1' + G_vertical + '[Agent]FolderSelectDialogType' + G_vertical + 'html/client/_s_FolderSelectDialogType.html',
         '7' + G_vertical + '1' + G_vertical + 'IgnoreDifferentUploadName' + G_vertical + 'html/client/_s_IgnoreDifferentUploadName.html',
         '7' + G_vertical + '1' + G_vertical + 'LocalLongPathEnable' + G_vertical + 'html/client/_s_LocalLongPathEnable.html',
         '7' + G_vertical + '1' + G_vertical + '[Agent]MessageTitle' + G_vertical + 'html/client/_s_MessageTitle.html',
         '7' + G_vertical + '1' + G_vertical + 'MoveMouseDrag' + G_vertical + 'html/client/_s_MoveMouseDrag.html',
         '7' + G_vertical + '1' + G_vertical + '[Agent]PreCheckFileExistInDownload' + G_vertical + 'html/client/_s_PreCheckFileExistInDownload.html',
         '7' + G_vertical + '1' + G_vertical + '[Agent]ReportFailedList' + G_vertical + 'html/client/_s_ReportFailedList.html',
         '7' + G_vertical + '1' + G_vertical + '[Agent]ApplyAgentOs' + G_vertical + 'html/client/_s_ApplyAgentOs.html',
         '7' + G_vertical + '1' + G_vertical + '[Agent]UseWS' + G_vertical + 'html/client/_s_UseWS.html',
         '7' + G_vertical + '1' + G_vertical + 'HandlerKey' + G_vertical + 'html/client/_s_HandlerKey.html',
         '7' + G_vertical + '1' + G_vertical + '[Agent]ShowConfirmLocalFileDownload' + G_vertical + 'html/client/_s_ShowConfirmLocalFileDownload.html',
         '7' + G_vertical + '1' + G_vertical + '[Agent]ShowProgressLocalFileDownload' + G_vertical + 'html/client/_s_ShowProgressLocalFileDownload.html',
         '7' + G_vertical + '1' + G_vertical + '[Agent]ShowTrayIcon' + G_vertical + 'html/client/_s_ShowTrayIcon.html',
         '7' + G_vertical + '1' + G_vertical + 'SkipInternetState' + G_vertical + 'html/client/_s_SkipInternetState.html',
         '7' + G_vertical + '1' + G_vertical + 'SkipSentFile' + G_vertical + 'html/client/_s_SkipSentFile.html',
         '7' + G_vertical + '1' + G_vertical + 'EmptyDownloadFile' + G_vertical + 'html/client/_s_EmptyDownloadFile.html',
         '7' + G_vertical + '1' + G_vertical + 'ThumbsSize' + G_vertical + 'html/client/_s_ThumbsSize.html',
         '7' + G_vertical + '1' + G_vertical + 'ThumbsViewMode' + G_vertical + 'html/client/_s_ThumbsViewMode.html',
         '7' + G_vertical + '1' + G_vertical + '[Agent]TransferOpenFile' + G_vertical + 'html/client/_s_TransferOpenFile.html',
         '7' + G_vertical + '1' + G_vertical + 'UploadSkipErrorFile' + G_vertical + 'html/client/_s_UploadSkipErrorFile.html',
         '7' + G_vertical + '1' + G_vertical + 'UseAfterMoveFileEvent' + G_vertical + 'html/client/_s_UseAfterMoveFileEvent.html',
         '7' + G_vertical + '1' + G_vertical + '[Agent]UseAgentLog' + G_vertical + 'html/client/_s_UseAgentLog.html',
         '7' + G_vertical + '1' + G_vertical + 'UseAutoHeight' + G_vertical + 'html/client/_s_UseAutoHeight.html',
         '7' + G_vertical + '1' + G_vertical + '[Agent]UseAutoInstall' + G_vertical + 'html/client/_s_UseAutoInstall.html',
         '7' + G_vertical + '1' + G_vertical + 'UseCompressTransfer' + G_vertical + 'html/client/_s_UseCompressTransfer.html',
         '7' + G_vertical + '1' + G_vertical + '[Agent]UseDownloadCache' + G_vertical + 'html/client/_s_UseDownloadCache.html',
         '7' + G_vertical + '1' + G_vertical + '[Agent]UseDropZoneOverClass' + G_vertical + 'html/client/_s_UseDropZoneOverClass.html',
         '7' + G_vertical + '1' + G_vertical + '[Agent]UseFormDataInRangeInfo' + G_vertical + 'html/client/_s_UseFormDataInRangeInfo.html',
         '7' + G_vertical + '1' + G_vertical + 'UseHashExtract' + G_vertical + 'html/client/_s_UseHashExtract.html',
         '7' + G_vertical + '1' + G_vertical + '[Agent]UseInstallGuide' + G_vertical + 'html/client/_s_UseInstallGuide.html',
         '7' + G_vertical + '1' + G_vertical + 'UseKMonitoring' + G_vertical + 'html/client/_s_UseKMonitoring.html',
         '7' + G_vertical + '1' + G_vertical + '[Agent]UseLocalFileDownload' + G_vertical + 'html/client/_s_UseLocalFileDownload.html',
         '7' + G_vertical + '1' + G_vertical + '[Agent]SessionKeep' + G_vertical + 'html/client/_s_SessionKeep.html',
         '7' + G_vertical + '1' + G_vertical + '[Agent]UseSingleDownloadDialog' + G_vertical + 'html/client/_s_UseSingleDownloadDialog.html',
         '7' + G_vertical + '1' + G_vertical + 'UseSingleSelect' + G_vertical + 'html/client/_s_UseSingleSelect.html',
         '7' + G_vertical + '1' + G_vertical + 'UseWebfileThumbnailView' + G_vertical + 'html/client/_s_UseWebfileThumbnailView.html',
         '7' + G_vertical + '1' + G_vertical + 'UseWorkingImg.UseDownloadEnd' + G_vertical + 'html/client/_s_UseWorkingImg.UseDownloadEnd.html',
         '7' + G_vertical + '1' + G_vertical + 'UseWorkingImg.UseDownloadPre' + G_vertical + 'html/client/_s_UseWorkingImg.UseDownloadPre.html',
         '7' + G_vertical + '1' + G_vertical + 'UseWorkingImg.UseUploadEnd' + G_vertical + 'html/client/_s_UseWorkingImg.UseUploadEnd.html',
         '7' + G_vertical + '1' + G_vertical + 'UseWorkingImg.UseUploadPre' + G_vertical + 'html/client/_s_UseWorkingImg.UseUploadPre.html',
         '7' + G_vertical + '1' + G_vertical + '[Agent]UseZipDownload' + G_vertical + 'html/client/_s_UseZipDownload.html',
         '7' + G_vertical + '1' + G_vertical + '[Agent]UseZipInspector' + G_vertical + 'html/client/_s_UseZipInspector.html',
         '7' + G_vertical + '1' + G_vertical + 'ZipFileName' + G_vertical + 'html/client/_s_ZipFileName.html',
         '7' + G_vertical + '1' + G_vertical + 'AsyncUpload' + G_vertical + 'html/client/_s_AsyncUpload.html',
         '7' + G_vertical + '1' + G_vertical + '[Agent]DisableChunkDownload' + G_vertical + 'html/client/_s_DisableChunkDownload.html',
         '7' + G_vertical + '1' + G_vertical + 'DownloadMulti' + G_vertical + 'html/client/_s_DownloadMulti.html',
         '7' + G_vertical + '1' + G_vertical + '[Agent]HighSpeed' + G_vertical + 'html/client/_s_HighSpeed.html',
         '7' + G_vertical + '1' + G_vertical + 'MaxChunkSize' + G_vertical + 'html/client/_s_MaxChunkSize.html',
         '7' + G_vertical + '1' + G_vertical + '[Agent]OpenMulti' + G_vertical + 'html/client/_s_OpenMulti.html',
         '7' + G_vertical + '1' + G_vertical + '[Agent]PrintMulti' + G_vertical + 'html/client/_s_PrintMulti.html',
         '7' + G_vertical + '1' + G_vertical + '[Agent]SaveAndOpenMulti' + G_vertical + 'html/client/_s_SaveAndOpenMulti.html',
         '7' + G_vertical + '1' + G_vertical + 'SizeForChunkUpload' + G_vertical + 'html/client/_s_SizeForChunkUpload.html',
         '7' + G_vertical + '1' + G_vertical + '[Agent]TransferProcess' + G_vertical + 'html/client/_s_TransferProcess.html',
         '7' + G_vertical + '1' + G_vertical + '[Agent]UseBrowserUseragent' + G_vertical + 'html/client/_s_UseBrowserUseragent.html'],
        ['7' + G_vertical + '1' + G_vertical + 'RAONKUpload' + G_vertical + 'html/client/_m_RAONKUpload.html',
         '7' + G_vertical + '1' + G_vertical + 'AddFormData' + G_vertical + 'html/client/_m_AddFormData.html',
         '7' + G_vertical + '1' + G_vertical + 'AddHttpHeader' + G_vertical + 'html/client/_m_AddHttpHeader.html',
         '7' + G_vertical + '1' + G_vertical + 'AddLocalFileDirectly' + G_vertical + 'html/client/_m_AddLocalFileDirectly.html',
         '7' + G_vertical + '1' + G_vertical + 'AddLocalFileDirectlyEx' + G_vertical + 'html/client/_m_AddLocalFileDirectlyEx.html',
         '7' + G_vertical + '1' + G_vertical + 'AddLocalFileDirectlyExWithCallback' + G_vertical + 'html/client/_m_AddLocalFileDirectlyExWithCallback.html',
         '7' + G_vertical + '1' + G_vertical + 'AddLocalFolderDirectlyExWithCallback' + G_vertical + 'html/client/_m_AddLocalFolderDirectlyExWithCallback.html',
         // AddUploadedFileAsObject 작업 이후 sdk 제거 - by LimSW 23.07.18
         //'7' + G_vertical + '1' + G_vertical + 'AddUploadedFile' + G_vertical + 'html/client/_m_AddUploadedFile.html',
         //'7' + G_vertical + '1' + G_vertical + 'AddUploadedFileWithGetFileSize' + G_vertical + 'html/client/_m_AddUploadedFileWithGetFileSize.html',
         //'7' + G_vertical + '1' + G_vertical + 'AddUploadedFileEx' + G_vertical + 'html/client/_m_AddUploadedFileEx.html',
         //'7' + G_vertical + '1' + G_vertical + 'AddUploadedFileExWithGetFileSize' + G_vertical + 'html/client/_m_AddUploadedFileExWithGetFileSize.html',
         '7' + G_vertical + '1' + G_vertical + 'Cancel' + G_vertical + 'html/client/_m_Cancel.html',
         '7' + G_vertical + '1' + G_vertical + 'DeleteAllFile' + G_vertical + 'html/client/_m_DeleteAllFile.html',
         '7' + G_vertical + '1' + G_vertical + 'DeleteSelectedFile' + G_vertical + 'html/client/_m_DeleteSelectedFile.html',
         '7' + G_vertical + '1' + G_vertical + 'Destroy' + G_vertical + 'html/client/_m_Destroy.html',
         '7' + G_vertical + '1' + G_vertical + 'DownloadFile' + G_vertical + 'html/client/_m_DownloadFile.html',
         '7' + G_vertical + '1' + G_vertical + 'DownloadAllFile' + G_vertical + 'html/client/_m_DownloadAllFile.html',
         '7' + G_vertical + '1' + G_vertical + 'GetDeleteList' + G_vertical + 'html/client/_m_GetDeleteList.html',
         '7' + G_vertical + '1' + G_vertical + 'GetListInfo' + G_vertical + 'html/client/_m_GetListInfo.html',
         '7' + G_vertical + '1' + G_vertical + 'GetSelectedListInfo' + G_vertical + 'html/client/_m_GetSelectedListInfo.html',
         '7' + G_vertical + '1' + G_vertical + 'GetNewUploadList' + G_vertical + 'html/client/_m_GetNewUploadList.html',
         '7' + G_vertical + '1' + G_vertical + 'GetSelectedFileCount' + G_vertical + 'html/client/_m_GetSelectedFileCount.html',
         '7' + G_vertical + '1' + G_vertical + 'GetTotalFileCount' + G_vertical + 'html/client/_m_GetTotalFileCount.html',
         '7' + G_vertical + '1' + G_vertical + 'GetTotalFileSize' + G_vertical + 'html/client/_m_GetTotalFileSize.html',
         '7' + G_vertical + '1' + G_vertical + 'GetUploadCompleteState' + G_vertical + 'html/client/_m_GetUploadCompleteState.html',
         '7' + G_vertical + '1' + G_vertical + 'Hidden' + G_vertical + 'html/client/_m_Hidden.html',
         '7' + G_vertical + '1' + G_vertical + '[Agent]IsAgentInstalled' + G_vertical + 'html/client/_m_IsAgentInstalled.html',
         '7' + G_vertical + '1' + G_vertical + 'MoveFile' + G_vertical + 'html/client/_m_MoveFile.html',
         '7' + G_vertical + '1' + G_vertical + 'MultiTransfer' + G_vertical + 'html/client/_m_MultiTransfer.html',
         '7' + G_vertical + '1' + G_vertical + 'OpenFileDialog' + G_vertical + 'html/client/_m_OpenFileDialog.html',
         '7' + G_vertical + '1' + G_vertical + 'OpenSelectedFile' + G_vertical + 'html/client/_m_OpenSelectedFile.html',
         '7' + G_vertical + '1' + G_vertical + 'PrintSelectedFile' + G_vertical + 'html/client/_m_PrintSelectedFile.html',
         '7' + G_vertical + '1' + G_vertical + 'ResetUpload' + G_vertical + 'html/client/_m_ResetUpload.html',
         '7' + G_vertical + '1' + G_vertical + 'ResetUploadCompleteState' + G_vertical + 'html/client/_m_ResetUploadCompleteState.html',
         '7' + G_vertical + '1' + G_vertical + 'SaveAndFolderOpen' + G_vertical + 'html/client/_m_SaveAndFolderOpen.html',
         '7' + G_vertical + '1' + G_vertical + 'SaveAndOpen' + G_vertical + 'html/client/_m_SaveAndOpen.html',
         '7' + G_vertical + '1' + G_vertical + 'SetAllowOrLimitExtension' + G_vertical + 'html/client/_m_SetAllowOrLimitExtension.html',
         '7' + G_vertical + '1' + G_vertical + 'SetConfig' + G_vertical + 'html/client/_m_SetConfig.html',
         '7' + G_vertical + '1' + G_vertical + 'SetConfigByObject' + G_vertical + 'html/client/_m_SetConfigByObject.html',
         '7' + G_vertical + '1' + G_vertical + 'SetCustomHeaderByIndex' + G_vertical + 'html/client/_m_SetCustomHeaderByIndex.html',
         '7' + G_vertical + '1' + G_vertical + 'SetDefaultDownloadPath' + G_vertical + 'html/client/_m_SetDefaultDownloadPath.html',
         '7' + G_vertical + '1' + G_vertical + 'SetFileCustomValue' + G_vertical + 'html/client/_m_SetFileCustomValue.html',
         '7' + G_vertical + '1' + G_vertical + 'SetLargeFile' + G_vertical + 'html/client/_m_SetLargeFile.html',
         '7' + G_vertical + '1' + G_vertical + 'SetMaxOneFileSize' + G_vertical + 'html/client/_m_SetMaxOneFileSize.html',
         '7' + G_vertical + '1' + G_vertical + 'SetMaxTotalFileSize' + G_vertical + 'html/client/_m_SetMaxTotalFileSize.html',
         '7' + G_vertical + '1' + G_vertical + 'SetMaxTotalFileCount' + G_vertical + 'html/client/_m_SetMaxTotalFileCount.html',
         '7' + G_vertical + '1' + G_vertical + 'SetSelectFile' + G_vertical + 'html/client/_m_SetSelectFile.html',
         '7' + G_vertical + '1' + G_vertical + 'SetSelectFileEx' + G_vertical + 'html/client/_m_SetSelectFileEx.html',
         '7' + G_vertical + '1' + G_vertical + 'SetSize' + G_vertical + 'html/client/_m_SetSize.html',
         '7' + G_vertical + '1' + G_vertical + 'SetUploadMode' + G_vertical + 'html/client/_m_SetUploadMode.html',
         '7' + G_vertical + '1' + G_vertical + 'Show' + G_vertical + 'html/client/_m_Show.html',
         '7' + G_vertical + '1' + G_vertical + 'Transfer' + G_vertical + 'html/client/_m_Transfer.html',
         '7' + G_vertical + '1' + G_vertical + 'SetUploadedFile' + G_vertical + 'html/client/_m_SetUploadedFile.html',
         '7' + G_vertical + '1' + G_vertical + 'SetButtonList' + G_vertical + 'html/client/_m_SetButtonList.html',
         '7' + G_vertical + '1' + G_vertical + 'AddLocalFileObject' + G_vertical + 'html/client/_m_AddLocalFileObject.html',
         '7' + G_vertical + '1' + G_vertical + 'AddLocalFileObjectWithCallback' + G_vertical + 'html/client/_m_AddLocalFileObjectWithCallback.html',
         '7' + G_vertical + '1' + G_vertical + 'AddBase64Data' + G_vertical + 'html/client/_m_AddBase64Data.html',
         '7' + G_vertical + '1' + G_vertical + 'AddBase64DataWithCallback' + G_vertical + 'html/client/_m_AddBase64DataWithCallback.html',
         '7' + G_vertical + '1' + G_vertical + 'SetOriginalFileName' + G_vertical + 'html/client/_m_SetOriginalFileName.html',
         // sdk 추가 - by LimSW 22.10.21
         '7' + G_vertical + '1' + G_vertical + 'AddRAONKFileObject' + G_vertical + 'html/client/_m_AddRAONKFileObject.html',
         // AddUploadedFileAsObject 작업 이후 sdk 제거 - by LimSW 23.07.18
         //'7' + G_vertical + '1' + G_vertical + 'AddUploadedFileAsArray' + G_vertical + 'html/client/_m_AddUploadedFileAsArray.html',
         //'7' + G_vertical + '1' + G_vertical + 'AddUploadedFileExAsArray' + G_vertical + 'html/client/_m_AddUploadedFileExAsArray.html',
         '7' + G_vertical + '1' + G_vertical + 'ChangeToAgentMode' + G_vertical + 'html/client/_m_ChangeToAgentMode.html',
         '7' + G_vertical + '1' + G_vertical + 'FileSort' + G_vertical + 'html/client/_m_FileSort.html',
         '7' + G_vertical + '1' + G_vertical + 'GetCloudInfo' + G_vertical + 'html/client/_m_GetCloudInfo.html',
         '7' + G_vertical + '1' + G_vertical + 'GetConfig' + G_vertical + 'html/client/_m_GetConfig.html',
         '7' + G_vertical + '1' + G_vertical + 'GetFileObjectByIndex' + G_vertical + 'html/client/_m_GetFileObjectByIndex.html',
         '7' + G_vertical + '1' + G_vertical + '[Agent]GetFileObjectList' + G_vertical + 'html/client/_m_GetFileObjectList.html',
         '7' + G_vertical + '1' + G_vertical + 'GetFileSize' + G_vertical + 'html/client/_m_GetFileSize.html',
         '7' + G_vertical + '1' + G_vertical + 'GetImageSize' + G_vertical + 'html/client/_m_GetImageSize.html',
         '7' + G_vertical + '1' + G_vertical + '[Agent]GetItemCount' + G_vertical + 'html/client/_m_GetItemCount.html',
         '7' + G_vertical + '1' + G_vertical + 'GetListInfoByIndex' + G_vertical + 'html/client/_m_GetListInfoByIndex.html',
         '7' + G_vertical + '1' + G_vertical + 'GetSelectedFileSize' + G_vertical + 'html/client/_m_GetSelectedFileSize.html',
         '7' + G_vertical + '1' + G_vertical + 'GetUploadByName' + G_vertical + 'html/client/_m_GetUploadByName.html',
         '7' + G_vertical + '1' + G_vertical + 'GetUploadNameSet' + G_vertical + 'html/client/_m_GetUploadNameSet.html',
         '7' + G_vertical + '1' + G_vertical + 'GetUserRuntimeMode' + G_vertical + 'html/client/_m_GetUserRuntimeMode.html',
         '7' + G_vertical + '1' + G_vertical + '[Agent]GetZipFileInfo' + G_vertical + 'html/client/_m_GetZipFileInfo.html',
         '7' + G_vertical + '1' + G_vertical + 'IsLoadedUploadEx' + G_vertical + 'html/client/_m_IsLoadedUploadEx.html',
         '7' + G_vertical + '1' + G_vertical + '[Agent]IsUpdateRequired' + G_vertical + 'html/client/_m_IsUpdateRequired.html',
         '7' + G_vertical + '1' + G_vertical + 'ResetUploadCompleteStateEx' + G_vertical + 'html/client/_m_ResetUploadCompleteStateEx.html',
         '7' + G_vertical + '1' + G_vertical + 'ResetUploadEx' + G_vertical + 'html/client/_m_ResetUploadEx.html',
         '7' + G_vertical + '1' + G_vertical + 'SetCacheKeyByIndex' + G_vertical + 'html/client/_m_SetCacheKeyByIndex.html',
         '7' + G_vertical + '1' + G_vertical + 'SetCloudInfo' + G_vertical + 'html/client/_m_SetCloudInfo.html',
         '7' + G_vertical + '1' + G_vertical + '[Agent]SetFileObjectList' + G_vertical + 'html/client/_m_SetFileObjectList.html',
         '7' + G_vertical + '1' + G_vertical + 'SetMultiFileSelect' + G_vertical + 'html/client/_m_SetMultiFileSelect.html',
         '7' + G_vertical + '1' + G_vertical + 'SetViewModeChange' + G_vertical + 'html/client/_m_SetViewModeChange.html',
         '7' + G_vertical + '1' + G_vertical + '[Agent]StartAgentInstall' + G_vertical + 'html/client/_m_StartAgentInstall.html',
         '7' + G_vertical + '1' + G_vertical + 'TransferEx' + G_vertical + 'html/client/_m_TransferEx.html',
         '7' + G_vertical + '1' + G_vertical + 'AddUploadedFileAsObject' + G_vertical + 'html/client/_m_AddUploadedFileAsObject.html'],
        ['7' + G_vertical + '1' + G_vertical + 'CreationComplete' + G_vertical + 'html/client/_e_CreationComplete.html',
         '7' + G_vertical + '1' + G_vertical + 'BeforeAddFile' + G_vertical + 'html/client/_e_BeforeAddFile.html',
         '7' + G_vertical + '1' + G_vertical + 'AfterAddFile' + G_vertical + 'html/client/_e_AfterAddFile.html',
         '7' + G_vertical + '1' + G_vertical + 'AfterAddAllFile' + G_vertical + 'html/client/_e_AfterAddAllFile.html',
         '7' + G_vertical + '1' + G_vertical + 'BeforeDeleteFile' + G_vertical + 'html/client/_e_BeforeDeleteFile.html',
         '7' + G_vertical + '1' + G_vertical + 'AfterDeleteFile' + G_vertical + 'html/client/_e_AfterDeleteFile.html',
         '7' + G_vertical + '1' + G_vertical + 'DeleteAllFile' + G_vertical + 'html/client/_e_DeleteAllFile.html',
         '7' + G_vertical + '1' + G_vertical + 'BeforeUpload' + G_vertical + 'html/client/_e_BeforeUpload.html',
         '7' + G_vertical + '1' + G_vertical + 'UploadingCancel' + G_vertical + 'html/client/_e_UploadingCancel.html',
         '7' + G_vertical + '1' + G_vertical + 'UploadComplete' + G_vertical + 'html/client/_e_UploadComplete.html',
         '7' + G_vertical + '1' + G_vertical + 'BeforeOpenFile' + G_vertical + 'html/client/_e_BeforeOpenFile.html',
         '7' + G_vertical + '1' + G_vertical + 'BeforeDownloadFile' + G_vertical + 'html/client/_e_BeforeDownloadFile.html',
         '7' + G_vertical + '1' + G_vertical + 'DownloadCancel' + G_vertical + 'html/client/_e_DownloadCancel.html',
         '7' + G_vertical + '1' + G_vertical + 'DownloadCompleteFile' + G_vertical + 'html/client/_e_DownloadCompleteFile.html',
         '7' + G_vertical + '1' + G_vertical + 'DownloadCompleteAllFile' + G_vertical + 'html/client/_e_DownloadCompleteAllFile.html',
         '7' + G_vertical + '1' + G_vertical + 'SelectItem' + G_vertical + 'html/client/_e_SelectItem.html',
         '7' + G_vertical + '1' + G_vertical + 'CustomAction' + G_vertical + 'html/client/_e_CustomAction.html',
         '7' + G_vertical + '1' + G_vertical + 'OnError' + G_vertical + 'html/client/_e_OnError.html',
         '7' + G_vertical + '1' + G_vertical + 'OnLanguageDefinition' + G_vertical + 'html/client/_e_OnLanguageDefinition.html',
         // sdk 추가 - by LimSW 22.10.21
         '7' + G_vertical + '1' + G_vertical + 'AfterMoveFile' + G_vertical + 'html/client/_e_AfterMoveFile.html',
         '7' + G_vertical + '1' + G_vertical + '[Agent]AgentInstall' + G_vertical + 'html/client/_e_AgentInstall.html',
         '7' + G_vertical + '1' + G_vertical + 'Alert' + G_vertical + 'html/client/_e_Alert.html',
         '7' + G_vertical + '1' + G_vertical + '[Agent]CloseInstallPopup' + G_vertical + 'html/client/_e_CloseInstallPopup.html',
         '7' + G_vertical + '1' + G_vertical + 'MultiUploadComplete' + G_vertical + 'html/client/_e_MultiUploadComplete.html'],
    ],
    [
        ['8' + G_vertical + '1' + G_vertical + 'SetDebugMode' + G_vertical + 'html/server_net/_m_SetDebugMode.html',
         '8' + G_vertical + '1' + G_vertical + 'SetTempPath' + G_vertical + 'html/server_net/_m_SetTempPath.html',
         '8' + G_vertical + '1' + G_vertical + 'SetPhysicalPath' + G_vertical + 'html/server_net/_m_SetPhysicalPath.html',
         '8' + G_vertical + '1' + G_vertical + 'SetVirtualPath' + G_vertical + 'html/server_net/_m_SetVirtualPath.html',
         '8' + G_vertical + '1' + G_vertical + 'SetConfigPhysicalPath' + G_vertical + 'html/server_net/_m_SetConfigPhysicalPath.html',
         '8' + G_vertical + '1' + G_vertical + 'SetGarbageCleanDay' + G_vertical + 'html/server_net/_m_SetGarbageCleanDay.html',
         '8' + G_vertical + '1' + G_vertical + 'SetDownloadRootPath' + G_vertical + 'html/server_net/_m_SetDownloadRootPath.html',
         '8' + G_vertical + '1' + G_vertical + 'SetNetworkCredentials' + G_vertical + 'html/server_net/_m_SetNetworkCredentials.html',
         '8' + G_vertical + '1' + G_vertical + 'SetViewerJsPath' + G_vertical + 'html/server_net/_m_SetViewerJsPath.html',
         '8' + G_vertical + '1' + G_vertical + 'SetViewerBase64JsPath' + G_vertical + 'html/server_net/_m_SetViewerBase64JsPath.html',
         '8' + G_vertical + '1' + G_vertical + 'SetViewerCssPath' + G_vertical + 'html/server_net/_m_SetViewerCssPath.html',
         '8' + G_vertical + '1' + G_vertical + 'SetViewerLoadingImagePath' + G_vertical + 'html/server_net/_m_SetViewerLoadingImagePath.html',
         '8' + G_vertical + '1' + G_vertical + 'SetViewerBrokenImagePath' + G_vertical + 'html/server_net/_m_SetViewerBrokenImagePath.html',
         '8' + G_vertical + '1' + G_vertical + 'GetCustomErrorMessage' + G_vertical + 'html/server_net/_m_GetCustomErrorMessage.html',
         '8' + G_vertical + '1' + G_vertical + 'InitParameter' + G_vertical + 'html/server_net/_m_InitParameter.html',
         '8' + G_vertical + '1' + G_vertical + 'GetParameterValue' + G_vertical + 'html/server_net/_m_GetParameterValue.html'],
        ['8' + G_vertical + '1' + G_vertical + 'MakeThumbnail' + G_vertical + 'html/server_net/_im_MakeThumbnail.html',
         '8' + G_vertical + '1' + G_vertical + 'MakeThumbnailEX' + G_vertical + 'html/server_net/_im_MakeThumbnailEX.html',
         '8' + G_vertical + '1' + G_vertical + 'ConvertImageFormat' + G_vertical + 'html/server_net/_im_ConvertImageFormat.html',
         '8' + G_vertical + '1' + G_vertical + 'ConvertImageSize' + G_vertical + 'html/server_net/_im_ConvertImageSize.html',
         '8' + G_vertical + '1' + G_vertical + 'ConvertImageSizeByPercent' + G_vertical + 'html/server_net/_im_ConvertImageSizeByPercent.html',
         '8' + G_vertical + '1' + G_vertical + 'Rotate' + G_vertical + 'html/server_net/_im_Rotate.html',
         '8' + G_vertical + '1' + G_vertical + 'SetImageWaterMark' + G_vertical + 'html/server_net/_im_SetImageWaterMark.html',
         '8' + G_vertical + '1' + G_vertical + 'SetTextWaterMark' + G_vertical + 'html/server_net/_im_SetTextWaterMark.html',
         '8' + G_vertical + '1' + G_vertical + 'GetImageSize' + G_vertical + 'html/server_net/_im_GetImageSize.html',
         '8' + G_vertical + '1' + G_vertical + 'GetExifEntityData' + G_vertical + 'html/server_net/_im_GetExifEntityData.html'],
        ['8' + G_vertical + '1' + G_vertical + 'BeforeUploadEvent' + G_vertical + 'html/server_net/_e_BeforeUploadEvent.html',
         '8' + G_vertical + '1' + G_vertical + 'AfterUploadEvent' + G_vertical + 'html/server_net/_e_AfterUploadEvent.html',
         '8' + G_vertical + '1' + G_vertical + 'BeforeDownloadEvent' + G_vertical + 'html/server_net/_e_BeforeDownloadEvent.html',
         '8' + G_vertical + '1' + G_vertical + 'ExecuteDownloadEvent' + G_vertical + 'html/server_net/_e_ExecuteDownloadEvent.html',
         '8' + G_vertical + '1' + G_vertical + 'AfterDownloadEvent' + G_vertical + 'html/server_net/_e_AfterDownloadEvent.html'],
        ['8' + G_vertical + '1' + G_vertical + 'MaxRequestLength' + G_vertical + 'html/server_net/_sc_MaxRequestLength.html',
         '8' + G_vertical + '1' + G_vertical + 'Timeout' + G_vertical + 'html/server_net/_sc_Timeout.html',
         '8' + G_vertical + '1' + G_vertical + 'Cross Origin Resource Sharing(CORS)' + G_vertical + 'html/server_net/_sc_Cors.html']
    ],
    [
        ['9' + G_vertical + '1' + G_vertical + 'setDebugMode' + G_vertical + 'html/server_java/_m_setDebugMode.html',
         '9' + G_vertical + '1' + G_vertical + 'setTempPath' + G_vertical + 'html/server_java/_m_setTempPath.html',
         '9' + G_vertical + '1' + G_vertical + 'setPhysicalPath' + G_vertical + 'html/server_java/_m_setPhysicalPath.html',
         '9' + G_vertical + '1' + G_vertical + 'setVirtualPath' + G_vertical + 'html/server_java/_m_setVirtualPath.html',
         '9' + G_vertical + '1' + G_vertical + 'setConfigPhysicalPath' + G_vertical + 'html/server_java/_m_setConfigPhysicalPath.html',
         '9' + G_vertical + '1' + G_vertical + 'setGarbageCleanDay' + G_vertical + 'html/server_java/_m_setGarbageCleanDay.html',
         '9' + G_vertical + '1' + G_vertical + 'setDownloadRootPath' + G_vertical + 'html/server_java/_m_setDownloadRootPath.html',
         '9' + G_vertical + '1' + G_vertical + 'setContextPath' + G_vertical + 'html/server_java/_m_setContextPath.html',
         '9' + G_vertical + '1' + G_vertical + 'setStartPhysicalPathSlashAllowed' + G_vertical + 'html/server_java/_m_setStartPhysicalPathSlashAllowed.html',
         '9' + G_vertical + '1' + G_vertical + 'setNtlmAuthentication' + G_vertical + 'html/server_java/_m_setNtlmAuthentication.html',
         '9' + G_vertical + '1' + G_vertical + 'setViewerJsPath' + G_vertical + 'html/server_java/_m_setViewerJsPath.html',
         '9' + G_vertical + '1' + G_vertical + 'setViewerBase64JsPath' + G_vertical + 'html/server_java/_m_setViewerBase64JsPath.html',
         '9' + G_vertical + '1' + G_vertical + 'setViewerCssPath' + G_vertical + 'html/server_java/_m_setViewerCssPath.html',
         '9' + G_vertical + '1' + G_vertical + 'setViewerLoadingImagePath' + G_vertical + 'html/server_java/_m_setViewerLoadingImagePath.html',
         '9' + G_vertical + '1' + G_vertical + 'setViewerBrokenImagePath' + G_vertical + 'html/server_java/_m_setViewerBrokenImagePath.html',
         '9' + G_vertical + '1' + G_vertical + 'getCustomErrorMessage' + G_vertical + 'html/server_java/_m_getCustomErrorMessage.html',
         '9' + G_vertical + '1' + G_vertical + 'initParameter' + G_vertical + 'html/server_java/_m_initParameter.html',
         '9' + G_vertical + '1' + G_vertical + 'getParameterValue' + G_vertical + 'html/server_java/_m_getParameterValue.html'],
        ['9' + G_vertical + '1' + G_vertical + 'makeThumbnail' + G_vertical + 'html/server_java/_im_makeThumbnail.html',
         '9' + G_vertical + '1' + G_vertical + 'makeThumbnailEX' + G_vertical + 'html/server_java/_im_makeThumbnailEX.html',
         '9' + G_vertical + '1' + G_vertical + 'convertImageFormat' + G_vertical + 'html/server_java/_im_convertImageFormat.html',
         '9' + G_vertical + '1' + G_vertical + 'convertImageSize' + G_vertical + 'html/server_java/_im_convertImageSize.html',
         '9' + G_vertical + '1' + G_vertical + 'convertImageSizeByPercent' + G_vertical + 'html/server_java/_im_convertImageSizeByPercent.html',
         '9' + G_vertical + '1' + G_vertical + 'rotate' + G_vertical + 'html/server_java/_im_rotate.html',
         '9' + G_vertical + '1' + G_vertical + 'setImageWaterMark' + G_vertical + 'html/server_java/_im_setImageWaterMark.html',
         '9' + G_vertical + '1' + G_vertical + 'setTextWaterMark' + G_vertical + 'html/server_java/_im_setTextWaterMark.html',
         '9' + G_vertical + '1' + G_vertical + 'getImageSize' + G_vertical + 'html/server_java/_im_getImageSize.html',
         '9' + G_vertical + '1' + G_vertical + 'getExifData' + G_vertical + 'html/server_java/_im_getExifData.html'],
        ['9' + G_vertical + '1' + G_vertical + 'beforeUploadEvent' + G_vertical + 'html/server_java/_e_beforeUploadEvent.html',
         '9' + G_vertical + '1' + G_vertical + 'afterUploadEvent' + G_vertical + 'html/server_java/_e_afterUploadEvent.html',
         '9' + G_vertical + '1' + G_vertical + 'beforeDownloadEvent' + G_vertical + 'html/server_java/_e_beforeDownloadEvent.html',
         '9' + G_vertical + '1' + G_vertical + 'executeDownloadEvent' + G_vertical + 'html/server_java/_e_executeDownloadEvent.html',
         '9' + G_vertical + '1' + G_vertical + 'afterDownloadEvent' + G_vertical + 'html/server_java/_e_afterDownloadEvent.html'],
        ['9' + G_vertical + '1' + G_vertical + 'MimeType' + G_vertical + 'html/server_java/_sc_MimeType.html',
         '9' + G_vertical + '1' + G_vertical + 'Multipart가 설정에 의해 미리 읽히는 경우' + G_vertical + 'html/server_java/_sc_MultipartReadAhead.html',
         '9' + G_vertical + '1' + G_vertical + 'Cross Origin Resource Sharing(CORS)' + G_vertical + 'html/server_java/_sc_Cors.html']
    ],
    [],
    []
];

var arrSearchWordMenu = [
    [
        ['설치', '기본설정', '설치 및 기본설정'],
        ['보안', '보안 가이드', '보안 개발 가이드']
    ],
    [
        [
            ['InitXml', 'XML파일 설정', '환경설정파일 설정', '설정파일 URL 설정'],
            ['InitServerXml', 'XML파일 암호화', '환경설정파일 암호화'],
            ['InitVisible', '화면 표시 여부', '화면 노출 여부'],
            ['UploadHolder', '특정 영역에 생성', '특정 객체에 생성'],
            ['IgnoreSameUploadName', '임의로 변경 생성'],
            ['License', '라이선스 설정', '라이센스 설정', '발급받은 키 설정'],
            ['Runtimes', '업로드 모드 설정', '웹표준모드', 'Agent모드'],
            ['Width', '넓이 설정'],
            ['Height', '높이 설정'],
            ['SkinName', '스킨 색상 설정'],
            ['CssRootPath', '사용자가 만든 css 폴더 경로 설정', '다른 css 폴더 경로 설정'],
            ['CustomColor', '색상을 사용자가 원하는 색상으로 변경 설정'],
            ['CustomWebFileColor', '웹경로의 파일의 배경색 설정', '업로드된 파일의 배경색 설정'],
            ['Lang', '언어 설정'],
            ['Mode', '모드 설정', '편집모드 보기모드'],
            ['Views', '파일 목록 보기 형태 설정'],
            ['ImgPreview', '이미지 미리보기 창 기능 설정'],
            ['ShowStatusBar', '상태바를 표시하는 기능 설정', '상태바를 숨기는 기능 설정'],
            ['ShowHeaderBar', '상단을 표시하는 기능 설정', '상단을 숨기는 기능 설정'],
            ['HeaderItem', '상단에 사용자 헤더 추가 설정'],
            ['UploadTransferWindow', '전송창 UI 설정'],
            ['UseLogoImage', '전송창 Logo 설정'],
            ['SilentUpload', '전송창 노출 여부 설정'],
            ['SilentDownload', '다운로드 전송창 노출 여부 설정'],
            ['SilentDownloadEx', '다운로드 진행 팝업창 노출 설정', '서버에서 처리되는 다운로드 된 파일사이즈 체크 여부 설정'],
            ['ShowButtonBarEdit', '편집모드일 때 버튼바 영역에 노출 할 버튼 설정'],
            ['ShowEditAlign', '편집모드일 때 버튼 위치 설정'],
            ['ShowButtonBarView', ' 보기모드일 때 버튼바 영역에 노출 할 버튼 설정'],
            ['ShowViewAlign', '보기모드일 때 버튼 위치 설정'],
            ['ButtonBarPosition', '버튼바 영역 위치 설정'],
            ['BorderStyle', '추가된 파일들을 구분할 선 스타일 설정'],
            ['MaxOneFileSize', '파일당 용량제한 설정', '파일별 용량제한 설정', 'MaxOneFileSizeByExtension', '확장자별 용량제한 설정'],
            ['MaxTotalFileSize', '총 업로드 될 파일의 용량제한 설정', '모든 파일의 용량제한 설정'],
            ['MaxTotalFileCount', '최대 파일 개수 제한값 설정'],
            ['HideListInfo', '업로드 영역 중앙에 보여지는 가이드 문구를 표시하는 기능 설정', '업로드 영역 중앙에 보여지는 가이드 문구를 숨기는 기능 설정'],
            ['Extension', '파일 확장자 허용 설정', '파일 확장자 제한 설정'],
            ['MultiFileSelect', '파일 추가시 여러개 파일 선택 또는 한개씩만 선택 후 적용 설정'],
            ['ListViewDbclick', '더블클릭 이벤트에 의해 파일선택 창이 열리도록 설정'],
            ['ListViewDragAndDrop', '드래그 앤 드랍해서 파일추가할 수 있도록 설정'],
            ['ResumeUpload', '이어올리기 설정'],
            ['ResumeDownload', '이어받기 설정'],
            ['FolderTransfer', '폴더 구조 업로드 설정'],
            ['Timeout', '서버로부터 응답이 지연 되는 경우 이어받기 시도 시간 설정'],
            ['AutomaticConnection', '묻지 않고 계속 업로드 시도 사용 설정', '묻지 않고 계속 다운로드 시도 사용 설정'],
            ['ShowCheckBox', '업로드 영역의 Check Box 노출 관련하여 설정'],
            ['HideContextMenu', 'context menu 사용 여부 설정', '우 클릭 메뉴 사용 여부 설정'],
            ['UseSizeColumn', '파일크기 항목 노출 여부 설정'],
            ['RemoveContextItem', 'context menu에서 삭제 할 항목 설정', '우 클릭 메뉴에서 삭제 할 항목 설정'],
            ['UseScriptEventControl', 'Agent 모드에서 발생하는 이벤트 수신 여부 설정'],
            ['LargeFiles', '대용량 텍스트 노출 기능 설정'],
            ['FileSort', '파일 정렬 기능 설정'],
            ['FileMoveContextMenu', '파일이동 메뉴를 우클릭 메뉴에 추가할지 여부 설정'],
            ['CompleteEventResetUse', '업로드 완료 이벤트에서 ResetUpload API 사용여부 설정'],
            ['UserMessage', '버튼 영역 왼쪽에 문구 입력 설정', '버튼 영역 오른쪽에 문구 입력 설정'],
            ['DisableAlertMessage', '모든 confirm창을 표시하는 기능 설정', '모든 confirm창을 숨기는 기능 설정'],
            ['AllowedZeroFileSize', '0byte 파일 업로드 허용 설정'],
            ['EncryptParam', '전송하는 파라미터 암호화 여부 설정'],
            ['FileExtensionDetector', '추가되는 파일에 대한 확장자 변조 검사 여부 설정'],
            ['FileIntegrity', '전송하는 파일에 대하여 무결성 체크 여부 설정'],
            ['FileEncrypt', '전송하는 파일에 대하여 암호화 여부 설정'],
            ['DefaultDownloadPath', '다운로드 시 저장경로 설정'],
            ['UseBeforeAddEvent', '파일 추가 전 이벤트 함수 사용 설정'],
            ['UseAfterAddEvent', '파일 추가 후 이벤트 함수 사용 설정'],
            ['UseAfterAddAllEvent', '모든 파일추가 완료 후 이벤트 함수 사용 설정'],
            ['UseBeforeDeleteEvent', '파일 삭제 전 이벤트 함수 사용 설정'],
            ['UseAfterDeleteEvent', '파일 삭제 후 이벤트 함수 사용 설정'],
            ['UseDeleteAllEvent', '모든 파일 삭제 후 이벤트 함수 사용 설정'],
            ['UseBeforeOpenEvent', '파일 열기 전 이벤트 함수 사용 설정'],
            ['UseBeforeDownloadEvent', '파일 다운로드 전 이벤트 함수 사용 설정'],
            ['UseDownloadCompleteEvent', '파일 다운로드 후 이벤트 함수 사용 설정'],
            ['UseDownloadCompleteAllEvent', '모든 파일 다운로드 후 이벤트 함수 사용 설정'],
            ['UseUploadingCancelEvent', '파일 전송 취소 이벤트 함수 사용 설정'],
            ['UseAddLocalFileDirectlyCallBackEvent', 'AddLocalFileDirectly API CallBack 이벤트 사용 설정'],
            ['UseAddLocalFileDirectlyExCallBackEvent', 'AddLocalFileDirectlyEx API CallBack 이벤트 사용 설정'],
            ['UseGetZipFileInfoCallBackEvent', 'GetZipFileInfo API CallBack 이벤트 사용 설정'],
            ['UseGetExcelDataCallBackEvent', 'GetExcelData API CallBack 이벤트 사용 설정'],
            ['TransferBackgroundStyle', '배경화면의 스타일 지정'],
            ['UseDropzone', 'Drop Zone 이벤트 함수 사용 설정'],
            ['AllowOpenExtension', '열기 동작시 popup으로 열기할 확장자 설정', '열기 동작시 팝업으로 열기할 확장자 설정'],
            ['UseAgentInstallGuide', 'Agent 설치시 설치 안내창 노출여부 설정'],
            ['UseDbclickOpen', '더블클릭 시 파일열기 사용 설정'],
            ['DevelopLangage', '개발 언어 설정'],
            ['HandlerUrl', 'Upload Handler URL 설정', '업로드 Handler URL 설정', '파일 전송을 받아주는 URL 설정'],
            ['ViewerHandlerUrl', 'Viewer URL 설정', 'Viewer 페이지 URL 설정'],
            ['DownloadHandlerUrl', 'Download Handler URL 설정', '다운로드 Handler URL 설정'],
            ['FolderNameRule', '폴더 하위들의 저장 체계 설정', '서버 저장 경로 설정'],
            ['FileNameRule', '저장할 파일의 이름을 지정하는 규칙 설정', '서버 저장 파일명 규칙 설정'],
            ['FileNameRuleEx', '파일명이 중복될 때 파일명 변경 방식 설정'],
            ['ImageQuality', '이미지 품질을 낮추는 기능을 설정'],
            ['ZIndex', '업로드 컴포넌트 배치 순서(zIndex)를 설정'],
            ['UserCssUrl', '사용자가 만든 css를 업로드 영역에 설정'],
            ['AllowDuplicationFile', '파일 추가 시 중복 파일 허용 여부를 설정'],
            ['Event.OnError', '이벤트 RAONKUPLOAD_OnError를 설정'],
            ['Event.CreationComplete', '이벤트 RAONKUPLOAD_CreationComplete를 설정'],
            ['Event.BeforeUpload', '이벤트 RAONKUPLOAD_BeforeUpload를 설정'],
            ['Event.UploadComplete', '이벤트 RAONKUPLOAD_UploadComplete를 설정'],
            ['Event.MultiUploadComplete', '이벤트 RAONKUPLOAD_MultiUploadComplete를 설정'],
            ['Event.BeforeDownloadFile', '이벤트 RAONKUPLOAD_BeforeDownloadFile를 설정'],
            ['Event.DownloadCompleteFile', '이벤트 RAONKUPLOAD_DownloadCompleteFile를 설정'],
            ['Event.DownloadCompleteAllFile', '이벤트 RAONKUPLOAD_DownloadCompleteAllFile를 설정'],
            ['Event.BeforeOpenFile', '이벤트 RAONKUPLOAD_BeforeOpenFile를 설정'],
            ['Event.BeforeAddFile', '이벤트 RAONKUPLOAD_BeforeAddFile를 설정'],
            ['Event.AfterAddFile', '이벤트 RAONKUPLOAD_AfterAddFile를 설정'],
            ['Event.AfterAddAllFile', '이벤트 RAONKUPLOAD_AfterAddAllFile를 설정'],
            ['Event.BeforeDeleteFile', '이벤트 RAONKUPLOAD_BeforeDeleteFile를 설정'],
            ['Event.AfterDeleteFile', '이벤트 RAONKUPLOAD_AfterDeleteFile를 설정'],
            ['Event.DeleteAllFile', '이벤트 RAONKUPLOAD_DeleteAllFile를 설정'],
            ['Event.SelectItem', '이벤트 RAONKUPLOAD_SelectItem를 설정'],
            ['Event.AfterMoveFile', '이벤트 RAONKUPLOAD_AfterMoveFile를 설정'],
            ['Event.UploadingCancel', '이벤트 RAONKUPLOAD_UploadingCancel를 설정'],
            ['Event.DownloadCancel', '이벤트 RAONKUPLOAD_DownloadCancel를 설정'],
            ['Event.CustomAction', '이벤트 RAONKUPLOAD_CustomAction를 설정'],
            ['Event.OnLanguageDefinition', '이벤트 RAONKUPLOAD_OnLanguageDefinition를 설정'],
            ['Event.Alert', '이벤트 RAONKUPLOAD_Alert를 설정'],
            ['Event.AgentInstall', '이벤트 RAONKUPLOAD_AgentInstall를 설정'],
            ['Event.CloseInstallPopup', '이벤트 RAONKUPLOAD_CloseInstallPopup를 설정'],
            ['AgentAdmin', '업로드/다운로드시 적용될 Admin 설정값을 설정'],
            ['AgentCompressBufferSize', '압축 전송 시 버퍼 크기를 설정'],
            ['AgentEventInterval', 'AgentEventType 설정값이 0일 때 Interval을 설정'],
            ['AgentEventType', '이벤트 폴링 방식을 설정'],
            ['AgentEventWaitTime', 'AgentEventType 설정값이 1일 때 Wait 시간을 설정'],
            ['AgentInstallFailCheck', 'Agent 설치의 실패 또는 중단의 체크여부를 설정'],
            ['AgentInstallFolderUrl', 'raonkSetup.exe 파일이 존재하는 Agent 폴더 경로를 설정'],
            ['AgentMultiDownloadCount', 'Agent 다운로드 전송시 동시 전송 파일개수를 설정'],
            ['AgentMultiTransferCount', 'Agent 업로드 및 다운로드 전송시 동시 전송 파일개수를 설정'],
            ['AgentMultiUploadCount', 'Agent 업로드 전송시 동시 전송 파일개수를 설정'],
            ['AgentTempRootDirectory', 'Agent 업/다운로드 시 사용하는 temp폴더 위치를 설정'],
            ['AgentTransferType', 'Agent 모드 전송(Transfer) 시 동작 방식을 설정'],
            ['UseAlertEvent', '이벤트(RAONKUPLOAD_Alert)의 동작여부를 설정'],
            ['AllowedEmptyFolder', '빈 폴더 업로드 허용여부를 설정'],
            ['AutoDestroy', '업로드 언로드 시 메모리 해제 여부를 설정'],
            ['AutoRecoveryTransfer', '자동 복구 업/다운로드 기능을 설정'],
            ['AutoRenameLocalFileDownload', '로컬파일 다운로드 시 이미 해당 파일명의 파일이 있는 경우 자동으로 파일명의 변경여부 설정'],
            ['ChangeDbclickCommand', '리스트의 웹파일 더블클릭시의 동작을 설정'],
            ['CheckNetworkSpeed', '네트워크 속도체크 여부를 설정'],
            ['DEXT5Install', 'Agent 모드 사용시 DEXT5 플러그인의 설치여부를 설정'],
            ['DisableLastNotify', '업로드 모든 confirm창을 표시하거나 숨기는 기능을 설정'],
            ['DisablePreEndRequest', '업/다운로드 시 pre, end request 요청여부를 설정'],
            ['[Hybrid]DownloadHybridApp', '안드로이드 하이브리드앱 관련설정을 적용'],
            ['DownloadSkipCheckWithFileSize', '다운로드 건너뛰기 할 때 파일명과 파일사이즈를 체크 또는 체크하지 않도록 설정'],
            ['DownloadStatusCheckInterval', '다운로드 상태를 체크하는 Interval을 설정'],
            ['DragAndDropMode', 'Drop zone(DragAndDrop으로 파일 추가가 가능한 영역)을 브라우저 전체로 설정'],
            ['EnableAdminLog', 'Agent Admin Log 활성화 여부를 설정'],
            ['EnableAgentShortcut', 'Agent 단축키 기능의 활성화 여부를 설정'],
            ['EnforceDocumentDomain', 'document.domain 값을 추가하도록 설정'],
            ['EnforceHtml5', 'Runtimes가 Agent모드로 설정되어 있어도 강제로 html모드로 변경'],
            ['FileDelimiter', 'return과 parameter의 구분문자를 설정'],
            ['FileSaveDialogTitle', '파일 다운로드 관련 dialog의 title을 설정'],
            ['FolderSelectDialogButtonName', '폴더 추가 dialog 선택버튼의 문구를 설정'],
            ['FolderSelectDialogTitle', '폴더 추가 dialog의 title을 설정'],
            ['FolderSelectDialogType', '폴더 추가 dialog의 type을 설정'],
            ['IgnoreDifferentUploadName', '업로드를 하나만 생성한 이후 API 사용중 아이디를 잘못 넣을 경우 API Call 오류가 발생하지 않도록 설정'],
            ['LocalLongPathEnable', '다운로드 시 다운로드 경로가 긴 경우를 허용 가능 여부를 설정'],
            ['MessageTitle', '메시지 창의 타이틀을 설정'],
            ['MoveMouseDrag', '파일리스트의 파일을 마우스 드래그시 파일순서의 이동 가능 여부를 설정'],
            ['PreCheckFileExistInDownload', '다운로드 시 동일파일 유무 판단의 시점을 다운로드 시작 전 또는 다운로드 후 로 설정'],
            ['ReportFailedList', '다운로드 실패한 리스트를 포함한 txt파일의 생성여부를 설정'],
            ['ApplyAgentOs', 'Agent 설치파일 다운로드 시 해당 OS에 맞는 Agent 설치파일을 다운로드하도록 설정'],
            ['UseWS', 'html5plus의 사용자가 ieplugin을 설정한 경우 웹표준 동작방식을 결정하는 설정'],
            ['HandlerKey', 'Handler의 domain에 해당하는 라이센스를 입력'],
            ['ShowConfirmLocalFileDownload', '로컬파일 다운로드 시 덮어쓰기 확인창을 보이도록 또는 숨기도록 설정'],
            ['ShowProgressLocalFileDownload', '로컬파일 다운로드 시 전송창을 보이도록 또는 숨기도록 설정'],
            ['ShowTrayIcon', 'Agent 동작시 작업표시줄의 트레이 아이콘이 보이도록 또는 숨기도록 설정'],
            ['SkipInternetState', '인터넷 환경이 정상인지 체크하는 옵션'],
            ['SkipSentFile', '기존에 업로드 되었던 파일을 제외하고 업로드하도록 설정'],
            ['EmptyDownloadFile', '다운로드할 파일이 없는 경우 파일리스트 영역에 보여줄 메시지및 해당 메시지의 style을 설정'],
            ['ThumbsSize', '업로드 리스트의 썸네일 크기를 설정'],
            ['ThumbsViewMode', '썸네일 모드시 표시 내용을 설정'],
            ['TransferOpenFile', '전송하려는 파일이 열려있을 때 전송 허용 옵션을 설정'],
            ['UploadSkipErrorFile', '업로드 중 fail된 파일의 정보를 받거나 제외하도록 설정'],
            ['UseAfterMoveFileEvent', '추가된 파일의 위치변경 완료 시 이벤트(RAONKUPLOAD_AfterMoveFile)의 발생여부를 설정'],
            ['UseAgentLog', 'Agent 로그 기록 여부를 설정'],
            ['UseAutoHeight', '파일이 리스트에 추가될 때 설정된 업로드 Height보다 파일리스트의 높이가 더 커지면 자동으로 맞추도록 설정'],
            ['UseAutoInstall', 'Agent 미설치 시 자동으로 다운로드 하는 기능의 사용 여부를 설정'],
            ['UseCompressTransfer', '압축전송 옵션의 사용 여부를 설정'],
            ['UseDownloadCache', '다운로드 시 캐시의 사용 여부를 설정'],
            ['UseDropZoneOverClass', '드랍존에 마우스 오버시 클래스명을 "raonkdropzone_over"로의 변경 여부를 설정'],
            ['UseFormDataInRangeInfo', 'formdata에 range 정보의 추가 여부를 설정'],
            ['UseHashExtract', '업로드 시 Hash값 추출 기능을 설정'],
            ['UseInstallGuide', 'Agent 설치 시 가이드창의 사용 여부를 설정', 'Agent 설치 가이드창을 설정'],
            ['UseKMonitoring', 'K Monitoring의 사용 및 연동 여부를 설정'],
            ['UseLocalFileDownload', '로컬파일 다운로드 기능의 사용여부를 설정'],
            ['SessionKeep', 'WEB,WAS 분리된 환경에서 WEB Server의 Session 유지를 위한 주기적 Request의 사용여부를 설정'],
            ['UseSingleDownloadDialog', '단일 파일 다운로드 시 열기, 저장, 인쇄를 선택할 수 있는 팝업창의 사용여부를 설정'],
            ['UseSingleSelect', '파일 리스트의 파일 선택방식(단일선택/다중선택)을 설정'],
            ['UseWebfileThumbnailView', 'Thumbnail 보기 모드일 때 웹파일의 경우 Thumbnail 표시여부를 설정'],
            ['UseWorkingImg.UseDownloadEnd', '다운로드 end request에서 작업 이미지 관련내용을 설정'],
            ['UseWorkingImg.UseDownloadPre', '다운로드 pre request에서 작업 이미지 관련내용을 설정'],
            ['UseWorkingImg.UseUploadEnd', '업로드 end request에서 작업 이미지 관련내용을 설정'],
            ['UseWorkingImg.UseUploadPre', '업로드 pre request에서 작업 이미지 관련내용을 설정'],
            ['UseZipDownload', '여러 개 파일(2개 이상) 다운로드 시 zip 파일로 다운로드 하도록 설정'],
            ['UseZipInspector', '압축파일 보기(zip 탐색) 기능의 사용여부를 설정', '웹파일인 압축파일을 우클릭하여 zip 탐색이 가능하도록 설정'],
            ['ZipFileName', 'ZIP 파일로 다운로드 받을 때의 파일명을 클라이언트에서 설정'],
            ['AsyncUpload', '업로드 시 XMLHttpRequest의 async를 설정'],
            ['DisableChunkDownload', '다운로드시 분할 다운로드 적용여부를 설정'],
            ['DownloadMulti', '웹표준 모드에서 2개이상의 파일을 다운로드 할때 개별파일로 다운받을지를 설정'],
            ['HighSpeed', '고속전송모드의 사용여부를 설정'],
            ['MaxChunkSize', '분할업로드 시 분할 파일사이즈 단위의 최대값을 설정'],
            ['OpenMulti', '파일 열기 시 여러 파일을 열기 가능하도록 또는 한 파일만 열기 가능하도록 설정'],
            ['PrintMulti', '파일 인쇄 시 여러 파일을 인쇄 가능하도록 또는 한 파일만 인쇄 가능하도록 설정'],
            ['SaveAndOpenMulti', '파일 저장 후 열기 시 여러 파일을 저장 후 열기 가능하도록 또는 한 파일만 저장 후 열기 가능하도록 설정'],
            ['SizeForChunkUpload', '분할업로드 시 파일 분할 사이즈를 설정'],
            ['TransferProcess', 'process명과 dialog name을 설정한 값으로 변경'],
            ['UseBrowserUseragent', '업/다운로드 시 요청 header에 브라우저 user-agent 값의 추가여부를 설정']
        ],
        [
            ['RAONKUpload', '생성'],
            ['AddFormData', '파일 업로드 시 별도 파라미터 전송'],
            ['AddHttpHeader', 'HTTP Header의 값 설정'],
            ['AddLocalFileDirectly', '로컬파일을 업로드 영역에 추가'],
            ['AddLocalFileDirectlyEx', '로컬파일을 배열로 업로드 영역에 추가'],
            ['AddLocalFileDirectlyExWithCallback', '로컬파일을 배열로 업로드 영역에 추가'],
            ['AddLocalFolderDirectlyExWithCallback', '로컬폴더 배열로 업로드 영역에 추가'],
            // AddUploadedFileAsObject 작업 이후 sdk 제거 - by LimSW 23.07.18
            //['AddUploadedFile', '이미 업로드 되어 있는 파일을 추가'],
            //['AddUploadedFileWithGetFileSize', '서버에서 파일 크기를 구하여 이미 업로드 되어 있는 파일을 추가'],
            //['AddUploadedFileEx', '이미 업로드 되어 있는 파일을 추가', '사용자 헤더 추가한 경우 사용'],
            //['AddUploadedFileExWithGetFileSize', '서버에서 파일 크기를 구하여 이미 업로드 되어 있는 파일을 추가', '사용자 헤더 추가한 경우 사용'],
            ['Cancel', '전송 취소'],
            ['DeleteAllFile', '모든 파일 제거'],
            ['DeleteSelectedFile', '선택된 파일 제거'],
            ['Destroy', '업로드 제거'],
            ['DownloadFile', '선택된 파일 다운로드'],
            ['DownloadAllFile', '모든 파일 다운로드'],
            ['GetDeleteList', '삭제된 파일 리스트 정보를 리턴'],
            ['GetListInfo', '전송 완료 후 새롭게 업로드 된 파일, 웹 파일, 삭제된 파일 리스트 정보를 리턴'], 
            ['GetSelectedListInfo', '선택된 파일, 웹 파일 리스트 정보를 리턴'],
            ['GetNewUploadList', 'index 값에 따라 파일 정보를 리턴'],
            ['GetSelectedFileCount', '업로드 영역의 선택된 항목수'],
            ['GetTotalFileCount', '전체 파일개수'],
            ['GetTotalFileSize', '전체 파일크기'],
            ['GetUploadCompleteState', '전송완료 되었는지 확인'],
            ['Hidden', '업로드 숨김 설정'],
            ['IsAgentInstalled', '설치 여부 확인', '설치가 되었는지 확인'],
            ['MoveFile', '파일 순서 변경'],
            ['MultiTransfer', '멀티 업로드 전송 시작'],
            ['OpenFileDialog', '파일 선택 다이얼로그 열기'],
            ['OpenSelectedFile', '선택된 파일 열기'],
            ['PrintSelectedFile', '선택된 파일 인쇄'],
            ['ResetUpload', '업로드 초기화'],
            ['ResetUploadCompleteState', '전송완료 상태를 다시 false로 reset'],
            ['SaveAndFolderOpen', '파일을 로컬에 저장한 후 파일이 저장된 폴더 열기'],
            ['SaveAndOpen', '파일을 로컬에 저장한 후 저장한 파일 열기'],
            ['SetAllowOrLimitExtension', '업로드 할 파일 확장자를 허용 또는 제한으로 설정'],
            ['SetConfig', '업로드 설정 값 변경'],
            ['SetConfigByObject', '업로드 설정 값 변경(object)'],
            ['SetCustomHeaderByIndex', '사용자 헤더를 추가한 경우 파일의 순서 정보로 사용자 헤더에 추가한 항목의 값을 추가'],
            ['SetDefaultDownloadPath', '다운로드 경로 설정'],
            ['SetFileCustomValue', '파일을 추가할 때, 각 파일에 특정 정보를 추가'],
            ['SetLargeFile', '파일당 용량제한 설정', '파일별 용량제한 설정'],
            ['SetMaxOneFileSize', '파일 대용량 설정'],
            ['SetMaxTotalFileSize', '총 업로드 될 파일의 용량제한 설정', '모든 파일의 용량제한 설정'],
            ['SetMaxTotalFileCount', '최대 파일 개수 제한값 설정'],
            ['SetSelectFile', '파일의 순서로 파일 선택'],
            ['SetSelectFileEx', '파일의 uniqueKey로 파일 선택'],
            ['SetSize', '업로드 크기 변경'],
            ['SetUploadMode', '업로드 모드 설정'],
            ['Show', '업로드 표시', '업로드 보이기 설정'],
            ['Transfer', '전송 시작'],
            ['SetUploadedFile', '업로드 리스트 컨트롤에 이미 업로드 되어 있는 웹파일의 정보를 변경'],
            ['SetButtonList', '업로드 객체 생성 후 버튼 리스트를 변경'],
            ['AddLocalFileObject', 'File 태그와 업로드 연동이 필요한 경우 파일을 추가'],
            ['AddLocalFileObjectWithCallback', 'File 태그와 업로드 연동이 필요한 경우 파일을 추가'],
            ['AddBase64Data', 'Base64 이미지 데이터를 전송(업로드)하기 위하여 전송대상 목록에 추가'],
            ['AddBase64DataWithCallback', 'Base64 이미지 데이터를 전송(업로드)하기 위하여 전송대상 목록에 추가'],
            ['SetOriginalFileName', '리스트에 추가된 파일명을 변경'],
            ['AddRAONKFileObject', 'raonkFileObjectList 안의 파일 오브젝트들(웹파일 및 업로드파일)을 파일 리스트에 추가'],
            // AddUploadedFileAsObject 작업 이후 sdk 제거 - by LimSW 23.07.18
            //['AddUploadedFileAsArray', '업로드 리스트 컨트롤에 이미 업로드 되어 있는 파일들을 셋팅'],
            //['AddUploadedFileExAsArray', '업로드를 Destroy하고 Agent 모드로 새로 업로드를 로드'],
            ['ChangeToAgentMode', '사용자가 Agent 설치팝업을 강제로 닫은 경우 발생'],
            ['FileSort', '파일 리스트의 파일들을 정렬'],
            ['GetCloudInfo', '업로드에 설정한 클라우드 정보를 반환'],
            ['GetConfig', '업로드에 해당 이름으로 설정된 값을 반환'],
            ['GetFileObjectByIndex', '리스트의 해당 index에 존재하는 파일의 오브젝트를 반환'],
            ['GetFileObjectList', '리스트에 추가한 파일들의 실제 경로를 담은 오브젝트를 반환'],
            ['GetFileSize', '서버 webPath에 해당하는 파일 크기를 callBackFunc의 파라미터로 반환'],
            ['GetImageSize', '인덱스에 존재하는 이미지파일의 사이즈를 callbackFunc의 파라미터로 반환'],
            ['GetItemCount', '업로드 파일리스트에 있는 전체 파일의 수를 반환'],
            ['GetListInfoByIndex', '인덱스에 존재하는 파일 정보를 반환'],
            ['GetSelectedFileSize', '업로드 영역에서 선택된 파일 사이즈의 합을 반환'],
            ['GetUploadByName', '해당 이름(ID)의 업로드 객체를 반환'],
            ['GetUploadNameSet', '생성된 업로드들의 이름을 Array 형태로 반환'],
            ['GetUserRuntimeMode', '해당 ID로 생성된 업로드의 런타임 모드를 확인'],
            ['GetZipFileInfo', '해당 경로에 해당하는 zip 파일 안의 파일 리스트 정보를 callbackFunc의 파라미터로 반환'],
            ['IsLoadedUploadEx', '해당 ID의 업로드가 load완료된 상태인지 확인'],
            ['IsUpdateRequired', 'Agent의 업데이트가 필요한 상태인지 확인'],
            ['ResetUploadCompleteStateEx', '전송 완료 상태를 다시 false로 초기화시켜준 후 해당 업로드를 현재 컴포넌트로 설정할지를 결정'],
            ['ResetUploadEx', '업로드를 초기화한 후 해당 업로드를 현재 컴포넌트로 설정할지를 결정'],
            ['SetCacheKeyByIndex', '해당 인덱스의 파일에 cacheKey 값을 설정'],
            ['SetCloudInfo', '클라우드 업로드 정보를 설정'],
            ['SetFileObjectList', 'Array 안의 오브젝트에 포함된 경로에 있는 파일들의 정보를 읽어 업로드 컴포넌트의 파일 리스트에 추가'],
            ['SetMultiFileSelect', '파일추가 버튼을 통해 업로드 리스트에 파일 추가시 다중선택 가능여부를 설정'],
            ['SetViewModeChange', '업로드 컴포넌트의 보기 모드를 리스트 모드나 썸네일 모드로 변환'],
            ['StartAgentInstall', 'Agent 설치 팝업을 띄우고 설치파일 다운로드를 수행'],
            ['TransferEx', '전송 시작을 딜레이(0.1초) 후 동작'],
            ['AddUploadedFileAsObject', '이미 업로드 되어 있는 파일 또는 파일리스트를 오브젝트 형태로 업로드 리스트 컨트롤에 셋팅']
        ],
        [
            ['CreationComplete', 'Upload 객체의 생성이 완료되었을 때 발생'],
            ['BeforeAddFile', '파일 추가 전 발생'],
            ['AfterAddFile', '파일 추가 완료 후 발생'],
            ['AfterAddAllFile', '모든 파일 추가 완료 후 발생'],
            ['BeforeDeleteFile', '파일 삭제 전 발생'],
            ['AfterDeleteFile', '파일 삭제 후 발생'],
            ['DeleteAllFile', '모든 파일 삭제 완료 후 발생'],
            ['BeforeUpload', '파일 전송 시작 전 발생'],
            ['UploadingCancel', '파일 전송 취소했을 때 발생'],
            ['UploadComplete', '파일 전송이 완료되었을 때 발생'],
            ['BeforeOpenFile', '파일 열기 전 발생'],
            ['BeforeDownloadFile', '파일 다운로드 전 발생'],
            ['DownloadCancel', '파일 다운로드 취소했을 때 발생'],
            ['DownloadCompleteFile', '파일 다운로드 완료 후 발생'],
            ['DownloadCompleteAllFile', '모든 파일 다운로드 완료 후 발생'],
            ['SelectItem', '파일 선택 후 발생'],
            ['CustomAction', 'Custom Button 클릭 시 발생'],
            ['OnError', '에러가 발생할 경우 발생'],
            ['OnLanguageDefinition', '업로드 생성 시 이벤트가 발생', '각 Text의 문구를 바꾸기 원할 때 사용됩니다.'],
            ['AfterMoveFile', '추가된 파일의 위치변경 완료시 발생'],
            ['AgentInstall', 'Agent 설치파일의 다운로드 직전 발생'],
            ['Alert', 'Alert 발생 전 발생'],
            ['CloseInstallPopup', '사용자가 Agent 설치팝업을 강제로 닫은 경우 발생'],
            ['MultiUploadComplete', 'MultiTransfer API 사용 후 완료 시 발생']
        ]
    ],
    [
        [
            ['SetDebugMode', '업로드,다운로드 등등의 모든 서버 동작 중 발생되는 로그를 출력하기 위하여 사용'],
            ['SetTempPath', '업로드 또는 다운로드시 임시파일에 대한 폴더 설정'],
            ['SetPhysicalPath', '실제 업로드 할 기본경로를 물리적 경로로 설정'],
            ['SetVirtualPath', '실제 업로드 할 기본경로를 가상 경로로 설정'],
            ['SetConfigPhysicalPath', '환경설정파일을 서버에서 관리하고, 서버에 저장된 환경설정파일을 사용할 경우 사용'],
            ['SetGarbageCleanDay', '설정된 임시파일에 대한 폴더에서 불필요한 파일을 삭제 처리하기 위하여 설정'],
            ['SetDownloadRootPath', '클라이언트에서 다운로드 또는 열기 경로 설정시 경로의 앞부분 일부를 서버에서 설정할 경우 사용'],
            ['SetNetworkCredentials', '네트워크 드라이브의 인증 정보를 설정'],
            ['SetViewerJsPath', 'raonkupload/js/raonkupload.viewer.js 파일의 경로를 설정'],
            ['SetViewerBase64JsPath', 'raonkupload/js/raonkupload.base64.js 파일의 경로를 설정'],
            ['SetViewerCssPath', 'raonkupload/css/raonkupload.viewer.min.css 파일의 경로를 설정'],
            ['SetViewerLoadingImagePath', 'raonkupload/images/loading.gif 파일의 경로를 설정'],
            ['SetViewerBrokenImagePath', 'raonkupload/images/broken.png 파일의 경로를 설정'],
            ['GetCustomErrorMessage', 'Process를 실행하기 전에 특정 상황에 대하여 에러 처리를 할 경우 사용'],
            ['InitParameter', 'Process를 실행하기 전에 파라미터 셋팅'],
            ['GetParameterValue', '파라미터의 값을 얻을 경우 사용']
        ],
        [
            ['MakeThumbnail', '파일 업로드 시 이미지 파일인 경우 동일 폴더에 이미지에 대한 Thumbnail 처리를 할 경우 사용'],
            ['MakeThumbnailEX', '파일 업로드 시 이미지 파일인 경우 특정 위치에 이미지에 대한 Thumbnail 처리를 할 경우 사용'],
            ['ConvertImageFormat', '파일 업로드 시 이미지 파일인 경우 이미지의 Format을 변경할 경우 사용'],
            ['ConvertImageSize', '파일 업로드 시 이미지 파일인 경우 이미지 크기를 변환할 경우 사용'],
            ['ConvertImageSizeByPercent', '파일 업로드 시 이미지 파일인 경우 이미지 크기를 비율로 변환할 경우 사용'],
            ['Rotate', '파일 업로드 시 이미지 파일인 경우 이미지를 회전할 경우 사용'],
            ['SetImageWaterMark', '파일 업로드 시 이미지 파일인 경우 이미지 워터마크를 적용할 경우 사용'],
            ['SetTextWaterMark', '파일 업로드 시 이미지 파일인 경우 텍스트 워터마크를 적용할 경우 사용'],
            ['GetImageSize', '파일 업로드 시 이미지 파일인 경우 이미지의 크기정보를 얻으려고 할 때 사용'],
            ['GetExifEntityData', '파일 업로드 시 이미지 파일인 경우 이미지의 EXIF 정보를 추출하려는 경우 사용']
        ],
        [
            ['BeforeUpload', '파일을 업로드하기 전에 발생'],
            ['AfterUpload', '파일을 업로드한 후에 발생'],
            ['BeforeDownload', '파일을 다운로드하기 전에 발생'],
            ['ExecuteDownload', '다운로드 파일을 서버에서 구해지는 Stream 다운로드로 처리할 경우 Stream을 설정'],
            ['AfterDownload', '파일을 다운로드한 후에 발생']
        ],
        [
            ['MaxRequestLength', 'MaxRequestLength 설정', '요청되는 ContentLength의 최대값을 설정할 때 사용'],
            ['Timeout', 'Timeout 설정'],
            ['Cross Origin Resource Sharing(CORS)', 'Web Server와 WAS Server가 분리되어 Handler가 Cross Origin Resource Sharing(CORS) 설정이 필요한 경우 설정']
        ]
    ],
    [
        [
            ['setDebugMode', '업로드,다운로드 등등의 모든 서버 동작 중 발생되는 로그를 콘솔 또는 서버로그에 출력하기 위하여 설정'],
            ['setTempPath', '업로드 또는 다운로드시 임시파일에 대한 폴더를 설정하기 위하여 사용'],
            ['setPhysicalPath', '실제 업로드 할 기본경로를 물리적 경로로 설정'],
            ['setVirtualPath', '실제 업로드 할 기본경로를 가상 경로로 설정'],
            ['setConfigPhysicalPath', '환경설정파일을 서버에서 관리하고, 서버에 저장된 환경설정파일을 사용할 경우 사용'],
            ['setGarbageCleanDay', '설정된 임시파일에 대한 폴더에서 불필요한 파일을 삭제 처리하기 위하여 설정'],
            ['setDownloadRootPath', '클라이언트에서 다운로드 또는 열기 경로 설정시 경로의 앞부분 일부를 서버에서 설정할 경우 사용'],
            ['setContextPath', '서버 설정에 Context Path가 선언되어 있다면 설정'],
            ['setStartPhysicalPathSlashAllowed', 'PhysicalPath값을 /로 시작되도록 허용할 경우 설정'],
            ['setNtlmAuthentication', '네트워크 드라이브의 인증 정보 설정'],
            ['setViewerJsPath', 'raonkupload/js/raonkupload.viewer.js 파일의 경로를 설정'],
            ['setViewerBase64JsPath', 'raonkupload/js/raonkupload.base64.js 파일의 경로를 설정'],
            ['setViewerCssPath', 'raonkupload/css/raonkupload.viewer.min.css 파일의 경로를 설정'],
            ['setViewerLoadingImagePath', 'raonkupload/images/loading.gif 파일의 경로를 설정'],
            ['setViewerBrokenImagePath', 'raonkupload/images/broken.png 파일의 경로를 설정'],
            ['getCustomErrorMessage', 'Process를 실행하기 전에 특정 상황에 대하여 에러 처리를 할 경우 사용'],
            ['initParameter', 'Process를 실행하기 전에 파라미터 셋팅'],
            ['getParameterValue', '파라미터의 값을 얻을 경우 사용']
        ],
        [
            ['makeThumbnail', '파일 업로드 시 이미지 파일인 경우 동일 폴더에 이미지에 대한 Thumbnail 처리를 할 경우 사용'],
            ['makeThumbnailEX', '파일 업로드 시 이미지 파일인 경우 특정 위치에 이미지에 대한 Thumbnail 처리를 할 경우 사용'],
            ['convertImageFormat', '파일 업로드 시 이미지 파일인 경우 이미지의 Format을 변경할 경우 사용'],
            ['convertImageSize', '파일 업로드 시 이미지 파일인 경우 이미지 크기를 변환할 경우 사용'],
            ['convertImageSizeByPercent', '파일 업로드 시 이미지 파일인 경우 이미지 크기를 비율로 변환할 경우 사용'],
            ['rotate', '파일 업로드 시 이미지 파일인 경우 이미지를 회전할 경우 사용'],
            ['setImageWaterMark', '파일 업로드 시 이미지 파일인 경우 이미지 워터마크를 적용할 경우 사용'],
            ['setTextWaterMark', '파일 업로드 시 이미지 파일인 경우 텍스트 워터마크를 적용할 경우 사용'],
            ['getImageSize', '파일 업로드 시 이미지 파일인 경우 이미지의 크기정보를 얻으려고 할 때 사용'],
            ['getExifData', '파일 업로드 시 이미지 파일인 경우 이미지의 EXIF 정보를 추출하려는 경우 사용']
        ],
        [
            ['beforeUploadEvent', '파일을 업로드하기 전에 발생'],
            ['afterUploadEvent', '파일을 업로드한 후에 발생'],
            ['beforeDownloadEvent', '파일을 다운로드하기 전에 발생'],
            ['executeDownloadEvent', '다운로드 파일을 서버에서 구해지는 Stream 다운로드로 처리할 경우 Stream을 설정'],
            ['afterDownloadEvent', '파일을 다운로드한 후에 발생']
        ],
        [
            ['MimeType', 'MimeType 설정'],
            ['Multipart가 설정에 의해 미리 읽히는 경우', 'Multipart가 설정에 의해 미리 읽히는 경우에 대한 처리'],
            ['Cross Origin Resource Sharing(CORS)', 'Web Server와 WAS Server가 분리되어 Handler가 Cross Origin Resource Sharing(CORS) 설정이 필요한 경우 설정']
        ]
    ],
    [
        ['서버 환경설정 파일', '서버에서 환경설정 파일 읽기'],
        ['파라미터 추가', '파라미터 서버에서 받는 방법', '파라미터 추가 후 서버에서 받는 방법'],
        ['파일의 특정 정보 서버에서 받는 방법', '파일에 특정 정보 추가', '파일에 특정 정보 추가 후 서버에서 받는 방법', '파일 추가할 때 각 파일에 특정 정보 추가 후 서버에서 받는 방법'],
        ['파일명 변경', '파일명 변환', '파일을 원하는 파일명으로 변환하는 방법'],
        ['업로드 된 파일 정보 얻는 방법', '서버 이벤트에서 업로드 된 파일 정보 얻는 방법']
    ],
    [
        ['기본 업로드'],
        ['기본 다운로드'],
        ['동적 생성'],
        ['보안컨텐츠 다운로드'],
        ['다중 업로드'],
        ['다운로드 모드 설정'],
        ['편집모드 이벤트'],
        ['보기모드 이벤트'],
        ['폴더 구조로 업로드'],
        ['폴더 구조로 다운로드'],
        ['이미지 미리보기'],
        ['졍렬/파일 순서 바꾸기'],
        ['대용량 설정'],
        ['저장경로 설정 방법'],
        ['커스텀버튼 추가'],
        ['편집/보기 모드 동시 사용'],
        ['파라미터 추가'],
        ['Drop Zone'],
        ['각 파일에 data 추가하는 방법'],
        ['File 태그 연동'],
        ['업로드 경로 암호화'],
        ['다중 카테고리 업로드'],
        ['Simple UI 업로드']
    ]
];

function fnMenuSetting(bThridMenu, bSearchMenuClick) {
    if (bSearchMenuClick) {
        document.getElementById("search_word").value = "";
        document.getElementById('search_list').innerHTML = "";
        document.getElementById("search_list").style.display = "none";
    }

    var arrSelectedMenu = strSelectedMenu.split(',');
    var arrMenu = [];
    var strSelectedContentsUrl = '';

    var arrSelectedMenuLength = arrSelectedMenu.length;

    var arrMenuStatus = strMenuStatus.split(',');
    var arrMenuStatusLength = arrMenuStatus.length;

    if (arrSelectedMenuLength == 1 && (strMenuStatus == arrSelectedMenu[0] || (arrMenuStatusLength == 2 && arrMenuStatus[0] == arrSelectedMenu[0]))) {
        strMenuStatus = '';
    } else if (!bThridMenu && arrSelectedMenuLength == 2 && strMenuStatus == arrSelectedMenu[0] + ',' + arrSelectedMenu[1]) {
        strMenuStatus = arrSelectedMenu[0];
    } else {
        if (bThridMenu) {
            if (arrSelectedMenuLength == 2) {
                strMenuStatus = arrSelectedMenu[0];
            } else if (arrSelectedMenuLength == 3) {
                strMenuStatus = arrSelectedMenu[0] + ',' + arrSelectedMenu[1];
            }
        } else {
            strMenuStatus = strSelectedMenu;
        }
    }

    var arrFirstMenuLength = arrFirstMenu.length;

    for (var i = 0; i < arrFirstMenuLength; i++) {
        var arrSpFirstMenu = arrFirstMenu[i].split(G_vertical);
        var strFirstMenu = fnGetMenuText(arrSpFirstMenu[0], arrSpFirstMenu[1], arrSpFirstMenu[2]);

        if (((!bThridMenu && strMenuStatus.indexOf(i.toString()) == 0) || bThridMenu) && arrSelectedMenu[0] == i.toString()) {
            arrMenu[arrMenu.length] = '<li><a href="javascript:strSelectedMenu=\'' + i + '\';fnMenuSetting(false, false);" class="depth1"><i class="icon open"></i>' + strFirstMenu + '</a>';
        } else {
            arrMenu[arrMenu.length] = '<li><a href="javascript:strSelectedMenu=\'' + i + '\';fnMenuSetting(false, false);" class="depth1"><i class="icon close"></i>' + strFirstMenu + '</a>';
        }
        
        if (((!bThridMenu && strMenuStatus.indexOf(i.toString()) == 0) || bThridMenu) && arrSelectedMenu[0] == i.toString()) {
            var arrSecondMenuLength = arrSecondMenu[i].length;

            arrMenu[arrMenu.length] = '<ul>';

            for (var j = 0; j < arrSecondMenuLength; j++) {
                var arrSpSecondMenu = arrSecondMenu[i][j].split(G_vertical);
                var strSecondMenu = fnGetMenuText(arrSpSecondMenu[0], arrSpSecondMenu[1], arrSpSecondMenu[2]);
                var strFnMenuSetting = '';

                if (arrSpSecondMenu.length == 4) {
                    strFnMenuSetting = 'fnMenuSetting(true, false);';
                } else {
                    strFnMenuSetting = 'fnMenuSetting(false, false);';
                }

                arrMenu[arrMenu.length] = '<li><a href="javascript:strSelectedMenu=\'' + i + ',' + j + '\';' + strFnMenuSetting + '" class="depth2';
                if (((!bThridMenu && strMenuStatus.indexOf(i.toString() + ',' + j.toString()) == 0) || bThridMenu) && arrSelectedMenu[1] == j.toString()) {
                    if (arrSpSecondMenu.length == 4) {
                        arrMenu[arrMenu.length] = ' on"><i class="icon none"></i>';
                        strSelectedContentsUrl = arrSpSecondMenu[3];
                    } else {
                        arrMenu[arrMenu.length] = '"><i class="icon open"></i>';
                    }
                } else {
                    if (arrSpSecondMenu.length == 4) {
                        arrMenu[arrMenu.length] = '"><i class="icon none"></i>';
                    } else {
                        arrMenu[arrMenu.length] = '"><i class="icon close"></i>';
                    }
                }
                arrMenu[arrMenu.length] = strSecondMenu + '</a></li>';
                
                if (((!bThridMenu && strMenuStatus.indexOf(i.toString() + ',' + j.toString()) == 0) || bThridMenu) && arrSelectedMenu[1] == j.toString()) {
                    if (!!arrThirdMenu[i][j]) {
                        var arrThirdMenuLength = arrThirdMenu[i][j].length;

                        arrMenu[arrMenu.length] = '<ul>';

                        for (var k = 0; k < arrThirdMenuLength; k++) {
                            var arrSpThirdMenu = arrThirdMenu[i][j][k].split(G_vertical);
                            var strThirdMenu = fnGetMenuText(arrSpThirdMenu[0], arrSpThirdMenu[1], arrSpThirdMenu[2]);

                            if (arrSelectedMenu[2] == k.toString()) {
                                arrMenu[arrMenu.length] = '<li><a href="javascript:strSelectedMenu=\'' + i + ',' + j + ',' + k + '\';fnMenuSetting(true, false);" class="depth3 on">' + strThirdMenu + '</a></li>';
                                strSelectedContentsUrl = arrSpThirdMenu[3];
                            } else {
                                arrMenu[arrMenu.length] = '<li><a href="javascript:strSelectedMenu=\'' + i + ',' + j + ',' + k + '\';fnMenuSetting(true, false);" class="depth3">' + strThirdMenu + '</a></li>';
                            }
                        }

                        arrMenu[arrMenu.length] = '</ul>';
                    }
                }
            }

            arrMenu[arrMenu.length] = '</ul>';
        }

        arrMenu[arrMenu.length] = '</li>';
    }

    strPreSelectedMenu = strSelectedMenu;

    document.getElementById('side_menu').innerHTML = arrMenu.join("");

    if (!!strSelectedContentsUrl && strSelectedContentsUrl != '')
        fnContentsSetting(strSelectedContentsUrl);
}

function fnGetMenuText(strIcon, strTitleFlag, strTitle) {

    var strMenuText = '';

    switch (strIcon) {
        case "1":
            strMenuText += '<i class="icon icon_intro"></i>';
            break;
        case "2":
            strMenuText += '<i class="icon icon_guide"></i>';
            break;
        case "3":
            strMenuText += '<i class="icon icon_sample"></i>';
            break;
        case "4":
            strMenuText += '<i class="icon icon_setting"></i>';
            break;
        case "5":
            strMenuText += '<i class="icon icon_brace"></i>';
            break;
        case "6":
            strMenuText += '<i class="icon icon_serverinfo"></i>';
            break;
        case "7":
            strMenuText += '<i class="icon icon_js"></i>';
            break;
        case "8":
            strMenuText += '<i class="icon icon_net"></i>';
            break;
        case "9":
            strMenuText += '<i class="icon icon_ja"></i>';
            break;
        default:
            break;
    }

    switch (strTitleFlag) {
        case "0":
            strMenuText += '<span>' + strTitle + '</span>';
            break;
        case "1":
            strMenuText += '<span title="' + strTitle + '">' + strTitle + '</span>';
            break;
        default:
            break;
    }

    return strMenuText;

}

function fnContentsSetting(strSelectedContentsUrl) {

    document.getElementById("contentsFrame").src = strSelectedContentsUrl;

}

function fnKeyPressEvent(e) {
    if (e.keyCode == 13) {
        fnSearch();
        return false;
    }
}

function fnSearch() {

    document.getElementById('search_list').innerHTML = "";
    document.getElementById("search_list").style.display = "none";

    var strSearchWord = document.getElementById("search_word");
    var strSearchWordValue = strSearchWord.value;

    if (strSearchWordValue == '') {
        alert("검색어를 입력해주세요.");
        return;
    }

    var arrSearchMenuList = [];

    var arrFirstMenuLength = arrSearchWordMenu.length;
    for (var i = 0; i < arrFirstMenuLength; i++) {
        var arrSecondMenuLength = arrSearchWordMenu[i].length;
        for (var j = 0; j < arrSecondMenuLength; j++) {
            var arrThirdMenuLength = arrSearchWordMenu[i][j].length;
            for (var k = 0; k < arrThirdMenuLength; k++) {
                var objSearchMenu = arrSearchWordMenu[i][j][k];
                if (typeof objSearchMenu === 'string') {
                    if (objSearchMenu.toLowerCase().indexOf(strSearchWordValue.toLowerCase()) > -1 && (arrSearchMenuList.length == 0 || arrSearchMenuList[arrSearchMenuList.length - 1] != i.toString() + "," + j.toString()))
                        arrSearchMenuList[arrSearchMenuList.length] = i.toString() + "," + j.toString();
                } else {
                    var arrSearchMenuLength = objSearchMenu.length;
                    for (var l = 0; l < arrSearchMenuLength; l++) {
                        if (objSearchMenu[l].toLowerCase().indexOf(strSearchWordValue.toLowerCase()) > -1 && (arrSearchMenuList.length == 0 || arrSearchMenuList[arrSearchMenuList.length - 1] != i.toString() + "," + j.toString() + "," + k.toString()))
                            arrSearchMenuList[arrSearchMenuList.length] = i.toString() + "," + j.toString() + "," + k.toString();
                    }
                }
            }
        }
    }

    var arrSearchMenuListLength = arrSearchMenuList.length;
    if (arrSearchMenuListLength == 1) {
        strSelectedMenu = arrSearchMenuList[0];
        fnMenuSetting(true, false);
        strSearchWord.value = '';
    } else if (arrSearchMenuListLength > 1) {
        var arrSearchList = [];
        arrSearchList[arrSearchList.length] = '<ul>';

        for (var i = 0; i < arrSearchMenuListLength; i++) {
            var strSearchMenuText = '';
            var arrSpSearchMenuList = arrSearchMenuList[i].split(',');
            var arrSpSearchMenuListLength = arrSpSearchMenuList.length;
            if (arrSpSearchMenuListLength == 1) {
                strSearchMenuText += arrFirstMenu[parseInt(arrSpSearchMenuList[0], 10)].split(G_vertical)[2];
            } else if (arrSpSearchMenuListLength == 2) {
                strSearchMenuText += arrFirstMenu[parseInt(arrSpSearchMenuList[0], 10)].split(G_vertical)[2];
                strSearchMenuText += ' &gt; ' + arrSecondMenu[parseInt(arrSpSearchMenuList[0], 10)][parseInt(arrSpSearchMenuList[1], 10)].split(G_vertical)[2];
            } else if (arrSpSearchMenuListLength == 3) {
                strSearchMenuText += arrFirstMenu[parseInt(arrSpSearchMenuList[0], 10)].split(G_vertical)[2];
                strSearchMenuText += ' &gt; ' + arrSecondMenu[parseInt(arrSpSearchMenuList[0], 10)][parseInt(arrSpSearchMenuList[1], 10)].split(G_vertical)[2];
                strSearchMenuText += ' &gt; ' + arrThirdMenu[parseInt(arrSpSearchMenuList[0], 10)][parseInt(arrSpSearchMenuList[1], 10)][parseInt(arrSpSearchMenuList[2], 10)].split(G_vertical)[2];
            }

            arrSearchList[arrSearchList.length] = '<li title="' + strSearchMenuText + '"><a href="javascript:strSelectedMenu=\'' + arrSearchMenuList[i] + '\';fnMenuSetting(true, true);">' + strSearchMenuText + '</a></li>';
        }

        arrSearchList[arrSearchList.length] = '</ul>';

        document.getElementById('search_list').innerHTML = arrSearchList.join("");
        document.getElementById('search_list').style.display = "";
    } else if (arrSearchMenuListLength == 0) {
        alert("검색 결과가 존재하지 않습니다.");
        strSearchWord.focus();
    }

}

function fnIndex() {

    document.getElementById("search_word").value = "";
    document.getElementById('search_list').innerHTML = "";
    document.getElementById("search_list").style.display = "none";

    strSelectedMenu = '';
    fnMenuSetting(false, false);

    var fnIframeLoad = function () {
        var iIndexContentsRowCount = 0;
        var arrIndexContents = [];

        var arrFirstSearchWordMenuLength = arrSearchWordMenu.length;

        for (var i = 0; i < arrFirstSearchWordMenuLength; i++) {

            var arrSecondSearchWordMenuLength = arrSearchWordMenu[i].length;
            for (var j = 0; j < arrSecondSearchWordMenuLength; j++) {

                var arrThirdIndexContents = [];
                var arrThirdSearchWordMenuLength = arrSearchWordMenu[i][j].length;
                for (var k = 0; k < arrThirdSearchWordMenuLength; k++) {

                    if (typeof arrSearchWordMenu[i][j][k] === 'string') {
                        arrThirdIndexContents[arrThirdIndexContents.length] = '<td><a href="javascript:parent.strSelectedMenu=\'' + i + ',' + j + '\';parent.fnMenuSetting(true, false);" title="' + arrSearchWordMenu[i][j][k] + '">' + arrSearchWordMenu[i][j][k] + '</a></td>';
                    } else {
                        var arrFourthIndexContents = [];
                        var arrFourthSearchWordMenuLength = arrSearchWordMenu[i][j][k].length;
                        for (var l = 0; l < arrFourthSearchWordMenuLength; l++) {
                            arrFourthIndexContents[arrFourthIndexContents.length] = '<td><a href="javascript:parent.strSelectedMenu=\'' + i + ',' + j + ',' + k + '\';parent.fnMenuSetting(true, false);" title="' + arrSearchWordMenu[i][j][k][l] + '">' + arrSearchWordMenu[i][j][k][l] + '</a></td>';
                        }

                        if (arrFourthSearchWordMenuLength < 4) {
                            for (var m = 0; m < 4 - arrFourthSearchWordMenuLength; m++) {
                                arrFourthIndexContents[arrFourthIndexContents.length] = '<td></td>';
                            }
                        }

                        var strTitleText = '';
                        strTitleText += arrFirstMenu[i].split(G_vertical)[2];
                        strTitleText += ' &gt; ' + arrSecondMenu[i][j].split(G_vertical)[2];
                        strTitleText += ' &gt; ' + arrThirdMenu[i][j][k].split(G_vertical)[2];

                        iIndexContentsRowCount++;
                        if (iIndexContentsRowCount % 2 == 0) {
                            arrIndexContents[arrIndexContents.length] = '<tr class="tb_color">';
                        } else {
                            arrIndexContents[arrIndexContents.length] = '<tr>';
                        }
                        arrIndexContents[arrIndexContents.length] = '<th><a href="javascript:parent.strSelectedMenu=\'' + i + ',' + j + ',' + k + '\';parent.fnMenuSetting(true, false);" title="' + strTitleText + '">' + strTitleText + '</a></th>';
                        arrIndexContents[arrIndexContents.length] = arrFourthIndexContents.join("");
                        arrIndexContents[arrIndexContents.length] = '</tr>';
                    }

                }

                if (arrThirdIndexContents.length != 0) {
                    if (arrThirdSearchWordMenuLength < 4) {
                        for (var m = 0; m < 4 - arrThirdSearchWordMenuLength; m++) {
                            arrThirdIndexContents[arrThirdIndexContents.length] = '<td></td>';
                        }
                    }

                    var strTitleText = '';
                    strTitleText += arrFirstMenu[i].split(G_vertical)[2];
                    strTitleText += ' &gt; ' + arrSecondMenu[i][j].split(G_vertical)[2];

                    iIndexContentsRowCount++;
                    if (iIndexContentsRowCount % 2 == 0) {
                        arrIndexContents[arrIndexContents.length] = '<tr class="tb_color">';
                    } else {
                        arrIndexContents[arrIndexContents.length] = '<tr>';
                    }
                    arrIndexContents[arrIndexContents.length] = '<th><a href="javascript:parent.strSelectedMenu=\'' + i + ',' + j + '\';parent.fnMenuSetting(true, false);" title="' + strTitleText + '">' + strTitleText + '</a></th>';
                    arrIndexContents[arrIndexContents.length] = arrThirdIndexContents.join("");
                    arrIndexContents[arrIndexContents.length] = '</tr>';
                }

            }

        }

        document.all.contentsFrame.contentDocument.getElementById("index_contents").innerHTML = arrIndexContents.join("");
        removeEvent(objIframe, 'load', fnIframeLoad);
    }

    var objIframe = document.getElementById("contentsFrame");
    addEvent(objIframe, 'load', fnIframeLoad, false);
    objIframe.src = 'searchIndex.html';
    
}

function addEvent(element, event, func, useCapture) {
    if (element.addEventListener) { element.addEventListener(event, func, useCapture); } else if (element.attachEvent) { element.attachEvent('on' + event, func); }
}

function removeEvent(element, event, func, useCapture) {
    if (element.removeEventListener) { element.removeEventListener(event, func, useCapture); } else if (element.detachEvent) { element.detachEvent('on' + event, func); }
}