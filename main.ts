radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == id) {
        tag = true
        basic.showIcon(IconNames.Duck)
    } else {
        tag = false
    }
})
input.onGesture(Gesture.Shake, function () {
    if (tag) {
        // 寻找下一个玩家
        nextPlayers = randint(1, players)
        // 设置循环防止随机到当前玩家
        while (nextPlayers == id) {
            nextPlayers = randint(1, players)
        }
        tag = false
        basic.clearScreen()
        // 发送下一个玩家
        radio.sendNumber(nextPlayers)
        basic.showNumber(id)
    }
})
let tag = false
let nextPlayers = 0
let id = 0
let players = 0
radio.setGroup(78)
players = 3
id = 2
basic.showNumber(id)
if (id == 1) {
    // 1号玩家，随机开始鸭子在那个玩家手上
    while (!(input.buttonIsPressed(Button.A))) {
        // 初始化玩家
        nextPlayers = randint(1, players)
    }
    if (nextPlayers == 1) {
        tag = true
        basic.showIcon(IconNames.Duck)
    } else {
        tag = false
        radio.sendNumber(nextPlayers)
    }
} else {
    tag = false
}
