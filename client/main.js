console.log("unido");

var socket= io.connect('http://IP:6677',{'forceNew':true});
socket.on('messages',function(data){
	console.log(data);
	render(data);
});
function render(data){
	var html= data.map(function(message,index){
		return (`
			<div class="message">
			<strong>${message.nickname}</strong> dice:
			<p>${message.text}</p>
			</div>
			`);
	}).join(' ');
	div_msj=document.getElementById('messages');
	div_msj.innerHTML=html;
	div_msj.scrollTop=div_msj.scrollHeight;
	
}
function addMessage(e){
	var message = {
		nickname: document.getElementById('nickname').value,
		text:document.getElementById('text').value,

	};
	document.getElementById('nickname').style.display='none';
	socket.emit('add-message',message);
	return false;
}