function delfile(id){
	$.ajax({
		type:"GET",//��������
		url:"delfile.json",//�����url
		data:{id:id,flag:'apk'},//�������
		dataType:"json",//ajax�ӿڣ�����url�����ص���������
		success:function(data){//data���������ݣ�json����
			if(data.result == "success"){
				alert("ɾ���ɹ���");
				$("#uploadfile").show();
				$("#apkFile").html('');
			}else if(data.result == "failed"){
				alert("ɾ��ʧ�ܣ�");
			}
		},
		error:function(data){//������ʱ��404��500 �ȷ�200�Ĵ���״̬��
			alert("�������");
		}
	});  
}

$(function(){  
	$("#back").on("click",function(){
		window.location.href = "list";
	});
	
	//�ϴ�APK�ļ�---------------------
	var downloadLink = $("#downloadLink").val();
	var id = $("#id").val();
	var apkFileName = $("#apkFileName").val();
	if(downloadLink == null || downloadLink == "" ){
		$("#uploadfile").show();
	}else{
		$("#apkFile").append("<p>"+apkFileName+
							"&nbsp;&nbsp;<a href=\""+downloadLink+"?m="+Math.random()+"\" >����</a> &nbsp;&nbsp;" +
							"<a href=\"javascript:;\" onclick=\"delfile('"+id+"');\">ɾ��</a></p>");
	}

});
      
      
      