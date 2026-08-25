(function(){
	function pad(n){ return n < 10 ? '0'+n : ''+n; }
	var ids = ['time_hour','time_minute','time_second','time_year','time_month','time_day'];
	function update(){
		var el = {}, ok = true;
		for(var i=0;i<ids.length;i++){
			el[ids[i]] = document.getElementById(ids[i]);
			if(!el[ids[i]]){ ok = false; break; }
		}
		if(!ok) return;
		var d = new Date();
		el.time_hour.textContent   = pad(d.getHours());
		el.time_minute.textContent = pad(d.getMinutes());
		el.time_second.textContent = pad(d.getSeconds());
		el.time_year.textContent   = d.getFullYear();
		el.time_month.textContent  = pad(d.getMonth()+1);
		el.time_day.textContent    = pad(d.getDate());
	}
	update();
	setInterval(update, 1000);
})();
