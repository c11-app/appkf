function  loadCategoryLevel(pid,cl,categoryLevel){
	$.ajax({
		type:"GET",//��������
		url:"categorylevellist.json",//�����url
		data:{pid:pid},//�������
		dataType:"json",//ajax�ӿڣ�����url�����ص���������
		success:function(data){//data���������ݣ�json����
			
			$("#"+categoryLevel).html("");
			var options = "<option value=\"\">--��ѡ��--</option>";
			for(var i = 0; i < data.length; i++){
				if(cl != null && cl != undefined && data[i].id == cl ){
					options += "<option selected=\"selected\" value=\""+data[i].id+"\" >"+data[i].categoryName+"</option>";
				}else{
					options += "<option value=\""+data[i].id+"\">"+data[i].categoryName+"</option>";
				}
			}
			$("#"+categoryLevel).html(options);
		},
		error:function(data){//������ʱ��404��500 �ȷ�200�Ĵ���״̬��
			alert("���ط����б�ʧ�ܣ�");
		}
	});
}   

function delfile(id){
	$.ajax({
		type:"GET",//��������
		url:"delfile.json",//�����url
		data:{id:id,flag:'logo'},//�������
		dataType:"json",//ajax�ӿڣ�����url�����ص���������
		success:function(data){//data���������ݣ�json����
			if(data.result == "success"){
				alert("ɾ���ɹ���");
				$("#uploadfile").show();
				$("#logoFile").html('');
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
	//��̬��������ƽ̨�б�
	$.ajax({
		type:"GET",//��������
		url:"datadictionarylist.json",//�����url
		data:{tcode:"APP_FLATFORM"},//�������
		dataType:"json",//ajax�ӿڣ�����url�����ص���������
		success:function(data){//data���������ݣ�json����
			var fid = $("#fid").val();
			$("#flatformId").html("");
			var options = "<option value=\"\">--��ѡ��--</option>";
			for(var i = 0; i < data.length; i++){
				if(fid != null && fid != undefined && data[i].valueId == fid ){
					options += "<option selected=\"selected\" value=\""+data[i].valueId+"\" >"+data[i].valueName+"</option>";
				}else{
					options += "<option value=\""+data[i].valueId+"\">"+data[i].valueName+"</option>";
				}
			}
			$("#flatformId").html(options);
		},
		error:function(data){//������ʱ��404��500 �ȷ�200�Ĵ���״̬��
			alert("����ƽ̨�б�ʧ�ܣ�");
		}
	});  
	
	var cl1 = $("#cl1").val();
	var cl2 = $("#cl2").val();
	var cl3 = $("#cl3").val();
	//��̬����һ�������б�
	loadCategoryLevel(null,cl1,"categoryLevel1");
	//��̬���ض��������б�
	loadCategoryLevel(cl1,cl2,"categoryLevel2");
	//��̬�������������б�
	loadCategoryLevel(cl2,cl3,"categoryLevel3");
	
	//����Ч������̬���ض��������б�
	$("#categoryLevel1").change(function(){
		var categoryLevel1 = $("#categoryLevel1").val();
		if(categoryLevel1 != '' && categoryLevel1 != null){
			loadCategoryLevel(categoryLevel1,cl2,"categoryLevel2");
		}else{
			$("#categoryLevel2").html("");
			var options = "<option value=\"\">--��ѡ��--</option>";
			$("#categoryLevel2").html(options);
		}
		$("#categoryLevel3").html("");
		var options = "<option value=\"\">--��ѡ��--</option>";
		$("#categoryLevel3").html(options);
	});
	//����Ч������̬�������������б�
	$("#categoryLevel2").change(function(){
		var categoryLevel2 = $("#categoryLevel2").val();
		if(categoryLevel2 != '' && categoryLevel2 != null){
			loadCategoryLevel(categoryLevel2,cl3,"categoryLevel3");
		}else{
			$("#categoryLevel3").html("");
			var options = "<option value=\"\">--��ѡ��--</option>";
			$("#categoryLevel3").html(options);
		}
	});
	
	$("#back").on("click",function(){
		window.location.href = "list";
	});
	
	
	//LOGOͼƬ---------------------
	var logoPicPath = $("#logoPicPath").val();
	var id = $("#id").val();
	if(logoPicPath == null || logoPicPath == "" ){
		$("#uploadfile").show();
	}else{
		$("#logoFile").append("<p><img src=\""+logoPicPath+"?m="+Math.random()+"\" width=\"100px;\"/> &nbsp;&nbsp;"+
							"<a href=\"javascript:;\" onclick=\"delfile('"+id+"');\">ɾ��</a></p>");
		
	}

});
      
      
      