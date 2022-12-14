let UsernameSameCheck = {
	loginId : null,
	isCheck : 0
}

$("#btnUsernameSameCheck").click(() => {
	if ($("#userId").val() == "") {
		alert("아이디를 입력하여 주세요");
		return;
	} else {
		let userId = $("#userId").val();
		$.ajax("/checkId/" + userId, {
			type: "GET",
			dataType: "JSON",
		}).done((res) => {
			if (res.code == 1) {
				alert(res.message);
				UsernameSameCheck.loginId = $("#userId").val();
				UsernameSameCheck.isCheck = true;
			} else {
				alert(res.message);
				UsernameSameCheck.isCheck = false;
			}
		});
	}
});

$("#passwordConfirm").keyup((event) => {
	event.preventDefault();
	if ($("#password").val() != $("#passwordConfirm").val()) {
		$("#span_valcheck").css("visibility", "visible");
		$("#btnSave").attr(`disabled`, true);
	} else {
		$("#span_valcheck").css("visibility", "hidden");
		$("#btnSave").removeAttr(`disabled`);
	}
});


$("#btnSave").click(() => {
	if(UsernameSameCheck == 0){
		alert("아이디 중복 체크를 해주세요");
		return;
	}else if(UsernameSameCheck.loginId != $("#userId").val()){
		alert("회원가입을 진행할 유저의 아이디가 다릅니다. 진행 할 유저의 아이디 :" + UsernameSameCheck.loginId);
	}else{
		join();	
	}
});

	$('#etc').change(function() {
		var checked = $('#etc').is(':checked');

		if (checked)
			$('input:checkbox').prop('checked', true);
		else{
			$('input:checkbox').prop('checked', false);
		}
	});
	
	   //유효성겁사
	   function joinform_check() {
	        //변수에 담아주기
	        var userId = document.getElementById("userId");
	        var password = document.getElementById("password");
	        var username = document.getElementById("username");
	        var phonenumber = document.getElementById("phonenumber");
	        var email = $("#email").val();     
	     
	        //아이디 입력하지 않았을때
	        if ((userId.value) == ""){
	               alert("아이디를 입력하지 않았습니다.");
	               userId.focus();
	               return false;
	           }
	        
	     
	        //비밀번호
	        var pwdCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
	        
	        if (!pwdCheck.test(password.value)) {
	          alert("비밀번호는 영문자+숫자+특수문자 조합으로 8~25자리 사용해야 합니다.");
	          password.focus();
	          return false;
	        };
	        
	        
	        //이름 입력하지 않았을때
	        if ((username.value) == ""){
	             alert("이름을 입력하지 않았습니다.");
	             username.focus();
	             return false;
	         }
	        
	            
	        var reg = /^[0-9]+/g; //숫자만 입력하는 정규식
	        
	        //전화번호 입력하지 않았을때
	        if ((phonenumber.value) == ""){
	               alert("전화번호를 입력하지 않았습니다.");
	               phonenumber.focus();
	               return false;
	           }
	        
	        //전화번호 유효성
	        if (!reg.test(phonenumber.value)) {
	          alert("전화번호는 숫자만 입력할 수 있습니다.");
	          phonenumber.focus();
	          return false;
	        }
	        
	        
	        //이메일 유효성 검사
	        var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
	     
	        if (email.match(regExp) != null) {           
	           }
	           else {
	             alert("이메일 형식으로 입력해야 합니다.");
	             return false;
	           }

	   
	   }