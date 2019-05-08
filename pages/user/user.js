/*
 * 
 * WordPres版微信小程序
 * author: NiZerin
 * organization: 张益铭的个人博客 www.iacblog.com
 * github:    https://github.com/CrazyNing98/WeChatMiniProgram-Blog
 * 技术支持微信号：NINGCZ19980501
 * 开源协议：MIT
 * 
 *  *Copyright (c) 2017 https://www.iacblog.com/ All rights reserved.
 */
import config from '../../utils/config.js'
var Api = require('../../utils/api.js');
var util = require('../../utils/util.js');
var Auth = require('../../utils/auth.js');
var WxParse = require('../../wxParse/wxParse.js');
var wxApi = require('../../utils/wxApi.js')
var wxRequest = require('../../utils/wxRequest.js');
var app = getApp();

Page({
  data: {
    userInfo: {
      avatarUrl: '../../images/avator.png',
      nickname: '高度\'\'',
      university: '广东工业大学',
      profession: '电子商务',
      eduction: '本科',
      email: 'jf00258jf@hotmail.com',
      github: 'https://github.com/garven',
      resume: ''
    }
  },
})