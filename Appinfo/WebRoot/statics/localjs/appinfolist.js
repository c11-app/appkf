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


$(".addVersion").on("click",function(){
	var obj = $(this);
	window.location.href="appversionadd?id="+obj.attr("appinfoid");
});
$(".modifyVersion").on("click",function(){
	var obj = $(this);
	var status = obj.attr("status");
	var versionid = obj.attr("versionid");
	var appinfoid = obj.attr("appinfoid");
	if(status == "1" || status == "3"){//����ˡ����δͨ��״̬�²ſ��Խ����޸Ĳ���
		if(versionid == null || versionid == ""){
			alert("��APPӦ���ް汾��Ϣ���������Ӱ汾��Ϣ��");
		}else{
			window.location.href="appversionmodify?vid="+ versionid + "&aid="+ appinfoid;
		}
	}else{
		alert("��APPӦ�õ�״̬Ϊ����"+obj.attr("statusname")+"��,�����޸���汾��Ϣ��ֻ�ɽ��С������汾��������");
	}
});
$(".modifyAppInfo").on("click",function(){
	var obj = $(this);
	var status = obj.attr("status");
	if(status == "1" || status == "3"){//����ˡ����δͨ��״̬�²ſ��Խ����޸Ĳ���
		window.location.href="appinfomodify?id="+ obj.attr("appinfoid");
	}else{
		alert("��APPӦ�õ�״̬Ϊ����"+obj.attr("statusname")+"��,�����޸ģ�");
	}
});

$(document).on("click",".saleSwichOpen,.saleSwichClose",function(){
	var obj = $(this);
	var appinfoid = obj.attr("appinfoid");
	var saleSwitch = obj.attr("saleSwitch");
	if("open" === saleSwitch){
		saleSwitchAjax(appinfoid,obj);
	}else if("close" === saleSwitch){
		if(confirm("��ȷ��Ҫ�¼�����APPӦ�á�"+obj.attr("appsoftwarename")+"����")){
			saleSwitchAjax(appinfoid,obj);
		}
	}
});

var saleSwitchAjax = function(appId,obj){
	$.ajax({
		type:"PUT",
		url:appId+"/sale.json",
		dataType:"json",
		success:function(data){
			/*
			 * resultMsg:success/failed
			 * errorCode:exception000001
			 * appId:appId
			 * errorCode:param000001
			 */
			if(data.errorCode === '0'){
				if(data.resultMsg === "success"){//�����ɹ�
					if("open" === obj.attr("saleSwitch")){
						//alert("��ϲ������"+obj.attr("appsoftwarename")+"���ġ��ϼܡ������ɹ�");
						$("#appInfoStatus" + obj.attr("appinfoid")).html("���ϼ�");
						obj.className="saleSwichClose";
						obj.html("�¼�");
						obj.attr("saleSwitch","close");
						$("#appInfoStatus" + obj.attr("appinfoid")).css({
							'background':'green',
							'color':'#fff',
							'padding':'3px',
							'border-radius':'3px'
						});
						$("#appInfoStatus" + obj.attr("appinfoid")).hide();
						$("#appInfoStatus" + obj.attr("appinfoid")).slideDown(300);
					}else if("close" === obj.attr("saleSwitch")){
						//alert("��ϲ������"+obj.attr("appsoftwarename")+"���ġ��¼ܡ������ɹ�");
						$("#appInfoStatus" + obj.attr("appinfoid")).html("���¼�");
						obj.className="saleSwichOpem";
						obj.html("�ϼ�");
						obj.attr("saleSwitch","open");
						$("#appInfoStatus" + obj.attr("appinfoid")).css({
							'background':'red',
							'color':'#fff',
							'padding':'3px',
							'border-radius':'3px'
						});
						$("#appInfoStatus" + obj.attr("appinfoid")).hide();
						$("#appInfoStatus" + obj.attr("appinfoid")).slideDown(300);
					}
				}else if(data.resultMsg === "failed"){//ɾ��ʧ��
					if("open" === obj.attr("saleSwitch")){
						alert("��ϲ������"+obj.attr("appsoftwarename")+"���ġ��ϼܡ�����ʧ��");
					}else if("close" === obj.attr("saleSwitch")){
						alert("��ϲ������"+obj.attr("appsoftwarename")+"���ġ��¼ܡ�����ʧ��");
					}
				}
			}else{
				if(data.errorCode === 'exception000001'){
					alert("�Բ���ϵͳ�����쳣������ϵIT����Ա");
				}else if(data.errorCode === 'param000001'){
					alert("�Բ��𣬲������ִ����������ڽ��зǷ�����");
				}
			}
		},
		error:function(data){
			if("open" === obj.attr("saleSwitch")){
				alert("��ϲ������"+obj.attr("appsoftwarename")+"���ġ��ϼܡ������ɹ�");
			}else if("close" === obj.attr("saleSwitch")){
				alert("��ϲ������"+obj.attr("appsoftwarename")+"���ġ��¼ܡ������ɹ�");
			}
		}
	});
};



$(".viewApp").on("click",function(){
	var obj = $(this);
	window.location.href="appview/"+ obj.attr("appinfoid");
});

$(".deleteApp").on("click",function(){
	var obj = $(this);
	if(confirm("��ȷ��Ҫɾ��APPӦ�á�"+obj.attr("appsoftwarename")+"���������еİ汾��")){
		$.ajax({
			type:"GET",
			url:"delapp.json",
			data:{id:obj.attr("appinfoid")},
			dataType:"json",
			success:function(data){
				if(data.delResult == "true"){//ɾ���ɹ����Ƴ�ɾ����
					alert("ɾ���ɹ�");
					obj.parents("tr").remove();
				}else if(data.delResult == "false"){//ɾ��ʧ��
					alert("�Բ���ɾ��AAPӦ�á�"+obj.attr("appsoftwarename")+"��ʧ��");
				}else if(data.delResult == "notexist"){
					alert("�Բ���APPӦ�á�"+obj.attr("appsoftwarename")+"��������");
				}
			},
			error:function(data){
				alert("�Բ���ɾ��ʧ��");
			}
		});
	}
});

	
