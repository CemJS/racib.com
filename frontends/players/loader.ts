import allUsers from '@json/allUsers'

export const loader = function () {

  if (this.Variable.DataUrl[2]) {
    this.Static.record = allUsers[this.Variable.DataUrl[2]]
  }

  this.Static.activeTab = '';
  this.Static.videoReady = false;
}