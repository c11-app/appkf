$("#queryCategoryLevel1").change(function(){
	var queryCategoryLevel1 = $("#queryCategoryLevel1").val();
	if(queryCategoryLevel1 != '' && queryCategoryLevel1 != null){
		$.ajax({
			type:"GET",//��������
			url:"categorylevellist.json",//�����url
			data:{pid:queryCategoryLevel1},//�������
			dataType:"json",//ajax�ӿڣ�����url�����ص���������
			success:function(data){//data���������ݣ�json����
				$("#queryCategoryLevel2").html("");
				var options = "<option value=\"\">--��ѡ��--</option>";
				for(var i = 0; i < data.length; i++){
					options += "<option value=\""+data[i].id+"\">"+data[i].categoryName+"</option>";
				}
				$("#queryCategoryLevel2").html(options);
			},
			error:function(data){//������ʱ��404��500 �ȷ�200�Ĵ���״̬��
				alert("���ض�������ʧ�ܣ�");
			}
		});
	}else{
		$("#queryCategoryLevel2").html("");
		var options = "<option value=\"\">--��ѡ��--</option>";
		$("#queryCategoryLevel2").html(options);
	}
	$("#queryCategoryLevel3").html("");
	var options = "<option value=\"\">--��ѡ��--</option>";
	$("#queryCategoryLevel3").html(options);
});

$("#queryCategoryLevel2").change(function(){
	var queryCategoryLevel2 = $("#queryCategoryLevel2").val();
	if(queryCategoryLevel2 != '' && queryCategoryLevel2 != null){
		$.ajax({
			type:"GET",//��������
			url:"categorylevellist.json",//�����url
			data:{pid:queryCategoryLevel2},//�������
			dataType:"json",//ajax�ӿڣ�����url�����ص���������
			success:function(data){//data���������ݣ�json����
				$("#queryCategoryLevel3").html("");
				var options = "<option value=\"\">--��ѡ��--</option>";
				for(var i = 0; i < data.length; i++){
					//alert(data[i].id);
					//alert(data[i].categoryName);
					options += "<option value=\""+data[i].id+"\">"+data[i].categoryName+"</option>";
				}
				$("#queryCategoryLevel3").html(options);
			},
			error:function(data){//������ʱ��404��500 �ȷ�200�Ĵ���״̬��
				alert("������������ʧ�ܣ�");
			}
		});
	}else{
		$("#queryCategoryLevel3").html("");
		var options = "<option value=\"\">--��ѡ��--</option>";
		$("#queryCategoryLevel3").html(options);
	}
});

$(".checkApp").on("click",function(){
	var obj = $(this);
	var status = obj.attr("status");
	var vid = obj.attr("versionid");
	if(status == "1" && vid != "" && vid != null){//�����״̬�²ſ��Խ�����˲���
		window.location.href="check?aid="+ obj.attr("appinfoid") + "&vid="+ obj.attr("versionid");
	}else if(vid != "" || vid != null){
		alert("��APPӦ��û���ϴ����°汾,���ܽ�����˲�����");
	}else if(status != "1"){
		alert("��APPӦ�õ�״̬Ϊ����"+obj.attr("statusname")+"��,���ܽ�����˲�����");
	}
});



	
