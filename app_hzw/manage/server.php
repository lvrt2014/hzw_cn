<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006-2016 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: liu21st <liu21st@gmail.com>
// +----------------------------------------------------------------------

// print(456);
// exit();
// [ 应用入口文件 ]
// 定义应用目录
define('APP_PATH', __DIR__ . '/../../app_hzw_code_tp5/');
// 定义配置文件目录
define('CONF_PATH', APP_PATH . 'config/');
// 定义WEB目录
define('WEB_PATH', __DIR__);

define('WEB_URL', 'http://www.23p8.com/');
// 定义上传文件存放目录
define('UPLOAD_PATH', __DIR__.'/../uploads/');
// 定义上传文件网址
define('UPLOAD_URL','/uploads/');
// 定义手机站主机
define('WEB_HOST','www.23p8.com');
define('MANAGE_URL', 'http://'.WEB_HOST.'/manage/');
/*定义手机站网址*/
define('MOBILE_URL', 'http://'.WEB_HOST.'/dist/');
// define('BIND_MODULE', 'manage');
define('BIND_MODULE','push/Worker');
// 定义API接口HOST
define('API_HOST', 'pm.haowenwan.com');
// 定义API接口URL
define('API_URL', 'http://'.API_HOST.'/api/');
// 加载框架引导文件
require __DIR__ . '/../../thinkphp_5_0_21/start.php';

