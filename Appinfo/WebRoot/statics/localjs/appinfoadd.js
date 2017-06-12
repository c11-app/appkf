$(function(){  
	//��̬��������ƽ̨�б�
	$.ajax({
		type:"GET",//��������
		url:"datadictionarylist.json",//�����url
		data:{tcode:"APP_FLATFORM"},//�������
		dataType:"json",//ajax�ӿڣ�����url�����ص���������
		success:function(data){//data���������ݣ�json����
			$("#flatformId").html("");
			var options = "<option value=\"\">--��ѡ��--</option>";
			for(var i = 0; i < data.length; i++){
				options += "<option value=\""+data[i].valueId+"\">"+data[i].valueName+"</option>";
			}
			$("#flatformId").html(options);
		},
		error:function(data){//������ʱ��404��500 �ȷ�200�Ĵ���״̬��
			alert("����ƽ̨�б�ʧ�ܣ�");
		}
	});  
	//��̬����һ�������б�
	$.ajax({
		type:"GET",//��������
		url:"categorylevellist.json",//�����url
		data:{pid:null},//�������
		dataType:"json",//ajax�ӿڣ�����url�����ص���������
		success:function(data){//data���������ݣ�json����
			$("#categoryLevel1").html("");
			var options = "<option value=\"\">--��ѡ��--</option>";
			for(var i = 0; i < data.length; i++){
				options += "<option value=\""+data[i].id+"\">"+data[i].categoryName+"</option>";
			}
			$("#categoryLevel1").html(options);
		},
		error:function(data){//������ʱ��404��500 �ȷ�200�Ĵ���״̬��
			alert("����һ�������б�ʧ�ܣ�");
		}
	});  
	//��̬���ض��������б�
	$("#categoryLevel1").change(function(){
		var categoryLevel1 = $("#categoryLevel1").val();
		if(categoryLevel1 != '' && categoryLevel1 != null){
			$.ajax({
				type:"GET",//��������
				url:"categorylevellist.json",//�����url
				data:{pid:categoryLevel1},//�������
				dataType:"json",//ajax�ӿڣ�����url�����ص���������
				success:function(data){//data���������ݣ�json����
					$("#categoryLevel2").html("");
					var options = "<option value=\"\">--��ѡ��--</option>";
					for(var i = 0; i < data.length; i++){
						options += "<option value=\""+data[i].id+"\">"+data[i].categoryName+"</option>";
					}
					$("#categoryLevel2").html(options);
				},
				error:function(data){//������ʱ��404��500 �ȷ�200�Ĵ���״̬��
					alert("���ض�������ʧ�ܣ�");
				}
			});
		}else{
			$("#categoryLevel2").html("");
			var options = "<option value=\"\">--��ѡ��--</option>";
			$("#categoryLevel2").html(options);
		}
		$("#categoryLevel3").html("");
		var options = "<option value=\"\">--��ѡ��--</option>";
		$("#categoryLevel3").html(options);
	});
	//��̬�������������б�
	$("#categoryLevel2").change(function(){
		var categoryLevel2 = $("#categoryLevel2").val();
		if(categoryLevel2 != '' && categoryLevel2 != null){
			$.ajax({
				type:"GET",//��������
				url:"categorylevellist.json",//�����url
				data:{pid:categoryLevel2},//�������
				dataType:"json",//ajax�ӿڣ�����url�����ص���������
				success:function(data){//data���������ݣ�json����
					$("#categoryLevel3").html("");
					var options = "<option value=\"\">--��ѡ��--</option>";
					for(var i = 0; i < data.length; i++){
						options += "<option value=\""+data[i].id+"\">"+data[i].categoryName+"</option>";
					}
					$("#categoryLevel3").html(options);
				},
				error:function(data){//������ʱ��404��500 �ȷ�200�Ĵ���״̬��
					alert("������������ʧ�ܣ�");
				}
			});
		}else{
			$("#categoryLevel3").html("");
			var options = "<option value=\"\">--��ѡ��--</option>";
			$("#categoryLevel3").html(options);
		}
	});
	
	$("#back").on("click",function(){
		window.location.href = "list";
	});
	
	$("#APKName").bind("blur",function(){
		//ajax��̨��֤--APKName�Ƿ��Ѵ���
		$.ajax({
			type:"GET",//��������
			url:"apkexist.json",//�����url
			data:{APKName:$("#APKName").val()},//�������
			dataType:"json",//ajax�ӿڣ�����url�����ص���������
			success:function(data){//data���������ݣ�json����
				if(data.APKName == "empty"){//����APKNameΪ�գ�������ʾ
					alert("APKNameΪ����Ϊ�գ�");
				}else if(data.APKName == "exist"){//�˺Ų����ã�������ʾ
					alert("��APKName�Ѵ��ڣ�����ʹ�ã�");
				}else if(data.APKName == "noexist"){//�˺ſ��ã���ȷ��ʾ
					alert("��APKName����ʹ�ã�");
				}
			},
			error:function(data){//������ʱ��404��500 �ȷ�200�Ĵ���״̬��
				alert("�������");
			}
		});
	});

});
      
      
      