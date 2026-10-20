document.addEventListener('DOMContentLoaded', function(){
  var burger = document.getElementById('burger');
  var nav = document.getElementById('mainnav');
  if(burger && nav){
    burger.addEventListener('click', function(){
      var open = nav.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
  var y = document.getElementById('yr'); if(y) y.textContent = new Date().getFullYear();

  var form = document.getElementById('quoteForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var msg = document.getElementById('formmsg');
      function val(id){ var el = document.getElementById(id); return el ? el.value.trim() : ''; }
      var name = val('f_name'), phone = val('f_phone'), loc = val('f_loc');
      msg.style.display = 'block';
      if(!name || !phone || !loc){
        msg.className = 'err'; msg.style.display='block';
        msg.textContent = 'Meherbani karke Name, Phone Number aur Property Location lazmi bharein.';
        msg.scrollIntoView({behavior:'smooth', block:'center'});
        return;
      }
      if(!/^[0-9+\-\s]{10,16}$/.test(phone)){
        msg.className = 'err';
        msg.textContent = 'Phone number durust likhein (kam az kam 10 hindsay).';
        msg.scrollIntoView({behavior:'smooth', block:'center'});
        return;
      }
      var lines = [
        'New Solar Quote Request (Website)',
        'Name: ' + name,
        'Phone: ' + phone,
        'Property Location: ' + loc,
        'Property Type: ' + val('f_type'),
        'Required Service: ' + val('f_service'),
        'Preferred System: ' + val('f_system'),
        'Estimated Capacity: ' + (val('f_capacity') || 'Not sure'),
        'Monthly Bill: ' + (val('f_bill') || 'Not provided'),
        'Additional Requirements: ' + (val('f_notes') || '-')
      ];
      var url = 'https://wa.me/923200147783?text=' + encodeURIComponent(lines.join('\n'));
      msg.className = '';
      msg.innerHTML = 'Shukriya, ' + name.replace(/</g,'') + '! Aap ki request tayyar hai. WhatsApp khul raha hai — wahan <b>Send</b> dabate hi aap ki quote request hum tak pohanch jayegi.';
      window.open(url, '_blank');
    });
  }
});
