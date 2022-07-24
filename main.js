let html = document.querySelector("#html")
let style = document.querySelector('#style')

let string = `/*你好呀!,嘻~嘻
接下来让你瞅瞅我这会写的代码
首先我准备一个div：*/
#div1{
    border:1px solid red;
    width:200px;
    height:200px;
    position: fixed;
    left:50%;
    transform:translateX(-50%);
    top:20px;
}
/*
接下来我们把div变成一个八卦
开始啦
首先，把div变成一个圆
*/
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
} 
/*
八卦讲的是一个阴阳————
一黑一白
*/
#div1{
    background:linear-gradient(90deg,rgba(255,255,255,1)0%,
    rgba(255,255,255,1) 50%,rgba(0,0,0,1)50%,rgba(0,0,0,1)100%);
}
#div1::before{
    content:'';
    display:block;
    position:absolute;
} 
#div1::after{
    content:'';
    display:block;
    position:absolute;
}
/*
接下来加两个哇呀呀逛逛岑魔法智慧球：
*/
#div1::before{
    width:100px;
    height:100px;
    top:0;
    left:50%;
    transform:translateX(-50%);
    background:#000;
    border-radius:50%;
    background:radial-gradient(circle,rgba(255,255,255,1)0%,rgba(255, 255,255,1)25%, rgba(0,0,0,1)25%,rgba(0,0,0,1)100%);
}
#div1::after{
    width:100px;
    height:100px;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    background:#fff;
    border-radius:50%;
    background:radial-gradient(circle,rgba(0,0,0,1)0%,rgba(0,0,0,1)25%,rgba(255,255,255,1)25%,rgba(255,255,255,1)100%,rgba(0,0,0,1)100%);
}
/*
OK初步八卦就先搞定啦
*/
`;

let string2 = "";

let n = 0;


let step = () => {
	setTimeout(() => {
		//判断string内容是哪个是空格
		if (string[n] === "\n") {
			string2 += "<br>";
		} else if (string[n] === " ") {
			string2 += "&nbsp;";
		} else {
			string2 += string[n];
		}

		if (n + 1 < string.length) {
			step()
			n += 1;
		}

		html.innerHTML = string2;
		style.innerHTML = string.substring(0, n);
		window.scrollTo(0, 9999);
		html.scrollTo(0, 9999)
	}, 50);

}
step();
