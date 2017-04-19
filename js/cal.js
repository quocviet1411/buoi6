function tinh(t,a,b){
			var s=0;
			if(t.toString()=='/'&&b==0)
			{
				alert("Phải nhập b>0");
				$("#txtso_b").focus();
				$("#cmb").val("pt");
			}
			else
			switch (t.toString())
			{
			case '+' : {
				s=a+b;
				$("#ketqua").val(s);	
				break;
			}
			case '-' : {
				s=a-b;
				$("#ketqua").val(s);	
				break;
			}
			case '*' : {
				s=a*b;
				$("#ketqua").val(s);	
				break;
			}
			case '/' : {
				s=a/b;
				$("#ketqua").val(s);	
				break;
			}
			case 'pt' : {
				$("#ketqua").val('');	
				break;
			}
			default : {
			 
			}
			}
			}