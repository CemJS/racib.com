import allUsers from '@json/allUsers'
import admins from '@json/administration'
import directorate from '@json/directorate'
import observers from '@json/observers'
import experts from '@json/experts'

export const loader = function () {

  if (this.Variable.DataUrl[2]) {
    let tmp = null
    if (this.Variable.DataUrl[1] == "administration") {
      tmp = admins[this.Variable.DataUrl[2]]
    } else if (this.Variable.DataUrl[1] == "directorate") {
      tmp = directorate[this.Variable.DataUrl[2]]
    } else if (this.Variable.DataUrl[1] == "observers") {
      tmp = observers[this.Variable.DataUrl[2]]
    } else if (this.Variable.DataUrl[1] == "experts") {
      tmp = experts[this.Variable.DataUrl[2]]
    } else {
      this.Static.record = allUsers[this.Variable.DataUrl[2]]
    }

    if (tmp != null) {
      let tmpPlayers = allUsers.filter(item => item.name == tmp.name)
      if (tmpPlayers.length != 0) {
        this.Static.record = tmpPlayers[0]
      } else {
        this.Static.record = allUsers[0]
      }

    }
  }

  this.Static.activeTab = '';
  this.Static.videoReady = false;
}