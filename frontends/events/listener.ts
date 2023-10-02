// export const clickAny = function (e) {
//     if (this.Ref.filterCategory && !this.Ref.filterCategory.contains(e.target) && this.Static.categoryStatus == 'open') {
//         this.Static.categoryStatus = 'close';
//         this.Ref.filterCategory.classList.remove('filter_item_active');
//     }
//     return
// }
export const clickAny = function (e) {
    if (this.Ref.filterContent && !this.Ref.filterContent.contains(e.target) && !this.Ref.filterBtn.contains(e.target) && this.Static.filterShow) {
        this.Ref.filterContent.classList.remove('filterNew_content_active');
        this.Static.filterShow = false;
        this.init();
    }
    return
}
