export const BASE_URL = '/ipark-service-center/activity';

export const Type_URL = '/ipark-service-center/activityType';

// 活动管理
// 列表
export const getActivityListUrl = `${BASE_URL}/list`;
// 删除
export const deleteActivityUrl = `${BASE_URL}/batch/deleteStatus`;
// 详情
export const getActivityInfoUrl = `${BASE_URL}/detail`;
// 编辑
export const editActivityUrl = `${BASE_URL}/save/draft`;
// 发布
export const publishActivityUrl = `${BASE_URL}/publish`;
// 撤回
export const withdrawActivityUrl = `${BASE_URL}/withdraw`;

// 活动类型
// 列表
export const getActivityTypeListUrl = `${Type_URL}/list`;
// 删除
export const deleteActivityTypeUrl = `${Type_URL}/batch/deleteStatus`;
// 编辑
export const editActivityTypeUrl = `${Type_URL}/save`;
