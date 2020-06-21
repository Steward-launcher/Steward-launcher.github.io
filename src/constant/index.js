
export const WEB_ACTIONS = {
  INSTALL_AUTOMATION: 'installAutomation',
  INSTALL_DONE: 'installDone'
}

export const BUILDIN_ACTIONS = {
  HIGHLIGHT_ENGLISH_SYNTAX: 'highlightEnglishSyntax',
  KILL_ELEMENT: 'killElement',
  READ_MODE: 'readMode',
  HASH_ELEMENT: 'hashElement',
  CODE_COPY: 'codeCopy',
  GOTO_ELEMENT: 'gotoElement',
  DOWNLOAD: 'download',
  FULL_SCREEN: 'fullScreen',
  TIME_UPDATE: 'timeupdate',
  CLICK: 'click'
}

export const BUILDIN_ACTION_CONFIGS = [
  {
    value: BUILDIN_ACTIONS.READ_MODE,
    label: 'Read Mode',
    args: [
      { tips: 'metaKey', name: 'metaKey', type: 'boolean', value: false, defaultValue: false }
    ],
  },
  {
    value: BUILDIN_ACTIONS.KILL_ELEMENT,
    label: 'Kill Element',
    args: [
      { tips: 'metaKey', name: 'metaKey', type: 'boolean', value: false, defaultValue: false }
    ],
  },
  {
    value: BUILDIN_ACTIONS.HIGHLIGHT_ENGLISH_SYNTAX,
    label: 'English Syntax highlighting',
  },
  {
    value: BUILDIN_ACTIONS.HASH_ELEMENT,
    label: 'Add anchor for elements',
  },
  {
    value: BUILDIN_ACTIONS.TIME_UPDATE,
    label: 'Add time tag for video',
  },
  {
    value: BUILDIN_ACTIONS.DOWNLOAD,
    label: 'Download element',
    args: [
      { tips: 'auto close the new tab opened by automation',
        name: 'autoclose', type: 'boolean', value: false, defaultValue: false
      },
    ]
  },
  {
    value: BUILDIN_ACTIONS.FULL_SCREEN,
    label: 'FullScreen element',
  },
  {
    value: BUILDIN_ACTIONS.CODE_COPY,
    label: 'Code copy',
    args: [
      { tips: 'child of <pre> tag', name: 'inpre', type: 'boolean', value: false, defaultValue: false },
      { tips: '<pre> tag', name: 'pre', type: 'boolean', value: false, defaultValue: false },
      { tips: 'Remove some elements', name: 'rm', type: 'string',
        value: '', defaultValue: '', placeholder: 'css selector' },
      { tips: 'Position of btn', name: 'pos', type: 'string',
        value: 'tl', defaultValue: 'tl', placeholder: 'tl|tr' }
    ]
  },
  {
    value: BUILDIN_ACTIONS.CLICK,
    label: 'Click',
  },
  {
    value: BUILDIN_ACTIONS.GOTO_ELEMENT,
    label: 'Goto element',
    args: [
      { tips: 'Auto Goto', name: 'auto', type: 'boolean', value: false, defaultValue: false },
      { tips: 'Target', name: 'to', type: 'string', value: '',
        defaultValue: '', placeholder: 'css selector' },
      { tips: 'Order', name: 'order', type: 'string', value: 'asc',
        defaultValue: 'asc', placeholder: 'desc/asc' },
      { tips: 'Handle, The available functions are: {text|trim|number|siblingText}', 
        name: 'handle', type: 'string', value: '', defaultValue: '', placeholder: '[.selector,fn]' }
    ],
  }
]

export const BUILDIN_ACTION_OPTIONS = [
  {
    value: '',
    label: 'All'
  },
  ...BUILDIN_ACTION_CONFIGS
]