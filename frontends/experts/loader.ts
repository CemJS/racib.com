import allUsers from '@json/allUsers'

export const loader = function () {

  if (this.Variable.DataUrl[2]) {
    let tmpPlayers = allUsers.filter(item => item.name == decodeURI(this.Variable.DataUrl[2]))
    if (tmpPlayers.length != 0) {
      this.Static.record = tmpPlayers[0]
    } else {
      this.Static.record = allUsers[0]
    }
  }

}