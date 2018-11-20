
/**
 * 切换详情
 * @param {object} that 点击的元素
 */
function toggleDetail(that) {
    $(that).parent().next().slideToggle()
}

/**
 * 更多项目
 * @param {object} that 点击的元素
 */
function moreProject(that) {
    $(that).hide();
    $(that).parent().nextAll().slideDown();
}
