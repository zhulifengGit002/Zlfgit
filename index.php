<?php
require_once "jssdk.php";
// appId  和 秘钥
$jssdk = new JSSDK("wx5bbc2d13c73c9c0c", "1c4dcc046d35dbec1829a5970968382a");
$signPackage = $jssdk->GetSignPackage();
?>
<!DOCTYPE html>
<html>
	<head>
		<title>css样式表</title>
		<meta charset="utf-8">
		<script type="text/javascript" src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
	</head>
	<body>
		<div class="header">
			<h3><a href="aixianfeng/shouye.html">爱鲜蜂</a></h3>
			<h2>这是我在master新添加的内容</h2>
		</div>		
	</body>
	<script type="text/javascript">
		 wx.config({
    debug: true,
    appId: '<?php echo $signPackage["appId"];?>',
    timestamp: <?php echo $signPackage["timestamp"];?>,
    nonceStr: '<?php echo $signPackage["nonceStr"];?>',
    signature: '<?php echo $signPackage["signature"];?>',
     jsApiList: []
  });
	</script>
</html>