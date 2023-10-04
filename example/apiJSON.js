export default {
	swagger: '2.0',
	info: {
		description: 'boss service',
		version: 'V1.0',
		title: 'boss service',
		termsOfService: 'https://github.com/dyc87112/spring-boot-starter-swagger',
		contact: { url: '#', email: '#' },
		license: { name: '#', url: '#' }
	},
	host: '10.200.100.14:8293',
	basePath: '/',
	tags: [
		{ name: 'banner管理', description: 'Cms Banner Controller' },
		{ name: '代理币种', description: 'Proxy Currency Controller' },
		{ name: '代理游戏相关', description: 'Proxy Game Controller' },
		{ name: '充币信息', description: 'Deposit Controller' },
		{ name: '充币和充值配置', description: 'Deposit Config Controller' },
		{ name: '公告管理', description: 'Cms Article Controller' },
		{ name: '包网商分红配置', description: 'Agent Bonus Cnf Controller' },
		{ name: '包网商厂商相关', description: 'Proxy Factory Controller' },
		{ name: '基础游戏相关', description: 'Game Base Controller' },
		{ name: '字典接口', description: 'Dictionary Controller' },
		{ name: '币种管理', description: 'Currency Controller' },
		{ name: '平台代理相关，实际是包网商管理', description: 'Proxy Controller' },
		{ name: '平台用户相关', description: 'User Controller' },
		{ name: '归集管理', description: 'Collect Manage Controller' },
		{ name: '手续费', description: 'Fee Statistics Controller' },
		{ name: '提币信息', description: 'Withdraw Controller' },
		{ name: '提币和提现配置', description: 'Withdraw Config Controller' },
		{ name: '支付渠道管理', description: 'Payment Channel Controller' },
		{ name: '文件上传下载', description: 'File Controller' },
		{ name: '日常数据', description: 'Daily Statistics Controller' },
		{ name: '日志相关接口', description: 'Log Controller' },
		{ name: '标签管理', description: 'Cms Label Controller' },
		{ name: '渠道充提信息接口', description: 'Channel Deposit Withdraw Controller' },
		{ name: '渠道汇率', description: 'Channel Rate Controller' },
		{ name: '游戏区域相关', description: 'Game Area Controller' },
		{ name: '游戏厂商相关', description: 'Game Factory Controller' },
		{ name: '游戏渠道相关', description: 'Game Channel Controller' },
		{ name: '游戏类型相关', description: 'Game Type Controller' },
		{ name: '游戏统计', description: 'Game Statistics Controller' },
		{ name: '游戏记录相关', description: 'User Game Controller' },
		{ name: '用户彩金发放记录', description: 'Boss Winnings Record Controller' },
		{ name: '用户游戏记录', description: 'Game Record Controller' },
		{ name: '用户相关接口', description: 'Boss User Controller' },
		{ name: '用户统计', description: 'User Statistics Controller' },
		{ name: '用户达成数据查询', description: 'Boss User Achieving Controller' },
		{ name: '登入登出接口', description: 'Login Controller' },
		{ name: '系统币种', description: 'System Currency Controller' },
		{ name: '结算数据', description: 'Settle Controller' },
		{ name: '获取达成条件配置', description: 'Operate Controller' },
		{ name: '菜单管理接口', description: 'Menu Controller' },
		{ name: '补偿渠道拉取游戏', description: 'Game Record Fetch Controller' },
		{ name: '角色管理接口', description: 'Role Controller' },
		{ name: '账户相关', description: 'Account Controller' },
		{ name: '账户资金变动记录', description: 'Asset Change Log Controller' },
		{ name: '返水方案管理', description: 'Proxy Rebate Plan Controller' },
		{ name: '返水记录管理', description: 'Proxy Rebate Record Controller' },
		{ name: '银行卡管理', description: 'Bank Card Controller' },
		{ name: '银行管理', description: 'Bank Controller' }
	],
	paths: {
		'/boss/account/addAdjust': {
			post: {
				tags: ['账户相关'],
				summary: '添加调账',
				operationId: 'addAdjustUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/AdjustAddReq' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/account/checkKickOut': {
			get: {
				tags: ['登入登出接口'],
				summary: '检查踢出信息',
				operationId: 'checkKickOutUsingGET',
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' }
				],
				responses: {
					200: { description: 'OK' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			},
			post: {
				tags: ['登入登出接口'],
				summary: '检查踢出信息',
				operationId: 'checkKickOutUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' }
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/account/collectionAccount': {
			get: {
				tags: ['账户相关'],
				summary: '平台账户（归集地址）',
				operationId: 'queryCollectionAccountUsingGET',
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' }
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/CollectionAccountResp' } },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/account/hotAccount': {
			get: {
				tags: ['账户相关'],
				summary: '头寸余额',
				operationId: 'queryHotAccountUsingGET',
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' }
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/HotAccountResp' } },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/account/login': {
			post: {
				tags: ['登入登出接口'],
				summary: '登入接口',
				operationId: 'loginUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'login',
						description: 'login',
						required: true,
						schema: { $ref: '#/definitions/LoginRequestVo' }
					}
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/LoginVo' } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/account/logout': {
			get: {
				tags: ['登入登出接口'],
				summary: '登出接口',
				operationId: 'logoutUsingGET',
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' }
				],
				responses: {
					200: { description: 'OK' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			},
			post: {
				tags: ['登入登出接口'],
				summary: '登出接口',
				operationId: 'logoutUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' }
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/account/platform': {
			get: {
				tags: ['账户相关'],
				summary: '平台账户 - 手续费余额',
				operationId: 'platformUsingGET',
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' }
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/PlatformAccountResp' } },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/account/queryAdjust': {
			post: {
				tags: ['账户相关'],
				summary: '查询调账信息',
				operationId: 'queryAdjustUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/AdjustQueryReq' }
					}
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/PageResult«AdjustQueryResp»' } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/account/statistics/balance/current': {
			post: {
				tags: ['账户相关'],
				summary: '盘内实时余额',
				operationId: 'queryCurrentUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/QueryCurrentAccountTotalReq' }
					}
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/AccountCurrentTotalResp' } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/account/statistics/balance/history': {
			post: {
				tags: ['账户相关'],
				summary: '盘内历史余额',
				operationId: 'queryHistoryUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/QueryAccountTotalReq' }
					}
				],
				responses: {
					200: { description: 'OK', schema: { type: 'array', items: { $ref: '#/definitions/AccountDailyTotalResp' } } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/account/userBalance': {
			post: {
				tags: ['账户相关'],
				summary: '单个用户余额',
				operationId: 'userBalanceUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{ in: 'body', name: 'req', description: 'req', required: true, schema: { $ref: '#/definitions/UserNoReq' } }
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/UserAccountBalanceResp' } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/assetChangeLog/exportExcel': {
			get: {
				tags: ['账户资金变动记录'],
				summary: '资金变动记录 - 导出excel',
				operationId: 'exportExcelUsingGET',
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						name: 'pageIndex',
						in: 'query',
						description: '页码 从1开始计数',
						required: false,
						type: 'integer',
						format: 'int32'
					},
					{
						name: 'pageSize',
						in: 'query',
						description: '页容 区间[1, 1000]',
						required: false,
						type: 'integer',
						format: 'int32'
					},
					{ name: 'userId', in: 'query', description: '用户编号', required: false, type: 'integer', format: 'int64' },
					{
						name: 'proxyUid',
						in: 'query',
						description: '包网商编号',
						required: false,
						type: 'integer',
						format: 'int64'
					},
					{ name: 'type', in: 'query', description: '类型', required: false, type: 'string' },
					{
						name: 'start',
						in: 'query',
						description: '交易时间开始',
						required: false,
						type: 'string',
						format: 'date-time'
					},
					{
						name: 'end',
						in: 'query',
						description: '交易时间结束',
						required: false,
						type: 'string',
						format: 'date-time'
					}
				],
				responses: {
					200: { description: 'OK' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/assetChangeLog/list': {
			post: {
				tags: ['账户资金变动记录'],
				summary: '资金变动记录',
				operationId: 'listUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/AssetChangeLogReq' }
					}
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/PageResult«AssetChangeLogResp»' } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/assetChangeLog/type': {
			get: {
				tags: ['账户资金变动记录'],
				summary: '下拉类型',
				operationId: 'transactionTypesUsingGET',
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' }
				],
				responses: {
					200: { description: 'OK', schema: { type: 'array', items: { $ref: '#/definitions/AssetChangeLogType' } } },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/bank/card/delete': {
			post: {
				tags: ['银行卡管理'],
				summary: '删除',
				operationId: 'deleteUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/BankCardDeleteReq' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/bank/card/detail': {
			post: {
				tags: ['银行卡管理'],
				summary: '详情',
				operationId: 'queryUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/BankCardDetailReq' }
					}
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/BankCardDetailResp' } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/bank/card/query': {
			post: {
				tags: ['银行卡管理'],
				summary: '查询',
				operationId: 'queryUsingPOST_1',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/BankCardQueryReq' }
					}
				],
				responses: {
					200: { description: 'OK', schema: { type: 'array', items: { $ref: '#/definitions/BankCardQueryResp' } } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/bank/card/update': {
			post: {
				tags: ['银行卡管理'],
				summary: '添加或编辑',
				operationId: 'updateUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/BankCardUpdateReq' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/bank/detail': {
			post: {
				tags: ['银行管理'],
				summary: '详情',
				operationId: 'detailUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/BankQueryReq' }
					}
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/BankDetailResp' } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/bank/query': {
			post: {
				tags: ['银行管理'],
				summary: '查询',
				operationId: 'queryUsingPOST_2',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/BankQueryReq' }
					}
				],
				responses: {
					200: { description: 'OK', schema: { type: 'array', items: { $ref: '#/definitions/BankQueryResp' } } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/bank/update': {
			post: {
				tags: ['银行管理'],
				summary: '添加或编辑',
				operationId: 'updateUsingPOST_1',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/银行属性请求' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/bonus/config/get': {
			post: {
				tags: ['包网商分红配置'],
				summary: '获取分红配置信息',
				operationId: 'getUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'detailReq',
						description: 'detailReq',
						required: true,
						schema: { $ref: '#/definitions/获取分红配置参数对象' }
					}
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/分红配置详情' } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/bonus/config/getItems/{userId}': {
			post: {
				tags: ['包网商分红配置'],
				summary: '通过userId获取分红配置明细',
				operationId: 'getItemByUserIdUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{ name: 'userId', in: 'path', description: 'userId', required: true, type: 'integer', format: 'int64' }
				],
				responses: {
					200: { description: 'OK', schema: { type: 'array', items: { $ref: '#/definitions/分红配置明细' } } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/bonus/config/save': {
			post: {
				tags: ['包网商分红配置'],
				summary: '保存分红配置信息',
				operationId: 'saveAgentBonusCnfUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'cnfReq',
						description: 'cnfReq',
						required: true,
						schema: { $ref: '#/definitions/编辑分红配置参数对象' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/channel/deposit/withdraw/summary': {
			post: {
				tags: ['渠道充提信息接口'],
				summary: '汇总信息',
				operationId: 'summaryUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/ChannelDepostWithdrawSummaryReq' }
					}
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/ChannelDepostWithdrawSummaryResp' } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/channel/fetch/game/action': {
			post: {
				tags: ['补偿渠道拉取游戏'],
				summary: '拉取',
				operationId: 'actionUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/FetchGameRecordReq' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/channel/fetch/game/actionPeriod': {
			post: {
				tags: ['补偿渠道拉取游戏'],
				summary: '拉取周期聚合',
				operationId: 'actionHourUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/FetchGameRecordReq' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/channel/rate/delete': {
			post: {
				tags: ['渠道汇率'],
				summary: '删除',
				operationId: 'checkRefuseUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/ChannelRateUpdateReq' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/channel/rate/list': {
			post: {
				tags: ['渠道汇率'],
				summary: '汇率列表',
				operationId: 'listUsingPOST_1',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' }
				],
				responses: {
					200: { description: 'OK', schema: { type: 'array', items: { $ref: '#/definitions/ChannelRateResp' } } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/channel/rate/update': {
			post: {
				tags: ['渠道汇率'],
				summary: '新增或更新',
				operationId: 'checkPassUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/ChannelRateUpdateReq' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/cms/article/add': {
			post: {
				tags: ['公告管理'],
				summary: '添加公告',
				operationId: 'addUsingPOST_1',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/AddArticleReq' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/cms/article/disable': {
			post: {
				tags: ['公告管理'],
				summary: '停用公告',
				operationId: 'disableUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/ArticleIdReq' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/cms/article/publish': {
			post: {
				tags: ['公告管理'],
				summary: '启用公告',
				operationId: 'publishUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/ArticleIdReq' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/cms/article/queryList': {
			post: {
				tags: ['公告管理'],
				summary: '查询公告列表',
				operationId: 'queryListUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/QueryArticleReq' }
					}
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/PageResult«ArticleResp»' } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/cms/article/queryOne': {
			post: {
				tags: ['公告管理'],
				summary: '查询公告详情',
				operationId: 'queryOneUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/ArticleIdReq' }
					}
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/ArticleResp' } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/cms/article/update': {
			post: {
				tags: ['公告管理'],
				summary: '修改公告',
				operationId: 'updateUsingPOST_3',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/UpdateArticleReq' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/cms/banner/add': {
			post: {
				tags: ['banner管理'],
				summary: '添加横幅',
				operationId: 'addUsingPOST_2',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/AddBannerReq' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/cms/banner/disable': {
			post: {
				tags: ['banner管理'],
				summary: '停用横幅',
				operationId: 'disableUsingPOST_1',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/BannerNoReq' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/cms/banner/publish': {
			post: {
				tags: ['banner管理'],
				summary: '启用横幅',
				operationId: 'publishUsingPOST_1',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/BannerNoReq' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/cms/banner/queryList': {
			post: {
				tags: ['banner管理'],
				summary: '查询横幅列表',
				operationId: 'queryListUsingPOST_1',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/QueryBannerReq' }
					}
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/PageResult«BannerResp»' } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/cms/banner/queryOne': {
			post: {
				tags: ['banner管理'],
				summary: '查询横幅详情',
				operationId: 'queryOneUsingPOST_1',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/BannerNoReq' }
					}
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/BannerResp' } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/cms/banner/update': {
			post: {
				tags: ['banner管理'],
				summary: '修改横幅',
				operationId: 'updateUsingPOST_4',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/UpdateBannerReq' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/cms/label/add': {
			post: {
				tags: ['标签管理'],
				summary: '新增用户标签',
				operationId: 'addLabelUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'labelReq',
						description: 'labelReq',
						required: true,
						schema: { $ref: '#/definitions/UserLabelReq' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/cms/label/delete': {
			get: {
				tags: ['标签管理'],
				summary: '删除用户标签',
				operationId: 'deleteLabelUsingGET',
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{ name: 'labelCode', in: 'query', description: '标签编码', required: false, type: 'string' }
				],
				responses: {
					200: { description: 'OK' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/cms/label/queryAll': {
			get: {
				tags: ['标签管理'],
				summary: '查询所有用户标签',
				operationId: 'queryLabelsUsingGET',
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' }
				],
				responses: {
					200: { description: 'OK', schema: { type: 'array', items: { $ref: '#/definitions/UserLabelResp' } } },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/cms/label/update': {
			post: {
				tags: ['标签管理'],
				summary: '编辑用户标签',
				operationId: 'updateLabelUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'update',
						description: 'update',
						required: true,
						schema: { $ref: '#/definitions/UserLabelUpdate' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/collect/get': {
			get: {
				tags: ['归集管理'],
				summary: '获取归集配置信息',
				operationId: 'getUsingGET',
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' }
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/CollectResp' } },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/collect/updateCollect': {
			post: {
				tags: ['归集管理'],
				summary: '更新归集地址',
				operationId: 'updateCollectUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{ in: 'body', name: 'req', description: 'req', required: true, schema: { $ref: '#/definitions/AddressReq' } }
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/collect/updateConfig': {
			post: {
				tags: ['归集管理'],
				summary: '更新归集配置',
				operationId: 'updateUsingPOST_5',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{ in: 'body', name: 'req', description: 'req', required: true, schema: { $ref: '#/definitions/CollectReq' } }
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/collect/updateHot': {
			post: {
				tags: ['归集管理'],
				summary: '更新头寸',
				operationId: 'updateHotUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/PrivateKeyReq' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/common/log/operate/exportExcel': {
			get: {
				tags: ['日志相关接口'],
				summary: '日志记录 - 导出excel',
				operationId: 'exportExcelUsingGET_5',
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						name: 'pageIndex',
						in: 'query',
						description: '页码 从1开始计数',
						required: false,
						type: 'integer',
						format: 'int32'
					},
					{
						name: 'pageSize',
						in: 'query',
						description: '页容 区间[1, 1000]',
						required: false,
						type: 'integer',
						format: 'int32'
					},
					{ name: 'userId', in: 'query', description: '用户编号', required: false, type: 'integer', format: 'int64' },
					{ name: 'userAccount', in: 'query', description: '用户账号', required: false, type: 'string' },
					{ name: 'operationBiz', in: 'query', description: '系统模块', required: false, type: 'string' },
					{ name: 'operationType', in: 'query', description: '操作类型', required: false, type: 'string' },
					{ name: 'remark', in: 'query', description: '操作内容', required: false, type: 'string' },
					{ name: 'start', in: 'query', description: '开始时间', required: false, type: 'string', format: 'date-time' },
					{ name: 'end', in: 'query', description: '结束时间', required: false, type: 'string', format: 'date-time' }
				],
				responses: {
					200: { description: 'OK' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/common/log/operate/list': {
			post: {
				tags: ['日志相关接口'],
				summary: '查询操作日志信息',
				operationId: 'listOperateLogUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/OperationLogReq' }
					}
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/PageResult«OperationLogVo»' } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/common/log/queryCheckLog': {
			post: {
				tags: ['日志相关接口'],
				summary: '查询审核日志信息',
				operationId: 'queryCheckLogUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'request',
						description: 'request',
						required: true,
						schema: { $ref: '#/definitions/CheckLogRequestVo' }
					}
				],
				responses: {
					200: { description: 'OK', schema: { type: 'array', items: { $ref: '#/definitions/CheckLogVo' } } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/currency/get': {
			post: {
				tags: ['系统币种'],
				summary: '基础币种',
				operationId: 'getUsingPOST_1',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' }
				],
				responses: {
					200: { description: 'OK', schema: { type: 'string' } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/currency/query': {
			post: {
				tags: ['币种管理'],
				summary: '查询',
				operationId: 'queryUsingPOST_3',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/CurrencyQueryReq' }
					}
				],
				responses: {
					200: { description: 'OK', schema: { type: 'array', items: { $ref: '#/definitions/币种查询返回信息' } } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/currency/update': {
			post: {
				tags: ['币种管理'],
				summary: '添加或编辑',
				operationId: 'updateUsingPOST_6',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/币种更新请求信息' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/currency/usdt/rate': {
			post: {
				tags: ['币种管理'],
				summary: 'USDT汇率',
				operationId: 'usdtRateUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' }
				],
				responses: {
					200: { description: 'OK', schema: { type: 'number' } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/currency/usdt/update': {
			post: {
				tags: ['币种管理'],
				summary: '添加或编辑USDT汇率',
				operationId: 'updateUsingPOST_7',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/USDT更新请求信息' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/daily/statistics/depositWithdraw': {
			post: {
				tags: ['日常数据'],
				summary: '充/提数据统计',
				operationId: 'depositWithdrawUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/DailyStatisticsReq' }
					}
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/ProxyDailyStatResp' } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/daily/statistics/depositWithdrawUserCount': {
			post: {
				tags: ['日常数据'],
				summary: '充值/提现人数查询',
				operationId: 'depositWithdrawUserCountUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/DailyStatisticsReq' }
					}
				],
				responses: {
					200: { description: 'OK', schema: { type: 'array', items: { $ref: '#/definitions/DepositUserCountResp' } } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/daily/statistics/userAction': {
			post: {
				tags: ['日常数据'],
				summary: '注册和活跃数据',
				operationId: 'userActionUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/DailyStatisticsReq' }
					}
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/UserActionStatisticsResp' } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/deposit/checkPass': {
			post: {
				tags: ['充币信息'],
				summary: '审核通过',
				operationId: 'checkPassUsingPOST_1',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/DepositNoReq' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/deposit/checkRefuse': {
			post: {
				tags: ['充币信息'],
				summary: '审核拒绝',
				operationId: 'checkRefuseUsingPOST_1',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/DepositRefuseReq' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/deposit/config/getDigital/{chain}': {
			post: {
				tags: ['充币和充值配置'],
				summary: '获取数字货币充币配置',
				operationId: 'getDigitalUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{ name: 'chain', in: 'path', description: 'chain', required: true, type: 'string' }
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/WithdrawInfoResp' } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/deposit/config/getLeger/{currencyCode}': {
			post: {
				tags: ['充币和充值配置'],
				summary: '获取法币充值配置',
				operationId: 'getLegerUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{ name: 'currencyCode', in: 'path', description: 'currencyCode', required: true, type: 'string' }
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/WithdrawInfoResp' } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/deposit/config/setDigital': {
			post: {
				tags: ['充币和充值配置'],
				summary: '设置数字货币充币配置',
				operationId: 'setDigitalTronUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'info',
						description: 'info',
						required: true,
						schema: { $ref: '#/definitions/WithdrawInfoResp' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/deposit/config/setLeger': {
			post: {
				tags: ['充币和充值配置'],
				summary: '设置提现配置',
				operationId: 'setLegerUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'info',
						description: 'info',
						required: true,
						schema: { $ref: '#/definitions/WithdrawInfoResp' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/deposit/exportExcel': {
			get: {
				tags: ['充币信息'],
				summary: '充币记录 - 导出excel',
				operationId: 'exportExcelUsingGET_2',
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						name: 'pageIndex',
						in: 'query',
						description: '页码 从1开始计数',
						required: false,
						type: 'integer',
						format: 'int32'
					},
					{
						name: 'pageSize',
						in: 'query',
						description: '页容 区间[1, 1000]',
						required: false,
						type: 'integer',
						format: 'int32'
					},
					{
						name: 'status',
						in: 'query',
						description: '状态：0:待审核 1:审核通过 2:审核拒绝',
						required: false,
						type: 'integer',
						format: 'int32'
					},
					{ name: 'userId', in: 'query', description: '用户编号', required: false, type: 'integer', format: 'int64' },
					{ name: 'userAccount', in: 'query', description: '用户账号', required: false, type: 'string' },
					{
						name: 'depositNo',
						in: 'query',
						description: '订单编号',
						required: false,
						type: 'integer',
						format: 'int64'
					},
					{
						name: 'currencyType',
						in: 'query',
						description: '充值类型:1 数字货币；2 法币',
						required: false,
						type: 'integer',
						format: 'int32'
					},
					{ name: 'fromAddress', in: 'query', description: '充币地址', required: false, type: 'string' },
					{
						name: 'start',
						in: 'query',
						description: '交易时间开始',
						required: false,
						type: 'string',
						format: 'date-time'
					},
					{
						name: 'end',
						in: 'query',
						description: '交易时间结束',
						required: false,
						type: 'string',
						format: 'date-time'
					},
					{
						name: 'proxyUserId',
						in: 'query',
						description: '代理ID',
						required: false,
						type: 'integer',
						format: 'int64'
					},
					{ name: 'proxyUserAccount', in: 'query', description: '包网商帐号', required: false, type: 'string' },
					{
						name: 'parentId',
						in: 'query',
						description: '上级代理ID',
						required: false,
						type: 'integer',
						format: 'int64'
					},
					{ name: 'parentAccount', in: 'query', description: '上级代理帐号', required: false, type: 'string' }
				],
				responses: {
					200: { description: 'OK' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/deposit/getCard': {
			post: {
				tags: ['充币信息'],
				summary: '收款信息',
				operationId: 'cardUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/DepositNoReq' }
					}
				],
				responses: {
					200: { description: 'OK', schema: { type: 'array', items: { $ref: '#/definitions/DepositBankCardResp' } } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/deposit/list': {
			post: {
				tags: ['充币信息'],
				summary: '充币记录',
				operationId: 'listUsingPOST_2',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/DepositQueryReq' }
					}
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/PageResult«DepositQueryResp»' } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/deposit/summary': {
			post: {
				tags: ['充币信息'],
				summary: '汇总信息',
				operationId: 'summaryUsingPOST_1',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/DepositSummaryReq' }
					}
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/DepositSummaryResp' } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/fee/statistics/fee': {
			post: {
				tags: ['手续费'],
				summary: '手续费',
				operationId: 'feeUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/FeeStatisticsReq' }
					}
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/FeeStatisticsResp' } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/file/download/{fileNo}': {
			get: {
				tags: ['文件上传下载'],
				summary: '下载文件',
				operationId: 'downloadUsingGET',
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{ name: 'fileNo', in: 'path', description: 'fileNo', required: true, type: 'string' },
					{
						name: 'type',
						in: 'query',
						description: 'type',
						required: false,
						type: 'integer',
						default: 0,
						format: 'int32'
					}
				],
				responses: {
					200: { description: 'OK' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			},
			post: {
				tags: ['文件上传下载'],
				summary: '下载文件',
				operationId: 'downloadUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{ name: 'fileNo', in: 'path', description: 'fileNo', required: true, type: 'string' },
					{
						name: 'type',
						in: 'query',
						description: 'type',
						required: false,
						type: 'integer',
						default: 0,
						format: 'int32'
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/file/upload': {
			post: {
				tags: ['文件上传下载'],
				summary: '上传文件',
				operationId: 'uploadUsingPOST',
				consumes: ['multipart/form-data'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{ name: 'file', in: 'formData', description: 'file', required: true, type: 'file' }
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/UploadResultResp' } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/game/base/query': {
			post: {
				tags: ['基础游戏相关'],
				summary: '查询所有可用的游戏',
				operationId: 'queryUsingPOST_4',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/BaseGameReq' }
					}
				],
				responses: {
					200: { description: 'OK', schema: { type: 'array', items: { $ref: '#/definitions/BaseGameResp' } } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/game/base/queryList': {
			post: {
				tags: ['基础游戏相关'],
				summary: '分页查询游戏基础库',
				operationId: 'queryListUsingPOST_3',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/BaseGameListReq' }
					}
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/PageResult«BaseGameListResp»' } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/game/base/updateIcon': {
			post: {
				tags: ['基础游戏相关'],
				summary: '修改游戏图标',
				operationId: 'updateIconUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/UpdateGameIconReq' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/game/base/updateLabel': {
			post: {
				tags: ['基础游戏相关'],
				summary: '设置游戏标签',
				operationId: 'updateLabelUsingPOST_1',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/UpdateGameLabelReq' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/game/base/updateType': {
			post: {
				tags: ['基础游戏相关'],
				summary: '批量/修改游戏类型',
				operationId: 'updateTypeUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/UpdateGameTypeReq' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/game/channel/changeLogo': {
			post: {
				tags: ['游戏渠道相关'],
				summary: '修改渠道logo',
				operationId: 'changeLogoUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/ChangeLogoReq' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/game/channel/gameType/queryAll': {
			post: {
				tags: ['游戏渠道相关'],
				summary: '查询游戏类型信息',
				operationId: 'queryGameTypeUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' }
				],
				responses: {
					200: { description: 'OK', schema: { type: 'array', items: { $ref: '#/definitions/ChannelTypeResp' } } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/game/channel/queryAll': {
			post: {
				tags: ['游戏渠道相关'],
				summary: '查询渠道',
				operationId: 'queryAllUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' }
				],
				responses: {
					200: { description: 'OK', schema: { type: 'array', items: { $ref: '#/definitions/GameChannelSummary' } } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/game/channel/queryDetail': {
			post: {
				tags: ['游戏渠道相关'],
				summary: '查询渠道详情',
				operationId: 'queryDetailUsingPOST_1',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/ChannelIdReq' }
					}
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/GameChannelResp' } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/game/channel/queryList': {
			post: {
				tags: ['游戏渠道相关'],
				summary: '查询渠道列表',
				operationId: 'queryListUsingPOST_4',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/QueryGameChannelReq' }
					}
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/PageResult«GameChannelResp»' } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/game/exportExcel': {
			get: {
				tags: ['游戏记录相关'],
				summary: '导出excel',
				operationId: 'exportExcelUsingGET_7',
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						name: 'pageIndex',
						in: 'query',
						description: '页码 从1开始计数',
						required: false,
						type: 'integer',
						format: 'int32'
					},
					{
						name: 'pageSize',
						in: 'query',
						description: '页容 区间[1, 1000]',
						required: false,
						type: 'integer',
						format: 'int32'
					},
					{ name: 'factoryCode', in: 'query', description: '游戏渠道', required: false, type: 'string' },
					{ name: 'typeId', in: 'query', description: '游戏类型id', required: false, type: 'integer', format: 'int64' },
					{ name: 'start', in: 'query', description: '开始时间', required: false, type: 'integer', format: 'int64' },
					{ name: 'end', in: 'query', description: '结束时间', required: false, type: 'integer', format: 'int64' },
					{ name: 'userId', in: 'query', description: '用户编号', required: false, type: 'integer', format: 'int64' },
					{ name: 'userName', in: 'query', description: '用户名', required: false, type: 'string' }
				],
				responses: {
					200: { description: 'OK' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/game/factory/changeLogo': {
			post: {
				tags: ['游戏厂商相关'],
				summary: '修改厂商logo',
				operationId: 'changeLogoUsingPOST_1',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/ChangeLogoReq' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/game/factory/queryAll': {
			post: {
				tags: ['游戏厂商相关'],
				summary: '查询所有厂商',
				operationId: 'queryAllUsingPOST_1',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' }
				],
				responses: {
					200: { description: 'OK', schema: { type: 'array', items: { $ref: '#/definitions/GameFactorySummary' } } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/game/factory/queryDetail': {
			post: {
				tags: ['游戏厂商相关'],
				summary: '查询厂商详情',
				operationId: 'queryDetailUsingPOST_2',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/FactoryCodeReq' }
					}
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/GameFactoryResp' } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/game/factory/queryList': {
			post: {
				tags: ['游戏厂商相关'],
				summary: '查询厂商列表',
				operationId: 'queryListUsingPOST_5',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/QueryGameFactoryReq' }
					}
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/PageResult«GameFactoryResp»' } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/game/getRecord': {
			post: {
				tags: ['游戏记录相关'],
				summary: '游戏记录',
				operationId: 'getRecordUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/UserGameRecordReq' }
					}
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/PageResult«UserGameRecordResp»' } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/game/record/chessCard': {
			post: {
				tags: ['用户游戏记录'],
				summary: '棋牌游戏记录',
				operationId: 'chessCardUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/ChessCardGameRecordReq' }
					}
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/PageResult«ChessCardGameRecordResp»' } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/game/record/chessCardExport': {
			get: {
				tags: ['用户游戏记录'],
				summary: '棋牌游戏记录导出',
				operationId: 'chessCardExportUsingGET',
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						name: 'pageIndex',
						in: 'query',
						description: '页码 从1开始计数',
						required: false,
						type: 'integer',
						format: 'int32'
					},
					{
						name: 'pageSize',
						in: 'query',
						description: '页容 区间[1, 1000]',
						required: false,
						type: 'integer',
						format: 'int32'
					},
					{ name: 'userName', in: 'query', description: '用户名', required: false, type: 'string' },
					{ name: 'userId', in: 'query', description: '用户Id', required: false, type: 'integer', format: 'int64' },
					{ name: 'channelId', in: 'query', description: '用户Id', required: false, type: 'string' },
					{
						name: 'betStartTime',
						in: 'query',
						description: '注单时间-开始',
						required: false,
						type: 'string',
						format: 'date-time'
					},
					{
						name: 'betEndTime',
						in: 'query',
						description: '注单时间-结束',
						required: false,
						type: 'string',
						format: 'date-time'
					},
					{ name: 'factoryCode', in: 'query', description: '厂商', required: false, type: 'string' }
				],
				responses: {
					200: { description: 'OK' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/game/record/chicken': {
			post: {
				tags: ['用户游戏记录'],
				summary: '斗鸡游戏记录',
				operationId: 'chickenUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/ChickenGameRecordReq' }
					}
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/PageResult«ChickenGameRecordResp»' } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/game/record/chickenExport': {
			get: {
				tags: ['用户游戏记录'],
				summary: '斗鸡游戏记录导出',
				operationId: 'chickenExportUsingGET',
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						name: 'pageIndex',
						in: 'query',
						description: '页码 从1开始计数',
						required: false,
						type: 'integer',
						format: 'int32'
					},
					{
						name: 'pageSize',
						in: 'query',
						description: '页容 区间[1, 1000]',
						required: false,
						type: 'integer',
						format: 'int32'
					},
					{ name: 'userName', in: 'query', description: '用户名', required: false, type: 'string' },
					{ name: 'userId', in: 'query', description: '用户Id', required: false, type: 'integer', format: 'int64' },
					{ name: 'channelId', in: 'query', description: '用户Id', required: false, type: 'string' },
					{
						name: 'betStartTime',
						in: 'query',
						description: '注单时间-开始',
						required: false,
						type: 'string',
						format: 'date-time'
					},
					{
						name: 'betEndTime',
						in: 'query',
						description: '注单时间-结束',
						required: false,
						type: 'string',
						format: 'date-time'
					},
					{ name: 'factoryCode', in: 'query', description: '厂商', required: false, type: 'string' }
				],
				responses: {
					200: { description: 'OK' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/game/record/electron': {
			post: {
				tags: ['用户游戏记录'],
				summary: '电子游戏记录',
				operationId: 'electronUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/ElectronGameRecordReq' }
					}
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/PageResult«ElectronGameRecordResp»' } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/game/record/electronExport': {
			get: {
				tags: ['用户游戏记录'],
				summary: '电子游戏记录导出',
				operationId: 'electronExportUsingGET',
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						name: 'pageIndex',
						in: 'query',
						description: '页码 从1开始计数',
						required: false,
						type: 'integer',
						format: 'int32'
					},
					{
						name: 'pageSize',
						in: 'query',
						description: '页容 区间[1, 1000]',
						required: false,
						type: 'integer',
						format: 'int32'
					},
					{ name: 'userName', in: 'query', description: '用户名', required: false, type: 'string' },
					{ name: 'userId', in: 'query', description: '用户Id', required: false, type: 'integer', format: 'int64' },
					{ name: 'channelId', in: 'query', description: '用户Id', required: false, type: 'string' },
					{
						name: 'betStartTime',
						in: 'query',
						description: '注单时间-开始',
						required: false,
						type: 'string',
						format: 'date-time'
					},
					{
						name: 'betEndTime',
						in: 'query',
						description: '注单时间-结束',
						required: false,
						type: 'string',
						format: 'date-time'
					},
					{ name: 'factoryCode', in: 'query', description: '厂商', required: false, type: 'string' }
				],
				responses: {
					200: { description: 'OK' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/game/record/esport': {
			post: {
				tags: ['用户游戏记录'],
				summary: '电竞游戏记录',
				operationId: 'esportUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/EsportGameRecordReq' }
					}
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/PageResult«EsportGameRecordResp»' } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/game/record/esportExport': {
			get: {
				tags: ['用户游戏记录'],
				summary: '电竞游戏记录导出',
				operationId: 'esportExportUsingGET',
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						name: 'pageIndex',
						in: 'query',
						description: '页码 从1开始计数',
						required: false,
						type: 'integer',
						format: 'int32'
					},
					{
						name: 'pageSize',
						in: 'query',
						description: '页容 区间[1, 1000]',
						required: false,
						type: 'integer',
						format: 'int32'
					},
					{ name: 'userName', in: 'query', description: '用户名', required: false, type: 'string' },
					{ name: 'userId', in: 'query', description: '用户Id', required: false, type: 'integer', format: 'int64' },
					{ name: 'channelId', in: 'query', description: '渠道Id', required: false, type: 'string' },
					{
						name: 'betStartTime',
						in: 'query',
						description: '注单时间-开始',
						required: false,
						type: 'string',
						format: 'date-time'
					},
					{
						name: 'betEndTime',
						in: 'query',
						description: '注单时间-结束',
						required: false,
						type: 'string',
						format: 'date-time'
					},
					{ name: 'factoryCode', in: 'query', description: '厂商', required: false, type: 'string' }
				],
				responses: {
					200: { description: 'OK' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/game/record/fish': {
			post: {
				tags: ['用户游戏记录'],
				summary: '捕鱼游戏记录',
				operationId: 'fishUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/FishGameRecordReq' }
					}
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/PageResult«FishGameRecordResp»' } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/game/record/fishExport': {
			get: {
				tags: ['用户游戏记录'],
				summary: '捕鱼游戏记录导出',
				operationId: 'fishExportUsingGET',
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						name: 'pageIndex',
						in: 'query',
						description: '页码 从1开始计数',
						required: false,
						type: 'integer',
						format: 'int32'
					},
					{
						name: 'pageSize',
						in: 'query',
						description: '页容 区间[1, 1000]',
						required: false,
						type: 'integer',
						format: 'int32'
					},
					{ name: 'userName', in: 'query', description: '用户名', required: false, type: 'string' },
					{ name: 'userId', in: 'query', description: '用户Id', required: false, type: 'integer', format: 'int64' },
					{ name: 'channelId', in: 'query', description: '用户Id', required: false, type: 'string' },
					{
						name: 'betStartTime',
						in: 'query',
						description: '注单时间-开始',
						required: false,
						type: 'string',
						format: 'date-time'
					},
					{
						name: 'betEndTime',
						in: 'query',
						description: '注单时间-结束',
						required: false,
						type: 'string',
						format: 'date-time'
					},
					{ name: 'factoryCode', in: 'query', description: '厂商', required: false, type: 'string' }
				],
				responses: {
					200: { description: 'OK' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/game/record/liveVideo': {
			post: {
				tags: ['用户游戏记录'],
				summary: '真人视讯游戏记录',
				operationId: 'liveVideoUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/LiveVideoGameRecordReq' }
					}
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/PageResult«LiveVideoGameRecordResp»' } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/game/record/liveVideoExport': {
			get: {
				tags: ['用户游戏记录'],
				summary: '真人视讯游戏记录导出',
				operationId: 'liveVideoExportUsingGET',
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						name: 'pageIndex',
						in: 'query',
						description: '页码 从1开始计数',
						required: false,
						type: 'integer',
						format: 'int32'
					},
					{
						name: 'pageSize',
						in: 'query',
						description: '页容 区间[1, 1000]',
						required: false,
						type: 'integer',
						format: 'int32'
					},
					{ name: 'userName', in: 'query', description: '用户名', required: false, type: 'string' },
					{ name: 'userId', in: 'query', description: '用户Id', required: false, type: 'integer', format: 'int64' },
					{ name: 'channelId', in: 'query', description: '用户Id', required: false, type: 'string' },
					{
						name: 'betStartTime',
						in: 'query',
						description: '注单时间-开始',
						required: false,
						type: 'string',
						format: 'date-time'
					},
					{
						name: 'betEndTime',
						in: 'query',
						description: '注单时间-结束',
						required: false,
						type: 'string',
						format: 'date-time'
					},
					{ name: 'factoryCode', in: 'query', description: '厂商', required: false, type: 'string' }
				],
				responses: {
					200: { description: 'OK' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/game/record/lottery': {
			post: {
				tags: ['用户游戏记录'],
				summary: '彩票游戏记录',
				operationId: 'lotteryUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/LotteryGameRecordReq' }
					}
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/PageResult«LotteryGameRecordResp»' } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/game/record/lotteryExport': {
			get: {
				tags: ['用户游戏记录'],
				summary: '彩票游戏记录导出',
				operationId: 'lotteryExportUsingGET',
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						name: 'pageIndex',
						in: 'query',
						description: '页码 从1开始计数',
						required: false,
						type: 'integer',
						format: 'int32'
					},
					{
						name: 'pageSize',
						in: 'query',
						description: '页容 区间[1, 1000]',
						required: false,
						type: 'integer',
						format: 'int32'
					},
					{ name: 'userName', in: 'query', description: '用户名', required: false, type: 'string' },
					{ name: 'userId', in: 'query', description: '用户Id', required: false, type: 'integer', format: 'int64' },
					{ name: 'channelId', in: 'query', description: '渠道Id', required: false, type: 'string' },
					{
						name: 'betStartTime',
						in: 'query',
						description: '注单时间-开始',
						required: false,
						type: 'string',
						format: 'date-time'
					},
					{
						name: 'betEndTime',
						in: 'query',
						description: '注单时间-结束',
						required: false,
						type: 'string',
						format: 'date-time'
					},
					{ name: 'factoryCode', in: 'query', description: '厂商', required: false, type: 'string' }
				],
				responses: {
					200: { description: 'OK' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/game/record/ordinary': {
			post: {
				tags: ['用户游戏记录'],
				summary: '游戏记录',
				operationId: 'ordinaryRecordUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/OrdinaryGameRecordReq' }
					}
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/PageResult«OrdinaryGameRecordResp»' } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/game/record/ordinaryExport': {
			get: {
				tags: ['用户游戏记录'],
				summary: '游戏记录导出',
				operationId: 'ordinaryExportUsingGET',
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						name: 'pageIndex',
						in: 'query',
						description: '页码 从1开始计数',
						required: false,
						type: 'integer',
						format: 'int32'
					},
					{
						name: 'pageSize',
						in: 'query',
						description: '页容 区间[1, 1000]',
						required: false,
						type: 'integer',
						format: 'int32'
					},
					{ name: 'userName', in: 'query', description: '用户名', required: false, type: 'string' },
					{ name: 'userId', in: 'query', description: '用户Id', required: false, type: 'integer', format: 'int64' },
					{ name: 'channelId', in: 'query', description: '渠道Id', required: false, type: 'string' },
					{ name: 'factoryCode', in: 'query', description: '厂商', required: false, type: 'string' },
					{ name: 'gameType', in: 'query', description: '游戏类型', required: false, type: 'integer', format: 'int32' },
					{
						name: 'resultFlag',
						in: 'query',
						description: '游戏结果',
						required: false,
						type: 'integer',
						format: 'int32'
					},
					{ name: 'status', in: 'query', description: '状态', required: false, type: 'integer', format: 'int32' },
					{
						name: 'betStartTime',
						in: 'query',
						description: '注单时间-开始',
						required: false,
						type: 'string',
						format: 'date-time'
					},
					{
						name: 'betEndTime',
						in: 'query',
						description: '注单时间-结束',
						required: false,
						type: 'string',
						format: 'date-time'
					},
					{ name: 'gameMainType', in: 'query', description: '游戏主类型', required: false, type: 'string' }
				],
				responses: {
					200: { description: 'OK' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/game/record/sport': {
			post: {
				tags: ['用户游戏记录'],
				summary: '体育游戏记录',
				operationId: 'sportUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/SportGameRecordReq' }
					}
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/PageResult«SportGameRecordResp»' } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/game/record/sportExport': {
			get: {
				tags: ['用户游戏记录'],
				summary: '体育游戏记录导出',
				operationId: 'sportExportUsingGET',
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						name: 'pageIndex',
						in: 'query',
						description: '页码 从1开始计数',
						required: false,
						type: 'integer',
						format: 'int32'
					},
					{
						name: 'pageSize',
						in: 'query',
						description: '页容 区间[1, 1000]',
						required: false,
						type: 'integer',
						format: 'int32'
					},
					{ name: 'userName', in: 'query', description: '用户名', required: false, type: 'string' },
					{ name: 'userId', in: 'query', description: '用户Id', required: false, type: 'integer', format: 'int64' },
					{ name: 'channelId', in: 'query', description: '用户Id', required: false, type: 'string' },
					{
						name: 'betStartTime',
						in: 'query',
						description: '注单时间-开始',
						required: false,
						type: 'string',
						format: 'date-time'
					},
					{
						name: 'betEndTime',
						in: 'query',
						description: '注单时间-结束',
						required: false,
						type: 'string',
						format: 'date-time'
					},
					{ name: 'factoryCode', in: 'query', description: '厂商', required: false, type: 'string' }
				],
				responses: {
					200: { description: 'OK' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/game/statistics/channel/exportExcel': {
			get: {
				tags: ['游戏统计'],
				summary: '导出渠道统计excel',
				operationId: 'exportExcelUsingGET_3',
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						name: 'pageIndex',
						in: 'query',
						description: '页码 从1开始计数',
						required: false,
						type: 'integer',
						format: 'int32'
					},
					{
						name: 'pageSize',
						in: 'query',
						description: '页容 区间[1, 1000]',
						required: false,
						type: 'integer',
						format: 'int32'
					},
					{ name: 'channelId', in: 'query', description: '游戏渠道编号', required: false, type: 'string' },
					{
						name: 'proxyUid',
						in: 'query',
						description: '包网商编号',
						required: false,
						type: 'integer',
						format: 'int64'
					},
					{ name: 'factoryCode', in: 'query', description: '游戏渠道编号', required: false, type: 'string' },
					{ name: 'start', in: 'query', description: '开始时间', required: false, type: 'integer', format: 'int64' },
					{ name: 'end', in: 'query', description: '结束时间', required: false, type: 'integer', format: 'int64' }
				],
				responses: {
					200: { description: 'OK' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/game/statistics/channel/list': {
			post: {
				tags: ['游戏统计'],
				summary: '渠道 - 按日统计记录',
				operationId: 'channelListUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/GameChannelStatisticsReq' }
					}
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/PageResult«GameChannelStatisticsResp»' } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/game/statistics/proxy/exportExcel': {
			get: {
				tags: ['游戏统计'],
				summary: '导出excel',
				operationId: 'exportExcelUsingGET_4',
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						name: 'pageIndex',
						in: 'query',
						description: '页码 从1开始计数',
						required: false,
						type: 'integer',
						format: 'int32'
					},
					{
						name: 'pageSize',
						in: 'query',
						description: '页容 区间[1, 1000]',
						required: false,
						type: 'integer',
						format: 'int32'
					},
					{ name: 'proxyUid', in: 'query', description: '代理ID', required: false, type: 'integer', format: 'int64' },
					{ name: 'start', in: 'query', description: '开始日期', required: false, type: 'integer', format: 'int64' },
					{ name: 'end', in: 'query', description: '结束日期', required: false, type: 'integer', format: 'int64' }
				],
				responses: {
					200: { description: 'OK' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/game/statistics/proxy/list': {
			post: {
				tags: ['游戏统计'],
				summary: '代理 - 按日统计记录',
				operationId: 'listUsingPOST_3',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/StatisticsReq' }
					}
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/PageResult«GameProxyStatisticsResp»' } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/game/statistics/proxy/summary': {
			post: {
				tags: ['游戏统计'],
				summary: '代理 - 汇总',
				operationId: 'summaryUsingPOST_2',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{ in: 'body', name: 'req', description: 'req', required: true, schema: { $ref: '#/definitions/SummaryReq' } }
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/GameProxyStatisticsResp' } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/game/summary': {
			post: {
				tags: ['游戏记录相关'],
				summary: '概况统计',
				operationId: 'summaryUsingPOST_3',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/GameSummaryReq' }
					}
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/GameSummaryResp' } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/game/type/add': {
			post: {
				tags: ['游戏类型相关'],
				summary: '添加游戏类型',
				operationId: 'addUsingPOST_5',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{ in: 'body', name: 'req', description: 'req', required: true, schema: { $ref: '#/definitions/AddTypeReq' } }
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/game/type/delete': {
			post: {
				tags: ['游戏类型相关'],
				summary: '删除游戏类型',
				operationId: 'deleteUsingPOST_3',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/DeleteTypeReq' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/game/type/gameMainTypeList': {
			post: {
				tags: ['游戏类型相关'],
				summary: '主游戏类型列表',
				operationId: 'queryUsingPOST_5',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' }
				],
				responses: {
					200: { description: 'OK', schema: { type: 'array', items: { $ref: '#/definitions/GameMainTypeResp' } } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/game/type/query': {
			post: {
				tags: ['游戏类型相关'],
				summary: '查询游戏类型',
				operationId: 'queryUsingPOST_6',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/GameTypeQueryReq' }
					}
				],
				responses: {
					200: { description: 'OK', schema: { type: 'array', items: { $ref: '#/definitions/GameTypeResp' } } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/game/type/update': {
			post: {
				tags: ['游戏类型相关'],
				summary: '修改游戏类型名称',
				operationId: 'updateUsingPOST_10',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/UpdateTypeReq' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/operate/getAchieving': {
			post: {
				tags: ['用户达成数据查询'],
				summary: '获取结算达成情况',
				operationId: 'getAchievingUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/UserAchievingReq' }
					}
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/UserAchievingBo' } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/operate/getAchievingConditions': {
			post: {
				tags: ['获取达成条件配置'],
				summary: '获取达成条件配置',
				operationId: 'getAchievingConditionsUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/ProxyAchievingQueryReq' }
					}
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/ProxyAchievingConditionsResp' } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/payment/channel/allocation': {
			post: {
				tags: ['支付渠道管理'],
				summary: '添加或编辑分配支付渠道',
				operationId: 'allocationUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/AllocationPaymentChannelReq' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/payment/channel/queryList': {
			post: {
				tags: ['支付渠道管理'],
				summary: '查询支付渠道列表',
				operationId: 'queryListUsingPOST_6',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/QueryPaymentChannelReq' }
					}
				],
				responses: {
					200: { description: 'OK', schema: { type: 'array', items: { $ref: '#/definitions/PaymentChannelResq' } } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/payment/channel/queryPaymentChannelOrder': {
			post: {
				tags: ['支付渠道管理'],
				summary: '查询三方渠道支付单信息',
				operationId: 'queryPaymentChannelOrderUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{ name: 'paymentOrderNo', in: 'query', description: '支付单号', required: false, type: 'string' },
					{
						name: 'bizType',
						in: 'query',
						description: '业务类型',
						required: false,
						type: 'string',
						enum: ['IN', 'OUT']
					}
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/QueryOrderBizResp' } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/payment/channel/queryProxyList': {
			post: {
				tags: ['支付渠道管理'],
				summary: '查询包网商支付渠道列表',
				operationId: 'queryProxyListUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/QueryPaymentChannelReq' }
					}
				],
				responses: {
					200: {
						description: 'OK',
						schema: { type: 'array', items: { $ref: '#/definitions/ProxyPaymentChannelRelation' } }
					},
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/payment/channel/update': {
			post: {
				tags: ['支付渠道管理'],
				summary: '修改支付渠道',
				operationId: 'updateUsingPOST_12',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/PaymentChannelReq' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/proxy/area/add': {
			post: {
				tags: ['游戏区域相关'],
				summary: '添加区域',
				operationId: 'addUsingPOST_4',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/AddGameAreaReq' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/proxy/area/offline': {
			post: {
				tags: ['游戏区域相关'],
				summary: '下线',
				operationId: 'offlineUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{ in: 'body', name: 'req', description: 'req', required: true, schema: { $ref: '#/definitions/AreaIdReq' } }
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/proxy/area/online': {
			post: {
				tags: ['游戏区域相关'],
				summary: '上线',
				operationId: 'onlineUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{ in: 'body', name: 'req', description: 'req', required: true, schema: { $ref: '#/definitions/AreaIdReq' } }
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/proxy/area/queryDetail': {
			post: {
				tags: ['游戏区域相关'],
				summary: '查询区域详情',
				operationId: 'queryDetailUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{ in: 'body', name: 'req', description: 'req', required: true, schema: { $ref: '#/definitions/AreaIdReq' } }
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/GameAreaResp' } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/proxy/area/queryList': {
			post: {
				tags: ['游戏区域相关'],
				summary: '查询区域列表',
				operationId: 'queryListUsingPOST_2',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/QueryGameAreaReq' }
					}
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/PageResult«GameAreaResp»' } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/proxy/area/update': {
			post: {
				tags: ['游戏区域相关'],
				summary: '修改区域',
				operationId: 'updateUsingPOST_9',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/UpdateGameAreaReq' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/proxy/currency/list': {
			post: {
				tags: ['代理币种'],
				summary: '查询',
				operationId: 'queryUsingPOST_7',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/ProxyCurrencyQueryReq' }
					}
				],
				responses: {
					200: { description: 'OK', schema: { type: 'array', items: { $ref: '#/definitions/币种查询返回信息' } } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/proxy/factory/disable': {
			post: {
				tags: ['包网商厂商相关'],
				summary: '禁用厂商',
				operationId: 'disableUsingPOST_2',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/ProxyDisableFactoryReq' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/proxy/factory/disable/list': {
			post: {
				tags: ['包网商厂商相关'],
				summary: '禁用厂商列表',
				operationId: 'disableListUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{ in: 'body', name: 'req', description: 'req', required: true, schema: { $ref: '#/definitions/ProxyNoReq' } }
				],
				responses: {
					200: { description: 'OK', schema: { type: 'array', items: { type: 'string' } } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/proxy/factory/list': {
			post: {
				tags: ['包网商厂商相关'],
				summary: '包网商厂商列表',
				operationId: 'listUsingPOST_4',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{ in: 'body', name: 'req', description: 'req', required: true, schema: { $ref: '#/definitions/ProxyNoReq' } }
				],
				responses: {
					200: { description: 'OK', schema: { type: 'array', items: { $ref: '#/definitions/GameFactorySimpleResp' } } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/proxy/game/add': {
			post: {
				tags: ['代理游戏相关'],
				summary: '添加游戏',
				operationId: 'addGameUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/AddProxyGameReq' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/proxy/game/addChoice': {
			post: {
				tags: ['代理游戏相关'],
				summary: '添加精选游戏',
				operationId: 'addChoiceUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/AddProxyChoiceReq' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/proxy/game/getChoice': {
			post: {
				tags: ['代理游戏相关'],
				summary: '获取精选游戏',
				operationId: 'getChoiceUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{ in: 'body', name: 'req', description: 'req', required: true, schema: { $ref: '#/definitions/ProxyIdReq' } }
				],
				responses: {
					200: { description: 'OK', schema: { type: 'array', items: { $ref: '#/definitions/ProxyChoiceGameResp' } } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/proxy/game/offline': {
			post: {
				tags: ['代理游戏相关'],
				summary: '下线游戏',
				operationId: 'offlineUsingPOST_1',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/ProxyGameIdReq' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/proxy/game/online': {
			post: {
				tags: ['代理游戏相关'],
				summary: '上线游戏',
				operationId: 'onlineUsingPOST_1',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/ProxyGameIdReq' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/proxy/game/queryAreaGame': {
			post: {
				tags: ['代理游戏相关'],
				summary: '查询区域下的游戏信息',
				operationId: 'queryAreaGameUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{ in: 'body', name: 'req', description: 'req', required: true, schema: { $ref: '#/definitions/AreaIdReq' } }
				],
				responses: {
					200: { description: 'OK', schema: { type: 'array', items: { $ref: '#/definitions/ProxyGameResp' } } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/proxy/game/queryGameByCurrency': {
			post: {
				tags: ['代理游戏相关'],
				summary: '查询可用的游戏',
				operationId: 'queryUsingPOST_8',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/ProxyGameReq' }
					}
				],
				responses: {
					200: { description: 'OK', schema: { type: 'array', items: { $ref: '#/definitions/BaseGameResp' } } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/proxy/game/queryList': {
			post: {
				tags: ['代理游戏相关'],
				summary: '游戏列表',
				operationId: 'queryListUsingPOST_7',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/QueryProxyGameReq' }
					}
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/PageResult«ProxyGameResp»' } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/proxy/game/queryProxyGame': {
			post: {
				tags: ['代理游戏相关'],
				summary: '查询代理下的游戏信息',
				operationId: 'queryProxyGameUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{ in: 'body', name: 'req', description: 'req', required: true, schema: { $ref: '#/definitions/ProxyIdReq' } }
				],
				responses: {
					200: { description: 'OK', schema: { type: 'array', items: { $ref: '#/definitions/ProxyGameResp' } } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/proxy/game/updateArea': {
			post: {
				tags: ['代理游戏相关'],
				summary: '更改游戏区域',
				operationId: 'updateAreaUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/ProxyGameUpdateAreaReq' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/proxy/game/updateChoiceGame': {
			post: {
				tags: ['代理游戏相关'],
				summary: '修改精选游戏信息',
				operationId: 'updateChoiceGameUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/UpdateProxyChoiceGameReq' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/proxy/game/updateGame': {
			post: {
				tags: ['代理游戏相关'],
				summary: '修改游戏信息',
				operationId: 'updateGameUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/UpdateProxyGameReq' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/proxy/game/updatePopular': {
			post: {
				tags: ['代理游戏相关'],
				summary: '更改游戏是否热门',
				operationId: 'updatePopularUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/ProxyGameUpdatePopularReq' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/rebate/plan/queryItems': {
			post: {
				tags: ['返水方案管理'],
				summary: '查询方案明细信息',
				operationId: 'queryOneUsingPOST_2',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{ in: 'body', name: 'req', description: 'req', required: true, schema: { $ref: '#/definitions/PlanIdReq' } }
				],
				responses: {
					200: { description: 'OK', schema: { type: 'array', items: { $ref: '#/definitions/返水方案明细信息' } } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/rebate/plan/queryList': {
			post: {
				tags: ['返水方案管理'],
				summary: '查询方案列表',
				operationId: 'queryListUsingPOST_8',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/PlanQueryReq' }
					}
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/PageResult«返水方案信息»' } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/rebate/plan/queryVipList': {
			post: {
				tags: ['返水方案管理'],
				summary: '查询vip列表',
				operationId: 'queryVipListUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{ in: 'body', name: 'req', description: 'req', required: true, schema: { $ref: '#/definitions/ProxyIdReq' } }
				],
				responses: {
					200: { description: 'OK', schema: { type: 'array', items: { $ref: '#/definitions/VipManagementVo' } } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/rebate/record/exportExcel': {
			get: {
				tags: ['返水记录管理'],
				summary: '导出返水记录列表',
				operationId: 'exportExcelUsingGET_6',
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						name: 'pageIndex',
						in: 'query',
						description: '页码 从1开始计数',
						required: false,
						type: 'integer',
						format: 'int32'
					},
					{
						name: 'pageSize',
						in: 'query',
						description: '页容 区间[1, 1000]',
						required: false,
						type: 'integer',
						format: 'int32'
					},
					{ name: 'userId', in: 'query', description: '用户id', required: false, type: 'integer', format: 'int64' },
					{ name: 'userName', in: 'query', description: '用户名称', required: false, type: 'string' },
					{ name: 'proxyId', in: 'query', description: '包网商id', required: false, type: 'integer', format: 'int64' },
					{ name: 'proxyName', in: 'query', description: '包网商名称', required: false, type: 'string' },
					{ name: 'status', in: 'query', description: '状态', required: false, type: 'integer', format: 'int32' },
					{ name: 'period', in: 'query', description: '周期s', required: false, type: 'string', format: 'date' },
					{ name: 'id', in: 'query', description: '记录id', required: false, type: 'integer', format: 'int64' }
				],
				responses: {
					200: { description: 'OK' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/rebate/record/queryList': {
			post: {
				tags: ['返水记录管理'],
				summary: '返水记录列表',
				operationId: 'queryListUsingPOST_9',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/RecordQueryReq' }
					}
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/PageResult«ProxyRebateRecordResp»' } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/settle/agent': {
			post: {
				tags: ['结算数据'],
				summary: '代理返佣数据',
				operationId: 'agentUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/AgentSettleReq' }
					}
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/PageResult«AgentSettleResp»' } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/settle/agent/exportExcel': {
			get: {
				tags: ['结算数据'],
				summary: '代理结算数据 - 导出excel',
				operationId: 'agentExportExcelUsingGET',
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						name: 'pageIndex',
						in: 'query',
						description: '页码 从1开始计数',
						required: false,
						type: 'integer',
						format: 'int32'
					},
					{
						name: 'pageSize',
						in: 'query',
						description: '页容 区间[1, 1000]',
						required: false,
						type: 'integer',
						format: 'int32'
					},
					{ name: 'proxyId', in: 'query', description: '包网商ID', required: false, type: 'integer', format: 'int64' },
					{ name: 'agentId', in: 'query', description: '代理ID', required: false, type: 'integer', format: 'int64' },
					{
						name: 'status',
						in: 'query',
						description: '状态 3 待线下或自动结算 8 未达成条件 9 结算完成',
						required: false,
						type: 'integer',
						format: 'int32'
					}
				],
				responses: {
					200: { description: 'OK' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/settle/platform': {
			post: {
				tags: ['结算数据'],
				summary: '平台结算数据',
				operationId: 'platformUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/PlatformSettleReq' }
					}
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/PageResult«PlatformSettleResp»' } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/settle/platform/exportExcel': {
			get: {
				tags: ['结算数据'],
				summary: '平台结算数据 - 导出excel',
				operationId: 'platformExportExcelUsingGET',
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						name: 'pageIndex',
						in: 'query',
						description: '页码 从1开始计数',
						required: false,
						type: 'integer',
						format: 'int32'
					},
					{
						name: 'pageSize',
						in: 'query',
						description: '页容 区间[1, 1000]',
						required: false,
						type: 'integer',
						format: 'int32'
					},
					{ name: 'proxyId', in: 'query', description: '包网商ID', required: false, type: 'integer', format: 'int64' },
					{
						name: 'status',
						in: 'query',
						description: '1 待线下结算;2 已结算',
						required: false,
						type: 'integer',
						format: 'int32'
					}
				],
				responses: {
					200: { description: 'OK' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/settle/proxy': {
			post: {
				tags: ['结算数据'],
				summary: '包网商结算数据',
				operationId: 'proxyUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/PlatformSettleReq' }
					}
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/PageResult«ProxySettleResp»' } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/settle/proxy/exportExcel': {
			get: {
				tags: ['结算数据'],
				summary: '包网商结算数据 - 导出excel',
				operationId: 'proxyExportExcelUsingGET',
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						name: 'pageIndex',
						in: 'query',
						description: '页码 从1开始计数',
						required: false,
						type: 'integer',
						format: 'int32'
					},
					{
						name: 'pageSize',
						in: 'query',
						description: '页容 区间[1, 1000]',
						required: false,
						type: 'integer',
						format: 'int32'
					},
					{ name: 'proxyId', in: 'query', description: '包网商ID', required: false, type: 'integer', format: 'int64' },
					{
						name: 'status',
						in: 'query',
						description: '1 待线下结算;2 已结算',
						required: false,
						type: 'integer',
						format: 'int32'
					}
				],
				responses: {
					200: { description: 'OK' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/settle/settled': {
			post: {
				tags: ['结算数据'],
				summary: '平台结算',
				operationId: 'settledUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/SettleNoReq' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/system/dictionary/add': {
			post: {
				tags: ['字典接口'],
				summary: '新增字典',
				operationId: 'addUsingPOST_3',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'dictionary',
						description: 'dictionary',
						required: true,
						schema: { $ref: '#/definitions/DictionaryBaseVo' }
					}
				],
				responses: {
					200: { description: 'OK', schema: { type: 'string' } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/system/dictionary/delete': {
			get: {
				tags: ['字典接口'],
				summary: '删除字典',
				operationId: 'deleteUsingGET',
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{ name: 'codeId', in: 'query', description: '字典编号', required: true, type: 'string' }
				],
				responses: {
					200: { description: 'OK' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			},
			post: {
				tags: ['字典接口'],
				summary: '删除字典',
				operationId: 'deleteUsingPOST_2',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{ name: 'codeId', in: 'query', description: '字典编号', required: true, type: 'string' }
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/system/dictionary/getAll': {
			get: {
				tags: ['字典接口'],
				summary: '查询所有字典信息',
				operationId: 'getAllUsingGET',
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' }
				],
				responses: {
					200: { description: 'OK', schema: { type: 'array', items: { $ref: '#/definitions/DictionarySimpleVo' } } },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/system/dictionary/getByField': {
			get: {
				tags: ['字典接口'],
				summary: '根据对照字段查询字典',
				operationId: 'getByFieldUsingGET',
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{ name: 'field', in: 'query', description: '对照字段', required: true, type: 'string' }
				],
				responses: {
					200: { description: 'OK', schema: { type: 'array', items: { $ref: '#/definitions/DictionarySimpleVo' } } },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/system/dictionary/getById': {
			get: {
				tags: ['字典接口'],
				summary: '根据字典编号查询字典信息',
				operationId: 'getByIdUsingGET',
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{ name: 'codeId', in: 'query', description: '字典编号', required: true, type: 'string' }
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/DictionaryResponseVo' } },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/system/dictionary/queryPaging': {
			post: {
				tags: ['字典接口'],
				summary: '分页查询字典信息',
				operationId: 'queryPagingUsingPOST_1',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'request',
						description: 'request',
						required: true,
						schema: { $ref: '#/definitions/DictionaryPagingRequestVo' }
					}
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/PageResult«DictionaryResponseVo»' } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/system/dictionary/update': {
			post: {
				tags: ['字典接口'],
				summary: '修改字典',
				operationId: 'updateUsingPOST_8',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'dictionary',
						description: 'dictionary',
						required: true,
						schema: { $ref: '#/definitions/DictionaryUpdateVo' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/system/menu/add': {
			post: {
				tags: ['菜单管理接口'],
				summary: '新增菜单',
				operationId: 'addUsingPOST_6',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'menu',
						description: 'menu',
						required: true,
						schema: { $ref: '#/definitions/MenuBaseVo' }
					}
				],
				responses: {
					200: { description: 'OK', schema: { type: 'string' } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/system/menu/delete': {
			get: {
				tags: ['菜单管理接口'],
				summary: '删除菜单',
				operationId: 'deleteUsingGET_1',
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{ name: 'menuId', in: 'query', description: '菜单编号', required: true, type: 'string' }
				],
				responses: {
					200: { description: 'OK' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			},
			post: {
				tags: ['菜单管理接口'],
				summary: '删除菜单',
				operationId: 'deleteUsingPOST_4',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{ name: 'menuId', in: 'query', description: '菜单编号', required: true, type: 'string' }
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/system/menu/queryAll': {
			get: {
				tags: ['菜单管理接口'],
				summary: '查询所有菜单',
				operationId: 'queryAllUsingGET',
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' }
				],
				responses: {
					200: { description: 'OK', schema: { type: 'array', items: { $ref: '#/definitions/MenuResponseVo' } } },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/system/menu/update': {
			post: {
				tags: ['菜单管理接口'],
				summary: '修改菜单',
				operationId: 'updateUsingPOST_11',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'menu',
						description: 'menu',
						required: true,
						schema: { $ref: '#/definitions/MenuUpdateVo' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/system/role/add': {
			post: {
				tags: ['角色管理接口'],
				summary: '新增角色',
				operationId: 'addUsingPOST_7',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'role',
						description: 'role',
						required: true,
						schema: { $ref: '#/definitions/RoleBaseVo' }
					}
				],
				responses: {
					200: { description: 'OK', schema: { type: 'string' } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/system/role/authorizeMenu': {
			post: {
				tags: ['角色管理接口'],
				summary: '授权角色菜单',
				operationId: 'authorizeMenuUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'roleMenu',
						description: 'roleMenu',
						required: true,
						schema: { $ref: '#/definitions/RoleMenuRequestVo' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/system/role/changeLock': {
			post: {
				tags: ['角色管理接口'],
				summary: '锁定或解锁角色',
				operationId: 'changeLockUsingPOST_1',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'roleLock',
						description: 'roleLock',
						required: true,
						schema: { $ref: '#/definitions/RoleLockRequestVo' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/system/role/delete': {
			get: {
				tags: ['角色管理接口'],
				summary: '删除角色',
				operationId: 'deleteUsingGET_2',
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{ name: 'roleId', in: 'query', description: '角色编号', required: true, type: 'string' }
				],
				responses: {
					200: { description: 'OK' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			},
			post: {
				tags: ['角色管理接口'],
				summary: '删除角色',
				operationId: 'deleteUsingPOST_5',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{ name: 'roleId', in: 'query', description: '角色编号', required: true, type: 'string' }
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/system/role/queryAll': {
			get: {
				tags: ['角色管理接口'],
				summary: '查询所有角色',
				operationId: 'queryRolesUsingGET',
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' }
				],
				responses: {
					200: { description: 'OK', schema: { type: 'array', items: { $ref: '#/definitions/角色响应信息' } } },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/system/role/queryById': {
			get: {
				tags: ['角色管理接口'],
				summary: '查询单个角色',
				operationId: 'queryByIdUsingGET_1',
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{ name: 'roleId', in: 'query', description: '角色编号', required: true, type: 'string' }
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/角色响应信息' } },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/system/role/queryDetail': {
			get: {
				tags: ['角色管理接口'],
				summary: '查询角色以及对应的菜单信息',
				operationId: 'queryDetailUsingGET',
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{ name: 'roleId', in: 'query', description: '角色编号', required: true, type: 'string' }
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/RoleMenuResponseVo' } },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/system/role/queryPaging': {
			post: {
				tags: ['角色管理接口'],
				summary: '分页查询角色信息',
				operationId: 'queryPagingUsingPOST_2',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'request',
						description: 'request',
						required: true,
						schema: { $ref: '#/definitions/RoleQueryRequestVo' }
					}
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/PageResult«角色响应信息»' } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/system/role/update': {
			post: {
				tags: ['角色管理接口'],
				summary: '修改角色',
				operationId: 'updateUsingPOST_13',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'role',
						description: 'role',
						required: true,
						schema: { $ref: '#/definitions/RoleUpdateVo' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/system/user/add': {
			post: {
				tags: ['用户相关接口'],
				summary: '添加用户',
				operationId: 'addUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'user',
						description: 'user',
						required: true,
						schema: { $ref: '#/definitions/UserAddVo' }
					}
				],
				responses: {
					200: { description: 'OK', schema: { type: 'string' } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/system/user/authorizeRole': {
			post: {
				tags: ['用户相关接口'],
				summary: '授权用户角色',
				operationId: 'authorizeRoleUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'userRole',
						description: 'userRole',
						required: true,
						schema: { $ref: '#/definitions/UserRoleRequestVo' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/system/user/bindGoogle': {
			post: {
				tags: ['用户相关接口'],
				summary: '绑定谷歌验证码',
				operationId: 'bindGoogleUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'googleCode',
						description: 'googleCode',
						required: true,
						schema: { $ref: '#/definitions/GoogleCodeReq' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/system/user/changeLock': {
			post: {
				tags: ['用户相关接口'],
				summary: '修改用户锁定状态',
				operationId: 'changeLockUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'userLockRequest',
						description: 'userLockRequest',
						required: true,
						schema: { $ref: '#/definitions/UserLockRequestVo' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/system/user/changePassword': {
			post: {
				tags: ['用户相关接口'],
				summary: '修改用户密码',
				operationId: 'changePasswordUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'request',
						description: 'request',
						required: true,
						schema: { $ref: '#/definitions/UserPasswordRequestVo' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/system/user/delete': {
			post: {
				tags: ['用户相关接口'],
				summary: '删除用户',
				operationId: 'deleteUsingPOST_1',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'param',
						description: 'param',
						required: true,
						schema: { $ref: '#/definitions/SingleParamVo«string»' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/system/user/getGoogleSecret': {
			get: {
				tags: ['用户相关接口'],
				summary: '获取谷歌验证信息',
				operationId: 'getGoogleSecretUsingGET',
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' }
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/GoogleSecretResp' } },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/system/user/getRole': {
			get: {
				tags: ['用户相关接口'],
				summary: '获取对应用户的角色信息',
				operationId: 'getUserRoleUsingGET',
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{ name: 'userId', in: 'query', description: '用户编号', required: true, type: 'string' }
				],
				responses: {
					200: { description: 'OK', schema: { type: 'array', items: { $ref: '#/definitions/角色响应信息' } } },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/system/user/getRoleMenu': {
			get: {
				tags: ['用户相关接口'],
				summary: '获取用户角色和菜单信息',
				operationId: 'getUserRoleMenuUsingGET',
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' }
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/UserRoleMenuVo' } },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/system/user/queryById': {
			get: {
				tags: ['用户相关接口'],
				summary: '查询用户信息',
				operationId: 'queryByIdUsingGET',
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{ name: 'userId', in: 'query', description: '用户编号', required: true, type: 'string' }
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/UserInfoVo' } },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/system/user/queryPaging': {
			post: {
				tags: ['用户相关接口'],
				summary: '分页查询用户信息',
				operationId: 'queryPagingUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'request',
						description: 'request',
						required: true,
						schema: { $ref: '#/definitions/UserQueryRequestVo' }
					}
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/PageResult«UserInfoVo»' } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/system/user/unbindGoogle': {
			post: {
				tags: ['用户相关接口'],
				summary: '解绑谷歌验证码',
				operationId: 'unbindGoogleUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'googleCode',
						description: 'googleCode',
						required: true,
						schema: { $ref: '#/definitions/GoogleCodeReq' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/system/user/update': {
			post: {
				tags: ['用户相关接口'],
				summary: '修改用户',
				operationId: 'updateUsingPOST_2',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'user',
						description: 'user',
						required: true,
						schema: { $ref: '#/definitions/UserUpdateVo' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/user/bankCard/detail': {
			post: {
				tags: ['平台用户相关'],
				summary: '银行卡 - 详情',
				operationId: 'queryUsingPOST_9',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/UserBankCardDetailReq' }
					}
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/BankCardDetailResp' } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/user/bankCard/update': {
			post: {
				tags: ['平台用户相关'],
				summary: '编辑',
				operationId: 'bankCardUpdateUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/UserBankCardUpdateReq' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/user/bankCards': {
			post: {
				tags: ['平台用户相关'],
				summary: '银行卡',
				operationId: 'bankCardsUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/UserBankCardQueryReq' }
					}
				],
				responses: {
					200: { description: 'OK', schema: { type: 'array', items: { $ref: '#/definitions/UserBankCardQueryResp' } } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/user/disableUser': {
			post: {
				tags: ['平台用户相关'],
				summary: '禁用用户',
				operationId: 'disableUserUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/UpdateUserStatusReq' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/user/disableUser/batch': {
			post: {
				tags: ['平台用户相关'],
				summary: '批量禁用用户',
				operationId: 'batchDisableUserUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'userIds',
						description: 'userIds',
						required: true,
						schema: { type: 'array', items: { type: 'integer', format: 'int32' } }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/user/enableUser': {
			post: {
				tags: ['平台用户相关'],
				summary: '启用用户',
				operationId: 'enableUserUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/UpdateUserStatusReq' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/user/enableUser/batch': {
			post: {
				tags: ['平台用户相关'],
				summary: '批量启用用户',
				operationId: 'batchEnableUserUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'userIds',
						description: 'userIds',
						required: true,
						schema: { type: 'array', items: { type: 'integer', format: 'int32' } }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/user/forbiddenUser': {
			post: {
				tags: ['平台用户相关'],
				summary: '封锁/解封用户',
				operationId: 'forbiddenUserUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/修改用户封禁状态' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/user/gameRecord': {
			post: {
				tags: ['平台用户相关'],
				summary: '游戏记录',
				operationId: 'gameRecordUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/UserGameRecordReq' }
					}
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/PageResult«UserGameRecordResp»' } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/user/label/update': {
			post: {
				tags: ['平台用户相关'],
				summary: '修改用户标签',
				operationId: 'updateLabelUsingPOST_2',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/UserLabelUpdate' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/user/match': {
			post: {
				tags: ['平台用户相关'],
				summary: '关联账号',
				operationId: 'matchUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{ in: 'body', name: 'req', description: 'req', required: true, schema: { $ref: '#/definitions/UserIdReq' } }
				],
				responses: {
					200: {
						description: 'OK',
						schema: { type: 'array', items: { $ref: '#/definitions/UserRelationAccountResp' } }
					},
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/user/proxy/add': {
			post: {
				tags: ['平台代理相关，实际是包网商管理'],
				summary: '添加代理',
				operationId: 'addProxyUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/AddProxyReq' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/user/proxy/addDomain': {
			post: {
				tags: ['平台代理相关，实际是包网商管理'],
				summary: '添加代理域名',
				operationId: 'addDomainUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/AddProxyDomainReq' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/user/proxy/config/currency': {
			post: {
				tags: ['平台代理相关，实际是包网商管理'],
				summary: '币种配置',
				operationId: 'configCurrencyUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/ProxyCurrencyReq' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/user/proxy/offlineDomain': {
			post: {
				tags: ['平台代理相关，实际是包网商管理'],
				summary: '下线代理域名',
				operationId: 'offlineDomainUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/ProxyDomainIdReq' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/user/proxy/onlineDomain': {
			post: {
				tags: ['平台代理相关，实际是包网商管理'],
				summary: '上线代理域名',
				operationId: 'onlineDomainUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/ProxyDomainIdReq' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/user/proxy/queryAll': {
			post: {
				tags: ['平台代理相关，实际是包网商管理'],
				summary: '查询所有代理概要信息',
				operationId: 'queryAllUsingPOST_2',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' }
				],
				responses: {
					200: { description: 'OK', schema: { type: 'array', items: { $ref: '#/definitions/ProxySummaryResp' } } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/user/proxy/queryProxy': {
			post: {
				tags: ['平台代理相关，实际是包网商管理'],
				summary: '查询代理信息',
				operationId: 'queryProxyUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/QueryProxyListReq' }
					}
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/PageResult«ProxyUserResp»' } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/user/proxy/queryProxyDomain': {
			post: {
				tags: ['平台代理相关，实际是包网商管理'],
				summary: '查询代理域名信息',
				operationId: 'queryProxyDomainUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{ in: 'body', name: 'req', description: 'req', required: true, schema: { $ref: '#/definitions/ProxyIdReq' } }
				],
				responses: {
					200: { description: 'OK', schema: { type: 'array', items: { $ref: '#/definitions/ProxyDomainResp' } } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/user/proxy/updateDomain': {
			post: {
				tags: ['平台代理相关，实际是包网商管理'],
				summary: '修改代理域名',
				operationId: 'updateDomainUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/UpdateProxyDomainReq' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/user/proxy/updateProxy': {
			post: {
				tags: ['平台代理相关，实际是包网商管理'],
				summary: '修改代理信息',
				operationId: 'updateProxyUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/UpdateProxyReq' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/user/query': {
			post: {
				tags: ['平台用户相关'],
				summary: '查询用户账户',
				operationId: 'queryUsingPOST_10',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{ in: 'body', name: 'req', description: 'req', required: true, schema: { $ref: '#/definitions/UserIdReq' } }
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/UserAccountResp' } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/user/queryDataSummary': {
			post: {
				tags: ['平台用户相关'],
				summary: '个人数据概况',
				operationId: 'queryDataSummaryUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{ in: 'body', name: 'req', description: 'req', required: true, schema: { $ref: '#/definitions/UserIdReq' } }
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/UserDataSummary' } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/user/queryDetail': {
			post: {
				tags: ['平台用户相关'],
				summary: '查询用户详情',
				operationId: 'queryDetailUsingPOST_3',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{ in: 'body', name: 'req', description: 'req', required: true, schema: { $ref: '#/definitions/UserIdReq' } }
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/UserDetailResp' } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/user/queryList': {
			post: {
				tags: ['平台用户相关'],
				summary: '查询用户列表',
				operationId: 'queryListUsingPOST_10',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/QueryUserListReq' }
					}
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/PageResult«UserResp»' } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/user/queryLog': {
			post: {
				tags: ['平台用户相关'],
				summary: '查询用户操作日志',
				operationId: 'queryLogUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/UserOperationLogReq' }
					}
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/PageResult«UserOperationLogResp»' } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/user/reminder/update': {
			post: {
				tags: ['平台用户相关'],
				summary: '修改备注',
				operationId: 'updateReminderUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/UserReminderUpdate' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/user/resetPassword': {
			post: {
				tags: ['平台用户相关'],
				summary: '重置用户密码',
				operationId: 'resetPasswordUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/ResetPasswordReq' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/user/statistics/exportExcel': {
			get: {
				tags: ['用户统计'],
				summary: '导出excel',
				operationId: 'exportExcelUsingGET_8',
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						name: 'groupBy',
						in: 'query',
						description: '统计纬度:1 按天；3 按月',
						required: false,
						type: 'integer',
						format: 'int32'
					},
					{ name: 'start', in: 'query', description: '开始时间', required: false, type: 'integer', format: 'int64' },
					{ name: 'end', in: 'query', description: '结束时间', required: false, type: 'integer', format: 'int64' }
				],
				responses: {
					200: { description: 'OK' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/user/statistics/info': {
			post: {
				tags: ['用户统计'],
				summary: '总用户信息',
				operationId: 'infoUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' }
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/UserStatisticsInfoResp' } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/user/statistics/list': {
			post: {
				tags: ['用户统计'],
				summary: '记录',
				operationId: 'listUsingPOST_5',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/UserStatisticsReq' }
					}
				],
				responses: {
					200: { description: 'OK', schema: { type: 'array', items: { $ref: '#/definitions/UserStatisticsResp' } } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/user/team': {
			post: {
				tags: ['平台用户相关'],
				summary: '团队数据',
				operationId: 'teamUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/TeamStatisticsReq' }
					}
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/TeamStatisticsResp' } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/winnings/record/exportExcel': {
			get: {
				tags: ['用户彩金发放记录'],
				summary: '导出excel',
				operationId: 'exportExcelUsingGET_1',
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{ name: 'proxyUid', in: 'query', description: '包网商id', required: false, type: 'integer', format: 'int64' },
					{ name: 'userId', in: 'query', description: '用户id', required: false, type: 'integer', format: 'int64' },
					{ name: 'start', in: 'query', description: '到账时间', required: false, type: 'integer', format: 'int64' },
					{ name: 'end', in: 'query', description: '到账时间', required: false, type: 'integer', format: 'int64' },
					{
						name: 'activityType',
						in: 'query',
						description: '活动类型',
						required: false,
						type: 'string',
						enum: ['FIRST_DEPOSIT', 'REGISTER', 'SIGN_IN', 'SYSTEM_ALLOCATION']
					}
				],
				responses: {
					200: { description: 'OK' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/winnings/record/page': {
			post: {
				tags: ['用户彩金发放记录'],
				summary: '彩金记录查询',
				operationId: 'pageUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'query',
						description: 'query',
						required: true,
						schema: { $ref: '#/definitions/boss端查询用户彩金记录参数对象' }
					}
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/PageResult«用户彩金发放记录»' } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/winnings/record/statistic': {
			post: {
				tags: ['用户彩金发放记录'],
				summary: '查询统计信息',
				operationId: 'statisticUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'query',
						description: 'query',
						required: true,
						schema: { $ref: '#/definitions/boss端查询用户彩金记录参数对象' }
					}
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/彩金统计数据Boss值对象' } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/withdraw/config/getDigital/{chain}': {
			post: {
				tags: ['提币和提现配置'],
				summary: '获取数字货币提币配置',
				operationId: 'getDigitalUsingPOST_1',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{ name: 'chain', in: 'path', description: 'chain', required: true, type: 'string' }
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/WithdrawInfoResp' } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/withdraw/config/getLeger/{currencyCode}': {
			post: {
				tags: ['提币和提现配置'],
				summary: '获取法币提现配置',
				operationId: 'getLegerUsingPOST_1',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{ name: 'currencyCode', in: 'path', description: 'currencyCode', required: true, type: 'string' }
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/WithdrawInfoResp' } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/withdraw/config/setDigital': {
			post: {
				tags: ['提币和提现配置'],
				summary: '设置数字货币提币配置',
				operationId: 'setDigitalTronUsingPOST_1',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'info',
						description: 'info',
						required: true,
						schema: { $ref: '#/definitions/WithdrawInfoResp' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/withdraw/config/setLeger': {
			post: {
				tags: ['提币和提现配置'],
				summary: '设置提现配置',
				operationId: 'setLegerUsingPOST_1',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'info',
						description: 'info',
						required: true,
						schema: { $ref: '#/definitions/WithdrawInfoResp' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/withdraw/digital/checkPass': {
			post: {
				tags: ['提币信息'],
				summary: '审核通过',
				operationId: 'checkPassUsingPOST_2',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/WithdrawNoReq' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/withdraw/digital/checkRefuse': {
			post: {
				tags: ['提币信息'],
				summary: '审核拒绝',
				operationId: 'checkRefuseUsingPOST_2',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/WithdrawRefuseReq' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/withdraw/digital/exportExcel': {
			get: {
				tags: ['提币信息'],
				summary: '提币记录 - 导出excel',
				operationId: 'exportExcelUsingGET_9',
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						name: 'pageIndex',
						in: 'query',
						description: '页码 从1开始计数',
						required: false,
						type: 'integer',
						format: 'int32'
					},
					{
						name: 'pageSize',
						in: 'query',
						description: '页容 区间[1, 1000]',
						required: false,
						type: 'integer',
						format: 'int32'
					},
					{
						name: 'status',
						in: 'query',
						description: '状态：0:待审核 1:审核通过 2:审核拒绝 3:提币中 4: 提现失败 8:提现/币成功',
						required: false,
						type: 'integer',
						format: 'int32'
					},
					{ name: 'userId', in: 'query', description: '用户编号', required: false, type: 'integer', format: 'int64' },
					{ name: 'userAccount', in: 'query', description: '用户账号', required: false, type: 'string' },
					{
						name: 'withdrawNo',
						in: 'query',
						description: '订单编号',
						required: false,
						type: 'integer',
						format: 'int64'
					},
					{
						name: 'currencyType',
						in: 'query',
						description: '充值类型:1 数字货币；2 法币',
						required: false,
						type: 'integer',
						format: 'int32'
					},
					{
						name: 'start',
						in: 'query',
						description: '交易时间开始',
						required: false,
						type: 'string',
						format: 'date-time'
					},
					{
						name: 'end',
						in: 'query',
						description: '交易时间结束',
						required: false,
						type: 'string',
						format: 'date-time'
					},
					{
						name: 'proxyUserId',
						in: 'query',
						description: '归属包网商ID',
						required: false,
						type: 'integer',
						format: 'int64'
					},
					{
						name: 'parentId',
						in: 'query',
						description: '上级代理ID',
						required: false,
						type: 'integer',
						format: 'int64'
					},
					{ name: 'parentAccount', in: 'query', description: '上级代理帐号', required: false, type: 'string' }
				],
				responses: {
					200: { description: 'OK' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/withdraw/digital/fail': {
			post: {
				tags: ['提币信息'],
				summary: '提现失败',
				operationId: 'failUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/WithdrawRefuseReq' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/withdraw/digital/getCard': {
			post: {
				tags: ['提币信息'],
				summary: '收款信息',
				operationId: 'cardUsingPOST_1',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/DepositNoReq' }
					}
				],
				responses: {
					200: { description: 'OK', schema: { type: 'array', items: { $ref: '#/definitions/DepositBankCardResp' } } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/withdraw/digital/list': {
			post: {
				tags: ['提币信息'],
				summary: '提币记录',
				operationId: 'queryDigitalUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/WithdrawReq' }
					}
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/PageResult«WithdrawResp»' } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/withdraw/digital/manualReTryWithdraw': {
			post: {
				tags: ['提币信息'],
				summary: '手动发起提现支付重试',
				operationId: 'manualReTryWithdrawUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/WithdrawNoReq' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/withdraw/digital/success': {
			post: {
				tags: ['提币信息'],
				summary: '提现成功',
				operationId: 'successUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/WithdrawNoReq' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/withdraw/digital/summary': {
			post: {
				tags: ['提币信息'],
				summary: '汇总信息',
				operationId: 'summaryUsingPOST_4',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/DepositSummaryReq' }
					}
				],
				responses: {
					200: { description: 'OK', schema: { $ref: '#/definitions/WithdrawSummaryResp' } },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		},
		'/boss/withdraw/digital/withdrawConfirm': {
			post: {
				tags: ['提币信息'],
				summary: '确认提现',
				operationId: 'withdrawConfirmUsingPOST',
				consumes: ['application/json'],
				produces: ['*/*'],
				parameters: [
					{ name: 'Lang', in: 'header', description: 'zh-CN', required: false, type: 'string' },
					{ name: 'PA-Token', in: 'header', description: 'token', required: false, type: 'string' },
					{
						in: 'body',
						name: 'req',
						description: 'req',
						required: true,
						schema: { $ref: '#/definitions/WithdrawNoChannelTypeReq' }
					}
				],
				responses: {
					200: { description: 'OK' },
					201: { description: 'Created' },
					401: { description: 'Unauthorized' },
					403: { description: 'Forbidden' },
					404: { description: 'Not Found' }
				},
				'x-order': '2147483647'
			}
		}
	},
	definitions: {
		AccountCurrentTotalResp: {
			type: 'object',
			properties: {
				accountBalance: { type: 'number', description: '盘内余额(不包括游戏账户和冻结余额)', allowEmptyValue: false },
				accountTotal: {
					type: 'number',
					description: '盘内总余额(包括冻结余额, 不包括游戏账户)',
					allowEmptyValue: false
				},
				channelBalance: { type: 'number', description: '游戏账户余额', allowEmptyValue: false }
			},
			title: 'AccountCurrentTotalResp'
		},
		AccountDailyTotalResp: {
			type: 'object',
			properties: {
				amount: { type: 'number', description: '余额', allowEmptyValue: false },
				period: { type: 'string', format: 'date', description: '日期', allowEmptyValue: false }
			},
			title: 'AccountDailyTotalResp'
		},
		AddArticleReq: {
			type: 'object',
			required: ['content', 'lang', 'status', 'title'],
			properties: {
				content: { type: 'string', description: '内容(最大不能超过2000)', allowEmptyValue: false },
				lang: {
					type: 'string',
					description: '语言 中文:zh-CN 英文:en-US 菲律宾:en-PH 越南:vi-VN 泰语:th-TH',
					allowEmptyValue: false
				},
				status: {
					type: 'integer',
					format: 'int32',
					description: '状态 1:启用 0:禁用',
					allowEmptyValue: false,
					minimum: 0.0,
					maximum: 9.223372036854776e18,
					exclusiveMinimum: false,
					exclusiveMaximum: false
				},
				title: { type: 'string', description: '标题(最大不能超过64)', allowEmptyValue: false }
			},
			title: 'AddArticleReq'
		},
		AddBannerReq: {
			type: 'object',
			required: ['fileNo', 'lang', 'status', 'url'],
			properties: {
				fileNo: { type: 'string', description: '文件编号', allowEmptyValue: false },
				lang: {
					type: 'string',
					description: '语言 中文:zh-CN 英文:en-US 菲律宾:en-PH 越南:vi-VN 泰语:th-TH',
					allowEmptyValue: false
				},
				status: {
					type: 'integer',
					format: 'int32',
					description: '状态 1:启用 0:禁用',
					allowEmptyValue: false,
					minimum: 0.0,
					maximum: 9.223372036854776e18,
					exclusiveMinimum: false,
					exclusiveMaximum: false
				},
				url: { type: 'string', description: '链接(最大不能超过256)', allowEmptyValue: false }
			},
			title: 'AddBannerReq'
		},
		AddGameAreaReq: {
			type: 'object',
			required: ['areaName', 'areaNameEn', 'areaNamePh', 'areaNameTh', 'areaNameVn', 'icon', 'proxyUid', 'sortNo', 'style'],
			properties: {
				areaName: { type: 'string', description: '区域名称', allowEmptyValue: false },
				areaNameEn: { type: 'string', description: '区域英文名称', allowEmptyValue: false },
				areaNamePh: { type: 'string', description: '区域菲律宾名称', allowEmptyValue: false },
				areaNameTh: { type: 'string', description: '区域泰语名称', allowEmptyValue: false },
				areaNameVn: { type: 'string', description: '区域越南名称', allowEmptyValue: false },
				banner: { type: 'string', description: 'banner', allowEmptyValue: false },
				icon: { type: 'string', description: 'logo', allowEmptyValue: false },
				proxyUid: { type: 'integer', format: 'int64', description: '包网商id', allowEmptyValue: false },
				sortNo: { type: 'integer', format: 'int32', description: '权重', allowEmptyValue: false },
				style: { type: 'string', description: '风格', allowEmptyValue: false }
			},
			title: 'AddGameAreaReq'
		},
		AddProxyChoiceReq: {
			type: 'object',
			required: ['proxyGameIds'],
			properties: {
				proxyGameIds: {
					type: 'array',
					description: '游戏编号',
					allowEmptyValue: false,
					items: { type: 'integer', format: 'int64' }
				},
				proxyId: { type: 'integer', format: 'int64', description: '代理编号', allowEmptyValue: false }
			},
			title: 'AddProxyChoiceReq'
		},
		AddProxyDomainReq: {
			type: 'object',
			required: ['domain', 'proxyUid'],
			properties: {
				domain: { type: 'string', description: '域名(最长120)', allowEmptyValue: false },
				proxyUid: { type: 'integer', format: 'int64', description: '代理编号', allowEmptyValue: false }
			},
			title: 'AddProxyDomainReq'
		},
		AddProxyGameReq: {
			type: 'object',
			required: ['gameIds'],
			properties: {
				gameIds: {
					type: 'array',
					description: '游戏编号',
					allowEmptyValue: false,
					items: { type: 'integer', format: 'int64' }
				},
				proxyId: { type: 'integer', format: 'int64', description: '代理编号', allowEmptyValue: false }
			},
			title: 'AddProxyGameReq'
		},
		AddProxyReq: {
			type: 'object',
			required: ['account', 'currency', 'password', 'style', 'timeZone', 'url'],
			properties: {
				account: { type: 'string', description: '代理账号', allowEmptyValue: false },
				currency: { type: 'string', description: '币种', allowEmptyValue: false },
				password: { type: 'string', description: '密码', allowEmptyValue: false },
				style: { type: 'string', description: '风格', allowEmptyValue: false },
				timeZone: { type: 'string', description: '时区 如 +08:00', allowEmptyValue: false },
				url: { type: 'string', description: '主地址 http(s)打头', allowEmptyValue: false }
			},
			title: 'AddProxyReq'
		},
		AddTypeReq: {
			type: 'object',
			required: ['factoryCode', 'gameMainTypeCode', 'typeName'],
			properties: {
				factoryCode: { type: 'string', description: '厂商编码', allowEmptyValue: false },
				gameMainTypeCode: { type: 'string', description: '游戏主分类Code', allowEmptyValue: false },
				typeName: { type: 'string', description: '类型名称', allowEmptyValue: false }
			},
			title: 'AddTypeReq'
		},
		AddressReq: {
			type: 'object',
			required: ['address', 'chain'],
			properties: {
				address: { type: 'string', description: '地址', allowEmptyValue: false },
				chain: { type: 'string', description: '链 币安:BSC 波场:TRON', allowEmptyValue: false }
			},
			title: 'AddressReq'
		},
		AdjustAddReq: {
			type: 'object',
			required: ['accountType', 'amount', 'currency', 'toUid'],
			properties: {
				accountType: {
					type: 'integer',
					format: 'int32',
					description: '出金账户类型 1:普通账户 4:借款账户',
					allowEmptyValue: false
				},
				amount: { type: 'number', description: '入金数量', allowEmptyValue: false },
				currency: { type: 'string', description: '币种', allowEmptyValue: false },
				fromUid: {
					type: 'integer',
					format: 'int64',
					description: '出金用户编号 当出金账户类型为1时必须传值',
					allowEmptyValue: false
				},
				toUid: { type: 'integer', format: 'int64', description: '入金用户编号', allowEmptyValue: false }
			},
			title: 'AdjustAddReq'
		},
		AdjustQueryReq: {
			type: 'object',
			properties: {
				fromUid: { type: 'integer', format: 'int64', description: '出金账户', allowEmptyValue: false },
				pageIndex: {
					type: 'integer',
					format: 'int32',
					description: '页码 从1开始计数',
					allowEmptyValue: false,
					minimum: 1.0,
					exclusiveMinimum: false
				},
				pageSize: {
					type: 'integer',
					format: 'int32',
					description: '页容 区间[1, 1000]',
					allowEmptyValue: false,
					minimum: 0.0,
					maximum: 9.223372036854776e18,
					exclusiveMinimum: false,
					exclusiveMaximum: false
				},
				toUid: { type: 'integer', format: 'int64', description: '入金账户', allowEmptyValue: false }
			},
			title: 'AdjustQueryReq'
		},
		AdjustQueryResp: {
			type: 'object',
			properties: {
				accountType: {
					type: 'integer',
					format: 'int32',
					description: '账户类型 1:普通账户 4:借款账户',
					allowEmptyValue: false
				},
				adjustNo: { type: 'string', description: '调账编号', allowEmptyValue: false },
				amount: { type: 'number', description: '调整金额', allowEmptyValue: false },
				createTime: { type: 'string', format: 'date-time', description: '创建时间', allowEmptyValue: false },
				currency: { type: 'string', description: '币种', allowEmptyValue: false },
				fromUid: { type: 'string', description: '出金用户', allowEmptyValue: false },
				toUid: { type: 'integer', format: 'int64', description: '入金用户', allowEmptyValue: false }
			},
			title: 'AdjustQueryResp'
		},
		AgentSettleReq: {
			type: 'object',
			properties: {
				agentId: { type: 'integer', format: 'int64', description: '代理ID', allowEmptyValue: false },
				pageIndex: {
					type: 'integer',
					format: 'int32',
					description: '页码 从1开始计数',
					allowEmptyValue: false,
					minimum: 1.0,
					exclusiveMinimum: false
				},
				pageSize: {
					type: 'integer',
					format: 'int32',
					description: '页容 区间[1, 1000]',
					allowEmptyValue: false,
					minimum: 0.0,
					maximum: 9.223372036854776e18,
					exclusiveMinimum: false,
					exclusiveMaximum: false
				},
				proxyId: { type: 'integer', format: 'int64', description: '包网商ID', allowEmptyValue: false },
				status: {
					type: 'integer',
					format: 'int32',
					description: '状态 3 待线下或自动结算 8 未达成条件 9 结算完成',
					allowEmptyValue: false
				}
			},
			title: 'AgentSettleReq'
		},
		AgentSettleResp: {
			type: 'object',
			properties: {
				agentAccount: { type: 'string', description: '代理帐号', allowEmptyValue: false },
				agentLevel: { type: 'integer', format: 'int32', description: '代理级别', allowEmptyValue: false },
				agentType: {
					type: 'integer',
					format: 'int32',
					description: '代理类型 1:直营 2:招募 3:会员申请',
					allowEmptyValue: false
				},
				agentTypeDesc: { type: 'string' },
				agentUserId: { type: 'integer', format: 'int64', description: '代理编号', allowEmptyValue: false },
				amount: { type: 'number', description: '结算额', allowEmptyValue: false },
				createTime: { type: 'string', format: 'date-time', description: '创建时间', allowEmptyValue: false },
				cycleNo: { type: 'string', description: '结算周期编号', allowEmptyValue: false },
				endPeriod: { type: 'string', format: 'date', description: '周期结束日期', allowEmptyValue: false },
				periodType: { type: 'string', description: '结算周期类型', allowEmptyValue: false },
				proxyUserAccount: { type: 'string', description: '包网商帐号', allowEmptyValue: false },
				proxyUserId: { type: 'integer', format: 'int64', description: '包网商编号', allowEmptyValue: false },
				rewardType: { type: 'integer', format: 'int32', description: '奖励类型 1:占成 2:返佣', allowEmptyValue: false },
				rewardTypeDesc: { type: 'string' },
				settleNo: { type: 'string', description: '结算单号', allowEmptyValue: false },
				startPeriod: { type: 'string', format: 'date', description: '周期开始日期', allowEmptyValue: false },
				status: {
					type: 'integer',
					format: 'int32',
					description: '状态：2：下层代理统计完成（只有这个状态可以提出申请）3:用户提出申请 8:未满足条件 9：线下或自动结算完成',
					allowEmptyValue: false
				},
				statusDesc: { type: 'string' },
				updateTime: { type: 'string', format: 'date-time', description: '更新时间', allowEmptyValue: false }
			},
			title: 'AgentSettleResp'
		},
		AllocationPaymentChannelReq: {
			type: 'object',
			properties: {
				paymentChannelList: {
					type: 'array',
					description: '支付渠道',
					allowEmptyValue: false,
					items: { type: 'string' }
				},
				proxyUid: { type: 'integer', format: 'int64', description: '包网商id', allowEmptyValue: false }
			},
			title: 'AllocationPaymentChannelReq'
		},
		AreaIdReq: {
			type: 'object',
			required: ['areaId', 'proxyUid'],
			properties: {
				areaId: { type: 'integer', format: 'int64', description: '区域编号', allowEmptyValue: false },
				proxyUid: { type: 'integer', format: 'int64', description: '包网商id', allowEmptyValue: false }
			},
			title: 'AreaIdReq'
		},
		ArticleIdReq: {
			type: 'object',
			required: ['articleNo'],
			properties: { articleNo: { type: 'string', description: '公告编号', allowEmptyValue: false } },
			title: 'ArticleIdReq'
		},
		ArticleResp: {
			type: 'object',
			properties: {
				articleNo: { type: 'string', description: '公告编号', allowEmptyValue: false },
				content: { type: 'string', description: '内容', allowEmptyValue: false },
				createTime: { type: 'string', format: 'date-time', description: '创建时间', allowEmptyValue: false },
				lang: { type: 'string', description: '语言', allowEmptyValue: false },
				status: { type: 'integer', format: 'int32', description: '状态 1:启用 0:禁用', allowEmptyValue: false },
				title: { type: 'string', description: '标题', allowEmptyValue: false },
				updateTime: { type: 'string', format: 'date-time', description: '更新时间', allowEmptyValue: false }
			},
			title: 'ArticleResp'
		},
		AssetChangeLogReq: {
			type: 'object',
			properties: {
				end: { type: 'string', format: 'date-time', description: '交易时间结束', allowEmptyValue: false },
				pageIndex: {
					type: 'integer',
					format: 'int32',
					description: '页码 从1开始计数',
					allowEmptyValue: false,
					minimum: 1.0,
					exclusiveMinimum: false
				},
				pageSize: {
					type: 'integer',
					format: 'int32',
					description: '页容 区间[1, 1000]',
					allowEmptyValue: false,
					minimum: 0.0,
					maximum: 9.223372036854776e18,
					exclusiveMinimum: false,
					exclusiveMaximum: false
				},
				proxyUid: { type: 'integer', format: 'int64', description: '包网商编号', allowEmptyValue: false },
				start: { type: 'string', format: 'date-time', description: '交易时间开始', allowEmptyValue: false },
				type: { type: 'string', description: '类型', allowEmptyValue: false },
				userId: { type: 'integer', format: 'int64', description: '用户编号', allowEmptyValue: false }
			},
			title: 'AssetChangeLogReq'
		},
		AssetChangeLogResp: {
			type: 'object',
			properties: {
				agentName: { type: 'string', description: '上级代理名称', allowEmptyValue: false },
				agentUid: { type: 'integer', format: 'int64', description: '上级代理id', allowEmptyValue: false },
				amount: { type: 'number', description: '发生额', allowEmptyValue: false },
				createTime: { type: 'string', format: 'date-time', description: '创建时间', allowEmptyValue: false },
				currency: { type: 'string', description: '币种', allowEmptyValue: false },
				direct: { type: 'string', description: '方向 in:入金 out:出金', allowEmptyValue: false },
				multiple: { type: 'number', description: '流水倍数', allowEmptyValue: false },
				proxyName: { type: 'string', description: '所属包网商', allowEmptyValue: false },
				proxyUid: { type: 'integer', format: 'int64', description: '所属包网商id', allowEmptyValue: false },
				transactionType: { type: 'string', description: '变动类型', allowEmptyValue: false },
				transactionTypeText: { type: 'string', description: '变动类型文本', allowEmptyValue: false },
				userId: { type: 'integer', format: 'int64', description: '用户编号', allowEmptyValue: false },
				userName: { type: 'string', description: '用户名', allowEmptyValue: false }
			},
			title: 'AssetChangeLogResp'
		},
		AssetChangeLogType: {
			type: 'object',
			properties: {
				code: { type: 'string', description: '下拉编码', allowEmptyValue: false },
				text: { type: 'string', description: '下拉文本', allowEmptyValue: false }
			},
			title: 'AssetChangeLogType'
		},
		BankCardDeleteReq: {
			type: 'object',
			properties: {
				bizCardCode: { type: 'string', description: '业务卡号，更新或查看时，必传', allowEmptyValue: false }
			},
			title: 'BankCardDeleteReq'
		},
		BankCardDetailPropResp: {
			type: 'object',
			properties: {
				propCode: { type: 'string', description: '属性编码', allowEmptyValue: false },
				propDesc: { type: 'string' },
				propLen: { type: 'integer', format: 'int32' },
				propName: { type: 'string', description: '属性名', allowEmptyValue: false },
				propNameEn: { type: 'string', description: '属性英文名', allowEmptyValue: false },
				propNamePh: { type: 'string', description: '属性菲律宾名', allowEmptyValue: false },
				propNameTh: { type: 'string', description: '属性泰语名', allowEmptyValue: false },
				propNameVn: { type: 'string', description: '属性越南名', allowEmptyValue: false },
				propRequired: { type: 'integer', format: 'int32', description: '是否必填', allowEmptyValue: false },
				propValue: { type: 'string', description: '值', allowEmptyValue: false },
				updateTime: { type: 'string', format: 'date-time', description: '更新时间', allowEmptyValue: false }
			},
			title: 'BankCardDetailPropResp'
		},
		BankCardDetailReq: {
			type: 'object',
			properties: {
				bizCardCode: { type: 'string', description: '业务卡号，更新或查看时，必传', allowEmptyValue: false }
			},
			title: 'BankCardDetailReq'
		},
		BankCardDetailResp: {
			type: 'object',
			required: ['bankNameEn', 'bankNamePh', 'bankNameTh', 'bankNameVn', 'currencyCode', 'status'],
			properties: {
				bankName: { type: 'string', description: '银行名称', allowEmptyValue: false },
				bankNameEn: { type: 'string', description: '银行英文名称', allowEmptyValue: false },
				bankNamePh: { type: 'string', description: '银行菲律宾名称', allowEmptyValue: false },
				bankNameTh: { type: 'string', description: '银行泰语名称', allowEmptyValue: false },
				bankNameVn: { type: 'string', description: '银行越南名称', allowEmptyValue: false },
				currencyCode: { type: 'string', description: '法币，都好分割', allowEmptyValue: false },
				props: {
					type: 'array',
					description: '其他属性',
					allowEmptyValue: false,
					items: { $ref: '#/definitions/BankCardDetailPropResp' }
				},
				status: {
					type: 'integer',
					format: 'int32',
					description: '状态：1 可用；0 不可用',
					allowEmptyValue: false,
					enum: [1, 0]
				}
			},
			title: 'BankCardDetailResp'
		},
		BankCardQueryReq: {
			type: 'object',
			properties: {
				end: { type: 'string', format: 'date-time', description: '结束时间', allowEmptyValue: false },
				start: { type: 'string', format: 'date-time', description: '开始时间', allowEmptyValue: false },
				status: { type: 'integer', format: 'int32', description: '状态：1 可用；0 不可用', allowEmptyValue: false }
			},
			title: 'BankCardQueryReq'
		},
		BankCardQueryResp: {
			type: 'object',
			required: ['bankNameEn', 'bankNamePh', 'bankNameTh', 'bankNameVn'],
			properties: {
				bankAccount: { type: 'string', description: '银行账号', allowEmptyValue: false },
				bankName: { type: 'string', description: '银行名称', allowEmptyValue: false },
				bankNameEn: { type: 'string', description: '银行英文名称', allowEmptyValue: false },
				bankNamePh: { type: 'string', description: '银行菲律宾名称', allowEmptyValue: false },
				bankNameTh: { type: 'string', description: '银行泰语名称', allowEmptyValue: false },
				bankNameVn: { type: 'string', description: '银行越南名称', allowEmptyValue: false },
				bizCardNo: { type: 'string', description: '业务卡号', allowEmptyValue: false },
				currencyCode: { type: 'string', description: '币种编码', allowEmptyValue: false },
				currencyName: { type: 'string', description: '币种名称', allowEmptyValue: false },
				status: { type: 'integer', format: 'int32', description: '状态 1:开启 0:关闭', allowEmptyValue: false },
				updateTime: { type: 'string', format: 'date-time', description: '更新时间', allowEmptyValue: false }
			},
			title: 'BankCardQueryResp'
		},
		BankCardUpdatePropReq: {
			type: 'object',
			required: ['propCode', 'propName', 'propValue'],
			properties: {
				propCode: { type: 'string', description: '属性编码', allowEmptyValue: false },
				propName: { type: 'string', description: '属性名', allowEmptyValue: false },
				propValue: { type: 'string', description: '值', allowEmptyValue: false }
			},
			title: 'BankCardUpdatePropReq'
		},
		BankCardUpdateReq: {
			type: 'object',
			required: ['currencyCode', 'status'],
			properties: {
				bankName: { type: 'string', description: '银行名称', allowEmptyValue: false },
				bizCardCode: { type: 'string', description: '业务卡号，更新或查看时，必传', allowEmptyValue: false },
				currencyCode: { type: 'string', description: '法币，顿号（、）分割', allowEmptyValue: false },
				props: {
					type: 'array',
					description: '其他属性',
					allowEmptyValue: false,
					items: { $ref: '#/definitions/BankCardUpdatePropReq' }
				},
				status: {
					type: 'integer',
					format: 'int32',
					description: '状态：1 可用；0 不可用',
					allowEmptyValue: false,
					enum: [1, 0]
				}
			},
			title: 'BankCardUpdateReq'
		},
		BankDetailResp: {
			type: 'object',
			required: ['bankNameEn', 'bankNamePh', 'bankNameTh', 'bankNameVn'],
			properties: {
				bankName: { type: 'string', description: '银行名称', allowEmptyValue: false },
				bankNameEn: { type: 'string', description: '银行英文名称', allowEmptyValue: false },
				bankNamePh: { type: 'string', description: '银行菲律宾名称', allowEmptyValue: false },
				bankNameTh: { type: 'string', description: '银行泰语名称', allowEmptyValue: false },
				bankNameVn: { type: 'string', description: '银行越南名称', allowEmptyValue: false },
				props: {
					type: 'array',
					description: '其他属性',
					allowEmptyValue: false,
					items: { $ref: '#/definitions/银行属性请求' }
				}
			},
			title: 'BankDetailResp'
		},
		BankQueryReq: {
			type: 'object',
			properties: { bankName: { type: 'string', description: '银行名称', allowEmptyValue: false } },
			title: 'BankQueryReq'
		},
		BankQueryResp: {
			type: 'object',
			properties: {
				bankCount: { type: 'integer', format: 'int64', description: '银行信息数量', allowEmptyValue: false },
				bankName: { type: 'string', description: '银行名称', allowEmptyValue: false },
				updateTime: { type: 'string', format: 'date-time', description: '更新时间', allowEmptyValue: false }
			},
			title: 'BankQueryResp'
		},
		BannerNoReq: {
			type: 'object',
			required: ['bannerNo'],
			properties: { bannerNo: { type: 'string', description: '横幅编号', allowEmptyValue: false } },
			title: 'BannerNoReq'
		},
		BannerResp: {
			type: 'object',
			properties: {
				bannerNo: { type: 'string', description: '横幅编号', allowEmptyValue: false },
				createTime: { type: 'string', format: 'date-time', description: '创建时间', allowEmptyValue: false },
				fileNo: { type: 'string', description: '横幅文件', allowEmptyValue: false },
				fileUrl: { type: 'string', description: '横幅文件地址', allowEmptyValue: false },
				lang: { type: 'string', description: '语言', allowEmptyValue: false },
				status: { type: 'integer', format: 'int32', description: '状态 1:启用 0:禁用', allowEmptyValue: false },
				updateTime: { type: 'string', format: 'date-time', description: '更新时间', allowEmptyValue: false },
				url: { type: 'string', description: '横幅点击跳转链接', allowEmptyValue: false }
			},
			title: 'BannerResp'
		},
		BaseGameListReq: {
			type: 'object',
			properties: {
				channelId: { type: 'string', description: '游戏渠道编号', allowEmptyValue: false },
				factoryCode: { type: 'string', description: '厂商编码', allowEmptyValue: false },
				gameName: { type: 'string', description: '游戏名称', allowEmptyValue: false },
				gameType: { type: 'integer', format: 'int64', description: '所属类型', allowEmptyValue: false },
				pageIndex: {
					type: 'integer',
					format: 'int32',
					description: '页码 从1开始计数',
					allowEmptyValue: false,
					minimum: 1.0,
					exclusiveMinimum: false
				},
				pageSize: {
					type: 'integer',
					format: 'int32',
					description: '页容 区间[1, 1000]',
					allowEmptyValue: false,
					minimum: 0.0,
					maximum: 9.223372036854776e18,
					exclusiveMinimum: false,
					exclusiveMaximum: false
				}
			},
			title: 'BaseGameListReq'
		},
		BaseGameListResp: {
			type: 'object',
			properties: {
				channelId: { type: 'string', description: '渠道编号', allowEmptyValue: false },
				channelName: { type: 'string', description: '渠道名称', allowEmptyValue: false },
				createTime: { type: 'string', format: 'date-time', description: '创建时间', allowEmptyValue: false },
				factoryCode: { type: 'string', description: '游戏厂商', allowEmptyValue: false },
				gameCode: { type: 'string', description: '游戏code', allowEmptyValue: false },
				gameId: { type: 'integer', format: 'int64', description: '游戏id', allowEmptyValue: false },
				gameName: { type: 'string', description: '游戏名称', allowEmptyValue: false },
				gameNameEn: { type: 'string', description: '游戏英文名称', allowEmptyValue: false },
				gameType: { type: 'integer', format: 'int64', description: '游戏类型编号', allowEmptyValue: false },
				gameTypeName: { type: 'string', description: '游戏类型名称', allowEmptyValue: false },
				icon: { type: 'string', description: '图片编号', allowEmptyValue: false },
				icon2: { type: 'string', description: '图片编号', allowEmptyValue: false },
				icon2Url: { type: 'string', description: 'icon链接', allowEmptyValue: false },
				icon3: { type: 'string', description: '图片编号', allowEmptyValue: false },
				icon3Url: { type: 'string', description: 'icon链接', allowEmptyValue: false },
				iconUrl: { type: 'string', description: 'icon链接', allowEmptyValue: false },
				label: { type: 'string', description: '标签', allowEmptyValue: false },
				status: { type: 'integer', format: 'int32', description: '状态 1:启用 0:禁用', allowEmptyValue: false },
				updateTime: { type: 'string', format: 'date-time', description: '更新时间', allowEmptyValue: false }
			},
			title: 'BaseGameListResp'
		},
		BaseGameReq: {
			type: 'object',
			properties: {
				channelName: { type: 'string', description: '游戏渠道名称', allowEmptyValue: false },
				factoryCode: { type: 'string', description: '厂商', allowEmptyValue: false },
				gameName: { type: 'string', description: '游戏名', allowEmptyValue: false }
			},
			title: 'BaseGameReq'
		},
		BaseGameResp: {
			type: 'object',
			properties: {
				channelName: { type: 'string', description: '渠道名称', allowEmptyValue: false },
				factoryCode: { type: 'string', description: '游戏厂商', allowEmptyValue: false },
				gameId: { type: 'integer', format: 'int64', description: '游戏id', allowEmptyValue: false },
				gameName: { type: 'string', description: '游戏名称', allowEmptyValue: false },
				gameNameEn: { type: 'string', description: '游戏英文名称', allowEmptyValue: false },
				gameTypeName: { type: 'string', description: '游戏类型名称', allowEmptyValue: false },
				icon: { type: 'string', description: '图片编号', allowEmptyValue: false },
				icon2: { type: 'string', description: '图片编号', allowEmptyValue: false },
				icon2Url: { type: 'string', description: 'icon链接', allowEmptyValue: false },
				icon3: { type: 'string', description: '图片编号', allowEmptyValue: false },
				icon3Url: { type: 'string', description: 'icon链接', allowEmptyValue: false },
				iconUrl: { type: 'string', description: 'icon链接', allowEmptyValue: false },
				label: { type: 'string', description: '标签', allowEmptyValue: false },
				updateTime: { type: 'string', format: 'date-time', description: '更新时间', allowEmptyValue: false }
			},
			title: 'BaseGameResp'
		},
		ChangeLogoReq: {
			type: 'object',
			required: ['factoryCode', 'icon'],
			properties: {
				factoryCode: { type: 'string', description: '厂商编号', allowEmptyValue: false },
				icon: { type: 'string', description: '渠道logo', allowEmptyValue: false }
			},
			title: 'ChangeLogoReq'
		},
		ChannelAccountResp: {
			type: 'object',
			properties: {
				balance: { type: 'number', description: '余额', allowEmptyValue: false },
				channelId: { type: 'string', description: '渠道编号', allowEmptyValue: false },
				channelName: { type: 'string', description: '渠道名称', allowEmptyValue: false }
			},
			title: 'ChannelAccountResp'
		},
		ChannelDepostWithdrawSummaryReq: {
			type: 'object',
			properties: {
				end: { type: 'string', format: 'date', description: '结束日期', allowEmptyValue: false },
				proxyUserId: {
					type: 'integer',
					format: 'int64',
					description: '代理商包网商编号,全部传0',
					allowEmptyValue: false
				},
				start: { type: 'string', format: 'date', description: '开始日期', allowEmptyValue: false }
			},
			title: 'ChannelDepostWithdrawSummaryReq'
		},
		ChannelDepostWithdrawSummaryResp: {
			type: 'object',
			properties: {
				depositAmount: { type: 'number', description: '充值金额（原始币种）', allowEmptyValue: false },
				depositBaseAmount: { type: 'number', description: '充值金额（基础币种，已扣手续费）', allowEmptyValue: false },
				withdrawAmount: { type: 'number', description: '提现金额（原始币种）', allowEmptyValue: false },
				withdrawBaseAmount: { type: 'number', description: '提现金额（基础币种，已扣手续费）', allowEmptyValue: false }
			},
			title: 'ChannelDepostWithdrawSummaryResp'
		},
		ChannelIdReq: {
			type: 'object',
			required: ['channelId'],
			properties: { channelId: { type: 'string', description: '渠道编号', allowEmptyValue: false } },
			title: 'ChannelIdReq'
		},
		ChannelRateResp: {
			type: 'object',
			properties: {
				currencyCode: { type: 'string', description: '币种', allowEmptyValue: false },
				rate: { type: 'number', description: '汇率', allowEmptyValue: false },
				updateTime: { type: 'string', format: 'date-time', description: '更新时间', allowEmptyValue: false }
			},
			title: 'ChannelRateResp'
		},
		ChannelRateUpdateReq: {
			type: 'object',
			properties: {
				currencyCode: { type: 'string', description: '币种', allowEmptyValue: false },
				rate: { type: 'number', description: '汇率', allowEmptyValue: false, minimum: 0.0, exclusiveMinimum: false }
			},
			title: 'ChannelRateUpdateReq'
		},
		ChannelTypeResp: {
			type: 'object',
			properties: {
				factoryCode: { type: 'string', description: '游戏渠道', allowEmptyValue: false },
				typeId: { type: 'integer', format: 'int64', description: '类型编号', allowEmptyValue: false },
				typeName: { type: 'string', description: '游戏类型名称', allowEmptyValue: false }
			},
			title: 'ChannelTypeResp'
		},
		CheckLogRequestVo: {
			type: 'object',
			properties: {
				bizCode: {
					type: 'string',
					description: '业务代码 WITHDRAW_COIN 提币  USER_CERT_AUTH  实名认证',
					allowEmptyValue: false
				},
				bizId: { type: 'string', description: '业务编号', allowEmptyValue: false }
			},
			title: 'CheckLogRequestVo',
			description: '审核日志请求信息'
		},
		CheckLogVo: {
			type: 'object',
			properties: {
				bizId: { type: 'string', description: '业务编号', allowEmptyValue: false },
				checkResult: {
					type: 'integer',
					format: 'int32',
					description: '审核结果 1通过 2不通过 ',
					allowEmptyValue: false
				},
				checkType: { type: 'integer', format: 'int32', description: '审核类型 1初审 2复审', allowEmptyValue: false },
				checkUserId: { type: 'string', description: '审核人编号 ', allowEmptyValue: false },
				checkUserName: { type: 'string', description: '审核人姓名', allowEmptyValue: false },
				createTime: { type: 'string', format: 'date-time', description: '审核时间', allowEmptyValue: false },
				remark: { type: 'string', description: '备注', allowEmptyValue: false }
			},
			title: 'CheckLogVo',
			description: '审核日志信息'
		},
		ChessCardGameRecordReq: {
			type: 'object',
			properties: {
				betEndTime: { type: 'string', format: 'date-time', description: '注单时间-结束', allowEmptyValue: false },
				betStartTime: { type: 'string', format: 'date-time', description: '注单时间-开始', allowEmptyValue: false },
				channelId: { type: 'string', description: '用户Id', allowEmptyValue: false },
				factoryCode: { type: 'string', description: '厂商', allowEmptyValue: false },
				pageIndex: {
					type: 'integer',
					format: 'int32',
					description: '页码 从1开始计数',
					allowEmptyValue: false,
					minimum: 1.0,
					exclusiveMinimum: false
				},
				pageSize: {
					type: 'integer',
					format: 'int32',
					description: '页容 区间[1, 1000]',
					allowEmptyValue: false,
					minimum: 0.0,
					maximum: 9.223372036854776e18,
					exclusiveMinimum: false,
					exclusiveMaximum: false
				},
				userId: { type: 'integer', format: 'int64', description: '用户Id', allowEmptyValue: false },
				userName: { type: 'string', description: '用户名', allowEmptyValue: false }
			},
			title: 'ChessCardGameRecordReq'
		},
		ChessCardGameRecordResp: {
			type: 'object',
			properties: {
				agentAccount: { type: 'string', description: '上级代理', allowEmptyValue: false },
				bureauId: { type: 'string', description: '局号', allowEmptyValue: false },
				channelId: { type: 'string', description: '渠道Id', allowEmptyValue: false },
				channelName: { type: 'string', description: '渠道名称', allowEmptyValue: false },
				gameAccount: { type: 'string', description: '游戏账户', allowEmptyValue: false },
				gameName: { type: 'string', description: '游戏名称', allowEmptyValue: false },
				gameType: { type: 'integer', format: 'int64', description: '游戏类型id', allowEmptyValue: false },
				gameTypeName: { type: 'string', description: '游戏类型名称', allowEmptyValue: false },
				result: { type: 'number', description: '输赢金额', allowEmptyValue: false },
				resultFlagName: { type: 'string', description: '游戏结果', allowEmptyValue: false },
				revenue: { type: 'number', description: '抽水', allowEmptyValue: false },
				startTime: { type: 'integer', format: 'int64', description: '投注时间', allowEmptyValue: false },
				statusName: { type: 'string', description: '结算状态', allowEmptyValue: false },
				totalBet: { type: 'number', description: '投注额', allowEmptyValue: false },
				transactionId: { type: 'string', description: '注单流水号', allowEmptyValue: false },
				userId: { type: 'integer', format: 'int64', description: '用户Id', allowEmptyValue: false },
				userName: { type: 'string', description: '用户名', allowEmptyValue: false },
				validBet: { type: 'number', description: '有效投注', allowEmptyValue: false }
			},
			title: 'ChessCardGameRecordResp'
		},
		ChickenGameRecordReq: {
			type: 'object',
			properties: {
				betEndTime: { type: 'string', format: 'date-time', description: '注单时间-结束', allowEmptyValue: false },
				betStartTime: { type: 'string', format: 'date-time', description: '注单时间-开始', allowEmptyValue: false },
				channelId: { type: 'string', description: '用户Id', allowEmptyValue: false },
				factoryCode: { type: 'string', description: '厂商', allowEmptyValue: false },
				pageIndex: {
					type: 'integer',
					format: 'int32',
					description: '页码 从1开始计数',
					allowEmptyValue: false,
					minimum: 1.0,
					exclusiveMinimum: false
				},
				pageSize: {
					type: 'integer',
					format: 'int32',
					description: '页容 区间[1, 1000]',
					allowEmptyValue: false,
					minimum: 0.0,
					maximum: 9.223372036854776e18,
					exclusiveMinimum: false,
					exclusiveMaximum: false
				},
				userId: { type: 'integer', format: 'int64', description: '用户Id', allowEmptyValue: false },
				userName: { type: 'string', description: '用户名', allowEmptyValue: false }
			},
			title: 'ChickenGameRecordReq'
		},
		ChickenGameRecordResp: {
			type: 'object',
			properties: {
				agentAccount: { type: 'string', description: '上级代理', allowEmptyValue: false },
				bureauId: { type: 'string', description: '局号', allowEmptyValue: false },
				channelId: { type: 'string', description: '渠道Id', allowEmptyValue: false },
				channelName: { type: 'string', description: '渠道名称', allowEmptyValue: false },
				endTime: { type: 'integer', format: 'int64', description: '结束时间', allowEmptyValue: false },
				gameAccount: { type: 'string', description: '游戏账户', allowEmptyValue: false },
				gameType: { type: 'integer', format: 'int64', description: '游戏类型id', allowEmptyValue: false },
				gameTypeName: { type: 'string', description: '游戏类型名称', allowEmptyValue: false },
				result: { type: 'number', description: '输赢金额', allowEmptyValue: false },
				resultFlagName: { type: 'string', description: '游戏结果', allowEmptyValue: false },
				startTime: { type: 'integer', format: 'int64', description: '开始时间', allowEmptyValue: false },
				statusName: { type: 'string', description: '结算状态', allowEmptyValue: false },
				totalBet: { type: 'number', description: '投注额', allowEmptyValue: false },
				userId: { type: 'integer', format: 'int64', description: '用户Id', allowEmptyValue: false },
				validBet: { type: 'number', description: '有效投注', allowEmptyValue: false }
			},
			title: 'ChickenGameRecordResp'
		},
		CollectReq: {
			type: 'object',
			required: ['minAmount', 'period'],
			properties: {
				minAmount: {
					type: 'number',
					description: '最小归集金额',
					allowEmptyValue: false,
					minimum: 0.0,
					exclusiveMinimum: false
				},
				period: {
					type: 'integer',
					format: 'int64',
					description: '归集周期(小时)',
					allowEmptyValue: false,
					minimum: 0.0,
					exclusiveMinimum: false
				}
			},
			title: 'CollectReq'
		},
		CollectResp: {
			type: 'object',
			required: ['collectAddress', 'hotAddress', 'minAmount', 'period'],
			properties: {
				collectAddress: { type: 'string', description: '波场归集地址', allowEmptyValue: false },
				collectAddressBsc: { type: 'string', description: '币安归集地址', allowEmptyValue: false },
				hotAddress: { type: 'string', description: '波场头寸地址', allowEmptyValue: false },
				hotAddressBsc: { type: 'string', description: '币安头寸地址', allowEmptyValue: false },
				minAmount: { type: 'number', description: '最小归集金额', allowEmptyValue: false },
				period: { type: 'integer', format: 'int64', description: '归集周期(小时)', allowEmptyValue: false }
			},
			title: 'CollectResp'
		},
		CollectionAccountResp: {
			type: 'object',
			properties: {
				bscUsdtAmount: { type: 'number', description: 'usdt-bsc', allowEmptyValue: false },
				trcUsdtAmount: { type: 'number', description: 'usdt-trc', allowEmptyValue: false }
			},
			title: 'CollectionAccountResp'
		},
		CurrencyQueryReq: {
			type: 'object',
			properties: {
				end: { type: 'string', format: 'date-time', description: '结束时间', allowEmptyValue: false },
				keyword: { type: 'string', description: '币种中文/代码', allowEmptyValue: false },
				start: { type: 'string', format: 'date-time', description: '开始时间', allowEmptyValue: false },
				status: { type: 'integer', format: 'int32', description: '状态：1 可用；0 不可用', allowEmptyValue: false }
			},
			title: 'CurrencyQueryReq'
		},
		DailyStatisticsReq: {
			type: 'object',
			required: ['userId'],
			properties: {
				end: { type: 'string', format: 'date', description: '结束日期', allowEmptyValue: false },
				start: { type: 'string', format: 'date', description: '起始日期', allowEmptyValue: false },
				userId: { type: 'integer', format: 'int64', description: '代理商包网商编号,全部传0', allowEmptyValue: false }
			},
			title: 'DailyStatisticsReq'
		},
		DeleteTypeReq: {
			type: 'object',
			required: ['factoryCode', 'typeName'],
			properties: {
				factoryCode: { type: 'string', description: '厂商编码', allowEmptyValue: false },
				typeName: { type: 'string', description: '类型名称', allowEmptyValue: false }
			},
			title: 'DeleteTypeReq'
		},
		DepositBankCardResp: {
			type: 'object',
			properties: {
				bankName: { type: 'string' },
				bizCardNo: { type: 'string' },
				currencyCode: { type: 'string' },
				propName: { type: 'string' },
				propValue: { type: 'string' }
			},
			title: 'DepositBankCardResp'
		},
		DepositNoReq: {
			type: 'object',
			required: ['depositNo'],
			properties: { depositNo: { type: 'string', description: '充值单号', allowEmptyValue: false } },
			title: 'DepositNoReq'
		},
		DepositQueryReq: {
			type: 'object',
			properties: {
				currencyType: {
					type: 'integer',
					format: 'int32',
					description: '充值类型:1 数字货币；2 法币',
					allowEmptyValue: false
				},
				depositNo: { type: 'integer', format: 'int64', description: '订单编号', allowEmptyValue: false },
				end: { type: 'string', format: 'date-time', description: '交易时间结束', allowEmptyValue: false },
				fromAddress: { type: 'string', description: '充币地址', allowEmptyValue: false },
				pageIndex: {
					type: 'integer',
					format: 'int32',
					description: '页码 从1开始计数',
					allowEmptyValue: false,
					minimum: 1.0,
					exclusiveMinimum: false
				},
				pageSize: {
					type: 'integer',
					format: 'int32',
					description: '页容 区间[1, 1000]',
					allowEmptyValue: false,
					minimum: 0.0,
					maximum: 9.223372036854776e18,
					exclusiveMinimum: false,
					exclusiveMaximum: false
				},
				parentAccount: { type: 'string', description: '上级代理帐号', allowEmptyValue: false },
				parentId: { type: 'integer', format: 'int64', description: '上级代理ID', allowEmptyValue: false },
				proxyUserAccount: { type: 'string', description: '包网商帐号', allowEmptyValue: false },
				proxyUserId: { type: 'integer', format: 'int64', description: '代理ID', allowEmptyValue: false },
				start: { type: 'string', format: 'date-time', description: '交易时间开始', allowEmptyValue: false },
				status: {
					type: 'integer',
					format: 'int32',
					description: '状态：0:待审核 1:审核通过 2:审核拒绝',
					allowEmptyValue: false
				},
				userAccount: { type: 'string', description: '用户账号', allowEmptyValue: false },
				userId: { type: 'integer', format: 'int64', description: '用户编号', allowEmptyValue: false }
			},
			title: 'DepositQueryReq'
		},
		DepositQueryResp: {
			type: 'object',
			properties: {
				actualAmount: { type: 'number', description: '实际总分值', allowEmptyValue: false },
				agentAccount: { type: 'string', description: '1级代理账户', allowEmptyValue: false },
				agentId: { type: 'integer', format: 'int64', description: '1级代理ID', allowEmptyValue: false },
				amount: { type: 'number', description: '充值金额', allowEmptyValue: false },
				chain: { type: 'string', description: '链', allowEmptyValue: false },
				channelType: { type: 'string', description: '渠道类型', allowEmptyValue: false },
				createTime: { type: 'string', format: 'date-time', description: '到账时间', allowEmptyValue: false },
				currencyCode: { type: 'string', description: '币种代码', allowEmptyValue: false },
				currencyType: {
					type: 'integer',
					format: 'int32',
					description: '充值类型：1 数字货币；2 法币',
					allowEmptyValue: false
				},
				depositNo: { type: 'string', description: '充币单号', allowEmptyValue: false },
				depositType: {
					type: 'integer',
					format: 'int32',
					description: '充币类型 1:外部充币 2:内部充币 3：系统充值',
					allowEmptyValue: false
				},
				depositWay: {
					type: 'integer',
					format: 'int32',
					description: '充值方式，0:银行卡-普通充值，1：银行卡-渠道充值，2:第三方-普通充值，3：第三方-渠道充值',
					allowEmptyValue: false
				},
				fee: { type: 'number', description: '手续费', allowEmptyValue: false },
				feeType: {
					type: 'integer',
					format: 'int32',
					description: '手续费类型:1 百分比；2 固定值',
					allowEmptyValue: false
				},
				feeValue: { type: 'number' },
				fromAddress: { type: 'string', description: '充值地址', allowEmptyValue: false },
				parentAccount: { type: 'string', description: '上级代理帐号', allowEmptyValue: false },
				parentId: { type: 'integer', format: 'int64', description: '上级代理ID', allowEmptyValue: false },
				proxyUserAccount: { type: 'string', description: '归属包网商', allowEmptyValue: false },
				proxyUserId: { type: 'integer', format: 'int64', description: '代理ID', allowEmptyValue: false },
				rate: { type: 'number', description: '汇率', allowEmptyValue: false },
				refuseDesc: { type: 'string', description: '拒绝理由', allowEmptyValue: false },
				reminder: { type: 'string', description: '备注', allowEmptyValue: false },
				status: {
					type: 'integer',
					format: 'int32',
					description: '状态:0:待审核 1:审核通过 2:审核拒绝',
					allowEmptyValue: false
				},
				toAddress: { type: 'string', description: '接收地址', allowEmptyValue: false },
				totalAmount: { type: 'number', description: '总分值', allowEmptyValue: false },
				txHash: { type: 'string', description: '交易hash', allowEmptyValue: false },
				userAccount: { type: 'string', description: '用户账号', allowEmptyValue: false },
				userId: { type: 'integer', format: 'int64', description: '用户编号', allowEmptyValue: false },
				userLabel: { type: 'string', description: '用户标签，多个逗号隔开', allowEmptyValue: false },
				userType: { type: 'integer', format: 'int32', description: '会员类型', allowEmptyValue: false }
			},
			title: 'DepositQueryResp'
		},
		DepositRefuseReq: {
			type: 'object',
			required: ['depositNo'],
			properties: {
				depositNo: { type: 'string', description: '充值单号', allowEmptyValue: false },
				refuseDesc: { type: 'string', description: '拒绝理由', allowEmptyValue: false }
			},
			title: 'DepositRefuseReq'
		},
		DepositSummaryReq: {
			type: 'object',
			properties: {
				end: { type: 'string', format: 'date', description: '结束日期', allowEmptyValue: false },
				proxyUserId: {
					type: 'integer',
					format: 'int64',
					description: '代理商包网商编号,全部传0',
					allowEmptyValue: false
				},
				start: { type: 'string', format: 'date', description: '开始日期', allowEmptyValue: false }
			},
			title: 'DepositSummaryReq'
		},
		DepositSummaryResp: {
			type: 'object',
			properties: {
				depositAmount: { type: 'number', description: '总存款', allowEmptyValue: false },
				depositDigitalAmount: { type: 'number', description: 'USDT存款', allowEmptyValue: false },
				depositLegalAmount: { type: 'number', description: '法币存款', allowEmptyValue: false }
			},
			title: 'DepositSummaryResp'
		},
		DepositUserCountResp: {
			type: 'object',
			properties: {
				depositUserCount: { type: 'integer', format: 'int32', description: '充值人数', allowEmptyValue: false },
				period: { type: 'string', format: 'date', description: '日期', allowEmptyValue: false },
				withdrawUserCount: { type: 'integer', format: 'int32', description: '充值人数', allowEmptyValue: false }
			},
			title: 'DepositUserCountResp'
		},
		DictionaryBaseVo: {
			type: 'object',
			properties: {
				code: { type: 'string', description: '对照码', allowEmptyValue: false },
				codeDesc: { type: 'string', description: '代码描述', allowEmptyValue: false },
				editMode: { type: 'string', description: '编辑模式 0:只读;1:可编辑', allowEmptyValue: false, pattern: '[01]' },
				field: { type: 'string', description: '字典对照字段', allowEmptyValue: false },
				fieldName: { type: 'string', description: '对照字段名称', allowEmptyValue: false },
				remark: { type: 'string', description: '备注', allowEmptyValue: false },
				sortNo: { type: 'integer', format: 'int32', description: '排序号(序号越小排序越靠前)', allowEmptyValue: false }
			},
			title: 'DictionaryBaseVo',
			description: '字典信息'
		},
		DictionaryPagingRequestVo: {
			type: 'object',
			properties: {
				field: { type: 'string', description: '对照字段', allowEmptyValue: false },
				pageIndex: {
					type: 'integer',
					format: 'int32',
					description: '页码(从1开始)',
					allowEmptyValue: false,
					minimum: 1.0,
					exclusiveMinimum: false
				},
				pageSize: {
					type: 'integer',
					format: 'int32',
					description: '页容[1-200]',
					allowEmptyValue: false,
					minimum: 0.0,
					maximum: 9.223372036854776e18,
					exclusiveMinimum: false,
					exclusiveMaximum: false
				}
			},
			title: 'DictionaryPagingRequestVo',
			description: '分页查询字典请求信息'
		},
		DictionaryResponseVo: {
			type: 'object',
			properties: {
				code: { type: 'string', description: '对照码', allowEmptyValue: false },
				codeDesc: { type: 'string', description: '代码描述', allowEmptyValue: false },
				codeId: { type: 'string', description: '字典编号', allowEmptyValue: false },
				createTime: { type: 'string', format: 'date-time', description: '创建时间', allowEmptyValue: false },
				editMode: { type: 'string', description: '编辑模式 0:只读;1:可编辑', allowEmptyValue: false, pattern: '[01]' },
				field: { type: 'string', description: '字典对照字段', allowEmptyValue: false },
				fieldName: { type: 'string', description: '对照字段名称', allowEmptyValue: false },
				remark: { type: 'string', description: '备注', allowEmptyValue: false },
				sortNo: { type: 'integer', format: 'int32', description: '排序号(序号越小排序越靠前)', allowEmptyValue: false },
				updateTime: { type: 'string', format: 'date-time', description: '更新时间', allowEmptyValue: false }
			},
			title: 'DictionaryResponseVo',
			description: '字典信息'
		},
		DictionarySimpleVo: {
			type: 'object',
			properties: {
				code: { type: 'string', description: '对照码', allowEmptyValue: false },
				codeDesc: { type: 'string', description: '代码描述', allowEmptyValue: false },
				field: { type: 'string', description: '字典对照字段', allowEmptyValue: false },
				fieldName: { type: 'string', description: '对照字段名称', allowEmptyValue: false },
				sortNo: { type: 'integer', format: 'int32', description: '排序号(序号越小排序越靠前)', allowEmptyValue: false }
			},
			title: 'DictionarySimpleVo',
			description: '字典信息'
		},
		DictionaryUpdateVo: {
			type: 'object',
			properties: {
				code: { type: 'string', description: '对照码', allowEmptyValue: false },
				codeDesc: { type: 'string', description: '代码描述', allowEmptyValue: false },
				codeId: { type: 'string', description: '字典编号', allowEmptyValue: false },
				editMode: { type: 'string', description: '编辑模式 0:只读;1:可编辑', allowEmptyValue: false, pattern: '[01]' },
				field: { type: 'string', description: '字典对照字段', allowEmptyValue: false },
				fieldName: { type: 'string', description: '对照字段名称', allowEmptyValue: false },
				remark: { type: 'string', description: '备注', allowEmptyValue: false },
				sortNo: { type: 'integer', format: 'int32', description: '排序号(序号越小排序越靠前)', allowEmptyValue: false }
			},
			title: 'DictionaryUpdateVo',
			description: '字典信息'
		},
		ElectronGameRecordReq: {
			type: 'object',
			properties: {
				betEndTime: { type: 'string', format: 'date-time', description: '注单时间-结束', allowEmptyValue: false },
				betStartTime: { type: 'string', format: 'date-time', description: '注单时间-开始', allowEmptyValue: false },
				channelId: { type: 'string', description: '用户Id', allowEmptyValue: false },
				factoryCode: { type: 'string', description: '厂商', allowEmptyValue: false },
				pageIndex: {
					type: 'integer',
					format: 'int32',
					description: '页码 从1开始计数',
					allowEmptyValue: false,
					minimum: 1.0,
					exclusiveMinimum: false
				},
				pageSize: {
					type: 'integer',
					format: 'int32',
					description: '页容 区间[1, 1000]',
					allowEmptyValue: false,
					minimum: 0.0,
					maximum: 9.223372036854776e18,
					exclusiveMinimum: false,
					exclusiveMaximum: false
				},
				userId: { type: 'integer', format: 'int64', description: '用户Id', allowEmptyValue: false },
				userName: { type: 'string', description: '用户名', allowEmptyValue: false }
			},
			title: 'ElectronGameRecordReq'
		},
		ElectronGameRecordResp: {
			type: 'object',
			properties: {
				agentAccount: { type: 'string', description: '上级代理', allowEmptyValue: false },
				channelId: { type: 'string', description: '渠道Id', allowEmptyValue: false },
				channelName: { type: 'string', description: '渠道名称', allowEmptyValue: false },
				gameAccount: { type: 'string', description: '游戏账户', allowEmptyValue: false },
				gameName: { type: 'string', description: '游戏名称', allowEmptyValue: false },
				gameType: { type: 'integer', format: 'int64', description: '游戏类型id', allowEmptyValue: false },
				gameTypeName: { type: 'string', description: '游戏类型名称', allowEmptyValue: false },
				result: { type: 'number', description: '输赢金额', allowEmptyValue: false },
				resultFlagName: { type: 'string', description: '游戏结果', allowEmptyValue: false },
				startTime: { type: 'integer', format: 'int64', description: '投注时间', allowEmptyValue: false },
				statusName: { type: 'string', description: '结算状态', allowEmptyValue: false },
				totalBet: { type: 'number', description: '投注额', allowEmptyValue: false },
				transactionId: { type: 'string', description: '注单流水号', allowEmptyValue: false },
				userId: { type: 'integer', format: 'int64', description: '用户Id', allowEmptyValue: false },
				userName: { type: 'string', description: '用户名', allowEmptyValue: false },
				validBet: { type: 'number', description: '有效投注', allowEmptyValue: false }
			},
			title: 'ElectronGameRecordResp'
		},
		EsportGameRecordReq: {
			type: 'object',
			properties: {
				betEndTime: { type: 'string', format: 'date-time', description: '注单时间-结束', allowEmptyValue: false },
				betStartTime: { type: 'string', format: 'date-time', description: '注单时间-开始', allowEmptyValue: false },
				channelId: { type: 'string', description: '渠道Id', allowEmptyValue: false },
				factoryCode: { type: 'string', description: '厂商', allowEmptyValue: false },
				pageIndex: {
					type: 'integer',
					format: 'int32',
					description: '页码 从1开始计数',
					allowEmptyValue: false,
					minimum: 1.0,
					exclusiveMinimum: false
				},
				pageSize: {
					type: 'integer',
					format: 'int32',
					description: '页容 区间[1, 1000]',
					allowEmptyValue: false,
					minimum: 0.0,
					maximum: 9.223372036854776e18,
					exclusiveMinimum: false,
					exclusiveMaximum: false
				},
				userId: { type: 'integer', format: 'int64', description: '用户Id', allowEmptyValue: false },
				userName: { type: 'string', description: '用户名', allowEmptyValue: false }
			},
			title: 'EsportGameRecordReq'
		},
		EsportGameRecordResp: {
			type: 'object',
			properties: {
				agentAccount: { type: 'string', description: '上级代理', allowEmptyValue: false },
				channelId: { type: 'string', description: '渠道Id', allowEmptyValue: false },
				channelName: { type: 'string', description: '渠道名称', allowEmptyValue: false },
				competitionTime: { type: 'string', format: 'date-time', description: '比赛时间', allowEmptyValue: false },
				gameAccount: { type: 'string', description: '游戏账户', allowEmptyValue: false },
				gameName: { type: 'string', description: '游戏名称', allowEmptyValue: false },
				gameType: { type: 'integer', format: 'int64', description: '游戏类型id', allowEmptyValue: false },
				gameTypeName: { type: 'string', description: '游戏类型名称', allowEmptyValue: false },
				result: { type: 'number', description: '输赢金额', allowEmptyValue: false },
				resultFlagName: { type: 'string', description: '游戏结果', allowEmptyValue: false },
				startTime: { type: 'integer', format: 'int64', description: '开始时间', allowEmptyValue: false },
				statusName: { type: 'string', description: '结算状态', allowEmptyValue: false },
				totalBet: { type: 'number', description: '单局总投注', allowEmptyValue: false },
				transactionId: { type: 'string', description: '注单流水号', allowEmptyValue: false },
				userId: { type: 'integer', format: 'int64', description: '用户Id', allowEmptyValue: false },
				userName: { type: 'string', description: '用户名', allowEmptyValue: false },
				validBet: { type: 'number', description: '有效投注', allowEmptyValue: false }
			},
			title: 'EsportGameRecordResp'
		},
		FactoryCodeReq: {
			type: 'object',
			required: ['factoryCode'],
			properties: { factoryCode: { type: 'string', description: '厂商编号', allowEmptyValue: false } },
			title: 'FactoryCodeReq'
		},
		FeeStatisticsReq: {
			type: 'object',
			required: ['proxyUserId'],
			properties: {
				end: { type: 'string', format: 'date', description: '结束日期', allowEmptyValue: false },
				proxyUserId: {
					type: 'integer',
					format: 'int64',
					description: '代理商包网商编号,全部传null',
					allowEmptyValue: false
				},
				start: { type: 'string', format: 'date', description: '起始日期', allowEmptyValue: false }
			},
			title: 'FeeStatisticsReq'
		},
		FeeStatisticsResp: {
			type: 'object',
			required: ['fee'],
			properties: {
				digitalFee: { type: 'number', description: 'USDT手续费', allowEmptyValue: false },
				fee: { type: 'number', description: '手续费', allowEmptyValue: false },
				legalFee: { type: 'number', description: '法币手续费', allowEmptyValue: false }
			},
			title: 'FeeStatisticsResp'
		},
		FetchGameRecordReq: {
			type: 'object',
			required: ['channelId'],
			properties: {
				channelId: { type: 'string', description: '渠道编号', allowEmptyValue: false },
				end: { type: 'integer', format: 'int64', description: '结束时间', allowEmptyValue: false },
				start: { type: 'integer', format: 'int64', description: '起始时间', allowEmptyValue: false }
			},
			title: 'FetchGameRecordReq'
		},
		FishGameRecordReq: {
			type: 'object',
			properties: {
				betEndTime: { type: 'string', format: 'date-time', description: '注单时间-结束', allowEmptyValue: false },
				betStartTime: { type: 'string', format: 'date-time', description: '注单时间-开始', allowEmptyValue: false },
				channelId: { type: 'string', description: '用户Id', allowEmptyValue: false },
				factoryCode: { type: 'string', description: '厂商', allowEmptyValue: false },
				pageIndex: {
					type: 'integer',
					format: 'int32',
					description: '页码 从1开始计数',
					allowEmptyValue: false,
					minimum: 1.0,
					exclusiveMinimum: false
				},
				pageSize: {
					type: 'integer',
					format: 'int32',
					description: '页容 区间[1, 1000]',
					allowEmptyValue: false,
					minimum: 0.0,
					maximum: 9.223372036854776e18,
					exclusiveMinimum: false,
					exclusiveMaximum: false
				},
				userId: { type: 'integer', format: 'int64', description: '用户Id', allowEmptyValue: false },
				userName: { type: 'string', description: '用户名', allowEmptyValue: false }
			},
			title: 'FishGameRecordReq'
		},
		FishGameRecordResp: {
			type: 'object',
			properties: {
				agentAccount: { type: 'string', description: '上级代理', allowEmptyValue: false },
				bureauId: { type: 'string', description: '局号', allowEmptyValue: false },
				channelId: { type: 'string', description: '渠道Id', allowEmptyValue: false },
				channelName: { type: 'string', description: '渠道名称', allowEmptyValue: false },
				gameAccount: { type: 'string', description: '游戏账户', allowEmptyValue: false },
				gameName: { type: 'string', description: '游戏名称', allowEmptyValue: false },
				gameType: { type: 'integer', format: 'int64', description: '游戏类型id', allowEmptyValue: false },
				gameTypeName: { type: 'string', description: '游戏类型名称', allowEmptyValue: false },
				result: { type: 'number', description: '输赢金额', allowEmptyValue: false },
				resultFlagName: { type: 'string', description: '游戏结果', allowEmptyValue: false },
				startTime: { type: 'integer', format: 'int64', description: '开始时间', allowEmptyValue: false },
				statusName: { type: 'string', description: '结算状态', allowEmptyValue: false },
				totalBet: { type: 'number', description: '单局总投注', allowEmptyValue: false },
				transactionId: { type: 'string', description: '注单流水号', allowEmptyValue: false },
				userId: { type: 'integer', format: 'int64', description: '用户Id', allowEmptyValue: false },
				userName: { type: 'string', description: '用户名', allowEmptyValue: false },
				validBet: { type: 'number', description: '有效投注', allowEmptyValue: false },
				winningsAmount: { type: 'number', description: '彩金', allowEmptyValue: false }
			},
			title: 'FishGameRecordResp'
		},
		GameAreaResp: {
			type: 'object',
			properties: {
				areaId: { type: 'integer', format: 'int64', description: '区域编号', allowEmptyValue: false },
				areaName: { type: 'string', description: '区域名称', allowEmptyValue: false },
				areaNameEn: { type: 'string', description: '区域英文名称', allowEmptyValue: false },
				areaNamePh: { type: 'string', description: '区域菲律宾名称', allowEmptyValue: false },
				areaNameTh: { type: 'string', description: '区域泰语名称', allowEmptyValue: false },
				areaNameVn: { type: 'string', description: '区域越南名称', allowEmptyValue: false },
				banner: { type: 'string', description: '区域banner', allowEmptyValue: false },
				bannerUrl: { type: 'string', description: 'banner链接', allowEmptyValue: false },
				channelCount: { type: 'integer', format: 'int32', description: '渠道数量', allowEmptyValue: false },
				createTime: { type: 'string', format: 'date-time', description: '创建时间', allowEmptyValue: false },
				gameCount: { type: 'integer', format: 'int32', description: '游戏数量', allowEmptyValue: false },
				icon: { type: 'string', description: '区域icon', allowEmptyValue: false },
				iconUrl: { type: 'string', description: 'icon链接', allowEmptyValue: false },
				sortNo: { type: 'integer', format: 'int32', description: '区域权重', allowEmptyValue: false },
				status: { type: 'integer', format: 'int32', description: '状态 1:启用 0:禁用', allowEmptyValue: false },
				style: { type: 'string', description: '风格', allowEmptyValue: false },
				updateTime: { type: 'string', format: 'date-time', description: '更新时间', allowEmptyValue: false }
			},
			title: 'GameAreaResp'
		},
		GameChannelResp: {
			type: 'object',
			properties: {
				channelId: { type: 'string', description: '渠道编号', allowEmptyValue: false },
				channelName: { type: 'string', description: '渠道名称', allowEmptyValue: false },
				createTime: { type: 'string', format: 'date-time', description: '创建时间', allowEmptyValue: false },
				gameCount: { type: 'integer', format: 'int32', description: '游戏个数', allowEmptyValue: false },
				icon: { type: 'string', description: '渠道logo', allowEmptyValue: false },
				iconUrl: { type: 'string', description: 'icon链接', allowEmptyValue: false },
				scoreRate: { type: 'number', description: '游戏积分比', allowEmptyValue: false },
				typeCount: { type: 'integer', format: 'int32', description: '类型个数', allowEmptyValue: false },
				updateTime: { type: 'string', format: 'date-time', description: '更新时间', allowEmptyValue: false }
			},
			title: 'GameChannelResp'
		},
		GameChannelStatisticsReq: {
			type: 'object',
			properties: {
				channelId: { type: 'string', description: '游戏渠道编号', allowEmptyValue: false },
				end: { type: 'integer', format: 'int64', description: '结束时间', allowEmptyValue: false },
				factoryCode: { type: 'string', description: '游戏渠道编号', allowEmptyValue: false },
				pageIndex: {
					type: 'integer',
					format: 'int32',
					description: '页码 从1开始计数',
					allowEmptyValue: false,
					minimum: 1.0,
					exclusiveMinimum: false
				},
				pageSize: {
					type: 'integer',
					format: 'int32',
					description: '页容 区间[1, 1000]',
					allowEmptyValue: false,
					minimum: 0.0,
					maximum: 9.223372036854776e18,
					exclusiveMinimum: false,
					exclusiveMaximum: false
				},
				proxyUid: { type: 'integer', format: 'int64', description: '包网商编号', allowEmptyValue: false },
				start: { type: 'integer', format: 'int64', description: '开始时间', allowEmptyValue: false }
			},
			title: 'GameChannelStatisticsReq'
		},
		GameChannelStatisticsResp: {
			type: 'object',
			properties: {
				betAmount: { type: 'number', description: '总投注', allowEmptyValue: false },
				channelId: { type: 'string', description: '渠道编号', allowEmptyValue: false },
				channelName: { type: 'string', description: '渠道名称', allowEmptyValue: false },
				count: { type: 'integer', format: 'int32', description: '游戏次数', allowEmptyValue: false },
				factoryCode: { type: 'string', description: '厂商类型', allowEmptyValue: false },
				gameType: { type: 'integer', format: 'int64', description: '游戏类型ID', allowEmptyValue: false },
				gameTypeName: { type: 'string', description: '游戏类型', allowEmptyValue: false },
				lose: { type: 'number', description: '总输', allowEmptyValue: false },
				period: { type: 'string', format: 'date', description: '统计日期', allowEmptyValue: false },
				proxyName: { type: 'string', description: '包网商名称', allowEmptyValue: false },
				proxyUid: { type: 'integer', format: 'int64', description: '包网商id', allowEmptyValue: false },
				result: { type: 'number', description: '总结果', allowEmptyValue: false },
				revenue: { type: 'number', description: '总抽水', allowEmptyValue: false },
				validAmount: { type: 'number', description: '有效投注', allowEmptyValue: false },
				win: { type: 'number', description: '总赢', allowEmptyValue: false }
			},
			title: 'GameChannelStatisticsResp'
		},
		GameChannelSummary: {
			type: 'object',
			properties: {
				channelId: { type: 'string', description: '渠道编号', allowEmptyValue: false },
				channelName: { type: 'string', description: '渠道名称', allowEmptyValue: false }
			},
			title: 'GameChannelSummary'
		},
		GameFactoryResp: {
			type: 'object',
			properties: {
				createTime: { type: 'string', format: 'date-time', description: '创建时间', allowEmptyValue: false },
				factoryCode: { type: 'string', description: '厂商编码', allowEmptyValue: false },
				factoryName: { type: 'string', description: '厂商名称', allowEmptyValue: false },
				icon: { type: 'string', description: '厂商icon', allowEmptyValue: false },
				iconUrl: { type: 'string', description: '厂商icon链接', allowEmptyValue: false },
				typeCount: { type: 'integer', format: 'int32', description: '类型个数', allowEmptyValue: false }
			},
			title: 'GameFactoryResp'
		},
		GameFactorySimpleResp: {
			type: 'object',
			properties: {
				factoryCode: { type: 'string', description: '厂商编码', allowEmptyValue: false },
				factoryName: { type: 'string', description: '厂商名称', allowEmptyValue: false }
			},
			title: 'GameFactorySimpleResp'
		},
		GameFactorySummary: {
			type: 'object',
			properties: {
				factoryCode: { type: 'string', description: '厂商编号', allowEmptyValue: false },
				factoryName: { type: 'string', description: '厂商名称', allowEmptyValue: false }
			},
			title: 'GameFactorySummary'
		},
		GameMainTypeResp: {
			type: 'object',
			properties: {
				gameMainTypeCode: { type: 'string', description: '主类型编号', allowEmptyValue: false },
				gameMainTypeName: { type: 'string', description: '主类型名称', allowEmptyValue: false }
			},
			title: 'GameMainTypeResp'
		},
		GameProxyStatisticsResp: {
			type: 'object',
			properties: {
				betAmount: { type: 'number', description: '总投注', allowEmptyValue: false },
				count: { type: 'integer', format: 'int32', description: '总局数', allowEmptyValue: false },
				lose: { type: 'number', description: '总输', allowEmptyValue: false },
				proxyAccount: { type: 'string', description: '代理用户账号', allowEmptyValue: false },
				proxyUid: { type: 'integer', format: 'int64', description: '代理用户编号', allowEmptyValue: false },
				result: { type: 'number', description: '总结果', allowEmptyValue: false },
				time: { type: 'string', format: 'date', description: '统计时间', allowEmptyValue: false },
				validAmount: { type: 'number', description: '有效投注', allowEmptyValue: false },
				win: { type: 'number', description: '总赢', allowEmptyValue: false }
			},
			title: 'GameProxyStatisticsResp'
		},
		GameSummaryReq: {
			type: 'object',
			properties: {
				end: { type: 'integer', format: 'int64', description: '结束时间', allowEmptyValue: false },
				start: { type: 'integer', format: 'int64', description: '开始时间', allowEmptyValue: false },
				userId: { type: 'integer', format: 'int64', description: '用户编号', allowEmptyValue: false },
				userName: { type: 'string', description: '用户编号', allowEmptyValue: false }
			},
			title: 'GameSummaryReq'
		},
		GameSummaryResp: {
			type: 'object',
			properties: {
				gameValidAmount: { type: 'number', description: '总有效流水', allowEmptyValue: false },
				negativeProfitAmount: { type: 'number', description: '总盘负盈利', allowEmptyValue: false }
			},
			title: 'GameSummaryResp'
		},
		GameTypeQueryReq: {
			type: 'object',
			required: ['factoryCode'],
			properties: { factoryCode: { type: 'string', description: '厂商编码', allowEmptyValue: false } },
			title: 'GameTypeQueryReq'
		},
		GameTypeResp: {
			type: 'object',
			properties: {
				createTime: { type: 'string', format: 'date-time', description: '创建时间', allowEmptyValue: false },
				factoryCode: { type: 'string', description: '厂商编码', allowEmptyValue: false },
				gameCount: { type: 'integer', format: 'int32', description: '游戏数量', allowEmptyValue: false },
				gameMainTypeCode: { type: 'string', description: '主类型编号', allowEmptyValue: false },
				typeId: { type: 'integer', format: 'int64', description: '类型编号', allowEmptyValue: false },
				typeName: { type: 'string', description: '类型名称', allowEmptyValue: false },
				updateTime: { type: 'string', format: 'date-time', description: '更新时间', allowEmptyValue: false }
			},
			title: 'GameTypeResp'
		},
		GoogleCodeReq: {
			type: 'object',
			properties: { code: { type: 'string', description: '谷歌验证码', allowEmptyValue: false } },
			title: 'GoogleCodeReq'
		},
		GoogleSecretResp: {
			type: 'object',
			properties: {
				googleSecret: { type: 'string', description: '密钥', allowEmptyValue: false },
				otpURL: {
					type: 'string',
					description: 'google验证二维码字符串,根据这个数据生成需要的被google验证扫描的二维码',
					allowEmptyValue: false
				}
			},
			title: 'GoogleSecretResp'
		},
		HotAccountResp: {
			type: 'object',
			properties: {
				bscAmount: { type: 'number', description: '头寸币安币余额', allowEmptyValue: false },
				tronAmount: { type: 'number', description: '头寸波场币余额', allowEmptyValue: false },
				usdtAmount: { type: 'number', description: '头寸USDT余额', allowEmptyValue: false },
				usdtAmountBsc: { type: 'number', description: '币安USDT余额', allowEmptyValue: false }
			},
			title: 'HotAccountResp'
		},
		LiveVideoGameRecordReq: {
			type: 'object',
			properties: {
				betEndTime: { type: 'string', format: 'date-time', description: '注单时间-结束', allowEmptyValue: false },
				betStartTime: { type: 'string', format: 'date-time', description: '注单时间-开始', allowEmptyValue: false },
				channelId: { type: 'string', description: '用户Id', allowEmptyValue: false },
				factoryCode: { type: 'string', description: '厂商', allowEmptyValue: false },
				pageIndex: {
					type: 'integer',
					format: 'int32',
					description: '页码 从1开始计数',
					allowEmptyValue: false,
					minimum: 1.0,
					exclusiveMinimum: false
				},
				pageSize: {
					type: 'integer',
					format: 'int32',
					description: '页容 区间[1, 1000]',
					allowEmptyValue: false,
					minimum: 0.0,
					maximum: 9.223372036854776e18,
					exclusiveMinimum: false,
					exclusiveMaximum: false
				},
				userId: { type: 'integer', format: 'int64', description: '用户Id', allowEmptyValue: false },
				userName: { type: 'string', description: '用户名', allowEmptyValue: false }
			},
			title: 'LiveVideoGameRecordReq'
		},
		LiveVideoGameRecordResp: {
			type: 'object',
			properties: {
				agentAccount: { type: 'string', description: '上级代理', allowEmptyValue: false },
				bureauId: { type: 'string', description: '局号', allowEmptyValue: false },
				channelId: { type: 'string', description: '渠道Id', allowEmptyValue: false },
				channelName: { type: 'string', description: '渠道名称', allowEmptyValue: false },
				factoryCode: { type: 'string', description: '厂商Code', allowEmptyValue: false },
				gameAccount: { type: 'string', description: '游戏账户', allowEmptyValue: false },
				gameName: { type: 'string', description: '游戏名称', allowEmptyValue: false },
				gameType: { type: 'integer', format: 'int64', description: '游戏类型id', allowEmptyValue: false },
				gameTypeName: { type: 'string', description: '游戏类型名称', allowEmptyValue: false },
				result: { type: 'number', description: '输赢金额', allowEmptyValue: false },
				resultFlagName: { type: 'string', description: '游戏结果', allowEmptyValue: false },
				startTime: { type: 'integer', format: 'int64', description: '投注时间', allowEmptyValue: false },
				statusName: { type: 'string', description: '结算状态', allowEmptyValue: false },
				totalBet: { type: 'number', description: '投注额', allowEmptyValue: false },
				transactionId: { type: 'string', description: '注单流水号', allowEmptyValue: false },
				userId: { type: 'integer', format: 'int64', description: '用户Id', allowEmptyValue: false },
				userName: { type: 'string', description: '用户名', allowEmptyValue: false },
				validBet: { type: 'number', description: '有效投注', allowEmptyValue: false }
			},
			title: 'LiveVideoGameRecordResp'
		},
		LoginRequestVo: {
			type: 'object',
			properties: {
				accountId: { type: 'string', description: '账户编号', allowEmptyValue: false },
				googleCode: { type: 'string', description: '谷歌验证码', allowEmptyValue: false },
				password: { type: 'string', description: '账户密码', allowEmptyValue: false }
			},
			title: 'LoginRequestVo',
			description: '登录请求信息'
		},
		LoginVo: {
			type: 'object',
			properties: {
				token: { type: 'string', description: '登录令牌', allowEmptyValue: false },
				userInfo: { description: '用户信息', allowEmptyValue: false, $ref: '#/definitions/UserInfo' }
			},
			title: 'LoginVo',
			description: '登录信息'
		},
		LotteryGameRecordReq: {
			type: 'object',
			properties: {
				betEndTime: { type: 'string', format: 'date-time', description: '注单时间-结束', allowEmptyValue: false },
				betStartTime: { type: 'string', format: 'date-time', description: '注单时间-开始', allowEmptyValue: false },
				channelId: { type: 'string', description: '渠道Id', allowEmptyValue: false },
				factoryCode: { type: 'string', description: '厂商', allowEmptyValue: false },
				pageIndex: {
					type: 'integer',
					format: 'int32',
					description: '页码 从1开始计数',
					allowEmptyValue: false,
					minimum: 1.0,
					exclusiveMinimum: false
				},
				pageSize: {
					type: 'integer',
					format: 'int32',
					description: '页容 区间[1, 1000]',
					allowEmptyValue: false,
					minimum: 0.0,
					maximum: 9.223372036854776e18,
					exclusiveMinimum: false,
					exclusiveMaximum: false
				},
				userId: { type: 'integer', format: 'int64', description: '用户Id', allowEmptyValue: false },
				userName: { type: 'string', description: '用户名', allowEmptyValue: false }
			},
			title: 'LotteryGameRecordReq'
		},
		LotteryGameRecordResp: {
			type: 'object',
			properties: {
				agentAccount: { type: 'string', description: '上级代理', allowEmptyValue: false },
				bureauId: { type: 'string', description: '副单号', allowEmptyValue: false },
				channelId: { type: 'string', description: '渠道Id', allowEmptyValue: false },
				channelName: { type: 'string', description: '渠道名称', allowEmptyValue: false },
				endTime: { type: 'integer', format: 'int64', description: '结束时间', allowEmptyValue: false },
				gameAccount: { type: 'string', description: '游戏账户', allowEmptyValue: false },
				gameName: { type: 'string', description: '游戏名称', allowEmptyValue: false },
				gameType: { type: 'integer', format: 'int64', description: '游戏类型id', allowEmptyValue: false },
				gameTypeName: { type: 'string', description: '游戏类型名称', allowEmptyValue: false },
				result: { type: 'number', description: '输赢金额', allowEmptyValue: false },
				resultFlagName: { type: 'string', description: '游戏结果', allowEmptyValue: false },
				startTime: { type: 'integer', format: 'int64', description: '开始时间', allowEmptyValue: false },
				statusName: { type: 'string', description: '结算状态', allowEmptyValue: false },
				totalBet: { type: 'number', description: '单局总投注', allowEmptyValue: false },
				transactionId: { type: 'string', description: '注单流水号', allowEmptyValue: false },
				userId: { type: 'integer', format: 'int64', description: '用户Id', allowEmptyValue: false },
				userName: { type: 'string', description: '用户名', allowEmptyValue: false },
				validBet: { type: 'number', description: '有效投注', allowEmptyValue: false },
				winningNo: { type: 'string', description: '开奖号码', allowEmptyValue: false }
			},
			title: 'LotteryGameRecordResp'
		},
		MenuBaseVo: {
			type: 'object',
			properties: {
				expanded: { type: 'string', description: '展开状态(1:展开;0:收缩) ', allowEmptyValue: false, pattern: '[01]' },
				icon: { type: 'string', description: '节点图标', allowEmptyValue: false },
				iconCls: { type: 'string', description: '节点图标CSS类名', allowEmptyValue: false },
				menuCode: { type: 'string', description: '菜单编码，可作为按钮的显隐', allowEmptyValue: false },
				menuLevel: {
					type: 'string',
					description: '菜单级别(0:树枝节点;1:叶子节点;2:按钮级别)',
					allowEmptyValue: false,
					pattern: '[012]'
				},
				menuName: { type: 'string', description: '菜单名称(最长50)', allowEmptyValue: false },
				menuType: {
					type: 'string',
					description: '菜单类型(1:系统菜单;0:业务菜单)',
					allowEmptyValue: false,
					pattern: '[01]'
				},
				parentId: { type: 'string', description: '上级菜单编号', allowEmptyValue: false },
				remark: { type: 'string', description: '备注(最长200)', allowEmptyValue: false },
				request: { type: 'string', description: '请求地址(最长200)', allowEmptyValue: false },
				sortNo: {
					type: 'integer',
					format: 'int32',
					description: '排序号',
					allowEmptyValue: false,
					minimum: 1.0,
					exclusiveMinimum: false
				}
			},
			title: 'MenuBaseVo',
			description: '菜单信息'
		},
		MenuResponseVo: {
			type: 'object',
			properties: {
				expanded: { type: 'string', description: '展开状态(1:展开;0:收缩) ', allowEmptyValue: false, pattern: '[01]' },
				icon: { type: 'string', description: '节点图标', allowEmptyValue: false },
				iconCls: { type: 'string', description: '节点图标CSS类名', allowEmptyValue: false },
				menuCode: { type: 'string', description: '菜单编码，可作为按钮的显隐', allowEmptyValue: false },
				menuId: { type: 'string', description: '菜单编号', allowEmptyValue: false },
				menuLevel: {
					type: 'string',
					description: '菜单级别(0:树枝节点;1:叶子节点;2:按钮级别)',
					allowEmptyValue: false,
					pattern: '[012]'
				},
				menuName: { type: 'string', description: '菜单名称(最长50)', allowEmptyValue: false },
				menuType: {
					type: 'string',
					description: '菜单类型(1:系统菜单;0:业务菜单)',
					allowEmptyValue: false,
					pattern: '[01]'
				},
				parentId: { type: 'string', description: '上级菜单编号', allowEmptyValue: false },
				remark: { type: 'string', description: '备注(最长200)', allowEmptyValue: false },
				request: { type: 'string', description: '请求地址(最长200)', allowEmptyValue: false },
				sortNo: {
					type: 'integer',
					format: 'int32',
					description: '排序号',
					allowEmptyValue: false,
					minimum: 1.0,
					exclusiveMinimum: false
				}
			},
			title: 'MenuResponseVo',
			description: '菜单响应信息'
		},
		MenuUpdateVo: {
			type: 'object',
			properties: {
				expanded: { type: 'string', description: '展开状态(1:展开;0:收缩) ', allowEmptyValue: false, pattern: '[01]' },
				icon: { type: 'string', description: '节点图标', allowEmptyValue: false },
				iconCls: { type: 'string', description: '节点图标CSS类名', allowEmptyValue: false },
				menuCode: { type: 'string', description: '菜单编码，可作为按钮的显隐', allowEmptyValue: false },
				menuId: { type: 'string', description: '菜单编号', allowEmptyValue: false },
				menuLevel: {
					type: 'string',
					description: '菜单级别(0:树枝节点;1:叶子节点;2:按钮级别)',
					allowEmptyValue: false,
					pattern: '[012]'
				},
				menuName: { type: 'string', description: '菜单名称(最长50)', allowEmptyValue: false },
				menuType: {
					type: 'string',
					description: '菜单类型(1:系统菜单;0:业务菜单)',
					allowEmptyValue: false,
					pattern: '[01]'
				},
				parentId: { type: 'string', description: '上级菜单编号', allowEmptyValue: false },
				remark: { type: 'string', description: '备注(最长200)', allowEmptyValue: false },
				request: { type: 'string', description: '请求地址(最长200)', allowEmptyValue: false },
				sortNo: {
					type: 'integer',
					format: 'int32',
					description: '排序号',
					allowEmptyValue: false,
					minimum: 1.0,
					exclusiveMinimum: false
				}
			},
			title: 'MenuUpdateVo',
			description: '菜单修改信息'
		},
		OperationLogReq: {
			type: 'object',
			properties: {
				end: { type: 'string', format: 'date-time', description: '结束时间', allowEmptyValue: false },
				operationBiz: { type: 'string', description: '系统模块', allowEmptyValue: false },
				operationType: { type: 'string', description: '操作类型', allowEmptyValue: false },
				pageIndex: {
					type: 'integer',
					format: 'int32',
					description: '页码 从1开始计数',
					allowEmptyValue: false,
					minimum: 1.0,
					exclusiveMinimum: false
				},
				pageSize: {
					type: 'integer',
					format: 'int32',
					description: '页容 区间[1, 1000]',
					allowEmptyValue: false,
					minimum: 0.0,
					maximum: 9.223372036854776e18,
					exclusiveMinimum: false,
					exclusiveMaximum: false
				},
				remark: { type: 'string', description: '操作内容', allowEmptyValue: false },
				start: { type: 'string', format: 'date-time', description: '开始时间', allowEmptyValue: false },
				userAccount: { type: 'string', description: '用户账号', allowEmptyValue: false },
				userId: { type: 'integer', format: 'int64', description: '用户编号', allowEmptyValue: false }
			},
			title: 'OperationLogReq'
		},
		OperationLogVo: {
			type: 'object',
			properties: {
				id: { type: 'integer', format: 'int64', description: '日志编号', allowEmptyValue: false },
				operationBiz: { type: 'string', description: '操作业务', allowEmptyValue: false },
				operationTime: { type: 'string', format: 'date-time', description: '操作时间', allowEmptyValue: false },
				operationType: { type: 'string', description: '操作类型', allowEmptyValue: false },
				remark: { type: 'string', description: '操作说明', allowEmptyValue: false },
				userId: { type: 'string', description: '操作人编号', allowEmptyValue: false },
				userName: { type: 'string', description: '操作人姓名', allowEmptyValue: false }
			},
			title: 'OperationLogVo',
			description: '操作日志信息'
		},
		OrdinaryGameRecordReq: {
			type: 'object',
			properties: {
				betEndTime: { type: 'string', format: 'date-time', description: '注单时间-结束', allowEmptyValue: false },
				betStartTime: { type: 'string', format: 'date-time', description: '注单时间-开始', allowEmptyValue: false },
				channelId: { type: 'string', description: '渠道Id', allowEmptyValue: false },
				factoryCode: { type: 'string', description: '厂商', allowEmptyValue: false },
				gameMainType: { type: 'string', description: '游戏主类型', allowEmptyValue: false },
				gameType: { type: 'integer', format: 'int32', description: '游戏类型', allowEmptyValue: false },
				pageIndex: {
					type: 'integer',
					format: 'int32',
					description: '页码 从1开始计数',
					allowEmptyValue: false,
					minimum: 1.0,
					exclusiveMinimum: false
				},
				pageSize: {
					type: 'integer',
					format: 'int32',
					description: '页容 区间[1, 1000]',
					allowEmptyValue: false,
					minimum: 0.0,
					maximum: 9.223372036854776e18,
					exclusiveMinimum: false,
					exclusiveMaximum: false
				},
				resultFlag: { type: 'integer', format: 'int32', description: '游戏结果', allowEmptyValue: false },
				status: { type: 'integer', format: 'int32', description: '状态', allowEmptyValue: false },
				userId: { type: 'integer', format: 'int64', description: '用户Id', allowEmptyValue: false },
				userName: { type: 'string', description: '用户名', allowEmptyValue: false }
			},
			title: 'OrdinaryGameRecordReq'
		},
		OrdinaryGameRecordResp: {
			type: 'object',
			properties: {
				agentAccount: { type: 'string', description: '上级代理', allowEmptyValue: false },
				bureauId: { type: 'string', description: '局号', allowEmptyValue: false },
				channelId: { type: 'string', description: '渠道Id', allowEmptyValue: false },
				channelName: { type: 'string', description: '渠道名称', allowEmptyValue: false },
				endTime: { type: 'integer', format: 'int64', description: '结束时间', allowEmptyValue: false },
				factoryCode: { type: 'string', description: '厂商Code', allowEmptyValue: false },
				gameAccount: { type: 'string', description: '游戏账户', allowEmptyValue: false },
				gameCode: { type: 'string', description: '游戏Code', allowEmptyValue: false },
				gameName: { type: 'string', description: '游戏名称', allowEmptyValue: false },
				gameType: { type: 'integer', format: 'int64', description: '游戏类型id', allowEmptyValue: false },
				gameTypeName: { type: 'string', description: '游戏类型名称', allowEmptyValue: false },
				resultFlagName: { type: 'string', description: '游戏结果', allowEmptyValue: false },
				startTime: { type: 'integer', format: 'int64', description: '开始时间', allowEmptyValue: false },
				statusName: { type: 'string', description: '结算状态', allowEmptyValue: false },
				totalBet: { type: 'number', description: '单局总投注', allowEmptyValue: false },
				userId: { type: 'integer', format: 'int64', description: '用户Id', allowEmptyValue: false },
				userName: { type: 'string', description: '用户名', allowEmptyValue: false },
				validBet: { type: 'number', description: '有效投注', allowEmptyValue: false }
			},
			title: 'OrdinaryGameRecordResp'
		},
		'PageResult«AdjustQueryResp»': {
			type: 'object',
			properties: {
				pageIndex: { type: 'integer', format: 'int32' },
				pageSize: { type: 'integer', format: 'int32' },
				rows: { type: 'array', items: { $ref: '#/definitions/AdjustQueryResp' } },
				totalNum: { type: 'integer', format: 'int64' },
				totalPages: { type: 'integer', format: 'int32' }
			},
			title: 'PageResult«AdjustQueryResp»'
		},
		'PageResult«AgentSettleResp»': {
			type: 'object',
			properties: {
				pageIndex: { type: 'integer', format: 'int32' },
				pageSize: { type: 'integer', format: 'int32' },
				rows: { type: 'array', items: { $ref: '#/definitions/AgentSettleResp' } },
				totalNum: { type: 'integer', format: 'int64' },
				totalPages: { type: 'integer', format: 'int32' }
			},
			title: 'PageResult«AgentSettleResp»'
		},
		'PageResult«ArticleResp»': {
			type: 'object',
			properties: {
				pageIndex: { type: 'integer', format: 'int32' },
				pageSize: { type: 'integer', format: 'int32' },
				rows: { type: 'array', items: { $ref: '#/definitions/ArticleResp' } },
				totalNum: { type: 'integer', format: 'int64' },
				totalPages: { type: 'integer', format: 'int32' }
			},
			title: 'PageResult«ArticleResp»'
		},
		'PageResult«AssetChangeLogResp»': {
			type: 'object',
			properties: {
				pageIndex: { type: 'integer', format: 'int32' },
				pageSize: { type: 'integer', format: 'int32' },
				rows: { type: 'array', items: { $ref: '#/definitions/AssetChangeLogResp' } },
				totalNum: { type: 'integer', format: 'int64' },
				totalPages: { type: 'integer', format: 'int32' }
			},
			title: 'PageResult«AssetChangeLogResp»'
		},
		'PageResult«BannerResp»': {
			type: 'object',
			properties: {
				pageIndex: { type: 'integer', format: 'int32' },
				pageSize: { type: 'integer', format: 'int32' },
				rows: { type: 'array', items: { $ref: '#/definitions/BannerResp' } },
				totalNum: { type: 'integer', format: 'int64' },
				totalPages: { type: 'integer', format: 'int32' }
			},
			title: 'PageResult«BannerResp»'
		},
		'PageResult«BaseGameListResp»': {
			type: 'object',
			properties: {
				pageIndex: { type: 'integer', format: 'int32' },
				pageSize: { type: 'integer', format: 'int32' },
				rows: { type: 'array', items: { $ref: '#/definitions/BaseGameListResp' } },
				totalNum: { type: 'integer', format: 'int64' },
				totalPages: { type: 'integer', format: 'int32' }
			},
			title: 'PageResult«BaseGameListResp»'
		},
		'PageResult«ChessCardGameRecordResp»': {
			type: 'object',
			properties: {
				pageIndex: { type: 'integer', format: 'int32' },
				pageSize: { type: 'integer', format: 'int32' },
				rows: { type: 'array', items: { $ref: '#/definitions/ChessCardGameRecordResp' } },
				totalNum: { type: 'integer', format: 'int64' },
				totalPages: { type: 'integer', format: 'int32' }
			},
			title: 'PageResult«ChessCardGameRecordResp»'
		},
		'PageResult«ChickenGameRecordResp»': {
			type: 'object',
			properties: {
				pageIndex: { type: 'integer', format: 'int32' },
				pageSize: { type: 'integer', format: 'int32' },
				rows: { type: 'array', items: { $ref: '#/definitions/ChickenGameRecordResp' } },
				totalNum: { type: 'integer', format: 'int64' },
				totalPages: { type: 'integer', format: 'int32' }
			},
			title: 'PageResult«ChickenGameRecordResp»'
		},
		'PageResult«DepositQueryResp»': {
			type: 'object',
			properties: {
				pageIndex: { type: 'integer', format: 'int32' },
				pageSize: { type: 'integer', format: 'int32' },
				rows: { type: 'array', items: { $ref: '#/definitions/DepositQueryResp' } },
				totalNum: { type: 'integer', format: 'int64' },
				totalPages: { type: 'integer', format: 'int32' }
			},
			title: 'PageResult«DepositQueryResp»'
		},
		'PageResult«DictionaryResponseVo»': {
			type: 'object',
			properties: {
				pageIndex: { type: 'integer', format: 'int32' },
				pageSize: { type: 'integer', format: 'int32' },
				rows: { type: 'array', items: { $ref: '#/definitions/DictionaryResponseVo' } },
				totalNum: { type: 'integer', format: 'int64' },
				totalPages: { type: 'integer', format: 'int32' }
			},
			title: 'PageResult«DictionaryResponseVo»'
		},
		'PageResult«ElectronGameRecordResp»': {
			type: 'object',
			properties: {
				pageIndex: { type: 'integer', format: 'int32' },
				pageSize: { type: 'integer', format: 'int32' },
				rows: { type: 'array', items: { $ref: '#/definitions/ElectronGameRecordResp' } },
				totalNum: { type: 'integer', format: 'int64' },
				totalPages: { type: 'integer', format: 'int32' }
			},
			title: 'PageResult«ElectronGameRecordResp»'
		},
		'PageResult«EsportGameRecordResp»': {
			type: 'object',
			properties: {
				pageIndex: { type: 'integer', format: 'int32' },
				pageSize: { type: 'integer', format: 'int32' },
				rows: { type: 'array', items: { $ref: '#/definitions/EsportGameRecordResp' } },
				totalNum: { type: 'integer', format: 'int64' },
				totalPages: { type: 'integer', format: 'int32' }
			},
			title: 'PageResult«EsportGameRecordResp»'
		},
		'PageResult«FishGameRecordResp»': {
			type: 'object',
			properties: {
				pageIndex: { type: 'integer', format: 'int32' },
				pageSize: { type: 'integer', format: 'int32' },
				rows: { type: 'array', items: { $ref: '#/definitions/FishGameRecordResp' } },
				totalNum: { type: 'integer', format: 'int64' },
				totalPages: { type: 'integer', format: 'int32' }
			},
			title: 'PageResult«FishGameRecordResp»'
		},
		'PageResult«GameAreaResp»': {
			type: 'object',
			properties: {
				pageIndex: { type: 'integer', format: 'int32' },
				pageSize: { type: 'integer', format: 'int32' },
				rows: { type: 'array', items: { $ref: '#/definitions/GameAreaResp' } },
				totalNum: { type: 'integer', format: 'int64' },
				totalPages: { type: 'integer', format: 'int32' }
			},
			title: 'PageResult«GameAreaResp»'
		},
		'PageResult«GameChannelResp»': {
			type: 'object',
			properties: {
				pageIndex: { type: 'integer', format: 'int32' },
				pageSize: { type: 'integer', format: 'int32' },
				rows: { type: 'array', items: { $ref: '#/definitions/GameChannelResp' } },
				totalNum: { type: 'integer', format: 'int64' },
				totalPages: { type: 'integer', format: 'int32' }
			},
			title: 'PageResult«GameChannelResp»'
		},
		'PageResult«GameChannelStatisticsResp»': {
			type: 'object',
			properties: {
				pageIndex: { type: 'integer', format: 'int32' },
				pageSize: { type: 'integer', format: 'int32' },
				rows: { type: 'array', items: { $ref: '#/definitions/GameChannelStatisticsResp' } },
				totalNum: { type: 'integer', format: 'int64' },
				totalPages: { type: 'integer', format: 'int32' }
			},
			title: 'PageResult«GameChannelStatisticsResp»'
		},
		'PageResult«GameFactoryResp»': {
			type: 'object',
			properties: {
				pageIndex: { type: 'integer', format: 'int32' },
				pageSize: { type: 'integer', format: 'int32' },
				rows: { type: 'array', items: { $ref: '#/definitions/GameFactoryResp' } },
				totalNum: { type: 'integer', format: 'int64' },
				totalPages: { type: 'integer', format: 'int32' }
			},
			title: 'PageResult«GameFactoryResp»'
		},
		'PageResult«GameProxyStatisticsResp»': {
			type: 'object',
			properties: {
				pageIndex: { type: 'integer', format: 'int32' },
				pageSize: { type: 'integer', format: 'int32' },
				rows: { type: 'array', items: { $ref: '#/definitions/GameProxyStatisticsResp' } },
				totalNum: { type: 'integer', format: 'int64' },
				totalPages: { type: 'integer', format: 'int32' }
			},
			title: 'PageResult«GameProxyStatisticsResp»'
		},
		'PageResult«LiveVideoGameRecordResp»': {
			type: 'object',
			properties: {
				pageIndex: { type: 'integer', format: 'int32' },
				pageSize: { type: 'integer', format: 'int32' },
				rows: { type: 'array', items: { $ref: '#/definitions/LiveVideoGameRecordResp' } },
				totalNum: { type: 'integer', format: 'int64' },
				totalPages: { type: 'integer', format: 'int32' }
			},
			title: 'PageResult«LiveVideoGameRecordResp»'
		},
		'PageResult«LotteryGameRecordResp»': {
			type: 'object',
			properties: {
				pageIndex: { type: 'integer', format: 'int32' },
				pageSize: { type: 'integer', format: 'int32' },
				rows: { type: 'array', items: { $ref: '#/definitions/LotteryGameRecordResp' } },
				totalNum: { type: 'integer', format: 'int64' },
				totalPages: { type: 'integer', format: 'int32' }
			},
			title: 'PageResult«LotteryGameRecordResp»'
		},
		'PageResult«OperationLogVo»': {
			type: 'object',
			properties: {
				pageIndex: { type: 'integer', format: 'int32' },
				pageSize: { type: 'integer', format: 'int32' },
				rows: { type: 'array', items: { $ref: '#/definitions/OperationLogVo' } },
				totalNum: { type: 'integer', format: 'int64' },
				totalPages: { type: 'integer', format: 'int32' }
			},
			title: 'PageResult«OperationLogVo»'
		},
		'PageResult«OrdinaryGameRecordResp»': {
			type: 'object',
			properties: {
				pageIndex: { type: 'integer', format: 'int32' },
				pageSize: { type: 'integer', format: 'int32' },
				rows: { type: 'array', items: { $ref: '#/definitions/OrdinaryGameRecordResp' } },
				totalNum: { type: 'integer', format: 'int64' },
				totalPages: { type: 'integer', format: 'int32' }
			},
			title: 'PageResult«OrdinaryGameRecordResp»'
		},
		'PageResult«PlatformSettleResp»': {
			type: 'object',
			properties: {
				pageIndex: { type: 'integer', format: 'int32' },
				pageSize: { type: 'integer', format: 'int32' },
				rows: { type: 'array', items: { $ref: '#/definitions/PlatformSettleResp' } },
				totalNum: { type: 'integer', format: 'int64' },
				totalPages: { type: 'integer', format: 'int32' }
			},
			title: 'PageResult«PlatformSettleResp»'
		},
		'PageResult«ProxyGameResp»': {
			type: 'object',
			properties: {
				pageIndex: { type: 'integer', format: 'int32' },
				pageSize: { type: 'integer', format: 'int32' },
				rows: { type: 'array', items: { $ref: '#/definitions/ProxyGameResp' } },
				totalNum: { type: 'integer', format: 'int64' },
				totalPages: { type: 'integer', format: 'int32' }
			},
			title: 'PageResult«ProxyGameResp»'
		},
		'PageResult«ProxyRebateRecordResp»': {
			type: 'object',
			properties: {
				pageIndex: { type: 'integer', format: 'int32' },
				pageSize: { type: 'integer', format: 'int32' },
				rows: { type: 'array', items: { $ref: '#/definitions/ProxyRebateRecordResp' } },
				totalNum: { type: 'integer', format: 'int64' },
				totalPages: { type: 'integer', format: 'int32' }
			},
			title: 'PageResult«ProxyRebateRecordResp»'
		},
		'PageResult«ProxySettleResp»': {
			type: 'object',
			properties: {
				pageIndex: { type: 'integer', format: 'int32' },
				pageSize: { type: 'integer', format: 'int32' },
				rows: { type: 'array', items: { $ref: '#/definitions/ProxySettleResp' } },
				totalNum: { type: 'integer', format: 'int64' },
				totalPages: { type: 'integer', format: 'int32' }
			},
			title: 'PageResult«ProxySettleResp»'
		},
		'PageResult«ProxyUserResp»': {
			type: 'object',
			properties: {
				pageIndex: { type: 'integer', format: 'int32' },
				pageSize: { type: 'integer', format: 'int32' },
				rows: { type: 'array', items: { $ref: '#/definitions/ProxyUserResp' } },
				totalNum: { type: 'integer', format: 'int64' },
				totalPages: { type: 'integer', format: 'int32' }
			},
			title: 'PageResult«ProxyUserResp»'
		},
		'PageResult«SportGameRecordResp»': {
			type: 'object',
			properties: {
				pageIndex: { type: 'integer', format: 'int32' },
				pageSize: { type: 'integer', format: 'int32' },
				rows: { type: 'array', items: { $ref: '#/definitions/SportGameRecordResp' } },
				totalNum: { type: 'integer', format: 'int64' },
				totalPages: { type: 'integer', format: 'int32' }
			},
			title: 'PageResult«SportGameRecordResp»'
		},
		'PageResult«UserGameRecordResp»': {
			type: 'object',
			properties: {
				pageIndex: { type: 'integer', format: 'int32' },
				pageSize: { type: 'integer', format: 'int32' },
				rows: { type: 'array', items: { $ref: '#/definitions/UserGameRecordResp' } },
				totalNum: { type: 'integer', format: 'int64' },
				totalPages: { type: 'integer', format: 'int32' }
			},
			title: 'PageResult«UserGameRecordResp»'
		},
		'PageResult«UserInfoVo»': {
			type: 'object',
			properties: {
				pageIndex: { type: 'integer', format: 'int32' },
				pageSize: { type: 'integer', format: 'int32' },
				rows: { type: 'array', items: { $ref: '#/definitions/UserInfoVo' } },
				totalNum: { type: 'integer', format: 'int64' },
				totalPages: { type: 'integer', format: 'int32' }
			},
			title: 'PageResult«UserInfoVo»'
		},
		'PageResult«UserOperationLogResp»': {
			type: 'object',
			properties: {
				pageIndex: { type: 'integer', format: 'int32' },
				pageSize: { type: 'integer', format: 'int32' },
				rows: { type: 'array', items: { $ref: '#/definitions/UserOperationLogResp' } },
				totalNum: { type: 'integer', format: 'int64' },
				totalPages: { type: 'integer', format: 'int32' }
			},
			title: 'PageResult«UserOperationLogResp»'
		},
		'PageResult«UserResp»': {
			type: 'object',
			properties: {
				pageIndex: { type: 'integer', format: 'int32' },
				pageSize: { type: 'integer', format: 'int32' },
				rows: { type: 'array', items: { $ref: '#/definitions/UserResp' } },
				totalNum: { type: 'integer', format: 'int64' },
				totalPages: { type: 'integer', format: 'int32' }
			},
			title: 'PageResult«UserResp»'
		},
		'PageResult«WithdrawResp»': {
			type: 'object',
			properties: {
				pageIndex: { type: 'integer', format: 'int32' },
				pageSize: { type: 'integer', format: 'int32' },
				rows: { type: 'array', items: { $ref: '#/definitions/WithdrawResp' } },
				totalNum: { type: 'integer', format: 'int64' },
				totalPages: { type: 'integer', format: 'int32' }
			},
			title: 'PageResult«WithdrawResp»'
		},
		'PageResult«用户彩金发放记录»': {
			type: 'object',
			properties: {
				pageIndex: { type: 'integer', format: 'int32' },
				pageSize: { type: 'integer', format: 'int32' },
				rows: { type: 'array', items: { $ref: '#/definitions/用户彩金发放记录' } },
				totalNum: { type: 'integer', format: 'int64' },
				totalPages: { type: 'integer', format: 'int32' }
			},
			title: 'PageResult«用户彩金发放记录»'
		},
		'PageResult«角色响应信息»': {
			type: 'object',
			properties: {
				pageIndex: { type: 'integer', format: 'int32' },
				pageSize: { type: 'integer', format: 'int32' },
				rows: { type: 'array', items: { $ref: '#/definitions/角色响应信息' } },
				totalNum: { type: 'integer', format: 'int64' },
				totalPages: { type: 'integer', format: 'int32' }
			},
			title: 'PageResult«角色响应信息»'
		},
		'PageResult«返水方案信息»': {
			type: 'object',
			properties: {
				pageIndex: { type: 'integer', format: 'int32' },
				pageSize: { type: 'integer', format: 'int32' },
				rows: { type: 'array', items: { $ref: '#/definitions/返水方案信息' } },
				totalNum: { type: 'integer', format: 'int64' },
				totalPages: { type: 'integer', format: 'int32' }
			},
			title: 'PageResult«返水方案信息»'
		},
		PaymentChannelReq: {
			type: 'object',
			required: ['channelType', 'status'],
			properties: {
				channelType: { type: 'string', description: '渠道类型', allowEmptyValue: false },
				docNo: { type: 'string', description: '文件编号', allowEmptyValue: false },
				status: {
					type: 'integer',
					format: 'int32',
					description: '状态 1:启用 0:禁用',
					allowEmptyValue: false,
					minimum: 0.0,
					maximum: 9.223372036854776e18,
					exclusiveMinimum: false,
					exclusiveMaximum: false
				}
			},
			title: 'PaymentChannelReq'
		},
		PaymentChannelResq: {
			type: 'object',
			properties: {
				callbackIp: { type: 'string', description: '回调ip白名单', allowEmptyValue: false },
				channelName: { type: 'string', description: '渠道名称', allowEmptyValue: false },
				channelType: { type: 'string', description: '渠道类型', allowEmptyValue: false },
				docNo: { type: 'string', description: '文档编号', allowEmptyValue: false },
				status: { type: 'integer', format: 'int32', description: '状态 1:启用 0:禁用', allowEmptyValue: false },
				updateTime: { type: 'string', format: 'date-time', description: '更新时间', allowEmptyValue: false },
				url: { type: 'string', description: 'logoUrl', allowEmptyValue: false }
			},
			title: 'PaymentChannelResq'
		},
		PlanIdReq: {
			type: 'object',
			required: ['planId'],
			properties: { planId: { type: 'integer', format: 'int64', description: '方案编号', allowEmptyValue: false } },
			title: 'PlanIdReq'
		},
		PlanQueryReq: {
			type: 'object',
			properties: {
				pageIndex: {
					type: 'integer',
					format: 'int32',
					description: '页码 从1开始计数',
					allowEmptyValue: false,
					minimum: 1.0,
					exclusiveMinimum: false
				},
				pageSize: {
					type: 'integer',
					format: 'int32',
					description: '页容 区间[1, 1000]',
					allowEmptyValue: false,
					minimum: 0.0,
					maximum: 9.223372036854776e18,
					exclusiveMinimum: false,
					exclusiveMaximum: false
				},
				planName: { type: 'string', description: '方案名称', allowEmptyValue: false },
				status: { type: 'integer', format: 'int32', description: '方案状态', allowEmptyValue: false }
			},
			title: 'PlanQueryReq'
		},
		PlatformAccountResp: {
			type: 'object',
			properties: {
				feeCNY: { type: 'number', description: '手续费账户(CNY)', allowEmptyValue: false },
				feeUSDT: { type: 'number', description: '手续费账户(USDT)，这是充U的手续费', allowEmptyValue: false }
			},
			title: 'PlatformAccountResp'
		},
		PlatformSettleReq: {
			type: 'object',
			properties: {
				pageIndex: {
					type: 'integer',
					format: 'int32',
					description: '页码 从1开始计数',
					allowEmptyValue: false,
					minimum: 1.0,
					exclusiveMinimum: false
				},
				pageSize: {
					type: 'integer',
					format: 'int32',
					description: '页容 区间[1, 1000]',
					allowEmptyValue: false,
					minimum: 0.0,
					maximum: 9.223372036854776e18,
					exclusiveMinimum: false,
					exclusiveMaximum: false
				},
				proxyId: { type: 'integer', format: 'int64', description: '包网商ID', allowEmptyValue: false },
				status: { type: 'integer', format: 'int32', description: '1 待线下结算;2 已结算', allowEmptyValue: false }
			},
			title: 'PlatformSettleReq'
		},
		PlatformSettleResp: {
			type: 'object',
			properties: {
				amount: { type: 'number', description: '结算额', allowEmptyValue: false },
				createTime: { type: 'string', format: 'date-time', description: '创建时间', allowEmptyValue: false },
				cycleNo: { type: 'string', description: '结算周期编号', allowEmptyValue: false },
				endPeriod: { type: 'string', format: 'date', description: '周期结束日期', allowEmptyValue: false },
				periodType: { type: 'string', description: '结算周期类型', allowEmptyValue: false },
				proxyUserAccount: { type: 'string', description: '包网商帐号', allowEmptyValue: false },
				proxyUserId: { type: 'integer', format: 'int64', description: '包网商编号', allowEmptyValue: false },
				ratioAmount: { type: 'number', description: '占成结算额', allowEmptyValue: false },
				rebateAmount: { type: 'number', description: '返佣结算额', allowEmptyValue: false },
				settleNo: { type: 'string', description: '结算单号', allowEmptyValue: false },
				startPeriod: { type: 'string', format: 'date', description: '周期开始日期', allowEmptyValue: false },
				status: {
					type: 'integer',
					format: 'int32',
					description: '状态 -1:进行中 0：统计完成，待线下结算 1:已结算',
					allowEmptyValue: false
				},
				statusDesc: {
					type: 'string',
					description: '状态 -1:进行中 0：统计完成，待线下结算 1:已结算',
					allowEmptyValue: false
				},
				totalResultAmount: { type: 'number', description: 'sum(输赢)', allowEmptyValue: false },
				totalValidAmount: { type: 'number', description: 'sum(有效)', allowEmptyValue: false },
				updateTime: { type: 'string', format: 'date-time', description: '更新时间', allowEmptyValue: false }
			},
			title: 'PlatformSettleResp'
		},
		PrivateKeyReq: {
			type: 'object',
			required: ['chain', 'privateKey'],
			properties: {
				chain: { type: 'string', description: '链 币安:BSC 波场:TRON', allowEmptyValue: false },
				privateKey: { type: 'string', description: '私钥', allowEmptyValue: false }
			},
			title: 'PrivateKeyReq'
		},
		ProxyAchievingConditionsResp: {
			type: 'object',
			properties: {
				calculationPeriod: {
					type: 'string',
					description: '结算周期:DAY,WEEK,HALF_MONTH,MONTH',
					allowEmptyValue: false
				},
				directlyUnderMembers: {
					type: 'integer',
					format: 'int32',
					description: '周期直属有效会员数',
					allowEmptyValue: false
				},
				negativeProfitIsAccumulated: {
					type: 'boolean',
					example: false,
					description: '负盈利是否累计',
					allowEmptyValue: false
				},
				settlementMethod: {
					type: 'boolean',
					example: false,
					description: '结算方式: false自动、true手动',
					allowEmptyValue: false
				},
				subordinateMembers: {
					type: 'integer',
					format: 'int32',
					description: '周期内下级VIP用户数',
					allowEmptyValue: false
				},
				totalMembers: { type: 'integer', format: 'int32', description: '周期总有效会员数', allowEmptyValue: false },
				validAmount: { type: 'number', description: '周期内有效流水', allowEmptyValue: false },
				validDepositAmount: { type: 'number', description: '周期内存款值', allowEmptyValue: false },
				validNegativeProfit: { type: 'number', description: '周期内负盈利值', allowEmptyValue: false },
				vipLevel: { type: 'integer', format: 'int32', description: 'vip等级', allowEmptyValue: false }
			},
			title: 'ProxyAchievingConditionsResp'
		},
		ProxyAchievingQueryReq: {
			type: 'object',
			properties: {
				proxyId: { type: 'integer', format: 'int64', description: '包网商编号', allowEmptyValue: false },
				userId: { type: 'integer', format: 'int64', description: '用户编号', allowEmptyValue: false }
			},
			title: 'ProxyAchievingQueryReq'
		},
		ProxyChoiceGameResp: {
			type: 'object',
			properties: {
				icon: { type: 'string', description: '大图', allowEmptyValue: false },
				proxyGameId: { type: 'integer', format: 'int64', description: '代理游戏编号', allowEmptyValue: false },
				proxyId: { type: 'integer', format: 'int64', description: '代理编号', allowEmptyValue: false }
			},
			title: 'ProxyChoiceGameResp'
		},
		ProxyCurrencyQueryReq: {
			type: 'object',
			properties: { proxyId: { type: 'integer', format: 'int64', description: '代理编号', allowEmptyValue: false } },
			title: 'ProxyCurrencyQueryReq'
		},
		ProxyCurrencyReq: {
			type: 'object',
			properties: {
				currencyCodes: { type: 'array', description: '币种编码', allowEmptyValue: false, items: { type: 'string' } },
				proxyId: { type: 'integer', format: 'int64', description: '代理编号', allowEmptyValue: false }
			},
			title: 'ProxyCurrencyReq'
		},
		ProxyDailyStatResp: {
			type: 'object',
			properties: {
				depositCount: { type: 'integer', format: 'int32', description: '充值笔数', allowEmptyValue: false },
				firstDeposit: { type: 'integer', format: 'int32', description: '首存人数', allowEmptyValue: false },
				secondDeposit: { type: 'integer', format: 'int32', description: '二存人数', allowEmptyValue: false },
				withdrawCount: { type: 'integer', format: 'int32', description: '提现笔数', allowEmptyValue: false },
				withdrawUserCount: { type: 'integer', format: 'int32', description: '提现人数', allowEmptyValue: false }
			},
			title: 'ProxyDailyStatResp'
		},
		ProxyDisableFactoryReq: {
			type: 'object',
			required: ['factoryCodes'],
			properties: {
				factoryCodes: { type: 'array', description: '厂商编码', allowEmptyValue: false, items: { type: 'string' } },
				proxyId: { type: 'integer', format: 'int64', description: '包网商编号', allowEmptyValue: false }
			},
			title: 'ProxyDisableFactoryReq'
		},
		ProxyDomainIdReq: {
			type: 'object',
			required: ['proxyDomainId'],
			properties: {
				proxyDomainId: { type: 'integer', format: 'int64', description: '域名编号', allowEmptyValue: false }
			},
			title: 'ProxyDomainIdReq'
		},
		ProxyDomainResp: {
			type: 'object',
			properties: {
				createTime: { type: 'string', format: 'date-time', description: '创建时间', allowEmptyValue: false },
				domain: { type: 'string', description: '域名', allowEmptyValue: false },
				proxyDomainId: { type: 'integer', format: 'int64', description: '域名编号', allowEmptyValue: false },
				proxyUid: { type: 'integer', format: 'int64', description: '代理编号', allowEmptyValue: false },
				status: { type: 'integer', format: 'int32', description: '状态 1:正常 0:下线', allowEmptyValue: false },
				updateTime: { type: 'string', format: 'date-time', description: '更新时间', allowEmptyValue: false }
			},
			title: 'ProxyDomainResp'
		},
		ProxyGameIdReq: {
			type: 'object',
			required: ['proxyGameId'],
			properties: {
				proxyGameId: { type: 'integer', format: 'int64', description: '代理游戏编号', allowEmptyValue: false }
			},
			title: 'ProxyGameIdReq'
		},
		ProxyGameReq: {
			type: 'object',
			properties: {
				channelName: { type: 'string', description: '游戏渠道名称', allowEmptyValue: false },
				factoryCode: { type: 'string', description: '厂商', allowEmptyValue: false },
				gameName: { type: 'string', description: '游戏名', allowEmptyValue: false },
				proxyUid: { type: 'integer', format: 'int64', description: '包网商id', allowEmptyValue: false }
			},
			title: 'ProxyGameReq'
		},
		ProxyGameResp: {
			type: 'object',
			properties: {
				channelId: { type: 'string', description: '渠道编号', allowEmptyValue: false },
				channelName: { type: 'string', description: '渠道名称', allowEmptyValue: false },
				createTime: { type: 'string', format: 'date-time', description: '创建时间', allowEmptyValue: false },
				factoryCode: { type: 'string', description: '游戏厂商', allowEmptyValue: false },
				gameArea: { type: 'integer', format: 'int64', description: '游戏区域编号', allowEmptyValue: false },
				gameAreaName: { type: 'string', description: '游戏区域名称', allowEmptyValue: false },
				gameId: { type: 'integer', format: 'int64', description: '基础游戏编号', allowEmptyValue: false },
				gameName: { type: 'string', description: '游戏名称', allowEmptyValue: false },
				gameNameCustomer: { type: 'string', description: '自定义游戏名称', allowEmptyValue: false },
				gameNameEn: { type: 'string', description: '游戏英文名称', allowEmptyValue: false },
				gameType: { type: 'integer', format: 'int64', description: '游戏类型', allowEmptyValue: false },
				gameTypeName: { type: 'string', description: '游戏类型名称', allowEmptyValue: false },
				icon: { type: 'string', description: '游戏icon', allowEmptyValue: false },
				icon2: { type: 'string', description: '游戏icon2', allowEmptyValue: false },
				icon2Url: { type: 'string', description: 'icon2链接', allowEmptyValue: false },
				icon3: { type: 'string', description: '游戏icon3', allowEmptyValue: false },
				icon3Url: { type: 'string', description: 'icon3链接', allowEmptyValue: false },
				iconUrl: { type: 'string', description: 'icon链接', allowEmptyValue: false },
				popular: {
					type: 'boolean',
					example: false,
					description: '是否热门游戏：true:是，false:否',
					allowEmptyValue: false
				},
				proxyGameId: { type: 'integer', format: 'int64', description: '渠道游戏编号', allowEmptyValue: false },
				proxyId: { type: 'integer', format: 'int64', description: '代理编号', allowEmptyValue: false },
				status: { type: 'integer', format: 'int32', description: '状态 1:启用 0:禁用', allowEmptyValue: false },
				updateTime: { type: 'string', format: 'date-time', description: '更新时间', allowEmptyValue: false }
			},
			title: 'ProxyGameResp'
		},
		ProxyGameUpdateAreaReq: {
			type: 'object',
			required: ['areaId', 'proxyGameIds'],
			properties: {
				areaId: { type: 'integer', format: 'int64', description: '区域编号', allowEmptyValue: false },
				proxyGameIds: {
					type: 'array',
					description: '代理游戏编号',
					allowEmptyValue: false,
					items: { type: 'integer', format: 'int64' }
				},
				proxyUid: { type: 'integer', format: 'int64', description: '代理编号', allowEmptyValue: false }
			},
			title: 'ProxyGameUpdateAreaReq'
		},
		ProxyGameUpdatePopularReq: {
			type: 'object',
			required: ['popular', 'proxyGameIds'],
			properties: {
				popular: { type: 'boolean', example: false, description: '是否热门：true是，false否', allowEmptyValue: false },
				proxyGameIds: {
					type: 'array',
					description: '代理游戏编号',
					allowEmptyValue: false,
					items: { type: 'integer', format: 'int64' }
				},
				proxyUid: { type: 'integer', format: 'int64', description: '代理编号', allowEmptyValue: false }
			},
			title: 'ProxyGameUpdatePopularReq'
		},
		ProxyIdReq: {
			type: 'object',
			properties: { proxyId: { type: 'integer', format: 'int64', description: '包网商编号', allowEmptyValue: false } },
			title: 'ProxyIdReq'
		},
		ProxyNoReq: {
			type: 'object',
			properties: { proxyId: { type: 'integer', format: 'int64', description: '包网商编号', allowEmptyValue: false } },
			title: 'ProxyNoReq'
		},
		ProxyPaymentChannelRelation: {
			type: 'object',
			properties: {
				channelName: { type: 'string' },
				channelType: { type: 'string' },
				createTime: { type: 'string', format: 'date-time' },
				id: { type: 'integer', format: 'int64' },
				pageIndex: {
					type: 'integer',
					format: 'int32',
					description: '页码 从1开始计数',
					allowEmptyValue: false,
					minimum: 1.0,
					exclusiveMinimum: false
				},
				pageSize: {
					type: 'integer',
					format: 'int32',
					description: '页容 区间[1, 1000]',
					allowEmptyValue: false,
					minimum: 0.0,
					maximum: 9.223372036854776e18,
					exclusiveMinimum: false,
					exclusiveMaximum: false
				},
				proxyUid: { type: 'integer', format: 'int64' },
				updateTime: { type: 'string', format: 'date-time' }
			},
			title: 'ProxyPaymentChannelRelation'
		},
		ProxyRebateRecordResp: {
			type: 'object',
			properties: {
				createTime: { type: 'string', format: 'date-time', description: '创建时间', allowEmptyValue: false },
				currency: { type: 'string', description: '币种', allowEmptyValue: false },
				id: { type: 'integer', format: 'int64', description: '返水编号', allowEmptyValue: false },
				period: { type: 'string', format: 'date', description: '周期', allowEmptyValue: false },
				planName: { type: 'string', description: '方案名称', allowEmptyValue: false },
				proxyId: { type: 'integer', format: 'int64', description: '包网商编号', allowEmptyValue: false },
				proxyName: { type: 'string', description: '包网商名称', allowEmptyValue: false },
				rebateAmount: { type: 'number', description: '返水金额', allowEmptyValue: false },
				rebateItemId: { type: 'integer', format: 'int64', description: '方案id', allowEmptyValue: false },
				status: {
					type: 'integer',
					format: 'int32',
					description: '状态：0待发放，1已发放，2已拒绝',
					allowEmptyValue: false
				},
				statusName: { type: 'string', description: '状态：0待发放，1已发放，2已拒绝', allowEmptyValue: false },
				updateTime: { type: 'string', format: 'date-time', description: '更新时间', allowEmptyValue: false },
				userId: { type: 'integer', format: 'int64', description: '用户id', allowEmptyValue: false },
				userName: { type: 'string', description: '用户名称', allowEmptyValue: false }
			},
			title: 'ProxyRebateRecordResp'
		},
		ProxySettleResp: {
			type: 'object',
			properties: {
				amount: { type: 'number', description: '结算额', allowEmptyValue: false },
				createTime: { type: 'string', format: 'date-time', description: '创建时间', allowEmptyValue: false },
				cycleNo: { type: 'string', description: '结算周期编号', allowEmptyValue: false },
				endPeriod: { type: 'string', format: 'date', description: '周期结束日期', allowEmptyValue: false },
				periodType: { type: 'string', description: '结算周期类型', allowEmptyValue: false },
				proxyUserAccount: { type: 'string', description: '包网商帐号', allowEmptyValue: false },
				proxyUserId: { type: 'integer', format: 'int64', description: '包网商编号', allowEmptyValue: false },
				ratioAmount: { type: 'number', description: '占成结算额', allowEmptyValue: false },
				rebateAmount: { type: 'number', description: '返佣结算额', allowEmptyValue: false },
				settleNo: { type: 'string', description: '结算单号', allowEmptyValue: false },
				startPeriod: { type: 'string', format: 'date', description: '周期开始日期', allowEmptyValue: false },
				status: {
					type: 'integer',
					format: 'int32',
					description: '状态 -1:进行中 0：统计完成，待线下结算 1:已结算',
					allowEmptyValue: false
				},
				statusDesc: {
					type: 'string',
					description: '状态 -1:进行中 0：统计完成，待线下结算 1:已结算',
					allowEmptyValue: false
				},
				totalResultAmount: { type: 'number', description: 'sum(输赢)', allowEmptyValue: false },
				totalValidAmount: { type: 'number', description: 'sum(有效)', allowEmptyValue: false },
				updateTime: { type: 'string', format: 'date-time', description: '更新时间', allowEmptyValue: false }
			},
			title: 'ProxySettleResp'
		},
		ProxySummaryResp: {
			type: 'object',
			properties: {
				account: { type: 'string', description: '代理账号', allowEmptyValue: false },
				proxyUid: { type: 'integer', format: 'int64', description: '代理编号', allowEmptyValue: false }
			},
			title: 'ProxySummaryResp'
		},
		ProxyUserResp: {
			type: 'object',
			properties: {
				account: { type: 'string', description: '账号', allowEmptyValue: false },
				createTime: { type: 'string', format: 'date-time', description: '创建时间', allowEmptyValue: false },
				currency: { type: 'string', description: '币种', allowEmptyValue: false },
				feeRate: { type: 'number', description: '手续费比例', allowEmptyValue: false },
				lastLogin: { type: 'integer', format: 'int64', description: '最后登录时间', allowEmptyValue: false },
				remark: { type: 'string', description: '用户状态变更原因', allowEmptyValue: false },
				settlementPeriod: {
					type: 'string',
					description: '结算周期 DAY:每日 WEEK:每周 HALF_MONTH:半月 MONTH:每月',
					allowEmptyValue: false
				},
				status: { type: 'integer', format: 'int32', description: '用户状态 1:正常 0:锁定', allowEmptyValue: false },
				style: { type: 'string', description: '代理页面风格', allowEmptyValue: false },
				timeZoneMe: { type: 'string', description: '时区 如 +08:00', allowEmptyValue: false },
				url: { type: 'string', description: '主http(s)地址', allowEmptyValue: false },
				userId: { type: 'integer', format: 'int64', description: '代理编号', allowEmptyValue: false }
			},
			title: 'ProxyUserResp'
		},
		QueryAccountTotalReq: {
			type: 'object',
			required: ['end', 'start', 'userId'],
			properties: {
				end: { type: 'string', format: 'date', description: '结束日期', allowEmptyValue: false },
				start: { type: 'string', format: 'date', description: '起始日期', allowEmptyValue: false },
				userId: { type: 'integer', format: 'int64', description: '代理商包网商编号,全部传0', allowEmptyValue: false }
			},
			title: 'QueryAccountTotalReq'
		},
		QueryArticleReq: {
			type: 'object',
			properties: {
				lang: {
					type: 'string',
					description: '语言 中文:zh-CN 英文:en-US 菲律宾:en-PH 越南:vi-VN 泰语:th-TH',
					allowEmptyValue: false
				},
				pageIndex: {
					type: 'integer',
					format: 'int32',
					description: '页码 从1开始计数',
					allowEmptyValue: false,
					minimum: 1.0,
					exclusiveMinimum: false
				},
				pageSize: {
					type: 'integer',
					format: 'int32',
					description: '页容 区间[1, 1000]',
					allowEmptyValue: false,
					minimum: 0.0,
					maximum: 9.223372036854776e18,
					exclusiveMinimum: false,
					exclusiveMaximum: false
				},
				status: { type: 'integer', format: 'int32', description: '状态 1:启用 0:禁用', allowEmptyValue: false },
				title: { type: 'string', description: '标题', allowEmptyValue: false }
			},
			title: 'QueryArticleReq'
		},
		QueryBannerReq: {
			type: 'object',
			properties: {
				lang: {
					type: 'string',
					description: '语言 中文:zh-CN 英文:en-US 菲律宾:en-PH 越南:vi-VN 泰语:th-TH',
					allowEmptyValue: false
				},
				pageIndex: {
					type: 'integer',
					format: 'int32',
					description: '页码 从1开始计数',
					allowEmptyValue: false,
					minimum: 1.0,
					exclusiveMinimum: false
				},
				pageSize: {
					type: 'integer',
					format: 'int32',
					description: '页容 区间[1, 1000]',
					allowEmptyValue: false,
					minimum: 0.0,
					maximum: 9.223372036854776e18,
					exclusiveMinimum: false,
					exclusiveMaximum: false
				},
				status: { type: 'integer', format: 'int32', description: '状态 1:启用 0:禁用', allowEmptyValue: false }
			},
			title: 'QueryBannerReq'
		},
		QueryCurrentAccountTotalReq: {
			type: 'object',
			required: ['userId'],
			properties: {
				userId: { type: 'integer', format: 'int64', description: '代理商/包网商编号，全部传0', allowEmptyValue: false }
			},
			title: 'QueryCurrentAccountTotalReq'
		},
		QueryGameAreaReq: {
			type: 'object',
			properties: {
				areaName: { type: 'string', description: '区域名称', allowEmptyValue: false },
				pageIndex: {
					type: 'integer',
					format: 'int32',
					description: '页码 从1开始计数',
					allowEmptyValue: false,
					minimum: 1.0,
					exclusiveMinimum: false
				},
				pageSize: {
					type: 'integer',
					format: 'int32',
					description: '页容 区间[1, 1000]',
					allowEmptyValue: false,
					minimum: 0.0,
					maximum: 9.223372036854776e18,
					exclusiveMinimum: false,
					exclusiveMaximum: false
				},
				proxyUid: { type: 'integer', format: 'int64', description: '包网商id', allowEmptyValue: false }
			},
			title: 'QueryGameAreaReq'
		},
		QueryGameChannelReq: {
			type: 'object',
			properties: {
				channelName: { type: 'string', description: '渠道名称', allowEmptyValue: false },
				pageIndex: {
					type: 'integer',
					format: 'int32',
					description: '页码 从1开始计数',
					allowEmptyValue: false,
					minimum: 1.0,
					exclusiveMinimum: false
				},
				pageSize: {
					type: 'integer',
					format: 'int32',
					description: '页容 区间[1, 1000]',
					allowEmptyValue: false,
					minimum: 0.0,
					maximum: 9.223372036854776e18,
					exclusiveMinimum: false,
					exclusiveMaximum: false
				}
			},
			title: 'QueryGameChannelReq'
		},
		QueryGameFactoryReq: {
			type: 'object',
			properties: {
				factoryCode: { type: 'string', description: '厂商编码', allowEmptyValue: false },
				pageIndex: {
					type: 'integer',
					format: 'int32',
					description: '页码 从1开始计数',
					allowEmptyValue: false,
					minimum: 1.0,
					exclusiveMinimum: false
				},
				pageSize: {
					type: 'integer',
					format: 'int32',
					description: '页容 区间[1, 1000]',
					allowEmptyValue: false,
					minimum: 0.0,
					maximum: 9.223372036854776e18,
					exclusiveMinimum: false,
					exclusiveMaximum: false
				}
			},
			title: 'QueryGameFactoryReq'
		},
		QueryOrderBizResp: {
			type: 'object',
			properties: {
				bizOrderNo: { type: 'string' },
				merchantId: { type: 'string' },
				msg: { type: 'string' },
				paymentAmount: { type: 'number' },
				paymentOrderNo: { type: 'string' },
				status: { type: 'string', enum: ['SUCCESS', 'FAIL', 'TRADING'] }
			},
			title: 'QueryOrderBizResp'
		},
		QueryPaymentChannelReq: {
			type: 'object',
			properties: {
				proxyUid: { type: 'integer', format: 'int64', description: '包网商id', allowEmptyValue: false },
				status: { type: 'integer', format: 'int32', description: '状态 1:启用 0:禁用', allowEmptyValue: false }
			},
			title: 'QueryPaymentChannelReq'
		},
		QueryProxyGameReq: {
			type: 'object',
			properties: {
				channelId: { type: 'string', description: '渠道编号', allowEmptyValue: false },
				factoryCode: { type: 'string', description: '游戏厂商', allowEmptyValue: false },
				gameName: { type: 'string', description: '游戏名称', allowEmptyValue: false },
				pageIndex: {
					type: 'integer',
					format: 'int32',
					description: '页码 从1开始计数',
					allowEmptyValue: false,
					minimum: 1.0,
					exclusiveMinimum: false
				},
				pageSize: {
					type: 'integer',
					format: 'int32',
					description: '页容 区间[1, 1000]',
					allowEmptyValue: false,
					minimum: 0.0,
					maximum: 9.223372036854776e18,
					exclusiveMinimum: false,
					exclusiveMaximum: false
				},
				proxyId: { type: 'integer', format: 'int64', description: '代理编号', allowEmptyValue: false }
			},
			title: 'QueryProxyGameReq'
		},
		QueryProxyListReq: {
			type: 'object',
			properties: {
				account: { type: 'string', description: '代理账号', allowEmptyValue: false },
				end: { type: 'string', format: 'date-time', description: '注册时间结束', allowEmptyValue: false },
				pageIndex: {
					type: 'integer',
					format: 'int32',
					description: '页码 从1开始计数',
					allowEmptyValue: false,
					minimum: 1.0,
					exclusiveMinimum: false
				},
				pageSize: {
					type: 'integer',
					format: 'int32',
					description: '页容 区间[1, 1000]',
					allowEmptyValue: false,
					minimum: 0.0,
					maximum: 9.223372036854776e18,
					exclusiveMinimum: false,
					exclusiveMaximum: false
				},
				start: { type: 'string', format: 'date-time', description: '注册时间开始', allowEmptyValue: false },
				userId: { type: 'integer', format: 'int64', description: '用户编号', allowEmptyValue: false }
			},
			title: 'QueryProxyListReq'
		},
		QueryUserListReq: {
			type: 'object',
			properties: {
				account: { type: 'string', description: '账号', allowEmptyValue: false },
				end: { type: 'string', format: 'date-time', description: '注册时间结束', allowEmptyValue: false },
				lastLoginIp: { type: 'string', description: '最后一次登陆ip', allowEmptyValue: false },
				mobileNo: { type: 'string', description: '手机号', allowEmptyValue: false },
				pageIndex: {
					type: 'integer',
					format: 'int32',
					description: '页码 从1开始计数',
					allowEmptyValue: false,
					minimum: 1.0,
					exclusiveMinimum: false
				},
				pageSize: {
					type: 'integer',
					format: 'int32',
					description: '页容 区间[1, 1000]',
					allowEmptyValue: false,
					minimum: 0.0,
					maximum: 9.223372036854776e18,
					exclusiveMinimum: false,
					exclusiveMaximum: false
				},
				proxyUid: { type: 'integer', format: 'int64', description: '代理编号', allowEmptyValue: false },
				registerIp: { type: 'string', description: '最后一次登陆ip', allowEmptyValue: false },
				start: { type: 'string', format: 'date-time', description: '注册时间开始', allowEmptyValue: false },
				userId: { type: 'integer', format: 'int64', description: '用户编号', allowEmptyValue: false },
				userLabel: { type: 'string', description: '用户标签，多个逗号隔开', allowEmptyValue: false },
				userName: { type: 'string', description: '用户名', allowEmptyValue: false },
				userType: { type: 'integer', format: 'int32', description: '用户类型 1:普通 4:代理', allowEmptyValue: false }
			},
			title: 'QueryUserListReq'
		},
		RecordQueryReq: {
			type: 'object',
			properties: {
				id: { type: 'integer', format: 'int64', description: '记录id', allowEmptyValue: false },
				pageIndex: {
					type: 'integer',
					format: 'int32',
					description: '页码 从1开始计数',
					allowEmptyValue: false,
					minimum: 1.0,
					exclusiveMinimum: false
				},
				pageSize: {
					type: 'integer',
					format: 'int32',
					description: '页容 区间[1, 1000]',
					allowEmptyValue: false,
					minimum: 0.0,
					maximum: 9.223372036854776e18,
					exclusiveMinimum: false,
					exclusiveMaximum: false
				},
				period: { type: 'string', format: 'date', description: '周期s', allowEmptyValue: false },
				proxyId: { type: 'integer', format: 'int64', description: '包网商id', allowEmptyValue: false },
				proxyName: { type: 'string', description: '包网商名称', allowEmptyValue: false },
				status: { type: 'integer', format: 'int32', description: '状态', allowEmptyValue: false },
				userId: { type: 'integer', format: 'int64', description: '用户id', allowEmptyValue: false },
				userName: { type: 'string', description: '用户名称', allowEmptyValue: false }
			},
			title: 'RecordQueryReq'
		},
		ResetPasswordReq: {
			type: 'object',
			required: ['password', 'userId'],
			properties: {
				password: { type: 'string', description: '密码', allowEmptyValue: false },
				proxyUserId: { type: 'integer', format: 'int64', description: '包网商编号', allowEmptyValue: false },
				userId: { type: 'integer', format: 'int64', description: '用户编号', allowEmptyValue: false }
			},
			title: 'ResetPasswordReq'
		},
		RoleBaseVo: {
			type: 'object',
			properties: {
				remark: { type: 'string', description: '备注(最长50)', allowEmptyValue: false },
				roleName: { type: 'string', description: '角色名称(最长50)', allowEmptyValue: false },
				roleType: {
					type: 'string',
					description: '角色类型(1:业务角色;2:管理角色)',
					allowEmptyValue: false,
					pattern: '[12]'
				}
			},
			title: 'RoleBaseVo',
			description: '角色信息'
		},
		RoleLockRequestVo: {
			type: 'object',
			properties: {
				lockFlag: { type: 'string', description: '锁定标志 1:锁定;0:激活', allowEmptyValue: false, pattern: '[01]' },
				roleId: { type: 'string', description: '角色编号', allowEmptyValue: false }
			},
			title: 'RoleLockRequestVo',
			description: '锁定或解锁角色'
		},
		RoleMenuRequestVo: {
			type: 'object',
			properties: {
				menuIds: { type: 'array', description: '菜单编号集合', allowEmptyValue: false, items: { type: 'string' } },
				roleId: { type: 'string', description: '角色编号', allowEmptyValue: false }
			},
			title: 'RoleMenuRequestVo',
			description: '角色菜单请求信息'
		},
		RoleMenuResponseVo: {
			type: 'object',
			properties: {
				createTime: { type: 'string', format: 'date-time', description: '创建时间', allowEmptyValue: false },
				locked: { type: 'string', description: '锁定标志 1锁定 0激活', allowEmptyValue: false },
				menus: {
					type: 'array',
					description: '权限信息',
					allowEmptyValue: false,
					items: { $ref: '#/definitions/MenuResponseVo' }
				},
				remark: { type: 'string', description: '备注(最长50)', allowEmptyValue: false },
				roleId: { type: 'string', description: '角色编号', allowEmptyValue: false },
				roleName: { type: 'string', description: '角色名称(最长50)', allowEmptyValue: false },
				roleType: {
					type: 'string',
					description: '角色类型(1:业务角色;2:管理角色)',
					allowEmptyValue: false,
					pattern: '[12]'
				},
				updateTime: { type: 'string', format: 'date-time', description: '修改时间', allowEmptyValue: false }
			},
			title: 'RoleMenuResponseVo',
			description: '角色响应信息'
		},
		RoleQueryRequestVo: {
			type: 'object',
			properties: {
				pageIndex: {
					type: 'integer',
					format: 'int32',
					description: '页码 从1开始计数',
					allowEmptyValue: false,
					minimum: 1.0,
					exclusiveMinimum: false
				},
				pageSize: {
					type: 'integer',
					format: 'int32',
					description: '页容 区间[1, 1000]',
					allowEmptyValue: false,
					minimum: 0.0,
					maximum: 9.223372036854776e18,
					exclusiveMinimum: false,
					exclusiveMaximum: false
				},
				remark: { type: 'string', description: '角色描述', allowEmptyValue: false },
				roleName: { type: 'string', description: '角色名称', allowEmptyValue: false }
			},
			title: 'RoleQueryRequestVo',
			description: '角色分页查询请求'
		},
		RoleUpdateVo: {
			type: 'object',
			properties: {
				remark: { type: 'string', description: '备注(最长50)', allowEmptyValue: false },
				roleId: { type: 'string', description: '角色编号', allowEmptyValue: false },
				roleName: { type: 'string', description: '角色名称(最长50)', allowEmptyValue: false },
				roleType: {
					type: 'string',
					description: '角色类型(1:业务角色;2:管理角色)',
					allowEmptyValue: false,
					pattern: '[12]'
				}
			},
			title: 'RoleUpdateVo',
			description: '角色修改信息'
		},
		SettleNoReq: {
			type: 'object',
			properties: { settleNo: { type: 'integer', format: 'int64', description: '结算单号', allowEmptyValue: false } },
			title: 'SettleNoReq'
		},
		'SingleParamVo«string»': {
			type: 'object',
			required: ['data'],
			properties: { data: { type: 'string', description: '请求参数', allowEmptyValue: false } },
			title: 'SingleParamVo«string»',
			description: '单参数请求vo'
		},
		SportGameRecordReq: {
			type: 'object',
			properties: {
				betEndTime: { type: 'string', format: 'date-time', description: '注单时间-结束', allowEmptyValue: false },
				betStartTime: { type: 'string', format: 'date-time', description: '注单时间-开始', allowEmptyValue: false },
				channelId: { type: 'string', description: '用户Id', allowEmptyValue: false },
				factoryCode: { type: 'string', description: '厂商', allowEmptyValue: false },
				pageIndex: {
					type: 'integer',
					format: 'int32',
					description: '页码 从1开始计数',
					allowEmptyValue: false,
					minimum: 1.0,
					exclusiveMinimum: false
				},
				pageSize: {
					type: 'integer',
					format: 'int32',
					description: '页容 区间[1, 1000]',
					allowEmptyValue: false,
					minimum: 0.0,
					maximum: 9.223372036854776e18,
					exclusiveMinimum: false,
					exclusiveMaximum: false
				},
				userId: { type: 'integer', format: 'int64', description: '用户Id', allowEmptyValue: false },
				userName: { type: 'string', description: '用户名', allowEmptyValue: false }
			},
			title: 'SportGameRecordReq'
		},
		SportGameRecordResp: {
			type: 'object',
			properties: {
				agentAccount: { type: 'string', description: '上级代理', allowEmptyValue: false },
				bureauId: { type: 'string', description: '副单号', allowEmptyValue: false },
				channelId: { type: 'string', description: '渠道Id', allowEmptyValue: false },
				channelName: { type: 'string', description: '渠道名称', allowEmptyValue: false },
				endTime: { type: 'integer', format: 'int64', description: '结束时间', allowEmptyValue: false },
				extendInfo: { type: 'string', description: '详情', allowEmptyValue: false },
				gameAccount: { type: 'string', description: '游戏账户', allowEmptyValue: false },
				gameName: { type: 'string', description: '游戏名称', allowEmptyValue: false },
				gameType: { type: 'integer', format: 'int64', description: '游戏类型id', allowEmptyValue: false },
				gameTypeName: { type: 'string', description: '游戏类型名称', allowEmptyValue: false },
				result: { type: 'number', description: '输赢金额', allowEmptyValue: false },
				resultFlagName: { type: 'string', description: '游戏结果', allowEmptyValue: false },
				startTime: { type: 'integer', format: 'int64', description: '开始时间', allowEmptyValue: false },
				statusName: { type: 'string', description: '结算状态', allowEmptyValue: false },
				totalBet: { type: 'number', description: '单局总投注', allowEmptyValue: false },
				transactionId: { type: 'string', description: '注单流水号', allowEmptyValue: false },
				userId: { type: 'integer', format: 'int64', description: '用户Id', allowEmptyValue: false },
				userName: { type: 'string', description: '用户名', allowEmptyValue: false },
				validBet: { type: 'number', description: '有效投注', allowEmptyValue: false }
			},
			title: 'SportGameRecordResp'
		},
		StatisticsReq: {
			type: 'object',
			properties: {
				end: { type: 'string', format: 'date', description: '结束日期', allowEmptyValue: false },
				pageIndex: {
					type: 'integer',
					format: 'int32',
					description: '页码 从1开始计数',
					allowEmptyValue: false,
					minimum: 1.0,
					exclusiveMinimum: false
				},
				pageSize: {
					type: 'integer',
					format: 'int32',
					description: '页容 区间[1, 1000]',
					allowEmptyValue: false,
					minimum: 0.0,
					maximum: 9.223372036854776e18,
					exclusiveMinimum: false,
					exclusiveMaximum: false
				},
				proxyUid: { type: 'integer', format: 'int64', description: '代理ID', allowEmptyValue: false },
				start: { type: 'string', format: 'date', description: '开始日期', allowEmptyValue: false }
			},
			title: 'StatisticsReq'
		},
		SummaryReq: {
			type: 'object',
			properties: {
				end: { type: 'string', format: 'date', description: '结束日期', allowEmptyValue: false },
				start: { type: 'string', format: 'date', description: '开始日期', allowEmptyValue: false }
			},
			title: 'SummaryReq'
		},
		TeamStatisticsReq: {
			type: 'object',
			required: ['statDateType'],
			properties: {
				statDateType: {
					type: 'integer',
					format: 'int32',
					description: '统计日期类型:0 今日；7 近7天；30 近30天；9999 全部',
					allowEmptyValue: false
				},
				userId: { type: 'integer', format: 'int64', description: '会员ID', allowEmptyValue: false }
			},
			title: 'TeamStatisticsReq'
		},
		TeamStatisticsResp: {
			type: 'object',
			properties: {
				agentCount: { type: 'integer', format: 'int32', description: '代理数', allowEmptyValue: false },
				depositAmount: { type: 'number', description: '存款值', allowEmptyValue: false },
				directSum: { type: 'integer', format: 'int32', description: '直属有效会员数', allowEmptyValue: false },
				effectiveSum: { type: 'integer', format: 'int32', description: '总有效会员数', allowEmptyValue: false },
				gameValidAmount: { type: 'number', description: '有效流水', allowEmptyValue: false },
				negativeProfitAmount: { type: 'number', description: '负盈利', allowEmptyValue: false },
				rewardAmount: { type: 'number', description: '彩金', allowEmptyValue: false },
				settleAmount: { type: 'number', description: '返佣金额', allowEmptyValue: false },
				userCount: { type: 'integer', format: 'int32', description: '总会员数', allowEmptyValue: false },
				vipSum: { type: 'integer', format: 'int32', description: '达成条件的vip用户数', allowEmptyValue: false },
				withdrawAmount: { type: 'number', description: '提款值', allowEmptyValue: false }
			},
			title: 'TeamStatisticsResp'
		},
		USDT更新请求信息: {
			type: 'object',
			required: ['rate'],
			properties: { rate: { type: 'number', description: '汇率', allowEmptyValue: false } },
			title: 'USDT更新请求信息'
		},
		UpdateArticleReq: {
			type: 'object',
			required: ['articleNo', 'content', 'lang', 'status', 'title'],
			properties: {
				articleNo: { type: 'string', description: '公告编号', allowEmptyValue: false },
				content: { type: 'string', description: '内容(最大不能超过2000)', allowEmptyValue: false },
				lang: {
					type: 'string',
					description: '语言 中文:zh-CN 英文:en-US 菲律宾:en-PH 越南:vi-VN 泰语:th-TH',
					allowEmptyValue: false
				},
				status: {
					type: 'integer',
					format: 'int32',
					description: '状态 1:启用 0:禁用',
					allowEmptyValue: false,
					minimum: 0.0,
					maximum: 9.223372036854776e18,
					exclusiveMinimum: false,
					exclusiveMaximum: false
				},
				title: { type: 'string', description: '标题(最大不能超过64)', allowEmptyValue: false }
			},
			title: 'UpdateArticleReq'
		},
		UpdateBannerReq: {
			type: 'object',
			required: ['bannerNo', 'fileNo', 'lang', 'status', 'url'],
			properties: {
				bannerNo: { type: 'string', description: '横幅编号', allowEmptyValue: false },
				fileNo: { type: 'string', description: '文件编号', allowEmptyValue: false },
				lang: {
					type: 'string',
					description: '语言 中文:zh-CN 英文:en-US 菲律宾:en-PH 越南:vi-VN 泰语:th-TH',
					allowEmptyValue: false
				},
				status: {
					type: 'integer',
					format: 'int32',
					description: '状态 1:启用 0:禁用',
					allowEmptyValue: false,
					minimum: 0.0,
					maximum: 9.223372036854776e18,
					exclusiveMinimum: false,
					exclusiveMaximum: false
				},
				url: { type: 'string', description: '链接(最大不能超过256)', allowEmptyValue: false }
			},
			title: 'UpdateBannerReq'
		},
		UpdateGameAreaReq: {
			type: 'object',
			required: ['areaId', 'areaName', 'areaNameEn', 'areaNamePh', 'areaNameTh', 'areaNameVn', 'icon', 'proxyUid', 'sortNo', 'style'],
			properties: {
				areaId: { type: 'integer', format: 'int64', description: '区域编号', allowEmptyValue: false },
				areaName: { type: 'string', description: '区域名称', allowEmptyValue: false },
				areaNameEn: { type: 'string', description: '区域英文名称', allowEmptyValue: false },
				areaNamePh: { type: 'string', description: '区域菲律宾名称', allowEmptyValue: false },
				areaNameTh: { type: 'string', description: '区域泰语名称', allowEmptyValue: false },
				areaNameVn: { type: 'string', description: '区域越南名称', allowEmptyValue: false },
				banner: { type: 'string', description: 'banner', allowEmptyValue: false },
				icon: { type: 'string', description: 'logo', allowEmptyValue: false },
				proxyUid: { type: 'integer', format: 'int64', description: '包网商id', allowEmptyValue: false },
				sortNo: { type: 'integer', format: 'int32', description: '权重', allowEmptyValue: false },
				style: { type: 'string', description: '风格', allowEmptyValue: false }
			},
			title: 'UpdateGameAreaReq'
		},
		UpdateGameIconReq: {
			type: 'object',
			required: ['gameId', 'icon'],
			properties: {
				gameId: { type: 'integer', format: 'int64', description: '游戏id', allowEmptyValue: false },
				icon: { type: 'string', description: '游戏icon', allowEmptyValue: false },
				icon2: { type: 'string', description: '游戏icon', allowEmptyValue: false },
				icon3: { type: 'string', description: '游戏icon', allowEmptyValue: false }
			},
			title: 'UpdateGameIconReq'
		},
		UpdateGameLabelReq: {
			type: 'object',
			required: ['ids', 'label'],
			properties: {
				ids: {
					type: 'array',
					description: '游戏id',
					allowEmptyValue: false,
					items: { type: 'integer', format: 'int64' }
				},
				label: { type: 'string', description: '游戏类型', allowEmptyValue: false }
			},
			title: 'UpdateGameLabelReq'
		},
		UpdateGameTypeReq: {
			type: 'object',
			required: ['gameIds', 'gameType'],
			properties: {
				gameIds: {
					type: 'array',
					description: '游戏id集合',
					allowEmptyValue: false,
					items: { type: 'integer', format: 'int64' }
				},
				gameType: { type: 'integer', format: 'int64', description: '游戏类型', allowEmptyValue: false }
			},
			title: 'UpdateGameTypeReq'
		},
		UpdateProxyChoiceGameReq: {
			type: 'object',
			required: ['proxyGameId'],
			properties: {
				icon: { type: 'string', description: '游戏图标', allowEmptyValue: false },
				proxyGameId: { type: 'integer', format: 'int64', description: '代理游戏编号', allowEmptyValue: false },
				proxyUid: { type: 'integer', format: 'int64', description: '代理编号', allowEmptyValue: false }
			},
			title: 'UpdateProxyChoiceGameReq'
		},
		UpdateProxyDomainReq: {
			type: 'object',
			required: ['domain', 'proxyDomainId', 'proxyUid'],
			properties: {
				domain: { type: 'string', description: '域名(最长120)', allowEmptyValue: false },
				proxyDomainId: { type: 'integer', format: 'int64', description: '域名编号', allowEmptyValue: false },
				proxyUid: { type: 'integer', format: 'int64', description: '代理编号', allowEmptyValue: false }
			},
			title: 'UpdateProxyDomainReq'
		},
		UpdateProxyGameReq: {
			type: 'object',
			required: ['proxyGameId'],
			properties: {
				gameName: { type: 'string', description: '游戏名称', allowEmptyValue: false },
				icon: { type: 'string', description: '游戏图标', allowEmptyValue: false },
				proxyGameId: { type: 'integer', format: 'int64', description: '代理游戏编号', allowEmptyValue: false }
			},
			title: 'UpdateProxyGameReq'
		},
		UpdateProxyReq: {
			type: 'object',
			required: ['proxyUid', 'style', 'url'],
			properties: {
				proxyUid: { type: 'integer', format: 'int64', description: '代理编号', allowEmptyValue: false },
				style: { type: 'string', description: '风格', allowEmptyValue: false },
				url: { type: 'string', description: '主地址 http(s)打头', allowEmptyValue: false }
			},
			title: 'UpdateProxyReq'
		},
		UpdateTypeReq: {
			type: 'object',
			required: ['factoryCode', 'gameMainTypeCode', 'typeId', 'typeName'],
			properties: {
				factoryCode: { type: 'string', description: '厂商编码', allowEmptyValue: false },
				gameMainTypeCode: { type: 'string', description: '游戏主分类Code', allowEmptyValue: false },
				typeId: { type: 'integer', format: 'int64', description: '类型编号', allowEmptyValue: false },
				typeName: { type: 'string', description: '类型名称', allowEmptyValue: false }
			},
			title: 'UpdateTypeReq'
		},
		UpdateUserStatusReq: {
			type: 'object',
			required: ['userId'],
			properties: {
				proxyUserId: { type: 'integer', format: 'int64', description: '包网商编号', allowEmptyValue: false },
				remark: { type: 'string', description: '状态变更原因', allowEmptyValue: false },
				userId: { type: 'integer', format: 'int64', description: '用户编号', allowEmptyValue: false }
			},
			title: 'UpdateUserStatusReq'
		},
		UploadResultResp: {
			type: 'object',
			properties: {
				fileName: { type: 'string', description: '文件名称', allowEmptyValue: false },
				fileNo: { type: 'string', description: '文件编号', allowEmptyValue: false },
				fileSize: { type: 'string', description: '文件大小', allowEmptyValue: false },
				fileType: {
					type: 'integer',
					format: 'int32',
					description: '文件类型 2:图片 3:语音 4:视频 5:PDF文件 6:其他文件',
					allowEmptyValue: false
				},
				url: { type: 'string', description: '文件全路径,用于展示', allowEmptyValue: false }
			},
			title: 'UploadResultResp'
		},
		UserAccountBalanceResp: {
			type: 'object',
			properties: {
				amountCNY: { type: 'number', description: 'cny余额', allowEmptyValue: false },
				amountUSDT: { type: 'number', description: 'usdt余额', allowEmptyValue: false }
			},
			title: 'UserAccountBalanceResp'
		},
		UserAccountResp: {
			type: 'object',
			properties: {
				balance: { type: 'number', description: '人民币总余额', allowEmptyValue: false },
				channelAccount: {
					type: 'array',
					description: '渠道余额信息',
					allowEmptyValue: false,
					items: { $ref: '#/definitions/ChannelAccountResp' }
				}
			},
			title: 'UserAccountResp'
		},
		UserAchievingBo: {
			type: 'object',
			properties: {
				depositAmount: { type: 'number', description: '存款值', allowEmptyValue: false },
				directSum: { type: 'integer', format: 'int32', description: '直属有效会员数', allowEmptyValue: false },
				effectiveSum: { type: 'integer', format: 'int32', description: '总有效会员数', allowEmptyValue: false },
				gameValidAmount: { type: 'number', description: '有效流水', allowEmptyValue: false },
				negativeProfitAmount: { type: 'number', description: '负盈利', allowEmptyValue: false },
				vipSum: { type: 'integer', format: 'int32', description: '达成条件的vip用户数', allowEmptyValue: false },
				withdrawAmount: { type: 'number', description: '提款值', allowEmptyValue: false }
			},
			title: 'UserAchievingBo'
		},
		UserAchievingReq: {
			type: 'object',
			properties: { userId: { type: 'integer', format: 'int64', description: '用户Id', allowEmptyValue: false } },
			title: 'UserAchievingReq'
		},
		UserActionStatisticsResp: {
			type: 'object',
			properties: {
				activityCount: { type: 'integer', format: 'int32', description: '活跃用户数', allowEmptyValue: false },
				activityData: {
					type: 'array',
					description: '活跃用户折线数据',
					allowEmptyValue: false,
					items: { $ref: '#/definitions/UserActivityDaily' }
				},
				registerCount: { type: 'integer', format: 'int32', description: '注册用户数', allowEmptyValue: false },
				registerData: {
					type: 'array',
					description: '注册用户折线数据',
					allowEmptyValue: false,
					items: { $ref: '#/definitions/UserActivityDaily' }
				}
			},
			title: 'UserActionStatisticsResp'
		},
		UserActivityDaily: {
			type: 'object',
			properties: {
				count: { type: 'integer', format: 'int32', description: '用户数', allowEmptyValue: false },
				period: { type: 'string', format: 'date', description: '日期', allowEmptyValue: false }
			},
			title: 'UserActivityDaily'
		},
		UserAddVo: {
			type: 'object',
			properties: {
				account: { type: 'string', description: '登录账户(最长30位)', allowEmptyValue: false },
				locked: { type: 'string', description: '锁定标志(1:锁定;0:激活)', allowEmptyValue: false, pattern: '[10]' },
				mobileArea: { type: 'string', description: '手机区号', allowEmptyValue: false },
				mobilePhone: { type: 'string', description: '手机号', allowEmptyValue: false, pattern: '\\d{11}' },
				password: { type: 'string', description: '密码(长度在4-18位)', allowEmptyValue: false },
				remark: { type: 'string', description: '备注(最长50)', allowEmptyValue: false },
				sex: { type: 'string', description: '性别(0:未知;1:男;2:女)', allowEmptyValue: false, pattern: '[012]' },
				userName: { type: 'string', description: '用户名(最长30位)', allowEmptyValue: false },
				userType: {
					type: 'string',
					description: '人员类型(1:业务员;2:管理员;) ',
					allowEmptyValue: false,
					pattern: '[12]'
				}
			},
			title: 'UserAddVo',
			description: '用户添加信息'
		},
		UserBankCardDetailReq: {
			type: 'object',
			properties: {
				bizCardCode: { type: 'string', description: '业务卡号', allowEmptyValue: false },
				userId: { type: 'integer', format: 'int64', description: '用户ID', allowEmptyValue: false }
			},
			title: 'UserBankCardDetailReq'
		},
		UserBankCardQueryReq: {
			type: 'object',
			properties: { userId: { type: 'integer', format: 'int64', description: '用户ID', allowEmptyValue: false } },
			title: 'UserBankCardQueryReq'
		},
		UserBankCardQueryResp: {
			type: 'object',
			properties: {
				bankAccount: { type: 'string', description: '银行账号', allowEmptyValue: false },
				bankName: { type: 'string', description: '银行名称', allowEmptyValue: false },
				bizCardNo: { type: 'string', description: '业务卡号', allowEmptyValue: false },
				currencyCode: { type: 'string', description: '币种编码', allowEmptyValue: false },
				currencyName: { type: 'string', description: '币种名称', allowEmptyValue: false },
				status: { type: 'integer', format: 'int32', description: '状态 1:开启 0:关闭', allowEmptyValue: false },
				updateTime: { type: 'string', format: 'date-time', description: '更新时间', allowEmptyValue: false }
			},
			title: 'UserBankCardQueryResp'
		},
		UserBankCardUpdateReq: {
			type: 'object',
			required: ['currencyCode', 'status'],
			properties: {
				bankName: { type: 'string', description: '银行名称', allowEmptyValue: false },
				bizCardCode: { type: 'string', description: '业务卡号，更新或查看时，必传', allowEmptyValue: false },
				currencyCode: { type: 'string', description: '法币，顿号（、）分割', allowEmptyValue: false },
				props: {
					type: 'array',
					description: '其他属性',
					allowEmptyValue: false,
					items: { $ref: '#/definitions/BankCardUpdatePropReq' }
				},
				status: {
					type: 'integer',
					format: 'int32',
					description: '状态：1 可用；0 不可用',
					allowEmptyValue: false,
					enum: [1, 0]
				},
				userId: { type: 'integer', format: 'int64', description: '用户ID', allowEmptyValue: false }
			},
			title: 'UserBankCardUpdateReq'
		},
		UserDataSummary: {
			type: 'object',
			properties: {
				accountBalance: { type: 'number', description: '账户余额', allowEmptyValue: false },
				channelBalance: { type: 'number', description: '游戏账户余额', allowEmptyValue: false },
				deposit: { type: 'number', description: '充值累计', allowEmptyValue: false },
				effectiveBet: { type: 'number', description: '有效流水', allowEmptyValue: false },
				reverseProfit: { type: 'number', description: '负盈利', allowEmptyValue: false },
				rewardAmount: { type: 'number', description: '返佣累计', allowEmptyValue: false },
				userId: { type: 'integer', format: 'int64', description: '用户编号', allowEmptyValue: false },
				winnings: { type: 'number', description: '彩金累计', allowEmptyValue: false },
				withdraw: { type: 'number', description: '提现累计', allowEmptyValue: false }
			},
			title: 'UserDataSummary'
		},
		UserDetailResp: {
			type: 'object',
			properties: {
				account: { type: 'string', description: '账号', allowEmptyValue: false },
				agentCreateTime: { type: 'string', format: 'date-time', description: '成为代理时间', allowEmptyValue: false },
				agentLevel: { type: 'integer', format: 'int32', description: '代理级别', allowEmptyValue: false },
				birthday: { type: 'string', format: 'date', description: '生日', allowEmptyValue: false },
				createTime: { type: 'string', format: 'date-time', description: '注册时间', allowEmptyValue: false },
				effective: { type: 'integer', format: 'int32', description: '有效会员 1:是 0:否', allowEmptyValue: false },
				email: { type: 'string', description: '邮箱', allowEmptyValue: false },
				experience: { type: 'number', description: '经验值', allowEmptyValue: false },
				forbidden: { type: 'boolean', example: false, description: '封禁用户，true：封禁', allowEmptyValue: false },
				inviteAccount: { type: 'string', description: '邀请人账号(所属代理)', allowEmptyValue: false },
				inviteUid: { type: 'integer', format: 'int64', description: '邀请人编号', allowEmptyValue: false },
				lastLogin: { type: 'integer', format: 'int64', description: '最后登录时间', allowEmptyValue: false },
				lastLoginIp: { type: 'string', description: '最后一次登陆ip', allowEmptyValue: false },
				layerCode: { type: 'string', description: '邀请码', allowEmptyValue: false },
				mobileArea: { type: 'string', description: '手机区号', allowEmptyValue: false },
				mobileNo: { type: 'string', description: '手机号', allowEmptyValue: false },
				nickName: { type: 'string', description: '昵称', allowEmptyValue: false },
				proxyAccount: { type: 'string', description: '包网商账号', allowEmptyValue: false },
				proxyUserId: { type: 'integer', format: 'int64', description: '包网商编号', allowEmptyValue: false },
				registerDevice: { type: 'string', description: '注册端(h5/pc端)', allowEmptyValue: false },
				registerIp: { type: 'string', description: '注册ip', allowEmptyValue: false },
				reminder: { type: 'string', description: '备注', allowEmptyValue: false },
				rewardRate: { type: 'number', description: '奖励比例', allowEmptyValue: false },
				rewardType: { type: 'integer', format: 'int32', description: '奖励类型 1:占成 2:返佣', allowEmptyValue: false },
				status: { type: 'integer', format: 'int32', description: '用户状态 1:正常 0:锁定', allowEmptyValue: false },
				telegram: { type: 'string', description: '飞机账号', allowEmptyValue: false },
				userId: { type: 'integer', format: 'int64', description: '用户编号', allowEmptyValue: false },
				userLabel: { type: 'string', description: '用户标签，多个逗号隔开', allowEmptyValue: false },
				userLabelText: { type: 'string', description: '用户标签文本，多个逗号隔开', allowEmptyValue: false },
				userName: { type: 'string', description: '真实姓名', allowEmptyValue: false },
				userType: { type: 'integer', format: 'int32', description: '用户类型 1:普通 4:代理', allowEmptyValue: false },
				vipLevel: { type: 'integer', format: 'int32', description: 'vip等级', allowEmptyValue: false },
				vipLevelName: { type: 'string', description: 'vip等级名称', allowEmptyValue: false }
			},
			title: 'UserDetailResp'
		},
		UserGameRecordReq: {
			type: 'object',
			properties: {
				end: { type: 'integer', format: 'int64', description: '结束时间', allowEmptyValue: false },
				factoryCode: { type: 'string', description: '游戏渠道', allowEmptyValue: false },
				pageIndex: {
					type: 'integer',
					format: 'int32',
					description: '页码 从1开始计数',
					allowEmptyValue: false,
					minimum: 1.0,
					exclusiveMinimum: false
				},
				pageSize: {
					type: 'integer',
					format: 'int32',
					description: '页容 区间[1, 1000]',
					allowEmptyValue: false,
					minimum: 0.0,
					maximum: 9.223372036854776e18,
					exclusiveMinimum: false,
					exclusiveMaximum: false
				},
				start: { type: 'integer', format: 'int64', description: '开始时间', allowEmptyValue: false },
				typeId: { type: 'integer', format: 'int64', description: '游戏类型id', allowEmptyValue: false },
				userId: { type: 'integer', format: 'int64', description: '用户编号', allowEmptyValue: false },
				userName: { type: 'string', description: '用户名', allowEmptyValue: false }
			},
			title: 'UserGameRecordReq'
		},
		UserGameRecordResp: {
			type: 'object',
			properties: {
				agentAccount: { type: 'string', description: '上级代理', allowEmptyValue: false },
				bureauId: { type: 'string', description: '局号id', allowEmptyValue: false },
				channelId: { type: 'string', description: '渠道编号', allowEmptyValue: false },
				channelName: { type: 'string', description: '渠道名称', allowEmptyValue: false },
				endTime: { type: 'integer', format: 'int64', description: '游戏结束时间', allowEmptyValue: false },
				factoryCode: { type: 'string', description: '游戏渠道', allowEmptyValue: false },
				gameName: { type: 'string', description: '游戏名称', allowEmptyValue: false },
				gameNameCustomer: { type: 'string', description: '自定义游戏名称', allowEmptyValue: false },
				gameType: { type: 'integer', format: 'int64', description: '游戏类型id', allowEmptyValue: false },
				gameTypeName: { type: 'string', description: '游戏类型名称', allowEmptyValue: false },
				parentUid: { type: 'integer', format: 'int64', description: '上级代理编号', allowEmptyValue: false },
				proxyName: { type: 'string', description: '包网商名称', allowEmptyValue: false },
				proxyUid: { type: 'integer', format: 'int64', description: '包网商编号', allowEmptyValue: false },
				result: { type: 'number', description: '结果', allowEmptyValue: false },
				resultFlag: {
					type: 'integer',
					format: 'int32',
					description: '输赢结果标志 1:赢 2:平 3:输',
					allowEmptyValue: false
				},
				startTime: { type: 'integer', format: 'int64', description: '游戏开始时间', allowEmptyValue: false },
				status: {
					type: 'integer',
					format: 'int32',
					description: '状态 1:已结算 2:进行中 3:系统撤单 4:拒绝 5:作废 6:玩家取消',
					allowEmptyValue: false
				},
				totalBet: { type: 'number', description: '总投注', allowEmptyValue: false },
				transactionId: { type: 'string', description: '交易id', allowEmptyValue: false },
				userCount: { type: 'integer', format: 'int32', description: '游戏人数', allowEmptyValue: false },
				userId: { type: 'integer', format: 'int64', description: '用户编号', allowEmptyValue: false },
				userName: { type: 'string', description: '用户名称', allowEmptyValue: false },
				validBet: { type: 'number', description: '有效投注', allowEmptyValue: false }
			},
			title: 'UserGameRecordResp'
		},
		UserIdReq: {
			type: 'object',
			required: ['userId'],
			properties: {
				proxyUserId: { type: 'integer', format: 'int64', description: '包网商编号', allowEmptyValue: false },
				userId: { type: 'integer', format: 'int64', description: '用户编号', allowEmptyValue: false }
			},
			title: 'UserIdReq'
		},
		UserInfo: {
			type: 'object',
			properties: {
				account: { type: 'string', description: '账户', allowEmptyValue: false },
				googleFlag: {
					type: 'boolean',
					example: false,
					description: '是否绑定了google验证码 true:已绑定 false:未绑定',
					allowEmptyValue: false
				},
				mobileArea: { type: 'string', description: '手机区号，没有加号', allowEmptyValue: false },
				mobilePhone: { type: 'string', description: '手机号', allowEmptyValue: false },
				sex: { type: 'string', description: '性别', allowEmptyValue: false },
				userId: { type: 'string', description: '用户编号', allowEmptyValue: false },
				userName: { type: 'string', description: '用户名', allowEmptyValue: false }
			},
			title: 'UserInfo',
			description: '用户信息'
		},
		UserInfoVo: {
			type: 'object',
			properties: {
				account: { type: 'string', description: '登录账户(最长30位)', allowEmptyValue: false },
				createTime: { type: 'string', format: 'date-time', description: '创建时间', allowEmptyValue: false },
				locked: { type: 'string', description: '锁定标志(1:锁定;0:激活)', allowEmptyValue: false, pattern: '[10]' },
				mobileArea: { type: 'string', description: '手机区号', allowEmptyValue: false },
				mobilePhone: { type: 'string', description: '手机号', allowEmptyValue: false, pattern: '\\d{11}' },
				remark: { type: 'string', description: '备注(最长50)', allowEmptyValue: false },
				sex: { type: 'string', description: '性别(0:未知;1:男;2:女)', allowEmptyValue: false, pattern: '[012]' },
				updateTime: { type: 'string', format: 'date-time', description: '更新时间', allowEmptyValue: false },
				userId: { type: 'string', description: '用户编号', allowEmptyValue: false },
				userName: { type: 'string', description: '用户名(最长30位)', allowEmptyValue: false },
				userType: {
					type: 'string',
					description: '人员类型(1:业务员;2:管理员;) ',
					allowEmptyValue: false,
					pattern: '[12]'
				}
			},
			title: 'UserInfoVo',
			description: '用户信息'
		},
		UserLabelReq: {
			type: 'object',
			properties: {
				labelName: { type: 'string', description: '标签名称', allowEmptyValue: false },
				weight: {
					type: 'integer',
					format: 'int32',
					description: '排序权重',
					allowEmptyValue: false,
					minimum: 1.0,
					maximum: 100000.0,
					exclusiveMinimum: false,
					exclusiveMaximum: false
				}
			},
			title: 'UserLabelReq'
		},
		UserLabelResp: {
			type: 'object',
			properties: {
				labelCode: { type: 'string', description: '标签编码', allowEmptyValue: false },
				labelName: { type: 'string', description: '标签名称', allowEmptyValue: false },
				weight: { type: 'integer', format: 'int32', description: '排序权重', allowEmptyValue: false }
			},
			title: 'UserLabelResp'
		},
		UserLabelUpdate: {
			type: 'object',
			required: ['userId'],
			properties: {
				labelCode: { type: 'string', description: '用户标签编码', allowEmptyValue: false },
				proxyUserId: { type: 'integer', format: 'int64', description: '包网商编号', allowEmptyValue: false },
				userId: { type: 'integer', format: 'int64', description: '用户编号', allowEmptyValue: false }
			},
			title: 'UserLabelUpdate'
		},
		UserLockRequestVo: {
			type: 'object',
			properties: {
				lockFlag: { type: 'string', description: '锁定标志 1:锁定;0:激活', allowEmptyValue: false, pattern: '[01]' },
				userId: { type: 'string', description: '用户编号', allowEmptyValue: false }
			},
			title: 'UserLockRequestVo',
			description: '用户锁定信息'
		},
		UserNoReq: {
			type: 'object',
			required: ['userNo'],
			properties: { userNo: { type: 'integer', format: 'int64', description: '用户编号', allowEmptyValue: false } },
			title: 'UserNoReq'
		},
		UserOperationLogReq: {
			type: 'object',
			required: ['userId'],
			properties: {
				pageIndex: {
					type: 'integer',
					format: 'int32',
					description: '页码 从1开始计数',
					allowEmptyValue: false,
					minimum: 1.0,
					exclusiveMinimum: false
				},
				pageSize: {
					type: 'integer',
					format: 'int32',
					description: '页容 区间[1, 1000]',
					allowEmptyValue: false,
					minimum: 0.0,
					maximum: 9.223372036854776e18,
					exclusiveMinimum: false,
					exclusiveMaximum: false
				},
				userId: { type: 'integer', format: 'int64', description: '用户编号', allowEmptyValue: false }
			},
			title: 'UserOperationLogReq'
		},
		UserOperationLogResp: {
			type: 'object',
			properties: {
				bizId: { type: 'string', description: '业务编号 如用户编号', allowEmptyValue: false },
				operationTime: { type: 'string', format: 'date-time', description: '操作时间', allowEmptyValue: false },
				operationType: { type: 'string', description: '操作类型 ADD:增 DELETE:删 UPDATE:改', allowEmptyValue: false },
				remark: { type: 'string', description: '操作说明', allowEmptyValue: false },
				userId: { type: 'string', description: '操作人编号', allowEmptyValue: false },
				userName: { type: 'string', description: '操作人姓名', allowEmptyValue: false }
			},
			title: 'UserOperationLogResp'
		},
		UserPasswordRequestVo: {
			type: 'object',
			properties: {
				newPassword: { type: 'string', description: '新密码', allowEmptyValue: false },
				notSame: { type: 'boolean' },
				oldPassword: { type: 'string', description: '原密码', allowEmptyValue: false }
			},
			title: 'UserPasswordRequestVo',
			description: '用户修改密码请求信息'
		},
		UserQueryRequestVo: {
			type: 'object',
			properties: {
				mobilePhone: { type: 'string', description: '手机号', allowEmptyValue: false },
				pageIndex: {
					type: 'integer',
					format: 'int32',
					description: '页码 从1开始计数',
					allowEmptyValue: false,
					minimum: 1.0,
					exclusiveMinimum: false
				},
				pageSize: {
					type: 'integer',
					format: 'int32',
					description: '页容 区间[1, 1000]',
					allowEmptyValue: false,
					minimum: 0.0,
					maximum: 9.223372036854776e18,
					exclusiveMinimum: false,
					exclusiveMaximum: false
				},
				userName: { type: 'string', description: '用户名(支持模糊查询)', allowEmptyValue: false }
			},
			title: 'UserQueryRequestVo',
			description: '用户查询请求信息'
		},
		UserRelationAccountResp: {
			type: 'object',
			properties: {
				relationTypeCode: { type: 'string', description: '关联类型code', allowEmptyValue: false },
				relationTypeName: { type: 'string', description: '关联类型名字', allowEmptyValue: false },
				relationValue: { type: 'string', description: '关联value', allowEmptyValue: false },
				userId: { type: 'integer', format: 'int64', description: '用户id', allowEmptyValue: false },
				userName: { type: 'string', description: '用户名', allowEmptyValue: false }
			},
			title: 'UserRelationAccountResp'
		},
		UserReminderUpdate: {
			type: 'object',
			required: ['userId'],
			properties: {
				proxyUserId: { type: 'integer', format: 'int64', description: '包网商编号', allowEmptyValue: false },
				reminder: { type: 'string', description: '用户备注', allowEmptyValue: false },
				userId: { type: 'integer', format: 'int64', description: '用户编号', allowEmptyValue: false }
			},
			title: 'UserReminderUpdate'
		},
		UserResp: {
			type: 'object',
			properties: {
				account: { type: 'string', description: '账号', allowEmptyValue: false },
				agentLevel: { type: 'integer', format: 'int32', description: '代理级别', allowEmptyValue: false },
				birthday: { type: 'string', format: 'date', description: '生日', allowEmptyValue: false },
				createTime: { type: 'string', format: 'date-time', description: '注册时间', allowEmptyValue: false },
				effective: { type: 'integer', format: 'int32', description: '有效会员 1:是 0:否', allowEmptyValue: false },
				email: { type: 'string', description: '邮箱', allowEmptyValue: false },
				experience: { type: 'number', description: '经验值', allowEmptyValue: false },
				forbidden: { type: 'boolean', example: false, description: '封禁用户，true：封禁', allowEmptyValue: false },
				inviteAccount: { type: 'string', description: '邀请人账号(所属代理)', allowEmptyValue: false },
				inviteUid: { type: 'integer', format: 'int64', description: '邀请人编号', allowEmptyValue: false },
				lastLogin: { type: 'integer', format: 'int64', description: '最后登录时间', allowEmptyValue: false },
				lastLoginIp: { type: 'string', description: '最后一次登陆ip', allowEmptyValue: false },
				mobileArea: { type: 'string', description: '手机区号', allowEmptyValue: false },
				mobileNo: { type: 'string', description: '手机号', allowEmptyValue: false },
				nickName: { type: 'string', description: '昵称', allowEmptyValue: false },
				proxyAccount: { type: 'string', description: '包网商账号', allowEmptyValue: false },
				proxyUserId: { type: 'integer', format: 'int64', description: '包网商编号', allowEmptyValue: false },
				registerDevice: { type: 'string', description: '注册端(h5/pc端)', allowEmptyValue: false },
				registerIp: { type: 'string', description: '注册ip', allowEmptyValue: false },
				reminder: { type: 'string', description: '备注', allowEmptyValue: false },
				status: { type: 'integer', format: 'int32', description: '用户状态 1:正常 0:锁定', allowEmptyValue: false },
				telegram: { type: 'string', description: '飞机账号', allowEmptyValue: false },
				userId: { type: 'integer', format: 'int64', description: '用户编号', allowEmptyValue: false },
				userLabel: { type: 'string', description: '用户标签，多个逗号隔开', allowEmptyValue: false },
				userLabelText: { type: 'string', description: '用户标签文本，多个逗号隔开', allowEmptyValue: false },
				userName: { type: 'string', description: '真实姓名', allowEmptyValue: false },
				userType: { type: 'integer', format: 'int32', description: '用户类型 1:普通 4:代理', allowEmptyValue: false },
				vipLevel: { type: 'integer', format: 'int32', description: 'vip等级', allowEmptyValue: false },
				vipLevelName: { type: 'string', description: 'vip等级名称', allowEmptyValue: false }
			},
			title: 'UserResp'
		},
		UserRoleMenuVo: {
			type: 'object',
			properties: {
				menus: {
					type: 'array',
					description: '菜单信息',
					allowEmptyValue: false,
					items: { $ref: '#/definitions/MenuResponseVo' }
				},
				roles: {
					type: 'array',
					description: '角色信息',
					allowEmptyValue: false,
					items: { $ref: '#/definitions/角色响应信息' }
				}
			},
			title: 'UserRoleMenuVo',
			description: '用户角色和菜单信息'
		},
		UserRoleRequestVo: {
			type: 'object',
			properties: {
				roleIds: { type: 'array', description: '角色编号集合', allowEmptyValue: false, items: { type: 'string' } },
				userId: { type: 'string', description: '用户编号', allowEmptyValue: false }
			},
			title: 'UserRoleRequestVo',
			description: '用户角色请求信息'
		},
		UserStatisticsInfoResp: {
			type: 'object',
			properties: { totalCount: { type: 'integer', format: 'int32', description: '总用户', allowEmptyValue: false } },
			title: 'UserStatisticsInfoResp'
		},
		UserStatisticsReq: {
			type: 'object',
			properties: {
				end: { type: 'string', format: 'date-time', description: '结束时间', allowEmptyValue: false },
				groupBy: { type: 'integer', format: 'int32', description: '统计纬度:1 按天；3 按月', allowEmptyValue: false },
				start: { type: 'string', format: 'date-time', description: '开始时间', allowEmptyValue: false }
			},
			title: 'UserStatisticsReq'
		},
		UserStatisticsResp: {
			type: 'object',
			properties: {
				count: { type: 'integer', format: 'int32', description: '注册用户数', allowEmptyValue: false },
				date: { type: 'string', description: '日期', allowEmptyValue: false }
			},
			title: 'UserStatisticsResp'
		},
		UserUpdateVo: {
			type: 'object',
			properties: {
				account: { type: 'string', description: '登录账户(最长30位)', allowEmptyValue: false },
				locked: { type: 'string', description: '锁定标志(1:锁定;0:激活)', allowEmptyValue: false, pattern: '[10]' },
				mobileArea: { type: 'string', description: '手机区号', allowEmptyValue: false },
				mobilePhone: { type: 'string', description: '手机号', allowEmptyValue: false, pattern: '\\d{11}' },
				remark: { type: 'string', description: '备注(最长50)', allowEmptyValue: false },
				sex: { type: 'string', description: '性别(0:未知;1:男;2:女)', allowEmptyValue: false, pattern: '[012]' },
				userId: { type: 'string', description: '用户编号', allowEmptyValue: false },
				userName: { type: 'string', description: '用户名(最长30位)', allowEmptyValue: false },
				userType: {
					type: 'string',
					description: '人员类型(1:业务员;2:管理员;) ',
					allowEmptyValue: false,
					pattern: '[12]'
				}
			},
			title: 'UserUpdateVo',
			description: '用户修改信息'
		},
		VipManagementVo: {
			type: 'object',
			properties: {
				vipLevel: { type: 'integer', format: 'int32', description: 'vip等级', allowEmptyValue: false },
				vipName: { type: 'string', description: 'vip名称', allowEmptyValue: false }
			},
			title: 'VipManagementVo'
		},
		WithdrawInfoResp: {
			type: 'object',
			required: ['fee', 'times'],
			properties: {
				chain: { type: 'string', description: '链:TRON,BSC,ETH；设置法币传对应法币', allowEmptyValue: false },
				chainStatus: {
					type: 'integer',
					format: 'int32',
					description: '链提币状态(1:开启 0:关闭)和法币提现的各法币开关共用',
					allowEmptyValue: false,
					minimum: 0.0,
					maximum: 9.223372036854776e18,
					exclusiveMinimum: false,
					exclusiveMaximum: false
				},
				fee: {
					type: 'number',
					description: '手续费',
					allowEmptyValue: false,
					minimum: 0.0,
					maximum: 9.223372036854776e18,
					exclusiveMinimum: false,
					exclusiveMaximum: false
				},
				feeType: {
					type: 'integer',
					format: 'int32',
					description: '手续费类型：1 百分比；2 固定值',
					allowEmptyValue: false,
					minimum: 0.0,
					maximum: 9.223372036854776e18,
					exclusiveMinimum: false,
					exclusiveMaximum: false
				},
				status: {
					type: 'integer',
					format: 'int32',
					description: '总提币状态(1:开启 0:关闭)',
					allowEmptyValue: false,
					minimum: 0.0,
					maximum: 9.223372036854776e18,
					exclusiveMinimum: false,
					exclusiveMaximum: false
				},
				times: {
					type: 'integer',
					format: 'int32',
					description: '限制次数',
					allowEmptyValue: false,
					minimum: 0.0,
					maximum: 9.223372036854776e18,
					exclusiveMinimum: false,
					exclusiveMaximum: false
				},
				withdrawMax: { type: 'number', description: '最大提币金额', allowEmptyValue: false },
				withdrawMin: { type: 'number', description: '最小提币金额', allowEmptyValue: false }
			},
			title: 'WithdrawInfoResp'
		},
		WithdrawNoChannelTypeReq: {
			type: 'object',
			required: ['withdrawNo'],
			properties: {
				channelType: { type: 'string', description: '通道类型', allowEmptyValue: false },
				withdrawNo: { type: 'string', description: '提币/提现单号', allowEmptyValue: false }
			},
			title: 'WithdrawNoChannelTypeReq'
		},
		WithdrawNoReq: {
			type: 'object',
			required: ['withdrawNo'],
			properties: {
				channelType: { type: 'string', description: '通道类型', allowEmptyValue: false },
				withdrawNo: { type: 'string', description: '提币/提现单号', allowEmptyValue: false }
			},
			title: 'WithdrawNoReq'
		},
		WithdrawRefuseReq: {
			type: 'object',
			required: ['withdrawNo'],
			properties: {
				channelType: { type: 'string', description: '通道类型', allowEmptyValue: false },
				refuseDesc: { type: 'string', description: '拒绝理由', allowEmptyValue: false },
				withdrawNo: { type: 'string', description: '提币/提现单号', allowEmptyValue: false }
			},
			title: 'WithdrawRefuseReq'
		},
		WithdrawReq: {
			type: 'object',
			properties: {
				currencyType: {
					type: 'integer',
					format: 'int32',
					description: '充值类型:1 数字货币；2 法币',
					allowEmptyValue: false
				},
				end: { type: 'string', format: 'date-time', description: '交易时间结束', allowEmptyValue: false },
				pageIndex: {
					type: 'integer',
					format: 'int32',
					description: '页码 从1开始计数',
					allowEmptyValue: false,
					minimum: 1.0,
					exclusiveMinimum: false
				},
				pageSize: {
					type: 'integer',
					format: 'int32',
					description: '页容 区间[1, 1000]',
					allowEmptyValue: false,
					minimum: 0.0,
					maximum: 9.223372036854776e18,
					exclusiveMinimum: false,
					exclusiveMaximum: false
				},
				parentAccount: { type: 'string', description: '上级代理帐号', allowEmptyValue: false },
				parentId: { type: 'integer', format: 'int64', description: '上级代理ID', allowEmptyValue: false },
				proxyUserId: { type: 'integer', format: 'int64', description: '归属包网商ID', allowEmptyValue: false },
				start: { type: 'string', format: 'date-time', description: '交易时间开始', allowEmptyValue: false },
				status: {
					type: 'integer',
					format: 'int32',
					description: '状态：0:待审核 1:审核通过 2:审核拒绝 3:提币中 4: 提现失败 8:提现/币成功',
					allowEmptyValue: false
				},
				userAccount: { type: 'string', description: '用户账号', allowEmptyValue: false },
				userId: { type: 'integer', format: 'int64', description: '用户编号', allowEmptyValue: false },
				withdrawNo: { type: 'integer', format: 'int64', description: '订单编号', allowEmptyValue: false }
			},
			title: 'WithdrawReq'
		},
		WithdrawResp: {
			type: 'object',
			properties: {
				actualLegerAmount: { type: 'number', description: '提现/币分值 - 实际到账', allowEmptyValue: false },
				agentAccount: { type: 'string', description: '1级代理账户', allowEmptyValue: false },
				agentId: { type: 'integer', format: 'int64', description: '1级代理ID', allowEmptyValue: false },
				amount: { type: 'number', description: '提币金额', allowEmptyValue: false },
				chain: { type: 'string', description: '链', allowEmptyValue: false },
				channelType: { type: 'string', description: '渠道类型', allowEmptyValue: false },
				completeTime: { type: 'string', format: 'date-time', description: '交易完成时间', allowEmptyValue: false },
				createTime: { type: 'string', format: 'date-time', description: '下单时间', allowEmptyValue: false },
				currencyCode: { type: 'string', description: '币种', allowEmptyValue: false },
				currencyType: {
					type: 'integer',
					format: 'int32',
					description: '币种类型 1数字货币 2法币',
					allowEmptyValue: false
				},
				extraData: { type: 'string', description: '附加信息，比如提现用户卡信息', allowEmptyValue: false },
				fee: { type: 'number', description: '手续费', allowEmptyValue: false },
				feeType: {
					type: 'integer',
					format: 'int32',
					description: '手续费类型：1 固定值；2 比例',
					allowEmptyValue: false
				},
				feeValue: { type: 'number' },
				legerAmount: { type: 'number', description: '提现/币分值', allowEmptyValue: false },
				parentAccount: { type: 'string', description: '上级代理帐号', allowEmptyValue: false },
				parentId: { type: 'integer', format: 'int64', description: '上级代理ID', allowEmptyValue: false },
				proxyUserAccount: { type: 'string', description: '包网商帐号', allowEmptyValue: false },
				proxyUserId: { type: 'integer', format: 'int64', description: '包网商ID', allowEmptyValue: false },
				rate: { type: 'number', description: '汇率', allowEmptyValue: false },
				refuseDesc: { type: 'string', description: '拒绝理由', allowEmptyValue: false },
				reminder: { type: 'string', description: '备注', allowEmptyValue: false },
				status: {
					type: 'integer',
					format: 'int32',
					description: '状态 0:待审核 1:审核通过 2:审核拒绝 3:提币中 4: 提现失败 8:提现/币成功 9:提币失败',
					allowEmptyValue: false
				},
				targetAmount: { type: 'number', description: '实际到账', allowEmptyValue: false },
				toAddress: { type: 'string', description: '接收地址', allowEmptyValue: false },
				txHash: { type: 'string', description: '交易hash', allowEmptyValue: false },
				userAccount: { type: 'string', description: '会员名', allowEmptyValue: false },
				userId: { type: 'integer', format: 'int64', description: '用户编号', allowEmptyValue: false },
				userLabel: { type: 'string', description: '用户标签，多个逗号隔开', allowEmptyValue: false },
				userType: { type: 'integer', format: 'int32', description: '会员类型', allowEmptyValue: false },
				withdrawNo: { type: 'string', description: '提币单号', allowEmptyValue: false },
				withdrawRetry: {
					type: 'boolean',
					example: false,
					description: '是否能重试发起提现支付',
					allowEmptyValue: false
				},
				withdrawType: {
					type: 'integer',
					format: 'int32',
					description: '提币类型 1:外部提币 2:内部提币 3：系统提现',
					allowEmptyValue: false
				},
				withdrawWay: {
					type: 'integer',
					format: 'int32',
					description: '提现方式，1：线上，2：线下',
					allowEmptyValue: false
				}
			},
			title: 'WithdrawResp'
		},
		WithdrawSummaryResp: {
			type: 'object',
			properties: {
				withdrawAmount: { type: 'number', description: '总提款', allowEmptyValue: false },
				withdrawDigitalAmount: { type: 'number', description: 'USDT提款', allowEmptyValue: false },
				withdrawLegalAmount: { type: 'number', description: '法币提款', allowEmptyValue: false }
			},
			title: 'WithdrawSummaryResp'
		},
		boss端查询用户彩金记录参数对象: {
			type: 'object',
			properties: {
				activityType: {
					type: 'string',
					description: '活动类型',
					allowEmptyValue: false,
					enum: ['FIRST_DEPOSIT', 'REGISTER', 'SIGN_IN', 'SYSTEM_ALLOCATION']
				},
				end: { type: 'string', format: 'date-time', description: '到账时间', allowEmptyValue: false },
				pageIndex: {
					type: 'integer',
					format: 'int32',
					description: '页码 从1开始计数',
					allowEmptyValue: false,
					minimum: 1.0,
					exclusiveMinimum: false
				},
				pageSize: {
					type: 'integer',
					format: 'int32',
					description: '页容 区间[1, 1000]',
					allowEmptyValue: false,
					minimum: 0.0,
					maximum: 9.223372036854776e18,
					exclusiveMinimum: false,
					exclusiveMaximum: false
				},
				proxyUid: { type: 'integer', format: 'int64', description: '包网商id', allowEmptyValue: false },
				start: { type: 'string', format: 'date-time', description: '到账时间', allowEmptyValue: false },
				userId: { type: 'integer', format: 'int64', description: '用户id', allowEmptyValue: false }
			},
			title: 'boss端查询用户彩金记录参数对象'
		},
		修改用户封禁状态: {
			type: 'object',
			properties: {
				forbidden: { type: 'boolean', example: false, description: '封锁：true，解封：false', allowEmptyValue: false },
				userId: { type: 'integer', format: 'int64', description: '用户id', allowEmptyValue: false }
			},
			title: '修改用户封禁状态'
		},
		分红配置: {
			type: 'object',
			properties: {
				commissionLimit: { type: 'number', description: '占成模式比例上限', allowEmptyValue: false },
				createTime: { type: 'string', format: 'date-time' },
				id: { type: 'integer', format: 'int64' },
				proxyUid: { type: 'integer', format: 'int64', description: '包网商id', allowEmptyValue: false },
				rebateLimit: { type: 'number', description: '返佣模式比例上限', allowEmptyValue: false },
				settlementType: {
					type: 'string',
					description: '结算周期,REAL_TIME,DAY,WEEK,HALF_MONTH,MONTH',
					allowEmptyValue: false,
					enum: ['REAL_TIME', 'DAY', 'WEEK', 'HALF_MONTH', 'MONTH']
				},
				updateTime: { type: 'string', format: 'date-time' }
			},
			title: '分红配置'
		},
		分红配置信息: {
			type: 'object',
			properties: {
				commissionLimit: {
					type: 'number',
					description: '占成模式比例上限',
					allowEmptyValue: false,
					minimum: 0,
					maximum: 0.9999,
					exclusiveMinimum: false,
					exclusiveMaximum: false
				},
				id: { type: 'integer', format: 'int64', description: '分红配置id;新增时为空', allowEmptyValue: false },
				proxyUid: { type: 'integer', format: 'int64', description: '包网商id', allowEmptyValue: false },
				rebateLimit: {
					type: 'number',
					description: '返佣模式比例上限',
					allowEmptyValue: false,
					minimum: 0,
					maximum: 0.9999,
					exclusiveMinimum: false,
					exclusiveMaximum: false
				},
				settlementType: {
					type: 'string',
					description: '结算周期,REAL_TIME,DAY,WEEK,HALF_MONTH,MONTH',
					allowEmptyValue: false,
					enum: ['REAL_TIME', 'DAY', 'WEEK', 'HALF_MONTH', 'MONTH']
				}
			},
			title: '分红配置信息'
		},
		分红配置明细: {
			type: 'object',
			properties: {
				commissionLimit: { type: 'number', description: '分成上线', allowEmptyValue: false },
				createTIme: { type: 'string', format: 'date-time' },
				factoryName: { type: 'string', description: '游戏渠道', allowEmptyValue: false },
				gameChannelTypeId: { type: 'integer', format: 'int64', description: '渠道类型id', allowEmptyValue: false },
				id: { type: 'integer', format: 'int64' },
				proxyUid: { type: 'integer', format: 'int64', description: '包网商id', allowEmptyValue: false },
				rebateLimit: { type: 'number', description: '返佣上线', allowEmptyValue: false },
				typeName: { type: 'string', description: '类型', allowEmptyValue: false },
				updateTime: { type: 'string', format: 'date-time' }
			},
			title: '分红配置明细'
		},
		分红配置详情: {
			type: 'object',
			properties: {
				bonusCnf: { $ref: '#/definitions/分红配置' },
				items: { type: 'array', items: { $ref: '#/definitions/分红配置明细' } }
			},
			title: '分红配置详情'
		},
		字段名属性请求: {
			type: 'object',
			required: ['propCode', 'propDesc', 'propLen', 'propName', 'propNameEn', 'propNamePh', 'propNameTh', 'propNameVn', 'propRequired'],
			properties: {
				propCode: { type: 'string', description: '字段编码', allowEmptyValue: false },
				propDesc: { type: 'string', description: '说明文案', allowEmptyValue: false },
				propLen: { type: 'integer', format: 'int32', description: '长度限制', allowEmptyValue: false },
				propName: { type: 'string', description: '字段名', allowEmptyValue: false },
				propNameEn: { type: 'string', description: '字段名英文名称', allowEmptyValue: false },
				propNamePh: { type: 'string', description: '字段名菲律宾名称', allowEmptyValue: false },
				propNameTh: { type: 'string', description: '字段名泰语名称', allowEmptyValue: false },
				propNameVn: { type: 'string', description: '字段名越南名称', allowEmptyValue: false },
				propRequired: { type: 'integer', format: 'int32', description: '是否必填 1:是 0:否', allowEmptyValue: false }
			},
			title: '字段名属性请求'
		},
		币种更新请求信息: {
			type: 'object',
			required: ['code', 'country', 'name', 'rate', 'status'],
			properties: {
				code: { type: 'string', description: '币种代码', allowEmptyValue: false },
				country: { type: 'string', description: '汇率', allowEmptyValue: false },
				name: { type: 'string', description: '币种名称', allowEmptyValue: false },
				rate: { type: 'number', description: '汇率', allowEmptyValue: false, minimum: 0.0, exclusiveMinimum: false },
				status: { type: 'integer', format: 'int32', description: '状态：1 可用；0 不可用', allowEmptyValue: false }
			},
			title: '币种更新请求信息'
		},
		币种查询返回信息: {
			type: 'object',
			properties: {
				code: { type: 'string', description: '币种代码', allowEmptyValue: false },
				country: { type: 'string', description: '国家', allowEmptyValue: false },
				name: { type: 'string', description: '币种名称', allowEmptyValue: false },
				rate: { type: 'number', description: '汇率', allowEmptyValue: false },
				status: { type: 'integer', format: 'int32', description: '状态 1:可用 0:不可用', allowEmptyValue: false },
				type: { type: 'integer', format: 'int32', description: '币种类型 1数字货币 2法币', allowEmptyValue: false },
				updateTime: { type: 'string', format: 'date-time', description: '更新时间', allowEmptyValue: false }
			},
			title: '币种查询返回信息'
		},
		彩金统计数据Boss值对象: {
			type: 'object',
			properties: {
				registerAmount: { type: 'number', description: '注册彩金总发放数', allowEmptyValue: false },
				signInAmount: { type: 'number', description: '签到彩金总发放数', allowEmptyValue: false },
				systemAllocateAmount: { type: 'number', description: '红包发放数量', allowEmptyValue: false },
				totalAmount: { type: 'number', description: '彩金总发放数', allowEmptyValue: false }
			},
			title: '彩金统计数据Boss值对象'
		},
		用户彩金发放记录: {
			type: 'object',
			properties: {
				agentName: { type: 'string', description: '上级代理', allowEmptyValue: false },
				agentUid: { type: 'integer', format: 'int64', description: '代理商id', allowEmptyValue: false },
				explainReview: { type: 'string', description: '说明(原因)', allowEmptyValue: false },
				id: { type: 'integer', format: 'int64' },
				proxyName: { type: 'string', description: '归属包网商', allowEmptyValue: false },
				proxyUid: { type: 'integer', format: 'int64', description: '包网商id', allowEmptyValue: false },
				receivedTime: { type: 'string', format: 'date-time', description: '到账时间', allowEmptyValue: false },
				recordNo: { type: 'string', description: '单号', allowEmptyValue: false },
				remark: { type: 'string', description: '备注', allowEmptyValue: false },
				score: { type: 'number', description: '分数', allowEmptyValue: false },
				status: { type: 'integer', format: 'int32', description: '状态：1有效，0无效', allowEmptyValue: false },
				type: {
					type: 'string',
					description: '来源类型',
					allowEmptyValue: false,
					enum: ['FIRST_DEPOSIT', 'REGISTER', 'SIGN_IN', 'SYSTEM_ALLOCATION']
				},
				typeName: { type: 'string' },
				userId: { type: 'integer', format: 'int64', description: '用户id', allowEmptyValue: false },
				userName: { type: 'string', description: '会员名', allowEmptyValue: false },
				userType: {
					type: 'integer',
					format: 'int32',
					description: '会员类型，1:普通会元,4:代理会员',
					allowEmptyValue: false
				},
				winningsAmount: { type: 'number', description: '彩金发放数量', allowEmptyValue: false }
			},
			title: '用户彩金发放记录'
		},
		编辑分红配置参数对象: {
			type: 'object',
			properties: {
				bonusCnf: { description: '分红配置信息', allowEmptyValue: false, $ref: '#/definitions/分红配置信息' },
				items: {
					type: 'array',
					description: '分红配置明细',
					allowEmptyValue: false,
					items: { $ref: '#/definitions/分红配置明细' }
				}
			},
			title: '编辑分红配置参数对象'
		},
		获取分红配置参数对象: {
			type: 'object',
			properties: { proxyUid: { type: 'integer', format: 'int64', description: '包网商id', allowEmptyValue: false } },
			title: '获取分红配置参数对象'
		},
		角色响应信息: {
			type: 'object',
			properties: {
				createTime: { type: 'string', format: 'date-time', description: '创建时间', allowEmptyValue: false },
				locked: { type: 'string', description: '锁定标志 1锁定 0激活', allowEmptyValue: false },
				remark: { type: 'string', description: '备注(最长50)', allowEmptyValue: false },
				roleId: { type: 'string', description: '角色编号', allowEmptyValue: false },
				roleName: { type: 'string', description: '角色名称(最长50)', allowEmptyValue: false },
				roleType: {
					type: 'string',
					description: '角色类型(1:业务角色;2:管理角色)',
					allowEmptyValue: false,
					pattern: '[12]'
				},
				updateTime: { type: 'string', format: 'date-time', description: '修改时间', allowEmptyValue: false }
			},
			title: '角色响应信息',
			description: '角色响应信息'
		},
		返水方案信息: {
			type: 'object',
			properties: {
				calculationMethod: {
					type: 'integer',
					format: 'int32',
					description: '计算方式：1阶梯式',
					allowEmptyValue: false
				},
				currency: { type: 'string', description: '币种', allowEmptyValue: false },
				distributionMethod: {
					type: 'integer',
					format: 'int32',
					description: '发放方式：1手动',
					allowEmptyValue: false
				},
				id: { type: 'integer', format: 'int64', description: '方案编号', allowEmptyValue: false },
				planName: { type: 'string', description: '方案名称', allowEmptyValue: false },
				proxyId: { type: 'integer', format: 'int64', description: '包网商编号', allowEmptyValue: false },
				proxyName: { type: 'string', description: '包网商名称', allowEmptyValue: false },
				rebateUpper: { type: 'number', description: '返水流水上限', allowEmptyValue: false },
				status: { type: 'integer', format: 'int32', description: '状态：1可用，0禁用', allowEmptyValue: false },
				updateTime: { type: 'string', format: 'date-time', description: '更新时间', allowEmptyValue: false },
				vipLevels: { type: 'string', description: 'vip等级id集合(用,分隔)', allowEmptyValue: false },
				withdrawalMultiple: { type: 'number', description: '提现倍数', allowEmptyValue: false }
			},
			title: '返水方案信息'
		},
		返水方案明细信息: {
			type: 'object',
			properties: {
				factoryCode: { type: 'string', description: '厂商', allowEmptyValue: false },
				gameTypeId: { type: 'integer', format: 'int64', description: '游戏类型id', allowEmptyValue: false },
				gameTypeName: { type: 'string', description: '游戏类型名称', allowEmptyValue: false },
				id: { type: 'integer', format: 'int64', description: '明细编号', allowEmptyValue: false },
				level: { type: 'integer', format: 'int32', description: '等级', allowEmptyValue: false },
				rebateRatio: { type: 'number', description: '返水比例', allowEmptyValue: false },
				validAmountLower: { type: 'number', description: '有效流水下限', allowEmptyValue: false }
			},
			title: '返水方案明细信息'
		},
		银行属性请求: {
			type: 'object',
			required: [
				'bankName',
				'bankNameEn',
				'bankNamePh',
				'bankNameTh',
				'bankNameVn',
				'propCode',
				'propDesc',
				'propLen',
				'propName',
				'propNameEn',
				'propNamePh',
				'propNameTh',
				'propNameVn',
				'propRequired',
				'props'
			],
			properties: {
				bankName: { type: 'string', description: '银行名称', allowEmptyValue: false },
				bankNameEn: { type: 'string', description: '银行英文名称', allowEmptyValue: false },
				bankNamePh: { type: 'string', description: '银行菲律宾名称', allowEmptyValue: false },
				bankNameTh: { type: 'string', description: '银行泰语名称', allowEmptyValue: false },
				bankNameVn: { type: 'string', description: '银行越南名称', allowEmptyValue: false },
				propCode: { type: 'string', description: '字段编码', allowEmptyValue: false },
				propDesc: { type: 'string', description: '说明文案', allowEmptyValue: false },
				propLen: { type: 'integer', format: 'int32', description: '长度限制', allowEmptyValue: false },
				propName: { type: 'string', description: '字段名', allowEmptyValue: false },
				propNameEn: { type: 'string', description: '字段名英文名称', allowEmptyValue: false },
				propNamePh: { type: 'string', description: '字段名菲律宾名称', allowEmptyValue: false },
				propNameTh: { type: 'string', description: '字段名泰语名称', allowEmptyValue: false },
				propNameVn: { type: 'string', description: '字段名越南名称', allowEmptyValue: false },
				propRequired: { type: 'integer', format: 'int32', description: '是否必填 1:是 0:否', allowEmptyValue: false },
				props: {
					type: 'array',
					description: '银行属性',
					allowEmptyValue: false,
					items: { $ref: '#/definitions/字段名属性请求' }
				},
				updateTime: { type: 'string', format: 'date-time', description: '更新时间', allowEmptyValue: false }
			},
			title: '银行属性请求'
		}
	}
};
