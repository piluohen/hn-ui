export const BASE_URL = '/ipark-base/serviceOrg';

export const Type_URL = '/ipark-base/serviceOrgLevel';

// 活动管理
// 列表
export const getCompanyListUrl = `${BASE_URL}/list`;
// 删除
export const deleteCompanyUrl = `${BASE_URL}/batch/delete`;
// 初始化
export const getCompanyInitUrl = `${BASE_URL}/initSave`;
// 详情
export const getCompanyInfoUrl = `${BASE_URL}/detail`;
// 编辑
export const editCompanyUrl = `${BASE_URL}/save`;
// 上架
export const publishCompanyUrl = `${BASE_URL}/publish`;
// 下架
export const dispublishCompanyUrl = `${BASE_URL}/dispublish`;
// 导出
export const exportCompanyUrl = `${BASE_URL}/excel/export`;
// 导入
export const importCompanyUrl = `${BASE_URL}/updateStatus`;

// 活动类型
// 列表
export const getCompanyTypeListUrl = `${Type_URL}/treeList`;
// 一级列表
export const getCompanyTypeOneListUrl = `${Type_URL}/levelOneList`;
// 二级列表
export const getCompanyTypeTwoListUrl = `${Type_URL}/levelTwoList`;
// 删除
export const deleteCompanyTypeUrl = `${Type_URL}/delete`;
// 编辑一级列表
export const editCompanyTypeUrl = `${Type_URL}/save`;
// 编辑二级列表
export const editCompanyTypeTwoUrl = `${Type_URL}/saveLevelTwo`;
