const listener = {
    "start": function () {
    },
    "finish": function () {
        if (!this.Static.callGallery) {
            this.fn("test", this.Ref.gallery, {
                margin: 10
            })
        }
    }
}

export { listener }