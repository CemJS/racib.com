export const clickAny = function (e) {
    if (!this.Ref.filterCategory.contains(e.target) && this.Static.categoryStatus == 'open') {
        this.Static.categoryStatus = 'close';
        this.Ref.filterCategory.classList.remove('filter_item_active');
    }
    return
}
