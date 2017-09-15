angular.module('starter.controllers', [])


.controller('homepageCtrl', function($scope,oneLists,$ionicScrollDelegate) {
	
	//取出的数组
	$scope.gather_KPs=oneLists.alloneKP();
	//副页面数据
	$scope.haowu_kp=$scope.gather_KPs[0];
	$scope.dapei_kp=$scope.gather_KPs[1];
	$scope.shizhuang_kp=$scope.gather_KPs[2];
	$scope.wanbiao_kp=$scope.gather_KPs[3];
	$scope.shenghuo_kp=$scope.gather_KPs[4];
	$scope.like_kp=$scope.gather_KPs[5];
	$scope.yundong_kp=$scope.gather_KPs[6];
	$scope.wanwu_kp=$scope.gather_KPs[7];
	
	
	//主页数据
	$scope.headLists=oneLists.allone();
	$scope.TransverseSwitchs=oneLists.alloneO();
	$scope.kp_jh=[		
				$scope.gather_KPs[5][0],
				$scope.gather_KPs[7][0],
				$scope.gather_KPs[4][7],
				$scope.gather_KPs[7][1],
				$scope.gather_KPs[3][1],
				$scope.gather_KPs[6][3],
				$scope.gather_KPs[6][2],
				$scope.gather_KPs[5][8],
				$scope.gather_KPs[1][0],
				$scope.gather_KPs[0][2],
				$scope.gather_KPs[4][1],
				$scope.gather_KPs[3][4]
				]
//	console.log($scope.kp_jh)
	
	
	
	
	
	var mySwiper2 = new Swiper('#swiper-container2',{
			watchSlidesProgress : true,
			watchSlidesVisibility : true,
			slidesPerView : 5,//可见的数量
			//点击事件
			onTap: function(){
						//把mySwiper3跳转到对应点击下标
						mySwiper3.slideTo( mySwiper2.clickedIndex)
					}
			})
			//
			var mySwiper3 = new Swiper('#swiper-container3',{
			//滑动开始的时候触发
			onSlideChangeStart: function(){
						updateNavPosition()
					}
			
			})
			
			function updateNavPosition(){
				//设置swiper2的激活样式
					$('#swiper-container2 .active-nav').removeClass('active-nav')
											//设置当前mySwiper3的激活下标
					var activeNav = $('#swiper-container2 .swiper-slide').eq(mySwiper3.activeIndex).addClass('active-nav');
			
//					console.log(activeNav)
					//假如当前有激活样式的元素没有可见
							//滚动到当前有激活样式的下标
							mySwiper2.slideTo(activeNav.index()-2)
						
				
				}
	
	
	
	
	
		

})





.controller('activitysCtrl', function($scope, twoLists) {
	//轮播数据
	$scope.courseLists=twoLists.alltwo();
	console.log($scope.courseLists)
	$scope.tanabataLists=twoLists.alltwoT();
	console.log($scope.tanabataLists)
	
	
	//-----------倒计时================
 			var count_shi=document.getElementById("count_shi");
			var count_fen=document.getElementById("count_fen");
			var count_miao=document.getElementById("count_miao");
			setInterval(function(){
				jishi(2017,10,10,"countDown");
			},1000);
						//----形参
			function jishi(year,month,day,divName){
				//结束时间
				var endTime=new Date(year,month-1,day);	
				//系统时间
				var nowTime=new Date();	
				var diff=endTime.getTime()-nowTime.getTime();
				var s=parseInt(diff/1000%60);
				var fen=parseInt(diff/1000/60%60);
				var hour=parseInt(diff/1000/60/60%24);
				var day=parseInt(diff/1000/3600/24);
				count_shi.innerHTML=hour;
				count_fen.innerHTML=fen;
				count_miao.innerHTML=s;
			}
})

.controller('productsCtrl', function($scope,threeLists,$ionicSlideBoxDelegate) {
	
	
	
	
	$scope.$on('$ionicView.beforeEnter', function() {//视图进入
	

           if (location.href.indexOf("?xyz=")<0){
		    	window.location.reload();//页面刷新一次
			 location.href=location.href+"?xyz="+Math.random();
			 }
      });
//鞋子
$scope.xieziLists=threeLists.allxieziList();
	//裤子
	$scope.kuziLists=threeLists.allkuziList();
	//全部分类
	$scope.quanbuLists=threeLists.allquanbuList();
	
		//服饰标志
	$scope.coursethreeLists=threeLists.allthreeT();
		//页面切换
	$scope.classifyThr=true;
	$scope.brandThr=false;
  		//给切换加样式
	$scope.color={borderBottom:"0.06rem solid black"};
    $scope.colorc={borderBottom:"0.06rem solid white"};
    	//切换内容显示与隐藏
    $scope.mycou=true;
    $scope.mycol=false;
    	//点击切换分类
    $scope.classifytab=function(){
    	
    	$scope.color={borderBottom:"0.06rem solid black"};
    	$scope.colorc={borderBottom:"0.06rem solid white"};
    	$scope.classifyThr=true;
		$scope.brandThr=false;
    }
    	//点击切换品牌
    $scope.brandtab=function(){
    	
    	$scope.color={borderBottom:"0.06rem solid white"};
    	$scope.colorc={borderBottom:"0.06rem solid black"};
    	$scope.classifyThr=false;
		$scope.brandThr=true;
		//第二页轮播数据
		$scope.courseListT=threeLists.allthree();
		
		 //更新轮播图
        $ionicSlideBoxDelegate.$getByHandle("slideimgs").update();
        //让轮播图循环播放
        $ionicSlideBoxDelegate.$getByHandle("slideimgs").loop("true");
		
    }
    
    //第一页切换
    var fenlei_Hz=document.getElementById("fenlei_Hz");
    fenlei_Hzs=fenlei_Hz.children;
//  console.log(fenlei_Hzs);
    var fenlei_Nr=document.getElementById("fenlei_Nr");
    fenlei_Nrs=fenlei_Nr.children;
//  console.log(fenlei_Nrs);
    for(var i=0;i<fenlei_Hzs.length;i++){
				fenlei_Hzs[i].index=i;
				fenlei_Hzs[i].onclick=function(){
					
					for(var j=0;j<fenlei_Nrs.length;j++){
						fenlei_Nrs[j].style.display="none";
						fenlei_Hzs[j].style.background="gainsboro";
						fenlei_Hzs[j].style.color="black";
					}
					fenlei_Nrs[this.index].style.display="block";
					fenlei_Hzs[this.index].style.background="white";
					fenlei_Hzs[this.index].style.color="khaki";
					
				}
		
				
			}
    
    //商品1
    $scope.shangyiO=function(){
    	window.location="#/tab/productList";
    }
    
})
//=========================================商品列表==========
.controller("productListCtrl",function($scope,threeLists,fourLists,$rootScope){
	
	//判断是否登录
//	if(!$scope.zanghao || !$scope.mima){
//			
//			window.location="#/tab/personals"
//		}else{
//			window.location="#/tab/shoppings"
//		}
// 	$scope.xgtjLists=fourLists.allfour();
// 	console.log($scope.xgtjLists);
 	
	
	$scope.allproLists=threeLists.allproList();
//	console.log($scope.allproLists)
//衣服
	$scope.proList=$scope.allproLists[0]
//鞋子
//	$scope.shoeLists=$scope.allproLists[1]
//	console.log($scope.proList)
	
	$scope.goodsChecked =fourLists.allgoodsCheck(); 
	//console.log($scope.goodsChecked)
	$scope.addGoods=function(proLists){
		var index = $scope.goodsChecked.indexOf(proLists);
		//console.log(index)
		//console.log(proLists)
		//判断是否有商品
		if(index != -1){     //如果有
			proLists.count = ++$scope.goodsChecked[index].count;
       		proLists.isDisabled = false;
		}else{    //如果没有
			proLists.count = 0;
        	proLists.count++;
        	proLists.isDisabled = true;

	        $scope.goodsChecked.push(proLists);
		}
//		$scope.account();
	}
	$scope.huoqushuju=function(){
		$rootScope.goodsCheck=$scope.goodsChecked;
		//console.log($rootScope.goodsCheck)
	}
	
})
//-==========================第四页===========================
.controller('shoppingsCtrl', function($scope,fourLists,$rootScope) {
	
	//判断购物车是否为空
 	$scope.shoppingCart_k=true;
	$scope.shoppingCart_y=false;
	$scope.shoppingCart_yJS=false;
    if(goodsChecked==""){
    	$scope.shoppingCart_k=true;
		$scope.shoppingCart_y=false;
		$scope.shoppingCart_yJS=false;
    }else{
    	$scope.shoppingCart_k=false;
		$scope.shoppingCart_y=true;
		$scope.shoppingCart_yJS=true;
    }
	
	
	//删除商品
	$scope.removes=function(shapplis){
//		console.log(shapplis)   //要删除的删商品
		 $scope.goodsChecked.splice($scope.goodsChecked.indexOf(shapplis), 1);
	}
	
	
	$scope.goodsChecked =$rootScope.goodsCheck;
//增加单个商品数量
			$scope.addCount = function (shapplis) {  
		      shapplis.singleTotal = 0; 
		      shapplis.count++; 
		   // console.log(shapplis.Tnowadays);   //商品单价
		      if (shapplis.count > 1) {
		        shapplis.isDisabled = false;
		       // console.log(shapplis.count);    //商品数量
//		       	$scope.shapplis.Tnowadays=(shapplis.Tnowadays)*shapplis.count
		      }
		      $scope.account();
		    }
//减少单个商品数量
		    $scope.decreaseCount = function (shapplis) { 
		      shapplis.singleTotal = 0;
		      shapplis.count--;
		
		      if (shapplis.count == 1) {
		         shapplis.isDisabled = true;
//		         
		      }
		    $scope.account();
		    }
       
       $scope.toggleChecked = function (shapplis) {
      shapplis.checked = !shapplis.checked; //切换选择取消
//		$scope.totalValue=$scope.goodsChecked.Tnowadays * $scope.goodsChecked.count;
      var a = 0; //统计选中的数量
      for (var i = 0; i < $scope.goodsChecked.length; i++) { //购物车中有未选中结算的商品，全选项即为未选中
        if ($scope.goodsChecked[i].checked == true) {
          a++;  //选中的个数
        }
      }
      if (a == $scope.goodsChecked.length) {
        $scope.selcetAll = true;
      } else {
        $scope.selcetAll = false;
      }
      if ($scope.toEdit == false) {
        $scope.account();
      }
      $scope.account();
    }
       
       $scope.totalValue=0;
       $scope.checkAll = function () {  //全选，结算全部购物车中商品
       
      $scope.selcetAll = !$scope.selcetAll;
	      for (var i = 0; i < $scope.goodsChecked.length; i++) {
	        $scope.goodsChecked[i].checked = $scope.selcetAll;
	      }
		$scope.account();
    }
	
 	$scope.account = function () { //计算总价
   
      $scope.totalValue = 0;
      for (var i = 0; i < $scope.goodsChecked.length; i++) {
        $scope.goodsChecked[i].singleTotal = 0;
		        if ($scope.goodsChecked[i].checked) {
		          $scope.goodsChecked[i].singleTotal = $scope.goodsChecked[i].Tnowadays * $scope.goodsChecked[i].count; //单个商品的总价格
		          $scope.sum += $scope.goodsChecked[i].count; //计算总数量
		        } else if ($scope.goodsChecked[i].checked == false) {
		          $scope.goodsChecked[i].singleTotal = 0;
		        }
		        $scope.totalValue += $scope.goodsChecked[i].singleTotal;
      }
    }
})
//-=========================第五页=============================
.controller('personalsCtrl', function($scope) {
	if(!$scope.zanghao || !$scope.mima){
			window.location="#/tab/registers"
		}else{
			window.location="#/tab/personals"
		}



var mySwiper4 = new Swiper('#swiper-container4',{
			watchSlidesProgress : true,
			watchSlidesVisibility : true,
			slidesPerView : 4,//可见的数量
			//点击事件
			onTap: function(){
						//把mySwiper3跳转到对应点击下标
						mySwiper5.slideTo( mySwiper4.clickedIndex)
					}
			})
			//
			var mySwiper5 = new Swiper('#swiper-container5',{
			//滑动开始的时候触发
			onSlideChangeStart: function(){
						updateNavPositions()
					}
			
			})
			
			function updateNavPosition(){
				//设置swiper2的激活样式
					$('#swiper-container4 .active-nav').removeClass('active-nav')
											//设置当前mySwiper5的激活下标
					var activeNav = $('#swiper-container4 .swiper-slide').eq(mySwiper5.activeIndex).addClass('active-nav');
			
//					console.log(activeNav)
					//假如当前有激活样式的元素没有可见
							//滚动到当前有激活样式的下标
//							mySwiper4.slideTo(activeNav.index()-2)
						
				
				}
   	
})
.controller('personalsCtrl', function($scope,$ionicPopup,$ionicModal) {
	$scope.zanghao="";
	$scope.mima="";
	//判断是否登录    未登录显示登录页面
   $scope.denglu=function(){
		if(!$scope.zanghao || !$scope.mima){
			$ionicPopup.alert({
				title:"温馨提示",
				template:"账户或密码为空"
			})
		}else if($scope.zanghao=="q"&&$scope.mima=="a"){
			
			window.location="#/tab/personals"
		}else{
			$ionicPopup.alert({
				title:"温馨提示",
				template:"账户或密码错误"
			})
		}
	}
//	 $scope.tz_Indent=function(){
//	 	alert("ds")
//	 	window.location="#/tab/myIndent"
//	 }
	 
	
	 //=======我的订单
	 $ionicModal.fromTemplateUrl("myIndent.html",{
		scope: $scope,
		animation: "slide-in-up"
	}).then(function(modal){
		$scope.modal = modal;
	})
	$scope.openModal=function(){
			$scope.modal.show();
		}
	$scope.closeModal=function(){
		$scope.modal.hide();
	} 
	 
	 //收货管理
	 $ionicModal.fromTemplateUrl("myInformation.html",{
		scope: $scope,
		animation: "slide-in-up"
	}).then(function(myInfor){
		$scope.myInfor = myInfor;
	})
	$scope.openmyInfor=function(){
			$scope.myInfor.show();
		}
	$scope.closemyInfor=function(){
		$scope.myInfor.hide();
	} 
	//具体信息管理
	$ionicModal.fromTemplateUrl("myInformations.html",{
		scope: $scope,
		animation: "slide-in-up"
	}).then(function(myInfors){
		$scope.myInfors = myInfors;
	})
	$scope.openmyInfors=function(){
			$scope.myInfors.show();
		}
	$scope.closemyInfors=function(){
		$scope.myInfors.hide();
	} 
	//添加地址
	$ionicModal.fromTemplateUrl("myLocation.html",{
		scope: $scope,
		animation: "slide-in-up"
	}).then(function(Locations){
		$scope.Locations = Locations;
	})
	$scope.openmyLocations=function(){
			$scope.Locations.show();
		}
	$scope.closemyLocations=function(){
		$scope.Locations.hide();
	} 
	////身份证模态
	 $ionicModal.fromTemplateUrl("myIdentity.html",{
		scope: $scope,
		animation: "slide-in-up"
	}).then(function(Identity){
		$scope.Identity = Identity;
	})
	$scope.openmyIdentity=function(){
			$scope.Identity.show();
		}
	$scope.closemyIdentity=function(){
		$scope.Identity.hide();
	} 
		
})
//订单模态
.controller("myInformationCrl",function($scope,$ionicModal){
	$scope.openmyInfors=function(){
		alert("666")
	}
	 $ionicModal.fromTemplateUrl("myInformations.html",{
		scope: $scope,
		animation: "slide-in-up"
	}).then(function(myInfors){
		$scope.myInfors = myInfors;
	})
	$scope.openmyInfors=function(){
		alert("6666")
			$scope.myInfors.show();
		}
	$scope.closemyInfors=function(){
		$scope.myInfors.hide();
	} 
	
	
	
	//三级联动数据
			   
    
})
.controller("myLocationnCrl",function($scope){
	 var oDiv = document.getElementById("divYell");
	 console.log(oDiv)
        var sheng = document.createElement("select");
        var shi = document.createElement("select");
        var qu = document.createElement("select");
        oDiv.appendChild(sheng);
        oDiv.appendChild(shi);
        oDiv.appendChild(qu);
        sheng.options[0] = new Option("请选择省", "-1");
        shi.options[0] = new Option("请选择市", "-1");
        qu.options[0] = new Option("请选择区", "-1");
        //创建省市区完毕
        //循环第一步
        for (var i = 0; i < city.length; i++) {
          sheng.options[sheng.length] = new Option(city[i].name, i);
          sheng.onchange = function() {
            //恢复默认选项
            //shi.options[0].selected = true;
            //qu.options[0].selected = true;
            //清空市区选项
            shi.options.length = 0;
            shi.options[shi.length] = new Option("请选择市", "-1");
            qu.options.length = 0;
            qu.options[qu.length] = new Option("请选择区", "-1");
            for (var j = 0; j < city[sheng.selectedIndex - 1].city.length; j++) {
              shi.options[shi.length] = new Option(city[sheng.selectedIndex - 1].city[j].name, j);
              shi.onchange = function() {
                //恢复默认选项
                //qu.options[0].selected = true;
                //清空区选项
                qu.options.length = 0;
                qu.options[qu.length] = new Option("请选择区", "-1");
                for (var k = 0; k < city[sheng.selectedIndex - 1].city[shi.selectedIndex - 1].area.length; k++) {
                  qu.options[qu.length] = new Option(city[sheng.selectedIndex - 1].city[shi.selectedIndex - 1].area[k], k);
                   
                }
              }
            }
          }
        }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})



 /*底部tabs隐藏显示的指令*/
  .directive('hideTabs', function($rootScope) {
    return {
      restrict: 'A',
      
      link: function(scope, element, attributes) {
//    	console.log(attributes)
        scope.$on('$ionicView.beforeEnter', function() {
          $rootScope.hideTabs=attributes.hideTabs;
        });

        scope.$on('$ionicView.beforeLeave', function() {
          $rootScope.hideTabs = false;
        });
      }
    };
  })