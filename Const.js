var Const = {};
// 如果你用的是 mlab 数据库， 改成 true
Const.useMlab = false;
//改成你自己的机器人 Token
//Live
// Const.botToken = "1297296612";
//Debug
Const.botToken = "1297296612";
Const.myId = parseInt(Const.botToken.split(":")[0]);
Const.myName = "k1tten_bot";
Const.myName = Const.myName.toLowerCase();

//以下是峰哥的数据库服务器，可以工作，可以用，没有数据库的可以保留
Const.restheartUrl = "https://r1.dengnz.com/user2/";
Const.restheartUser = "user2";
Const.restheartPass = "jrCtNft6TbMYZxWe";


Const.memberColl = "members";
Const.contextColl = "context";
Const.logColl = "logs";
Const.groupSettingsColl = "group-settings";
Const.toTelegram = "to-telegram";
Const.fromTelegram = "from-telegram";

Const.channelId = "@fengshare";
Const.myAtName = "@" + Const.myName;
