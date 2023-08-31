const listener = {
    "clickAny": function (e) {
        if (!this.Ref.sidebar.contains(e.target) && !this.Ref.burger.contains(e.target)) {
            this.Ref.sidebar.classList.add('sidebar_close');
            this.Variable.openSidebar = false;
        }
        this.Fn.initAll();
    }
}

export { listener }