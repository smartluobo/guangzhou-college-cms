import vue from 'vue';
import config from './config'
var requestUrl = config.isDevEnv?config.devUrl:config.onlineUrl
console.log('requestUrl', requestUrl)
const userApi = {
  addNewUser: requestUrl+'guangzhou-college/cms/system/saveSysUser',
  deleteNewUser: requestUrl+'guangzhou-college/cms/system/deleteSysUser',
  getUserInfoById: requestUrl+'guangzhou-college/cms/system/getSysUserById',
  updateNewUser: requestUrl+'guangzhou-college/cms/system/updateSysUser',
  fetchNewUserInfo:requestUrl+'guangzhou-college/cms/system/getUserInfoByPage',
  checkUserName: requestUrl + 'guangzhou-college/cms/system/checkLoginName',
  getStoreByUser: requestUrl + 'guangzhou-college/cms/store/getStoreByUser',
  getCurrentUserInfo: requestUrl + 'guangzhou-college/cms/system/getCurrentUserInfo'
}

const freeUserApi = {
  getApiUser: requestUrl+'guangzhou-college/cms/user/apiUser/list',
  getFreeUserList: requestUrl+'guangzhou-college/cms/noPaymentUser/list',
  deleteFreeUser: requestUrl+'guangzhou-college/cms/noPaymentUser/delete',
  saveFreeUser: requestUrl+'guangzhou-college/cms/noPaymentUser/add',
}

const menuApi = {
  addMenu: requestUrl+'guangzhou-college/cms/system/saveSysMenu',
  deleteMenu: requestUrl+'guangzhou-college/cms/system/deleteSysMenu',
  getMenuInfoById: requestUrl+'guangzhou-college/cms/system/getSysMenuById',
  updateMenu: requestUrl+'guangzhou-college/cms/system/updateSysMenu',
  fetchMenuList:requestUrl+'guangzhou-college/cms/system/getAllSysMenu?menuId=0',
  // /system/getSysMenuTreeByUser ??? 展示用
  getSysMenuTreeByUser: requestUrl+'guangzhou-college/cms/system/getSysMenuTreeByUser',
  getMenuTree: requestUrl+'guangzhou-college/cms/system/getSysMenuTree',
}

const roleApi = {
  addRole: requestUrl+'guangzhou-college/cms/system/saveSysRole',
  saveRole: requestUrl+'guangzhou-college/cms/system/updateSysRole',
  updateRole: requestUrl+'guangzhou-college/cms/system/updateSysRole',
  delRole: requestUrl+'guangzhou-college/cms/system/deleteSysRole',
  getRoleInfoById: requestUrl+'guangzhou-college/cms/system/getSysRoleById',
  fetchRoleList:requestUrl+'guangzhou-college/cms/system/getRoleInfoByPage',
  checkRoleName: requestUrl+'guangzhou-college/cms/system/checkRoleName',
  getAllRoleList: requestUrl+'guangzhou-college/cms/system/getAllRoleList',
  getRoleShowInfo: requestUrl+'guangzhou-college/cms/system/getRoleShowInfo',
}

const apis = {
    baseUrl: requestUrl,
    loginF: requestUrl + 'guangzhou-college/cms/system/login',
    isLogin: requestUrl + 'guangzhou-college/cms/system/isLogin',
    tologout: requestUrl + 'guangzhou-college/cms/system/logout',
    getUserListFS: requestUrl+'guangzhou-college/cms/user/list',
    addUser: requestUrl+'guangzhou-college/cms/user/add',
    deleteUser: requestUrl+'guangzhou-college/cms/user/delete',
    updateUser: requestUrl+'guangzhou-college/cms/user/update',
    getMenuListFS: requestUrl + 'guangzhou-college/cms/menu/list',
    getGoodListFS: requestUrl + 'guangzhou-college/cms/goods/list',
    getGoodsByStore: requestUrl + 'guangzhou-college/cms/goods/findGoodsByStore',
    addGoods: requestUrl + 'guangzhou-college/cms/goods/add',
    deleteGoods: requestUrl + 'guangzhou-college/cms/goods/delete',
    updateGoods: requestUrl + 'guangzhou-college/cms/goods/update',
    getOrderListFS: requestUrl+'guangzhou-college/cms/order/orderList',
    updateOrderStatus: requestUrl + 'guangzhou-college/cms/order/updateOrder/',
    getOrderDetail: requestUrl + 'guangzhou-college/cms/order/findOrderDetail',
    toPrintingOrder: requestUrl + 'guangzhou-college/cms/order/orderPrint',
    toPrintingDesc: requestUrl + 'guangzhou-college/cms/order/orderItemPrint',
    getShopListFS: requestUrl+'guangzhou-college/cms/store/list',
    copyShopRecord: requestUrl+'guangzhou-college/cms/store/copyStoreGoods',
    getSKUTypeList: requestUrl+'guangzhou-college/cms/skuType/list',
    getSKUDesList: requestUrl+'guangzhou-college/cms/skuDetail/list',
    getActivityListFS: requestUrl+'guangzhou-college/cms/activity/list',
    addActivity: requestUrl+'guangzhou-college/cms/activity/add',
    updateActivity: requestUrl+'guangzhou-college/cms/activity/update',
    deleteActivity: requestUrl+'guangzhou-college/cms/activity/delete',
    getCouponsListByActivityFS: requestUrl+'guangzhou-college/cms/activity/couponsList',
    addActivityCoupons: requestUrl+'guangzhou-college/cms/activity/addCoupons',
    deleteActivityCoupons: requestUrl+'guangzhou-college/cms/activity/deleteCoupons',
    getCategoryListFS: requestUrl+'guangzhou-college/cms/category/list',
    getHomeRotationFS: requestUrl+'guangzhou-college/cms/carousel/list',
    addHomeRotatio: requestUrl+'guangzhou-college/cms/carousel/add',
    deleteHomeRotation: requestUrl+'guangzhou-college/cms/carousel/delete',
    getCouponFS: requestUrl+'guangzhou-college/cms/coupons/list',
    addCoupon: requestUrl + 'guangzhou-college/cms/coupons/add',
    deleteCoupon: requestUrl + 'guangzhou-college/cms/coupons/delete',
    updateCoupon: requestUrl+'guangzhou-college/cms/coupons/update',
    getShopStorageListFSNew: requestUrl + 'guangzhou-college/cms/inventory/list',
    getShopStorageListFS: requestUrl + 'guangzhou-college/cms/inventory/list',
    initStorage: requestUrl + 'guangzhou-college/cms/inventory/init',
    deleteStorage: requestUrl + 'guangzhou-college/cms/inventory/delete',
    addStorage: requestUrl + 'guangzhou-college/cms/inventory/add',
    updateStorage: requestUrl + 'guangzhou-college/cms/inventory/update',
    initGoods: requestUrl + 'guangzhou-college/cms/inventory/initStoreGoods',
    clearStorage: requestUrl + 'guangzhou-college/cms/inventory/clear',
    getPrinterListFS: requestUrl + 'guangzhou-college/cms/printer/list',
    addPrinter: requestUrl + 'guangzhou-college/cms/printer/add',
    deletePrinter: requestUrl + 'guangzhou-college/cms/printer/delete',
    updatePrinter: requestUrl + 'guangzhou-college/cms/printer/update',
    getUserList: requestUrl + 'guangzhou-college/cms/user/apiUser/list',
    bandUserToCompany: requestUrl + 'guangzhou-college/cms/user/apiUser/bindCompany',
    getCompanyList: requestUrl + 'guangzhou-college/cms/company/list',
    addCompany: requestUrl + 'guangzhou-college/cms/company/add',
    toDeleteCompany: requestUrl + 'guangzhou-college/cms/company/delete',
    getExperienceList: requestUrl + 'guangzhou-college/cms/coupons/experienceList',
    updateExperience: requestUrl + 'guangzhou-college/cms/coupons/updateExperience',
    turnoverStatistical: requestUrl + 'guangzhou-college/cms/order/turnoverStatistical',
    orderStatistical: requestUrl + 'guangzhou-college/cms/order/orderStatistical',
    getRecommendGoods: requestUrl + 'guangzhou-college/cms/recommend/list',
    addRecommendGoods: requestUrl + 'guangzhou-college/cms/recommend/add',
    deleteRecommendGoods: requestUrl + 'guangzhou-college/cms/recommend/delete'
}

const mixinObj = {
    data () {
        return {
            apis,
            userApi,
            menuApi,
            roleApi,
        }
    }
}

vue.mixin( mixinObj );

export default {...apis, ...userApi, ...menuApi, ...roleApi, ...freeUserApi};
