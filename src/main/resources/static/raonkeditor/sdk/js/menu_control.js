var G_vertical = '\u000B';
var G_formfeed = '\u000C';

var strSelectedMenu = '0,0';
var strMenuStatus = '';

//1 : icon (1 : intro, 2 : guide, 3 : sample, 4 : setting, 5 : brace, 6 : serverinfo, 7 : js, 8 : net, 9 : java)
//2 : title flag (0 : false, 1 : true)
//3 : title
//4 : url

var arrFirstMenu = ['1' + G_vertical + '0' + G_vertical + '소개', '2' + G_vertical + '0' + G_vertical + '클라이언트 가이드', '3' + G_vertical + '0' + G_vertical + '샘플'];
var arrSecondMenu = [
    ['4' + G_vertical + '1' + G_vertical + '설치 및 기본설정' + G_vertical + 'html/keditorSdkMain.html'],
    ['4' + G_vertical + '0' + G_vertical + 'Settings',
        '5' + G_vertical + '0' + G_vertical + 'Methods',
        '5' + G_vertical + '0' + G_vertical + 'Events'],
    ['3' + G_vertical + '1' + G_vertical + '기본 에디터 생성' + G_vertical + 'sample/html/sample_editor.html',
        '3' + G_vertical + '1' + G_vertical + '동적 에디터 생성' + G_vertical + 'sample/html/sample_ajax.html',
        '3' + G_vertical + '1' + G_vertical + '다중 에디터' + G_vertical + 'sample/html/sample_multi_editor.html',
        '3' + G_vertical + '1' + G_vertical + '특정위치에 내용삽입' + G_vertical + 'sample/html/sample_insert_editor.html',
        '3' + G_vertical + '1' + G_vertical + 'Css Url 추가' + G_vertical + 'sample/html/sample_cssurl_editor.html',
        '3' + G_vertical + '1' + G_vertical + 'Html Url 불러오기' + G_vertical + 'sample/html/sample_loadhtml_editor.html',
        '3' + G_vertical + '1' + G_vertical + 'UI 컨트롤' + G_vertical + 'sample/html/sample_toolbar_editor.html',
        '3' + G_vertical + '1' + G_vertical + '포커스 제어' + G_vertical + 'sample/html/sample_cursor_editor.html',
        '3' + G_vertical + '1' + G_vertical + '사용자 이미지 처리' + G_vertical + 'sample/html/sample_upload_editor.html',
        '3' + G_vertical + '1' + G_vertical + '에디터 객체 컨트롤' + G_vertical + 'sample/html/sample_editor_dom.html',
        '3' + G_vertical + '1' + G_vertical + '웹 접근성 검증' + G_vertical + 'sample/html/sample_accessibility_validation.html',
        '3' + G_vertical + '1' + G_vertical + 'DOM 관리' + G_vertical + 'sample/html/sample_form_editor.html',
        '3' + G_vertical + '1' + G_vertical + '숨겨진 영역에서 생성' + G_vertical + 'sample/html/sample_display_none.html',
        '3' + G_vertical + '1' + G_vertical + '에디터 서명 삽입' + G_vertical + 'sample/html/sample_insert_signature.html',
        '3' + G_vertical + '1' + G_vertical + '해상도별 보기 페이지' + G_vertical + 'sample/html/sample_editor_view.html']
];
var arrThirdMenu = [
    [],
    [
        ['7' + G_vertical + '1' + G_vertical + 'InitXml' + G_vertical + 'html/client/_s_InitXml.html',
            '7' + G_vertical + '1' + G_vertical + 'InitServerXml' + G_vertical + 'html/client/_s_InitServerXml.html',
            '7' + G_vertical + '1' + G_vertical + 'InitVisible' + G_vertical + 'html/client/_s_InitVisible.html',
            '7' + G_vertical + '1' + G_vertical + 'EditorHolder' + G_vertical + 'html/client/_s_EditorHolder.html',
            '7' + G_vertical + '1' + G_vertical + 'IgnoreSameEditorName' + G_vertical + 'html/client/_s_IgnoreSameEditorName.html',
            '7' + G_vertical + '1' + G_vertical + 'License' + G_vertical + 'html/client/_s_License.html',
            '7' + G_vertical + '1' + G_vertical + 'Runtimes' + G_vertical + 'html/client/_s_Runtimes.html',
            '7' + G_vertical + '1' + G_vertical + 'Width' + G_vertical + 'html/client/_s_Width.html',
            '7' + G_vertical + '1' + G_vertical + 'Height' + G_vertical + 'html/client/_s_Height.html',
            '7' + G_vertical + '1' + G_vertical + 'SkinName' + G_vertical + 'html/client/_s_SkinName.html',
            '7' + G_vertical + '1' + G_vertical + 'DefaultMessage' + G_vertical + 'html/client/_s_DefaultMessage.html',
            '7' + G_vertical + '1' + G_vertical + 'DialogWindow' + G_vertical + 'html/client/_s_DialogWindow.html',
            '7' + G_vertical + '1' + G_vertical + 'Doctype' + G_vertical + 'html/client/_s_Doctype.html',
            '7' + G_vertical + '1' + G_vertical + 'Lang' + G_vertical + 'html/client/_s_Lang.html',
            '7' + G_vertical + '1' + G_vertical + 'EditorBorder' + G_vertical + 'html/client/_s_EditorBorder.html',
            '7' + G_vertical + '1' + G_vertical + 'ShowStatusBar' + G_vertical + 'html/client/_s_ShowStatusBar.html',
            '7' + G_vertical + '1' + G_vertical + 'FileFieldID' + G_vertical + 'html/client/_s_FileFieldID.html',
            '7' + G_vertical + '1' + G_vertical + 'FirstLoadMessage' + G_vertical + 'html/client/_s_FirstLoadMessage.html',
            '7' + G_vertical + '1' + G_vertical + 'FocusInitObjId' + G_vertical + 'html/client/_s_FocusInitObjId.html',
            '7' + G_vertical + '1' + G_vertical + 'FormattingList' + G_vertical + 'html/client/_s_FormattingList.html',
            '7' + G_vertical + '1' + G_vertical + 'NextTabElementId' + G_vertical + 'html/client/_s_NextTabElementId.html',
            '7' + G_vertical + '1' + G_vertical + 'SetValueObjId' + G_vertical + 'html/client/_s_SetValueObjId.html',
            '7' + G_vertical + '1' + G_vertical + 'TabIndexObjId' + G_vertical + 'html/client/_s_TabIndexObjId.html',
            '7' + G_vertical + '1' + G_vertical + 'UserFieldID,UserFieldValue' + G_vertical + 'html/client/_s_UserFieldValue.html',
            '7' + G_vertical + '1' + G_vertical + 'ZIndex' + G_vertical + 'html/client/_s_ZIndex.html',
            '7' + G_vertical + '1' + G_vertical + 'XssUse' + G_vertical + 'html/client/_s_XssUse.html',
            '7' + G_vertical + '1' + G_vertical + 'XssAllowEventsAttribute' + G_vertical + 'html/client/_s_XssAllowEventsAttribute.html',
            '7' + G_vertical + '1' + G_vertical + 'XssRemoveTags' + G_vertical + 'html/client/_s_XssRemoveTags.html',
            '7' + G_vertical + '1' + G_vertical + 'XssRemoveEvents' + G_vertical + 'html/client/_s_XssRemoveEvents.html',
            '7' + G_vertical + '1' + G_vertical + 'TopMenu' + G_vertical + 'html/client/_s_TopMenu.html',
            '7' + G_vertical + '1' + G_vertical + 'ToolBar1' + G_vertical + 'html/client/_s_ToolBar1.html',
            '7' + G_vertical + '1' + G_vertical + 'ToolBar2' + G_vertical + 'html/client/_s_ToolBar2.html',
            '7' + G_vertical + '1' + G_vertical + 'StatusBar' + G_vertical + 'html/client/_s_StatusBar.html',
            '7' + G_vertical + '1' + G_vertical + 'StatusBarInitMode' + G_vertical + 'html/client/_s_StatusBarInitMode.html',
            '7' + G_vertical + '1' + G_vertical + 'RemoveItem' + G_vertical + 'html/client/_s_RemoveItem.html',
            '7' + G_vertical + '1' + G_vertical + 'RemoveContextItem' + G_vertical + 'html/client/_s_RemoveContextItem.html',
            '7' + G_vertical + '1' + G_vertical + 'FontSizeList' + G_vertical + 'html/client/_s_FontSize.html',
            '7' + G_vertical + '1' + G_vertical + 'FontFamily' + G_vertical + 'html/client/_s_FontFamily.html',
            '7' + G_vertical + '1' + G_vertical + 'UseLocalFont' + G_vertical + 'html/client/_s_UseLocalFont.html',
            '7' + G_vertical + '1' + G_vertical + 'UseRecentlyFont' + G_vertical + 'html/client/_s_UseRecentlyFont.html',
            '7' + G_vertical + '1' + G_vertical + 'LineHeightList' + G_vertical + 'html/client/_s_LineHeight.html',
            '7' + G_vertical + '1' + G_vertical + 'Encoding' + G_vertical + 'html/client/_s_Encoding.html',
            '7' + G_vertical + '1' + G_vertical + 'IeCompatible' + G_vertical + 'html/client/_s_IeCompatible.html',
            '7' + G_vertical + '1' + G_vertical + 'DefaultFontFamily' + G_vertical + 'html/client/_s_DefaultFontFamily.html',
            '7' + G_vertical + '1' + G_vertical + 'DefaultFontSize' + G_vertical + 'html/client/_s_DefaultFontSize.html',
            '7' + G_vertical + '1' + G_vertical + 'DefaultLineHeight' + G_vertical + 'html/client/_s_DefaultLineHeight.html',
            '7' + G_vertical + '1' + G_vertical + 'ShowFontReal' + G_vertical + 'html/client/_s_ShowFontReal.html',
            '7' + G_vertical + '1' + G_vertical + 'Accessibility' + G_vertical + 'html/client/_s_Accessibility.html',
            '7' + G_vertical + '1' + G_vertical + 'ShowTopMenu' + G_vertical + 'html/client/_s_ShowTopMenu.html',
            '7' + G_vertical + '1' + G_vertical + 'ShowToolBar' + G_vertical + 'html/client/_s_ShowToolBar.html',
            '7' + G_vertical + '1' + G_vertical + 'Grouping' + G_vertical + 'html/client/_s_Grouping.html',
            '7' + G_vertical + '1' + G_vertical + 'StatusBarLoading' + G_vertical + 'html/client/_s_StatusBarLoading.html',
            '7' + G_vertical + '1' + G_vertical + 'ShowDialogPosition' + G_vertical + 'html/client/_s_ShowDialogPosition.html',
            '7' + G_vertical + '1' + G_vertical + 'SourceViewtype' + G_vertical + 'html/client/_s_SourceViewtype.html',
            '7' + G_vertical + '1' + G_vertical + 'WrapPtagToSource' + G_vertical + 'html/client/_s_WrapPtagToSource.html',
            '7' + G_vertical + '1' + G_vertical + 'UserCssUrl' + G_vertical + 'html/client/_s_UserCssUrl.html',
            '7' + G_vertical + '1' + G_vertical + 'XhtmlValue' + G_vertical + 'html/client/_s_XhtmlValue.html',
            '7' + G_vertical + '1' + G_vertical + 'ViewModeAutoWidth' + G_vertical + 'html/client/_s_ViewModeAutoWidth.html',
            '7' + G_vertical + '1' + G_vertical + 'ViewModeAutoHeight' + G_vertical + 'html/client/_s_ViewModeAutoHeight.html',
            '7' + G_vertical + '1' + G_vertical + 'SystemTitle' + G_vertical + 'html/client/_s_SystemTitle.html',
            '7' + G_vertical + '1' + G_vertical + 'TableAutoAdjust' + G_vertical + 'html/client/_s_TableAutoAdjust.html',
            '7' + G_vertical + '1' + G_vertical + 'UseRuler' + G_vertical + 'html/client/_s_UseRuler.html',
            '7' + G_vertical + '1' + G_vertical + 'AutoBodyFit' + G_vertical + 'html/client/_s_AutoBodyFit.html',
            '7' + G_vertical + '1' + G_vertical + 'ScrollOverflow' + G_vertical + 'html/client/_s_ScrollOverflow.html',
            '7' + G_vertical + '1' + G_vertical + 'UseHorizontalLine' + G_vertical + 'html/client/_s_UseHorizontalLine.html',
            '7' + G_vertical + '1' + G_vertical + 'ImageBaseUrl' + G_vertical + 'html/client/_s_ImageBaseUrl.html',
            '7' + G_vertical + '1' + G_vertical + 'ContextMenuDisable' + G_vertical + 'html/client/_s_ContextMenuDisable.html',
            '7' + G_vertical + '1' + G_vertical + 'EnterTag' + G_vertical + 'html/client/_s_EnterTag.html',
            '7' + G_vertical + '1' + G_vertical + 'FrameFullScreen' + G_vertical + 'html/client/_s_FrameFullScreen.html',
            '7' + G_vertical + '1' + G_vertical + 'ImgDefaultSize' + G_vertical + 'html/client/_s_ImgDefaultSize.html',
            '7' + G_vertical + '1' + G_vertical + 'AllowInoutdentText' + G_vertical + 'html/client/_s_AllowInoutdentText.html',
            '7' + G_vertical + '1' + G_vertical + 'TableDefaultWidth' + G_vertical + 'html/client/_s_TableDefaultWidth.html',
            '7' + G_vertical + '1' + G_vertical + 'TableDefaultHeight' + G_vertical + 'html/client/_s_TableDefaultHeight.html',
            '7' + G_vertical + '1' + G_vertical + 'TableDefaultClass' + G_vertical + 'html/client/_s_TableDefaultClass.html',
            '7' + G_vertical + '1' + G_vertical + 'TableDefaultInoutdent' + G_vertical + 'html/client/_s_TableDefaultInoutdent.html',
            '7' + G_vertical + '1' + G_vertical + 'TableInitInoutdent' + G_vertical + 'html/client/_s_TableInitInoutdent.html',
            '7' + G_vertical + '1' + G_vertical + 'TableDefaultTdHeight' + G_vertical + 'html/client/_s_TableDefaultTdHeight.html',
            '7' + G_vertical + '1' + G_vertical + 'TableRowMaxCount' + G_vertical + 'html/client/_s_TableRowMaxCount.html',
            '7' + G_vertical + '1' + G_vertical + 'TableColMaxCount' + G_vertical + 'html/client/_s_TableColMaxCount.html',
            '7' + G_vertical + '1' + G_vertical + 'AdjustCursorInTable' + G_vertical + 'html/client/_s_AdjustCursorInTable.html',
            '7' + G_vertical + '1' + G_vertical + 'TableClassList' + G_vertical + 'html/client/_s_TableClassList.html',
            '7' + G_vertical + '1' + G_vertical + 'TableLineStyleList' + G_vertical + 'html/client/_s_TableLineStyleList.html',
            '7' + G_vertical + '1' + G_vertical + 'TableNoResizeClass' + G_vertical + 'html/client/_s_TableNoResizeClass.html',
            '7' + G_vertical + '1' + G_vertical + 'TableInsertDragSize' + G_vertical + 'html/client/_s_TableInsertDragSize.html',
            '7' + G_vertical + '1' + G_vertical + 'ShowLineForBorderNone' + G_vertical + 'html/client/_s_ShowLineForBorderNone.html',
            '7' + G_vertical + '1' + G_vertical + 'UseMouseTableInoutdent' + G_vertical + 'html/client/_s_UseMouseTableInoutdent.html',
            '7' + G_vertical + '1' + G_vertical + 'SetDefaultStyle' + G_vertical + 'html/client/_s_SetDefaultStyle.html',
            '7' + G_vertical + '1' + G_vertical + 'EditorTabDisable' + G_vertical + 'html/client/_s_EditorTabDisable.html',
            '7' + G_vertical + '1' + G_vertical + 'RemoveSpaceInTagname' + G_vertical + 'html/client/_s_RemoveSpaceInTagname.html',
            '7' + G_vertical + '1' + G_vertical + 'ViewModeBrowserMenu' + G_vertical + 'html/client/_s_ViewModeBrowserMenu.html',
            '7' + G_vertical + '1' + G_vertical + 'ViewModeAllowCopy' + G_vertical + 'html/client/_s_ViewModeAllowCopy.html',
            '7' + G_vertical + '1' + G_vertical + 'DragAndDropAllow' + G_vertical + 'html/client/_s_DragAndDropAllow.html',
            '7' + G_vertical + '1' + G_vertical + 'FormListUrl' + G_vertical + 'html/client/_s_FormListUrl.html',
            '7' + G_vertical + '1' + G_vertical + 'Mode' + G_vertical + 'html/client/_s_Mode.html',
            '7' + G_vertical + '1' + G_vertical + 'Resizebar' + G_vertical + 'html/client/_s_Resizebar.html',
            '7' + G_vertical + '1' + G_vertical + 'DragResize' + G_vertical + 'html/client/_s_DragResize.html',
            '7' + G_vertical + '1' + G_vertical + 'RemoveComment' + G_vertical + 'html/client/_s_RemoveComment.html',
            '7' + G_vertical + '1' + G_vertical + 'UserHelpUrl' + G_vertical + 'html/client/_s_UserHelpUrl.html',
            '7' + G_vertical + '1' + G_vertical + 'EditorBodyEditable' + G_vertical + 'html/client/_s_EditorBodyEditable.html',
            '7' + G_vertical + '1' + G_vertical + 'UseCorrectInOutdent' + G_vertical + 'html/client/_s_UseCorrectInOutdent.html',
            '7' + G_vertical + '1' + G_vertical + 'AutoDestroy' + G_vertical + 'html/client/_s_AutoDestroy.html',
            '7' + G_vertical + '1' + G_vertical + 'EncryptParam' + G_vertical + 'html/client/_s_EncryptParam.html',
            '7' + G_vertical + '1' + G_vertical + 'DevelopLangage' + G_vertical + 'html/client/_s_DevelopLangage.html',
            '7' + G_vertical + '1' + G_vertical + 'HandlerUrl' + G_vertical + 'html/client/_s_HandlerUrl.html',
            '7' + G_vertical + '1' + G_vertical + 'HandlerUrlSaveForNotes' + G_vertical + 'html/client/_s_HandlerUrlSaveForNotes.html',
            '7' + G_vertical + '1' + G_vertical + 'SaveFolderNameRule' + G_vertical + 'html/client/_s_SaveFolderNameRule.html',
            '7' + G_vertical + '1' + G_vertical + 'SaveFileFolderNameRule' + G_vertical + 'html/client/_s_SaveFileFolderNameRule.html',
            '7' + G_vertical + '1' + G_vertical + 'SaveFileNameRule' + G_vertical + 'html/client/_s_SaveFileNameRule.html',
            '7' + G_vertical + '1' + G_vertical + 'ImageConvertFormat' + G_vertical + 'html/client/_s_ImageConvertFormat.html',
            '7' + G_vertical + '1' + G_vertical + 'ImageConvertWidth' + G_vertical + 'html/client/_s_ImageConvertWidth.html',
            '7' + G_vertical + '1' + G_vertical + 'ImageConvertHeight' + G_vertical + 'html/client/_s_ImageConvertHeight.html',
            '7' + G_vertical + '1' + G_vertical + 'ImageAutoFit' + G_vertical + 'html/client/_s_ImageAutoFit.html',
            '7' + G_vertical + '1' + G_vertical + 'AllowMediaFileType' + G_vertical + 'html/client/_s_AllowMediaFileType.html',
            '7' + G_vertical + '1' + G_vertical + 'AllowImageFileType' + G_vertical + 'html/client/_s_AllowImageFileType.html',
            '7' + G_vertical + '1' + G_vertical + 'AllowFlashFileType' + G_vertical + 'html/client/_s_AllowFlashFileType.html',
            '7' + G_vertical + '1' + G_vertical + 'AllowInsertFileType' + G_vertical + 'html/client/_s_AllowInsertFileType.html',
            '7' + G_vertical + '1' + G_vertical + 'AttachFileImage' + G_vertical + 'html/client/_s_AttachFileImage.html',
            '7' + G_vertical + '1' + G_vertical + 'EmptyTagRemove' + G_vertical + 'html/client/_s_EmptyTagRemove.html',
            '7' + G_vertical + '1' + G_vertical + 'PasteToImage' + G_vertical + 'html/client/_s_PasteToImage.html',
            '7' + G_vertical + '1' + G_vertical + 'ForbiddenWord' + G_vertical + 'html/client/_s_ForbiddenWord.html',
            '7' + G_vertical + '1' + G_vertical + '[Agent]MimeUse' + G_vertical + 'html/client/_s_MimeUse.html',
            '7' + G_vertical + '1' + G_vertical + '[Agent]MimeCharset' + G_vertical + 'html/client/_s_MimeCharset.html',
            '7' + G_vertical + '1' + G_vertical + '[Agent]MimeConentEncodingType' + G_vertical + 'html/client/_s_MimeConentEncodingType.html',
            '7' + G_vertical + '1' + G_vertical + '[Agent]MimeFileTypeFilter' + G_vertical + 'html/client/_s_MimeFileTypeFilter.html',
            '7' + G_vertical + '1' + G_vertical + '[Agent]MimeLocalOnly' + G_vertical + 'html/client/_s_MimeLocalOnly.html',
            '7' + G_vertical + '1' + G_vertical + '[Agent]MimeRemoveHeader' + G_vertical + 'html/client/_s_MimeRemoveHeader.html',
            '7' + G_vertical + '1' + G_vertical + '[Agent]PrintPreview' + G_vertical + 'html/client/_s_PrintPreview.html',
            '7' + G_vertical + '1' + G_vertical + '[Agent]PrintHeader' + G_vertical + 'html/client/_s_PrintHeader.html',
            '7' + G_vertical + '1' + G_vertical + '[Agent]PrintFooter' + G_vertical + 'html/client/_s_PrintFooter.html',
            '7' + G_vertical + '1' + G_vertical + '[Agent]TrustSites' + G_vertical + 'html/client/_s_TrustSites.html',
            // SDK 추가 by leeseoeun
            '7' + G_vertical + '1' + G_vertical + 'XssCheckAttribute' + G_vertical + 'html/client/_s_XssCheckAttribute.html',
            '7' + G_vertical + '1' + G_vertical + 'XssAllowUrl' + G_vertical + 'html/client/_s_XssAllowUrl.html',
            '7' + G_vertical + '1' + G_vertical + 'Figure' + G_vertical + 'html/client/_s_Figure.html',
            '7' + G_vertical + '1' + G_vertical + '[Agent]PrintMarginltrb' + G_vertical + 'html/client/_s_PrintMarginltrb.html',
            '7' + G_vertical + '1' + G_vertical + '[Agent]UseFormPrint' + G_vertical + 'html/client/_s_UseFormPrint.html',
            '7' + G_vertical + '1' + G_vertical + 'AutoList' + G_vertical + 'html/client/_s_AutoList.html',
            '7' + G_vertical + '1' + G_vertical + 'WordCount' + G_vertical + 'html/client/_s_WordCount.html',
            '7' + G_vertical + '1' + G_vertical + 'UseFontFamilyKeyin' + G_vertical + 'html/client/_s_UseFontFamilyKeyin.html',
            '7' + G_vertical + '1' + G_vertical + 'UseFontSizeKeyin' + G_vertical + 'html/client/_s_UseFontSizeKeyin.html',
            '7' + G_vertical + '1' + G_vertical + 'UseLineHeightKeyin' + G_vertical + 'html/client/_s_UseLineHeightKeyin.html',
            '7' + G_vertical + '1' + G_vertical + 'UseFontSizeIncDec' + G_vertical + 'html/client/_s_UseFontSizeIncDec.html',
            '7' + G_vertical + '1' + G_vertical + 'UseLineHeightIncDec' + G_vertical + 'html/client/_s_UseLineHeightIncDec.html',
            '7' + G_vertical + '1' + G_vertical + 'UseLetterSpacingIncDec' + G_vertical + 'html/client/_s_UseLetterSpacingIncDec.html',
            '7' + G_vertical + '1' + G_vertical + 'PersonalData' + G_vertical + 'html/client/_s_PersonalData.html',
            '7' + G_vertical + '1' + G_vertical + 'RemoveStyle' + G_vertical + 'html/client/_s_RemoveStyle.html',
            '7' + G_vertical + '1' + G_vertical + 'AllowUnableToDeleteMsg' + G_vertical + 'html/client/_s_AllowUnableToDeleteMsg.html',
            '7' + G_vertical + '1' + G_vertical + 'FontSizeIncDecGap' + G_vertical + 'html/client/_s_FontSizeIncDecGap.html',
            '7' + G_vertical + '1' + G_vertical + 'LineHeightIncDecGap' + G_vertical + 'html/client/_s_LineHeightIncDecGap.html',
            '7' + G_vertical + '1' + G_vertical + 'LetterSpacingIncDecGap' + G_vertical + 'html/client/_s_LetterSpacingIncDecGap.html',
            '7' + G_vertical + '1' + G_vertical + 'DefaultFontMargin' + G_vertical + 'html/client/_s_DefaultFontMargin.html',
            '7' + G_vertical + '1' + G_vertical + 'AllowImgSize' + G_vertical + 'html/client/_s_AllowImgSize.html',
            '7' + G_vertical + '1' + G_vertical + 'PluginToolEx' + G_vertical + 'html/client/_s_PluginToolEx.html',
            '7' + G_vertical + '1' + G_vertical + 'AutoUrlDetect' + G_vertical + 'html/client/_s_AutoUrlDetect.html',
            '7' + G_vertical + '1' + G_vertical + 'OfficeLineFix' + G_vertical + 'html/client/_s_OfficeLineFix.html',
            '7' + G_vertical + '1' + G_vertical + 'DefaultImemode' + G_vertical + 'html/client/_s_DefaultImemode.html',
            '7' + G_vertical + '1' + G_vertical + 'DisableTabletap' + G_vertical + 'html/client/_s_DisableTabletap.html',
            '7' + G_vertical + '1' + G_vertical + 'UseNoncreationAreaBackground' + G_vertical + 'html/client/_s_UseNoncreationAreaBackground.html',
            '7' + G_vertical + '1' + G_vertical + 'DisableKeydown' + G_vertical + 'html/client/_s_DisableKeydown.html',
            '7' + G_vertical + '1' + G_vertical + 'DragResizeMovable' + G_vertical + 'html/client/_s_DragResizeMovable.html',
            '7' + G_vertical + '1' + G_vertical + 'DisplayFontFamilyList' + G_vertical + 'html/client/_s_DisplayFontFamilyList.html',
            '7' + G_vertical + '1' + G_vertical + 'ZoomList' + G_vertical + 'html/client/_s_ZoomList.html',
            '7' + G_vertical + '1' + G_vertical + 'LetterSpacing' + G_vertical + 'html/client/_s_LetterSpacing.html',
            // '7' + G_vertical + '1' + G_vertical + 'DropZoneTransparency' + G_vertical + 'html/client/_s_DropZoneTransparency.html',
            '7' + G_vertical + '1' + G_vertical + '[Agent]AgentTempRootDirectory' + G_vertical + 'html/client/_s_AgentTempRootDirectory.html',
            '7' + G_vertical + '1' + G_vertical + 'ColorPickerInputKind' + G_vertical + 'html/client/_s_ColorPickerInputKind.html',
            '7' + G_vertical + '1' + G_vertical + 'CellSelectionMode' + G_vertical + 'html/client/_s_CellSelectionMode.html',
            '7' + G_vertical + '1' + G_vertical + 'EventForPasteImage' + G_vertical + 'html/client/_s_EventForPasteImage.html',
            '7' + G_vertical + '1' + G_vertical + 'RemoveColgroup' + G_vertical + 'html/client/_s_RemoveColgroup.html',
            '7' + G_vertical + '1' + G_vertical + 'UseHtmlProcessByWorker' + G_vertical + 'html/client/_s_UseHtmlProcessByWorker.html',
            '7' + G_vertical + '1' + G_vertical + 'UnOrderListDefaultClass' + G_vertical + 'html/client/_s_UnOrderListDefaultClass.html',
            '7' + G_vertical + '1' + G_vertical + 'EmoticonUrl' + G_vertical + 'html/client/_s_EmoticonUrl.html',
            '7' + G_vertical + '1' + G_vertical + 'SetAutoSave' + G_vertical + 'html/client/_s_SetAutoSave.html',
            '7' + G_vertical + '1' + G_vertical + 'InsertCarriageReturn' + G_vertical + 'html/client/_s_InsertCarriageReturn.html',
            '7' + G_vertical + '1' + G_vertical + 'ReturnEvent' + G_vertical + 'html/client/_s_ReturnEvent.html',
            '7' + G_vertical + '1' + G_vertical + 'Ie11BugFixed' + G_vertical + 'html/client/_s_Ie11BugFixed.html',
            '7' + G_vertical + '1' + G_vertical + 'IeBugFixed' + G_vertical + 'html/client/_s_IeBugFixed.html',
            '7' + G_vertical + '1' + G_vertical + 'ReplaceEmptyTagWithSpace' + G_vertical + 'html/client/_s_ReplaceEmptyTagWithSpace.html',
            '7' + G_vertical + '1' + G_vertical + 'ImageCustomPropertyDelimiter' + G_vertical + 'html/client/_s_ImageCustomPropertyDelimiter.html',
            '7' + G_vertical + '1' + G_vertical + '[AD]ManagerMode' + G_vertical + 'html/client/_s_ManagerMode.html',
            '7' + G_vertical + '1' + G_vertical + '[AD]EventList' + G_vertical + 'html/client/_s_EventList.html',
            '7' + G_vertical + '1' + G_vertical + '[AD]AdminTableLock' + G_vertical + 'html/client/_s_AdminTableLock.html',
            '7' + G_vertical + '1' + G_vertical + 'UserTableLock' + G_vertical + 'html/client/_s_UserTableLock.html',
            '7' + G_vertical + '1' + G_vertical + '[Agent]OpenDocument' + G_vertical + 'html/client/_s_OpenDocument.html',
            '7' + G_vertical + '1' + G_vertical + 'RemoveLastBrTag' + G_vertical + 'html/client/_s_RemoveLastBrTag.html',
            '7' + G_vertical + '1' + G_vertical + 'EditorBodyEditableMode' + G_vertical + 'html/client/_s_EditorBodyEditableMode.html',
            '7' + G_vertical + '1' + G_vertical + 'DocTitle' + G_vertical + 'html/client/_s_DocTitle.html',
            '7' + G_vertical + '1' + G_vertical + 'UseGetHtmlToLowerCase' + G_vertical + 'html/client/_s_UseGetHtmlToLowerCase.html',
            '7' + G_vertical + '1' + G_vertical + 'ApplyStyleEmptyTag' + G_vertical + 'html/client/_s_ApplyStyleEmptyTag.html',
            '7' + G_vertical + '1' + G_vertical + 'InitFocus' + G_vertical + 'html/client/_s_InitFocus.html',
            '7' + G_vertical + '1' + G_vertical + 'EmptyTagRemoveInSetapi' + G_vertical + 'html/client/_s_EmptyTagRemoveInSetapi.html',
            '7' + G_vertical + '1' + G_vertical + 'ReplaceEmptySpanTagInSetapi' + G_vertical + 'html/client/_s_ReplaceEmptySpanTagInSetapi.html',
            '7' + G_vertical + '1' + G_vertical + 'RemoveMsoClass' + G_vertical + 'html/client/_s_RemoveMsoClass.html',
            '7' + G_vertical + '1' + G_vertical + 'TableTemplateListUrl' + G_vertical + 'html/client/_s_TableTemplateListUrl.html',
            '7' + G_vertical + '1' + G_vertical + 'UseReplaceImage' + G_vertical + 'html/client/_s_UseReplaceImage.html',
            '7' + G_vertical + '1' + G_vertical + 'RemoveEmptyTag' + G_vertical + 'html/client/_s_RemoveEmptyTag.html',
            '7' + G_vertical + '1' + G_vertical + 'ButtonText001' + G_vertical + 'html/client/_s_ButtonText001.html',
            '7' + G_vertical + '1' + G_vertical + 'DisableInsertImage' + G_vertical + 'html/client/_s_DisableInsertImage.html',
            '7' + G_vertical + '1' + G_vertical + 'PasteImageBase64' + G_vertical + 'html/client/_s_PasteImageBase64.html',
            '7' + G_vertical + '1' + G_vertical + 'UploadMethod' + G_vertical + 'html/client/_s_UploadMethod.html',
            '7' + G_vertical + '1' + G_vertical + 'ImageAutoConvert' + G_vertical + 'html/client/_s_ImageAutoConvert.html',
            '7' + G_vertical + '1' + G_vertical + 'AllowVideoFileType' + G_vertical + 'html/client/_s_AllowVideoFileType.html',
            '7' + G_vertical + '1' + G_vertical + 'InoutdentDefaultSize' + G_vertical + 'html/client/_s_InoutdentDefaultSize.html',
            '7' + G_vertical + '1' + G_vertical + 'Hyperlink' + G_vertical + 'html/client/_s_Hyperlink.html',
            '7' + G_vertical + '1' + G_vertical + 'ImgDefaultMargin' + G_vertical + 'html/client/_s_ImgDefaultMargin.html',
            '7' + G_vertical + '1' + G_vertical + 'WebFontCssUrl' + G_vertical + 'html/client/_s_WebFontCssUrl.html',
            '7' + G_vertical + '1' + G_vertical + 'UserJsUrl' + G_vertical + 'html/client/_s_UserJsUrl.html',
            '7' + G_vertical + '1' + G_vertical + 'AllowLinkMediaCaption' + G_vertical + 'html/client/_s_AllowLinkMediaCaption.html',
            '7' + G_vertical + '1' + G_vertical + 'StatusBarItemTitle' + G_vertical + 'html/client/_s_StatusBarItemTitle.html',
            '7' + G_vertical + '1' + G_vertical + '[Agent]SaveFileNameRuleEx' + G_vertical + 'html/client/_s_SaveFileNameRuleEx.html',
            '7' + G_vertical + '1' + G_vertical + 'UseAutoToolBar' + G_vertical + 'html/client/_s_UseAutoToolBar.html',
            '7' + G_vertical + '1' + G_vertical + 'MiniPhotoEditor' + G_vertical + 'html/client/_s_MiniPhotoEditor.html',
            '7' + G_vertical + '1' + G_vertical + 'LoadedEvent' + G_vertical + 'html/client/_s_LoadedEvent.html',
            '7' + G_vertical + '1' + G_vertical + 'DirectEditHtmlUrl' + G_vertical + 'html/client/_s_DirectEditHtmlUrl.html',
            '7' + G_vertical + '1' + G_vertical + 'UserColorPicker' + G_vertical + 'html/client/_s_UserColorPicker.html',
            '7' + G_vertical + '1' + G_vertical + '[Agent]UseAutoInstall' + G_vertical + 'html/client/_s_UseAutoInstall.html',
            '7' + G_vertical + '1' + G_vertical + 'BrowserSpellCheck' + G_vertical + 'html/client/_s_BrowserSpellCheck.html',
            '7' + G_vertical + '1' + G_vertical + 'UsePersonalSetting' + G_vertical + 'html/client/_s_UsePersonalSetting.html',
            '7' + G_vertical + '1' + G_vertical + 'InsertMultiImage' + G_vertical + 'html/client/_s_InsertMultiImage.html',
            '7' + G_vertical + '1' + G_vertical + 'ImageContinueInsertMaintainValue' + G_vertical + 'html/client/_s_ImageContinueInsertMaintainValue.html',
            '7' + G_vertical + '1' + G_vertical + 'UseLineBreak' + G_vertical + 'html/client/_s_UseLineBreak.html',
            '7' + G_vertical + '1' + G_vertical + 'UseTablePasteDialog' + G_vertical + 'html/client/_s_UseTablePasteDialog.html',
            '7' + G_vertical + '1' + G_vertical + 'KeepOriginalHtml' + G_vertical + 'html/client/_s_KeepOriginalHtml.html',
            '7' + G_vertical + '1' + G_vertical + 'UseEnterpriseMode' + G_vertical + 'html/client/_s_UseEnterpriseMode.html',
            '7' + G_vertical + '1' + G_vertical + 'DefaultBodySpace' + G_vertical + 'html/client/_s_DefaultBodySpace.html',
            '7' + G_vertical + '1' + G_vertical + 'PasteRemoveSpanAbsolute' + G_vertical + 'html/client/_s_PasteRemoveSpanAbsolute.html',
            '7' + G_vertical + '1' + G_vertical + 'PasteWhenTableIsLast' + G_vertical + 'html/client/_s_PasteWhenTableIsLast.html',
            '7' + G_vertical + '1' + G_vertical + 'CustomCssUrl' + G_vertical + 'html/client/_s_CustomCssUrl.html',
            '7' + G_vertical + '1' + G_vertical + 'HtmlprocessCustomText' + G_vertical + 'html/client/_s_HtmlprocessCustomText.html',
            '7' + G_vertical + '1' + G_vertical + 'RemoveImageInPasteExcel' + G_vertical + 'html/client/_s_RemoveImageInPasteExcel.html',
            '7' + G_vertical + '1' + G_vertical + 'RemoveTdStyleInPastePpt' + G_vertical + 'html/client/_s_RemoveTdStyleInPastePpt.html',
            '7' + G_vertical + '1' + G_vertical + 'AutoMoveInitFocus' + G_vertical + 'html/client/_s_AutoMoveInitFocus.html',
            '7' + G_vertical + '1' + G_vertical + 'ReplaceLineBreak' + G_vertical + 'html/client/_s_ReplaceLineBreak.html',
            '7' + G_vertical + '1' + G_vertical + 'AutoGrowMode' + G_vertical + 'html/client/_s_AutoGrowMode.html',
            '7' + G_vertical + '1' + G_vertical + 'AdjustCurrentColorInSetApi' + G_vertical + 'html/client/_s_AdjustCurrentColorInSetApi.html',
            '7' + G_vertical + '1' + G_vertical + 'AdjustTextIndentInPaste' + G_vertical + 'html/client/_s_AdjustTextIndentInPaste.html',
            '7' + G_vertical + '1' + G_vertical + 'RemoveCarriageReturnInTag' + G_vertical + 'html/client/_s_RemoveCarriageReturnInTag.html',
            '7' + G_vertical + '1' + G_vertical + 'RemoveLangAttribute' + G_vertical + 'html/client/_s_RemoveLangAttribute.html',
            '7' + G_vertical + '1' + G_vertical + 'Event.AfterChangeMode' + G_vertical + 'html/client/_s_Event.AfterChangeMode.html',
            '7' + G_vertical + '1' + G_vertical + 'Event.CreationComplete' + G_vertical + 'html/client/_s_Event.CreationComplete.html',
            '7' + G_vertical + '1' + G_vertical + 'Event.OnError' + G_vertical + 'html/client/_s_Event.OnError.html',
            '7' + G_vertical + '1' + G_vertical + 'Event.OnLanguageDefinition' + G_vertical + 'html/client/_s_Event.OnLanguageDefinition.html',
            '7' + G_vertical + '1' + G_vertical + 'Event.AfterPopupShow' + G_vertical + 'html/client/_s_Event.AfterPopupShow.html',
            '7' + G_vertical + '1' + G_vertical + '[Agent]Event.AgentInstall' + G_vertical + 'html/client/_s_Event.AgentInstall.html',
            '7' + G_vertical + '1' + G_vertical + 'Event.BeforeInsertUrl' + G_vertical + 'html/client/_s_Event.BeforeInsertUrl.html',
            '7' + G_vertical + '1' + G_vertical + 'Event.Mouse' + G_vertical + 'html/client/_s_Event.Mouse.html',
            '7' + G_vertical + '1' + G_vertical + 'Event.Command' + G_vertical + 'html/client/_s_Event.Command.html',
            '7' + G_vertical + '1' + G_vertical + 'Event.Key' + G_vertical + 'html/client/_s_Event.Key.html',
            '7' + G_vertical + '1' + G_vertical + 'Event.Resized' + G_vertical + 'html/client/_s_Event.Resized.html',
            '7' + G_vertical + '1' + G_vertical + '[Agent]Event.DocumentEditComplete' + G_vertical + 'html/client/_s_Event.DocumentEditComplete.html',
            '7' + G_vertical + '1' + G_vertical + 'Event.PasteImage' + G_vertical + 'html/client/_s_Event.PasteImage.html',
            '7' + G_vertical + '1' + G_vertical + 'Event.WordCount' + G_vertical + 'html/client/_s_Event.WordCount.html',
            '7' + G_vertical + '1' + G_vertical + 'Event.BeforePaste' + G_vertical + 'html/client/_s_Event.BeforePaste.html',
            '7' + G_vertical + '1' + G_vertical + 'Event.CustomAction' + G_vertical + 'html/client/_s_Event.CustomAction.html',
            '7' + G_vertical + '1' + G_vertical + 'Event.FullScreen' + G_vertical + 'html/client/_s_Event.FullScreen.html',
            '7' + G_vertical + '1' + G_vertical + 'Event.SetComplete' + G_vertical + 'html/client/_s_Event.SetComplete.html',
            '7' + G_vertical + '1' + G_vertical + 'Event.SetInsertComplete' + G_vertical + 'html/client/_s_Event.SetInsertComplete.html',
            '7' + G_vertical + '1' + G_vertical + '[Agent]Event.CloseInstallPopup' + G_vertical + 'html/client/_s_Event.CloseInstallPopup.html',
            '7' + G_vertical + '1' + G_vertical + 'Event.DialogLoaded' + G_vertical + 'html/client/_s_Event.DialogLoaded.html',
            '7' + G_vertical + '1' + G_vertical + 'Event.BeforeInsertHyperlink' + G_vertical + 'html/client/_s_Event.BeforeInsertHyperlink.html',
            '7' + G_vertical + '1' + G_vertical + 'Event.ApplyFontStyle' + G_vertical + 'html/client/_s_Event.ApplyFontStyle.html',
            '7' + G_vertical + '1' + G_vertical + 'AdjustCellSizeAfterDeleteCell' + G_vertical + 'html/client/_s_AdjustCellSizeAfterDeleteCell.html',
            '7' + G_vertical + '1' + G_vertical + 'RemoveDummyDivInHwpPaste' + G_vertical + 'html/client/_s_RemoveDummyDivInHwpPaste.html',
            '7' + G_vertical + '1' + G_vertical + 'PasteToTextMode' + G_vertical + 'html/client/_s_PasteToTextMode.html',
            '7' + G_vertical + '1' + G_vertical + 'AdjustCursorInRelative' + G_vertical + 'html/client/_s_AdjustCursorInRelative.html',
            '7' + G_vertical + '1' + G_vertical + 'MoveStyleTagToHead' + G_vertical + 'html/client/_s_MoveStyleTagToHead.html',
            '7' + G_vertical + '1' + G_vertical + 'RemoveDummyTag' + G_vertical + 'html/client/_s_RemoveDummyTag.html',
            '7' + G_vertical + '1' + G_vertical + 'Placeholder' + G_vertical + 'html/client/_s_Placeholder.html',
            '7' + G_vertical + '1' + G_vertical + 'IgnoreDifferentEditorName' + G_vertical + 'html/client/_s_IgnoreDifferentEditorName.html',
            '7' + G_vertical + '1' + G_vertical + 'PasteTextLineBreak' + G_vertical + 'html/client/_s_PasteTextLineBreak.html',
            '7' + G_vertical + '1' + G_vertical + 'ReplaceMsoStyle' + G_vertical + 'html/client/_s_ReplaceMsoStyle.html',
            '7' + G_vertical + '1' + G_vertical + 'RemoveFontType' + G_vertical + 'html/client/_s_RemoveFontType.html',
            '7' + G_vertical + '1' + G_vertical + 'ForceSaveAsServer' + G_vertical + 'html/client/_s_ForceSaveAsServer.html',
            '7' + G_vertical + '1' + G_vertical + 'Event.SetForbiddenWordComplete' + G_vertical + 'html/client/_s_Event.SetForbiddenWordComplete.html',
            '7' + G_vertical + '1' + G_vertical + 'CleanNestedTagOptions' + G_vertical + 'html/client/_s_CleanNestedTagOptions.html',
            '7' + G_vertical + '1' + G_vertical + 'UnderlineAndStrikeThroughMode' + G_vertical + 'html/client/_s_UnderlineAndStrikeThroughMode.html',
            '7' + G_vertical + '1' + G_vertical + 'ReplaceRgbToHex' + G_vertical + 'html/client/_s_ReplaceRgbToHex.html',
            '7' + G_vertical + '1' + G_vertical + 'TableDefaultCellPadding' + G_vertical + 'html/client/_s_TableDefaultCellPadding.html',
            '7' + G_vertical + '1' + G_vertical + 'KeepImageOriginalSizeAutoCheck' + G_vertical + 'html/client/_s_KeepImageOriginalSizeAutoCheck.html',
            '7' + G_vertical + '1' + G_vertical + 'UseFindReplaceShortcut' + G_vertical + 'html/client/_s_UseFindReplaceShortcut.html',
            '7' + G_vertical + '1' + G_vertical + 'UsePasteToolbarAndContext' + G_vertical + 'html/client/_s_UsePasteToolbarAndContext.html',
            '7' + G_vertical + '1' + G_vertical + 'DisableErrorConfirmMessage' + G_vertical + 'html/client/_s_DisableErrorConfirmMessage.html',
            '7' + G_vertical + '1' + G_vertical + 'DeleteTableUsingKey' + G_vertical + 'html/client/_s_DeleteTableUsingKey.html',
            '7' + G_vertical + '1' + G_vertical + 'ValidateUrlLink' + G_vertical + 'html/client/_s_ValidateUrlLink.html',
            '7' + G_vertical + '1' + G_vertical + 'ImageQuality' + G_vertical + 'html/client/_s_ImageQuality.html',
            '7' + G_vertical + '1' + G_vertical + 'Compatibility' + G_vertical + 'html/client/_s_Compatibility.html',
            '7' + G_vertical + '1' + G_vertical + 'InsertSourceTagInVideo' + G_vertical + 'html/client/_s_InsertSourceTagInVideo.html',
            '7' + G_vertical + '1' + G_vertical + 'WidthFix' + G_vertical + 'html/client/_s_WidthFix.html',
            '7' + G_vertical + '1' + G_vertical + 'DisableUnnecessaryKeyEvt' + G_vertical + 'html/client/_s_DisableUnnecessaryKeyEvt.html',
            '7' + G_vertical + '1' + G_vertical + 'EditingAreaBgColor' + G_vertical + 'html/client/_s_EditingAreaBgColor.html'],
            ['7' + G_vertical + '1' + G_vertical + 'RAONKEditor' + G_vertical + 'html/client/_m_RAONKEditor.html',
            '7' + G_vertical + '1' + G_vertical + 'GetEditor' + G_vertical + 'html/client/_m_getEditor.html',
            '7' + G_vertical + '1' + G_vertical + 'SetEditor' + G_vertical + 'html/client/_m_setEditor.html',
            '7' + G_vertical + '1' + G_vertical + 'GetUserRuntimeMode' + G_vertical + 'html/client/_m_getUserRuntimeMode.html',
            '7' + G_vertical + '1' + G_vertical + 'GetDom' + G_vertical + 'html/client/_m_getDom.html',
            '7' + G_vertical + '1' + G_vertical + 'GetBodyDom' + G_vertical + 'html/client/_m_getBodyDom.html',
            '7' + G_vertical + '1' + G_vertical + 'SetHtmlContents' + G_vertical + 'html/client/_m_setHtmlContents.html',
            '7' + G_vertical + '1' + G_vertical + 'SetHtmlContentsEw' + G_vertical + 'html/client/_m_setHtmlContentsEw.html',
            '7' + G_vertical + '1' + G_vertical + 'SetHtmlValueExWithDocType' + G_vertical + 'html/client/_m_setHtmlValueExWithDocType.html',
            '7' + G_vertical + '1' + G_vertical + 'SetHtmlValueEx' + G_vertical + 'html/client/_m_setHtmlValueEx.html',
            '7' + G_vertical + '1' + G_vertical + 'SetHtmlValue' + G_vertical + 'html/client/_m_setHtmlValue.html',
            '7' + G_vertical + '1' + G_vertical + 'SetBodyValueEx' + G_vertical + 'html/client/_m_setBodyValueEx.html',
            //'7' + G_vertical + '1' + G_vertical + 'SetBodyValueExLikeDiv' + G_vertical + 'html/client/_m_setBodyValueExLikeDiv.html',
            '7' + G_vertical + '1' + G_vertical + 'SetBodyValue' + G_vertical + 'html/client/_m_setBodyValue.html',
            '7' + G_vertical + '1' + G_vertical + 'GetHtmlContents' + G_vertical + 'html/client/_m_getHtmlContents.html',
            '7' + G_vertical + '1' + G_vertical + 'SetInsertHTML' + G_vertical + 'html/client/_m_setInsertHTML.html',
            '7' + G_vertical + '1' + G_vertical + 'SetInsertHTMLEx' + G_vertical + 'html/client/_m_setInsertHTMLEx.html',
            '7' + G_vertical + '1' + G_vertical + 'SetInsertText' + G_vertical + 'html/client/_m_setInsertText.html',
            '7' + G_vertical + '1' + G_vertical + 'LoadHtmlValueExFromURL' + G_vertical + 'html/client/_m_loadHtmlValueExFromURL.html',
            '7' + G_vertical + '1' + G_vertical + 'GetImages' + G_vertical + 'html/client/_m_getImages.html',
            '7' + G_vertical + '1' + G_vertical + 'GetImagesEx' + G_vertical + 'html/client/_m_getImagesEx.html',
            '7' + G_vertical + '1' + G_vertical + 'GetContentsUrl' + G_vertical + 'html/client/_m_getContentsUrl.html',
            '7' + G_vertical + '1' + G_vertical + 'GetServerImages' + G_vertical + 'html/client/_m_getServerImages.html',
            '7' + G_vertical + '1' + G_vertical + 'GetDeletedImageUrl' + G_vertical + 'html/client/_m_getDeletedImageUrl.html',
            '7' + G_vertical + '1' + G_vertical + 'GetDeletedElementsUrl' + G_vertical + 'html/client/_m_getDeletedElementsUrl.html',
            '7' + G_vertical + '1' + G_vertical + 'AddUserCssUrl' + G_vertical + 'html/client/_m_addUserCssUrl.html',
            '7' + G_vertical + '1' + G_vertical + 'ClearUserCssUrl' + G_vertical + 'html/client/_m_clearUserCssUrl.html',
            '7' + G_vertical + '1' + G_vertical + 'SetUserCssText' + G_vertical + 'html/client/_m_setUserCssText.html',
            '7' + G_vertical + '1' + G_vertical + 'ClearUserCssText' + G_vertical + 'html/client/_m_clearUserCssText.html',
            '7' + G_vertical + '1' + G_vertical + 'SetSize' + G_vertical + 'html/client/_m_setSize.html',
            '7' + G_vertical + '1' + G_vertical + 'SetFocusToEditor' + G_vertical + 'html/client/_m_setFocusToEditor.html',
            '7' + G_vertical + '1' + G_vertical + 'SetNextTabElementId' + G_vertical + 'html/client/_m_setNextTabElementId.html',
            '7' + G_vertical + '1' + G_vertical + 'SetRulerPosition' + G_vertical + 'html/client/_m_setRulerPosition.html',
            '7' + G_vertical + '1' + G_vertical + 'SetEditorBodyEditable' + G_vertical + 'html/client/_m_setEditorBodyEditable.html',
            '7' + G_vertical + '1' + G_vertical + 'SetFullScreen' + G_vertical + 'html/client/_m_setFullScreen.html',
            '7' + G_vertical + '1' + G_vertical + 'IsEmpty' + G_vertical + 'html/client/_m_isEmpty.html',
            '7' + G_vertical + '1' + G_vertical + 'IsDirty' + G_vertical + 'html/client/_m_isDirty.html',
            '7' + G_vertical + '1' + G_vertical + 'SetDirty' + G_vertical + 'html/client/_m_setDirty.html',
            '7' + G_vertical + '1' + G_vertical + 'LoadAutoSaveHtml' + G_vertical + 'html/client/_m_loadAutoSaveHtml.html',
            '7' + G_vertical + '1' + G_vertical + 'GetAccessibility' + G_vertical + 'html/client/_m_getAccessibility.html',
            '7' + G_vertical + '1' + G_vertical + 'SetAccessibility' + G_vertical + 'html/client/_m_setAccessibility.html',
            '7' + G_vertical + '1' + G_vertical + 'GetAccessibilityValidation' + G_vertical + 'html/client/_m_getAccessibilityValidation.html',
            '7' + G_vertical + '1' + G_vertical + 'SetAccessibilityValidation' + G_vertical + 'html/client/_m_setAccessibilityValidation.html',
            '7' + G_vertical + '1' + G_vertical + 'SetEditorMode' + G_vertical + 'html/client/_m_setEditorMode.html',
            '7' + G_vertical + '1' + G_vertical + 'SetEditorBorder' + G_vertical + 'html/client/_m_setEditorBorder.html',
            '7' + G_vertical + '1' + G_vertical + 'SelectAll' + G_vertical + 'html/client/_m_selectAll.html',
            '7' + G_vertical + '1' + G_vertical + 'Show' + G_vertical + 'html/client/_m_show.html',
            '7' + G_vertical + '1' + G_vertical + 'Hidden' + G_vertical + 'html/client/_m_hidden.html',
            '7' + G_vertical + '1' + G_vertical + 'ShowTopMenu' + G_vertical + 'html/client/_m_showTopMenu.html',
            '7' + G_vertical + '1' + G_vertical + 'ShowToolbar' + G_vertical + 'html/client/_m_showToolbar.html',
            '7' + G_vertical + '1' + G_vertical + 'ShowStatusbar' + G_vertical + 'html/client/_m_showStatusbar.html',
            '7' + G_vertical + '1' + G_vertical + 'SetEditorChangeMode' + G_vertical + 'html/client/_m_setEditorChangeMode.html',
            '7' + G_vertical + '1' + G_vertical + '[Agent]EncodeMime' + G_vertical + 'html/client/_m_encodeMime.html',
            '7' + G_vertical + '1' + G_vertical + '[Agent]DecodeMime' + G_vertical + 'html/client/_m_decodeMime.html',
            '7' + G_vertical + '1' + G_vertical + '[Agent]doSaveHTML' + G_vertical + 'html/client/_m_doSaveHTML.html',
            '7' + G_vertical + '1' + G_vertical + '[Agent]doPrint' + G_vertical + 'html/client/_m_doPrint.html',
            '7' + G_vertical + '1' + G_vertical + '[Agent]doPrintPreview' + G_vertical + 'html/client/_m_doPrintPreview.html',
            // SDK 추가 by leeseoeun
            '7' + G_vertical + '1' + G_vertical + 'GetEditorByName' + G_vertical + 'html/client/_m_getEditorByName.html',
            '7' + G_vertical + '1' + G_vertical + 'AddFormData' + G_vertical + 'html/client/_m_addFormData.html',
            '7' + G_vertical + '1' + G_vertical + 'GetVisibility' + G_vertical + 'html/client/_m_getVisibility.html',
            '7' + G_vertical + '1' + G_vertical + 'LoadHtmlValueExFromServerURL' + G_vertical + 'html/client/_m_loadHtmlValueExFromServerURL.html',
            '7' + G_vertical + '1' + G_vertical + 'SetDirectEditHtmlUrl' + G_vertical + 'html/client/_m_setDirectEditHtmlUrl.html',
            // '7' + G_vertical + '1' + G_vertical + 'GetBodyTextValue' + G_vertical + 'html/client/_m_getBodyTextValue.html',
            '7' + G_vertical + '1' + G_vertical + 'IsEmptyToString' + G_vertical + 'html/client/_m_isEmptyToString.html',
            '7' + G_vertical + '1' + G_vertical + 'SetInsertHTMLToObject' + G_vertical + 'html/client/_m_setInsertHTMLToObject.html',
            '7' + G_vertical + '1' + G_vertical + 'EditorPrint' + G_vertical + 'html/client/_m_editorPrint.html',
            '7' + G_vertical + '1' + G_vertical + 'AddWebFontCssUrl' + G_vertical + 'html/client/_m_addWebFontCssUrl.html',
            '7' + G_vertical + '1' + G_vertical + 'AddUserJsUrl' + G_vertical + 'html/client/_m_addUserJsUrl.html',
            '7' + G_vertical + '1' + G_vertical + 'ClearUserJsUrl' + G_vertical + 'html/client/_m_clearUserJsUrl.html',
            '7' + G_vertical + '1' + G_vertical + 'SetUserJsText' + G_vertical + 'html/client/_m_setUserJsText.html',
            '7' + G_vertical + '1' + G_vertical + 'ClearUserJsText' + G_vertical + 'html/client/_m_clearUserJsText.html',
            '7' + G_vertical + '1' + G_vertical + 'SetUserFontFamily' + G_vertical + 'html/client/_m_setUserFontFamily.html',
            '7' + G_vertical + '1' + G_vertical + 'SetUserFontSize' + G_vertical + 'html/client/_m_setUserFontSize.html',
            '7' + G_vertical + '1' + G_vertical + 'SetClassStyle' + G_vertical + 'html/client/_m_setClassStyle.html',
            '7' + G_vertical + '1' + G_vertical + 'RemoveClassStyle' + G_vertical + 'html/client/_m_removeClassStyle.html',
            '7' + G_vertical + '1' + G_vertical + 'SetFontFamily' + G_vertical + 'html/client/_m_setFontFamily.html',
            '7' + G_vertical + '1' + G_vertical + 'SetFontSize' + G_vertical + 'html/client/_m_setFontSize.html',
            '7' + G_vertical + '1' + G_vertical + 'SetFontFormat' + G_vertical + 'html/client/_m_setFontFormat.html',
            '7' + G_vertical + '1' + G_vertical + 'SetFontColor' + G_vertical + 'html/client/_m_setFontColor.html',
            '7' + G_vertical + '1' + G_vertical + 'SetFontBgColor' + G_vertical + 'html/client/_m_setFontBgColor.html',
            '7' + G_vertical + '1' + G_vertical + 'RemoveCss' + G_vertical + 'html/client/_m_removeCss.html',
            '7' + G_vertical + '1' + G_vertical + 'SetOriginalHtmlValue' + G_vertical + 'html/client/_m_setOriginalHtmlValue.html',
            // '7' + G_vertical + '1' + G_vertical + 'IsLoadedEditor' + G_vertical + 'html/client/_m_isLoadedEditor.html',
            '7' + G_vertical + '1' + G_vertical + 'IsLoadedEditorEx' + G_vertical + 'html/client/_m_isLoadedEditorEx.html',
            '7' + G_vertical + '1' + G_vertical + 'SetHeightForDisplay' + G_vertical + 'html/client/_m_setHeightForDisplay.html',
            '7' + G_vertical + '1' + G_vertical + 'SetFocusToObject' + G_vertical + 'html/client/_m_setFocusToObject.html',
            '7' + G_vertical + '1' + G_vertical + 'GetEditorSize' + G_vertical + 'html/client/_m_getEditorSize.html',
            '7' + G_vertical + '1' + G_vertical + 'GetEditorStyle' + G_vertical + 'html/client/_m_getEditorStyle.html',
            '7' + G_vertical + '1' + G_vertical + 'GetPersonalDataValidation' + G_vertical + 'html/client/_m_getPersonalDataValidation.html',
            '7' + G_vertical + '1' + G_vertical + 'SetPersonalDataValidation' + G_vertical + 'html/client/_m_setPersonalDataValidation.html',
            '7' + G_vertical + '1' + G_vertical + 'GetForbiddenWordValidation' + G_vertical + 'html/client/_m_getForbiddenWordValidation.html',
            '7' + G_vertical + '1' + G_vertical + 'SetForbiddenWordValidation' + G_vertical + 'html/client/_m_setForbiddenWordValidation.html',
            '7' + G_vertical + '1' + G_vertical + 'GetCaretElementEx' + G_vertical + 'html/client/_m_getCaretElementEx.html',
            '7' + G_vertical + '1' + G_vertical + 'SetLockCommand' + G_vertical + 'html/client/_m_setLockCommand.html',
            '7' + G_vertical + '1' + G_vertical + 'SetDomMode' + G_vertical + 'html/client/_m_setDomMode.html',
            '7' + G_vertical + '1' + G_vertical + 'GetDocumentDom' + G_vertical + 'html/client/_m_getDocumentDom.html',
            '7' + G_vertical + '1' + G_vertical + 'GetDocumentElementDom' + G_vertical + 'html/client/_m_getDocumentElementDom.html',
            '7' + G_vertical + '1' + G_vertical + 'GetValueInTextMode' + G_vertical + 'html/client/_m_getValueInTextMode.html',
            '7' + G_vertical + '1' + G_vertical + 'SetValueInTextMode' + G_vertical + 'html/client/_m_setValueInTextMode.html',
            '7' + G_vertical + '1' + G_vertical + 'ConvertHtmlToText' + G_vertical + 'html/client/_m_convertHtmlToText.html',
            '7' + G_vertical + '1' + G_vertical + 'GetElementById' + G_vertical + 'html/client/_m_getElementById.html',
            '7' + G_vertical + '1' + G_vertical + 'GetElementsByName' + G_vertical + 'html/client/_m_getElementsByName.html',
            '7' + G_vertical + '1' + G_vertical + 'GetElementsByTagName' + G_vertical + 'html/client/_m_getElementsByTagName.html',
            '7' + G_vertical + '1' + G_vertical + 'SetElementInnerHTML' + G_vertical + 'html/client/_m_setElementInnerHTML.html',
            '7' + G_vertical + '1' + G_vertical + 'SetElementInnerText' + G_vertical + 'html/client/_m_setElementInnerText.html',
            '7' + G_vertical + '1' + G_vertical + 'SetFormDataTextValue' + G_vertical + 'html/client/_m_setFormDataTextValue.html',
            '7' + G_vertical + '1' + G_vertical + 'SetCaretBeforeOrAfter' + G_vertical + 'html/client/_m_setCaretBeforeOrAfter.html',
            '7' + G_vertical + '1' + G_vertical + 'RemoveNode' + G_vertical + 'html/client/_m_removeNode.html',
            '7' + G_vertical + '1' + G_vertical + 'InputTextfield' + G_vertical + 'html/client/_m_inputTextfield.html',
            '7' + G_vertical + '1' + G_vertical + 'InputRadio' + G_vertical + 'html/client/_m_inputRadio.html',
            '7' + G_vertical + '1' + G_vertical + 'InputCheckbox' + G_vertical + 'html/client/_m_inputCheckbox.html',
            '7' + G_vertical + '1' + G_vertical + 'InputButton' + G_vertical + 'html/client/_m_inputButton.html',
            '7' + G_vertical + '1' + G_vertical + 'InputHiddenfield' + G_vertical + 'html/client/_m_inputHiddenfield.html',
            '7' + G_vertical + '1' + G_vertical + 'InputTextarea' + G_vertical + 'html/client/_m_inputTextarea.html',
            '7' + G_vertical + '1' + G_vertical + 'InputSelect' + G_vertical + 'html/client/_m_inputSelect.html',
            '7' + G_vertical + '1' + G_vertical + 'InputImagebutton' + G_vertical + 'html/client/_m_inputImagebutton.html',
            '7' + G_vertical + '1' + G_vertical + 'InsertInput' + G_vertical + 'html/client/_m_insertInput.html',
            '7' + G_vertical + '1' + G_vertical + 'InsertTextarea' + G_vertical + 'html/client/_m_insertTextarea.html',
            '7' + G_vertical + '1' + G_vertical + 'InsertSelect' + G_vertical + 'html/client/_m_insertSelect.html',
            '7' + G_vertical + '1' + G_vertical + 'InsertImg' + G_vertical + 'html/client/_m_insertImg.html',
            '7' + G_vertical + '1' + G_vertical + 'InsertDiv' + G_vertical + 'html/client/_m_insertDiv.html',
            '7' + G_vertical + '1' + G_vertical + 'ChangeImageData' + G_vertical + 'html/client/_m_changeImageData.html',
            '7' + G_vertical + '1' + G_vertical + 'GetSelectedCell' + G_vertical + 'html/client/_m_getSelectedCell.html',
            '7' + G_vertical + '1' + G_vertical + 'SetHorizontalLine' + G_vertical + 'html/client/_m_setHorizontalLine.html',
            '7' + G_vertical + '1' + G_vertical + 'Commands' + G_vertical + 'html/client/_m_commands.html',
            '7' + G_vertical + '1' + G_vertical + 'AddHtmlToSetValue' + G_vertical + 'html/client/_m_addHtmlToSetValue.html',
            '7' + G_vertical + '1' + G_vertical + 'GetFileSize' + G_vertical + 'html/client/_m_getFileSize.html',
            '7' + G_vertical + '1' + G_vertical + 'Destroy' + G_vertical + 'html/client/_m_destroy.html',
            '7' + G_vertical + '1' + G_vertical + 'GetByteLength' + G_vertical + 'html/client/_m_getByteLength.html',
            '7' + G_vertical + '1' + G_vertical + 'SetTableEdgeReduce' + G_vertical + 'html/client/_m_setTableEdgeReduce.html',
            '7' + G_vertical + '1' + G_vertical + 'GetCaretObject' + G_vertical + 'html/client/_m_getCaretObject.html',
            '7' + G_vertical + '1' + G_vertical + 'ReplaceBlocktoBr' + G_vertical + 'html/client/_m_replaceBlocktoBr.html',
            '7' + G_vertical + '1' + G_vertical + 'GetMetaTag' + G_vertical + 'html/client/_m_getMetaTag.html',
            '7' + G_vertical + '1' + G_vertical + 'SetMetaTag' + G_vertical + 'html/client/_m_setMetaTag.html',
            '7' + G_vertical + '1' + G_vertical + 'ConvertMMToPxUnit' + G_vertical + 'html/client/_m_convertMMToPxUnit.html',
            '7' + G_vertical + '1' + G_vertical + 'GetBodyTextLength' + G_vertical + 'html/client/_m_getBodyTextLength.html',
            '7' + G_vertical + '1' + G_vertical + 'GetBodyLineCount' + G_vertical + 'html/client/_m_getBodyLineCount.html',
            '7' + G_vertical + '1' + G_vertical + '[Agent]AddHttpHeader' + G_vertical + 'html/client/_m_addHttpHeader.html',
            '7' + G_vertical + '1' + G_vertical + 'ManuallyTempSave' + G_vertical + 'html/client/_m_manuallyTempSave.html',
            '7' + G_vertical + '1' + G_vertical + 'CloseDialogPopup' + G_vertical + 'html/client/_m_closeDialogPopup.html',
            '7' + G_vertical + '1' + G_vertical + 'FindWord' + G_vertical + 'html/client/_m_findWord.html',
            '7' + G_vertical + '1' + G_vertical + 'SetReadOnly' + G_vertical + 'html/client/_m_setReadOnly.html',
            '7' + G_vertical + '1' + G_vertical + 'SetCustomDisableIconList' + G_vertical + 'html/client/_m_setCustomDisableIconList.html',
            '7' + G_vertical + '1' + G_vertical + 'SetZoom' + G_vertical + 'html/client/_m_setZoom.html',
            '7' + G_vertical + '1' + G_vertical + 'ChangeToAgentMode' + G_vertical + 'html/client/_m_changeToAgentMode.html',
            '7' + G_vertical + '1' + G_vertical + 'SetEditorBodyWidth' + G_vertical + 'html/client/_m_setEditorBodyWidth.html',
            '7' + G_vertical + '1' + G_vertical + 'GetStatusBarMode' + G_vertical + 'html/client/_m_getStatusBarMode.html',
            '7' + G_vertical + '1' + G_vertical + 'GetSelectedContent' + G_vertical + 'html/client/_m_getSelectedContent.html',
            '7' + G_vertical + '1' + G_vertical + 'GetWrittenAreaSize' + G_vertical + 'html/client/_m_getWrittenAreaSize.html',
            '7' + G_vertical + '1' + G_vertical + 'GetFontStyleForCaret' + G_vertical + 'html/client/_m_getFontStyleForCaret.html',
            '7' + G_vertical + '1' + G_vertical + 'SetBodyTextValue' + G_vertical + 'html/client/_m_setBodyTextValue.html'],
            ['7' + G_vertical + '1' + G_vertical + 'AfterChangeMode' + G_vertical + 'html/client/_e_AfterChangeMode.html',
            '7' + G_vertical + '1' + G_vertical + 'BeforeInsertUrl' + G_vertical + 'html/client/_e_BeforeInsertUrl.html',
            '7' + G_vertical + '1' + G_vertical + 'BeforePaste' + G_vertical + 'html/client/_e_BeforePaste.html',
            '7' + G_vertical + '1' + G_vertical + 'CustomAction' + G_vertical + 'html/client/_e_CustomAction.html',
            '7' + G_vertical + '1' + G_vertical + 'EditorLoaded' + G_vertical + 'html/client/_e_EditorLoaded.html',
            '7' + G_vertical + '1' + G_vertical + 'FullScreen' + G_vertical + 'html/client/_e_FullScreen.html',
            '7' + G_vertical + '1' + G_vertical + 'OnLanguageDefinition' + G_vertical + 'html/client/_e_OnLanguageDefinition.html',
            '7' + G_vertical + '1' + G_vertical + 'OnError' + G_vertical + 'html/client/_e_OnError.html',
            '7' + G_vertical + '1' + G_vertical + 'Resized' + G_vertical + 'html/client/_e_Resized.html',
            // SDK 추가 by leeseoeun
            '7' + G_vertical + '1' + G_vertical + 'AfterPopupShow' + G_vertical + 'html/client/_e_AfterPopupShow.html',
            '7' + G_vertical + '1' + G_vertical + '[Agent]AgentInstall' + G_vertical + 'html/client/_e_AgentInstall.html',
            '7' + G_vertical + '1' + G_vertical + 'Mouse' + G_vertical + 'html/client/_e_Mouse.html',
            '7' + G_vertical + '1' + G_vertical + 'Command' + G_vertical + 'html/client/_e_Command.html',
            '7' + G_vertical + '1' + G_vertical + 'Key' + G_vertical + 'html/client/_e_Key.html',
            '7' + G_vertical + '1' + G_vertical + '[Agent]DocumentEditComplete' + G_vertical + 'html/client/_e_DocumentEditComplete.html',
            '7' + G_vertical + '1' + G_vertical + 'PasteImage' + G_vertical + 'html/client/_e_PasteImage.html',
            '7' + G_vertical + '1' + G_vertical + 'WordCount' + G_vertical + 'html/client/_e_WordCount.html',
            '7' + G_vertical + '1' + G_vertical + 'SetComplete' + G_vertical + 'html/client/_e_SetComplete.html',
            '7' + G_vertical + '1' + G_vertical + 'SetInsertComplete' + G_vertical + 'html/client/_e_SetInsertComplete.html',
            '7' + G_vertical + '1' + G_vertical + '[Agent]CloseInstallPopup' + G_vertical + 'html/client/_e_CloseInstallPopup.html',
            '7' + G_vertical + '1' + G_vertical + 'SetForbiddenWordComplete' + G_vertical + 'html/client/_e_SetForbiddenWordComplete.html',
            '7' + G_vertical + '1' + G_vertical + 'Drag' + G_vertical + 'html/client/_e_Drag.html',
            '7' + G_vertical + '1' + G_vertical + 'Focus' + G_vertical + 'html/client/_e_Focus.html',
            '7' + G_vertical + '1' + G_vertical + 'DialogLoaded' + G_vertical + 'html/client/_e_DialogLoaded.html',
            '7' + G_vertical + '1' + G_vertical + 'BeforeInsertHyperlink' + G_vertical + 'html/client/_e_BeforeInsertHyperlink.html',
            '7' + G_vertical + '1' + G_vertical + 'ApplyFontStyle' + G_vertical + 'html/client/_e_ApplyFontStyle.html']
    ],
    []
];

var arrSearchWordMenu = [
    [
        ['설치', '기본설정', '설치 및 기본설정']
    ],
    [
        [
            ['InitXml', 'XML파일 설정', '환경설정파일 설정', '설정파일 URL 설정'],
            ['InitServerXml', 'XML파일 암호화', '환경설정파일 암호화'],
            ['InitVisible', '화면 표시 여부', '화면 노출 여부'],
            ['EditorHolder', '특정 영역에 생성', '특정 객체에 생성'],
            ['IgnoreSameEditorName', '임의로 변경 생성'],
            ['License', '라이선스 설정', '라이센스 설정', '발급받은 키 설정'],
            ['RunTimes', '에디터 모드 설정', '웹표준모드', '플러그인모드'],
            ['Width', '에디터의 너비값을 설정'],
            ['Height', '에디터의 높이값을 설정'],
            ['SkinName', '에디터의 스킨 색상을 설정'],
            ['DefaultMessage', '에디터 디자인 영역에 기본으로 띄울 메세지를 설정'],
            ['DialogWindow', '에디터 팝업을 Iframe 외부 최 상단 페이지로 설정'],
            ['Doctype', '에디터 Doctype를 설정'],
            ['Lang', '에디터에 로드 할 언어를 설정'],
            ['EditorBorder', '에디터 전체영역 보더 라인을 보이거나 숨기는 설정'],
            ['ShowStatusBar', '에디터의 보기화면을 보이거나 숨기는 기능을 설정', '에디터의 statusBar를 보이거나 숨기는 기능을 설정'],//
            ['FileFieldID', '파일 업로드에 사용되는 File 태그의 name을 설정'],
            ['FirstLoadMessage', '에디터 생성 후 디자인영역에 텍스트, html 등을 띄움'],
            ['FocusInitObjId', '에디터 로드 후 설정한 아이디를 가진 객체에 포커스를 설정'],
            ['FormattingList', '에디터 기본 서식 메뉴에 노출할 서식 리스트를 설정'],
            ['NextTabElementId', 'Tab키를 입력하면 마지막 포커스가 설정한 아이디로 이동'],
            ['SetValueObjId', 'textarea에 ID 값을 설정하면 에디터 로드 후 textarea 내용이 에디터에 세팅'],
            ['TabIndexObjId', '에디터 로드 후 div 같은 객체에 포커스를 주고 싶을 때 tabindex를 0으로 설정할 id값'],
            ['UserFieldID,UserFieldValue', '파일 업로드에 사용되는 User 태그의 name과 value를 설정'],
            ['ZIndex', '에디터 배치 순서를 설정'],//
            ['XssUse', '에디터 XSS 방지를 설정'],
            ['XssAllowEventsAttribute', '객체의 Attribute에 설정된 이벤트들을 허용할지 여부를 설정'],
            ['XssRemoveTags', '에디터에 입력되면 삭제할 태그를 설정'],
            ['XssRemoveEvents', '에디터에 입력되면 삭제할 이벤트를 설정'],
            ['TopMenu', '에디터의 메뉴바에서 메뉴를 표시하거나 숨기는 기능을 설정'],
            ['ToolBar1', '에디터의 상단(기본) 툴바의 메뉴를 표시하거나 숨기는 기능을 설정'],
            ['ToolBar2', '에디터의 하단(서식) 툴바의 메뉴를 표시하거나 숨기는 기능을 설정'],
            ['StatusBar', '에디터의 보기화면(statusBar) 메뉴를 원하는 탭으로 표시하거나 숨기는 기능을 설정'],
            ['StatusBarInitMode', '에디터 로드 시 보여질 보기화면(statusBar) 모드를 설정'],
            ['RemoveItem', '에디터에서 미표시 하려는 command를 설정'],
            ['RemoveContextItem', '에디터 우클릭 메뉴에서 미표시 하려는 command를 설정'],
            ['FontSize', '에디터 폰트 크기 메뉴에 노출할 크기 리스트를 설정'],
            ['FontFamily', '에디터 글꼴 메뉴에 노출할 폰트 리스트를 설정'],
            ['UseLocalFont', '에디터 글꼴 메뉴에 사용자 로컬 폰트 추가 여부를 설정'],
            ['UseRecentlyFont', '에디터 글꼴 메뉴에 최근사용 폰트 추가 여부를 설정'],
            ['LineHeight', '에디터 줄간격 메뉴에 노출할 줄간격 리스트를 설정'],
            ['Encoding', '에디터 디자인 모드에 사용할 문자 인코딩(character encoding) 형태를 설정'],
            ['IeCompatible', 'IE 랜더링 모드를 설정'],//
            ['DefaultFontFamily', '에디터 로드 시 사용할 기본 폰트를 설정'],
            ['DefaultFontSize', '에디터 로드 시 사용할 기본 폰트 크기를 설정'],
            ['DefaultLineHeight', '에디터 로드 시 사용할 기본 줄간격과 줄간격 Mode를 설정'],
            ['ShowFontReal', '에디터가 사용되는 곳에서의 실제 폰트명 및 크기를 설정'],
            ['Accessibility', '웹 접근성 단계 설정 및 웹 접근성 검증 항목 중 검증 하고자 하는 항목들을 선택하여 설정'],
            ['ShowTopMenu', '에디터 메뉴바를 보이거나 숨기는 기능을 설정'],
            ['ShowToolBar', '에디터의 상단, 하단 툴바를 보이거나 숨기는 기능을 설정'],
            ['Grouping', '에디터 아이콘 툴바 그룹핑을 설정'],
            ['StatusBarLoading', '에디터의 보기화면에서 디자인, HTML 및 미리보기, TEXT 탭 변경 시 로딩 텍스트 노출 여부를 설정', '에디터의 statusBar에서 디자인, HTML 및 미리보기, TEXT 탭 변경 시 로딩 텍스트 노출 여부를 설정'],
            ['ShowDialogPosition', '에디터 다이얼로그창이 표시될 위치를 설정'],
            ['SourceViewtype', '에디터 소스보기에서 html소스 정렬 여부를 설정'],
            ['WrapPtagToSource', 'set API가 실행될 때 block 태그를 제외한 태그는 ptag로 감싸는 설정'],
            ['UserCssUrl', '사용자가 만든 css를 에디터 영역에 설정', 'css를 항상 포함할지 여부를 설정'],
            ['XhtmlValue', '소스보기나 에디터 영역의 html 소스를 가져올 때 xhtml 형식으로 가져옴'],
            ['ViewModeAutoWidth', 'View 모드 시 에디터 안의 내용만큼 자동으로 width가 늘어남'],
            ['ViewModeAutoHeight', 'View 모드 시 에디터 안의 내용만큼 자동으로 height가 늘어남'],
            ['SystemTitle', '다이얼로그창 상단 문구 변경 시 설정'],
            ['TableAutoAdjust', '에디터에서 표 작성 및 수정 시 width, height를 자동 보정으로 설정'],
            ['UseRuler', '가로 눈금자 표시 사용여부를 설정'],
            ['AutoBodyFit', '가로 눈금자 사용 설정 시, 눈금자 포인터 위치 값 기준으로 줄내림 사용여부를 설정'],
            ['ScrollOverflow', '에디터 영역에 스크롤바를 설정'],
            ['UseHorizontalLine', '세로 기준선 표시 사용여부를 설정'],
            ['ImageBaseUrl', '에디터 이미지 기본 주소를 설정'],
            ['ContextMenuDisable', '에디터 안에서 마우스 우클릭 시 메뉴 표시 사용여부를 설정'],
            ['EnterTag', 'Enter 키를 눌렀을 때 사용하게 될 태그를 설정'],
            ['FrameFullScreen', '프레임일 경우 풀 스크린 아이콘 버튼 사용여부를 설정'],
            ['ImgDefaultSize', '이미지 다이얼로그창의 너비, 높이 기본값을 설정'],
            ['AllowInoutdentText', '표 전체 들여쓰기, 내어쓰기 또는 표 안에 텍스트만 들여쓰기, 내어쓰기 사용 여부를 설정'],
            ['TableDefaultWidth', '생성될 테이블의 너비를 설정'],
            ['TableDefaultHeight', '생성될 테이블의 높이를 설정'],
            ['TableDefaultClass', '생성될 테이블의 Class Name을 설정'],
            ['TableDefaultInoutdent', '표 들여쓰기, 내어쓰기 시 사용될 px 값을 설정'],
            ['TableInitInoutdent', '표 생성 시 들여쓰기 할 기본 px값을 설정'],
            ['TableDefaultTdHeight', '표 생성 시 td 기본 높이의 px값을 설정'],
            ['TableRowMaxCount', '표 삽입 시 행의 최대값을 설정'],
            ['TableColMaxCount', '표 삽입 시 열의 최대값을 설정'],
            ['AdjustCursorInTable', '에디터에서 자체 처리된 크롬, 오페라, 사파리 브라우저에서의 방향키로 셀간 커서 이동 기능 사용여부를 설정'],
            ['TableClassList', '테이블에 지정 가능한 class명을 설정'],
            ['TableLineStyleList', '테이블에 선모양 기본 스타일을 설정'],
            ['TableNoResizeClass', '테이블에 resize 사용여부를 설정'],
            ['TableInsertDragSize', '표 삽입 메뉴의 최대 선택 개수 설정'],
            ['ShowLineForBorderNone', '테이블에 선이 없을 경우 점선 사용여부를 설정'],
            ['UseMouseTableInoutdent', '마우스로 테이블 들여쓰기,내어쓰기 사용여부를 설정'],
            ['SetDefaultStyle', '에디터 로드 시 기본 스타일이 없을 경우 body 영역에 에디터 스타일을 설정'],
            ['EditorTabDisable', '디자인영역에서 tab키 입력 시 공백 입력을 설정'],
            ['RemoveSpaceInTagname', '에디터 태그 이름에 공백을 제거'],
            ['ViewModeBrowserMenu', '에디터 View 모드에서 우클릭 시 브라우저 메뉴를 열리게 함'],
            ['ViewModeAllowCopy', '에디터 View 모드에서 키보드 단축키 ctrl+c 사용을 허용 설정'],
            ['DragAndDropAllow', '에디터 마우스 Drag&Drop으로 이미지를 추가'],
            ['FormListUrl', '에디터 템플릿 양식 파일경로를 설정'],
            ['Mode', '에디터의 작성영역 모드를 설정'],
            ['Resizebar', '에디터 높이를 조절 기능 사용여부를 설정'],
            ['DragResize', '에디터 또는 브라우저의 기본 리사이즈 사용여부를 설정'],
            ['RemoveComment', '에디터에 내용이 들어올 때 주석 삭제 여부를 설정'],
            ['UserHelpUrl', '에디터 사용자 매뉴얼 경로를 설정', '에디터 사용자 help 폴더 경로를 설정'],
            ['EditorBodyEditable', '디자인 영역에 작성 가능 여부를 설정'],
            ['UseCorrectInOutdent', '붙여넣기 시 p태그의 text-indent 또는 margin-left 값이 음수인 경우에 보정'],
            ['AutoDestroy', '에디터 언로드 시 메모리 해제 여부를 설정'],
            ['EncryptParam', '에디터에서 파일을 업로드 할 경우 파라미터 암호화에 대한 설정'],
            ['DevelopLangage', '개발 언어를 설정'],           
            ['HandlerUrl', '에디터 handler url을 설정'],
            ['HandlerUrlSaveForNotes', 'IBM NOTES서버에서 파일을 받을 경로를 설정'],            
            ['SaveFolderNameRule', 'ToSavePathUrl에 설정된 폴더 하위들의 저장 체계를 설정'],
            ['SaveFileFolderNameRule', 'ToSaveFilePathUrl에 설정된 폴더 하위들의 저장 체계를 설정'],
            ['SaveFileNameRule', '웹에서 등록된 파일의 이름을 지정하는 규칙'],
            ['ImageConvertFormat', '이미지 파일 업로드시 bmp 파일이나 디지털 카메라로 찍은 고용량 이미지의 크기를 줄이고자 할 때 사용하는 옵션'],
            ['ImageConvertWidth', '이미지파일 업로드 시 저장될 이미지의 너비를 변환 할 때 사용하는 옵션'],
            ['ImageConvertHeight', '이미지파일 업로드 시 저장될 이미지의 높이를 변환 할 때 사용하는 옵션'],
            ['ImageAutoFit', '이미지파일 업로드시 에디터 화면 너비에 맞게 표시할지 여부를 설정'],
            ['AllowMediaFileType', '동영상 삽입 시 허용할 확장자를 설정', 'MaxMediaFileSize', '동영상 삽입 시 허용할 최대 파일 사이즈를 제한'],
            ['AllowImageFileType', '이미지 삽입 시 허용할 확장자를 설정', 'MaxImageFileSize', '이미지 삽입 시 허용할 최대 파일 사이즈를 제한'],
            ['AllowFlashFileType', '플래시 삽입 시 허용할 확장자를 설정', 'MaxFlashFileSize', '플래시 삽입 시 허용할 최대 파일 사이즈를 제한'],
            ['AllowInsertFileType', '파일 삽입 시 허용할 확장자를 설정', 'MaxInsertFileSize', '파일 삽입 시 허용할 최대 파일 사이즈를 제한'],
            ['AttachFileImage', '파일 삽입 시 파일 관련 이미지 삽입을 설정'],
            ['EmptyTagRemove', '붙여넣기 할 때 P태그 안에 내용이 없으면 삭제처리'],
            ['PasteToImage', '에디터 마우스 우클릭 시 이미지로 붙여넣기 항목을 설정'],
            ['ForbiddenWord', '금지어 설정'],
            ['MimeUse', 'MIME 사용 여부를 설정'],
            ['MimeCharset', 'MIME에 사용할 문자 인코딩 형태를 설정', 'MIME에 사용할 문자 character encoding 형태를 설정'],
            ['MimeConentEncodingType', 'MIME 인코딩 시에 인코딩 방법을 설정'],
            ['MimeFileTypeFilter', 'MIME 인코딩 대상 파일을 설정'],
            ['MimeLocalOnly', 'MIME 인코딩 대상 파일 중에서 외부(Local PC가 아닌)도 포함 할 지를 설정'],
            ['MimeRemoveHeader', 'MIME 인코딩 생성 중에 Subject, DataData 및 X-Generator 값을 생성하지 않음'],
            ['PrintPreview', '인쇄 미리보기 기능 사용여부를 설정'],
            ['PrintHeader', '인쇄 시 Header 영역의 내용을 설정'],
            ['PrintFooter', '인쇄 시 Footer 영역의 내용을 설정'],
            ['TrustSites', '신뢰할 수 있는 사이트를 추가'],
            // SDK 추가 by leeseoeun
            ['XssCheckAttribute', '에디터의 XSS 방지시 체크할 속성 항목들을 설정'],
            ['XssAllowUrl', 'XSS를 허용할 URL을 설정'],
            ['Figure', '이미지 설명 넣기 사용 여부를 설정', 'figure 태그의 스타일을 설정', '이미지 설명 스타일을 설정', '이미지 기본 설명을 설정'],
            ['PrintMarginltrb', '인쇄 미리보기 페이지 상하좌우 여백을 설정'],
            ['UseFormPrint', '이미지 캡쳐 방식의 프린트 기능 사용여부를 설정'],
            ['AutoList', '자동 글머리 사용 여부를 설정'],
            ['WordCount', '글자 수 세기 사용 여부를 설정', ' 글자 수 제한 사용 여부를 설정', '제한할 글자 수를 설정', '제한할 행 수를 설정', '글자 수 세기 시 공백 포함 여부를 설정', '제한할 글자 수 초과 시 경고 창 사용 여부를 설정'],
            ['UseFontFamilyKeyin', 'tool bar의 글꼴 콤보박스에서 키보드 입력(문자입력) 하여 선택 가능하도록 설정'],
            ['UseFontSizeKeyin', 'tool bar의 글자 크기 콤보박스에서 키보드 입력(문자입력) 하여 선택 가능하도록 설정'],
            ['UseLineHeightKeyin', 'tool bar의 줄간격 콤보박스에서 키보드 입력(문자입력) 하여 선택 가능하도록 설정'],
            ['UseFontSizeIncDec', 'tool bar의 글자 크기 콤보박스옆 위아래 클릭도구를 사용여부를 설정'],
            ['UseLineHeightKeyin', 'tool bar의 줄간격 콤보박스옆 위아래 클릭도구를 사용여부를 설정'],
            ['UseLetterSpacingIncDec', 'tool bar의 글자 간격 콤보박스옆 위아래 클릭도구를 사용여부를 설정'],
            ['PersonalData', '개인 정보 검사 목록을 설정'],
            ['RemoveStyle', 'tag의 style 삭제 여부를 설정', 'style을 삭제할 tag를 설정', '삭제할 style을 설정'],
            ['AllowUnableToDeleteMsg', 'IE 브라우저에서 선택 영역 삭제시에 표의 일부가 들어있을때 알림메세지를 출력하도록 설정'],
            ['FontSizeIncDecGap', 'tool bar의 폰트크기 콤보박스옆 위아래 클릭도구를 사용시 증감정도를 설정'],
            ['LineHeightIncDecGap', 'tool bar의 줄 간격 콤보박스옆 위아래 클릭도구를 사용시 증감정도를 설정'],
            ['LetterSpacingIncDecGap', 'tool bar의 글자 간격 콤보박스옆 위아래 클릭도구를 사용시 증감정도를 설정'],
            ['DefaultFontMargin', '글꼴의 기본 위 여백을 설정', '글꼴의 기본 아래 여백을 설정'],
            ['AllowImgSize', '이미지 팝업 창에서 너비 및 높이 사용 여부를 설정'],
            ['PluginToolEx', '플러그인 도구 목록을 설정'],
            ['AutoUrlDetect', 'URL 입력 시 하이퍼링크 자동 생성 여부를 설정'],
            ['OfficeLineFix', 'PPT, EXCEL에서 html을 get 할 때 테두리 누락을 방지하도록 설정'],
            ['DefaultImemode', 'IE 브라우저 또는 쿼크 모드에서 에디터 로드시 한글입력으로 로드하도록 설정'],
            ['DisableTabletap', '테이블에서 Tab 키 사용 시 다음 셀로 이동하지 않음 여부를 설정'],
            ['UseNoncreationAreaBackground', '비 작성영역에 배경색 적용하도록 설정'],
            ['DisableKeydown', '에디터에 delete와 backspace를 제외한 모든 키입력을 return false(미적용) 하도록 설정'],
            ['DragResizeMovable', 'div 태그를 마우스로 움직임 여부를 설정'],
            ['DisplayFontFamilyList', '글꼴 메뉴의 글꼴 이름을 변경'],
            ['ZoomList', '배율 목록을 설정'],
            ['LetterSpacing', '글자 간격 목록을 설정', '글자 간격 가감 버튼 사용 여부를 설정'],
            // ['DropZoneTransparency', 'drop zone에 드래그 시 브라우저?의 투명도를 설정'],
            ['AgentTempRootDirectory', '파일 열기, 워드로 편집 시 사용할 루트 폴더를 설정'],
            ['ColorPickerInputKind', 'Color Picker(색상 선택 도구)의 입력 방법을 HEX 또는 RGB로 설정'],
            ['CellSelectionMode', '셀 셀렉션 시 텍스트 설렉션 가능 여부를 설정'],
            ['EventForPasteImage', '이미지 붙여넣기 이벤트 사용 여부를 설정합니다.', 'RAONKEDITOR_PasteImage(imgArr))'],
            ['RemoveColgroup', '붙여넣기 시 테이블의 colgroup을 유지/삭제 하도록 설정'],
            ['UseHtmlProcessByWorker', 'HTML 처리 사용시 Web Worker의 사용 여부를 설정', 'set API 사용시 Web Worker의 사용 여부를 설정'],
            ['UnOrderListDefaultClass', 'ul 태그의 기본 class를 설정', 'ol 태그의 기본 class를 설정'],
            ['EmoticonUrl', '이모티콘 리스트를 설정하는 파일경로를 설정 및 적용'],
            ['SetAutoSave', '자동저장에 관련된 설정'],
            ['InsertCarriageReturn', 'Get API 호출 시 p 태그 및 br 태그 뒤에 Carriage Return 삽입 여부를 설정'],
            ['ReturnEvent', '마우스 이벤트 사용 여부를 설정', '키보드 이벤트 사용 여부를 설정', '에디터 메뉴 이벤트 사용 여부를 설정', '포커스 이벤트 사용 여부를 설정', '드래그 이벤트 사용 여부를 설정'],
            ['Ie11BugFixed', 'ie11브라우저에서 에디터 사용 시 자소분리 현상 및 align 속성 보정 여부를 설정', 'get 할 때에 빈 span에 &nbsp;를 삽입 여부를 설정', 'ie11브라우저에서 에디터 사용중 표 align 속성을 제거 여부를 설정', 'Set API 사용에서 설정에 의해 align 속성이 제거되면 margin 값으로 대체 여부를 설정'],
            ['IeBugFixed', 'IE11브라우저에서 에디터 사용 시 HY폰트의 깨짐 현상을 보정 여부를 설정', 'IE11브라우저에서 에디터 사용 시 HY폰트를 삭제하거나 대체 여부를 설정', '테이블 align 제거와 관련하여 IE브라우저 및 타 브라우저가 동일하게 반영 여부를 설정'],
            ['ReplaceEmptyTagWithSpace', 'Get API 호출 시 태그가 비어 있는 경우 &nbsp;로 대체 여부를 설정'],
            ['ImageCustomPropertyDelimiter', '서버 Response 값 또는 이미지 url 삽입전 이벤트에서 설정할 프로퍼티 구분자를 설정'],
            ['ManagerMode', '관리자기능(Form 요소 관리 및 Table Locker)활성화 여부를 설정'],
            ['EventList', 'Form 요소들에 대하여 기본적으로 추가하고자 하는 이벤트명을 설정'],
            ['AdminTableLock', '관리자 테이블 또는 셀 잠금'],
            ['UserTableLock', '사용자 테이블 또는 셀 잠금'],
            ['OpenDocument', '파일 열기 기능을 설정'],
            ['RemoveLastBrTag', 'p 태그 안의 마지막에 br 태그가 있는 경우 br 태그 삭제 여부를 설정'],
            ['EditorBodyEditableMode', '디자인 영역의 작성 가능 여부가 불가능일 시 키 이벤트, 마우스 이벤트 발생 여부를 설정'],
            ['DocTitle', '에디터 작성 영역의 title을 설정'],
            ['UseGetHtmlToLowerCase', 'get API 사용 시 대문자인 tag명을 모두 소문자로 변경해주도록 설정'],
            ['ApplyStyleEmptyTag', '내용이 없는 빈 영역에도 서식 또는 스타일을 적용하도록 설정'],
            ['InitFocus', '에디터 생성 시 에디터에 포커스 주기 여부를 설정'],
            ['EmptyTagRemoveInSetapi', 'set API 사용시 비어있는 b, i, span 태그등을 삭제하도록 작업을 수행'],
            ['ReplaceEmptySpanTagInSetapi', 'set API사용시 빈 span태그에 보이지 않는 문자열의 삽입여부를 설정'],
            ['RemoveMsoClass', 'set API사용 또는 붙여넣기 시 Mso로 시작하는 클래스를 지울지에 대하여 설정'],
            ['TableTemplateListUrl', '사용자 표 템플릿 XML 경로를 설정', '기본 표 템플릿 사용 여부를 설정'],
            ['UseReplaceImage', '개체 삽입 시 대체 이미지 사용 여부를 설정'],
            ['RemoveEmptyTag', 'get API 사용시 내용이 없는 빈 태그 삭제 여부를 적용', 'set API 사용시에도 적용', '삭제 대신 태그안에 &nbsp;를 넣어주도록 설정'],
            ['ButtonText001', '이미지 보정 팝업 창의 이미지로 삽입 버튼 텍스트를 변경'],
            ['DisableInsertImage', '이미지 삽입을 비활성화'],
            ['PasteImageBase64', '이미지 붙여넣기 시 이미지를 base64 형태로 변환 여부를 설정', '이미지 붙여넣기 시 base64 형태 이미지 삭제 여부를 설정', 'HTML 모드에서 이미지 src를 base64 형태로 보기 여부를 설정'],
            ['UploadMethod', '이미지 업로드시 서버에 업로드 할지, 서버에 업로드 하지않고 이미지 태그 src에 base64로 추가할지 설정'],
            ['ImageAutoConvert', '붙여넣기 또는 드래그앤 드랍으로 이미지 삽입 시 설정된 width, height 값에 맞춰 이미지 크기의 비율 조정여부를 설정'],
            ['AllowVideoFileType', '비디오 태그 삽입 시 허용할 확장자를 설정', '비디오 태그 삽입 시 허용할 최대 파일 사이즈를 제한', '비디오 태그 삽입 팝업 창에서 썸네일 사용 여부를 설정'],
            ['InoutdentDefaultSize', '들여쓰기 및 내어쓰기의 기본 크기값을 설정'],
            ['Hyperlink', '하이퍼링크 팝업 창의 대상 프레임 목록을 설정', '하이퍼링크 팝업 창의 카테고리 목록을 설정', '하이퍼링크 팝업 창의 hyperlink 카테고리 목록을 설정 (프로토콜)', 'Ctrl + 하이퍼링크 클릭 시 해당 링크로 이동 여부를 설정'],
            ['ImgDefaultMargin', '이미지 다이얼로그에 입력될 기본 여백을 설정'],
            ['WebFontCssUrl', '에디터 작성 영역 및 글꼴 메뉴에 CSS를 적용', '해당 CSS를 항상 포함할지의 여부를 설정'],
            ['UserJsUrl', '에디터 디자인 영역에 사용자의 JS 파일을 적용'],
            ['AllowLinkMediaCaption', '외부 동영상 삽입 팝업 창에서 설명 사용 여부를 설정'],
            ['StatusBarItemTitle', 'status bar 모드의 title을 설정'],
            ['SaveFileNameRuleEx', '서버에 같은 이름의 파일이 있을 시 저장 규칙을 설정'],
            ['UseAutoToolBar', '모바일 환경에서 Auto toolbar 기능 사용여부를 설정'],
            ['MiniPhotoEditor', '미니 포토 에디터 관련 설정', '미니 사진 편집기 관련 설정'],
            ['LoadedEvent', '에디터 로드 시 발생하는 callback 이벤트를 설정'],
            ['DirectEditHtmlUrl', '에디터 작성 영역에 HTML 페이지를 삽입'],
            ['UserColorPicker', '사용자 Color Picker(색상 선택 도구)를 설정'],
            ['UseAutoInstall', 'agent 미설치 시 agent 파일 자동 다운로드 여부를 설정'],
            ['BrowserSpellCheck', '브라우저 맞춤법 검사 사용 여부를 설정'],
            ['UsePersonalSetting', '개인화 기능 사용 여부를 설정', '기본 글꼴 직접 입력 사용 여부를 설정', '기본 글자 크기 직접 입력 사용 여부를 설정', '기본 줄 간격 직접 입력 사용 여부를 설정'],
            ['InsertMultiImage', '다중 이미지 삽입 사용 여부를 설정'],
            ['ImageContinueInsertMaintainValue', '이미지 계속 삽입 체크 시 값 유지 체크 여부를 설정'],
            ['UseLineBreakLineBreak', '줄 바꿈 기능 사용 여부를 설정', '줄 바꿈 기준을 설정', '글 내용의 가로길이 맞춤 여부를 설정'],
            ['UseTablePasteDialog', '표 안에 표 붙여넣기 시 표 붙여넣기 팝업 창 사용 여부를 설정'],
            ['KeepOriginalHtml', 'html에 포함되어 있는 \\t, \\n 등의 문자를 지우지 않고 원본 그대로를 유지하는 옵션의 사용 여부를 설정'],
            ['UseEnterpriseMode', '엔터프라이즈 모드를 사용하는 환경일 시 해당 환경임을 알려주도록 설정'],
            ['DefaultBodySpace', '에디터 디자인 영역 기본 여백 사용 여부를 설정', '에디터 디자인 영역 기본 여백 사용 모드를 설정', '에디터 디자인 영역 기본 여백을 설정'],
            ['PasteRemoveSpanAbsolute', '붙여넣기 시 표가 position absolute 속성을 가진 span 태그 안에 있는 경우 absolute 속성의 제거여부를 설정'],
            ['PasteWhenTableIsLast', '붙여넣기 시 테이블이 끝에 있는 경우 p 태그 추가 여부를 설정'],
            ['CustomCssUrl', '에디터에 적용할 사용자의 CSS 파일을 설정'],
            ['HtmlprocessCustomText', 'HTML 처리 시 표시할 텍스트를 설정'],
            ['RemoveImageInPasteExcel', '엑셀에서 복사한 내용에 이미지가 있는 경우 에디터에 붙여넣기 시 이미지 삭제 여부를 설정'],
            ['RemoveTdStyleInPastePpt', '파워포인트(PPT)에서 표 복사 후 에디터에 붙여넣기 시 td 태그 style의 font-family와 font-size 삭제 여부를 설정'],
            ['AutoMoveInitFocus', '에디터 생성 후 자동으로 원래 포커스를 가지고 있던 객체에 포커스를 이동시켜 주기 여부를 설정'],
            ['ReplaceLineBreak', 'get API 사용시 줄바꿈을 공백으로 치환하도록 설정'],
            ['AutoGrowMode', '내용 길이에 따라 에디터 길이 자동 증가 여부를 설정'],
            ['AdjustCurrentColorInSetApi', 'set API 사용시 태그의 style중 border에 currentcolor 값을 실제 색상값으로 변경해 주도록 설정'],
            ['AdjustTextIndentInPaste', '워드에서 붙여넣기 시 margin left 값과 textindent 값을 보정해 주도록 설정'],
            ['RemoveCarriageReturnInTag', '태그 내부에 줄바꿈 문자가 있으면 치환하도록 설정'],
            ['RemoveLangAttribute', 'set API 사용시 태그안에 있는 lang attribute를 제거하도록 설정'],
            ['Event.AfterChangeMode', 'status bar의 모드 변경 시 발생하는 callback 이벤트를 설정'],
            ['Event.CreationComplete', '에디터 생성 완료 시 발생하는 callback 이벤트를 설정'],
            ['Event.OnError', '오류 발생 시 발생하는 callback 이벤트를 설정'],
            ['Event.OnLanguageDefinition', '에디터 생성 시 발생하는 callback 이벤트를 설정'],
            ['Event.AfterPopupShow', '에디터의 팝업 창이 열린 후 발생하는 callback 이벤트를 설정'],
            ['Event.AgentInstall', 'agent 설치 파일 다운로드 시 발생하는 callback 이벤트를 설정'],
            ['Event.BeforeInsertUrl', '에디터에 이미지, 비디오 태그, 영상, 파일 삽입 시 URL을 삽입하기 전 발생하는 callback 이벤트를 설정'],
            ['Event.Mouse', '에디터 디자인 영역에서 마우스 동작 시 발생하는 callback 이벤트를 설정'],
            ['Event.Command', '에디터 메뉴 클릭 및 실행 시 발생하는 callback 이벤트를 설정'],
            ['Event.Key', '에디터 디자인 영역에서 키보드 동작 시 발생하는 callback 이벤트를 설정'],
            ['Event.Resized', '에디터 높이 변경 시 발생하는 callback 이벤트를 설정'],
            ['Event.DocumentEditComplete', '워드로 편집 완료 후 발생하는 callback 이벤트를 설정'],
            ['Event.PasteImage', '에디터에 이미지 붙여넣기 후 발생하는 callback 이벤트를 설정'],
            ['Event.WordCount', '에디터에 글 작성 시 발생하는 callback 이벤트를 설정'],
            ['Event.BeforePaste', '에디터에 붙여넣기 전 발생하는 callback 이벤트를 설정'],
            ['Event.CustomAction', '커스텀 아이콘 클릭 시 발생하는 callback 이벤트를 설정'],
            ['Event.FullScreen', '에디터 화면 모드 변경 시 발생하는 callback 이벤트를 설정'],
            ['Event.SetComplete', 'Set API 완료 후 발생하는 callback 이벤트를 설정'],
            ['Event.SetInsertComplete', 'SetInsert API 완료 후 발생하는 callback 이벤트를 설정'],
            ['Event.CloseInstallPopup', 'agent 설치 팝업 창을 닫을 시 발생하는 callback 이벤트를 설정'],
            ['Event.DialogLoaded', '에디터의 다이얼로그 로드 시 발생하는 callback 이벤트를 설정'],
            ['Event.BeforeInsertHyperlink', '하이퍼링크 삽입 전 발생하는 callback 이벤트를 설정'],
            ['Event.ApplyFontStyle', '폰트 스타일(fontFamily, fontSize, lineHeight) 적용 시 발생하는 callback 이벤트를 설정'],
            ['AdjustCellSizeAfterDeleteCell', '표 가로줄, 세로줄 삭제 후 td높이에 따라 셀들의 크기를 조정해 주도록 설정'],
            ['RemoveDummyDivInHwpPaste', '한글 문서 내용 복사/붙여넣기 시 필요하지 않은 div 태그가 들어가는 현상을 보정하도록 설정'],
            ['PasteToTextMode', '텍스트로 붙여넣기 실행 시 p태그로 감싸지 않고 붙여넣기 하도록 설정'],
            ['AdjustCursorInRelative', 'IE 브라우저에서 span 태그에 position: relative 스타일이 적용되어 있을경우 마우스 클릭 시 커서 이동이 되는 현상을 보정 하도록 설정'],
            ['MoveStyleTagToHead', 'body에 style 태그가 있는 경우 head로 style 태그 이동 여부를 설정'],
            ['RemoveDummyTag', 'set API 사용시 smtp: 와 같은 불필요 태그를 set하기 전에 제거하도록 설정'],
            ['Placeholder', '에디터 디자인 영역에 CSS를 사용한 placeholder 속성을 설정'],
            ['IgnoreDifferentEditorName', '에디터 한개 생성 시 아이디를 틀리게 부여해도 무시 여부를 설정'],
            ['PasteTextLineBreak', '텍스트 붙여넣기 시 br 태그를 p 태그로 변경 여부를 설정'],
            ['ReplaceMsoStyle', '에디터에서 엑셀내용 복사시 Mso Style 삭제하지 않고 Mso -> dext로 치환하여 속성값으로 추가하도록 설정'],
            ['RemoveFontType', '엑셀에서 복사/붙여넣기시 삭제할 type을 설정', '엑셀에서 복사/붙여넣기시 삭제할 font_family를 설정'],
            ['ForceSaveAsServer', '파일로 저장시 서버에서 내려주도록 설정'],
            ['Event.SetForbiddenWordComplete', '금지어 추출 팝업이 적용 또는 닫기로 닫힌 후 발생하는 callback 이벤트를 설정'],
            ['CleanNestedTagOptions', '중복 태그 제거 사용 시 태그 정리 기능을 설정'],
            ['UnderlineAndStrikeThroughMode', '밑줄 및 취소선을 u 태그 및 strike 태그로 적용 또는 span 태그의 style로 적용 여부를 설정'],
            ['ReplaceRgbToHex', 'Get API 사용 시 span 태그 style의 RGB 값을 HEX 값으로 변경 여부를 설정'],
            ['TableDefaultCellPadding', '표 생성 시 셀 안쪽의 기본 여백(cellpadding)을 설정'],
            ['KeepImageOriginalSizeAutoCheck', '이미지 팝업 창에서 파일 추가 시 원본 크기 유지 체크 여부를 설정'],
            ['UseFindReplaceShortcut', '찾기 및 바꾸기 단축키 사용 여부를 설정'],
            ['UsePasteToolbarAndContext', '에디터 아이콘 또는 마우스 우 클릭으로 붙여넣기 사용 여부를 설정'],
            ['DisableErrorConfirmMessage', '업로드 오류 발생 시 오류 메시지 확인 창을 사용하지 않음 여부를 설정'],
            ['DeleteTableUsingKey', 'backspace, delete키로 table이 삭제 되도록 설정'],
            ['ValidateUrlLink', '하이퍼링크 삽입 시 url 유효성 검사 하도록 설정'],
            ['ImageQuality', '서버에 업로드되는 이미지의 품질 설정'],
            ['Compatibility', '붙여넣기 및 SetAPI 사용 시 호환성 항목 설정'],
            ['InsertSourceTagInVideo', '비디오 태그 삽입 시 src 또는 source로 삽입 설정'],
            ['WidthFix', '너비 고정 설정'],
            ['DisableUnnecessaryKeyEvt', '불필요한 키 입력 시 key Event 취소'],
            ['EditingAreaBgColor', '에디터 작성영역(Iframe)의 배경색을 설정']
        ],
        [
            ['RAONKEditor', '생성'],
            ['getEditor', '생성된 에디터 리턴'],
            ['setEditor', '다중 에디터 사용 시 접근할 에디터 설정'],
            ['getUserRuntimeMode', 'Runtime Mode 리턴'],
            ['getDom', '디자인 영역의 documentElement Dom 리턴'],
            ['getBodyDom', '디자인 영역의 Body Dom 리턴'],
            ['setHtmlContents', 'set 되는 소스에 따라서 에디터 형태에 맞게 다시 set'],
            ['setHtmlContentsEw', '에디터 생성 전에 호출 하여도 set하려는 소스를 별도로 가지고 있다가 에디터가 생성 완료되면 자동으로 set'],
            ['setHtmlValueExWithDocType', '에디터 디자인 영역에 HTML 소스를 입력', '에디터 디자인 영역에 <DOCTYPE> 태그 포함된 HTML 소스를 입력'],
            ['setHtmlValueEx', '에디터 디자인 영역에 <html> 부터 </html>까지의 소스를 입력'],
            ['setHtmlValue', '에디터 디자인 영역에 <html> 태그 내부의 소스를 입력'],
            ['setBodyValueEx', '에디터 디자인 영역에 <body> 부터 </body>까지의 소스를 입력'],
            //['setBodyValueExLikeDiv', 'div 태그를 에디터 디자인 영역에 <body> 태그로 입력'],
            ['setBodyValue', '에디터 디자인 영역에 <body> 태그 내부의 소스를 입력'],
            ['GetHtmlContents', '에디터에서 작성한 내용 추출'],        
            ['setInsertHTML', '에디터 디자인 영역에서 커서가 있는 위치에 html 소스를 삽입'],
            ['setInsertHTMLEx', '에디터 디자인 영역에서 커서가 있는 위치 혹은 작성영역 제일 뒤에 html 소스를 삽입'],
            ['setInsertText', '에디터 디자인 영역에서 커서가 있는 위치에 text를 삽입'],
            ['loadHtmlValueExFromURL', '에디터 디자인 영역에 지정한 경로의 html 페이지를 띄움'],
            ['getImages', '에디터 디자인 영역에 있는 이미지 태그의 경로를 리턴'],
            ['getImagesEx', '에디터 디자인 영역에 있는 이미지 태그 경로와 body,table,cell의 background 경로 리턴'],
            ['getContentsUrl', '에디터 디자인 영역에 있는 모든 객체의 경로 리턴', '에디터 디자인 영역에 있는 이미지, 영상, 파일 등의 경로 리턴'],
            ['getServerImages', '에디터 디자인 영역에 있는 서버 이미지 태그 경로 리턴'],
            ['getDeletedImageUrl', '에디터에서 삭제한 이미지의 url 리턴'],
            ['getDeletedElementsUrl', '에디터에서 삭제한 elements의 url 리턴'],
            ['addUserCssUrl', '에디터에 사용자의 css를 적용'],
            ['clearUserCssUrl', '에디터에 적용된 css 경로를 제거'],
            ['setUserCssText', '에디터에 사용자의 css를 style tag로 적용'],
            ['clearUserCssText', '에디터에 적용되어 있는 style tag를 삭제'],
            ['setSize', '에디터 로드 후 에디터의 크기 설정'],
            ['setFocusToEditor', '에디터가 로드 된 후 지정한 에디터에 포커스를 노출'],
            ['setNextTabElementId', '포커스를 줄 객체 아이디를 설정 하고 tab키를 입력하면 마지막 포커스가 설정한 아이디로 이동'],
            ['setRulerPosition', '에디터 가로 눈금자 포인터의 위치 값을 설정'],
            ['setEditorBodyEditable', '에디터 body 영역 안에 작성 가능 여부를 설정'],
            ['setFullScreen', '에디터를 전체화면으로 설정'],
            ['isEmpty', '에디터 디자인 영역에 내용이 있는지 없는지를 체크'],
            ['isDirty', '에디터 내용이 변경 되었는지 확인 할 수 있는 설정'],
            ['setDirty', '에디터를 로드 후 현재 에디터에 작성중인 문서를 변경 되지 않은 초기 문서로 설정'],
            ['loadAutoSaveHtml', '에디터 localstorage에 들어간 마지막 저장 내용 리턴'],
            ['getAccessibility', '에디터에 설정된 웹 접근성 단계 리턴'],
            ['setAccessibility', '에디터의 웹 접근성 단계를 설정'],
            ['getAccessibilityValidation', '에디터에 작성된 항목 중 웹 접근성 검증 시 위반 여부를 확인'],
            ['setAccessibilityValidation', '웹 접근성 검증 시 위반 항목이 있으면 웹 접근성 검증 팝업 창에 위반 목록을 노출'],
            ['setEditorMode', '에디터를 view 또는 edit 모드로 변경'],
            ['setEditorBorder', '에디터 전체 영역을 감싸고 있는 Border의 노출 여부를 설정'],
            ['selectAll', '에디터 디자인 영역에서 작성 된 모든 내용을 선택'],
            ['show', '에디터를 화면에 표시'],
            ['hidden', '에디터를 화면에서 숨김'],
            ['showTopMenu', '에디터의 메뉴 바를 표시하거나 숨기는 기능을 설정'],
            ['showToolbar', '에디터의 툴바를 표시하거나 숨기는 기능을 설정'],
            ['showStatusbar', '상태 바를 표시하거나 숨기는 기능을 설정'],
            ['setEditorChangeMode', '상태바의 탭을 이동하는 기능을 설정'],
            ['EncodeMime', '에디터에서 작성된 html을 MIME 형태로 인코딩'],
            ['DecodeMime', 'mimeData를 decode'],
            ['doSaveHTML', '에디터에 작성한 소스를 html파일로 저장'],
            ['doPrint', '에디터에 작성한 소스를 프린트 '],
            ['doPrintPreview', '에디터에 작성한 소스를 프린트 미리보기 한 후 프린트'],
            // SDK 추가 by leeseoeun
            ['GetEditorByName', '에디터 ID로 생성된 에디터를 가지고 옴', '에디터 리턴'],
            ['AddFormData', 'FormData 추가', '파라미터 추가'],
            ['GetVisibility', '에디터가 화면에 보이는지의 여부'],
            ['LoadHtmlValueExFromServerURL', '서버 URL로 에디터 작성 영역에 HTML 파일의 내용 로드', 'HTML 파일 삽입'],
            ['SetDirectEditHtmlUrl', '서버 URL로 에디터 작성 영역 iframe에 HTML 파일 삽입'],
            // ['GetBodyTextValue', '에디터에 작성한 내용을 텍스트로 리턴', '내용 리턴'],
            ['IsEmptyToString', '에디터의 내용 유무를 문자열로 리턴', '에디터의 디자인 영역에 내용이 있는지 없는지를 확인'],
            ['SetInsertHTMLToObject', '에디터 디자인 영역의 객체에 HTML 소스 삽입'],
            ['EditorPrint', '에디터 미리보기 영역의 내용 프린트'],
            ['AddWebFontCssUrl', '에디터 작성 영역에 CSS 적용', '에디터 글꼴 메뉴에 CSS 적용'],
            ['AddUserJsUrl', '에디터 작성 영역에 사용자의 JS 파일 적용', 'JavaScript', '자바스크립트'],
            ['ClearUserJsUrl', '에디터 작성 영역에 적용한 사용자의 JS 파일 삭제', 'JavaScript', '자바스크립트'],
            ['SetUserJsText', '에디터 작성 영역에 사용자의 JS 적용', 'JavaScript', '자바스크립트'],
            ['ClearUserJsText', '에디터 작성 영역에 적용한 사용자의 JS 삭제', 'JavaScript', '자바스크립트'],
            ['SetUserFontFamily', '에디터의 글꼴을 사용자가 설정한 글꼴로 변경'],
            ['SetUserFontSize', '에디터의 글꼴을 사용자가 설정한 글자 크기로 변경'],
            ['SetClassStyle', '에디터 디자인 영역에서 선택 영역에 태그 생성 후 class 이름 설정'],
            ['RemoveClassStyle', '선택 영역에 파라미터로 받은 className의 태그가 있다면 해당 태그 삭제'],
            ['SetFontFamily', '에디터 디자인 영역에서 선택 영역의 글꼴 설정'],
            ['SetFontFamily', '에디터 디자인 영역에서 선택 영역의 글꼴 설정'],
            ['SetFontSize', '에디터 디자인 영역에서 선택 영역의 글자 크기 설정'],
            ['SetFontColor', '에디터 디자인 영역에서 선택 영역의 글자 색 설정'],
            ['SetFontBgColor', '에디터 디자인 영역에서 선택 영역의 글자 배경 색 설정'],
            ['RemoveCss', '에디터 디자인 영역에서 선택 영역의 CSS 삭제'],
            ['SetOriginalHtmlValue', 'view 모드일 때 에디터에 HTML 소스 삽입'],
            // ['IsLoadedEditor', '에디터가 로드 됐는지의 여부', '에디터 로드 여부 리턴'],
            ['IsLoadedEditorEx', '에디터가 로드 됐는지의 여부', '에디터 로드 여부 리턴'],
            ['SetHeightForDisplay', 'view 모드일 때 에디터의 내용에 따라 에디터의 크기가 늘어남'],
            ['SetFocusToObject', '에디터 디자인 영역의 객체에 포커스 이동'],
            ['GetEditorSize', '에디터의 크기를 가지고 옴', '에디터 크기 리턴'],
            ['GetEditorStyle', '에디터 작성 영역에 있는 요소의 스타일 속성 리턴', 'element style'],
            ['GetPersonalDataValidation', '개인 정보 검사 시 에디터에 작성한 내용 중 개인 정보 유무 리턴'],
            ['SetPersonalDataValidation', '개인 정보 검사 시 개인 정보 추출 팝업 창에 개인 정보 목록을 보여 줌'],
            ['GetForbiddenWordValidation', '금지어 검사 시 에디터에 작성한 내용 중 금지어 유무 리턴'],
            ['SetForbiddenWordValidation', '금지어 검사 시 금지어 추출 팝업 창에 금지어 목록을 보여 줌'],
            ['GetCaretElementEx', '커서 위치의 요소 리턴', 'element 리턴'],
            ['SetLockCommand', '에디터 메뉴의 잠금 여부 설정', '에디터 메뉴의 실행을 막음'],
            ['SetDomMode', '삽입된 개체에 대체 이미지 사용 여부 설정', '외부 동영상 공유', 'Iframe', 'Flash', '영상', '비디오 태그'],
            ['GetDocumentDom', '에디터 작성 영역의 document 리턴'],
            ['GetDocumentElementDom', '에디터 작성 영역의 document element 리턴'],
            ['GetValueInTextMode', '에디터 텍스트 모드의 내용 리턴'],
            ['SetValueInTextMode', '에디터 텍스트 모드에 내용 삽입', '에디터 텍스트 모드에 텍스트 삽입'],
            ['ConvertHtmlToText', 'HTML 소스를 텍스트로 변환'],
            ['GetElementById', 'element id로 element 리턴', '요소 아이디로 요소 리턴'],
            ['GetElementsByName', 'element name으로 elements 리턴', '요소 이름으로 요소들 리턴'],
            ['GetElementsByTagName', 'tag 이름으로 elements 리턴', '태그 이름으로 요소들 리턴'],
            ['SetElementInnerHTML', 'tag에 HTML 소스 삽입', '태그에 HTML 소스 삽입'],
            ['SetElementInnerText', 'tag에 텍스트 삽입', '태그에 텍스트 삽입'],
            ['SetFormDataTextValue', 'tag에 텍스트 삽입', '태그에 텍스트 삽입'],
            ['SetCaretBeforeOrAfter', '에디터 작성 영역에 있는 요소의 전후로 커서 이동', '에디터 작성 영역에 있는 노드의 전후로 커서 이동'],
            ['RemoveNode', '에디터 작성 영역에 있는 요소 삭제', '에디터 작성 영역에 있는 노드 삭제'],
            ['InputTextfield', '입력 필드 팝업 창이 열림', 'input 태그 생성'],
            ['InputRadio', '라디오 버튼 팝업 창이 열림', 'radio 버튼 생성'],
            ['InputCheckbox', '체크박스 팝업 창이 열림', 'checkbox 생성'],
            ['InputButton', '버튼 팝업 창이 열림', 'button 생성'],
            ['InputHiddenfield', '숨김 필드 팝업 창이 열림', 'hidden 필드 생성'],
            ['InputTextarea', '입력 영역 팝업 창이 열림', 'textarea 태그 생성'],
            ['InputSelect', '펼침 목록 팝업 창이 열림', 'select 태그 생성'],
            ['InputImagebutton', '이미지 버튼 팝업 창이 열림', '이미지 삽입', 'img 태그 삽입'],
            ['InsertInput', '에디터 디자인 영역에 input 태그 삽입'],
            ['InsertTextarea', '에디터 디자인 영역에 textarea 태그 삽입'],
            ['InsertSelect', '에디터 디자인 영역에 select 태그 삽입'],
            ['InsertImg', '에디터 디자인 영역에 이미지 삽입', 'img 태그 삽입'],
            ['InsertDiv', '에디터 디자인 영역에 div 태그 삽입'],
            ['ChangeImageData', '선택한 이미지를 다른 이미지로 변경', '이미지 변경'],
            ['GetSelectedCell', '표에서 선택한 셀 리턴', '테이블에서 선택한 셀 리턴'],
            ['SetHorizontalLine', '문서 배경 이미지 삽입', '구분 선 표시'],
            ['Commands', '에디터의 메뉴 실행'],
            ['AddHtmlToSetValue', 'Set API 호출 전에 HTML 소스 삽입', 'Set API 호출 후에 HTML 소스 삽입'],
            ['GetFileSize', '파일 크기 리턴', '파일 사이즈 리턴'],
            ['Destroy', '에디터 삭제', '에디터 객체 삭제', '메모리 해제'],
            ['GetByteLength', '문자열의 바이트 길이 리턴', '문자열의 바이트 수 리턴', '문자열 길이 리턴'],
            ['SetTableEdgeReduce', '표의 셀 테두리 분리', '표의 셀 테두리 합침', '테이블의 셀 테두리 분리', '테이블의 셀 테두리 합침'],
            ['GetCaretObject', '커서 위치의 노드 리턴', 'node 리턴'],
            ['ReplaceBlocktoBr', 'p 태그 삭제', 'br 태그로 치환'],
            ['GetMetaTag', '에디터 작성 영역 meta 태그의 content 값 리턴', 'mete 태그 content 리턴'],
            ['SetMetaTag', '에디터 작성 영역에 meta 태그 삽입'],
            ['ConvertMMToPxUnit', 'HTML 소스의 mm 단위를 px 단위로 변환'],
            ['GetBodyTextLength', '에디터에 작성한 내용의 텍스트 길이 리턴', '글자 수 리턴'],
            ['GetBodyLineCount', '에디터에 작성한 내용의 행 수 리턴', '줄 수 리턴'],
            ['AddHttpHeader', '헤더 추가', 'header 추가'],
            ['ManuallyTempSave', '에디터에 작성한 내용을 로컬 스토리지에 임시 저장'],
            ['CloseDialogPopup', '에디터의 팝업 창을 닫음'],
            ['FindWord', '에디터에 작성한 내용에서 단어를 찾음'],
            ['SetReadOnly', '에디터를 읽기 전용으로 변경'],
            ['SetCustomDisableIconList', '에디터의 메뉴를 비활성화', '에디터 메뉴 비활성화'],
            ['SetZoom', '에디터 디자인 영역의 배율 설정', '에디터 디자인 영역 확대', '에디터 디자인 영역 축소'],
            ['ChangeToAgentMode', '에디터의 runtimes를 agent로 변경'],
            ['SetEditorBodyWidth', '에디터 디자인 영역의 너비 설정'],
            ['GetStatusBarMode', '에디터 status bar의 모드 리턴', '에디터 상태 바의 모드 리턴'],
            ['GetSelectedContent', '에디터에 작성한 내용 중 선택 영역의 텍스트 리턴', '에디터에 작성한 내용 중 선택 영역의 HTML 소스 리턴'],
            ['GetWrittenAreaSize', '생성된 에디터의 작성영역 및 작성영역에 작성된 크기(width, height)를 반환'],
            ['GetFontStyleForCaret', '커서 위치에 있는 폰트 스타일(fontFamily, fontSize, lineHeight)을 반환'],
            ['SetBodyTextValue', 'html형식이 아닌 일반 텍스트 데이터를 에디터 디자인 영역(body 태그 내부)에 html구조로 입력']
        ],
        [
            ['AfterChangeMode', '에디터 보기화면 변경 후 이벤트가 발생', 'statusBar 변경 후 이벤트가 발생'],
            ['BeforeInsertUrl', '에디터에 파일 업로드 후 url 삽입 전에 발생'],
            ['BeforePaste', '에디터에 붙여넣기 전 이벤트가 발생'],
            ['CustomAction', '에디터에 custom icon을 추가하였을 때 icon 클릭 시 동작하는 메소드 '],
            ['CreationComplete', '에디터가 로드 완료 되었을 때 발생', '에디터가 작업준비 되었을 때 발생'],
            ['FullScreen', '에디터 화면전환 시 발생', '에디터 전체화면, 기본화면 변환 시 발생'],
            ['OnLanguageDefinition', '에디터 생성 시 이벤트가 발생', '에디터에서 노출되는 아이콘명, 메세지 등을 변경'],
            ['OnError', '에러가 발생할 경우 발생'],
            ['Resized', '에디터 높이 리사이즈 완료 시 발생'],
            // SDK 추가 by leeseoeun
            ['AfterPopupShow', '에디터의 팝업 창이 열린 후 발생'],
            ['AgentInstall', 'agent 설치 파일 다운로드 시 발생'],
            ['Mouse', '에디터 디자인 영역에서 마우스 동작 시 발생'],
            ['Command', '에디터의 아이콘 클릭 및 실행 시 발생'],
            ['Key', '에디터 디자인 영역에서 키보드 동작 시 발생'],
            ['DocumentEditComplete', '워드로 편집 완료 후 발생'],
            ['PasteImage', '이미지 붙여넣기 후 발생'],
            ['WordCount', '에디터에 글 작성 시 발생'],
            ['SetComplete', 'Set API 완료 시 발생'],
            ['SetInsertComplete', 'SetInsert API 완료 시 발생'],
            ['CloseInstallPopup', 'agent 설치 팝업 창을 닫을 시 발생'],
            ['SetForbiddenWordComplete', '금지어 추출 팝업이 적용 또는 닫기로 닫힌 후 발생'],
            ['Drag', '에디터 디자인 영역에서 드래그 동작 시 발생'],
            ['Focus', '에디터 디자인 영역이 포커스를 받을 시 발생', '에디터 디자인 영역이 포커스를 잃을 시 발생'],
            ['DialogLoaded', '에디터의 다이얼로그 로드 시 발생'],
            ['BeforeInsertHyperlink', '하이퍼링크 삽입 전 발생'],
            ['ApplyFontStyle', '폰트 스타일(fontFamily, fontSize, lineHeight) 적용 시 발생']
        ]
    ],
    [
        ['기본 에디터 생성'],
        ['동적 에디터 생성'],
        ['다중 에디터'],
        ['특정위치에 내용삽입'],
        ['Css Url 추가'],
        ['Html Url 불러오기'],
        ['UI 컨트롤'],
        ['포커스 제어'],
        ['사용자 이미지 처리'],
        ['에디터 객체 컨트롤'],
        ['웹 접근성 검증'],
        ['DOM 관리'],
        ['숨겨진 영역에서 생성'],
        ['에디터 서명 삽입'],
        ['해상도별 보기 페이지']
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