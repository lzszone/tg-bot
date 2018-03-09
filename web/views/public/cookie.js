        function setCookie(name,value) {       // 设置一个cookie  
       		var exp = new Date();  
       		exp.setTime(exp.getTime() + 3 * 24 * 60 * 60 * 1000); //3天过期  
       		document.cookie = name + "=" + encodeURIComponent(value) + ";expires=" + exp.toGMTString()+";path=/";  
       		return true;
        }  
/*       function getsec(str) {  
            var str1=str.substring(1,str.length)*1;  
            var str2=str.substring(0,1);  
            if (str2=="s") {  
                return str1*1000;  
            } else if (str2=="h") {  
                return str1*60*60*1000;  
            } else if (str2=="d") {  
                return str1*24*60*60*1000;  
            }  
        }  
 */ 
         
        function getCookie(name) {                  //获取一个cookie  
            var strCookie = document.cookie;  
            var arr = strCookie.split(';');  
            for (var i = 0; i < arr.length; i++) {  
               var t = arr[i].split("=");  
                if(t[0] == name) {  
                    return t[1];  
                }  
            };  
            return null;  
        }  
  
        function delCookie(name) {                   //删除一个cookie  
            var exp = new Date();  
            exp.setTime(exp.getTime() - 1);  
            var cval=getCookie(name);  
            if(cval!=null)  
            document.cookie= name + "="+cval+";expires="+exp.toUTCString();  
        }  
