﻿/*
Copyright (c) 2013, Raonwiz Technology Inc. All rights reserved.
 - dingbatFont
*/
var KEDITOR_DINGBAT_FONTS = {
    /*
    작성예시)   아래사항은 변환이 필요한 DingBat Font 및 문자입니다. 

    FontList: [변환 필요한 Font List],
    DefaultChar : DingBat Font 중 없는 문자일 경우 변환 될 문자,
    '변환 폰트' : {
        'key 문자' : '대체 문자'    
    }
    */
    FontList: ['Wingdings', 'Wingdings 2', 'Wingdings 3','Webdings'],
    DefaultChar: '-',
    'Wingdings': {
        '!': '✏︎',
        '"': '✂︎',
        '#': '✁︎',
        '$': '👓︎',
        '%': '🕭︎',
        '&': '🕮︎',
        "'": '🕯︎',
        '(': '🕿︎',
        ')': '✆︎',
        '*': '🖂︎',
        '+': '🖃︎',
        ',': '📪︎',
        '-': '📫︎',
        '.': '📬︎',
        '/': '📭︎',
        '0': '📁︎',
        '1': '📂︎',
        '2': '📄︎',
        '3': '🗏︎',
        '4': '🗐︎',
        '5': '🗄︎',
        '6': '⌛︎',
        '7': '🖮︎',
        '8': '🖰︎',
        '9': '🖲︎',
        ':': '🖳︎',
        ';': '🖴︎',
        '<': '🖫︎',
        '=': '🖬︎',
        '>': '✇︎',
        '?': '✍︎',
        'A': '✌︎',
        'B': '👌︎',
        'C': '👍︎',
        'D': '👎︎',
        'E': '☜︎',
        'F': '☞︎',
        'G': '☝︎',
        'H': '☟︎',
        'I': '✋︎',
        'J': '☺︎',
        'K': '😐︎',
        'L': '☹︎',
        'M': '💣︎',
        'N': '☠︎',
        'O': '⚐︎',
        'P': '🏱︎',
        'Q': '✈︎',
        'R': '☼︎',
        'S': '💧︎',
        'T': '❄︎',
        'U': '🕆︎',
        'V': '✞︎',
        'W': '🕈︎',
        'X': '✠︎',
        'Y': '✡︎',
        'Z': '☪︎',
        '[': '☯︎',
        '\\': 'ॐ︎',
        ']': '☸︎',
        '^': '♈︎',
        '_': '♉︎',
        '`': '♊︎',
        'a': '♋︎',
        'b': '♌︎',
        'c': '♍︎',
        'd': '♎︎',
        'e': '♏︎',
        'f': '♐︎',
        'g': '♑︎',
        'h': '♒︎',
        'i': '♓︎',
        'j': '🙰',
        'k': '🙵',
        'l': '●︎',
        'm': '❍︎',
        'n': '■︎',
        'o': '□︎',
        'p': '◻︎',
        'q': '❑︎',
        'r': '❒︎',
        's': '⬧︎',
        't': '⧫︎',
        'u': '◆︎',
        'v': '❖︎',
        'w': '⬥︎',
        'x': '⌧︎',
        'y': '⍓︎',
        'z': '⌘︎',
        '{': '❀︎',
        '|': '✿︎',
        '}': '❝︎',
        '~': '❞︎',
        'ÿ': '◻︎',
        'þ': '☑︎',
        'ý': '☒︎',
        'ü': '✓︎',
        'û': '✗︎',
        'ú': '▫︎',
        'ù': '▭︎',
        'ø': '⬂︎',
        '÷': '⬃︎',
        'ö': '⬁︎',
        'õ': '⬀︎',
        'ô': '⇳︎',
        'ó': '⬄︎',
        'ò': '⇩︎',
        'ñ': '⇧︎',
        'ð': '⇨︎',
        'ï': '⇦︎',
        'Ø': '➢︎',
        'Ö': '⌦︎',
        'Õ': '⌫︎',
        'Â': '🕛︎',
        'Á': '🕚︎',
        'À': '🕙︎',
        '¿': '🕘︎',
        '¾': '🕗︎',
        '½': '🕖︎',
        '¼': '🕕︎',
        '»': '🕔︎',
        'º': '🕓︎',
        '¹': '🕒︎',
        '¸': '🕑︎',
        '·': '🕐︎',
        '¶': '✰︎',
        'µ': '✪︎',
        '³': '⌑︎',
        '²': '⟡︎',
        '±': '⌖︎',
        '¯': '✵︎',
        '®': '✹︎',
        '¬': '✶︎',
        '«': '★︎',
        'ª': '✦︎',
        '§': '▪︎',
        '¥': '◎︎',
        '¤': '◉︎',
        '¢': '⭕︎',
        '¡': '○︎',
        '\uf09f': '●'
    },
    'Wingdings 2': {
        '0': '📄',
        '1': '❒',
        '2': '📋',
        '3': '💳',
        '4': '🗑',
        '5': '💬',
        '6': '🖨',
        '7': '⎙',
        '8': '๏',
        '9': '🎥',
        '!': '🖊',
        '#': '🖌',
        '$': '🖍',
        '%': '✄',
        '&': '✂',
        '(': '📞',
        ')': '📄',
        '*': '◻',
        '+': '📑',
        ',': '📄',
        '-': '📃',
        '/': '📄',
        ':': '👜',
        ';': '🖱',
        '=': '👎',
        '?': '▻',
        'A': '➦',
        'B': '☜',
        'C': '☞',
        'D': '☚',
        'E': '☛',
        'F': '☝',
        'G': '☟',
        'H': 'ᖱ',
        'I': 'ᖰ',
        'J': '👆',
        'K': '👇',
        'L': 'ᖲ',
        'M': 'ᖳ',
        'N': '✋',
        'O': '✗',
        'P': '✓',
        'Q': '⊠',
        'R': '☑',
        'S': '⛝',
        'T': '☒',
        'U': 'ⓧ',
        'V': '⊗',
        'W': '⊘',
        'X': 'ø',
        'Y': 'ফ',
        'Z': '&',
        '[': '&',
        ']': 'ア',
        '^ ': 'ア',
        '`': 'ア',
        'a': 'ঞ',
        'b': '၉',
        'c': 'の',
        'd': 'ஞ',
        'e': '≽',
        'f': '≼',
        'g': '⋞',
        'h': '⋟',
        'i': 'ⓞ',
        'j': '①',
        'k': '②',
        'l': '③',
        'm': '④',
        'n': '⑤',
        'o': '⑥',
        'p': '⑦',
        'q': '⑧',
        'r': '⑨',
        's': '⑩',
        't': '⓿',
        'u': '❶',
        'v': '❷',
        'w': '❸',
        'x': '❹',
        'y': '❺',
        'z': '❻',
        '{': '❼',
        '|': '❽',
        '}': '❾',
        '~': '❿'

    },
    'Wingdings 3': {
        '0': '⇟',
        '1': '⇔',
        '2': '⇳',
        '3': '⇠',
        '4': '⇢',
        '5': '⇡',
        '6': '⇣',
        '7': 'ㄣ',
        '8': '↵',
        '9': '↳',
        '!': '⇽',
        '#': '⇑',
        '$': '⇓',
        '%': '⇖',
        '&': '⇗',
        "'": '⇦',
        '(': '↘',
        ')': '⇤',
        '*': '⇥',
        '+': '⊼',
        ',': '⤓',
        '-': '↸',
        '/': '⇞',
        ':': '↰',
        ';': '↱',
        '=': '⤴',
        '?': '↴',
        'A': '⤷',
        'B': '⊐',
        'C': '⊏',
        'D': '⇆',
        'E': '⇅',
        'F': '↹',
        'G': '⤓⤒',
        'H': '⇇',
        'I': '⇉',
        'J': '⇈',
        'K': '⇊',
        'L': '⤥',
        'M': '⤣',
        'N': '↪',
        'O': '↩',
        'P': '↻',
        'Q': '↺',
        'R': 'э',
        'S': '⊼',
        'T': '∧',
        'U': 'ヾ',
        'V': 'ப',
        'W': 'ᴗ',
        'X': '⇧',
        'Y': '⇪',
        'Z': '⇐',
        '[': '⇁',
        '\\': '⇦⇦',
        ']': '⇀',
        '^ ': '⇦',
        '_': '⇨',
        '`': '⇦',
        'a': '↦',
        'b': '↽',
        'c': '➫',
        'd': '↼',
        'e': '➬',
        'f': '←',
        'g': '→',
        'h': '↑',
        'i': '↓',
        'j': '↖',
        'k': '↗',
        'l': '↙',
        'm': '↘',
        'n': '↔',
        'o': '↕',
        'p': '▲',
        'q': '▼',
        'r': '△',
        's': '▽',
        't': '◀',
        'u': '▶',
        'v': '⊲',
        'w': '⊳',
        'x': '◣',
        'y': '◢',
        'z': '◤',
        '{': '◥',
        '}': '》',
        '~': '🔼'
    },
    'Webdings': {
        '0': '🌧',
        '1': '☐',
        '2': '⧉',
        '3': '◀',
        '4': '▶',
        '5': '▲',
        '6': '▼',
        '7': '⏪',
        '8': '⏩',
        '9': '⏮',
        '!': '🕷',
        '#': '📵',
        '$': '🕶',
        '%': '🏆',
        '&': '🎖',
        '(': '🗨',
        ')': '💬',
        '*': '✹',
        '+': '🌩',
        ',': '🌶',
        '-': '🎗',
        ':': '⏭',
        ';': '॥',
        '=': '●',
        '?': '💍',
        'A': 'ট',
        'B': '🏘',
        'C': '🏙',
        'D': '🏚',
        'E': '🏜',
        'F': '🏭',
        'G': '🏛',
        'H': '🏠',
        'I': '🏖',
        'J': '🏝',
        'K': '⛙',
        'L': '🚿',
        'M': '⛰',
        'N': '👁',
        'O': '👂',
        'P': '↩',
        'Q': '⛺',
        'R': '🛤',
        'S': '🚚',
        'T': '🏨',
        'U': '🔊',
        'V': '🔉',
        'W': '>',
        'X': '<',
        'Y': '🖤',
        'Z': '💐',
        ']': '💭',
        '^ ': '☊',
        '_': '🌧',
        '`': '♻',
        'a': '✓',
        'b': '🚲',
        'd': '🛡',
        'e': '🎁',
        'f': '🚍',
        'g': '◼',
        'h': '🚑',
        'i': 'ⓘ',
        'j': '🏊',
        'k': '⏧',
        'l': '✧',
        'm': '🕴',
        'n': '⚫',
        'o': '🛳',
        'p': '🚔',
        'q': '🔄',
        'r': 'x',
        's': '?',
        't': '🚄',
        'u': '☸',
        'v': '🚘',
        'w': '⛳',
        'x': '🚫',
        'y': '⊖',
        'z': '🚭',
        '{': '🍁',
        '}': '🗯',
        '~': '⚡'
    }
}