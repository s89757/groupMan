angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})
.factory("oneLists",function(){
	var gather_KP=[
//	好物
			[{id:"1000",Ophone:"img/one/haowu (10).jpg",Odescribe:"老司机的神秘武器",Oname:"好物"},
			{id:"1001",Ophone:"img/one/haowu (1).jpg",Odescribe:"迷人的包装让你有意未尽",Oname:"好物"},
			{id:"1002",Ophone:"img/one/haowu (2).jpg",Odescribe:"我有一个梦想",Oname:"好物"},
			{id:"1003",Ophone:"img/one/haowu (3).jpg",Odescribe:"我有一个梦想",Oname:"好物"},
			{id:"1004",Ophone:"img/one/haowu (4).jpg",Odescribe:"我有一个梦想",Oname:"好物"},
			{id:"1005",Ophone:"img/one/haowu (5).jpg",Odescribe:"我有一个梦想",Oname:"好物"},
			{id:"1006",Ophone:"img/one/haowu (6).jpg",Odescribe:"我有一个梦想",Oname:"好物"},
			{id:"1007",Ophone:"img/one/haowu (7).jpg",Odescribe:"我有一个梦想",Oname:"好物"},
			{id:"1008",Ophone:"img/one/haowu (8).jpg",Odescribe:"我有一个梦想",Oname:"好物"},
			{id:"1009",Ophone:"img/one/haowu (9).jpg",Odescribe:"我有一个梦想",Oname:"好物"}],
//	搭配
		[{id:"1010",Ophone:"img/one/dapei (9).jpg",Odescribe:"MOKEYWO|禁欲系列绅士风度",Oname:"搭配"},
			{id:"1011",Ophone:"img/one/dapei (8).jpg",Odescribe:"MOKEYWO|夏天尾巴撩妹神器",Oname:"搭配"},
			{id:"1012",Ophone:"img/one/dapei (2).jpg",Odescribe:"MOKEYWO|秋冬型男搭配",Oname:"搭配"},
			{id:"1013",Ophone:"img/one/dapei (3).jpg",Odescribe:"我有一个梦想",Oname:"搭配"},
			{id:"1014",Ophone:"img/one/dapei (4).jpg",Odescribe:"我有一个梦想",Oname:"搭配"},
			{id:"1015",Ophone:"img/one/dapei (5).jpg",Odescribe:"我有一个梦想",Oname:"搭配"},
			{id:"1016",Ophone:"img/one/dapei (6).jpg",Odescribe:"我有一个梦想",Oname:"搭配"},
			{id:"1017",Ophone:"img/one/dapei (7).jpg",Odescribe:"我有一个梦想",Oname:"搭配"},
			{id:"1018",Ophone:"img/one/dapei (1).jpg",Odescribe:"我有一个梦想",Oname:"搭配"},
			{id:"1019",Ophone:"img/one/dapei (10).jpg",Odescribe:"我有一个梦想",Oname:"搭配"}],
//		时装
		[{id:"1020",Ophone:"img/one/shizhuang (10).jpg",Odescribe:"MOKEYWO|秋冬型男搭配",Oname:"时装"},
			{id:"1021",Ophone:"img/one/shizhuang (1).jpg",Odescribe:"MOKEYWO|原味梦想",Oname:"时装"},
			{id:"1022",Ophone:"img/one/shizhuang (2).jpg",Odescribe:"我有一个梦想",Oname:"时装"},
			{id:"1023",Ophone:"img/one/shizhuang (3).jpg",Odescribe:"我有一个梦想",Oname:"时装"},
			{id:"1024",Ophone:"img/one/shizhuang (4).jpg",Odescribe:"我有一个梦想",Oname:"时装"},
			{id:"1025",Ophone:"img/one/shizhuang (5).jpg",Odescribe:"我有一个梦想",Oname:"时装"},
			{id:"1026",Ophone:"img/one/shizhuang (6).jpg",Odescribe:"我有一个梦想",Oname:"时装"},
			{id:"1027",Ophone:"img/one/shizhuang (7).jpg",Odescribe:"我有一个梦想",Oname:"时装"},
			{id:"1028",Ophone:"img/one/shizhuang (8).jpg",Odescribe:"我有一个梦想",Oname:"时装"},
			{id:"1029",Ophone:"img/one/shizhuang (9).jpg",Odescribe:"我有一个梦想",Oname:"时装"}],
//		腕表
		[{id:"1030",Ophone:"img/one/wanbiao (10).jpg",Odescribe:"最大牌|卡西欧电子表，为什么会有那么多的脑残粉？",Oname:"腕表"},
			{id:"1031",Ophone:"img/one/wanbiao (1).jpg",Odescribe:"手握大权的元首们，手腕上带的都是什么名表？",Oname:"腕表"},
			{id:"1032",Ophone:"img/one/wanbiao (2).jpg",Odescribe:"我有一个梦想",Oname:"腕表"},
			{id:"1033",Ophone:"img/one/wanbiao (3).jpg",Odescribe:"我有一个梦想",Oname:"腕表"},
			{id:"1034",Ophone:"img/one/wanbiao (4).jpg",Odescribe:"我有一个梦想",Oname:"腕表"},
			{id:"1035",Ophone:"img/one/wanbiao (5).jpg",Odescribe:"我有一个梦想",Oname:"腕表"},
			{id:"1036",Ophone:"img/one/wanbiao (6).jpg",Odescribe:"我有一个梦想",Oname:"腕表"},
			{id:"1037",Ophone:"img/one/wanbiao (7).jpg",Odescribe:"我有一个梦想",Oname:"腕表"},
			{id:"1038",Ophone:"img/one/wanbiao (8).jpg",Odescribe:"我有一个梦想",Oname:"腕表"},
			{id:"1039",Ophone:"img/one/wanbiao (9).jpg",Odescribe:"我有一个梦想",Oname:"腕表"}],
//		生活
[{id:"1040",Ophone:"img/one/shenghuo (10).jpg",Odescribe:"跟着博主搭配|有型耐看",Oname:"生活"},
			{id:"1041",Ophone:"img/one/shenghuo (1).jpg",Odescribe:"T恤|不一样的西装格调",Oname:"生活"},
			{id:"1042",Ophone:"img/one/shenghuo (2).jpg",Odescribe:"我有一个梦想",Oname:"生活"},
			{id:"1043",Ophone:"img/one/shenghuo (3).jpg",Odescribe:"我有一个梦想",Oname:"生活"},
			{id:"1044",Ophone:"img/one/shenghuo (4).jpg",Odescribe:"我有一个梦想",Oname:"生活"},
			{id:"1045",Ophone:"img/one/shenghuo (5).jpg",Odescribe:"我有一个梦想",Oname:"生活"},
			{id:"1046",Ophone:"img/one/shenghuo (6).jpg",Odescribe:"我有一个梦想",Oname:"生活"},
			{id:"1047",Ophone:"img/one/shenghuo (7).jpg",Odescribe:"我有一个梦想",Oname:"生活"},
			{id:"1048",Ophone:"img/one/shenghuo (8).jpg",Odescribe:"我有一个梦想",Oname:"生活"},
			{id:"1049",Ophone:"img/one/shenghuo (9).jpg",Odescribe:"我有一个梦想",Oname:"生活"}],
//理客
[{id:"1050",Ophone:"img/one/like (10).jpg",Odescribe:"开学了，祖传撩妹技巧",Oname:"理客"},
			{id:"1051",Ophone:"img/one/like (1).jpg",Odescribe:"百味生活，男人必备",Oname:"理客"},
			{id:"1052",Ophone:"img/one/like (2).jpg",Odescribe:"我有一个梦想",Oname:"理客"},
			{id:"1053",Ophone:"img/one/like (3).jpg",Odescribe:"我有一个梦想",Oname:"理客"},
			{id:"1054",Ophone:"img/one/like (4).jpg",Odescribe:"我有一个梦想",Oname:"理客"},
			{id:"1055",Ophone:"img/one/like (5).jpg",Odescribe:"我有一个梦想",Oname:"理客"},
			{id:"1056",Ophone:"img/one/like (6).jpg",Odescribe:"我有一个梦想",Oname:"理客"},
			{id:"1057",Ophone:"img/one/like (7).jpg",Odescribe:"我有一个梦想",Oname:"理客"},
			{id:"1058",Ophone:"img/one/like (8).jpg",Odescribe:"我有一个梦想",Oname:"理客"},
			{id:"1059",Ophone:"img/one/like (9).jpg",Odescribe:"我有一个梦想",Oname:"理客"}],
//运动
[{id:"1060",Ophone:"img/one/yundong (10).jpg",Odescribe:"做一个新鲜的男人必不可少",Oname:"运动"},
			{id:"1061",Ophone:"img/one/yundong (1).jpg",Odescribe:"身材好才是真的好，不要满足于现状",Oname:"运动"},
			{id:"1062",Ophone:"img/one/yundong (2).jpg",Odescribe:"我有一个梦想",Oname:"运动"},
			{id:"1063",Ophone:"img/one/yundong (3).jpg",Odescribe:"我有一个梦想",Oname:"运动"},
			{id:"1064",Ophone:"img/one/yundong (4).jpg",Odescribe:"我有一个梦想",Oname:"运动"},
			{id:"1065",Ophone:"img/one/yundong (5).jpg",Odescribe:"我有一个梦想",Oname:"运动"},
			{id:"1066",Ophone:"img/one/yundong (6).jpg",Odescribe:"我有一个梦想",Oname:"运动"},
			{id:"1067",Ophone:"img/one/yundong (7).jpg",Odescribe:"我有一个梦想",Oname:"运动"},
			{id:"1068",Ophone:"img/one/yundong (8).jpg",Odescribe:"我有一个梦想",Oname:"运动"},
			{id:"1069",Ophone:"img/one/yundong (9).jpg",Odescribe:"我有一个梦想",Oname:"运动"}],
//玩物
[{id:"1070",Ophone:"img/one/wanwu (9).jpg",Odescribe:"做一个有理想的玩物|属于你的私人空间",Oname:"玩物"},
			{id:"1071",Ophone:"img/one/wanwu (8).jpg",Odescribe:"源于谜底的瓶装爱情|单身男女必备",Oname:"玩物"},
			{id:"1072",Ophone:"img/one/wanwu (2).jpg",Odescribe:"我有一个梦想",Oname:"玩物"},
			{id:"1073",Ophone:"img/one/wanwu (3).jpg",Odescribe:"我有一个梦想",Oname:"玩物"},
			{id:"1074",Ophone:"img/one/wanwu (4).jpg",Odescribe:"我有一个梦想",Oname:"玩物"},
			{id:"1075",Ophone:"img/one/wanwu (5).jpg",Odescribe:"我有一个梦想",Oname:"玩物"},
			{id:"1076",Ophone:"img/one/wanwu (6).jpg",Odescribe:"我有一个梦想",Oname:"玩物"},
			{id:"1077",Ophone:"img/one/wanwu (7).jpg",Odescribe:"我有一个梦想",Oname:"玩物"},
			{id:"1078",Ophone:"img/one/wanwu (10).jpg",Odescribe:"我有一个梦想",Oname:"玩物"},
			{id:"1079",Ophone:"img/one/wanwu (1).jpg",Odescribe:"我有一个梦想",Oname:"玩物"}]
		
	
	];
	//主页轮播
	var headList=[
					{id:0,Cpic:"img/轮播1/超级截屏_20170827_200849.png"},
					{id:1,Cpic:"img/轮播1/超级截屏_20170827_200912.png"},
					{id:2,Cpic:"img/轮播1/超级截屏_20170827_200927.png"},
					{id:3,Cpic:"img/轮播1/超级截屏_20170827_200950.png"},
					{id:4,Cpic:"img/轮播1/超级截屏_20170828_093642.png"}
					
			];
			//主页横向滑轮
			var TransverseSwitch=[
						{id:0,Cpic:"img/u=1518667257,3806554851&fm=26&gp=0.jpg",Cname:"新潮好物"},
						{id:1,Cpic:"img/u=2375096416,2933758263&fm=26&gp=0.jpg",Cname:"潮流时尚"},
						{id:2,Cpic:"img/u=275849384,3003138578&fm=26&gp=0.jpg",Cname:"护理课堂"},
						{id:3,Cpic:"img/u=734937446,1908456929&fm=26&gp=0.jpg",Cname:"性感玩物"},
						{id:4,Cpic:"img/u=905348175,1061402657&fm=26&gp=0.jpg",Cname:"格调生活"},
						{id:5,Cpic:"img/u=952796824,4067856300&fm=26&gp=0.jpg",Cname:"运动健身"},
						{id:6,Cpic:"img/u=2964711298,62077489&fm=26&gp=0.jpg",Cname:"魅力腕表"},
						{id:7,Cpic:"img/u=2809246255,2814822819&fm=26&gp=0.jpg",Cname:"七夕专选"}
					
			];
			
			return {
				allone : function(){
							return headList
					},
				alloneO : function(){
							return TransverseSwitch
						},
				alloneKP : function(){
							return gather_KP
						}
			}
})

.factory("twoLists",function(){
	var courseList=[
					{id:0,Cpic:"img/轮播1/t011012b6c73f200e8c.jpg"},
					{id:1,Cpic:"img/轮播1/t0112c509cbcd8cdf92.jpg"},
					{id:2,Cpic:"img/轮播1/t01bb4594fdecedfee6.jpg"},
					{id:3,Cpic:"img/轮播1/t01fd88f5df036c3e85.jpg"}
					
			];
		
		var tanabataList=[
					{id:0,Cpic:"img/超级截屏_20170822_081512.png"},
					{id:1,Cpic:"img/超级截屏_20170822_081528.png"},
					{id:2,Cpic:"img/超级截屏_20170822_081605.png"},
					{id:3,Cpic:"img/超级截屏_20170822_081623.png"},
					{id:4,Cpic:"img/超级截屏_20170822_081702.png"},
					{id:5,Cpic:"img/超级截屏_20170822_081640.png"}
					
			];
			
		return {
			//创建
						alltwo : function(){
							
							return courseList
						},
						alltwoT:function(){
							return tanabataList
						}
						
		}	
})


.factory("threeLists",function(){
	var productList=[
	//第一页
	[{id:"2001",Tname:"前襟 polo衬衣",Tpicture:"img/pro/diyiye (1).jpg",Tdescribe:"Massimo Dutti斜纹领口",Tnowadays:"256"},
	{id:"2002",Tname:"前襟 polo衬衣",Tpicture:"img/pro/diyiye (2).jpg",Tdescribe:"Massimo Dutti全棉素色",Tnowadays:"198"},
	{id:"2003",Tname:"针织长衫",Tpicture:"img/pro/diyiye (3).jpg",Tdescribe:"Massimo Dutti全棉纹理领口",Tnowadays:"224"},
	{id:"2004",Tname:"休闲长袖衬衫",Tpicture:"img/pro/diyiye (4).jpg",Tdescribe:"Massimo Dutti系列拉链 ",Toriginal:"1314",Tnowadays:"522",Tdiscount:"3.9折"},
	{id:"2005",Tname:"针织长衫",Tpicture:"img/pro/diyiye (5).jpg",Tdescribe:"Massimo Dutti全棉素色",Toriginal:"999",Tnowadays:"326",Tdiscount:"5.9折"},
	{id:"2006",Tname:"polo衬衣",Tpicture:"img/pro/diyiye (6).jpg",Tdescribe:"Massimo Dutti斜纹领口",Tnowadays:"666"},
	{id:"2007",Tname:"前襟 polo衬衣",Tpicture:"img/pro/diyiye (7).jpg",Tdescribe:"YUMISOME 高支棉薄款",Toriginal:"886",Tnowadays:"666",Tdiscount:"7.9折"},
	{id:"2008",Tname:"针织长衫",Tpicture:"img/pro/diyiye (8).jpg",Tdescribe:"YUMISOME 高支棉薄款",Toriginal:"998",Tnowadays:"666",Tdiscount:"6.9折"},
	{id:"2009",Tname:"针织长衫",Tpicture:"img/pro/diyiye (9).jpg",Tdescribe:"Massimo Dutti斜纹领口",Tnowadays:"666"},
	{id:"2010",Tname:"polo衬衣",Tpicture:"img/pro/diyiye (10).jpg",Tdescribe:"YUMISOME 高支棉薄款",Toriginal:"2587",Tnowadays:"666",Tdiscount:"7.9折"},
	{id:"2011",Tname:"前襟 polo衬衣",Tpicture:"img/pro/diyiye (11).jpg",Tdescribe:"Massimo Dutti全棉素色",Toriginal:"452",Tnowadays:"666",Tdiscount:"8.9折"},
	{id:"2012",Tname:"针织长衫",Tpicture:"img/pro/diyiye (12).jpg",Tdescribe:"YUMISOME 高支棉薄款",Tnowadays:"666"},
	{id:"2013",Tname:"前襟 polo衬衣",Tpicture:"img/pro/diyiye (13).jpg",Tdescribe:"Massimo Dutti斜纹领口",Toriginal:"436",Tnowadays:"666",Tdiscount:"8.9折"},
	{id:"2014",Tname:"小方格衬衫",Tpicture:"img/pro/diyiye (14).jpg",Tdescribe:"Massimo Dutti斜纹领口",Tnowadays:"666"},
	{id:"2015",Tname:"休闲长袖衬衫",Tpicture:"img/pro/diyiye (15).jpg",Tdescribe:"Massimo Dutti全棉素色",Tnowadays:"666"},
	{id:"2016",Tname:"小方格衬衫",Tpicture:"img/pro/diyiye (16).jpg",Tdescribe:"YUMISOME 高支棉薄款",Toriginal:"9999",Tnowadays:"666",Tdiscount:"7.9折"},
	{id:"2017",Tname:"休闲长袖衬衫",Tpicture:"img/pro/diyiye (17).jpg",Tdescribe:"Massimo Dutti斜纹领口",Tnowadays:"666"},
	{id:"2018",Tname:"休闲长袖衬衫",Tpicture:"img/pro/diyiye (18).jpg",Tdescribe:"Massimo Dutti全棉素色",Tnowadays:"666"},
	{id:"2019",Tname:"小方格衬衫",Tpicture:"img/pro/diyiye (19).jpg",Tdescribe:"YUMISOME 高支棉薄款",Toriginal:"9999",Tnowadays:"666",Tdiscount:"4.9折"},
	{id:"2020",Tname:"小方格衬衫",Tpicture:"img/pro/diyiye (20).jpg",Tdescribe:"Massimo Dutti斜纹领口",Tnowadays:"666"}
	],
	//第二页
	[
	{id:"2001",Tname:"前襟 polo衬衣",Tpicture:"img/pro/diyiye (1).jpg",Tdescribe:"Massimo Dutti斜纹领口",Tnowadays:"256"},
	{id:"2002",Tname:"前襟 polo衬衣",Tpicture:"img/pro/diyiye (2).jpg",Tdescribe:"Massimo Dutti全棉素色",Tnowadays:"198"},
	{id:"2003",Tname:"针织长衫",Tpicture:"img/pro/diyiye (3).jpg",Tdescribe:"Massimo Dutti全棉纹理领口",Tnowadays:"224"},
	{id:"2004",Tname:"休闲长袖衬衫",Tpicture:"img/pro/diyiye (4).jpg",Tdescribe:"Massimo Dutti系列拉链 ",Toriginal:"1314",Tnowadays:"522",Tdiscount:"3.9折"},
	{id:"2005",Tname:"针织长衫",Tpicture:"img/pro/diyiye (5).jpg",Tdescribe:"Massimo Dutti全棉素色",Toriginal:"999",Tnowadays:"326",Tdiscount:"5.9折"},
	{id:"2006",Tname:"polo衬衣",Tpicture:"img/pro/diyiye (6).jpg",Tdescribe:"Massimo Dutti斜纹领口",Tnowadays:"666"},
	{id:"2007",Tname:"前襟 polo衬衣",Tpicture:"img/pro/diyiye (7).jpg",Tdescribe:"YUMISOME 高支棉薄款",Toriginal:"886",Tnowadays:"666",Tdiscount:"7.9折"},
	{id:"2008",Tname:"针织长衫",Tpicture:"img/pro/diyiye (8).jpg",Tdescribe:"YUMISOME 高支棉薄款",Toriginal:"998",Tnowadays:"666",Tdiscount:"6.9折"},
	{id:"2009",Tname:"针织长衫",Tpicture:"img/pro/diyiye (9).jpg",Tdescribe:"Massimo Dutti斜纹领口",Tnowadays:"666"},
	{id:"2010",Tname:"polo衬衣",Tpicture:"img/pro/diyiye (10).jpg",Tdescribe:"YUMISOME 高支棉薄款",Toriginal:"2587",Tnowadays:"666",Tdiscount:"7.9折"},
	{id:"2011",Tname:"前襟 polo衬衣",Tpicture:"img/pro/diyiye (11).jpg",Tdescribe:"Massimo Dutti全棉素色",Toriginal:"452",Tnowadays:"666",Tdiscount:"8.9折"},
	{id:"2012",Tname:"针织长衫",Tpicture:"img/pro/diyiye (12).jpg",Tdescribe:"YUMISOME 高支棉薄款",Tnowadays:"666"},
	{id:"2013",Tname:"前襟 polo衬衣",Tpicture:"img/pro/diyiye (13).jpg",Tdescribe:"Massimo Dutti斜纹领口",Toriginal:"436",Tnowadays:"666",Tdiscount:"8.9折"},
	{id:"2014",Tname:"小方格衬衫",Tpicture:"img/pro/diyiye (14).jpg",Tdescribe:"Massimo Dutti斜纹领口",Tnowadays:"666"},
	{id:"2015",Tname:"休闲长袖衬衫",Tpicture:"img/pro/diyiye (15).jpg",Tdescribe:"Massimo Dutti全棉素色",Tnowadays:"666"},
	{id:"2016",Tname:"小方格衬衫",Tpicture:"img/pro/diyiye (16).jpg",Tdescribe:"YUMISOME 高支棉薄款",Toriginal:"9999",Tnowadays:"666",Tdiscount:"7.9折"},
	{id:"2017",Tname:"休闲长袖衬衫",Tpicture:"img/pro/diyiye (17).jpg",Tdescribe:"Massimo Dutti斜纹领口",Tnowadays:"666"},
	{id:"2018",Tname:"休闲长袖衬衫",Tpicture:"img/pro/diyiye (18).jpg",Tdescribe:"Massimo Dutti全棉素色",Tnowadays:"666"},
	{id:"2019",Tname:"小方格衬衫",Tpicture:"img/pro/diyiye (19).jpg",Tdescribe:"YUMISOME 高支棉薄款",Toriginal:"9999",Tnowadays:"666",Tdiscount:"4.9折"},
	{id:"2020",Tname:"小方格衬衫",Tpicture:"img/pro/diyiye (20).jpg",Tdescribe:"Massimo Dutti斜纹领口",Tnowadays:"666"}
	]
	
	];
	var coursethreeList=[
					{id:0,Cpic:"img/服装标志/360du.png","Cname":"361度","Cdes":"25件商品"},
					{id:1,Cpic:"img/服装标志/add.png","Cname":"	阿迪达斯","Cdes":"89件商品"},
					{id:2,Cpic:"img/服装标志/anta.png","Cname":"安踏","Cdes":"666件商品"},
					{id:3,Cpic:"img/服装标志/biaoma.png","Cname":"彪马","Cdes":"56件商品"},
					{id:4,Cpic:"img/服装标志/bkb.png","Cname":"背靠背","Cdes":"25件商品"},
					{id:5,Cpic:"img/服装标志/feile.png","Cname":"fei","Cdes":"35件商品"},
					{id:6,Cpic:"img/服装标志/guirenniao.png","Cname":"贵人鸟","Cdes":"25件商品"},
					{id:7,Cpic:"img/服装标志/jingjing.png","Cname":"jing","Cdes":"435件商品"},
					{id:8,Cpic:"img/服装标志/kangwei.png","Cname":"康威","Cdes":"542件商品"},
					{id:9,Cpic:"img/服装标志/liling.png","Cname":"李宁","Cdes":"453件商品"},
					{id:10,Cpic:"img/服装标志/naike.png","Cname":"耐克","Cdes":"9999件商品"},
					{id:11,Cpic:"img/服装标志/ruibu.png","Cname":"锐步","Cdes":"87件商品"}
					
			];
	var clothingList=[
					{id:0,Cpic:"img/轮播1/t011012b6c73f200e8c.jpg"},
					{id:1,Cpic:"img/轮播1/t0112c509cbcd8cdf92.jpg"},
					{id:2,Cpic:"img/轮播1/t01bb4594fdecedfee6.jpg"},
					{id:3,Cpic:"img/轮播1/t01fd88f5df036c3e85.jpg"}
			];		
	var quanbuList=[
					{id:0,Cpic:"img/three/quanbuy (9).jpg",Cdes:"T恤"},
					{id:1,Cpic:"img/three/quanbuy (2).jpg",Cdes:"T恤"},
					{id:2,Cpic:"img/three/quanbuy (3).jpg",Cdes:"T恤"},
					{id:3,Cpic:"img/three/quanbuy (4).jpg",Cdes:"T恤"},
					{id:5,Cpic:"img/three/quanbuy (5).jpg",Cdes:"T恤"},
					{id:6,Cpic:"img/three/quanbuy (6).jpg",Cdes:"T恤"},
					{id:7,Cpic:"img/three/quanbuy (7).jpg",Cdes:"T恤"},
					{id:8,Cpic:"img/three/quanbuy (8).jpg",Cdes:"T恤"},
					{id:9,Cpic:"img/three/quanbuy (1).jpg",Cdes:"T恤"}
					
	]
	var kuziList=[
					{id:0,Cpic:"img/three/kuzi (1).jpg",Cdes:"休闲裤"},
					{id:1,Cpic:"img/three/kuzi (2).jpg",Cdes:"七分裤"},
					{id:2,Cpic:"img/three/kuzi (3).jpg",Cdes:"牛仔裤"},
					{id:3,Cpic:"img/three/kuzi (4).jpg",Cdes:"西裤"},
					{id:5,Cpic:"img/three/kuzi (5).jpg",Cdes:"公主库"},
					{id:6,Cpic:"img/three/kuzi (6).jpg",Cdes:"运动裤"},
					{id:7,Cpic:"img/three/kuzi (7).jpg",Cdes:"小脚裤"},
					{id:8,Cpic:"img/three/kuzi (8).jpg",Cdes:"九分裤"}		
	]
	var xieziList=[
					{id:0,Cpic:"img/three/xiezi (1).jpg",Cdes:"休闲鞋"},
					{id:1,Cpic:"img/three/xiezi (2).jpg",Cdes:"运动鞋"},
					{id:2,Cpic:"img/three/xiezi (3).jpg",Cdes:"休闲便鞋"},
					{id:3,Cpic:"img/three/xiezi (4).jpg",Cdes:"休闲皮鞋"},
					{id:5,Cpic:"img/three/xiezi (5).jpg",Cdes:"皮鞋"},
					{id:6,Cpic:"img/three/xiezi (6).jpg",Cdes:"靴子"},
					{id:7,Cpic:"img/three/xiezi (7).jpg",Cdes:"高跟"},
					{id:8,Cpic:"img/three/xiezi (8).jpg",Cdes:"凉拖"},	
					{id:7,Cpic:"img/three/xiezi (9).jpg",Cdes:"跑鞋"},
					{id:8,Cpic:"img/three/xiezi (10).jpg",Cdes:"帆布鞋"}	
	]
	goodsChecked=[];		
		return {
			
						allthree : function(){
							
							return clothingList
						},
						allthreeT : function(){
							
							return coursethreeList
						},
						allproList:function(){
							return productList
						},
						allquanbuList:function(){
							return quanbuList
						},
						allkuziList:function(){
							return kuziList
						},
						allxieziList:function(){
							return xieziList
						}
		}	
})


.factory("fourLists",function(){
	goodsChecked=[];	
	
			
		return {
						allgoodsCheck:function(){
							return goodsChecked
						}
						
		}	
})